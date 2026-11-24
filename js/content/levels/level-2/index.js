import lesson1 from './lesson-1.js';
import lesson2 from './lesson-2.js';
import lesson3 from './lesson-3.js';
import lesson4 from './lesson-4.js';
import lesson5 from './lesson-5.js';
import lesson6 from './lesson-6.js';
import exam from './exam.js';

export default {
  number: 2,
  title: 'The Style Atlas: Styles, Labels and Stories',
  rank: 'Wash',
  proof: 90,
  tagline: 'Put the legal numbers behind every style, then read any label like a regulator.',
  description: `Level 2 attaches the headline legal numbers to each whiskey style. You will learn the proof limits, grain minimums and ages behind bourbon, rye, straight and bottled-in-bond whiskey, the five categories and five protected places of Scotch, the Irish, Canadian and Japanese rulebooks, and the history that produced them. Then you will put it to work on labels and in the glass, with the flavor wheel and the classic cocktail specs.

This level is harder than Level 1 in three ways. There are more than 40 new glossary terms, plus many more defined along the way. The numbers matter: 160 versus 125 proof, 51 versus 80% corn, 2 versus 4 years. And the questions change from recall to classification. You will read mock labels and product specs and decide what a whiskey can legally be called, so some questions have more than one correct answer and a few ask you to calculate.`,
  objectives: [
    'Classify a US whiskey from its mashbill, proofs, container and age, and say whether it may be called straight or bottled-in-bond',
    'Assign a described Scotch to the correct one of the five legal categories and name the three protected regions and two protected localities',
    'Decide whether a described product may use the name Irish whiskey, Canadian whisky or Japanese whisky',
    'Put the major milestones of whiskey history in order and link each to the rule it left behind',
    'Identify the mandatory elements of a US whiskey label, flag missing ones, and separate defined terms from marketing language',
    'Write a structured tasting note with the eight-family flavor wheel and state the specs and methods of the classic whiskey cocktails',
  ],
  lessonQuizPass: 70,
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6],
  exam,
};
