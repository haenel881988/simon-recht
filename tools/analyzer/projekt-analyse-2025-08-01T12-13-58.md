# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 1.8.2025, 14:13:58  
**Analysedauer:** 0.68 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 75 |
| **Zeilen gesamt** | 25’654 |
| **Wörter gesamt** | 135’622 |
| **Zeichen gesamt** | 2’502’089 |
| **Geschätzte Tokens** | 685’435 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **DOCUMENTATION** | 54 | 16’681 | 124’549 | 2306 |
| **CONTENT** | 54 | 13’360 | 109’890 | 2035 |
| **BUILD_SYSTEM** | 44 | 15’945 | 103’622 | 2355 |
| **TODOS_MANAGEMENT** | 31 | 13’506 | 85’107 | 2745 |
| **CSS_DESIGN** | 30 | 12’470 | 80’538 | 2685 |
| **ASSETS** | 16 | 12’682 | 76’804 | 4800 |
| **CONFIG** | 18 | 10’003 | 51’603 | 2867 |
| **INSTRUCTIONS** | 31 | 8’319 | 39’479 | 1274 |
| **ASTRO_COMPONENTS** | 11 | 3’453 | 13’843 | 1258 |

---

## 🔗 SCOPE-ÜBERLAPPUNGEN

### 1. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/00_ideenwerkstatt/ideen_brainstormings.md` (1334 Tokens)

### 2. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 2
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/css-deep-analysis-roadmap.md` (605 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (10365 Tokens)

### 3. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 2
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/todos/todos.md` (3348 Tokens)
- `README.md` (448 Tokens)

### 4. ASSETS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/content/gicht-buch/book_1.txt` (20968 Tokens)

### 5. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 2
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/recherche/grundrecherche.md` (7175 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (5662 Tokens)

### 6. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/statische-seiten/README.md` (370 Tokens)

### 7. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN

- **Dateien:** 2
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/pages/disclaimer.astro` (929 Tokens)
- `src/pages/impressum.astro` (563 Tokens)

### 8. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/pages/index.astro` (2191 Tokens)

### 9. BUILD_SYSTEM + CONFIG + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 1
- **Grund:** Build-Checker validiert CSS-Architektur
- **Priorität:** MEDIUM
- **Kombiniert erlaubt:** ❌ Nein
- **Empfehlung:** SEPARATE_ANALYSIS

**Betroffene Dateien:**
- `tools/analyzer/contradiction-scanner.cjs` (3174 Tokens)

### 10. BUILD_SYSTEM + CONFIG + CSS_DESIGN + TODOS_MANAGEMENT

- **Dateien:** 1
- **Grund:** Build-Checker validiert CSS-Architektur
- **Priorität:** MEDIUM
- **Kombiniert erlaubt:** ❌ Nein
- **Empfehlung:** SEPARATE_ANALYSIS

**Betroffene Dateien:**
- `tools/analyzer/exact-line-counter.js` (732 Tokens)

### 11. BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 2
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `tools/analyzer/modules/scope-definitions.js` (210 Tokens)
- `tools/analyzer/universal-project-analyzer.cjs` (4653 Tokens)

### 12. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `tools/analyzer/README.md` (1025 Tokens)

### 13. BUILD_SYSTEM + CONTENT + CSS_DESIGN + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (1293 Tokens)

### 14. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 1
- **Grund:** Layout-Komponenten benötigen Styling-Koordination
- **Priorität:** MEDIUM
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)

### 15. CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/content/polemik/startseite.md` (2305 Tokens)

### 16. ASSETS + CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (608 Tokens)

### 17. CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/README.md` (284 Tokens)

### 18. CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 4
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/statische-seiten/static/index.md` (1563 Tokens)
- `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` (424 Tokens)
- `docs/website_struktur/website_design/global_css.md` (2009 Tokens)
- `src/styles/global.css` (2961 Tokens)

### 19. ASSETS + ASTRO_COMPONENTS + CONTENT + CSS_DESIGN

- **Dateien:** 1
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/layouts/Layout.astro` (444 Tokens)

### 20. ASTRO_COMPONENTS + CONTENT + CSS_DESIGN

- **Dateien:** 2
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/pages/blog/index.astro` (181 Tokens)
- `src/pages/blog/[slug].astro` (153 Tokens)

### 21. ASTRO_COMPONENTS + CSS_DESIGN

- **Dateien:** 1
- **Grund:** Layout-Komponenten benötigen Styling-Koordination
- **Priorität:** MEDIUM
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/pages/datenschutz.astro` (1009 Tokens)


---

## 🔄 REDUNDANZ-ANALYSE (NEU!)

### 📄 DOPPELTE DATEIEN

#### 1. Duplikat-Gruppe (2 Dateien)

