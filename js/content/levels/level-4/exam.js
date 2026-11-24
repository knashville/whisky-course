export default {
  passPercent: 80,
  draw: 25,
  timeLimitMinutes: 40,
  questions: [
    // ---------- Lesson 1: US Federal Law: Inside 27 CFR Part 5 ----------
    {
      id: 'x4-1',
      lesson: 'l4-us-federal-law',
      type: 'numeric',
      context: `**Blend sheet: proposed whiskey blend**
- 30 wine gallons of straight rye whisky at 120 proof
- 40 wine gallons of rye whisky (not straight) at 110 proof
- 120 wine gallons of grain neutral spirits at 100 proof`,
      prompt: `What share of this blend is straight whisky on a proof-gallon basis? Give the percentage to one decimal place.`,
      answer: 18.0,
      tolerance: 0.1,
      unit: '%',
      explanation: `Convert each part to proof gallons (wine gallons × proof ÷ 100): straight rye 36 PG, rye whisky 44 PG and neutral spirits 120 PG, a total of 200 PG. Only the straight rye counts toward the straight share, so 36 ÷ 200 = 18.0%. Counting the non-straight rye too gives 40%, and working by volume gives 15.8%; both are traps. With at least 5% whisky and less than 20% straight, this is spirit whisky, 2 points short of blended whisky.`,
    },
    {
      id: 'x4-2',
      lesson: 'l4-us-federal-law',
      type: 'numeric',
      context: `**Blend sheet**
- 160 wine gallons of grain neutral spirits reduced to 100 proof
- A tank of straight bourbon at 125 proof`,
      prompt: `What is the smallest volume of straight bourbon that lets this blend qualify as blended whisky? Give a whole number of wine gallons.`,
      answer: 32,
      tolerance: 0,
      unit: 'wine gallons',
      explanation: `Blended whisky needs at least 20% straight whisky by proof gallons. The neutral spirits are 160 PG, so the bourbon must supply 40 PG (40 ÷ 200 = 20%), and 40 PG at 125 proof is 40 ÷ 1.25 = 32 wine gallons. Working by volume gives 40 wine gallons, and taking 20% of the neutral spirits gives 25.6; both miss because the share is of the finished blend, in proof gallons. The result is blended whisky; "blended bourbon whisky" would need at least 51% straight bourbon.`,
    },
    {
      id: 'x4-3',
      lesson: 'l4-us-federal-law',
      type: 'single',
      context: `**Spec sheet: Product C**
Mash: 60% corn, 30% rye, 10% malted barley
Distilled at 162 proof; entered new charred oak at 120 proof
Aged 4 years; bottled at 90 proof; nothing added`,
      prompt: `What is the most specific class or type Product C can carry under 27 CFR 5.143?`,
      options: [
        `Straight bourbon whisky`,
        `Light whisky`,
        `Whisky`,
        `Whisky distilled from bourbon mash`,
        `Blended whisky`,
      ],
      answer: 2,
      explanation: `At 162 proof the spirit is over the 160-proof distillation limit, which closes bourbon, straight bourbon and "distilled from bourbon mash", and later dilution cannot reopen them. Light whisky is the tempting answer because 162 is above 160, yet light whisky must be stored in used or uncharred new oak, and this went into new charred oak. What remains is the general class "whisky": grain spirit distilled below 190 proof and stored in oak.`,
    },
    {
      id: 'x4-4',
      lesson: 'l4-us-federal-law',
      type: 'multi',
      context: `**IRON TRESTLE**
Bottled-in-Bond Straight Bourbon Whiskey
Aged 4 Years · 50.5% Alc./Vol. (101 Proof) · 750 mL
Distilled in Kentucky
Bottled by Iron Trestle Spirits, Cincinnati, OH
Contains caramel color`,
      prompt: `Select every element that makes this label non-compliant with 27 CFR Part 5.`,
      options: [
        `"Bottled-in-Bond" on a 101-proof whiskey`,
        `Caramel color in a straight bourbon`,
        `No distillery name or DSP number on a bonded whiskey`,
        `"Distilled in Kentucky" beside an Ohio address`,
        `An age statement on a bonded whiskey`,
        `Bottling by a company other than the distiller`,
      ],
      answer: [0, 1, 2],
      explanation: `Bonding requires exactly 100 proof (5.88), and a bonded label must identify the distillery where the spirit was made, with its DSP number. Straight bourbon may contain nothing except water, so caramel fails 5.143. The other three are lawful: "Distilled in Kentucky" is required because the address is in Ohio (5.66(f)), an age statement is optional from 4 years, and a bonded whiskey may be bottled elsewhere if the label also names the bottler.`,
    },
    {
      id: 'x4-5',
      lesson: 'l4-us-federal-law',
      type: 'multi',
      context: `**Vatting sheet**
All straight bourbon, distilled and bottled in Kentucky by one distiller
- 70%: 6 years old
- 25%: 5 years old
- 5%: 3 years old`,
      prompt: `Which statements about this product's label are correct? Select all that apply.`,
      options: [
        `An age statement is mandatory.`,
        `"Aged 3 years" is a lawful age statement.`,
        `"Aged 6 years" is lawful because most of the vatting is 6 years old.`,
        `It may still be called straight bourbon whisky.`,
        `Reduced to exactly 100 proof, it could be labeled bottled-in-bond.`,
        `Without the 3-year-old portion, an age statement would still be mandatory.`,
      ],
      answer: [0, 1, 3],
      explanation: `The youngest component is 3 years old, so 5.74 makes an age statement mandatory and it must state 3 years; the 6-year majority does not count. Straight bourbons of one type from one state can be mixed and stay straight bourbon. Bonding fails on the 4-year minimum and on the mixed distilling seasons. Remove the 3-year-old portion and the youngest is 5 years, so the statement becomes optional.`,
    },
    {
      id: 'x4-6',
      lesson: 'l4-us-federal-law',
      type: 'truefalse',
      prompt: `A 70% corn mash distilled at exactly 160 proof and entered into new charred oak at exactly 125 proof meets both of bourbon's proof limits.`,
      answer: true,
      explanation: `The limits read "160 proof or less" off the still and "125 proof or less" into the barrel, so a value exactly on the line passes. The near misses sit one step over: 161 off the still or 126 into the barrel fails. Light whisky needs more than 160 proof, so a 160-proof spirit can never be light whisky.`,
    },
    {
      id: 'x4-7',
      lesson: 'l4-us-federal-law',
      type: 'match',
      prompt: `A label reviewer has five questions. Match each to the section of 27 CFR Part 5 that answers it.`,
      pairs: [
        { left: `Must an Ohio-bottled straight rye name the state that distilled it?`, right: `5.66(f)` },
        { left: `Must a 3-year-old corn whisky carry an age statement?`, right: `5.74` },
        { left: `May a 101-proof straight rye say "bottled-in-bond"?`, right: `5.88` },
        { left: `Is a spirit distilled at 175 proof and stored in used oak a light whisky?`, right: `5.143` },
        { left: `Is a 700 mL bottle an authorized US size?`, right: `5.203` },
      ],
      explanation: `Since the 2022 recodification, the standards of identity sit in 5.143, state of distillation in 5.66(f), age statements in 5.74, bottled-in-bond in 5.88 and standards of fill in 5.203. The answers: the rye needs a state statement, the corn whisky needs an age statement, 101 proof fails bonding, 175 proof in used oak is light whisky, and 700 mL has been authorized since the end of 2020. Books from before 2022 cite different numbers, so check the edition.`,
    },
    {
      id: 'x4-8',
      lesson: 'l4-us-federal-law',
      type: 'multi',
      context: `**Spec sheet: Cascade Stone Single Malt (invented)**
100% malted barley; mashed, distilled and matured at one distillery in Washington State
Distilled at 150 proof in a pot still
Matured 3 years in 225 L ex-sherry oak casks
Bottled at 46% ABV · Labeled "American Single Malt Whisky, Aged 3 Years"`,
      prompt: `Which changes would each stop this product from qualifying as American single malt whisky? Select all that apply.`,
      options: [
        `Blending in 10% malt whisky from a second US distillery`,
        `Maturing part of it in a 1,000 L oak vat`,
        `Distilling it to 165 proof`,
        `Distilling it in a column still`,
        `Bottling it at 40% ABV (80 proof)`,
        `Using new charred oak casks in place of ex-sherry casks`,
      ],
      answer: [0, 1, 2],
      explanation: `American single malt must come entirely from one US distillery, be distilled at 160 proof or less and mature in oak barrels of 700 L or less, so the second distillery's malt, the 1,000 L vat and the 165-proof spirit each break it. The standard sets no still type, accepts new or used, charred or uncharred oak, and needs 80 proof or more, so exactly 40% ABV passes. The type took effect on 19 January 2025.`,
    },
    {
      id: 'x4-9',
      lesson: 'l4-us-federal-law',
      type: 'single',
      prompt: `Which product may contain 2% caramel by volume without changing its class or type?`,
      options: [
        `Straight rye whisky`,
        `Bourbon whisky aged 18 months, not straight`,
        `Blended whisky`,
        `Straight corn whisky`,
      ],
      answer: 2,
      explanation: `Blended whisky may contain harmless coloring, flavoring and blending materials, and additions up to 2.5% by volume leave its class unchanged. Bourbon may contain none at any age, so the 18-month bourbon is the tempting near miss: the ban comes from the word "bourbon", whether or not the whiskey is straight. Straight rye and straight corn whisky are barred too.`,
    },

    // ---------- Lesson 2: The Scotch Whisky Regulations 2009 in Depth ----------
    {
      id: 'x4-10',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'multi',
      context: `**BEN CALDER 2013**
Highland Single Malt Scotch Whisky
Distilled 2013 · Bottled 2025
Matured in ex-bourbon barrels, finished in ex-cherry-wine casks
46% Alc./Vol. · 700 mL
*Producer file: distilled and matured at one distillery in the Highland region. The vatting includes some spirit distilled in January 2014. Shipped in bulk to Newcastle, England, for bottling.*`,
      prompt: `Select every breach of SWR 2009 or the Scotch Whisky Technical File.`,
      options: [
        `"Distilled 2013" on a vatting that includes 2014 spirit`,
        `Finishing in casks that held cherry wine`,
        `Bottling a single malt in England`,
        `Using "Highland" on this whisky`,
        `Showing a bottling year beside the vintage`,
        `Finishing a Scotch in a wine cask of any kind`,
      ],
      answer: [0, 1, 2],
      explanation: `A year of distillation may appear only if all the whisky was distilled that year, so the January 2014 spirit breaks "Distilled 2013". Cherries are stone fruit, and the 2019 Technical File excludes casks that held stone-fruit products even though wine casks in general are allowed. Since 23 November 2012 single malt must be bottled in Scotland. "Highland" is correct for whisky wholly distilled there, and a bottling year beside a vintage is required.`,
    },
    {
      id: 'x4-11',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'single',
      context: `**GLEN MORVANE**
Speyside Blended Malt Scotch Whisky
12 Years Old · 43% Alc./Vol.
*Producer file: 50% single malt from the Glen Morvane distillery and 50% from two other Speyside distilleries; every component is at least 12 years old.*`,
      prompt: `Which assessment of this label is correct?`,
      options: [
        `The distillery name is a breach, because not all of the whisky was distilled at Glen Morvane.`,
        `The label is lawful, because half the whisky came from Glen Morvane and the category is shown.`,
        `"Speyside" is the breach, because region names are reserved for single malts.`,
        `"12 Years Old" is the breach, because blended malts may not carry age statements.`,
      ],
      answer: 0,
      explanation: `A distillery's name may appear only on whisky wholly distilled at that distillery, so a blended malt that is half Glen Morvane cannot use the name as its brand. A majority share does not help, because the test is "wholly". "Speyside" is lawful because every component was distilled in Speyside, and any category may carry an age statement for its youngest whisky.`,
    },
    {
      id: 'x4-12',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'match',
      prompt: `Match each cask to its verdict for maturing Scotch under the 2019 Technical File amendment.`,
      pairs: [
        { left: `Oak cask that held apricot brandy`, right: `Excluded: made from stone fruit` },
        { left: `Oak cask that held spiced rum`, right: `Excluded: flavouring added after distillation` },
        { left: `Oak cask that held stout with raspberry purée added after fermentation`, right: `Excluded: fruit added to beer after fermentation` },
        { left: `Chestnut cask that held oloroso sherry`, right: `Excluded: the cask is not oak` },
        { left: `Oak pipe that held tawny port`, right: `Allowed: fortified wine with a traditional oak stage` },
        { left: `Oak barrel that held unflavoured Caribbean rum`, right: `Allowed: a spirit with no additions, traditionally oak-aged` },
      ],
      explanation: `The amendment allows oak casks that held wine, beer or spirits, then excludes stone-fruit products, beer with fruit, flavouring or sweetening added after fermentation, and spirits with fruit, flavouring or sweetening added after distillation. Raspberries are not stone fruit, so the stout fails on the post-fermentation addition. The chestnut cask fails before the amendment applies, because the regulations demand oak casks.`,
    },
    {
      id: 'x4-13',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'truefalse',
      context: `**Warehouse plan**
A distillery on Islay sends all of its new make by tanker to a bonded warehouse in Fife, where it matures for 10 years. Nothing from any other distillery goes into the bottle, which is filled in Scotland.`,
      prompt: `This whisky may be labelled "Islay Single Malt Scotch Whisky".`,
      answer: true,
      explanation: `The locality rule turns on where the whisky was wholly distilled, and maturation may take place anywhere in Scotland. A blend with one component distilled in Fife would fail; here every drop was distilled on Islay and only the warehouse is in Fife. Bottling in Scotland also satisfies the single-malt bottling rule.`,
    },
    {
      id: 'x4-14',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'truefalse',
      prompt: `A Blended Scotch Whisky may lawfully leave Scotland in bulk and be bottled in England.`,
      answer: true,
      explanation: `The rule in force since 23 November 2012 applies to Single Malt Scotch Whisky, which may leave Scotland only in a bottle labelled for retail sale. Blended Scotch carries no such restriction and is widely shipped in bulk for bottling elsewhere. Extending the single-malt rule to every category is the tempting mistake.`,
    },
    {
      id: 'x4-15',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'multi',
      context: `**Production log: six Scotch whiskies**
- A: 100% malted barley, column still, one distillery
- B: 85% wheat, 15% malted barley, column still, one distillery
- C: malted barley with 30% whole-grain rye, pot stills, one distillery
- D: 100% malted barley, pot stills, one distillery
- E: single malts from two distilleries, vatted together
- F: single grains from two distilleries, vatted together`,
      prompt: `Which of these must carry the sales description "Single Grain Scotch Whisky"? Select all that apply.`,
      options: [`Whisky A`, `Whisky B`, `Whisky C`, `Whisky D`, `Whisky E`, `Whisky F`],
      answer: [0, 1, 2],
      explanation: `Single grain covers whisky from one distillery that does not qualify as single malt. A fails single malt on its column still, C on its rye, and B on both, so all three are single grain. D meets every single-malt condition: malted barley only, pot stills, one distillery. E is Blended Malt and F is Blended Grain, because each comes from more than one distillery.`,
    },
    {
      id: 'x4-16',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'match',
      prompt: `Match each label term to its status under SWR 2009.`,
      pairs: [
        { left: `Pure Malt`, right: `A banned description` },
        { left: `Single Grain Scotch Whisky`, right: `A category: one distillery, not qualifying as single malt` },
        { left: `Islands`, right: `An informal grouping inside the Highland region, with no protection` },
        { left: `Campbeltown`, right: `A protected locality` },
        { left: `Speyside`, right: `A protected region` },
        { left: `Blended Grain Scotch Whisky`, right: `A category: single grains from more than one distillery` },
      ],
      explanation: `"Pure malt" is banned outright (reg. 11), and the older term "vatted malt" is not one of the five category names, so "Blended Malt Scotch Whisky" replaces both. Islay and Campbeltown are the protected localities; Highland, Lowland and Speyside are the protected regions. "Islands" is the classic trap: it describes island distilleries inside the Highland region and has no legal status. Single Grain and Blended Grain are both categories, told apart by the number of distilleries.`,
    },
    {
      id: 'x4-17',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'single',
      context: `**TIDEWRACK**
Islay Blended Malt Scotch Whisky · 10 Years Old · 46% Alc./Vol.
*Producer file: malts from two Islay distilleries (aged 10 and 14 years) and one Speyside distillery (aged 12 years).*`,
      prompt: `Which rewrite of the label line is compliant?`,
      options: [
        `Blended Malt Scotch Whisky · 10 Years Old`,
        `Islay Blended Malt Scotch Whisky · 12 Years Old`,
        `Blended Malt Scotch Whisky · 12 Years Old`,
        `Islay Vatted Malt Scotch Whisky · 10 Years Old`,
      ],
      answer: 0,
      explanation: `"Islay" may appear only on whisky wholly distilled on Islay, and the Speyside malt breaks that, so the place name must go. The age must be that of the youngest whisky, 10 years, which rules out 12. "Vatted Malt" is not one of the five category names; the correct category is Blended Malt Scotch Whisky.`,
    },
    {
      id: 'x4-18',
      lesson: 'l4-scotch-whisky-regulations',
      type: 'order',
      prompt: `Put these milestones in Scotch whisky law in order, earliest first.`,
      items: [
        `Scotch Whisky Act`,
        `Scotch Whisky Order`,
        `The Scotch Whisky Regulations 2009 come into force`,
        `Single malt must be bottled in Scotland`,
        `The Technical File is amended to spell out permitted casks`,
        `Scotch is protected under the UK GI scheme after the Brexit transition`,
      ],
      explanation: `The Act dates from 1988 and the Order from 1990; both were replaced by SWR 2009, in force on 23 November 2009. The single-malt bottling rule took effect on 23 November 2012, the cask amendment came in June 2019, and the UK GI scheme for spirit drinks took over on 1 January 2021, when the Brexit transition ended. Knowing the dates tells you which rules an older source could have known.`,
    },

    // ---------- Lesson 3: Irish, Canadian, Japanese, EU and Australian Rules Compared ----------
    {
      id: 'x4-19',
      lesson: 'l4-world-whisky-rules',
      type: 'match',
      prompt: `Match each product to its rule on distillation strength.`,
      pairs: [
        { left: `US bourbon`, right: `160 proof (80% ABV) or less` },
        { left: `US light whisky`, right: `Above 160 and below 190 proof` },
        { left: `Irish whiskey`, right: `Below 94.8% ABV` },
        { left: `JSLMA Japanese whisky`, right: `Below 95% ABV` },
        { left: `Canadian whisky`, right: `No maximum set in the standard` },
      ],
      explanation: `Bourbon's 160-proof ceiling is the lowest, and light whisky occupies the band above it. Irish whiskey shares the 94.8% line with Scotch and EU whisky, while the JSLMA standard uses 95%, the near miss that sets Japan apart. Canada's standard sets no distillation ceiling, which lets base whiskies be distilled to high strength.`,
    },
    {
      id: 'x4-20',
      lesson: 'l4-world-whisky-rules',
      type: 'match',
      prompt: `Match each product to the additions its rules permit, apart from water.`,
      pairs: [
        { left: `Scotch whisky`, right: `Plain caramel colouring only` },
        { left: `Canadian whisky`, right: `Caramel and flavouring` },
        { left: `US straight bourbon`, right: `Nothing at all` },
        { left: `US blended whisky`, right: `Coloring, flavoring and blending materials up to 2.5%` },
        { left: `Whisky under Japan's Liquor Tax Act`, right: `Neutral spirit or shochu blended in` },
      ],
      explanation: `Scotch allows only water and plain caramel. Canada goes further and permits flavouring. US straight bourbon takes nothing but water, while blended whisky may take up to 2.5% of harmless coloring, flavoring and blending materials. Japan's tax law is the loosest, accepting blends with neutral spirit or shochu, and the voluntary JSLMA standard sets a higher bar for the words "Japanese whisky".`,
    },
    {
      id: 'x4-21',
      lesson: 'l4-world-whisky-rules',
      type: 'multi',
      context: `**Export desk: six more proposals**
- A: Grain whiskey distilled and matured 3 years in ex-bourbon oak barrels in County Antrim, Northern Ireland, labeled "Irish Whiskey"
- B: Pot still whiskey, 3 years in oak, then 4 months in a 650 L acacia-wood cask, all in County Cork, labeled "Irish Whiskey"
- C: Australian single malt, 4 years in 100 L ex-port oak casks, 46% ABV, nothing added, labeled "Whisky" for France
- D: Japanese blend of 40% malt whisky and 60% neutral spirit, labeled "Whisky" for Germany
- E: Malt distilled in Japan, 2 years in Japan then 1 year in Scotland, bottled in Japan by a JSLMA member, labeled "Japanese Whisky"
- F: Irish pot still spirit matured 3 years in a bonded warehouse in Scotland, bottled in Dublin, labeled "Irish Whiskey"`,
      prompt: `Which products meet the definition or standard that governs the name shown? Select all that apply.`,
      options: [`Product A`, `Product B`, `Product C`, `Product D`, `Product E`, `Product F`],
      answer: [0, 1, 2],
      explanation: `The Irish GI covers the whole island and accepts any wooden cask of 700 L or less, so A and B qualify. The EU definition sets no place of origin, so a 4-year-old Australian malt that meets its cask, strength and no-additive rules is whisky in France. D fails because EU whisky may not contain added alcohol, E because the voluntary JSLMA standard, which governs "Japanese Whisky" for its members, requires at least 3 years of maturation in Japan, and F because Irish whiskey must mature on the island of Ireland.`,
    },
    {
      id: 'x4-22',
      lesson: 'l4-world-whisky-rules',
      type: 'multi',
      context: `**Spec sheet: proposed Canadian whisky**
Mash: 90% corn, 10% rye; mashed and distilled in Ontario
Aged 3 years in used 200 L oak barrels in Ontario
Caramel added · 40% ABV · Labeled "Canadian Whisky"`,
      prompt: `Which changes would each stop this product from qualifying as Canadian whisky? Select all that apply.`,
      options: [
        `Releasing it after 30 months`,
        `Aging it in 900 L wooden vats`,
        `Shipping the new make to Michigan to age`,
        `Fermenting with yeast plus lactic acid bacteria`,
        `Switching to a 100% corn mash`,
        `Adding flavouring as well as caramel`,
      ],
      answer: [0, 1, 2],
      explanation: `Canadian whisky must age at least 3 years in small wood of 700 L or less and be mashed, distilled and aged in Canada, so 30 months, 900 L vats and a Michigan warehouse each fail. The standard accepts any cereal grain, caramel and flavouring, and fermentation by yeast with other micro-organisms. That last point is the close distractor, because Scotch allows yeast only.`,
    },
    {
      id: 'x4-23',
      lesson: 'l4-world-whisky-rules',
      type: 'multi',
      context: `**Distillery file: County Down, Northern Ireland**
- Spirit X: 100% malted barley, pot stills
- Spirit Y: 25% malted barley, 75% maize, column still
- Spirit Z: 40% malted barley, 55% unmalted barley, 5% oats, pot stills
- All three mature at least 3 years in oak casks on site`,
      prompt: `Which statements are correct under the 2014 Irish Technical File? Select all that apply.`,
      options: [
        `Spirit Z meets the Pot Still grain rule.`,
        `Spirit Y can be sold as Grain Irish whiskey.`,
        `A blend of X and Z is Pot Still Irish whiskey.`,
        `The distillery cannot use the Irish whiskey GI because it is in Northern Ireland.`,
        `Spirit X may be labeled single malt only if it is triple distilled.`,
        `Spirit Y would become Pot Still whiskey if it were run through pot stills.`,
      ],
      answer: [0, 1],
      explanation: `Z clears both 30% barley minimums and sits exactly at the 5% cap for other cereals, so it qualifies. Y has no more than 30% malted barley and comes off a column, which makes it Grain, and a blend of malt (X) and pot still (Z) is Blended Irish whiskey, because it mixes two categories. The GI covers the whole island, the Technical File sets no number of distillations, and Y could never be Pot Still because it contains no unmalted barley.`,
    },
    {
      id: 'x4-24',
      lesson: 'l4-world-whisky-rules',
      type: 'truefalse',
      prompt: `The JSLMA standard requires Japanese whisky to be distilled in pot stills.`,
      answer: false,
      explanation: `The standard requires distillation at a distillery in Japan to less than 95% ABV and sets no still type, so column-distilled grain whisky can qualify. Pot-still rules belong to Single Malt Scotch Whisky and Irish Pot Still whiskey, which is why the idea is a tempting carry-over.`,
    },
    {
      id: 'x4-25',
      lesson: 'l4-world-whisky-rules',
      type: 'single',
      prompt: `Five JSLMA members submit specs. Which product may be called "Japanese whisky" under the JSLMA standard?`,
      options: [
        `Malt spirit distilled in Japan to 70% ABV, 3 years in Japan in 480 L oak puncheons, bottled in Japan at 43% ABV`,
        `Malt spirit distilled in Japan to 70% ABV, 3 years in Japan in 1,000 L oak vats, bottled in Japan at 43% ABV`,
        `Malt spirit distilled in Japan to 70% ABV, 3 years in Japan in 480 L puncheons, shipped in bulk and bottled in Singapore`,
        `Corn spirit with no malted grain, distilled in Japan, 3 years in Japan in 480 L puncheons, bottled in Japan`,
        `Malt-and-corn spirit distilled in Japan to 95% ABV, 3 years in Japan in 480 L puncheons, bottled in Japan`,
      ],
      answer: 0,
      explanation: `The standard needs malted grain in the mash, distillation in Japan below 95% ABV, at least 3 years in Japan in wooden casks of 700 L or less, and bottling in Japan at 40% ABV or more. Only the first spec meets every condition. The others fail on the 1,000 L vats, on bottling in Singapore, on the missing malt, and on a strength of exactly 95%, which is not below 95%.`,
    },
    {
      id: 'x4-26',
      lesson: 'l4-world-whisky-rules',
      type: 'multi',
      prompt: `Under the rules compared in this level, which products must be bottled in their country of production? Select all that apply.`,
      options: [
        `Single Malt Scotch Whisky`,
        `JSLMA Japanese whisky`,
        `American single malt whisky`,
        `Canadian whisky`,
        `Irish whiskey`,
      ],
      answer: [0, 1],
      explanation: `Single malt Scotch may leave Scotland only in a retail bottle, and the JSLMA standard requires bottling in Japan. Canada and the American single malt standard both require mashing, distilling and aging at home, lists that leave out bottling, and Irish whiskey has no bottling-location rule.`,
    },

    // ---------- Lesson 4: America in Depth ----------
    {
      id: 'x4-27',
      lesson: 'l4-america-in-depth',
      type: 'numeric',
      context: `**Barrel report: top floor, hot and dry summers**
Filled: 53 wine gallons at 115 proof
Emptied 8 years later: 40 wine gallons at 125 proof`,
      prompt: `What percentage of the barrel's original proof gallons (its alcohol) was lost? Give the percentage to one decimal place.`,
      answer: 18.0,
      tolerance: 0.1,
      unit: '%',
      explanation: `In: 53 × 115 ÷ 100 = 60.95 PG. Out: 40 × 125 ÷ 100 = 50.00 PG. Loss: 10.95 ÷ 60.95 = 18.0%. The volume fell further, 13 ÷ 53 = 24.5%, because in hot, dry air water leaves the barrel faster than alcohol, which is also why the proof rose. You can check the conversions with the Cask yield tool.`,
    },
    {
      id: 'x4-28',
      lesson: 'l4-america-in-depth',
      type: 'single',
      context: `**HOLLOWAY & FINCH**
Straight Bourbon Whiskey
Aged 5 Years · Distilled in Tennessee
45% Alc./Vol. · 750 mL
Bottled by Holloway & Finch Spirits Co., Louisville, KY`,
      prompt: `What can you conclude from this label?`,
      options: [
        `A Tennessee distillery made it, and the Louisville bottler is very likely a non-distiller producer.`,
        `It must be labeled Tennessee whiskey, because Tennessee law covers whiskey distilled in the state.`,
        `It may be labeled Kentucky straight bourbon, because a Kentucky company bottled it in Louisville.`,
        `The "Distilled in Tennessee" line is optional, because the label already carries an age statement.`,
      ],
      answer: 0,
      explanation: `"Bottled by" with an out-of-state "Distilled in" line is the classic sign of sourced whiskey, and the label never names the distillery. The state-of-distillation line is required because the address is in another state, and a state name in front of the class needs the whiskey to have been distilled in that state, so "Kentucky" is out. Tennessee law sets the conditions for "Tennessee whiskey", but nothing forces a Tennessee-distilled bourbon to use that name.`,
    },
    {
      id: 'x4-29',
      lesson: 'l4-america-in-depth',
      type: 'single',
      context: `**Warehouse memo, northern US distillery**
"From November to March we heat our brick warehouses for several days at a time, then let them cool again."`,
      prompt: `What is the main purpose of this practice?`,
      options: [
        `To keep spirit moving in and out of the wood through the cold months`,
        `To raise the proof before bottling by driving water out of the barrels`,
        `To cut the angel's share by keeping the barrels warm`,
        `To meet a federal rule that straight whiskey must age above a minimum temperature`,
      ],
      answer: 0,
      explanation: `Spirit is pushed into the wood as a barrel warms and drawn back out as it cools. In a cold winter warehouse that movement stalls, so heat cycling adds maturation cycles the building would otherwise lack. Warming increases evaporation, so it cannot cut the angel's share, and no federal rule sets a warehouse temperature.`,
    },
    {
      id: 'x4-30',
      lesson: 'l4-america-in-depth',
      type: 'truefalse',
      prompt: `Empire Rye is a New York State legal standard, so a New York whiskey made from a 60% rye mash that meets every federal rye rule may not be sold as rye whiskey.`,
      answer: false,
      explanation: `Empire Rye is a voluntary standard created by New York distillers, and missing its 75% New York-grown rye threshold only keeps the Empire Rye name off the bottle. Whether a product is rye whiskey depends on the federal standard: at least 51% rye, distilled at 160 proof or less and stored in new charred oak at 125 proof or less. The voluntary standard adds conditions on top of federal law; it takes nothing away.`,
    },
    {
      id: 'x4-31',
      lesson: 'l4-america-in-depth',
      type: 'match',
      prompt: `Match each warehouse setting to the maturation pattern it typically produces.`,
      pairs: [
        { left: `Pacific Northwest`, right: `Cool, damp air: slow, gentle maturation` },
        { left: `Texas`, right: `Heat and big daily swings: fast extraction, heavy losses` },
        { left: `Colorado`, right: `Altitude and dry air: high evaporation, proof can climb` },
        { left: `Rickhouse ground floor, center`, right: `Steady and cool: small losses, proof holds or falls` },
        { left: `Rickhouse top floor, by a window`, right: `Hottest and most exposed: the boldest, fastest-maturing barrels` },
      ],
      explanation: `Warm, dry and variable settings speed extraction, raise losses and can push proof up, because water escapes faster than alcohol in dry air. Cool, humid settings slow everything and keep proof steady or let it fall. These are tendencies that vary by building and season.`,
    },
    {
      id: 'x4-32',
      lesson: 'l4-america-in-depth',
      type: 'multi',
      prompt: `Which statements about the US sourcing economy are accurate? Select all that apply.`,
      options: [
        `Only the company that distilled the spirit may say "Distilled by" on the label.`,
        `Federal law requires a non-distiller producer to name the distillery that made its whiskey.`,
        `A bottled-in-bond label always reveals the distillery, because it must name it and give its DSP number.`,
        `Many craft distillers sell sourced whiskey while their own stock matures.`,
        `The 95% rye, 5% malted barley recipe is a legal requirement for rye distilled in Indiana.`,
        `A contract distiller owns the brands it makes whiskey for.`,
      ],
      answer: [0, 2, 3],
      explanation: `"Distilled by" is reserved for the distiller, and a bonded label must identify the distillery and its DSP number, so both reveal who made the spirit. Many craft brands bridge the years of aging with sourced whiskey. No federal rule makes an NDP name its source, the 95/5 recipe is a house recipe with no legal status, and a contract distiller makes whiskey to other companies' orders.`,
    },
    {
      id: 'x4-33',
      lesson: 'l4-america-in-depth',
      type: 'match',
      prompt: `Each mash below is distilled to 160 proof or less and entered into new charred oak at 125 proof or less. Match each mashbill to the style it makes.`,
      pairs: [
        { left: `70% corn, 25% rye, 5% malted barley`, right: `High-rye bourbon` },
        { left: `70% corn, 20% wheat, 10% malted barley`, right: `Wheated bourbon` },
        { left: `60% corn, 15% rye, 15% wheat, 10% malted barley`, right: `Four-grain bourbon` },
        { left: `95% rye, 5% malted barley`, right: `Indiana-style rye` },
        { left: `51% rye, 39% corn, 10% malted barley`, right: `Kentucky-style rye, just over the legal minimum` },
      ],
      explanation: `Wheat in place of rye marks a wheated bourbon, a large rye share (roughly 20-35%) a high-rye bourbon, and all four grains together a four-grain bourbon. Among ryes, 95% rye with 5% malt is the Lawrenceburg signature, while 51% rye sits just over the legal minimum and drinks closer to a high-rye bourbon.`,
    },
    {
      id: 'x4-34',
      lesson: 'l4-america-in-depth',
      type: 'multi',
      context: `**QUILLBACK RIDGE**
Small Batch Bourbon Whiskey
Aged 9 Months in 5-Gallon New Charred Oak Barrels
45% Alc./Vol. (90 Proof) · 750 mL
Distilled and bottled by Quillback Ridge Distilling Co., Asheville, NC`,
      prompt: `Which statements about this craft bottling are correct? Select all that apply.`,
      options: [
        `It may be called bourbon even though it is under a year old.`,
        `Its age statement is mandatory.`,
        `It needs a separate "Distilled in North Carolina" line.`,
        `"Small Batch" means it came from no more than a legally set number of barrels.`,
        `If it tastes as oaky as an older bourbon, it may be labeled "straight".`,
        `The small barrels speed up extraction of color and oak more than they speed up oxidation and ester formation.`,
      ],
      answer: [0, 1, 5],
      explanation: `Bourbon has no minimum age, and any whisky under 4 years must state its age (5.74). The address is in the state of distillation, so no extra line is needed. "Small batch" has no legal definition, and "straight" requires at least 2 years, however the whiskey tastes. Small barrels pull color and oak flavor fast, but oxidation and ester formation still need time, so the result often tastes woody and young at once.`,
    },

    // ---------- Lesson 5: Producing Nations in Depth ----------
    {
      id: 'x4-35',
      lesson: 'l4-producing-nations',
      type: 'numeric',
      context: `**Warehouse comparison: two 250 L casks**
- Cask A, in a hot warehouse, loses 12% of its remaining volume each year and is emptied after 4 years.
- Cask B, in a cool Scottish warehouse, loses 2% of its remaining volume each year.`,
      prompt: `After how many whole years has Cask B lost at least as large a share of its volume as Cask A lost in 4 years? You can test year by year with the Angel's share tool.`,
      answer: 26,
      tolerance: 0,
      unit: 'years',
      explanation: `Cask A keeps 0.88^4^ = 0.600 of its volume, so it loses 40.0%. Cask B keeps 0.98^25^ = 0.603 after 25 years (39.7% lost, just short) and 0.98^26^ = 0.591 after 26 years (40.9% lost), so 26 is the first whole year that matches. Scaling the rates in a straight line (12 ÷ 2 × 4 = 24 years) is the trap, because each year's loss comes off a smaller volume. The gap is why an age statement tells you less across climates.`,
    },
    {
      id: 'x4-36',
      lesson: 'l4-producing-nations',
      type: 'order',
      prompt: `Put these distillery milestones in order, earliest first.`,
      items: [
        `Yamazaki distillery founded`,
        `Yoichi distillery founded`,
        `The new Midleton distillery opens`,
        `Cooley distillery founded`,
        `Penderyn first distills`,
        `Kavalan produces its first spirit`,
        `Chichibu begins distilling`,
        `Brora resumes distilling`,
      ],
      explanation: `Yamazaki dates from 1923 and Yoichi from 1934. Irish Distillers opened the new Midleton in 1975, and Cooley challenged it from 1987. The new-world wave followed: Penderyn in 2000, Kavalan in 2006 and Chichibu in 2008. Brora, a ghost distillery of the whisky loch years, came back in 2021.`,
    },
    {
      id: 'x4-37',
      lesson: 'l4-producing-nations',
      type: 'single',
      context: `**Blind flight, glass D**
Iodine, tar and wood smoke over brine and lemon; sweet malt underneath; no dried fruit; light vanilla.`,
      prompt: `Which call is best, with the right justification?`,
      options: [
        `Peated Islay-style single malt: peat-smoke phenols stuck to the malt during kilning.`,
        `Peated Islay-style single malt: smoke and brine soak into the casks from sea air in the warehouse.`,
        `Irish single pot still: unmalted barley in the mash gives smoky, medicinal notes.`,
        `Japanese single malt: mizunara oak gives tarry, iodine notes.`,
      ],
      answer: 0,
      explanation: `Iodine, tar and smoke point to heavily peated malt, and the phenols behind them settle on the grain during the early, wet phase of kilning, which is why peat ppm is measured on the malt. The sea-air story is the tempting wrong reason: the smoke is already in the new make, and some Islay whisky matures on the mainland. Unmalted barley gives creaminess and spice, and mizunara gives sandalwood and incense.`,
    },
    {
      id: 'x4-38',
      lesson: 'l4-producing-nations',
      type: 'multi',
      context: `**Shelf comparison: two invented blended Scotches**
- HARBOUR GATE: Blended Scotch Whisky, no age statement, about £20
- HARBOUR GATE 18: Blended Scotch Whisky, 18 Years Old, about £80`,
      prompt: `Which statements are most likely true? Select all that apply.`,
      options: [
        `The standard bottling contains more grain whisky than malt whisky.`,
        `Its grain whisky came from a large column-still grain distillery.`,
        `Every drop in the 18-year-old has matured for at least 18 years.`,
        `To be called Blended Scotch Whisky, a blend must be at least half malt.`,
        `The no-age-statement bottling may contain whisky under 3 years old.`,
        `The price gap mainly reflects a higher share of grain whisky in the older blend.`,
      ],
      answer: [0, 1, 2],
      explanation: `Grain whisky from big column-still distilleries such as Cameronbridge or Girvan is cheaper to make and usually forms the majority of a standard blend. Any age statement gives the youngest whisky, so the 18 covers every drop. The regulations set no minimum malt share, every Scotch is at least 3 years old, and more malt, and older malt, is what drives the higher price.`,
    },
    {
      id: 'x4-39',
      lesson: 'l4-producing-nations',
      type: 'match',
      prompt: `Match each producing nation to the feature that shapes its whisky.`,
      pairs: [
        { left: `Scotland`, right: `A few huge column-still grain distilleries supply most blends` },
        { left: `Ireland`, right: `One distillery made nearly every brand for decades` },
        { left: `Japan`, right: `Large producers rarely trade stock, so each makes many styles in-house` },
        { left: `Canada`, right: `Base and flavouring whiskies are made separately and blended after aging` },
        { left: `India`, right: `Much domestic "whisky" is molasses-based and fails UK, EU and US rules` },
        { left: `Mexico`, right: `Heritage maize is nixtamalized before mashing` },
      ],
      explanation: `Industry structure explains most of these: Scotland's grain giants feed its blends, Midleton dominated Ireland, and Japan's big two build blends from their own stocks. Canada's separate base and flavouring whiskies are a production method. India's molasses spirit and Mexico's nixtamalized corn show how raw materials define a style, and in India's case keep much of it from counting as whisky abroad.`,
    },
    {
      id: 'x4-40',
      lesson: 'l4-producing-nations',
      type: 'truefalse',
      prompt: `Canadian distillers mature most of their whisky in new charred oak barrels, as bourbon makers must.`,
      answer: false,
      explanation: `Canadian whisky matures mostly in used barrels, many of them ex-bourbon, which give a lighter oak influence. The new-charred-oak rule belongs to bourbon and the other US types that require it. Canada's own rule is about time and size: at least 3 years in small wood of 700 L or less.`,
    },
    {
      id: 'x4-41',
      lesson: 'l4-producing-nations',
      type: 'single',
      context: `**Cask review at a hot-climate distillery**
Five-year-old malt from new, heavily charred 200 L casks: dark, tannic and drying, with the spirit's fruit buried under wood.`,
      prompt: `Which change best addresses the problem?`,
      options: [
        `Move more spirit into refill casks and bottle the most active casks earlier.`,
        `Leave the casks longer so oxidation can balance the tannin.`,
        `Switch to smaller, more heavily charred casks to speed integration.`,
        `Raise the warehouse temperature so the spirit cycles through the wood faster.`,
      ],
      answer: 0,
      explanation: `This is over-oaking, the main risk of hot-climate maturation, and refill casks, rotation and earlier bottling are the standard remedies. Leaving the casks longer adds more wood every year, so time will not rescue the balance. Smaller casks and more heat both increase wood extraction, which makes the problem worse.`,
    },
    {
      id: 'x4-42',
      lesson: 'l4-producing-nations',
      type: 'multi',
      prompt: `Which statements about the Japanese whisky industry are correct? Select all that apply.`,
      options: [
        `Japanese producers rarely trade casks with each other, so each makes many spirit styles in-house.`,
        `Demand in the 2010s outran mature stock, and some age-stated bottlings were withdrawn.`,
        `Chita is Suntory's grain distillery.`,
        `Yoichi makes its whisky in Coffey stills heated directly by coal.`,
        `Nikka's Coffey stills now operate at Miyagikyo.`,
        `Japan's Liquor Tax Act requires whisky sold in Japan to be distilled in Japan.`,
      ],
      answer: [0, 1, 2, 4],
      explanation: `Without a stock-trading culture, Suntory and Nikka each build blends from their own distilleries, which made the 2010s shortage hard to fix and cost several age statements; Chita is Suntory's grain distillery. Yoichi's coal fires its pot stills, and Nikka's Coffey stills work at Miyagikyo, where they moved in 1999. The tax law requires no Japanese origin at all.`,
    },
  ],
};
