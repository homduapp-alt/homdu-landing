#!/usr/bin/env node
// Generuje strony prawne homdu.pl (public/*.html) z plików .md.
//
// Źródłem treści są pliki .md w repozytorium homdu-studio (katalog docs/).
// Skrypt zachowuje szablon istniejącej strony (head, style, nagłówek, stopkę, skrypty)
// i podmienia tylko hero, spis treści i treść dokumentu. Kotwice #sec-N są zachowane.
//
// Użycie:
//   node scripts/legal-md-to-html.mjs                 # wszystkie dokumenty
//   node scripts/legal-md-to-html.mjs privacy-pl      # wybrany dokument
//   LEGAL_MD_DIR=/sciezka/do/docs node scripts/legal-md-to-html.mjs
//
// Skrypt odmawia pracy, jeżeli w .md jest ramka projektu albo znacznik
// [DO POTWIERDZENIA] / [TO CONFIRM]. Podgląd wersji roboczej jest możliwy tylko
// poza public/:  node scripts/legal-md-to-html.mjs privacy-pl --allow-draft --out-dir=/tmp/podglad

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MD_DIR = process.env.LEGAL_MD_DIR || path.resolve(ROOT, '..', 'homdu-studio', 'docs');

const L10N = {
  pl: {
    effective: 'Data wejścia w życie', updated: 'Data ostatniej aktualizacji', version: 'Wersja', replaces: 'Zastępuje',
    effectiveBadge: 'Data wejścia w życie:', updatedBadge: 'Ostatnia aktualizacja:',
    crumbsAria: 'Ścieżka', tocAria: 'Spis treści', tocTitle: 'Spis treści',
    tocMobile: n => `Spis treści — ${n} sekcji`,
    address: 'Adres', nip: 'NIP', email: 'E-mail',
    nipRe: /^NIP:\s*(.+)$/, emailRe: /^e-mail:\s*(.+)$/i,
    refRe: /(sekcj[a-ząę]{1,3}|pkt)(\s+)(\d+(?:\.\d+)?(?:(?:,\s*|\s+i\s+|\s+oraz\s+|–)\d+(?:\.\d+)?)*)(?!\.?\d)(?!\s+(?:Polityki|Regulaminu|Warunków))/g,
    previous: 'poprzednia wersja',
  },
  en: {
    effective: 'Effective date', updated: 'Last updated', version: 'Version', replaces: 'Replaces',
    effectiveBadge: 'Effective date:', updatedBadge: 'Last updated:',
    crumbsAria: 'Breadcrumb', tocAria: 'Table of contents', tocTitle: 'Contents',
    tocMobile: n => `Contents — ${n} sections`,
    address: 'Address', nip: 'Tax ID (NIP)', email: 'Email',
    nipRe: /^Tax ID \(NIP\):\s*(.+)$/, emailRe: /^email:\s*(.+)$/i,
    refRe: /([Ss]ections?|[Cc]lauses?)(\s+)(\d+(?:\.\d+)?(?:(?:,\s*|\s+and\s+|–)\d+(?:\.\d+)?)*)(?!\.?\d)(?!\s+of\s+the\s+(?:Privacy\s+Policy|Terms))/g,
    previous: 'previous version',
  },
};

const DOCS = {
  'privacy-pl': {
    md: 'polityka-prywatnosci-app-2.0.md', html: 'public/polityka-prywatnosci.html', lang: 'pl',
    crumb: 'Polityka Prywatności', h1: 'Polityka Prywatności aplikacji homdu.',
    card: { cls: 'admin-card', role: 'Administrator' },
    lastCard: { role: 'Kontakt w sprawach prywatności', cta: 'Napisz do nas', subject: 'homdu — zapytanie w sprawie prywatności' },
    archiveHref: 'polityka-prywatnosci-2026-06-22',
  },
  'privacy-en': {
    md: 'privacy-policy-app-2.0.md', html: 'public/privacy-policy.html', lang: 'en',
    crumb: 'Privacy Policy', h1: 'homdu app Privacy Policy.',
    card: { cls: 'admin-card', role: 'Controller' },
    lastCard: { role: 'Privacy contact', cta: 'Write to us', subject: 'homdu — privacy enquiry' },
    archiveHref: '/privacy-policy-2026-06-22',
  },
  'terms-pl': {
    md: 'warunki-korzystania-app-2.0.md', html: 'public/warunki-korzystania.html', lang: 'pl',
    crumb: 'Warunki korzystania', h1: 'Warunki korzystania z aplikacji homdu.',
    card: { cls: 'provider-card', role: 'Usługodawca' },
    archiveHref: 'warunki-korzystania-2026-06-22',
    autolinks: [[/Polityka Prywatności aplikacji homdu/, 'polityka-prywatnosci']],
  },
  'terms-en': {
    md: 'terms-of-use-app-2.0.md', html: 'public/terms-of-use.html', lang: 'en',
    crumb: 'Terms of Use', h1: 'Terms of use of the homdu app.',
    card: { cls: 'provider-card', role: 'Provider' },
    archiveHref: '/terms-of-use-2026-06-22',
    autolinks: [[/homdu app Privacy Policy/, '/privacy-policy']],
  },
};

