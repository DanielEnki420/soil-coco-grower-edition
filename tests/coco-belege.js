#!/usr/bin/env node
// Belegpflicht fuer die Coco-/Erde-Duengerdaten (coco-brands.js)
//
// Hintergrund: Bis September 2026 gab es zwei Coco-Seiten mit eigenen Daten – die
// private auf dem Pi und die oeffentliche Soil & Coco Grower Edition. Sie liefen
// auseinander; in beiden standen Werte in falschen Einheiten (ml/L als ml/10 L),
// erfundene Produkte und vermischte Linien. Seit 25.9.2026 gibt es EINE Datei,
// erzeugt aus den Herstellerschemata (docs/hersteller-schemata/ im Grower-Repo).
//
// Dieser Test laeuft in beiden Repos:
//   Grower-Repo (Pi):  web/coco/coco-brands.js + web/coco/index.html (laedt die Datei)
//   Oeffentlich:       coco-brands.js + index.html (Daten eingebettet, ohne Hydro-Linien)
// Die Stichwerte stammen direkt aus den PDFs; wer eine Zahl aendert, liest dort nach.

const fs = require('fs'), path = require('path'), { spawnSync } = require('child_process');
const WURZEL = path.join(__dirname, '..');
const PI = fs.existsSync(path.join(WURZEL, 'web', 'coco', 'coco-brands.js'));
const DATEN = PI ? path.join(WURZEL, 'web', 'coco', 'coco-brands.js') : path.join(WURZEL, 'coco-brands.js');
const SEITE = PI ? path.join(WURZEL, 'web', 'coco', 'index.html') : path.join(WURZEL, 'index.html');
const N = require(DATEN);
const html = fs.readFileSync(SEITE, 'utf8');
const fehler = [];
const f = t => fehler.push(t);
const lauf = (skript, arg) => spawnSync(process.execPath, [path.join(WURZEL, skript)].concat(arg || []), { encoding: 'utf8' });

// ── 1. Aufbau jeder Marke ─────────────────────────────────────────────────────
const EINHEITEN = [undefined, 'ml', 'g', 'Tropfen'];
// Seit 25.9.2026 sind die sichtbaren Texte Objekte {de, en, it, es}.
const de = x => (x && typeof x === 'object') ? x.de : (x || '');
const alle = x => (x && typeof x === 'object') ? Object.values(x) : [x];
const vier = (x, wo) => {
  if (!x || typeof x !== 'object') { f(`${wo}: nicht in vier Sprachen`); return; }
  for (const l of ['de', 'en', 'it', 'es']) if (typeof x[l] !== 'string' || !x[l].trim()) f(`${wo}: Sprache ${l} fehlt`);
};
let zeilen = 0;
for (const [k, m] of Object.entries(N)) {
  if (!m.label) f(`${k}: label fehlt`);
  if (!['erde', 'coco', 'beide', 'hydro'].includes(m.substrat)) f(`${k}: substrat "${m.substrat}" unbekannt`);
  if (!/abgerufen \d+\.\d+\.\d{4}$/.test(de(m.quelle))) f(`${k}: quelle ohne Abrufdatum`);
  if (!/^Seit \d+\.\d+\.\d{4} nach /.test(de(m.planHinweis))) f(`${k}: planHinweis fehlt oder ist nicht datiert`);
  vier(m.quelle, `${k} quelle`); vier(m.planHinweis, `${k} planHinweis`);
  const w = m.wochen || {};
  if (!(w.grow >= 1 && w.bloom >= 1)) f(`${k}: wochen.grow/bloom fehlen`);
  if (w.spuelen && w.spuelen.woche !== w.bloom) f(`${k}: Spuelwoche ${w.spuelen.woche} ist nicht die letzte Bluetewoche (${w.bloom})`);
  if (w.spuelen) vier(w.spuelen.text, `${k} Spueltext`);
  if (w.nachWuchs && !['wiederholen', 'wasser'].includes(w.nachWuchs)) f(`${k}: nachWuchs "${w.nachWuchs}" unbekannt`);
  if (!m.addOrder || ['de', 'en', 'it', 'es'].some(l => !m.addOrder[l])) f(`${k}: Mischhinweis nicht in allen vier Sprachen`);
  for (const ph of ['grow', 'bloom']) {
    const max = ph === 'grow' ? w.grow : w.bloom;
    for (const p of m[ph] || []) {
      zeilen++;
      const wo = `${k}/${ph}/${p.product}`;
      if (!p.product) f(`${k}/${ph}: Produkt ohne Namen`);
      if (!Array.isArray(p.weeks) || !p.weeks.length) { f(`${wo}: keine Wochen`); continue; }
      p.weeks.forEach((x, i) => {
        if (!Number.isInteger(x) || x < 1 || x > max) f(`${wo}: Woche ${x} ausserhalb 1-${max}`);
        if (i && x <= p.weeks[i - 1]) f(`${wo}: Wochen nicht aufsteigend`);
      });
      if (p.fest !== undefined) {
        if (!p.fest || typeof p.fest !== 'object') f(`${wo}: fest ohne Text in vier Sprachen`); else vier(p.fest, `${wo} fest`);
        if (p.ml !== undefined) f(`${wo}: fest und ml zugleich`);
      } else if (!Array.isArray(p.ml) || p.ml.length !== p.weeks.length) f(`${wo}: ml passt nicht zu weeks`);
      else if (p.ml.some(v => typeof v !== 'number' || !(v > 0))) f(`${wo}: ml enthaelt 0 oder keine Zahl – Woche weglassen statt 0 eintragen`);
      if (!EINHEITEN.includes(p.einheit)) f(`${wo}: Einheit "${p.einheit}" unbekannt`);
      if (p.hinweis !== undefined) vier(p.hinweis, `${wo} hinweis`);
    }
  }
}

