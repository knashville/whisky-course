export default {
  id: 'l4-scotch-whisky-regulations',
  title: 'The Scotch Whisky Regulations 2009 in Depth',
  summary:
    'Read the Scotch Whisky Regulations 2009 clause by clause, apply the rules on categories, place names, distillery names, ages and vintages, and judge cask eligibility under the 2019 amendment to the Technical File.',
  minutes: 12,
  blocks: [
    {
      type: 'text',
      md: `### One statute, one definition

Scotch whisky is one of the most tightly defined drinks in the world, and the rules reach far beyond production. They control what a label may say, which place names it may use and where a single malt must be bottled.

The governing law is the **Scotch Whisky Regulations 2009** (SI 2009/2890), in force from **23 November 2009**. They replaced the Scotch Whisky Act 1988 and the Scotch Whisky Order 1990, and they regulate labelling, packaging, advertising and promotion as well as production. Alongside them sits the **Scotch Whisky Technical File**, the specification behind Scotch whisky's status as a geographical indication (GI). The regulations also stop anyone from making any whisky in Scotland other than Scotch whisky.

This lesson cites the regulations by number ("reg. 3"). Learn the numbers for the six rules you will apply most: reg. 3 (definition and categories), reg. 7 (single malt leaving Scotland), reg. 8 (category names), reg. 9 (distillery names), reg. 10 (places) and reg. 12 (ages and vintages). Reg. 11 adds one ban.`,
    },
    {
      type: 'table',
      caption: 'The definition of Scotch Whisky, regulation 3(1), clause by clause',
      headers: ['Clause', 'Requirement', 'What it rules out'],
      rows: [
        ['(a) Place and materials', 'Distilled at a distillery in Scotland from water and malted barley, to which only whole grains of other cereals may be added', 'Molasses, sugar, cereal flour or bought-in extracts'],
        ['(a)(i) Mashing', 'All processed at that distillery into a mash', 'Wort or wash brewed somewhere else'],
        ['(a)(ii) Conversion', 'Converted into a fermentable substrate only by endogenous enzyme systems', 'Added commercial enzymes'],
        ['(a)(iii) Fermentation', 'Fermented only by adding yeast', 'Adding other micro-organisms, such as bacterial cultures'],
        ['(b) Distillation', 'Distilled at less than 94.8% ABV, so the distillate has an aroma and taste derived from its raw materials and method', 'Spirit collected at 94.8% ABV or above'],
        ['(c) to (f) Maturation', 'Matured only in oak casks of 700 litres or less, only in Scotland, for at least 3 years, only in an excise warehouse or a permitted place', 'Chestnut casks, 900 L vats, any months in England'],
        ['(g) Character', 'Retains the colour, aroma and taste derived from its raw materials, production and maturation', 'Treatments that strip out or impose character'],
        ['(h) Additions', 'Nothing added except water, plain caramel colouring, or both', 'Sugar, flavouring, wine, oak extract'],
        ['(i) Strength', 'A minimum alcoholic strength of 40% ABV', '39.5% ABV'],
      ],
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Categories: regulations 3(2), 7 and 8',
      md: `**Reg. 3(2)** defines five categories, and **reg. 8** makes one of them the compulsory sales description, shown clearly and conspicuously on the label:

- **Single Malt Scotch Whisky:** distilled in one or more batches at a single distillery, from water and malted barley with no other cereals, **in pot stills**.
- **Single Grain Scotch Whisky:** distilled at a single distillery, from water and malted barley with or without whole grains of other cereals, and not qualifying as single malt or as a blend.
- **Blended Malt Scotch Whisky:** single malts from more than one distillery.
- **Blended Grain Scotch Whisky:** single grains from more than one distillery.
- **Blended Scotch Whisky:** one or more single malts with one or more single grains.

**Reg. 7:** since **23 November 2012**, Single Malt Scotch Whisky may not leave Scotland for another country except in a bottle labelled for retail sale. England counts as another country here, so in practice single malt must be bottled in Scotland.`,
    },
    {
      type: 'text',
      md: `### Place names and distillery names

**Reg. 10** protects two **localities**, **Campbeltown** and **Islay**, and three **regions**, **Highland**, **Lowland** and **Speyside**. A label may use one of these names only if the whisky was **wholly distilled** in that locality or region. A blend that is mostly Islay malt still cannot call itself "Islay" if any component was distilled elsewhere. "Islands" is an informal grouping inside the Highland region, with no protected status.

**Reg. 9** protects distillery names. A whisky may carry the name of a distillery, or a name likely to be mistaken for one, only if it was wholly distilled at that distillery. The same regulation bars presenting a single malt or single grain in a way likely to mislead people about the distillery or place where it was made.

**Reg. 11** bans the description **"pure malt"** and its derivatives. Because reg. 8 demands one of the five category names, older terms such as "vatted malt" cannot stand in for "Blended Malt Scotch Whisky" either.`,
    },
    {
      type: 'text',
      md: `### Ages and vintages (reg. 12)

- Any **age or maturation statement** must give the age of the **youngest** whisky in the bottle. A single drop of 3-year-old spirit makes a 25-year-old vatting a 3-year-old for labeling purposes.
- Age counts the time spent maturing in oak casks in Scotland, including time in a finishing cask. Time in a bottle or a steel vat does not count.
- A **year of distillation** (a vintage) may appear only if **all** the whisky was distilled in that single year, and the label also shows the **year of bottling** or the **age**, in the same field of vision as the vintage.

The 3-year minimum in clause (e) means that a no-age-statement Scotch is at least 3 years old, whatever its packaging suggests.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'The 2019 cask amendment (Scotch Whisky Technical File, June 2019)',
      md: `After a public consultation, the Technical File was amended in June 2019 to spell out which casks may be used. Scotch may mature in **new oak casks** or in **oak casks previously used to mature wine (still or fortified), beer or ale, or spirits**, with these exceptions:

- wine, beer, ale or spirits **produced from or made with stone fruits**;
- beer or ale with **fruit, flavouring or sweetening added after fermentation**;
- spirits with **fruit, flavouring or sweetening added after distillation**.

The previous maturation must also be **part of the traditional process** for that drink, and casks must be emptied before filling. Older textbooks list fewer cask types, because they predate the amendment.`,
    },
    {
      type: 'table',
      caption: 'Applying the 2019 cask rules (all casks are oak unless stated)',
      headers: ['Previous contents', 'Allowed for Scotch?', 'Reason'],
      rows: [
        ['Oloroso sherry', 'Yes', 'Fortified wine, traditionally matured in oak'],
        ['Reposado tequila', 'Yes', 'Agave spirit whose tradition includes cask aging'],
        ['Calvados', 'Yes', 'Apple brandy; apples are pome fruit, not stone fruit'],
        ['Slivovitz (plum brandy)', 'No', 'Plums are stone fruit'],
        ['Cherry beer', 'No', 'Made with stone fruit, and fruit added after fermentation'],
        ['Spiced rum', 'No', 'Flavouring added after distillation'],
        ['Gin', 'No', 'Cask maturation is not part of gin\'s traditional process'],
        ['Chestnut cask (any previous use)', 'No', 'Clause (c) requires oak'],
      ],
    },
    {
      type: 'compare',
      title: 'Where Scotch is stricter than its neighbours',
      columns: [
        { heading: 'Scotch (SWR 2009)', points: ['Oak casks only', 'Endogenous malt enzymes only', 'Casks of 700 L or less', 'Single malt must be pot-distilled and bottled in Scotland'] },
        { heading: 'Irish (Technical File)', points: ['Wooden casks, not necessarily oak', 'Malt diastase with or without other natural enzymes', 'Casks of 700 L or less', 'No bottling-location rule'] },
        { heading: 'US bourbon (27 CFR 5.143)', points: ['New charred oak containers', 'Added enzymes allowed', 'No cask-size cap', 'No still-type rule'] },
      ],
    },
    {
      type: 'text',
      md: `### Who enforces the rules

The **Scotch Whisky Association (SWA)** polices the name worldwide, monitoring labels and taking legal action against fakes and misleading uses in many countries. Since the Brexit transition period ended, Scotch whisky has been protected under the **UK GI scheme** for spirit drinks, which began on **1 January 2021**, and it remains protected in the EU. Many other countries register it as a GI under trade agreements, so a breach can be pursued far from Scotland.`,
    },
    {
      type: 'table',
      caption: 'Red-pen review: six invented labels with one planted violation each',
      headers: ['Label claim', 'Problem', 'Rule', 'Compliant rewrite'],
      rows: [
        ['"Islay Single Malt Scotch Whisky" from a Speyside distillery', 'Locality name on whisky not distilled there', 'Reg. 10', '"Speyside Single Malt Scotch Whisky", or no place name'],
        ['"12 Years Old" on a vatting that includes 10-year-old malt', 'Age statement older than the youngest whisky', 'Reg. 12', '"10 Years Old", or remove the 10-year-old component'],
        ['"39.5% vol"', 'Below the minimum strength', 'Reg. 3(1)(i)', 'Bottle at 40% ABV or more'],
        ['Single malt shipped to England in bulk and bottled there', 'Single malt left Scotland outside a retail bottle', 'Reg. 7', 'Bottle in Scotland'],
        ['"Pure Malt Scotch Whisky" on a mix of two distilleries\' malts', 'Banned term and wrong category', 'Regs 8 and 11', '"Blended Malt Scotch Whisky"'],
        ['"Distilled 2010" on whisky distilled in 2010 and 2011, with no age or bottling year', 'Vintage not from a single year, and no age or bottling year beside it', 'Reg. 12', 'Use only 2010 spirit and add "Bottled 2025" (or the age) in the same field of vision'],
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: Speyside is a locality, and "Islands" is protected',
      md: `Speyside is a protected **region**, alongside Highland and Lowland. Only Islay and Campbeltown are protected **localities**. "Islands" is a convenient name for producers on islands such as Skye, Orkney, Mull and Jura, which sit inside the Highland region, and it has no legal protection of its own.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Endogenous enzymes', definition: 'The enzymes a grain makes itself, chiefly during malting. Scotch Whisky may be converted only by these, so added commercial enzymes are forbidden.' },
        { term: 'Excise warehouse', definition: 'A bonded warehouse approved by HM Revenue and Customs where spirit is stored with duty suspended. Scotch must mature in one, or in another permitted place, in Scotland.' },
        { term: 'Year of distillation (vintage)', definition: 'A label statement of the year a Scotch was distilled. SWR 2009 allows it only if all the whisky was distilled that year and the age or bottling year appears in the same field of vision.' },
        { term: 'Stone fruit', definition: 'Fruit with a single hard stone, such as cherry, plum, peach and apricot. Since 2019 Scotch may not mature in casks that held wine, beer or spirits made from them.' },
        { term: 'Compulsory sales description', definition: 'The category name, such as "Blended Malt Scotch Whisky", that reg. 8 requires on every bottle of Scotch. It must be one of the five legal categories.' },
        { term: 'Scotch Whisky Technical File', definition: 'The official product specification that supports Scotch whisky\'s geographical indication. Its June 2019 amendment set out which previously used casks are allowed.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

SWR 2009 (SI 2009/2890, in force 23 November 2009) defines Scotch in reg. 3: made at a Scottish distillery from malted barley and whole cereals, endogenous enzymes and yeast only, distilled below 94.8% ABV, matured in Scotland in oak of 700 L or less for 3 years, nothing added but water and plain caramel, and at least 40% ABV. Reg. 8 makes the category name compulsory, reg. 7 keeps single malt bottling in Scotland since 2012, regs 9 and 10 reserve distillery and place names for whisky wholly distilled there, reg. 11 bans "pure malt", and reg. 12 ties ages to the youngest whisky and vintages to a single year. Since 2019, wine, beer and spirit casks are allowed, except stone-fruit, flavoured or sweetened products and non-traditional uses.`,
    },
  ],
  quiz: [
    {
      id: 'l4-scotch-whisky-regulations-q1',
      type: 'multi',
      context: `**Proposed label from a Speyside distillery**
PURE MALT Scotch Whisky · Speyside
Matured 8 years, finished 9 months in ex-peach-brandy casks
38% Alc./Vol. · Bottled in Scotland`,
      prompt: 'Select every breach of SWR 2009 or the Technical File on this label.',
      options: [
        '"Pure Malt"',
        '38% ABV',
        'Finishing in casks that held a stone-fruit spirit',
        'Use of "Speyside"',
        'An 8-year age statement on a finished whisky',
        '"Bottled in Scotland"',
      ],
      answer: [0, 1, 2],
      explanation:
        'Reg. 11 bans "pure malt", reg. 3 sets a 40% ABV minimum, and the 2019 Technical File excludes casks that held stone-fruit spirits such as peach brandy. Speyside is correct for whisky wholly distilled there, finishing time counts toward the age, and bottling in Scotland is required for single malt and allowed for any category.',
    },
    {
      id: 'l4-scotch-whisky-regulations-q2',
      type: 'match',
      prompt: 'Match each rule to its place in SWR 2009.',
      pairs: [
        { left: 'Definitions of the five categories', right: 'Regulation 3(2)' },
        { left: 'Single malt may leave Scotland only in a retail-labelled bottle', right: 'Regulation 7' },
        { left: 'One category name must appear as the sales description', right: 'Regulation 8' },
        { left: 'Distillery names only for whisky wholly distilled there', right: 'Regulation 9' },
        { left: 'Locality and region names', right: 'Regulation 10' },
        { left: 'Ban on "pure malt"', right: 'Regulation 11' },
        { left: 'Age and year-of-distillation statements', right: 'Regulation 12' },
      ],
      explanation:
        'Reg. 3 defines Scotch and its categories, reg. 7 governs movement out of Scotland, reg. 8 makes the category compulsory, regs 9 and 10 protect distillery and place names, reg. 11 bans "pure malt", and reg. 12 controls ages and vintages. Citing the right regulation is the first step of any label review.',
    },
    {
      id: 'l4-scotch-whisky-regulations-q3',
      type: 'truefalse',
      context: `**ISLE OF GULLS**
Islay Blended Scotch Whisky
All of its malt whiskies were distilled on Islay; its grain whisky was distilled in Fife.`,
      prompt: 'Using "Islay" on this label is lawful because every malt whisky in the blend came from Islay.',
      answer: false,
      explanation:
        'Reg. 10 allows a locality name only on whisky wholly distilled in that locality. The Fife grain whisky breaks the rule, however much Islay malt the blend contains.',
    },
    {
      id: 'l4-scotch-whisky-regulations-q4',
      type: 'single',
      prompt: 'Under the 2019 Technical File amendment, which oak cask may NOT be used to mature or finish Scotch Whisky?',
      options: [
        'A cask that held Sauternes (sweet white wine)',
        'A cask that held Madeira',
        'A cask that held kirsch (cherry brandy)',
        'A cask that held Irish whiskey',
      ],
      answer: 2,
      explanation:
        'Cherries are stone fruit, so a cask that held kirsch is excluded. Sauternes, Madeira and Irish whiskey are all traditionally matured in oak casks. Sauternes is sweet, but the sweetening exclusion covers only beer and spirits sweetened after production, and grape wine is not a stone-fruit product.',
    },
    {
      id: 'l4-scotch-whisky-regulations-q5',
      type: 'numeric',
      context: `**Vatting sheet: single malt, one distillery**
- 60%: 16 years in refill hogsheads
- 35%: 12 years in first-fill bourbon barrels
- 5%: 9 years in refill hogsheads, then 2 years in an oloroso butt`,
      prompt: 'What is the oldest age statement this vatting may carry, in whole years?',
      answer: 11,
      tolerance: 0,
      unit: 'years',
      explanation:
        'Reg. 12 ties the age to the youngest whisky. The 5% component has matured 9 + 2 = 11 years in oak in Scotland, and finishing time counts, so the youngest is 11 years. The volume-weighted average (about 14 years) and the 9-year figure are the tempting wrong answers.',
    },
    {
      id: 'l4-scotch-whisky-regulations-q6',
      type: 'multi',
      prompt: 'Which facts would each stop a spirit from being Scotch Whisky? Select all that apply.',
      options: [
        'Commercial enzymes were added to speed conversion.',
        'It was distilled to 94.9% ABV.',
        'It spent 6 of its 36 months maturing in Cumbria, England.',
        'It matured in 650-litre oak casks.',
        'It was coloured with plain caramel (E150a).',
        'Whole grains of unmalted wheat were added to the mash.',
      ],
      answer: [0, 1, 2],
      explanation:
        'Scotch allows only endogenous enzymes, requires distillation below 94.8% ABV, and must mature only in Scotland. Casks up to 700 L, plain caramel and whole grains of other cereals are all permitted, which is why they make close distractors.',
    },
  ],
};
