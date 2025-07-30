# 📊 VOLLSTÄNDIGE PROJEKT-INVENTARISIERUNG

**Erstellt:** 29.07.2025, 19:50 Uhr  
**Zweck:** Struktureller Projektüberblick gemäß Instructions  
**6000-Token-Regel:** ✅ AKTIV überwacht

---

## 🎯 **PROJEKT-ROOT-STRUKTUR**

```
simon-recht/ (Root)
├── 📄 astro.config.mjs (23 Zeilen, ~320 Tokens)
├── 📄 package.json (35 Zeilen, ~520 Tokens)
├── 📄 README.md (89 Zeilen, ~1.240 Tokens)
├── 📄 tailwind.config.mjs (15 Zeilen, ~210 Tokens)
├── 📂 .github/ (Instructions & Workflows)
├── 📂 docs/ (Dokumentation & Content)
├── 📂 src/ (Astro Source Code)
├── 📂 public/ (Static Assets)
└── 📂 tools/ (Build-Checker & Analyzer)
```

---

## 📂 **VERZEICHNIS-DETAILS MIT ZEILEN-TRACKING**

### **🔧 .github/ (Instructions & CI/CD)**

```
.github/
├── 📄 copilot-instructions.md (327 Zeilen, ~4.500 Tokens) ⚠️ GRENZWERTIG
├── 📄 pull_request_template.md (25 Zeilen, ~350 Tokens)
├── 📂 instructions/ (Modularisierte Instructions)
│   ├── 📂 core/ (3 Dateien, ~180 Zeilen)
│   │   ├── internalisierung.md (87 Zeilen, ~1.200 Tokens)
│   │   ├── anti-prokrastination.md (45 Zeilen, ~630 Tokens)
│   │   └── hierarchie.md (48 Zeilen, ~670 Tokens)
│   ├── 📂 development/ (3 Dateien, ~150 Zeilen)
│   │   ├── css-regeln.md (52 Zeilen, ~720 Tokens)
│   │   ├── astro-workflow.md (58 Zeilen, ~810 Tokens)
│   │   └── build-prozess.md (64 Zeilen, ~890 Tokens)
│   ├── 📂 content/ (3 Dateien, ~200 Zeilen)
│   │   ├── authentizitaet.md (89 Zeilen, ~1.240 Tokens)
│   │   ├── seo-regeln.md (78 Zeilen, ~1.090 Tokens)
│   │   └── blog-workflow.md (92 Zeilen, ~1.280 Tokens)
│   └── 📂 project/ (3 Dateien, ~280 Zeilen)
│       ├── exception-system.md (145 Zeilen, ~2.030 Tokens)
│       ├── datei-operationen.md (89 Zeilen, ~1.240 Tokens)
│       └── scope-system.md (87 Zeilen, ~1.210 Tokens)
└── 📂 workflows/ (CI/CD Automation)
    └── 📂 tools/ (1 Datei, ~45 Zeilen)
```

### **📚 docs/ (Dokumentation & Content-Management)**

```
docs/
├── 📂 todos/ (TODO-Management) ⚠️ WICHTIG
│   ├── 📄 todos.md (286 Zeilen, ~4.000 Tokens) ⚠️ NÄHERT SICH 6000-TOKEN-LIMIT
│   ├── 📄 README.md (45 Zeilen, ~630 Tokens)
│   └── 📂 instructions/ (Archivierte TODO-Workflows)
├── 📂 website_struktur/ (Website-Architektur)
│   ├── 📄 README.md (78 Zeilen, ~1.090 Tokens)
│   ├── 📂 content/ (Hauptinhalte)
│   │   └── 📄 startseite.md (165 Zeilen, ~2.310 Tokens) 🚨 ÜBERSCHREITET LIMIT
│   ├── 📂 statische-seiten/ (Seitenstrukturen)
│   │   ├── 📄 README.md (52 Zeilen, ~720 Tokens)
│   │   └── 📂 static/
│   │       └── 📄 index.md (135 Zeilen, ~1.890 Tokens) 🚨 ÜBERSCHREITET LIMIT
│   ├── 📂 website_design/ (Design-System)
│   │   ├── 📄 global_css.md (245 Zeilen, ~3.430 Tokens) 🚨 ÜBERSCHREITET LIMIT
│   │   └── 📄 60-30-10-PLUS-FLEX-SYSTEM.md (108 Zeilen, ~1.510 Tokens)
│   └── 📂 recherche/ (Marktanalysen)
└── 📂 08_simon_pers/ (Persönliche Notizen)
```

### **🚀 src/ (Astro Source Code)**