// ── 2. Produkte, die es nicht gibt oder die nicht in den Plan gehoeren ───────
const GESPERRT = {
  aptus: ['Basecanna', 'Bloombooster', 'Fasilitor', 'Super-PK'],
  'top-crop': ['Top Inoculator', 'Top Grow', 'Top Booster', 'Blaster', 'Soil A', 'Soil B', 'Micro Vita', 'Top Mass'],
  'top-crop-coco': ['Top Inoculator', 'Top Grow', 'Top Booster', 'Blaster', 'Micro Vita', 'Top Mass'],
  metrop: ['AMG', 'CalMag', 'Bloombooster', 'Enzymes'],
  greenhouse: ['Trycho', 'Bacto', 'Top Feeding', 'Powder Feeding', 'Booster PK'],
  'terra-aquatica': ['Pro Organic', 'BioRoots', 'BioSevia', 'Diamond Nectar'],
  'terra-aquatica-soil': ['Pro Organic', 'BioRoots', 'BioSevia', 'Diamond Nectar'],
  'hesi-coco': ['Bloom Complex'],
  remo: ['Astro Flav'],
  athena: ['Core', 'Balance', 'Stack'],
  bac: ['F1 Extreme', 'Lactic', 'Final Solution'],
  'dutch-pro': ['AutoFlower'], 'dutch-pro-coco': ['AutoFlower'],
  biotabs: ['PK Booster'],
  atami: ['ATA Terra', 'Bloombastic'], 'atami-coco': ['ATA Terra', 'Bloombastic'],
  shogun: ['Sumo Boost', 'A/B'], 'shogun-coco': ['Sumo Boost', 'A/B'],
};
for (const [k, namen] of Object.entries(GESPERRT)) {
  if (!N[k]) { f(`Marke ${k} fehlt`); continue; }
  for (const ph of ['grow', 'bloom']) for (const p of N[k][ph])
    for (const n of namen) if (p.product.toLowerCase().includes(n.toLowerCase())) f(`${k}: "${p.product}" gehoert nicht in den Plan`);
}
for (const k of ['cyco', 'cyco-coco']) if (N[k].bloom.some(p => p.product === 'XL')) f(`${k}: "XL" steht nicht im Cyco-Schema`);
// Reine Hydro-Linien zeigt nur die Pi-Seite (Daniels Entscheidung vom 25.9.2026)
for (const k of ['canna-aqua', 'plagron-hydro']) if (N[k] && N[k].substrat !== 'hydro') f(`${k}: reine Hydro-Linie muss substrat "hydro" tragen`);