const MARK_HERO = '<!-- ─────────── HERO ─────────── -->';
const MARK_BODY = '<!-- ─────────── BODY ─────────── -->';
const MARK_FOOT = '<!-- ─────────── FOOTER ─────────── -->';
const CSS_OPEN = '  /* ── v2.0: tabele danych i podsumowanie zmian (scripts/legal-md-to-html.mjs) ── */';
const CSS_CLOSE = '  /* ── /v2.0 ── */';

const CARD_CSS = sel => `
    ${sel}, ${sel} thead, ${sel} tbody, ${sel} tr, ${sel} td, ${sel} th { display: block; }
    ${sel} thead { display: none; }
    ${sel} { border: none; padding: 0; background: transparent; }
    ${sel} tbody tr {
      background: var(--doc-card);
      border: 1px solid var(--doc-rule);
      border-radius: var(--r-md);
      padding: 16px;
      margin-bottom: 12px;
      box-shadow: var(--shadow-sm);
    }
    ${sel} tbody td { padding: 0; border: none; margin-bottom: 12px; font-size: 14.5px; }
    ${sel} tbody td:last-child { margin-bottom: 0; }
    ${sel} tbody td::before {
      content: attr(data-label);
      display: block;
      font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
      text-transform: uppercase; color: var(--ink-3); margin-bottom: 3px;
    }
    ${sel} tbody tr:hover td { background: transparent; }`;

const EXTRA_CSS = `${CSS_OPEN}
  .data-table { table-layout: fixed; font-size: 13.5px; }
  .data-table thead th { padding: 12px; font-size: 11px; }
  .data-table tbody td { padding: 12px; overflow-wrap: break-word; }
  .data-table td.dt-main { color: var(--ink); }
  .data-table.cols-5 th:nth-child(1) { width: 30%; }
  .data-table.cols-5 th:nth-child(2) { width: 15%; }
  .data-table.cols-5 th:nth-child(3) { width: 16%; }
  .data-table.cols-5 th:nth-child(4) { width: 21%; }
  .data-table.cols-5 th:nth-child(5) { width: 18%; }
  .data-table.cols-3 th:nth-child(1) { width: 22%; }
  .data-table.cols-3 th:nth-child(2) { width: 38%; }
  .data-table.cols-2 th:nth-child(1) { width: 38%; }
  @media (max-width: 1180px) {${CARD_CSS('.data-table.cols-5')}
  }
  @media (max-width: 720px) {${CARD_CSS('.data-table')}
  }
  .doc-content code { font-size: 0.92em; padding: 1px 5px; border-radius: 4px; background: var(--doc-accent-tint); }
  .doc-changes ol { padding-left: 22px; }
  .doc-changes li { margin: 8px 0; }
  .doc-hero .lead.doc-version { font-size: 15px; color: var(--ink-3); margin-top: 14px; }
  .doc-hero .lead.doc-version a { color: var(--doc-accent); border-bottom: 1px solid var(--doc-accent-soft); }
${CSS_CLOSE}`;

const ICON_BUILDING = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21v-6h6v6"/><path d="M10 10h.01M14 10h.01M10 13h.01M14 13h.01"/></svg>';
const ICON_MAIL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const pad2 = n => String(n).padStart(2, '0');
const stripBold = s => s.replace(/\*\*/g, '');

