// Validate every level file against the content schema and print a summary.
import course from '../js/content/course.js';
import { validateCourse, courseCounts } from '../js/engine/validate.js';

const { errors, warnings } = validateCourse(course);
const counts = errors.length ? null : courseCounts(course);
if (counts) {
  console.log(`${course.title}: ${counts.levels} levels, ${counts.lessons} lessons, ${counts.quizQuestions} quiz + ${counts.examQuestions} exam questions, ${counts.keyTerms} key terms`);
  console.log('Question types:', JSON.stringify(counts.byType));
}
for (const w of warnings) console.warn('warning:', w);
for (const e of errors) console.error('ERROR:', e);
console.log(`${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