// ── 3. Stichwerte aus den Herstellerschemata (pro 10 L) ──────────────────────
function wert(k, ph, name, woche) {
  const p = ((N[k] || {})[ph] || []).find(x => x.product === name && x.weeks.includes(woche) && !x.fest);
  if (!p) return 'fehlt in Woche ' + woche;
  return p.ml[p.weeks.indexOf(woche)];
}
const GOLD = [
  ['canna-coco', 'bloom', 'PK 13/14', 5, 15, 'CANNA Coco: 15 ml/10 L nur in Generativ II'],
  ['canna-terra', 'bloom', 'Terra Flores', 3, 50, 'CANNA Terra Generativ I: 50-70 ml/10 L'],
  ['plagron-coco', 'bloom', 'Cocos A', 3, 35, 'Plagron 100% Coco Woche 5: 35 ml'],
  ['plagron-soil', 'bloom', 'Alga Bloom', 4, 30, 'Plagron Natural Woche 6: 30 ml'],
  ['hesi-coco', 'bloom', 'PK 13/14', 7, 15, 'Hesi Coco: PK 15 ml/10 L in Bluete 7'],
  ['hesi', 'bloom', 'Phosphorus Plus', 5, 25, 'Hesi Soil: Phosphorus Plus 25 ml/10 L ab Bluete 4'],
  ['biobizz', 'bloom', 'Top·Max', 6, 40, 'Biobizz 2024: Top·Max 4 ml/L ab Bluete 6'],
  ['ghe', 'grow', 'FloraMicro', 4, 18, 'GH Medium: 6,8 ml/Gallone'],
  ['ghe', 'bloom', 'Ripen', 8, 13.2, 'GH Custom Medium: Ripen 5 ml/Gallone'],
  ['advanced', 'bloom', 'Sensi Bloom A', 1, 40, 'AN Top Shelf: 4 ml/L'],
  ['advanced', 'bloom', 'Big Bud', 5, 20, 'AN Top Shelf: Big Bud Woche 2-5'],
  ['metrop', 'bloom', 'MR2', 5, 10, 'Metrop: MR2 100 ml/100 L'],
  ['aptus', 'bloom', 'K-Boost', 8, 7, 'Aptus PREMIUM: K-Boost 0,7 ml/L in Bluete 8'],
  ['shogun', 'bloom', 'Dragon Force', 8, 40, 'Shogun LED: Dragon Force 4 ml/L in Woche 8'],
  ['shogun-coco', 'grow', 'Samurai Coco A', 3, 30, 'Shogun LED Samurai Coco: 3 ml/L in Wuchs 3'],
  ['atami', 'bloom', 'B’cuzz Soil A', 2, 40, 'Atami B’cuzz Soil F2: 4-5 ml/L'],
  ['atami-coco', 'bloom', 'B’cuzz Coco A', 2, 24, 'Atami B’cuzz Coco F2: 2,4-3,4 ml/L'],
  ['dutch-pro', 'bloom', 'Explode', 3, 5, 'Dutch Pro Soil: Explode 0,5 ml/L ab B3'],
  ['dutch-pro-coco', 'bloom', 'Bloom Hydro/Coco A', 1, 25, 'Dutch Pro Hydro/Coco: A 2,5-3,5 ml/L'],
  ['bac', 'bloom', 'Organic PK Booster', 5, 30, 'BAC Organic: PK Booster 30-40 ml/10 L'],
  ['top-crop', 'grow', 'Top Veg', 3, 20, 'Top Crop Erde: Top Veg 2-4 ml/L'],
  ['top-crop', 'bloom', 'Top Candy', 3, 10, 'Top Crop Erde: Top Candy ab Woche 8 des Schemas'],
  ['top-crop-coco', 'bloom', 'Top Coco A', 1, 20, 'Top Crop Coco: Top Coco A 2 ml/L ab Woche 4'],
  ['terra-aquatica', 'bloom', 'TriPart Bloom', 3, 24, 'TriPart Hydro/Coco Flowering: 2,4 ml/L'],
  ['terra-aquatica-soil', 'bloom', 'TriPart Bloom', 3, 21, 'TriPart Soil Flowering: 2,1 ml/L'],
  ['cyco-coco', 'bloom', 'Silica', 5, 20, 'Cyco Advanced: Silica 2 ml/L ab Bluete 5'],
  ['cyco', 'bloom', 'Supa Stiky', 5, 20, 'Cyco Soil: Supa Stiky 2 ml/L'],
  ['greenhouse', 'grow', 'BioEnhancer', 1, 5, 'Green House: BioEnhancer 0,5 g/L'],
  ['biotabs', 'bloom', 'Orgatrex', 3, 200, 'BioTabs: 20 ml Orgatrex pro Liter in Bluete 3'],
  ['house-garden', 'bloom', 'Soil A', 4, 47.6, 'H&G 8 Week Chart 2025: Soil 18 ml/Gallone'],
  ['house-garden-coco', 'bloom', 'Cocos A', 4, 25.1, 'H&G 8 Week Chart 2025: Cocos 9,5 ml/Gallone'],
  ['mills', 'bloom', 'Basis A', 4, 40, 'Mills Regular, Leitungswasser: 4 ml/L'],
];
for (const [k, ph, name, woche, soll, beleg] of GOLD) {
  const ist = wert(k, ph, name, woche);
  if (ist !== soll) f(`Stichwert ${k}/${ph}/${name} Woche ${woche}: ${ist} statt ${soll} (${beleg})`);
}
if (N['canna-coco'].bloom.find(p => p.product === 'PK 13/14').weeks.join() !== '5') f('canna-coco: PK 13/14 nur in einer Woche');
for (const k of ['hesi', 'hesi-coco']) if (N[k].bloom.find(p => p.product === 'Boost').weeks.includes(3)) f(`${k}: Boost laut Hesi erst ab Bluete 4 (nicht 3)`);
if (!N.metrop.grow.some(p => p.product === 'MR1') || N.metrop.grow.some(p => p.product === 'MR2')) f('metrop: im Wuchs gehoert MR1, nicht MR2');

