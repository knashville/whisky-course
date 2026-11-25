export default {
  id: 'l1-what-makes-whiskey',
  title: 'What Makes Whiskey Whiskey',
  summary:
    'What separates whiskey from brandy, rum, tequila, vodka and gin, how to read alcohol strength as ABV and proof, and where the word "whiskey" comes from.',
  minutes: 9,
  blocks: [
    {
      type: 'text',
      md: `Walk into any liquor store and the brown spirits blur together. Whiskey, brandy and aged rum can share a shelf, a color and even a price. This lesson gives you the one definition that sorts them, plus the two numbers printed on every bottle.

### The definition

**Whiskey is a spirit distilled from a fermented mash of cereal grain and almost always matured in wooden casks.** Three ideas sit inside that sentence:

- **Grain.** Barley, corn, rye, wheat and a few minor grains. The raw material decides the family. A spirit made from grapes is brandy, however much it looks like whiskey.
- **Distilled.** The fermented liquid is heated and the alcohol is collected and concentrated.
- **Matured in wood.** Nearly every whiskey spends time in a cask, usually oak. The main exception is US **corn whisky**, which the law allows to be sold without any aging at all.`,
    },
    {
      type: 'text',
      md: `### Why distill at all?

Yeast turns sugar into alcohol, but it slows and stops as the alcohol builds up. Fermentation on its own usually stalls at around 15% alcohol by volume; the exact point depends on the yeast, and a few strains and methods reach about 20%. A distiller's fermented grain (called the wash) usually finishes far lower, at about 7-10%. To go stronger you have to distill: heat the liquid, catch the alcohol-rich vapor and condense it.

That gives a simple family tree. **Beer is to whiskey as wine is to brandy.** Whiskey begins as a rough, unhopped beer made from grain, and brandy begins as wine made from fruit. Distillation turns each into a spirit.`,
    },
    {
      type: 'table',
      caption: 'The base material decides the spirit family.',
      headers: ['Spirit', 'Made from', 'What sets it apart'],
      rows: [
        ['Whiskey', 'Cereal grain (barley, corn, rye, wheat)', 'Keeps grain character; almost always aged in wood'],
        ['Vodka', 'Anything fermentable; often grain or potato', 'Distilled so strong that it is neutral in flavor'],
        ['Gin', 'Neutral spirit', 'Flavored with juniper and other botanicals'],
        ['Brandy', 'Grapes or other fruit', 'Distilled from wine or fermented fruit (Cognac is a grape brandy)'],
        ['Rum', 'Sugar cane juice or molasses', 'Made from sugar cane products'],
        ['Tequila and mezcal', 'Agave', 'Tequila uses blue agave; mezcal can use several agave species'],
      ],
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Where US law draws the line',
      md: `US federal rules spell out the difference between vodka and whiskey at the still.

- **Neutral spirits (which include vodka)** are distilled at **95% ABV (190 proof) or more** (27 CFR 5.142). At that strength almost nothing of the grain survives.
- **Whisky** must be distilled from a fermented grain mash at **less than 95% ABV (190 proof)**, stored in oak containers, and bottled at **40% ABV (80 proof) or more** (27 CFR 5.143). Corn whisky is excused from the oak requirement.

So grain vodka and whiskey can start from the same grain. The vodka is distilled past the 190-proof line and loses its grain character; the whiskey stays below it.`,
    },
    {
      type: 'text',
      md: `### Reading the strength: ABV and proof

**ABV (alcohol by volume)** is the percentage of the liquid that is pure alcohol. A 750 mL bottle at 40% ABV contains 300 mL of alcohol.

**US proof is exactly twice the ABV.**

- 40% ABV = 80 proof
- 50% ABV = 100 proof
- To go back, halve it: 90 proof = 45% ABV

Britain once used a different proof scale, in which 100 degrees proof was about 57.1% ABV. You will meet it only on old bottles and in old books. Today the UK, like most of the world, labels in % ABV.`,
    },
    {
      type: 'table',
      caption: 'Typical strengths from fermenter to glass. These are usual ranges, apart from the legal minimum.',
      headers: ['Stage', 'Typical ABV', 'US proof'],
      rows: [
        ['Wash (fermented grain, before distilling)', '7-10%', '14-20'],
        ['New make spirit (fresh off the still)', 'about 60-80% from pot stills and for bourbon; column-still grain whisky up to about 94%', 'about 120-160; grain whisky up to about 188'],
        ['Cask strength bottlings (no water added)', 'often 50-65%', 'often 100-130'],
        ['Most bottled whiskey', '40-46%', '80-92'],
        ['Legal minimum for bottled whiskey', '40%', '80'],
      ],
    },
    {
      type: 'callout',
      variant: 'fact',
      title: 'One number nearly everyone agrees on',
      md: `The minimum bottling strength for whiskey is **40% ABV** in the US, Scotland, Ireland, Canada and the European Union, and it is also the minimum under Japan's industry standard for "Japanese whisky". A bottle labeled whiskey at 35% falls below every one of those minimums.`,
    },
    {
      type: 'table',
      caption: 'Shelf-scan drill: cover the right-hand column, convert each strength yourself, then check. You can confirm any answer with the Proof and ABV tool.',
      headers: ['Label says', 'Working', 'US proof'],
      rows: [
        ['40% ABV', '40 × 2', '80 proof'],
        ['43% ABV', '43 × 2', '86 proof'],
        ['46% ABV', '46 × 2', '92 proof'],
        ['50% ABV', '50 × 2', '100 proof'],
        ['62.5% ABV (cask strength)', '62.5 × 2', '125 proof'],
      ],
    },
    {
      type: 'table',
      caption: 'Sorting drill: ten spirit cards. Decide "whiskey or not" before you read the reason.',
      headers: ['Card', 'Whiskey?', 'What decides it'],
      rows: [
        ['Single malt Scotch', 'Yes', 'Malted barley mash, distilled, aged in oak'],
        ['Bourbon', 'Yes', 'Grain mash, mostly corn, aged in new charred oak'],
        ['Irish whiskey', 'Yes', 'Grain mash, aged in wooden casks'],
        ['Canadian whisky', 'Yes', 'Grain mash, aged in wood'],
        ['Unaged US corn whisky', 'Yes', 'Grain mash below 190 proof; the one US whisky that need not be aged'],
        ['Cognac', 'No', 'Distilled from grape wine, so it is brandy'],
        ['Dark rum', 'No', 'Made from cane juice or molasses; its color comes from the cask and often from added caramel'],
        ['Tequila', 'No', 'Made from blue agave'],
        ['Grain vodka', 'No', 'Grain base, but distilled to 190 proof or more, so it is neutral'],
        ['Gin', 'No', 'Neutral spirit flavored with juniper'],
      ],
    },
    {
      type: 'callout',
      variant: 'history',
      title: 'Whisky or whiskey? And where the word comes from',
      md: `- **"Whisky"** is the spelling in Scotland, Canada and Japan.
- **"Whiskey"** is the spelling in Ireland and on most American labels, though a few US brands (Maker's Mark, for one) write "whisky".
- US federal regulations write "whisky" and say it may be spelled either way (27 CFR 5.143). This course writes "whiskey" in general and "whisky" for Scotch, Canadian and Japanese whisky.

The word itself is Gaelic. Irish *uisce beatha* and Scottish Gaelic *uisge beatha* mean **"water of life"**, a translation of the Latin *aqua vitae* that medieval scholars used for distilled spirit. English speakers turned it into *usquebaugh*, which was later shortened to "whisky".`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Three myths to drop on day one',
      md: `- **"Darker means older."** Color depends on the type of cask, how many times it was used before, the climate of the warehouse and, in some styles, permitted caramel coloring. Scotch and Canadian rules allow plain caramel; bourbon rules do not. A pale 12-year-old and a dark 4-year-old are both common.
- **"Older is always better."** Age changes whiskey. It does not guarantee you will like it more. Many drinkers prefer a lively young whiskey to a woody old one.
- **"Good legs mean good whiskey."** The streaks that run down the glass after a swirl (called legs or tears) mostly reflect alcohol strength and viscosity. They say nothing reliable about quality.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Whiskey', definition: 'A spirit distilled from a fermented mash of cereal grain and almost always matured in wooden casks. Spelled "whisky" in Scotland, Canada and Japan.' },
        { term: 'Mash', definition: 'A mixture of ground grain and hot water in which starch is turned into sugar. Once fermented, it is the raw material distilled into whiskey.' },
        { term: 'Distillation', definition: 'Heating a fermented liquid and condensing the vapor to collect and concentrate its alcohol.' },
        { term: 'ABV (alcohol by volume)', definition: 'The percentage of a drink, by volume, that is pure alcohol. A 40% ABV whiskey is 40% alcohol.' },
        { term: 'US proof', definition: 'The US measure of alcohol strength, equal to exactly twice the ABV. 40% ABV is 80 proof.' },
        { term: 'Neutral spirit', definition: 'Alcohol distilled so strongly (in the US, at 95% ABV or 190 proof or more) that little flavor of the raw material remains. Vodka and the base of gin are neutral spirits.' },
        { term: 'Cask strength', definition: 'Whiskey bottled at the strength it came out of the cask, without water added to bring it down; often around 50-65% ABV.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Whiskey is distilled from fermented grain and almost always aged in wood; the base material is what separates it from brandy (fruit), rum (cane), tequila (agave) and gin (flavored neutral spirit). In the US, vodka comes off the still at 190 proof or more and whisky below it. US proof is twice the ABV, and 40% ABV is the usual legal minimum for bottling. Spelling follows the country, and the word means "water of life". Color, age and legs are poor guides to quality.`,
    },
  ],
  quiz: [
    {
      id: 'l1-what-makes-whiskey-q1',
      type: 'numeric',
      prompt: 'A cask strength whiskey is labeled 62.5% ABV. What is its US proof?',
      answer: 125,
      tolerance: 0,
      unit: 'proof',
      explanation: 'US proof is exactly twice the ABV, so 62.5 × 2 = 125 proof. Halving the figure (31.25) is the mistake to avoid: you halve only when going from proof back to ABV.',
    },
    {
      id: 'l1-what-makes-whiskey-q2',
      type: 'single',
      prompt: 'Under US federal rules, which still strength separates neutral spirits such as vodka from whisky?',
      options: ['190 proof (95% ABV)', '160 proof (80% ABV)', '125 proof (62.5% ABV)', '80 proof (40% ABV)'],
      answer: 0,
      explanation: 'Neutral spirits are distilled at 190 proof (95% ABV) or more, and whisky must be distilled below 190 proof (27 CFR 5.142 and 5.143). 80 proof is the minimum bottling strength, which is a different rule.',
    },
    {
      id: 'l1-what-makes-whiskey-q3',
      type: 'match',
      prompt: 'Match each spirit to the base material that defines it.',
      pairs: [
        { left: 'Whiskey', right: 'Cereal grain' },
        { left: 'Brandy', right: 'Grapes or other fruit' },
        { left: 'Rum', right: 'Sugar cane juice or molasses' },
        { left: 'Tequila', right: 'Blue agave' },
      ],
      explanation: 'The raw material decides the spirit family: whiskey comes from grain, brandy from fruit, rum from cane and tequila from blue agave. Color is no help here, because an aged brandy or rum can look just like whiskey; only the base material sorts them.',
    },
    {
      id: 'l1-what-makes-whiskey-q4',
      type: 'truefalse',
      prompt: 'If one whiskey is darker than another, it must be older.',
      answer: false,
      explanation: 'Color depends on cask type, how often the cask was used, warehouse climate and, in some styles, permitted caramel coloring. A dark young whiskey and a pale old one are both common.',
    },
    {
      id: 'l1-what-makes-whiskey-q5',
      type: 'single',
      prompt: 'The word "whiskey" comes from the Gaelic *uisce beatha* or *uisge beatha*. What does that phrase mean?',
      options: ['Water of life', 'Spirit of barley', 'Fire water', 'Gift of the glen'],
      answer: 0,
      explanation: 'Uisce beatha (Irish) and uisge beatha (Scottish Gaelic) mean "water of life", a translation of the Latin aqua vitae that medieval scholars used for distilled spirit. "Fire water" is a tempting guess because strong spirit burns, but the Gaelic phrase names neither fire nor any grain or place.',
    },
  ],
};
