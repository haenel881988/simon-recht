# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 1.8.2025, 17:05:34  
**Analysedauer:** 0.41 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 68 |
| **Zeilen gesamt** | 17’345 |
| **Wörter gesamt** | 78’032 |
| **Zeichen gesamt** | 763’957 |
| **Geschätzte Tokens** | 101’470 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **UNCLASSIFIED** | 24 | 9’069 | 32’157 | 1340 |
| **DOCUMENTATION** | 11 | 1’824 | 24’963 | 2269 |
| **TODOS_MANAGEMENT** | 5 | 1’268 | 15’823 | 3165 |
| **CONTENT** | 6 | 1’590 | 14’810 | 2468 |
| **CSS_DESIGN** | 7 | 1’522 | 5’698 | 814 |
| **ASTRO_COMPONENTS** | 7 | 1’456 | 5’470 | 781 |
| **CONFIG** | 3 | 435 | 1’452 | 484 |
| **ASSETS** | 2 | 107 | 644 | 322 |
| **INSTRUCTIONS** | 1 | 24 | 318 | 318 |
| **BUILD_SYSTEM** | 2 | 50 | 135 | 68 |

---

## 🔄 REDUNDANZ-ANALYSE (NEU!)

### 📂 LEERE VERZEICHNISSE

- `docs/website_struktur/content/gicht-buch/`
- `docs/website_struktur/dynamische-seiten/`
- `docs/website_struktur/recherche/`
- `public/assets/images/startseite-index/`
- `public/assets/images/startseite_uebermich/`
- `public/assets/images/`
- `public/`
- `src/`
- `tools/`

**🎯 EMPFEHLUNG:** 9 leere Verzeichnisse löschen

### 🔄 REDUNDANTE VERZEICHNISSE

#### 1. `docs/website_struktur/dynamische-seiten/blog` ↔ `src/content/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 2. `docs/website_struktur/dynamische-seiten/blog` ↔ `src/pages/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 3. `docs/website_struktur/content` ↔ `src/content`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 4. `src/content/blog` ↔ `src/pages/blog`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 5. `src/content/pages` ↔ `src/pages`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen


---

## 🏗️ STRUKTUR-VALIDIERUNG (NEU!)

### 📄 FALSCH PLATZIERTE DATEIEN

| Datei | Aktuell | Ideal | Begründung |
|-------|---------|-------|------------|
| `astro.config.mjs` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `package.json` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `docs/css-deep-analysis-roadmap.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/README.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/README.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/statische-seiten/static/index.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/footer.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_elemente/header.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/zielgruppe/persona.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/contradiction-scanner.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/analysis-verifier.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/link-validator.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/core/token-counter.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/master-analyzer.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/smart-exception-handler.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/README.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/scanner-korruptions-bericht-2025-07-31.md` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/redundancy-detector.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer-v2.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/scopes/structure-optimizer.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/structure-deep-analyzer.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/universal-project-analyzer.cjs` | UNCLASSIFIED | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/media/README.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/project-maintenance/README.md` | UNCLASSIFIED | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/README.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.json` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/struktur-migration-plan.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/todos.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | TODOS_MANAGEMENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/polemik/startseite.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/simons_authentische_sprache.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/global_css.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/videos/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `tools/analyzer/exact-line-counter.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/file-scanner.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/modules/scope-definitions.js` | CONFIG | BUILD_SYSTEM | Datei gehört besser zu BUILD_SYSTEM |
| `tools/analyzer/instructions/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |

### ⚠️ STRUKTUR-VERLETZUNGEN

#### README-PLACEMENT (12 Verletzungen)

- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/marketing/README.md`
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
- **[`LOW`]** `tools/media/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `tools/project-maintenance/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis
- **[`LOW`]** `docs/todos/README.md`
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

### 🏷️ NAMING-INKONSISTENZEN

#### CAMELCASE_IN_MARKDOWN (19 Dateien)

- **[`LOW`]** `docs/00_ideenwerkstatt/dggp/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/00_ideenwerkstatt/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/marketing/README.md`
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
- **[`LOW`]** `docs/website_struktur/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/statische-seiten/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/media/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/project-maintenance/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/todos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/content/fallbeispiel_Story_formatted.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `public/assets/videos/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `tools/analyzer/instructions/README.md`
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

### 1. ⚠️ Scope DOCUMENTATION hat 24963 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** DOCUMENTATION
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope UNCLASSIFIED hat 32157 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** UNCLASSIFIED
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope TODOS_MANAGEMENT hat 15823 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. ⚠️ Scope CONTENT hat 14810 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONTENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 5. 🔔 24 Dateien ohne Scope-Zuordnung

- **Typ:** CATEGORIZE_FILES
- **Scope:** UNCLASSIFIED
- **Aktion:** Neue Scope-Pattern definieren oder Dateien reorganisieren
- **Priorität:** MEDIUM

### 6. 🔔 Projekt-Total: 101470 Tokens (KI-Work-Context: 28896 = 28%)

- **Typ:** IMPLEMENT_CHUNKING
- **Scope:** PROJECT_WIDE
- **Aktion:** HINWEIS: KI arbeitet nur mit relevanten Scopes, nicht Vollprojekt. Bei Token-Warnings: Scope-fokussierte Arbeit nutzen.
- **Priorität:** MEDIUM


---

## 🤖 KI-ARBEITSEMPFEHLUNGEN (WORK-CONTEXT-OPTIMIERT)

🎯 **KI-WORK-CONTEXT-ANALYSE:**
- **Projekt-Total:** 101’470 Tokens (inkl. irrelevante Bilder/Research)
- **KI-Work-Relevant:** 28’896 Tokens (28% des Projekts)
- **Filtered Out:** Bilder, Research-Docs, Archive (72’574 Tokens)

✅ **WORK-CONTEXT OK:** KI kann effizient mit relevanten Bereichen arbeiten

**Arbeitsweise:** Multi-Scope-Operationen möglich, Scope-Trennung trotzdem sinnvoll

### 📋 TOP TOKEN-INTENSIVE DATEIEN

| Datei | Tokens | Zeilen | Scopes |
|-------|--------|--------|---------|
| `docs/todos/struktur-migration-plan.json` | 6819 | 609 | TODOS_MANAGEMENT |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | 5662 | 316 | DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | 5310 | 284 | DOCUMENTATION |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | 5239 | 199 | CONTENT |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | 5069 | 284 | DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph02_SEO- und Content-Strategie DACH_.md` | 5061 | 394 | DOCUMENTATION |
| `tools/analyzer/universal-project-analyzer.cjs` | 4801 | 1329 | UNCLASSIFIED |
| `docs/todos/verhaltensmuster/vollstaendige_analyse_backup.md` | 4773 | 66 | TODOS_MANAGEMENT |
| `src/content/blog/mindset-gegen-grosskonzern.md` | 3595 | 634 | CONTENT |
| `docs/todos/todos.md` | 3582 | 442 | TODOS_MANAGEMENT |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