// ── Rozbiór pliku .md ────────────────────────────────────────────────────────
function parseDoc(src, lang) {
  const t = L10N[lang];
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const doc = { title: '', meta: {}, intro: [], changes: null, sections: [] };
  let cur = null; // bieżący pojemnik wierszy
  for (const line of lines) {
    if (/^# /.test(line)) { doc.title = line.slice(2).trim(); continue; }
    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      const num = h2[1].match(/^(\d+)\.\s+(.+)$/);
      if (num) { cur = { n: +num[1], title: num[2].trim(), lines: [] }; doc.sections.push(cur); }
      else { cur = { n: 0, title: h2[1].trim(), lines: [] }; doc.changes = cur; }
      continue;
    }
    if (!cur && !doc.changes && !doc.sections.length) {
      const m = line.match(/^\*\*([^*]+):\*\*\s*(.+)$/);
      if (m && [t.version, t.effective, t.updated, t.replaces].includes(m[1])) { doc.meta[m[1]] = m[2].trim(); continue; }
    }
    if (/^---\s*$/.test(line)) { if (cur && cur.n === 0) cur = null; continue; }
    if (cur) cur.lines.push(line);
    else if (line.trim() && !/^> /.test(line)) doc.intro.push(line.trim());
    else if (/^> /.test(line)) doc.intro.push(line); // ramki obsługuje kontrola wersji roboczej
  }
  doc.intro = doc.intro.filter(l => !/^> /.test(l));
  return doc;
}

// ── Formatowanie w wierszu ───────────────────────────────────────────────────
function makeInline(cfg, ids) {
  const t = L10N[cfg.lang];
  const linkNum = num => {
    const id = 'sec-' + num.replace('.', '-');
    const top = 'sec-' + num.split('.')[0];
    const target = ids.has(id) ? id : ids.has(top) ? top : null;
    return target ? `<a href="#${target}">${num}</a>` : num;
  };
  return function inline(raw) {
    let s = esc(raw);
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g, '<a href="mailto:$1">$1</a>');
    s = s.replace(t.refRe, (m, word, sp, nums) => word + sp + nums.replace(/\d+(?:\.\d+)?/g, linkNum));
    for (const [re, href] of cfg.autolinks || []) s = s.replace(re, m => `<a href="${href}">${m}</a>`);
    return s;
  };
}

