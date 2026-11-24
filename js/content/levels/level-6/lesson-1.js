export default {
  id: 'l6-process-maturation-modeling',
  title: 'Process and Maturation Modeling',
  summary:
    'Treat a distillery as a set of alcohol flows: the ethanol-water ceiling, equilibrium stages, grain yields, still-house mass balances, compounding cask loss, regauging, and the inventory bets that tie up capital for a decade.',
  minutes: 15,
  blocks: [
    {
      type: 'text',
      md: `Earlier levels explained how each step works. This lesson turns the steps into numbers you can audit. A distillery is a chain of alcohol flows: grain becomes litres of pure alcohol (LPA), LPA moves through the stills, and casks hand back less than they received years later. If you can model those flows, you can spot a bad cut, size a warehouse and judge whether next decade's age statement is safe.

### The ethanol-water ceiling

Ethanol and water form a **non-ideal** mixture: the molecules attract each other differently than an ideal model predicts. At one composition, the **azeotrope**, the vapor has exactly the same composition as the liquid, so further distillation cannot enrich it. The numbers are easy to garble because three units are in play:

- **about 95.6% ethanol by mass**
- **about 97% ABV** by volume
- **about 89 mol%** ethanol
- boiling at **about 78.2 C**, slightly below pure ethanol (about 78.4 C)

At atmospheric pressure, no column, however tall, distills ordinary ethanol-water past this point. Neutral spirit is collected at **about 95-96% ABV**, just under the ceiling. Fuel-grade "absolute" ethanol needs a different trick, such as molecular sieves that hold back water.`,
    },
    {
      type: 'text',
      md: `### Stages and reflux

An **equilibrium stage** is one round of vapor and liquid reaching balance. A single stage over a boiling **8% ABV** wash gives a vapor of roughly **40-50% ABV**. That is why a pot still needs two runs: it behaves like about **1-2 stages**, plus a little extra separation from reflux in the neck and lyne arm.

A column stacks stages. Each plate acts as roughly one stage (real plates achieve somewhat less than an ideal one), and liquid returned down the column (reflux) gives every plate more to work with. With enough plates and reflux, the top of a column approaches the azeotrope. Engineers count the stages a separation needs with a **McCabe-Thiele diagram**, which plots the equilibrium curve against the column's operating lines. For this course the idea matters more than the construction: **more stages and more reflux give a stronger, cleaner distillate; fewer stages carry more congeners over.**

### Why fusel oils collect mid-column

Fusel oils (higher alcohols such as isoamyl alcohol, isobutanol and n-propanol) change their behavior with strength. **In weak ethanol they are more volatile than ethanol; in strong ethanol they are less volatile.** In a rectifying column they rise readily from the weak lower plates but stall on the strong upper plates. They pile up in the middle, so operators bleed them off through a **side-draw** (a fusel oil draw). If nobody draws them, they build up until they break through into the product.`,
    },
    {
      type: 'text',
      md: `### Yields: how much alcohol the grain should give

Scotch malt distillers measure yield in **LPA per tonne of malt**. The maltster's lab predicts a ceiling, the **predicted spirit yield (PSY)**, from the malt's fermentable extract. Well-run malt distilleries recover most of it, typically **roughly 400-420 LPA per tonne**, a few percent below the PSY, varying with barley variety, season and process. The useful number is the gap: actual yield divided by PSY is the distillery's efficiency, and a gap that widens over weeks means something upstream has changed (milling, mash temperatures, an infection).

American distillers count **proof gallons (PG) per bushel**. A proof gallon is one US gallon at 100 proof, so one gallon of pure alcohol is 2 PG; Lesson 2 covers the unit in depth. A **56 lb bushel of corn** with **about 62% starch** gives **about 6 PG in theory**. Beverage distilleries typically recover **about 5 PG**, roughly 83% of theory, depending on corn quality, the cook and the ferment. Work the theory once and you will never forget where the number comes from.`,
    },
    {
      type: 'steps',
      title: 'Worked example: the theoretical yield of one bushel of corn',
      items: [
        { title: 'Starch in the bushel', md: '56 lb = 25.40 kg. At 62% starch: 25.40 × 0.62 = **15.75 kg of starch**.' },
        { title: 'Starch to glucose', md: 'Hydrolysis adds one water molecule per glucose unit (162 g/mol becomes 180 g/mol), so multiply by 1.111: 15.75 × 1.111 = **17.50 kg of glucose**.' },
        { title: 'Glucose to ethanol', md: 'The theoretical yield is 0.511 g of ethanol per g of glucose: 17.50 × 0.511 = **8.94 kg of ethanol**.' },
        { title: 'Mass to volume', md: 'Ethanol weighs 0.789 kg per litre: 8.94 / 0.789 = **11.33 L of pure ethanol**, about 11.3 LPA.' },
        { title: 'Litres to proof gallons', md: '11.33 / 3.7854 = 2.99 US gallons of pure ethanol. Pure ethanol is 200 proof, so 2.99 × 2 = **about 6.0 PG**.' },
        { title: 'Reality check', md: 'A plant that recovers 5.0 PG per bushel runs at 5.0 / 6.0 = **about 83% of theory**. Track this ratio batch by batch; it is your earliest warning of a cooking or fermentation problem.' },
      ],
    },
    {
      type: 'text',
      md: `### Mass balance in the still house

Alcohol is never created or destroyed in a still; it only moves. For a spirit still run:

**Charge LPA = foreshots + hearts + feints + LPA left in the spent lees + losses**

Every stream is metered or gauged, so the equation should close within a small tolerance. A persistent gap points to a meter error, a leak or theft, and in a bonded distillery it is also a compliance problem.

The feints loop deserves the closest watch. Foreshots and feints go back into the next charge, so in a steady state the alcohol going into the feints receiver equals the alcohol coming back out. **If the feints, and therefore the charge, creep stronger run after run while low-wines strength holds steady, alcohol is accumulating in the recycle.** The usual causes are a cut to feints that comes too early (heart-quality spirit ends up in feints) or a recycle that is out of balance. The fix starts with the cut points and the receiver levels.`,
    },
    {
      type: 'table',
      caption: 'An illustrative spirit still run whose mass balance closes within 0.4%. Figures are for teaching; real proportions vary by distillery and cut points.',
      headers: ['Stream', 'Volume and strength', 'LPA', 'Share of charge'],
      rows: [
        ['Charge (low wines + feints + foreshots)', '12,000 L at 27.0% ABV', '3,240', '100%'],
        ['Foreshots (recycled)', 'measured in receiver', '65', '2.0%'],
        ['Hearts (new make to spirit receiver)', 'averaging about 70% ABV', '1,380', '42.6%'],
        ['Feints (recycled)', 'measured in receiver', '1,775', '54.8%'],
        ['Spent lees (to effluent)', 'roughly 0.1% ABV', '6', '0.2%'],
        ['Unaccounted', 'charge minus all streams', '14', '0.4%'],
      ],
    },
    {
      type: 'text',
      md: `### Compounding loss in the cask

Casks lose a fraction of what is left each year, so loss compounds:

**V(t) = V(0) × (1 − r)^t^**

A **200 L** cask losing **2% a year** keeps 200 × 0.98^12^ = **156.9 L after 12 years**. That is a 21.5% loss, slightly less than the 24% that 12 × 2% suggests, because each year's 2% comes out of a smaller volume. The Angel's share tool runs this for any rate.

Track **LPA separately from volume**, because strength drifts too. In a cool, humid warehouse ABV usually falls; on hot, dry upper floors it can rise. If that 200 L cask was filled at 63.5% ABV (127.0 LPA) and regauges at 156.9 L and 57.0% ABV, it holds 89.4 LPA. Its alcohol has fallen 29.6%, about 2.9% a year compounded, faster than the 2% volume loss.

### Entry-proof economics

US law caps bourbon's entry proof at 125. A 53-gallon barrel filled at **125 proof** holds 53 × 1.25 = **66.25 PG**; filled at **105 proof** it holds 53 × 1.05 = **55.65 PG**. To lay down the same proof gallons at 105 you need 125 / 105 = 1.19 times as many barrels: **about 19% more barrels**, warehouse space, handling and cooperage spend. Some producers pay that premium because a lower entry proof changes what the spirit extracts from the wood. The decision is sensory and financial at once.`,
    },
    {
      type: 'steps',
      title: 'Regauging a cask by weight, step by step',
      items: [
        { title: 'Choose the method', md: 'A **wet dip** pushes a calibrated rod through the bung to read the liquid depth, then converts depth to volume from the cask\'s dimensions. It is quick but imprecise for irregular casks. **Weight gauging** is the standard for accounting: in the US it follows the gauging rules and tables of 27 CFR Part 30.' },
        { title: 'Weigh the full cask', md: 'Record the **gross weight**, for example 215 kg.' },
        { title: 'Subtract the tare', md: 'The **tare** is the empty cask weight recorded at filling, for example 52 kg. Net spirit = 215 − 52 = **163 kg**. Wood soaks up spirit over the years, which is one reason a weight regauge carries some uncertainty.' },
        { title: 'Measure strength and convert mass to volume', md: 'A density meter or hydrometer reads **60.0% ABV**. Density tables give 0.909 kg/L for 60% ABV at 20 C, so volume = 163 / 0.909 = **179.3 L**. US tables are referenced to 60 F; UK and EU tables (the OIML alcoholometric tables) to 20 C.' },
        { title: 'Convert to LPA and compare', md: '179.3 × 0.600 = **107.6 LPA**. Compare with the fill gauge and the last regauge to get this cask\'s loss rate.' },
        { title: 'Map the result', md: 'Log the floor, rick and position with every gauge. A warehouse map shows patterns: upper floors in a metal-clad rickhouse usually lose more volume and may gain proof, while casks near the floor change slowly. Sampling plans and dump schedules follow the map.' },
      ],
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Accelerated aging: the law counts time',
      md: `Heat cycling, pressure, ultrasound, light and wood chips can speed up extraction and some reactions. None of them adds a day to the age statement.

- **US:** "age" is the time spirits are stored in **oak containers** after distillation and before bottling (27 CFR 5.1). For bourbon, rye, wheat, malt and rye malt whisky, and for straight whiskies other than straight corn whisky, only time in **charred new oak containers** counts; corn whisky ages in used or uncharred new oak.
- Wood treatment other than contact with an oak barrel, such as chips or staves in a tank, must be disclosed with a statement like "colored and flavored with wood chips" (27 CFR 5.73). Such a product may lose its usual designation and may need **formula approval** before it can be labeled.
- **Scotland:** whisky must mature at least **3 years in oak casks of 700 L or less** in Scotland, with nothing added except water and plain caramel (Scotch Whisky Regulations 2009), so chips and infusions are out.

A fast process can make a pleasant spirit. It cannot make a "12 year old" one.`,
    },
    {
      type: 'text',
      md: `### Inventory: betting a decade ahead

Aged whiskey is **working capital that sits in a warehouse**. A distiller selling an 8-year-old today filled those casks eight years ago, paid for the grain, energy, barrels and storage then, and has earned nothing on them since. Planners track a **stock-to-sales ratio**, the years of sales held in maturing stock, and forecast demand **4-12 or more years ahead**. Mature Scotch and bourbon houses commonly hold many years of sales in wood.

Forecasting that far ahead is hard, and the industry has a long boom-and-bust record. Overfilling in the 1970s produced the 1980s "whisky loch" and the closures of 1983-85; underfilling before the single-malt and bourbon booms produced shortages, withdrawn age statements and allocation. The table below shows why a demand surge cannot be fixed quickly.`,
    },
    {
      type: 'table',
      caption: 'Inventory simulator, worked by hand. Fill 1,000 barrels a year at 125 proof; assume an illustrative 3% a year LPA loss (real rates vary by warehouse and floor); bottle at 8 years in 750 mL at 45% ABV.',
      headers: ['Step', 'Calculation', 'Result'],
      rows: [
        ['LPA per barrel at fill', '53 gal × 3.7854 L = 200.6 L; × 62.5% ABV', '125.4 LPA'],
        ['One year\'s fill', '1,000 × 125.4', '125,400 LPA'],
        ['Fraction left after 8 years', '0.97^8^', '0.7837'],
        ['LPA available in year 8', '125,400 × 0.7837', 'about 98,280 LPA'],
        ['LPA per bottle', '0.75 L × 45%', '0.3375 LPA'],
        ['Bottles available', '98,280 / 0.3375', 'about 291,200 bottles'],
        ['Demand rises 20%', '291,200 × 1.2', 'about 349,400 bottles needed'],
        ['Shortfall', '349,400 − 291,200', 'about 58,200 bottles (about 19,700 LPA)'],
        ['Same 1,000 barrels filled at 105 proof', '125,400 × 105/125 × 0.7837 / 0.3375', 'about 244,600 bottles'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Safety and sustainability are part of the model',
      md: `**Fire and explosion.** The flash point of 40% ABV spirit is **about 26 C**, a normal summer temperature in a bottling hall, and stronger spirit flashes at lower temperatures. Still houses, filling stores and warehouses are therefore designed as hazardous areas: zoned under **ATEX** rules in the EU (DSEAR in Great Britain) and under NFPA codes and classified-location electrical rules in the US, with rated equipment, ventilation, earthing against static and strict control of ignition sources.

**Energy and co-products.** **Mechanical vapor recompression (MVR)** compresses low-pressure vapor so its heat can be reused, cutting steam demand sharply. **Anaerobic digestion** turns pot ale and draff into biogas. In the US, stillage is dried into **DDGS** (distillers' dried grains with solubles) for animal feed. These streams carry real money and real emissions, so they belong in the same spreadsheet as yield.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Azeotrope (ethanol-water)', definition: 'The mixture of about 95.6% ethanol by mass (about 97% ABV) whose vapor matches its liquid at atmospheric pressure, so ordinary distillation cannot concentrate ethanol beyond it.' },
        { term: 'Compounding loss', definition: 'Cask loss taken as a fixed share of what remains each year, so V(t) = V(0) × (1 − r)^t^ and the total loss is smaller than the yearly rate times the years.' },
        { term: 'McCabe-Thiele diagram', definition: 'An engineering graph of the equilibrium curve and a column\'s operating lines, used to count the stages a separation needs.' },
        { term: 'Fusel oil side-draw', definition: 'A take-off part way up a rectifying column that removes higher alcohols, which collect there because they are more volatile than ethanol in weak spirit and less volatile in strong spirit.' },
        { term: 'Predicted spirit yield (PSY)', definition: 'A maltster\'s laboratory estimate of the maximum litres of pure alcohol a tonne of malt can give, used to judge a distillery\'s actual yield.' },
        { term: 'Mass balance (still house)', definition: 'The check that the alcohol charged to a still equals the alcohol in all output streams plus measured losses.' },
        { term: 'Tare weight', definition: 'The recorded weight of an empty cask, subtracted from the gross weight to find the net weight of spirit when regauging by weight.' },
        { term: 'Stock-to-sales ratio', definition: 'The number of years of current sales held as maturing stock; a planning measure for aged spirits.' },
      ],
    },
    {
      type: 'text',
      md: `**Recap.** Ordinary distillation stops at the azeotrope, about 95.6% by mass or about 97% ABV, which is why neutral spirit comes off at about 95-96%. Stages and reflux decide how close a still gets, and fusel oils must be drawn off mid-column. Yields are judged against theory: about 6 PG per bushel of corn, and for malt an actual yield of roughly 400-420 LPA per tonne measured against the maltster's PSY. A still-house mass balance must close, and rising feints strength flags a cut or recycle problem. Casks lose volume and LPA at compounding rates, tracked by weight regauges and mapped by position. Entry proof, accelerated aging and inventory are financial and legal decisions as much as technical ones, and the safety and energy design of the plant sits in the same model.`,
    },
  ],
  quiz: [
    {
      id: 'l6-process-maturation-modeling-q1',
      type: 'numeric',
      context: `**Cask report, cask 7731**
- Type: refill hogshead · Filled: 250 L at 63.5% ABV
- Assumed volume loss: 2.5% of remaining volume per year
- Regauge after 10 years: strength 60.1% ABV (volume not yet calculated)`,
      prompt: 'Using compounding loss, how many litres of pure alcohol (LPA) should the cask hold at the 10-year regauge? Round to one decimal place.',
      answer: 116.6,
      tolerance: 0.2,
      unit: 'LPA',
      explanation: 'Volume after 10 years = 250 × 0.975^10^ = 250 × 0.7763 = 194.1 L. LPA = 194.1 × 0.601 = 116.6 LPA. Subtracting 10 × 2.5% = 25% of the original volume would give 187.5 L and understate what is left, because each year\'s loss comes from a smaller volume.',
    },
    {
      id: 'l6-process-maturation-modeling-q2',
      type: 'numeric',
      context: `**Weekly yield sheet, corn distillery**
- Corn processed: 2,000 bushels (56 lb each, about 62% starch)
- Spirit produced: 10,050 PG
- Theoretical yield used by the plant: 5.99 PG per bushel`,
      prompt: 'What percentage of the theoretical yield did the plant achieve this week? Round to one decimal place.',
      answer: 83.9,
      tolerance: 0.2,
      unit: '%',
      explanation: 'Theoretical output = 2,000 × 5.99 = 11,980 PG. Efficiency = 10,050 / 11,980 = 0.839, or 83.9%. That sits near the typical practical figure of about 5 PG per bushel; a plant that slid toward 75% would be looking for a cooking, conversion or fermentation fault.',
    },
    {
      id: 'l6-process-maturation-modeling-q3',
      type: 'numeric',
      context: `**Filling plan**
- Target: 120,000 proof gallons laid down this year
- Barrel: 53 wine gallons each
- Option A: enter at 125 proof · Option B: enter at 110 proof`,
      prompt: 'How many more barrels does Option B need than Option A? Round each option\'s barrel count up to a whole barrel before subtracting.',
      answer: 247,
      tolerance: 0,
      unit: 'barrels',
      explanation: 'Option A: 53 × 1.25 = 66.25 PG per barrel; 120,000 / 66.25 = 1,811.3, so 1,812 barrels. Option B: 53 × 1.10 = 58.3 PG per barrel; 120,000 / 58.3 = 2,058.3, so 2,059 barrels. The difference is 247 barrels, about 14% more, with matching costs for wood, space and handling.',
    },
    {
      id: 'l6-process-maturation-modeling-q4',
      type: 'single',
      context: `**Spirit still log, six weeks**
- Low-wines strength: steady at 22%
- Charge strength: 27.5% → 29.0% → 31.0%
- Feints receiver: level and strength rising each week
- Hearts LPA per run: drifting down
- Fermentation and wash yields: unchanged`,
      prompt: 'What is the most likely diagnosis, and the right first response?',
      options: [
        'Alcohol is building up in the feints recycle; check for an early cut to feints and rebalance the receivers',
        'The wash is fermenting stronger than before; no action is needed because a stronger charge improves recovery',
        'The spirit still is leaking vapor; pressure-test the still and condenser before the next run',
        'The new make is too light in character; move the cut to feints later to collect heavier congeners',
      ],
      answer: 0,
      explanation: 'With low wines steady, a charge and feints receiver that grow stronger while hearts fall means heart-quality alcohol is being sent to feints and circling in the loop. A stronger wash is ruled out because low wines and wash yields are unchanged, and a leak would weaken the charge and feints instead of strengthening them. Moving the cut later is a flavor decision; the first job is to find where the alcohol is going.',
    },
    {
      id: 'l6-process-maturation-modeling-q5',
      type: 'multi',
      prompt: 'Which statements about distillation and maturation modeling are correct? Select all that apply.',
      options: [
        'Ordinary distillation of ethanol and water cannot pass about 97% ABV, because at the azeotrope the vapor and liquid have the same composition',
        'The ethanol-water azeotrope is 95.6% ABV, which is why neutral spirit is collected at about 95-96% ABV',
        'Fusel oils collect mid-column because they are more volatile than ethanol in weak spirit and less volatile in strong spirit',
        'Heat-cycling barrels in a warmed warehouse lets a US producer count extra age on the label',
        'One equilibrium stage over a boiling 8% ABV wash gives a vapor of roughly 40-50% ABV',
      ],
      answer: [0, 2, 4],
      explanation: 'The azeotrope is about 95.6% by mass, which is about 97% ABV; calling it 95.6% ABV mixes up the units. Fusel oils pile up mid-column for the reason given and are drawn off as a side stream. US age is the time spent in oak containers (27 CFR 5.1), so heat can change the chemistry but never the age statement. A single stage over an 8% wash lifts the vapor to roughly 40-50% ABV, which is why pot stills run twice.',
    },
    {
      id: 'l6-process-maturation-modeling-q6',
      type: 'order',
      prompt: 'Put the steps of a weight-based regauge in order, first to last.',
      items: [
        'Weigh the full cask to get the gross weight',
        'Subtract the recorded tare weight to get the net weight of spirit',
        'Convert the net weight to volume using the density for the measured strength at the reference temperature',
        'Multiply the volume by the ABV to get litres of pure alcohol',
        'Compare the LPA with earlier gauges and log the cask\'s position on the warehouse map',
      ],
      explanation: 'Weight gauging starts with the gross weight, removes the tare to isolate the spirit, then uses density tables (60 F in the US, 20 C under the OIML tables) to turn mass into volume. Only then can you compute LPA and a loss rate. The position log is what turns single gauges into a warehouse map.',
    },
  ],
};
