export default {
  id: 'l2-scotch-categories-places',
  title: 'Scotch: Five Categories, Five Places',
  summary:
    'The legal definition of Scotch whisky, the five categories every label must use, and the three protected regions and two protected localities. Regional style is a tendency; the producer decides the flavor.',
  minutes: 10,
  blocks: [
    {
      type: 'text',
      md: `### Why categories matter

Every bottle of Scotch must carry one of five category names, and each name tells you what grain went in, how many distilleries were involved and, usually, what kind of still made it. Place names work differently. They tell you where the whisky was distilled, but much less about how it tastes than marketing suggests.

Both sets of rules come from the **Scotch Whisky Regulations 2009** (SWR 2009), the UK law that defines Scotch. This lesson gives you the headline numbers and the categories. Level 4 reads the regulations clause by clause.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Law: the headline definition of Scotch whisky (SWR 2009)',
      md: `Scotch whisky must be:

- made at a distillery in Scotland from **water and malted barley**, with whole grains of other cereals allowed;
- distilled at **less than 94.8% ABV**, so it keeps the aroma and taste of its raw materials;
- matured **in Scotland** in **oak casks of 700 L or less** for **at least 3 years**;
- given nothing but **water** and **plain caramel coloring (E150a)**;
- bottled at **40% ABV or more**.`,
    },
    {
      type: 'table',
      caption: 'The five legal categories of Scotch whisky (SWR 2009). The category name must appear on the label.',
      headers: ['Category', 'What goes in', 'Distilleries', 'Typical still'],
      rows: [
        ['Single Malt Scotch Whisky', 'Water and malted barley only', 'One', 'Pot stills, in batches (required by law)'],
        ['Single Grain Scotch Whisky', 'Malted barley plus other whole cereals, usually wheat or maize', 'One', 'Usually a continuous column still'],
        ['Blended Malt Scotch Whisky', 'Single malts only', 'Two or more', 'Pot stills (it is all single malt)'],
        ['Blended Grain Scotch Whisky', 'Single grains only', 'Two or more', 'Usually column stills'],
        ['Blended Scotch Whisky', 'One or more single malts with one or more single grains', 'Usually many', 'Both'],
      ],
    },
    {
      type: 'text',
      md: `### Blends carry the industry

Single malts win the headlines, but **Blended Scotch** is the large majority of Scotch by volume. Even by value, where malts command higher prices, bottled blends earned about **60%** of Scotch export revenue in 2025 against about **29%** for single malt, according to the Scotch Whisky Association.

Think of a blend as a painting. **Grain whisky**, made in column stills at high strength, is the light, sweet canvas. It is still a full whisky with at least 3 years in oak. **Malt whiskies** are the colors: one adds fruit, another honey, another smoke. A blender may use dozens of components to keep the same flavor year after year.

"Single" means one distillery. A single malt can combine hundreds of casks from that distillery.`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: the age on the label is the average age',
      md: `An **age statement** on Scotch gives the age of the **youngest** whisky in the bottle. A 12-year-old blend may contain 25-year-old malt, but nothing younger than 12 years.

A bottle with **no age statement (NAS)** tells you nothing about the mix of ages, but the law still applies: every drop is at least **3 years old**.`,
    },
    {
      type: 'text',
      md: `### Regions and localities

SWR 2009 protects five geographical names, in two tiers:

- **Protected regions:** Highland, Lowland and Speyside.
- **Protected localities:** Islay and Campbeltown.

Speyside sits geographically inside the Highlands but is its own protected region. **"Islands"** is a popular grouping for distilleries on Skye, Orkney, Mull, Jura, Arran and other islands, but it is not a protected name. Legally, most island distilleries outside Islay, including those on Skye, Orkney, Mull and Jura, fall inside the Highland region.`,
    },
    {
      type: 'table',
      caption: 'The five protected names. The style column describes tendencies; no law sets a regional flavor.',
      headers: ['Name', 'Legal status', 'Snapshot', 'Producers to know'],
      rows: [
        ['Speyside', 'Protected region', 'The densest cluster: around 50 malt distilleries, roughly a third of Scotland\'s total (counts change every year). Often fruity, floral and honeyed; sherry casks are common; mostly unpeated.', 'Glenfiddich, The Glenlivet, The Macallan'],
        ['Highland', 'Protected region', 'The largest and most varied region, from light and floral to rich, waxy or smoky. Includes most of the island distilleries outside Islay.', 'Talisker (Isle of Skye), Highland Park (Orkney), Glenmorangie'],
        ['Lowland', 'Protected region', 'Lighter, grassy and floral styles, with a tradition of triple distillation.', 'Auchentoshan (still triple-distills)'],
        ['Islay', 'Protected locality', 'Famous for heavily peated malts, though not every distillery peats its spirit.', 'Laphroaig, Lagavulin, Ardbeg (heavily peated); Bunnahabhain, Bruichladdich (much of their spirit unpeated)'],
        ['Campbeltown', 'Protected locality', 'Once about 30 distilleries; 3 were working in early 2026. Often oily, briny and lightly smoky.', 'Springbank, Glen Scotia, Glengyle'],
      ],
    },
    {
      type: 'callout',
      variant: 'history',
      title: 'History: the rise and fall of Campbeltown',
      md: `In the 19th century this small port on the Kintyre peninsula had around **30 distilleries** and called itself the whisky capital of the world. Overproduction, falling quality and the loss of export markets, including the United States during Prohibition, closed almost all of them. By the 1930s only **Springbank** and **Glen Scotia** survived. **Glengyle** reopened on an old distillery site in 2004 and sells its whisky as Kilkerran, bringing the count to three. A new distillery was nearing completion in the town in 2026, so check the current count.`,
    },
    {
      type: 'text',
      md: `### The producer decides the flavor

Regional styles are useful shorthand, but **producer choices shape a whisky more than geography does**. Five decisions matter most:

1. **Peat.** Smoke comes from peat burned while drying the malt. Peaty water and sea air add little or no smoke; the smoky compounds come from the kiln. That is why one Islay distillery can be heavily peated while its neighbor is not, and why some Speyside and Highland distilleries make peated batches.
2. **Fermentation.** Longer fermentations tend to give fruitier, more delicate spirit.
3. **Still shape.** Tall, narrow stills tend to give lighter spirit; short, squat ones heavier spirit.
4. **Cuts.** Where the distiller starts and stops collecting the heart of the run changes the weight of the spirit.
5. **Casks.** Ex-bourbon casks lean toward vanilla and fresh fruit, sherry casks toward dried fruit, nuts and spice.

Level 3 explains each of these in depth. For now, treat a region as a hint, never a guarantee.`,
    },
    {
      type: 'table',
      caption: 'Worked examples: sort a product description into its category.',
      headers: ['Product description', 'Category', 'Why'],
      rows: [
        ['Malted barley only, distilled twice in pot stills at one Speyside distillery', 'Single Malt Scotch Whisky', 'One distillery, malt only, pot stills'],
        ['Wheat plus some malted barley, made in a column still at one distillery', 'Single Grain Scotch Whisky', 'One distillery, but other cereals are used'],
        ['Malted barley only, but distilled in a column still at one distillery', 'Single Grain Scotch Whisky', 'Single malt must come from pot stills, so this cannot be a single malt'],
        ['Single malts from six distilleries vatted together, no grain whisky', 'Blended Malt Scotch Whisky', 'Malts only, more than one distillery'],
        ['Single grains from two distilleries combined', 'Blended Grain Scotch Whisky', 'Grains only, more than one distillery'],
        ['Thirty single malts and two single grains from many distilleries', 'Blended Scotch Whisky', 'Malt plus grain'],
      ],
    },
    {
      type: 'tasting',
      title: 'Optional tasting: Speyside style against Islay style',
      md: `Pour **15 mL** of each into matching glasses and taste the unpeated whisky first. Nose each glass before you sip. For each, note where four things appear: **cereal** (malt, biscuit), **fruit**, **cask** (vanilla, dried fruit, spice) and **smoke**. Then add a few drops of water and nose again. Two 15 mL pours at about 43% ABV come to under one US standard drink if you swallow both, so spit if you prefer, and drink water between glasses.

**Nose-only option:** nose both glasses without drinking, or use kitchen aromas instead: a malted-milk biscuit, honey and a baked apple for the first glass; smoky lapsang souchong tea and a piece of dried seaweed for the second.`,
      flight: [
        {
          pour: 'An unpeated single malt in the Speyside style, from ex-bourbon or sherry casks, around 40-46% ABV',
          lookFor: 'Cereal and honey, orchard or dried fruit, vanilla or sherried richness, and no smoke. Note which arrives first: grain, fruit or cask.',
        },
        {
          pour: 'A heavily peated Islay single malt, around 43-46% ABV',
          lookFor: 'Smoke, iodine or tar first. Then look past it for cereal, fruit and sweet vanilla. Note whether the smoke grows or fades with water.',
        },
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Single Grain Scotch Whisky', definition: 'Scotch made at one distillery from malted barley plus other whole cereals, or in a still other than a pot still. Most is made in column stills and used for blending.' },
        { term: 'Blended Grain Scotch Whisky', definition: 'A mix of single grain Scotch whiskies from two or more distilleries, with no malt whisky.' },
        { term: 'Age statement', definition: 'A number of years printed on a label. It must give the age of the youngest whisky in the bottle.' },
        { term: 'No age statement (NAS)', definition: 'A whisky sold without an age on the label. Scotch without an age statement is still at least 3 years old.' },
        { term: 'Plain caramel (E150a)', definition: 'The only coloring allowed in Scotch whisky, used to keep color consistent between batches. It is also permitted in Irish, Canadian and Japanese whisky.' },
        { term: 'Protected region', definition: 'One of three larger Scotch whisky areas named in SWR 2009: Highland, Lowland and Speyside.' },
        { term: 'Protected locality', definition: 'One of two smaller Scotch whisky areas named in SWR 2009: Islay and Campbeltown.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Scotch whisky is made in Scotland from water and malted barley (other whole cereals allowed), distilled below 94.8% ABV, matured in Scotland in oak casks of 700 L or less for at least 3 years, given only water and E150a caramel, and bottled at 40% ABV or more. The five categories are Single Malt (one distillery, malt only, pot stills), Single Grain, Blended Malt, Blended Grain and Blended Scotch, and blends dominate sales. An age statement gives the youngest whisky; NAS still means 3 years or more. Highland, Lowland and Speyside are protected regions; Islay and Campbeltown are protected localities; "Islands" is informal. Peat, fermentation, stills, cuts and casks shape flavor more than the map does.`,
    },
  ],
  quiz: [
    {
      id: 'l2-scotch-categories-places-q1',
      type: 'match',
      prompt: 'Match each description to its Scotch whisky category.',
      pairs: [
        { left: 'Malted barley only, pot stills, one distillery', right: 'Single Malt Scotch Whisky' },
        { left: 'Wheat and malted barley, column still, one distillery', right: 'Single Grain Scotch Whisky' },
        { left: 'Single malts from three distilleries, no grain', right: 'Blended Malt Scotch Whisky' },
        { left: 'Single grains from two distilleries, no malt', right: 'Blended Grain Scotch Whisky' },
        { left: 'Malt and grain whiskies from many distilleries', right: 'Blended Scotch Whisky' },
      ],
      explanation:
        '"Single" means one distillery and "blended" means more than one. Malt means malted barley only from pot stills; grain allows other cereals and usually column stills. Blended Scotch Whisky is the only category that combines malt with grain.',
    },
    {
      id: 'l2-scotch-categories-places-q2',
      type: 'multi',
      prompt: 'Which statements about Scotch whisky places are correct? Select all that apply.',
      options: [
        'Islay and Campbeltown are protected localities',
        'Speyside is a protected region',
        '"Islands" is a protected region',
        'Every Islay distillery makes heavily peated spirit',
        'Talisker and Highland Park fall within the Highland region',
      ],
      answer: [0, 1, 4],
      explanation:
        'SWR 2009 protects three regions (Highland, Lowland, Speyside) and two localities (Islay, Campbeltown). "Islands" is an informal grouping, so Skye\'s Talisker and Orkney\'s Highland Park are legally Highland whiskies. Islay is known for peat, but Bunnahabhain and Bruichladdich make much of their spirit unpeated.',
    },
    {
      id: 'l2-scotch-categories-places-q3',
      type: 'truefalse',
      prompt: 'A Scotch whisky sold with no age statement may contain whisky younger than 3 years.',
      answer: false,
      explanation:
        'Every Scotch whisky must mature at least 3 years in oak in Scotland, whatever the label says. "No age statement" only means the producer chose not to print the age of the youngest whisky.',
    },
    {
      id: 'l2-scotch-categories-places-q4',
      type: 'numeric',
      context: `**BLEND RECIPE**  \n60% grain whisky aged 12 years  \n25% malt whisky aged 15 years  \n15% malt whisky aged 25 years`,
      prompt: 'What is the oldest age statement this blended Scotch may carry, in years?',
      answer: 12,
      tolerance: 0,
      unit: 'years',
      explanation:
        'An age statement gives the age of the youngest whisky in the bottle, here the 12-year-old grain. The 25-year-old malt adds character but cannot raise the number, and an average age is never used.',
    },
    {
      id: 'l2-scotch-categories-places-q5',
      type: 'single',
      context: `**PRODUCT SPEC**  \nGrain spirit from wheat and malted barley, distilled in Scotland at 95.0% ABV  \nMatured 4 years in 250 L oak casks in Scotland  \nBottled at 40% ABV, nothing added but water`,
      prompt: 'Can this product be sold as Scotch whisky?',
      options: [
        'No, because it was distilled above the 94.8% ABV limit',
        'Yes, as Single Grain Scotch Whisky',
        'No, because grain whisky must mature at least 5 years',
        'No, because wheat is not allowed in Scotch whisky',
      ],
      answer: 0,
      explanation:
        'Scotch must be distilled at less than 94.8% ABV, and 95.0% is over the line. Everything else passes: other whole cereals such as wheat are allowed, the minimum maturation is 3 years, and the casks are oak and under 700 L.',
    },
    {
      id: 'l2-scotch-categories-places-q6',
      type: 'single',
      prompt:
        'Two Islay distilleries stand a few miles apart. One makes heavily peated spirit and the other makes mostly unpeated spirit. What best explains the difference?',
      options: [
        'They use malt dried with different amounts of peat smoke',
        'One draws its water from peaty streams and the other does not',
        'One matures its casks by the sea, where the salt air adds smoke',
        'One sits in the Islay locality and the other in the Islands region',
      ],
      answer: 0,
      explanation:
        'Smoke comes from peat burned while the malt is dried, so the peat level is each producer\'s choice of malt. Peaty water and sea air are popular explanations, but neither puts heavy smoke into the spirit. "Islands" is not a legal region, and both distilleries are in the Islay locality.',
    },
  ],
};
