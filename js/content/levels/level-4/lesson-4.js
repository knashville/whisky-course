export default {
  id: 'l4-america-in-depth',
  title: 'America in Depth: Kentucky, Tennessee, Indiana and the Craft Map',
  summary:
    'See how US whiskey production is really organized: Kentucky\'s warehouses, Indiana\'s contract stills, non-distiller producers, rye\'s regional heritage, mashbill design and the craft and American single malt frontier. Then read a label for who made it.',
  minutes: 13,
  blocks: [
    {
      type: 'text',
      md: `### From the rulebook to the industry

Lesson 1 gave you the federal clauses. This lesson shows how the industry works inside them, and how a few required statements let you work out who made a bottle.

### Kentucky by the numbers

Bourbon can be made anywhere in the United States, yet Kentucky dominates it. Industry bodies such as the Kentucky Distillers' Association (KDA) say about **95% of the world's bourbon** is made in Kentucky; treat that as an industry estimate and date it when you quote it. Based on inventories reported in early 2025, the KDA counted a record **16.1 million barrels of bourbon** aging in the state, part of **17.1 million barrels** of all spirits.

Production clusters around four towns: **Bardstown**, **Frankfort**, **Louisville** and **Lawrenceburg**. Most of that stock sits in **rickhouses**, multi-storey warehouses with wooden racks, and where a barrel sits inside one matters.

### Tennessee

Tennessee is the second great whiskey state, and its 2013 law (Lesson 1) makes one step its signature: before barreling, new make drips slowly through deep beds of **sugar-maple charcoal**, the Lincoln County Process. The charcoal strips out some congeners and gives a softer, sweeter-seeming spirit. Otherwise a Tennessee whiskey follows the bourbon numbers, and the state's output comes mostly from a few large distilleries alongside a growing craft scene.`,
    },
    {
      type: 'diagram',
      name: 'rickhouse',
    },
    {
      type: 'text',
      md: `### Rickhouse practice

A rickhouse is stacked in **ricks**, rows of rails holding barrels on their sides, over several floors. A barrel's floor, its rick and its distance from walls and windows set its temperature exposure.

- **Upper floors** run hotter, with wider daily and seasonal swings. Spirit moves in and out of the wood faster, color and oak flavor build quickly, and losses run high. In hot, dry air, water escapes faster than alcohol, so the **dump proof** (the strength when the barrel is emptied) often rises above the entry proof.
- **Lower floors** stay cooler and steadier. Maturation is slower, losses are smaller, and in humid conditions proof can hold or fall.
- **Walls and windows** add exposure; the **center** of a floor is the most moderate spot.

Producers manage this in four ways. Some **rotate** barrels between floors, though that is slow and labor-intensive. Most **blend across floors**, mixing hot and cool barrels to hit a house profile. Many **select single barrels** from particular spots for special releases. A few **heat-cycle** brick or masonry warehouses, warming them in winter so the spirit keeps moving in and out of the wood.`,
    },
    {
      type: 'table',
      caption: 'Typical outcomes by warehouse position. These are tendencies that vary by building and climate.',
      headers: ['Position', 'Conditions', 'Typical outcome', 'Common use'],
      rows: [
        ['Top floors', 'Hot, wide swings, often dry', 'Fast extraction; large losses; dump proof often rises', 'Bold barrel-proof and single-barrel picks'],
        ['Middle floors', 'Moderate', 'Balanced maturation', 'The backbone of most batches'],
        ['Ground floors', 'Cool, steady, often more humid', 'Slow extraction; small losses; proof steady or falling', 'Long-aged, softer barrels'],
        ['Near walls and windows', 'More exposure to sun and air', 'Variable, often faster', 'Selected or blended away'],
      ],
    },
    {
      type: 'text',
      md: `### Indiana and the sourcing economy

In **Lawrenceburg, Indiana**, a distillery that Seagram bought in **1933** became one of the largest **contract distilleries** in the country. After Seagram, it passed to Lawrenceburg Distillers Indiana (LDI) in 2007 and to MGP Ingredients in 2011; MGP now runs it as the Ross & Squibb Distillery. It makes whiskey to order and sells aged and new whiskey in bulk to many brands. Its Seagram-era recipe of **95% rye and 5% malted barley** defined a modern rye style.

**Non-distiller producers (NDPs)** sell whiskey they did not distill. They buy aged barrels, contract a distillery to make spirit to their recipe, or commission **private labels** for retailers. Many craft brands also sell **sourced whiskey** while their own stock matures.

The law forces only limited disclosure. The name-and-address line distinguishes "Distilled by" (only the distiller may say it) from "Bottled by", "Produced by" or "Blended by". For bourbon, rye and the straight types, **5.66(f)** forces a state of distillation when it differs from the address. That is why **"Distilled in Indiana"** on a Colorado-addressed rye points to Lawrenceburg. Blended whiskey needs no such statement, so its sources can stay hidden. Critics argue that invented backstories mislead buyers; defenders say blending and selecting are real crafts. More brands now name their sources voluntarily.`,
    },
    {
      type: 'steps',
      title: 'Sourcing sleuth: reading a US label for provenance',
      items: [
        { title: 'Read the verb', md: '"Distilled by" or "Distilled and bottled by" means the named company distilled it. "Bottled by", "Produced by" or "Blended by" alone usually means an NDP.' },
        { title: 'Find the state of distillation', md: 'A "Distilled in [state]" line on bourbon, rye or a straight whiskey tells you where it was made, and that the bottler\'s address is somewhere else.' },
        { title: 'Match the state to the industry map', md: 'Indiana points to the large Lawrenceburg contract distillery. Kentucky narrows it to dozens of distilleries, many of which sell bulk whiskey.' },
        { title: 'Look for a DSP number', md: 'Bottled-in-bond labels must identify the distillery and its DSP number, so bonded whiskey always reveals its distiller.' },
        { title: 'Infer the minimum age', md: 'An age statement gives the youngest whiskey. "Straight" means at least 2 years in the container its type requires (new charred oak for bourbon and rye), and a straight whiskey with no age statement is at least 4 years old. Bottled-in-bond means at least 4 years.' },
      ],
    },
    {
      type: 'table',
      caption: 'Sourcing sleuth: six invented labels, worked',
      headers: ['Label (invented)', 'Most likely distiller', 'NDP?', 'Minimum age implied'],
      rows: [
        ['Straight Rye Whiskey · 95% rye mash · Distilled in Indiana · Aged 2 years · Bottled by Red Mesa Spirits, Denver, CO', 'The large Lawrenceburg contract distillery', 'Yes', '2 years'],
        ['Kentucky Straight Bourbon Whiskey · no age statement · Distilled and bottled by Lantern Ford Distillery, Bardstown, KY', 'Lantern Ford itself', 'No', '4 years'],
        ['Straight Bourbon Whiskey · Distilled in Kentucky · 5 years old · Produced and bottled by Gilded Owl Co., Nashville, TN', 'An unnamed Kentucky distillery', 'Yes', '5 years'],
        ['Bottled-in-Bond Straight Bourbon · Distilled by Quarry Hill Distilling, DSP-KY-00000 · Bottled by Brook & Vine, Louisville, KY · 100 proof', 'Quarry Hill, named as the law requires', 'Yes, for this product', '4 years'],
        ['Blended Whiskey · 20% straight whiskey (3 years old), 80% grain neutral spirits · Blended and bottled by Harbor Light Spirits, Boston, MA', 'Unknown: blends need no state of distillation', 'Yes', '3 years for the straight whiskey'],
        ['American Single Malt Whisky · Aged 3 years · Distilled and bottled by Tall Pine Distillery, Portland, OR', 'Tall Pine itself, as the type requires one distillery', 'No', '3 years'],
      ],
    },
    {
      type: 'text',
      md: `### Rye heritage and mashbill design

Before Prohibition, rye was the whiskey of the mid-Atlantic. **Monongahela rye** from western Pennsylvania is remembered as bold and spicy; **Maryland rye** as a softer, sweeter style, often with more corn. Surviving records are thin, so treat these as traditional descriptions. Rye nearly vanished after Prohibition and has revived strongly since the 2000s.

New York distillers created **Empire Rye** in the mid-2010s, a **voluntary** standard with no legal force: at least **75% New York-grown rye**; mashed, fermented, distilled, barreled and aged at **one New York distillery**; distilled to 160 proof or less; and at least **2 years in new charred oak**.

Mashbill design is the main lever a distiller controls. A **high-rye bourbon** carries roughly 20-35% rye for spice; a **wheated bourbon** swaps rye for wheat for a softer palate; a **four-grain bourbon** uses corn, rye, wheat and malted barley together. Some craft distillers revive **heirloom corn** varieties such as Bloody Butcher for deeper grain flavor.`,
    },
    {
      type: 'compare',
      title: 'Two legal ryes, two styles',
      columns: [
        { heading: 'Kentucky-style rye (51-55% rye)', points: ['Just over the 51% minimum, with plenty of corn', 'Sweeter, rounder, closer to a high-rye bourbon', 'Often made on the same stills as bourbon'] },
        { heading: 'Indiana-style rye (95% rye, 5% malted barley)', points: ['Rye is almost the whole mash', 'Intense spice with herbal, minty, sometimes dill-like notes', 'Widely sourced from the Lawrenceburg distillery'] },
      ],
    },
    {
      type: 'text',
      md: `### Craft, small barrels and American single malt

The American Craft Spirits Association counted **2,131 active craft distillers** in August 2026, down 6.6% on 2025, with closures outnumbering openings for the first time. The core problem is cash flow: whiskey ties up money for years before it can be sold. Craft distillers bridge the gap with gin and vodka, with sourced whiskey and with **small barrels** of 5-15 gallons.

Small barrels have more wood surface per liter, so they pull color and oak flavor quickly. Oxidation, ester formation and the loss of harsh, volatile compounds take time, and a small barrel does not speed them up as much. The result often tastes woody and young at once. Treat rapid-aging claims (heat, pressure, sound waves, wood chips) with skepticism; Level 5 gives the chemistry.

**American single malt** gives craft producers room to experiment: any oak cask of 700 L or less, new or used, charred or not. Climate does the rest. The cool, damp **Pacific Northwest** matures slowly and gently; **Texas** heat and big daily swings extract fast with heavy losses; **Colorado**'s altitude and dry air push evaporation and can raise proof.`,
    },
    {
      type: 'steps',
      title: 'The history behind the rules',
      items: [
        { title: 'c. 1840-1855: Dr James Crow', md: 'At the Oscar Pepper distillery in Woodford County, Kentucky, Crow used measurement (a saccharometer, thermometers, careful records) to make sour mash production consistent.' },
        { title: '1897: Bottled-in-Bond Act', md: 'Distiller **E.H. Taylor Jr.** and Treasury Secretary **John G. Carlisle** backed a law guaranteeing one season, one distillery, 4 years and 100 proof under government supervision.' },
        { title: '1933 onward: repeal and consolidation', md: 'After Prohibition, a handful of large companies, including Seagram, Schenley, National Distillers and Hiram Walker, controlled most American whiskey.' },
        { title: '1970s-80s: the slump', md: 'Drinkers moved to vodka and lighter spirits, and bourbon sales and distilleries declined.' },
        { title: '1999: Kentucky Bourbon Trail', md: 'The KDA launched the trail, turning distilleries into tourist destinations as premium bourbon recovered.' },
        { title: '2000s to today', md: 'The rye revival, the craft boom and, on 19 January 2025, the American single malt standard.' },
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: Dr Crow invented sour mash',
      md: `Crow refined and standardized sour mash, and his scientific habits shaped Kentucky distilling. Records of sour mash use predate his work; one often cited reference dates to 1818 in Casey County, Kentucky. No document shows that Crow, or anyone else, invented the process.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Contract distilling', definition: 'Making whiskey to another company\'s order and often to its recipe, so the brand owner sells spirit it did not distill.' },
        { term: 'Sourced whiskey', definition: 'Whiskey bought from another producer, as bulk new make or aged barrels, and bottled under the buyer\'s brand.' },
        { term: 'Dump proof', definition: 'The strength of whiskey when its barrel is emptied. It can sit above or below the entry proof, depending mainly on warehouse temperature and humidity.' },
        { term: 'Heat cycling', definition: 'Warming a masonry warehouse during cold months so spirit keeps moving in and out of the barrel wood, adding maturation cycles a cold building would lack.' },
        { term: 'Empire Rye', definition: 'A voluntary New York standard: at least 75% New York-grown rye, made at one New York distillery, distilled to 160 proof or less and aged at least 2 years in new charred oak.' },
        { term: 'Four-grain bourbon', definition: 'A bourbon whose mash combines corn, rye, wheat and malted barley, instead of the usual three grains.' },
        { term: 'Heirloom corn', definition: 'Older, open-pollinated corn varieties, such as Bloody Butcher, that some distillers use for distinctive grain flavor despite lower yields.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Kentucky holds most bourbon stock (16.1 million aging barrels in the KDA's 2025 count) and its "95%" share is an industry estimate. Barrel position in a rickhouse shapes losses and dump proof, so producers rotate, blend across floors, select single barrels or heat-cycle. Lawrenceburg, Indiana, supplies many brands, and "Distilled in Indiana" under 5.66(f) is the tell; blends can hide their sources. Monongahela and Maryland styles, Empire Rye and modern mashbills show rye's range. Craft distillers face a cash-flow squeeze, small barrels extract faster than they mature, and American single malt pairs free cask choice with very different climates.`,
    },
  ],
  quiz: [
    {
      id: 'l4-america-in-depth-q1',
      type: 'multi',
      context: `**COLD FORGE**
Straight Rye Whiskey
Distilled in Indiana · Aged 2 years
47% Alc./Vol. · 750 mL
Bottled by Cold Forge Spirits, Denver, Colorado`,
      prompt: 'Which conclusions does this label support? Select all that apply.',
      options: [
        'The Denver company is very likely a non-distiller producer for this whiskey.',
        'A large Lawrenceburg contract distillery is a likely source.',
        'The whiskey spent at least 2 years in new charred oak.',
        'The whiskey was aged in Colorado.',
        'Reduced to 100 proof, it could be labeled bottled-in-bond.',
        'The mash must have been 95% rye.',
      ],
      answer: [0, 1, 2],
      explanation:
        '"Bottled by" plus "Distilled in Indiana" on a Colorado label points to an NDP sourcing from Lawrenceburg, and straight rye means at least 2 years in new charred oak. Nothing on the label says where it aged, bonding needs 4 years and one identified distillery, and rye needs only 51% rye.',
    },
    {
      id: 'l4-america-in-depth-q2',
      type: 'match',
      prompt: 'Match each rye or bourbon style to its description.',
      pairs: [
        { left: 'Monongahela rye', right: 'Western Pennsylvania tradition, remembered as bold and spicy' },
        { left: 'Maryland rye', right: 'Softer, sweeter style, often with more corn' },
        { left: 'Empire Rye', right: 'At least 75% New York-grown rye from one New York distillery' },
        { left: 'Indiana-style rye', right: '95% rye and 5% malted barley' },
        { left: 'Wheated bourbon', right: 'Wheat replaces rye as the flavoring grain' },
        { left: 'Four-grain bourbon', right: 'Corn, rye, wheat and malted barley in one mash' },
      ],
      explanation:
        'Monongahela and Maryland are historic regional styles; Empire Rye is a modern voluntary standard; the 95/5 recipe is the Lawrenceburg signature. Wheated and four-grain bourbons are mashbill choices within the same legal bourbon rules.',
    },
    {
      id: 'l4-america-in-depth-q3',
      type: 'numeric',
      context: `**LANTERN FORD**
Kentucky Straight Bourbon Whiskey
50% Alc./Vol. · 750 mL
Distilled and bottled by Lantern Ford Distillery, Bardstown, KY`,
      prompt: 'What is the minimum age, in years, that this label implies?',
      answer: 4,
      tolerance: 0,
      unit: 'years',
      explanation:
        'Straight requires 2 years, but any whisky under 4 years must carry an age statement (27 CFR 5.74). With no age statement, this straight bourbon is at least 4 years old. Answering 2 is the near miss.',
    },
    {
      id: 'l4-america-in-depth-q4',
      type: 'truefalse',
      prompt: 'Because a 5-gallon barrel has far more wood surface per liter, 2 years in one gives the same result as 8 years in a 53-gallon barrel.',
      answer: false,
      explanation:
        'Small barrels speed extraction of color and oak flavor, but oxidation, ester formation and the loss of harsh volatiles take time. Small-barrel whiskey often tastes woody and young at once, which is why rapid-aging claims deserve skepticism.',
    },
    {
      id: 'l4-america-in-depth-q5',
      type: 'order',
      prompt: 'Put these events in American whiskey history in order, earliest first.',
      items: [
        'James Crow systematizes sour mash at the Oscar Pepper distillery',
        'Bottled-in-Bond Act, backed by E.H. Taylor Jr. and John G. Carlisle',
        'Repeal of Prohibition and consolidation into a few large firms',
        'The slump as drinkers turn to vodka and lighter spirits',
        'Launch of the Kentucky Bourbon Trail',
        'The American single malt standard takes effect',
      ],
      explanation:
        'Crow worked about 1840-1855; the Bottled-in-Bond Act passed in 1897; consolidation followed repeal in 1933; the slump came in the 1970s-80s; the KDA launched the Bourbon Trail in 1999; and American single malt took effect on 19 January 2025.',
    },
    {
      id: 'l4-america-in-depth-q6',
      type: 'single',
      context: `**Barrel report**
Two barrels from the same 2018 fill, both entered at 115 proof, emptied in 2026 from a metal-clad rickhouse in a region with hot, dry summers.
- Barrel A: top floor, next to a window
- Barrel B: ground floor, center of the building`,
      prompt: 'Which outcome is most likely?',
      options: [
        'Barrel A yields less whiskey at a higher proof than Barrel B.',
        'Barrel A yields less whiskey at a lower proof, because heat drives off alcohol first.',
        'Both yield the same volume and proof, because they share a fill date and entry proof.',
        'Barrel B yields less whiskey, because cool air draws more spirit into the wood.',
      ],
      answer: 0,
      explanation:
        'The hot, dry top floor drives larger losses, and in dry air water escapes faster than alcohol, so dump proof tends to rise. The cool, steadier ground floor loses less and holds proof. Proof drift depends on humidity, so "heat drives off alcohol" is the tempting error.',
    },
  ],
};
