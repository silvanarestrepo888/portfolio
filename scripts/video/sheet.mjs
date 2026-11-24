import sharp from 'sharp'; import fs from 'fs'; import path from 'path';
const [dir, out] = process.argv.slice(2);
const files = fs.readdirSync(dir).filter(f=>f.endsWith('.jpg')).sort();
const cols = 6, w = 320;
const metas = await Promise.all(files.map(f=>sharp(path.join(dir,f)).metadata()));
const h = Math.round(metas[0].height * w / metas[0].width) + 24;
const rows = Math.ceil(files.length/cols);
const comps = [];
for (let i=0;i<files.length;i++){ const x=(i%cols)*w, y=Math.floor(i/cols)*h;
  comps.push({input: await sharp(path.join(dir,files[i])).resize(w).toBuffer(), left:x, top:y+24});
  comps.push({input: Buffer.from(`<svg width="${w}" height="24"><rect width="100%" height="100%" fill="#fff"/><text x="6" y="17" font-size="15" font-family="Helvetica">${files[i].slice(1,-4)}s</text></svg>`), left:x, top:y});
}
await sharp({create:{width:cols*w,height:rows*h,channels:3,background:'#fff'}}).composite(comps).jpeg({quality:80}).toFile(out);
console.log(out, files.length);
