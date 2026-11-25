export default {
  id: 'l1-grain-yeast-fire-wood',
  title: 'Grain, Yeast, Fire and Wood: Six Steps in Plain Words',
  summary:
    'The grains whiskey is made from and the flavors they give, what malting and peat do, the six production steps from milling to bottling, and how pot stills, column stills and oak casks shape the spirit.',
  minutes: 8,
  blocks: [
    {
      type: 'text',
      md: `Almost every whiskey in the world is made from the same short list: grain, water, yeast, heat and wood. The differences you taste come from choices along the way. Which grain? Peat smoke or none? Which still? What kind of cask, and for how long? This lesson walks through those choices in plain words. Level 3 returns to each step in technical depth.

### The grains

Grain supplies starch, and starch is what eventually becomes alcohol. Each grain also leaves its own flavor in the spirit.`,
    },
    {
      type: 'table',
      caption: 'Typical flavor tendencies. The recipe, still and cask can push any of these in other directions.',
      headers: ['Grain', 'Main job', 'Flavor it tends to give'],
      rows: [
        ['Malted barley', 'Supplies the enzymes that turn starch into sugar; the only grain in single malts', 'Malty, biscuity, cereal'],
        ['Corn (maize)', 'The main grain in bourbon and many grain whiskies', 'Sweet and round'],
        ['Rye', 'A flavoring grain in bourbon; the main grain in rye whiskey', 'Spicy, peppery, herbal'],
        ['Wheat', 'A softer flavoring grain; also used in grain whisky', 'Soft and bready'],
        ['Minor grains', 'Oats, millet, sorghum and rice, used by some producers', 'Varies: oats can add a creamy texture'],
      ],
    },
    {
      type: 'text',
      md: `### Malting: waking the barley up

Raw grain stores its energy as starch, and yeast cannot eat starch. Barley solves the problem itself once it is **malted**:

1. **Soak** the barley in water so it starts to germinate.
2. **Let it sprout** for several days. The sprouting grain builds enzymes that can later turn starch into sugar.
3. **Kiln-dry** it with hot air to stop the growth and keep the enzymes.

That is why malted barley appears in nearly every whiskey, even a bourbon that is mostly corn: a little malt converts the starch of the other grains. Most distilleries buy their malt from specialist maltsters rather than malting it themselves.`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Peat is the producer\'s choice',
      md: `If the kiln fire burns **peat** (partly decayed plant matter dug from bogs), its smoke coats the drying barley with compounds called phenols. They come through distillation as smoky, medicinal, tarry or seaweed-like flavors.

Peating is a decision each producer makes. Laphroaig, an Islay single malt, is heavily peated. Most Speyside single malts are unpeated. Plenty of producers make both kinds of spirit, and peated whiskies are also made in Ireland, Japan, the US and elsewhere.`,
    },
    {
      type: 'diagram',
      name: 'grain-to-glass',
    },
    {
      type: 'steps',
      title: 'The six steps at the distillery',
      items: [
        { title: '1. Milling', md: 'The grain (malted or not) is ground into a coarse flour called grist or meal, so hot water can reach the starch.' },
        { title: '2. Mashing', md: 'The ground grain is mixed with hot water. Enzymes turn the starch into sugar. Scotch-style distillers drain off the sweet liquid, called **wort**; most American distillers keep the grain in and ferment the whole **mash**.' },
        { title: '3. Fermentation', md: 'Yeast is added and turns the sugar into alcohol, carbon dioxide and flavor. After about 2-5 days the result is the **wash** (in the US, "distiller\'s beer"), at about 7-10% ABV.' },
        { title: '4. Distillation', md: 'The wash is heated in a still and the alcohol is collected and concentrated. In a pot still, only the middle of the run, the **heart**, is kept as spirit; a column still draws off the unwanted fractions as it runs. The result is clear new make, usually about 60-80% ABV from a pot still and up to about 94% from a column still making grain whisky.' },
        { title: '5. Maturation', md: 'The new make goes into wooden casks, usually oak, and rests for years. The wood adds color and flavor.' },
        { title: '6. Bottling', md: 'The whiskey is reduced with water to bottling strength (often 40-46% ABV), usually filtered, and filled into bottles.' },
      ],
    },
    {
      type: 'text',
      md: `### Why heating separates alcohol

Ethanol boils at about **78 °C** and water at **100 °C**. Heat the wash and the vapor that rises is richer in alcohol than the liquid left behind. Cool that vapor and you collect a stronger liquid.

A pot still does not give one uniform liquid. Each run comes off in three parts:

- **Heads** (first): the most volatile, sharp and solvent-like compounds.
- **Heart** (middle): the clean, balanced spirit the distiller wants.
- **Tails** (last): heavier, oily and sometimes stale-smelling compounds.

The distiller decides where to "cut" between them. A column still separates the same fractions continuously, drawing them off at different heights instead of at different times. Heads and tails are usually collected and redistilled with the next batch.`,
    },
    {
      type: 'compare',
      title: 'Two kinds of still',
      columns: [
        {
          heading: 'Pot still',
          points: [
            'A copper pot with a neck; looks like a giant kettle',
            'Works in batches: fill, heat, empty, repeat',
            'Usually run twice (three times is common in Ireland)',
            'Gives a heavier, richer spirit with more of the grain and yeast character',
            'Used for single malt Scotch and many craft whiskeys',
          ],
        },
        {
          heading: 'Column still',
          points: [
            'A tall column fitted with perforated plates',
            'Runs continuously while wash is fed in',
            'Each plate acts like a small distillation, so it can reach higher strength',
            'Gives a lighter, cleaner spirit at large volume',
            'Used for most bourbon and for the grain whisky in blends',
          ],
        },
      ],
    },
    {
      type: 'text',
      md: `### Wood: where the color comes from

Spirit leaves the still as clear as water. Americans call it **white dog**; the Scotch industry calls it **new make**. Every bit of a whiskey's natural color comes from the cask.

Oak adds **color, vanilla, caramel, coconut, baking spice and tannin** (a drying grip on the gums), and it softens the raw edges of new spirit. Bourbon must go into **new charred oak** barrels, so it takes a lot from the wood quickly. Most Scotch, Irish, Canadian and Japanese whisky matures in **reused casks**, very often ex-bourbon barrels or casks that once held sherry or other wine, which give a gentler, slower effect.`,
    },
    {
      type: 'callout',
      variant: 'fact',
      title: "The angel's share, and why whiskey stops aging in the bottle",
      md: `A cask breathes. Some of the whiskey evaporates through the wood every year, and distillers call the loss the **angel's share**. In Scotland's cool, damp warehouses it is about **2% of the volume a year**. Hotter climates lose more: several percent a year is common in Kentucky, and very hot regions can lose 10% or more. These are typical ranges that vary by warehouse.

Once whiskey is bottled, the glass stops that exchange with the wood. A 12-year-old whiskey bottled in 2010 is still a 12-year-old whiskey today.`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'The Kentucky limestone water story',
      md: `Kentucky distillers often credit their water. It does matter: water filtered through the state's limestone is rich in calcium and low in iron. Calcium helps yeast ferment, and iron can spoil color and flavor. But its effect on the finished flavor is often overstated. Good whiskey is made with many kinds of water around the world, and distillers routinely treat or filter what they use.`,
    },
    {
      type: 'tasting',
      title: 'Kitchen nosing set (no alcohol needed)',
      md: `Gather these six items, smell each one slowly, and write down which grain or wood note it reminds you of before reading the right-hand column. You are training your nose to link everyday smells to the raw materials of whiskey. When you later taste a whiskey, try to find the same notes.`,
      flight: [
        { pour: 'Malted-milk biscuit (or malted milk powder)', lookFor: 'Malted barley: sweet, biscuity cereal.' },
        { pour: 'Cornbread (or sweetcorn)', lookFor: 'Corn: rounded sweetness, a little buttery.' },
        { pour: 'Dark rye bread', lookFor: 'Rye: earthy and spicy. Many rye breads contain caraway seeds; that aroma is the seed, so try to smell past it.' },
        { pour: 'Plain white bread roll', lookFor: 'Wheat: soft, gentle and bready.' },
        { pour: 'Vanilla pod (or a drop of vanilla extract)', lookFor: 'Oak: the vanilla note that oak casks give to whiskey.' },
        { pour: 'A slice of well-charred toast', lookFor: 'Barrel char: the toasty, slightly smoky note of a charred barrel.' },
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Malted barley', definition: 'Barley that has been soaked, sprouted and kiln-dried so that it carries enzymes able to turn starch into sugar.' },
        { term: 'Peat', definition: 'Partly decayed plant matter dug from bogs. Burned while malt is kiln-dried, its smoke gives whiskey smoky, medicinal flavors.' },
        { term: 'Wash', definition: 'The fermented liquid that goes into the still, at about 7-10% ABV. American distillers call it distiller\'s beer.' },
        { term: 'Heart', definition: 'The middle part of a pot-still distillation run, kept as spirit. The earlier heads and later tails are set aside, usually to be redistilled.' },
        { term: 'New make', definition: 'Clear spirit fresh from the still, before any time in wood. In the US it is often called white dog.' },
        { term: 'Pot still', definition: 'A copper still that distills one batch at a time, usually twice; it tends to give a heavier, more flavorful spirit.' },
        { term: 'Column still', definition: 'A tall still with internal plates that runs continuously and can make a lighter, stronger spirit at large volume.' },
        { term: "Angel's share", definition: 'The whiskey lost by evaporation through the cask each year; about 2% a year in Scotland and more in hot climates.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Grain brings starch and flavor: barley malty, corn sweet, rye spicy, wheat soft. Malting builds the enzymes that turn starch to sugar, and peat smoke during kilning is an optional extra. At the distillery the six steps are milling, mashing, fermentation, distillation, maturation and bottling. Distillation works because ethanol boils at about 78 °C, and the distiller keeps only the heart. Pot stills run in batches and give heavier spirit; column stills run continuously and give lighter spirit. Oak gives all the natural color, takes an angel's share each year, and stops working once the whiskey is bottled.`,
    },
  ],
  quiz: [
    {
      id: 'l1-grain-yeast-fire-wood-q1',
      type: 'order',
      prompt: 'Put these production steps in order, first to last.',
      items: ['Milling', 'Mashing', 'Fermentation', 'Distillation', 'Maturation'],
      explanation: 'Grain is ground (milling), its starch is turned to sugar in hot water (mashing), yeast makes the wash (fermentation), the still concentrates the alcohol (distillation), and the spirit rests in casks (maturation) before the sixth step, bottling. Putting distillation before fermentation is the slip to avoid: only a fermented liquid has alcohol to collect.',
    },
    {
      id: 'l1-grain-yeast-fire-wood-q2',
      type: 'match',
      prompt: 'Match each grain to the flavor it typically gives.',
      pairs: [
        { left: 'Corn', right: 'Sweet and round' },
        { left: 'Rye', right: 'Spicy, peppery, herbal' },
        { left: 'Wheat', right: 'Soft and bready' },
        { left: 'Malted barley', right: 'Malty, biscuity cereal' },
      ],
      explanation: 'Corn tends to give sweetness, rye spice, wheat softness and malted barley a biscuity cereal note. Rye and wheat are the pair most often swapped: both are flavoring grains in bourbon, but rye pushes it spicy and wheat pushes it soft.',
    },
    {
      id: 'l1-grain-yeast-fire-wood-q3',
      type: 'single',
      prompt: 'Which description fits a column still?',
      options: [
        'It runs continuously and can make a lighter, stronger spirit',
        'It works one batch at a time and is usually run twice',
        'It is a copper pot with a neck, shaped like a giant kettle',
        'It is the still that single malt Scotch must be made in',
      ],
      answer: 0,
      explanation: 'A column still runs continuously, and its plates let it reach higher strength with a lighter spirit. Batch working, the kettle shape and single malt Scotch all describe the pot still.',
    },
    {
      id: 'l1-grain-yeast-fire-wood-q4',
      type: 'truefalse',
      prompt: 'Once whiskey is bottled, it stops gaining flavor from the oak.',
      answer: true,
      explanation: 'True. Aging needs contact with the cask, and glass stops that exchange. A 12-year-old whiskey stays a 12-year-old whiskey however long the bottle sits on a shelf, so there is no reason to save an everyday bottle in the hope that it improves.',
    },
    {
      id: 'l1-grain-yeast-fire-wood-q5',
      type: 'multi',
      prompt: 'Which of these does the oak wood of a cask give to whiskey during maturation? Select all that apply.',
      options: [
        'Color',
        'Vanilla and caramel notes',
        'Tannin',
        'Smoky peat phenols from the malt kiln',
        'Peppery notes from rye in the mash',
      ],
      answer: [0, 1, 2],
      explanation: 'Oak gives whiskey all its natural color, notes such as vanilla and caramel, and tannin. Peat smoke is tempting because whiskey can taste smoky, but those phenols are added earlier, when the malt is dried over a peat fire, and rye pepper comes from the grain in the mash, so neither comes from the wood.',
    },
  ],
};
