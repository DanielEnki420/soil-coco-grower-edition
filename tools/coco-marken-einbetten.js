#!/usr/bin/env node
// Bettet coco-brands.js in index.html ein – die Seite bleibt eine einzelne Datei.
// coco-brands.js kommt unveraendert aus dem privaten Grower-Repo (dort erzeugt aus den
// Herstellerschemata). Hydro-Linien (substrat "hydro") zeigt nur die Pi-Seite, hier nicht.
// Aufruf: node tools/coco-marken-einbetten.js [--pruefen]
'use strict';
const fs = require('fs'), path = require('path');
const WURZEL = path.join(__dirname, '..');
const DATEN = require(path.join(WURZEL, 'coco-brands.js'));
const SEITE = path.join(WURZEL, 'index.html');
const START = '// ▼▼▼ coco-brands.js – eingebettet von tools/coco-marken-einbetten.js, NICHT hier bearbeiten ▼▼▼\n';
const ENDE = '// ▲▲▲ Ende coco-brands.js ▲▲▲';

const OEFFENTLICH = Object.fromEntries(Object.entries(DATEN).filter(([, m]) => m.substrat !== 'hydro'));
const text = JSON.stringify(OEFFENTLICH, null, 2)
  .replace(/\[\s*([^\[\]{}]*?)\s*\]/g, (m, x) => '[' + x.replace(/\s*\n\s*/g, ' ') + ']')
  .replace(/\{\s*("product"[^{}]*?)\s*\}/g, (m, x) => '{ ' + x.replace(/\s*\n\s*/g, ' ') + ' }');
const block = START + 'const COCO_MARKEN = ' + text + ';\n' + ENDE;

const s = fs.readFileSync(SEITE, 'utf8');
const a = s.indexOf(START), b = s.indexOf(ENDE);
if (a < 0 || b < a) { console.error('Einbett-Marken in index.html fehlen'); process.exit(1); }
const neu = s.slice(0, a) + block + s.slice(b + ENDE.length);
if (process.argv.includes('--pruefen')) {
  if (neu !== s) { console.error('index.html traegt NICHT den Stand von coco-brands.js – node tools/coco-marken-einbetten.js ausfuehren'); process.exit(1); }
  console.log('index.html ist aktuell (' + Object.keys(OEFFENTLICH).length + ' Marken)');
} else {
  fs.writeFileSync(SEITE, neu);
  console.log('eingebettet: ' + Object.keys(OEFFENTLICH).length + ' Marken (ohne Hydro-Linien)');
}
