# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 2.8.2025, 13:14:51  
**Analysedauer:** 0.45 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 87 |
| **Zeilen gesamt** | 19’392 |
| **Wörter gesamt** | 83’594 |
| **Zeichen gesamt** | 821’055 |
| **Geschätzte Tokens** | 108’708 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **UNCLASSIFIED** | 20 | 9’121 | 31’902 | 1595 |
| **DOCUMENTATION** | 21 | 3’195 | 30’970 | 1475 |
| **TODOS_MANAGEMENT** | 9 | 1’515 | 16’754 | 1862 |
| **CONTENT** | 5 | 1’467 | 14’052 | 2810 |
| **CSS_DESIGN** | 18 | 2’113 | 7’468 | 415 |
| **ASTRO_COMPONENTS** | 7 | 1’456 | 5’470 | 781 |
| **CONFIG** | 3 | 437 | 1’466 | 489 |
| **INSTRUCTIONS** | 1 | 24 | 318 | 318 |
| **ASSETS** | 1 | 14 | 173 | 173 |
| **BUILD_SYSTEM** | 2 | 50 | 135 | 68 |

---

## 🔄 REDUNDANZ-ANALYSE (NEU!)

### 📂 LEERE VERZEICHNISSE

- `docs/website_struktur/content/gicht-buch/`
- `docs/website_struktur/dynamische-seiten/`
- `docs/website_struktur/recherche/`
- `docs/website_struktur/statische-seiten/`
- `docs/website_struktur/`
- `docs/`
- `public/assets/images/startseite-index/`
- `public/assets/images/startseite_uebermich/`
- `public/assets/images/`
- `public/assets/`
- `public/`
- `src/`
- `tools/analyzer/instructions/`
- `tools/analyzer/tools/analyzer/`
- `tools/analyzer/tools/`
- `tools/media/`
- `tools/project-maintenance/`
- `tools/`

**🎯 EMPFEHLUNG:** 18 leere Verzeichnisse löschen

### 🔄 REDUNDANTE VERZEICHNISSE

#### 1. `docs/documentation/core` ↔ `tools/analyzer/core`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 2. `docs/website_struktur/content` ↔ `src/content`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 3. `src/content/blog` ↔ `docs/website_struktur/dynamische-seiten/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 4. `src/content/blog` ↔ `src/pages/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 5. `src/content/pages` ↔ `src/pages`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 6. `docs/website_struktur/dynamische-seiten/blog` ↔ `src/pages/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen


---

## 🏗️ STRUKTUR-VALIDIERUNG (NEU!)

### 📄 FALSCH PLATZIERTE DATEIEN

| Datei | Aktuell | Ideal | Begründung |
|-------|---------|-------|------------|
| `astro.config.mjs` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `package.json` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `docs/documentation/technical/styles-system.md` | DOCUMENTATION | CSS_DESIGN | Datei gehört besser zu CSS_DESIGN |
| `docs/documentation/core/analyzer-instructions.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/hoch/aktuelle-krisen.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/mittel/technische-verbesserungen.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/niedrig/optimierungen.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.json` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/polemik/startseite.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/static/index.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/footer.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/header.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/zielgruppe/persona.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/contradiction-scanner.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/analysis-verifier.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/link-validator.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/token-counter.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/instructions-redundancy-scanner.cjs` | UNCLASSIFIED | INSTRUCTIONS | Datei gehört besser zu INSTRUCTIONS |
| `tools/analyzer/master-analyzer.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/smart-exception-handler.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/redundanz-report-2025-08-02.md` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/redundancy-detector.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer-v2.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/structure-deep-analyzer.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/global_css.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/videos/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/exact-line-counter.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/file-scanner.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |

### ⚠️ STRUKTUR-VERLETZUNGEN

#### README-PLACEMENT (7 Verletzungen)

- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/documentation/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `src/styles/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `public/assets/videos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis

### 🏷️ NAMING-INKONSISTENZEN

#### CAMELCASE_IN_MARKDOWN (14 Dateien)

- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/documentation/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/content/fallbeispiel_Story_formatted.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `src/styles/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/videos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien

#### MIXED_SEPARATORS (2 Dateien)

- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** Verwende einheitlich - oder _
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** Verwende einheitlich - oder _


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

### 1. ⚠️ Scope DOCUMENTATION hat 30970 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** DOCUMENTATION
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope TODOS_MANAGEMENT hat 16754 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope CONTENT hat 14052 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONTENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. ⚠️ Scope UNCLASSIFIED hat 31902 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** UNCLASSIFIED
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 5. 🔔 20 Dateien ohne Scope-Zuordnung

- **Typ:** CATEGORIZE_FILES
- **Scope:** UNCLASSIFIED
- **Aktion:** Neue Scope-Pattern definieren oder Dateien reorganisieren
- **Priorität:** MEDIUM

### 6. ⚠️ Projekt-Total: 108708 Tokens (KI-Work-Context: 31611 = 29%)

- **Typ:** IMPLEMENT_CHUNKING
- **Scope:** PROJECT_WIDE
- **Aktion:** HINWEIS: KI arbeitet nur mit relevanten Scopes, nicht Vollprojekt. Bei Token-Warnings: Scope-fokussierte Arbeit nutzen.
- **Priorität:** HIGH


---

## 🤖 KI-ARBEITSEMPFEHLUNGEN (WORK-CONTEXT-OPTIMIERT)

🎯 **KI-WORK-CONTEXT-ANALYSE:**
- **Projekt-Total:** 108’708 Tokens (inkl. irrelevante Bilder/Research)
- **KI-Work-Relevant:** 31’611 Tokens (29% des Projekts)
- **Filtered Out:** Bilder, Research-Docs, Archive (77’097 Tokens)

⚠️ **WORK-CONTEXT WARNUNG:** KI-relevante Bereiche werden groß

**Empfohlene Arbeitsweise:**
1. **Scope-fokussierte Arbeit** bevorzugen für Effizienz
2. **Multi-Scope nur bei Abhängigkeiten** (CSS+Astro Components)
3. **Token-Monitoring** bei komplexen Operationen

### 📋 TOP TOKEN-INTENSIVE DATEIEN

| Datei | Tokens | Zeilen | Scopes |
|-------|--------|--------|---------|
| `docs/todos/struktur-migration-plan.json` | 6819 | 609 | TODOS_MANAGEMENT |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | 5662 | 316 | DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | 5310 | 284 | DOCUMENTATION |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | 5239 | 199 | CONTENT |
| `tools/analyzer/universal-project-analyzer.cjs` | 5129 | 1426 | UNCLASSIFIED |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | 5069 | 284 | DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | 5061 | 394 | DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | 4773 | 66 | TODOS_MANAGEMENT |
| `docs/todos/todos.md` | 3734 | 499 | TODOS_MANAGEMENT |
| `src/content/blog/mindset-gegen-grosskonzern.md` | 3595 | 634 | CONTENT |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
