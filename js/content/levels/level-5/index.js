import lesson1 from './lesson-1.js';
import lesson2 from './lesson-2.js';
import lesson3 from './lesson-3.js';
import lesson4 from './lesson-4.js';
import lesson5 from './lesson-5.js';
import exam from './exam.js';

export default {
  number: 5,
  title: 'The Sensory Lab: Flavor Chemistry and Tasting Science',
  rank: 'Red Layer',
  proof: 120,
  tagline: 'Go beneath the tasting note to the molecules, receptors and statistics that explain every glass.',
  description: `Level 5 explains whiskey at the molecular and perceptual scale. You will learn how smell, taste and the burn receptor TRPV1 build flavor; how yeast, the still and the cask form specific compounds, from isoamyl acetate to whisky lactone; how to trace faults to their causes; and how sensory panels prove and measure a difference.

The earlier levels asked what a whiskey is, how it is made and what the law requires. This level asks *why* it smells and tastes as it does. The vocabulary moves to compound names, formation pathways and thresholds, and the arithmetic moves to odor activity values, surface-area-to-volume ratios and binomial critical values.

The questions change too. Most give you evidence, such as a tasting note, a GC table or a panel result, and ask you to diagnose the production cause or judge what the data supports. Expect to reason from evidence as well as recall facts.`,
  objectives: [
    'Learner can explain how orthonasal and retronasal smell, taste and trigeminal sensation combine into flavor, and predict how ABV, temperature and glass color change perception.',
    'Learner can name the main congener families with their formation pathways and descriptors, and predict where each falls in a spirit run.',
    'Learner can calculate odor activity values and cask SA/V ratios, and use them to rank aroma impact and compare cask sizes.',
    'Learner can link oak polymers and extractives to specific flavors and explain the chemistry of seasoning, toasting, charring and oxidation in the cask.',
    'Learner can diagnose common faults from a description or data and trace each to its production or storage cause and fix.',
    'Learner can choose a discrimination test, apply triangle-test critical values at α = 0.05, and design a panel session that controls the main biases.',
  ],
  lessonQuizPass: 75,
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  exam,
};
