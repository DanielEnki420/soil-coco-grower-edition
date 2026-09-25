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
    "quelle": {
      "de": "Hesi SOIL Grow Schedule 2022 (hesi.nl, „EN Aarde 2022 klein.pdf“), abgerufen 25.9.2026",
      "en": "Hesi SOIL Grow Schedule 2022 (hesi.nl, ”EN Aarde 2022 klein.pdf”), retrieved 25 Sep 2026",
      "it": "Hesi SOIL Grow Schedule 2022 (hesi.nl, «EN Aarde 2022 klein.pdf»), consultato il 25/9/2026",
      "es": "Hesi SOIL Grow Schedule 2022 (hesi.nl, «EN Aarde 2022 klein.pdf»), consultado el 25/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Hesi-Erdschema 2022: 2 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Stecklinge vorher mit 25 ml TNT Complex pro 10 L. Phosphorus Plus und die zweite Boost-Phase ab Blütewoche 4. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Hesi soil schedule 2022: 2 veg weeks and 8 bloom weeks, the last one for flushing. Cuttings beforehand with 25 ml TNT Complex per 10 L. Phosphorus Plus and the second Boost phase from bloom week 4. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Hesi per terra 2022: 2 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Talee prima con 25 ml di TNT Complex ogni 10 L. Phosphorus Plus e la seconda fase di Boost dalla settimana di fioritura 4. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Hesi para tierra 2022: 2 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Esquejes antes con 25 ml de TNT Complex por 10 L. Phosphorus Plus y la segunda fase de Boost desde la semana 4 de floración. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 8 laut Hesi: mit klarem Wasser spülen.",
          "en": "Week 8 per Hesi: flush with plain water.",
          "it": "Settimana 8 secondo Hesi: lavare con acqua pulita.",
          "es": "Semana 8 según Hesi: lavar con agua limpia."
        }
      }
    },
    "grow": [
      { "product": "TNT Complex", "weeks": [1, 2], "ml": [50, 50] },
      {
        "product": "Root Complex",
        "weeks": [1, 2],
        "ml": [50, 50],
        "hinweis": {
          "de": "zum Start 1–2× pro Woche, später nur bei Stress",
          "en": "at the start 1–2× a week, later only under stress",
          "it": "all'inizio 1–2 volte a settimana, poi solo in caso di stress",
          "es": "al inicio 1–2 veces por semana, después solo en caso de estrés"
        }
      },
      {
        "product": "Power Zyme",
        "weeks": [1, 2],
        "ml": [20, 20],
        "hinweis": {
          "de": "1–2× pro Woche mit den Düngern",
          "en": "1–2× a week with the nutrients",
          "it": "1–2 volte a settimana insieme ai fertilizzanti",
          "es": "1–2 veces por semana con los abonos"
        }
      },
      {
        "product": "SuperVit",
        "weeks": [1, 2],
        "ml": [2.2, 2.2],
        "einheit": "Tropfen",
        "hinweis": {
          "de": "1 Tropfen pro 4,5 L",
          "en": "1 drop per 4.5 L",
          "it": "1 goccia ogni 4,5 L",
          "es": "1 gota por 4,5 L"
        }
      }
    ],
    "bloom": [
      { "product": "Bloom Complex", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [50, 50, 50, 50, 50, 50, 50] },
      { "product": "Phosphorus Plus", "weeks": [4, 5, 6, 7], "ml": [25, 25, 25, 25] },
      { "product": "Boost", "weeks": [1, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20] },
      {
        "product": "Power Zyme",
        "weeks": [1, 2, 3, 4, 5, 6, 7],
        "ml": [20, 20, 20, 20, 20, 20, 20],
        "hinweis": {
          "de": "1–2× pro Woche mit den Düngern",
          "en": "1–2× a week with the nutrients",
          "it": "1–2 volte a settimana insieme ai fertilizzanti",
          "es": "1–2 veces por semana con los abonos"
        }
      },
      {
        "product": "SuperVit",
        "weeks": [1, 2, 3, 4, 5, 6, 7],
        "ml": [2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2],
        "einheit": "Tropfen",
        "hinweis": {
          "de": "1 Tropfen pro 4,5 L",
          "en": "1 drop per 4.5 L",
          "it": "1 goccia ogni 4,5 L",
          "es": "1 gota por 4,5 L"
        }
      }
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
    "quelle": {
      "de": "Hesi COCO Grow Schedule 2022 (hesi.nl, „EN Coco 2022 klein.pdf“), abgerufen 24.9.2026",
      "en": "Hesi COCO Grow Schedule 2022 (hesi.nl, ”EN Coco 2022 klein.pdf”), retrieved 24 Sep 2026",
      "it": "Hesi COCO Grow Schedule 2022 (hesi.nl, «EN Coco 2022 klein.pdf»), consultato il 24/9/2026",
      "es": "Hesi COCO Grow Schedule 2022 (hesi.nl, «EN Coco 2022 klein.pdf»), consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Hesi-Coco-Schema 2022: 2 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Stecklinge vorher mit 25 ml TNT Complex pro 10 L. In der Blüte gibt Hesi für Coco „Hesi Coco“ vor – Bloom Complex gehört zur Erdlinie. PK 13/14 und die zweite Boost-Phase ab Blütewoche 4. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Hesi coco schedule 2022: 2 veg weeks and 8 bloom weeks, the last one for flushing. Cuttings beforehand with 25 ml TNT Complex per 10 L. In bloom, Hesi specifies “Hesi Coco” for coco – Bloom Complex belongs to the soil line. PK 13/14 and the second Boost phase from bloom week 4. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Hesi per cocco 2022: 2 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Talee prima con 25 ml di TNT Complex ogni 10 L. In fioritura Hesi prevede per il cocco «Hesi Coco» – Bloom Complex appartiene alla linea per terra. PK 13/14 e la seconda fase di Boost dalla settimana di fioritura 4. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Hesi para coco 2022: 2 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Esquejes antes con 25 ml de TNT Complex por 10 L. En floración, Hesi indica «Hesi Coco» para coco; Bloom Complex pertenece a la línea de tierra. PK 13/14 y la segunda fase de Boost desde la semana 4 de floración. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 8 laut Hesi: mit klarem Wasser spülen.",
          "en": "Week 8 per Hesi: flush with plain water.",
          "it": "Settimana 8 secondo Hesi: lavare con acqua pulita.",
          "es": "Semana 8 según Hesi: lavar con agua limpia."
        }
      }
    },
    "grow": [
      { "product": "TNT Complex", "weeks": [1, 2], "ml": [50, 50] },
      {
        "product": "Root Complex",
        "weeks": [1, 2],
        "ml": [50, 50],
        "hinweis": {
          "de": "zum Start 1–2× pro Woche, später nur bei Stress",
          "en": "at the start 1–2× a week, later only under stress",
          "it": "all'inizio 1–2 volte a settimana, poi solo in caso di stress",
          "es": "al inicio 1–2 veces por semana, después solo en caso de estrés"
        }
      },
      {
        "product": "Power Zyme",
        "weeks": [1, 2],
        "ml": [20, 20],
        "hinweis": {
          "de": "1–2× pro Woche mit den Düngern",
          "en": "1–2× a week with the nutrients",
          "it": "1–2 volte a settimana insieme ai fertilizzanti",
          "es": "1–2 veces por semana con los abonos"
        }
      },
      {
        "product": "SuperVit",
        "weeks": [1, 2],
        "ml": [2.2, 2.2],
        "einheit": "Tropfen",
        "hinweis": {
          "de": "1 Tropfen pro 4,5 L",
          "en": "1 drop per 4.5 L",
          "it": "1 goccia ogni 4,5 L",
          "es": "1 gota por 4,5 L"
        }
      }
    ],
    "bloom": [
      { "product": "Hesi Coco", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [50, 50, 50, 50, 50, 50, 50] },
      { "product": "PK 13/14", "weeks": [4, 5, 6, 7], "ml": [2.5, 5, 7.5, 15] },
      { "product": "Boost", "weeks": [1, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20] },
      {
        "product": "Power Zyme",
        "weeks": [1, 2, 3, 4, 5, 6, 7],
        "ml": [20, 20, 20, 20, 20, 20, 20],
        "hinweis": {
          "de": "1–2× pro Woche mit den Düngern",
          "en": "1–2× a week with the nutrients",
          "it": "1–2 volte a settimana insieme ai fertilizzanti",
          "es": "1–2 veces por semana con los abonos"
        }
      },
      {
        "product": "SuperVit",
        "weeks": [1, 2, 3, 4, 5, 6, 7],
        "ml": [2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2],
        "einheit": "Tropfen",
        "hinweis": {
          "de": "1 Tropfen pro 4,5 L",
          "en": "1 drop per 4.5 L",
          "it": "1 goccia ogni 4,5 L",
          "es": "1 gota por 4,5 L"
        }
      }
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
    "quelle": {
      "de": "CANNA Terra Grow Schedule (canna.ca), abgerufen 24.9.2026",
      "en": "CANNA Terra Grow Schedule (canna.ca), retrieved 24 Sep 2026",
      "it": "CANNA Terra Grow Schedule (canna.ca), consultato il 24/9/2026",
      "es": "CANNA Terra Grow Schedule (canna.ca), consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem CANNA-Terra-Schema: 2 Wuchswochen und 8 Blütewochen. Canna nennt Phasen statt Wochen, zugeordnet über die kürzeste Dauer je Phase: Wuchs 1 = Start, 2 = Vegetativ I; Blüte 1–2 = Vegetativ II (schon 12 h Licht), 3–4 = Generativ I, 5 = Generativ II (einzige Woche mit PK 13/14), 6–7 = Generativ III, 8 = Generativ IV. Bei Bereichen gilt die Untergrenze; Cannaboost lässt sich bis 40 ml steigern. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the CANNA Terra schedule: 2 veg weeks and 8 bloom weeks. Canna gives phases instead of weeks, mapped by the shortest duration per phase: veg 1 = Start, 2 = Vegetative I; bloom 1–2 = Vegetative II (already 12 h light), 3–4 = Generative I, 5 = Generative II (the only week with PK 13/14), 6–7 = Generative III, 8 = Generative IV. Where a range is given, the lower end applies; Cannaboost can be raised to 40 ml. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema CANNA Terra: 2 settimane di crescita e 8 settimane di fioritura. Canna indica fasi invece di settimane, assegnate secondo la durata più breve per fase: crescita 1 = Start, 2 = Vegetativa I; fioritura 1–2 = Vegetativa II (già 12 h di luce), 3–4 = Generativa I, 5 = Generativa II (unica settimana con PK 13/14), 6–7 = Generativa III, 8 = Generativa IV. Dove c'è un intervallo vale il limite inferiore; Cannaboost si può aumentare fino a 40 ml. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema CANNA Terra: 2 semanas de crecimiento y 8 semanas de floración. Canna indica fases en lugar de semanas, asignadas según la duración más corta de cada fase: crecimiento 1 = Start, 2 = Vegetativa I; floración 1–2 = Vegetativa II (ya con 12 h de luz), 3–4 = Generativa I, 5 = Generativa II (única semana con PK 13/14), 6–7 = Generativa III, 8 = Generativa IV. Donde hay un rango vale el límite inferior; Cannaboost se puede subir hasta 40 ml. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
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
    "quelle": {
      "de": "CANNA Coco Grow Schedule (canna.ca), abgerufen 24.9.2026",
      "en": "CANNA Coco Grow Schedule (canna.ca), retrieved 24 Sep 2026",
      "it": "CANNA Coco Grow Schedule (canna.ca), consultato il 24/9/2026",
      "es": "CANNA Coco Grow Schedule (canna.ca), consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem CANNA-Coco-Schema: 2 Wuchswochen und 8 Blütewochen. Canna nennt Phasen statt Wochen, zugeordnet über die kürzeste Dauer je Phase: Wuchs 1 = Start, 2 = Vegetativ I; Blüte 1–2 = Vegetativ II (schon 12 h Licht), 3–4 = Generativ I, 5 = Generativ II (einzige Woche mit PK 13/14), 6–7 = Generativ III, 8 = Generativ IV ohne Grunddünger. Bei Bereichen gilt die Untergrenze; Cannaboost lässt sich bis 40 ml steigern. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the CANNA Coco schedule: 2 veg weeks and 8 bloom weeks. Canna gives phases instead of weeks, mapped by the shortest duration per phase: veg 1 = Start, 2 = Vegetative I; bloom 1–2 = Vegetative II (already 12 h light), 3–4 = Generative I, 5 = Generative II (the only week with PK 13/14), 6–7 = Generative III, 8 = Generative IV without base nutrients. Where a range is given, the lower end applies; Cannaboost can be raised to 40 ml. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema CANNA Coco: 2 settimane di crescita e 8 settimane di fioritura. Canna indica fasi invece di settimane, assegnate secondo la durata più breve per fase: crescita 1 = Start, 2 = Vegetativa I; fioritura 1–2 = Vegetativa II (già 12 h di luce), 3–4 = Generativa I, 5 = Generativa II (unica settimana con PK 13/14), 6–7 = Generativa III, 8 = Generativa IV senza fertilizzante di base. Dove c'è un intervallo vale il limite inferiore; Cannaboost si può aumentare fino a 40 ml. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema CANNA Coco: 2 semanas de crecimiento y 8 semanas de floración. Canna indica fases en lugar de semanas, asignadas según la duración más corta de cada fase: crecimiento 1 = Start, 2 = Vegetativa I; floración 1–2 = Vegetativa II (ya con 12 h de luz), 3–4 = Generativa I, 5 = Generativa II (única semana con PK 13/14), 6–7 = Generativa III, 8 = Generativa IV sin abono base. Donde hay un rango vale el límite inferior; Cannaboost se puede subir hasta 40 ml. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
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
    "quelle": {
      "de": "Plagron 100% Natural Grow Schedule, PL-25-083/08 (plagron.com), abgerufen 24.9.2026",
      "en": "Plagron 100% Natural Grow Schedule, PL-25-083/08 (plagron.com), retrieved 24 Sep 2026",
      "it": "Plagron 100% Natural Grow Schedule, PL-25-083/08 (plagron.com), consultato il 24/9/2026",
      "es": "Plagron 100% Natural Grow Schedule, PL-25-083/08 (plagron.com), consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Plagron-Schema 100% Natural (Lightmix): 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Plagron zählt die Wochen durch: Wuchs = Woche 1–2, Blüte = Woche 3–10. Gilt für Lightmix; bei Allmix, Royalmix und Batmix entfällt Alga Grow und Alga Bloom setzt später ein. Wuchs verlängern: Woche 2 wiederholen (laut Plagron). Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Plagron 100% Natural schedule (Lightmix): 2 veg weeks and 9 bloom weeks, the last one for flushing. Plagron numbers the weeks straight through: veg = weeks 1–2, bloom = weeks 3–10. Applies to Lightmix; with Allmix, Royalmix and Batmix, Alga Grow is dropped and Alga Bloom starts later. To extend veg, repeat week 2 (per Plagron). If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Plagron 100% Natural (Lightmix): 2 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Plagron numera le settimane di seguito: crescita = settimane 1–2, fioritura = settimane 3–10. Vale per Lightmix; con Allmix, Royalmix e Batmix si omette Alga Grow e Alga Bloom inizia più tardi. Per prolungare la crescita ripetere la settimana 2 (secondo Plagron). Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema Plagron 100% Natural (Lightmix): 2 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Plagron numera las semanas de forma continua: crecimiento = semanas 1–2, floración = semanas 3–10. Vale para Lightmix; con Allmix, Royalmix y Batmix se omite Alga Grow y Alga Bloom empieza más tarde. Para alargar el crecimiento, repetir la semana 2 (según Plagron). Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Woche 11 des Schemas: nur Wasser.",
          "en": "Week 11 of the schedule: plain water only.",
          "it": "Settimana 11 dello schema: solo acqua.",
          "es": "Semana 11 del esquema: solo agua."
        }
      }
    },
    "grow": [
      { "product": "Alga Grow", "weeks": [1, 2], "ml": [20, 40] },
      { "product": "Power Roots", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Pure Zym", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Sugar Royal", "weeks": [1, 2], "ml": [10, 10] },
      {
        "product": "Vita Race",
        "weeks": [1, 2],
        "fest": {
          "de": "30 ml pro 10 L Sprühwasser, einmal pro Woche als Blattspray",
          "en": "30 ml per 10 L of spray water, once a week as a foliar spray",
          "it": "30 ml ogni 10 L di acqua da nebulizzare, una volta a settimana come spray fogliare",
          "es": "30 ml por 10 L de agua de pulverización, una vez por semana como pulverización foliar"
        }
      }
    ],
    "bloom": [
      { "product": "Alga Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [40, 40, 40, 30, 35, 40, 40, 40] },
      { "product": "Power Roots", "weeks": [1, 2, 3], "ml": [10, 10, 10] },
      { "product": "Pure Zym", "weeks": [1, 2, 3, 4], "ml": [10, 10, 10, 10] },
      { "product": "Green Sensation", "weeks": [4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10] },
      { "product": "Sugar Royal", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10, 10, 10, 10] },
      {
        "product": "Vita Race",
        "weeks": [1, 2, 3],
        "fest": {
          "de": "50 ml pro 10 L Sprühwasser, einmal pro Woche als Blattspray",
          "en": "50 ml per 10 L of spray water, once a week as a foliar spray",
          "it": "50 ml ogni 10 L di acqua da nebulizzare, una volta a settimana come spray fogliare",
          "es": "50 ml por 10 L de agua de pulverización, una vez por semana como pulverización foliar"
        }
      }
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
    "quelle": {
      "de": "Plagron 100% Coco Grow Schedule, PL-23-083/04 (plagron.com), abgerufen 24.9.2026",
      "en": "Plagron 100% Coco Grow Schedule, PL-23-083/04 (plagron.com), retrieved 24 Sep 2026",
      "it": "Plagron 100% Coco Grow Schedule, PL-23-083/04 (plagron.com), consultato il 24/9/2026",
      "es": "Plagron 100% Coco Grow Schedule, PL-23-083/04 (plagron.com), consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Plagron-Schema 100% Coco: 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Plagron zählt die Wochen durch: Wuchs = Woche 1–2, Blüte = Woche 3–10. Zusätze für Handgießen. Wuchs verlängern: Woche 2 wiederholen (laut Plagron). Die Nährlösung soll unter EC 3,0 bleiben. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Plagron 100% Coco schedule: 2 veg weeks and 9 bloom weeks, the last one for flushing. Plagron numbers the weeks straight through: veg = weeks 1–2, bloom = weeks 3–10. Additives for hand watering. To extend veg, repeat week 2 (per Plagron). The nutrient solution should stay below EC 3.0. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Plagron 100% Coco: 2 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Plagron numera le settimane di seguito: crescita = settimane 1–2, fioritura = settimane 3–10. Additivi per l'irrigazione a mano. Per prolungare la crescita ripetere la settimana 2 (secondo Plagron). La soluzione nutritiva deve restare sotto EC 3,0. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema Plagron 100% Coco: 2 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Plagron numera las semanas de forma continua: crecimiento = semanas 1–2, floración = semanas 3–10. Aditivos para riego a mano. Para alargar el crecimiento, repetir la semana 2 (según Plagron). La solución nutritiva debe quedar por debajo de EC 3,0. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Woche 11 des Schemas: nur Wasser.",
          "en": "Week 11 of the schedule: plain water only.",
          "it": "Settimana 11 dello schema: solo acqua.",
          "es": "Semana 11 del esquema: solo agua."
        }
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
    "quelle": {
      "de": "Advanced Nutrients „Top Shelf pH Perfect Sensi Recipe“, Global (advancednutrients.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Advanced Nutrients ”Top Shelf pH Perfect Sensi Recipe”, Global (advancednutrients.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Advanced Nutrients «Top Shelf pH Perfect Sensi Recipe», Global (advancednutrients.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Advanced Nutrients «Top Shelf pH Perfect Sensi Recipe», Global (advancednutrients.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem „Top Shelf“-Rezept von Advanced Nutrients für pH Perfect Sensi: 4 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Wuchs länger als 4 Wochen: Woche 4 wiederholen, Stecklinge und Sämlinge können Woche 1 wiederholen (beides laut AN). Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following Advanced Nutrients’ “Top Shelf” recipe for pH Perfect Sensi: 4 veg weeks and 8 bloom weeks, the last one for flushing. Veg longer than 4 weeks: repeat week 4; cuttings and seedlings can repeat week 1 (both per AN). If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo la ricetta «Top Shelf» di Advanced Nutrients per pH Perfect Sensi: 4 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Crescita oltre 4 settimane: ripetere la settimana 4; talee e piantine possono ripetere la settimana 1 (entrambe le cose secondo AN). Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según la receta «Top Shelf» de Advanced Nutrients para pH Perfect Sensi: 4 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Crecimiento de más de 4 semanas: repetir la semana 4; esquejes y plántulas pueden repetir la semana 1 (ambas cosas según AN). Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 8 laut AN: nährstofffreie Spülphase, nur Flawless Finish.",
          "en": "Week 8 per AN: nutrient-free flush phase, Flawless Finish only.",
          "it": "Settimana 8 secondo AN: fase di lavaggio senza nutrienti, solo Flawless Finish.",
          "es": "Semana 8 según AN: fase de lavado sin nutrientes, solo Flawless Finish."
        }
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
    "quelle": {
      "de": "Athena Feed Schedule Blended, Normal 2021 (dort in ml pro Gallone) – Werte wie im DWC-Rechner, abgerufen 24.9.2026",
      "en": "Athena Feed Schedule Blended, Normal 2021 (given there in ml per gallon) – values as in the DWC calculator, retrieved 24 Sep 2026",
      "it": "Athena Feed Schedule Blended, Normal 2021 (lì in ml per gallone) – valori come nel calcolatore DWC, consultato il 24/9/2026",
      "es": "Athena Feed Schedule Blended, Normal 2021 (allí en ml por galón) – valores como en la calculadora DWC, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Athena-Blended-Schema „Normal“ 2021 (wie im DWC-Rechner): 4 Wuchswochen und 8 Blütewochen. Fade ersetzt Bloom A und B in den letzten zwei Wochen. Balance nur als pH-Plus nach Bedarf, Stack nur als Blattspray bis Blütewoche 3, Core gehört zur Pro-Linie (Pulver) – alle drei stehen deshalb nicht im Gießplan. Flush: Cleanse 10 ml pro Gallone. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Athena Blended “Normal” schedule 2021 (as in the DWC calculator): 4 veg weeks and 8 bloom weeks. Fade replaces Bloom A and B in the last two weeks. Balance only as pH up when needed, Stack only as a foliar spray up to bloom week 3, Core belongs to the Pro line (powder) – so none of the three is in the feeding plan. Flush: Cleanse 10 ml per gallon. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Athena Blended «Normal» 2021 (come nel calcolatore DWC): 4 settimane di crescita e 8 settimane di fioritura. Fade sostituisce Bloom A e B nelle ultime due settimane. Balance solo come pH+ quando serve, Stack solo come spray fogliare fino alla settimana di fioritura 3, Core fa parte della linea Pro (polvere) – per questo nessuno dei tre è nel piano di irrigazione. Flush: Cleanse 10 ml per gallone. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema Athena Blended «Normal» 2021 (como en la calculadora DWC): 4 semanas de crecimiento y 8 semanas de floración. Fade sustituye a Bloom A y B en las dos últimas semanas. Balance solo como pH+ cuando haga falta, Stack solo como pulverización foliar hasta la semana 3 de floración, Core pertenece a la línea Pro (polvo); por eso ninguno de los tres está en el plan de riego. Flush: Cleanse 10 ml por galón. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 8
    },
    "grow": [
      { "product": "Athena Grow A", "weeks": [1, 2, 3, 4], "ml": [16, 16, 16, 16] },
      { "product": "Athena Grow B", "weeks": [1, 2, 3, 4], "ml": [16, 16, 16, 16] },
      { "product": "Athena CaMg", "weeks": [1, 2, 3, 4], "ml": [5, 5, 5, 5] },
      { "product": "Athena Cleanse", "weeks": [1, 2, 3, 4], "ml": [5, 5, 5, 5] }
    ],
    "bloom": [
      { "product": "Athena Bloom A", "weeks": [1, 2, 3, 4, 5, 6], "ml": [24, 24, 24, 24, 24, 21] },
      { "product": "Athena Bloom B", "weeks": [1, 2, 3, 4, 5, 6], "ml": [24, 24, 24, 24, 24, 21] },
      { "product": "Athena CaMg", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [5, 5, 5, 5, 5, 5, 5] },
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
    "quelle": {
      "de": "Biobizz Nutrient Schedule 2024, Light·Mix/Coco·Mix (biobizz.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Biobizz Nutrient Schedule 2024, Light·Mix/Coco·Mix (biobizz.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Biobizz Nutrient Schedule 2024, Light·Mix/Coco·Mix (biobizz.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Biobizz Nutrient Schedule 2024, Light·Mix/Coco·Mix (biobizz.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Biobizz-Schema 2024 für Light·Mix und Coco·Mix: 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Wuchs 1 = Anzucht, Wuchs 2 = Wachstum. CalMag nur bei Osmose- oder sehr weichem Wasser (0,5 ml/L, gegen Ende der Blüte 1 ml/L). Fish·Mix kann Bio·Grow im Wuchs ersetzen. Die Mischung am selben Tag verbrauchen. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Biobizz schedule 2024 for Light·Mix and Coco·Mix: 2 veg weeks and 9 bloom weeks, the last one for flushing. Veg 1 = seedlings, veg 2 = growth. CalMag only with reverse-osmosis or very soft water (0.5 ml/L, towards the end of bloom 1 ml/L). Fish·Mix can replace Bio·Grow in veg. Use the mix the same day. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Biobizz 2024 per Light·Mix e Coco·Mix: 2 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Crescita 1 = semina, crescita 2 = sviluppo. CalMag solo con acqua osmotica o molto dolce (0,5 ml/L, verso la fine della fioritura 1 ml/L). Fish·Mix può sostituire Bio·Grow in crescita. Usare la miscela lo stesso giorno. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Biobizz 2024 para Light·Mix y Coco·Mix: 2 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Crecimiento 1 = plántula, crecimiento 2 = desarrollo. CalMag solo con agua de ósmosis o muy blanda (0,5 ml/L, hacia el final de la floración 1 ml/L). Fish·Mix puede sustituir a Bio·Grow en crecimiento. Usar la mezcla el mismo día. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Woche 9 laut Biobizz: nur Wasser.",
          "en": "Week 9 per Biobizz: plain water only.",
          "it": "Settimana 9 secondo Biobizz: solo acqua.",
          "es": "Semana 9 según Biobizz: solo agua."
        }
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
    "quelle": {
      "de": "BioTabs Organic Grow Guide V.2026.01 (biotabs.nl), abgerufen 24.9.2026",
      "en": "BioTabs Organic Grow Guide V.2026.01 (biotabs.nl), retrieved 24 Sep 2026",
      "it": "BioTabs Organic Grow Guide V.2026.01 (biotabs.nl), consultato il 24/9/2026",
      "es": "BioTabs Organic Grow Guide V.2026.01 (biotabs.nl), consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem BioTabs Organic Grow Guide (V.2026.01): 3 Wuchswochen und 9 Blütewochen. BioTabs düngt über die Erde: Tabletten, Startrex und Mycotrex kommen beim Eintopfen hinein, danach meist nur Wasser. Erde: Bio-Lightmix oder leicht vorgedüngte Bio-Erde, kein Allmix. Die Gießlösungen gelten pro Liter Wasser, 1 L pro Pflanze. Die Anzucht im kleinen Topf ist optional (5 g Startrex pro Liter Erde, 1 g Mycotrex, erster Guss mit 0,5 g Bactrex und 5 ml Orgatrex pro Liter).",
      "en": "Since 25 Sep 2026 following the BioTabs Organic Grow Guide (V.2026.01): 3 veg weeks and 9 bloom weeks. BioTabs feeds through the soil: tablets, Startrex and Mycotrex go in when potting, after that mostly just water. Soil: organic light mix or lightly pre-fertilised organic soil, no all-mix. The watering solutions are per litre of water, 1 L per plant. Starting in a small pot is optional (5 g Startrex per litre of soil, 1 g Mycotrex, first watering with 0.5 g Bactrex and 5 ml Orgatrex per litre).",
      "it": "Dal 25/9/2026 secondo la BioTabs Organic Grow Guide (V.2026.01): 3 settimane di crescita e 9 settimane di fioritura. BioTabs concima attraverso la terra: compresse, Startrex e Mycotrex si aggiungono al rinvaso, poi per lo più solo acqua. Terra: light mix bio o terra bio leggermente preconcimata, niente all-mix. Le soluzioni di irrigazione valgono per litro d'acqua, 1 L per pianta. La crescita iniziale in vaso piccolo è facoltativa (5 g di Startrex per litro di terra, 1 g di Mycotrex, prima annaffiatura con 0,5 g di Bactrex e 5 ml di Orgatrex per litro).",
      "es": "Desde el 25/9/2026 según la BioTabs Organic Grow Guide (V.2026.01): 3 semanas de crecimiento y 9 semanas de floración. BioTabs abona a través de la tierra: tabletas, Startrex y Mycotrex se añaden al trasplantar; después, casi siempre solo agua. Tierra: light mix ecológico o tierra ecológica ligeramente preabonada, nada de all-mix. Las soluciones de riego son por litro de agua, 1 L por planta. El inicio en maceta pequeña es opcional (5 g de Startrex por litro de tierra, 1 g de Mycotrex, primer riego con 0,5 g de Bactrex y 5 ml de Orgatrex por litro)."
    },
    "wochen": {
      "grow": 3,
      "bloom": 9,
      "nachWuchs": "wasser"
    },
    "grow": [
      {
        "product": "BioTabs",
        "weeks": [1],
        "fest": {
          "de": "beim Eintopfen 10 cm tief: 1 Tablette bei 5 L, 2 bei 10–15 L, 3 bei 20–25 L, 4 bei 30–35 L, 5 bei 50 L Topf",
          "en": "when potting, 10 cm deep: 1 tablet for a 5 L pot, 2 for 10–15 L, 3 for 20–25 L, 4 for 30–35 L, 5 for 50 L",
          "it": "al rinvaso, a 10 cm di profondità: 1 compressa per vaso da 5 L, 2 per 10–15 L, 3 per 20–25 L, 4 per 30–35 L, 5 per 50 L",
          "es": "al trasplantar, a 10 cm de profundidad: 1 tableta para maceta de 5 L, 2 para 10–15 L, 3 para 20–25 L, 4 para 30–35 L, 5 para 50 L"
        }
      },
      {
        "product": "Startrex",
        "weeks": [1],
        "fest": {
          "de": "50 g pro 10 L Erde einmischen (Endtopf)",
          "en": "mix 50 g per 10 L of soil (final pot)",
          "it": "mescolare 50 g ogni 10 L di terra (vaso finale)",
          "es": "mezclar 50 g por 10 L de tierra (maceta final)"
        }
      },
      {
        "product": "Mycotrex",
        "weeks": [1],
        "fest": {
          "de": "5 g ins Pflanzloch",
          "en": "5 g into the planting hole",
          "it": "5 g nella buca d'impianto",
          "es": "5 g en el hoyo de plantación"
        }
      },
      {
        "product": "Bactrex",
        "weeks": [1],
        "ml": [10],
        "einheit": "g",
        "hinweis": {
          "de": "nur beim ersten Guss nach dem Eintopfen, 1 L pro Pflanze",
          "en": "only with the first watering after potting, 1 L per plant",
          "it": "solo alla prima annaffiatura dopo il rinvaso, 1 L per pianta",
          "es": "solo en el primer riego tras el trasplante, 1 L por planta"
        }
      },
      {
        "product": "Orgatrex",
        "weeks": [1],
        "ml": [100],
        "hinweis": {
          "de": "nur beim ersten Guss nach dem Eintopfen, 1 L pro Pflanze",
          "en": "only with the first watering after potting, 1 L per plant",
          "it": "solo alla prima annaffiatura dopo il rinvaso, 1 L per pianta",
          "es": "solo en el primer riego tras el trasplante, 1 L por planta"
        }
      },
      {
        "product": "Boom Boom Spray",
        "weeks": [1],
        "fest": {
          "de": "5 ml pro Liter Wasser, Blätter tropfnass einsprühen – nicht gießen",
          "en": "5 ml per litre of water, spray the leaves until dripping wet – do not water in",
          "it": "5 ml per litro d'acqua, nebulizzare le foglie fino a gocciolare – non annaffiare",
          "es": "5 ml por litro de agua, pulverizar las hojas hasta que goteen; no regar"
        }
      },
      {
        "product": "BioTabs",
        "weeks": [3],
        "fest": {
          "de": "nur wenn der Wuchs länger als 2 Wochen dauert: 1 weitere Tablette 10 cm tief eindrücken",
          "en": "only if veg lasts longer than 2 weeks: press in 1 more tablet 10 cm deep",
          "it": "solo se la crescita dura più di 2 settimane: inserire 1 altra compressa a 10 cm di profondità",
          "es": "solo si el crecimiento dura más de 2 semanas: introducir 1 tableta más a 10 cm de profundidad"
        }
      }
    ],
    "bloom": [
      {
        "product": "Bio PK 5-8",
        "weeks": [2, 4, 6],
        "ml": [100, 100, 100],
        "hinweis": {
          "de": "einmal in dieser Woche, 1 L pro Pflanze",
          "en": "once this week, 1 L per plant",
          "it": "una volta in questa settimana, 1 L per pianta",
          "es": "una vez esta semana, 1 L por planta"
        }
      },
      {
        "product": "Bactrex",
        "weeks": [3],
        "ml": [10],
        "einheit": "g",
        "hinweis": {
          "de": "einmal in dieser Woche, 1 L pro Pflanze",
          "en": "once this week, 1 L per plant",
          "it": "una volta in questa settimana, 1 L per pianta",
          "es": "una vez esta semana, 1 L por planta"
        }
      },
      {
        "product": "Orgatrex",
        "weeks": [3],
        "ml": [200],
        "hinweis": {
          "de": "einmal in dieser Woche, 1 L pro Pflanze",
          "en": "once this week, 1 L per plant",
          "it": "una volta in questa settimana, 1 L per pianta",
          "es": "una vez esta semana, 1 L por planta"
        }
      }
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
    "quelle": {
      "de": "Aptus PREMIUM Organo-Mineral Program 2025 (aptus-holland.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Aptus PREMIUM Organo-Mineral Program 2025 (aptus-holland.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Aptus PREMIUM Organo-Mineral Program 2025 (aptus-holland.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Aptus PREMIUM Organo-Mineral Program 2025 (aptus-holland.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Aptus-Programm PREMIUM Organo-Mineral 2025: 4 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Für Erde und Coco; laut Aptus nicht für DWC, NFT oder Aeroponik (dafür gibt es das CLEAN-Programm). Die Mischung frisch ansetzen und in 1–3 Tagen verbrauchen. Bei Bereichen gilt die Untergrenze. Regulator hieß früher Fasilitor. Optional: RO Water Conditioner bei Osmosewasser, Enzym+. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Aptus PREMIUM Organo-Mineral 2025 program: 4 veg weeks and 9 bloom weeks, the last one for flushing. For soil and coco; per Aptus not for DWC, NFT or aeroponics (the CLEAN program is for those). Mix fresh and use within 1–3 days. Where a range is given, the lower end applies. Regulator used to be called Fasilitor. Optional: RO Water Conditioner with reverse-osmosis water, Enzym+. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo il programma Aptus PREMIUM Organo-Mineral 2025: 4 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Per terra e cocco; secondo Aptus non per DWC, NFT o aeroponica (per quelli c'è il programma CLEAN). Preparare la miscela fresca e usarla entro 1–3 giorni. Dove c'è un intervallo vale il limite inferiore. Regulator prima si chiamava Fasilitor. Facoltativi: RO Water Conditioner con acqua osmotica, Enzym+. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el programa Aptus PREMIUM Organo-Mineral 2025: 4 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Para tierra y coco; según Aptus no para DWC, NFT ni aeroponía (para eso está el programa CLEAN). Preparar la mezcla fresca y usarla en 1–3 días. Donde hay un rango vale el límite inferior. Regulator antes se llamaba Fasilitor. Opcional: RO Water Conditioner con agua de ósmosis, Enzym+. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Woche 9 laut Aptus: spülen.",
          "en": "Week 9 per Aptus: flush.",
          "it": "Settimana 9 secondo Aptus: lavaggio.",
          "es": "Semana 9 según Aptus: lavado."
        }
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
    "quelle": {
      "de": "Mills Grow Chart Regular, Leitungswasser EC 0,7 (mills-nutrients.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Mills Grow Chart Regular, tap water EC 0.7 (mills-nutrients.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Mills Grow Chart Regular, acqua di rubinetto EC 0,7 (mills-nutrients.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Mills Grow Chart Regular, agua del grifo EC 0,7 (mills-nutrients.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Mills-Schema der Regular-Linie mit Leitungswasser: 2 Wuchswochen und 9 Blütewochen. Regular-Linie, gerechnet für Leitungswasser mit EC 0,7; für Osmosewasser nennt Mills höhere Werte. Für die HC-Linie (wie im DWC-Rechner) gilt rund 40 % dieser Mengen. Vitalize zuerst ins Wasser, dann Basis A, dann Basis B, A und B immer gleich viel. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Mills schedule for the Regular line with tap water: 2 veg weeks and 9 bloom weeks. Regular line, calculated for tap water with EC 0.7; for reverse-osmosis water Mills gives higher values. For the HC line (as in the DWC calculator) about 40 % of these amounts applies. Vitalize into the water first, then Basis A, then Basis B, always equal amounts of A and B. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Mills della linea Regular con acqua di rubinetto: 2 settimane di crescita e 9 settimane di fioritura. Linea Regular, calcolata per acqua di rubinetto con EC 0,7; per acqua osmotica Mills indica valori più alti. Per la linea HC (come nel calcolatore DWC) vale circa il 40 % di queste quantità. Prima Vitalize nell'acqua, poi Basis A, poi Basis B, A e B sempre in quantità uguali. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Mills para la línea Regular con agua del grifo: 2 semanas de crecimiento y 9 semanas de floración. Línea Regular, calculada para agua del grifo con EC 0,7; para agua de ósmosis Mills indica valores más altos. Para la línea HC (como en la calculadora DWC) vale aproximadamente el 40 % de estas cantidades. Primero Vitalize en el agua, luego Basis A y después Basis B, A y B siempre en la misma cantidad. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
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
    "quelle": {
      "de": "Remo Nutrients Feed Chart (dort in ml pro Gallone) – Werte wie im DWC-Rechner, abgerufen 24.9.2026",
      "en": "Remo Nutrients Feed Chart (given there in ml per gallon) – values as in the DWC calculator, retrieved 24 Sep 2026",
      "it": "Remo Nutrients Feed Chart (lì in ml per gallone) – valori come nel calcolatore DWC, consultato il 24/9/2026",
      "es": "Remo Nutrients Feed Chart (allí en ml por galón) – valores como en la calculadora DWC, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Remo-Schema (wie im DWC-Rechner): 4 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Micro und Grow bzw. Bloom in gleichen Mengen. Remo nennt keinen EC-Zielwert. MagNifiCal (CalMag) nach Wasserhärte, kein fester Wochenwert. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Remo schedule (as in the DWC calculator): 4 veg weeks and 8 bloom weeks, the last one for flushing. Micro and Grow or Bloom in equal amounts. Remo gives no EC target. MagNifiCal (CalMag) by water hardness, no fixed weekly dose. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Remo (come nel calcolatore DWC): 4 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Micro e Grow o Bloom in quantità uguali. Remo non indica un obiettivo EC. MagNifiCal (CalMag) secondo la durezza dell'acqua, nessuna dose settimanale fissa. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Remo (como en la calculadora DWC): 4 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Micro y Grow o Bloom en cantidades iguales. Remo no indica un objetivo de EC. MagNifiCal (CalMag) según la dureza del agua, sin dosis semanal fija. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 8 laut Remo: nur Wasser.",
          "en": "Week 8 per Remo: plain water only.",
          "it": "Settimana 8 secondo Remo: solo acqua.",
          "es": "Semana 8 según Remo: solo agua."
        }
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
    "quelle": {
      "de": "Cyco Platinum Series Soil Feed Chart, metrisch (cycoflower.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Cyco Platinum Series Soil Feed Chart, metric (cycoflower.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Cyco Platinum Series Soil Feed Chart, metrica (cycoflower.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Cyco Platinum Series Soil Feed Chart, métrica (cycoflower.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Cyco-Erdschema: 6 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Für Erden wie Cyco Seamix/Wormix. Gerechnet für Osmosewasser. Bei hartem Leitungswasser die Grunddünger senken: bei 800 ppm um 1,5 ml/L, bei 600 ppm um 1 ml/L, bei 400 ppm um 0,5 ml/L. Zwischen den Wochen laut Cyco mit Kleanse spülen. Dr Repair ist optional. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Cyco soil schedule: 6 veg weeks and 9 bloom weeks, the last one for flushing. For soils such as Cyco Seamix/Wormix. Calculated for reverse-osmosis water. With hard tap water, lower the base nutrients: at 800 ppm by 1.5 ml/L, at 600 ppm by 1 ml/L, at 400 ppm by 0.5 ml/L. Per Cyco, flush with Kleanse between the weeks. Dr Repair is optional. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Cyco per terra: 6 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Per terricci come Cyco Seamix/Wormix. Calcolato per acqua osmotica. Con acqua di rubinetto dura ridurre i fertilizzanti di base: a 800 ppm di 1,5 ml/L, a 600 ppm di 1 ml/L, a 400 ppm di 0,5 ml/L. Secondo Cyco, tra una settimana e l'altra lavare con Kleanse. Dr Repair è facoltativo. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Cyco para tierra: 6 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Para tierras como Cyco Seamix/Wormix. Calculado para agua de ósmosis. Con agua del grifo dura, bajar los abonos base: con 800 ppm en 1,5 ml/L, con 600 ppm en 1 ml/L, con 400 ppm en 0,5 ml/L. Según Cyco, lavar con Kleanse entre semanas. Dr Repair es opcional. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 6,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Laut Cyco: Endspülung mit Kleanse.",
          "en": "Per Cyco: final flush with Kleanse.",
          "it": "Secondo Cyco: lavaggio finale con Kleanse.",
          "es": "Según Cyco: lavado final con Kleanse."
        }
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
      {
        "product": "Dr Repair",
        "weeks": [1, 2, 3, 4, 5, 6],
        "ml": [10, 10, 10, 10, 10, 10],
        "hinweis": {
          "de": "optional",
          "en": "optional",
          "it": "facoltativo",
          "es": "opcional"
        }
      }
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
      {
        "product": "Dr Repair",
        "weeks": [1, 2, 3, 4, 5, 6, 7, 8],
        "ml": [10, 10, 10, 10, 10, 10, 10, 10],
        "hinweis": {
          "de": "optional",
          "en": "optional",
          "it": "facoltativo",
          "es": "opcional"
        }
      }
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
    "quelle": {
      "de": "Cyco Platinum Series Advanced Feed Chart, metrisch (cycoflower.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Cyco Platinum Series Advanced Feed Chart, metric (cycoflower.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Cyco Platinum Series Advanced Feed Chart, metrica (cycoflower.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Cyco Platinum Series Advanced Feed Chart, métrica (cycoflower.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Advanced-Schema von Cyco (für alle Medien außer DWC): 6 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Gerechnet für Osmosewasser. Bei hartem Leitungswasser die Grunddünger senken: bei 800 ppm um 1,5 ml/L, bei 600 ppm um 1 ml/L, bei 400 ppm um 0,5 ml/L. Zwischen den Wochen laut Cyco mit Kleanse spülen. Dr Repair ist optional. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following Cyco’s Advanced schedule (for all media except DWC): 6 veg weeks and 9 bloom weeks, the last one for flushing. Calculated for reverse-osmosis water. With hard tap water, lower the base nutrients: at 800 ppm by 1.5 ml/L, at 600 ppm by 1 ml/L, at 400 ppm by 0.5 ml/L. Per Cyco, flush with Kleanse between the weeks. Dr Repair is optional. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Advanced di Cyco (per tutti i substrati tranne il DWC): 6 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Calcolato per acqua osmotica. Con acqua di rubinetto dura ridurre i fertilizzanti di base: a 800 ppm di 1,5 ml/L, a 600 ppm di 1 ml/L, a 400 ppm di 0,5 ml/L. Secondo Cyco, tra una settimana e l'altra lavare con Kleanse. Dr Repair è facoltativo. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema Advanced de Cyco (para todos los medios excepto DWC): 6 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Calculado para agua de ósmosis. Con agua del grifo dura, bajar los abonos base: con 800 ppm en 1,5 ml/L, con 600 ppm en 1 ml/L, con 400 ppm en 0,5 ml/L. Según Cyco, lavar con Kleanse entre semanas. Dr Repair es opcional. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 6,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Laut Cyco: Endspülung mit Kleanse.",
          "en": "Per Cyco: final flush with Kleanse.",
          "it": "Secondo Cyco: lavaggio finale con Kleanse.",
          "es": "Según Cyco: lavado final con Kleanse."
        }
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
      {
        "product": "Dr Repair",
        "weeks": [1, 2, 3, 4, 5, 6],
        "ml": [10, 10, 10, 10, 10, 10],
        "hinweis": {
          "de": "optional",
          "en": "optional",
          "it": "facoltativo",
          "es": "opcional"
        }
      }
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
      {
        "product": "Dr Repair",
        "weeks": [1, 2, 3, 4, 5, 6, 7, 8],
        "ml": [10, 10, 10, 10, 10, 10, 10, 10],
        "hinweis": {
          "de": "optional",
          "en": "optional",
          "it": "facoltativo",
          "es": "opcional"
        }
      }
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
    "quelle": {
      "de": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), dort in ml pro Gallone Osmosewasser, abgerufen 25.9.2026",
      "en": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), given there in ml per gallon of reverse-osmosis water, retrieved 25 Sep 2026",
      "it": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), lì in ml per gallone di acqua osmotica, consultato il 25/9/2026",
      "es": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), allí en ml por galón de agua de ósmosis, consultado el 25/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem 8-Wochen-Chart von House & Garden (Soil A & B): 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Offizielles 8-Wochen-Chart von House & Garden (2025), gerechnet für Osmosewasser: 2 Wuchs- und 8 Blütewochen, danach 3–5 Tage spülen. Stecklinge vorher mit 2,5 ml A und B pro Gallone (6,6 ml pro 10 L). Nitrogen Boost (0,5–2 ml pro Gallone) ist optional, Magic Green nur als Blattspray. Top Shooter oder Shooting Powder, nie beides. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the House & Garden 8-week chart (Soil A & B): 2 veg weeks and 9 bloom weeks, the last one for flushing. Official House & Garden 8-week chart (2025), calculated for reverse-osmosis water: 2 veg and 8 bloom weeks, then flush for 3–5 days. Cuttings beforehand with 2.5 ml A and B per gallon (6.6 ml per 10 L). Nitrogen Boost (0.5–2 ml per gallon) is optional, Magic Green only as a foliar spray. Top Shooter or Shooting Powder, never both. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo la tabella di 8 settimane di House & Garden (Soil A & B): 2 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Tabella ufficiale di 8 settimane di House & Garden (2025), calcolata per acqua osmotica: 2 settimane di crescita e 8 di fioritura, poi 3–5 giorni di lavaggio. Talee prima con 2,5 ml di A e B per gallone (6,6 ml ogni 10 L). Nitrogen Boost (0,5–2 ml per gallone) è facoltativo, Magic Green solo come spray fogliare. Top Shooter o Shooting Powder, mai entrambi. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según la tabla de 8 semanas de House & Garden (Soil A & B): 2 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Tabla oficial de 8 semanas de House & Garden (2025), calculada para agua de ósmosis: 2 semanas de crecimiento y 8 de floración, después 3–5 días de lavado. Esquejes antes con 2,5 ml de A y B por galón (6,6 ml por 10 L). Nitrogen Boost (0,5–2 ml por galón) es opcional, Magic Green solo como pulverización foliar. Top Shooter o Shooting Powder, nunca los dos. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "laut House & Garden 3–5 Tage spülen.",
          "en": "per House & Garden, flush for 3–5 days.",
          "it": "secondo House & Garden, lavare per 3–5 giorni.",
          "es": "según House & Garden, lavar durante 3–5 días."
        }
      }
    },
    "grow": [
      { "product": "Soil A", "weeks": [1, 2], "ml": [21.1, 25.1] },
      { "product": "Soil B", "weeks": [1, 2], "ml": [21.1, 25.1] },
      { "product": "Roots Excelurator", "weeks": [1, 2], "ml": [2.6, 2.6] },
      { "product": "Amino Treatment", "weeks": [1, 2], "ml": [2.1, 4] },
      { "product": "Multi Zen", "weeks": [1, 2], "ml": [10, 10] },
      {
        "product": "Algen Extract",
        "weeks": [1, 2],
        "ml": [2.6, 2.6],
        "hinweis": {
          "de": "optional",
          "en": "optional",
          "it": "facoltativo",
          "es": "opcional"
        }
      },
      { "product": "Drip Clean", "weeks": [1, 2], "ml": [1.1, 1.1] }
    ],
    "bloom": [
      { "product": "Soil A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [30.4, 35.7, 39.6, 47.6, 44.9, 30.4, 30.4, 30.4] },
      { "product": "Soil B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [30.4, 35.7, 39.6, 47.6, 44.9, 30.4, 30.4, 30.4] },
      { "product": "Roots Excelurator", "weeks": [1, 2, 3], "ml": [2.6, 2.6, 2.6] },
      { "product": "Amino Treatment", "weeks": [1, 2, 3], "ml": [6.6, 6.6, 6.6] },
      { "product": "Multi Zen", "weeks": [1, 2, 3], "ml": [10, 10, 10] },
      {
        "product": "Algen Extract",
        "weeks": [1, 2, 3],
        "ml": [2.6, 2.6, 2.6],
        "hinweis": {
          "de": "optional",
          "en": "optional",
          "it": "facoltativo",
          "es": "opcional"
        }
      },
      { "product": "Bud XL", "weeks": [4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10] },
      { "product": "Top Booster", "weeks": [5], "ml": [10.6] },
      {
        "product": "Top Shooter",
        "weeks": [6, 7, 8],
        "ml": [7.4, 15.1, 15.1],
        "hinweis": {
          "de": "oder Shooting Powder (2,6/5,2/5,2 g pro Gallone) – nie beides",
          "en": "or Shooting Powder (2.6/5.2/5.2 g per gallon) – never both",
          "it": "oppure Shooting Powder (2,6/5,2/5,2 g per gallone) – mai entrambi",
          "es": "o Shooting Powder (2,6/5,2/5,2 g por galón), nunca los dos"
        }
      },
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
    "quelle": {
      "de": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), dort in ml pro Gallone Osmosewasser, abgerufen 25.9.2026",
      "en": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), given there in ml per gallon of reverse-osmosis water, retrieved 25 Sep 2026",
      "it": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), lì in ml per gallone di acqua osmotica, consultato il 25/9/2026",
      "es": "House & Garden 8 Week Feed Chart 2025 (house-garden.us), allí en ml por galón de agua de ósmosis, consultado el 25/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem 8-Wochen-Chart von House & Garden (Cocos A & B): 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Offizielles 8-Wochen-Chart von House & Garden (2025), gerechnet für Osmosewasser: 2 Wuchs- und 8 Blütewochen, danach 3–5 Tage spülen. Stecklinge vorher mit 2,5 ml A und B pro Gallone (6,6 ml pro 10 L). Nitrogen Boost (0,5–2 ml pro Gallone) ist optional, Magic Green nur als Blattspray. Top Shooter oder Shooting Powder, nie beides. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the House & Garden 8-week chart (Cocos A & B): 2 veg weeks and 9 bloom weeks, the last one for flushing. Official House & Garden 8-week chart (2025), calculated for reverse-osmosis water: 2 veg and 8 bloom weeks, then flush for 3–5 days. Cuttings beforehand with 2.5 ml A and B per gallon (6.6 ml per 10 L). Nitrogen Boost (0.5–2 ml per gallon) is optional, Magic Green only as a foliar spray. Top Shooter or Shooting Powder, never both. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo la tabella di 8 settimane di House & Garden (Cocos A & B): 2 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Tabella ufficiale di 8 settimane di House & Garden (2025), calcolata per acqua osmotica: 2 settimane di crescita e 8 di fioritura, poi 3–5 giorni di lavaggio. Talee prima con 2,5 ml di A e B per gallone (6,6 ml ogni 10 L). Nitrogen Boost (0,5–2 ml per gallone) è facoltativo, Magic Green solo come spray fogliare. Top Shooter o Shooting Powder, mai entrambi. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según la tabla de 8 semanas de House & Garden (Cocos A & B): 2 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Tabla oficial de 8 semanas de House & Garden (2025), calculada para agua de ósmosis: 2 semanas de crecimiento y 8 de floración, después 3–5 días de lavado. Esquejes antes con 2,5 ml de A y B por galón (6,6 ml por 10 L). Nitrogen Boost (0,5–2 ml por galón) es opcional, Magic Green solo como pulverización foliar. Top Shooter o Shooting Powder, nunca los dos. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "laut House & Garden 3–5 Tage spülen.",
          "en": "per House & Garden, flush for 3–5 days.",
          "it": "secondo House & Garden, lavare per 3–5 giorni.",
          "es": "según House & Garden, lavar durante 3–5 días."
        }
      }
    },
    "grow": [
      { "product": "Cocos A", "weeks": [1, 2], "ml": [14.5, 15.9] },
      { "product": "Cocos B", "weeks": [1, 2], "ml": [14.5, 15.9] },
      { "product": "Roots Excelurator", "weeks": [1, 2], "ml": [2.6, 2.6] },
      { "product": "Amino Treatment", "weeks": [1, 2], "ml": [2.1, 4] },
      { "product": "Multi Zen", "weeks": [1, 2], "ml": [10, 10] },
      {
        "product": "Algen Extract",
        "weeks": [1, 2],
        "ml": [2.6, 2.6],
        "hinweis": {
          "de": "optional",
          "en": "optional",
          "it": "facoltativo",
          "es": "opcional"
        }
      },
      { "product": "Drip Clean", "weeks": [1, 2], "ml": [1.1, 1.1] }
    ],
    "bloom": [
      { "product": "Cocos A", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [17.2, 19.8, 22.5, 25.1, 23.8, 19.8, 19.8, 19.8] },
      { "product": "Cocos B", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [17.2, 19.8, 22.5, 25.1, 23.8, 19.8, 19.8, 19.8] },
      { "product": "Roots Excelurator", "weeks": [1, 2, 3], "ml": [2.6, 2.6, 2.6] },
      { "product": "Amino Treatment", "weeks": [1, 2, 3], "ml": [6.6, 6.6, 6.6] },
      { "product": "Multi Zen", "weeks": [1, 2, 3], "ml": [10, 10, 10] },
      {
        "product": "Algen Extract",
        "weeks": [1, 2, 3],
        "ml": [2.6, 2.6, 2.6],
        "hinweis": {
          "de": "optional",
          "en": "optional",
          "it": "facoltativo",
          "es": "opcional"
        }
      },
      { "product": "Bud XL", "weeks": [4, 5, 6, 7, 8], "ml": [10, 10, 10, 10, 10] },
      { "product": "Top Booster", "weeks": [5], "ml": [10.6] },
      {
        "product": "Top Shooter",
        "weeks": [6, 7, 8],
        "ml": [7.4, 15.1, 15.1],
        "hinweis": {
          "de": "oder Shooting Powder (2,6/5,2/5,2 g pro Gallone) – nie beides",
          "en": "or Shooting Powder (2.6/5.2/5.2 g per gallon) – never both",
          "it": "oppure Shooting Powder (2,6/5,2/5,2 g per gallone) – mai entrambi",
          "es": "o Shooting Powder (2,6/5,2/5,2 g por galón), nunca los dos"
        }
      },
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
    "quelle": {
      "de": "Atami Grow Guide B’cuzz Soil 2024 (atami.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Atami Grow Guide B’cuzz Soil 2024 (atami.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Atami Grow Guide B’cuzz Soil 2024 (atami.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Atami Grow Guide B’cuzz Soil 2024 (atami.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Atami-Schema B’cuzz Soil (2024): 2 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Bei Bereichen gilt die Untergrenze. Die ATA-Terra-Linie ist eine zweite Erdlinie von Atami und kommt nicht zusätzlich dazu – sonst doppelte Grunddüngung. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Atami B’cuzz Soil schedule (2024): 2 veg weeks and 8 bloom weeks, the last one for flushing. Where a range is given, the lower end applies. The ATA Terra line is a second Atami soil line and is not added on top – that would double the base feeding. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Atami B’cuzz Soil (2024): 2 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Dove c'è un intervallo vale il limite inferiore. La linea ATA Terra è una seconda linea per terra di Atami e non va aggiunta – altrimenti la concimazione di base sarebbe doppia. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema Atami B’cuzz Soil (2024): 2 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Donde hay un rango vale el límite inferior. La línea ATA Terra es una segunda línea de tierra de Atami y no se añade encima; si no, el abonado base sería doble. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 8 laut Atami: nur Wasser.",
          "en": "Week 8 per Atami: plain water only.",
          "it": "Settimana 8 secondo Atami: solo acqua.",
          "es": "Semana 8 según Atami: solo agua."
        }
      }
    },
    "grow": [
      { "product": "B’cuzz Soil A", "weeks": [1, 2], "ml": [20, 28] },
      { "product": "B’cuzz Soil B", "weeks": [1, 2], "ml": [20, 28] },
      { "product": "Root Stimulator", "weeks": [1, 2], "ml": [10, 5] },
      { "product": "Soil Booster Universal", "weeks": [2], "ml": [5] },
      { "product": "Silic Boost", "weeks": [1, 2], "ml": [1, 1] },
      { "product": "Atazyme", "weeks": [2], "ml": [10] },
      {
        "product": "ATA CalMag",
        "weeks": [1, 2],
        "ml": [2, 2],
        "hinweis": {
          "de": "je nach Wasserhärte",
          "en": "depending on water hardness",
          "it": "secondo la durezza dell'acqua",
          "es": "según la dureza del agua"
        }
      }
    ],
    "bloom": [
      { "product": "B’cuzz Soil A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [35, 40, 40, 38, 38, 35, 35] },
      { "product": "B’cuzz Soil B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [35, 40, 40, 38, 38, 35, 35] },
      { "product": "Blossom Builder", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [4, 4, 4, 4, 4, 4, 4] },
      { "product": "Bloom Stimulator", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [5, 5, 5, 5, 5, 5, 5] },
      { "product": "Silic Boost", "weeks": [1, 2, 3, 4], "ml": [1, 1, 1, 1] },
      { "product": "Atazyme", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [10, 10, 10, 10, 10, 10, 10] },
      {
        "product": "ATA CalMag",
        "weeks": [1, 2, 3, 4, 5, 6, 7],
        "ml": [2, 2, 1, 1, 1, 1, 1],
        "hinweis": {
          "de": "je nach Wasserhärte",
          "en": "depending on water hardness",
          "it": "secondo la durezza dell'acqua",
          "es": "según la dureza del agua"
        }
      }
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
    "quelle": {
      "de": "Atami Grow Guide B’cuzz Coco 2024 (atami.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Atami Grow Guide B’cuzz Coco 2024 (atami.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Atami Grow Guide B’cuzz Coco 2024 (atami.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Atami Grow Guide B’cuzz Coco 2024 (atami.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Atami-Schema B’cuzz Coco (2024): 2 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Bei Bereichen gilt die Untergrenze. Die ATA-Linie kommt nicht zusätzlich dazu – sonst doppelte Grunddüngung. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Atami B’cuzz Coco schedule (2024): 2 veg weeks and 8 bloom weeks, the last one for flushing. Where a range is given, the lower end applies. The ATA line is not added on top – that would double the base feeding. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Atami B’cuzz Coco (2024): 2 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Dove c'è un intervallo vale il limite inferiore. La linea ATA non va aggiunta – altrimenti la concimazione di base sarebbe doppia. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema Atami B’cuzz Coco (2024): 2 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Donde hay un rango vale el límite inferior. La línea ATA no se añade encima; si no, el abonado base sería doble. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 8 laut Atami: nur Wasser.",
          "en": "Week 8 per Atami: plain water only.",
          "it": "Settimana 8 secondo Atami: solo acqua.",
          "es": "Semana 8 según Atami: solo agua."
        }
      }
    },
    "grow": [
      { "product": "B’cuzz Coco A", "weeks": [1, 2], "ml": [10, 15] },
      { "product": "B’cuzz Coco B", "weeks": [1, 2], "ml": [10, 15] },
      { "product": "Root Stimulator", "weeks": [1, 2], "ml": [10, 5] },
      { "product": "Coco Booster Universal", "weeks": [2], "ml": [5] },
      { "product": "Silic Boost", "weeks": [1, 2], "ml": [1, 1] },
      { "product": "Atazyme", "weeks": [2], "ml": [10] },
      {
        "product": "ATA CalMag",
        "weeks": [1, 2],
        "ml": [3, 3],
        "hinweis": {
          "de": "je nach Wasserhärte",
          "en": "depending on water hardness",
          "it": "secondo la durezza dell'acqua",
          "es": "según la dureza del agua"
        }
      }
    ],
    "bloom": [
      { "product": "B’cuzz Coco A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 24, 23, 22, 21, 20, 20] },
      { "product": "B’cuzz Coco B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 24, 23, 22, 21, 20, 20] },
      { "product": "Blossom Builder", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [4, 4, 4, 4, 4, 4, 4] },
      { "product": "Coco Bloom Stimulator", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [5, 5, 5, 5, 5, 5, 5] },
      { "product": "Silic Boost", "weeks": [1, 2, 3, 4], "ml": [1, 1, 1, 1] },
      { "product": "Atazyme", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [10, 10, 10, 10, 10, 10, 10] },
      {
        "product": "ATA CalMag",
        "weeks": [1, 2, 3, 4, 5, 6, 7],
        "ml": [2, 2, 1, 1, 1, 1, 1],
        "hinweis": {
          "de": "je nach Wasserhärte",
          "en": "depending on water hardness",
          "it": "secondo la durezza dell'acqua",
          "es": "según la dureza del agua"
        }
      }
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
    "quelle": {
      "de": "Dutchpro Feed Chart Soil, hartes Wasser (dutchprousa.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Dutchpro Feed Chart Soil, hard water (dutchprousa.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Dutchpro Feed Chart Soil, acqua dura (dutchprousa.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Dutchpro Feed Chart Soil, agua dura (dutchprousa.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Dutch-Pro-Schema für Erde und hartes Wasser: 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Grow und Bloom A und B je 2,5–5 ml/L, hier die Untergrenze; nach EC steigern (Wuchs 1,5–2,0, Blüte 1,8–2,3). Für weiches oder Osmosewasser hat Dutch Pro ein eigenes Schema. Optional laut Schema: Amino Strength, CalMag, Keep it Clean. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Dutch Pro schedule for soil and hard water: 2 veg weeks and 9 bloom weeks, the last one for flushing. Grow and Bloom A and B at 2.5–5 ml/L each, here the lower end; raise by EC (veg 1.5–2.0, bloom 1.8–2.3). For soft or reverse-osmosis water Dutch Pro has a separate schedule. Optional per the schedule: Amino Strength, CalMag, Keep it Clean. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Dutch Pro per terra e acqua dura: 2 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Grow e Bloom A e B a 2,5–5 ml/L ciascuno, qui il limite inferiore; aumentare in base all'EC (crescita 1,5–2,0, fioritura 1,8–2,3). Per acqua dolce o osmotica Dutch Pro ha uno schema a parte. Facoltativi secondo lo schema: Amino Strength, CalMag, Keep it Clean. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Dutch Pro para tierra y agua dura: 2 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Grow y Bloom A y B a 2,5–5 ml/L cada uno, aquí el límite inferior; subir según la EC (crecimiento 1,5–2,0, floración 1,8–2,3). Para agua blanda o de ósmosis Dutch Pro tiene un esquema propio. Opcionales según el esquema: Amino Strength, CalMag, Keep it Clean. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Nach Blütewoche 8 laut Dutch Pro: spülen.",
          "en": "After bloom week 8 per Dutch Pro: flush.",
          "it": "Dopo la settimana di fioritura 8 secondo Dutch Pro: lavaggio.",
          "es": "Tras la semana 8 de floración según Dutch Pro: lavado."
        }
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
    "quelle": {
      "de": "Dutchpro Feed Chart Hydro/Coco, hartes Wasser (dutchprousa.com), dort in ml pro Liter, abgerufen 25.9.2026",
      "en": "Dutchpro Feed Chart Hydro/Coco, hard water (dutchprousa.com), given there in ml per litre, retrieved 25 Sep 2026",
      "it": "Dutchpro Feed Chart Hydro/Coco, acqua dura (dutchprousa.com), lì in ml per litro, consultato il 25/9/2026",
      "es": "Dutchpro Feed Chart Hydro/Coco, agua dura (dutchprousa.com), allí en ml por litro, consultado el 25/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Dutch-Pro-Schema für Hydro/Coco und hartes Wasser: 2 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Grow und Bloom Hydro/Coco A und B je 2,5–3,5 ml/L, hier die Untergrenze; nach EC steigern (Wuchs 1,8–2,0, Blüte 1,8–2,4). Für weiches oder Osmosewasser hat Dutch Pro ein eigenes Schema. Optional laut Schema: Amino Strength, CalMag, Leaf Green (Blattspray), Keep it Clean. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Dutch Pro schedule for hydro/coco and hard water: 2 veg weeks and 9 bloom weeks, the last one for flushing. Grow and Bloom Hydro/Coco A and B at 2.5–3.5 ml/L each, here the lower end; raise by EC (veg 1.8–2.0, bloom 1.8–2.4). For soft or reverse-osmosis water Dutch Pro has a separate schedule. Optional per the schedule: Amino Strength, CalMag, Leaf Green (foliar spray), Keep it Clean. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Dutch Pro per idro/cocco e acqua dura: 2 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Grow e Bloom Hydro/Coco A e B a 2,5–3,5 ml/L ciascuno, qui il limite inferiore; aumentare in base all'EC (crescita 1,8–2,0, fioritura 1,8–2,4). Per acqua dolce o osmotica Dutch Pro ha uno schema a parte. Facoltativi secondo lo schema: Amino Strength, CalMag, Leaf Green (spray fogliare), Keep it Clean. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Dutch Pro para hidro/coco y agua dura: 2 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Grow y Bloom Hydro/Coco A y B a 2,5–3,5 ml/L cada uno, aquí el límite inferior; subir según la EC (crecimiento 1,8–2,0, floración 1,8–2,4). Para agua blanda o de ósmosis Dutch Pro tiene un esquema propio. Opcionales según el esquema: Amino Strength, CalMag, Leaf Green (pulverización foliar), Keep it Clean. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Nach Blütewoche 8 laut Dutch Pro: spülen.",
          "en": "After bloom week 8 per Dutch Pro: flush.",
          "it": "Dopo la settimana di fioritura 8 secondo Dutch Pro: lavaggio.",
          "es": "Tras la semana 8 de floración según Dutch Pro: lavado."
        }
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
    "quelle": {
      "de": "Shogun LED Coco and Terra Feedchart (AQUA280), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Shogun LED Coco and Terra Feedchart (AQUA280), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Shogun LED Coco and Terra Feedchart (AQUA280), lì in ml per litro, consultato il 24/9/2026",
      "es": "Shogun LED Coco and Terra Feedchart (AQUA280), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem LED-Schema von Shogun (Samurai Terra): 4 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Samurai Terra Grow und Bloom sind einteilig. Gerechnet für mäßig hartes Wasser (EC um 0,4). Sämlinge vorher 1–2 Wochen mit 4 ml/L Shogun Start und 5 ml/L Katana Roots. Silicon vorher in 5 L Wasser vormischen. CalMag nur bei Osmose- oder weichem Wasser (0,5–1 ml/L), Geisha einmal pro Woche als Blattspray. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following Shogun’s LED schedule (Samurai Terra): 4 veg weeks and 9 bloom weeks, the last one for flushing. Samurai Terra Grow and Bloom are one-part. Calculated for moderately hard water (EC around 0.4). Seedlings beforehand for 1–2 weeks with 4 ml/L Shogun Start and 5 ml/L Katana Roots. Pre-mix Silicon in 5 L of water first. CalMag only with reverse-osmosis or soft water (0.5–1 ml/L), Geisha once a week as a foliar spray. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema LED di Shogun (Samurai Terra): 4 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Samurai Terra Grow e Bloom sono monocomponenti. Calcolato per acqua moderatamente dura (EC circa 0,4). Piantine prima per 1–2 settimane con 4 ml/L di Shogun Start e 5 ml/L di Katana Roots. Premiscelare Silicon in 5 L d'acqua. CalMag solo con acqua osmotica o dolce (0,5–1 ml/L), Geisha una volta a settimana come spray fogliare. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema LED de Shogun (Samurai Terra): 4 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Samurai Terra Grow y Bloom son de un solo componente. Calculado para agua moderadamente dura (EC en torno a 0,4). Plántulas antes durante 1–2 semanas con 4 ml/L de Shogun Start y 5 ml/L de Katana Roots. Premezclar Silicon en 5 L de agua. CalMag solo con agua de ósmosis o blanda (0,5–1 ml/L), Geisha una vez por semana como pulverización foliar. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Letzte Woche laut Shogun: nur Wasser.",
          "en": "Last week per Shogun: plain water only.",
          "it": "Ultima settimana secondo Shogun: solo acqua.",
          "es": "Última semana según Shogun: solo agua."
        }
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
    "quelle": {
      "de": "Shogun LED Coco and Terra Feedchart (AQUA280), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Shogun LED Coco and Terra Feedchart (AQUA280), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Shogun LED Coco and Terra Feedchart (AQUA280), lì in ml per litro, consultato il 24/9/2026",
      "es": "Shogun LED Coco and Terra Feedchart (AQUA280), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem LED-Schema von Shogun (Samurai Coco): 4 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Gerechnet für mäßig hartes Wasser (EC um 0,4). Sämlinge vorher 1–2 Wochen mit 4 ml/L Shogun Start und 5 ml/L Katana Roots. Silicon vorher in 5 L Wasser vormischen. CalMag nur bei Osmose- oder weichem Wasser (0,5–1 ml/L), Geisha einmal pro Woche als Blattspray. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following Shogun’s LED schedule (Samurai Coco): 4 veg weeks and 9 bloom weeks, the last one for flushing. Calculated for moderately hard water (EC around 0.4). Seedlings beforehand for 1–2 weeks with 4 ml/L Shogun Start and 5 ml/L Katana Roots. Pre-mix Silicon in 5 L of water first. CalMag only with reverse-osmosis or soft water (0.5–1 ml/L), Geisha once a week as a foliar spray. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema LED di Shogun (Samurai Coco): 4 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Calcolato per acqua moderatamente dura (EC circa 0,4). Piantine prima per 1–2 settimane con 4 ml/L di Shogun Start e 5 ml/L di Katana Roots. Premiscelare Silicon in 5 L d'acqua. CalMag solo con acqua osmotica o dolce (0,5–1 ml/L), Geisha una volta a settimana come spray fogliare. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema LED de Shogun (Samurai Coco): 4 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Calculado para agua moderadamente dura (EC en torno a 0,4). Plántulas antes durante 1–2 semanas con 4 ml/L de Shogun Start y 5 ml/L de Katana Roots. Premezclar Silicon en 5 L de agua. CalMag solo con agua de ósmosis o blanda (0,5–1 ml/L), Geisha una vez por semana como pulverización foliar. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Letzte Woche laut Shogun: nur Wasser.",
          "en": "Last week per Shogun: plain water only.",
          "it": "Ultima settimana secondo Shogun: solo acqua.",
          "es": "Última semana según Shogun: solo agua."
        }
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
    "quelle": {
      "de": "BAC Schedule Organic Grow/Bloom 2017 (bacfertilizers.com), abgerufen 24.9.2026",
      "en": "BAC Schedule Organic Grow/Bloom 2017 (bacfertilizers.com), retrieved 24 Sep 2026",
      "it": "BAC Schedule Organic Grow/Bloom 2017 (bacfertilizers.com), consultato il 24/9/2026",
      "es": "BAC Schedule Organic Grow/Bloom 2017 (bacfertilizers.com), consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem BAC-Schema Organic Grow/Bloom: 2 Wuchswochen und 9 Blütewochen. Bio-Linie für Erde; für Coco hat BAC ein eigenes Coco/Hydro-Schema. Bei Bereichen gilt die Untergrenze. F1 Extreme, Lactic Acid Bacteria und Final Solution stehen nicht im Schema. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the BAC Organic Grow/Bloom schedule: 2 veg weeks and 9 bloom weeks. Organic line for soil; for coco BAC has a separate coco/hydro schedule. Where a range is given, the lower end applies. F1 Extreme, Lactic Acid Bacteria and Final Solution are not in the schedule. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema BAC Organic Grow/Bloom: 2 settimane di crescita e 9 settimane di fioritura. Linea bio per terra; per il cocco BAC ha uno schema cocco/idro a parte. Dove c'è un intervallo vale il limite inferiore. F1 Extreme, Lactic Acid Bacteria e Final Solution non sono nello schema. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema BAC Organic Grow/Bloom: 2 semanas de crecimiento y 9 semanas de floración. Línea ecológica para tierra; para coco BAC tiene un esquema coco/hidro propio. Donde hay un rango vale el límite inferior. F1 Extreme, Lactic Acid Bacteria y Final Solution no están en el esquema. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 2,
      "bloom": 9
    },
    "grow": [
      { "product": "Organic Grow", "weeks": [1, 2], "ml": [10, 10] },
      { "product": "Root Stimulator", "weeks": [1, 2], "ml": [1, 2] },
      {
        "product": "Fine Solution",
        "weeks": [1],
        "ml": [6],
        "hinweis": {
          "de": "nur einmal in dieser Woche",
          "en": "only once this week",
          "it": "solo una volta in questa settimana",
          "es": "solo una vez esta semana"
        }
      }
    ],
    "bloom": [
      { "product": "Organic Bloom", "weeks": [1, 2, 3, 4, 5, 6, 7, 8], "ml": [20, 20, 20, 20, 20, 20, 20, 20] },
      { "product": "Organic PK Booster", "weeks": [2, 3, 4, 5, 6, 7, 8], "ml": [10, 15, 20, 30, 30, 30, 20] },
      { "product": "Root Stimulator", "weeks": [1, 2], "ml": [2, 2] },
      { "product": "Bloom Stimulator", "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ml": [2, 2, 2, 2, 2, 2, 2, 2, 2] },
      {
        "product": "Fine Solution",
        "weeks": [1, 5],
        "ml": [6, 6],
        "hinweis": {
          "de": "nur einmal in dieser Woche",
          "en": "only once this week",
          "it": "solo una volta in questa settimana",
          "es": "solo una vez esta semana"
        }
      }
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
    "quelle": {
      "de": "Metrop Soil/Coco/Hydro Grow Schedule (metrop.net), dort in ml pro 100 L, abgerufen 24.9.2026",
      "en": "Metrop Soil/Coco/Hydro Grow Schedule (metrop.net), given there in ml per 100 L, retrieved 24 Sep 2026",
      "it": "Metrop Soil/Coco/Hydro Grow Schedule (metrop.net), lì in ml per 100 L, consultato il 24/9/2026",
      "es": "Metrop Soil/Coco/Hydro Grow Schedule (metrop.net), allí en ml por 100 L, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Metrop-Schema für Erde, Coco und Hydro: einer Wuchsstufe und 10 Blütewochen. Metrop gibt die Mengen pro 100 L an, hier umgerechnet. Der Wuchs hat eine Stufe für die ganze Wuchszeit. MR1 ist der Wuchs- und Frühblütedünger, MR2 der Blütedünger ab Woche 4. Calgreen als Letztes zugeben. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Metrop schedule for soil, coco and hydro: one veg stage and 10 bloom weeks. Metrop gives the amounts per 100 L, converted here. Veg has one stage for the whole veg period. MR1 is the veg and early-bloom feed, MR2 the bloom feed from week 4. Add Calgreen last. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Metrop per terra, cocco e idro: una fase di crescita e 10 settimane di fioritura. Metrop indica le quantità per 100 L, qui convertite. La crescita ha un solo livello per tutto il periodo di crescita. MR1 è il fertilizzante per crescita e inizio fioritura, MR2 quello per la fioritura dalla settimana 4. Aggiungere Calgreen per ultimo. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Metrop para tierra, coco e hidro: una fase de crecimiento y 10 semanas de floración. Metrop indica las cantidades por 100 L, aquí convertidas. El crecimiento tiene un único nivel para todo el periodo. MR1 es el abono de crecimiento y floración temprana, MR2 el de floración desde la semana 4. Añadir Calgreen en último lugar. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
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
    "quelle": {
      "de": "Top Crop Tabla de cultivo, Erde (topcropfert.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Top Crop Tabla de cultivo, soil (topcropfert.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Top Crop Tabla de cultivo, terra (topcropfert.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Top Crop Tabla de cultivo, tierra (topcropfert.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Top-Crop-Schema für Erde (volles Programm): 5 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Top Crop zählt die Wochen durch: Wuchs = Woche 1–5, Blüte = Woche 6–12, Woche 13 Top Wash. Jede Dosis nur einmal pro Woche geben, sonst mit Wasser gießen. Deeper Underground laut Schema 1–2 ml pro 1,5 L. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Top Crop soil schedule (full program): 5 veg weeks and 8 bloom weeks, the last one for flushing. Top Crop numbers the weeks straight through: veg = weeks 1–5, bloom = weeks 6–12, week 13 Top Wash. Give each dose only once a week, otherwise water plain. Deeper Underground per the schedule 1–2 ml per 1.5 L. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Top Crop per terra (programma completo): 5 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Top Crop numera le settimane di seguito: crescita = settimane 1–5, fioritura = settimane 6–12, settimana 13 Top Wash. Dare ogni dose una sola volta a settimana, altrimenti annaffiare con acqua. Deeper Underground secondo lo schema 1–2 ml ogni 1,5 L. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Top Crop para tierra (programa completo): 5 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Top Crop numera las semanas de forma continua: crecimiento = semanas 1–5, floración = semanas 6–12, semana 13 Top Wash. Dar cada dosis solo una vez por semana; el resto, regar con agua. Deeper Underground según el esquema 1–2 ml por 1,5 L. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 5,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 13 des Schemas: nur Top Wash.",
          "en": "Week 13 of the schedule: Top Wash only.",
          "it": "Settimana 13 dello schema: solo Top Wash.",
          "es": "Semana 13 del esquema: solo Top Wash."
        }
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
    "quelle": {
      "de": "Top Crop Tabla de cultivo Coco (topcropfert.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Top Crop Tabla de cultivo Coco (topcropfert.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Top Crop Tabla de cultivo Coco (topcropfert.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Top Crop Tabla de cultivo Coco (topcropfert.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem Top-Crop-Schema für Coco: 3 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Top Crop zählt die Wochen durch: Wuchs = Woche 1–3, Blüte = Woche 4–10, Woche 11 nur Wasser. Anders als im Erdschema gilt die Dosis hier bei jedem Gießen. Bei Bereichen gilt die Untergrenze. Big One in Woche 3–5 als Blattspray, in Woche 6–7 ins Gießwasser. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the Top Crop coco schedule: 3 veg weeks and 8 bloom weeks, the last one for flushing. Top Crop numbers the weeks straight through: veg = weeks 1–3, bloom = weeks 4–10, week 11 plain water only. Unlike the soil schedule, the dose here applies to every watering. Where a range is given, the lower end applies. Big One in weeks 3–5 as a foliar spray, in weeks 6–7 into the irrigation water. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema Top Crop per cocco: 3 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Top Crop numera le settimane di seguito: crescita = settimane 1–3, fioritura = settimane 4–10, settimana 11 solo acqua. A differenza dello schema per terra, qui la dose vale per ogni irrigazione. Dove c'è un intervallo vale il limite inferiore. Big One nelle settimane 3–5 come spray fogliare, nelle settimane 6–7 nell'acqua d'irrigazione. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema de Top Crop para coco: 3 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Top Crop numera las semanas de forma continua: crecimiento = semanas 1–3, floración = semanas 4–10, semana 11 solo agua. A diferencia del esquema de tierra, aquí la dosis vale para cada riego. Donde hay un rango vale el límite inferior. Big One en las semanas 3–5 como pulverización foliar, en las semanas 6–7 en el agua de riego. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 3,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 11 des Schemas: nur Wasser.",
          "en": "Week 11 of the schedule: plain water only.",
          "it": "Settimana 11 dello schema: solo acqua.",
          "es": "Semana 11 del esquema: solo agua."
        }
      }
    },
    "grow": [
      { "product": "Deeper Underground", "weeks": [1], "ml": [10] },
      { "product": "Top Coco A", "weeks": [2, 3], "ml": [10, 10] },
      { "product": "Top Coco B", "weeks": [2, 3], "ml": [10, 10] },
      { "product": "Green Explosion", "weeks": [2], "ml": [10] },
      { "product": "Barrier", "weeks": [2, 3], "ml": [5, 5] },
      {
        "product": "Big One",
        "weeks": [3],
        "fest": {
          "de": "2 ml pro Liter Wasser als Blattspray",
          "en": "2 ml per litre of water as a foliar spray",
          "it": "2 ml per litro d'acqua come spray fogliare",
          "es": "2 ml por litro de agua como pulverización foliar"
        }
      }
    ],
    "bloom": [
      { "product": "Top Coco A", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20, 20, 20] },
      { "product": "Top Coco B", "weeks": [1, 2, 3, 4, 5, 6, 7], "ml": [20, 20, 20, 20, 20, 20, 20] },
      {
        "product": "Big One",
        "weeks": [1, 2],
        "fest": {
          "de": "2 ml pro Liter Wasser als Blattspray",
          "en": "2 ml per litre of water as a foliar spray",
          "it": "2 ml per litro d'acqua come spray fogliare",
          "es": "2 ml por litro de agua como pulverización foliar"
        }
      },
      {
        "product": "Big One",
        "weeks": [3, 4],
        "ml": [20, 20],
        "hinweis": {
          "de": "jetzt ins Gießwasser",
          "en": "now into the irrigation water",
          "it": "ora nell'acqua d'irrigazione",
          "es": "ahora en el agua de riego"
        }
      },
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
    "quelle": {
      "de": "Green House Feeding „How to use Bio Feeding“ (greenhousefeeding.com) und Product Guide 2019, abgerufen 24.9.2026",
      "en": "Green House Feeding ”How to use Bio Feeding” (greenhousefeeding.com) and Product Guide 2019, retrieved 24 Sep 2026",
      "it": "Green House Feeding «How to use Bio Feeding» (greenhousefeeding.com) e Product Guide 2019, consultato il 24/9/2026",
      "es": "Green House Feeding «How to use Bio Feeding» (greenhousefeeding.com) y Product Guide 2019, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach der Bio-Linie von Green House Feeding: 8 Wuchswochen und 8 Blütewochen. BioGrow und BioBloom kommen ins Substrat und geben 8 Wochen lang ab; dazwischen nur Wasser, BioEnhancer alle zwei Wochen. Wuchs länger als 8 Wochen: BioGrow erneut als Kopfdüngung. Blüte 10 Wochen: 2–3 g/L in Woche 1 und 1 g/L in Woche 3; 12 Wochen: 3 g/L in Woche 1 und 1 g/L in Woche 5. Booster PK+ gehört zur Mineral-Linie.",
      "en": "Since 25 Sep 2026 following the Green House Feeding organic line: 8 veg weeks and 8 bloom weeks. BioGrow and BioBloom go into the substrate and release for 8 weeks; in between just water, BioEnhancer every two weeks. Veg longer than 8 weeks: BioGrow again as a top dressing. 10-week bloom: 2–3 g/L in week 1 and 1 g/L in week 3; 12 weeks: 3 g/L in week 1 and 1 g/L in week 5. Booster PK+ belongs to the mineral line.",
      "it": "Dal 25/9/2026 secondo la linea bio di Green House Feeding: 8 settimane di crescita e 8 settimane di fioritura. BioGrow e BioBloom vanno nel substrato e rilasciano per 8 settimane; nel frattempo solo acqua, BioEnhancer ogni due settimane. Crescita oltre 8 settimane: di nuovo BioGrow in superficie. Fioritura di 10 settimane: 2–3 g/L nella settimana 1 e 1 g/L nella settimana 3; 12 settimane: 3 g/L nella settimana 1 e 1 g/L nella settimana 5. Booster PK+ fa parte della linea minerale.",
      "es": "Desde el 25/9/2026 según la línea bio de Green House Feeding: 8 semanas de crecimiento y 8 semanas de floración. BioGrow y BioBloom se añaden al sustrato y liberan durante 8 semanas; entretanto solo agua, BioEnhancer cada dos semanas. Crecimiento de más de 8 semanas: BioGrow de nuevo en cobertera. Floración de 10 semanas: 2–3 g/L en la semana 1 y 1 g/L en la semana 3; 12 semanas: 3 g/L en la semana 1 y 1 g/L en la semana 5. Booster PK+ pertenece a la línea mineral."
    },
    "wochen": {
      "grow": 8,
      "bloom": 8,
      "nachWuchs": "wasser"
    },
    "grow": [
      {
        "product": "BioGrow",
        "weeks": [1],
        "fest": {
          "de": "3 g pro Liter Substrat einmischen oder als Kopfdüngung – reicht 8 Wochen (Sämlinge und junge Pflanzen: halbe Menge)",
          "en": "mix in 3 g per litre of substrate or use as a top dressing – lasts 8 weeks (seedlings and young plants: half the amount)",
          "it": "mescolare 3 g per litro di substrato o distribuire in superficie – dura 8 settimane (piantine e piante giovani: metà dose)",
          "es": "mezclar 3 g por litro de sustrato o aplicar en cobertera; dura 8 semanas (plántulas y plantas jóvenes: la mitad)"
        }
      },
      {
        "product": "BioEnhancer",
        "weeks": [1, 3, 5, 7],
        "ml": [5, 5, 5, 5],
        "einheit": "g",
        "hinweis": {
          "de": "alle zwei Wochen; bei Coco das Wasser vorher auf pH 5,0 stellen",
          "en": "every two weeks; with coco, set the water to pH 5.0 first",
          "it": "ogni due settimane; con il cocco portare prima l'acqua a pH 5,0",
          "es": "cada dos semanas; con coco, ajustar antes el agua a pH 5,0"
        }
      }
    ],
    "bloom": [
      {
        "product": "BioBloom",
        "weeks": [1],
        "fest": {
          "de": "3 g pro Liter Substrat einmischen oder als Kopfdüngung (bei 8 Wochen Blüte)",
          "en": "mix in 3 g per litre of substrate or use as a top dressing (for an 8-week bloom)",
          "it": "mescolare 3 g per litro di substrato o distribuire in superficie (con 8 settimane di fioritura)",
          "es": "mezclar 3 g por litro de sustrato o aplicar en cobertera (con 8 semanas de floración)"
        }
      },
      {
        "product": "BioEnhancer",
        "weeks": [1, 3, 5, 7],
        "ml": [5, 5, 5, 5],
        "einheit": "g",
        "hinweis": {
          "de": "alle zwei Wochen; bei Coco das Wasser vorher auf pH 5,0 stellen",
          "en": "every two weeks; with coco, set the water to pH 5.0 first",
          "it": "ogni due settimane; con il cocco portare prima l'acqua a pH 5,0",
          "es": "cada dos semanas; con coco, ajustar antes el agua a pH 5,0"
        }
      }
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
    "quelle": {
      "de": "General Hydroponics FloraSeries Weekly Basic und Custom Feedchart, Medium (dort in ml pro Gallone), Diamond-Nectar-Produktseite, abgerufen 24.9.2026",
      "en": "General Hydroponics FloraSeries Weekly Basic and Custom Feedchart, Medium (given there in ml per gallon), Diamond Nectar product page, retrieved 24 Sep 2026",
      "it": "General Hydroponics FloraSeries Weekly Basic e Custom Feedchart, Medium (lì in ml per gallone), pagina prodotto Diamond Nectar, consultato il 24/9/2026",
      "es": "General Hydroponics FloraSeries Weekly Basic y Custom Feedchart, Medium (allí en ml por galón), página de producto de Diamond Nectar, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem GH-FloraSeries-Wochenschema, mittlere Stufe („Medium Feed“): 4 Wuchswochen und 9 Blütewochen, die letzte davon zum Spülen. Die mittlere Stufe gilt laut GH für Töpfe von etwa 7–19 L und 1–5 Gießgänge am Tag; daneben gibt es eine leichtere und eine stärkere Stufe. Blütewoche 8 ist die Reifewoche. Ripen nach dem Custom-Chart, Diamond Nectar nach der Produktseite (5 ml pro Gallone, bis 10). Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the GH FloraSeries weekly chart, medium strength (“Medium Feed”): 4 veg weeks and 9 bloom weeks, the last one for flushing. Per GH, the medium strength applies to pots of about 7–19 L and 1–5 waterings a day; there is also a lighter and a stronger strength. Bloom week 8 is the ripening week. Ripen per the custom chart, Diamond Nectar per the product page (5 ml per gallon, up to 10). If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo la tabella settimanale GH FloraSeries, livello medio («Medium Feed»): 4 settimane di crescita e 9 settimane di fioritura, l'ultima per il lavaggio. Secondo GH il livello medio vale per vasi da circa 7–19 L e 1–5 irrigazioni al giorno; esistono anche un livello più leggero e uno più forte. La settimana di fioritura 8 è quella di maturazione. Ripen secondo la tabella personalizzata, Diamond Nectar secondo la pagina del prodotto (5 ml per gallone, fino a 10). Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según la tabla semanal GH FloraSeries, nivel medio («Medium Feed»): 4 semanas de crecimiento y 9 semanas de floración, la última para el lavado. Según GH, el nivel medio vale para macetas de unos 7–19 L y 1–5 riegos al día; también hay un nivel más ligero y otro más fuerte. La semana 8 de floración es la de maduración. Ripen según la tabla personalizada, Diamond Nectar según la página del producto (5 ml por galón, hasta 10). Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 9,
      "spuelen": {
        "woche": 9,
        "text": {
          "de": "Woche 9 laut GH: spülen (FloraKleen 10 ml pro Gallone).",
          "en": "Week 9 per GH: flush (FloraKleen 10 ml per gallon).",
          "it": "Settimana 9 secondo GH: lavaggio (FloraKleen 10 ml per gallone).",
          "es": "Semana 9 según GH: lavado (FloraKleen 10 ml por galón)."
        }
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
    "quelle": {
      "de": "Terra Aquatica TriPart Soil, Tableau d’application 2023 (terraaquatica.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Terra Aquatica TriPart Soil, Tableau d’application 2023 (terraaquatica.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Terra Aquatica TriPart Soil, Tableau d’application 2023 (terraaquatica.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Terra Aquatica TriPart Soil, Tableau d’application 2023 (terraaquatica.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem TriPart-Erdschema 2023 von Terra Aquatica: 4 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Terra Aquatica nennt Phasen statt Wochen, zugeordnet: Wuchs 1 = erste Wurzeln, 2 = erste echte Blätter, 3–4 = Wachstum; Blüte 1–2 = Vorblüte, 3–6 = Blüte, 7 = Reife (Final Part), 8 = Reinigung (Flash Clean). Pro Roots lässt sich durch Roots Booster ersetzen, Pro Bloom durch Bloom Booster – jeweils nur eins davon. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following Terra Aquatica’s TriPart soil schedule 2023: 4 veg weeks and 8 bloom weeks, the last one for flushing. Terra Aquatica gives phases instead of weeks, mapped as: veg 1 = first roots, 2 = first true leaves, 3–4 = growth; bloom 1–2 = pre-bloom, 3–6 = bloom, 7 = ripening (Final Part), 8 = cleansing (Flash Clean). Pro Roots can be replaced by Roots Booster, Pro Bloom by Bloom Booster – only one of each. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema TriPart per terra 2023 di Terra Aquatica: 4 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Terra Aquatica indica fasi invece di settimane, assegnate così: crescita 1 = prime radici, 2 = prime foglie vere, 3–4 = sviluppo; fioritura 1–2 = prefioritura, 3–6 = fioritura, 7 = maturazione (Final Part), 8 = pulizia (Flash Clean). Pro Roots si può sostituire con Roots Booster, Pro Bloom con Bloom Booster – solo uno dei due per volta. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema TriPart para tierra 2023 de Terra Aquatica: 4 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Terra Aquatica indica fases en lugar de semanas, asignadas así: crecimiento 1 = primeras raíces, 2 = primeras hojas verdaderas, 3–4 = desarrollo; floración 1–2 = prefloración, 3–6 = floración, 7 = maduración (Final Part), 8 = limpieza (Flash Clean). Pro Roots se puede sustituir por Roots Booster y Pro Bloom por Bloom Booster; solo uno de cada par. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 8: mit Flash Clean spülen.",
          "en": "Week 8: flush with Flash Clean.",
          "it": "Settimana 8: lavare con Flash Clean.",
          "es": "Semana 8: lavar con Flash Clean."
        }
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
    "quelle": {
      "de": "Terra Aquatica TriPart Hydro/Coco, Tableau d’application 2023 (terraaquatica.com), dort in ml pro Liter, abgerufen 24.9.2026",
      "en": "Terra Aquatica TriPart Hydro/Coco, Tableau d’application 2023 (terraaquatica.com), given there in ml per litre, retrieved 24 Sep 2026",
      "it": "Terra Aquatica TriPart Hydro/Coco, Tableau d’application 2023 (terraaquatica.com), lì in ml per litro, consultato il 24/9/2026",
      "es": "Terra Aquatica TriPart Hydro/Coco, Tableau d’application 2023 (terraaquatica.com), allí en ml por litro, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem TriPart-Schema 2023 von Terra Aquatica für Hydro und Coco: 4 Wuchswochen und 8 Blütewochen, die letzte davon zum Spülen. Terra Aquatica nennt Phasen statt Wochen, zugeordnet: Wuchs 1 = erste Wurzeln, 2 = erste echte Blätter, 3–4 = Wachstum; Blüte 1–2 = Vorblüte, 3–6 = Blüte, 7 = Reife (Final Part), 8 = Reinigung (Flash Clean). Pro Roots lässt sich durch Roots Booster ersetzen, Pro Bloom durch Bloom Booster – jeweils nur eins davon. Diamond Nectar (alter GHE-Name) heißt heute Fulvic. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following Terra Aquatica’s TriPart schedule 2023 for hydro and coco: 4 veg weeks and 8 bloom weeks, the last one for flushing. Terra Aquatica gives phases instead of weeks, mapped as: veg 1 = first roots, 2 = first true leaves, 3–4 = growth; bloom 1–2 = pre-bloom, 3–6 = bloom, 7 = ripening (Final Part), 8 = cleansing (Flash Clean). Pro Roots can be replaced by Roots Booster, Pro Bloom by Bloom Booster – only one of each. Diamond Nectar (old GHE name) is now called Fulvic. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema TriPart 2023 di Terra Aquatica per idro e cocco: 4 settimane di crescita e 8 settimane di fioritura, l'ultima per il lavaggio. Terra Aquatica indica fasi invece di settimane, assegnate così: crescita 1 = prime radici, 2 = prime foglie vere, 3–4 = sviluppo; fioritura 1–2 = prefioritura, 3–6 = fioritura, 7 = maturazione (Final Part), 8 = pulizia (Flash Clean). Pro Roots si può sostituire con Roots Booster, Pro Bloom con Bloom Booster – solo uno dei due per volta. Diamond Nectar (vecchio nome GHE) oggi si chiama Fulvic. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema TriPart 2023 de Terra Aquatica para hidro y coco: 4 semanas de crecimiento y 8 semanas de floración, la última para el lavado. Terra Aquatica indica fases en lugar de semanas, asignadas así: crecimiento 1 = primeras raíces, 2 = primeras hojas verdaderas, 3–4 = desarrollo; floración 1–2 = prefloración, 3–6 = floración, 7 = maduración (Final Part), 8 = limpieza (Flash Clean). Pro Roots se puede sustituir por Roots Booster y Pro Bloom por Bloom Booster; solo uno de cada par. Diamond Nectar (antiguo nombre de GHE) hoy se llama Fulvic. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
    "wochen": {
      "grow": 4,
      "bloom": 8,
      "spuelen": {
        "woche": 8,
        "text": {
          "de": "Woche 8: mit Flash Clean spülen.",
          "en": "Week 8: flush with Flash Clean.",
          "it": "Settimana 8: lavare con Flash Clean.",
          "es": "Semana 8: lavar con Flash Clean."
        }
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
    "quelle": {
      "de": "CANNA Aqua Zuchtschema – Werte wie im DWC-Rechner, abgerufen 24.9.2026",
      "en": "CANNA Aqua grow schedule – values as in the DWC calculator, retrieved 24 Sep 2026",
      "it": "schema di coltivazione CANNA Aqua – valori come nel calcolatore DWC, consultato il 24/9/2026",
      "es": "esquema de cultivo CANNA Aqua – valores como en la calculadora DWC, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach dem CANNA-Aqua-Schema (wie im DWC-Rechner): 8 Wuchswochen und 6 Blütewochen. Canna Aqua ist eine Hydro-Linie für rezirkulierende Systeme; für Coco ist Canna Coco gedacht. CalMag Agent nach Wasserhärte, kein fester Wochenwert. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following the CANNA Aqua schedule (as in the DWC calculator): 8 veg weeks and 6 bloom weeks. Canna Aqua is a hydro line for recirculating systems; Canna Coco is meant for coco. CalMag Agent by water hardness, no fixed weekly dose. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo lo schema CANNA Aqua (come nel calcolatore DWC): 8 settimane di crescita e 6 settimane di fioritura. Canna Aqua è una linea idroponica per sistemi a ricircolo; per il cocco c'è Canna Coco. CalMag Agent secondo la durezza dell'acqua, nessuna dose settimanale fissa. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según el esquema CANNA Aqua (como en la calculadora DWC): 8 semanas de crecimiento y 6 semanas de floración. Canna Aqua es una línea hidropónica para sistemas recirculantes; para coco está pensado Canna Coco. CalMag Agent según la dureza del agua, sin dosis semanal fija. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
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
    "quelle": {
      "de": "Plagron-Produktangaben Hydro A/B, Hydro Roots, Power Buds, Green Sensation – Werte wie im DWC-Rechner, abgerufen 24.9.2026",
      "en": "Plagron product directions Hydro A/B, Hydro Roots, Power Buds, Green Sensation – values as in the DWC calculator, retrieved 24 Sep 2026",
      "it": "indicazioni di prodotto Plagron Hydro A/B, Hydro Roots, Power Buds, Green Sensation – valori come nel calcolatore DWC, consultato il 24/9/2026",
      "es": "indicaciones de producto de Plagron Hydro A/B, Hydro Roots, Power Buds, Green Sensation – valores como en la calculadora DWC, consultado el 24/9/2026"
    },
    "planHinweis": {
      "de": "Seit 25.9.2026 nach den Plagron-Produktangaben für Hydro (wie im DWC-Rechner): 8 Wuchswochen und 6 Blütewochen. Plagron Hydro ist eine Hydro-Linie; für Coco ist Plagron Coco gedacht. Sugar Royal ist laut Plagron nur für Torf- und Kokossubstrate (höchstens 1 ml/L) und gehört nicht zum Hydro-Plan. Bei laufendem Grow nicht auf einen Schlag umstellen, sondern über mehrere Gießgänge anpassen und den Runoff-EC beobachten.",
      "en": "Since 25 Sep 2026 following Plagron’s product directions for hydro (as in the DWC calculator): 8 veg weeks and 6 bloom weeks. Plagron Hydro is a hydro line; Plagron Coco is meant for coco. Per Plagron, Sugar Royal is only for peat and coco substrates (at most 1 ml/L) and is not part of the hydro plan. If you are mid-grow, don't switch in one go – adjust over several waterings and watch the runoff EC.",
      "it": "Dal 25/9/2026 secondo le indicazioni di prodotto Plagron per l’idroponica (come nel calcolatore DWC): 8 settimane di crescita e 6 settimane di fioritura. Plagron Hydro è una linea idroponica; per il cocco c'è Plagron Coco. Secondo Plagron, Sugar Royal è solo per substrati di torba e cocco (al massimo 1 ml/L) e non fa parte del piano idro. Durante una coltivazione in corso non cambiare tutto in una volta: adegua nel corso di più irrigazioni e controlla l'EC del drenaggio.",
      "es": "Desde el 25/9/2026 según las indicaciones de producto de Plagron para hidro (como en la calculadora DWC): 8 semanas de crecimiento y 6 semanas de floración. Plagron Hydro es una línea hidropónica; para coco está pensado Plagron Coco. Según Plagron, Sugar Royal es solo para sustratos de turba y coco (como máximo 1 ml/L) y no forma parte del plan hidro. Con un cultivo en marcha no cambies de golpe: ajusta a lo largo de varios riegos y vigila la EC del drenaje."
    },
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
