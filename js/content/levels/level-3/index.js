import lesson1 from './lesson-1.js';
import lesson2 from './lesson-2.js';
import lesson3 from './lesson-3.js';
import lesson4 from './lesson-4.js';
import lesson5 from './lesson-5.js';
import exam from './exam.js';

export default {
  number: 3,
  title: 'The Still House: How Whiskey Is Made',
  rank: 'Low Wines',
  proof: 100,
  tagline: `Follow the starch from kernel to cask and learn the numbers that run a still house.`,
  description: `Level 3 moves from *what* whiskey is to *how* it is made, and why each step changes the spirit. You will open a barley kernel and follow its enzymes through malting and mashing, compare the Scotch infusion mash with the American cook, run a pot still and a column still cut by cut, and follow new make through the cooperage, the warehouse and the bottling hall.

It is harder than Level 2 in two ways. The detail goes deeper: enzyme temperature windows, fermentation variables, still geometry, cut points and cask physics. And for the first time you calculate: litres of pure alcohol, spirit recovery, dilution water and compounding cask loss, with every method shown in a worked example.

The quizzes test application, so expect production logs, mash schedules and still reports to read and decide on. The level exam is the first with a time limit: 20 questions in 30 minutes, with 75% needed to pass.`,
  objectives: [
    `Learner can explain how barley's enzymes convert starch and state the working temperatures of beta- and alpha-amylase.`,
    `Learner can put malting, mashing, fermentation and distillation steps in order with their typical moisture, temperature and strength targets.`,
    `Learner can predict how wort clarity, fermentation length, still shape, condenser type and cut points change the new make.`,
    `Learner can calculate litres of pure alcohol, spirit recovery, dilution water and compounding cask loss.`,
    `Learner can use distillation-proof limits to decide which US, Scotch, Irish and Japanese categories a still's output can still enter.`,
    `Learner can compare oak species, cask sizes, fill histories and warehouse climates, and state where caramel coloring is allowed.`,
  ],
  lessonQuizPass: 70,
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  exam,
};