// ── Bloki treści ─────────────────────────────────────────────────────────────
function collectIds(doc) {
  const ids = new Set();
  if (doc.changes) ids.add('sec-0');
  for (const sec of doc.sections) {
    ids.add('sec-' + sec.n);
    for (const l of sec.lines) {
      const m = l.match(/^(?:### )?(\d+)\.(\d+)\.\s/);
      if (m) ids.add(`sec-${m[1]}-${m[2]}`);
    }
  }
  return ids;
}

function renderCard(block, cfg, state) {
  const t = L10N[cfg.lang];
  const name = stripBold(block[0]).trim();
  const addr = []; let nip = '', email = '';
  for (const l of block.slice(1)) {
    const plain = stripBold(l).trim();
    let m;
    if ((m = plain.match(t.nipRe))) nip = m[1];
    else if ((m = plain.match(t.emailRe))) email = m[1];
    else addr.push(plain);
  }
  const address = addr.join(', ');
  state.cards += 1;
  if (state.cards === 1) {
    const c = cfg.card.cls;
    return `      <div class="${c}">
        <div class="${c}__icon" aria-hidden="true">
          ${ICON_BUILDING}
        </div>
        <div class="${c}__body">
          <p class="${c}__role">${esc(cfg.card.role)}</p>
          <p class="${c}__name">${esc(name)}</p>
          <dl class="${c}__lines">
            <dt>${t.address}</dt><dd>${esc(address)}</dd>
            <dt>${t.nip}</dt><dd>${esc(nip)}</dd>
            <dt>${t.email}</dt><dd><a href="mailto:${esc(email)}">${esc(email)}</a></dd>
          </dl>
        </div>
      </div>`;
  }
  const lc = cfg.lastCard;
  return `      <div class="contact-card">
        <div class="contact-card__body">
          <p class="contact-card__role">${esc(lc.role)}</p>
          <h3>${esc(name)}</h3>
          <p>${esc(address)} · ${t.nip}: ${esc(nip)}</p>
          <p class="contact-card__addr">${t.email}: <a href="mailto:${esc(email)}" style="color:var(--doc-accent); border:none;"><strong>${esc(email)}</strong></a></p>
        </div>
        <a class="contact-card__cta" href="mailto:${esc(email)}?subject=${encodeURIComponent(lc.subject)}">
          ${ICON_MAIL}
          ${esc(lc.cta)}
        </a>
      </div>`;
}

function renderTable(rows, inline) {
  const cells = r => r.replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim());
  const head = cells(rows[0]);
  const body = rows.slice(2).map(cells);
  const n = head.length;
  for (const r of body) if (r.length !== n) throw new Error(`Tabela: wiersz ma ${r.length} komórek zamiast ${n}: ${r[0].slice(0, 60)}`);
  const legacy = n === 3 && /^(Lp\.|No\.)$/.test(head[0]);
  const out = ['      <div class="rodo-table-wrap">'];
  if (legacy) {
    out.push('        <table class="rodo-table">', '          <thead>',
      `            <tr><th style="width:60px;">${inline(head[0])}</th><th>${inline(head[1])}</th><th>${inline(head[2])}</th></tr>`,
      '          </thead>', '          <tbody>');
    for (const r of body) out.push(`            <tr><td class="lp">${inline(r[0])}</td><td class="cel">${inline(r[1])}</td><td class="podstawa">${inline(r[2])}</td></tr>`);
  } else {
    out.push(`        <table class="rodo-table data-table cols-${n}">`, '          <thead>',
      `            <tr>${head.map(h => `<th>${inline(h)}</th>`).join('')}</tr>`, '          </thead>', '          <tbody>');
    for (const r of body) {
      out.push('            <tr>' + r.map((c, i) =>
        `<td${i === 0 ? ' class="dt-main"' : ''} data-label="${esc(stripBold(head[i])).replace(/"/g, '&quot;')}">${inline(c)}</td>`).join('') + '</tr>');
    }
  }
  out.push('          </tbody>', '        </table>', '      </div>');
  return out.join('\n');
}

function renderBlocks(lines, cfg, inline, state) {
  const out = [];
  let para = [];
  const flush = () => {
    if (!para.length) return;
    const block = para; para = [];
    if (/^\*\*AppSoft Studio/.test(block[0]) && block.length > 1) { out.push(renderCard(block, cfg, state)); return; }
    if (block.length === 2 && /^\*\*[^*]+:\*\*$/.test(block[0])) {
      out.push(`      <div class="signature">\n        <strong>${esc(stripBold(block[0]))}</strong><br />\n        ${inline(block[1])}\n      </div>`);
      return;
    }
    const m = block[0].match(/^(\d+)\.(\d+)\.\s/);
    const id = m ? ` id="sec-${m[1]}-${m[2]}"` : '';
    out.push(`      <p${id}>${block.map(inline).join('<br />\n      ')}</p>`);
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) { flush(); continue; }
    const h3 = line.match(/^### (.+)$/);
    if (h3) {
      flush();
      const m = h3[1].match(/^(\d+)\.(\d+)\.\s/);
      out.push(`\n      <h3${m ? ` id="sec-${m[1]}-${m[2]}"` : ''}>${inline(h3[1])}</h3>`);
      continue;
    }
    if (/^\|/.test(line)) {
      flush();
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      i--;
      out.push(renderTable(rows, inline));
      continue;
    }
    if (/^- /.test(line)) {
      flush();
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) items.push(lines[i++].slice(2));
      i--;
      out.push('      <ul>\n' + items.map(it => `        <li>${inline(it)}</li>`).join('\n') + '\n      </ul>');
      continue;
    }
    if (/^\d+\. /.test(line)) {
      flush();
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) items.push(lines[i++].replace(/^\d+\. /, ''));
      i--;
      out.push('      <ol>\n' + items.map(it => `        <li>${inline(it)}</li>`).join('\n') + '\n      </ol>');
      continue;
    }
    if (/^\d+\.\d+\.\s/.test(line)) flush();
    para.push(line.trim());
  }
  flush();
  return out.join('\n');
}

