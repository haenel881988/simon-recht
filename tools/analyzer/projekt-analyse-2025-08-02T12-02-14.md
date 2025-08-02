# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 2.8.2025, 14:02:14  
**Analysedauer:** 0.45 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 87 |
| **Zeilen gesamt** | 19’532 |
| **Wörter gesamt** | 84’428 |
| **Zeichen gesamt** | 829’212 |
| **Geschätzte Tokens** | 109’792 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **ANALYZER_CORE_TOOLS** | 3 | 3’026 | 10’337 | 3446 |
| **LEGACY_CONTENT** | 4 | 629 | 9’715 | 2429 |
| **ANALYZER_MODULES_SCOPES** | 4 | 2’915 | 8’841 | 2210 |
| **TODOS_STRUKTUR** | 2 | 744 | 7’325 | 3663 |
| **CONTENT** | 3 | 1’082 | 6’508 | 2169 |
| **LEGACY_RECHERCHE_GTM** | 1 | 316 | 5’662 | 5662 |
| **ASTRO_COMPONENTS** | 7 | 1’456 | 5’470 | 781 |
| **LEGACY_RECHERCHE_BILDUNG** | 1 | 284 | 5’310 | 5310 |
| **LEGACY_RECHERCHE_COACHING** | 1 | 284 | 5’069 | 5069 |
| **LEGACY_RECHERCHE_SEO** | 1 | 394 | 5’061 | 5061 |
| **CSS_DESIGN** | 16 | 1’721 | 5’035 | 315 |
| **TODOS_VERHALTENSMUSTER** | 1 | 66 | 4’773 | 4773 |
| **ANALYZER_LEGACY_TOOLS** | 3 | 1’264 | 4’396 | 1465 |
| **DOCUMENTATION_TECHNICAL** | 6 | 1’083 | 4’360 | 727 |
| **ANALYZER_MODULES_CORE** | 3 | 1’314 | 4’209 | 1403 |
| **TODOS_CORE** | 2 | 515 | 3’877 | 1939 |
| **IDEENWERKSTATT** | 3 | 229 | 3’115 | 1038 |
| **LEGACY_DESIGN** | 4 | 420 | 2’530 | 633 |
| **LEGACY_ZIELGRUPPE** | 1 | 253 | 1’528 | 1528 |
| **LEGACY_DOCUMENTATION** | 3 | 342 | 1’356 | 452 |
| **ANALYZER_MODULES_BASE** | 3 | 382 | 1’280 | 427 |
| **DOCUMENTATION_CORE** | 2 | 147 | 1’076 | 538 |
| **ANALYZER_REPORTS** | 2 | 229 | 913 | 457 |
| **TODOS_PRIORITAETEN** | 4 | 190 | 779 | 195 |
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
| `docs/todos/prioritaeten/hoch/aktuelle-krisen.md` | TODOS_PRIORITAETEN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/mittel/technische-verbesserungen.md` | TODOS_PRIORITAETEN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/niedrig/optimierungen.md` | TODOS_PRIORITAETEN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/prioritaeten/README.md` | TODOS_PRIORITAETEN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/README.md` | TODOS_CORE | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | TODOS_CORE | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.json` | TODOS_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | TODOS_STRUKTUR | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | TODOS_VERHALTENSMUSTER | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | LEGACY_CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/polemik/startseite.md` | LEGACY_CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` | LEGACY_CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/static/index.md` | LEGACY_CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | LEGACY_RECHERCHE_COACHING | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | LEGACY_RECHERCHE_SEO | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | LEGACY_RECHERCHE_GTM | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | LEGACY_RECHERCHE_BILDUNG | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` | LEGACY_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/global_css.md` | LEGACY_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/footer.md` | LEGACY_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/header.md` | LEGACY_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/zielgruppe/persona.md` | LEGACY_ZIELGRUPPE | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/videos/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/contradiction-scanner.cjs` | ANALYZER_CORE_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/master-analyzer.cjs` | ANALYZER_CORE_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | ANALYZER_CORE_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/analysis-verifier.cjs` | ANALYZER_MODULES_CORE | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/link-validator.cjs` | ANALYZER_MODULES_CORE | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/token-counter.cjs` | ANALYZER_MODULES_CORE | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/exact-line-counter.js` | ANALYZER_LEGACY_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/instructions-redundancy-scanner.cjs` | ANALYZER_LEGACY_TOOLS | INSTRUCTIONS | Datei gehört besser zu INSTRUCTIONS |
| `tools/analyzer/structure-deep-analyzer.cjs` | ANALYZER_LEGACY_TOOLS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/file-scanner.js` | ANALYZER_MODULES_BASE | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | ANALYZER_MODULES_BASE | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/smart-exception-handler.cjs` | ANALYZER_MODULES_BASE | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/redundanz-report-2025-08-02.md` | ANALYZER_REPORTS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` | ANALYZER_REPORTS | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` | ANALYZER_MODULES_SCOPES | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/redundancy-detector.cjs` | ANALYZER_MODULES_SCOPES | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer-v2.cjs` | ANALYZER_MODULES_SCOPES | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | ANALYZER_MODULES_SCOPES | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |

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

### 1. 🔔 Projekt-Total: 109792 Tokens (KI-Work-Context: 10640 = 10%)

- **Typ:** IMPLEMENT_CHUNKING
- **Scope:** PROJECT_WIDE
- **Aktion:** HINWEIS: KI arbeitet nur mit relevanten Scopes, nicht Vollprojekt. Bei Token-Warnings: Scope-fokussierte Arbeit nutzen.
- **Priorität:** MEDIUM


---

## 🤖 KI-ARBEITSEMPFEHLUNGEN (WORK-CONTEXT-OPTIMIERT)

🎯 **KI-WORK-CONTEXT-ANALYSE:**
- **Projekt-Total:** 109’792 Tokens (inkl. irrelevante Bilder/Research)
- **KI-Work-Relevant:** 10’640 Tokens (10% des Projekts)
- **Filtered Out:** Bilder, Research-Docs, Archive (99’152 Tokens)

✅ **WORK-CONTEXT OK:** KI kann effizient mit relevanten Bereichen arbeiten

**Arbeitsweise:** Multi-Scope-Operationen möglich, Scope-Trennung trotzdem sinnvoll

### 📋 TOP TOKEN-INTENSIVE DATEIEN

| Datei | Tokens | Zeilen | Scopes |
|-------|--------|--------|---------|
| `docs/todos/struktur-migration-plan.json` | 6819 | 609 | TODOS_STRUKTUR |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | 5662 | 316 | LEGACY_RECHERCHE_GTM |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | 5310 | 284 | LEGACY_RECHERCHE_BILDUNG |
| `tools/analyzer/universal-project-analyzer.cjs` | 5255 | 1446 | ANALYZER_CORE_TOOLS |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | 5239 | 199 | LEGACY_CONTENT |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | 5069 | 284 | LEGACY_RECHERCHE_COACHING |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | 5061 | 394 | LEGACY_RECHERCHE_SEO |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | 4773 | 66 | TODOS_VERHALTENSMUSTER |
| `docs/todos/todos.md` | 3734 | 499 | TODOS_CORE |
| `src/content/blog/mindset-gegen-grosskonzern.md` | 3595 | 634 | CONTENT |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
