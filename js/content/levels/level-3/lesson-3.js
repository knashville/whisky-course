export default {
  id: 'l3-pot-still-distillation',
  title: `Pot Still Distillation`,
  summary: `How a double pot-still run works cut by cut, how still shape, condensers and copper set the weight of the spirit, and how distillers measure what they recover in litres of pure alcohol.`,
  minutes: 12,
  blocks: [
    {
      type: 'text',
      md: `A wash of about 8% ABV holds the alcohol, along with water, yeast, acids and hundreds of trace compounds. A pot still separates them one batch at a time. Ethanol boils at **78.4 °C** and water at 100 °C, so the vapor above a boiling wash is richer in alcohol than the liquid: roughly **40-50% ABV** above an 8% wash. One pass cannot reach spirit strength, which is why malt whisky is distilled at least twice. The still's shape, its condenser and the stillman's cut points then decide how heavy or light the spirit will be.`,
    },
    { type: 'diagram', name: 'pot-still' },
    {
      type: 'text',
      md: `### Shape controls reflux

As vapor climbs the neck, some of it condenses on the cooler copper and runs back into the pot to be distilled again. This **reflux** works like an extra small distillation: the heavier, less volatile compounds fall back and the lighter ones carry on. More reflux gives a lighter, cleaner spirit. Less reflux gives a heavier, oilier one.

Still makers raise reflux with **tall necks**, **boil balls** (a bulge that makes the vapor expand, cool and fall back) and **lantern** shapes (a narrow waist above the pot). Glenmorangie's stills, with necks of just over 5 m, are among the tallest in Scotland and are known for a delicate spirit. The **lyne arm** matters too. Angled upward, it sends condensed liquid back to the still; angled downward, it carries heavy vapor straight to the condenser. Some distilleries fit a **purifier**, a small condenser on the lyne arm that returns heavy vapors to the still (Ardbeg is a well-known example).

The heat source plays a part. Most stills are heated by steam through internal coils or pans. A few are fired directly by gas, oil or, at Yoichi in Japan, coal.

The stillman also steers reflux with the heat. A still run gently gives more reflux and longer contact between vapor and copper, and so a lighter spirit; a still driven hard pushes heavier compounds over the top. Wash stills are watched through sight glasses, because a boiling wash can foam up the neck and carry liquid wash into the low wines.`,
    },
    {
      type: 'table',
      headers: ['Still feature', 'Effect on reflux', 'Typical spirit'],
      rows: [
        ['Tall neck', 'More', 'Lighter, fruitier'],
        ['Boil ball or lantern', 'More', 'Lighter, more delicate'],
        ['Upward-angled lyne arm', 'More', 'Lighter'],
        ['Purifier on the lyne arm', 'More', 'Lighter, cleaner'],
        ['Short, squat still', 'Less', 'Heavier, oilier'],
        ['Downward-angled lyne arm', 'Less', 'Heavier, more robust'],
      ],
    },
    {
      type: 'compare',
      title: 'Two ways to condense the vapor',
      columns: [
        { heading: 'Shell-and-tube condenser', points: ['Vapor passes over a bundle of copper tubes carrying cold water', 'Large copper surface: maximum copper contact', 'Removes more sulfur compounds', 'Lighter, cleaner new make; the modern standard'] },
        { heading: 'Worm tub', points: ['A long coiled copper pipe (the worm) sits in a tub of cold water', 'Much less copper contact, and the vapor condenses quickly', 'Leaves more sulfur compounds in the spirit', 'Heavier, meaty or sulfury new make (for example Talisker and Mortlach)'] },
      ],
    },
    {
      type: 'callout',
      variant: 'fact',
      title: 'Why copper?',
      md: `Copper reacts with sulfur compounds, such as hydrogen sulfide and dimethyl trisulfide (DMTS, which smells of cooked cabbage or meat), and pulls them out of the vapor. The more contact the vapor has with copper, the cleaner the spirit. The reaction slowly wears the metal away, so stills are eventually replaced. Distilleries usually have the new still built to the exact shape of the old one, because a change in shape could change the spirit.`,
    },
    {
      type: 'steps',
      title: 'A double distillation run',
      items: [
        { title: 'Wash still', md: `The wash (about 7-9% ABV) is boiled, and everything that comes over is collected together as **low wines** until the run falls to about 1% ABV. Low wines average roughly 20-25% ABV at many distilleries, and up to about 30% at some. The spent liquid left in the still is pot ale.` },
        { title: 'Charge the spirit still', md: `Low wines are mixed with the foreshots and feints saved from the previous spirit run. The charge is typically about **25-30% ABV**.` },
        { title: 'Foreshots', md: `The first spirit off is very strong and full of the most volatile compounds, such as acetaldehyde (sharp, green apple) and ethyl acetate (solvent, like nail-polish remover), plus oily residues left in the still and pipes from the last run. Foreshots are also called the **heads**. In the spirit safe the stillman mixes a sample with water: while foreshots run, it turns cloudy (the **demisting test**). Foreshots go to the feints receiver.` },
        { title: 'Heart (middle cut)', md: `When the sample stays clear, the spirit is switched to the spirit receiver. A typical heart runs from about **72-75% down to about 60-65% ABV** and averages roughly **68-72%**. Cut points vary widely between distilleries.` },
        { title: 'Feints', md: `After the heart, the run continues down to about **1% ABV**. These feints, also called the **tails**, carry heavier, oilier compounds and go to the feints receiver. Foreshots and feints are recycled into the next charge, and the residue left in the spirit still is called spent lees.` },
      ],
    },
    {
      type: 'table',
      headers: ['Cut decision', 'What changes', 'Resulting spirit'],
      rows: [
        ['End the heart early, at a higher strength (for example about 70% ABV)', 'Fewer late-running heavy compounds are collected; more alcohol goes to the feints', 'Lighter, fruitier, more floral'],
        ['End the heart late, at a lower strength (for example about 60% ABV)', 'More late-running compounds are collected, including oily feints and phenols', 'Heavier, oilier, more robust'],
        ['Peated distillery', 'Phenols come over late in the run, so the heart is usually extended to a lower strength', 'Keeps more of the malt\'s smoke'],
      ],
    },
    {
      type: 'callout',
      variant: 'history',
      title: 'The spirit safe',
      md: `The spirit safe is a locked box of brass and glass that the new make flows through. Inside it the stillman can read the strength with a hydrometer, run the demisting test and swing a spout to send the spirit to the feints receiver or the spirit receiver, all without touching the spirit. It dates from the excise reforms of the 1820s, when officers needed to stop spirit being drawn off before it was measured and taxed. For most of its history only the excise officer held the key.`,
    },
    {
      type: 'text',
      md: `### Twice, three times, or two and a half

Double distillation is the Scotch norm. **Triple distillation** is the Irish tradition and survives in the Scottish Lowlands, where Auchentoshan triple-distills all its spirit. The third still takes a stronger, narrower cut and gives a lighter, softer spirit. Springbank in Campbeltown runs a **"2.5" distillation** for its flagship malt: part of the low wines is distilled a third time and the rest twice, which gives a spirit between the two styles. The same distillery also makes a double-distilled and a triple-distilled malt under other names.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Low wines', definition: `The weak first distillate. In pot-still distilling it is the wash still's output, about 20-30% ABV; in American practice it is the beer still's output before the doubler.` },
        { term: 'Foreshots', definition: `The first, very strong fraction from the spirit still, rich in volatile compounds such as acetaldehyde and ethyl acetate. Also called the heads, it is diverted and recycled.` },
        { term: 'Feints', definition: `The weaker, oilier fraction collected after the heart until the run falls to about 1% ABV. Also called the tails, it is recycled into the next spirit-still charge.` },
        { term: 'Spirit safe', definition: `A locked brass-and-glass box through which new make flows, letting the stillman test it and switch it between receivers without touching it.` },
        { term: 'Reflux', definition: `Vapor that condenses inside the still and runs back down to be distilled again. More reflux gives a lighter, purer spirit.` },
        { term: 'Lyne arm', definition: `The pipe that carries vapor from the top of the still's neck to the condenser. Its angle and length change how much reflux occurs.` },
        { term: 'Worm tub', definition: `A traditional condenser: a long coiled copper pipe in a tub of cold water. It gives less copper contact than a shell-and-tube condenser and a heavier, often sulfury new make.` },
        { term: 'Litres of pure alcohol (LPA)', definition: `The volume of ethanol in a liquid, calculated as litres × ABV (as a decimal). The standard unit for yields and duty outside the US.` },
      ],
    },
    {
      type: 'text',
      md: `### Counting alcohol: LPA and recovery

Volumes alone mislead, because the liquid keeps changing strength. Distillers count **litres of pure alcohol (LPA)**:

- **LPA = litres × ABV** (ABV as a decimal)
- **Recovery = heart LPA ÷ charge LPA**

Recovery tells you how much of the alcohol put into the spirit still ended up in the spirit receiver on that run. The rest sits mainly in the foreshots and feints, which are recycled, so it is not lost. A narrow heart gives lower recovery per run and a lighter spirit, and the recycled feints carry the extra alcohol into the next charge.`,
    },
    {
      type: 'steps',
      title: 'Worked example: recovery on one spirit run',
      items: [
        { title: 'Charge LPA', md: `12,000 L of charge at 27% ABV: 12,000 × 0.27 = **3,240 LPA**.` },
        { title: 'Heart LPA', md: `3,000 L of heart at 69% ABV: 3,000 × 0.69 = **2,070 LPA**.` },
        { title: 'Recovery', md: `2,070 ÷ 3,240 = 0.639, so **63.9%** of the charge's alcohol was collected as heart.` },
        { title: 'Where the rest went', md: `3,240 - 2,070 = 1,170 LPA went to the foreshots and feints, less a small loss. Nearly all of it returns in the next charge. Check LPA figures with the Cask yield tool.` },
        { title: 'Move the cut', md: `Same charge, two illustrative cut points. End the heart at about 66% ABV and you might collect 2,600 L averaging 71%: 1,846 LPA, or **57.0%** recovery, of a lighter spirit. Run it down to about 60% and you might collect 3,400 L averaging 67%: 2,278 LPA, or **70.3%**, of a heavier one. A wider heart raises recovery per run and changes the character with it.` },
      ],
    },
    {
      type: 'text',
      md: `### Recap

A pot still works in batches. The wash still turns a 7-9% wash into low wines of roughly 20-25% ABV, leaving pot ale. The spirit still, charged at about 25-30%, gives foreshots (cloudy in the demisting test), a heart of about 72-75% down to 60-65%, and feints down to about 1%; foreshots and feints are recycled. Tall necks, boil balls, upward lyne arms and purifiers add reflux and lighten the spirit; worm tubs and low copper contact leave it heavier and more sulfury. Ending the heart late keeps oils and phenols. Recovery is heart LPA divided by charge LPA, where LPA is litres × ABV.`,
    },
  ],
  quiz: [
    {
      id: 'l3-pot-still-distillation-q1',
      type: 'numeric',
      context: `**Spirit still 2, run 418**

- Charge (low wines plus foreshots and feints): 11,500 L at 26.5% ABV
- Middle cut collected: 2,650 L averaging 70.5% ABV`,
      prompt: `What percentage of the charge's pure alcohol was recovered as middle cut? Round to one decimal place.`,
      answer: 61.3,
      tolerance: 0.2,
      unit: '%',
      explanation: `The charge holds 11,500 × 0.265 = 3,047.5 LPA and the heart holds 2,650 × 0.705 = 1,868.3 LPA, so recovery is 1,868.3 ÷ 3,047.5 = 61.3%. Dividing the volumes alone (2,650 ÷ 11,500 = 23%) ignores strength. The remaining alcohol is in foreshots and feints and returns in the next charge.`,
    },
    {
      id: 'l3-pot-still-distillation-q2',
      type: 'order',
      prompt: `Put these stages of a double pot-still distillation in order, first to last.`,
      items: [
        `Wash still: low wines collected until the run falls to about 1% ABV`,
        `Spirit still: foreshots diverted while the demisting test stays cloudy`,
        `Spirit still: heart collected from about 72-75% down to about 60-65% ABV`,
        `Spirit still: feints collected down to about 1% ABV`,
        `Foreshots and feints added to the next spirit-still charge`,
      ],
      explanation: `The wash still makes low wines first. In the spirit still the run goes foreshots, then heart, then feints, with strength falling all the way. Foreshots and feints are only recycled once they have been collected, into the following charge.`,
    },
    {
      id: 'l3-pot-still-distillation-q3',
      type: 'match',
      prompt: `Match each part of a pot-still house to its function.`,
      pairs: [
        { left: 'Boil ball', right: 'Bulge in the neck that makes vapor expand, cool and fall back' },
        { left: 'Purifier', right: 'Small condenser on the lyne arm that returns heavy vapor' },
        { left: 'Worm tub', right: 'Coiled pipe in cold water with little copper contact' },
        { left: 'Shell-and-tube condenser', right: 'Bundle of copper tubes giving maximum copper contact' },
        { left: 'Spirit safe', right: 'Locked box where the run is switched between receivers' },
      ],
      explanation: `Boil balls and purifiers both add reflux, one in the neck and one on the lyne arm. The two condenser types differ in copper contact: a worm tub gives little and a heavier spirit, a shell-and-tube condenser gives a lot and a cleaner one. The spirit safe is where the stillman makes the cuts.`,
    },
    {
      id: 'l3-pot-still-distillation-q4',
      type: 'multi',
      prompt: `Which changes would push a pot-still spirit toward a lighter, fruitier style? Select all that apply.`,
      options: [
        `A taller neck or a boil ball`,
        `An upward-angled lyne arm`,
        `Ending the heart earlier, at a higher strength`,
        `Swapping shell-and-tube condensers for worm tubs`,
        `Ending the heart later, at a lower strength`,
        `Running the stills more gently, with less heat`,
      ],
      answer: [0, 1, 2, 5],
      explanation: `Taller necks, boil balls and upward lyne arms all add reflux, and an early end to the heart leaves heavy late-running compounds in the feints. A gentler heat also raises reflux and copper contact, which lightens the spirit. Worm tubs reduce copper contact and give a heavier, more sulfury spirit, and a late heart cut collects more oils and phenols.`,
    },
    {
      id: 'l3-pot-still-distillation-q5',
      type: 'single',
      context: `**Quality note, peated new make**

- Malt specification: 50 ppm phenols
- Current heart cut: 74% down to 68% ABV
- Blending team: "Clean and fruity, but far less smoke than expected."`,
      prompt: `Which change to the spirit run would most directly bring back the smoke?`,
      options: [
        `Extend the heart down to about 60% ABV, because phenols come over late in the run`,
        `Start the heart earlier, at about 80% ABV, to catch more of the foreshots`,
        `End the heart even earlier, at about 70% ABV, to concentrate the smoke`,
        `Fit condensers that give the vapor more copper contact`,
      ],
      answer: 0,
      explanation: `Phenols come over late in the run, so a heart that stops at 68% sends most of them to the feints. Peated distilleries extend the heart to a lower strength to keep them. Ending the heart earlier would lose even more smoke, foreshots carry volatile compounds and no extra phenol, and more copper contact would make the spirit cleaner without adding smoke.`,
    },
    {
      id: 'l3-pot-still-distillation-q6',
      type: 'truefalse',
      prompt: `Springbank's "2.5 times" distillation means every drop of its flagship spirit passes through three distillations.`,
      answer: false,
      explanation: `Only part of the low wines goes through a third distillation; the rest is distilled twice. The blend of the two streams gives a spirit between a double- and a triple-distilled style, which is where the "2.5" comes from.`,
    },
  ],
};
