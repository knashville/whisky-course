export default {
  passPercent: 85,
  draw: 30,
  timeLimitMinutes: 60,
  questions: [
    // ---------- Lesson 1: Process and Maturation Modeling ----------
    {
      id: 'x6-1',
      lesson: 'l6-process-maturation-modeling',
      type: 'numeric',
      context: `**Corn lot analysis, silo 3**
- Bushel: 56 lb (1 lb = 0.4536 kg) · starch 66%
- Starch to glucose: × 1.111 · ethanol yield: 0.511 g per g of glucose
- Ethanol: 0.789 kg per litre · 1 US gallon = 3.7854 L`,
      prompt: 'What is the theoretical yield of this corn in proof gallons per bushel? Round to two decimal places.',
      answer: 6.37,
      tolerance: 0.03,
      unit: 'PG per bushel',
      explanation: `Starch = 56 × 0.4536 × 0.66 = 16.76 kg; glucose = 16.76 × 1.111 = 18.62 kg; ethanol = 18.62 × 0.511 = 9.52 kg, or 9.52 / 0.789 = 12.06 L. That is 12.06 / 3.7854 = 3.19 US gallons of pure ethanol, and because pure ethanol is 200 proof it counts as 6.37 PG. Stopping at 3.19 forgets that a gallon of pure alcohol is two proof gallons. Yield scales with starch, so 6.0 × 66 / 62 gives the same answer within rounding.`,
    },
    {
      id: 'x6-2',
      lesson: 'l6-process-maturation-modeling',
      type: 'numeric',
      context: `**Spirit still run 418**
- Charge: 14,500 L at 26.5% ABV
- Foreshots to receiver: 82 LPA
- Hearts to spirit receiver: 2,300 L averaging 70.0% ABV
- Feints to receiver: 2,118 LPA
- Spent lees: 8 LPA
- Site rule: investigate any run with more than 0.5% of the charge LPA unaccounted for`,
      prompt: `What percentage of the charge's alcohol is unaccounted for? Round to two decimal places.`,
      answer: 0.64,
      tolerance: 0.01,
      unit: '% of charge LPA',
      explanation: `Charge = 14,500 × 0.265 = 3,842.5 LPA and hearts = 2,300 × 0.70 = 1,610 LPA, so the streams total 82 + 1,610 + 2,118 + 8 = 3,818 LPA, leaving 24.5 LPA, or 0.64% of the charge. That breaches the 0.5% trigger, so meters, dips and pipework need checking; in a bonded distillery an unexplained gap is also a compliance problem. Comparing volumes instead of LPA tells you nothing, because the streams run at very different strengths.`,
    },
    {
      id: 'x6-3',
      lesson: 'l6-process-maturation-modeling',
      type: 'numeric',
      context: `**Cask 2290, weight regauge**
- At filling, 6 years ago: 200.0 L at 63.5% ABV · tare recorded: 49.0 kg
- Today: gross weight 218.5 kg · strength 60.0% ABV at 20 C
- Density for 60.0% ABV at 20 C, from the tables: 0.909 kg/L`,
      prompt: 'What percentage of its filling LPA has the cask lost? Round to one decimal place.',
      answer: 11.9,
      tolerance: 0.1,
      unit: '% of filling LPA',
      explanation: `Net spirit = 218.5 − 49.0 = 169.5 kg, so volume = 169.5 / 0.909 = 186.5 L and LPA = 186.5 × 0.600 = 111.9, against 200.0 × 0.635 = 127.0 LPA at filling: a loss of 15.1 LPA, or 11.9%. The tempting shortcut compares volumes, 200 L down to 186.5 L, which looks like only a 6.8% loss; the strength also fell from 63.5% to 60.0%, so the alcohol, which is what the owner sells and the stock record tracks, fell almost twice as fast. Forgetting the tare would put about 240 L in a 200 L cask, a quick check that catches that slip.`,
    },
    {
      id: 'x6-4',
      lesson: 'l6-process-maturation-modeling',
      type: 'numeric',
      context: `**Fill plan, 2026**
- 1,500 barrels of 53 wine gallons each, entered at 120 proof (1 US gallon = 3.7854 L)
- Assumed LPA loss: 4% a year, compounded
- Release: at 6 years, in 750 mL bottles at 43% ABV`,
      prompt: `How many bottles can this year's fill supply at release? Round to the nearest thousand bottles.`,
      answer: 438000,
      tolerance: 1000,
      unit: 'bottles',
      explanation: `Each barrel holds 53 × 3.7854 = 200.6 L at 60% ABV, or 120.4 LPA, so the fill is about 180,560 LPA. After 6 years 0.96^6^ = 0.783 of it remains, about 141,300 LPA, and each bottle takes 0.75 × 0.43 = 0.3225 LPA, so the fill supplies about 438,000 bottles. Taking a simple 24% loss instead of compounding gives about 425,500 bottles; either way, this number caps what the brand can sell at this age six years from now.`,
    },
    {
      id: 'x6-5',
      lesson: 'l6-process-maturation-modeling',
      type: 'single',
      context: `**Rectifying column log, grain spirit plant**
- Day 1: fusel oil side-draw closed to "send all alcohol to product"
- Days 1-6: product steady at 95.4% ABV; middle-plate temperatures drifting
- Day 7: product turns oily and solventy; GC shows isoamyl alcohol and isobutanol rising in the product`,
      prompt: 'What is the most likely explanation, and the right fix?',
      options: [
        'Higher alcohols are more volatile than ethanol in weak spirit, less in strong, so they built up mid-column; reopen the side-draw',
        'Higher alcohols are less volatile than ethanol at every strength, so they should have left in the stillage; look for contamination in the feed',
        'Higher alcohols are more volatile than ethanol at every strength, so they travel with the heads; raise the heads draw instead',
        'The column has passed the azeotrope, which concentrates fusel oils in the product; cut the reflux to bring the strength back below it',
      ],
      answer: 0,
      explanation: `Fusel oils rise easily from the weak lower plates and stall on the strong upper plates, so they collect in the middle of the column, and the side-draw exists to bleed them off. With the draw closed they built up for six days until they broke through into the product. Both "every strength" answers assume a fixed volatility, which is exactly what this behavior rules out, and at 95.4% ABV the column is still below the azeotrope.`,
    },
    {
      id: 'x6-6',
      lesson: 'l6-process-maturation-modeling',
      type: 'single',
      context: `**Equipment brochure (extract)**

"Our 60-plate rectifier takes grain spirit straight to 99.6% ABV at atmospheric pressure, with no dehydration step."`,
      prompt: 'How should a distiller judge this claim?',
      options: [
        'It cannot be true: distillation stops at the azeotrope near 97% ABV, so 99.6% needs a separate drying step',
        'It cannot be true: no column may legally exceed 95% ABV, the 190-proof line for US neutral spirits',
        'It cannot be true: the azeotrope is 95.6% ABV, so even 96% ABV is out of reach by distillation alone',
        'It is plausible: with 60 plates and enough reflux a column can approach any strength, given the energy',
      ],
      answer: 0,
      explanation: `At the azeotrope the vapor has the same composition as the liquid, so more plates and reflux bring a column closer to about 97% ABV and never past it; fuel ethanol needs a different trick such as molecular sieves. Calling the azeotrope 95.6% ABV mixes up the units, since 95.6% is by mass, which is why neutral spirit can be collected at 95-96% ABV. The 190-proof (95% ABV) figure is a legal line for US neutral spirits and says nothing about the physics.`,
    },
    {
      id: 'x6-7',
      lesson: 'l6-process-maturation-modeling',
      type: 'single',
      context: `**Expansion memo, bourbon distillery**
- Add plates to the beer still and doubler so high wines rise from 140 to 166 proof, for a cleaner spirit
- Keep entering at 125 proof into new charred oak
- Keep selling the product as Kentucky straight bourbon after 4 years`,
      prompt: 'What is the best assessment of this plan?',
      options: [
        'The extra stages work, but spirit distilled at 166 proof can no longer be bourbon, which allows 160 proof at most',
        `The plan works, because bourbon's only strength limits are 125 proof into the barrel and 80 proof in the bottle`,
        'It can no longer be bourbon, so it must be labeled light whisky, the class for spirit distilled above 160 proof',
        'The plan works, because 4 years in new charred oak makes it straight bourbon whatever its distillation proof',
      ],
      answer: 0,
      explanation: `Extra stages do strip congeners and raise strength, the effect the memo wants, yet bourbon and straight bourbon must come off the still at 160 proof or less (27 CFR 5.143), and cutting the spirit to 125 proof for entry meets a separate rule without changing its distillation proof. Light whisky is not the fallback either: it must be stored in used or uncharred new oak, so in new charred oak the 166-proof spirit could only be sold as whisky. Entry proof and time in oak are tested on their own and never excuse a distillation proof over 160.`,
    },
    {
      id: 'x6-8',
      lesson: 'l6-process-maturation-modeling',
      type: 'multi',
      context: `A US craft distillery wants younger products that compete with aged brands. Its R&D team proposes heat-cycling the warehouse, ultrasound treatment and oak chips in tanks, and asks what the labels can then say. A Scottish partner asks the same question about chips.`,
      prompt: 'Which statements are correct under the rules? Select all that apply.',
      options: [
        'Each month the spirit spends in qualifying barrels counts toward its age, whether or not the warehouse is heat-cycled',
        'A product treated with oak chips in a tank must disclose the wood treatment, for example "colored and flavored with wood chips"',
        'If a trained panel judges an ultrasound-treated spirit to taste like a 10-year-old, the label may say "10 years old"',
        'For a straight bourbon, months spent in used barrels count toward its 2-year minimum',
        'A Scotch distiller may add oak chips to its casks, provided the whisky still matures 3 years in oak',
      ],
      answer: [0, 1],
      explanation: `US age is the time spent in oak containers after distillation (27 CFR 5.1), so heat can change the chemistry while each month still counts once, and wood treatment outside a barrel must be disclosed (27 CFR 5.73). Age is never a sensory judgment, so no panel can add years. For bourbon and the straight whiskies other than straight corn whisky, only time in charred new oak counts, and the Scotch Whisky Regulations 2009 allow nothing to be added except water and plain caramel, which rules out chips.`,
    },
    {
      id: 'x6-9',
      lesson: 'l6-process-maturation-modeling',
      type: 'multi',
      context: `**Malt distillery yield sheet, four weeks**

PSY on every malt certificate: 415 LPA per tonne. Cut points and the feints recycle are unchanged.
- Week 1: 30.0 t mashed · 12,150 LPA
- Week 2: 29.5 t mashed · 11,800 LPA
- Week 3: 30.2 t mashed · 11,780 LPA
- Week 4: 29.8 t mashed · 11,320 LPA`,
      prompt: 'Which conclusions does the sheet support? Select all that apply.',
      options: [
        'Efficiency against PSY fell from about 97.6% to about 91.5%',
        `Because PSY held steady, the malt's potential did not change, so the cause is likely in the distillery's own process, such as milling, mash temperatures or fermentation hygiene`,
        'The malt must be below specification, so the maltster owes the distillery a credit',
        'The fall comes from the spirit still, because alcohol sent to the feints is lost',
        'A gradual weekly decline is normal noise; only a single sharp drop would signal a problem',
      ],
      answer: [0, 1],
      explanation: `Yield fell from 12,150 / 30.0 = 405 to 11,320 / 29.8 = 380 LPA per tonne, so efficiency fell from 405 / 415 = 97.6% to 380 / 415 = 91.5%. With the PSY certificates unchanged, the malt could still deliver the same alcohol, so the loss lies upstream in milling, mashing or fermentation. Feints go back into the next charge, and a gap that widens week after week is exactly the warning PSY tracking exists to catch.`,
    },
    {
      id: 'x6-10',
      lesson: 'l6-process-maturation-modeling',
      type: 'match',
      prompt: 'Match each plant practice to the job it does.',
      pairs: [
        { left: 'Mechanical vapor recompression', right: 'Compresses low-pressure vapor so its heat can be reused' },
        { left: 'Anaerobic digestion', right: 'Turns pot ale and draff into biogas' },
        { left: 'DDGS production', right: 'Dries stillage into animal feed' },
        { left: 'ATEX or DSEAR zoning', right: 'Designs places where flammable spirit vapor can occur as hazardous areas' },
        { left: 'Weight regauge', right: `Finds a cask's contents from gross weight minus tare and a density table` },
      ],
      explanation: `MVR and anaerobic digestion are easy to swap because both save energy: MVR reuses heat the plant already has, while anaerobic digestion makes a new fuel, biogas, from pot ale and draff. DDGS turns US stillage into a saleable feed. Hazardous-area zoning follows from the low flash point of spirit (about 26 C at 40% ABV), and a weight regauge turns gross weight, tare and density into litres and LPA.`,
    },

    // ---------- Lesson 2: Blending and Proofing Mathematics ----------
    {
      id: 'x6-11',
      lesson: 'l6-blending-proofing-math',
      type: 'numeric',
      context: `**Bottling order, vat 12**
- Vat: 5,600 L at 58.4% ABV
- Reduce to 46.0% ABV and fill 70 cl bottles
- Allow 0.8% of the LPA for filter and line losses`,
      prompt: 'How many full bottles will the run fill?',
      answer: 10075,
      tolerance: 1,
      unit: 'bottles',
      explanation: `LPA = 5,600 × 0.584 = 3,270.4, and after a 0.8% loss 3,270.4 × 0.992 = 3,244.2 LPA. Each bottle holds 0.70 × 0.46 = 0.322 LPA, so 3,244.2 / 0.322 = 10,075.3, or 10,075 full bottles. Ignoring the losses would promise 10,156 bottles, about 80 more than the vat can fill.`,
    },
    {
      id: 'x6-12',
      lesson: 'l6-blending-proofing-math',
      type: 'numeric',
      context: `**Blend brief, peated batch**
- Alcohol required: 3,010 LPA
- Smoke target: 10 phenol units (pure-alcohol basis)
- Parcel H: 24 phenol units · Parcel L: 4 phenol units
- Only these two parcels are used`,
      prompt: 'How many LPA of parcel H does the batch need? Round to the nearest LPA.',
      answer: 903,
      tolerance: 1,
      unit: 'LPA',
      explanation: `On a pure-alcohol basis phenols blend as an LPA-weighted average, so the Pearson square applies: H takes 10 − 4 = 6 parts and L takes 24 − 10 = 14 parts, making H 6 / 20 = 30% of the alcohol, or 903 LPA. Dividing 10 by 24 (41.7%, or 1,254 LPA) ignores the phenols parcel L already brings and would overshoot the target at about 12.3 units.`,
    },
    {
      id: 'x6-13',
      lesson: 'l6-blending-proofing-math',
      type: 'numeric',
      context: `**Strength decision, 70 cl blended malt**
- Options: bottle at 40.0% or at 46.0% ABV
- Liquid cost: £15.00 per LPA
- UK duty: £33.99 per LPA (the rate from 1 February 2026; check the current rate)
- Glass, closure and overhead cost the same at either strength`,
      prompt: 'How much more does each bottle cost in liquid and duty at 46% than at 40%? Give pounds to the nearest penny.',
      answer: 2.06,
      tolerance: 0.01,
      unit: 'GBP',
      explanation: `The extra alcohol per bottle is 0.70 × (0.46 − 0.40) = 0.042 LPA. It costs 0.042 × £15.00 = £0.63 in liquid and 0.042 × £33.99 = £1.43 in duty, £2.06 in all. Counting the liquid alone misses the larger part: UK duty is charged per LPA, so a strength decision is mostly a tax decision.`,
    },
    {
      id: 'x6-14',
      lesson: 'l6-blending-proofing-math',
      type: 'single',
      context: `**Reduction log, vat 7 (US bottling)**
- Label strength: 43.0% ABV
- Water added in stages to the C1V1 estimate; vat mixed and rested back to the reference temperature
- Calibrated density meter now reads 43.4% ABV`,
      prompt: 'What should the blender do next?',
      options: [
        'Add a small calculated trim of water, mix, rest back to the reference temperature and re-measure',
        'Bottle now: 43.4% falls inside the tolerance US rules allow around a 43.0% label statement',
        'Record 43.0%: density meters read about 0.4 points high just after reduction, so the vat is on target',
        'Warm the vat a few degrees, re-read the meter and release it once the display shows 43.0%',
      ],
      answer: 0,
      explanation: `Ethanol and water contract when mixed, so C1V1 underestimates the water and the vat comes out slightly strong, as here; the fix is a measured final trim and another check. US rules allow only 0.3 percentage points either side of the label (27 CFR 5.65), so a 43% label needs 42.7-43.3% and 43.4% fails. A calibrated density meter read at the reference temperature gives the true strength, so there is no reading to correct, and warming the vat changes the display without changing the whiskey.`,
    },
    {
      id: 'x6-15',
      lesson: 'l6-blending-proofing-math',
      type: 'single',
      context: `**Vatting brief:** 2,000 LPA · label "12 Years Old" · smoke target 5 phenol units (pure-alcohol basis)

**Stock**
- P: 14 years, unpeated, 1,500 LPA available
- Q: 12 years, peated at 25 units, 450 LPA available
- R: 9 years, peated at 20 units, 800 LPA available
- S: 12 years, unpeated, 900 LPA available`,
      prompt: 'Which vatting plan meets every constraint?',
      options: [
        '1,600 LPA of P and 400 LPA of Q',
        '1,500 LPA of P and 500 LPA of R',
        '1,300 LPA of P, 300 LPA of Q and 400 LPA of S',
        '1,200 LPA of P, 400 LPA of Q and 400 LPA of S',
      ],
      answer: 3,
      explanation: `The plan with 1,200 LPA of P, 400 of Q and 400 of S gives 400 × 25 / 2,000 = 5 phenol units, its youngest parcel is 12 years old, and every parcel is in stock. The plan with 1,600 LPA of P hits the smoke target but needs more P than exists. The plan using R also reaches 5 units, but its 9-year-old parcel would make the batch a 9-year-old, and the plan with only 300 LPA of Q reaches just 3.75 units.`,
    },
    {
      id: 'x6-16',
      lesson: 'l6-blending-proofing-math',
      type: 'single',
      context: `**Release panel, batch 26-04 against the reference standard**
- Triangle test: 24 trained assessors, coded and randomized
- 12 assessors picked the odd sample correctly
- Triangle test tool output (one-tailed, chance 1/3): probability of 12 or more correct by guessing alone = 0.068
- Significance level set in the spec: α = 0.05
- Strength, color and congener checks: all within specification`,
      prompt: 'What should the blender conclude?',
      options: [
        'Release: the chance of 12 or more correct by guessing is above 0.05, so the panel has not shown a difference',
        'Hold: 12 of 24 is 50%, well above the one-third chance level, so the batch differs',
        'Release: a probability above 0.05 proves the batch is identical to the reference standard',
        'Hold: a 0.068 chance of guessing means the panel was right 93% of the time, so the batch differs',
      ],
      answer: 0,
      explanation: `The test asks how likely this many correct answers would be if every assessor were guessing. At 0.068 that is above α = 0.05 (12 is one short of the critical value of 13 for 24 assessors), so no difference has been shown and the batch passes its consistency check alongside its other specifications. Beating the one-third chance level is not enough on its own, and 1 − 0.068 is not the share of assessors who were right. A non-significant result means no difference was detected with this panel size; it never proves the two are identical.`,
    },
    {
      id: 'x6-17',
      lesson: 'l6-blending-proofing-math',
      type: 'multi',
      context: `**Bonded rye project**

A distiller is building a batch labeled "Bottled-in-Bond Straight Rye Whisky". The batch starts from 140 barrels distilled at the company's Distillery 1 between August and November 2020, each aged 5 years in that distillery's bonded warehouse. The options list further barrels and steps the team has proposed.`,
      prompt: 'Which further barrels and steps may be added to this batch? Select all that apply.',
      options: [
        '20 more barrels distilled at Distillery 1 in December 2020, each aged 4 years 10 months in its bonded warehouse',
        '30 barrels distilled at Distillery 1 in February 2021, each aged 4 years 8 months',
        `25 barrels from the company's Distillery 2, distilled in the same season as the core barrels`,
        'Reducing the batch to exactly 100 proof with water only',
        'Adding 2% sherry to round the palate, within the 2.5% blending-materials allowance',
        'Bottling at 101 proof to allow for strength loss in the bottle',
      ],
      answer: [0, 3],
      explanation: `Bottled-in-bond (27 CFR 5.88) needs one distilling season, one distiller and one distillery, at least 4 years in a bonded warehouse and exactly 100 proof, with only water added. December 2020 falls in the same July-to-December season as the core barrels and 4 years 10 months clears the minimum, while February 2021 belongs to the next season and Distillery 2 is a second distillery even under the same owner. Straight whiskey takes no blending materials, so the 2.5% allowance never applies, and 101 proof misses the exact-100 rule.`,
    },
    {
      id: 'x6-18',
      lesson: 'l6-blending-proofing-math',
      type: 'multi',
      prompt: `A blender wants first estimates of a vatting's properties before panel work. Which can be estimated as a simple LPA-weighted average of the parcels? Select all that apply.`,
      options: [
        'Phenol level expressed per litre of pure alcohol',
        'Ester content expressed per litre of pure alcohol',
        'The age statement',
        'Aroma intensity as scored by the sensory panel',
        'Color absorbance of the blend after reduction to bottling strength',
      ],
      answer: [0, 1],
      explanation: `Figures on a pure-alcohol basis blend as LPA-weighted averages and are not changed by reduction water, which makes them sound starting targets. The age statement follows the youngest parcel whatever the weights. Aroma does not add linearly because compounds mask and lift each other. Color is the tempting one: it blends roughly by volume, not by LPA, and reduction water lowers it, so it is measured after the blend is made and reduced.`,
    },
    {
      id: 'x6-19',
      lesson: 'l6-blending-proofing-math',
      type: 'match',
      prompt: 'Match each blending-room task to the method or rule that handles it.',
      pairs: [
        { left: 'Find the ratio of two stocks that hits a target strength', right: 'Pearson square' },
        { left: 'Set the age statement for a vatting', right: 'Age of the youngest whiskey in it' },
        { left: 'Hit the label strength in a large vat', right: 'Staged water additions, trimmed by density meter' },
        { left: 'Confirm a batch matches the house style', right: 'Panel test against a retained reference standard' },
        { left: 'Count alcohol for US excise and inventory', right: 'Proof gallons (WG × proof / 100)' },
      ],
      explanation: `The Pearson square solves two-stock ratios, and the youngest parcel always sets the age, never a weighted average. Staged reduction with a density-meter trim handles contraction, which a single C1V1 calculation misses. A panel test against a retained reference standard guards consistency, and US tax and inventory records count proof gallons, since volume alone ignores strength.`,
    },
    {
      id: 'x6-20',
      lesson: 'l6-blending-proofing-math',
      type: 'order',
      prompt: 'Put the steps for reducing a vat to bottling strength in order, first to last.',
      items: [
        'Estimate the reduction water with C1V1 or from density tables',
        'Add the water in stages, mixing the vat between additions',
        'Rest the vat until it settles back to the reference temperature',
        'Measure the strength with a calibrated density meter',
        'Make a small final trim and re-measure',
        'Release the vat to bottling once it is within tolerance of the label',
      ],
      explanation: `The estimate comes first, and the water goes in stages because contraction makes any simple estimate slightly low. The vat must settle back to the reference temperature (60 F in the US, 20 C in the UK and EU) before a reading means anything, and only a measured result justifies the trim. Release comes last, once the strength sits within the label tolerance.`,
    },

    // ---------- Lesson 3: The Business of Whiskey ----------
    {
      id: 'x6-21',
      lesson: 'l6-business-of-whiskey',
      type: 'numeric',
      context: `**Excise worksheet, Q4 2026**
- US distiller eligible for the reduced rates
- Removals from bond earlier this calendar year: 85,000 PG
- Removals this quarter: 40,000 PG
- No credits or assignments apply`,
      prompt: `What federal excise tax is due on this quarter's removals? Enter the dollar amount as a number only.`,
      answer: 374000,
      tolerance: 1,
      unit: 'USD',
      explanation: `The $2.70 rate covers only the first 100,000 PG of the calendar year, and 85,000 PG have used most of it, so 15,000 PG of this quarter's removals pay $2.70 ($40,500). The other 25,000 PG fall in the $13.34 band ($333,500), for $374,000 in all. Treating the quarter as a fresh start (40,000 × $2.70 = $108,000) ignores that the bands run per producer per calendar year.`,
    },
    {
      id: 'x6-22',
      lesson: 'l6-business-of-whiskey',
      type: 'single',
      context: `**Depletion report line**
- 1,000 nine-litre cases of a bourbon in 750 mL bottles at 86 proof
- The supplier pays the full federal rate of $13.50 per proof gallon
- 1 US gallon = 3.7854 L`,
      prompt: 'How much federal excise tax is built into each nine-litre case?',
      options: ['$27.60', '$25.68', '$13.80', '$52.25'],
      answer: 0,
      explanation: `A nine-litre case is 9 / 3.7854 = 2.378 US gallons, and at 86 proof that is 2.378 × 0.86 = 2.045 PG, so the tax is 2.045 × $13.50 = $27.60, about $2.30 a bottle. $25.68 uses an 80-proof strength, $13.80 multiplies by the ABV (0.43) where proof / 100 (0.86) belongs, and $52.25 charges the US rate on litres of pure alcohol.`,
    },
    {
      id: 'x6-23',
      lesson: 'l6-business-of-whiskey',
      type: 'numeric',
      context: `**Launch pricing, license state**
- Target shelf price: $49.99 before sales tax
- Retailer margin: 30% · distributor margin: 25%
- State excise: $0.79 per bottle, paid by the distributor and part of its cost`,
      prompt: 'What is the highest price the supplier can charge the distributor and still hit the shelf price? Give dollars to the nearest cent, as a number only.',
      answer: 25.45,
      tolerance: 0.02,
      unit: 'USD',
      explanation: `Work backwards with margins: the retailer's cost is 49.99 × (1 − 0.30) = $34.99, and the distributor's cost is 34.99 × (1 − 0.25) = $26.24. Taking off the $0.79 state excise leaves $25.45 for the supplier. Dividing by 1.30 and 1.25 as if the margins were markups gives about $29.97, which would push the shelf price to about $58.60.`,
    },
    {
      id: 'x6-24',
      lesson: 'l6-business-of-whiskey',
      type: 'numeric',
      context: `**Weekly bar count, house bourbon**
- Sold: 240 pours of 1.5 oz at $12.00 each
- Used, from the inventory count: 16 bottles of 750 mL (25.36 fl oz each)
- Bottle cost: $30.00`,
      prompt: 'What was the actual pour cost for the week? Give the percentage to one decimal place.',
      answer: 16.7,
      tolerance: 0.1,
      unit: '%',
      explanation: `Actual pour cost = liquor used / sales = (16 × $30.00) / (240 × $12.00) = $480 / $2,880 = 16.7%. The sales account for only 360 oz, or 14.2 bottles and a 14.8% pour cost, so about 46 oz went to over-pouring, spills or comps. Reporting the 14.8% theoretical figure would hide that loss, which is why bars count inventory against sales every week.`,
    },
    {
      id: 'x6-25',
      lesson: 'l6-business-of-whiskey',
      type: 'single',
      context: `**Launch plan for a control state**
- A state agency is the only spirits wholesaler and runs the liquor stores
- Posted price = supplier's landed cost × the agency's standard markup, plus state taxes and fees, applied uniformly
- The brand wants a lower shelf price for its launch`,
      prompt: 'Which lever does the brand actually control?',
      options: [
        `Its own landed cost to the agency, since the posted price follows the agency's formula`,
        `A lower margin negotiated with the state's private spirits distributors before the launch`,
        'A per-bottle incentive paid to state store clerks who recommend the brand to shoppers',
        'A reduced markup for its brand alone, agreed with the agency for the whole launch period',
      ],
      answer: 0,
      explanation: `In a control state the agency runs the wholesale tier and applies one posted formula, so the only number the supplier sets is its own price into the system. There are no private spirits wholesalers to negotiate with there, and the formula applies to every brand alike. Paying the staff who sell a brand is the kind of payment the commercial-bribery rules (27 CFR Part 10) target.`,
    },
    {
      id: 'x6-26',
      lesson: 'l6-business-of-whiskey',
      type: 'single',
      context: `**Quarterly dashboard, a bourbon brand (year on year)**
- Shipments to distributors: +18%
- Depletions: −4%
- Distributor inventory: 75 days of sales, up from 45`,
      prompt: 'What is the best reading of these figures?',
      options: [
        'Stock is building up in the channel while real demand softens, so shipments are likely to fall back',
        `Consumer demand grew about 18%, so next year's fill plan should rise to keep pace with it`,
        'Distributors are stocking up ahead of strong demand, so the brand should ship even more next quarter',
        'Depletions lag shipments by a quarter or two, so the 18% rise should reach consumers soon',
      ],
      answer: 0,
      explanation: `Depletions, the sales from distributors to retailers and bars, show real demand, and they fell 4% while shipments into distributors rose 18%. The extra stock is sitting in the channel, as the jump from 45 to 75 days of inventory confirms, so future shipments will have to slow. Depletions do trail shipments a little, but if demand were on its way they would be rising, not falling while stock piles up. Reading shipments as demand is the classic error, and raising fills on that basis would lock the mistake into the warehouse for years.`,
    },
    {
      id: 'x6-27',
      lesson: 'l6-business-of-whiskey',
      type: 'multi',
      context: `A new supplier rep wants a busy cocktail bar in a license state to feature the brand, and lists five ideas (shown as the options).`,
      prompt: 'Which ideas are likely to breach the federal trade-practice rules? Select all that apply.',
      options: [
        'Installing a free branded back-bar refrigerator worth $3,000',
        `Paying flights and hotel rooms for the bar's staff to attend a seminar at the distillery`,
        'Giving the bar manager a $500 gift card for featuring the brand on the menu',
        `Running a free educational seminar on whiskey production for the bar's staff at the bar`,
        `Explaining the brand's mashbill and aging to the bartenders during a regular sales call`,
      ],
      answer: [0, 1, 2],
      explanation: `Valuable equipment given to a retailer is a tied-house problem (27 CFR Part 6), and a gift to a retailer's manager for featuring a brand is commercial bribery (Part 10). Educational seminars for retail staff are an allowed exception, but the supplier may not pay their travel or lodging, which is what turns the flights and hotels into a breach. Sharing product information on a sales call gives the bar nothing of value.`,
    },
    {
      id: 'x6-28',
      lesson: 'l6-business-of-whiskey',
      type: 'multi',
      context: `**QUILLFEATHER**
Straight Rye Whiskey
Aged 3 Years · 47.5% Alc./Vol. (95 Proof) · 750 mL
Distilled in Indiana
Bottled by Quillfeather Spirits Co., Nashville, TN`,
      prompt: 'Which conclusions does this label support? Select all that apply.',
      options: [
        '"Bottled by" with an out-of-state distillation statement points to sourced whiskey, so the brand owner is probably a non-distiller producer',
        'The age statement is mandatory, because the whiskey is under 4 years old',
        `Indiana must be named as the state of distillation, because it differs from the state in the bottler's address`,
        'The whiskey must have been aged in Tennessee, because the bottler is there',
        'The brand could add "Bottled-in-Bond" simply by reducing the whiskey to 100 proof',
      ],
      answer: [0, 1, 2],
      explanation: `A Tennessee bottler naming Indiana as the state of distillation is the classic sign of sourced whiskey, the non-distiller producer model built on contract distilling. Any whisky under 4 years must state its age (27 CFR 5.74), and a distilling state that differs from the address state must be named (27 CFR 5.66(f)). The label says nothing about where the whiskey aged, and bonding needs at least 4 years, one distillery and one season as well as 100 proof.`,
    },
    {
      id: 'x6-29',
      lesson: 'l6-business-of-whiskey',
      type: 'order',
      context: `**Price waterfall, one 750 mL bottle of 90-proof bourbon (license state)**
- Supplier price to distributor: $18.50, including federal excise at the full $13.50 rate
- State excise: $5.00 per gallon, paid by the distributor (1 US gallon = 3.7854 L)
- Distributor margin: 28% · retailer margin: 32%`,
      prompt: 'Put these parts of the shelf price in order from largest to smallest.',
      items: [
        `The supplier's price net of federal excise`,
        `The retailer's margin`,
        `The distributor's margin`,
        'Federal excise tax',
        'State excise tax',
      ],
      explanation: `FET = 0.198 × 0.90 × $13.50 = $2.41, leaving $16.09 of the supplier's price, and state excise = 0.198 × $5.00 = $0.99. The distributor sells at (18.50 + 0.99) / 0.72 = $27.07, a $7.58 margin, and the retailer at 27.07 / 0.68 = $39.81, a $12.74 margin. The retailer's dollar margin is the larger of the two because its percentage applies to a bigger price.`,
    },
    {
      id: 'x6-30',
      lesson: 'l6-business-of-whiskey',
      type: 'truefalse',
      prompt: `True or false: if the distributor takes a 25% margin and the retailer takes a 25% margin, the shelf price (before taxes) is 50% above the supplier's price to the distributor.`,
      answer: false,
      explanation: `Each margin is a share of that tier's selling price, so each tier divides its cost by 0.75, and the shelf price is 1 / (0.75 × 0.75) = 1.78 times the supplier's price, or 78% above it. Adding the two percentages ignores both that margins are shares of price and that the second margin is taken on a larger base.`,
    },

    // ---------- Lesson 4: Collecting, the Secondary Market and Cask Ownership ----------
    {
      id: 'x6-31',
      lesson: 'l6-collecting-cask-ownership',
      type: 'numeric',
      context: `**Regauge history, cask 1144 (refill hogshead, bonded warehouse in Scotland)**
- Latest strength: 41.8% ABV
- Trend: strength falling about 0.4 percentage points a year`,
      prompt: 'If the trend continues, how many more full years can the owner hold the cask and still bottle it as Scotch whisky? Give a whole number of years.',
      answer: 4,
      tolerance: 0,
      unit: 'years',
      explanation: `After 4 more years the cask would stand at about 41.8 − 1.6 = 40.2% ABV, still at or above the 40% minimum; after 5 years it would be about 39.8% and could no longer be bottled as Scotch whisky. Dividing the 1.8-point headroom by 0.4 gives 4.5, and rounding that up to 5 is the costly mistake, because a cask below 40% loses its category and much of its value.`,
    },
    {
      id: 'x6-32',
      lesson: 'l6-collecting-cask-ownership',
      type: 'numeric',
      context: `**Auction terms (UK)**
- Buyer's premium: 12.5% of the hammer price, plus VAT at 20% on the premium
- Seller's commission: 8% of the hammer price plus a £10 listing fee, plus VAT at 20% on both
- Lot 212 sells at a hammer price of £1,850`,
      prompt: 'How much more does the buyer pay than the seller receives? Give pounds to the nearest penny.',
      answer: 467.1,
      tolerance: 0.05,
      unit: 'GBP',
      explanation: `The buyer pays 1,850 + (231.25 × 1.20) = £2,127.50. The seller's charges are (148 + 10) × 1.20 = £189.60, so the seller nets £1,660.40, and the gap is £467.10, about a quarter of the hammer price. Quoting the hammer price as a bottle's "value" hides that the buyer paid more and the seller received less.`,
    },
    {
      id: 'x6-33',
      lesson: 'l6-collecting-cask-ownership',
      type: 'numeric',
      context: `**Cask 7720, regauged this month: 160 L at 55.0% ABV**
- Exit A: an independent bottler offers £4,800 for the cask now
- Exit B: bottle it now in 70 cl at 46% ABV; bottling and dry goods £5.00 a bottle; UK duty £33.99 per LPA; expected net sale price £45.00 a bottle before VAT
- Ignore VAT, other fees and the time value of money`,
      prompt: 'If every bottle sells at the expected price, how much more does exit B return than exit A? Give pounds to the nearest pound.',
      answer: 3132,
      tolerance: 2,
      unit: 'GBP',
      explanation: `The cask holds 160 × 0.55 = 88.0 LPA and each bottle needs 0.70 × 0.46 = 0.322 LPA, so it fills 273 full bottles. Each returns £45.00 − £5.00 − (0.322 × £33.99 = £10.945) = £29.055, or £7,932 in all, which is £3,132 more than the bottler's offer (rounding to £29.06 a bottle first gives £7,933 and £3,133, which is also accepted). That premium pays for real work and risk, from a compliant label and permission for any distillery name to actually selling 273 bottles, which is why many owners take the bottler's price.`,
    },
    {
      id: 'x6-34',
      lesson: 'l6-collecting-cask-ownership',
      type: 'single',
      context: `**Consignment check, lot 88**
- Label: distilled 1938, bottled 1951
- Glass and closure look right for the period
- Lab report: carbon-14 in the spirit well above pre-1950 levels, matching the bomb-pulse signal`,
      prompt: 'What is the best conclusion?',
      options: [
        'The grain was grown after the mid-1950s, so this cannot be 1938 whisky; treat it as refilled or faked',
        'Inconclusive: radiocarbon dating only resolves samples that are thousands of years old, not decades',
        'Genuine: period-correct glass and closure outweigh a single lab result on a small sample',
        'Likely genuine: 70 years of cork contact can raise the carbon-14 in the spirit to these levels',
      ],
      answer: 0,
      explanation: `Nuclear tests in the 1950s and early 1960s sharply raised atmospheric carbon-14, and grain grown afterwards carries that signal into its spirit, so a 1938 distillate would show pre-bomb levels. Bomb-pulse dating is precise for recent spirit, which is what makes it useful against fakes. Genuine old glass is exactly what refillers reuse, so a period-correct bottle cannot outweigh the carbon in the liquid itself.`,
    },
    {
      id: 'x6-35',
      lesson: 'l6-collecting-cask-ownership',
      type: 'single',
      context: `**Two bottles of the same 1980s release from a closed distillery**
- Bottle 1: bought at auction, with receipts tracing it to the original buyer; slight label scuffing; fill level normal for its age
- Bottle 2: private online seller with no paperwork; pristine label; filled right up to the neck; priced 40% below bottle 1`,
      prompt: 'Which assessment is best?',
      options: [
        `Bottle 1: provenance underpins value, and bottle 2's brim fill and missing history suggest a refill`,
        'Bottle 2: condition drives value, and its pristine label and full fill show careful storage',
        'Bottle 2: the release is identical, so its 40% discount makes it the better value for money',
        'Bottle 2, provided its label glows brightly under UV light, which confirms original period paper',
      ],
      answer: 0,
      explanation: `Value rests on trust as much as rarity, and documented provenance supplies that trust; a bottle with doubtful provenance can be worth almost nothing. A suspiciously perfect fill on a bottle about 40 years old can mean refilling, and a bright glow under UV points to modern paper or glue with optical brighteners, a warning sign of its own. The second bottle's discount reflects that risk.`,
    },
    {
      id: 'x6-36',
      lesson: 'l6-collecting-cask-ownership',
      type: 'multi',
      context: `A private owner holds a single malt cask from a Speyside distillery. It has matured 11 years in a bonded warehouse in Scotland and now stands at 52% ABV. She plans to bottle it and sell it in the UK as single malt Scotch whisky.`,
      prompt: 'Which statements about her plan are correct? Select all that apply.',
      options: [
        'It must be bottled in Scotland, because it is a single malt',
        'Duty and VAT become payable when the bottled whisky is released from bond for sale in the UK',
        'It must be bottled at 40% ABV or more',
        'It may be labeled "Islay" if it spends its last year in an Islay warehouse',
        `It may carry the distillery's name without permission, because the whisky was distilled there`,
      ],
      answer: [0, 1, 2],
      explanation: `Single malt Scotch has had to be bottled in Scotland since 23 November 2012, Scotch needs at least 40% ABV, and duty and VAT fall due when the bottled whisky leaves bond for UK sale. Place names such as Islay may appear only on whisky wholly distilled there (SWR 2009, reg. 10), so maturing it on Islay changes nothing. The distillery's name is controlled by trademark and the original sale contract and is often refused, which is why many single casks are sold under invented names.`,
    },
    {
      id: 'x6-37',
      lesson: 'l6-collecting-cask-ownership',
      type: 'truefalse',
      context: `A collector lives in a state whose law requires a license for every sale of alcoholic beverages and has no vintage-spirits exception. She posts in an online group: "Selling sealed bottles from my collection. Local pickup only, cash."`,
      prompt: 'True or false: because the bottles are sealed and the sale is private, the collector needs no license.',
      answer: false,
      explanation: `Selling alcohol requires a state license, and in most states an unlicensed private person may not resell bottles, online groups included. A few states, such as Kentucky with its vintage spirits law of 2017, have created licensed routes for older bottles, and those run through licensed retailers. A sealed bottle and a private buyer leave the licensing rule unchanged, and the rules keep changing, so verify current state law.`,
    },
    {
      id: 'x6-38',
      lesson: 'l6-collecting-cask-ownership',
      type: 'order',
      prompt: 'A buyer is purchasing a cask held in a named bonded warehouse. Put the steps in order, first to last.',
      items: [
        'Ask the warehouse to confirm the cask number, fill date and latest regauge',
        'Agree the price and sign a delivery order with the seller',
        'Send the delivery order to the warehouse, which acknowledges it',
        `The warehouse records the cask in the buyer's own account`,
        `Get written confirmation from the warehouse that the cask is held in the buyer's name`,
      ],
      explanation: `Verification comes before any commitment, because the warehouse is the only party whose records prove the cask exists as described. Title then passes by a delivery order that the warehouse acknowledges and records, and the final written confirmation is the buyer's evidence of ownership. A seller's certificate can turn up at any point and proves none of this.`,
    },
    {
      id: 'x6-39',
      lesson: 'l6-collecting-cask-ownership',
      type: 'match',
      context: `**BRAEMOSS CASK PARTNERS (brochure extract)**
- "Guaranteed 12% a year"
- "An FCA-authorised firm"
- "Certificate of ownership emailed on payment"
- "Stored in a bonded warehouse in Scotland"
- "Valued at £18,000 by our in-house team"`,
      prompt: 'Match each brochure claim to the due-diligence response it calls for.',
      pairs: [
        { left: '"Guaranteed 12% a year"', right: 'Treat it as a red flag: no one can guarantee what a cask will sell for' },
        { left: '"An FCA-authorised firm"', right: 'Check what the permission covers; ordinary cask sales fall outside FCA regulation' },
        { left: '"Certificate of ownership emailed on payment"', right: 'Insist on a delivery order recorded in your own warehouse account' },
        { left: '"Stored in a bonded warehouse in Scotland"', right: 'Get the warehouse named and have it confirm the cask number, fill date and regauge' },
        { left: '"Valued at £18,000 by our in-house team"', right: 'Compare with an independent broker valuation and auction results' },
      ],
      explanation: `A guaranteed return is the classic warning sign, because a cask's value depends on future sale prices nobody controls. An FCA permission may cover something unrelated, such as credit broking, and an ordinary cask purchase carries no FSCS cover. Title exists only in the bonded warehouse's records, so the warehouse must be named, must confirm the cask and must record you as owner by delivery order, and a seller's own valuation needs checking against independent evidence.`,
    },

    // ---------- Lesson 5: Hospitality, Cocktail Engineering and Responsible Leadership ----------
    {
      id: 'x6-40',
      lesson: 'l6-hospitality-capstone',
      type: 'numeric',
      context: `**Ticketed tasting plan**
- Five whiskeys at 40, 43, 46, 50 and 57% ABV; one 15 mL pour of each per guest (just under 2.0 US standard drinks in all)
- Bottle costs (750 mL): $28, $36, $45, $52 and $80
- Target pour cost on the liquor: 20%`,
      prompt: 'What should the liquor portion of the ticket price be per guest? Give dollars to the nearest cent, as a number only.',
      answer: 24.1,
      tolerance: 0.01,
      unit: 'USD',
      explanation: `Each guest takes 15 / 750 = 2% of every bottle, so the liquor costs 0.02 × $241 = $4.82 a head. At a 20% pour cost the price is 4.82 / 0.20 = $24.10, before food, water, glassware and staff. Adding 20% to the cost ($5.78) treats pour cost as a markup and would price the liquor at about a quarter of the target.`,
    },
    {
      id: 'x6-41',
      lesson: 'l6-hospitality-capstone',
      type: 'numeric',
      context: `**Whisky club night (UK)**
- Five 25 mL pours at 40, 46, 46, 50 and 58% ABV
- 1 UK unit = 10 mL of pure alcohol`,
      prompt: 'How many UK units does a member who drinks every pour consume? Round to two decimal places.',
      answer: 6,
      tolerance: 0.01,
      unit: 'UK units',
      explanation: `Pure alcohol = 25 × (0.40 + 0.46 + 0.46 + 0.50 + 0.58) = 25 × 2.40 = 60 mL, which at 10 mL per unit is 6.00 units: over 40% of the UK Chief Medical Officers' 14-unit weekly guideline in one evening, and well over this course's 2-US-drink session cap. Counting one unit per 25 mL pour gives 5, a rule that only holds at 40% ABV. Smaller pours, water and spitting bring the total down.`,
    },
    {
      id: 'x6-42',
      lesson: 'l6-hospitality-capstone',
      type: 'numeric',
      context: `**Spec development: house Manhattan**
- 60 mL rye at 50% ABV · 30 mL sweet vermouth at 18% ABV · bitters negligible
- Target strength in the glass: 30.0% ABV`,
      prompt: 'How much dilution should the stir add, as a percentage of the starting 90 mL? Round to one decimal place.',
      answer: 31.1,
      tolerance: 0.2,
      unit: '%',
      explanation: `Ethanol = 30.0 + 5.4 = 35.4 mL, which is 39.3% of the 90 mL before ice. At 30.0% that alcohol needs 35.4 / 0.30 = 118 mL, so the stir must add 28 mL of water, or 28 / 90 = 31.1% of the starting volume. Computing 1 − 30 / 39.3 = 23.7% gives the water's share of the finished drink, and adding only that much would leave the drink at about 31.8%.`,
    },
    {
      id: 'x6-43',
      lesson: 'l6-hospitality-capstone',
      type: 'single',
      context: `The tasting ends at 9 pm. A guest has had about 4 US standard drinks since 7 pm, feels fine, and plans to drive home at 10 pm "after a coffee".`,
      prompt: 'What is the accurate and responsible response?',
      options: [
        'Arrange a taxi: about one drink clears an hour, coffee does not speed it, and alcohol will remain at 10 pm',
        'Agree: by 10 pm three of the four drinks will have cleared, which leaves them well under the 0.08% limit',
        'Suggest waiting until 11 pm, when four hours at one drink an hour will have cleared all four drinks, then drive',
        'Suggest a large meal and a pint of water before leaving, since food and fluids speed the clearance of alcohol',
      ],
      answer: 0,
      explanation: `The body clears roughly one standard drink an hour and nothing, coffee or food included, speeds that up, so alcohol will still be in the guest's blood at 10 pm. Waiting until 11 pm is the tempting answer, but one drink an hour is only an average: no one can work out a guest's blood alcohol from a drink count, so the safe rule is never to drive after drinking. Arranging transport protects the guest and the venue.`,
    },
    {
      id: 'x6-44',
      lesson: 'l6-hospitality-capstone',
      type: 'single',
      context: `**Draft briefing for staff at a whisky bar in Glasgow (2026)**

A new supervisor has written four "facts for guests". Only one is accurate.`,
      prompt: 'Which line may go into the briefing as written?',
      options: [
        `Scotland's drink-drive limit is 50 mg per 100 mL of blood, lower than England and Wales's 80 mg`,
        'The UK Chief Medical Officers advise no more than 14 units a day, spread across the whole evening',
        'IARC lists alcohol as a Group 2 "possible" carcinogen, so its link to cancer is still unproven',
        'The UK Chief Medical Officers advise that one small dram a week in pregnancy carries no risk',
      ],
      answer: 0,
      explanation: `Scotland cut its limit to 50 mg per 100 mL (0.05%) in December 2014, while England and Wales use 80 mg (0.08%). The CMOs' 14 units is a weekly guideline, spread over three or more days, and their advice in pregnancy is no alcohol at all. IARC places alcohol in Group 1, a known cause of cancer in humans, so staff should never suggest the link is uncertain.`,
    },
    {
      id: 'x6-45',
      lesson: 'l6-hospitality-capstone',
      type: 'multi',
      context: `A bar manager wants faster Friday service from batched Manhattans and Whiskey Sours, and drafts six steps (shown as the options).`,
      prompt: 'Which steps are sound practice? Select all that apply.',
      options: [
        'Add the measured dilution water to the Manhattan batch and keep it refrigerated',
        'Funnel the finished batch into empty rye bottles so it pours from the speed rail',
        'Mix the Whiskey Sour batch with fresh lemon juice on Monday to cover the whole week',
        'Stir each pre-diluted Manhattan on ice again before straining',
        'Store each batch in a clean container labeled with its contents and date',
        'Keep the vermouth-based batch on the back bar at room temperature',
      ],
      answer: [0, 4],
      explanation: `Pre-dilution plus refrigeration gives a chilled pour that matches a freshly stirred drink, and clean, labeled, dated containers keep each batch traceable. US federal law bars refilling liquor bottles or adding anything to them (26 U.S.C. 5301(c)), and stirring a pre-diluted batch on ice dilutes it twice. Fresh citrus fades within hours, and vermouth is wine that oxidizes unless it is kept cold.`,
    },
    {
      id: 'x6-46',
      lesson: 'l6-hospitality-capstone',
      type: 'multi',
      context: `**Draft lines for a US whiskey tasting menu**`,
      prompt: 'Which lines break a legal definition or make a claim that cannot be verified, and so must be fixed or removed? Select all that apply.',
      options: [
        '"Bottled-in-bond rye, 100 proof, aged 3 years"',
        '"Straight bourbon, aged 5 years, 95 proof"',
        '"Blended malt Scotch whisky: single malts from three distilleries"',
        `"Single malt Scotch, vatted from three distilleries' malts"`,
        '"From the oldest distillery in the world," for a producer whose claim cannot be verified',
        '"Single malt Scotch whisky, 12 years old, from one Speyside distillery"',
      ],
      answer: [0, 3, 4],
      explanation: `Bottled-in-bond requires at least 4 years, so a 3-year-old bonded rye cannot exist, and "single malt" means one distillery, so malts from three distilleries make a blended malt ("vatted" is not a permitted category name either). An unverifiable "oldest" claim must be proved or dropped. The straight bourbon line meets the 2-year minimum, the blended malt line uses the correct category for exactly that mix, and the 12-year-old single malt from one Speyside distillery meets both the one-distillery rule and the region rule.`,
    },
    {
      id: 'x6-47',
      lesson: 'l6-hospitality-capstone',
      type: 'order',
      prompt: 'Put these serves in order from fewest to most US standard drinks (14 g of ethanol; ethanol weighs 0.789 g/mL; 1 US fl oz = 29.57 mL).',
      items: [
        '25 mL of whisky at 40% ABV',
        '1.5 US fl oz of whiskey at 40% ABV',
        'A highball of 50 mL whisky at 46% ABV topped with 150 mL soda',
        '45 mL of cask-strength whiskey at 60% ABV',
        'A Manhattan of 60 mL rye at 50% ABV and 30 mL vermouth at 16.5% ABV',
      ],
      explanation: `In grams of ethanol the serves hold 7.9 g (0.56 drinks), 14.0 g (1.00), 18.1 g (1.30), 21.3 g (1.52) and 27.6 g (1.97). Soda adds volume and no alcohol, so the tall highball carries less alcohol than a short cask-strength pour, and the Manhattan's nearly 2 drinks come mostly from its 60 mL of 100-proof rye. Judging by glass size gets this order wrong, which is why staff count grams of alcohol.`,
    },
    {
      id: 'x6-48',
      lesson: 'l6-hospitality-capstone',
      type: 'match',
      prompt: 'Match each guest situation to the right staff response.',
      pairs: [
        { left: 'A guest who looks under 25 orders at a UK bar', right: 'Ask for ID under the Challenge 25 policy' },
        { left: 'A guest is slurring and spilling drinks', right: 'Stop service privately and offer water, food and transport' },
        { left: 'A guest asks whether darker whiskey is always older', right: 'Explain that cask type, climate and permitted caramel also affect color' },
        { left: 'A guest asks whether a sealed bottle will keep improving if kept for years', right: 'Explain that whiskey does not age once it is bottled' },
        { left: 'A guest wants smoke in a sour without it overpowering the drink', right: 'Add a small float of peated whisky on top' },
      ],
      explanation: `Challenge 25 removes guesswork about age, and visible intoxication means service stops, handled privately and with alternatives offered. Color reflects the cask, the climate and any permitted caramel as well as time, and whiskey stops maturing once it leaves the wood. A float puts peat on the nose in a small dose, as on the Penicillin.`,
    },
  ],
};
