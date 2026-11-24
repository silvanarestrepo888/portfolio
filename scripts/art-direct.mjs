// Generates pre-cropped, colour-graded editorial derivatives from
// docs/art-direction/crops.json → public/art/{projects,snippets}/<slug>.jpg
// plus a QA contact sheet at docs/art-direction/crops-rendered.jpg.
//
//   node scripts/art-direct.mjs
//
// The house grade (§5.7 of the spec) is applied identically to every image so
// 14 projects from 6 countries read as one body of work: a touch less
// saturation, a slightly warm white point, gentle contrast. Subtle on purpose.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const spec = JSON.parse(fs.readFileSync(path.join(root, 'docs/art-direction/crops.json'), 'utf8'));
const MAX_W = 2400;

export function houseGrade(img) {
  return img
    .modulate({ saturation: 0.9 })
    .recomb([
      [1.025, 0, 0],
      [0, 1.0, 0],
      [0, 0, 0.965],
    ])
    .linear(1.04, -4);
}

const outputs = [];
for (const group of [spec.projects, spec.snippets]) {
  const [rw, rh] = group.ratio.split(':').map(Number);
  const ratio = rw / rh;
  fs.mkdirSync(path.join(root, group.outDir), { recursive: true });
  for (const item of group.items) {
    const src = path.join(root, item.source);
    const meta = await sharp(src).metadata();
    const W = meta.width, H = meta.height;
    const [l, t, , h] = item.crop;
    const top = Math.round(t * H);
    const height = Math.min(Math.round(h * H), H - top);
    let width = Math.round(height * ratio);
    let left = Math.round(l * W);
    if (left + width > W) left = Math.max(0, W - width);
    if (width > W) throw new Error(`${item.slug}: crop wider than source`);
    const got = width / height;
    if (Math.abs(got - ratio) / ratio > 0.005) throw new Error(`${item.slug}: ratio ${got}`);
    const outW = Math.min(width, MAX_W);
    const out = path.join(root, group.outDir, `${item.slug}.jpg`);
    await houseGrade(
      sharp(src).extract({ left, top, width, height }).resize({ width: outW, withoutEnlargement: true })
    )
      .toColourspace('srgb')
      .jpeg({ quality: 86, mozjpeg: true, progressive: true })
      .toFile(out);
    outputs.push({ out, slug: item.slug, w: outW, h: Math.round(outW / ratio), flag: item.flag });
    console.log(`${item.slug.padEnd(18)} ${outW}×${Math.round(outW / ratio)}${item.flag ? '   ⚑ ' + item.flag : ''}`);
  }
}

// QA contact sheet
const cell = 400, pad = 12, cols = 4;
const rows = Math.ceil(outputs.length / cols);
const tiles = await Promise.all(
  outputs.map(async (o, i) => ({
    input: await sharp(o.out).resize({ width: cell, height: Math.round(cell / 1.6), fit: 'contain', background: '#ffffff' }).toBuffer(),
    left: pad + (i % cols) * (cell + pad),
    top: pad + Math.floor(i / cols) * (Math.round(cell / 1.6) + pad),
  }))
);
await sharp({ create: { width: pad + cols * (cell + pad), height: pad + rows * (Math.round(cell / 1.6) + pad), channels: 3, background: '#ffffff' } })
  .composite(tiles)
  .jpeg({ quality: 80 })
  .toFile(path.join(root, 'docs/art-direction/crops-rendered.jpg'));
console.log('contact sheet → docs/art-direction/crops-rendered.jpg');
