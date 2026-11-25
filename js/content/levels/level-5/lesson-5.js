export default {
  id: 'l5-sensory-methods',
  title: 'Sensory Methods and Deductive Tasting',
  summary:
    'How professionals prove a difference with discrimination tests and binomial statistics, describe it with a trained panel, control the biases that distort both, and reason from a glass back to how the whiskey was made.',
  minutes: 13,
  blocks: [
    {
      type: 'text',
      md: `Sensory science asks three separate questions, and each needs its own method:

1. **Is there a difference?** A discrimination test, judged with statistics.
2. **What is the difference, and how big?** Descriptive analysis by a trained panel.
3. **Do people like it?** A hedonic (liking) test with consumers.

Mixing them up is the most common mistake in whiskey evaluation. A distillery that changes its yeast first needs to know whether anyone can tell (question 1). Asking a few colleagues which glass they prefer answers question 3, badly, and skips question 1 entirely. This lesson covers all three, the biases that undermine them, and the deductive method that turns sensory evidence into conclusions about production.`,
    },
    {
      type: 'table',
      caption: 'The main discrimination tests. "Chance" is the probability of a correct answer by pure guessing.',
      headers: ['Test', 'What the assessor receives', 'Task', 'Chance'],
      rows: [
        ['Triangle', 'Three coded samples: two alike, one different', 'Pick the odd sample', '1/3'],
        ['Duo-trio', 'A labeled reference plus two coded samples, one matching it', 'Pick the sample that matches the reference', '1/2'],
        ['Paired comparison (2-AFC)', 'Two coded samples', 'Say which has more of a named attribute, such as "smokier"', '1/2'],
        ['Tetrad', 'Four coded samples: two of each product', 'Sort them into two pairs of like samples', '1/3'],
      ],
    },
    {
      type: 'text',
      md: `### The statistics of a triangle test

Start from the **null hypothesis**: the samples are indistinguishable, so every assessor is guessing and has a 1/3 chance of picking the odd sample. The number of correct answers then follows a **binomial distribution** with that probability. The test is **one-tailed**, because only *more* correct answers than chance count as evidence.

The **critical value** is the smallest number of correct answers such that the probability of getting that many *or more* by pure guessing is 5% or less (α = 0.05). Reach it and you conclude the samples differ.

**Worked example.** Thirty assessors compare cask A with cask B, and 15 pick the odd sample. Under guessing, the probability of 15 or more correct out of 30 is about **0.043**. That is below 0.05, so the result is significant, just. Had 14 been correct, the probability would be about 0.090, and the test would show no significant difference.

"No significant difference" means the test failed to show one *with this many assessors*. It does not prove the samples are the same. Small differences need large panels. The **tetrad** keeps the triangle's 1/3 chance level but often needs fewer assessors for the same power, provided the instructions are given correctly; the cost is a fourth sample and more fatigue. The duo-trio and 2-AFC have a 1/2 chance level, so they need a higher proportion correct. Run your own numbers with the Triangle test tool.`,
    },
    {
      type: 'table',
      caption: 'Triangle test critical values: exact one-tailed binomial, chance 1/3, α = 0.05',
      headers: ['Assessors', 'Minimum correct to show a difference', 'Probability of that many or more by guessing', 'Probability of one fewer or more'],
      rows: [
        ['12', '8', '0.019', '0.066'],
        ['18', '10', '0.043', '0.108'],
        ['24', '13', '0.028', '0.068'],
        ['30', '15', '0.043', '0.090'],
        ['36', '18', '0.028', '0.058'],
      ],
    },
    {
      type: 'text',
      md: `### Descriptive analysis

Once a difference is shown, a **descriptive panel** measures it. The method has four parts:

- **A trained panel**, typically around eight to twelve assessors screened for acuity and trained together.
- **A lexicon**: an agreed list of attributes, each with a written definition.
- **Reference standards** that anchor each term to a real smell: a **vanillin** solution for "vanilla", **isoamyl acetate** for "banana, estery", **guaiacol** for "smoky".
- **Line scales**, usually 0 to 10, with anchored ends, on which each attribute is rated separately.

Panel leaders monitor three qualities with replicate samples: **repeatability** (an assessor gives the same sample the same score each time), **discrimination** (assessors separate samples that really differ) and **consensus** (assessors use the terms and the scale the same way).

**Analytical versus hedonic.** QC and descriptive panels describe; they are never asked whether they like a sample. Liking belongs to consumer tests with untrained people in large numbers, often on a 9-point hedonic scale. Asking a trained panel for preference invites the halo effect and wastes their training.`,
    },
    {
      type: 'table',
      caption: 'Common biases and the controls that remove them',
      headers: ['Bias', 'What happens', 'Control'],
      rows: [
        ['Expectation error', 'Knowing the label, price or purpose of a sample shapes the score', 'Blind service with random three-digit codes; tell the panel only what it needs'],
        ['Stimulus error', 'Irrelevant cues such as color or fill level are read as quality: darker seems older', 'Dark or blue glasses; identical glasses, pours and temperature'],
        ['Halo effect', 'One strong impression, or overall liking, spills into every other rating', 'Rate each attribute separately; keep liking out of analytical panels'],
        ['Position effect', 'A sample is scored differently because of where it sits in the order', 'Randomize and balance serving orders across assessors'],
        ['Contrast effect', 'A sample seems weaker or stronger because of the one before it', 'Balanced orders, rests and palate cleansers'],
        ['Central tendency error', 'Assessors avoid the ends of the scale, shrinking real differences', 'Training with anchored references for the scale ends'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'How blenders keep their noses calibrated',
      md: `- **Strength.** Samples are reduced to about 20% ABV and nosed far more than tasted, so dozens or hundreds can be judged in a day.
- **Calibration sessions.** The team noses the same reference samples together and aligns its terms and scores.
- **Written specs.** Each new make and each brand has a written profile with acceptable ranges and a retained standard sample, so a batch is judged against the spec and not against memory.
- **Standard conditions.** The same glass, pour, strength and temperature every time, with rests and plain water between samples.`,
    },
    {
      type: 'steps',
      title: 'The deductive grid: from glass to production choices',
      items: [
        { title: 'Grain base', md: 'Malty cereal points to malted barley; full, sweet corn to a corn-led mashbill; spice and rye bread to rye; soft bread to wheat. **Clove and spice** can also be **4-vinylguaiacol**, formed from the ferulic acid that rye mashes can release in quantity.' },
        { title: 'Peat', md: 'Smoke from **guaiacol**; **iodine, tar and medicine** from the **cresols** and phenol of peat smoke. No phenols, no peat.' },
        { title: 'New or used oak', md: 'Strong vanilla, caramel, coconut and firm tannin around a young-tasting spirit suggest **new charred oak**. A spirit-led glass with soft wood suggests used casks.' },
        { title: 'Cask type', md: '**Coconut** points to American oak lactone. **Dried fruit and walnut** with tannic grip point to an **oloroso-seasoned** European oak cask; struck match can come with it.' },
        { title: 'Age band', md: 'Youth shows as new-make notes: cereal, raw sulfur, sharp pear-drop esters. Age shows as integration, oxidative and acetal fruitiness, and resolved tannin.' },
        { title: 'Proof band', md: 'Judge burn and texture at full strength, then reduce. Heavy burn and an oily texture suggest cask strength.' },
        { title: 'Origin', md: 'Combine the clues. Meaty sulfur suggests **worm tubs or low copper contact**; banana and pear suggest an **estery fermentation**; each clue narrows the field.' },
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: a 95-point whiskey is objectively better than a 90',
      md: `The 100-point scale was popularized in wine criticism in the late 1970s and 1980s. In practice nearly all published scores fall between about 80 and 100, so it behaves like a 20-point scale, and scores have tended to drift upward over time. Medal competitions often give medals to a large share of entries. A score also reflects context: flight order, the sample before, label knowledge, fatigue and one critic's thresholds and anosmias. Studies of wine-competition judges have found that the same wine poured more than once in a flight often receives noticeably different scores. Treat a score as one person's verdict under one set of conditions.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Triangle test', definition: 'A discrimination test in which the assessor receives three coded samples, two alike, and picks the odd one. Chance of a correct guess is 1/3.' },
        { term: 'Duo-trio test', definition: 'A discrimination test in which the assessor matches one of two coded samples to a labeled reference. Chance of a correct guess is 1/2.' },
        { term: 'Paired comparison (2-AFC)', definition: 'A two-sample test in which the assessor says which sample has more of a named attribute. Chance of a correct guess is 1/2.' },
        { term: 'Tetrad test', definition: 'A discrimination test with four coded samples, two of each product, sorted into two pairs. Chance is 1/3, and it often needs fewer assessors than a triangle test for the same power.' },
        { term: 'Descriptive analysis', definition: 'Measurement of a product’s attributes by a trained panel using a lexicon, reference standards and line scales.' },
        { term: 'Expectation error', definition: 'A bias in which information about a sample, such as its label or price, shapes the assessor’s judgment of it.' },
        { term: 'Halo effect', definition: 'A bias in which one strong impression, or overall liking, raises or lowers the ratings an assessor gives to other attributes.' },
        { term: 'Central tendency error', definition: 'A bias in which assessors avoid the ends of a rating scale, shrinking the real differences between samples.' },
      ],
    },
    {
      type: 'steps',
      title: 'Home triangle test (whiskey or tea)',
      items: [
        { title: 'Prepare two versions', md: 'Whiskey version: take a whiskey bottled at **43% ABV** and make a 40% version by adding 7.5 mL of water to 100 mL (100 × 43 ÷ 40 = 107.5 mL). Check it with the Adding water tool. Alcohol-free version: brew one pot of black tea, then dilute part of it with 10% extra water.' },
        { title: 'Code and randomize', md: 'Your helper chooses one of the six serving orders (AAB, ABA, BAA, ABB, BAB, BBA) by rolling a die, labels three identical cups with random three-digit codes, and keeps the key out of sight. Use dark cups if you have them, and the same pour and temperature in each.' },
        { title: 'Taste and choose', md: 'Pour about 5 mL per cup. Nose each cup, then sip a small amount and spit. You must pick the odd sample even if you are unsure. Rest and drink water between trials.' },
        { title: 'Judge the result', md: 'Enter the trials and correct answers into the Triangle test tool. Repeated trials by one person show your own ability; a valid panel result needs different assessors, such as 12 people each doing one trial (8 correct needed).' },
      ],
    },
    {
      type: 'tasting',
      title: 'Six-glass blind flight on the deductive grid',
      md: `Have a helper pour six 10 mL samples into coded, identical glasses (dark glasses if you have them) and keep the key. Work every glass through all seven steps of the grid in writing before guessing the origin, then reveal. Score yourself on each step, not only on the final answer.

Spitting is strongly encouraged: six 10 mL pours at around 45% ABV hold about one and a half US standard drinks. Run this flight and the whiskey triangle test on different days. For a **nose-only** version, skip the tannin and proof steps.`,
      flight: [
        { pour: 'A wheated bourbon', lookFor: 'Corn sweetness, soft bread, new-oak vanilla and coconut; little spice.' },
        { pour: 'A high-rye bourbon or straight rye', lookFor: 'Clove, mint and pepper spice against new-oak sweetness.' },
        { pour: 'An unpeated single malt from ex-bourbon casks', lookFor: 'Malt, banana and pear esters, vanilla; no phenols.' },
        { pour: 'A sherry-cask single malt', lookFor: 'Dried fruit, walnut, tannic grip; possibly struck match.' },
        { pour: 'A heavily peated single malt', lookFor: 'Smoke, iodine and tar from guaiacol and cresols; check the cask beneath the smoke.' },
        { pour: 'A single pot still Irish whiskey', lookFor: 'Creamy, oily texture and spice from unmalted barley in the mash; no peat; mostly used-oak character.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Separate the three questions: is there a difference (discrimination), what is it (descriptive), and is it liked (hedonic). Triangle and tetrad tests have a 1/3 chance level; duo-trio and 2-AFC have 1/2. Judge a triangle test with an exact one-tailed binomial at α = 0.05: 12 assessors need 8 correct, 18 need 10, 24 need 13, 30 need 15 and 36 need 18, and a non-significant result never proves sameness. Descriptive panels need training, a lexicon, reference standards such as vanillin, isoamyl acetate and guaiacol, and line scales, with repeatability, discrimination and consensus monitored. Control expectation, stimulus, halo, position, contrast and central-tendency biases with codes, randomized orders, dark glasses, standard strength and rests. Blenders nose at about 20% ABV against written specs. The deductive grid runs from grain base to origin, and scores are one judge's verdict in one context.`,
    },
  ],
  quiz: [
    {
      id: 'l5-sensory-methods-q1',
      type: 'numeric',
      context: `**Panel plan**
Triangle test, new yeast strain vs current strain, 24 assessors.
Probability of at least k correct by guessing alone (exact binomial, chance 1/3):
- k = 11: 0.140
- k = 12: 0.068
- k = 13: 0.028
- k = 14: 0.010`,
      prompt: 'At α = 0.05 (one-tailed), what is the minimum number of correct answers needed to conclude that the two new makes differ?',
      answer: 13,
      tolerance: 0,
      unit: 'correct answers',
      explanation: 'The critical value is the smallest k for which that many or more correct by guessing has a probability of 0.05 or less. For 13 it is 0.028, so 13 is the critical value. 12 is the tempting answer because 0.068 is close to 0.05, but it is above the limit, and 14 also passes but is not the minimum. Check it with the Triangle test tool.',
    },
    {
      id: 'l5-sensory-methods-q2',
      type: 'single',
      context: `**Triangle test result**
Cask A vs cask B, 30 assessors, 14 correctly picked the odd sample.
Exact one-tailed binomial, chance 1/3, α = 0.05.`,
      prompt: 'What should the report conclude?',
      options: [
        'No significant difference was shown; 15 correct were needed, so the casks may still differ.',
        'The casks are proven to be identical, because the result is not significant.',
        'The casks differ significantly, because 14 is more than one third of 30.',
        'The test is invalid, because a triangle test needs at least 36 assessors.',
      ],
      answer: 0,
      explanation: 'With 30 assessors the critical value is 15; 14 correct has a guessing probability of about 0.090, above 0.05. A non-significant result means no difference was shown at this panel size, which is not proof of sameness. Beating one third is not enough, and 30 assessors is a valid panel size.',
    },
    {
      id: 'l5-sensory-methods-q3',
      type: 'match',
      prompt: 'Match each discrimination test to its format.',
      pairs: [
        { left: 'Triangle', right: 'Three coded samples; pick the odd one; chance 1/3' },
        { left: 'Duo-trio', right: 'A reference plus two coded samples; pick the match; chance 1/2' },
        { left: 'Paired comparison (2-AFC)', right: 'Two samples; say which has more of a named attribute; chance 1/2' },
        { left: 'Tetrad', right: 'Four coded samples; sort into two pairs; chance 1/3' },
      ],
      explanation: 'The triangle and tetrad share a 1/3 chance level, and the tetrad often needs fewer assessors for the same power. The duo-trio and 2-AFC both have a 1/2 chance level; the 2-AFC differs by naming the attribute to compare.',
    },
    {
      id: 'l5-sensory-methods-q4',
      type: 'multi',
      context: `**Session notes, cask selection panel**
Six cask samples, labeled A to F, served in the same order to every assessor, in clear glasses, at their cask strengths of 55-63% ABV. Before the session the warehouse manager mentioned that sample D came from the new cooperage everyone was excited about.`,
      prompt: 'Which changes would remove sources of bias from this session? Select all that apply.',
      options: [
        'Replace the letters with random three-digit codes',
        'Randomize and balance the serving order across assessors',
        'Serve the samples in dark or blue glasses',
        'Reduce every sample to the same strength, about 20% ABV',
        'Tell assessors which cooperage each sample came from so they can focus',
        'Ask assessors to keep their scores near the middle of the scale for consistency',
      ],
      answer: [0, 1, 2, 3],
      explanation: 'Codes and blind service counter expectation error, balanced orders counter position and contrast effects, dark glasses remove the color cue, and a standard strength removes burn differences. Naming the cooperage creates expectation error, and crowding the middle of the scale is the central tendency error.',
    },
    {
      id: 'l5-sensory-methods-q5',
      type: 'single',
      context: `**Blind flight, glass 4** (nosed at 20% ABV, then tasted)
"Iodine, tar, medicinal smoke. Underneath: banana and pear. Finish of raisin and walnut with firm, drying tannin. No coconut."`,
      prompt: 'Which set of production choices best fits the note?',
      options: [
        'Heavily peated malt, an estery fermentation and an oloroso-seasoned European oak cask',
        'Unpeated malt from worm tubs, matured in new charred American oak',
        'A rye-led mashbill matured in first-fill ex-bourbon American oak',
        'A corn-based grain whisky matured in refill American oak',
      ],
      answer: 0,
      explanation: 'Iodine and tar are peat cresols and phenol, banana and pear point to an estery ferment, and raisin, walnut and firm tannin point to an oloroso-seasoned European oak cask. The absence of coconut argues against American oak, and worm tubs would show meaty sulfur rather than smoke.',
    },
    {
      id: 'l5-sensory-methods-q6',
      type: 'match',
      prompt: 'Match each clue in a blind glass to the production choice the deductive grid links it to.',
      pairs: [
        { left: 'Meaty, cooked-vegetable sulfur', right: 'Worm tubs or low copper contact' },
        { left: 'Banana and pear', right: 'An estery fermentation' },
        { left: 'Iodine, tar and medicine', right: 'Peated malt' },
        { left: 'Coconut', right: 'American oak' },
        { left: 'Dried fruit and walnut with tannic grip', right: 'An oloroso-seasoned European oak cask' },
      ],
      explanation: 'Each clue traces to a compound and its origin: sulfides survive when copper contact is low, isoamyl acetate and other fruity esters come from the fermentation, and cresols and phenol come from peat smoke. Coconut and dried fruit are the easy pair to swap because both come from the cask. Coconut is whisky lactone from American oak, while dried fruit and walnut come from wine soaked into the staves of a sherry-seasoned European oak cask, whose ellagitannins give the grip.',
    },
  ],
};
