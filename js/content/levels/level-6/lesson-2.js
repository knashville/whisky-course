export default {
  id: 'l6-blending-proofing-math',
  title: 'Blending and Proofing Mathematics',
  summary:
    'The arithmetic of the blending room: wine gallons, proof gallons and LPA; blend strength and the Pearson square; volume contraction and proofing by mass; bottle yields; age rules; and costing a batch built from real cask parcels.',
  minutes: 14,
  blocks: [
    {
      type: 'text',
      md: `A blender's sensory judgment only becomes a product when the numbers work. The batch has to hit its label strength within a narrow tolerance, carry a lawful age statement, use stock the company can spare and cost what the business plan says. This lesson is the arithmetic behind all four.

### Three ways to count alcohol

- **Wine gallons (WG)** measure liquid volume in US gallons, whatever the strength. 1 US gallon = 3.7854 L.
- **Proof gallons (PG)** measure alcohol. One proof gallon is one US gallon of spirit at 100 proof, measured at 60 F (26 U.S.C. 5002). **PG = WG × proof / 100.** US excise tax and most US inventory records run on proof gallons.
- **Litres of pure alcohol (LPA)** are the metric equivalent: litres × ABV. UK duty, Scotch inventory and most of the world's trade run on LPA.

Because 100 proof is 50% alcohol, **1 PG = 3.7854 × 0.5 = 1.893 LPA**, and 1 LPA = 0.528 PG. Strength is always quoted at a reference temperature: **60 F in the US, 20 C in the UK and EU.** A reading taken at another temperature must be corrected with tables before it means anything.`,
    },
    {
      type: 'table',
      caption: 'Conversion factors worth memorizing. The Cask yield tool reports LPA and proof gallons for any volume and strength, so you can check the PG and LPA figures there.',
      headers: ['Quantity', 'Equals', 'Note'],
      rows: [
        ['1 US gallon', '3.7854 L', 'Exact definition: 3.785411784 L'],
        ['1 proof gallon', '1.893 LPA', '1 gallon at 50% ABV'],
        ['1 LPA', '0.528 PG', 'The inverse of 1.893'],
        ['750 mL bottle', '0.198 US gallon', 'At 80 proof: 0.1981 × 0.80 = 0.1585 PG'],
        ['700 mL bottle', '0.185 US gallon', 'The standard UK and EU size, allowed in the US since the end of 2020'],
        ['1 gallon of pure alcohol', '2 PG', '200 proof is twice the alcohol of 100 proof'],
      ],
    },
    {
      type: 'text',
      md: `### Blend strength and the Pearson square

When you mix parcels, the alcohol adds up even when the volumes do not quite (more on that below). Ignoring contraction:

**Blend ABV = Σ(volume × ABV) / Σ(volume)**

So 300 L at 60% plus 900 L at 40% gives (180 + 360) / 1,200 = 45%.

The **Pearson square** runs the same idea backwards: which ratio of two stocks hits a target? Write the target in the middle, the two stocks on the left, and subtract diagonally, ignoring signs. Each stock's share is the difference between the *other* stock and the target. The Blending tool draws the square for you.`,
    },
    {
      type: 'steps',
      title: 'Worked example: 45% ABV from 60% and 40% stocks',
      items: [
        { title: 'Parts of the strong stock', md: 'Target minus weak stock: 45 − 40 = **5 parts** of the 60% spirit.' },
        { title: 'Parts of the weak stock', md: 'Strong stock minus target: 60 − 45 = **15 parts** of the 40% spirit.' },
        { title: 'Simplify the ratio', md: '5 : 15 = **1 : 3**. One part strong to three parts weak.' },
        { title: 'Check it', md: '(1 × 60 + 3 × 40) / 4 = 180 / 4 = **45%**. Correct.' },
        { title: 'Scale it', md: 'For 2,000 L of blend: 2,000 × 1/4 = **500 L** of the 60% stock and 1,500 L of the 40% stock (before contraction).' },
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Contraction: why professionals proof by mass',
      md: `Ethanol and water pack together more tightly than either does alone. **50 mL of ethanol plus 50 mL of water gives only about 96-97 mL.** The mixture also warms slightly, so it must return to the reference temperature before you read it.

C1V1 = C2V2 therefore underestimates the water needed to hit a target: the blend ends up a little strong and short of volume. On the scale of a 7,000 L vat, that error is many litres of water and real money in duty.

Professional proofing works **by mass, using density tables**: in the US, the gauging tables of 27 CFR Part 30, referenced to 60 F; in the UK and EU, the OIML International Alcoholometric Tables, referenced to 20 C. In practice water goes in **in stages**, the vat is mixed and rested, the strength is re-measured with a calibrated density meter, and the final trim is made only after that check. The Adding water tool gives the C1V1 first estimate; treat it as a starting point.`,
    },
    {
      type: 'steps',
      title: 'Worked example: how many bottles does a barrel fill?',
      items: [
        { title: 'The dump', md: 'A barrel yields **40.0 WG at 130 proof** at dumping. PG = 40 × 130 / 100 = **52 PG**.' },
        { title: 'Reduce to bottling strength', md: 'Target 90 proof. Alcohol is conserved, so WG at 90 proof = 52 / 0.90 = **57.78 WG**.' },
        { title: 'Convert to litres', md: '57.78 × 3.7854 = **218.7 L**.' },
        { title: 'Divide by bottle size', md: '218.7 / 0.75 = 291.6, so **291 full 750 mL bottles**. Always round down: a part-filled bottle cannot be sold.' },
        { title: 'Reality check', md: 'Contraction, filter and line losses all shave this number. Plan on a little less, and check the arithmetic with the Cask yield tool.' },
      ],
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Two rules every batch must meet',
      md: `**The youngest whiskey sets the age.** An age statement must give the age of the youngest whiskey in the bottle, whatever the proportions (27 CFR 5.74 in the US; the Scotch Whisky Regulations 2009 in Scotland). One small parcel of 9-year-old whiskey in a vat of 15-year-old makes the batch a 9-year-old for labeling. Averages never count.

**The strength must match the label.** US rules allow the actual alcohol content to differ from the label by only **plus or minus 0.3 percentage points** (27 CFR 5.65), and EU labeling rules allow the same 0.3% vol for spirits. A bottle labeled 43% must test between 42.7% and 43.3%.`,
    },
    {
      type: 'text',
      md: `### From numbers to a house style

**Composition targets** start as weighted averages. Express each parcel's analytical figures on a **pure-alcohol basis** (for example, phenols or esters per litre of pure alcohol) and the blend value is simply the LPA-weighted average, which water does not change. Color, measured as absorbance, blends roughly by volume and falls as water is added. These are starting points only. Aroma does not add linearly (compounds mask and lift each other), so a **sensory panel** confirms every batch against a retained **reference standard**. If a discrimination test shows the panel can reliably tell the batch from the reference, the blend goes back for adjustment.

**Marrying** is the rest a blend gets in a vat or cask, from days to months, before reduction or bottling, so it settles and integrates. **Single-barrel** releases embrace variation: every cask is a different bottling. **Batch** products promise consistency, so producers write specifications with limits for strength, color, key congeners and panel scores, and hold any batch that falls outside them.

**Batch costing** builds up per bottle: liquid cost (price per LPA × LPA per bottle) + dry goods (glass, closure, label, carton) + excise or duty + overhead (bottling, labor, a share of fixed costs) + margin. Duty usually dwarfs the liquid in a young blend, so a strength decision is also a tax decision.`,
    },
    {
      type: 'table',
      caption: 'Blending bench brief: build 10,000 bottles of 700 mL at 43% ABV with a 10-year age statement and a light smoke target of 6 phenol units on a pure-alcohol basis. House style asks for 20% of the alcohol from sherry casks. All figures are invented for the exercise.',
      headers: ['Parcel', 'Casks and age', 'LPA available', 'Cask strength', 'Phenols (per LPA basis)', 'Cost per LPA'],
      rows: [
        ['A', 'Refill hogsheads, unpeated, 12 years', '1,800', '55.0%', '0', '£18'],
        ['B', 'First-fill bourbon barrels, heavily peated, 10 years', '1,000', '58.0%', '24', '£22'],
        ['C', 'Sherry butts, unpeated, 8 years', '900', '60.0%', '0', '£16'],
        ['D', 'First-fill oloroso butts, unpeated, 15 years', '800', '53.0%', '0', '£30'],
      ],
    },
    {
      type: 'steps',
      title: 'Solving the bench, step by step',
      items: [
        { title: 'Alcohol required', md: '10,000 × 0.700 L × 0.43 = **3,010 LPA**.' },
        { title: 'Check eligibility', md: 'Parcel C is 8 years old. Using even one litre of it would cap the label at 8 years, so **C is excluded** and stays in stock.' },
        { title: 'Hit the smoke target', md: 'Only B carries phenols. Share of B = 6 / 24 = **25%** of the alcohol: 0.25 × 3,010 = **752.5 LPA** of B.' },
        { title: 'Meet the sherry share', md: '20% from D: 0.20 × 3,010 = **602.0 LPA** of D.' },
        { title: 'Fill the rest', md: 'A supplies 3,010 − 752.5 − 602.0 = **1,655.5 LPA** (55%). Check stock: A has 1,800, B 1,000, D 800, so every parcel is sufficient.' },
        { title: 'Volumes at cask strength', md: 'A: 1,655.5 / 0.55 = 3,010.0 L. B: 752.5 / 0.58 = 1,297.4 L. D: 602.0 / 0.53 = 1,135.8 L. Total **5,443.3 L**, so the vat is 3,010 / 5,443.3 = **55.3% ABV**.' },
        { title: 'Reduction water', md: 'Final volume at 43% = 3,010 / 0.43 = **7,000 L** (which is 10,000 × 0.7 L). Water ≈ 7,000 − 5,443.3 = **about 1,557 L** by C1V1. Because of contraction the real figure is slightly higher; add it in stages and trim by density meter.' },
        { title: 'Leftover stock', md: 'A: 1,800 − 1,655.5 = 144.5 LPA. B: 1,000 − 752.5 = 247.5 LPA. D: 800 − 602 = 198 LPA. C: all 900 LPA, which qualifies for a 10-year blend in two years.' },
      ],
    },
    {
      type: 'table',
      caption: 'Cost per bottle for the bench batch. Duty uses the UK rate for spirits above 22% ABV of £33.99 per LPA from 1 February 2026; it is uprated most years, so rerun with the current figure. Dry goods and overhead are illustrative.',
      headers: ['Cost line', 'Calculation', 'Per bottle'],
      rows: [
        ['Liquid', '(1,655.5 × £18) + (752.5 × £22) + (602 × £30) = £64,414; / 10,000', '£6.44'],
        ['Dry goods', 'Glass, closure, label, carton (illustrative)', '£2.10'],
        ['UK duty', '0.301 LPA × £33.99', '£10.23'],
        ['Overhead', 'Bottling, labor, share of fixed costs (illustrative)', '£1.50'],
        ['Total cost before margin and VAT', 'Sum of the lines above', '£20.27'],
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Wine gallon (WG)', definition: 'A US gallon of liquid (3.7854 L) measured by volume regardless of its alcohol content.' },
        { term: 'Bottle yield', definition: 'The number of full bottles a parcel of spirit fills at bottling strength: the LPA available divided by the LPA in one bottle, always rounded down.' },
        { term: 'Pearson square', definition: 'A diagonal-subtraction method for finding the ratio of two stocks that gives a target strength; each stock\'s share equals the difference between the other stock and the target.' },
        { term: 'Volume contraction', definition: 'The shrinkage when ethanol and water mix, so that 50 mL of each gives about 96-97 mL; it makes simple C1V1 dilution slightly underestimate the water needed.' },
        { term: 'Proofing by mass', definition: 'Reducing spirit to strength by weighing it and using density tables at a reference temperature (60 F in the US, 20 C in the EU), which accounts for contraction.' },
        { term: 'Marrying', definition: 'Resting a newly combined blend in a vat or cask, for days to months, so it settles and integrates before reduction or bottling.' },
        { term: 'Reference standard (blending)', definition: 'A retained sample of the approved product that each new batch is compared with by a sensory panel before release.' },
      ],
    },
    {
      type: 'text',
      md: `**Recap.** Count alcohol in proof gallons (WG × proof / 100) or LPA (litres × ABV), and convert with 1 PG = 1.893 LPA. Blend strength is the volume-weighted average of the parts, and the Pearson square gives the ratio for a target. Contraction means C1V1 is only a first estimate, so professionals proof by mass with density tables at 60 F or 20 C. Bottle yield follows from conserving alcohol and rounding down. The youngest whiskey sets the age, and the label strength must be met within 0.3 percentage points. A batch is designed on weighted averages, confirmed by a panel against a reference standard, and costed line by line from liquid to duty.`,
    },
  ],
  quiz: [
    {
      id: 'l6-blending-proofing-math-q1',
      type: 'numeric',
      context: `**Dump record, barrel 2209**
- Dumped: 38.5 WG at 128 proof
- Target: 86 proof in 750 mL bottles
- 1 US gallon = 3.7854 L · ignore contraction and line losses`,
      prompt: 'How many full 750 mL bottles can be filled from this barrel?',
      answer: 289,
      tolerance: 0,
      unit: 'bottles',
      explanation: 'PG = 38.5 × 1.28 = 49.28. At 86 proof that is 49.28 / 0.86 = 57.30 WG, or 57.30 × 3.7854 = 216.9 L. 216.9 / 0.75 = 289.2, so 289 full bottles. Rounding up to 290 would promise a bottle you cannot fill.',
    },
    {
      id: 'l6-blending-proofing-math-q2',
      type: 'numeric',
      context: `**Reduction ticket**
- Vat: 2,400 L at 61.5% ABV
- Target: 46.0% ABV`,
      prompt: 'Using C1V1 = C2V2 (ignoring contraction), how many litres of water must be added? Round to the nearest litre.',
      answer: 809,
      tolerance: 1,
      unit: 'L',
      explanation: 'Final volume = 2,400 × 61.5 / 46.0 = 3,208.7 L, so water = 3,208.7 − 2,400 = 808.7, about 809 L. Because ethanol and water contract when mixed, the true figure is slightly higher, so a blender adds water in stages and confirms the strength with a density meter.',
    },
    {
      id: 'l6-blending-proofing-math-q3',
      type: 'numeric',
      context: `**Blend sheet**
- Stock 1: 63% ABV · Stock 2: 40% ABV
- Target: 2,300 L of blend at 43% ABV (ignore contraction)`,
      prompt: 'Using the Pearson square, how many litres of the 63% stock are needed?',
      answer: 300,
      tolerance: 1,
      unit: 'L',
      explanation: 'Parts of the 63% stock = 43 − 40 = 3; parts of the 40% stock = 63 − 43 = 20; total 23 parts. 2,300 × 3 / 23 = 300 L of the 63% stock and 2,000 L of the 40% stock. Check: (300 × 63 + 2,000 × 40) / 2,300 = 43%.',
    },
    {
      id: 'l6-blending-proofing-math-q4',
      type: 'single',
      context: `**Vatting record, batch 31**
- 62% of the volume: 15-year-old casks
- 30% of the volume: 12-year-old casks
- 8% of the volume: 9-year-old refill sherry casks`,
      prompt: 'What is the oldest age statement this batch may lawfully carry?',
      options: ['9 years', '12 years', '13 years, the volume-weighted average rounded down', '15 years, the age of the majority component'],
      answer: 0,
      explanation: 'An age statement gives the age of the youngest whiskey in the blend (27 CFR 5.74; Scotch Whisky Regulations 2009), so the 8% parcel makes this a 9-year-old. Weighted averages and majority components never count. To label it 12 years, the blender must drop or replace the 9-year-old parcel.',
    },
    {
      id: 'l6-blending-proofing-math-q5',
      type: 'match',
      prompt: 'Match each quantity to its equivalent.',
      pairs: [
        { left: '1 proof gallon', right: 'about 1.893 LPA' },
        { left: '1 LPA', right: 'about 0.528 PG' },
        { left: '750 mL', right: 'about 0.198 US gallon' },
        { left: '1 US gallon', right: 'about 3.785 L' },
        { left: '40 WG at 130 proof', right: '52 PG' },
      ],
      explanation: 'A proof gallon is a gallon at 50% alcohol, so 3.7854 × 0.5 = 1.893 LPA, and the inverse is 0.528 PG per LPA. A 750 mL bottle is 0.75 / 3.7854 = 0.198 gallon. PG = WG × proof / 100, so 40 × 130 / 100 = 52 PG.',
    },
    {
      id: 'l6-blending-proofing-math-q6',
      type: 'multi',
      context: `**QC release sheet, batch 24-17**

Label: 12 Years Old · 43% ABV · 700 mL

1. Finished bottles test at 42.6% ABV
2. One parcel in the vat was filled 11 years and 8 months before vatting
3. Color is 4% darker than the reference, inside the ±8% specification
4. Reduction water was estimated by C1V1, then the vat was trimmed in stages and checked by density meter before bottling
5. In a discrimination test the panel reliably told the batch apart from the reference standard`,
      prompt: 'Which findings should stop this batch from being released as labeled? Select all that apply.',
      options: ['Finding 1, the bottle strength', 'Finding 2, the parcel age', 'Finding 3, the color', 'Finding 4, the reduction method', 'Finding 5, the panel result'],
      answer: [0, 1, 4],
      explanation: '42.6% is outside the 0.3-point tolerance around 43% (42.7-43.3%). A parcel under 12 years makes the 12-year statement false, because the youngest whiskey sets the age. A panel that can reliably distinguish the batch from the reference means it fails the consistency spec. The color is within its specification, and estimating by C1V1 then confirming by density meter is correct practice.',
    },
  ],
};
