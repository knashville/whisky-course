export default {
  id: 'l3-mashing-fermentation',
  title: `Mashing and Fermentation`,
  summary: `Scotch infusion mashing against the American cook, sour mash and backset, the arithmetic of yeast, and the fermentation choices that set a new make's character before distillation.`,
  minutes: 12,
  blocks: [
    {
      type: 'text',
      md: `Malting built the enzymes. Mashing puts them to work, turning starch into a sugary liquid, and fermentation turns that sugar into alcohol plus hundreds of flavor compounds. Two traditions do this differently. Scotch malt distillers run an **infusion mash** and send clear liquid, the wort, to the washbacks. American bourbon and rye distillers **cook** a mix of grains and ferment the whole porridge, grain and all. Each choice leaves a mark on the spirit before it ever reaches a still.

### Milling: a recipe for drainage

A Scotch malt distillery crushes its malt in a roller mill into **grist** of about **20% husk, 70% grits and 10% flour**. That ratio is a compromise. Flour converts fastest but clogs the bed; husks convert nothing but keep the bed open so wort can drain. Too much flour gives a sticky, slow-draining "stuck" mash.

American bourbon and rye distillers ferment on the grain and never drain the mash, so drainage is no concern. They use **hammer mills** that grind corn, rye and malt to a fine meal, which gives the enzymes the most surface to work on.`,
    },
    {
      type: 'steps',
      title: 'The Scotch infusion mash',
      items: [
        { title: 'First water, about 63-64 °C', md: `Hot water is mixed with the grist in the mash tun. At this temperature both amylases work: beta-amylase makes maltose quickly and alpha-amylase opens up the starch. The sweet wort drains through the husk bed, is cooled and goes to the washbacks. A first water much above 65 °C would destroy beta-amylase before it finished its work, leaving more unfermentable dextrins and less alcohol.` },
        { title: 'Second water, about 70-80 °C', md: `A hotter water rinses out more sugar while alpha-amylase keeps cutting. This wort also goes to the washbacks.` },
        { title: 'Third water (sparge), about 85-90 °C', md: `A final hot rinse recovers the last sugar. It is too weak to send to the washbacks, so it is stored and used as the **first water of the next mash**.` },
        { title: 'The vessel', md: `Most distilleries use a **lauter tun** or semi-lauter tun, where rotating arms with knives lift the grain bed so wort runs off quickly. How the bed is handled sets the wort's clarity: gentle, slow draining gives clear wort, while stirring or fast draining pulls fine solids through.` },
      ],
    },
    {
      type: 'compare',
      title: 'Wort clarity and the new make',
      columns: [
        { heading: 'Clear wort', points: ['Few grain solids and lipids reach the washback', 'Yeast forms more esters', 'Fruitier, more estery new make', 'Suits a light, floral house style'] },
        { heading: 'Cloudy wort', points: ['Fine particles and grain lipids carry over', 'Yeast forms fewer esters', 'Nuttier, heavier, more cereal new make', 'Suits a robust, weighty house style'] },
      ],
    },
    {
      type: 'callout',
      variant: 'fact',
      title: 'Why whisky wort is never boiled',
      md: `Brewers boil their wort; distillers do not. Unboiled wort keeps its enzymes alive, so limit dextrinase and the amylases go on breaking dextrins into sugar in the washback. This **secondary conversion** raises the yield. Scotch wort typically starts at an **original gravity of about 1.050-1.060** and ferments to a wash of about **7-9% ABV**. The trade-off is that unboiled wort is not sterile, so bacteria come along for the ride, which matters in long fermentations.`,
    },
    {
      type: 'steps',
      title: 'The American cook',
      items: [
        { title: 'Cook the corn', md: `Ground corn and water are heated to about **100 °C (212 °F)**, or higher under pressure, to gelatinize the starch fully.` },
        { title: 'Add the rye or wheat', md: `The mash cools to about **77 °C (170 °F)** before the small grains go in. They gelatinize at lower temperatures and need less cooking.` },
        { title: 'Add the malt', md: `At about **63-65 °C (145-150 °F)** the malted barley goes in, cool enough for its beta-amylase to survive. Its enzymes now convert all the gelatinized starch in the cooker.` },
        { title: 'Ferment on the grain', md: `The mash is cooled further and pumped to the fermenter with yeast and, in sour mashing, backset. Nothing is drained off: the grain stays in through fermentation and into the beer still. Exact temperatures vary by distillery.` },
      ],
    },
    {
      type: 'text',
      md: `### Sour mash and backset

Nearly all American whiskey is made by the sour mash process. After the beer still strips the alcohol, the thin, acidic liquid drained from the spent grain, called **backset** (or setback), goes back into the next cook or fermenter. It often makes up about **20-30% of the fermenter volume**, and distillers adjust it batch by batch. It does three jobs:

1. It lowers the pH toward **about 5**, a level yeast tolerates and many spoilage bacteria do not.
2. It carries nutrients from the previous run.
3. It makes one batch behave more like the next.

A **sweet mash** skips the backset and relies on fresh yeast alone. Both are legal. Sour mash describes the process; the whiskey does not taste sour.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Grist', definition: `Milled malt ready for mashing. In Scotch malt distilling it is about 20% husk, 70% grits and 10% flour by weight.` },
        { term: 'Lauter tun', definition: `A mash tun with a slotted false floor and rotating knives that lift the grain bed so wort drains quickly and clearly.` },
        { term: 'Sour mash', definition: `The American practice of adding backset (setback), the thin acidic liquid from the previous run's stillage, to the next cook or fermenter, often as 20-30% of the fermenter volume. It lowers the pH toward 5 and does not make the whiskey taste sour.` },
        { term: 'Original gravity', definition: `The density of wort before fermentation relative to water, for example 1.055. The higher it is, the more sugar there is and the stronger the finished wash.` },
        { term: 'Secondary conversion', definition: `The continued breakdown of dextrins into fermentable sugar by malt enzymes that survive into the washback, possible because whisky wort is not boiled.` },
        { term: 'Draff', definition: `The spent grain left in the mash tun after the wort is drained, sold as cattle feed.` },
        { term: 'Pot ale', definition: `The yeasty, protein-rich residue left in the wash still after the first distillation, usually evaporated into a syrup for animal feed.` },
        { term: 'DDGS', definition: `Distillers dried grains with solubles: the dried solids and concentrated liquids left after distilling a grain-in mash, sold as high-protein animal feed.` },
      ],
    },
    {
      type: 'text',
      md: `### Yeast turns sugar into alcohol

Yeast converts glucose into ethanol and carbon dioxide:

**C6H12O6 → 2 C2H5OH + 2 CO2**

By mass, 180 g of glucose gives 92 g of ethanol and 88 g of carbon dioxide. That is a theoretical yield of **0.511 g of ethanol per gram of glucose**. Real fermentations reach about **90-95%** of it, because yeast spends some sugar on growth and on by-products such as glycerol.

### Inside the washback

Yeast is pitched into the cooled wort and spends its first hours multiplying. Then fermentation turns vigorous: carbon dioxide foams up and the wash warms as the yeast works, often into the low-to-mid 30s °C at its peak. Many washbacks have rotating blades called **switchers** that knock the foam down before it overflows. After about two days the sugar is gone and the yeast slows. In a long fermentation, lactic acid bacteria then take over, lowering the pH further and adding acids that later become fruity esters. A long-fermented wash also tends to foam less in the wash still.`,
    },
    {
      type: 'steps',
      title: 'Worked example: from sugar to litres of alcohol',
      items: [
        { title: 'Theoretical ethanol by mass', md: `1,000 kg of glucose × 0.511 = **511 kg** of ethanol.` },
        { title: 'Convert to volume', md: `Ethanol weighs 0.789 kg per litre, so 511 ÷ 0.789 = **648 L** of pure alcohol.` },
        { title: 'Apply a real yield', md: `At 92% of theoretical: 648 × 0.92 = **596 L** of pure alcohol.` },
        { title: 'The common slip', md: `Skipping the density step treats kilograms as litres and understates the volume by about a fifth (511 L instead of 648 L).` },
      ],
    },
    {
      type: 'table',
      headers: ['Variable', 'Typical practice', 'Effect on the new make'],
      rows: [
        ['Fermentation length (Scotch)', 'Short: about 48 h. Long: about 70-120 h', 'Short ferments give cereal, nutty spirit. In long ferments lactic bacteria work after the yeast slows, producing acids that become esters: fruitier, lighter spirit'],
        ['Fermentation length (US)', 'About 3-5 days; distiller\'s beer about 8-10% ABV', 'Fermenting on the grain adds body and grain character'],
        ['Yeast strain', 'Distiller\'s yeast, often a house or proprietary strain', 'Shifts the balance of esters and higher alcohols. Four Roses runs 2 mashbills × 5 yeasts = 10 distinct bourbon recipes'],
        ['Vessel material', 'Washbacks of Oregon pine (Douglas fir), larch or stainless steel; US fermenters of cypress or steel', 'Wood is harder to clean and can harbor lactic bacteria; steel is easier to control'],
        ['Wort clarity', 'Clear or cloudy', 'Clear: fruitier, more estery. Cloudy: nuttier, heavier'],
      ],
      caption: 'Typical ranges vary by distillery. Fermentation choices set flavor; the still then decides which compounds are kept.',
    },
    {
      type: 'text',
      md: `### What else fermentation makes

Alongside ethanol, yeast makes small amounts of **congeners**: higher alcohols (fusel oils), esters (fruity), aldehydes (green, grassy), acids and sulfur compounds. They are a tiny fraction of the wash but carry most of its flavor. Distillation decides which of them reach the new make, and Level 5 names them molecule by molecule.

Little goes to waste. In Scotland the spent grain from the mash tun, **draff**, goes to cattle, and **pot ale**, the residue left in the wash still, is evaporated into syrup for feed. In the US the stillage from the beer still is split: the thin liquid becomes backset, and the solids are dried into **DDGS** for animal feed.`,
    },
    {
      type: 'table',
      headers: ['Stage', 'Scotch malt distillery', 'American bourbon distillery'],
      rows: [
        ['Grain', 'Malted barley only (for single malt)', 'At least 51% corn, plus rye or wheat and malted barley'],
        ['Milling', 'Roller mill: about 20% husk, 70% grits, 10% flour', 'Hammer mill: fine meal'],
        ['Starch conversion', 'Infusion mash with waters at about 63-64, 70-80 and 85-90 °C', 'Cook: corn near 100 °C, rye or wheat at about 77 °C, malt at about 63-65 °C'],
        ['Enzymes', 'Only the malt\'s own, by law', 'Malt, often with added commercial enzymes'],
        ['What is fermented', 'Wort only; the grain stays in the mash tun', 'The whole mash, grain included'],
        ['Acidity', 'Nothing added; lactic bacteria act in long ferments', 'Backset, often about 20-30% of the fermenter'],
        ['Fermentation', 'About 48-120 h in wooden or steel washbacks', 'About 3-5 days in cypress or steel fermenters'],
        ['Strength reached', 'Wash of about 7-9% ABV', 'Distiller\'s beer of about 8-10% ABV'],
      ],
      caption: 'Two traditions side by side. Figures are typical and vary by distillery.',
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: a longer fermentation makes more alcohol',
      md: `Distiller's yeast uses up nearly all the fermentable sugar in about two days, and after that the alcohol level barely moves. Extra hours change the flavor instead: as the yeast slows, lactic bacteria produce acids, and those acids form fruity esters. A long fermentation is a flavor decision, and it costs washback time.`,
    },
    {
      type: 'text',
      md: `### Recap

Scotch distillers mill malt to about 20/70/10 husk, grits and flour, mash with waters of about 63-64 °C, 70-80 °C and 85-90 °C, and recycle the last water into the next mash. Their wort is never boiled, so enzymes keep working in the washback, and the wash reaches about 7-9% ABV. Bourbon distillers cook corn near 100 °C, add rye at about 77 °C and malt at 63-65 °C, and ferment on the grain with 20-30% backset that lowers the pH toward 5. Yeast's theoretical yield is 0.511 g of ethanol per gram of glucose, about 90-95% of which is reached in practice. Wort clarity, fermentation length, yeast and vessel choice all shape the new make.`,
    },
  ],
  quiz: [
    {
      id: 'l3-mashing-fermentation-q1',
      type: 'order',
      prompt: `Put the steps of an American bourbon cook in order, first to last.`,
      items: [
        `Cook the ground corn near 100 °C (212 °F) or under pressure`,
        `Cool to about 77 °C (170 °F) and add the rye or wheat`,
        `Cool to about 63-65 °C (145-150 °F) and add the malted barley`,
        `Cool further and pump to the fermenter with backset and yeast`,
      ],
      explanation: `Corn needs the most heat, so it is cooked first. The small grains go in at a lower temperature, and the malt goes in last, once the mash is cool enough for beta-amylase to survive. Adding the malt first would destroy its enzymes during the corn cook.`,
    },
    {
      id: 'l3-mashing-fermentation-q2',
      type: 'numeric',
      context: `**Fermenter 3 log**

- Fermentable sugar charged: 2,400 kg (as glucose)
- Yield achieved: 92% of theoretical
- Density of ethanol: 0.789 kg/L`,
      prompt: `How many litres of pure ethanol did fermenter 3 produce? Round to the nearest 10 L.`,
      answer: 1430,
      tolerance: 10,
      unit: 'L',
      explanation: `Theoretical ethanol is 2,400 × 0.511 = 1,226.4 kg. At 92% that is 1,128.3 kg, and 1,128.3 ÷ 0.789 = 1,430 L. Forgetting the 92% gives about 1,554 L, and forgetting the density step gives 1,128, which treats kilograms as litres.`,
    },
    {
      id: 'l3-mashing-fermentation-q3',
      type: 'single',
      context: `**Proposed infusion schedule, mash 112**

- First water: 72 °C, drained to the washbacks
- Second water: 80 °C, drained to the washbacks
- Third water: 88 °C, stored for the next mash`,
      prompt: `Which step will cost this distillery the most fermentable sugar?`,
      options: [
        `The 72 °C first water, because beta-amylase is destroyed before it can make maltose`,
        `The 80 °C second water, because no enzyme can work above 72 °C`,
        `The 88 °C third water, because it is too hot to rinse sugar from the grain`,
        `Storing the third water, because weak water dilutes the next mash`,
      ],
      answer: 0,
      explanation: `The first water is where most conversion happens, and beta-amylase denatures quickly above about 65 °C, so a 72 °C first water leaves more unfermentable dextrins. By the second water most of the starch is already converted. A hot third water and recycling it into the next mash are normal practice.`,
    },
    {
      id: 'l3-mashing-fermentation-q4',
      type: 'multi',
      prompt: `What does adding backset to an American fermenter do? Select all that apply.`,
      options: [
        `Lowers the pH toward about 5`,
        `Helps hold back spoilage bacteria`,
        `Carries nutrients from the previous run`,
        `Gives the finished whiskey a sour taste`,
        `Raises the distiller's beer to about 15% ABV`,
      ],
      answer: [0, 1, 2],
      explanation: `Backset is acidic, so it lowers the pH toward about 5, which yeast tolerates and many bacteria do not, and it brings nutrients from the last run. "Sour mash" names the process; the whiskey does not taste sour. American distiller's beer runs about 8-10% ABV whether or not backset is used.`,
    },
    {
      id: 'l3-mashing-fermentation-q5',
      type: 'match',
      prompt: `Match each material to what it is.`,
      pairs: [
        { left: 'Draff', right: 'Spent grain left in a Scotch mash tun' },
        { left: 'Pot ale', right: 'Residue left in the wash still' },
        { left: 'DDGS', right: 'Dried feed made from US stillage solids' },
        { left: 'Backset', right: 'Thin stillage returned to the next fermenter' },
        { left: 'Third water', right: 'Weak sparge kept as the next first water' },
      ],
      explanation: `Draff comes out of the mash tun before fermentation; pot ale is what the wash still leaves after the first distillation. In the US the beer still's stillage is split into thin backset for the next batch and solids that become DDGS. The weak third water never reaches a washback; it starts the next mash.`,
    },
    {
      id: 'l3-mashing-fermentation-q6',
      type: 'single',
      context: `**Distillery brief.** The current new make is nutty and cereal-led. Fermentations last about 48 hours, and the wort runs slightly cloudy. The owners want a lighter, fruitier spirit without changing the stills.`,
      prompt: `Which change is most likely to deliver it?`,
      options: [
        `Run clearer wort and extend fermentation to about 100 hours`,
        `Run cloudier wort and shorten fermentation to about 40 hours`,
        `Boil the wort before it reaches the washbacks`,
        `Raise the first water to 75 °C to speed up conversion`,
      ],
      answer: 0,
      explanation: `Clear wort favors ester formation, and a long fermentation lets lactic bacteria add acids that become fruity esters. Cloudier wort and a shorter ferment push toward the nutty, cereal style the owners want to leave. Boiling would kill the enzymes that drive secondary conversion, and a 75 °C first water would destroy beta-amylase and cut the yield.`,
    },
  ],
};
