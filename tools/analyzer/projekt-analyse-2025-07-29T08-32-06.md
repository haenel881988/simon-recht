# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 29.7.2025, 10:32:06  
**Analysedauer:** 0.28 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 193 |
| **Zeilen gesamt** | 73’321 |
| **Wörter gesamt** | 385’763 |
| **Zeichen gesamt** | 6’686’123 |
| **Geschätzte Tokens** | 2’797’168 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **DOCUMENTATION** | 170 | 64’352 | 449’701 | 2645 |
| **CONTENT** | 166 | 55’718 | 395’796 | 2384 |
| **BUILD_SYSTEM** | 103 | 52’631 | 348’580 | 3384 |
| **TODOS_MANAGEMENT** | 81 | 48’172 | 323’333 | 3992 |
| **CSS_DESIGN** | 88 | 49’300 | 323’204 | 3673 |
| **INSTRUCTIONS** | 98 | 44’148 | 272’462 | 2780 |
| **CONFIG** | 39 | 40’473 | 249’701 | 6403 |
| **ASSETS** | 21 | 36’559 | 239’096 | 11386 |
| **ASTRO_COMPONENTS** | 26 | 31’578 | 195’295 | 7511 |

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

### 2. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 48
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (48 Dateien)

### 3. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 35
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (35 Dateien)

### 4. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 54
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (54 Dateien)

### 5. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION

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

### 6. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 54
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (54 Dateien)

### 7. BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 28
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (28 Dateien)

### 8. ASSETS + BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 6
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/change_management/history/2025-07-19_14-50_index-astro-transformation-completed.md` (770 Tokens)
- `docs/change_management/history/2025-07-19_14-50_index-astro-transformation-completed.md` (770 Tokens)
- `docs/change_management/history/2025-07-19_14-50_index-astro-transformation-completed.md` (770 Tokens)
- `docs/change_management/history/2025-07-19_14-50_index-astro-transformation-completed.md` (770 Tokens)
- `docs/change_management/history/2025-07-19_14-50_index-astro-transformation-completed.md` (770 Tokens)
- `docs/change_management/history/2025-07-19_14-50_index-astro-transformation-completed.md` (770 Tokens)

### 9. BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 5
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/change_management/history/2025-07-19_phase_3_content_migration.md` (804 Tokens)
- `docs/change_management/history/2025-07-19_phase_3_content_migration.md` (804 Tokens)
- `docs/change_management/history/2025-07-19_phase_3_content_migration.md` (804 Tokens)
- `docs/change_management/history/2025-07-19_phase_3_content_migration.md` (804 Tokens)
- `docs/change_management/history/2025-07-19_phase_3_content_migration.md` (804 Tokens)

### 10. BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

- **Dateien:** 15
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (15 Dateien)

### 11. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

- **Dateien:** 6
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/change_management/scopes/TECHNICAL_HANDOFF_CSS_FOCUS.md` (669 Tokens)
- `docs/change_management/scopes/TECHNICAL_HANDOFF_CSS_FOCUS.md` (669 Tokens)
- `docs/change_management/scopes/TECHNICAL_HANDOFF_CSS_FOCUS.md` (669 Tokens)
- `docs/change_management/scopes/TECHNICAL_HANDOFF_CSS_FOCUS.md` (669 Tokens)
- `docs/change_management/scopes/TECHNICAL_HANDOFF_CSS_FOCUS.md` (669 Tokens)
- `docs/change_management/scopes/TECHNICAL_HANDOFF_CSS_FOCUS.md` (669 Tokens)

### 12. ASSETS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

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

### 13. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

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

### 14. ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN

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

### 15. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONTENT + CSS_DESIGN

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

### 16. ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 64
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (64 Dateien)

### 17. BUILD_SYSTEM + CONTENT + CSS_DESIGN + INSTRUCTIONS + TODOS_MANAGEMENT

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

### 18. ASSETS + ASTRO_COMPONENTS + BUILD_SYSTEM + CONFIG + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

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

### 19. ASTRO_COMPONENTS + CONFIG + CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 5
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/01_PLAYBOOK_CONTENT/_altes_chaos_archiv/design_system.md` (1203 Tokens)
- `docs/01_PLAYBOOK_CONTENT/_altes_chaos_archiv/design_system.md` (1203 Tokens)
- `docs/01_PLAYBOOK_CONTENT/_altes_chaos_archiv/design_system.md` (1203 Tokens)
- `docs/01_PLAYBOOK_CONTENT/_altes_chaos_archiv/design_system.md` (1203 Tokens)
- `docs/01_PLAYBOOK_CONTENT/_altes_chaos_archiv/design_system.md` (1203 Tokens)

