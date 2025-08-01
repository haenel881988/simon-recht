# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 1.8.2025, 15:42:19  
**Analysedauer:** 0.54 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 72 |
| **Zeilen gesamt** | 26’174 |
| **Wörter gesamt** | 138’075 |
| **Zeichen gesamt** | 2’526’689 |
| **Geschätzte Tokens** | 179’528 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **DOCUMENTATION** | 13 | 1’828 | 42’518 | 3271 |
| **ASSETS** | 6 | 5’711 | 40’931 | 6822 |
| **CONTENT** | 7 | 5’046 | 35’778 | 5111 |
| **UNCLASSIFIED** | 24 | 8’952 | 31’901 | 1329 |
| **TODOS_MANAGEMENT** | 5 | 1’241 | 15’589 | 3118 |
| **ASTRO_COMPONENTS** | 7 | 1’456 | 5’470 | 781 |
| **CSS_DESIGN** | 3 | 1’413 | 5’394 | 1798 |
| **CONFIG** | 3 | 435 | 1’452 | 484 |
| **INSTRUCTIONS** | 1 | 24 | 318 | 318 |
| **BUILD_SYSTEM** | 3 | 68 | 177 | 59 |

---

## 🔄 REDUNDANZ-ANALYSE (NEU!)

### 📂 LEERE VERZEICHNISSE

- `docs/website_struktur/dynamische-seiten/`
- `src/`
- `tools/`

**🎯 EMPFEHLUNG:** 3 leere Verzeichnisse löschen

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

#### 5. `src/content/pages` ↔ `public/assets/images`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 6. `src/content/pages` ↔ `src/pages`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen

#### 7. `public/assets/images` ↔ `src/pages`

- **Grund:** Ähnliche Namen oder Zwecke
- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen


---

## 🏗️ STRUKTUR-VALIDIERUNG (NEU!)

### 📄 FALSCH PLATZIERTE DATEIEN

| Datei | Aktuell | Ideal | Begründung |
|-------|---------|-------|------------|
| `astro.config.mjs` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `package.json` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `tailwind.config.mjs` | BUILD_SYSTEM | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
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
| `docs/website_struktur/content/gicht-buch/book_1.txt` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/polemik/startseite.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/content/simons_authentische_sprache.md` | CONTENT | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/60-30-10-PLUS-FLEX-SYSTEM.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `docs/website_struktur/website_design/global_css.md` | CSS_DESIGN | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/images/simon-placeholder.svg` | ASSETS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `public/assets/images/startseite-index/simon_haenel_natur_froehlich.webp` | ASSETS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `public/assets/images/startseite_uebermich/simon_haenel_entschlossen.webp` | ASSETS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
| `public/assets/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/assets/videos/README.md` | ASSETS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |
| `public/robots.txt` | ASSETS | UNCLASSIFIED | Datei gehört besser zu UNCLASSIFIED |
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

### 1. ⚠️ Scope DOCUMENTATION hat 42518 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** DOCUMENTATION
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope UNCLASSIFIED hat 31901 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** UNCLASSIFIED
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope TODOS_MANAGEMENT hat 15589 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. ⚠️ Scope CONTENT hat 35778 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONTENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 5. ⚠️ Scope ASSETS hat 40931 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASSETS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 6. 🔔 24 Dateien ohne Scope-Zuordnung

- **Typ:** CATEGORIZE_FILES
- **Scope:** UNCLASSIFIED
- **Aktion:** Neue Scope-Pattern definieren oder Dateien reorganisieren
- **Priorität:** MEDIUM

### 7. 🚨 Gesamtprojekt hat 179528 Tokens (>50k GitHub Copilot Limit)

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
| `docs/website_struktur/content/gicht-buch/book_1.txt` | 20968 | 3456 | CONTENT |
| `docs/website_struktur/recherche/tiefenrecherche.md` | 10365 | 1 | DOCUMENTATION |
| `public/assets/images/startseite_uebermich/simon_haenel_entschlossen.webp` | 8599 | 1170 | ASSETS |
| `docs/website_struktur/recherche/grundrecherche.md` | 7175 | 1 | DOCUMENTATION |
| `docs/todos/struktur-migration-plan.json` | 6819 | 609 | TODOS_MANAGEMENT |
| `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` | 5662 | 316 | DOCUMENTATION |
| `docs/website_struktur/recherche/tiefen_recherche/ph04_Digitale Bildung_ Selbstvertretung für Laien_.md` | 5310 | 284 | DOCUMENTATION |
| `docs/website_struktur/content/fallbeispiel_Story_formatted.md` | 5239 | 199 | CONTENT |
| `docs/website_struktur/recherche/tiefen_recherche/ph01_Coachingmarkt DACH_ Simon Recht Analyse_.md` | 5069 | 284 | DOCUMENTATION |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
