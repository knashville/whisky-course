export default {
  id: 'l6-business-of-whiskey',
  title: 'The Business of Whiskey',
  summary:
    'How whiskey makes money: aged-inventory economics, the three-tier system and trade-practice law, control states, federal and foreign excise, price waterfalls, markup versus margin, pour cost, direct shipping limits and the trade disputes that move the market.',
  minutes: 13,
  blocks: [
    {
      type: 'text',
      md: `A whiskey business spends money for years before it earns any. Grain, energy, barrels and warehouse space are paid for at filling; revenue arrives four, eight or twelve years later, after tax and after every party between still and glass has taken a share. This lesson follows the money.

### Aged-spirit economics

- **Concentration and its workarounds.** A handful of multinational groups own many of the best-known whiskey brands and much of the category's volume. Around them sit **contract distillers** who make spirit to order, **non-distiller producers (NDPs)** who buy and bottle whiskey made elsewhere, and **private labels** made for retailers. Sourcing is a business model. US labels must name the bottler but need not name the distiller (bottled-in-bond labels are the exception): only the company that distilled the spirit may say "Distilled by", and for bourbon, rye and similar types the state of distillation must appear when it differs from the state in the bottler's address (27 CFR 5.66(f)). A "Bottled by" line beside an out-of-state "Distilled in" statement is the usual clue to sourced whiskey.
- **Shipments vs depletions.** **Shipments** are what a supplier sells into its distributors. **Depletions** are what distributors sell on to retailers and bars. Shipments can be pushed for a quarter; depletions show real demand, and a gap between them means stock is piling up in the channel.
- **Counting in cases.** Volume is reported in **9-litre cases**, the equivalent of 12 bottles of 750 mL, so brands of different bottle sizes compare cleanly.
- **Price tiers.** Industry reports group spirits into tiers such as value, premium, high-end premium and super-premium. Much of the growth in American whiskey and Scotch over the past decade came from the upper tiers.`,
    },
    {
      type: 'text',
      md: `### The three-tier system

The **21st Amendment**, ratified on 5 December 1933, ended national Prohibition and gave each state power over alcohol coming into it. Most states built a **three-tier system**:

1. **Supplier or importer** (distiller, NDP or importer) sells only to
2. **Wholesaler (distributor)**, which sells only to
3. **Retailer** (off-premise, such as a liquor store) or **on-premise account** (a bar or restaurant), which sells to the consumer.

The amendment does not require three tiers; states chose the structure, and each state runs its own variant. Many states add **franchise laws** that stop a supplier ending a distributor relationship without "good cause", which makes switching distributors slow and expensive.

Federal **trade-practice rules** under the Federal Alcohol Administration Act keep suppliers from controlling retailers. They are set out in four parts of Title 27 (table below). In practice that bars a supplier from paying a retailer for exclusivity, giving valuable equipment or services, paying bonuses to a retailer's staff, or selling on terms that let unsold stock come back. There are narrow exceptions: for example, a supplier may run **educational seminars** for a retailer's employees at the retailer or at the supplier's premises, but may not pay the employees' travel or lodging (27 CFR 6.94). States add their own trade-practice laws on top.`,
    },
    {
      type: 'table',
      caption: 'Federal trade-practice rules for the beverage alcohol industry (27 CFR, Chapter I).',
      headers: ['Part', 'Subject', 'Typical problem it targets'],
      rows: [
        ['27 CFR Part 6', 'Tied house', 'A supplier giving a retailer money, equipment, services or other things of value that induce it to buy the supplier\'s products'],
        ['27 CFR Part 8', 'Exclusive outlets', 'Requiring a retailer to buy one supplier\'s products to the exclusion of competitors, such as paying for an exclusive well pour'],
        ['27 CFR Part 10', 'Commercial bribery', 'Payments or gifts to a retailer\'s employees or agents, such as cash per bottle sold'],
        ['27 CFR Part 11', 'Consignment sales', 'Selling on consignment or with a privilege of return, so unsold stock goes back for credit'],
      ],
    },
    {
      type: 'text',
      md: `### Control states and license states

In **control states** the state government itself runs the wholesale tier for spirits, and often the retail tier too through state stores or agency stores. They are commonly counted as **17**: Alabama, Idaho, Iowa, Maine, Michigan, Mississippi, Montana, New Hampshire, North Carolina, Ohio, Oregon, Pennsylvania, Utah, Vermont, Virginia, West Virginia and Wyoming. Some local jurisdictions, such as Montgomery County in Maryland, also control sales. Each sets its own **markup formula**, usually a percentage markup on landed cost plus state taxes and fees, and posts uniform prices.

The rest are **license states**: private wholesalers and retailers hold state licenses and set their own prices within state law. A brand plan has to model both systems, because the same bottle reaches the shelf by different arithmetic.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Federal excise tax on distilled spirits',
      md: `- **Full rate: $13.50 per proof gallon** (26 U.S.C. 5001).
- **Reduced rates**, made permanent in December 2020 (Taxpayer Certainty and Disaster Tax Relief Act of 2020), apply per producer per calendar year: **$2.70/PG on the first 100,000 PG**, **$13.34/PG on the next 22,130,000 PG** (that is, up to 22,230,000 PG in total), and $13.50 beyond that. Foreign producers can assign their reduced-rate volume to US importers.
- The tax is **determined when spirits are removed from bond** (the bonded distillery or warehouse), so whiskey pays no federal excise while it ages.
- **Per bottle:** a 750 mL bottle at 80 proof is 0.1981 × 0.80 = **0.1585 PG**, so **about $2.14** at the full rate. At 100 proof it is 0.198 PG, **about $2.67**.

**State excise taxes** come on top and vary widely by state. In the **UK**, duty is charged per litre of pure alcohol (from 1 February 2026, **£33.99 per LPA** for spirits above 22% ABV, uprated most years), and **VAT at 20%** is then charged on the duty-inclusive price. Check current rates before quoting them.`,
    },
    {
      type: 'text',
      md: `### Markup versus margin

These two words cause more pricing mistakes than any tax table.

- **Markup** is profit as a share of **cost**: (price − cost) / cost.
- **Margin** is profit as a share of **price**: (price − cost) / price.
- To price from a margin: **price = cost / (1 − margin)**.

A bottle costing **$24** sold at a **30% margin** is priced 24 / 0.70 = **$34.29**. The profit is $10.29, which is a **42.9% markup** on cost. Price it at "30% markup" by mistake ($31.20) and the margin is only 23%. Illustrative margins in a license state are **about 25-30% for distributors** and **about 25-35% for retailers**, varying by state, channel and brand. The Pour cost tool includes a markup-and-margin calculator.`,
    },
    {
      type: 'steps',
      title: 'Worked example: a price waterfall for one 750 mL bottle (invented figures)',
      items: [
        { title: 'Supplier price', md: 'The distiller sells to the distributor at **$16.00**, federal excise already paid on removal from bond. At 80 proof about $2.14 of that is FET; the rest covers liquid, packaging, marketing and the supplier\'s profit.' },
        { title: 'State excise (license state)', md: 'An illustrative state tax of $4.00 per gallon adds 0.198 × $4.00 = **$0.79**, paid by the distributor. Distributor cost: **$16.79**.' },
        { title: 'Distributor margin', md: 'At a 27% margin: 16.79 / 0.73 = **$23.00** to the retailer.' },
        { title: 'Retailer margin', md: 'At a 30% margin: 23.00 / 0.70 = **$32.86**, likely posted at $32.99. Local sales tax is added at the register.' },
        { title: 'Read the waterfall', md: 'Of $32.86: supplier $16.00 (including $2.14 FET), state excise $0.79, distributor $6.21, retailer $9.86. The distiller keeps less than half the shelf price before its own costs.' },
        { title: 'The control-state route', md: 'In a control state the agency replaces both private margins with its formula. With an invented formula of landed cost $16.50 × 1.45 markup = $23.93, plus $2.10 of state taxes and fees, the posted price is about **$26.03**. Same bottle, different arithmetic.' },
      ],
    },
    {
      type: 'text',
      md: `### Pour cost on the bar

A bar prices drinks from **pour cost**: the cost of the liquor in a drink as a share of its menu price.

- A 750 mL bottle holds **25.36 US fl oz**, so it gives **about 16.9 pours of 1.5 oz**.
- **Cost per pour = bottle cost / pours.**
- **Menu price = cost per pour / target pour cost.** Typical spirit targets are **about 15-25%**.

Example: a **$34 bottle** gives 34 / 16.9 = **$2.01 per 1.5 oz pour**. At a **20%** target the menu price is 2.01 / 0.20 = **$10.05**, which a bar would round to a menu price such as $10 or $11. Spillage, over-pouring and comps raise the real pour cost, so bars count inventory against sales every week. Try your own numbers in the Pour cost tool.`,
    },
    {
      type: 'text',
      md: `### Shipping, trade wars and scale

**Direct-to-consumer (DTC) shipping.** Wine buyers in most states can order from out-of-state wineries. Spirits are different: shipping spirits directly to consumers is legal in only a **minority of states**, many with volume caps, license conditions or in-state-only rules, and the list changes often. Verify current state law before promising delivery.

**Trade policy** can wipe out an export market overnight, and tariffs in this industry have come in waves (table below). Every status in this area changes, so date any claim you repeat.

**Scale.** **India is the world's largest whisky market by volume**, though much of its domestic "whisky" is molasses-based and would not qualify as whisky under UK, EU or US rules. **Scotch exports** were worth about **£5.36 billion in 2025** by Scotch Whisky Association figures, roughly 1.3 billion 70 cl bottles, with the **US the largest market by value**.`,
    },
    {
      type: 'table',
      caption: 'Tariff waves that hit whiskey. Statuses change; check current sources before quoting.',
      headers: ['When', 'Measure', 'What happened next'],
      rows: [
        ['June 2018', 'EU 25% tariff on American whiskey, in retaliation for US steel and aluminum tariffs', 'Suspended from 1 January 2022 under a US-EU arrangement'],
        ['October 2019', 'US 25% tariff on single malt Scotch, part of the Airbus-Boeing aircraft dispute', 'Suspended in March 2021, then for five years under a June 2021 US-UK agreement'],
        ['2025', 'New US tariffs, including 10% on UK goods such as Scotch from April 2025; the EU threatened 50% on American whiskey, then dropped it; several Canadian provinces pulled US alcohol from shelves from March 2025', 'US exports to Canada fell sharply; Scotch volumes to the US dropped'],
        ['2026', 'The US tariff on UK whisky was lifted during 2026; reports differ on the date and the legal route','Several Canadian provinces still restricted US alcohol during 2026; verify current status'],
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Three-tier system', definition: 'The US distribution structure most states use, in which suppliers sell to wholesalers, wholesalers sell to retailers and bars, and only the last tier sells to consumers.' },
        { term: 'Control state', definition: 'A US state whose government runs the wholesale tier for spirits, and often retail stores too, setting prices by its own markup formula.' },
        { term: 'Tied-house rules', definition: 'Federal and state trade-practice laws (27 CFR Part 6 federally) that stop suppliers giving retailers things of value that induce them to buy, keeping the tiers independent.' },
        { term: 'Franchise law', definition: 'A state law that limits a supplier\'s right to end or change its distributor without good cause.' },
        { term: 'Depletions', definition: 'Sales from distributors to retailers and bars; a truer measure of demand than a supplier\'s shipments into distributors.' },
        { term: 'Nine-litre case', definition: 'The standard volume unit for spirits sales reporting, equal to 12 bottles of 750 mL.' },
        { term: 'Pour cost', definition: 'The cost of the liquor in a drink as a percentage of its menu price; bars commonly target about 15-25% for spirits.' },
        { term: 'Margin (pricing)', definition: 'Profit as a percentage of the selling price, so price = cost / (1 − margin); markup, by contrast, is profit as a percentage of cost.' },
      ],
    },
    {
      type: 'text',
      md: `**Recap.** Aged whiskey ties up capital for years, so the industry watches depletions as well as shipments and counts in 9-litre cases. Most states use three tiers, protected by franchise laws and by federal trade-practice rules in 27 CFR Parts 6, 8, 10 and 11; about 17 control states run the wholesale tier themselves. Federal excise is $13.50 per proof gallon, with reduced rates of $2.70 and $13.34 per PG for the first 100,000 and next 22,130,000 PG, paid on removal from bond: about $2.14 on a 750 mL bottle at 80 proof. Price with margins (cost / (1 − margin)), price drinks from pour cost, and treat DTC rules, tariffs and market data as dated facts to recheck.`,
    },
  ],
  quiz: [
    {
      id: 'l6-business-of-whiskey-q1',
      type: 'numeric',
      context: `**Excise worksheet, calendar year 2026**
- Producer: a US distiller eligible for the reduced rates
- Removals from bond this year: 130,000 proof gallons
- No earlier removals this year; no credits apply`,
      prompt: 'What federal excise tax is due on these removals? Enter the dollar amount as a number only.',
      answer: 670200,
      tolerance: 1,
      unit: 'USD',
      explanation: 'The first 100,000 PG pay $2.70: $270,000. The remaining 30,000 PG fall in the $13.34 band: $400,200. Total $670,200. Applying $13.50 to everything ($1,755,000) ignores the reduced rates made permanent in December 2020.',
    },
    {
      id: 'l6-business-of-whiskey-q2',
      type: 'numeric',
      context: `**Menu build**
- Bottle: 750 mL (25.36 US fl oz), cost $42.00
- Pour: 2 oz neat
- Target pour cost: 18%`,
      prompt: 'What menu price meets the target pour cost? Give dollars to the nearest cent, as a number only.',
      answer: 18.4,
      tolerance: 0.02,
      unit: 'USD',
      explanation: 'Pours per bottle = 25.36 / 2 = 12.68. Cost per pour = 42.00 / 12.68 = $3.31. Menu price = 3.31 / 0.18 = $18.40. Multiplying the cost by 1.18 instead would confuse pour cost with a markup and price the drink far too low.',
    },
    {
      id: 'l6-business-of-whiskey-q3',
      type: 'single',
      context: `**Buyer's note**
- Our cost per bottle: $30.00
- Store policy: every spirit must earn a 25% margin`,
      prompt: 'Which shelf price meets the store policy?',
      options: ['$37.50', '$40.00', '$39.90', '$36.00'],
      answer: 1,
      explanation: 'Price = cost / (1 − margin) = 30.00 / 0.75 = $40.00, giving $10 profit, which is 25% of the price. $37.50 is a 25% markup on cost, only a 20% margin; $39.90 rounds the equivalent 33.3% markup down to 33%, leaving a 24.8% margin that just misses policy; $36.00 is a 20% markup.',
    },
    {
      id: 'l6-business-of-whiskey-q4',
      type: 'multi',
      context: `**A supplier rep's proposals to a cocktail bar (license state)**
1. Pay the bar $5,000 to make our bourbon its only well bourbon
2. Take back any bottles that have not sold within three months, for full credit
3. Pay each bartender $2 for every cocktail sold using our brand
4. Host a free educational seminar on whiskey production for the bar's staff at our distillery
5. Sell to the bar only through its licensed wholesaler at the posted price`,
      prompt: 'Which proposals are likely to breach the federal trade-practice rules? Select all that apply.',
      options: ['Proposal 1', 'Proposal 2', 'Proposal 3', 'Proposal 4', 'Proposal 5'],
      answer: [0, 1, 2],
      explanation: 'Paying for an exclusive well pour is the exclusive-outlet and tied-house problem (27 CFR Parts 8 and 6). Taking back unsold stock is a sale with a privilege of return (Part 11). Paying the bar\'s staff per drink is commercial bribery (Part 10). Educational seminars for retailer employees are an allowed exception (27 CFR 6.94) as long as the supplier does not pay their travel or lodging, and selling through the wholesaler at the posted price is how the three tiers are meant to work.',
    },
    {
      id: 'l6-business-of-whiskey-q5',
      type: 'match',
      prompt: 'Match each part of 27 CFR to the trade practice it governs.',
      pairs: [
        { left: 'Part 6', right: 'Tied house' },
        { left: 'Part 8', right: 'Exclusive outlets' },
        { left: 'Part 10', right: 'Commercial bribery' },
        { left: 'Part 11', right: 'Consignment sales' },
      ],
      explanation: 'Part 6 covers things of value given to retailers, Part 8 arrangements that shut out competitors, Part 10 payments to a retailer\'s employees or agents, and Part 11 consignment and return privileges. Together they keep suppliers from controlling the retail tier.',
    },
    {
      id: 'l6-business-of-whiskey-q6',
      type: 'truefalse',
      context: `**New sales rep's training notes**

"Because of the 21st Amendment, every state has to run the same three tiers, so our route to market will be identical in all 50 states."`,
      prompt: 'True or false: the 21st Amendment requires every state to distribute spirits through a three-tier system.',
      answer: false,
      explanation: 'The 21st Amendment (1933) ended Prohibition and gave states power over alcohol entering them. The three-tier system is a structure most states chose under that power, and each state runs its own version, including the 17 or so control states that run the wholesale tier themselves.',
    },
  ],
};
