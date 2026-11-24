import lesson1 from './lesson-1.js';
import lesson2 from './lesson-2.js';
import lesson3 from './lesson-3.js';
import lesson4 from './lesson-4.js';
import lesson5 from './lesson-5.js';
import exam from './exam.js';

export default {
  number: 4,
  title: 'The Rulebook: Law, Labels and the Producing Nations',
  rank: 'Middle Cut',
  proof: 110,
  tagline: 'Read the clause, spot the near miss, and know exactly why a label passes or fails.',
  description: `Level 4 turns whiskey into a compliance problem. You will work clause by clause through US federal law (27 CFR 5.143, 5.74, 5.66(f) and 5.88), the Scotch Whisky Regulations 2009, the Irish Technical File, Canada's whisky standard, Japan's tax law and the JSLMA standard, EU Regulation 2019/787 and Australia's excise rule. Then you will see how real industries operate inside those rules, from Kentucky rickhouses and Indiana contract stills to Islay, Midleton, Yoichi and the hot-climate newcomers.

This level is harder than Level 3 because the answers turn on exact wording. Wrong options sit one step from the truth: 125 versus 160 proof, 94.8 versus 95% ABV, 19.6 versus 20% straight whiskey, 2 versus 3 versus 4 years. You will calculate blend shares in proof gallons, mark up invented labels, cite the regulation that each one breaks and work out who distilled a bottle from its fine print.

Lesson quizzes need 75% to pass. The level exam is timed, so learn the citations well enough to apply them quickly.`,
  objectives: [
    'Cite the 27 CFR Part 5 section that governs a US whisky label question (5.143, 5.155, 5.66(f), 5.74 or 5.88) and apply it to a product spec.',
    'Calculate a blend\'s straight-whiskey share on a proof-gallon basis and classify the result as blended whisky, spirit whisky or neither.',
    'Apply the clauses of the Scotch Whisky Regulations 2009 and the 2019 cask amendment to a label, cite the regulation breached and write a compliant version.',
    'Compare US, Scotch, Irish, Canadian, Japanese (tax law and JSLMA) and EU rules on ten attributes and judge whether an export product may use a given name.',
    'Infer from a US label who most likely distilled the whiskey, whether the brand owner is a non-distiller producer, and the minimum age implied.',
    'Explain how climate and industry structure shape style in each major producing nation, and justify a blind regional call with production facts.',
  ],
  lessonQuizPass: 75,
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  exam,
};