// ── 4. Grower-Repo: Datei passt zur Quelle, DWC-Marken passen zum DWC-Rechner ──
if (PI) {
  const r = lauf('tools/coco-marken-bauen.js', ['--pruefen']);
  if (r.status !== 0) f((r.stderr || r.stdout || 'coco-marken-bauen.js --pruefen fehlgeschlagen').trim());
  const src = fs.readFileSync(path.join(WURZEL, 'web', 'dwc', 'brands.js'), 'utf8');
  const M = new Function('window', 'document', src + '\n;return MARKEN;')({}, undefined);
  const R = v => v < 1 ? Math.round(v * 100) / 100 : Math.round(v * 10) / 10;
  for (const [k, dk] of [['canna-aqua', 'canna'], ['plagron-hydro', 'plagron'], ['remo', 'remo'], ['athena', 'athenaBlended']]) {
    const d = M[dk];
    for (const [dph, ph] of [['wuchs', 'grow'], ['bluete', 'bloom']]) {
      const soll = Object.entries(d.dosis[dph] || {})
        .filter(([pk]) => !['eingestellt', 'ungeeignet'].includes((d.produkte[pk].quelle || {}).status))
        .map(([pk, w]) => d.produkte[pk].name + ':' + Object.keys(w).map(Number).sort((x, y) => x - y).map(x => x + '=' + R(w[x] * 10)).join(','));
      const ist = N[k][ph].map(p => p.product + ':' + p.weeks.map((x, i) => x + '=' + p.ml[i]).join(','));
      if (soll.sort().join('|') !== ist.sort().join('|')) f(`${k}/${ph}: weicht vom DWC-Rechner (${dk}) ab`);
    }
  }
  if (!html.includes('<script src="coco-brands.js"></script>')) f('Pi-Seite bindet coco-brands.js nicht ein');
} else {
  const r = lauf('tools/coco-marken-einbetten.js', ['--pruefen']);
  if (r.status !== 0) f((r.stderr || r.stdout || 'coco-marken-einbetten.js --pruefen fehlgeschlagen').trim());
  const a = html.indexOf('const COCO_MARKEN = '), b = html.indexOf('\n// ▲▲▲ Ende coco-brands.js', a);
  const E = a < 0 || b < 0 ? {} : JSON.parse(html.slice(a + 'const COCO_MARKEN = '.length, b).replace(/;\s*$/, ''));
  if (Object.values(E).some(m => m.substrat === 'hydro')) f('oeffentliche Seite zeigt Hydro-Linien');
  const erwartet = Object.keys(N).filter(k => N[k].substrat !== 'hydro');
  if (Object.keys(E).join() !== erwartet.join()) f('oeffentliche Seite traegt nicht alle Erd-/Coco-Marken aus coco-brands.js');
}
if (!html.includes('const nutrients = COCO_MARKEN;') || html.includes('const nutrients = {')) f('Seite nutzt nicht die gemeinsamen Daten (const nutrients = COCO_MARKEN)');
if (!html.includes('function markenAuswahlFuellen()')) f('Markenauswahl wird nicht aus den Daten gefuellt');

