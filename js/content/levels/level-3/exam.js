export default {
  passPercent: 75,
  draw: 20,
  timeLimitMinutes: 30,
  questions: [
    // ---------- Lesson 1: Malting and Grain Chemistry ----------
    {
      id: 'x3-1',
      lesson: 'l3-malting-grain-chemistry',
      type: 'numeric',
      context: `**Maltings batch record**

- Barley received: 20.0 tonnes at 12% moisture
- Steeped to 45% moisture, then germinated
- Kilned to 4.5% moisture
- Ignore any loss of dry matter.`,
      prompt: `How many tonnes of water does the kiln drive off this batch? Round to one decimal place.`,
      answer: 13.6,
      tolerance: 0.1,
      unit: 'tonnes',
      explanation: `Work through the dry matter, which stays at 20.0 × 0.88 = 17.6 t. The green malt weighs 17.6 ÷ 0.55 = 32.0 t and the finished malt 17.6 ÷ 0.955 = 18.43 t, so the kiln removes 32.0 - 18.43 = 13.6 t of water. Multiplying 32.0 t by the 40.5-point drop in moisture gives 13.0 t, which is wrong because moisture is a share of the current weight, and that weight falls as the grain dries.`,
    },
    {
      id: 'x3-2',
      lesson: 'l3-malting-grain-chemistry',
      type: 'order',
      prompt: `Put these events in order, from barley entering the steep to fermentable sugar in the mash tun, first to last.`,
      items: [
        `The embryo takes up water and sends gibberellin signals to the aleurone layer`,
        `The aleurone layer starts making starch-converting and cell-wall enzymes`,
        `Cell walls and protein around the starch break down as the grain modifies`,
        `The kiln dries the grain, halting growth while keeping its enzymes`,
        `Hot mash water gelatinizes the starch granules`,
        `Alpha- and beta-amylase cut the gelatinized starch into maltose and other sugars`,
      ],
      explanation: `Water wakes the embryo, and its hormone signal switches on enzyme production in the aleurone. Those enzymes modify the kernel during germination, and the kiln then stops growth while preserving them. In the mash, hot water gelatinizes the starch, and only then can the amylases reach it. A common slip is to place enzyme production in the mash tun: the enzymes are made or set free during malting and only put to work in the mash.`,
    },
    {
      id: 'x3-3',
      lesson: 'l3-malting-grain-chemistry',
      type: 'single',
      context: `**Lab report, wash from mash 207**

- Fermentation ran a normal 60 hours with healthy yeast.
- Final gravity is higher than usual, and alcohol yield is down about 4%.
- The leftover carbohydrate is mostly small branched fragments a few glucose units long, each still held together at an alpha-1,6 bond; long chains and unconverted starch are scarce.`,
      prompt: `A shortfall in which enzyme best explains this result?`,
      options: [
        `Limit dextrinase, which cuts the alpha-1,6 branch points`,
        `Beta-amylase, which clips maltose from the ends of chains`,
        `Alpha-amylase, which cuts at random points inside chains`,
        `Beta-glucanase, which breaks down cell-wall gums`,
      ],
      answer: 0,
      explanation: `The leftovers are held together at alpha-1,6 branch points, and of the malt enzymes in this lesson only limit dextrinase cuts those bonds. Beta-amylase is the tempting answer because it makes most of the maltose, but it cuts alpha-1,4 bonds and stops when it reaches a branch, so it cannot free these fragments. Alpha-amylase also cuts only alpha-1,4 bonds, and beta-glucanase breaks down cell walls and leaves starch alone.`,
    },
    {
      id: 'x3-4',
      lesson: 'l3-malting-grain-chemistry',
      type: 'multi',
      prompt: `A distillery mashes 50 ppm peated malt, yet its new make keeps only a small fraction of those phenols. Which statements help explain the gap? Select all that apply.`,
      options: [
        `The ppm figure is measured on the malt, not on the spirit`,
        `Some phenols are lost during mashing and fermentation`,
        `Many phenols run late in the spirit still, so an early end to the heart sends them to the feints`,
        `Phenols boil off early, so they leave with the foreshots before the heart begins`,
        `Malt phenols cannot dissolve in wort, so none of them reach the washback`,
      ],
      answer: [0, 1, 2],
      explanation: `Peat ppm describes the malt, and the spirit keeps only a fraction: some phenols are lost in the mash tun and washback, and the cut points decide how many of the rest reach the spirit receiver. The foreshots option has the timing backward: phenols come over late in the run, which is why peated distilleries extend the heart. If no phenols reached the washback, peated new make would not be smoky at all.`,
    },
    {
      id: 'x3-5',
      lesson: 'l3-malting-grain-chemistry',
      type: 'match',
      prompt: `Match each term to its description.`,
      pairs: [
        { left: 'Amylose', right: 'A mostly straight glucose chain joined by alpha-1,4 bonds' },
        { left: 'Amylopectin', right: 'Glucose chains branched at alpha-1,6 bonds every 20-30 units or so' },
        { left: 'Maltotriose', right: 'Three glucose units, still fermentable by distiller\'s yeast' },
        { left: 'Dextrins', right: 'Starch fragments too large for yeast to ferment' },
        { left: 'Diastatic power', right: 'A malt\'s total capacity to convert starch into sugar' },
      ],
      explanation: `Amylose and amylopectin are the two forms of starch, and the alpha-1,6 branches set amylopectin apart. Yeast can ferment glucose, maltose and maltotriose, so maltotriose still counts toward the yield, while larger dextrins pass through fermentation untouched. Diastatic power measures the malt's starch-converting enzymes together, which is why distillers want it high.`,
    },
    {
      id: 'x3-6',
      lesson: 'l3-malting-grain-chemistry',
      type: 'single',
      context: `**Recipe proposal, an Irish distillery**

- Mash: 45% malted barley, 55% unmalted barley
- Enzymes: the malt's own, plus a natural enzyme preparation to help convert the raw barley
- Triple distillation in pot stills
- Intended category: Pot Still Irish Whiskey`,
      prompt: `Judged against the Irish Whiskey Technical File, what is the status of this plan?`,
      options: [
        `It can go ahead: natural enzymes are allowed and both barley shares meet the minimums`,
        `It fails: as in Scotch, Irish whiskey may be converted only by the malt's own enzymes`,
        `It fails: Pot Still Irish Whiskey needs at least 51% malted barley in its mash`,
        `It can go ahead only if the three distillations are cut back to the usual two`,
      ],
      answer: 0,
      explanation: `The Technical File allows a mash "saccharified by the diastase of malt contained therein, with or without other natural enzymes", and Pot Still Irish Whiskey needs at least 30% malted and at least 30% unmalted barley, which 45% and 55% satisfy. The Scotch comparison is the trap: the Scotch Whisky Regulations 2009 are the ones that allow only the grain's own enzymes. There is no 51% malt rule, and triple distillation is a tradition the rules allow but do not require.`,
    },
    {
      id: 'x3-7',
      lesson: 'l3-malting-grain-chemistry',
      type: 'single',
      prompt: `Why is distilling malt kilned gently rather than cured at high temperatures?`,
      options: [
        `High curing heat would denature the enzymes the mash still needs`,
        `Gentle kilning leaves the malt at 12-15% moisture, so it mills more easily`,
        `High curing heat would drive extra peat smoke into the dry grain`,
        `High curing heat would gelatinize the starch so yeast cannot use it`,
      ],
      answer: 0,
      explanation: `The kiln must stop growth without denaturing the enzymes the mash will need, so distilling malt is cured gently to keep a high diastatic power. That matters most in Scotch, where the malt's own enzymes are the only ones allowed. The peat option is tempting, but smoke sticks mainly to wet grain early in kilning, so the curing temperature does not set the smoke. All finished malt is dried to about 4-5% moisture, so 12-15% would be far too wet to store.`,
    },

    // ---------- Lesson 2: Mashing and Fermentation ----------
    {
      id: 'x3-8',
      lesson: 'l3-mashing-fermentation',
      type: 'numeric',
      prompt: `A washback is charged with wort holding 3,000 kg of fermentable sugar, counted as glucose. The finished wash contains 1,800 litres of pure alcohol. Using a theoretical yield of 0.511 g of ethanol per gram of glucose and an ethanol density of 0.789 kg/L, what percentage of the theoretical yield did the fermentation reach? Round to one decimal place.`,
      answer: 92.6,
      tolerance: 0.2,
      unit: '%',
      explanation: `The theoretical maximum is 3,000 × 0.511 = 1,533 kg of ethanol, which is 1,533 ÷ 0.789 = 1,943 L of pure alcohol. The wash holds 1,800 L, so the fermentation reached 1,800 ÷ 1,943 = 92.6%, inside the usual 90-95%. Skipping the density step compares litres with kilograms and gives an impossible 117%.`,
    },
    {
      id: 'x3-9',
      lesson: 'l3-mashing-fermentation',
      type: 'order',
      prompt: `Put these steps of a Scotch malt distillery's infusion mash in order, first to last.`,
      items: [
        `Crack the malt in a roller mill into husk, grits and flour`,
        `Mix the grist with first water kept below the point where beta-amylase is destroyed`,
        `Drain the first wort through the husk bed, cool it and send it to the washbacks`,
        `Add a hotter second water and send that wort to the washbacks too`,
        `Rinse with the hottest, third water and store it instead of fermenting it`,
        `Use the stored third water as the first water of the next mash`,
      ],
      explanation: `Milling comes first because the husk bed must exist before any wort can drain. The first water stays below about 65 °C so that beta-amylase survives to make maltose, and each later water is hotter and rinses out more sugar. The third water is too weak to ferment, so it is stored and starts the next mash; it is never a fourth wort sent to the washbacks.`,
    },
    {
      id: 'x3-10',
      lesson: 'l3-mashing-fermentation',
      type: 'single',
      context: `**Consultant's proposal**

A new malt distillery's consultant, trained as a brewer, wants to boil every batch of wort for 60 minutes before it reaches the washbacks: "It sterilizes the wort, so we will never have a bacterial problem."`,
      prompt: `What is the main cost of this change for a whisky distillery?`,
      options: [
        `Boiling kills the malt enzymes, ending secondary conversion in the washback`,
        `Boiling drives off most of the alcohol that has already formed in the wort`,
        `Boiling destroys the yeast nutrients, so fermentation stops at about 2% ABV`,
        `Boiling raises the original gravity so high that yeast cannot ferment the wort`,
      ],
      answer: 0,
      explanation: `Whisky wort is left unboiled so that limit dextrinase and the amylases stay alive in the washback and keep turning dextrins into fermentable sugar. Boiling would end that secondary conversion and leave more dextrins unfermented. The alcohol option is the trap: wort has no alcohol in it yet, because yeast has not been added. The bacteria the consultant fears also help long fermentations build fruity esters.`,
    },
    {
      id: 'x3-11',
      lesson: 'l3-mashing-fermentation',
      type: 'multi',
      context: `**Washback trial**

One batch of clear wort is split between two identical washbacks, pitched with the same yeast.

- Washback A: sent to the wash still after 50 hours
- Washback B: sent to the wash still after 110 hours`,
      prompt: `Which results should the distillery expect? Select all that apply.`,
      options: [
        `Both washes reach a similar alcohol strength`,
        `Wash B ends at a lower pH, because lactic bacteria worked after the yeast slowed`,
        `New make from wash B is fruitier and more estery`,
        `Wash B is several points of ABV stronger, because the yeast had more time`,
        `New make from wash A is the lighter, more floral of the two`,
      ],
      answer: [0, 1, 2],
      explanation: `Distiller's yeast uses up nearly all the fermentable sugar in about two days, so both washes end at a similar strength. In the extra hours lactic bacteria lower the pH and make acids that become fruity esters, so B gives the fruitier, lighter new make and A the more cereal, nutty one. The myth that a longer fermentation makes more alcohol is the trap: the extra time changes the flavor and leaves the strength almost where it was.`,
    },
    {
      id: 'x3-12',
      lesson: 'l3-mashing-fermentation',
      type: 'match',
      prompt: `Match each piece of equipment to its job.`,
      pairs: [
        { left: 'Roller mill', right: 'Cracks malt into husk, grits and flour for a drained mash' },
        { left: 'Hammer mill', right: 'Grinds grain to a fine meal for a mash fermented on the grain' },
        { left: 'Lauter tun', right: 'Lifts the grain bed with rotating knives so wort drains fast and clear' },
        { left: 'Cooker', right: 'Heats ground corn near 100 °C to gelatinize its starch' },
        { left: 'Switchers', right: 'Rotating blades that knock down foam in the washback' },
      ],
      explanation: `The mill follows the mash. A Scotch distillery needs husks intact to form a filter bed, so it uses a roller mill, while a bourbon distillery never drains its mash and grinds everything fine in a hammer mill. The lauter tun's knives keep the bed open for a quick, clear run-off, the cooker gelatinizes corn before the malt goes in, and switchers stop a vigorous fermentation from foaming over.`,
    },
    {
      id: 'x3-13',
      lesson: 'l3-mashing-fermentation',
      type: 'multi',
      prompt: `Comparing a Scotch malt washback with a bourbon fermenter, which statements are correct? Select all that apply.`,
      options: [
        `The bourbon fermenter holds the grain solids; the Scotch washback holds drained wort`,
        `The bourbon fermenter usually receives backset; nothing is added to acidify the Scotch wash`,
        `Both reach a broadly similar strength, roughly 7-10% ABV`,
        `The Scotch wort was boiled first to stop its enzymes, as in brewing`,
        `Both traditions may add commercial enzymes to raise the yield`,
      ],
      answer: [0, 1, 2],
      explanation: `American distillers ferment the whole mash, grain included, usually with backset, while Scotch distillers drain the wort off the grain and add nothing to acidify it. A wash of about 7-9% and a distiller's beer of about 8-10% are close in strength. Scotch wort is never boiled, so its enzymes keep working, and the Scotch Whisky Regulations 2009 allow only the malt's own enzymes, which rules out the last option.`,
    },
    {
      id: 'x3-14',
      lesson: 'l3-mashing-fermentation',
      type: 'single',
      context: `**Mill check, Monday**

- Target grist: about 20% husk, 70% grits, 10% flour
- Today's sample: 8% husk, 62% grits, 30% flour
- The mill rollers were reset over the weekend.`,
      prompt: `What problem should the mashman expect if this grist goes to the mash tun?`,
      options: [
        `A slow, stuck mash, because too little husk is left to keep the bed open`,
        `Poor conversion, because flour is the slowest part of the grist to convert`,
        `A fast, thin run-off, because finer grist lets the wort drain more freely`,
        `No problem, because grist ratios matter only in a hammer-milled mash`,
      ],
      answer: 0,
      explanation: `Flour converts fastest but clogs the bed, and husks convert nothing but keep the bed open so wort can drain. Tripling the flour and cutting the husk by more than half invites a stuck mash. The idea that finer grist drains faster is backward: fine particles pack the bed, and hammer-milled meal works in bourbon distilling only because that mash is never drained.`,
    },

    // ---------- Lesson 3: Pot Still Distillation ----------
    {
      id: 'x3-15',
      lesson: 'l3-pot-still-distillation',
      type: 'numeric',
      context: `**Spirit still 1, run plan**

- Charge: 14,000 L at 28.0% ABV
- Target: 65% of the charge's pure alcohol collected as heart
- Expected heart average: 70.0% ABV`,
      prompt: `How many litres of heart should the stillman expect to collect? Round to the nearest 10 L.`,
      answer: 3640,
      tolerance: 10,
      unit: 'L',
      explanation: `The charge holds 14,000 × 0.28 = 3,920 LPA, and 65% of that is 2,548 LPA. At 70% ABV, 2,548 LPA fills 2,548 ÷ 0.70 = 3,640 L. Stopping at 2,548 gives the litres of pure alcohol instead of the litres of spirit, and taking 65% of the 14,000 L volume ignores strength altogether.`,
    },
    {
      id: 'x3-16',
      lesson: 'l3-pot-still-distillation',
      type: 'numeric',
      prompt: `A spirit still is charged with 9,000 L of low wines at 22.0% ABV and 4,000 L from the feints receiver at 32.0% ABV. Ignoring volume contraction, what is the strength of the combined charge in % ABV? Round to one decimal place.`,
      answer: 25.1,
      tolerance: 0.1,
      unit: '% ABV',
      explanation: `Add the alcohol, then divide by the total volume: 9,000 × 0.22 = 1,980 LPA and 4,000 × 0.32 = 1,280 LPA, so 3,260 LPA in 13,000 L is 25.1% ABV. Averaging the two strengths (27.0%) is the trap, because it gives the smaller feints volume as much weight as the low wines. The result sits in the usual 25-30% range for a spirit-still charge.`,
    },
    {
      id: 'x3-17',
      lesson: 'l3-pot-still-distillation',
      type: 'order',
      prompt: `Follow the spirit through a pot still fitted with a purifier. Put these stages in order, first to last.`,
      items: [
        `The charge boils in the pot`,
        `Vapor climbs the neck, where some condenses and runs back as reflux`,
        `Vapor travels along the lyne arm`,
        `The purifier condenses the heaviest vapor and returns it to the still`,
        `The shell-and-tube condenser turns the remaining vapor to liquid`,
        `The new make flows through the spirit safe to a receiver`,
      ],
      explanation: `Vapor rises from the pot through the neck, where reflux begins, then crosses the lyne arm. The purifier sits on the lyne arm, before the condenser, which is why it can still send heavy vapor back to the still. Only after condensing does the new make reach the spirit safe, where the stillman tests it and switches it between the spirit and feints receivers.`,
    },
    {
      id: 'x3-18',
      lesson: 'l3-pot-still-distillation',
      type: 'single',
      context: `**Spirit still 2, run 731: spirit safe log**

- 0 min: 86% ABV, water test cloudy
- 10 min: 82% ABV, water test cloudy
- 20 min: 78% ABV, water test faintly cloudy
- 25 min: 76% ABV, water test clear
- 30 min: 75% ABV, water test clear`,
      prompt: `Based on this log, when should the stillman swing the spout to the spirit receiver?`,
      options: [
        `At about 25 minutes, when the water test first stays clear`,
        `At 0 minutes, because the strongest spirit is the best spirit`,
        `At about 20 minutes, as soon as the strength drops below 80% ABV`,
        `At about 30 minutes, once the strength has fallen to 75% ABV`,
      ],
      answer: 0,
      explanation: `Foreshots carry volatile compounds and oily residues that turn cloudy when a sample is mixed with water, so the heart begins when the demisting test stays clear, here at about 25 minutes. Switching at 20 minutes is tempting because the strength looks right, but the faint cloudiness shows foreshots are still running. Waiting until 30 minutes would send good heart spirit back to the feints receiver for no gain.`,
    },
    {
      id: 'x3-19',
      lesson: 'l3-pot-still-distillation',
      type: 'match',
      prompt: `A blender describes five new makes. Match each description to its most likely cause in the still house.`,
      pairs: [
        { left: 'Meaty and sulfury, like cooked cabbage', right: 'Worm tubs giving the vapor little copper contact' },
        { left: 'Clean, with almost no sulfur notes', right: 'Shell-and-tube condensers giving lots of copper contact' },
        { left: 'Sharp and solvent-like, with harsh top notes', right: 'Heart started before the foreshots had cleared' },
        { left: 'Oily and waxy, with a heavy finish', right: 'Heart run on to a low strength, around 60% ABV' },
        { left: 'A peated run with far less smoke than the malt promised', right: 'Heart stopped early, at a high strength' },
      ],
      explanation: `Copper strips sulfur compounds such as DMTS, so little copper contact (worm tubs) leaves meaty, sulfury notes and lots of contact (shell-and-tube) removes them. Foreshots carry acetaldehyde and ethyl acetate, so a heart started too soon turns sharp and solvent-like. Oils and phenols both run late: a long heart collects the oils, and a heart stopped early sends the phenols to the feints.`,
    },
    {
      id: 'x3-20',
      lesson: 'l3-pot-still-distillation',
      type: 'multi',
      prompt: `A Speyside distillery sells its spirit as Single Malt Scotch Whisky. Which of these changes would stop the spirit qualifying for that category? Select all that apply.`,
      options: [
        `Running the all-malt wash through a column still instead of pot stills`,
        `Adding 10% unmalted wheat to the mash`,
        `Switching from double to triple distillation in pot stills`,
        `Replacing its shell-and-tube condensers with worm tubs`,
        `Ending the heart later, at about 60% ABV`,
        `Extending fermentation from 50 to 100 hours`,
      ],
      answer: [0, 1],
      explanation: `Single malt Scotch must be made at one distillery from water and malted barley only, by batch distillation in pot stills (Scotch Whisky Regulations 2009). A column still or unmalted wheat breaks that definition, and the spirit would have to be sold as single grain instead. Triple distillation in pot stills is legal, as Auchentoshan shows, and condensers, cut points and fermentation time change the style while leaving the category alone.`,
    },
    {
      id: 'x3-21',
      lesson: 'l3-pot-still-distillation',
      type: 'single',
      prompt: `Why can a single pass through a pot still not turn an 8% ABV wash into new make of about 70% ABV?`,
      options: [
        `Vapor above a boiling 8% wash is only about 40-50% ABV, so one pass falls short`,
        `Ethanol and water boil at the same temperature, so a pot still cannot separate them in one pass`,
        `The Scotch Whisky Regulations 2009 require every malt spirit to be distilled exactly twice`,
        `The wash still only removes sulfur and collects no alcohol until the second pass`,
      ],
      answer: 0,
      explanation: `Ethanol boils at 78.4 °C and water at 100 °C, so the first vapor is richer in alcohol than the wash, but only about 40-50% ABV, and the whole wash-still run averages lower still, at roughly 20-25%. The spirit still repeats the separation to reach heart strength. The regulations require pot stills for single malt but set no number of distillations, which is why triple and "2.5" distillation are both legal.`,
    },

    // ---------- Lesson 4: Column, Doubler and Hybrid Stills ----------
    {
      id: 'x3-22',
      lesson: 'l3-column-hybrid-stills',
      type: 'multi',
      context: `**Thought experiment**

Distilleries in five places each collect a cereal spirit at **94.9% ABV (189.8 proof)**. Every other rule (grain, place, casks and aging) would be met.`,
      prompt: `Under which rules could that spirit still become whisky? Select all that apply.`,
      options: [
        `US federal rules (27 CFR 5.143)`,
        `The Japanese JSLMA standard`,
        `The Scotch Whisky Regulations 2009`,
        `The Irish Whiskey Technical File`,
        `EU rules (Regulation (EU) 2019/787)`,
      ],
      answer: [0, 1],
      explanation: `US whisky must be distilled below 190 proof, and 189.8 is just under the line. The JSLMA standard requires distillation below 95% ABV, so 94.9% also passes. Scotland, Ireland and the EU all require less than 94.8% ABV, and 94.9% misses by a tenth of a point, exactly the kind of near-miss to watch for.`,
    },
    {
      id: 'x3-23',
      lesson: 'l3-column-hybrid-stills',
      type: 'order',
      prompt: `Trace the wash and its vapor through a Coffey still. Put these stages in order, first to last.`,
      items: [
        `Cold wash flows through a coiled pipe inside the rectifier`,
        `The wash, now hot, enters the top of the analyser`,
        `Steam rising through the analyser strips alcohol from the descending wash`,
        `Alcohol-rich vapor passes from the analyser to the base of the rectifier`,
        `Vapor climbs the rectifier's plates, growing stronger`,
        `Spirit is collected from the rectifier at about 94% ABV`,
      ],
      explanation: `The clever part of Coffey's 1830 design is that the wash travels through the rectifier first, cooling the rising vapor while picking up heat on its way to the analyser. The analyser strips out the alcohol, and its vapor goes to the rectifier to be concentrated. Starting with the analyser is the usual slip: the wash really does pass through the rectifier first, but sealed inside a pipe, as a coolant.`,
    },
    {
      id: 'x3-24',
      lesson: 'l3-column-hybrid-stills',
      type: 'numeric',
      prompt: `A bourbon distillery needs 5,000 L of high wines at 67.5% ABV from one shift. Its beer still captures 98% of the alcohol in the beer, and the doubler loses none. How many litres of distiller's beer at 8.0% ABV must it feed? Round to the nearest 100 L.`,
      answer: 43000,
      tolerance: 100,
      unit: 'L',
      explanation: `Work backward in litres of pure alcohol. The high wines hold 5,000 × 0.675 = 3,375 LPA. Only 98% of the beer's alcohol is captured, so the beer must hold 3,375 ÷ 0.98 = 3,444 LPA, and at 8.0% ABV that is 3,444 ÷ 0.08 = 43,000 L to the nearest 100. Leaving out the capture rate (42,200 L) or multiplying by 0.98 instead of dividing (41,300 L) undercounts the beer.`,
    },
    {
      id: 'x3-25',
      lesson: 'l3-column-hybrid-stills',
      type: 'match',
      prompt: `Match each column-still term to its description.`,
      pairs: [
        { left: 'Feed point', right: 'Where beer or wash enters, partway up the column' },
        { left: 'Sieve plate', right: 'A tray whose holes let vapor bubble up through the liquid on it' },
        { left: 'Bubble-cap plate', right: 'A tray where vapor passes under caps before bubbling through the liquid' },
        { left: 'Dephlegmator', right: 'A partial condenser atop a hybrid still that returns condensed liquid as reflux' },
        { left: 'Stillage', right: 'Spent beer leaving the base of the beer still' },
      ],
      explanation: `The feed point divides a column into its stripping section below and rectifying section above. Sieve and bubble-cap plates both hold a shallow pool for vapor to bubble through; they differ in whether the vapor rises through open holes or under caps. A dephlegmator adds reflux at the top of a hybrid still, and stillage is what is left once the beer still has stripped the alcohol, the source of backset and DDGS.`,
    },
    {
      id: 'x3-26',
      lesson: 'l3-column-hybrid-stills',
      type: 'truefalse',
      prompt: `Bourbon made on a beer still and doubler cannot be labeled bottled-in-bond, because the bonded-whiskey rules require pot distillation.`,
      answer: false,
      explanation: `False. Bottled-in-bond, which you met in Level 2, requires spirit from one distiller at one distillery in one distilling season, aged at least 4 years in a bonded warehouse and bottled at exactly 100 proof. None of those conditions names a still, and the bourbon standard itself sets grain, proof and container rules with no still type. Bonded bourbons are routinely made on column stills with a doubler or thumper.`,
    },
    {
      id: 'x3-27',
      lesson: 'l3-column-hybrid-stills',
      type: 'multi',
      context: `**Five barrels of spirit from a 70% corn mash, all filled into new charred oak**

- Barrel 1: distilled at 79% ABV, entered at 62% ABV
- Barrel 2: distilled at 81% ABV, entered at 60% ABV
- Barrel 3: distilled at 75% ABV, entered at 63% ABV
- Barrel 4: distilled at 160 proof, entered at 125 proof
- Barrel 5: distilled at 70% ABV, entered at 55% ABV`,
      prompt: `Which barrels can become bourbon? Select all that apply.`,
      options: ['Barrel 1', 'Barrel 2', 'Barrel 3', 'Barrel 4', 'Barrel 5'],
      answer: [0, 3, 4],
      explanation: `US proof is twice the ABV, so convert first: barrel 1 is 158 and 124 proof, barrel 5 is 140 and 110, and barrel 4 sits exactly on both limits, which "160 proof or less" and "125 proof or less" allow. Barrel 2 was distilled at 162 proof, and adding water later cannot reopen a category closed at the still. Barrel 3 is the near-miss: its distillation proof is fine, but 63% ABV is 126 proof, one over the entry limit.`,
    },
    {
      id: 'x3-28',
      lesson: 'l3-column-hybrid-stills',
      type: 'single',
      context: `**GANNET HILL DISTILLING CO.**  \nSpec sheet for a planned release

- Mash: 100% malted barley, mashed, distilled and matured at one US distillery
- Still: hybrid pot with a six-plate column, plates engaged
- Spirit collected at 166 proof
- Matured in new charred oak casks of 200 L`,
      prompt: `The owners want to label this release "American Single Malt Whisky". What is the decisive problem?`,
      options: [
        `It was distilled above 160 proof, the American Single Malt limit`,
        `American Single Malt must come from pot stills, and a plated column was used`,
        `American Single Malt may not be matured in new charred oak`,
        `American Single Malt must be matured in casks of at least 225 L`,
      ],
      answer: 0,
      explanation: `American Single Malt (TTB standard effective 19 January 2025) must be distilled at 160 proof or less, so 166 proof closes the category however the spirit is aged. The still is the tempting answer, but the standard has no still-type rule, so a hybrid or column still is fine at the right proof. New or used, charred or uncharred oak casks of 700 L or less are all allowed, so the casks pass. At 166 proof the spirit can still be sold as whisky, because it was distilled below 190 proof.`,
    },

    // ---------- Lesson 5: Barrels, Warehouses and Bottling ----------
    {
      id: 'x3-29',
      lesson: 'l3-barrels-warehouses-bottling',
      type: 'numeric',
      context: `**Cask record, Kentucky rickhouse**

- New charred barrel filled with 200 L of new make
- Year 1 loss: 8% of the volume, as the dry new wood soaks up spirit
- Years 2-4: 4% of the remaining volume each year`,
      prompt: `How many litres remain after 4 years? Round to one decimal place.`,
      answer: 162.8,
      tolerance: 0.1,
      unit: 'L',
      explanation: `After year 1 the barrel holds 200 × 0.92 = 184.0 L, and the next three years compound on that: 184.0 × 0.96^3^ = 162.8 L. Using 4% for all four years (169.9 L) ignores the thirsty first year, and subtracting flat amounts (16 L, then 8 L a year) gives 160.0 L because it takes each later 4% from the original fill. Check years 2-4 by entering 184 L at 4% for 3 years in the Angel's share tool.`,
    },
    {
      id: 'x3-30',
      lesson: 'l3-barrels-warehouses-bottling',
      type: 'numeric',
      prompt: `A bottling run needs 1,000 L of whisky at 43.0% ABV, and the vatted whisky stands at 58.5% ABV. Using C1 × V1 = C2 × V2, how many litres of the vatted whisky are needed? Round to the nearest litre.`,
      answer: 735,
      tolerance: 1,
      unit: 'L',
      explanation: `The run needs 1,000 × 0.43 = 430 LPA, so V1 = 1,000 × 43 ÷ 58.5 = 735 L of the vatting. The remaining 265 L is the water, the number to avoid giving by mistake. Because ethanol and water contract when mixed, 735 L of whisky plus 265 L of water makes slightly less than 1,000 L, so in practice a little more water goes in to reach volume. Check it with the Adding water tool.`,
    },
    {
      id: 'x3-31',
      lesson: 'l3-barrels-warehouses-bottling',
      type: 'multi',
      context: `**AULDHAVEN**  \nSingle Malt Scotch Whisky  \nAged 12 Years · 70 cl

Bottling hall note: 40 first-fill and refill casks vatted at about 57% ABV, ready for reduction. The team has proposed five steps.`,
      prompt: `Which proposed steps do the Scotch Whisky Regulations 2009 allow? Select all that apply.`,
      options: [
        `Reducing in stages with reverse-osmosis water to 40% ABV`,
        `Adjusting the color with plain caramel (E150a)`,
        `Chill-filtering before bottling`,
        `Adding 0.5% oloroso sherry to round out the palate`,
        `Reducing to 38% ABV to lower the duty`,
      ],
      answer: [0, 1, 2],
      explanation: `Scotch may contain nothing added except water and plain caramel, so staged reduction with pure water and E150a are both allowed, and chill filtration removes compounds without adding any. Adding sherry is the trap: the casks may have held sherry, but nothing else may be added to the whisky itself. Scotch must be bottled at 40% ABV or more, so 38% fails whatever the duty saving.`,
    },
    {
      id: 'x3-32',
      lesson: 'l3-barrels-warehouses-bottling',
      type: 'single',
      prompt: `A producer wants to mature spirit in 900 L new charred oak casks. Which of these could still be sold under its category name after maturing in them?`,
      options: [
        `Straight bourbon whiskey`,
        `Scotch whisky`,
        `Irish whiskey`,
        `American Single Malt whisky`,
        `Japanese whisky under the JSLMA standard`,
      ],
      answer: 0,
      explanation: `Bourbon and straight bourbon need charred new oak containers but have no size limit under 27 CFR 5.143, so a 900 L cask is legal. Scotch, Irish, JSLMA and American Single Malt rules all cap the cask at 700 L. American Single Malt is the tempting slip, because it is American and its cask rules are relaxed in other ways (new or used, charred or not), yet it keeps the 700 L ceiling.`,
    },
    {
      id: 'x3-33',
      lesson: 'l3-barrels-warehouses-bottling',
      type: 'single',
      context: `**Blender's brief**

The distillery's new make is known for a delicate, floral, orchard-fruit character. The next 15-year-old release should let that spirit character lead, with the oak in a supporting role.`,
      prompt: `Which casks best fit the brief?`,
      options: [
        `Refill ex-bourbon hogsheads`,
        `First-fill oloroso-seasoned butts`,
        `New, heavily charred American oak barrels`,
        `First-fill ex-bourbon quarter casks`,
      ],
      answer: 0,
      explanation: `A refill cask has already given up much of its color and flavor, so over 15 years it lets the spirit's own character show. First-fill casks give the most influence of any reused cask, and new charred oak and small quarter casks extract fastest of all, so each would push oak or sherry to the front. First-fill bourbon quarter casks are the tempting choice because bourbon oak is gentler than sherry, but their small size and first-fill wood would still swamp a delicate spirit over 15 years.`,
    },
    {
      id: 'x3-34',
      lesson: 'l3-barrels-warehouses-bottling',
      type: 'single',
      context: `**Warehouse trial.** Three identical casks of the same new make, each filled with 200 L at 63.5% ABV, rest for 6 years:

- Cask A: ground tier of a stone dunnage warehouse in Speyside, cool and damp
- Cask B: top floor of a metal-clad Kentucky rickhouse, with hot summers and dry air
- Cask C: a subtropical warehouse that is hot and humid all year`,
      prompt: `Which prediction is most likely?`,
      options: [
        `A loses the least liquid and falls in strength; B loses more and may rise`,
        `A and B both rise in strength, since oak lets water out faster than ethanol`,
        `B loses the least liquid, since summer heat swells the staves and seals them`,
        `C rises in strength fastest, since heat on its own pushes the proof upward`,
      ],
      answer: 0,
      explanation: `The cool, damp dunnage cask loses about 2% a year, the least of the three, and in humid air ethanol escapes relatively faster, so its strength falls. The hot, dry top floor loses several percent a year, and water escapes faster there, so its proof can rise. Heat speeds up both losses but relative humidity sets the direction, so the hot, humid cask C loses the most liquid with no reason to gain strength fastest, and cask A shows that oak does not let water out faster in every climate.`,
    },
    {
      id: 'x3-35',
      lesson: 'l3-barrels-warehouses-bottling',
      type: 'match',
      prompt: `Match each cooperage term to its description.`,
      pairs: [
        { left: 'Seasoning', right: 'Drying staves outdoors for months to years, or quickly in a kiln' },
        { left: 'Toasting', right: 'Slow heating that breaks wood polymers into sweet, vanilla and spice compounds' },
        { left: 'Charring', right: 'Setting the inner surface alight to a numbered level' },
        { left: 'Red layer', right: 'Toasted wood beneath the char, where wood sugars have caramelized' },
        { left: 'Alligator char', right: 'The deep, cracked #4 char' },
        { left: 'Tyloses', right: 'Growths that block white oak\'s vessels so sawn staves hold liquid' },
      ],
      explanation: `Seasoning comes first and dries the wood. Toasting and charring are the two heat treatments: toasting slowly cooks the surface, while charring sets it alight, and #4, the alligator char, is the deepest grade. The red layer is the toasted band under the char that the spirit moves into and out of, and tyloses belong to American white oak itself, the reason its staves can be sawn rather than split.`,
    },
    {
      id: 'x3-36',
      lesson: 'l3-barrels-warehouses-bottling',
      type: 'truefalse',
      prompt: `A blender who adds exactly the water that C1 × V1 = C2 × V2 predicts will end up slightly below the target strength, because ethanol and water contract when mixed.`,
      answer: false,
      explanation: `False. Contraction shrinks the volume while the alcohol stays the same, so the same litres of pure alcohol end up in slightly less liquid and the strength lands a little above the target. That is why real proofing needs slightly more water than C1V1 predicts, and why professionals work by weight with density tables. The direction is easy to flip: the same alcohol in less volume means a higher strength.`,
    },
  ],
};
