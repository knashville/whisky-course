// Validate one level folder on its own: node scripts/validate-level.js 3
import { validateCourse, courseCounts } from '../js/engine/validate.js';

const n = Number(process.argv[2]);
if (!Number.isInteger(n)) {
  console.error('Usage: node scripts/validate-level.js <level number>');
  process.exit(2);
}
const { default: level } = await import(`../js/content/levels/level-${n}/index.js`);
if (level.number !== n) console.error(`ERROR: level.number is ${level.number}, expected ${n}`);
const { errors, warnings } = validateCourse({ title: 'partial', levels: [level] }, { partial: true });
if (!errors.length) {
  const c = courseCounts({ levels: [level] });
  console.log(`Level ${n} "${level.title}": ${c.lessons} lessons, ${c.quizQuestions} quiz + ${c.examQuestions} exam questions, ${c.keyTerms} key terms`);
  console.log('Question types:', JSON.stringify(c.byType));
}
for (const w of warnings) console.warn('warning:', w);
for (const e of errors) console.error('ERROR:', e);
console.log(`${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length || level.number !== n ? 1 : 0);