// ── 5. Renderer: eine 0 darf nicht durch den letzten Wert ersetzt werden ────
const g0 = html.indexOf('function getMlForWeek'), g1 = html.indexOf('\n}\n', g0) + 2;
const getMl = new Function(html.slice(g0, g1) + '\nreturn getMlForWeek;')();
if (getMl({ weeks: [1, 2], ml: [0, 5] }, 1) !== 0) f('getMlForWeek ersetzt eine 0 durch den letzten Wert');
if (getMl({ weeks: [1, 2], ml: [3, 5] }, 2) !== 5 || getMl({ weeks: [1], ml: [3] }, 2) !== 0) f('getMlForWeek liefert falsche Werte');

// ── 6. Uebersetzungen der Tabellentexte ─────────────────────────────────────
const i0 = html.indexOf('const i18n = {'), i1 = html.indexOf('\n};', i0);
const I = new Function('return ' + html.slice(i0 + 'const i18n = '.length, i1 + 2))();
const SCHLUESSEL = ['col_product', 'col_per10', 'col_for', 'total', 'unit_drops', 'only_water', 'after_grow', 'after_grow_water', 'after_bloom', 'flush_week', 'source', 'flush_text'];
for (const l of ['de', 'en', 'it', 'es']) for (const s of SCHLUESSEL) if (!(I[l] || {})[s]) f(`i18n.${l}.${s} fehlt`);

// ── 7. Sichtbare Texte ohne ae/oe/ue-Ersatz ──────────────────────────────────
const ERSATZ = /(?<![A-Za-zÄÖÜäöüß])(fuer|ueber|Bluete\w*|Duenger\w*|spuel\w*|Staerke|haelt|naehr\w*|waehrend|koenn\w*|muess\w*|pruef\w*|zusaetz\w*|Toepf\w*|Giess\w*|groesser|Groesse|hoechst\w*|Haerte|haerte\w*|schliesst|heisst)(?![A-Za-zÄÖÜäöüß])/;
for (const [k, m] of Object.entries(N)) {
  const texte = [m.label, ...alle(m.planHinweis), ...alle(m.quelle), ...alle((m.wochen.spuelen || {}).text), ...Object.values(m.addOrder || {})];
  for (const ph of ['grow', 'bloom']) for (const p of m[ph]) texte.push(p.product, ...alle(p.hinweis), ...alle(p.fest));
  for (const t of texte.filter(Boolean)) { const x = ERSATZ.exec(t); if (x) f(`${k}: sichtbarer Text mit "${x[0]}" statt Umlaut`); }
}

console.log(`Coco-Daten (${PI ? 'Grower-Repo' : 'oeffentliche Edition'}) — ${Object.keys(N).length} Marken, ${zeilen} Produktzeilen, ${GOLD.length} Stichwerte`);
if (fehler.length) { console.error('\nFEHLER:\n  ' + fehler.join('\n  ')); process.exit(1); }
console.log('OK — alle Plaene nach Herstellerschema, Stichwerte und Seiten stimmen.');
