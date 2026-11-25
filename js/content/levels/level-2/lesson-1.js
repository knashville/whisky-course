export default {
  id: 'l2-american-whiskey',
  title: 'American Whiskey by the Numbers',
  summary:
    'The legal numbers behind every US whiskey type: grain minimums, proof limits, containers and ages. Learn what straight, bottled-in-bond, blended and Tennessee whiskey add, then classify a product from its recipe card.',
  minutes: 12,
  blocks: [
    {
      type: 'text',
      md: `### Why the numbers matter

Level 1 gave you one headline rule per American style. US law goes further. For each type of whisky it sets a **grain minimum**, a **maximum distillation proof**, a **container**, a **maximum barrel-entry proof** and a **minimum bottling proof**. Those numbers decide what a producer may print on the label. Once you know them, a recipe card tells you what a whiskey can be called before you ever taste it.

The rules are federal. The Alcohol and Tobacco Tax and Trade Bureau (**TTB**) sets them in the standards of identity at **27 CFR 5.143**. US regulations spell the word *whisky*, and producers may print either spelling.

Every American whiskey starts from the same baseline:

- made from a fermented mash of grain;
- distilled at **less than 190 proof** (95% ABV), so it keeps the taste of its grain (at 190 proof or more it would be neutral spirit, the base of vodka);
- stored in **oak** containers (corn whisky is the one exception);
- bottled at **80 proof** (40% ABV) or more.`,
    },
    {
      type: 'table',
      caption:
        'US standards of identity for the named-grain whiskies (27 CFR 5.143). Proof = 2 × ABV, so 160 proof is 80% ABV and 125 proof is 62.5% ABV.',
      headers: ['Type', 'Grain rule', 'Distilled at', 'Container', 'Into the barrel at', 'Bottled at'],
      rows: [
        ['Bourbon whisky', 'At least 51% corn', '160 proof or less', 'New charred oak', '125 proof or less', '80 proof or more'],
        ['Rye whisky', 'At least 51% rye', '160 proof or less', 'New charred oak', '125 proof or less', '80 proof or more'],
        ['Wheat whisky', 'At least 51% wheat', '160 proof or less', 'New charred oak', '125 proof or less', '80 proof or more'],
        ['Malt whisky', 'At least 51% malted barley', '160 proof or less', 'New charred oak', '125 proof or less', '80 proof or more'],
        ['Rye malt whisky', 'At least 51% malted rye', '160 proof or less', 'New charred oak', '125 proof or less', '80 proof or more'],
        ['Corn whisky', 'At least 80% corn', '160 proof or less', 'Used or uncharred new oak, if stored at all', '125 proof or less', '80 proof or more'],
      ],
    },
    {
      type: 'text',
      md: `### Bourbon, rule by rule

Read the bourbon row as six separate rules:

1. **Made in the United States.** In 1964 Congress declared bourbon a "distinctive product of the United States". Kentucky makes most of it, but any state may.
2. **At least 51% corn** in the mash. The rest is usually rye or wheat, plus malted barley.
3. **Distilled at 160 proof or less.** A lower distillation strength keeps more grain flavor.
4. **Entered into new charred oak at 125 proof or less.** Because the oak must be new, a barrel holds bourbon only once. Used bourbon barrels go on to age Scotch, Irish, Canadian and many other spirits.
5. **Bottled at 80 proof or more.**
6. **Nothing added but water.** Bourbon may not contain added coloring, flavoring or blending materials. Its color and flavor come from grain, yeast, distillation and wood.

Rye, wheat, malt and rye malt whisky follow the same numbers, with the named grain at 51% or more. Rule 6 is the one difference: unless they are straight, these four may contain harmless coloring, flavoring or blending materials up to 2.5% of the finished product. Bourbon may not, straight or not.`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: bourbon must be aged at least 2 years',
      md: `Bourbon has **no minimum age**. A spirit could go into new charred oak and come out a few months later as bourbon. Two rules stop a young whiskey from hiding its age:

- Any whisky aged **less than 4 years** must carry an age statement on its label (27 CFR 5.74).
- Only whiskey aged **at least 2 years** may be called **straight**.

The other famous myth is that bourbon must come from Kentucky. It can be made anywhere in the United States.`,
    },
    {
      type: 'text',
      md: `### Corn whisky: the exception to the oak rule

**Corn whisky** needs **at least 80% corn**. It is the only American whiskey that need not touch wood. If the producer does store it, it goes into **used or uncharred new oak** at 125 proof or less, and it may not be treated with charred wood in any way.

Put an 80% corn spirit into *new charred* oak instead and it is no longer corn whisky. It now meets every bourbon rule, so it becomes bourbon.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Law: American Single Malt Whisky (effective 19 January 2025)',
      md: `TTB added this type to 27 CFR 5.143 in a final rule published in December 2024. American Single Malt Whisky must be:

- made from **100% malted barley**;
- mashed, distilled and matured in the United States, and distilled entirely at **one distillery**;
- distilled at **160 proof or less**;
- stored in **oak casks of 700 L or less**, which may be new or used, charred or uncharred;
- bottled at **80 proof or more**.

Caramel coloring is allowed only if the label discloses it. Compare plain **malt whisky**, which needs just 51% malted barley and must use new charred oak.`,
    },
    {
      type: 'compare',
      title: 'Straight and bottled-in-bond',
      columns: [
        {
          heading: 'Straight',
          points: [
            'Aged at least **2 years** in the containers its type requires: new charred oak for straight bourbon or rye, used or uncharred new oak for straight corn.',
            'Must carry an age statement if under 4 years old.',
            'May combine straight whiskies of the **same type** made in the **same state**.',
            'No added coloring, flavoring or blending materials.',
            '"Straight rye" means rye whisky that has also passed the 2-year test.',
          ],
        },
        {
          heading: 'Bottled-in-bond',
          points: [
            'Created by the Bottled-in-Bond Act of **1897**; today the rule is 27 CFR 5.88.',
            'Distilled in **one season** (January-June or July-December) of one year, by **one distiller** at **one distillery**.',
            'Aged at least **4 years** in a federally bonded warehouse, so it needs no age statement.',
            'Bottled at **exactly 100 proof**.',
            'An overlay: a bonded bourbon must meet every bourbon rule as well. It guarantees provenance and says nothing about quality.',
          ],
        },
      ],
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Law: Tennessee whiskey (Tennessee Code 57-2-106, 2013)',
      md: `Tennessee whiskey is defined by **state law**, passed in 2013. To use the name, a whiskey must be:

- made in Tennessee from a mash of at least **51% corn**;
- distilled at 160 proof or less and entered into the barrel at 125 proof or less;
- aged in **new charred oak**;
- **filtered through maple charcoal before aging** (the Lincoln County Process; producers traditionally use sugar maple);
- bottled at 80 proof or more.

The law exempts one existing producer, Prichard's, from the charcoal step. Read the list again and you will see bourbon's rules plus two extras: Tennessee origin and charcoal filtering.`,
    },
    {
      type: 'text',
      md: `### Blended whiskey and the proof gallon

A **blended whiskey** must contain at least **20% straight whiskey** measured on a **proof-gallon** basis. The other 80% may be other whiskey or **neutral spirits**, and harmless coloring, flavoring and blending materials are allowed. A **blended bourbon** must contain at least **51% straight bourbon** on the same basis.

The proof gallon measures the alcohol in a spirit. One proof gallon is one US gallon at 100 proof, or the same amount of alcohol at another strength:

- 10 gallons at 100 proof = 10 proof gallons.
- 10 gallons at 120 proof = 10 × 120 ÷ 100 = **12 proof gallons**.

So a blend that holds 500 proof gallons of alcohol needs at least 500 × 0.20 = **100 proof gallons** of straight whiskey.

To turn proof gallons back into liquid gallons, divide by proof ÷ 100: 12 proof gallons of 120-proof whiskey is 12 ÷ 1.2 = **10 gallons**. The Cask yield tool shows the proof gallons in a cask when you enter its volume in liters and its strength in % ABV.`,
    },
    {
      type: 'table',
      caption:
        'Typical mashbills. These are common ranges with no legal force; producers rarely publish exact recipes.',
      headers: ['Recipe style', 'Typical mashbill', 'What it tends to give'],
      rows: [
        ['Traditional bourbon', 'About 70-80% corn, 10-15% rye, 5-12% malted barley', 'Sweet corn, with vanilla and caramel from the oak and a little spice'],
        ['High-rye bourbon', 'About 20-35% rye, the rest corn and malted barley', 'More pepper, mint and baking spice'],
        ['Wheated bourbon', "Wheat replaces rye as the second grain; Maker's Mark is a well-known example", 'Softer, rounder, bready sweetness'],
        ['Kentucky-style rye', 'Just over 51% rye, with corn and malted barley', 'Rye spice softened by corn sweetness'],
        ['"95/5" rye', '95% rye, 5% malted barley', 'Intense spice with herbal, dill-like notes'],
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: sour mash whiskey tastes sour',
      md: `**Sour mash** is a process. The distiller adds **backset**, the acidic liquid left in the still after a run, to the next batch of mash. The acidity helps keep unwanted bacteria in check and makes one batch more like the last. It does not make the whiskey taste sour, and most bourbon is made this way. Level 3 covers the chemistry.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Standard of identity', definition: 'The legal definition of a spirit type, such as bourbon or rye whisky. The US whisky standards are in 27 CFR 5.143.' },
        { term: 'Entry proof', definition: 'The strength of a spirit when it goes into the barrel. Bourbon and rye may enter new charred oak at no more than 125 proof (62.5% ABV).' },
        { term: 'Straight whiskey', definition: 'US whiskey aged at least 2 years in the containers its type requires, with nothing added but water. It must state its age if it is under 4 years old.' },
        { term: 'Bottled-in-bond', definition: 'A US designation for whiskey from one distiller at one distillery in one distilling season, aged at least 4 years in a bonded warehouse and bottled at exactly 100 proof.' },
        { term: 'Proof gallon', definition: 'One US gallon of spirit at 100 proof, or the same amount of alcohol at another strength. US blend rules and spirits taxes are measured in proof gallons.' },
        { term: 'Lincoln County Process', definition: 'Filtering new spirit through maple charcoal, traditionally sugar maple, before it goes into the barrel, a step Tennessee law requires for Tennessee whiskey.' },
        { term: 'Wheated bourbon', definition: 'Bourbon whose second grain is wheat in place of rye, which usually gives a softer, rounder spirit.' },
      ],
    },
    {
      type: 'steps',
      title: 'Worked example: classify a recipe card',
      items: [
        {
          title: 'The card',
          md: 'Mash of **60% rye, 35% corn, 5% malted barley**. Distilled at **150 proof**. Entered **new charred oak** at **115 proof**. Aged **3 years**. Bottled at **92 proof**.',
        },
        {
          title: 'Read the grain',
          md: 'Rye is 60%, which clears the 51% bar, so the type is **rye whisky**. Corn is only 35%, so bourbon (51% corn) and corn whisky (80% corn) are out.',
        },
        {
          title: 'Check the still and the barrel',
          md: '150 proof is within the 160 limit. 115 proof is within the 125 limit. New charred oak is the container rye requires. Rye whisky is confirmed.',
        },
        {
          title: 'Check the age',
          md: 'Three years in new charred oak passes the 2-year test, so it may be called **straight rye whisky**. Because it is under 4 years old, the label **must** carry an age statement such as "Aged 3 Years".',
        },
        {
          title: 'Test the overlays',
          md: 'Bottled-in-bond fails twice: it needs at least 4 years and exactly 100 proof. Final answer: **straight rye whisky with a mandatory age statement**. Try your own cards with the Is it bourbon? tool.',
        },
      ],
    },
    {
      type: 'text',
      md: `### Recap

American whiskey is distilled below 190 proof, stored in oak (corn whisky excepted) and bottled at 80 proof or more. Bourbon adds 51% corn, 160 proof off the still, 125 proof into new charred oak, US origin and no additives, but no minimum age. Rye, wheat, malt and rye malt whisky copy those numbers with their own grain; corn whisky needs 80% corn and used or uncharred oak. Straight means at least 2 years, with an age statement under 4. Bottled-in-bond means one season, one distiller, one distillery, 4 years and exactly 100 proof. Tennessee whiskey is a state-law style with charcoal filtering. Blended whiskey needs 20% straight whiskey by proof gallons, and American Single Malt (2025) needs 100% malted barley from one distillery in casks of 700 L or less.`,
    },
  ],
  quiz: [
    {
      id: 'l2-american-whiskey-q1',
      type: 'multi',
      context: `**SPEC SHEET: LOT 7**  \nMash: 75% corn, 13% rye, 12% malted barley  \nDistilled at 135 proof by one distiller at one distillery in Kentucky, February to May 2020  \nEntered new charred oak at 120 proof  \nAged 5 years in a federally bonded warehouse  \nBottled at 100 proof, nothing added but water`,
      prompt: 'Select every designation Lot 7 qualifies for.',
      options: ['Bourbon whisky', 'Straight bourbon whisky', 'Bottled-in-bond', 'Corn whisky', 'Rye whisky'],
      answer: [0, 1, 2],
      explanation:
        'At 75% corn, with 135 and 120 proof inside the 160 and 125 limits and new charred oak, it is bourbon, and 5 years makes it straight. One season (February-May sits inside January-June), one distiller, one distillery, at least 4 years in bond and exactly 100 proof add bottled-in-bond. Corn whisky is the tempting extra, but it needs 80% corn and used or uncharred oak, and rye whisky needs 51% rye.',
    },
    {
      id: 'l2-american-whiskey-q2',
      type: 'numeric',
      prompt:
        'A producer is making a blended bourbon whisky that will contain 400 proof gallons of alcohol in total. What is the minimum amount of straight bourbon it must contain, in proof gallons?',
      answer: 204,
      tolerance: 0,
      unit: 'proof gallons',
      explanation:
        'Blended bourbon needs at least 51% straight bourbon on a proof-gallon basis: 400 × 0.51 = 204 proof gallons. The 20% figure belongs to plain blended whiskey and would give only 80 proof gallons, far short of what a blended bourbon needs.',
    },
    {
      id: 'l2-american-whiskey-q3',
      type: 'match',
      prompt: 'Match each recipe and process to the US designation it fits best.',
      pairs: [
        { left: '85% corn, stored 2 years in used oak barrels', right: 'Corn whisky' },
        { left: '60% malted barley, 40% corn, new charred oak', right: 'Malt whisky' },
        { left: '100% malted barley, one US distillery, used 500 L oak casks', right: 'American Single Malt Whisky' },
        { left: '70% corn, made and aged in Tennessee, maple-charcoal filtered, new charred oak', right: 'Tennessee whiskey' },
      ],
      explanation:
        'Corn whisky needs 80% corn and used or uncharred oak, so 85% corn in used barrels fits. Malt whisky needs 51% malted barley in new charred oak. The two malt cards are easy to swap: the 100% malt spirit in used 500 L casks fails the new charred oak rule for malt whisky but meets American Single Malt, which allows used casks of 700 L or less. Maple-charcoal filtering and Tennessee origin are the Tennessee whiskey extras.',
    },
    {
      id: 'l2-american-whiskey-q4',
      type: 'truefalse',
      prompt: 'Federal rules require every bourbon to be aged at least 2 years.',
      answer: false,
      explanation:
        'Bourbon has no minimum age. The 2-year minimum belongs to "straight" whiskey, and any whisky under 4 years old must carry an age statement, which keeps young bourbon honest.',
    },
    {
      id: 'l2-american-whiskey-q5',
      type: 'single',
      prompt: 'Which of these whiskeys may be labeled bottled-in-bond?',
      options: [
        'Distilled March-May 2019 by one distiller at one distillery, aged 4 years in a bonded warehouse, bottled at 100 proof',
        'Distilled in spring 2019 at two distilleries owned by one company, aged 6 years in a bonded warehouse, bottled at 100 proof',
        'Distilled in spring 2019 by one distiller at one distillery, aged 5 years in a bonded warehouse, bottled at 90 proof',
        'Distilled in January and in August 2019 at one distillery, aged 6 years in a bonded warehouse, bottled at 100 proof',
      ],
      answer: 0,
      explanation:
        'Bottled-in-bond needs one season, one distiller, one distillery, at least 4 years in bond and exactly 100 proof, and only the first option meets all five. Two distilleries break the one-distillery rule, 90 proof is not exactly 100, and January plus August spans both seasons.',
    },
    {
      id: 'l2-american-whiskey-q6',
      type: 'single',
      context: `**RECIPE CARD**  \nMash: 70% rye, 20% corn, 10% malted barley  \nDistilled at 140 proof by one distiller at one distillery, March to May 2022  \nEntered new charred oak at 110 proof  \nAged 2 years 6 months in a bonded warehouse  \nBottled at 100 proof, nothing added but water`,
      prompt: 'Which description is complete and correct?',
      options: [
        'Straight rye whisky that must carry an age statement',
        'Straight rye whisky; an age statement is optional',
        'Bottled-in-bond straight rye whisky',
        'Rye whisky that cannot be called straight until it reaches 4 years',
        'Straight bourbon whisky that must carry an age statement',
      ],
      answer: 0,
      explanation:
        'At 70% rye, with 140 and 110 proof inside the 160 and 125 limits and new charred oak, it is rye whisky, and 2 years 6 months passes the 2-year test for straight. Under 4 years the age statement is mandatory. One season, one distillery and 100 proof tempt you toward bottled-in-bond, but bonding also needs at least 4 years, and 20% corn rules out bourbon.',
    },
  ],
};
