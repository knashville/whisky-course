// A deliberately small Markdown subset, parsed to a plain AST so it can be
// tested in Node and rendered to DOM nodes without ever using innerHTML.
//
// Blocks:  paragraphs (blank-line separated), "### heading", "#### heading",
//          "- item" / "* item" bullets, "1. item" numbered lists, "> quote".
// Inline:  **bold**, *italic*, `code`, [text](https://link), \escape,
//          ^superscript^ (for units like m^3^), and hard line breaks via "  \n".

export function parseInline(src) {
  const s = String(src ?? '');
  const out = [];
  let buf = '';
  const flush = () => {
    if (buf) out.push({ t: 'text', v: buf });
    buf = '';
  };
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === '\\' && i + 1 < s.length && /[\\`*_[\]()^#>-]/.test(s[i + 1])) {
      buf += s[i + 1];
      i += 2;
      continue;
    }
    if (ch === '`') {
      const j = s.indexOf('`', i + 1);
      if (j > i + 1) {
        flush();
        out.push({ t: 'code', v: s.slice(i + 1, j) });
        i = j + 1;
        continue;
      }
    }
    if (ch === '*' && s[i + 1] === '*') {
      const j = s.indexOf('**', i + 2);
      if (j > i + 2) {
        flush();
        out.push({ t: 'strong', c: parseInline(s.slice(i + 2, j)) });
        i = j + 2;
        continue;
      }
    }
    if (ch === '*' && s[i + 1] && s[i + 1] !== ' ' && s[i + 1] !== '*') {
      // closing * must follow a non-space and not be part of **
      let j = i + 1;
      while ((j = s.indexOf('*', j)) !== -1) {
        if (s[j - 1] !== ' ' && s[j + 1] !== '*') break;
        j++;
      }
      if (j !== -1 && j > i + 1) {
        flush();
        out.push({ t: 'em', c: parseInline(s.slice(i + 1, j)) });
        i = j + 1;
        continue;
      }
    }
    if (ch === '^') {
      const m = /^\^([^\s^]{1,12})\^/.exec(s.slice(i));
      if (m) {
        flush();
        out.push({ t: 'sup', v: m[1] });
        i += m[0].length;
        continue;
      }
    }
    if (ch === '[') {
      const m = /^\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/.exec(s.slice(i));
      if (m) {
        flush();
        out.push({ t: 'a', href: m[2], c: parseInline(m[1]) });
        i += m[0].length;
        continue;
      }
    }
    if (ch === ' ' && s[i + 1] === ' ' && s[i + 2] === '\n') {
      flush();
      out.push({ t: 'br' });
      i += 3;
      continue;
    }
    buf += ch === '\n' ? ' ' : ch;
    i++;
  }
  flush();
  return out;
}

export function parseMarkdown(src) {
  const lines = String(src ?? '').replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];
  let para = [];
  let list = null;
  let quote = [];

  const endPara = () => {
    if (para.length) blocks.push({ t: 'p', c: parseInline(para.join('\n')) });
    para = [];
  };
  const endList = () => {
    if (list) blocks.push(list);
    list = null;
  };
  const endQuote = () => {
    if (quote.length) blocks.push({ t: 'quote', c: parseInline(quote.join(' ')) });
    quote = [];
  };
  const endAll = () => {
    endPara();
    endList();
    endQuote();
  };

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, (m) => (m.startsWith('  ') ? '  ' : ''));
    const trimmed = line.trim();
    if (!trimmed) {
      endAll();
      continue;
    }
    let m;
    if ((m = /^(#{3,4})\s+(.*)$/.exec(trimmed))) {
      endAll();
      blocks.push({ t: m[1].length === 3 ? 'h3' : 'h4', c: parseInline(m[2]) });
      continue;
    }
    if ((m = /^[-*]\s+(.*)$/.exec(trimmed))) {
      endPara();
      endQuote();
      if (!list || list.t !== 'ul') {
        endList();
        list = { t: 'ul', items: [] };
      }
      list.items.push(parseInline(m[1]));
      continue;
    }
    if ((m = /^(\d+)[.)]\s+(.*)$/.exec(trimmed))) {
      endPara();
      endQuote();
      if (!list || list.t !== 'ol') {
        endList();
        list = { t: 'ol', start: parseInt(m[1], 10), items: [] };
      }
      list.items.push(parseInline(m[2]));
      continue;
    }
    if ((m = /^>\s?(.*)$/.exec(trimmed))) {
      endPara();
      endList();
      quote.push(m[1]);
      continue;
    }
    if (list) {
      // continuation line of the previous list item
      const last = list.items[list.items.length - 1];
      list.items[list.items.length - 1] = [...last, { t: 'text', v: ' ' }, ...parseInline(trimmed)];
      continue;
    }
    endQuote();
    para.push(line);
  }
  endAll();
  return blocks;
}

/** Plain text of inline nodes (for search, aria labels and glossary sorting). */
export function inlineText(nodes) {
  return nodes
    .map((n) => {
      if (n.t === 'text' || n.t === 'code' || n.t === 'sup') return n.v;
      if (n.t === 'br') return ' ';
      return inlineText(n.c || []);
    })
    .join('');
}

export function plainText(md) {
  return parseMarkdown(md)
    .map((b) => (b.items ? b.items.map(inlineText).join(' ') : inlineText(b.c)))
    .join(' ');
}