- `astro.config.mjs` (BUILD_SYSTEM, 45 Tokens)
- `astro.config.mjs` (CONFIG, 45 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 2. Duplikat-Gruppe (6 Dateien)

- `docs/00_ideenwerkstatt/ideen_brainstormings.md` (BUILD_SYSTEM, 1334 Tokens)
- `docs/00_ideenwerkstatt/ideen_brainstormings.md` (CONTENT, 1334 Tokens)
- `docs/00_ideenwerkstatt/ideen_brainstormings.md` (INSTRUCTIONS, 1334 Tokens)
- `docs/00_ideenwerkstatt/ideen_brainstormings.md` (DOCUMENTATION, 1334 Tokens)
- `docs/00_ideenwerkstatt/ideen_brainstormings.md` (CSS_DESIGN, 1334 Tokens)
- `docs/00_ideenwerkstatt/ideen_brainstormings.md` (TODOS_MANAGEMENT, 1334 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 5 Duplikate

#### 3. Duplikat-Gruppe (5 Dateien)

- `docs/css-deep-analysis-roadmap.md` (BUILD_SYSTEM, 605 Tokens)
- `docs/css-deep-analysis-roadmap.md` (CONTENT, 605 Tokens)
- `docs/css-deep-analysis-roadmap.md` (DOCUMENTATION, 605 Tokens)
- `docs/css-deep-analysis-roadmap.md` (CSS_DESIGN, 605 Tokens)
- `docs/css-deep-analysis-roadmap.md` (TODOS_MANAGEMENT, 605 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 4. Duplikat-Gruppe (3 Dateien)

- `docs/marketing/anti-floskel-regeln.md` (BUILD_SYSTEM, 442 Tokens)
- `docs/marketing/anti-floskel-regeln.md` (CONTENT, 442 Tokens)
- `docs/marketing/anti-floskel-regeln.md` (DOCUMENTATION, 442 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 5. Duplikat-Gruppe (4 Dateien)

- `docs/marketing/zielgruppe.md` (BUILD_SYSTEM, 466 Tokens)
- `docs/marketing/zielgruppe.md` (CONTENT, 466 Tokens)
- `docs/marketing/zielgruppe.md` (DOCUMENTATION, 466 Tokens)
- `docs/marketing/zielgruppe.md` (TODOS_MANAGEMENT, 466 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 6. Duplikat-Gruppe (7 Dateien)

- `docs/todos/struktur-migration-plan.md` (BUILD_SYSTEM, 506 Tokens)
- `docs/todos/struktur-migration-plan.md` (CONFIG, 506 Tokens)
- `docs/todos/struktur-migration-plan.md` (CONTENT, 506 Tokens)
- `docs/todos/struktur-migration-plan.md` (INSTRUCTIONS, 506 Tokens)
- `docs/todos/struktur-migration-plan.md` (DOCUMENTATION, 506 Tokens)
- `docs/todos/struktur-migration-plan.md` (TODOS_MANAGEMENT, 506 Tokens)
- `docs/todos/struktur-migration-plan.md` (ASSETS, 506 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 6 Duplikate

#### 7. Duplikat-Gruppe (7 Dateien)

- `docs/todos/todos.md` (BUILD_SYSTEM, 3348 Tokens)
- `docs/todos/todos.md` (CONTENT, 3348 Tokens)
- `docs/todos/todos.md` (INSTRUCTIONS, 3348 Tokens)
- `docs/todos/todos.md` (DOCUMENTATION, 3348 Tokens)
- `docs/todos/todos.md` (CSS_DESIGN, 3348 Tokens)
- `docs/todos/todos.md` (TODOS_MANAGEMENT, 3348 Tokens)
- `docs/todos/todos.md` (ASTRO_COMPONENTS, 3348 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 6 Duplikate

#### 8. Duplikat-Gruppe (6 Dateien)

- `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` (BUILD_SYSTEM, 4773 Tokens)
- `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` (CONFIG, 4773 Tokens)
- `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` (CONTENT, 4773 Tokens)
- `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` (INSTRUCTIONS, 4773 Tokens)
- `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` (DOCUMENTATION, 4773 Tokens)
- `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` (TODOS_MANAGEMENT, 4773 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 5 Duplikate

#### 9. Duplikat-Gruppe (7 Dateien)

- `docs/website_struktur/content/gicht-buch/book_1.txt` (BUILD_SYSTEM, 20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (CONFIG, 20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (CONTENT, 20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (DOCUMENTATION, 20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (CSS_DESIGN, 20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (TODOS_MANAGEMENT, 20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (ASSETS, 20968 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 6 Duplikate

#### 10. Duplikat-Gruppe (4 Dateien)

- `docs/website_struktur/recherche/grundrecherche.md` (BUILD_SYSTEM, 7175 Tokens)
- `docs/website_struktur/recherche/grundrecherche.md` (CONTENT, 7175 Tokens)
- `docs/website_struktur/recherche/grundrecherche.md` (DOCUMENTATION, 7175 Tokens)
- `docs/website_struktur/recherche/grundrecherche.md` (CSS_DESIGN, 7175 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 11. Duplikat-Gruppe (5 Dateien)

- `docs/website_struktur/recherche/tiefenrecherche.md` (BUILD_SYSTEM, 10365 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (CONTENT, 10365 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (DOCUMENTATION, 10365 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (CSS_DESIGN, 10365 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (TODOS_MANAGEMENT, 10365 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 12. Duplikat-Gruppe (4 Dateien)

- `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` (BUILD_SYSTEM, 5061 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` (CONTENT, 5061 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` (DOCUMENTATION, 5061 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` (TODOS_MANAGEMENT, 5061 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 13. Duplikat-Gruppe (4 Dateien)

- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (BUILD_SYSTEM, 5662 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (CONTENT, 5662 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (DOCUMENTATION, 5662 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (CSS_DESIGN, 5662 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 14. Duplikat-Gruppe (3 Dateien)

- `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` (BUILD_SYSTEM, 5310 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` (CONTENT, 5310 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` (DOCUMENTATION, 5310 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 15. Duplikat-Gruppe (5 Dateien)

- `docs/website_struktur/statische-seiten/README.md` (BUILD_SYSTEM, 370 Tokens)
- `docs/website_struktur/statische-seiten/README.md` (CONTENT, 370 Tokens)
- `docs/website_struktur/statische-seiten/README.md` (INSTRUCTIONS, 370 Tokens)
- `docs/website_struktur/statische-seiten/README.md` (DOCUMENTATION, 370 Tokens)
- `docs/website_struktur/statische-seiten/README.md` (CSS_DESIGN, 370 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 16. Duplikat-Gruppe (3 Dateien)

- `docs/website_struktur/website_elemente/footer.md` (BUILD_SYSTEM, 42 Tokens)
- `docs/website_struktur/website_elemente/footer.md` (CONTENT, 42 Tokens)
- `docs/website_struktur/website_elemente/footer.md` (DOCUMENTATION, 42 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 17. Duplikat-Gruppe (5 Dateien)

- `package.json` (BUILD_SYSTEM, 107 Tokens)
- `package.json` (CONFIG, 107 Tokens)
- `package.json` (INSTRUCTIONS, 107 Tokens)
- `package.json` (DOCUMENTATION, 107 Tokens)
- `package.json` (TODOS_MANAGEMENT, 107 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 18. Duplikat-Gruppe (7 Dateien)

- `README.md` (BUILD_SYSTEM, 448 Tokens)
- `README.md` (CONTENT, 448 Tokens)
- `README.md` (INSTRUCTIONS, 448 Tokens)
- `README.md` (DOCUMENTATION, 448 Tokens)
- `README.md` (CSS_DESIGN, 448 Tokens)
- `README.md` (TODOS_MANAGEMENT, 448 Tokens)
- `README.md` (ASTRO_COMPONENTS, 448 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 6 Duplikate

#### 19. Duplikat-Gruppe (5 Dateien)

- `src/content/blog/mindset-gegen-grosskonzern.md` (BUILD_SYSTEM, 3595 Tokens)
- `src/content/blog/mindset-gegen-grosskonzern.md` (CONTENT, 3595 Tokens)
- `src/content/blog/mindset-gegen-grosskonzern.md` (DOCUMENTATION, 3595 Tokens)
- `src/content/blog/mindset-gegen-grosskonzern.md` (TODOS_MANAGEMENT, 3595 Tokens)
- `src/content/blog/mindset-gegen-grosskonzern.md` (ASSETS, 3595 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 20. Duplikat-Gruppe (5 Dateien)

- `src/content/pages/index.md` (BUILD_SYSTEM, 2824 Tokens)
- `src/content/pages/index.md` (CONTENT, 2824 Tokens)
- `src/content/pages/index.md` (DOCUMENTATION, 2824 Tokens)
- `src/content/pages/index.md` (TODOS_MANAGEMENT, 2824 Tokens)
- `src/content/pages/index.md` (ASSETS, 2824 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 21. Duplikat-Gruppe (4 Dateien)

- `src/pages/disclaimer.astro` (BUILD_SYSTEM, 929 Tokens)
- `src/pages/disclaimer.astro` (CONTENT, 929 Tokens)
- `src/pages/disclaimer.astro` (CSS_DESIGN, 929 Tokens)
- `src/pages/disclaimer.astro` (ASTRO_COMPONENTS, 929 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 22. Duplikat-Gruppe (4 Dateien)

- `src/pages/impressum.astro` (BUILD_SYSTEM, 563 Tokens)
- `src/pages/impressum.astro` (CONTENT, 563 Tokens)
- `src/pages/impressum.astro` (CSS_DESIGN, 563 Tokens)
- `src/pages/impressum.astro` (ASTRO_COMPONENTS, 563 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 23. Duplikat-Gruppe (5 Dateien)

- `src/pages/index.astro` (BUILD_SYSTEM, 2191 Tokens)
- `src/pages/index.astro` (CONTENT, 2191 Tokens)
- `src/pages/index.astro` (CSS_DESIGN, 2191 Tokens)
- `src/pages/index.astro` (ASSETS, 2191 Tokens)
- `src/pages/index.astro` (ASTRO_COMPONENTS, 2191 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 24. Duplikat-Gruppe (2 Dateien)

- `tailwind.config.mjs` (BUILD_SYSTEM, 25 Tokens)
- `tailwind.config.mjs` (CONFIG, 25 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 25. Duplikat-Gruppe (6 Dateien)

- `tools/analyzer/contradiction-scanner.cjs` (BUILD_SYSTEM, 3174 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (CONFIG, 3174 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (INSTRUCTIONS, 3174 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (DOCUMENTATION, 3174 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (CSS_DESIGN, 3174 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (TODOS_MANAGEMENT, 3174 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 5 Duplikate

#### 26. Duplikat-Gruppe (2 Dateien)

- `tools/analyzer/core/analysis-verifier.cjs` (BUILD_SYSTEM, 2230 Tokens)
- `tools/analyzer/core/analysis-verifier.cjs` (TODOS_MANAGEMENT, 2230 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 27. Duplikat-Gruppe (2 Dateien)

- `tools/analyzer/core/link-validator.cjs` (BUILD_SYSTEM, 940 Tokens)
- `tools/analyzer/core/link-validator.cjs` (INSTRUCTIONS, 940 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 28. Duplikat-Gruppe (3 Dateien)

- `tools/analyzer/core/token-counter.cjs` (BUILD_SYSTEM, 1039 Tokens)
- `tools/analyzer/core/token-counter.cjs` (INSTRUCTIONS, 1039 Tokens)
- `tools/analyzer/core/token-counter.cjs` (DOCUMENTATION, 1039 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 29. Duplikat-Gruppe (4 Dateien)

- `tools/analyzer/exact-line-counter.js` (BUILD_SYSTEM, 732 Tokens)
- `tools/analyzer/exact-line-counter.js` (CONFIG, 732 Tokens)
- `tools/analyzer/exact-line-counter.js` (CSS_DESIGN, 732 Tokens)
- `tools/analyzer/exact-line-counter.js` (TODOS_MANAGEMENT, 732 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 30. Duplikat-Gruppe (4 Dateien)

- `tools/analyzer/instructions/README.md` (BUILD_SYSTEM, 318 Tokens)
- `tools/analyzer/instructions/README.md` (CONTENT, 318 Tokens)
- `tools/analyzer/instructions/README.md` (INSTRUCTIONS, 318 Tokens)
- `tools/analyzer/instructions/README.md` (DOCUMENTATION, 318 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 31. Duplikat-Gruppe (4 Dateien)

- `tools/analyzer/master-analyzer.cjs` (BUILD_SYSTEM, 1815 Tokens)
- `tools/analyzer/master-analyzer.cjs` (INSTRUCTIONS, 1815 Tokens)
- `tools/analyzer/master-analyzer.cjs` (DOCUMENTATION, 1815 Tokens)
- `tools/analyzer/master-analyzer.cjs` (TODOS_MANAGEMENT, 1815 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 32. Duplikat-Gruppe (2 Dateien)

- `tools/analyzer/modules/file-scanner.js` (BUILD_SYSTEM, 410 Tokens)
- `tools/analyzer/modules/file-scanner.js` (CONFIG, 410 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 33. Duplikat-Gruppe (7 Dateien)

- `tools/analyzer/modules/scope-definitions.js` (BUILD_SYSTEM, 210 Tokens)
- `tools/analyzer/modules/scope-definitions.js` (CONFIG, 210 Tokens)
- `tools/analyzer/modules/scope-definitions.js` (CONTENT, 210 Tokens)
- `tools/analyzer/modules/scope-definitions.js` (INSTRUCTIONS, 210 Tokens)
- `tools/analyzer/modules/scope-definitions.js` (DOCUMENTATION, 210 Tokens)
- `tools/analyzer/modules/scope-definitions.js` (CSS_DESIGN, 210 Tokens)
- `tools/analyzer/modules/scope-definitions.js` (TODOS_MANAGEMENT, 210 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 6 Duplikate

#### 34. Duplikat-Gruppe (12 Dateien)

- `tools/analyzer/procrastination-detector.cjs` (BUILD_SYSTEM, 0 Tokens)
- `docs/todos/prioritaeten/hoch/kritische-fixes.md` (CONTENT, 0 Tokens)
- `docs/todos/prioritaeten/README.md` (CONTENT, 0 Tokens)
- `docs/todos/verhaltensmuster/README.md` (CONTENT, 0 Tokens)
- `docs/todos/prioritaeten/README.md` (INSTRUCTIONS, 0 Tokens)
- `docs/todos/verhaltensmuster/README.md` (INSTRUCTIONS, 0 Tokens)
- `docs/todos/prioritaeten/hoch/kritische-fixes.md` (DOCUMENTATION, 0 Tokens)
- `docs/todos/prioritaeten/README.md` (DOCUMENTATION, 0 Tokens)
- `docs/todos/verhaltensmuster/README.md` (DOCUMENTATION, 0 Tokens)
- `docs/todos/prioritaeten/hoch/kritische-fixes.md` (TODOS_MANAGEMENT, 0 Tokens)
- `docs/todos/prioritaeten/README.md` (TODOS_MANAGEMENT, 0 Tokens)
- `docs/todos/verhaltensmuster/README.md` (TODOS_MANAGEMENT, 0 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 11 Duplikate

#### 35. Duplikat-Gruppe (9 Dateien)

- `tools/analyzer/README.md` (BUILD_SYSTEM, 1025 Tokens)
- `tools/analyzer/README.md` (CONFIG, 1025 Tokens)
- `tools/analyzer/README.md` (CONTENT, 1025 Tokens)
- `tools/analyzer/README.md` (INSTRUCTIONS, 1025 Tokens)
- `tools/analyzer/README.md` (DOCUMENTATION, 1025 Tokens)
- `tools/analyzer/README.md` (CSS_DESIGN, 1025 Tokens)
- `tools/analyzer/README.md` (TODOS_MANAGEMENT, 1025 Tokens)
- `tools/analyzer/README.md` (ASSETS, 1025 Tokens)
- `tools/analyzer/README.md` (ASTRO_COMPONENTS, 1025 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 8 Duplikate

#### 36. Duplikat-Gruppe (5 Dateien)

- `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` (BUILD_SYSTEM, 519 Tokens)
- `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` (CONFIG, 519 Tokens)
- `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` (CONTENT, 519 Tokens)
- `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` (DOCUMENTATION, 519 Tokens)
- `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` (TODOS_MANAGEMENT, 519 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 37. Duplikat-Gruppe (5 Dateien)

- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (BUILD_SYSTEM, 1293 Tokens)
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (CONTENT, 1293 Tokens)
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (INSTRUCTIONS, 1293 Tokens)
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (CSS_DESIGN, 1293 Tokens)
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (TODOS_MANAGEMENT, 1293 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 38. Duplikat-Gruppe (5 Dateien)

- `tools/analyzer/scopes/redundancy-detector.cjs` (BUILD_SYSTEM, 2151 Tokens)
- `tools/analyzer/scopes/redundancy-detector.cjs` (CONFIG, 2151 Tokens)
- `tools/analyzer/scopes/redundancy-detector.cjs` (INSTRUCTIONS, 2151 Tokens)
- `tools/analyzer/scopes/redundancy-detector.cjs` (DOCUMENTATION, 2151 Tokens)
- `tools/analyzer/scopes/redundancy-detector.cjs` (TODOS_MANAGEMENT, 2151 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 39. Duplikat-Gruppe (4 Dateien)

- `tools/analyzer/scopes/structure-optimizer-v2.cjs` (BUILD_SYSTEM, 1845 Tokens)
- `tools/analyzer/scopes/structure-optimizer-v2.cjs` (CONFIG, 1845 Tokens)
- `tools/analyzer/scopes/structure-optimizer-v2.cjs` (INSTRUCTIONS, 1845 Tokens)
- `tools/analyzer/scopes/structure-optimizer-v2.cjs` (DOCUMENTATION, 1845 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 40. Duplikat-Gruppe (8 Dateien)

- `tools/analyzer/scopes/structure-optimizer.cjs` (BUILD_SYSTEM, 3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (CONFIG, 3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (INSTRUCTIONS, 3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (DOCUMENTATION, 3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (CSS_DESIGN, 3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (TODOS_MANAGEMENT, 3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (ASSETS, 3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (ASTRO_COMPONENTS, 3552 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 7 Duplikate

#### 41. Duplikat-Gruppe (7 Dateien)

- `tools/analyzer/universal-project-analyzer.cjs` (BUILD_SYSTEM, 4653 Tokens)
- `tools/analyzer/universal-project-analyzer.cjs` (CONFIG, 4653 Tokens)
- `tools/analyzer/universal-project-analyzer.cjs` (CONTENT, 4653 Tokens)
- `tools/analyzer/universal-project-analyzer.cjs` (INSTRUCTIONS, 4653 Tokens)
- `tools/analyzer/universal-project-analyzer.cjs` (DOCUMENTATION, 4653 Tokens)
- `tools/analyzer/universal-project-analyzer.cjs` (CSS_DESIGN, 4653 Tokens)
- `tools/analyzer/universal-project-analyzer.cjs` (TODOS_MANAGEMENT, 4653 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 6 Duplikate

#### 42. Duplikat-Gruppe (5 Dateien)

- `tools/media/README.md` (BUILD_SYSTEM, 160 Tokens)
- `tools/media/README.md` (CONTENT, 160 Tokens)
- `tools/media/README.md` (INSTRUCTIONS, 160 Tokens)
- `tools/media/README.md` (DOCUMENTATION, 160 Tokens)
- `tools/media/README.md` (ASSETS, 160 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 4 Duplikate

#### 43. Duplikat-Gruppe (4 Dateien)

- `tools/project-maintenance/README.md` (BUILD_SYSTEM, 134 Tokens)
- `tools/project-maintenance/README.md` (CONTENT, 134 Tokens)
- `tools/project-maintenance/README.md` (INSTRUCTIONS, 134 Tokens)
- `tools/project-maintenance/README.md` (DOCUMENTATION, 134 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 44. Duplikat-Gruppe (3 Dateien)

- `docs/todos/struktur-migration-plan.json` (CONFIG, 6819 Tokens)
- `docs/todos/struktur-migration-plan.json` (DOCUMENTATION, 6819 Tokens)
- `docs/todos/struktur-migration-plan.json` (TODOS_MANAGEMENT, 6819 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 45. Duplikat-Gruppe (2 Dateien)

- `src/content/config.ts` (CONFIG, 89 Tokens)
- `src/content/config.ts` (CONTENT, 89 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 46. Duplikat-Gruppe (3 Dateien)

- `docs/00_ideenwerkstatt/dggp/README.md` (CONTENT, 47 Tokens)
- `docs/00_ideenwerkstatt/dggp/README.md` (INSTRUCTIONS, 47 Tokens)
- `docs/00_ideenwerkstatt/dggp/README.md` (DOCUMENTATION, 47 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 47. Duplikat-Gruppe (3 Dateien)

- `docs/00_ideenwerkstatt/README.md` (CONTENT, 11 Tokens)
- `docs/00_ideenwerkstatt/README.md` (INSTRUCTIONS, 11 Tokens)
- `docs/00_ideenwerkstatt/README.md` (DOCUMENTATION, 11 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 48. Duplikat-Gruppe (4 Dateien)

- `docs/marketing/README.md` (CONTENT, 86 Tokens)
- `docs/marketing/README.md` (INSTRUCTIONS, 86 Tokens)
- `docs/marketing/README.md` (DOCUMENTATION, 86 Tokens)
- `docs/marketing/README.md` (TODOS_MANAGEMENT, 86 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 49. Duplikat-Gruppe (4 Dateien)

- `docs/todos/README.md` (CONTENT, 143 Tokens)
- `docs/todos/README.md` (INSTRUCTIONS, 143 Tokens)
- `docs/todos/README.md` (DOCUMENTATION, 143 Tokens)
- `docs/todos/README.md` (TODOS_MANAGEMENT, 143 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 50. Duplikat-Gruppe (2 Dateien)

- `docs/website_struktur/content/fallbeispiel_Story_formatted.md` (CONTENT, 5239 Tokens)
- `docs/website_struktur/content/fallbeispiel_Story_formatted.md` (DOCUMENTATION, 5239 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 51. Duplikat-Gruppe (4 Dateien)

- `docs/website_struktur/content/polemik/startseite.md` (CONTENT, 2305 Tokens)
- `docs/website_struktur/content/polemik/startseite.md` (DOCUMENTATION, 2305 Tokens)
- `docs/website_struktur/content/polemik/startseite.md` (CSS_DESIGN, 2305 Tokens)
- `docs/website_struktur/content/polemik/startseite.md` (TODOS_MANAGEMENT, 2305 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 52. Duplikat-Gruppe (2 Dateien)

- `docs/website_struktur/content/simons_authentische_sprache.md` (CONTENT, 758 Tokens)
- `docs/website_struktur/content/simons_authentische_sprache.md` (DOCUMENTATION, 758 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 53. Duplikat-Gruppe (4 Dateien)

- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (CONTENT, 608 Tokens)
- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (DOCUMENTATION, 608 Tokens)
- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (CSS_DESIGN, 608 Tokens)
- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (ASSETS, 608 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 54. Duplikat-Gruppe (4 Dateien)

- `docs/website_struktur/README.md` (CONTENT, 284 Tokens)
- `docs/website_struktur/README.md` (INSTRUCTIONS, 284 Tokens)
- `docs/website_struktur/README.md` (DOCUMENTATION, 284 Tokens)
- `docs/website_struktur/README.md` (CSS_DESIGN, 284 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 55. Duplikat-Gruppe (3 Dateien)

- `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` (CONTENT, 5069 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` (INSTRUCTIONS, 5069 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` (DOCUMENTATION, 5069 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 56. Duplikat-Gruppe (3 Dateien)

- `docs/website_struktur/statische-seiten/static/index.md` (CONTENT, 1563 Tokens)
- `docs/website_struktur/statische-seiten/static/index.md` (DOCUMENTATION, 1563 Tokens)
- `docs/website_struktur/statische-seiten/static/index.md` (CSS_DESIGN, 1563 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 57. Duplikat-Gruppe (3 Dateien)

- `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` (CONTENT, 424 Tokens)
- `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` (DOCUMENTATION, 424 Tokens)
- `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` (CSS_DESIGN, 424 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 58. Duplikat-Gruppe (3 Dateien)

- `docs/website_struktur/website_design/global_css.md` (CONTENT, 2009 Tokens)
- `docs/website_struktur/website_design/global_css.md` (DOCUMENTATION, 2009 Tokens)
- `docs/website_struktur/website_design/global_css.md` (CSS_DESIGN, 2009 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 59. Duplikat-Gruppe (2 Dateien)

- `docs/website_struktur/website_elemente/header.md` (CONTENT, 55 Tokens)
- `docs/website_struktur/website_elemente/header.md` (DOCUMENTATION, 55 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 60. Duplikat-Gruppe (2 Dateien)

- `docs/website_struktur/zielgruppe/persona.md` (CONTENT, 1528 Tokens)
- `docs/website_struktur/zielgruppe/persona.md` (DOCUMENTATION, 1528 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

#### 61. Duplikat-Gruppe (4 Dateien)

- `public/assets/README.md` (CONTENT, 471 Tokens)
- `public/assets/README.md` (INSTRUCTIONS, 471 Tokens)
- `public/assets/README.md` (DOCUMENTATION, 471 Tokens)
- `public/assets/README.md` (ASSETS, 471 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 62. Duplikat-Gruppe (4 Dateien)

- `public/assets/videos/README.md` (CONTENT, 173 Tokens)
- `public/assets/videos/README.md` (INSTRUCTIONS, 173 Tokens)
- `public/assets/videos/README.md` (DOCUMENTATION, 173 Tokens)
- `public/assets/videos/README.md` (ASSETS, 173 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 63. Duplikat-Gruppe (4 Dateien)

- `src/layouts/Layout.astro` (CONTENT, 444 Tokens)
- `src/layouts/Layout.astro` (CSS_DESIGN, 444 Tokens)
- `src/layouts/Layout.astro` (ASSETS, 444 Tokens)
- `src/layouts/Layout.astro` (ASTRO_COMPONENTS, 444 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 3 Duplikate

#### 64. Duplikat-Gruppe (3 Dateien)

- `src/pages/blog/index.astro` (CONTENT, 181 Tokens)
- `src/pages/blog/index.astro` (CSS_DESIGN, 181 Tokens)
- `src/pages/blog/index.astro` (ASTRO_COMPONENTS, 181 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 65. Duplikat-Gruppe (3 Dateien)

- `src/pages/blog/[slug].astro` (CONTENT, 153 Tokens)
- `src/pages/blog/[slug].astro` (CSS_DESIGN, 153 Tokens)
- `src/pages/blog/[slug].astro` (ASTRO_COMPONENTS, 153 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 66. Duplikat-Gruppe (3 Dateien)

- `src/styles/global.css` (CONTENT, 2961 Tokens)
- `src/styles/global.css` (DOCUMENTATION, 2961 Tokens)
- `src/styles/global.css` (CSS_DESIGN, 2961 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 2 Duplikate

#### 67. Duplikat-Gruppe (2 Dateien)

- `src/pages/datenschutz.astro` (CSS_DESIGN, 1009 Tokens)
- `src/pages/datenschutz.astro` (ASTRO_COMPONENTS, 1009 Tokens)

**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche 1 Duplikate

### 📂 LEERE VERZEICHNISSE

- `docs/todos/prioritaeten/mittel/`
- `docs/todos/prioritaeten/niedrig/`
- `docs/website_struktur/dynamische-seiten/`
- `public/assets/images/blogs/`
- `src/styles/typographie/elemte/`
- `src/styles/typographie/`
- `src/`
- `tools/`

**🎯 EMPFEHLUNG:** 8 leere Verzeichnisse löschen

### 🔄 REDUNDANTE VERZEICHNISSE

#### 1. `docs` ↔ `docs/todos/prioritaeten/hoch`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 2. `src/content/blog` ↔ `docs/website_struktur/dynamische-seiten/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 3. `src/content/blog` ↔ `src/pages/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 4. `src/content/pages` ↔ `src/pages`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 5. `src/content/pages` ↔ `public/assets/images`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 6. `src/pages` ↔ `public/assets/images`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 7. `src/content` ↔ `docs/website_struktur/content`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 8. `docs/website_struktur/dynamische-seiten/blog` ↔ `src/pages/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen


---

## 🏗️ STRUKTUR-VALIDIERUNG (NEU!)

### 📄 FALSCH PLATZIERTE DATEIEN

| Datei | Aktuell | Ideal | Begründung |
|-------|---------|-------|------------|
| `astro.config.mjs` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `docs/00_ideenwerkstatt/ideen_brainstormings.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/css-deep-analysis-roadmap.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/anti-floskel-regeln.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/zielgruppe.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/grundrecherche.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefenrecherche.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/README.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/footer.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `package.json` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `README.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `src/content/blog/mindset-gegen-grosskonzern.md` | BUILD_SYSTEM | CONTENT | Datei gehört besser zu CONTENT |
| `src/content/pages/index.md` | BUILD_SYSTEM | CONTENT | Datei gehört besser zu CONTENT |
| `src/pages/disclaimer.astro` | BUILD_SYSTEM | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/impressum.astro` | BUILD_SYSTEM | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/index.astro` | BUILD_SYSTEM | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `tailwind.config.mjs` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `tools/analyzer/instructions/README.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/README.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/media/README.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/project-maintenance/README.md` | BUILD_SYSTEM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `astro.config.mjs` | CONFIG | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `docs/todos/struktur-migration-plan.json` | CONFIG | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | CONFIG | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | CONFIG | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | CONFIG | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `package.json` | CONFIG | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `src/content/config.ts` | CONFIG | CONTENT | Datei gehört besser zu CONTENT |
| `tailwind.config.mjs` | CONFIG | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `tools/analyzer/contradiction-scanner.cjs` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/exact-line-counter.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/file-scanner.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/README.md` | CONFIG | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/redundancy-detector.cjs` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer-v2.cjs` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `docs/00_ideenwerkstatt/dggp/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/00_ideenwerkstatt/ideen_brainstormings.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/00_ideenwerkstatt/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/css-deep-analysis-roadmap.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/anti-floskel-regeln.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/zielgruppe.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/hoch/kritische-fixes.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/polemik/startseite.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/simons_authentische_sprache.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/grundrecherche.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefenrecherche.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/static/index.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/global_css.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/footer.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/header.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/zielgruppe/persona.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/videos/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `src/layouts/Layout.astro` | CONTENT | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/blog/index.astro` | CONTENT | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/blog/[slug].astro` | CONTENT | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/disclaimer.astro` | CONTENT | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/impressum.astro` | CONTENT | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/index.astro` | CONTENT | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/styles/global.css` | CONTENT | CSS_DESIGN | Datei gehört besser zu CSS_DESIGN |
| `tools/analyzer/instructions/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/modules/scope-definitions.js` | CONTENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` | CONTENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` | CONTENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | CONTENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/media/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/project-maintenance/README.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/00_ideenwerkstatt/dggp/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/00_ideenwerkstatt/ideen_brainstormings.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/00_ideenwerkstatt/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `package.json` | INSTRUCTIONS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `public/assets/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/videos/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/contradiction-scanner.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/link-validator.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/token-counter.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/instructions/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/master-analyzer.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/redundancy-detector.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer-v2.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | INSTRUCTIONS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/media/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/project-maintenance/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `package.json` | DOCUMENTATION | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `src/content/blog/mindset-gegen-grosskonzern.md` | DOCUMENTATION | CONTENT | Datei gehört besser zu CONTENT |
| `src/content/pages/index.md` | DOCUMENTATION | CONTENT | Datei gehört besser zu CONTENT |
| `src/styles/global.css` | DOCUMENTATION | CSS_DESIGN | Datei gehört besser zu CSS_DESIGN |
| `tools/analyzer/contradiction-scanner.cjs` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/token-counter.cjs` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/master-analyzer.cjs` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/redundancy-detector.cjs` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer-v2.cjs` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | DOCUMENTATION | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `docs/00_ideenwerkstatt/ideen_brainstormings.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/css-deep-analysis-roadmap.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/polemik/startseite.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/README.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/grundrecherche.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefenrecherche.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/README.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/static/index.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/global_css.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `README.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `src/layouts/Layout.astro` | CSS_DESIGN | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/blog/index.astro` | CSS_DESIGN | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/blog/[slug].astro` | CSS_DESIGN | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/datenschutz.astro` | CSS_DESIGN | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/disclaimer.astro` | CSS_DESIGN | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/impressum.astro` | CSS_DESIGN | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/index.astro` | CSS_DESIGN | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `tools/analyzer/contradiction-scanner.cjs` | CSS_DESIGN | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/exact-line-counter.js` | CSS_DESIGN | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | CSS_DESIGN | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/README.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` | CSS_DESIGN | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | CSS_DESIGN | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | CSS_DESIGN | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `docs/00_ideenwerkstatt/ideen_brainstormings.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/css-deep-analysis-roadmap.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/zielgruppe.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/hoch/kritische-fixes.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.json` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/polemik/startseite.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefenrecherche.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `package.json` | TODOS_MANAGEMENT | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `src/content/blog/mindset-gegen-grosskonzern.md` | TODOS_MANAGEMENT | CONTENT | Datei gehört besser zu CONTENT |
| `src/content/pages/index.md` | TODOS_MANAGEMENT | CONTENT | Datei gehört besser zu CONTENT |
| `tools/analyzer/contradiction-scanner.cjs` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/analysis-verifier.cjs` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/exact-line-counter.js` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/master-analyzer.cjs` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/redundancy-detector.cjs` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | TODOS_MANAGEMENT | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `docs/todos/struktur-migration-plan.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/images/simon-placeholder.svg` | ASSETS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `public/assets/images/startseite-index/simon_haenel_natur_froehlich.webp` | ASSETS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `public/assets/images/startseite_uebermich/simon_haenel_entschlossen.webp` | ASSETS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `public/assets/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/videos/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/robots.txt` | ASSETS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `src/content/blog/mindset-gegen-grosskonzern.md` | ASSETS | CONTENT | Datei gehört besser zu CONTENT |
| `src/content/pages/index.md` | ASSETS | CONTENT | Datei gehört besser zu CONTENT |
| `src/layouts/Layout.astro` | ASSETS | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `src/pages/index.astro` | ASSETS | ASTRO_COMPONENTS | Datei gehört besser zu ASTRO_COMPONENTS |
| `tools/analyzer/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/scopes/structure-optimizer.cjs` | ASSETS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/media/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | ASTRO_COMPONENTS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `README.md` | ASTRO_COMPONENTS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/README.md` | ASTRO_COMPONENTS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/scopes/structure-optimizer.cjs` | ASTRO_COMPONENTS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |

### ⚠️ STRUKTUR-VERLETZUNGEN

#### README-PLACEMENT (61 Verletzungen)

- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/instructions/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/media/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/project-maintenance/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/marketing/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/verhaltensmuster/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/website_struktur/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/videos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/instructions/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/media/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/project-maintenance/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/marketing/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/verhaltensmuster/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/website_struktur/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/videos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/instructions/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/media/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/project-maintenance/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/marketing/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/verhaltensmuster/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/website_struktur/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/videos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/instructions/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/media/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/project-maintenance/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/website_struktur/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/marketing/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/verhaltensmuster/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/videos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/media/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/analyzer/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis

### 🏷️ NAMING-INKONSISTENZEN

#### MIXED_SEPARATORS (8 Dateien)

- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** Verwende einheitlich - oder _
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** Verwende einheitlich - oder _
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** Verwende einheitlich - oder _
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** Verwende einheitlich - oder _
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** Verwende einheitlich - oder _
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** Verwende einheitlich - oder _
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** Verwende einheitlich - oder _
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** Verwende einheitlich - oder _

#### CAMELCASE_IN_MARKDOWN (87 Dateien)

- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/instructions/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/media/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/project-maintenance/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/marketing/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/verhaltensmuster/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/content/fallbeispiel_Story_formatted.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/videos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/instructions/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/media/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/project-maintenance/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/marketing/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/verhaltensmuster/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/videos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/instructions/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/media/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/project-maintenance/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/marketing/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/verhaltensmuster/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/content/fallbeispiel_Story_formatted.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/videos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/instructions/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/media/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/project-maintenance/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/marketing/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/verhaltensmuster/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/videos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/media/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien


---

## 🔍 ANALYSIS-VERIFICATION REPORT

### 📊 VERIFICATION-ZUSAMMENFASSUNG

| Metrik | Wert |
|--------|------|
| **Status** | VERIFIED |
| **Confidence-Score** | 100% |
| **Verification-Levels** | basic, crossReference, logic, consensus |
| **Major Issues** | 0 |

✅ **ANALYSIS VERIFIED** - Ergebnisse wurden durch Multi-Level-Checks bestätigt.

---

## 🏗️ MODULARISIERUNGS-EMPFEHLUNGEN

### 1. ⚠️ Scope BUILD_SYSTEM hat 103622 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** BUILD_SYSTEM
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope CONFIG hat 51603 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONFIG
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope CONTENT hat 109890 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONTENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. ⚠️ Scope INSTRUCTIONS hat 39479 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** INSTRUCTIONS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 5. ⚠️ Scope DOCUMENTATION hat 124549 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** DOCUMENTATION
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 6. ⚠️ Scope CSS_DESIGN hat 80538 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** CSS_DESIGN
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 7. ⚠️ Scope TODOS_MANAGEMENT hat 85107 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 8. ⚠️ Scope ASSETS hat 76804 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASSETS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 9. ⚠️ Scope ASTRO_COMPONENTS hat 13843 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASTRO_COMPONENTS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 10. 🚨 Gesamtprojekt hat 685435 Tokens (>50k GitHub Copilot Limit)

- **Typ:** IMPLEMENT_CHUNKING
- **Scope:** PROJECT_WIDE
- **Aktion:** Zwingend Scope-basierte Analyse implementieren
- **Priorität:** CRITICAL


---

## 🤖 KI-ARBEITSEMPFEHLUNGEN

⚠️ **KRITISCH:** Projekt überschreitet VS Code Insiders Limit (128k Tokens)

**Empfohlene Arbeitsweise:**
1. **Zwingend Scope-basierte Analyse** - Niemals Vollprojekt laden
2. **Token-Budget pro Chat:** Max. 20k Tokens für sichere Arbeit
3. **Neue Chat-Sessions** für jeden Scope
4. **Kritische Überlappungen** (CSS+SEO) nur bei Bedarf kombinieren

### 📋 TOP TOKEN-INTENSIVE DATEIEN

| Datei | Tokens | Zeilen | Scopes |
|-------|--------|--------|---------|
| `public/assets/images/startseite-index/simon_haenel_natur_froehlich.webp` | 31629 | 4422 | ASSETS |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | 20968 | 3456 | ASSETS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | 20968 | 3456 | ASSETS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | 20968 | 3456 | ASSETS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | 20968 | 3456 | ASSETS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | 20968 | 3456 | ASSETS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | 20968 | 3456 | ASSETS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |
| `docs/website_struktur/content/gicht-buch/book_1.txt` | 20968 | 3456 | ASSETS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |
| `docs/website_struktur/recherche/tiefenrecherche.md` | 10365 | 1 | BUILD_SYSTEM, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |
| `docs/website_struktur/recherche/tiefenrecherche.md` | 10365 | 1 | BUILD_SYSTEM, CONTENT, CSS_DESIGN, DOCUMENTATION, TODOS_MANAGEMENT |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
