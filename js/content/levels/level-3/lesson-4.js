export default {
  id: 'l3-column-hybrid-stills',
  title: `Column, Doubler and Hybrid Stills`,
  summary: `How continuous columns separate alcohol plate by plate, how the American beer still and doubler differ from the Coffey still, and how distillation proof decides which whiskey categories a spirit can still become.`,
  minutes: 12,
  blocks: [
    {
      type: 'text',
      md: `A pot still runs in batches and gives one or two rounds of separation per pass. A column still runs continuously and stacks many rounds of separation on top of one another. Columns make most American whiskey, Canadian base whisky and the grain whisky behind blended Scotch and Irish. This lesson takes a column apart plate by plate, compares the American beer still and doubler with the Coffey still, and then uses proof limits to work out which categories a still's output can still enter.`,
    },
    { type: 'diagram', name: 'column-still' },
    {
      type: 'text',
      md: `### Inside a column

A column is a tall cylinder divided by horizontal **plates**. Wash or beer enters at the **feed point**, partway up, and steam enters at the base.

- **Below the feed** is the **stripping section**. Liquid flows down from plate to plate while rising steam boils the alcohol out of it. By the bottom almost no alcohol is left, and the spent liquid leaves at the base.
- **Above the feed** is the **rectifying section**. Vapor rises through more plates and grows stronger at each one.

Each plate holds a shallow pool of liquid. Vapor from below bubbles up through it, through holes in a **sieve plate** or under the caps of a **bubble-cap plate**. Some vapor condenses and some liquid boils off again, so each plate acts roughly like one small distillation, though a real plate usually achieves less than one ideal stage. More plates above the feed give a stronger spirit. Higher distillation strength leaves fewer congeners, so a column run near its top strength makes a lighter spirit.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Stripping section', definition: `The part of a column below the feed point, where descending liquid gives up its alcohol to rising steam.` },
        { term: 'Rectifying section', definition: `The part of a column above the feed point, where rising vapor passes through more plates and grows stronger.` },
        { term: 'Theoretical plate', definition: `An ideal stage at which liquid and vapor reach equilibrium, also called an equilibrium stage. A real plate usually achieves less than one, so a column needs more real plates than theoretical stages.` },
        { term: 'Beer still', definition: `The column used in American whiskey distilling: distiller's beer enters near the top, low wines leave as vapor at the top, and stillage leaves at the base.` },
        { term: 'Doubler', definition: `A heated pot-type vessel that redistills liquid low wines from a beer still into high wines.` },
        { term: 'Thumper', definition: `A vessel holding liquid (water, low wines or tails) through which hot vapor from the beer still is bubbled, giving a second distillation in one pass.` },
        { term: 'High wines', definition: `The finished distillate of an American beer still and doubler or thumper, typically about 65-70% ABV (130-140 proof), ready to be reduced and filled.` },
        { term: 'Hybrid still', definition: `A pot still topped by a column of plates that can be engaged or bypassed, so one still can make anything from heavy whiskey to near-neutral spirit.` },
      ],
    },
    {
      type: 'steps',
      title: 'The American beer still and doubler',
      items: [
        { title: 'Beer in', md: `Distiller's beer at about **8-10% ABV**, grain solids included, is pumped in near the top of the beer still. Most of the column below the feed is stripping section, with only a few plates above it.` },
        { title: 'Low wines out', md: `Steam strips the alcohol. Vapor leaves the top at about **55-65% ABV (110-130 proof)** and is condensed into low wines, or sent straight into a thumper. Exact strengths vary by distillery.` },
        { title: 'Stillage out', md: `The spent beer, called stillage, leaves the base. Its thin liquid becomes backset for the next fermentation, and its solids become DDGS.` },
        { title: 'Second distillation', md: `The doubler or thumper raises the spirit to **high wines** of typically about **65-70% ABV (130-140 proof)**. Bourbon and rye may not be distilled above **160 proof (80% ABV)**.` },
        { title: 'Into the barrel', md: `High wines are reduced with water to the chosen entry proof (125 proof or less for bourbon) and filled. Reducing the strength now does not change the distillation proof, which was fixed when the spirit left the still.` },
      ],
    },
    {
      type: 'compare',
      title: 'Doubler or thumper?',
      columns: [
        { heading: 'Doubler', points: ['A heated pot-type vessel', 'Receives low wines as a condensed liquid', 'Redistills them like a small pot still', 'Gives high wines of about 65-70% ABV'] },
        { heading: 'Thumper', points: ['A vessel partly filled with liquid (water, low wines or tails)', 'Hot vapor from the beer still bubbles straight through the liquid', 'The vapor heats the liquid and is enriched in one pass', 'Named for the knocking sound the vapor makes'] },
      ],
    },
    {
      type: 'text',
      md: `### The Coffey still

Aeneas Coffey patented his two-column still in **1830**, and its descendants still make Scotch and Irish grain whisky. The **analyser** strips the wash: hot wash enters at the top and steam at the base. Its vapor passes to the **rectifier**, where it climbs more plates and grows stronger. (This rectifier is a column. It is unrelated to the 19th-century American "rectifiers" of Level 2, firms that blended or redistilled spirit they bought in.) The clever part is the plumbing. Cold wash travels through a coiled pipe inside the rectifier on its way to the analyser, so the wash cools the rising vapor, helping it condense on the plates, and the vapor preheats the wash, saving fuel.

Scotch grain whisky is typically collected at about **94% ABV**, just under the legal ceiling of 94.8%. The mash is mainly wheat or maize plus about **10-15% malted barley**. Scotch rules allow only the grain's own enzymes, so that malt is there to convert the starch as much as for flavor.`,
    },
    {
      type: 'table',
      headers: ['Category', 'Distillation strength', 'Container rule'],
      rows: [
        ['Neutral spirits, including US vodka', '190 proof (95% ABV) or more', 'No aging required'],
        ['US whisky (general)', 'Below 190 proof (95% ABV)', 'Stored in oak (corn whisky excepted)'],
        ['Light whisky (US)', 'Above 160 and below 190 proof', 'Used or uncharred new oak'],
        ['Bourbon, rye, wheat, malt and rye malt whisky', '160 proof (80% ABV) or less', 'Charred new oak, entered at 125 proof or less'],
        ['Corn whisky', '160 proof or less', 'If stored: used or uncharred new oak, entered at 125 proof or less, never treated with charred wood'],
        ['American Single Malt', '160 proof or less', 'Oak casks of 700 L or less'],
        ['Scotch, Irish and EU whisky', 'Below 94.8% ABV (189.6 proof)', 'Wooden casks of 700 L or less (oak for Scotch)'],
        ['Japanese whisky (JSLMA standard)', 'Below 95% ABV', 'Wooden casks of 700 L or less'],
      ],
      caption: 'Proof ladder. US categories: 27 CFR 5.142-5.143 (straight whiskies keep the 160-proof limit of their type). Scotch: Scotch Whisky Regulations 2009. Irish: Irish Whiskey Technical File. EU: Regulation (EU) 2019/787. Japan: voluntary JSLMA standard (2021).',
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'The law can choose the still',
      md: `- **Scotch Whisky Regulations 2009:** Single Malt Scotch Whisky must be distilled at one distillery from water and malted barley only, by batch distillation in **pot stills**. Loch Lomond makes all-malt spirit in a column still, so it sells that spirit as **single grain** Scotch whisky.
- **27 CFR 5.143:** bourbon, rye and the other US types set grain, proof and container rules but no still type. Pot, column and hybrid stills are all allowed.
- **American Single Malt** (TTB standard effective 19 January 2025): 100% malted barley, distilled at one US distillery to 160 proof or less, with no still-type requirement.`,
    },
    {
      type: 'table',
      headers: ['Still output', 'Still open', 'Already ruled out'],
      rows: [
        ['US corn, rye and malt mash; high wines at 164 proof', 'Whisky; light whisky if stored in used or uncharred new oak', 'Bourbon, rye and every straight whiskey (over 160 proof)'],
        ['US mash of 70% corn; high wines at 140 proof', 'Bourbon if entered at 125 proof or less into charred new oak; straight bourbon after 2 years', 'Light whisky (needs above 160 proof); neutral spirits'],
        ['US corn mash; column output at 190 proof', 'Neutral spirits, for example vodka', 'Every whisky category (whisky must be below 190 proof)'],
        ['Scottish grain distillery, wheat and malt, collected at 94.5% ABV', 'Scotch grain whisky after 3 years in oak', 'Single malt (wrong grain and still type)'],
        ['Scottish grain distillery collecting at 95.0% ABV', 'Spirit for other uses', 'Every category of Scotch whisky (94.8% or more)'],
        ['US all-malt spirit from a column at 150 proof', 'American Single Malt, if made at one distillery and stored in oak casks of 700 L or less', 'Light whisky (needs above 160 proof)'],
        ['Japanese distillery, malt spirit at 95.2% ABV', 'Spirit for other products', 'Japanese whisky under the JSLMA standard (needs below 95%)'],
        ['US rye mash (55% rye) on a hybrid still, plates bypassed, 130 proof', 'Rye whisky if entered at 125 proof or less into charred new oak; straight rye after 2 years', 'Light whisky; neutral spirits'],
      ],
      caption: 'Proof-limit drill. Distillation proof is fixed when the spirit leaves the still; adding water later lowers entry or bottling proof but never reopens a category closed at the still. Test your own US scenarios with the Is it bourbon? tool, which applies US federal rules only.',
    },
    {
      type: 'text',
      md: `### Hybrid stills

Many craft distilleries run a **hybrid still**: a pot with a short column of plates mounted above it, often topped by a partial condenser (a dephlegmator) that condenses some of the vapor and returns it down the column as liquid reflux. With the plates engaged, the still behaves like a column and can make vodka- or gin-strength spirit. With the plates bypassed, it behaves like a pot still and makes a heavier whiskey. A small distillery making several products can do it all on one still.`,
    },
    {
      type: 'steps',
      title: 'Worked example: alcohol through a beer still',
      items: [
        { title: 'Alcohol in the beer', md: `30,000 L of beer at 8.5% ABV holds 30,000 × 0.085 = **2,550 LPA**.` },
        { title: 'Alcohol captured', md: `A well-run beer still strips almost all of it. At 98% capture: 2,550 × 0.98 = **2,499 LPA** in the low wines.` },
        { title: 'Volume of low wines', md: `At 62% ABV: 2,499 ÷ 0.62 = **4,031 L** of low wines.` },
        { title: 'Volume of high wines', md: `If the doubler brings the same alcohol to 68% ABV (ignoring small losses): 2,499 ÷ 0.68 = **3,675 L** of high wines at 136 proof.` },
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: column stills make neutral, flavorless spirit',
      md: `A column makes neutral spirit only when it is built and run for that purpose, with many plates and a take-off strength of 190 proof or more. Bourbon comes off American column stills at 160 proof or less, full of grain and fermentation character. Even Scotch grain whisky at about 94% ABV must keep an aroma and taste derived from its raw materials under the Scotch Whisky Regulations 2009. How high the column is run matters more than the fact that it is a column.`,
    },
    {
      type: 'text',
      md: `### Recap

A column has a stripping section below the feed and a rectifying section above it, and each sieve or bubble-cap plate acts as a small distillation, usually achieving less than one ideal equilibrium stage. In American practice a beer still takes 8-10% beer, gives low wines at about 55-65% ABV and stillage that becomes backset, and a doubler (liquid feed) or thumper (vapor bubbled through liquid) gives high wines of about 65-70%. Coffey's 1830 still pairs an analyser with a rectifier that preheats the wash, and Scotch grain is collected at about 94% ABV. The proof ladder runs: bourbon and its relatives 160 proof or less, light whisky above 160 and below 190, US whisky below 190, Scotch, Irish and EU whisky below 94.8% ABV, JSLMA below 95%, neutral spirits 190 or more. Scotch single malt must come from pot stills, while bourbon and American Single Malt have no still-type rule.`,
    },
  ],
  quiz: [
    {
      id: 'l3-column-hybrid-stills-q1',
      type: 'single',
      context: `**Still output report**

- Mash: 75% corn, 20% rye, 5% malted barley
- High wines off the doubler: 164 proof (82% ABV)`,
      prompt: `Which US designation is still open for this spirit?`,
      options: [
        `Light whisky, if stored in used or uncharred new oak`,
        `Straight bourbon, if aged at least 2 years in charred new oak`,
        `Bourbon, if reduced to 125 proof before entering the barrel`,
        `Neutral spirits, after charcoal filtering`,
      ],
      answer: 0,
      explanation: `At 164 proof the spirit is above bourbon's 160-proof distillation limit, so bourbon and straight bourbon are closed, and reducing it later does not change the distillation proof. Light whisky requires above 160 and below 190 proof and storage in used or uncharred new oak, so it fits. Neutral spirits must be distilled at 190 proof or more.`,
    },
    {
      id: 'l3-column-hybrid-stills-q2',
      type: 'multi',
      context: `**Column run, US distillery**

- Mash: 100% corn
- Spirit collected at 186 proof (93% ABV)`,
      prompt: `Which categories remain open for this spirit? Select all that apply.`,
      options: [
        `Whisky, stored in oak`,
        `Light whisky, if stored in used or uncharred new oak`,
        `Corn whisky`,
        `Bourbon`,
        `Neutral spirits`,
      ],
      answer: [0, 1],
      explanation: `At 186 proof the spirit is below 190, so it can be whisky, and because it is above 160 it can be light whisky if stored in used or uncharred new oak. Corn whisky and bourbon both need 160 proof or less. Neutral spirits need 190 proof or more.`,
    },
    {
      id: 'l3-column-hybrid-stills-q3',
      type: 'order',
      prompt: `Put the path of a bourbon spirit through a beer still and doubler in order, first to last.`,
      items: [
        `Distiller's beer, grain and all, is pumped in near the top of the beer still`,
        `Steam rising from the base strips alcohol from the descending beer`,
        `Low wines leave the top of the column at about 55-65% ABV`,
        `The doubler redistills the low wines into high wines of about 65-70% ABV`,
        `High wines are reduced to entry proof and filled into charred new oak`,
      ],
      explanation: `Beer enters near the top and flows down against rising steam, which strips out the alcohol. The vapor leaving the top becomes low wines, the doubler gives a second distillation to high wines, and only then is the spirit reduced and barreled.`,
    },
    {
      id: 'l3-column-hybrid-stills-q4',
      type: 'match',
      prompt: `Match each part to its function.`,
      pairs: [
        { left: 'Stripping section', right: 'Below the feed: removes alcohol from descending liquid' },
        { left: 'Rectifying section', right: 'Above the feed: strengthens the rising vapor' },
        { left: 'Analyser', right: 'Coffey column that strips the wash with steam' },
        { left: 'Rectifier', right: 'Coffey column that concentrates vapor and preheats the wash' },
        { left: 'Thumper', right: 'Vessel where hot vapor bubbles through liquid' },
      ],
      explanation: `Every column has a stripping job below the feed and a rectifying job above it. Coffey split those jobs into two columns: the analyser strips, and the rectifier concentrates while its coiled wash pipe preheats the incoming wash. A thumper takes vapor directly, where a doubler takes condensed liquid.`,
    },
    {
      id: 'l3-column-hybrid-stills-q5',
      type: 'numeric',
      context: `**Beer still shift log**

- Beer fed: 40,000 L at 9.0% ABV
- Alcohol captured as low wines: 99% of the beer's alcohol
- Low wines strength: 60% ABV`,
      prompt: `How many litres of low wines did the shift produce? Round to the nearest 10 L.`,
      answer: 5940,
      tolerance: 10,
      unit: 'L',
      explanation: `The beer holds 40,000 × 0.09 = 3,600 LPA. At 99% capture that is 3,564 LPA, and at 60% ABV it fills 3,564 ÷ 0.60 = 5,940 L. Dividing the full 3,600 LPA by 0.60 gives 6,000 L, which wrongly assumes no alcohol stays in the stillage.`,
    },
    {
      id: 'l3-column-hybrid-stills-q6',
      type: 'truefalse',
      prompt: `All-malt spirit made in a column still at a Scottish distillery can be sold as Single Malt Scotch Whisky.`,
      answer: false,
      explanation: `The Scotch Whisky Regulations 2009 require single malt to be made by batch distillation in pot stills. All-malt spirit from a column, such as Loch Lomond's, is sold as single grain Scotch whisky instead. American Single Malt, by contrast, has no still-type rule.`,
    },
  ],
};