### 20. CONTENT + CSS_DESIGN + DOCUMENTATION

- **Dateien:** 30
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (30 Dateien)

### 21. CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS

- **Dateien:** 12
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (12 Dateien)

### 22. CONTENT + CSS_DESIGN + DOCUMENTATION + INSTRUCTIONS + TODOS_MANAGEMENT

- **Dateien:** 25
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Zu viele Dateien für Auflistung** (25 Dateien)

### 23. CONTENT + CSS_DESIGN + DOCUMENTATION + TODOS_MANAGEMENT

- **Dateien:** 8
- **Grund:** CSS-Kontrast-Optimierung betrifft SEO-Rankings
- **Priorität:** HIGH
- **Kombiniert erlaubt:** ✅ Ja
- **Empfehlung:** ALLOW_COMBINED

**Betroffene Dateien:**
- `docs/change_management/scopes/DESIGN_KONTRAST_SCOPE.md` (280 Tokens)
- `docs/website_struktur/content/startseite.md` (2251 Tokens)
- `docs/change_management/scopes/DESIGN_KONTRAST_SCOPE.md` (280 Tokens)
- `docs/website_struktur/content/startseite.md` (2251 Tokens)
- `docs/change_management/scopes/DESIGN_KONTRAST_SCOPE.md` (280 Tokens)
- `docs/website_struktur/content/startseite.md` (2251 Tokens)
- `docs/change_management/scopes/DESIGN_KONTRAST_SCOPE.md` (280 Tokens)
- `docs/website_struktur/content/startseite.md` (2251 Tokens)

### 24. ASSETS + CONTENT + CSS_DESIGN + DOCUMENTATION

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

### 25. ASSETS + ASTRO_COMPONENTS + CONTENT + CSS_DESIGN

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

### 26. ASTRO_COMPONENTS + CONTENT + CSS_DESIGN

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

### 27. ASTRO_COMPONENTS + CSS_DESIGN

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

### 1. ⚠️ Scope BUILD_SYSTEM hat 348580 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** BUILD_SYSTEM
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. ⚠️ Scope CONFIG hat 249701 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONFIG
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 3. ⚠️ Scope CSS_DESIGN hat 323204 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CSS_DESIGN
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 4. ⚠️ Scope INSTRUCTIONS hat 272462 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** INSTRUCTIONS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 5. ⚠️ Scope TODOS_MANAGEMENT hat 323333 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** TODOS_MANAGEMENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 6. ⚠️ Scope DOCUMENTATION hat 449701 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** DOCUMENTATION
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 7. ⚠️ Scope CONTENT hat 395796 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** CONTENT
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 8. ⚠️ Scope ASTRO_COMPONENTS hat 195295 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASTRO_COMPONENTS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 9. ⚠️ Scope ASSETS hat 239096 Tokens (>10k Limit)

- **Typ:** SPLIT_SCOPE
- **Scope:** ASSETS
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 10. 🚨 Gesamtprojekt hat 2797168 Tokens (>50k GitHub Copilot Limit)

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
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `docs/08_simon_pers/chats/chat_23072025.md` | 71638 | 12670 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |
| `tools/analyzer/widerspruchs-report-2025-07-29.md` | 50915 | 6149 | ASSETS, ASTRO_COMPONENTS, BUILD_SYSTEM, CONFIG, CONTENT, CSS_DESIGN, DOCUMENTATION, INSTRUCTIONS, TODOS_MANAGEMENT |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
