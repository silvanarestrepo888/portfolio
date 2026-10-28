const { chromium } = require('playwright');

const SPEC = [
  { num: '01', title: 'Road to AI', subtitle: 'The technology is ready. The question is whether your data, your processes, and your people are.',
    description: 'I map the hidden dependencies before a single model is deployed: who decides, who resists, what process breaks when the algorithm goes live. Then I design the system that holds.',
    demand: "Adoption isn't a technology problem. It's a design problem.",
    tags: ['AI Maturity', 'System Architecture', 'Org Design'] },
  { num: '02', title: 'Experience Systems Design', subtitle: 'Unifying every touchpoint into a single coherent system',
    description: "Your app says one thing, your store another, your support team a third. The customer doesn't see three channels — they see one broken promise. Systems thinking closes the gap: one experience architecture, every surface, one coherent conversation.",
    demand: "Consistency isn't a guideline. It's a system.",
    tags: ['Experience Architecture', 'Phygital Design', 'Brand Architecture'] },
  { num: '03', title: 'Agentic Organizations', subtitle: 'Designing the operating model where humans and AI compose',
    description: "The operating model comes first. Before any model runs, I design the handoffs: what stays human, what the machine owns, the rituals that keep both sides accountable. Precision where it counts. Judgment where it matters.",
    demand: 'The technology is easy. The organization is the real design problem.',
    tags: ['Agentic Architecture', 'Human-AI Workflows', 'Org Operating Models'] },
  { num: '04', title: 'Customer Intelligence Platforms', subtitle: 'Reading the signals most platforms miss',
    description: "I design intelligence systems that capture the patterns behind the patterns: cultural context, behavioral nuance, the expectations customers can't articulate. The platform learns. It learns the right things, because the architecture was designed by someone who reads both the data and the human behind it.",
    demand: 'The platform is the tool. Anthropology is the lens.',
    tags: ['Behavioral Intelligence', 'Platform Design', 'Cultural Analytics'] },
  { num: '05', title: 'Venture Design', subtitle: "Finding the condition every competitor is standing on, and removing it",
    description: "Every competitor optimizes what they already know how to build. I go after the one assumption they're all standing on without knowing it. Remove it, and the capability race stops mattering, because the ground already moved.",
    demand: "What survives is never a product. It's a position.",
    tags: ['Positioning Strategy', 'Business Design', 'Competitive Strategy'] },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const url = process.argv[2] || 'http://localhost:3461';
  console.log(`Loading ${url}...`);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  // Scroll to services
  await page.evaluate(() => { const s = document.getElementById('services'); if (s) s.scrollIntoView({ behavior: 'instant' }); });
  await page.waitForTimeout(1000);

  const buttons = await page.$$('[aria-expanded]');
  console.log(`Accordion buttons: ${buttons.length}\n`);

  const extracted = [];

  for (let i = 0; i < buttons.length; i++) {
    const btns = await page.$$('[aria-expanded]');
    if (i >= btns.length) break;
    const btn = btns[i];

    const btnText = await btn.evaluate(el => el.textContent.trim());

    await btn.click();
    await page.waitForTimeout(1500);

    const visibleText = await page.evaluate(() => {
      const expanded = document.querySelector('[aria-expanded="true"]');
      if (!expanded) return '';
      let el = expanded.parentElement;
      for (let j = 0; j < 5 && el; j++) {
        if (el.textContent.length > 150) break;
        el = el.parentElement;
      }
      return el ? el.textContent.trim() : '';
    });

    console.log(`\n=== SERVICE ${i + 1} ===`);
    console.log(`BTN_TEXT: ${btnText.substring(0, 300)}`);
    console.log(`VISIBLE:  ${visibleText.substring(0, 600)}`);

    extracted.push({ num: i + 1, btnText, visibleText });

    await btn.click();
    await page.waitForTimeout(300);
  }

  // QA against spec
  console.log('\n\n========== QA1 SERVICES — DOM vs SPEC ==========\n');
  let allPass = true;

  for (const svc of SPEC) {
    const dom = extracted[parseInt(svc.num) - 1];
    console.log(`--- ${svc.num}. ${svc.title} ---`);

    const titleOk = dom.btnText.includes(svc.title);
    console.log(`  title: ${titleOk ? '✅' : '❌'} "${svc.title}"`);

    const subtitleOk = dom.btnText.includes(svc.subtitle);
    console.log(`  subtitle: ${subtitleOk ? '✅' : '❌'} "${svc.subtitle}"`);

    const descOk = dom.visibleText.includes(svc.description);
    console.log(`  description: ${descOk ? '✅' : '❌'}`);

    const demandOk = dom.visibleText.includes(svc.demand);
    console.log(`  demand: ${demandOk ? '✅' : '❌'} "${svc.demand}"`);

    for (const tag of svc.tags) {
      const tagOk = dom.visibleText.includes(tag);
      console.log(`  tag "${tag}": ${tagOk ? '✅' : '❌'}`);
      if (!tagOk) allPass = false;
    }

    if (!descOk) {
      console.log(`  EXPECTED: "${svc.description.substring(0, 120)}..."`);
      console.log(`  GOT:      "${dom.visibleText.substring(0, 250)}"`);
    }

    const svcOk = titleOk && subtitleOk && descOk && demandOk && svc.tags.every(t => dom.visibleText.includes(t));
    console.log(`  SERVICE ${svc.num}: ${svcOk ? '✅ ALL' : '❌ FAIL'}`);
    if (!svcOk) allPass = false;
  }

  console.log(`\n========== RESULT: ${allPass ? '✅ 5/5 SERVICES PASS QA1' : '❌ FAILURES DETECTED'} ==========`);
  process.exit(allPass ? 0 : 1);
})();