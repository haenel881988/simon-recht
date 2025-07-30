# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 30.7.2025, 09:12:05  
**Analysedauer:** 9.67 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 98 |
| **Zeilen gesamt** | 117’921 |
| **Wörter gesamt** | 672’200 |
| **Zeichen gesamt** | 14’508’933 |
| **Geschätzte Tokens** | 6’909’789 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **DOCUMENTATION** | 72 | 108’532 | 820’618 | 11397 |
| **CONTENT** | 70 | 105’334 | 806’413 | 11520 |
| **BUILD_SYSTEM** | 71 | 108’216 | 801’277 | 11286 |
| **TODOS_MANAGEMENT** | 53 | 105’561 | 782’067 | 14756 |
| **CSS_DESIGN** | 58 | 104’823 | 778’373 | 13420 |
| **CONFIG** | 47 | 101’926 | 750’338 | 15965 |
| **INSTRUCTIONS** | 53 | 100’798 | 737’784 | 13920 |
| **ASSETS** | 19 | 94’188 | 720’310 | 37911 |
| **ASTRO_COMPONENTS** | 37 | 96’113 | 712’609 | 19260 |

---

## 🔗 SCOPE-ÜBERLAPPUNGEN

### 1. BUILD_SYSTEM + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 10
- **Grund:** Build-Checker validiert CSS-Architektur
- **Priorität:** MEDIUM
- **Kombiniert erlaubt:** ❌ Nein
- **Empfehlung:** SEPARATE_ANALYSIS

**Betroffene Dateien:**
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (2290 Tokens)
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (2290 Tokens)
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (2290 Tokens)
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (2290 Tokens)
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (2290 Tokens)

### 2. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 10
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/css-deep-analysis-roadmap.md` (605 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (10365 Tokens)
- `docs/css-deep-analysis-roadmap.md` (605 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (10365 Tokens)
- `docs/css-deep-analysis-roadmap.md` (605 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (10365 Tokens)
- `docs/css-deep-analysis-roadmap.md` (605 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (10365 Tokens)
- `docs/css-deep-analysis-roadmap.md` (605 Tokens)
- `docs/website_struktur/recherche/tiefenrecherche.md` (10365 Tokens)

### 3. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 6
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/todos/todos.md` (1779 Tokens)
- `docs/todos/todos.md` (1779 Tokens)
- `docs/todos/todos.md` (1779 Tokens)
- `docs/todos/todos.md` (1779 Tokens)
- `docs/todos/todos.md` (1779 Tokens)
- `docs/todos/todos.md` (1779 Tokens)

