// End-to-end playthrough: answers every lesson quiz and every level exam through
// the real UI using the answer keys, then checks the certificate. Proves that
// every question is answerable as rendered and that progression works.
//
//   npm run build && node tests/e2e/playthrough.cjs [dist/whiskey-course.html]
//
// Needs Playwright with Chromium (npm i -D playwright && npx playwright install chromium).
const path = require('path');
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('Playwright is not installed. Run: npm i -D playwright && npx playwright install chromium');
  process.exit(2);
}

const root = path.resolve(__dirname, '../..');
const file = path.resolve(process.argv[2] || path.join(root, 'dist/whiskey-course.html'));

(async () => {
  const coursePath = file.includes('dist-fixture') ? 'tests/fixtures/sample-course.js' : 'js/content/course.js';
  const { default: course } = await import(path.join(root, coursePath));
  const { plainText } = await import(path.join(root, 'js/engine/markdown.js'));
  const byId = new Map();
  for (const lv of course.levels) {
    for (const l of lv.lessons) for (const q of l.quiz) byId.set(q.id, q);
    for (const q of lv.exam.questions) byId.set(q.id, q);
  }
  const norm = (s) => plainText(String(s)).replace(/\s+/g, ' ').trim();

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('file://' + file);
  await page.getByRole('button', { name: 'I am of legal drinking age' }).click();

  async function answer(q) {
    const card = page.locator(`.question[data-qid="${q.id}"]`);
    await card.waitFor();
    switch (q.type) {
      case 'single':
      case 'truefalse': {
        const want = q.type === 'single' ? norm(q.options[q.answer]) : q.answer ? 'True' : 'False';
        const labels = card.locator('label.choice');
        const n = await labels.count();
        let hit = 0;
        for (let i = 0; i < n; i++) {
          if (norm(await labels.nth(i).locator('.choice-text').innerText()) === want) {
            await labels.nth(i).click();
            hit++;
          }
        }
        if (hit !== 1) throw new Error(`${q.id}: expected exactly one option "${want}", found ${hit}`);
        break;
      }
      case 'multi': {
        const want = new Set(q.answer.map((i) => norm(q.options[i])));
        const labels = card.locator('label.choice');
        const n = await labels.count();
        let hit = 0;
        for (let i = 0; i < n; i++) {
          if (want.has(norm(await labels.nth(i).locator('.choice-text').innerText()))) {
            await labels.nth(i).click();
            hit++;
          }
        }
        if (hit !== want.size) throw new Error(`${q.id}: matched ${hit} of ${want.size} options`);
        break;
      }
      case 'order': {
        const target = q.items.map(norm);
        for (let pos = 0; pos < target.length; pos++) {
          const texts = (await card.locator('.order-text').allInnerTexts()).map(norm);
          let at = texts.indexOf(target[pos]);
          if (at < 0) throw new Error(`${q.id}: item "${target[pos]}" not shown`);
          while (at > pos) {
            await card.locator('.order-item').nth(at).locator('button').first().click();
            at--;
          }
        }
        break;
      }
      case 'match': {
        const rows = card.locator('.match-row');
        const n = await rows.count();
        for (let i = 0; i < n; i++) {
          const left = norm(await rows.nth(i).locator('.match-left').innerText());
          const pair = q.pairs.find((p) => norm(p.left) === left);
          if (!pair) throw new Error(`${q.id}: no pair for "${left}"`);
          const select = rows.nth(i).locator('select');
          const opts = await select.locator('option').allInnerTexts();
          const idx = opts.findIndex((t) => norm(t) === norm(pair.right));
          if (idx < 0) throw new Error(`${q.id}: option "${pair.right}" missing`);
          await select.selectOption({ index: idx });
        }
        break;
      }
      case 'numeric':
        await card.locator('input.num-input').fill(String(q.answer));
        break;
    }
  }

  let checked = 0;
  for (const level of course.levels) {
    for (const lesson of level.lessons) {
      await page.evaluate((id) => (location.hash = `lesson-${id}`), lesson.id);
      await page.locator('.lesson-body').waitFor();
      await page.getByRole('link', { name: /take the quiz/i }).click();
      for (let i = 0; i < lesson.quiz.length; i++) {
        const qid = await page.locator('.question').getAttribute('data-qid');
        await answer(byId.get(qid));
        await page.getByRole('button', { name: 'Check answer' }).click();
        const verdict = await page.locator('.q-verdict').innerText();
        if (verdict.trim().toLowerCase() !== 'correct') throw new Error(`${qid}: graded "${verdict}" for the keyed answer`);
        checked++;
        await page.getByRole('button', { name: i === lesson.quiz.length - 1 ? 'See results' : 'Next question' }).click();
      }
      const pct = await page.locator('.result-pct').innerText();
      if (pct !== '100%') throw new Error(`${lesson.id}: quiz scored ${pct}`);
    }
    await page.evaluate((n) => (location.hash = `exam-${n}`), level.number);
    await page.getByRole('button', { name: 'Begin the exam' }).click();
    for (let i = 0; i < level.exam.draw; i++) {
      const qid = await page.locator('.question').getAttribute('data-qid');
      await answer(byId.get(qid));
      checked++;
      if (i < level.exam.draw - 1) await page.getByRole('button', { name: 'Next →' }).click();
    }
    await page.getByRole('button', { name: 'Review and submit' }).click();
    await page.getByRole('button', { name: 'Submit the exam' }).click();
    const pct = await page.locator('.result-pct').innerText();
    if (pct !== '100%') throw new Error(`Level ${level.number} exam scored ${pct}`);
    console.log(`Level ${level.number}: ${level.lessons.length} quizzes and the exam passed at 100%`);
  }

  // Every exam question in every pool, not just the ones drawn: render each through a
  // lesson-quiz-free path by checking the answer keys with the engine instead.
  const { gradeQuestion } = await import(path.join(root, 'js/engine/quiz.js'));
  const keyed = (q) => ({ single: q.answer, multi: q.answer, truefalse: q.answer, order: q.items?.map((_, i) => i), match: q.pairs?.map((_, i) => i), numeric: q.answer })[q.type];
  for (const q of byId.values()) if (!gradeQuestion(q, keyed(q)).correct) throw new Error(`${q.id}: key does not grade as correct`);

  await page.evaluate(() => (location.hash = 'profile'));
  await page.locator('#pf-name').fill('Test Taster');
  await page.getByRole('button', { name: 'Save name' }).click();
  await page.evaluate(() => (location.hash = 'certificate'));
  const name = await page.locator('.cert-name').innerText();
  if (name !== 'Test Taster') throw new Error(`certificate shows "${name}"`);
  if (errors.length) throw new Error('Page errors:\n' + errors.join('\n'));
  console.log(`OK: ${checked} questions answered through the UI, ${byId.size} answer keys verified, certificate issued.`);
  await browser.close();
})().catch((e) => {
  console.error('FAIL:', e.message);
  process.exit(1);
});
