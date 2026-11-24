// Tiny DOM toolkit: element builder and Markdown-AST rendering.
// Content never goes through innerHTML; every string becomes a text node.

import { parseMarkdown, parseInline } from '../engine/markdown.js';

/**
 * h('div', {class: 'x', onclick: fn, 'aria-label': 'y'}, child, [children], 'text')
 * Attributes: class, style (object or string), dataset (object), on* handlers,
 * boolean attributes (true/false), everything else via setAttribute.
 */
export function h(tag, attrs, ...children) {
  const el = tag.startsWith('svg:')
    ? document.createElementNS('http://www.w3.org/2000/svg', tag.slice(4))
    : document.createElement(tag);
  if (attrs && (typeof attrs !== 'object' || attrs instanceof Node || Array.isArray(attrs))) {
    children.unshift(attrs);
    attrs = null;
  }
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.setAttribute('class', Array.isArray(v) ? v.filter(Boolean).join(' ') : v);
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k === 'dataset') Object.assign(el.dataset, v);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'value' && 'value' in el) el.value = v;
      else if (k === 'checked' && 'checked' in el) el.checked = !!v;
      else el.setAttribute(k, v === true ? '' : String(v));
    }
  }
  append(el, children);
  return el;
}

function append(el, children) {
  for (const c of children) {
    if (c == null || c === false || c === true) continue;
    if (Array.isArray(c)) append(el, c);
    else if (c instanceof Node) el.appendChild(c);
    else el.appendChild(document.createTextNode(String(c)));
  }
}

export function clear(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
  return el;
}

function inlineNodes(nodes) {
  return nodes.map((n) => {
    switch (n.t) {
      case 'text':
        return document.createTextNode(n.v);
      case 'strong':
        return h('strong', null, inlineNodes(n.c));
      case 'em':
        return h('em', null, inlineNodes(n.c));
      case 'code':
        return h('code', null, n.v);
      case 'sup':
        return h('sup', null, n.v);
      case 'br':
        return h('br');
      case 'a':
        return h('a', { href: n.href, target: '_blank', rel: 'noopener noreferrer' }, inlineNodes(n.c));
      default:
        return document.createTextNode('');
    }
  });
}

/** Inline markdown (no paragraphs) as a fragment. */
export function md1(text) {
  const frag = document.createDocumentFragment();
  append(frag, inlineNodes(parseInline(text)));
  return frag;
}

/** Block markdown as a fragment. */
export function md(text) {
  const frag = document.createDocumentFragment();
  for (const b of parseMarkdown(text)) {
    switch (b.t) {
      case 'p':
        frag.appendChild(h('p', null, inlineNodes(b.c)));
        break;
      case 'h3':
        frag.appendChild(h('h3', null, inlineNodes(b.c)));
        break;
      case 'h4':
        frag.appendChild(h('h4', null, inlineNodes(b.c)));
        break;
      case 'quote':
        frag.appendChild(h('blockquote', null, inlineNodes(b.c)));
        break;
      case 'ul':
        frag.appendChild(h('ul', null, b.items.map((it) => h('li', null, inlineNodes(it)))));
        break;
      case 'ol':
        frag.appendChild(h('ol', b.start !== 1 ? { start: b.start } : null, b.items.map((it) => h('li', null, inlineNodes(it)))));
        break;
    }
  }
  return frag;
}

export function button(label, onClick, { kind = 'primary', type = 'button', ...rest } = {}) {
  return h('button', { type, class: `btn btn-${kind}`, onclick: onClick, ...rest }, label);
}

export function link(label, hash, { kind = 'primary', ...rest } = {}) {
  return h('a', { href: `#${hash}`, class: `btn btn-${kind}`, ...rest }, label);
}

/** A labeled amber "fill gauge" — progress shown as liquid in a glass. */
export function gauge(percent, label) {
  const p = Math.max(0, Math.min(100, Math.round(percent)));
  return h(
    'div',
    { class: 'gauge', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(p), 'aria-label': label || 'Progress' },
    h('div', { class: 'gauge-fill', style: { width: `${p}%` } }),
  );
}

export function formatDate(ms) {
  if (!ms) return '';
  try {
    return new Date(ms).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return new Date(ms).toISOString().slice(0, 10);
  }
}

export function formatDuration(seconds) {
  const s = Math.max(0, Math.round(seconds));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
}

export function fmt(n, digits = 1) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: 0 });
}

/** Two-step confirmation inside the page (dialogs are unavailable in Artifacts). */
export function confirmButton(label, confirmLabel, onConfirm, { kind = 'danger' } = {}) {
  const wrap = h('span', { class: 'confirm-wrap' });
  const first = button(label, () => {
    clear(wrap);
    const yes = button(confirmLabel, () => onConfirm(), { kind });
    const no = button('Cancel', () => {
      clear(wrap);
      wrap.appendChild(first);
      first.focus();
    }, { kind: 'ghost' });
    wrap.append(yes, no);
    yes.focus();
  }, { kind: kind === 'danger' ? 'ghost-danger' : 'secondary' });
  wrap.appendChild(first);
  return wrap;
}
