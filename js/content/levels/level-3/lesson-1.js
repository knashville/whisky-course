export default {
  id: 'l3-malting-grain-chemistry',
  title: `Malting and Grain Chemistry`,
  summary: `How barley becomes malt, how its enzymes turn starch into sugar, and why grain choice, peat timing and enzyme law shape a whiskey before it ever reaches a still.`,
  minutes: 13,
  blocks: [
    {
      type: 'text',
      md: `Every whiskey begins as starch locked inside a seed. Yeast cannot eat starch, so before anything can ferment, the starch has to be cut into sugar. In malt whisky the grain does this job itself, using enzymes it makes while it sprouts. This lesson opens the barley kernel, follows its enzymes from the malting floor to the mash, and shows how three early choices (grain, peat timing and enzyme source) shape a whiskey's style and even its legal name.

### Inside a barley kernel

- **Husk.** A tough outer coat that stays attached when barley is threshed. Later, in the mash tun, the husks form the filter bed that the sugary liquid drains through.
- **Aleurone layer.** A living layer only a few cells thick, wrapped around the endosperm. When germination starts, it makes alpha-amylase, limit dextrinase and the cell-wall enzymes. Beta-amylase is already stored in the endosperm and is set free during germination.
- **Starchy endosperm.** The grain's food store: starch granules packed in a protein matrix, inside cell walls rich in gummy beta-glucans.
- **Embryo.** The germ of the new plant. Once it is wet and warm, it sends hormone signals (gibberellins) to the aleurone, which switches on enzyme production.`,
    },
    {
      type: 'text',
      md: `### Starch is two molecules

Starch is glucose, joined in chains thousands of units long, in two shapes:

- **Amylose** is a long, mostly straight chain of glucose units joined by alpha-1,4 bonds. It is roughly a quarter of barley starch.
- **Amylopectin** has the same alpha-1,4 chains, but they branch every 20-30 units or so at alpha-1,6 bonds, like a bush. It makes up most of the rest.

Distiller's yeast can ferment glucose, maltose (two glucose units) and maltotriose (three). Larger fragments, called **dextrins**, pass through fermentation untouched and are lost to the yield. The enzymes' job is to cut both kinds of bond as completely as possible.`,
    },
    {
      type: 'table',
      headers: ['Enzyme', 'What it cuts', 'Best working range', 'Heat tolerance'],
      rows: [
        ['Beta-amylase', 'Alpha-1,4 bonds at the ends of chains, clipping off maltose two glucose units at a time', 'About 55-65 °C', 'Fragile: denatures quickly above about 65 °C'],
        ['Alpha-amylase', 'Alpha-1,4 bonds anywhere inside a chain, creating many new chain ends for beta-amylase', 'About 65-72 °C', 'Tougher: keeps working at higher mash temperatures'],
        ['Limit dextrinase', 'The alpha-1,6 branch points that the amylases cannot cut', 'Around normal mash temperatures', 'Heat sensitive; whatever survives the mash keeps working in the washback'],
        ['Beta-glucanase', 'Beta-glucan gums in the endosperm cell walls', 'Low temperatures, around 40-50 °C', 'Largely destroyed at mash temperatures, so it does most of its work during germination'],
      ],
      caption: 'Typical ranges. Exact optima shift with the malt, pH, time and thickness of the mash. The three starch-cutting enzymes, led by beta-amylase, make up the malt’s diastatic power; beta-glucanase does not count toward it.',
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Aleurone layer', definition: `A thin living layer of cells around the barley endosperm that makes alpha-amylase, limit dextrinase and cell-wall enzymes once germination begins. Beta-amylase is already stored in the endosperm.` },
        { term: 'Amylopectin', definition: `The branched form of starch: glucose chains linked by alpha-1,4 bonds, with alpha-1,6 branch points every 20-30 units or so. It makes up most of barley starch.` },
        { term: 'Beta-amylase', definition: `An enzyme that snips maltose off the ends of starch chains. It works best around 55-65 °C and is destroyed quickly above about 65 °C.` },
        { term: 'Alpha-amylase', definition: `An enzyme that cuts starch chains at random points inside the chain, creating more chain ends. It works best around 65-72 °C and tolerates heat better than beta-amylase.` },
        { term: 'Limit dextrinase', definition: `The malt enzyme that cuts the alpha-1,6 branch points in amylopectin, freeing branched fragments for conversion into fermentable sugar.` },
        { term: 'Diastatic power', definition: `A malt's total capacity to convert starch into sugar, measured in degrees Lintner or Windisch-Kolbach. Distillers want it high.` },
        { term: 'Modification', definition: `The breakdown of cell walls and protein inside the kernel during germination, which frees the starch for mashing. Well-modified malt is crumbly.` },
        { term: 'Gelatinization', definition: `The swelling and bursting of starch granules in hot water, which lets enzymes reach the starch. Each grain has its own temperature range.` },
      ],
    },
    {
      type: 'steps',
      title: 'Malting, step by step',
      items: [
        { title: 'Steeping', md: `Barley arrives at about 12% moisture. It soaks in steeping vessels for about two days, with wet periods broken by **air rests**, because the embryo is alive and needs oxygen. The target is about **42-46% moisture**, wet enough to germinate.` },
        { title: 'Germination', md: `The damp grain sprouts for about **4-6 days** at cool temperatures. The aleurone makes enzymes, stored beta-amylase is set free, beta-glucanase and other enzymes dissolve the cell walls and protein around the starch, and rootlets appear. This is **modification**. Traditionally the grain was spread on a stone floor and turned by hand. The **Saladin box** (a long trough with mechanical turners) and the rotating drum replaced most floors, and most distillers now buy malt from specialist maltsters. Only a handful of Scottish distilleries still floor-malt, for example Springbank, Laphroaig, Bowmore, Highland Park, Kilchoman and Balvenie, and most of them malt only part of their barley this way.` },
        { title: 'Kilning', md: `Hot air dries the green malt and stops growth. In the first, **free-drying** phase the grain surface is still wet, and this is when peat smoke sticks best. A hotter **curing** phase follows and finishes at about **4-5% moisture**. Distilling malt is kilned gently so that its enzymes survive for the mash.` },
        { title: 'Dressing and storage', md: `The dried rootlets are knocked off and sold as animal feed, and the finished malt is stored until milling.` },
      ],
    },
    {
      type: 'steps',
      title: 'Worked example: water in, water out',
      items: [
        { title: 'Find the dry matter', md: `10 tonnes of barley at 12% moisture holds 10 × 0.88 = **8.8 t of dry matter**. In this simple model the dry matter stays constant. In reality several percent is lost to respiration and rootlets.` },
        { title: 'Steep to 44% moisture', md: `Dry matter is now 56% of the weight: 8.8 ÷ 0.56 = **15.71 t**. The grain absorbed 15.71 - 10 = **5.71 t of water**.` },
        { title: 'Kiln to 4.5% moisture', md: `Dry matter is now 95.5% of the weight: 8.8 ÷ 0.955 = **9.21 t of malt**. The kiln drove off 15.71 - 9.21 = **6.50 t of water**.` },
        { title: 'Avoid the trap', md: `Multiplying the original weight by the change in moisture (10 × 0.32 = 3.2 t) gives the wrong answer. Moisture is a percentage of the *current* weight, which changes as water goes in or out. Always work through the dry matter.` },
      ],
    },
    {
      type: 'text',
      md: `### Peat: timing beats quantity

Peat smoke carries **phenols**, the compounds behind smoky, medicinal and tarry aromas. They condense on the grain mainly in the early free-drying phase, while the surface is wet. Once the grain dries, smoke passes through with little effect. A maltster who wants heavily peated malt burns peat early and long. Peat burned late in the kiln adds heat but little flavor.

Peating level is measured as parts per million (ppm) of total phenols **in the malt**. The spirit keeps only a fraction. Some phenols are lost in mashing and fermentation, and the still's cut points decide how much of the rest is collected. Lesson 3 explains why.`,
    },
    {
      type: 'table',
      headers: ['Peating level', 'Phenols in the malt', 'Where you meet it'],
      rows: [
        ['Unpeated', 'Close to zero', 'Most malt whisky, including most Speyside malts'],
        ['Light', 'Under about 10-15 ppm', 'A gentle wisp of smoke'],
        ['Medium', 'About 15-30 ppm', 'Clear smoke balanced by fruit and cereal'],
        ['Heavy', 'About 30-50 ppm or more', 'The classic heavily peated Islay style'],
        ['Extreme', 'Over 100 ppm', 'Occasional special releases'],
      ],
      caption: 'Approximate bands. Peat ppm is measured on the malt, not the spirit, and labs measure it in different ways.',
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: the ppm on the box is the smoke in your glass',
      md: `Peat ppm figures describe the malt. Two distilleries using the same 50 ppm malt can make very different spirits, because fermentation, still shape and cut points change how much phenol reaches the new make, and years in oak soften it further. Treat a ppm figure as a clue to the producer's intent, and trust your nose for the smoke in the glass.`,
    },
    {
      type: 'text',
      md: `### Beyond barley

Enzymes can only reach starch that has **gelatinized**, meaning heated in water until the granules swell and burst. Barley and wheat starches gelatinize at roughly 52-64 °C, inside normal mash temperatures, so they convert in the mash tun. Corn starch needs more heat (roughly 62-72 °C even as pure starch) and sits in a hard, protein-rich endosperm, so distillers cook ground corn near boiling or under pressure before the malt goes in. Rye gelatinizes below boiling but brings its own problem: gummy **pentosans** that make mashes sticky, viscous and prone to foaming.

Each grain also carries flavor. Corn holds about **4% oil** and tastes sweet and round. Rye is rich in **ferulic acid**, which yeast and heat can turn into **4-vinylguaiacol**, the clove-like spice found in many ryes. Wheat is soft and bready. Malted barley tastes biscuity.

Barley variety matters for safety as well as yield. Some varieties make **epiheterodendrin**, a glycosidic nitrile (GN) that can break down during fermentation and distillation into precursors of **ethyl carbamate**, an unwanted contaminant. Scotch whisky distillers favor **non-GN** barley varieties, which limits the risk. Level 5 covers the chemistry and the limits.`,
    },
    {
      type: 'table',
      headers: ['Grain', 'Getting at the starch', 'Flavor it brings', 'Handling note'],
      rows: [
        ['Malted barley', 'Gelatinizes at mash temperatures', 'Biscuity, cereal', 'Supplies the enzymes; its husk forms the filter bed'],
        ['Wheat', 'Gelatinizes at mash temperatures', 'Soft, bready', 'Gentle; no husk to help drainage'],
        ['Corn (maize)', 'Needs cooking near boiling or under pressure', 'Sweet and round; about 4% oil adds weight', 'Hard, protein-rich endosperm'],
        ['Rye', 'Gelatinizes below boiling', 'Spicy, clove-like (4-vinylguaiacol from ferulic acid)', 'Pentosans make sticky, foamy mashes'],
      ],
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Where the enzymes may come from',
      md: `- **Scotch whisky:** the mash must be "converted to a fermentable substrate only by endogenous enzyme systems" (Scotch Whisky Regulations 2009, regulation 3). Only the grain's own enzymes count, so even grain distilleries include malted barley to supply them.
- **Irish whiskey:** "saccharified by the diastase of malt contained therein, with or without other natural enzymes" (Irish Whiskey Technical File, 2014).
- **US whiskey:** the federal standards of identity (27 CFR 5.143) set no enzyme restriction, and many American distillers add commercial enzymes alongside malt.
- **Canadian whisky:** the Food and Drug Regulations long defined whisky as a distillate obtained from a mash of cereal grain "saccharified by the diastase of malt or by other enzymes". Amendments published in December 2024 moved that whisky standard into the Canadian Food Compositional Standards; added enzymes remain standard Canadian practice.`,
    },
    {
      type: 'tasting',
      title: 'Grain sensory set',
      md: `The first three items need no alcohol. Pale malt and peated malt are sold at home-brew shops, and pearl barley at any grocer (pearling removes the husk, but the kernel shows what unmalted grain is like). Pours 4 and 5 are optional: use 15 mL each, spit if you like, or simply nose them.`,
      flight: [
        { pour: `A few grains of unmalted (pearl) barley, chewed`, lookFor: `Hard and glassy between the teeth, starchy, with little sweetness. The starch is still locked in place.` },
        { pour: `A few grains of pale distilling or brewing malt, chewed`, lookFor: `Crumbly and easy to chew, biscuity and faintly sweet. Modification has opened up the endosperm.` },
        { pour: `A pinch of peated malt, rubbed between your palms and nosed`, lookFor: `Smoke, bonfire, iodine or tar sitting on the husk. Compare its intensity with the pale malt.` },
        { pour: `Optional: 15 mL of an unpeated single malt`, lookFor: `Cereal, biscuit and fruit with no smoke. Which grain notes carried through from the malt?` },
        { pour: `Optional: 15 mL of a heavily peated single malt`, lookFor: `How much of the malt's smoke survived, and whether it reads sharper (medicinal) or softer (ashy) than the grain did.` },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Barley's aleurone layer makes alpha-amylase, limit dextrinase and the cell-wall enzymes; the endosperm stores beta-amylase ready-made, along with the starch as amylose and branched amylopectin. Beta-amylase (about 55-65 °C) clips maltose from chain ends, alpha-amylase (about 65-72 °C) cuts inside chains, and limit dextrinase cuts the branches. Malting steeps grain to about 42-46% moisture, germinates it for 4-6 days and kilns it to 4-5%, with peat phenols absorbed mainly while the grain is still wet. Corn needs cooking, rye gets sticky, and the law decides where enzymes may come from: only the malt's own for Scotch, natural extras for Irish, commercial enzymes for American and Canadian whisky.`,
    },
  ],
  quiz: [
    {
      id: 'l3-malting-grain-chemistry-q1',
      type: 'order',
      prompt: `Put these malting stages in order, first to last.`,
      items: [
        `Steep in water with air rests to about 42-46% moisture`,
        `Germinate for about 4-6 days while the grain modifies`,
        `Free-dry on the kiln while the grain is still wet`,
        `Cure on the kiln to about 4-5% moisture`,
        `Knock off the rootlets and store the malt`,
      ],
      explanation: `Steeping wakes the embryo, germination builds enzymes and modifies the kernel, and the kiln first dries the wet grain (the best moment for peat smoke) and then cures it to a stable 4-5% moisture. Rootlets can only be removed once they are dry and brittle, so dressing comes last.`,
    },
    {
      id: 'l3-malting-grain-chemistry-q2',
      type: 'match',
      prompt: `Match each enzyme to its job.`,
      pairs: [
        { left: 'Beta-amylase', right: 'Clips maltose from the ends of starch chains' },
        { left: 'Alpha-amylase', right: 'Cuts inside chains and tolerates more heat' },
        { left: 'Limit dextrinase', right: 'Cuts the alpha-1,6 branch points' },
        { left: 'Beta-glucanase', right: 'Breaks down gummy cell-wall material' },
      ],
      explanation: `The two amylases both cut alpha-1,4 bonds: beta-amylase works from the chain ends, alpha-amylase works inside the chain and survives higher temperatures. Neither can cut the alpha-1,6 branch points, which is limit dextrinase's job. Beta-glucanase opens the cell walls, mostly during germination.`,
    },
    {
      id: 'l3-malting-grain-chemistry-q3',
      type: 'single',
      context: `**Maltings log: two batches of the same barley, same weight of peat**

- Batch A: peat burned for the first 14 hours of kilning, while grain moisture fell from 45% to 22%; hot air only after that.
- Batch B: hot air only until grain moisture reached 12%; then peat burned for 14 hours.`,
      prompt: `Which result is most likely when the two malts are analyzed?`,
      options: [
        `Batch A has more phenols, because smoke sticks best to wet grain`,
        `Batch B has more phenols, because dry grain absorbs smoke more easily`,
        `Both have the same phenols, because they burned the same weight of peat`,
        `Batch B has more phenols, because peat burns hotter late in the kiln`,
      ],
      answer: 0,
      explanation: `Peat phenols condense mainly during the early free-drying phase, while the grain surface is wet. Batch A was smoked in exactly that window. Batch B was smoked after the grain had dried, so most of the smoke passed through, and the weight of peat burned matters less than the timing.`,
    },
    {
      id: 'l3-malting-grain-chemistry-q4',
      type: 'numeric',
      context: `**Steeping batch sheet**

- Barley received: 25 tonnes at 13% moisture
- Steep-out moisture target: 45%
- Ignore any loss of dry matter.`,
      prompt: `How many tonnes of water will the grain absorb in the steep? Round to one decimal place.`,
      answer: 14.5,
      tolerance: 0.1,
      unit: 'tonnes',
      explanation: `Dry matter is 25 × 0.87 = 21.75 t. At 45% moisture the dry matter is 55% of the weight, so the steeped grain weighs 21.75 ÷ 0.55 = 39.55 t, and the water absorbed is 39.55 - 25 = 14.5 t. Multiplying 25 t by the 32-point rise in moisture (8 t) is wrong, because moisture is a share of the current weight.`,
    },
    {
      id: 'l3-malting-grain-chemistry-q5',
      type: 'multi',
      prompt: `Which statements about cereal grains in whiskey are correct? Select all that apply.`,
      options: [
        `Corn starch needs cooking near boiling or under pressure before enzymes can reach it`,
        `Rye's pentosans make mashes sticky and prone to foaming`,
        `Rye's ferulic acid can become clove-like 4-vinylguaiacol`,
        `Barley starch must be pressure-cooked before mashing`,
        `Corn is about 15% oil, which gives corn whiskey its weight`,
      ],
      answer: [0, 1, 2],
      explanation: `Corn's starch sits in a hard endosperm and needs cooking, rye's pentosans cause sticky, foamy mashes, and its ferulic acid is the source of clove-like 4-vinylguaiacol. Barley starch gelatinizes at ordinary mash temperatures, so it needs no cooking. Corn holds about 4% oil, far less than 15%.`,
    },
    {
      id: 'l3-malting-grain-chemistry-q6',
      type: 'single',
      context: `**Planning meeting.** A Speyside malt distillery proposes adding a commercial amylase enzyme to its mash to raise alcohol yield by a few percent. The spirit would still be sold as Single Malt Scotch Whisky.`,
      prompt: `What does the Scotch Whisky Regulations 2009 mean for this plan?`,
      options: [
        `It would no longer be Scotch: only the grain's own enzymes may convert it`,
        `It is allowed if the enzyme is a natural preparation, as Irish rules permit`,
        `It is allowed for single grain Scotch whisky but forbidden for single malt`,
        `It is allowed if the malt still supplies most of the enzyme activity`,
      ],
      answer: 0,
      explanation: `Regulation 3 requires conversion "only by endogenous enzyme systems", the grain's own enzymes, for every category of Scotch, grain whisky included. The Irish option is the tempting one, but the allowance for other natural enzymes belongs to the Irish Whiskey Technical File, not to Scotch. "Only" also leaves no room for a small share of added enzyme, however much of the work the malt does.`,
    },
  ],
};
