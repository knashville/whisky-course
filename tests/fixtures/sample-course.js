// A small but complete course used by the engine tests and for UI smoke tests.
// It exercises every block type and every question type.

const q = (id, extra) => ({ id, explanation: 'Because this is how the sample course defines it.', ...extra });

function lesson(n, i) {
  const id = `s${n}-lesson-${i}`;
  return {
    id,
    title: `Sample lesson ${n}.${i}`,
    summary: 'A short sample lesson used for testing.',
    minutes: 5,
    blocks: [
      { type: 'text', md: 'Whiskey is distilled from a **fermented mash of grain** and usually *aged in oak*.\n\n- Grain\n- Water\n- Yeast' },
      { type: 'callout', variant: 'law', title: 'Bourbon basics', md: 'At least 51% corn, new charred oak containers.' },
      { type: 'keyTerms', terms: [{ term: `Mash bill ${n}.${i}`, definition: 'The recipe of grains used.' }, { term: `New make ${n}.${i}`, definition: 'Unaged spirit straight off the still.' }] },
      { type: 'table', caption: 'Proof and ABV', headers: ['ABV', 'US proof'], rows: [['40%', '80'], ['50%', '100']] },
      { type: 'steps', title: 'Making it', items: [{ title: 'Mash', md: 'Cook the grain.' }, { title: 'Ferment', md: 'Add yeast.' }] },
      { type: 'compare', columns: [{ heading: 'Pot still', points: ['Batch'] }, { heading: 'Column still', points: ['Continuous'] }] },
      { type: 'tasting', title: 'Two pours', flight: [{ pour: 'A bourbon', lookFor: 'Vanilla' }, { pour: 'A rye', lookFor: 'Spice' }] },
      { type: 'diagram', name: 'pot-still' },
    ],
    quiz: [
      q(`${id}-q1`, { type: 'single', prompt: 'What is the minimum corn content of bourbon?', options: ['51%', '80%', '100%'], answer: 0 }),
      q(`${id}-q2`, { type: 'multi', prompt: 'Which are ingredients of whiskey?', options: ['Grain', 'Water', 'Grapes', 'Yeast'], answer: [0, 1, 3] }),
      q(`${id}-q3`, { type: 'truefalse', prompt: 'US proof is twice the ABV.', answer: true }),
      q(`${id}-q4`, { type: 'order', prompt: 'Put these production steps in order.', items: ['Mashing', 'Fermentation', 'Distillation', 'Maturation'] }),
      q(`${id}-q5`, { type: 'match', prompt: 'Match each still to how it runs.', pairs: [{ left: 'Pot still', right: 'Batch' }, { left: 'Column still', right: 'Continuous' }, { left: 'Hybrid still', right: 'Pot with a column' }] }),
      q(`${id}-q6`, { type: 'numeric', prompt: 'What US proof is 45% ABV?', answer: 90, unit: 'proof', context: 'A bottle reads **45% alc./vol.**' }),
    ],
  };
}

function level(n) {
  const lessons = [1, 2, 3].map((i) => lesson(n, i));
  return {
    number: n,
    title: `Sample level ${n}`,
    rank: `Rank ${n}`,
    proof: 80 + n * 10,
    tagline: 'A sample level.',
    description: 'This level exists only for tests.',
    objectives: ['One', 'Two', 'Three'],
    lessonQuizPass: 70,
    lessons,
    exam: {
      passPercent: 75,
      draw: 6,
      timeLimitMinutes: n === 2 ? 10 : 0,
      questions: lessons.flatMap((l, li) => [
        q(`x${n}-${li}-a`, { lesson: l.id, type: 'single', prompt: 'Which still runs continuously?', options: ['Pot', 'Column', 'Alembic'], answer: 1 }),
        q(`x${n}-${li}-b`, { lesson: l.id, type: 'truefalse', prompt: 'Bourbon may be aged in used barrels.', answer: false }),
        q(`x${n}-${li}-c`, { lesson: l.id, type: 'numeric', prompt: 'Minimum bottling proof for US whiskey?', answer: 80, unit: 'proof' }),
      ]),
    },
  };
}

export default {
  id: 'sample',
  title: 'Sample Course',
  mark: 'SC',
  tagline: 'A tiny course for testing the engine.',
  levels: [level(1), level(2)],
};
