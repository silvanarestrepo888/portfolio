// Acceptance QA (docs/art-direction/SPEC.md §11).
//   node scripts/qa/shoot.mjs [baseUrl] [outDir]
// Chromium for layout/type/image checks + screenshots; WebKit for video
// (Playwright's Chromium has no H.264).
import { chromium, webkit } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const base = process.argv[2] || 'http://localhost:3002';
const out = process.argv[3] || 'docs/art-direction/qa/after';
const WIDTHS = [375, 768, 1024, 1280, 1440, 1920];
const SECTIONS = ['hero', 'about', 'projects', 'project-snippets', 'services', 'experience', 'contact'];
const results = [];
const fail = (w, msg) => results.push({ w, ok: false, msg });
const pass = (w, msg) => results.push({ w, ok: true, msg });

const browser = await chromium.launch();
for (const w of WIDTHS) {
  const dir = path.join(out, String(w));
  fs.mkdirSync(dir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  const errors = [];
  const bad = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('response', (r) => r.status() >= 400 && bad.push(`${r.status()} ${r.url()}`));
  await page.goto(base, { waitUntil: 'networkidle' });
  // Reveal everything, load lazy images
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    document.querySelectorAll('.ea-reveal').forEach((e) => e.classList.add('is-in'));
  });
  await page.waitForTimeout(900);
  await page.screenshot({ path: path.join(dir, 'full.jpg'), fullPage: true, quality: 70, type: 'jpeg' });
  for (const id of SECTIONS) {
    const el = await page.$(`#${id}`);
    if (el) await el.screenshot({ path: path.join(dir, `${id}.jpg`), quality: 70, type: 'jpeg' }).catch(() => {});
  }

  const r = await page.evaluate(() => {
    const o = {};
    o.overflow = document.documentElement.scrollWidth - window.innerWidth;
    const texts = [];
    const walker = document.createTreeWalker(document.querySelector('main').parentElement, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const n = walker.currentNode;
      if (!n.textContent.trim()) continue;
      const el = n.parentElement;
      if (el.closest('.ea-sr-only, [hidden], .ea-skip, nextjs-portal')) continue;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      texts.push({ t: n.textContent.trim().slice(0, 30), fs: parseFloat(cs.fontSize), ff: cs.fontFamily.split(',')[0], fw: cs.fontWeight });
    }
    o.small = texts.filter((t) => t.fs < 12);
    o.faces = [...new Set(texts.map((t) => `${/ormorant/i.test(t.ff) ? 'Cormorant' : /nter/i.test(t.ff) ? 'Inter' : t.ff} ${t.fw}`))];
    o.imgs = [...document.querySelectorAll('#projects img, #project-snippets img')].map((img) => {
      const frame = img.parentElement.getBoundingClientRect();
      return {
        src: img.currentSrc.slice(-60),
        nat: img.naturalWidth,
        fit: getComputedStyle(img).objectFit,
        ratio: +(frame.width / frame.height).toFixed(3),
        density: frame.width ? +(img.naturalWidth / frame.width).toFixed(2) : 0,
      };
    });
    const nav = document.querySelector('.ea-nav').getBoundingClientRect();
    o.navOff = Math.abs(nav.left - (window.innerWidth - nav.right));
    const pads = [...document.querySelectorAll('.ea-section')].map((s) => `${s.id}:${getComputedStyle(s).paddingBottom}`);
    o.pads = pads;
    o.headerEdges = [...document.querySelectorAll('.ea-section-header')].map((h) => Math.round(h.getBoundingClientRect().left));
    return o;
  });

  r.overflow > 0 ? fail(w, `horizontal overflow ${r.overflow}px`) : pass(w, 'no horizontal overflow');
  r.small.length ? fail(w, `text < 12px: ${JSON.stringify(r.small.slice(0, 5))}`) : pass(w, 'no text < 12px');
  const allowed = ['Cormorant 300', 'Cormorant 400', 'Inter 400', 'Inter 500'];
  const off = r.faces.filter((f) => !allowed.includes(f));
  off.length ? fail(w, `font faces outside system: ${off}`) : pass(w, `faces ${r.faces.join(', ')}`);
  for (const im of r.imgs) {
    if (!im.nat) fail(w, `image not loaded ${im.src}`);
    if (im.fit !== 'cover') fail(w, `object-fit ${im.fit} ${im.src}`);
    if (Math.abs(im.ratio - 1.6) > 0.016 && Math.abs(im.ratio - 1.333) > 0.014) fail(w, `frame ratio ${im.ratio} ${im.src}`);
    if (im.density < 1.5) results.push({ w, ok: true, msg: `low density ${im.density}x ${im.src} (logged, not failing)` });
  }
  r.navOff > 1 ? fail(w, `nav off-centre ${r.navOff}px`) : pass(w, 'nav centred');
  const edges = [...new Set(r.headerEdges)];
  edges.length > 1 ? fail(w, `header left edges differ: ${edges}`) : pass(w, `header edge ${edges}`);
  pass(w, `section padding-bottom ${r.pads.join(' ')}`);
  errors.length ? fail(w, `console errors: ${errors.slice(0, 3).join(' | ')}`) : pass(w, 'no console errors');
  const b = bad.filter((u) => !u.includes('favicon'));
  b.length ? fail(w, `HTTP errors: ${b.slice(0, 5).join(' | ')}`) : pass(w, 'no 4xx/5xx');
  const mp4 = bad.concat().filter((u) => /\/projects\/.*\.mp4/.test(u));
  if (mp4.length) fail(w, 'raw /projects mp4 requested');
  await page.close();
}

