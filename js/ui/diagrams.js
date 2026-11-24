// Built-in teaching diagrams referenced by lessons as {type: 'diagram', name}.
// Static, author-controlled SVG; colors come from theme tokens via CSS classes.

import { h } from './dom.js';

const FLOW = [
  { t: 'Grain', d: 'Corn, rye, wheat or barley supply the starch. Malted barley also brings the enzymes that convert it.' },
  { t: 'Malting', d: 'Barley is steeped, germinated and kilned (sometimes over peat smoke) to develop enzymes.' },
  { t: 'Milling', d: 'Grain is ground into grist or meal so hot water can reach the starch.' },
  { t: 'Mashing', d: 'Hot water and enzymes turn starch into fermentable sugars.' },
  { t: 'Fermentation', d: 'Yeast turns sugar into alcohol, CO₂ and flavor compounds. The result is a beer-like wash.' },
  { t: 'Distillation', d: 'Heat separates and concentrates alcohol; the distiller keeps the "hearts" as new make spirit.' },
  { t: 'Maturation', d: 'Oak adds color and flavor, removes harsh notes and lets the spirit oxidize slowly.' },
  { t: 'Bottling', d: 'Whiskey is blended, reduced with water to strength, filtered and bottled.' },
];

const SVGS = {
  'pot-still': {
    title: 'Pot still',
    caption: 'A batch still. The wash is heated in the pot; vapor rises through the neck, travels down the lyne arm and condenses back to liquid. The stillman directs the run into heads, hearts and tails.',
    view: '0 0 640 400',
    svg: `
      <rect class="dg-heat" x="70" y="330" width="220" height="14" rx="3"/>
      <text class="dg-label" x="180" y="372" text-anchor="middle">Heat (steam coils or direct fire)</text>
      <path class="dg-copper" d="M90 320 C 60 250, 80 170, 180 160 C 280 170, 300 250, 270 320 Z"/>
      <path class="dg-copper" d="M160 162 C 150 120, 160 90, 172 60 L 188 60 C 200 90, 210 120, 200 162 Z"/>
      <path class="dg-pipe" d="M180 60 C 220 40, 300 46, 420 92"/>
      <rect class="dg-copper" x="420" y="80" width="56" height="170" rx="10"/>
      <path class="dg-line" d="M430 110 h36 M430 140 h36 M430 170 h36 M430 200 h36 M430 230 h36"/>
      <path class="dg-pipe" d="M448 250 L 448 280 L 540 280"/>
      <rect class="dg-safe" x="540" y="262" width="64" height="40" rx="4"/>
      <text class="dg-small" x="572" y="287" text-anchor="middle">safe</text>
      <path class="dg-amber" d="M100 300 C 90 270, 100 250, 110 245 L 250 245 C 262 252, 268 272, 262 300 Z" opacity=".55"/>
      <text class="dg-label" x="180" y="290" text-anchor="middle">Pot (wash or low wines)</text>
      <text class="dg-label" x="210" y="112">Neck / head</text>
      <text class="dg-label" x="300" y="40">Lyne arm</text>
      <text class="dg-label" x="488" y="150">Condenser</text>
      <text class="dg-small" x="488" y="168">(shell-and-tube</text>
      <text class="dg-small" x="488" y="184">or worm tub)</text>
      <text class="dg-label" x="540" y="330">Heads → Hearts → Tails</text>
      <text class="dg-small" x="540" y="350">only the hearts are kept</text>
      <text class="dg-small" x="540" y="366">as spirit</text>`,
  },
  'column-still': {
    title: 'Column (continuous) still',
    caption: 'Fermented beer flows down over perforated plates while steam rises through it. Each plate acts like a small distillation, so the column can run continuously and reach high strength.',
    view: '0 0 640 420',
    svg: `
      <rect class="dg-copper" x="250" y="30" width="110" height="350" rx="14"/>
      <path class="dg-line" d="M262 80 h86 M262 115 h86 M262 150 h86 M262 185 h86 M262 220 h86 M262 255 h86 M262 290 h86 M262 325 h86" stroke-dasharray="6 5"/>
      <path class="dg-arrow" d="M460 110 L 360 110" marker-end="url(#dg-head)"/>
      <text class="dg-label" x="470" y="106">Distiller's beer in</text>
      <text class="dg-small" x="470" y="124">(fermented wash, cool)</text>
      <path class="dg-arrow" d="M140 350 L 250 350" marker-end="url(#dg-head)"/>
      <text class="dg-label" x="30" y="346">Steam in</text>
      <text class="dg-small" x="30" y="364">(heats from below)</text>
      <path class="dg-pipe" d="M305 30 L 305 12 L 470 12"/>
      <text class="dg-label" x="400" y="40">Alcohol-rich vapor out</text>
      <text class="dg-small" x="400" y="58">to a doubler/thumper or condenser</text>
      <path class="dg-arrow" d="M360 372 L 460 400" marker-end="url(#dg-head)"/>
      <text class="dg-label" x="470" y="398">Spent beer (stillage)</text>
      <text class="dg-label" x="30" y="190">Perforated plates</text>
      <text class="dg-small" x="30" y="208">vapor bubbles through liquid</text>
      <text class="dg-small" x="30" y="224">on every plate</text>
      <path class="dg-line" d="M200 200 L 262 185"/>`,
  },
  'barrel-anatomy': {
    title: 'Anatomy of a barrel',
    caption: 'A standard American whiskey barrel holds 53 US gallons (about 200 liters). Staves are held by hoops and bent with heat; the heads close each end.',
    view: '0 0 640 360',
    svg: `
      <path class="dg-wood" d="M140 70 C 250 40, 390 40, 500 70 C 530 140, 530 220, 500 290 C 390 320, 250 320, 140 290 C 110 220, 110 140, 140 70 Z"/>
      <path class="dg-line" d="M200 58 C 185 140, 185 220, 200 302 M260 50 C 250 140, 250 220, 260 310 M320 48 L 320 312 M380 50 C 390 140, 390 220, 380 310 M440 58 C 455 140, 455 220, 440 302"/>
      <path class="dg-hoop" d="M150 72 C 140 140, 140 220, 150 288"/>
      <path class="dg-hoop" d="M490 72 C 500 140, 500 220, 490 288"/>
      <path class="dg-hoop" d="M178 64 C 166 140, 166 220, 178 296"/>
      <path class="dg-hoop" d="M462 64 C 474 140, 474 220, 462 296"/>
      <path class="dg-hoop" d="M290 50 C 282 140, 282 220, 290 312"/>
      <path class="dg-hoop" d="M350 50 C 358 140, 358 220, 350 312"/>
      <ellipse class="dg-char" cx="320" cy="56" rx="12" ry="6"/>
      <text class="dg-label" x="320" y="24" text-anchor="middle">Bunghole</text>
      <path class="dg-line" d="M320 30 L 320 48"/>
      <text class="dg-label" x="20" y="182">Head</text>
      <path class="dg-line" d="M62 178 L 128 178"/>
      <text class="dg-label" x="540" y="120">Head hoop</text>
      <path class="dg-line" d="M538 116 L 494 100"/>
      <text class="dg-label" x="540" y="250">Quarter hoop</text>
      <path class="dg-line" d="M538 246 L 470 236"/>
      <text class="dg-label" x="250" y="346">Bilge (widest point) and bilge hoops</text>
      <path class="dg-line" d="M320 330 L 320 316"/>
      <text class="dg-label" x="398" y="182">Stave</text>`,
  },
  'char-layers': {
    title: 'Inside a charred stave',
    caption: 'Charring and toasting create layers. Spirit moves in and out of the wood as temperatures rise and fall, so it meets all three.',
    view: '0 0 640 330',
    svg: `
      <text class="dg-label" x="40" y="30">Spirit side (inside the barrel)</text>
      <rect class="dg-char" x="40" y="44" width="380" height="54"/>
      <path class="dg-crack" d="M60 44 l 10 20 l -6 14 M120 44 l -8 18 l 10 16 M190 44 l 6 22 l -10 12 M260 44 l -6 16 l 8 20 M330 44 l 8 18 l -8 14 M390 44 l -6 24"/>
      <rect class="dg-red" x="40" y="98" width="380" height="64"/>
      <rect class="dg-wood" x="40" y="162" width="380" height="110"/>
      <path class="dg-line" d="M40 200 C 160 190, 300 210, 420 198 M40 236 C 160 228, 300 246, 420 232" opacity=".6"/>
      <text class="dg-label" x="436" y="66">Char layer</text>
      <text class="dg-small" x="436" y="84">carbon; filters sulfur notes, adds color</text>
      <text class="dg-label" x="436" y="126">Red layer</text>
      <text class="dg-small" x="436" y="144">heat-broken wood sugars and lignin:</text>
      <text class="dg-small" x="436" y="160">caramel, toast, vanilla (vanillin)</text>
      <text class="dg-label" x="436" y="206">Raw oak</text>
      <text class="dg-small" x="436" y="224">tannins, oak lactones (coconut)</text>
      <path class="dg-arrow" d="M230 300 L 230 250" marker-end="url(#dg-head)"/>
      <path class="dg-arrow" d="M260 250 L 260 300" marker-end="url(#dg-head)"/>
      <text class="dg-small" x="40" y="318">Warm months push spirit into the wood; cool months draw it back out.</text>`,
  },
  rickhouse: {
    title: 'A rickhouse',
    caption: 'Barrels age on wooden ricks across several floors. Where a barrel sits changes how it matures, which is why warehouse location matters to blenders.',
    view: '0 0 640 400',
    svg: `
      <path class="dg-wall" d="M120 110 L 330 30 L 540 110 L 540 380 L 120 380 Z"/>
      <path class="dg-line" d="M120 160 H 540 M120 215 H 540 M120 270 H 540 M120 325 H 540"/>
      <g class="dg-barrels">
        ${[132, 187, 242, 297, 352].map((y) => [170, 215, 260, 305, 350, 395, 440, 485].map((x) => `<ellipse cx="${x}" cy="${y + 14}" rx="18" ry="14"/>`).join('')).join('')}
      </g>
      <defs>
        <linearGradient id="dg-temp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" class="dg-hot-stop"/>
          <stop offset="1" class="dg-cool-stop"/>
        </linearGradient>
      </defs>
      <rect x="70" y="110" width="16" height="270" rx="8" fill="url(#dg-temp)"/>
      <text class="dg-label" x="20" y="100">Hotter</text>
      <text class="dg-label" x="20" y="398">Cooler</text>
      <text class="dg-label" x="556" y="140">Top floors</text>
      <text class="dg-small" x="556" y="158">heat, wide swings,</text>
      <text class="dg-small" x="556" y="174">fast extraction</text>
      <text class="dg-label" x="556" y="336">Ground floors</text>
      <text class="dg-small" x="556" y="354">cool and steady,</text>
      <text class="dg-small" x="556" y="370">slow, gentle aging</text>`,
  },
};

const DEFS = `<defs><marker id="dg-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="dg-head"/></marker></defs>`;

export function renderDiagram(name) {
  if (name === 'grain-to-glass') {
    return h(
      'figure',
      { class: 'diagram flow' },
      h('figcaption', { class: 'diagram-title' }, 'From grain to glass'),
      h(
        'ol',
        { class: 'flow-list' },
        FLOW.map((s) => h('li', { class: 'flow-step' }, h('strong', null, s.t), h('span', null, s.d))),
      ),
    );
  }
  const d = SVGS[name];
  if (!d) return h('p', { class: 'hint' }, `Diagram "${name}" is not available.`);
  const wrap = h('div', { class: 'diagram-scroll' });
  // Static markup defined above, never content from a lesson file.
  wrap.innerHTML = `<svg viewBox="${d.view}" role="img" aria-label="${d.title}" class="dg">${DEFS}${d.svg}</svg>`;
  return h('figure', { class: 'diagram' }, h('div', { class: 'diagram-title' }, d.title), wrap, h('figcaption', null, d.caption));
}

export const DIAGRAM_NAMES = ['grain-to-glass', ...Object.keys(SVGS)];
