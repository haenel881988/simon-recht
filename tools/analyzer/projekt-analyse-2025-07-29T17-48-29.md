# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 29.7.2025, 19:48:29  
**Analysedauer:** 0.19 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 97 |
| **Zeilen gesamt** | 69’009 |
| **Wörter gesamt** | 357’397 |
| **Zeichen gesamt** | 6’133’718 |
| **Geschätzte Tokens** | 3’226’254 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **DOCUMENTATION** | 73 | 59’827 | 412’053 | 5645 |
| **CONTENT** | 71 | 56’785 | 398’376 | 5611 |
| **BUILD_SYSTEM** | 69 | 59’029 | 390’992 | 5667 |
| **TODOS_MANAGEMENT** | 53 | 56’703 | 372’875 | 7035 |
| **CSS_DESIGN** | 58 | 56’012 | 369’272 | 6367 |
| **CONFIG** | 43 | 52’139 | 337’202 | 7842 |
| **INSTRUCTIONS** | 52 | 51’726 | 327’867 | 6305 |
| **ASSETS** | 20 | 46’519 | 317’343 | 15867 |
| **ASTRO_COMPONENTS** | 35 | 46’621 | 300’274 | 8579 |

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
- `tools/analyzer/contradiction-scanner.cjs` (1762 Tokens)
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (1762 Tokens)
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (1762 Tokens)
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (1762 Tokens)
- `cleanup-empty-files.ps1` (368 Tokens)
- `tools/analyzer/contradiction-scanner.cjs` (1762 Tokens)

### 2. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 54
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (54 Dateien)

### 3. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 5
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/08_simon_pers/chats/SMART-PROMPT-CSS-FIXES-2025-07-22.md` (627 Tokens)
- `docs/08_simon_pers/chats/SMART-PROMPT-CSS-FIXES-2025-07-22.md` (627 Tokens)
- `docs/08_simon_pers/chats/SMART-PROMPT-CSS-FIXES-2025-07-22.md` (627 Tokens)
- `docs/08_simon_pers/chats/SMART-PROMPT-CSS-FIXES-2025-07-22.md` (627 Tokens)
- `docs/08_simon_pers/chats/SMART-PROMPT-CSS-FIXES-2025-07-22.md` (627 Tokens)

### 4. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 15
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (15 Dateien)

### 5. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 12
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (12 Dateien)

### 6. ASSETS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

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

### 7. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION

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

### 8. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

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

### 9. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

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

### 10. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN

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

### 11. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN

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

### 12. BUILD_SYSTEM + CONFIG + CSS_DESIGN + TODOS_MANAGEMENT

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

### 13. ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 152
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (152 Dateien)

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

### 16. BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 14
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (14 Dateien)

### 17. CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 5
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/todos/instructions/todo_001_ui_komponenten_bestandsaufnahme.md` (1042 Tokens)
- `docs/todos/instructions/todo_001_ui_komponenten_bestandsaufnahme.md` (1042 Tokens)
- `docs/todos/instructions/todo_001_ui_komponenten_bestandsaufnahme.md` (1042 Tokens)
- `docs/todos/instructions/todo_001_ui_komponenten_bestandsaufnahme.md` (1042 Tokens)
- `docs/todos/instructions/todo_001_ui_komponenten_bestandsaufnahme.md` (1042 Tokens)

### 18. CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

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

### 19. ASSETS + CONTENT + CSS_DESIGN + DOCUMENTATION

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

### 20. CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

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

### 21. CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 12
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (12 Dateien)

### 22. ASSETS + ASTRO_COMPONENTS + CONTENT + CSS_DESIGN

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

### 23. ASTRO_COMPONENTS + CONTENT + CSS_DESIGN

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

### 24. ASTRO_COMPONENTS + CSS_DESIGN

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
| **Status** | VERIFIED |
| **Confidence-Score** | 100% |
| **Verification-Levels** | basic, crossReference, logic, consensus |
| **Major Issues** | 0 |

✅ **ANALYSIS VERIFIED** - Ergebnisse wurden durch Multi-Level-Checks bestätigt.

---

## 🏗️ MODULARISIERUNGS-EMPFEHLUNGEN

### 1. ⚠️ Scope BUILD_SYSTEM hat 390992 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** BUILD_SYSTEM
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope CONFIG hat 337202 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONFIG
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope CSS_DESIGN hat 369272 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CSS_DESIGN
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. ⚠️ Scope INSTRUCTIONS hat 327867 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** INSTRUCTIONS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 5. ⚠️ Scope TODOS_MANAGEMENT hat 372875 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 6. ⚠️ Scope DOCUMENTATION hat 412053 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** DOCUMENTATION
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 7. ⚠️ Scope CONTENT hat 398376 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONTENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 8. ⚠️ Scope ASTRO_COMPONENTS hat 300274 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASTRO_COMPONENTS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 9. ⚠️ Scope ASSETS hat 317343 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASSETS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 10. 🚨 Gesamtprojekt hat 3226254 Tokens (>50k GitHub Copilot Limit)

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
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 129932 | 16279 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