### 4. ASSETS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 7
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/content/gicht-buch/book_1.txt` (20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (20968 Tokens)
- `docs/website_struktur/content/gicht-buch/book_1.txt` (20968 Tokens)

### 5. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 8
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/recherche/grundrecherche.md` (7175 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (5662 Tokens)
- `docs/website_struktur/recherche/grundrecherche.md` (7175 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (5662 Tokens)
- `docs/website_struktur/recherche/grundrecherche.md` (7175 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (5662 Tokens)
- `docs/website_struktur/recherche/grundrecherche.md` (7175 Tokens)
- `docs/website_struktur/recherche/tiefen_recherche/ph03_Go-to-Market-Plan für Coaching-Launch_.md` (5662 Tokens)

### 6. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

- **Dateien:** 5
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/statische-seiten/README.md` (370 Tokens)
- `docs/website_struktur/statische-seiten/README.md` (370 Tokens)
- `docs/website_struktur/statische-seiten/README.md` (370 Tokens)
- `docs/website_struktur/statische-seiten/README.md` (370 Tokens)
- `docs/website_struktur/statische-seiten/README.md` (370 Tokens)

### 7. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 7
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `README.md` (448 Tokens)
- `README.md` (448 Tokens)
- `README.md` (448 Tokens)
- `README.md` (448 Tokens)
- `README.md` (448 Tokens)
- `README.md` (448 Tokens)
- `README.md` (448 Tokens)

### 8. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN

- **Dateien:** 8
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/pages/disclaimer.astro` (929 Tokens)
- `src/pages/impressum.astro` (563 Tokens)
- `src/pages/disclaimer.astro` (929 Tokens)
- `src/pages/impressum.astro` (563 Tokens)
- `src/pages/disclaimer.astro` (929 Tokens)
- `src/pages/impressum.astro` (563 Tokens)
- `src/pages/disclaimer.astro` (929 Tokens)
- `src/pages/impressum.astro` (563 Tokens)

### 9. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN

- **Dateien:** 5
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/pages/index.astro` (2191 Tokens)
- `src/pages/index.astro` (2191 Tokens)
- `src/pages/index.astro` (2191 Tokens)
- `src/pages/index.astro` (2191 Tokens)
- `src/pages/index.astro` (2191 Tokens)

### 10. BUILD_SYSTEM + CONFIG + CSS_DESIGN + TODOS_MANAGEMENT

- **Dateien:** 4
- **Grund:** Build-Checker validiert CSS-Architektur
- **Priorität:** MEDIUM
- **Kombiniert erlaubt:** ❌ Nein
- **Empfehlung:** SEPARATE_ANALYSIS

**Betroffene Dateien:**
- `tools/analyzer/exact-line-counter.js` (732 Tokens)
- `tools/analyzer/exact-line-counter.js` (732 Tokens)
- `tools/analyzer/exact-line-counter.js` (732 Tokens)
- `tools/analyzer/exact-line-counter.js` (732 Tokens)

### 11. BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 21
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (21 Dateien)

### 12. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 45
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (45 Dateien)

### 13. ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 184
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (184 Dateien)

### 14. BUILD_SYSTEM + CONTENT + CSS_DESIGN + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 5
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (1293 Tokens)
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (1293 Tokens)
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (1293 Tokens)
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (1293 Tokens)
- `tools/analyzer/scopes/instruction-contradiction-scanner.cjs` (1293 Tokens)

### 15. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 8
- **Grund:** Layout-Komponenten benötigen Styling-Koordination
- **Priorität:** MEDIUM
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)
- `tools/analyzer/scopes/structure-optimizer.cjs` (3552 Tokens)

### 16. CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 4
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/content/startseite.md` (2251 Tokens)
- `docs/website_struktur/content/startseite.md` (2251 Tokens)
- `docs/website_struktur/content/startseite.md` (2251 Tokens)
- `docs/website_struktur/content/startseite.md` (2251 Tokens)

### 17. ASSETS + CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 4
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (608 Tokens)
- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (608 Tokens)
- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (608 Tokens)
- `docs/website_struktur/dynamische-seiten/blog/mindset-gegen-grosskonzern.md` (608 Tokens)

### 18. CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

- **Dateien:** 4
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/website_struktur/README.md` (284 Tokens)
- `docs/website_struktur/README.md` (284 Tokens)
- `docs/website_struktur/README.md` (284 Tokens)
- `docs/website_struktur/README.md` (284 Tokens)

### 19. CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 12
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (12 Dateien)

### 20. ASSETS + ASTRO_COMPONENTS + CONTENT + CSS_DESIGN

- **Dateien:** 4
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/layouts/Layout.astro` (444 Tokens)
- `src/layouts/Layout.astro` (444 Tokens)
- `src/layouts/Layout.astro` (444 Tokens)
- `src/layouts/Layout.astro` (444 Tokens)

### 21. ASTRO_COMPONENTS + CONTENT + CSS_DESIGN

- **Dateien:** 6
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/pages/blog/index.astro` (181 Tokens)
- `src/pages/blog/[slug].astro` (153 Tokens)
- `src/pages/blog/index.astro` (181 Tokens)
- `src/pages/blog/[slug].astro` (153 Tokens)
- `src/pages/blog/index.astro` (181 Tokens)
- `src/pages/blog/[slug].astro` (153 Tokens)

### 22. ASTRO_COMPONENTS + CSS_DESIGN

- **Dateien:** 2
- **Grund:** Layout-Komponenten benötigen Styling-Koordination
- **Priorität:** MEDIUM
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `src/pages/datenschutz.astro` (1009 Tokens)
- `src/pages/datenschutz.astro` (1009 Tokens)


---

## 🔍 ANALYSIS-VERIFICATION REPORT

### 📊 VERIFICATION-ZUSAMMENFASSUNG

| Metrik | Wert |
|--------|------|
| **Status** | CONFLICT_DETECTED |
| **Confidence-Score** | 0% |
| **Verification-Levels** | N/A |
| **Major Issues** | 0 |

❌ **UNRELIABLE RESULTS** - Analyse sollte wiederholt werden.

---

## 🏗️ MODULARISIERUNGS-EMPFEHLUNGEN

### 1. ⚠️ Scope BUILD_SYSTEM hat 801277 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** BUILD_SYSTEM
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope CONFIG hat 750338 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONFIG
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope CSS_DESIGN hat 778373 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CSS_DESIGN
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. ⚠️ Scope INSTRUCTIONS hat 737784 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** INSTRUCTIONS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 5. ⚠️ Scope TODOS_MANAGEMENT hat 782067 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 6. ⚠️ Scope DOCUMENTATION hat 820618 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** DOCUMENTATION
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 7. ⚠️ Scope CONTENT hat 806413 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONTENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 8. ⚠️ Scope ASSETS hat 720310 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASSETS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 9. ⚠️ Scope ASTRO_COMPONENTS hat 712609 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASTRO_COMPONENTS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 10. 🚨 Gesamtprojekt hat 6909789 Tokens (>50k GitHub Copilot Limit)

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
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-30.md` | 321358 | 40823 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 284453 | 36092 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
