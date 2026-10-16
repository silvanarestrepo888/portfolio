const { chromium } = require('playwright');

const SPEC = [
  { num: '01', title: 'Accelerated Product Innovation', subtitle: 'Designing how ideas become products, faster',
    description: 'I design the architecture behind product innovation — the method, the sequence, the prototypes that test conviction before scale. AI shortens the iteration loop, but the craft is knowing what to build first.',
    demand: 'What you build matters. What you build first matters more.',
    tags: ['Innovation Sprints', 'Rapid Prototyping', 'Go-to-Market'] },
  { num: '02', title: 'Experience Orchestration', subtitle: 'Unified experience architectures that scale without losing soul',
    description: "I design experience systems where every touchpoint — digital, physical, hybrid — feels like one conversation. Not seamlessness for its own sake. Coherence: the brand's logic holding across every surface.",
    demand: 'Coherent experiences that scale without losing soul.',
    tags: ['Systems Thinking', 'Brand Architecture', 'Omnichannel'] },
  { num: '03', title: 'Road to AI', subtitle: 'I design the organization where agents make sense.',
    description: "I don't deliver an AI roadmap. I deliver the route — reading who decides, what judgment stays human, where agents amplify rather than disrupt. One real agent, working on real documents, in weeks. Then the capacity to build the next one without me.",
    demand: 'AI that fits the organization, not the other way around.',
    tags: ['Agentic Architecture', 'Systemic Design', 'Human-AI Workflow'] },
  { num: '04', title: 'Customer Intelligence Platforms', subtitle: 'Reading what customers do, not what they say',
    description: "I design intelligence systems that capture actual behavior — what people choose, abandon, repeat, ignore — not declared preference. The platform doesn't guess. It learns from the pattern. And the pattern changes how you decide.",
    demand: 'Behavior that teaches you something the survey never will.',
    tags: ['Behavioral Data', 'Platform Design', 'Decision Systems'] },
  { num: '05', title: 'Venture Design', subtitle: 'Finding the condition every competitor depends on without knowing it',
    description: "Most strategy optimizes what a team already knows how to build. I go after the condition every competitor depends on without knowing it — the one assumption holding the whole category up. Remove it, and the capability race stops mattering.",
    demand: "What survives is never a product. It's a position.",
    tags: ['Business Design', 'Category Strategy', 'Systems Thinking'] },
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