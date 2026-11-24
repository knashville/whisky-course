import lesson1 from './lesson-1.js';
import lesson2 from './lesson-2.js';
import lesson3 from './lesson-3.js';
import lesson4 from './lesson-4.js';
import lesson5 from './lesson-5.js';
import exam from './exam.js';

export default {
  number: 1,
  title: 'First Pour: What Whiskey Is',
  rank: 'Grist',
  proof: 80,
  tagline: 'Start from zero and finish able to define, place, taste and count any glass of whiskey.',
  description: `Level 1 assumes no prior knowledge. It answers one question: what is whiskey? You will learn what separates whiskey from other spirits, how grain becomes spirit and spirit becomes whiskey in six plain steps, the headline rule behind each of the world's major styles, a repeatable way to taste, and how to serve, store and count whiskey responsibly.

This is the foundation every later level builds on. The vocabulary is kept to about three dozen core terms, and the only arithmetic is converting ABV to proof and counting standard drinks. Tasting is always optional, with a nose-only path for every exercise.

There is no earlier level to compare it with, so the challenge here is breadth: five short lessons cover the whole subject at a beginner's depth, and each later level returns to the same topics one layer deeper. The exam is untimed and tests recall and simple recognition.`,
  objectives: [
    'Learner can define whiskey and tell it apart from brandy, rum, tequila, vodka and gin by base material and distillation strength.',
    'Learner can convert between ABV and US proof.',
    'Learner can put the six production steps in order and tell a pot still from a column still.',
    'Learner can state the headline rule for Scotch, Irish, bourbon, rye, Tennessee, Canadian and Japanese whisky.',
    'Learner can follow the five-step tasting method and order a flight by style, strength and peat.',
    'Learner can calculate US standard drinks and UK units for any pour size and strength.',
    'Learner can state the legal drinking ages, the basic health facts and the safe-tasting practices used in this course.',
  ],
  lessonQuizPass: 70,
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  exam,
};
