# 🌱 Soil & Coco Grower Edition

**A free, offline-capable grow dashboard for soil and coco growers.**  
Track pH, EC and temperature, calculate nutrients for 25 brands, and keep a grow diary — all in a single HTML file, no installation needed.

👉 **Live Demo:** https://danielenki420.github.io/soil-coco-grower-edition/

---

## Features

- 🥥🌍 **Substrate selector** — Coco / Soil / Coco+Soil Mix, auto-adjusts all target values
- 🌡️ **pH, EC & Temperature monitoring** with substrate-specific target ranges
- 🔁 **Runoff tracking** — measure drain pH/EC to detect salt accumulation
- 💧 **Watering reminder** — configurable nutrient interval (every 1st, 2nd or 3rd watering)
- 🧪 **Nutrient calculator** for **25 brands** with week-by-week dosing schedules:
  - 🌿 Hesi · 💧 Canna Aqua · 🌺 Canna Terra · 🥥 Canna Coco
  - 🌊 Plagron Hydro · 🌱 Plagron Soil · 🌱 Plagron Coco
  - 🧪 GHE Flora Series · 🧪 Terra Aquatica (ex-GHE)
  - ⚡ Advanced Nutrients · 🩵 Athena Nutrients
  - 🍃 Biobizz · 🟫 BioTabs · 💎 Aptus Plant Tech
  - ⚙️ Mills Nutrients · 🍁 Remo Nutrients · 🔵 Cyco Nutrients
  - 🏡 House & Garden · 🌺 Atami B'Cuzz · 🔵 Dutch Pro
  - 🟡 Shogun Fertilisers · 🌿 BAC Fertilizers · 🟠 Metrop
  - 🇪🇸 Top Crop · 🏠 Green House Feeding
- 📈 **History charts** (Chart.js) for pH, EC and temperature
- 📝 **Grow diary** with persistent local storage
- 🤖 **AI assistant** via Gemini API (free key at aistudio.google.com)
- 🌍 **4 languages**: Deutsch · English · Italiano · Español
- 💾 **100% offline** — no server, no login, no cloud

---

## pH & EC Target Values by Substrate

| Substrate | pH Target | EC Grow | EC Bloom |
|-----------|-----------|---------|----------|
| 🌍 Soil   | 6.0 – 7.0 | 1.0 – 1.6 mS/cm | 1.2 – 1.8 mS/cm |
| 🥥 Coco   | 5.8 – 6.3 | 1.2 – 2.0 mS/cm | 1.4 – 2.2 mS/cm |
| 🌍🥥 Mix  | 6.0 – 6.5 | 1.0 – 1.8 mS/cm | 1.2 – 2.0 mS/cm |

---

## Runoff Monitoring — Why It Matters

Salt accumulates in soil and coco over time. Measuring runoff pH/EC reveals:
- **Runoff EC >> Input EC** → flush needed
- **Runoff pH too low** → substrate acidifying
- **Runoff pH too high** → nutrient lockout risk

---

## Usage

Just open `index.html` in any browser — no dependencies, no build step.

```bash
git clone https://github.com/DanielEnki420/soil-coco-grower-edition
cd soil-coco-grower-edition
# open index.html in your browser
```

---

## Related Projects

- 🔵 **DWC Grower Edition** (hydroponics): https://danielenki420.github.io/dwc-grower-edition/

---

## License

MIT — Free software. Fork it, share it, grow it. 🌱

Made with ☕ by [DanielEnki420](https://github.com/DanielEnki420)
