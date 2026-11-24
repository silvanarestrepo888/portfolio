// avtool.swift — web video derivatives using macOS AVFoundation (no ffmpeg needed).
//
//   swift scripts/video/avtool.swift info   <in>
//   swift scripts/video/avtool.swift frames <in> <outDir> <everySeconds> [width]
//   swift scripts/video/avtool.swift encode <in> <out> <start> <duration|0=to end>
//                                    <cropX> <cropY> <cropW> <cropH> <outW> <kbps> <audio 0|1>
//
// encode: crops (source pixels), scales to outW (never upscales), H.264 High,
// fast-start MP4. Audio is AAC 128k when requested and present.

import AVFoundation
import AppKit
import CoreImage

func fail(_ m: String) -> Never { FileHandle.standardError.write((m + "\n").data(using: .utf8)!); exit(1) }

let args = CommandLine.arguments
guard args.count >= 3 else { fail("usage: info|frames|encode …") }
let mode = args[1]
let asset = AVURLAsset(url: URL(fileURLWithPath: args[2]))

func videoTrack() -> AVAssetTrack {
  let sem = DispatchSemaphore(value: 0); var t: AVAssetTrack?
  Task { t = try? await asset.loadTracks(withMediaType: .video).first; sem.signal() }
  sem.wait(); guard let tr = t else { fail("no video track") }; return tr
}
func audioTrack() -> AVAssetTrack? {
  let sem = DispatchSemaphore(value: 0); var t: AVAssetTrack?
  Task { t = try? await asset.loadTracks(withMediaType: .audio).first; sem.signal() }
  sem.wait(); return t
}
func duration() -> Double {
  let sem = DispatchSemaphore(value: 0); var d = CMTime.zero
  Task { d = (try? await asset.load(.duration)) ?? .zero; sem.signal() }
  sem.wait(); return d.seconds
}
func props(_ t: AVAssetTrack) -> (CGSize, CGAffineTransform, Float) {
  let sem = DispatchSemaphore(value: 0); var s = CGSize.zero; var x = CGAffineTransform.identity; var f: Float = 30
  Task { s = (try? await t.load(.naturalSize)) ?? .zero; x = (try? await t.load(.preferredTransform)) ?? .identity; f = (try? await t.load(.nominalFrameRate)) ?? 30; sem.signal() }
  sem.wait(); return (s, x, f)
}