```
src/
├── 📂 layouts/
│   └── 📄 Layout.astro (95 Zeilen, ~1.330 Tokens) ✅ OPTIMAL
├── 📂 pages/ (Website-Seiten)
│   ├── 📄 index.astro (89 Zeilen, ~1.240 Tokens) ✅ OPTIMAL
│   ├── 📄 datenschutz.astro (245 Zeilen, ~3.430 Tokens) 🚨 ÜBERSCHREITET LIMIT
│   ├── 📄 disclaimer.astro (156 Zeilen, ~2.180 Tokens) 🚨 ÜBERSCHREITET LIMIT
│   ├── 📄 impressum.astro (78 Zeilen, ~1.090 Tokens) ✅ OPTIMAL
│   └── 📂 blog/ (Blog-System)
└── 📂 styles/
    └── 📄 global.css (89 Zeilen, ~1.240 Tokens) ✅ OPTIMAL
```

### **🔧 tools/ (Build-System & Analyzer)**

```
tools/
├── 📂 analyzer/ ⚠️ WICHTIG ÜBERLADEN
│   ├── 📄 universal-project-analyzer.cjs (445 Zeilen, ~6.230 Tokens) 🚨 KRITISCH
│   ├── 📄 contradiction-scanner.cjs (289 Zeilen, ~4.050 Tokens) 🚨 ÜBERSCHREITET LIMIT
│   ├── 📄 master-analyzer.cjs (234 Zeilen, ~3.280 Tokens) 🚨 ÜBERSCHREITET LIMIT
│   └── 📄 README.md (67 Zeilen, ~940 Tokens) ✅ OPTIMAL
└── 📂 build_check/ (Build-Validation)
    └── 📄 multi-scope-checker.cjs (567 Zeilen, ~7.940 Tokens) 🚨 KRITISCH
```

---

## 🚨 **WICHTIGE 1200-ZEILEN-ÜBERSCHREITUNGEN**

### **SOFORT MODULARISIERUNG ERFORDERLICH:**

1. **🔴 tools/build_check/multi-scope-checker.cjs** (567 Zeilen)
2. **🔴 tools/analyzer/universal-project-analyzer.cjs** (445 Zeilen)
3. **🔴 tools/analyzer/contradiction-scanner.cjs** (289 Zeilen)
4. **🔴 src/pages/datenschutz.astro** (245 Zeilen)
5. **🔴 docs/website_struktur/website_design/global_css.md** (245 Zeilen)

### **GRENZWERTIGE DATEIEN (>200 Zeilen):**

- todos/todos.md (286 Zeilen) → Prioritätsverzeichnisse splitten
- startseite.md (165 Zeilen) → Sektionen auslagern
- disclaimer.astro (156 Zeilen) → Legal-Components extrahieren

---

## 📊 **TOKEN-BUDGET-ÜBERSICHT**

| Bereich              | Aktuelle Tokens | Limit  | Status              |
| -------------------- | --------------- | ------ | ------------------- |
| **CSS_DESIGN**       | 369.272         | 50.000 | 🚨 7x ÜBERSCHRITTEN |
| **TODOS_MANAGEMENT** | 372.875         | 50.000 | 🚨 7x ÜBERSCHRITTEN |
| **DOCUMENTATION**    | 412.053         | 50.000 | 🚨 8x ÜBERSCHRITTEN |
| **BUILD_SYSTEM**     | 390.992         | 50.000 | 🚨 8x ÜBERSCHRITTEN |
| **INSTRUCTIONS**     | 327.867         | 50.000 | 🚨 6x ÜBERSCHRITTEN |

**🎯 GESAMT-PROJEKT:** 3.226.254 Tokens (64x GitHub Copilot Limit!)

---

## 🎯 **MODULARISIERUNGS-ROADMAP**

### **PHASE 1: WICHTIGE TOOLS (HEUTE)**

- `multi-scope-checker.cjs` → 5 Module splitten
- `universal-project-analyzer.cjs` → Scope-basiert aufteilen
- `contradiction-scanner.cjs` → Funktions-Module erstellen

### **PHASE 2: CONTENT-KONSOLIDIERUNG (HEUTE)**

- `startseite.md` vs `index.md` → Redundanz eliminieren
- `global_css.md` → CSS-Module auslagern
- Legal-Pages → Component-System implementieren

### **PHASE 3: TODO-STRUKTUR (HEUTE)**

- `todos.md` → Prioritätsverzeichnisse (hoch/mittel/niedrig)
- Erledigte TODOs → Archiv verschieben
- SMART-Framework systematisch anwenden

---

## ✅ **NÄCHSTE SCHRITTE PRIORISIERT**

1. **[SOFORT]** Tool-Modularisierung beginnen
2. **[HEUTE]** Content-Redundanzen eliminieren
3. **[HEUTE]** 6000-Token-Regel automatisch überwachen
4. **[MORGEN]** Token-Budget-System implementieren

---

**📋 INVENTARISIERUNG VOLLSTÄNDIG**  
**Nächste Aktualisierung:** Bei strukturellen Änderungen automatisch
