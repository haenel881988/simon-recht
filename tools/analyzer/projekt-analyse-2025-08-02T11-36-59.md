# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 2.8.2025, 13:36:59  
**Analysedauer:** 0.45 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 87 |
| **Zeilen gesamt** | 19’463 |
| **Wörter gesamt** | 84’190 |
| **Zeichen gesamt** | 825’896 |
| **Geschätzte Tokens** | 109’483 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **LEGACY_WEBSITE_STRUKTUR** | 13 | 2’580 | 34’875 | 2683 |
| **ANALYZER_TOOLS** | 18 | 9’062 | 29’705 | 1650 |
| **TODOS_MANAGEMENT** | 9 | 1’515 | 16’754 | 1862 |
| **CONTENT** | 3 | 1’082 | 6’508 | 2169 |
| **ASTRO_COMPONENTS** | 7 | 1’456 | 5’470 | 781 |
| **CSS_DESIGN** | 16 | 1’721 | 5’035 | 315 |
| **DOCUMENTATION_TECHNICAL** | 6 | 1’083 | 4’360 | 727 |
| **IDEENWERKSTATT** | 3 | 228 | 3’077 | 1026 |
| **LEGACY_DOCUMENTATION** | 3 | 342 | 1’356 | 452 |
| **DOCUMENTATION_CORE** | 2 | 147 | 1’076 | 538 |
| **DOCUMENTATION_WEBSITE** | 3 | 126 | 740 | 247 |
| **DOCUMENTATION_HUB** | 1 | 57 | 219 | 219 |
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

#### 3. `docs/website_struktur/dynamische-seiten/blog` ↔ `src/content/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 4. `docs/website_struktur/dynamische-seiten/blog` ↔ `src/pages/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 5. `src/content/blog` ↔ `src/pages/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 6. `src/content/pages` ↔ `src/pages`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen


---

## 🏗️ STRUKTUR-VALIDIERUNG (NEU!)

### 📄 FALSCH PLATZIERTE DATEIEN

| Datei | Aktuell | Ideal | Begründung |
|-------|---------|-------|------------|
| `astro.config.mjs` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `package.json` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `docs/00_ideenwerkstatt/dggp/README.md` | IDEENWERKSTATT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/00_ideenwerkstatt/ideen_brainstormings.md` | IDEENWERKSTATT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/00_ideenwerkstatt/README.md` | IDEENWERKSTATT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/core/analyzer-instructions.md` | DOCUMENTATION_CORE | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/core/simons-authentische-sprache.md` | DOCUMENTATION_CORE | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/README.md` | DOCUMENTATION_HUB | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/technical/analyzer-tools.md` | DOCUMENTATION_TECHNICAL | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/technical/assets-management.md` | DOCUMENTATION_TECHNICAL | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/technical/css-deep-analysis-roadmap.md` | DOCUMENTATION_TECHNICAL | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/technical/media-tools.md` | DOCUMENTATION_TECHNICAL | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/technical/project-maintenance.md` | DOCUMENTATION_TECHNICAL | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/technical/styles-system.md` | DOCUMENTATION_TECHNICAL | CSS_DESIGN | Datei gehört besser zu CSS_DESIGN |
| `docs/documentation/website/marketing-basics.md` | DOCUMENTATION_WEBSITE | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/website/statische-seiten-struktur.md` | DOCUMENTATION_WEBSITE | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/documentation/website/website-struktur-basis.md` | DOCUMENTATION_WEBSITE | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/anti-floskel-regeln.md` | LEGACY_DOCUMENTATION | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/marketing/zielgruppe.md` | LEGACY_DOCUMENTATION | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `README.md` | LEGACY_DOCUMENTATION | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/hoch/aktuelle-krisen.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/mittel/technische-verbesserungen.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/niedrig/optimierungen.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.json` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/polemik/startseite.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/static/index.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/global_css.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/footer.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/header.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/zielgruppe/persona.md` | LEGACY_WEBSITE_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/videos/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/contradiction-scanner.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/analysis-verifier.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/link-validator.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/token-counter.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/exact-line-counter.js` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/instructions-redundancy-scanner.cjs` | ANALYZER_TOOLS | INSTRUCTIONS | Datei gehört besser zu INSTRUCTIONS |
| `tools/analyzer/master-analyzer.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/file-scanner.js` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/smart-exception-handler.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/redundanz-report-2025-08-02.md` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/redundancy-detector.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer-v2.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/structure-deep-analyzer.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | ANALYZER_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |

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
- **[`LOW`]** `public/assets/videos/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `src/styles/README.md`
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
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/prioritaeten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/content/fallbeispiel_Story_formatted.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/videos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `src/styles/README.md`
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

### 1. ⚠️ Scope TODOS_MANAGEMENT hat 16754 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope LEGACY_WEBSITE_STRUKTUR hat 34875 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** LEGACY_WEBSITE_STRUKTUR
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope ANALYZER_TOOLS hat 29705 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** ANALYZER_TOOLS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. 🔔 Projekt-Total: 109483 Tokens (KI-Work-Context: 27394 = 25%)

- **Typ:** IMPLEMENT_CHUNKING
- **Scope:** PROJECT_WIDE
- **Aktion:** HINWEIS: KI arbeitet nur mit relevanten Scopes, nicht Vollprojekt. Bei Token-Warnings: Scope-fokussierte Arbeit nutzen.
- **Priorität:** MEDIUM


---

## 🤖 KI-ARBEITSEMPFEHLUNGEN (WORK-CONTEXT-OPTIMIERT)

🎯 **KI-WORK-CONTEXT-ANALYSE:**
- **Projekt-Total:** 109’483 Tokens (inkl. irrelevante Bilder/Research)
- **KI-Work-Relevant:** 27’394 Tokens (25% des Projekts)
- **Filtered Out:** Bilder, Research-Docs, Archive (82’089 Tokens)

✅ **WORK-CONTEXT OK:** KI kann effizient mit relevanten Bereichen arbeiten

**Arbeitsweise:** Multi-Scope-Operationen möglich, Scope-Trennung trotzdem sinnvoll

### 📋 TOP TOKEN-INTENSIVE DATEIEN

| Datei | Tokens | Zeilen | Scopes |
|-------|--------|--------|---------|
| `docs/todos/struktur-migration-plan.json` | 6819 | 609 | TODOS_MANAGEMENT |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | 5662 | 316 | LEGACY_WEBSITE_STRUKTUR |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | 5310 | 284 | LEGACY_WEBSITE_STRUKTUR |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | 5239 | 199 | LEGACY_WEBSITE_STRUKTUR |
| `tools/analyzer/universal-project-analyzer.cjs` | 5158 | 1431 | ANALYZER_TOOLS |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | 5069 | 284 | LEGACY_WEBSITE_STRUKTUR |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | 5061 | 394 | LEGACY_WEBSITE_STRUKTUR |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | 4773 | 66 | TODOS_MANAGEMENT |
| `docs/todos/todos.md` | 3734 | 499 | TODOS_MANAGEMENT |
| `src/content/blog/mindset-gegen-grosskonzern.md` | 3595 | 634 | CONTENT |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