// Behaviour (desktop)
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.locator('#projects').scrollIntoViewIfNeeded();
  const t0 = await page.textContent('.ea-proj__title');
  await page.waitForTimeout(10000);
  const t1 = await page.textContent('.ea-proj__title');
  t0 === t1 ? pass(1440, 'no autoplay over 10s') : fail(1440, 'carousel advanced on its own');
  await page.click('[aria-label="Next project"]');
  (await page.textContent('.ea-proj__counter')).includes('02') ? pass(1440, 'next works') : fail(1440, 'next broken');
  await page.click('button[aria-pressed]:has-text("DESIGN OPS")');
  const n = await page.textContent('.ea-proj__counter');
  /01 \/ 01/.test(n) ? pass(1440, 'filter works (Design Ops → 1)') : fail(1440, `filter counter ${n}`);
  await page.click('button[aria-pressed]:has-text("ALL WORK")');
  const seen = [];
  await page.click('.ea-proj__cta');
  for (let i = 0; i < 6; i++) {
    await page.waitForSelector('.ea-case');
    seen.push(await page.textContent('.ea-case__title'));
    await page.click('.ea-case__next button');
  }
  new Set(seen).size === 6 ? pass(1440, 'all 6 case studies open and Next cycles') : fail(1440, `case cycle ${seen}`);
  await page.keyboard.press('Escape');
  (await page.$('.ea-case')) ? fail(1440, 'Esc did not close case study') : pass(1440, 'Esc closes case study');
  await page.locator('#services').scrollIntoViewIfNeeded();
  const btn = page.locator('.ea-svc__header').first();
  await btn.click();
  (await btn.getAttribute('aria-expanded')) === 'true' ? pass(1440, 'accordion opens') : fail(1440, 'accordion');
  await btn.click();
  (await btn.getAttribute('aria-expanded')) === 'false' ? pass(1440, 'accordion closes') : fail(1440, 'accordion close');
  await page.close();
}
await browser.close();

// Video (WebKit has H.264)
let wk = null;
try { wk = await webkit.launch(); } catch { results.push({ w: '-', ok: true, msg: 'WebKit not installed — video checks run in the browser pane instead' }); }
if (wk) {
for (const w of [1440, 375]) {
  const page = await wk.newPage({ viewport: { width: w, height: 900 } });
  await page.goto(base, { waitUntil: 'load' });
  await page.locator('#projects .ea-proj__media').scrollIntoViewIfNeeded();
  await page.waitForTimeout(3500);
  const v = await page.evaluate(() => {
    const el = document.querySelector('#projects video');
    return el ? { paused: el.paused, t: el.currentTime, src: el.currentSrc } : null;
  });
  v && !v.paused && v.t > 0.5 && v.src.includes('/art/video/') ? pass(w, `Kayanee loop plays (${v.t.toFixed(1)}s)`) : fail(w, `loop not playing ${JSON.stringify(v)}`);
  await page.close();
}
{
  const ctx = await wk.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(base, { waitUntil: 'load' });
  await page.locator('#projects .ea-proj__media').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);
  const paused = await page.evaluate(() => document.querySelector('#projects video')?.paused ?? true);
  paused ? pass(1440, 'reduced motion → no video') : fail(1440, 'video plays under reduced motion');
  await ctx.close();
}
await wk.close();
}

const fails = results.filter((r) => !r.ok);
fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify(results, null, 2));
for (const r of results) console.log(`${r.ok ? '✅' : '❌'} [${r.w}] ${r.msg}`);
console.log(`\n${fails.length} failing check(s)`);
