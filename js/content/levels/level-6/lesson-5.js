export default {
  id: 'l6-hospitality-capstone',
  title: 'Hospitality, Cocktail Engineering and Responsible Leadership (Capstone)',
  summary:
    'The capstone: engineer cocktails with alcohol and dilution math, batch them safely, build lists and flights that tell the truth, train staff, lead responsible service with accurate health and legal facts, and design a ticketed tasting that stays under two US standard drinks a guest.',
  minutes: 15,
  blocks: [
    {
      type: 'text',
      md: `Everything in this course meets at the bar and the tasting table. A head bartender or beverage director has to make a drink taste right, cost right and comply with the law, and has to look after the people drinking it. This capstone puts the math, the sensory skills, the label law and the duty of care into one plan.

### Cocktail engineering starts with alcohol math

Every cocktail is a blend, so you can calculate it like one. Add up the millilitres of ethanol from each ingredient, then divide by the total volume. Dilution from ice adds water and no alcohol, so the ethanol stays the same while the volume grows.`,
    },
    {
      type: 'steps',
      title: 'Worked example: the strength of a Manhattan',
      items: [
        { title: 'Ethanol from the whiskey', md: '60 mL of rye at 50% ABV: 60 × 0.50 = **30.0 mL** of ethanol.' },
        { title: 'Ethanol from the vermouth', md: '30 mL of sweet vermouth at 16.5% ABV: 30 × 0.165 = **4.95 mL**. Two dashes of bitters add a negligible amount, so leave them out.' },
        { title: 'Strength before dilution', md: '34.95 mL of ethanol in 90 mL = **38.8% ABV**.' },
        { title: 'Add dilution', md: 'Stirring on ice adds about 25% of the starting volume as water: 90 × 1.25 = **112.5 mL**.' },
        { title: 'Strength in the glass', md: '34.95 / 112.5 = **31.1% ABV**. In US standard drinks: 34.95 mL × 0.789 = 27.6 g of ethanol, or 27.6 / 14 = **about 2 standard drinks in one cocktail**. Check it with the Standard drinks tool.' },
      ],
    },
    {
      type: 'text',
      md: `### Method physics

**Shaking** throws ice and liquid together hard. It chills and dilutes faster than stirring and whips in air, giving texture and a cloudy, frothy look; use it for drinks with citrus, egg or cream. **Stirring** chills and dilutes more gently and keeps an all-spirit drink clear and silky. Dilution typically lands at **about 20-30% of the starting volume**, with shaken drinks usually at the higher end, but it varies with ice size, temperature and time. There is no single "correct" figure, so measure your own drinks once and write the volumes into your specs.

**Choosing the whiskey.** A **bonded (100 proof) or high-rye** whiskey stands up to vermouth and bitter liqueurs; a soft 80-proof whiskey can disappear in a Manhattan. **Peated whisky** is powerful enough to work in small doses: as a **float** on top of a drink (as on the Penicillin) or a **rinse** of the glass.`,
    },
    {
      type: 'table',
      caption: 'Whiskey cocktail families. Learn the template and every family member becomes a variation.',
      headers: ['Family', 'Template', 'Whiskey examples'],
      rows: [
        ['Old Fashioned', 'Spirit, a little sugar, bitters, citrus peel; stirred or built', 'Old Fashioned; Sazerac (rye, absinthe rinse, lemon peel)'],
        ['Manhattan family', 'Whiskey plus vermouth, with optional modifiers; stirred, served up', 'Manhattan (rye); Rob Roy (Scotch); Brooklyn (rye, dry vermouth, maraschino, a bitter orange aperitif); Vieux Carré (rye, cognac, sweet vermouth, Bénédictine); Boulevardier (bourbon, a red bitter aperitivo, sweet vermouth)'],
        ['Sours', 'Spirit, citrus, sweetener; shaken', 'Whiskey Sour; Ward 8 (adds orange and grenadine); Gold Rush (lemon and honey); Penicillin (blended Scotch, lemon, honey-ginger, peated float)'],
        ['Highballs', 'Spirit lengthened with a carbonated mixer over plenty of ice, about 1:3-1:4', 'Whisky and soda; whiskey and ginger ale'],
        ['Juleps and smashes', 'Spirit, sugar and mint over crushed ice; a smash adds citrus', 'Mint Julep; Whiskey Smash'],
        ['Hot drinks', 'Spirit with hot water or coffee and a sweetener', 'Hot Toddy; Irish Coffee'],
      ],
    },
    {
      type: 'text',
      md: `### Batching

A batched cocktail is mixed ahead so service is fast and every drink matches. Four rules:

1. **Add the dilution water** to the batch (pre-dilution), because a batch poured straight from the fridge never meets ice the way a stirred drink does. Then chill it hard and do not stir it on ice again, or it will be diluted twice.
2. **Citrus does not keep.** Fresh juice loses its brightness within hours, so batch the spirit, sugar and bitters and add juice at service.
3. **Refrigerate vermouth** and any batch containing it. Vermouth is wine and oxidizes once opened.
4. **Check the rules.** US federal law bars anyone selling spirits from refilling a liquor bottle or adding anything to it (26 U.S.C. 5301(c); 27 CFR 31.201), so batches go in clean, labeled, dated containers. State and local rules on pre-batching and infusions vary, so confirm them before you build a program.`,
    },
    {
      type: 'steps',
      title: 'Worked example: batching 40 Manhattans',
      items: [
        { title: 'Scale the spec', md: 'Rye: 40 × 60 mL = **2,400 mL**. Sweet vermouth: 40 × 30 mL = **1,200 mL**. Bitters: 80 dashes; measure your dasher\'s volume once so you can jigger the total.' },
        { title: 'Add the dilution', md: '25% of 90 mL is 22.5 mL per drink: 40 × 22.5 = **900 mL** of filtered water.' },
        { title: 'Check the batch', md: 'Total about **4,500 mL**. Ethanol = 40 × 34.95 = 1,398 mL, so the batch is 1,398 / 4,500 = **31.1% ABV**, matching a stirred drink.' },
        { title: 'Store and serve', md: 'Funnel into clean, labeled, dated containers (never into a liquor bottle) and refrigerate. Pour **112.5 mL** into a chilled glass and garnish. Use it within days, because of the vermouth.' },
      ],
    },
    {
      type: 'text',
      md: `### Lists, flights and stories that are true

A good whiskey list moves guests along a **progression**: by style, then intensity, with clear **price tiers** so a guest can trade up knowingly. Tasting flights use **15-25 mL pours**, or smaller when the drinks budget demands it (see the capstone below). For order, use one rule set: **lighter before heavier, lower ABV before higher, and unpeated before peated.** Peated whisky goes last even when its ABV is lower than the dram before it, because smoke lingers and flattens whatever follows.

**Storytelling** sells whiskey, but every claim on a menu or in a staff script must be one you can verify. "Oldest", "hand-crafted", "small batch" or "family recipe" claims either have no legal meaning or need evidence. Tell the story the label and the producer can prove.

### Training the team

Staff should be able to correct common myths kindly (darker is not automatically older; age is not automatically better), translate tasting language into guest-friendly words, and answer two frequent questions accurately:

- **Gluten.** Distillation leaves gluten proteins behind in the still, so distilled spirits contain no gluten protein. Guests with celiac disease should still follow their own medical guidance, and flavored products or cocktail ingredients can add gluten.
- **Health.** Staff never make health-benefit claims (see the warning below). A guest's medical question belongs with their doctor.`,
    },
    {
      type: 'text',
      md: `### Responsible service

Responsible service is a legal duty and a leadership skill.

- **Check ID.** The legal drinking age is 21 in the US and 18 in the UK. Use a clear policy, such as the UK's "Challenge 25", so staff never have to guess.
- **Count standard drinks.** Grams of ethanol = mL × ABV × 0.789. A US standard drink is 14 g; a UK unit is 8 g (10 mL). Tasting pours add up faster than guests think.
- **Know the signs of intoxication:** slurred speech, loss of coordination, loud or aggressive behavior, glassy eyes, spilling drinks, drinking faster.
- **Use a refusal script.** Speak privately and calmly, refer to house policy and the law ("I can't serve you more tonight"), never argue or shame, offer water, food and an alcohol-free drink, involve a manager, and record the incident.
- **Liability.** Many US states have **dram-shop** laws that make a licensed seller liable for harm caused by a customer served while visibly intoxicated or underage, and some impose **social host liability** on private hosts; the rules vary by state. In England and Wales it is an offence knowingly to sell alcohol to a person who is drunk (Licensing Act 2003, section 141).
- **Transport and alternatives.** Promote taxis, rideshare and public transport, never driving after drinking, and offer genuine alcohol-free drinks at fair prices.

The body eliminates alcohol at roughly **one standard drink an hour**. Coffee, cold showers, food after the fact and exercise do not speed it up.`,
    },
    {
      type: 'table',
      caption: 'Driving limits and elimination. Limits change; check current law before you brief staff.',
      headers: ['Item', 'Figure', 'Note'],
      rows: [
        ['Most US states', '0.08% BAC', 'Lower limits apply to commercial drivers and to drivers under 21'],
        ['Utah', '0.05% BAC', 'In force since the end of 2018'],
        ['Scotland', '0.05% BAC (50 mg per 100 mL of blood)', 'In force since December 2014'],
        ['England and Wales', '0.08% BAC (80 mg per 100 mL of blood)', 'The government consulted in 2026 on lowering it to match Scotland'],
        ['Elimination rate', 'About 1 standard drink an hour', 'Nothing speeds it up'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Health facts a professional must get right',
      md: `- **Alcohol is an IARC Group 1 carcinogen**: it causes cancer in humans, and risk rises with the amount drunk, starting at low levels.
- The **US Surgeon General's advisory of January 2025** named alcohol the third leading preventable cause of cancer in the US, after tobacco and obesity, and called for a cancer warning on alcohol labels.
- The **UK Chief Medical Officers** advise drinking **no more than 14 units a week**, spread over three or more days. The **Dietary Guidelines for Americans 2025-2030** (January 2026) dropped the earlier numeric daily limits and advise people to consume less alcohol for better overall health.
- **No alcohol in pregnancy**, and none with medicines or conditions that interact with it.
- **Never make health-benefit claims** ("good for the heart", "aids digestion"). They are misleading, and labeling and advertising rules restrict health-related statements.`,
    },
    {
      type: 'steps',
      title: 'Capstone: design a ticketed six-whiskey tasting for 30 guests',
      items: [
        { title: 'Set the brief', md: 'Six whiskeys, 30 guests, a cap of **2 US standard drinks** per guest, and a **22% pour cost** on the liquor.' },
        { title: 'Order by intensity', md: 'Light blended whiskey 40% → wheated bourbon 45% → sherry-cask single malt 46% → bottled-in-bond rye 50% → cask-strength bourbon 57% → peated Islay-style malt 46% last.' },
        { title: 'Test 15 mL pours', md: 'The ABVs sum to 284 percentage points, so 15 mL of each gives 15 × 2.84 = 42.6 mL of ethanol × 0.789 = 33.6 g = **2.40 US drinks**. That breaks the cap. (Even six 15 mL pours all at 45% give 32.0 g, about 2.3 drinks.)' },
        { title: 'Fix the pour size', md: 'At **12 mL**: 12 × 2.84 = 34.1 mL × 0.789 = 26.9 g = **1.92 US drinks**. Under the cap. Encourage spitting and leave the last pour optional.' },
        { title: 'Count bottles', md: '30 × 12 mL = 360 mL of each whiskey, plus about 10% for calibration and spills, so about 400 mL: **one bottle of each**, with the remainder going back to the bar.' },
        { title: 'Price the liquor', md: 'Six 750 mL bottles costing $300 in total. Each guest is poured 12 mL of each, so liquor cost per head = 300 × 12 / 750 = **$4.80**. At a 22% pour cost: 4.80 / 0.22 = **$21.82** per head for the liquor, before food, water, glassware and staff. Check it in the Pour cost tool.' },
        { title: 'Check every claim on the menu', md: 'Allowed: "bottled-in-bond rye, 100 proof, 5 years" (bonded means exactly 100 proof and at least 4 years). Fix: "straight bourbon, 18 months" (straight needs at least 2 years); "single malt from three distilleries" (single means one distillery; that is a blended malt). Drop or explain: "small batch" (no legal definition in the US) and "the oldest distillery in the world" (unverifiable). Delete: "a dram aids digestion" (a health claim).' },
        { title: 'Write the responsible-service brief', md: 'ID checks at the door; measured pours with no top-ups; water and food at every place; spittoons and dump buckets, with spitting presented as normal; alcohol-free options; staff empowered to stop service; a transport plan of taxis, rideshare and public transport, with no driving.' },
      ],
    },
    {
      type: 'tasting',
      title: 'Optional: taste or nose the capstone flight',
      md: 'Tasting is optional. If you taste, use 10-12 mL pours, spit, drink water between pours and stop whenever you choose; six 12 mL pours at these strengths come to just under 2 US standard drinks. For a nose-only version, pour the same styles (or borrow them at a bar) and nose each at the rim, then a few seconds later with a drop of water. The aim is to feel how the order changes perception.',
      flight: [
        { pour: 'A light blended whiskey around 40% ABV (Irish-style or blended Scotch)', lookFor: 'Cereal, light orchard fruit and a short finish: the baseline for the evening.' },
        { pour: 'A wheated bourbon around 45% ABV', lookFor: 'Soft caramel, vanilla and bread from new charred oak and wheat; a gentle step up in body.' },
        { pour: 'A sherry-cask single malt around 46% ABV', lookFor: 'Dried fruit, nuts and spice from the cask; notice how much of the change comes from the cask while the strength barely moves.' },
        { pour: 'A bottled-in-bond rye at 50% ABV (100 proof)', lookFor: 'Pepper, mint and rye bread; imagine it against sweet vermouth and see why bonded rye suits a Manhattan.' },
        { pour: 'A cask-strength bourbon around 57% ABV', lookFor: 'Intensity and heat; add a few drops of water and note what opens up.' },
        { pour: 'A heavily peated Islay-style single malt around 46% ABV', lookFor: 'Smoke, iodine and brine; notice how long it lingers, which is why it goes last.' },
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Dram-shop liability', definition: 'A US state-law rule that can make a licensed seller liable for harm caused by a customer it served while visibly intoxicated or underage.' },
        { term: 'Social host liability', definition: 'Liability that some US states impose on private hosts for harm caused by guests they served; rules vary widely by state.' },
        { term: 'Pre-dilution', definition: 'Adding the expected meltwater to a batched cocktail in advance, so a chilled pour matches the strength of a freshly stirred or shaken drink.' },
        { term: 'Float', definition: 'A small amount of a strongly flavored spirit, such as peated whisky, poured gently on top of a finished drink so it hits the nose first.' },
        { term: 'Challenge 25', definition: 'A UK age-verification policy under which staff ask anyone who looks under 25 for photo ID before selling alcohol, so no one has to judge by eye whether a guest is over 18.' },
        { term: 'Refusal script', definition: 'A prepared, calm form of words staff use to stop serving a guest, citing policy and the law and offering alternatives and safe transport.' },
      ],
    },
    {
      type: 'text',
      md: `**Recap.** Calculate any cocktail as a blend: ethanol from each ingredient over the total volume, then add 20-30% dilution water. Shake drinks with citrus, egg or cream; stir all-spirit drinks; use bonded or high-rye whiskey against vermouth and peat as a float or rinse. Batch with the dilution built in, citrus added at service, vermouth chilled and no liquor bottles refilled. Order flights lighter to heavier, lower to higher ABV and unpeated before peated, and keep every story verifiable. Lead responsible service with ID checks, drink counting, refusal scripts and transport plans; know the BAC limits and that elimination runs at about one drink an hour. State health facts accurately and never claim benefits. A six-whiskey tasting at 12 mL pours stays under 2 US drinks; at 15 mL it breaks the cap.`,
    },
  ],
  quiz: [
    {
      id: 'l6-hospitality-capstone-q1',
      type: 'numeric',
      context: `**Spec card: Boulevardier**
- 45 mL bourbon at 45% ABV
- 30 mL red bitter aperitivo at 25% ABV
- 30 mL sweet vermouth at 16% ABV
- Stirred on ice; measured dilution 22% of the starting volume`,
      prompt: 'What is the ABV of the finished drink? Round to one decimal place.',
      answer: 25.4,
      tolerance: 0.2,
      unit: '% ABV',
      explanation: 'Ethanol = 45 × 0.45 + 30 × 0.25 + 30 × 0.16 = 20.25 + 7.5 + 4.8 = 32.55 mL in 105 mL (31.0% before dilution). Dilution takes the volume to 105 × 1.22 = 128.1 mL, so the drink is 32.55 / 128.1 = 25.4% ABV. Forgetting dilution gives 31.0%, which overstates the strength in the glass.',
    },
    {
      id: 'l6-hospitality-capstone-q2',
      type: 'numeric',
      context: `**Event plan: six-whiskey flight**
- Strengths: 40%, 43%, 46%, 50%, 55% and 54% ABV
- Same pour size for every whiskey
- Policy: no more than 2.0 US standard drinks (28 g of ethanol) per guest
- Use 0.789 g/mL for ethanol`,
      prompt: 'What is the largest whole-millilitre pour size that keeps each guest within the policy? Round down to a whole mL.',
      answer: 12,
      tolerance: 0,
      unit: 'mL',
      explanation: 'The cap is 28 g, or 28 / 0.789 = 35.5 mL of ethanol. The strengths add to 288 percentage points, so each mL of pour across the flight carries 2.88 mL of ethanol: 35.5 / 2.88 = 12.3 mL, rounded down to 12 mL. A 15 mL pour would deliver about 2.4 US drinks.',
    },
    {
      id: 'l6-hospitality-capstone-q3',
      type: 'single',
      context: `Hour three of a ticketed tasting. A guest who drove to the venue is slurring, has knocked over a glass and asks for "a proper pour" of the cask-strength bourbon.`,
      prompt: 'What should the host do?',
      options: [
        'Stop alcohol service privately and calmly, offer water, food and a soft drink, and arrange a taxi',
        'Serve a half pour to spare embarrassment, then offer strong coffee before they drive home',
        `Ask the guest's friend to keep watch and carry on serving the standard 12 mL tasting pours`,
        'Serve the pour well diluted with water so it carries less alcohol, then offer to call them a taxi',
      ],
      answer: 0,
      explanation: 'The guest shows clear signs of intoxication, so service stops, done privately and kindly with alternatives and a safe way home. Coffee does not speed elimination, and any further alcohol, even diluted, smaller or followed by a taxi, is service to a visibly intoxicated person, which creates dram-shop exposure in many US states and is an offence in England and Wales.',
    },
    {
      id: 'l6-hospitality-capstone-q4',
      type: 'multi',
      context: `**Draft staff brief for Saturday's tasting: "Things you can tell guests"**

Five lines proposed by a new supervisor, shown as the options below.`,
      prompt: 'Which lines are accurate and appropriate for staff to give guests? Select all that apply.',
      options: [
        'Distillation leaves gluten proteins behind, but guests with celiac disease should follow their own medical advice',
        'A strong coffee or a cold shower will help you sober up before driving',
        'Alcohol is classified as a Group 1 carcinogen by the International Agency for Research on Cancer',
        'A dram after dinner is good for your digestion',
        'The body clears roughly one standard drink an hour, and nothing speeds that up',
      ],
      answer: [0, 2, 4],
      explanation: 'The gluten, IARC and elimination statements are accurate and responsibly framed. Coffee and cold showers do not lower blood alcohol, so that advice is dangerous. "Good for your digestion" is a health-benefit claim, which staff should never make.',
    },
    {
      id: 'l6-hospitality-capstone-q5',
      type: 'order',
      prompt: 'Using the rule "lighter before heavier, lower ABV before higher, unpeated before peated", put this flight in serving order, first to last.',
      items: [
        'A light blended whiskey at 40% ABV',
        'A wheated bourbon at 46% ABV',
        'A bottled-in-bond rye at 50% ABV',
        'A cask-strength bourbon at 60% ABV',
        'A heavily peated Islay-style malt at 46% ABV',
      ],
      explanation: 'The unpeated whiskeys climb in weight and strength from 40% to 60%. The peated malt goes last despite its 46% ABV, because smoke lingers on the palate and would flatten every dram after it.',
    },
    {
      id: 'l6-hospitality-capstone-q6',
      type: 'match',
      prompt: 'Match each drink to its cocktail family.',
      pairs: [
        { left: 'Rob Roy', right: 'Manhattan family' },
        { left: 'Gold Rush', right: 'Sours' },
        { left: 'Whiskey Smash', right: 'Juleps and smashes' },
        { left: 'Irish Coffee', right: 'Hot drinks' },
        { left: 'Whisky and soda', right: 'Highballs' },
      ],
      explanation: 'The Rob Roy is a Scotch Manhattan (whisky plus vermouth, stirred). The Gold Rush is a sour of bourbon, lemon and honey. The Whiskey Smash also contains lemon, which tempts people to call it a sour, but its mint and crushed ice make it a julep with citrus. Irish Coffee is a hot drink, and whisky and soda is the archetypal highball.',
    },
  ],
};
