# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 29.7.2025, 19:47:48  
**Analysedauer:** 0.21 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 96 |
| **Zeilen gesamt** | 68’508 |
| **Wörter gesamt** | 355’447 |
| **Zeichen gesamt** | 6’115’215 |
| **Geschätzte Tokens** | 3’205’974 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **DOCUMENTATION** | 72 | 59’326 | 409’518 | 5688 |
| **CONTENT** | 70 | 56’284 | 395’841 | 5655 |
| **BUILD_SYSTEM** | 68 | 58’528 | 388’457 | 5713 |
| **TODOS_MANAGEMENT** | 52 | 56’202 | 370’340 | 7122 |
| **CSS_DESIGN** | 57 | 55’511 | 366’737 | 6434 |
| **CONFIG** | 42 | 51’638 | 334’667 | 7968 |
| **INSTRUCTIONS** | 51 | 51’225 | 325’332 | 6379 |
| **ASSETS** | 20 | 46’519 | 317’343 | 15867 |
| **ASTRO_COMPONENTS** | 34 | 46’120 | 297’739 | 8757 |

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

- **Dateien:** 144
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (144 Dateien)

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

### 1. ⚠️ Scope BUILD_SYSTEM hat 388457 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** BUILD_SYSTEM
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope CONFIG hat 334667 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONFIG
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope CSS_DESIGN hat 366737 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CSS_DESIGN
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. ⚠️ Scope INSTRUCTIONS hat 325332 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** INSTRUCTIONS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 5. ⚠️ Scope TODOS_MANAGEMENT hat 370340 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 6. ⚠️ Scope DOCUMENTATION hat 409518 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** DOCUMENTATION
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 7. ⚠️ Scope CONTENT hat 395841 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONTENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 8. ⚠️ Scope ASTRO_COMPONENTS hat 297739 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASTRO_COMPONENTS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 9. ⚠️ Scope ASSETS hat 317343 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASSETS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 10. 🚨 Gesamtprojekt hat 3205974 Tokens (>50k GitHub Copilot Limit)

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
