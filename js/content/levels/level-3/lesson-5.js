export default {
  id: 'l3-barrels-warehouses-bottling',
  title: `Barrels, Warehouses and Bottling`,
  summary: `Oak species, cooperage, cask sizes and fill histories; how warehouse climate sets loss and proof drift; and the reduction, filtration and coloring steps that take whisky from cask to bottle.`,
  minutes: 14,
  blocks: [
    {
      type: 'text',
      md: `New make goes into the cask clear and comes out amber, softer and more complex. In most whiskies the cask supplies all of the color and a large share of the flavor. This lesson follows the wood from forest to cooperage, the cask through its working life, the warehouse through the seasons and the whisky into the bottle. Level 5 explains the chemistry; here the focus is on the choices and the numbers.

Three kinds of oak dominate whisky making, and each brings its own flavor and its own problems for the cooper.`,
    },
    {
      type: 'table',
      headers: ['Oak', 'Flavor and structure', 'How staves are made'],
      rows: [
        ['American white oak (*Quercus alba*)', 'High in vanillin (vanilla) and oak lactones (coconut); low in tannin. Used for nearly all bourbon barrels and most casks later reused for Scotch', 'Tyloses block the wood\'s vessels, so staves can be sawn and still hold liquid'],
        ['European oak (*Q. robur* and *Q. petraea*)', 'More tannin and spice, less vanilla and coconut. Traditional for sherry casks and wine barrels', 'Less watertight across the grain, so staves are traditionally split along it, which wastes more wood'],
        ['Mizunara (*Q. mongolica* var. *crispula*)', 'Sandalwood, incense and coconut notes after long aging; used mainly in Japan', 'Porous, often knotty and slow to dry; casks are leak-prone and expensive'],
      ],
    },
    {
      type: 'text',
      md: `### From tree to barrel

Staves are first **seasoned**: stacked outdoors for anywhere from several months to about three years, while rain and sun leach out harsh tannins, or dried quickly in a kiln. The cooper then raises the barrel, bending the staves over heat. Heat treatment comes next, and it sets much of the flavor:

- **Toasting** heats the inner surface slowly, breaking wood polymers down into sweet, vanilla, caramel and spice compounds. Wine barrels and most sherry casks are toasted.
- **Charring** sets the inner surface alight. American whiskey barrels are charred to a numbered level. Times commonly quoted for one large US cooperage are about **15 s for #1, 30 s for #2, 35 s for #3 and 55 s for #4**, the deeply cracked "alligator" char. Other cooperages use different times.

Beneath the black char lies the **red layer**, a band of toasted wood where the heat has caramelized wood sugars. As temperatures rise and fall, spirit moves through the char into this layer and back out again.`,
    },
    { type: 'diagram', name: 'char-layers' },
    {
      type: 'table',
      headers: ['Cask', 'Approximate capacity', 'Typical origin'],
      rows: [
        ['Quarter cask', 'About 50-125 L (definitions vary)', 'Small cask chosen for fast extraction'],
        ['American standard barrel', '53 US gal, about 200 L', 'Bourbon and other American whiskey'],
        ['Barrique', '225 L', 'Bordeaux-style wine barrel'],
        ['Hogshead', 'About 225-250 L', 'Often rebuilt from American barrels with extra staves'],
        ['Puncheon', 'About 450-500 L, some larger', 'Sherry or rum trade; a short, wide shape'],
        ['Butt', 'About 475-500 L', 'The traditional sherry cask'],
        ['Port pipe', 'About 550-650 L', 'Long, tapered port cask'],
      ],
      caption: 'Capacities vary by cooperage. Smaller casks have more wood surface per litre of spirit, so they extract faster.',
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'The 700-litre ceiling',
      md: `Most whisky laws cap the cask at 700 L:

- **Scotch whisky:** oak casks of 700 L or less (Scotch Whisky Regulations 2009).
- **Irish whiskey:** wooden casks of 700 L or less (Irish Whiskey Technical File).
- **Canadian whisky:** aged in "small wood" of 700 L or less (Food and Drug Regulations, B.02.002 and B.02.023, as amended in December 2024).
- **EU whisky:** wooden casks of 700 L or less (Regulation (EU) 2019/787).
- **Japanese whisky:** wooden casks of 700 L or less (JSLMA standard, 2021).
- **American Single Malt:** oak casks of 700 L or less (TTB standard effective 19 January 2025).

Bourbon has no size limit: 27 CFR 5.143 requires only charred new oak containers.`,
    },
    {
      type: 'text',
      md: `### A cask's working life

A cask is used many times, and each fill takes some of what it has to give:

1. **New charred oak:** bourbon's required container, so each barrel holds bourbon only once.
2. **First fill:** the first whisky fill after the cask's original contents, usually bourbon or sherry. It gives the most cask influence of any reused cask.
3. **Refill:** a second or later whisky fill. Gentler, so the spirit's own character shows more.
4. **Exhausted:** little flavor left to give.
5. **Rejuvenated:** scraped out and re-toasted or re-charred to expose fresh wood, then filled again.

Most "sherry casks" in modern whisky never sat in a sherry solera. They are built for the whisky trade, often from European oak, and **seasoned** with sherry (often oloroso) before being emptied and shipped. The sherry regulator, the Consejo Regulador, now certifies "sherry casks" only after at least a year of seasoning.

**Finishing**, also called double maturation, moves mature whisky into a second cask (sherry, port, wine, rum and others) for a few months up to about two years, to add a top layer of flavor.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Tyloses', definition: `Bubble-like growths that block the vessels of American white oak heartwood, making it watertight even when staves are sawn.` },
        { term: 'Red layer', definition: `A band of toasted wood beneath a barrel's char, where heat has caramelized wood sugars that the spirit later extracts.` },
        { term: 'First-fill cask', definition: `A cask filled with whisky for the first time after its original contents, usually bourbon or sherry. It gives the most flavor of any reused cask.` },
        { term: 'Refill cask', definition: `A cask on its second or later whisky fill. It gives less color and flavor, leaving more room for the spirit's own character.` },
        { term: 'Rejuvenated cask', definition: `A tired cask that has been scraped and re-toasted or re-charred to expose fresh wood and extend its working life.` },
        { term: 'Dunnage warehouse', definition: `A traditional Scottish warehouse with thick stone walls and an earth or cinder floor, with casks stacked about three high. Cool, damp and steady.` },
        { term: 'Finishing', definition: `A second, shorter maturation in a different type of cask, from a few months to about two years, to add a layer of flavor. Also called double maturation.` },
        { term: 'Reduction', definition: `Adding water to bring cask-strength whisky down to bottling strength, usually in stages and with demineralized or reverse-osmosis water.` },
      ],
    },
    {
      type: 'table',
      headers: ['Warehouse', 'Conditions', 'Typical annual loss', 'Strength drift'],
      rows: [
        ['Dunnage (Scotland)', 'Stone walls, earth or cinder floor, casks about 3 high; cool, damp, steady', 'About 2% of volume (often 1.5-2%)', 'ABV slowly falls'],
        ['Racked (Scotland)', 'Steel racks on a concrete floor, casks on their sides up to about 12 high', 'Around 2%, varying with height', 'ABV usually falls'],
        ['Palletised (Scotland)', 'Casks stand upright on pallets, often 6 or more high', 'Often a little higher than dunnage', 'ABV usually falls'],
        ['US rickhouse, upper floors', 'Hot summers, dry air, large daily and seasonal swings', 'Several percent a year (commonly 3-5%), more in year one as dry new wood soaks up spirit', 'Proof often rises'],
        ['US rickhouse, lower floors', 'Cooler and more humid', 'Lower than the upper floors', 'Proof holds or falls'],
        ['Subtropical and tropical (for example Taiwan, southern India)', 'Hot all year', 'About 8-15% or more, varying by warehouse', 'Depends on each warehouse\'s humidity'],
      ],
      caption: 'Typical ranges, not legal values. Loss varies by warehouse, position, cask and year.',
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: whiskey always gets weaker in the barrel',
      md: `Water and ethanol both pass through the wood and evaporate. Which one escapes faster depends mainly on the **relative humidity** of the air around the cask. In cool, humid Scottish warehouses the air already holds plenty of water vapor, so ethanol escapes relatively faster and the ABV falls. On the hot, dry upper floors of a Kentucky rickhouse water escapes faster, so the proof rises: a barrel entered at 125 proof can come out well above 130. Heat speeds up both losses; humidity sets the direction.`,
    },
    {
      type: 'steps',
      title: 'Worked example: compounding loss in three climates',
      items: [
        { title: 'The rule', md: `Each year a cask loses a percentage of what is **left**, not of what was filled. Remaining volume = starting volume × (1 - annual loss rate)^years^.` },
        { title: 'Year by year', md: `A 200 L barrel losing 4% a year: year 1, 200 × 0.96 = 192.0 L; year 2, 184.3 L; year 3, 176.9 L; year 4, **169.9 L**. Subtracting a flat 8 L a year would give 168 L and overstate the loss.` },
        { title: 'Three climates, five years', md: `The same 200 L fill at illustrative rates. Speyside dunnage at 2%: 200 × 0.98^5^ = **180.8 L** (about 10% lost, ABV drifting down). Kentucky top floor at 5%: 200 × 0.95^5^ = **154.8 L** (about 23% lost, proof drifting up). Taiwanese warehouse at 10%: 200 × 0.90^5^ = **118.1 L** (about 41% lost).` },
        { title: 'Check it', md: `Run the same numbers in the Angel's share tool. Level 6 adds the other half of the picture: tracking litres of pure alcohol as the strength drifts.` },
      ],
    },
    {
      type: 'steps',
      title: 'From cask to bottle',
      items: [
        { title: 'Vat and reduce', md: `Casks are emptied and vatted together, then water brings the whisky down to bottling strength. Distillers use demineralized or reverse-osmosis water, because minerals in hard water can cause haze, and they usually reduce in stages over hours or days.` },
        { title: 'Calculate the water', md: `The simple formula is **C1 × V1 = C2 × V2**. To reduce 500 L at 60% ABV to 46%: V2 = 500 × 60 ÷ 46 = **652 L**, so add about **152 L** of water. Check it with the Adding water tool.` },
        { title: 'Correct for contraction', md: `Ethanol and water shrink slightly when mixed, so 500 L of whisky plus 152 L of water gives a little less than 652 L, at a strength a little above 46%. Real proofing therefore needs slightly more water: density tables put this example at roughly **157 L**, about 5 L more. This is why professionals proof by weight and density tables.` },
        { title: 'Chill filtration (optional)', md: `Below about **46% ABV**, long-chain fatty-acid ethyl esters can drop out of solution as a haze when the whisky gets cold. Chill filtration cools the whisky, commonly to around 0 °C, and filters out these esters. Temperatures vary by producer, from a few degrees above freezing down to about -10 °C. Bottling at 46% or above without chill filtration is a common alternative. The 46% threshold is a rule of thumb.` },
        { title: 'Coloring, where the law allows it', md: `Plain caramel (**E150a**) may be added to adjust color in Scotch (Scotch Whisky Regulations 2009), Irish whiskey (Irish Whiskey Technical File), Canadian whisky and Japanese whisky under the JSLMA standard. American Single Malt may also contain caramel color, which its label must disclose. Bourbon and straight whiskies may not contain added coloring: 27 CFR 5.143 does not permit coloring, flavoring or blending materials for these types.` },
        { title: 'Fill', md: `The whisky is bottled and labeled. Once it is in glass it stops maturing.` },
      ],
    },
    {
      type: 'tasting',
      title: 'Cask comparison',
      md: `Choose two whiskies of similar age and strength, ideally from the same region. Use 15 mL pours, add water to taste and spit if you like. A nose-only comparison works well here, because most of the cask story is in the aroma. Caramel can adjust color in Scotch, so trust your nose and palate over your eyes.`,
      flight: [
        { pour: `A single malt matured in first-fill ex-bourbon casks, around 40-46% ABV`, lookFor: `Vanilla, coconut, honey and fresh orchard fruit, with soft tannin: American oak signatures.` },
        { pour: `A single malt matured or finished in sherry casks, at a similar strength`, lookFor: `Dried fruit, raisin, nuts, chocolate and baking spice, with firmer, drier tannin from European oak. Compare the length of the finish.` },
        { pour: `Optional: the sherry-cask whisky again with a few drops of water`, lookFor: `Whether the fruit opens up or the tannin becomes more prominent.` },
      ],
    },
    {
      type: 'text',
      md: `### Recap

American white oak gives vanilla and coconut and can be sawn because of its tyloses; European oak gives more tannin and spice and is split; mizunara gives sandalwood and incense but leaks. Coopers season, toast and char (#1-#4 at roughly 15/30/35/55 s at one large cooperage), leaving a red layer under the char. Casks range from quarter casks to port pipes, and most whisky laws cap them at 700 L, though bourbon has no cap. Casks move from new to first fill, refill, exhausted and rejuvenated. Loss compounds each year: about 2% in Scotland, several percent in Kentucky and 8-15% in the hottest climates, and humidity decides whether strength falls or rises. At bottling, C1V1 = C2V2 slightly underestimates the water, chill filtration removes the esters that haze below about 46%, and E150a is allowed in Scotch, Irish, Canadian and JSLMA whisky, and with label disclosure in American Single Malt, but never in bourbon or straight whiskey.`,
    },
  ],
  quiz: [
    {
      id: 'l3-barrels-warehouses-bottling-q1',
      type: 'numeric',
      context: `**Cask record**

- Hogshead filled with 250 L of new make
- Warehouse loss rate: 2% of the remaining volume per year`,
      prompt: `How many litres will remain after 10 years? Round to the nearest litre.`,
      answer: 204,
      tolerance: 1,
      unit: 'L',
      explanation: `Loss compounds: 250 × 0.98^10^ = 250 × 0.817 = 204 L. Taking 2% of the original 250 L every year (5 L × 10 = 50 L) gives 200 L, which overstates the loss because each year's 2% comes from a smaller volume. Check it with the Angel's share tool.`,
    },
    {
      id: 'l3-barrels-warehouses-bottling-q2',
      type: 'numeric',
      prompt: `A vatting of 1,200 L at 62% ABV is to be reduced to 40% ABV. Using C1 × V1 = C2 × V2, how many litres of water does the simple formula say to add? Give a whole number.`,
      answer: 660,
      tolerance: 1,
      unit: 'L',
      explanation: `The final volume is 1,200 × 62 ÷ 40 = 1,860 L, so the water to add is 1,860 - 1,200 = 660 L. Answering 1,860 is the usual slip: that is the finished volume, not the water. Because ethanol and water contract when mixed, the true amount of water is slightly larger, which is why blenders finish with density tables. Check it with the Adding water tool.`,
    },
    {
      id: 'l3-barrels-warehouses-bottling-q3',
      type: 'match',
      prompt: `Match each oak to its typical character.`,
      pairs: [
        { left: 'Quercus alba (American white oak)', right: 'Vanilla and coconut, low tannin; staves can be sawn' },
        { left: 'Q. robur and Q. petraea (European oak)', right: 'More tannin and spice; staves are split' },
        { left: 'Mizunara (Japanese oak)', right: 'Sandalwood and incense; porous and prone to leak' },
      ],
      explanation: `American white oak is rich in vanillin and lactones, and its tyloses keep sawn staves watertight. European oak brings more tannin and spice and is split along the grain. Mizunara gives its sandalwood and incense notes only after long aging, and its porous wood leaks easily.`,
    },
    {
      id: 'l3-barrels-warehouses-bottling-q4',
      type: 'multi',
      prompt: `To which of these may plain caramel coloring (E150a) legally be added? Select all that apply.`,
      options: [
        `Scotch whisky`,
        `Irish whiskey`,
        `Canadian whisky`,
        `Japanese whisky under the JSLMA standard`,
        `Straight bourbon whiskey`,
        `Straight rye whiskey`,
      ],
      answer: [0, 1, 2, 3],
      explanation: `The Scotch Whisky Regulations 2009, the Irish Whiskey Technical File, Canadian rules and the JSLMA standard all allow plain caramel. Under 27 CFR 5.143, bourbon and straight whiskies may not contain added coloring, flavoring or blending materials, so all the color in a straight bourbon or straight rye comes from the barrel.`,
    },
    {
      id: 'l3-barrels-warehouses-bottling-q5',
      type: 'order',
      prompt: `Put the stages of a cask's working life in order, first to last.`,
      items: [
        `New charred oak barrel, filled with bourbon`,
        `First fill: its first whisky fill after the original contents`,
        `Refill: a second or later whisky fill`,
        `Exhausted: little flavor left to give`,
        `Rejuvenated: scraped and re-charred for further use`,
      ],
      explanation: `Bourbon must use new charred oak, so the barrel's first life is always bourbon. Its first whisky fill after that is "first fill", later fills are "refill", and a cask with little left to give is exhausted. Rejuvenation comes last, because it is the cure for an exhausted cask.`,
    },
    {
      id: 'l3-barrels-warehouses-bottling-q6',
      type: 'single',
      context: `**Two casks of the same new make, both filled at 62.5% ABV**

- Cask A, Speyside dunnage warehouse: after 6 years, 59.4% ABV, volume down about 11%.
- Cask B, top floor of a Kentucky rickhouse: after 6 years, 68.0% ABV, volume down about 26%.`,
      prompt: `What best explains why cask B gained strength while cask A lost it?`,
      options: [
        `Relative humidity: dry air pulls out water faster; damp air favors ethanol loss`,
        `Temperature: warm air raises strength whatever the humidity of the warehouse`,
        `Wood type: charred new oak absorbs ethanol, while used casks absorb water`,
        `Volume lost: a cask that loses more liquid concentrates the alcohol left`,
      ],
      answer: 0,
      explanation: `Relative humidity sets the direction of proof drift. Dry air pulls water out faster than ethanol, so cask B strengthened; humid Scottish air slows water loss, so ethanol escaped relatively faster from cask A. Heat speeds up both losses but does not decide which one wins, and the size of the loss says nothing about which liquid left.`,
    },
  ],
};