// ── Składanie strony ─────────────────────────────────────────────────────────
function build(key, { allowDraft, outDir }) {
  const cfg = DOCS[key];
  const t = L10N[cfg.lang];
  const mdPath = path.join(MD_DIR, cfg.md);
  const htmlPath = path.join(ROOT, cfg.html);
  if (!fs.existsSync(mdPath)) throw new Error(`Brak pliku źródłowego: ${mdPath}`);
  const src = fs.readFileSync(mdPath, 'utf8');
  if (!allowDraft && /\[(DO POTWIERDZENIA|TO CONFIRM)|PROJEKT DO WERYFIKACJI|DRAFT FOR LEGAL REVIEW/.test(src)) {
    throw new Error(`${cfg.md}: wersja robocza (ramka projektu albo znacznik do potwierdzenia). Usuń je albo użyj --allow-draft.`);
  }
  const tpl = fs.readFileSync(htmlPath, 'utf8');
  const iHero = tpl.indexOf(MARK_HERO), iFoot = tpl.indexOf(MARK_FOOT);
  if (iHero < 0 || iFoot < 0 || tpl.indexOf(MARK_BODY) < 0) throw new Error(`${cfg.html}: brak znaczników szablonu (HERO / BODY / FOOTER)`);
  let head = tpl.slice(0, iHero);
  const tail = tpl.slice(iFoot);

  // dodatkowe style — idempotentnie
  const iOpen = head.indexOf(CSS_OPEN);
  if (iOpen >= 0) head = head.slice(0, iOpen) + head.slice(head.indexOf(CSS_CLOSE) + CSS_CLOSE.length + 1);
  const iStyleEnd = head.lastIndexOf('</style>');
  if (iStyleEnd < 0) throw new Error(`${cfg.html}: brak </style> w nagłówku`);
  head = head.slice(0, iStyleEnd) + EXTRA_CSS + '\n' + head.slice(iStyleEnd);

  const doc = parseDoc(src, cfg.lang);
  const ids = collectIds(doc);
  const inline = makeInline(cfg, ids);
  const state = { cards: 0 };
  const date = s => (s || '').replace(/\s*r\.$/, '');

  const versionLine = [
    doc.meta[t.version] ? `<strong>${t.version}:</strong> ${inline(doc.meta[t.version])}.` : '',
    doc.meta[t.replaces] ? `<strong>${t.replaces}:</strong> ${inline(doc.meta[t.replaces])} — <a href="${cfg.archiveHref}">${t.previous}</a>.` : '',
  ].filter(Boolean).join(' ');

  const hero = `${MARK_HERO}
<section class="doc-hero">
  <div class="doc-hero__inner">
    <nav class="crumbs" aria-label="${t.crumbsAria}">
      <a href="/">homdu.pl</a>
      <span class="sep">/</span>
      <span class="here">${esc(cfg.crumb)}</span>
    </nav>
    <h1>${esc(cfg.h1)}</h1>
    <div class="badges">
      <span class="doc-badge"><span class="dot"></span><span class="lbl">${t.effectiveBadge}</span> <span class="val">${esc(date(doc.meta[t.effective]))}</span></span>
      <span class="doc-badge"><span class="dot" style="background:#5A607F; box-shadow:0 0 0 3px rgba(90,96,127,0.18);"></span><span class="lbl">${t.updatedBadge}</span> <span class="val">${esc(date(doc.meta[t.updated]))}</span></span>
    </div>
${doc.intro.map((p, i) => `    <p class="lead"${i ? ' style="margin-top:14px;"' : ''}>\n      ${inline(p)}\n    </p>`).join('\n')}
${versionLine ? `    <p class="lead doc-version">\n      ${versionLine}\n    </p>` : ''}
  </div>
</section>
`;

  const tocItems = [
    ...(doc.changes ? [`      <li><a href="#sec-0"><span class="num">•</span><span>${esc(doc.changes.title)}</span></a></li>`] : []),
    ...doc.sections.map(s => `      <li><a href="#sec-${s.n}"><span class="num">${s.n}.</span><span>${esc(s.title)}</span></a></li>`),
  ].join('\n');

  const sections = [];
  if (doc.changes) {
    sections.push(`    <!-- ── zmiany ── -->
    <section class="doc-section doc-changes" id="sec-0">
      <h2>${esc(doc.changes.title)}</h2>
${renderBlocks(doc.changes.lines, cfg, inline, state)}
    </section>`);
  }
  for (const s of doc.sections) {
    sections.push(`    <!-- ── ${s.n} ── -->
    <section class="doc-section" id="sec-${s.n}">
      <h2><span class="secnum">${pad2(s.n)}</span>${inline(s.title)}</h2>
${renderBlocks(s.lines, cfg, inline, state)}
    </section>`);
  }

  const body = `${MARK_BODY}
<div class="doc-wrap">

  <!-- desktop TOC -->
  <aside class="toc" aria-label="${t.tocAria}">
    <p class="toc__title">${t.tocTitle}</p>
    <ul class="toc__list" id="toc-list">
${tocItems}
    </ul>
  </aside>

  <!-- mobile TOC -->
  <details class="toc-mobile">
    <summary>${t.tocMobile(doc.sections.length)}</summary>
    <ul class="toc__list">
${tocItems}
    </ul>
  </details>

  <main class="doc-content">

${sections.join('\n\n')}

  </main>
</div>

`;
  const html = head + hero + '\n' + body + tail;
  // --out-dir: podgląd poza public/ (np. wersji roboczej) — nie zmienia plików strony
  const outPath = outDir ? path.join(outDir, path.basename(cfg.html)) : htmlPath;
  if (outDir) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, html);
  return { key, cfg, doc, html, src };
}

