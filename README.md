# 🌱 Soil & Coco Grower Edition v1.0

**Ein kostenloses, offline-fähiges Dashboard für Substrat-Grower (Erde & Coco)**

👉 **Live:** https://danielenki420.github.io/soil-coco-grower-edition/

---

## Features

- 🥥🌍 **Substrat-Auswahl**: Coco / Erde / Coco+Erde Mix — passt alle Zielwerte automatisch an
- 🌡️ **pH, EC, Temperatur** Monitoring mit substrat-spezifischen Zielwerten
- 🔁 **Runoff-Tracking** — Abfluss pH/EC messen und auswerten (Salz-Akkumulation erkennen)
- 💧 **Gieß-Erinnerung** — mit Nährstoff-Rhythmus (jedes 2./3. Mal oder täglich für Coco)
- 🧪 **Nährstoff-Rechner** für 8 Marken:
  - 🌿 Hesi Soil · 🍃 Biobizz · 🌺 Canna Terra · 🥥 Canna Coco
  - 🌱 Plagron Soil · 🌱 Plagron Coco · 🧪 GHE Flora · ⚡ Advanced Nutrients
- 📈 **Verlaufs-Chart** (Chart.js) für pH, EC, Temperatur
- 📝 **Grow Diary** — Einträge mit lokalem Speicher (localStorage)
- 🤖 **KI-Assistent** via Gemini API (kostenloser Key auf aistudio.google.com)
- 🌍 **Mehrsprachig**: Deutsch, English, Italiano, Español
- 💾 **100% offline** — kein Server, kein Login, keine Cloud

---

## pH-Zielwerte nach Substrat

| Substrat | pH-Ziel | EC Grow | EC Bloom |
|----------|---------|---------|----------|
| 🌍 Erde | 6.0 – 7.0 | 1.0 – 1.6 | 1.2 – 1.8 |
| 🥥 Coco | 5.8 – 6.3 | 1.2 – 2.0 | 1.4 – 2.2 |
| 🌍🥥 Mix | 6.0 – 6.5 | 1.0 – 1.8 | 1.2 – 2.0 |

---

## Runoff — warum wichtig?

Bei Erde und Coco akkumulieren sich Salze im Substrat. Regelmäßiges Messen des Abfluss-EC zeigt:
- **Runoff EC >> Input EC**: Flush nötig!
- **Runoff pH zu niedrig**: Substrat versäuert
- **Runoff pH zu hoch**: Zu basisch, Nährstoffaufnahme blockiert

---

## Installation / Nutzung

Einfach `index.html` im Browser öffnen — fertig. Keine Dependencies, kein Build-Schritt.

```bash
git clone https://github.com/DanielEnki420/soil-coco-grower-edition
cd soil-coco-grower-edition
# index.html im Browser öffnen
```

---

## Verwandt

- 🔵 **DWC Grower Edition** (Hydroponik): https://danielenki420.github.io/dwc-grower-edition/

---

## Lizenz

MIT — Freie Software. Fork it, share it, grow it. 🌱

Made with ☕ by DanielEnki420
