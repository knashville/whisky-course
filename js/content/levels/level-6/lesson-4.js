export default {
  id: 'l6-collecting-cask-ownership',
  title: 'Collecting, the Secondary Market and Cask Ownership',
  summary:
    'What makes a bottle valuable, where resale is legal, how fakes and refills are caught, what you actually own when you buy a cask, the costs and exits that decide its value, and the red flags of cask "investment" schemes, with full valuation math.',
  minutes: 13,
  blocks: [
    {
      type: 'text',
      md: `Rare whiskey now trades like art and wine, with auction records, price indexes and a fraud problem to match. A professional is asked three kinds of question: "What is this bottle worth?", "Can I sell it?" and "Should I buy this cask?" Each one has a legal answer and a numeric answer, and this lesson gives you both.

### What drives value

Price follows **scarcity, desirability and trust**. Scarcity comes from closed distilleries, age and small releases. Desirability comes from reputation and quality. Trust comes from provenance and condition. A bottle with all three can be worth many times its release price; a bottle with doubtful provenance can be worth almost nothing, however rare the label.

Two cautions. Whiskey does not improve in the bottle, so condition can only fall. And past auction prices are a record of a bubble as much as of value: secondary prices for many collectible whiskeys fell back after their early-2020s peak.`,
    },
    {
      type: 'table',
      caption: 'Value drivers and what to check before you trust them.',
      headers: ['Driver', 'Why it adds value', 'What to check'],
      rows: [
        ['Closed or "silent" distillery', 'Supply cannot grow once stocks are drunk', 'Distillation date; whether the distillery has reopened, which changes the story for future releases'],
        ['Age and vintage', 'Old stock is scarce and costly to hold', 'The stated age or vintage; consistency with the bottling date and label style'],
        ['Limited release', 'Small outturns sell out at release', 'Outturn size, bottle numbering, release documentation'],
        ['Independent bottling', 'Single casks and unusual ages that the distillery never released', 'The bottler\'s reputation, cask number and strength'],
        ['Provenance', 'Documented history reduces fraud risk', 'Receipts, auction records, storage history, chain of owners'],
        ['Condition', 'Buyers pay for intact bottles', 'Fill level, label and capsule damage, cork condition, signs of leakage'],
      ],
    },
    {
      type: 'text',
      md: `### Where resale is legal

**United States.** Selling alcohol requires a state license, so in most states an unlicensed private person may not resell bottles, including through online groups. Some states have created licensed routes for older bottles. **Kentucky's vintage distilled spirits law (passed in 2017)** lets licensed retailers buy vintage spirits from private sellers and resell them under conditions such as labeling and reporting. Rules differ state by state and keep changing, so verify the current law before buying or selling.

**UK and EU.** Bottles sell legally through auction houses, online and in the room. The buyer pays the **hammer price plus a buyer's premium** (with VAT on the premium in the UK), and the seller pays a **commission and listing fees**, so the seller nets noticeably less than the hammer price. Cross-border shipping brings duty, tax and carrier restrictions.

### Counterfeits and refills

Fakes range from crude refills of genuine empty bottles to careful forgeries of antique labels. A screening checklist:

- **Closure:** cork, capsule and seal style right for the era; no sign of re-gluing or a replaced capsule.
- **Glass:** embossing, mould seams and bottle shape consistent with the period.
- **Codes:** batch, laser or bottling codes present and consistent with the release.
- **Print:** printing method, fonts and spelling; modern digital print on an "antique" label is a giveaway.
- **Fill level:** a suspiciously perfect fill on a very old bottle can mean refilling; a very low fill means a failed seal.
- **UV light:** modern papers and glues containing optical brighteners glow under ultraviolet light.
- **Provenance:** a chain of ownership you can check, ideally to the original buyer.

When the stakes are high, labs analyze a sample: congener profiles are compared with known references, and **radiocarbon bomb-pulse dating** tests the carbon itself. Atmospheric nuclear tests in the 1950s and early 1960s sharply raised carbon-14 levels, which then declined. Grain grown after the mid-1950s carries that signal, so a lab can tell pre-war spirit from modern spirit and date recent spirit to a few years.`,
    },
    {
      type: 'callout',
      variant: 'history',
      title: 'The "1878" dram, St Moritz, 2017',
      md: `In 2017 a hotel bar in St Moritz, Switzerland, poured a dram from a bottle presented as an **1878** single malt from a famous Speyside distillery. A visitor paid just under **CHF 10,000** for it. Experts noticed problems with the cork and label, and radiocarbon testing commissioned by a whisky consultancy found the liquid was **most likely distilled around 1970-72**, a blend of malt and grain whisky. The hotel refunded the buyer in full. Rarity claims are only as good as their provenance, and science can now check them.`,
    },
    {
      type: 'text',
      md: `### Buying a cask: what you actually own

A cask buyer owns **liquid held in bond**: whisky in a bonded (excise) warehouse with duty suspended. No duty or VAT is due while it stays in bond: both fall due when the whisky, usually bottled under bond, is released for sale in the UK. The cask almost never moves, so ownership exists **in the warehouse-keeper's records**.

Title passes by a **delivery order (DO)**: an instruction signed by seller and buyer, sent to the warehouse and acknowledged by it, after which the warehouse records the new owner. **A "certificate of ownership" issued by the seller is not the same thing.** If the warehouse still lists the seller, the seller holds the cask in law, and if the seller fails, your claim may be only against a collapsed company. Since **3 March 2025**, owners of goods in UK excise warehouses no longer need their own HMRC approval under the old WOWGR rules, so more warehouses open accounts for private owners. Either way, get **written confirmation from the warehouse itself** that the cask, with its number, fill date and latest regauge, is held in your name.

### Costs, losses and exits

- **Holding costs:** annual storage, insurance, regauging and sampling fees, and transfer (DO) fees.
- **Losses:** the angel's share, about 2% of volume a year in Scotland and more in warm climates, and a slowly falling ABV. **Below 40% ABV a cask can no longer be bottled as Scotch whisky**, so an over-held, low-strength cask can lose its category.
- **Exits:** sell through a broker or cask auction, sell to an **independent bottler**, sell back to the original distiller, or bottle it yourself. Bottling for the UK market means paying **duty and VAT** when the bottles leave bond, producing a **compliant label**, and, for single malt Scotch, bottling **in Scotland**. Use of the distillery's name is controlled by trademark and by the original sale contract, and owners often refuse it, which is why many single casks reach market under invented names.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Who regulates cask "investment"?',
      md: `In the UK, selling a whisky cask is generally **outside Financial Conduct Authority (FCA) regulation**, because the buyer owns a physical good. The exception is an arrangement structured as a **collective investment scheme**, such as investors pooling money in casks that someone else manages for profit, which brings it into FCA territory. For an ordinary cask purchase, buyers usually have **no Financial Services Compensation Scheme cover and no Financial Ombudsman route** if things go wrong.

The **Advertising Standards Authority** requires cask-investment ads to make clear that cask investment is unregulated and that values can fall as well as rise, and it has banned ads making unproven return claims. The **City of London Police** have warned about fraudulent cask schemes and investigated sellers. A firm that says it is "FCA-authorised" may hold a permission unrelated to casks, such as credit broking.`,
    },
    {
      type: 'compare',
      title: 'Cask offers: red flags and good signs',
      columns: [
        {
          heading: 'Red flags',
          points: [
            'A "guaranteed" or fixed annual return',
            'Cold calls, pressure and deadlines ("offer closes Friday")',
            'No named bonded warehouse, or a warehouse that will not confirm the cask',
            'A seller\'s certificate in place of a delivery order and warehouse account',
            'A cask number, fill date or regauge that cannot be verified',
            'A valuation far above broker and auction evidence; an unnamed "famous distillery"',
          ],
        },
        {
          heading: 'Good signs',
          points: [
            'The warehouse is named and confirms the cask and your ownership in writing',
            'Title passes by delivery order into your own warehouse account',
            'A recent regauge gives volume, ABV and date',
            'Storage, insurance and exit fees are itemized',
            'Realistic exits are described, with no promised buy-back price',
            'You can obtain an independent valuation before paying',
          ],
        },
      ],
    },
    {
      type: 'text',
      md: `### Case study: the brochure

> **HIGHWATER CASK CLUB** · "Own a 2019 ex-bourbon barrel from a famous Speyside distillery. 200 L filled at 63.5% ABV. Just £9,500. **Guaranteed 12% annual return.** Stored in a secure bonded warehouse in Scotland. Certificate of ownership issued within 7 days. Offer closes Friday."

Before any arithmetic, list the red flags: a guaranteed return, no named warehouse, a certificate in place of a delivery order, an unnamed distillery, no cask number or regauge, and deadline pressure. Then test the numbers. The steps below generously treat the 2019 fill gauge as today's contents and assume you hold the cask 7 more years and bottle it yourself at 46% in 70 cl bottles. Rerun them with the Cask yield and Angel's share tools, using the current UK duty rate.`,
    },
    {
      type: 'steps',
      title: 'Worked example: valuing the brochure cask',
      items: [
        { title: 'Alcohol at filling', md: '200 L × 63.5% = **127.0 LPA** when the cask was filled in 2019. The brochure gives no regauge, so the steps below treat the fill gauge as today\'s contents. That is a best case: seven years in wood at 2% a year would already have taken the cask to about 174 L, which is one more reason to demand a current regauge before paying.' },
        { title: 'Volume after 7 more years', md: 'At an assumed 2% a year: 200 × 0.98^7^ = **173.6 L**.' },
        { title: 'Alcohol at bottling', md: 'With ABV projected to fall to about 58%: 173.6 × 0.58 = **100.7 LPA**, about a fifth less alcohol than at filling.' },
        { title: 'Bottle yield', md: 'Each 70 cl bottle at 46% holds 0.70 × 0.46 = 0.322 LPA. 100.7 / 0.322 = 312.7, so **312 full bottles**.' },
        { title: 'Costs to bottling', md: 'Purchase £9,500 + storage and insurance 7 × £80 = £560 + regauge, sampling and transfer fees £250 = **£10,310**, or 10,310 / 312 = **£33.04 per bottle**. Fees are illustrative.' },
        { title: 'Break-even price per bottle', md: 'Add bottling and dry goods (£4.00, illustrative) and UK duty of 0.322 LPA × £33.99 = £10.94. Break-even = 33.04 + 4.00 + 10.94 = **£47.98 before VAT**, or **£57.58 with 20% VAT**. This ignores the time value of money.' },
        { title: 'Test the promise', md: 'A 12% annual return would make the cask worth 9,500 × 1.12^7^ = **£21,001** in 7 years. A buyer paying that would need to sell each bottle for about 21,001 / 312 + 4.00 + 10.94 = **£82.25 before VAT** just to break even, for an unnamed 14-year-old single cask. The "guarantee" assumes a price that the arithmetic does not support.' },
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Hammer price', definition: 'The winning bid at an auction, before the buyer\'s premium is added and before the seller\'s commission and fees are deducted.' },
        { term: 'Independent bottler', definition: 'A company that buys casks from distilleries or brokers and bottles them under its own label, often as single casks.' },
        { term: 'Delivery order (DO)', definition: 'A signed instruction, acknowledged by the bonded warehouse, that transfers a cask to a new owner in the warehouse\'s records and so evidences title; a seller\'s certificate does not.' },
        { term: 'Buyer\'s premium', definition: 'A percentage an auction house adds to the hammer price, paid by the buyer; sellers separately pay a commission and fees.' },
        { term: 'Bomb-pulse dating', definition: 'Radiocarbon dating that uses the spike in atmospheric carbon-14 from 1950s-60s nuclear tests to date spirit made from grain grown after the mid-1950s.' },
        { term: 'Collective investment scheme', definition: 'An arrangement in which investors pool money in assets managed by someone else for profit; in the UK it brings a cask offer under FCA rules.' },
        { term: 'Break-even bottle price', definition: 'Total costs of a cask through bottling, including duty, divided by the number of full bottles; the minimum price per bottle that avoids a loss.' },
      ],
    },
    {
      type: 'text',
      md: `**Recap.** Value rests on scarcity, desirability and trust, and trust comes from provenance and condition. Unlicensed private resale is illegal in most US states, though some, such as Kentucky, allow licensed vintage sales; UK and EU auctions charge buyer's premiums and seller's commissions. Screen bottles by closure, glass, codes, print, fill, UV and provenance, and use lab tests, including bomb-pulse dating, for high-value cases. A cask buyer owns liquid in bond, and title is the warehouse's record, transferred by a delivery order. Holding costs, falling volume and ABV (below 40% it is no longer Scotch), and restricted exits decide what a cask is worth. Cask sales are generally unregulated by the FCA, so check every red flag and do the LPA, bottle and break-even arithmetic before paying.`,
    },
  ],
  quiz: [
    {
      id: 'l6-collecting-cask-ownership-q1',
      type: 'numeric',
      context: `**Regauge certificate, cask 4410 (ex-bourbon barrel)**
- Regauged today: 188 L at 59.2% ABV
- Plan: hold 5 more years · assumed loss 2% of volume a year
- Projected ABV at bottling: 56.0%
- Bottling: 70 cl at 46% ABV`,
      prompt: 'How many full 70 cl bottles should the cask fill when bottled?',
      answer: 295,
      tolerance: 0,
      unit: 'bottles',
      explanation: 'Volume after 5 years = 188 × 0.98^5^ = 169.9 L. LPA = 169.9 × 0.560 = 95.2. Each bottle holds 0.70 × 0.46 = 0.322 LPA, so 95.2 / 0.322 = 295.5, which gives 295 full bottles. Using today\'s 59.2% instead of the projected strength would overstate the yield.',
    },
    {
      id: 'l6-collecting-cask-ownership-q2',
      type: 'numeric',
      context: `**Cask exit plan**
- Projected at bottling: 96.6 LPA · bottle 70 cl at 48% ABV
- Costs to date: purchase £7,950 · storage and insurance £570 · regauge, sampling and transfer £330
- Bottling and dry goods: £4.50 per bottle
- UK duty: £33.99 per litre of pure alcohol · ignore VAT and the time value of money`,
      prompt: 'What is the break-even price per bottle before VAT, to the nearest penny? Enter the number only.',
      answer: 46.76,
      tolerance: 0.02,
      unit: 'GBP',
      explanation: 'Each bottle holds 0.70 × 0.48 = 0.336 LPA, so 96.6 / 0.336 = 287.5, which is 287 full bottles. Costs to date = £8,850, or 8,850 / 287 = £30.84 per bottle. Duty per bottle = 0.336 × 33.99 = £11.42. Break-even = 30.84 + 4.50 + 11.42 = £46.76.',
    },
    {
      id: 'l6-collecting-cask-ownership-q3',
      type: 'multi',
      context: `**FIRTHGATE WHISKY ASSETS (brochure extract)**

*A rare opportunity to own a 2018 sherry hogshead, cask no. 18/2231, from one of Scotland's most famous distilleries.*

- Projected returns of 15% a year, guaranteed by our buy-back promise
- Your cask is held in our secure partner warehouse (name provided after purchase)
- Ownership certificate posted within 5 working days
- Storage and insurance itemized: £75 a year
- Only 3 casks left: reserve by phone today`,
      prompt: 'Which features of this offer are red flags? Select all that apply.',
      options: [
        'A guaranteed annual return backed by a buy-back promise',
        'The warehouse is named only after purchase',
        'Title is evidenced by the seller\'s ownership certificate',
        'Storage and insurance fees are itemized',
        'Scarcity pressure to reserve by phone today',
      ],
      answer: [0, 1, 2, 4],
      explanation: 'Guaranteed returns, a hidden warehouse, a seller\'s certificate in place of a delivery order and high-pressure scarcity are classic warning signs. Itemized fees are a good sign on their own, though they do not make the rest of the offer safe. A careful buyer would ask the named warehouse to confirm cask 18/2231 and its regauge before paying anything.',
    },
    {
      id: 'l6-collecting-cask-ownership-q4',
      type: 'single',
      context: `A client bought a cask two years ago. The seller has now gone into administration. The client holds an invoice, an insurance schedule, a framed "Certificate of Cask Ownership" from the seller, and an email from the bonded warehouse confirming that a delivery order transferred the cask into the client's own account.`,
      prompt: 'Which document best shows that the client owns the cask?',
      options: [
        'The warehouse\'s confirmation that the delivery order moved the cask into the client\'s account',
        'The seller\'s framed Certificate of Cask Ownership, signed and numbered by the seller\'s directors',
        'The invoice showing the full purchase price paid, with the cask number and fill date',
        'The insurance schedule naming the client as owner and listing the cask by its number',
      ],
      answer: 0,
      explanation: 'Casks in bond are owned according to the warehouse-keeper\'s records, and a delivery order acknowledged by the warehouse is what changes those records. The seller\'s certificate, invoice and insurance schedule show a purchase was made, but if the warehouse still listed the seller, the cask could be caught up in the seller\'s administration.',
    },
    {
      id: 'l6-collecting-cask-ownership-q5',
      type: 'truefalse',
      context: `A caller from a cask company tells a retired client: "Buying one of our casks is an FCA-regulated investment, so if anything happens to us your money is protected."`,
      prompt: 'True or false: in the UK, an ordinary purchase of a whisky cask is regulated by the Financial Conduct Authority, so a buyer can usually claim from the Financial Services Compensation Scheme if the seller fails.',
      answer: false,
      explanation: 'A cask is a physical good, so an ordinary cask sale generally falls outside FCA regulation, with no FSCS cover and no Financial Ombudsman route. Only arrangements structured as a collective investment scheme come within FCA rules, which is why advertising rules require cask-investment ads to say the investment is unregulated.',
    },
    {
      id: 'l6-collecting-cask-ownership-q6',
      type: 'order',
      prompt: 'Put the steps of a cask valuation in order, first to last.',
      items: [
        'Project the volume at bottling with the compounding loss formula',
        'Multiply the projected volume by the projected ABV to get LPA',
        'Divide the LPA by the LPA per bottle (bottle size × bottling ABV)',
        'Round down to whole bottles',
        'Divide all costs through bottling, including duty, by the bottle count to get the break-even price',
      ],
      explanation: 'Volume comes first because loss compounds on volume; LPA follows from the projected strength; bottles follow from LPA per bottle; and only whole bottles can be sold. The break-even price needs the bottle count, so it comes last.',
    },
  ],
};