switch mode {
case "info":
  let (s, x, f) = props(videoTrack())
  print("size=\(Int(s.width))x\(Int(s.height)) fps=\(f) dur=\(String(format: "%.2f", duration())) transformIdentity=\(x.isIdentity) audio=\(audioTrack() != nil)")

case "frames":
  let outDir = args[3]; let every = Double(args[4]) ?? 1; let w = args.count > 5 ? Double(args[5])! : 480
  try? FileManager.default.createDirectory(atPath: outDir, withIntermediateDirectories: true)
  let gen = AVAssetImageGenerator(asset: asset)
  gen.appliesPreferredTrackTransform = true
  gen.requestedTimeToleranceBefore = .zero; gen.requestedTimeToleranceAfter = .zero
  gen.maximumSize = CGSize(width: w, height: w)
  var t = 0.0; let d = duration()
  while t < d {
    if let cg = try? gen.copyCGImage(at: CMTime(seconds: t, preferredTimescale: 600), actualTime: nil) {
      let rep = NSBitmapImageRep(cgImage: cg)
      let data = rep.representation(using: .jpeg, properties: [.compressionFactor: 0.8])!
      try! data.write(to: URL(fileURLWithPath: String(format: "%@/t%06.2f.jpg", outDir, t)))
    }
    t += every
  }
  print("frames written to \(outDir)")

case "encode":
  guard args.count >= 13 else { fail("encode needs 11 params") }
  let out = URL(fileURLWithPath: args[3])
  let start = Double(args[4])!; var dur = Double(args[5])!
  let cx = Double(args[6])!, cy = Double(args[7])!, cw = Double(args[8])!, ch = Double(args[9])!
  var ow = Double(args[10])!; let kbps = Double(args[11])!; let wantAudio = args[12] == "1"
  if dur <= 0 { dur = duration() - start }
  if ow > cw { ow = cw }                         // never upscale
  var oh = (ch * ow / cw).rounded(); if Int(oh) % 2 == 1 { oh -= 1 }
  ow = (ow / 2).rounded(.down) * 2
  let scale = ow / cw

  let vt = videoTrack(); let (_, pref, fps) = props(vt)
  if !pref.isIdentity { fail("non-identity transform not supported") }
  let range = CMTimeRange(start: CMTime(seconds: start, preferredTimescale: 600), duration: CMTime(seconds: dur, preferredTimescale: 600))

  let comp = AVMutableVideoComposition()
  comp.renderSize = CGSize(width: ow, height: oh)
  comp.frameDuration = CMTime(value: 1, timescale: CMTimeScale(max(24, min(30, fps.rounded()))))
  let ins = AVMutableVideoCompositionInstruction()
  ins.timeRange = CMTimeRange(start: .zero, duration: CMTime(seconds: duration() + 1, preferredTimescale: 600))
  let li = AVMutableVideoCompositionLayerInstruction(assetTrack: vt)
  li.setTransform(CGAffineTransform(translationX: -cx, y: -cy).concatenating(CGAffineTransform(scaleX: scale, y: scale)), at: .zero)
  ins.layerInstructions = [li]
  comp.instructions = [ins]

  let reader = try! AVAssetReader(asset: asset)
  reader.timeRange = range
  let vOut = AVAssetReaderVideoCompositionOutput(videoTracks: [vt], videoSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA])
  vOut.videoComposition = comp
  reader.add(vOut)
  var aOut: AVAssetReaderTrackOutput?
  if wantAudio, let at = audioTrack() {
    let o = AVAssetReaderTrackOutput(track: at, outputSettings: [AVFormatIDKey: kAudioFormatLinearPCM])
    reader.add(o); aOut = o
  }

  try? FileManager.default.removeItem(at: out)
  let writer = try! AVAssetWriter(outputURL: out, fileType: .mp4)
  writer.shouldOptimizeForNetworkUse = true
  let vIn = AVAssetWriterInput(mediaType: .video, outputSettings: [
    AVVideoCodecKey: AVVideoCodecType.h264,
    AVVideoWidthKey: ow, AVVideoHeightKey: oh,
    AVVideoCompressionPropertiesKey: [
      AVVideoAverageBitRateKey: kbps * 1000,
      AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
      AVVideoMaxKeyFrameIntervalKey: 60,
      AVVideoAllowFrameReorderingKey: true,
    ],
  ])
  vIn.expectsMediaDataInRealTime = false
  writer.add(vIn)
  var aIn: AVAssetWriterInput?
  if aOut != nil {
    let i = AVAssetWriterInput(mediaType: .audio, outputSettings: [AVFormatIDKey: kAudioFormatMPEG4AAC, AVNumberOfChannelsKey: 2, AVSampleRateKey: 44100, AVEncoderBitRateKey: 128000])
    writer.add(i); aIn = i
  }
  guard reader.startReading() else { fail("reader: \(String(describing: reader.error))") }
  writer.startWriting()
  writer.startSession(atSourceTime: range.start)

  let group = DispatchGroup()
  func pump(_ input: AVAssetWriterInput, _ output: AVAssetReaderOutput, _ q: String) {
    group.enter()
    input.requestMediaDataWhenReady(on: DispatchQueue(label: q)) {
      while input.isReadyForMoreMediaData {
        if let sb = output.copyNextSampleBuffer() { input.append(sb) }
        else { input.markAsFinished(); group.leave(); return }
      }
    }
  }
  pump(vIn, vOut, "v")
  if let a = aIn, let o = aOut { pump(a, o, "a") }
  group.wait()
  let sem = DispatchSemaphore(value: 0)
  writer.finishWriting { sem.signal() }
  sem.wait()
  if writer.status != .completed { fail("writer: \(String(describing: writer.error))") }
  let size = (try? FileManager.default.attributesOfItem(atPath: out.path)[.size] as? Int) ?? 0
  print("wrote \(out.lastPathComponent) \(Int(ow))x\(Int(oh)) \(String(format: "%.1f", dur))s \(String(format: "%.2f", Double(size) / 1_048_576)) MB")

default: fail("unknown mode")
}