// ── Kontrola wierności: każde słowo z .md musi być na stronie ─────────────────
function check({ key, cfg, doc, html }) {
  const words = s => (s.toLowerCase().match(/[\p{L}\p{N}]+/gu) || []);
  const textOf = h => h.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>|<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
  const page = html.slice(html.indexOf(MARK_HERO), html.indexOf(MARK_FOOT));
  const count = arr => arr.reduce((m, w) => m.set(w, (m.get(w) || 0) + 1), new Map());
  const t = L10N[cfg.lang];
  const date = s => (s || '').replace(/\s*r\.$/, '');
  const mdBody = [
    ...doc.intro,
    ...(doc.changes ? [doc.changes.title, ...doc.changes.lines] : []),
    ...doc.sections.flatMap(s => [s.title, ...s.lines]),
    doc.meta[t.version] || '', doc.meta[t.replaces] || '', date(doc.meta[t.effective]), date(doc.meta[t.updated]),
  ].filter(l => !/^\|[-| ]+\|\s*$/.test(l)).map(l => l.replace(/^\d+\. /, '')).join('\n');
  const a = count(words(mdBody)), b = count(words(textOf(page)));
  const missing = [];
  for (const [w, n] of a) if ((b.get(w) || 0) < n) missing.push(`${w}×${n - (b.get(w) || 0)}`);
  const anchors = [...html.matchAll(/<section class="doc-section[^"]*" id="(sec-\d+)"/g)].map(m => m[1]);
  const expected = [...(doc.changes ? ['sec-0'] : []), ...doc.sections.map(s => 'sec-' + s.n)];
  const dead = [...html.matchAll(/href="#(sec-[\d-]+)"/g)].map(m => m[1]).filter(id => !html.includes(`id="${id}"`));
  const okAnchors = JSON.stringify(anchors) === JSON.stringify(expected);
  console.log(`${key}: sekcji ${doc.sections.length}, tabel ${(html.match(/<table/g) || []).length}, słów w .md ${[...a.values()].reduce((x, y) => x + y, 0)}, brakujących na stronie: ${missing.length ? missing.slice(0, 20).join(' ') : 'brak'}; kotwice ${okAnchors ? 'zgodne' : 'NIEZGODNE'}; martwe odsyłacze: ${[...new Set(dead)].join(',') || 'brak'}`);
  return !missing.length && okAnchors && !dead.length;
}

const args = process.argv.slice(2);
const allowDraft = args.includes('--allow-draft');
const outArg = args.find(a => a.startsWith('--out-dir='));
const outDir = outArg ? path.resolve(outArg.slice('--out-dir='.length)) : null;
if (allowDraft && !outDir) { console.error('--allow-draft wymaga --out-dir=…: wersji roboczej nie zapisujemy do public/.'); process.exit(1); }
const keys = args.filter(a => !a.startsWith('--'));
let ok = true;
for (const key of keys.length ? keys : Object.keys(DOCS)) {
  if (!DOCS[key]) { console.error(`Nieznany dokument: ${key}. Dostępne: ${Object.keys(DOCS).join(', ')}`); process.exit(1); }
  try { ok = check(build(key, { allowDraft, outDir })) && ok; }
  catch (e) { console.error(`${key}: ${e.message}`); ok = false; }
}
process.exit(ok ? 0 : 1);
