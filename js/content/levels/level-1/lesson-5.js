export default {
  id: 'l1-serve-store-responsibly',
  title: 'Serving, Storing and Drinking Responsibly',
  summary:
    'Five ways to serve whiskey, how to count US standard drinks and UK units from any pour, the safety and health facts every drinker should know, and how to store a bottle.',
  minutes: 8,
  blocks: [
    {
      type: 'text',
      md: `There is no single right way to drink whiskey. A cask strength single malt in a nosing glass and a whisky highball on a summer evening are both good choices. What matters is choosing the serve on purpose and knowing how much alcohol is in the glass. This lesson gives you both, plus how to keep an opened bottle in good shape.

This course is for adults of legal drinking age, and not drinking is always a valid choice.`,
    },
    {
      type: 'table',
      caption: 'Five serves and when each one suits.',
      headers: ['Serve', 'How', 'Suits'],
      rows: [
        ['Neat', 'At room temperature in a nosing glass, nothing added', 'Studying a whiskey; delicate or older whiskies'],
        ['With water', 'Neat, plus a few drops or a small splash of still water', 'Cask strength whiskies; opening up aroma'],
        ['On the rocks', 'Over ice, ideally one large cube, which melts more slowly than small ones', 'A cooler, relaxed drink; bold or stronger whiskies'],
        ['Highball', 'About 1 part whisky to 3-4 parts chilled soda water, in a tall glass full of ice', 'Hot weather and meals; a long, lighter drink'],
        ['Old Fashioned', 'Whiskey stirred with ice, a little sugar and a few dashes of bitters, finished with orange peel', 'A first whiskey cocktail; bourbon or rye'],
      ],
    },
    {
      type: 'text',
      md: `### Counting drinks

Governments measure alcohol in fixed amounts of pure ethanol, so you can compare a small strong pour with a large weak one.

- **One US standard drink** contains **14 g** of pure alcohol (about 0.6 fl oz). That is **1.5 fl oz (44 mL) of 40% ABV spirit**.
- **One UK unit** contains **10 mL (about 8 g)** of pure alcohol. That is **25 mL of 40% ABV spirit**.

To count any pour, use these formulas. The number 0.789 is the density of ethanol: 1 mL weighs 0.789 g.

- Pure alcohol (mL) = pour (mL) × ABV
- Grams of alcohol = pure alcohol (mL) × 0.789
- **US standard drinks** = grams ÷ 14
- **UK units** = pure alcohol (mL) ÷ 10

If you measure in fluid ounces, there is a shortcut: US standard drinks = fl oz × ABV ÷ 0.6.`,
    },
    {
      type: 'steps',
      title: 'Worked example: 60 mL at 40% ABV',
      items: [
        { title: 'Pure alcohol', md: '60 mL × 0.40 = **24 mL** of pure alcohol.' },
        { title: 'Grams', md: '24 mL × 0.789 = **18.9 g**.' },
        { title: 'US standard drinks', md: '18.9 ÷ 14 = 1.35, so about **1.4 US drinks**.' },
        { title: 'UK units', md: '24 ÷ 10 = **2.4 UK units**.' },
      ],
    },
    {
      type: 'table',
      caption: 'Six common serves worked out the same way. Check any of them with the Standard drinks tool.',
      headers: ['Serve', 'Pure alcohol', 'Grams', 'US drinks', 'UK units'],
      rows: [
        ['15 mL tasting pour at 60% (cask strength)', '9.0 mL', '7.1 g', '0.5', '0.9'],
        ['25 mL UK pub single at 40%', '10.0 mL', '7.9 g', '0.6', '1.0'],
        ['30 mL at 43%', '12.9 mL', '10.2 g', '0.7', '1.3'],
        ['44 mL (1.5 fl oz) at 40%', '17.6 mL', '13.9 g', '1.0', '1.8'],
        ['50 mL at 46%', '23.0 mL', '18.1 g', '1.3', '2.3'],
        ['60 mL at 40%', '24.0 mL', '18.9 g', '1.4', '2.4'],
      ],
    },
    {
      type: 'steps',
      title: 'Plan a three-glass session that stays under 1.5 US drinks',
      items: [
        { title: 'Draft the plan', md: 'Three 20 mL pours at 40%, 46% and 50% ABV. Pure alcohol: 8.0 + 9.2 + 10.0 = **27.2 mL**.' },
        { title: 'Check it', md: '27.2 × 0.789 = 21.5 g, and 21.5 ÷ 14 = **1.53 US drinks**. That is over the 1.5 target.' },
        { title: 'Adjust', md: 'Cut each pour to 15 mL: 6.0 + 6.9 + 7.5 = 20.4 mL of pure alcohol, which is 16.1 g, or **1.15 US drinks** (about 2.0 UK units). Now the session fits.' },
        { title: 'Lower it further', md: 'Spitting, or nosing one of the three instead of drinking it, brings the total down again. Small pours are the simplest lever you have.' },
      ],
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Legal drinking ages',
      md: `- **United States: 21.** Every state sets 21 as the minimum age to buy alcohol, a standard driven by the National Minimum Drinking Age Act of 1984.
- **United Kingdom: 18** to buy alcohol.
- **Most of the European Union: 18** for spirits.
- **Japan: 20.** The drinking age stayed at 20 when Japan lowered the age of adulthood to 18 in 2022.

Rules differ elsewhere, so check where you live.`,
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The non-negotiables',
      md: `- **Never drink and drive**, and never ride with a driver who has been drinking.
- **No alcohol in pregnancy**, or when taking medication that interacts with it. Ask a pharmacist if you are unsure.
- **Eat first, drink water alongside, and pace yourself.**
- **Not drinking is always a valid choice**, at a tasting or anywhere else.`,
    },
    {
      type: 'callout',
      variant: 'fact',
      title: 'Alcohol and health: the basic facts',
      md: `- The International Agency for Research on Cancer (IARC) classifies alcohol as a **Group 1 carcinogen**, its highest category of evidence that a substance causes cancer. Risk rises with the amount you drink, so drinking less means lower risk.
- The **UK Chief Medical Officers** advise drinking no more than **14 units a week** on a regular basis, spread over **3 or more days**.
- In the US, the Surgeon General issued an advisory on alcohol and cancer risk in January 2025, and the Dietary Guidelines for Americans 2025-2030 advise drinking less for better overall health.

Guidance changes as evidence grows. Follow the current official advice where you live.`,
    },
    {
      type: 'text',
      md: `### Storing a bottle

- **Keep it upright.** High-strength spirit slowly attacks a cork, which can crumble or taint the whiskey if the bottle lies on its side. Whiskey is stored upright, unlike wine.
- **Keep it cool and dark.** Sunlight and heat fade color and flavor over time.
- **Watch the headspace.** Once a bottle is open, the air in it (the headspace) slowly oxidizes the whiskey. A full bottle changes little, but a bottle that is mostly empty can lose its brightness over months. Finish low bottles sooner, or decant them into a smaller bottle.
- Whiskey does not improve in the bottle, so there is no reason to save an everyday bottle for years.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Neat', definition: 'Whiskey served at room temperature with nothing added: no ice, water or mixer.' },
        { term: 'On the rocks', definition: 'Whiskey served over ice. One large cube melts more slowly than several small ones.' },
        { term: 'Highball', definition: 'A long drink of whisky topped with chilled soda water over ice, at about 1 part whisky to 3-4 parts soda.' },
        { term: 'Old Fashioned', definition: 'A classic whiskey cocktail of whiskey, sugar and bitters stirred with ice and finished with orange peel.' },
        { term: 'US standard drink', definition: 'A serving containing 14 g (about 0.6 fl oz) of pure alcohol, such as 1.5 fl oz (44 mL) of 40% ABV spirit.' },
        { term: 'UK unit', definition: 'A measure of 10 mL (about 8 g) of pure alcohol, such as 25 mL of 40% ABV spirit.' },
        { term: 'Headspace', definition: 'The air above the liquid in a bottle. As it grows in an opened bottle, oxidation slowly dulls the whiskey.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Choose a serve on purpose: neat or with water to study a whiskey, one large cube or a 1:3-4 highball to relax, and an Old Fashioned as a first cocktail. A US standard drink is 14 g of alcohol (1.5 fl oz at 40%), and a UK unit is 10 mL (25 mL at 40%). Multiply pour by ABV, then by 0.789 for grams; divide grams by 14 for US drinks, or alcohol mL by 10 for UK units. Legal ages are 21 in the US, 18 in the UK, 20 in Japan. Never drink and drive, avoid alcohol in pregnancy, and remember that alcohol is a Group 1 carcinogen. Store bottles upright, cool and dark.`,
    },
  ],
  quiz: [
    {
      id: 'l1-serve-store-responsibly-q1',
      type: 'numeric',
      prompt: 'A guest pours 2 fl oz of a 45% ABV whiskey. How many US standard drinks is that? One US standard drink contains 0.6 fl oz of pure alcohol. Give your answer to one decimal place.',
      answer: 1.5,
      tolerance: 0.05,
      unit: 'US standard drinks',
      explanation: 'Pure alcohol = 2 fl oz × 0.45 = 0.9 fl oz, and 0.9 ÷ 0.6 = 1.5 US standard drinks. The common mistake is to count any single glass as one drink; a generous pour of a strong whiskey is well over one.',
    },
    {
      id: 'l1-serve-store-responsibly-q2',
      type: 'numeric',
      prompt: 'A bar serves a 35 mL measure of a 46% ABV whisky. How many UK units is that? Give your answer to one decimal place.',
      answer: 1.6,
      tolerance: 0.05,
      unit: 'UK units',
      explanation: 'Pure alcohol = 35 mL × 0.46 = 16.1 mL, and one UK unit is 10 mL of pure alcohol, so 16.1 ÷ 10 = 1.6 units. Converting to grams first is the slip to avoid here: UK units count millilitres of alcohol, while US standard drinks count grams (14 g each).',
    },
    {
      id: 'l1-serve-store-responsibly-q3',
      type: 'match',
      prompt: 'Match each serve to its description.',
      pairs: [
        { left: 'Neat', right: 'At room temperature with nothing added' },
        { left: 'On the rocks', right: 'Poured over ice' },
        { left: 'Highball', right: 'About 1 part whisky to 3-4 parts chilled soda over ice' },
        { left: 'Old Fashioned', right: 'Stirred with sugar and bitters, finished with orange peel' },
      ],
      explanation: 'Neat means nothing added, and on the rocks means over ice. A highball is a long drink with soda, and the Old Fashioned is a stirred cocktail of whiskey, sugar, bitters and orange peel.',
    },
    {
      id: 'l1-serve-store-responsibly-q4',
      type: 'truefalse',
      prompt: 'Like wine, a whiskey bottle with a cork should be stored lying on its side.',
      answer: false,
      explanation: 'Whiskey is stored upright. Its high alcohol slowly attacks cork, which can crumble or taint the whiskey if the two stay in contact. Wine is stored on its side for the opposite reason: its lower strength keeps the cork moist without harming it.',
    },
    {
      id: 'l1-serve-store-responsibly-q5',
      type: 'single',
      prompt: 'Which statement about alcohol and health is accurate?',
      options: [
        'IARC places alcohol in Group 1, its highest cancer category',
        'The UK Chief Medical Officers advise up to 14 units a day',
        'A small glass of whiskey now and then is safe in pregnancy',
        'Drinking water between whiskeys makes it safe to drive',
      ],
      answer: 0,
      explanation: 'IARC classifies alcohol as a Group 1 carcinogen, its highest category of evidence, and risk rises with the amount drunk. The UK guideline is 14 units a week, not a day; the advice in pregnancy is no alcohol at all; and water does not make drinking and driving safe.',
    },
  ],
};
