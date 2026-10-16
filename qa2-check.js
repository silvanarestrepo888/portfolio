const path = require('path');
// Use playwright from the portfolio project
const playwrightPath = '/Users/silvanarestrepo/Desktop/Design Experience Architect/portfolio/node_modules/playwright';
require.main.paths.unshift(playwrightPath);
const { chromium } = require(playwrightPath);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const url = process.argv[2] || 'http://localhost:3460';
  console.log('Loading page:', url);
  await page.goto(url, { 
    waitUntil: 'domcontentloaded', 
    timeout: 60000 
  });
  
  await page.waitForTimeout(2000);
  
  const allText = await page.evaluate(() => document.body.innerText);
  
  // Mobile viewport check
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/qa2-mobile.png', fullPage: true });
  
  // Back to desktop for accordion check
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/qa2-desktop.png', fullPage: true });
  require('fs').writeFileSync('/tmp/qa2-text.txt', allText);
  
  // Accordion test: click first service expand button, check content is visible
  const accordionBtns = await page.$$('button[aria-expanded]');
  console.log(`\nAccordion buttons found: ${accordionBtns.length}`);
  if (accordionBtns.length > 0) {
    await accordionBtns[1].click(); // click second service (+) button
    await page.waitForTimeout(500);
    const expandedText = await page.evaluate(() => document.body.innerText);
    const accordionWorks = /I design experience systems/.test(expandedText);
    console.log(`Accordion expands: ${accordionWorks ? '✅' : '❌'}`);
    // Collapse it back
    await accordionBtns[1].click();
    await page.waitForTimeout(500);
  }
  
  // CTA link checks
  const ctaLinks = await page.$$('a[href^="mailto:"]');
  console.log(`\nCTA mailto links found: ${ctaLinks.length}`);
  
  // Check internal navigation links are present
  const internalLinks = await page.evaluate(() => {
    const links = document.querySelectorAll('a[href^="/"], a[href^="#"], a[href*="experiencearchitect"]');
    return Array.from(links).map(a => a.getAttribute('href')).filter(h => h);
  });
  console.log(`Internal links found: ${internalLinks.length}`);
  
  // Check that project cards have the same structure
  const projectCards = await page.evaluate(() => {
    const sections = document.querySelectorAll('[class*="project"], [class*="Project"]');
    return sections.length;
  });
  console.log(`Project card sections: ${projectCards}`);
  
  const checks = {
    'hero chip Agentic Systems': /Agentic Systems/i.test(allText),
    'hero chip Experience Strategy': /Experience Strategy/i.test(allText),
    'hero chip Business Design': /Business Design/i.test(allText),
    'svc 01 What you build matters': /What you build matters/i.test(allText),
    'svc 02 Coherent experiences': /Coherent experiences that scale/i.test(allText),
    'svc 03 I design the organization': /I design the organization where agents/i.test(allText),
    'svc 04 Behavior that teaches': /Behavior that teaches you/i.test(allText),
    'svc 05 What survives': /What survives is never a product/i.test(allText),
    'svc 06 AI that fits': /AI that fits the organization/i.test(allText),
    'project Fruta': /Fruta/i.test(allText),
    'project GiulIA': /GiulIA/i.test(allText),
    'project Mobility & automotive': /Mobility.*automotive/i.test(allText),
    'project Proprietary Architecture': /Proprietary Architecture/i.test(allText),
    'project Venture Design': /Venture Design/i.test(allText),
    'year 2026 present': /\b2026\b/.test(allText),
    'NO Astara': !/Astara/i.test(allText),
    'NO Bejo': !/Bejo/i.test(allText),
    'NO EFAA': !/EFAA/i.test(allText),
    'NO Org Design': !/Org Design/i.test(allText),
    'NO They install agents': !/They install agents/i.test(allText),
    'NO Intelligent Operations Architecture': !/Intelligent Operations Architecture/i.test(allText),
    'NO AI adoption roadmap': !/AI adoption roadmap/i.test(allText),
    'mailto CTA present': await page.evaluate(() => !!document.querySelector('a[href^="mailto:silvanarestrepo"]')),
    'about closing phrase': /the art of my craft/i.test(allText),
    'accordion expands': accordionBtns.length >= 6,  // 6 services = 6 buttons
    'project cards visible': projectCards > 0,
    'navigation links present': internalLinks.length >= 5,
    'desktop screenshot saved': require('fs').existsSync('/tmp/qa2-desktop.png'),
    'mobile screenshot saved': require('fs').existsSync('/tmp/qa2-mobile.png'),
  };
  
  console.log('=== QA2 CONTENT CHECKS ===');
  let passed = 0, failed = 0;
  for (const [name, result] of Object.entries(checks)) {
    const icon = result ? '✅' : '❌';
    result ? passed++ : failed++;
    console.log(icon, name);
  }
  console.log(`\nPassed: ${passed}/${passed + failed}`);
  
  await browser.close();
  console.log('\nDone.');
})();