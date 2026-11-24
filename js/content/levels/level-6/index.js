import lesson1 from './lesson-1.js';
import lesson2 from './lesson-2.js';
import lesson3 from './lesson-3.js';
import lesson4 from './lesson-4.js';
import lesson5 from './lesson-5.js';
import exam from './exam.js';

export default {
  number: 6,
  title: "The Blender's Bench: Quantitative Mastery, Business and Stewardship",
  rank: 'Keeper of the Spirit Safe',
  proof: 130,
  tagline: 'Run the numbers from bushel to bar tab, price and protect every bottle, and lead the room responsibly.',
  description: `Level 6 turns everything you have learned into models a professional uses every day. You will work yields and mass balances, compounding cask loss and inventory forecasts; blend and proof batches by the proof gallon and the litre of pure alcohol; follow a bottle through excise, the three tiers and the bar's pour cost; value a cask and test a collector's bottle; and finish with a capstone that engineers cocktails and designs a responsible, compliant tasting.

Earlier levels asked what whiskey is, how it is made, what the law requires and why it tastes as it does. This level asks you to combine those answers under real constraints. Most problems take several steps and state their rounding, and many quiz items are scenarios with a cask report, a P&L line, a brochure or a menu, where the best answer has to satisfy the law, the palate, the budget and the guest's safety at the same time.

The bar is higher too: lesson quizzes need 75%, and the timed level exam needs 85%. Pass all six level exams and you earn the Heart of the Cut certificate.`,
  objectives: [
    'Learner can calculate theoretical and actual grain yields, close a still-house mass balance and forecast LPA and bottle yield from maturing inventory with compounding loss.',
    'Learner can convert between wine gallons, proof gallons and LPA, and solve blend, reduction and bottle-yield problems while applying the youngest-age and 0.3-point strength rules.',
    'Learner can compute US federal excise tax at full and reduced rates, build a price waterfall, and convert correctly between markup, margin and pour cost.',
    'Learner can explain the three-tier system, control states and the federal trade-practice rules in 27 CFR Parts 6, 8, 10 and 11, and spot likely violations in a scenario.',
    'Learner can evaluate a cask offer by identifying red flags, confirming title by delivery order, and calculating remaining LPA, bottle yield and break-even price per bottle.',
    'Learner can engineer a cocktail or batch with ABV and dilution math and design a tasting that stays under 2 US standard drinks per guest.',
    'Learner can lead responsible service with accurate legal and health information, including ID checks, refusal scripts, BAC limits and the ban on health-benefit claims.',
  ],
  lessonQuizPass: 75,
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  exam,
};
