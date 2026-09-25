// Soil & Coco Grower Edition – Duengerdaten. EINZIGE Quelle fuer die Pi-Seite (web/coco/)
// und die oeffentliche Edition (soil-coco-grower-edition, dort eingebettet).
// ERZEUGT von tools/coco-marken-bauen.js aus tools/coco-marken-quelle.js – nicht von Hand
// bearbeiten. Werte pro 10 L Wasser; einheit: ml (Standard), g oder Tropfen; "fest" = Angabe
// pro Substrat, Topf oder Blattspray. substrat: erde | coco | beide | hydro (hydro nur Pi).
// Belege: docs/hersteller-schemata/. Pruefung: node tests/coco-belege.js
const COCO_MARKEN = {
  "hesi": {
    "label": "🌿 Hesi Soil",
    "name": "Hesi Soil",
    "substrat": "erde",
    "quelle": "Hesi SOIL Grow Schedule 2022 (hesi.nl, „EN Aarde 2022 klein.pdf“), abgerufen 25.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Hesi-Erdschema 2022: 2 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Stecklinge vorher mit 25 ml TNT Complex pro 10 L. Phosphorus Plus und die zweite Boost-Phase ab Blütewoche 4. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 8 laut Hesi: mit klarem Wasser spülen."
      }
    },
    "grow": [
      { "product": "TNT Complex", "weeks": [1, 2], "ml": [50, 50] },
      { "product": "Root Complex", "weeks": [1, 2], "ml": [50, 50], "hinweis": "zum Start 1–2× pro Woche, später nur bei Stress" },
      { "product": "Power Zyme", "weeks": [1, 2], "ml": [20, 20], "hinweis": "1–2× pro Woche mit den Düngern" },
      { "product": "SuperVit", "weeks": [1, 2], "ml": [2.2, 2.2], "einheit": "Tropfen", "hinweis": "1 Tropfen pro 4,5 L" }
    ],
    "bloom": [
      { "product": "Bloom Complex", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [50, 50, 50, 50, 50, 50, 50] },
      { "product": "Phosphorus Plus", "weeks": [4, 5, 6, 7], "ml": [25, 25, 25, 25] },
      { "product": "Boost", "weeks": [1, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20] },
      { "product": "Power Zyme", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20, 20, 20], "hinweis": "1–2× pro Woche mit den Düngern" },
      { "product": "SuperVit", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2], "einheit": "Tropfen", "hinweis": "1 Tropfen pro 4,5 L" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Hesi Soil:</strong> Erst Wasser, dann die Produkte einzeln einrühren, zum Schluss pH einstellen. Phosphorus Plus und die zweite Boost-Phase ab Blütewoche 4.",
      "en": "<strong>⚠️ Hesi Soil:</strong> Water first, then stir in the products one at a time, adjust pH last. Phosphorus Plus and the second Boost phase from bloom week 4.",
      "it": "<strong>⚠️ Hesi Soil:</strong> Prima l’acqua, poi aggiungi i prodotti uno alla volta, infine regola il pH. Phosphorus Plus e la seconda fase di Boost dalla settimana di fioritura 4.",
      "es": "<strong>⚠️ Hesi Soil:</strong> Primero el agua, luego añade los productos de uno en uno y ajusta el pH al final. Phosphorus Plus y la segunda fase de Boost desde la semana 4 de floración."
    }
  },
  "hesi-coco": {
    "label": "🌿 Hesi Coco",
    "name": "Hesi Coco",
    "substrat": "coco",
    "quelle": "Hesi COCO Grow Schedule 2022 (hesi.nl, „EN Coco 2022 klein.pdf“), abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Hesi-Coco-Schema 2022: 2 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Stecklinge vorher mit 25 ml TNT Complex pro 10 L. In der Blüte gibt Hesi für Coco „Hesi Coco“ vor – Bloom Complex gehört zur Erdlinie. PK 13/14 und die zweite Boost-Phase ab Blütewoche 4. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 8 laut Hesi: mit klarem Wasser spülen."
      }
    },
    "grow": [
      { "product": "TNT Complex", "weeks": [1, 2], "ml": [50, 50] },
      { "product": "Root Complex", "weeks": [1, 2], "ml": [50, 50], "hinweis": "zum Start 1–2× pro Woche, später nur bei Stress" },
      { "product": "Power Zyme", "weeks": [1, 2], "ml": [20, 20], "hinweis": "1–2× pro Woche mit den Düngern" },
      { "product": "SuperVit", "weeks": [1, 2], "ml": [2.2, 2.2], "einheit": "Tropfen", "hinweis": "1 Tropfen pro 4,5 L" }
    ],
    "bloom": [
      { "product": "Hesi Coco", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [50, 50, 50, 50, 50, 50, 50] },
      { "product": "PK 13/14", "weeks": [4, 5, 6, 7], "ml": [2.5, 5, 7.5, 15] },
      { "product": "Boost", "weeks": [1, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20] },
      { "product": "Power Zyme", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20, 20, 20], "hinweis": "1–2× pro Woche mit den Düngern" },
      { "product": "SuperVit", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2], "einheit": "Tropfen", "hinweis": "1 Tropfen pro 4,5 L" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Hesi Coco:</strong> Erst Wasser, dann die Produkte einzeln einrühren, zum Schluss pH einstellen. Im Coco-Plan ersetzt Hesi Coco den Bloom Complex (Erdlinie).",
      "en": "<strong>⚠️ Hesi Coco:</strong> Water first, then stir in the products one at a time, adjust pH last. In the coco plan Hesi Coco replaces Bloom Complex (soil line).",
      "it": "<strong>⚠️ Hesi Coco:</strong> Prima l’acqua, poi aggiungi i prodotti uno alla volta, infine regola il pH. Nel piano cocco Hesi Coco sostituisce Bloom Complex (linea terra).",
      "es": "<strong>⚠️ Hesi Coco:</strong> Primero el agua, luego añade los productos de uno en uno y ajusta el pH al final. En el plan de coco, Hesi Coco sustituye a Bloom Complex (línea de tierra)."
    }
  },
  "canna-terra": {
    "label": "🌺 Canna Terra",
    "name": "Canna Terra",
    "substrat": "erde",
    "quelle": "CANNA Terra Grow Schedule (canna.ca), abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem CANNA-Terra-Schema: 2 Wuchswochen und 8 Blütewochen. Canna nennt Phasen statt Wochen, zugeordnet über die kürzeste Dauer je Phase: Wuchs 1 = Start, 2 = Vegetativ I; Blüte 1–2 = Vegetativ II (schon 12 h Licht), 3–4 = Generativ I, 5 = Generativ II (einzige Woche mit PK 13/14), 6–7 = Generativ III, 8 = Generativ IV. Bei Bereichen gilt die Untergrenze; Cannaboost lässt sich bis 40 ml steigern. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 8
    },
    "grow": [
      { "product": "Terra Vega", "weeks": [1, 2], "ml": [15, 30] },
      { "product": "Rhizotonic", "weeks": [1, 2], "ml": [40, 20] },
      { "product": "Cannazym", "weeks": [2], "ml": [25] }
    ],
    "bloom": [
      { "product": "Terra Vega", "weeks": [1, 2], "ml": [35, 35] },
      { "product": "Terra Flores", "weeks": [3, 4, 5, 6, 7], "ml": [50, 50, 50, 40, 40] },
      { "product": "Rhizotonic", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 5, 5, 5, 5, 5] },
      { "product": "Cannazym", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 25, 25, 25, 25, 25, 25, 25] },
      { "product": "Cannaboost", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "PK 13/14", "weeks": [5], "ml": [15] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Canna Terra:</strong> Terra Vega und Terra Flores sind einteilig. Produkte einzeln ins Wasser geben, gut umrühren, zum Schluss pH einstellen.",
      "en": "<strong>⚠️ Canna Terra:</strong> Terra Vega and Terra Flores are one-part nutrients. Add products to the water one at a time, stir well, adjust pH last.",
      "it": "<strong>⚠️ Canna Terra:</strong> Terra Vega e Terra Flores sono monocomponenti. Aggiungi i prodotti all’acqua uno alla volta, mescola bene, regola il pH alla fine.",
      "es": "<strong>⚠️ Canna Terra:</strong> Terra Vega y Terra Flores son de un solo componente. Añade los productos al agua de uno en uno, remueve bien y ajusta el pH al final."
    }
  },
  "canna-coco": {
    "label": "🥥 Canna Coco",
    "name": "Canna Coco",
    "substrat": "coco",
    "quelle": "CANNA Coco Grow Schedule (canna.ca), abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem CANNA-Coco-Schema: 2 Wuchswochen und 8 Blütewochen. Canna nennt Phasen statt Wochen, zugeordnet über die kürzeste Dauer je Phase: Wuchs 1 = Start, 2 = Vegetativ I; Blüte 1–2 = Vegetativ II (schon 12 h Licht), 3–4 = Generativ I, 5 = Generativ II (einzige Woche mit PK 13/14), 6–7 = Generativ III, 8 = Generativ IV ohne Grunddünger. Bei Bereichen gilt die Untergrenze; Cannaboost lässt sich bis 40 ml steigern. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 8
    },
    "grow": [
      { "product": "Coco A", "weeks": [1, 2], "ml": [15, 20] },
      { "product": "Coco B", "weeks": [1, 2], "ml": [15, 20] },
      { "product": "Rhizotonic", "weeks": [1, 2], "ml": [40, 20] },
      { "product": "Cannazym", "weeks": [2], "ml": [25] }
    ],
    "bloom": [
      { "product": "Coco A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [25, 25, 30, 30, 30, 20, 20] },
      { "product": "Coco B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [25, 25, 30, 30, 30, 20, 20] },
      { "product": "Rhizotonic", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 5, 5, 5, 5, 5] },
      { "product": "Cannazym", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 25, 25, 25, 25, 25, 25, 25] },
      { "product": "Cannaboost", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "PK 13/14", "weeks": [5], "ml": [15] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Canna Coco:</strong> A und B getrennt ins Wasser geben, nie unverdünnt mischen. PK 13/14 nur in Blütewoche 5.",
      "en": "<strong>⚠️ Canna Coco:</strong> Add A and B to the water separately, never mix them undiluted. PK 13/14 only in bloom week 5.",
      "it": "<strong>⚠️ Canna Coco:</strong> Aggiungi A e B all’acqua separatamente, mai mescolarli non diluiti. PK 13/14 solo nella settimana di fioritura 5.",
      "es": "<strong>⚠️ Canna Coco:</strong> Añade A y B al agua por separado, nunca los mezcles sin diluir. PK 13/14 solo en la semana 5 de floración."
    }
  },
  "plagron-soil": {
    "label": "🌱 Plagron Soil",
    "name": "Plagron Soil",
    "substrat": "erde",
    "quelle": "Plagron 100% Natural Grow Schedule, PL-25-083/08 (plagron.com), abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Plagron-Schema 100% Natural (Lightmix): 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Plagron zählt die Wochen durch: Wuchs = Woche 1–2, Blüte = Woche 3–10. Gilt für Lightmix; bei Allmix, Royalmix und Batmix entfällt Alga Grow und Alga Bloom setzt später ein. Wuchs verlängern: Woche 2 wiederholen (laut Plagron). Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Woche 11 des Schemas: nur Wasser."
      }
    },
    "grow": [
      { "product": "Alga Grow", "weeks": [1, 2], "ml": [20, 40] },
      { "product": "Power Roots", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Pure Zym", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Sugar Royal", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Vita Race", "weeks": [1, 2], "fest": "30 ml pro 10 L Sprühwasser, einmal pro Woche als Blattspray" }
    ],
    "bloom": [
      { "product": "Alga Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [40, 40, 40, 30, 35, 40, 40, 40] },
      { "product": "Power Roots", "weeks": [1, 2, 3], "ml": [10, 10, 10] },
      { "product": "Pure Zym", "weeks": [1, 2, 3, 4], "ml": [10, 10, 10, 10] },
      { "product": "Green Sensation", "weeks": [4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10] },
      { "product": "Sugar Royal", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10] },
      { "product": "Vita Race", "weeks": [1, 2, 3], "fest": "50 ml pro 10 L Sprühwasser, einmal pro Woche als Blattspray" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Plagron Natural:</strong> Produkte einzeln zugeben und gut lösen. Vita Race nur als Blattspray, einmal pro Woche.",
      "en": "<strong>⚠️ Plagron Natural:</strong> Add products one at a time and dissolve well. Vita Race as a foliar spray only, once a week.",
      "it": "<strong>⚠️ Plagron Natural:</strong> Aggiungi i prodotti uno alla volta e sciogli bene. Vita Race solo come spray fogliare, una volta a settimana.",
      "es": "<strong>⚠️ Plagron Natural:</strong> Añade los productos de uno en uno y disuélvelos bien. Vita Race solo como pulverización foliar, una vez por semana."
    }
  },
  "plagron-coco": {
    "label": "🌱 Plagron Coco",
    "name": "Plagron Coco",
    "substrat": "coco",
    "quelle": "Plagron 100% Coco Grow Schedule, PL-23-083/04 (plagron.com), abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Plagron-Schema 100% Coco: 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Plagron zählt die Wochen durch: Wuchs = Woche 1–2, Blüte = Woche 3–10. Zusätze für Handgießen. Wuchs verlängern: Woche 2 wiederholen (laut Plagron). Die Nährlösung soll unter EC 3,0 bleiben. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Woche 11 des Schemas: nur Wasser."
      }
    },
    "grow": [
      { "product": "Cocos A", "weeks": [1, 2], "ml": [15, 20] },
      { "product": "Cocos B", "weeks": [1, 2], "ml": [15, 20] },
      { "product": "Power Roots", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Pure Zym", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Sugar Royal", "weeks": [1, 2], "ml": [10, 10] }
    ],
    "bloom": [
      { "product": "Cocos A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 30, 35, 35, 35, 35, 35, 35] },
      { "product": "Cocos B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 30, 35, 35, 35, 35, 35, 35] },
      { "product": "Power Roots", "weeks": [1, 2, 3], "ml": [10, 10, 10] },
      { "product": "Pure Zym", "weeks": [1, 2, 3, 4], "ml": [10, 10, 10, 10] },
      { "product": "Green Sensation", "weeks": [4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10] },
      { "product": "Sugar Royal", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10] },
      { "product": "Power Buds", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Plagron Coco:</strong> A und B getrennt zugeben. In der letzten Woche vor der Ernte nur Wasser.",
      "en": "<strong>⚠️ Plagron Coco:</strong> Add A and B separately. Plain water only in the last week before harvest.",
      "it": "<strong>⚠️ Plagron Coco:</strong> Aggiungi A e B separatamente. Solo acqua nell’ultima settimana prima del raccolto.",
      "es": "<strong>⚠️ Plagron Coco:</strong> Añade A y B por separado. Solo agua en la última semana antes de la cosecha."
    }
  },
  "advanced": {
    "label": "⚡ Advanced Nutrients",
    "name": "Advanced Nutrients",
    "substrat": "beide",
    "quelle": "Advanced Nutrients „Top Shelf pH Perfect Sensi Recipe“, Global (advancednutrients.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem „Top Shelf“-Rezept von Advanced Nutrients für pH Perfect Sensi: 4 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Wuchs länger als 4 Wochen: Woche 4 wiederholen, Stecklinge und Sämlinge können Woche 1 wiederholen (beides laut AN). Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 8 laut AN: nährstofffreie Spülphase, nur Flawless Finish."
      }
    },
    "grow": [
      { "product": "Sensi Grow A", "weeks": [1, 2, 3, 4], "ml": [10, 20, 30, 40] },
      { "product": "Sensi Grow B", "weeks": [1, 2, 3, 4], "ml": [10, 20, 30, 40] },
      { "product": "B-52", "weeks": [1, 2, 3, 4], "ml": [20, 20, 20, 20] },
      { "product": "Voodoo Juice", "weeks": [1, 2], "ml": [20, 20] }
    ],
    "bloom": [
      { "product": "Sensi Bloom A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [40, 40, 40, 40, 40, 40, 40] },
      { "product": "Sensi Bloom B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [40, 40, 40, 40, 40, 40, 40] },
      { "product": "Voodoo Juice", "weeks": [1, 2], "ml": [20, 20] },
      { "product": "Bud Ignitor", "weeks": [1, 2], "ml": [20, 20] },
      { "product": "Big Bud", "weeks": [2, 3, 4, 5], "ml": [20, 20, 20, 20] },
      { "product": "B-52", "weeks": [3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20] },
      { "product": "Overdrive", "weeks": [6, 7], "ml": [20, 20] },
      { "product": "Bud Candy", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20, 20, 20] },
      { "product": "Flawless Finish", "weeks": [8], "ml": [20] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Advanced Nutrients:</strong> Sensi A und B getrennt zugeben. pH Perfect soll den pH halten – trotzdem messen. Letzte Blütewoche nur Wasser mit Flawless Finish.",
      "en": "<strong>⚠️ Advanced Nutrients:</strong> Add Sensi A and B separately. pH Perfect is meant to hold pH – measure anyway. Last bloom week: water with Flawless Finish only.",
      "it": "<strong>⚠️ Advanced Nutrients:</strong> Aggiungi Sensi A e B separatamente. pH Perfect dovrebbe mantenere il pH – misuralo comunque. Ultima settimana di fioritura: solo acqua con Flawless Finish.",
      "es": "<strong>⚠️ Advanced Nutrients:</strong> Añade Sensi A y B por separado. pH Perfect debería mantener el pH – mídelo de todos modos. Última semana de floración: solo agua con Flawless Finish."
    }
  },
  "athena": {
    "label": "🩵 Athena Nutrients",
    "name": "Athena Nutrients",
    "substrat": "beide",
    "quelle": "Athena Feed Schedule Blended, Normal 2021 (dort in ml pro Gallone) – Werte wie im DWC-Rechner, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Athena-Blended-Schema „Normal“ 2021 (wie im DWC-Rechner): 4 Wuchswochen und 8 Blütewochen. Fade ersetzt Bloom A und B in den letzten zwei Wochen. Balance nur als pH-Plus nach Bedarf, Stack nur als Blattspray bis Blütewoche 3, Core gehört zur Pro-Linie (Pulver) – alle drei stehen deshalb nicht im Gießplan. Flush: Cleanse 10 ml pro Gallone. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 8
    },
    "grow": [
      { "product": "Athena Grow A", "weeks": [1, 2, 3, 4], "ml": [16, 16, 16, 16] },
      { "product": "Athena Grow B", "weeks": [1, 2, 3, 4], "ml": [16, 16, 16, 16] },
      { "product": "Athena CaMg", "weeks": [1, 2, 3, 4], "ml": [6.5, 6.5, 6.5, 6.5] },
      { "product": "Athena Cleanse", "weeks": [1, 2, 3, 4], "ml": [5, 5, 5, 5] }
    ],
    "bloom": [
      { "product": "Athena Bloom A", "weeks": [1, 2, 3, 4, 5, 6], "ml": [24, 24, 24, 24, 24, 21] },
      { "product": "Athena Bloom B", "weeks": [1, 2, 3, 4, 5, 6], "ml": [24, 24, 24, 24, 24, 21] },
      { "product": "Athena CaMg", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5] },
      { "product": "Athena Cleanse", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [5, 5, 5, 5, 5, 5, 5, 5] },
      { "product": "Athena PK", "weeks": [3, 4, 5, 6, 7, 8], "ml": [11, 13, 24, 26, 32, 26] },
      { "product": "Athena Fade", "weeks": [7, 8], "ml": [32, 32] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Athena:</strong> Reihenfolge laut Athena: Cleanse, dann CaMg, dann die übrigen Produkte. A und B nie unverdünnt mischen. Balance nur als pH-Plus, Stack nur als Blattspray.",
      "en": "<strong>⚠️ Athena:</strong> Order per Athena: Cleanse, then CaMg, then the other products. Never mix A and B undiluted. Balance only as pH up, Stack only as a foliar spray.",
      "it": "<strong>⚠️ Athena:</strong> Ordine secondo Athena: Cleanse, poi CaMg, poi gli altri prodotti. Mai mescolare A e B non diluiti. Balance solo come pH up, Stack solo come spray fogliare.",
      "es": "<strong>⚠️ Athena:</strong> Orden según Athena: Cleanse, luego CaMg y después el resto. Nunca mezcles A y B sin diluir. Balance solo como pH up, Stack solo como pulverización foliar."
    }
  },
  "biobizz": {
    "label": "🍃 Biobizz",
    "name": "Biobizz",
    "substrat": "beide",
    "quelle": "Biobizz Nutrient Schedule 2024, Light·Mix/Coco·Mix (biobizz.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Biobizz-Schema 2024 für Light·Mix und Coco·Mix: 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Wuchs 1 = Anzucht, Wuchs 2 = Wachstum. CalMag nur bei Osmose- oder sehr weichem Wasser (0,5 ml/L, gegen Ende der Blüte 1 ml/L). Fish·Mix kann Bio·Grow im Wuchs ersetzen. Die Mischung am selben Tag verbrauchen. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Woche 9 laut Biobizz: nur Wasser."
      }
    },
    "grow": [
      { "product": "Root·Juice", "weeks": [1, 2], "ml": [40, 40] },
      { "product": "Bio·Grow", "weeks": [2], "ml": [20] },
      { "product": "Bio·Heaven", "weeks": [1, 2], "ml": [20, 20] },
      { "product": "Acti·Vera", "weeks": [1, 2], "ml": [20, 20] },
      { "product": "Microbes", "weeks": [1, 2], "ml": [4, 4], "einheit": "g" }
    ],
    "bloom": [
      { "product": "Bio·Grow", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 30, 30, 40, 40, 40, 40] },
      { "product": "Bio·Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 20, 20, 30, 30, 40, 40, 40] },
      { "product": "Top·Max", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 40, 40, 40] },
      { "product": "Bio·Heaven", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 30, 40, 40, 50, 50, 50] },
      { "product": "Alg·A·Mic", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 20, 20, 30, 30, 40, 40, 40] },
      { "product": "Acti·Vera", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 30, 40, 40, 50, 50, 50] },
      { "product": "Microbes", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [2, 2, 4, 4, 4, 2, 2, 2], "einheit": "g" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Biobizz:</strong> Bio-Dünger erst in Wasser lösen, dann pH prüfen. Die Mischung am selben Tag verbrauchen.",
      "en": "<strong>⚠️ Biobizz:</strong> Dissolve the organic nutrients in water first, then check pH. Use the mix the same day.",
      "it": "<strong>⚠️ Biobizz:</strong> Sciogli prima i fertilizzanti biologici in acqua, poi controlla il pH. Usa la miscela lo stesso giorno.",
      "es": "<strong>⚠️ Biobizz:</strong> Disuelve primero los abonos orgánicos en agua y luego comprueba el pH. Usa la mezcla el mismo día."
    }
  },
  "biotabs": {
    "label": "🟫 BioTabs (Organic Tablets)",
    "name": "BioTabs (Organic Tablets)",
    "substrat": "erde",
    "quelle": "BioTabs Organic Grow Guide V.2026.01 (biotabs.nl), abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem BioTabs Organic Grow Guide (V.2026.01): 3 Wuchswochen und 9 Blütewochen. BioTabs düngt über die Erde: Tabletten, Startrex und Mycotrex kommen beim Eintopfen hinein, danach meist nur Wasser. Erde: Bio-Lightmix oder leicht vorgedüngte Bio-Erde, kein Allmix. Die Gießlösungen gelten pro Liter Wasser, 1 L pro Pflanze. Die Anzucht im kleinen Topf ist optional (5 g Startrex pro Liter Erde, 1 g Mycotrex, erster Guss mit 0,5 g Bactrex und 5 ml Orgatrex pro Liter).",
    "wochen": {
      "grow": 3,
      "bloom": 9,
      "nachWuchs": "wasser"
    },
    "grow": [
      { "product": "BioTabs", "weeks": [1], "fest": "beim Eintopfen 10 cm tief: 1 Tablette bei 5 L, 2 bei 10–15 L, 3 bei 20–25 L, 4 bei 30–35 L, 5 bei 50 L Topf" },
      { "product": "Startrex", "weeks": [1], "fest": "50 g pro 10 L Erde einmischen (Endtopf)" },
      { "product": "Mycotrex", "weeks": [1], "fest": "5 g ins Pflanzloch" },
      { "product": "Bactrex", "weeks": [1], "ml": [10], "einheit": "g", "hinweis": "nur beim ersten Guss nach dem Eintopfen, 1 L pro Pflanze" },
      { "product": "Orgatrex", "weeks": [1], "ml": [100], "hinweis": "nur beim ersten Guss nach dem Eintopfen, 1 L pro Pflanze" },
      { "product": "Boom Boom Spray", "weeks": [1], "fest": "5 ml pro Liter Wasser, Blätter tropfnass einsprühen – nicht gießen" },
      { "product": "BioTabs", "weeks": [3], "fest": "nur wenn der Wuchs länger als 2 Wochen dauert: 1 weitere Tablette 10 cm tief eindrücken" }
    ],
    "bloom": [
      { "product": "Bio PK 5-8", "weeks": [2, 4, 6], "ml": [100, 100, 100], "hinweis": "einmal in dieser Woche, 1 L pro Pflanze" },
      { "product": "Bactrex", "weeks": [3], "ml": [10], "einheit": "g", "hinweis": "einmal in dieser Woche, 1 L pro Pflanze" },
      { "product": "Orgatrex", "weeks": [3], "ml": [200], "hinweis": "einmal in dieser Woche, 1 L pro Pflanze" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ BioTabs:</strong> Tabletten, Startrex und Mycotrex nur beim Eintopfen. Bactrex, Orgatrex und Bio PK nur in den genannten Wochen, je 1 L Lösung pro Pflanze – sonst nur Wasser.",
      "en": "<strong>⚠️ BioTabs:</strong> Tablets, Startrex and Mycotrex only when potting. Bactrex, Orgatrex and Bio PK only in the listed weeks, 1 L of solution per plant – plain water otherwise.",
      "it": "<strong>⚠️ BioTabs:</strong> Compresse, Startrex e Mycotrex solo al trapianto. Bactrex, Orgatrex e Bio PK solo nelle settimane indicate, 1 L di soluzione per pianta – altrimenti solo acqua.",
      "es": "<strong>⚠️ BioTabs:</strong> Tabletas, Startrex y Mycotrex solo al trasplantar. Bactrex, Orgatrex y Bio PK solo en las semanas indicadas, 1 L de solución por planta – el resto, solo agua."
    }
  },
  "aptus": {
    "label": "💎 Aptus Plant Tech",
    "name": "Aptus Plant Tech",
    "substrat": "beide",
    "quelle": "Aptus PREMIUM Organo-Mineral Program 2025 (aptus-holland.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Aptus-Programm PREMIUM Organo-Mineral 2025: 4 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Für Erde und Coco; laut Aptus nicht für DWC, NFT oder Aeroponik (dafür gibt es das CLEAN-Programm). Die Mischung frisch ansetzen und in 1–3 Tagen verbrauchen. Bei Bereichen gilt die Untergrenze. Regulator hieß früher Fasilitor. Optional: RO Water Conditioner bei Osmosewasser, Enzym+. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Woche 9 laut Aptus: spülen."
      }
    },
    "grow": [
      { "product": "Regulator", "weeks": [1, 2, 3, 4], "ml": [1.5, 1.5, 1.5, 1.5] },
      { "product": "CaMg-Boost", "weeks": [1, 2, 3, 4], "ml": [2.5, 2.5, 2.5, 2.5] },
      { "product": "All-in-One Liquid", "weeks": [1, 2, 3, 4], "ml": [8, 10, 10, 10] },
      { "product": "Startbooster", "weeks": [1, 2, 3, 4], "ml": [2.5, 2.5, 2.5, 2.5] }
    ],
    "bloom": [
      { "product": "Regulator", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5] },
      { "product": "CaMg-Boost", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [5, 5, 5, 5, 5, 5, 5, 2.5] },
      { "product": "All-in-One Liquid", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [12, 12, 12, 15, 15, 15, 12, 8] },
      { "product": "Startbooster", "weeks": [1], "ml": [5] },
      { "product": "P-Boost", "weeks": [1, 2, 3, 4], "ml": [1, 2, 2, 1] },
      { "product": "Topbooster", "weeks": [2, 3, 4, 5, 6, 7], "ml": [2, 3, 3, 3, 4, 5] },
      { "product": "K-Boost", "weeks": [3, 4, 5, 6, 7, 8], "ml": [2, 3, 3, 4, 5, 7] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Aptus:</strong> Hoch konzentriert – genau dosieren. Mischung frisch ansetzen und in 1–3 Tagen verbrauchen. Nicht für DWC.",
      "en": "<strong>⚠️ Aptus:</strong> Highly concentrated – dose precisely. Mix fresh and use within 1–3 days. Not for DWC.",
      "it": "<strong>⚠️ Aptus:</strong> Molto concentrato – dosa con precisione. Prepara la miscela fresca e usala entro 1–3 giorni. Non per DWC.",
      "es": "<strong>⚠️ Aptus:</strong> Muy concentrado – dosifica con precisión. Prepara la mezcla fresca y úsala en 1–3 días. No apto para DWC."
    }
  },
  "mills": {
    "label": "⚙️ Mills Nutrients",
    "name": "Mills Nutrients",
    "substrat": "beide",
    "quelle": "Mills Grow Chart Regular, Leitungswasser EC 0,7 (mills-nutrients.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Mills-Schema der Regular-Linie mit Leitungswasser: 2 Wuchswochen und 9 Blütewochen. Regular-Linie, gerechnet für Leitungswasser mit EC 0,7; für Osmosewasser nennt Mills höhere Werte. Für die HC-Linie (wie im DWC-Rechner) gilt rund 40 % dieser Mengen. Vitalize zuerst ins Wasser, dann Basis A, dann Basis B, A und B immer gleich viel. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9
    },
    "grow": [
      { "product": "Vitalize", "weeks": [1, 2], "ml": [2, 2] },
      { "product": "Basis A", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Basis B", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Start-R", "weeks": [1, 2], "ml": [10, 20] }
    ],
    "bloom": [
      { "product": "Vitalize", "weeks": [1, 2, 3, 4, 5, 6], "ml": [2, 2, 2, 2, 1, 1] },
      { "product": "Basis A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ml": [20, 25, 35, 40, 35, 35, 30, 30, 20] },
      { "product": "Basis B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ml": [20, 25, 35, 40, 35, 35, 30, 30, 20] },
      { "product": "Start-R", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "C4", "weeks": [2, 3, 4, 5, 6], "ml": [5, 10, 15, 15, 15] },
      { "product": "Ultimate PK", "weeks": [5, 6, 7, 8, 9], "ml": [20, 20, 25, 25, 20] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Mills:</strong> Vitalize zuerst ins Wasser, dann Basis A, dann Basis B – A und B immer gleich viel, nie vormischen. Plan für die Regular-Linie mit Leitungswasser.",
      "en": "<strong>⚠️ Mills:</strong> Vitalize into the water first, then Basis A, then Basis B – always equal amounts of A and B, never premix. Plan for the Regular line with tap water.",
      "it": "<strong>⚠️ Mills:</strong> Prima Vitalize nell’acqua, poi Basis A, poi Basis B – sempre la stessa quantità di A e B, mai premiscelare. Piano per la linea Regular con acqua del rubinetto.",
      "es": "<strong>⚠️ Mills:</strong> Primero Vitalize en el agua, luego Basis A y después Basis B – siempre la misma cantidad de A y B, nunca premezclar. Plan para la línea Regular con agua del grifo."
    }
  },
  "remo": {
    "label": "🍁 Remo Nutrients",
    "name": "Remo Nutrients",
    "substrat": "beide",
    "quelle": "Remo Nutrients Feed Chart (dort in ml pro Gallone) – Werte wie im DWC-Rechner, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Remo-Schema (wie im DWC-Rechner): 4 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Micro und Grow bzw. Bloom in gleichen Mengen. Remo nennt keinen EC-Zielwert. MagNifiCal (CalMag) nach Wasserhärte, kein fester Wochenwert. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 8 laut Remo: nur Wasser."
      }
    },
    "grow": [
      { "product": "Remo Micro", "weeks": [1, 2, 3, 4], "ml": [13.2, 15.9, 18.5, 21.1] },
      { "product": "Remo Grow", "weeks": [1, 2, 3, 4], "ml": [13.2, 15.9, 18.5, 21.1] },
      { "product": "VeloKelp", "weeks": [1, 2, 3, 4], "ml": [13.2, 15.9, 18.5, 21.1] }
    ],
    "bloom": [
      { "product": "Remo Micro", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [21.1, 21.1, 21.1, 21.1, 26.4, 26.4, 26.4] },
      { "product": "Remo Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [21.1, 21.1, 21.1, 21.1, 26.4, 26.4, 26.4] },
      { "product": "VeloKelp", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [21.1, 21.1, 21.1, 21.1, 26.4, 26.4, 26.4] },
      { "product": "AstroFlower", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [21.1, 21.1, 21.1, 21.1, 26.4, 26.4, 26.4] },
      { "product": "Nature's Candy", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [21.1, 21.1, 21.1, 21.1, 26.4, 26.4, 26.4] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Remo:</strong> Micro und Grow bzw. Bloom in gleichen Mengen. In der letzten Blütewoche nur Wasser.",
      "en": "<strong>⚠️ Remo:</strong> Micro and Grow or Bloom in equal amounts. Plain water only in the last bloom week.",
      "it": "<strong>⚠️ Remo:</strong> Micro e Grow o Bloom in quantità uguali. Solo acqua nell’ultima settimana di fioritura.",
      "es": "<strong>⚠️ Remo:</strong> Micro y Grow o Bloom en cantidades iguales. Solo agua en la última semana de floración."
    }
  },
  "cyco": {
    "label": "🔵 Cyco Soil",
    "name": "Cyco Soil",
    "substrat": "erde",
    "quelle": "Cyco Platinum Series Soil Feed Chart, metrisch (cycoflower.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Cyco-Erdschema: 6 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Für Erden wie Cyco Seamix/Wormix. Gerechnet für Osmosewasser. Bei hartem Leitungswasser die Grunddünger senken: bei 800 ppm um 1,5 ml/L, bei 600 ppm um 1 ml/L, bei 400 ppm um 0,5 ml/L. Zwischen den Wochen laut Cyco mit Kleanse spülen. Dr Repair ist optional. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 6,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Laut Cyco: Endspülung mit Kleanse."
      }
    },
    "grow": [
      { "product": "Grow A", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 20, 20, 20, 20] },
      { "product": "Grow B", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 20, 20, 20, 20] },
      { "product": "Silica", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10] },
      { "product": "B1 Boost", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 20, 20, 20, 20] },
      { "product": "Uptake", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10] },
      { "product": "Zyme", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 20, 20, 20, 20] },
      { "product": "Ryzofuel", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10] },
      { "product": "Grow XL", "weeks": [3], "ml": [5] },
      { "product": "Dr Repair", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10], "hinweis": "optional" }
    ],
    "bloom": [
      { "product": "Bloom A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "Bloom B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "Silica", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 20, 20, 20, 20] },
      { "product": "B1 Boost", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "Uptake", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10] },
      { "product": "Zyme", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "Potash Plus", "weeks": [1, 2, 3, 4], "ml": [10, 10, 10, 10] },
      { "product": "Supa Stiky", "weeks": [5, 6, 7, 8], "ml": [20, 20, 20, 20] },
      { "product": "Swell", "weeks": [5, 6, 7, 8], "ml": [25, 25, 25, 25] },
      { "product": "Suga Rush", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10] },
      { "product": "Dr Repair", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10], "hinweis": "optional" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Cyco Soil:</strong> A und B getrennt zugeben. Plan für Osmosewasser – bei hartem Leitungswasser die Grunddünger senken. Zwischen den Wochen mit Kleanse spülen.",
      "en": "<strong>⚠️ Cyco Soil:</strong> Add A and B separately. Plan for RO water – reduce base nutrients with hard tap water. Flush with Kleanse between weeks.",
      "it": "<strong>⚠️ Cyco Soil:</strong> Aggiungi A e B separatamente. Piano per acqua osmotica – con acqua dura riduci i fertilizzanti base. Tra una settimana e l’altra lava con Kleanse.",
      "es": "<strong>⚠️ Cyco Soil:</strong> Añade A y B por separado. Plan para agua de ósmosis – con agua del grifo dura reduce los abonos base. Entre semanas, lava con Kleanse."
    }
  },
  "cyco-coco": {
    "label": "🔵 Cyco Coco",
    "name": "Cyco Coco",
    "substrat": "coco",
    "quelle": "Cyco Platinum Series Advanced Feed Chart, metrisch (cycoflower.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Advanced-Schema von Cyco (für alle Medien außer DWC): 6 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Gerechnet für Osmosewasser. Bei hartem Leitungswasser die Grunddünger senken: bei 800 ppm um 1,5 ml/L, bei 600 ppm um 1 ml/L, bei 400 ppm um 0,5 ml/L. Zwischen den Wochen laut Cyco mit Kleanse spülen. Dr Repair ist optional. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 6,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Laut Cyco: Endspülung mit Kleanse."
      }
    },
    "grow": [
      { "product": "Grow A", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 30, 30, 30, 30] },
      { "product": "Grow B", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 30, 30, 30, 30] },
      { "product": "Silica", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10] },
      { "product": "B1 Boost", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 20, 20, 20, 20] },
      { "product": "Uptake", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10] },
      { "product": "Zyme", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 20, 20, 20, 20] },
      { "product": "Ryzofuel", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10] },
      { "product": "Grow XL", "weeks": [3], "ml": [5] },
      { "product": "Dr Repair", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10], "hinweis": "optional" }
    ],
    "bloom": [
      { "product": "Bloom A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [30, 30, 30, 30, 30, 30, 30, 30] },
      { "product": "Bloom B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [30, 30, 30, 30, 30, 30, 30, 30] },
      { "product": "Silica", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 20, 20, 20, 20] },
      { "product": "B1 Boost", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "Uptake", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10] },
      { "product": "Zyme", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "Potash Plus", "weeks": [1, 2, 3, 4], "ml": [10, 10, 10, 10] },
      { "product": "Supa Stiky", "weeks": [5, 6, 7, 8], "ml": [10, 10, 10, 10] },
      { "product": "Swell", "weeks": [5, 6, 7, 8], "ml": [25, 25, 25, 25] },
      { "product": "Suga Rush", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10] },
      { "product": "Dr Repair", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10], "hinweis": "optional" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Cyco Coco:</strong> A und B getrennt zugeben. Plan für Osmosewasser – bei hartem Leitungswasser die Grunddünger senken. Zwischen den Wochen mit Kleanse spülen.",
      "en": "<strong>⚠️ Cyco Coco:</strong> Add A and B separately. Plan for RO water – reduce base nutrients with hard tap water. Flush with Kleanse between weeks.",
      "it": "<strong>⚠️ Cyco Coco:</strong> Aggiungi A e B separatamente. Piano per acqua osmotica – con acqua dura riduci i fertilizzanti base. Tra una settimana e l’altra lava con Kleanse.",
      "es": "<strong>⚠️ Cyco Coco:</strong> Añade A y B por separado. Plan para agua de ósmosis – con agua del grifo dura reduce los abonos base. Entre semanas, lava con Kleanse."
    }
  },
  "house-garden": {
    "label": "🏡 House & Garden Soil",
    "name": "House & Garden Soil",
    "substrat": "erde",
    "quelle": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), dort in ml pro Gallone Osmosewasser, abgerufen 25.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem 8-Wochen-Chart von House & Garden (Soil A & B): 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Offizielles 8-Wochen-Chart von House & Garden (2025), gerechnet für Osmosewasser: 2 Wuchs- und 8 Blütewochen, danach 3–5 Tage spülen. Stecklinge vorher mit 2,5 ml A und B pro Gallone (6,6 ml pro 10 L). Nitrogen Boost (0,5–2 ml pro Gallone) ist optional, Magic Green nur als Blattspray. Top Shooter oder Shooting Powder, nie beides. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "laut House & Garden 3–5 Tage spülen."
      }
    },
    "grow": [
      { "product": "Soil A", "weeks": [1, 2], "ml": [21.1, 25.1] },
      { "product": "Soil B", "weeks": [1, 2], "ml": [21.1, 25.1] },
      { "product": "Roots Excelurator", "weeks": [1, 2], "ml": [2.6, 2.6] },
      { "product": "Amino Treatment", "weeks": [1, 2], "ml": [2.1, 4] },
      { "product": "Multi Zen", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Algen Extract", "weeks": [1, 2], "ml": [2.6, 2.6], "hinweis": "optional" },
      { "product": "Drip Clean", "weeks": [1, 2], "ml": [1.1, 1.1] }
    ],
    "bloom": [
      { "product": "Soil A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [30.4, 35.7, 39.6, 47.6, 44.9, 30.4, 30.4, 30.4] },
      { "product": "Soil B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [30.4, 35.7, 39.6, 47.6, 44.9, 30.4, 30.4, 30.4] },
      { "product": "Roots Excelurator", "weeks": [1, 2, 3], "ml": [2.6, 2.6, 2.6] },
      { "product": "Amino Treatment", "weeks": [1, 2, 3], "ml": [6.6, 6.6, 6.6] },
      { "product": "Multi Zen", "weeks": [1, 2, 3], "ml": [10, 10, 10] },
      { "product": "Algen Extract", "weeks": [1, 2, 3], "ml": [2.6, 2.6, 2.6], "hinweis": "optional" },
      { "product": "Bud XL", "weeks": [4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10] },
      { "product": "Top Booster", "weeks": [5], "ml": [10.6] },
      { "product": "Top Shooter", "weeks": [6, 7, 8], "ml": [7.4, 15.1, 15.1], "hinweis": "oder Shooting Powder (2,6/5,2/5,2 g pro Gallone) – nie beides" },
      { "product": "Drip Clean", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ H&amp;G Soil:</strong> Soil A und B getrennt zugeben. Top Shooter oder Shooting Powder – nie beides. Nach der Blüte 3–5 Tage spülen.",
      "en": "<strong>⚠️ H&amp;G Soil:</strong> Add Soil A and B separately. Top Shooter or Shooting Powder – never both. Flush for 3–5 days after bloom.",
      "it": "<strong>⚠️ H&amp;G Soil:</strong> Aggiungi Soil A e B separatamente. Top Shooter oppure Shooting Powder – mai entrambi. Dopo la fioritura lava per 3–5 giorni.",
      "es": "<strong>⚠️ H&amp;G Soil:</strong> Añade Soil A y B por separado. Top Shooter o Shooting Powder – nunca ambos. Tras la floración, lava 3–5 días."
    }
  },
  "house-garden-coco": {
    "label": "🏡 House & Garden Coco",
    "name": "House & Garden Coco",
    "substrat": "coco",
    "quelle": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), dort in ml pro Gallone Osmosewasser, abgerufen 25.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem 8-Wochen-Chart von House & Garden (Cocos A & B): 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Offizielles 8-Wochen-Chart von House & Garden (2025), gerechnet für Osmosewasser: 2 Wuchs- und 8 Blütewochen, danach 3–5 Tage spülen. Stecklinge vorher mit 2,5 ml A und B pro Gallone (6,6 ml pro 10 L). Nitrogen Boost (0,5–2 ml pro Gallone) ist optional, Magic Green nur als Blattspray. Top Shooter oder Shooting Powder, nie beides. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "laut House & Garden 3–5 Tage spülen."
      }
    },
    "grow": [
      { "product": "Cocos A", "weeks": [1, 2], "ml": [14.5, 15.9] },
      { "product": "Cocos B", "weeks": [1, 2], "ml": [14.5, 15.9] },
      { "product": "Roots Excelurator", "weeks": [1, 2], "ml": [2.6, 2.6] },
      { "product": "Amino Treatment", "weeks": [1, 2], "ml": [2.1, 4] },
      { "product": "Multi Zen", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Algen Extract", "weeks": [1, 2], "ml": [2.6, 2.6], "hinweis": "optional" },
      { "product": "Drip Clean", "weeks": [1, 2], "ml": [1.1, 1.1] }
    ],
    "bloom": [
      { "product": "Cocos A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [17.2, 19.8, 22.5, 25.1, 23.8, 19.8, 19.8, 19.8] },
      { "product": "Cocos B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [17.2, 19.8, 22.5, 25.1, 23.8, 19.8, 19.8, 19.8] },
      { "product": "Roots Excelurator", "weeks": [1, 2, 3], "ml": [2.6, 2.6, 2.6] },
      { "product": "Amino Treatment", "weeks": [1, 2, 3], "ml": [6.6, 6.6, 6.6] },
      { "product": "Multi Zen", "weeks": [1, 2, 3], "ml": [10, 10, 10] },
      { "product": "Algen Extract", "weeks": [1, 2, 3], "ml": [2.6, 2.6, 2.6], "hinweis": "optional" },
      { "product": "Bud XL", "weeks": [4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10] },
      { "product": "Top Booster", "weeks": [5], "ml": [10.6] },
      { "product": "Top Shooter", "weeks": [6, 7, 8], "ml": [7.4, 15.1, 15.1], "hinweis": "oder Shooting Powder (2,6/5,2/5,2 g pro Gallone) – nie beides" },
      { "product": "Drip Clean", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ H&amp;G Coco:</strong> Cocos A und B getrennt zugeben. Top Shooter oder Shooting Powder – nie beides. Nach der Blüte 3–5 Tage spülen.",
      "en": "<strong>⚠️ H&amp;G Coco:</strong> Add Cocos A and B separately. Top Shooter or Shooting Powder – never both. Flush for 3–5 days after bloom.",
      "it": "<strong>⚠️ H&amp;G Coco:</strong> Aggiungi Cocos A e B separatamente. Top Shooter oppure Shooting Powder – mai entrambi. Dopo la fioritura lava per 3–5 giorni.",
      "es": "<strong>⚠️ H&amp;G Coco:</strong> Añade Cocos A y B por separado. Top Shooter o Shooting Powder – nunca ambos. Tras la floración, lava 3–5 días."
    }
  },
  "atami": {
    "label": "🌺 Atami B'Cuzz Soil",
    "name": "Atami B'Cuzz Soil",
    "substrat": "erde",
    "quelle": "Atami Grow Guide B’cuzz Soil 2024 (atami.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Atami-Schema B’cuzz Soil (2024): 2 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Bei Bereichen gilt die Untergrenze. Die ATA-Terra-Linie ist eine zweite Erdlinie von Atami und kommt nicht zusätzlich dazu – sonst doppelte Grunddüngung. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 8 laut Atami: nur Wasser."
      }
    },
    "grow": [
      { "product": "B’cuzz Soil A", "weeks": [1, 2], "ml": [20, 28] },
      { "product": "B’cuzz Soil B", "weeks": [1, 2], "ml": [20, 28] },
      { "product": "Root Stimulator", "weeks": [1, 2], "ml": [10, 5] },
      { "product": "Soil Booster Universal", "weeks": [2], "ml": [5] },
      { "product": "Silic Boost", "weeks": [1, 2], "ml": [1, 1] },
      { "product": "Atazyme", "weeks": [2], "ml": [10] },
      { "product": "ATA CalMag", "weeks": [1, 2], "ml": [2, 2], "hinweis": "je nach Wasserhärte" }
    ],
    "bloom": [
      { "product": "B’cuzz Soil A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [35, 40, 40, 38, 38, 35, 35] },
      { "product": "B’cuzz Soil B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [35, 40, 40, 38, 38, 35, 35] },
      { "product": "Blossom Builder", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [4, 4, 4, 4, 4, 4, 4] },
      { "product": "Bloom Stimulator", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [5, 5, 5, 5, 5, 5, 5] },
      { "product": "Silic Boost", "weeks": [1, 2, 3, 4], "ml": [1, 1, 1, 1] },
      { "product": "Atazyme", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [10, 10, 10, 10, 10, 10, 10] },
      { "product": "ATA CalMag", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [2, 2, 1, 1, 1, 1, 1], "hinweis": "je nach Wasserhärte" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Atami B’cuzz:</strong> Soil A und B getrennt zugeben. Die ATA-Terra-Linie nicht zusätzlich verwenden – sonst doppelte Grunddüngung.",
      "en": "<strong>⚠️ Atami B’cuzz:</strong> Add Soil A and B separately. Don’t add the ATA Terra line on top – that would double the base feed.",
      "it": "<strong>⚠️ Atami B’cuzz:</strong> Aggiungi Soil A e B separatamente. Non usare in più la linea ATA Terra – raddoppierebbe la concimazione di base.",
      "es": "<strong>⚠️ Atami B’cuzz:</strong> Añade Soil A y B por separado. No uses además la línea ATA Terra: duplicaría el abono base."
    }
  },
  "atami-coco": {
    "label": "🌺 Atami B'Cuzz Coco",
    "name": "Atami B'Cuzz Coco",
    "substrat": "coco",
    "quelle": "Atami Grow Guide B’cuzz Coco 2024 (atami.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Atami-Schema B’cuzz Coco (2024): 2 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Bei Bereichen gilt die Untergrenze. Die ATA-Linie kommt nicht zusätzlich dazu – sonst doppelte Grunddüngung. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 8 laut Atami: nur Wasser."
      }
    },
    "grow": [
      { "product": "B’cuzz Coco A", "weeks": [1, 2], "ml": [10, 15] },
      { "product": "B’cuzz Coco B", "weeks": [1, 2], "ml": [10, 15] },
      { "product": "Root Stimulator", "weeks": [1, 2], "ml": [10, 5] },
      { "product": "Coco Booster Universal", "weeks": [2], "ml": [5] },
      { "product": "Silic Boost", "weeks": [1, 2], "ml": [1, 1] },
      { "product": "Atazyme", "weeks": [2], "ml": [10] },
      { "product": "ATA CalMag", "weeks": [1, 2], "ml": [3, 3], "hinweis": "je nach Wasserhärte" }
    ],
    "bloom": [
      { "product": "B’cuzz Coco A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 24, 23, 22, 21, 20, 20] },
      { "product": "B’cuzz Coco B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 24, 23, 22, 21, 20, 20] },
      { "product": "Blossom Builder", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [4, 4, 4, 4, 4, 4, 4] },
      { "product": "Coco Bloom Stimulator", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [5, 5, 5, 5, 5, 5, 5] },
      { "product": "Silic Boost", "weeks": [1, 2, 3, 4], "ml": [1, 1, 1, 1] },
      { "product": "Atazyme", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [10, 10, 10, 10, 10, 10, 10] },
      { "product": "ATA CalMag", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [2, 2, 1, 1, 1, 1, 1], "hinweis": "je nach Wasserhärte" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Atami B’cuzz Coco:</strong> Coco A und B getrennt zugeben. ATA CalMag je nach Wasserhärte. Die ATA-Linie nicht zusätzlich verwenden.",
      "en": "<strong>⚠️ Atami B’cuzz Coco:</strong> Add Coco A and B separately. ATA CalMag depending on water hardness. Don’t add the ATA line on top.",
      "it": "<strong>⚠️ Atami B’cuzz Coco:</strong> Aggiungi Coco A e B separatamente. ATA CalMag secondo la durezza dell’acqua. Non usare in più la linea ATA.",
      "es": "<strong>⚠️ Atami B’cuzz Coco:</strong> Añade Coco A y B por separado. ATA CalMag según la dureza del agua. No uses además la línea ATA."
    }
  },
  "dutch-pro": {
    "label": "🔵 Dutch Pro Soil",
    "name": "Dutch Pro Soil",
    "substrat": "erde",
    "quelle": "Dutchpro Feed Chart Soil, hartes Wasser (dutchprousa.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Dutch-Pro-Schema für Erde und hartes Wasser: 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Grow und Bloom A und B je 2,5–5 ml/L, hier die Untergrenze; nach EC steigern (Wuchs 1,5–2,0, Blüte 1,8–2,3). Für weiches oder Osmosewasser hat Dutch Pro ein eigenes Schema. Optional laut Schema: Amino Strength, CalMag, Keep it Clean. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Nach Blütewoche 8 laut Dutch Pro: spülen."
      }
    },
    "grow": [
      { "product": "Grow Soil A", "weeks": [1, 2], "ml": [25, 25] },
      { "product": "Grow Soil B", "weeks": [1, 2], "ml": [25, 25] },
      { "product": "Silica", "weeks": [1, 2], "ml": [4, 4] },
      { "product": "Multi Total", "weeks": [1], "ml": [20] },
      { "product": "Take Root", "weeks": [1, 2], "ml": [10, 10] }
    ],
    "bloom": [
      { "product": "Bloom Soil A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 25, 25, 25, 25, 25, 25, 25] },
      { "product": "Bloom Soil B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 25, 25, 25, 25, 25, 25, 25] },
      { "product": "Silica", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [4, 4, 4, 4, 4, 4, 4, 4] },
      { "product": "Multi Total", "weeks": [1, 3, 5, 7], "ml": [10, 10, 10, 10] },
      { "product": "Take Root", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Explode", "weeks": [3, 4, 5, 6, 7, 8], "ml": [5, 5, 10, 10, 15, 15] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Dutch Pro:</strong> A und B getrennt zugeben. Plan für hartes Leitungswasser; A und B nach EC von 2,5 bis 5 ml/L steigern.",
      "en": "<strong>⚠️ Dutch Pro:</strong> Add A and B separately. Plan for hard tap water; raise A and B from 2.5 up to 5 ml/L by EC.",
      "it": "<strong>⚠️ Dutch Pro:</strong> Aggiungi A e B separatamente. Piano per acqua dura del rubinetto; aumenta A e B da 2,5 fino a 5 ml/L in base all’EC.",
      "es": "<strong>⚠️ Dutch Pro:</strong> Añade A y B por separado. Plan para agua del grifo dura; sube A y B de 2,5 hasta 5 ml/L según la EC."
    }
  },
  "dutch-pro-coco": {
    "label": "🔵 Dutch Pro Coco/Hydro",
    "name": "Dutch Pro Coco/Hydro",
    "substrat": "coco",
    "quelle": "Dutchpro Feed Chart Hydro/Coco, hartes Wasser (dutchprousa.com), dort in ml pro Liter, abgerufen 25.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Dutch-Pro-Schema für Hydro/Coco und hartes Wasser: 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Grow und Bloom Hydro/Coco A und B je 2,5–3,5 ml/L, hier die Untergrenze; nach EC steigern (Wuchs 1,8–2,0, Blüte 1,8–2,4). Für weiches oder Osmosewasser hat Dutch Pro ein eigenes Schema. Optional laut Schema: Amino Strength, CalMag, Leaf Green (Blattspray), Keep it Clean. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Nach Blütewoche 8 laut Dutch Pro: spülen."
      }
    },
    "grow": [
      { "product": "Grow Hydro/Coco A", "weeks": [1, 2], "ml": [25, 25] },
      { "product": "Grow Hydro/Coco B", "weeks": [1, 2], "ml": [25, 25] },
      { "product": "Silica", "weeks": [1, 2], "ml": [4, 4] },
      { "product": "Multi Total", "weeks": [1], "ml": [20] },
      { "product": "Take Root", "weeks": [1, 2], "ml": [10, 10] }
    ],
    "bloom": [
      { "product": "Bloom Hydro/Coco A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 25, 25, 25, 25, 25, 25, 25] },
      { "product": "Bloom Hydro/Coco B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 25, 25, 25, 25, 25, 25, 25] },
      { "product": "Silica", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [4, 4, 4, 4, 4, 4, 4, 4] },
      { "product": "Multi Total", "weeks": [1, 3, 5, 7], "ml": [10, 10, 10, 10] },
      { "product": "Take Root", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Explode", "weeks": [3, 4, 5, 6, 7, 8], "ml": [5, 5, 10, 10, 15, 15] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Dutch Pro Coco:</strong> A und B getrennt zugeben. Plan für hartes Wasser; A und B nach EC von 2,5 bis 3,5 ml/L steigern.",
      "en": "<strong>⚠️ Dutch Pro Coco:</strong> Add A and B separately. Plan for hard water; raise A and B from 2.5 up to 3.5 ml/L by EC.",
      "it": "<strong>⚠️ Dutch Pro Coco:</strong> Aggiungi A e B separatamente. Piano per acqua dura; aumenta A e B da 2,5 fino a 3,5 ml/L in base all’EC.",
      "es": "<strong>⚠️ Dutch Pro Coco:</strong> Añade A y B por separado. Plan para agua dura; sube A y B de 2,5 hasta 3,5 ml/L según la EC."
    }
  },
  "shogun": {
    "label": "🟡 Shogun Samurai Terra (Soil)",
    "name": "Shogun Samurai Terra (Soil)",
    "substrat": "erde",
    "quelle": "Shogun LED Coco and Terra Feedchart (AQUA280), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem LED-Schema von Shogun (Samurai Terra): 4 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Samurai Terra Grow und Bloom sind einteilig. Gerechnet für mäßig hartes Wasser (EC um 0,4). Sämlinge vorher 1–2 Wochen mit 4 ml/L Shogun Start und 5 ml/L Katana Roots. Silicon vorher in 5 L Wasser vormischen. CalMag nur bei Osmose- oder weichem Wasser (0,5–1 ml/L), Geisha einmal pro Woche als Blattspray. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Letzte Woche laut Shogun: nur Wasser."
      }
    },
    "grow": [
      { "product": "Samurai Terra Grow", "weeks": [1, 2, 3, 4], "ml": [20, 20, 25, 25] },
      { "product": "Silicon", "weeks": [1, 2, 3, 4], "ml": [10, 10, 10, 10] },
      { "product": "Katana Roots", "weeks": [1, 2, 3, 4], "ml": [2, 2, 2, 2] },
      { "product": "ZenZym", "weeks": [1, 2, 3, 4], "ml": [25, 25, 25, 25] }
    ],
    "bloom": [
      { "product": "Samurai Terra Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [35, 35, 35, 25, 20, 20, 20] },
      { "product": "Silicon", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [10, 10, 10, 10, 10, 10, 10] },
      { "product": "Katana Roots", "weeks": [1, 2, 3], "ml": [2, 2, 2] },
      { "product": "ZenZym", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [25, 25, 25, 25, 25, 25, 25] },
      { "product": "Sumo Active Boost", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "PK Warrior", "weeks": [4, 5, 6, 7], "ml": [10, 5, 5, 5] },
      { "product": "Dragon Force", "weeks": [8], "ml": [40] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Shogun:</strong> Samurai Terra Grow und Bloom sind einteilig. CalMag nur bei Osmose- oder weichem Wasser. Dragon Force nur in Blütewoche 8.",
      "en": "<strong>⚠️ Shogun:</strong> Samurai Terra Grow and Bloom are one-part. CalMag only with RO or soft water. Dragon Force only in bloom week 8.",
      "it": "<strong>⚠️ Shogun:</strong> Samurai Terra Grow e Bloom sono monocomponenti. CalMag solo con acqua osmotica o dolce. Dragon Force solo nella settimana di fioritura 8.",
      "es": "<strong>⚠️ Shogun:</strong> Samurai Terra Grow y Bloom son de un componente. CalMag solo con agua de ósmosis o blanda. Dragon Force solo en la semana 8 de floración."
    }
  },
  "shogun-coco": {
    "label": "🟡 Shogun Samurai Coco",
    "name": "Shogun Samurai Coco",
    "substrat": "coco",
    "quelle": "Shogun LED Coco and Terra Feedchart (AQUA280), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem LED-Schema von Shogun (Samurai Coco): 4 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Gerechnet für mäßig hartes Wasser (EC um 0,4). Sämlinge vorher 1–2 Wochen mit 4 ml/L Shogun Start und 5 ml/L Katana Roots. Silicon vorher in 5 L Wasser vormischen. CalMag nur bei Osmose- oder weichem Wasser (0,5–1 ml/L), Geisha einmal pro Woche als Blattspray. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Letzte Woche laut Shogun: nur Wasser."
      }
    },
    "grow": [
      { "product": "Samurai Coco A", "weeks": [1, 2, 3, 4], "ml": [25, 25, 30, 30] },
      { "product": "Samurai Coco B", "weeks": [1, 2, 3, 4], "ml": [25, 25, 30, 30] },
      { "product": "Silicon", "weeks": [1, 2, 3, 4], "ml": [10, 10, 10, 10] },
      { "product": "Katana Roots", "weeks": [1, 2, 3, 4], "ml": [2, 2, 2, 2] },
      { "product": "ZenZym", "weeks": [1, 2, 3, 4], "ml": [25, 25, 25, 25] }
    ],
    "bloom": [
      { "product": "Samurai Coco A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [35, 35, 35, 30, 20, 20, 20] },
      { "product": "Samurai Coco B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [35, 35, 35, 30, 20, 20, 20] },
      { "product": "Silicon", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [10, 10, 10, 10, 10, 10, 10] },
      { "product": "Katana Roots", "weeks": [1, 2, 3], "ml": [2, 2, 2] },
      { "product": "ZenZym", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [25, 25, 25, 25, 25, 25, 25] },
      { "product": "Sumo Active Boost", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "PK Warrior", "weeks": [4, 5, 6, 7], "ml": [10, 5, 5, 5] },
      { "product": "Dragon Force", "weeks": [8], "ml": [40] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Shogun Coco:</strong> Samurai Coco A und B getrennt zugeben. Silicon vorher in 5 L Wasser vormischen. CalMag nur bei Osmose- oder weichem Wasser. Dragon Force nur in Blütewoche 8.",
      "en": "<strong>⚠️ Shogun Coco:</strong> Add Samurai Coco A and B separately. Premix Silicon in 5 L of water first. CalMag only with RO or soft water. Dragon Force only in bloom week 8.",
      "it": "<strong>⚠️ Shogun Coco:</strong> Aggiungi Samurai Coco A e B separatamente. Premiscela Silicon in 5 L d’acqua. CalMag solo con acqua osmotica o dolce. Dragon Force solo nella settimana di fioritura 8.",
      "es": "<strong>⚠️ Shogun Coco:</strong> Añade Samurai Coco A y B por separado. Premezcla Silicon en 5 L de agua. CalMag solo con agua de ósmosis o blanda. Dragon Force solo en la semana 8 de floración."
    }
  },
  "bac": {
    "label": "🌿 BAC Fertilizers",
    "name": "BAC Fertilizers",
    "substrat": "erde",
    "quelle": "BAC Schedule Organic Grow/Bloom 2017 (bacfertilizers.com), abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem BAC-Schema Organic Grow/Bloom: 2 Wuchswochen und 9 Blütewochen. Bio-Linie für Erde; für Coco hat BAC ein eigenes Coco/Hydro-Schema. Bei Bereichen gilt die Untergrenze. F1 Extreme, Lactic Acid Bacteria und Final Solution stehen nicht im Schema. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 2,
      "bloom": 9
    },
    "grow": [
      { "product": "Organic Grow", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Root Stimulator", "weeks": [1, 2], "ml": [1, 2] },
      { "product": "Fine Solution", "weeks": [1], "ml": [6], "hinweis": "nur einmal in dieser Woche" }
    ],
    "bloom": [
      { "product": "Organic Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "Organic PK Booster", "weeks": [2, 3, 4, 5, 6, 7, 8], "ml": [10, 15, 20, 30, 30, 30, 20] },
      { "product": "Root Stimulator", "weeks": [1, 2], "ml": [2, 2] },
      { "product": "Bloom Stimulator", "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ml": [2, 2, 2, 2, 2, 2, 2, 2, 2] },
      { "product": "Fine Solution", "weeks": [1, 5], "ml": [6, 6], "hinweis": "nur einmal in dieser Woche" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ BAC Organic:</strong> Produkte einzeln einrühren. Fine Solution nur einmal in den genannten Wochen.",
      "en": "<strong>⚠️ BAC Organic:</strong> Stir in products one at a time. Fine Solution only once in the listed weeks.",
      "it": "<strong>⚠️ BAC Organic:</strong> Aggiungi i prodotti uno alla volta. Fine Solution solo una volta nelle settimane indicate.",
      "es": "<strong>⚠️ BAC Organic:</strong> Añade los productos de uno en uno. Fine Solution solo una vez en las semanas indicadas."
    }
  },
  "metrop": {
    "label": "🟠 Metrop",
    "name": "Metrop",
    "substrat": "beide",
    "quelle": "Metrop Soil/Coco/Hydro Grow Schedule (metrop.net), dort in ml pro 100 L, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Metrop-Schema für Erde, Coco und Hydro: einer Wuchsstufe und 10 Blütewochen. Metrop gibt die Mengen pro 100 L an, hier umgerechnet. Der Wuchs hat eine Stufe für die ganze Wuchszeit. MR1 ist der Wuchs- und Frühblütedünger, MR2 der Blütedünger ab Woche 4. Calgreen als Letztes zugeben. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 1,
      "bloom": 10
    },
    "grow": [
      { "product": "MR1", "weeks": [1], "ml": [4] },
      { "product": "Root+", "weeks": [1], "ml": [8] },
      { "product": "AminoXtrem", "weeks": [1], "ml": [9] },
      { "product": "Calgreen", "weeks": [1], "ml": [2] }
    ],
    "bloom": [
      { "product": "MR1", "weeks": [1, 2, 3], "ml": [5, 5, 7.5] },
      { "product": "MR2", "weeks": [4, 5, 6, 7, 8, 9], "ml": [7.5, 10, 10, 10, 10, 10] },
      { "product": "Root+", "weeks": [1, 2], "ml": [8, 8] },
      { "product": "AminoXtrem", "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "ml": [9, 9, 9, 9, 9, 9, 9, 9, 9, 9] },
      { "product": "Calgreen", "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ml": [2, 3, 3, 3, 3, 3, 4, 4, 4] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Metrop:</strong> Das Schema gibt die Mengen pro 100 L an – hier umgerechnet. MR1 für Wuchs und frühe Blüte, MR2 ab Blütewoche 4. Calgreen als Letztes zugeben.",
      "en": "<strong>⚠️ Metrop:</strong> The schedule gives amounts per 100 L – converted here. MR1 for growth and early bloom, MR2 from bloom week 4. Add Calgreen last.",
      "it": "<strong>⚠️ Metrop:</strong> Lo schema indica le dosi per 100 L – qui convertite. MR1 per crescita e inizio fioritura, MR2 dalla settimana 4 di fioritura. Calgreen per ultimo.",
      "es": "<strong>⚠️ Metrop:</strong> La tabla da las dosis por 100 L – aquí convertidas. MR1 para crecimiento y floración temprana, MR2 desde la semana 4 de floración. Añade Calgreen al final."
    }
  },
  "top-crop": {
    "label": "🇪🇸 Top Crop Soil",
    "name": "Top Crop Soil",
    "substrat": "erde",
    "quelle": "Top Crop Tabla de cultivo, Erde (topcropfert.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Top-Crop-Schema für Erde (volles Programm): 5 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Top Crop zählt die Wochen durch: Wuchs = Woche 1–5, Blüte = Woche 6–12, Woche 13 Top Wash. Jede Dosis nur einmal pro Woche geben, sonst mit Wasser gießen. Deeper Underground laut Schema 1–2 ml pro 1,5 L. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 5,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 13 des Schemas: nur Top Wash."
      }
    },
    "grow": [
      { "product": "Deeper Underground", "weeks": [1, 2], "ml": [6.7, 6.7] },
      { "product": "Top Veg", "weeks": [3, 4, 5], "ml": [20, 20, 20] },
      { "product": "Green Explosion", "weeks": [3], "ml": [10] },
      { "product": "Barrier", "weeks": [3], "ml": [5] },
      { "product": "Big One", "weeks": [4], "ml": [20] }
    ],
    "bloom": [
      { "product": "Top Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20, 20, 20] },
      { "product": "Big One", "weeks": [1, 3, 5], "ml": [20, 20, 20] },
      { "product": "Barrier", "weeks": [1, 4], "ml": [5, 5] },
      { "product": "Top Candy", "weeks": [3, 4, 5, 6, 7], "ml": [10, 10, 10, 10, 10] },
      { "product": "Top Bud", "weeks": [4, 5, 6, 7], "ml": [5, 5, 5, 5] },
      { "product": "Top Wash", "weeks": [8], "ml": [20] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Top Crop:</strong> Jede Dosis nur einmal pro Woche geben, sonst mit Wasser gießen.",
      "en": "<strong>⚠️ Top Crop:</strong> Give each dose only once a week, plain water otherwise.",
      "it": "<strong>⚠️ Top Crop:</strong> Somministra ogni dose solo una volta a settimana, altrimenti solo acqua.",
      "es": "<strong>⚠️ Top Crop:</strong> Da cada dosis solo una vez por semana; el resto de riegos, solo agua."
    }
  },
  "top-crop-coco": {
    "label": "🇪🇸 Top Crop Coco",
    "name": "Top Crop Coco",
    "substrat": "coco",
    "quelle": "Top Crop Tabla de cultivo Coco (topcropfert.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem Top-Crop-Schema für Coco: 3 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Top Crop zählt die Wochen durch: Wuchs = Woche 1–3, Blüte = Woche 4–10, Woche 11 nur Wasser. Anders als im Erdschema gilt die Dosis hier bei jedem Gießen. Bei Bereichen gilt die Untergrenze. Big One in Woche 3–5 als Blattspray, in Woche 6–7 ins Gießwasser. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 3,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 11 des Schemas: nur Wasser."
      }
    },
    "grow": [
      { "product": "Deeper Underground", "weeks": [1], "ml": [10] },
      { "product": "Top Coco A", "weeks": [2, 3], "ml": [10, 10] },
      { "product": "Top Coco B", "weeks": [2, 3], "ml": [10, 10] },
      { "product": "Green Explosion", "weeks": [2], "ml": [10] },
      { "product": "Barrier", "weeks": [2, 3], "ml": [5, 5] },
      { "product": "Big One", "weeks": [3], "fest": "2 ml pro Liter Wasser als Blattspray" }
    ],
    "bloom": [
      { "product": "Top Coco A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20, 20, 20] },
      { "product": "Top Coco B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20, 20, 20] },
      { "product": "Big One", "weeks": [1, 2], "fest": "2 ml pro Liter Wasser als Blattspray" },
      { "product": "Big One", "weeks": [3, 4], "ml": [20, 20], "hinweis": "jetzt ins Gießwasser" },
      { "product": "Top Candy", "weeks": [3, 4, 5, 6, 7], "ml": [10, 10, 10, 10, 10] },
      { "product": "Top Bud", "weeks": [3, 4, 5, 6, 7], "ml": [5, 5, 5, 5, 5] },
      { "product": "Barrier", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [5, 5, 5, 5, 5, 5, 5] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Top Crop Coco:</strong> Top Coco A und B getrennt zugeben. Im Coco-Schema gilt die Dosis bei jedem Gießen. Big One in den Wochen 3–5 nur als Blattspray.",
      "en": "<strong>⚠️ Top Crop Coco:</strong> Add Top Coco A and B separately. In the coco schedule the dose applies to every watering. Big One in weeks 3–5 as a foliar spray only.",
      "it": "<strong>⚠️ Top Crop Coco:</strong> Aggiungi Top Coco A e B separatamente. Nello schema cocco la dose vale per ogni irrigazione. Big One nelle settimane 3–5 solo come spray fogliare.",
      "es": "<strong>⚠️ Top Crop Coco:</strong> Añade Top Coco A y B por separado. En la tabla de coco la dosis vale para cada riego. Big One en las semanas 3–5 solo como pulverización foliar."
    }
  },
  "greenhouse": {
    "label": "🏠 Green House Feeding",
    "name": "Green House Feeding",
    "substrat": "beide",
    "quelle": "Green House Feeding „How to use Bio Feeding“ (greenhousefeeding.com) und Product Guide 2019, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach der Bio-Linie von Green House Feeding: 8 Wuchswochen und 8 Blütewochen. BioGrow und BioBloom kommen ins Substrat und geben 8 Wochen lang ab; dazwischen nur Wasser, BioEnhancer alle zwei Wochen. Wuchs länger als 8 Wochen: BioGrow erneut als Kopfdüngung. Blüte 10 Wochen: 2–3 g/L in Woche 1 und 1 g/L in Woche 3; 12 Wochen: 3 g/L in Woche 1 und 1 g/L in Woche 5. Booster PK+ gehört zur Mineral-Linie.",
    "wochen": {
      "grow": 8,
      "bloom": 8,
      "nachWuchs": "wasser"
    },
    "grow": [
      { "product": "BioGrow", "weeks": [1], "fest": "3 g pro Liter Substrat einmischen oder als Kopfdüngung – reicht 8 Wochen (Sämlinge und junge Pflanzen: halbe Menge)" },
      { "product": "BioEnhancer", "weeks": [1, 3, 5, 7], "ml": [5, 5, 5, 5], "einheit": "g", "hinweis": "alle zwei Wochen; bei Coco das Wasser vorher auf pH 5,0 stellen" }
    ],
    "bloom": [
      { "product": "BioBloom", "weeks": [1], "fest": "3 g pro Liter Substrat einmischen oder als Kopfdüngung (bei 8 Wochen Blüte)" },
      { "product": "BioEnhancer", "weeks": [1, 3, 5, 7], "ml": [5, 5, 5, 5], "einheit": "g", "hinweis": "alle zwei Wochen; bei Coco das Wasser vorher auf pH 5,0 stellen" }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Green House Bio:</strong> BioGrow und BioBloom ins Substrat einarbeiten oder als Kopfdüngung geben. BioEnhancer binnen 24 Stunden verbrauchen; bei Coco das Wasser vorher auf pH 5,0 stellen.",
      "en": "<strong>⚠️ Green House Bio:</strong> Work BioGrow and BioBloom into the substrate or use them as a top dressing. Use BioEnhancer within 24 hours; for coco, set the water to pH 5.0 first.",
      "it": "<strong>⚠️ Green House Bio:</strong> Incorpora BioGrow e BioBloom nel substrato o usali come concimazione in superficie. Usa BioEnhancer entro 24 ore; con il cocco porta prima l’acqua a pH 5,0.",
      "es": "<strong>⚠️ Green House Bio:</strong> Incorpora BioGrow y BioBloom al sustrato o úsalos como abonado superficial. Usa BioEnhancer en 24 horas; con coco, ajusta antes el agua a pH 5,0."
    }
  },
  "ghe": {
    "label": "🧪 GHE Flora Series",
    "name": "GHE Flora Series",
    "substrat": "beide",
    "quelle": "General Hydroponics FloraSeries Weekly Basic und Custom Feedchart, Medium (dort in ml pro Gallone), Diamond-Nectar-Produktseite, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem GH-FloraSeries-Wochenschema, mittlere Stufe („Medium Feed“): 4 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Die mittlere Stufe gilt laut GH für Töpfe von etwa 7–19 L und 1–5 Gießgänge am Tag; daneben gibt es eine leichtere und eine stärkere Stufe. Blütewoche 8 ist die Reifewoche. Ripen nach dem Custom-Chart, Diamond Nectar nach der Produktseite (5 ml pro Gallone, bis 10). Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": "Woche 9 laut GH: spülen (FloraKleen 10 ml pro Gallone)."
      }
    },
    "grow": [
      { "product": "FloraMicro", "weeks": [1, 2, 3, 4], "ml": [5.3, 11.1, 14.8, 18] },
      { "product": "FloraGro", "weeks": [1, 2, 3, 4], "ml": [5.3, 10, 13.7, 16.9] },
      { "product": "FloraBloom", "weeks": [1, 2, 3, 4], "ml": [5.3, 7.9, 10, 12.7] },
      { "product": "Diamond Nectar", "weeks": [1, 2, 3, 4], "ml": [13.2, 13.2, 13.2, 13.2] }
    ],
    "bloom": [
      { "product": "FloraMicro", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [16.1, 16.1, 14, 14, 14, 10, 10, 6.1] },
      { "product": "FloraGro", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [14, 14, 14, 14, 14, 10, 10, 6.1] },
      { "product": "FloraBloom", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [18, 18, 20.1, 20.1, 20.1, 11.9, 12.2, 9.5] },
      { "product": "Ripen", "weeks": [7, 8], "ml": [10.6, 13.2] },
      { "product": "Diamond Nectar", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [13.2, 13.2, 13.2, 13.2, 13.2, 13.2, 13.2, 13.2] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ GHE Reihenfolge:</strong> FloraMicro immer ZUERST ins Wasser, dann FloraGro, dann FloraBloom!",
      "en": "<strong>⚠️ GHE Reihenfolge:</strong> Always add FloraMicro FIRST, then FloraGro, then FloraBloom!",
      "it": "<strong>⚠️ GHE Reihenfolge:</strong> FloraMicro SEMPRE prima, poi FloraGro, poi FloraBloom!",
      "es": "<strong>⚠️ GHE Reihenfolge:</strong> ¡FloraMicro SIEMPRE primero, luego FloraGro, luego FloraBloom!"
    }
  },
  "terra-aquatica-soil": {
    "label": "🧪 Terra Aquatica Soil",
    "name": "Terra Aquatica Soil",
    "substrat": "erde",
    "quelle": "Terra Aquatica TriPart Soil, Tableau d’application 2023 (terraaquatica.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem TriPart-Erdschema 2023 von Terra Aquatica: 4 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Terra Aquatica nennt Phasen statt Wochen, zugeordnet: Wuchs 1 = erste Wurzeln, 2 = erste echte Blätter, 3–4 = Wachstum; Blüte 1–2 = Vorblüte, 3–6 = Blüte, 7 = Reife (Final Part), 8 = Reinigung (Flash Clean). Pro Roots lässt sich durch Roots Booster ersetzen, Pro Bloom durch Bloom Booster – jeweils nur eins davon. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 8: mit Flash Clean spülen."
      }
    },
    "grow": [
      { "product": "TriPart Micro", "weeks": [1, 2, 3, 4], "ml": [2, 6, 10, 10] },
      { "product": "TriPart Grow", "weeks": [1, 2, 3, 4], "ml": [2, 6, 15, 15] },
      { "product": "TriPart Bloom", "weeks": [1, 2, 3, 4], "ml": [2, 6, 5, 5] },
      { "product": "Pro Roots", "weeks": [1, 2], "ml": [2, 2] },
      { "product": "Humic", "weeks": [1, 2, 3, 4], "ml": [30, 40, 40, 40] },
      { "product": "Seaweed", "weeks": [2, 3, 4], "ml": [50, 50, 50] },
      { "product": "Silicate", "weeks": [2, 3, 4], "ml": [4, 4, 4], "einheit": "g" }
    ],
    "bloom": [
      { "product": "TriPart Micro", "weeks": [1, 2, 3, 4, 5, 6], "ml": [15, 15, 14, 14, 14, 14] },
      { "product": "TriPart Grow", "weeks": [1, 2, 3, 4, 5, 6], "ml": [15, 15, 7, 7, 7, 7] },
      { "product": "TriPart Bloom", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 21, 21, 21, 21] },
      { "product": "Humic", "weeks": [1, 2], "ml": [40, 40] },
      { "product": "Seaweed", "weeks": [1, 2, 3, 4, 5, 6], "ml": [50, 50, 50, 50, 50, 50] },
      { "product": "Pro Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [2, 2, 2, 2, 2, 2, 2] },
      { "product": "Silicate", "weeks": [1, 2, 3, 4, 5, 6], "ml": [4, 4, 4, 4, 4, 4], "einheit": "g" },
      { "product": "Final Part", "weeks": [7], "ml": [40] },
      { "product": "Flash Clean", "weeks": [8], "ml": [20] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Terra Aquatica:</strong> TriPart Micro zuerst ins Wasser, dann Grow, dann Bloom – nie unverdünnt mischen. Pro Roots oder Roots Booster, Pro Bloom oder Bloom Booster – jeweils nur eins.",
      "en": "<strong>⚠️ Terra Aquatica:</strong> TriPart Micro into the water first, then Grow, then Bloom – never mix undiluted. Pro Roots or Roots Booster, Pro Bloom or Bloom Booster – one of each only.",
      "it": "<strong>⚠️ Terra Aquatica:</strong> Prima TriPart Micro nell’acqua, poi Grow, poi Bloom – mai mescolare non diluiti. Pro Roots o Roots Booster, Pro Bloom o Bloom Booster – solo uno per coppia.",
      "es": "<strong>⚠️ Terra Aquatica:</strong> Primero TriPart Micro en el agua, luego Grow y después Bloom – nunca mezclar sin diluir. Pro Roots o Roots Booster, Pro Bloom o Bloom Booster – solo uno de cada."
    }
  },
  "terra-aquatica": {
    "label": "🧪 Terra Aquatica Coco",
    "name": "Terra Aquatica Coco",
    "substrat": "coco",
    "quelle": "Terra Aquatica TriPart Hydro/Coco, Tableau d’application 2023 (terraaquatica.com), dort in ml pro Liter, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem TriPart-Schema 2023 von Terra Aquatica für Hydro und Coco: 4 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Terra Aquatica nennt Phasen statt Wochen, zugeordnet: Wuchs 1 = erste Wurzeln, 2 = erste echte Blätter, 3–4 = Wachstum; Blüte 1–2 = Vorblüte, 3–6 = Blüte, 7 = Reife (Final Part), 8 = Reinigung (Flash Clean). Pro Roots lässt sich durch Roots Booster ersetzen, Pro Bloom durch Bloom Booster – jeweils nur eins davon. Diamond Nectar (alter GHE-Name) heißt heute Fulvic. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 4,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": "Woche 8: mit Flash Clean spülen."
      }
    },
    "grow": [
      { "product": "TriPart Micro", "weeks": [1, 2, 3, 4], "ml": [5, 10, 12, 12] },
      { "product": "TriPart Grow", "weeks": [1, 2, 3, 4], "ml": [5, 10, 18, 18] },
      { "product": "TriPart Bloom", "weeks": [1, 2, 3, 4], "ml": [5, 10, 6, 6] },
      { "product": "Pro Roots", "weeks": [1, 2], "ml": [2, 2] },
      { "product": "Fulvic", "weeks": [1, 2, 3, 4], "ml": [20, 20, 20, 20] },
      { "product": "Seaweed", "weeks": [2, 3, 4], "ml": [50, 50, 50] },
      { "product": "Silicate", "weeks": [2, 3, 4], "ml": [4, 4, 4], "einheit": "g" }
    ],
    "bloom": [
      { "product": "TriPart Micro", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 16, 16, 16, 16] },
      { "product": "TriPart Grow", "weeks": [1, 2, 3, 4, 5, 6], "ml": [20, 20, 8, 8, 8, 8] },
      { "product": "TriPart Bloom", "weeks": [1, 2, 3, 4, 5, 6], "ml": [15, 15, 24, 24, 24, 24] },
      { "product": "Fulvic", "weeks": [1, 2], "ml": [20, 20] },
      { "product": "Seaweed", "weeks": [1, 2, 3, 4, 5, 6], "ml": [50, 50, 50, 50, 50, 50] },
      { "product": "Pro Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [2, 2, 2, 2, 2, 2, 2] },
      { "product": "Silicate", "weeks": [1, 2, 3, 4, 5, 6], "ml": [4, 4, 4, 4, 4, 4], "einheit": "g" },
      { "product": "Final Part", "weeks": [7], "ml": [50] },
      { "product": "Flash Clean", "weeks": [8], "ml": [20] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Terra Aquatica:</strong> TriPart Micro zuerst ins Wasser, dann Grow, dann Bloom – nie unverdünnt mischen. Pro Roots oder Roots Booster, Pro Bloom oder Bloom Booster – jeweils nur eins.",
      "en": "<strong>⚠️ Terra Aquatica:</strong> TriPart Micro into the water first, then Grow, then Bloom – never mix undiluted. Pro Roots or Roots Booster, Pro Bloom or Bloom Booster – one of each only.",
      "it": "<strong>⚠️ Terra Aquatica:</strong> Prima TriPart Micro nell’acqua, poi Grow, poi Bloom – mai mescolare non diluiti. Pro Roots o Roots Booster, Pro Bloom o Bloom Booster – solo uno per coppia.",
      "es": "<strong>⚠️ Terra Aquatica:</strong> Primero TriPart Micro en el agua, luego Grow y después Bloom – nunca mezclar sin diluir. Pro Roots o Roots Booster, Pro Bloom o Bloom Booster – solo uno de cada."
    }
  },
  "canna-aqua": {
    "label": "💧 Canna Aqua (Hydro)",
    "name": "Canna Aqua (Hydro)",
    "substrat": "hydro",
    "quelle": "CANNA Aqua Zuchtschema – Werte wie im DWC-Rechner, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach dem CANNA-Aqua-Schema (wie im DWC-Rechner): 8 Wuchswochen und 6 Blütewochen. Canna Aqua ist eine Hydro-Linie für rezirkulierende Systeme; für Coco ist Canna Coco gedacht. CalMag Agent nach Wasserhärte, kein fester Wochenwert. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 8,
      "bloom": 6
    },
    "grow": [
      { "product": "Aqua Vega A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 25, 30, 30, 35, 35, 35, 35] },
      { "product": "Aqua Vega B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 25, 30, 30, 35, 35, 35, 35] },
      { "product": "Rhizotonic", "weeks": [1, 2, 3], "ml": [30, 20, 20] },
      { "product": "CannaZym", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [25, 25, 25, 25, 25, 25, 25, 25] }
    ],
    "bloom": [
      { "product": "Aqua Flores A", "weeks": [1, 2, 3, 4, 5, 6], "ml": [30, 35, 35, 30, 25, 20] },
      { "product": "Aqua Flores B", "weeks": [1, 2, 3, 4, 5, 6], "ml": [30, 35, 35, 30, 25, 20] },
      { "product": "Rhizotonic", "weeks": [1, 2], "ml": [5, 5] },
      { "product": "Cannaboost", "weeks": [1, 2, 3, 4, 5], "ml": [20, 25, 30, 30, 25] },
      { "product": "CannaZym", "weeks": [1, 2, 3, 4, 5, 6], "ml": [25, 25, 25, 25, 25, 25] },
      { "product": "PK 13/14", "weeks": [3], "ml": [15] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Canna Aqua:</strong> A und B getrennt zugeben. Hydro-Linie für rezirkulierende Systeme – für Coco ist Canna Coco gedacht.",
      "en": "<strong>⚠️ Canna Aqua:</strong> Add A and B separately. Hydro line for recirculating systems – Canna Coco is the line meant for coco.",
      "it": "<strong>⚠️ Canna Aqua:</strong> Aggiungi A e B separatamente. Linea idro per sistemi a ricircolo – per il cocco è pensata Canna Coco.",
      "es": "<strong>⚠️ Canna Aqua:</strong> Añade A y B por separado. Línea hidro para sistemas recirculantes – para coco está Canna Coco."
    }
  },
  "plagron-hydro": {
    "label": "🌊 Plagron Hydro",
    "name": "Plagron Hydro",
    "substrat": "hydro",
    "quelle": "Plagron-Produktangaben Hydro A/B, Hydro Roots, Power Buds, Green Sensation – Werte wie im DWC-Rechner, abgerufen 24.9.2026",
    "planHinweis": "Seit 25.9.2026 nach den Plagron-Produktangaben für Hydro (wie im DWC-Rechner): 8 Wuchswochen und 6 Blütewochen. Plagron Hydro ist eine Hydro-Linie; für Coco ist Plagron Coco gedacht. Sugar Royal ist laut Plagron nur für Torf- und Kokossubstrate (höchstens 1 ml/L) und gehört nicht zum Hydro-Plan. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
    "wochen": {
      "grow": 8,
      "bloom": 6
    },
    "grow": [
      { "product": "Hydro A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [14, 14, 16, 16, 16, 16, 16, 16] },
      { "product": "Hydro B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [14, 14, 16, 16, 16, 16, 16, 16] },
      { "product": "Hydro Roots", "weeks": [1, 2, 3, 4], "ml": [10, 10, 10, 10] }
    ],
    "bloom": [
      { "product": "Hydro A", "weeks": [1, 2, 3, 4, 5, 6], "ml": [18, 20, 22, 25, 25, 25] },
      { "product": "Hydro B", "weeks": [1, 2, 3, 4, 5, 6], "ml": [18, 20, 22, 25, 25, 25] },
      { "product": "Hydro Roots", "weeks": [1, 2, 3], "ml": [10, 10, 10] },
      { "product": "Power Buds", "weeks": [1, 2, 3, 4, 5, 6], "ml": [10, 10, 10, 10, 10, 10] },
      { "product": "Green Sensation", "weeks": [4, 5, 6], "ml": [10, 10, 10] }
    ],
    "addOrder": {
      "de": "<strong>⚠️ Plagron Hydro:</strong> A und B getrennt zugeben. Hydro-Linie – für Coco ist Plagron Coco gedacht.",
      "en": "<strong>⚠️ Plagron Hydro:</strong> Add A and B separately. Hydro line – Plagron Coco is the line meant for coco.",
      "it": "<strong>⚠️ Plagron Hydro:</strong> Aggiungi A e B separatamente. Linea idro – per il cocco è pensata Plagron Coco.",
      "es": "<strong>⚠️ Plagron Hydro:</strong> Añade A y B por separado. Línea hidro – para coco está Plagron Coco."
    }
  }
};
if (typeof module !== 'undefined') module.exports = COCO_MARKEN;
