# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** 2.8.2025, 08:28:45  
**Analysedauer:** 0.05 Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | 20 |
| **Zeilen gesamt** | 9’243 |
| **Wörter gesamt** | 23’518 |
| **Zeichen gesamt** | 280’546 |
| **Geschätzte Tokens** | 30’581 |

---

## 🎯 SCOPE-VERTEILUNG

| Scope | Dateien | Zeilen | Tokens | Avg/Datei |
|-------|---------|--------|--------|-----------|
| **UNCLASSIFIED** | 18 | 8’935 | 29’238 | 1624 |
| **DOCUMENTATION** | 1 | 284 | 1’025 | 1025 |
| **INSTRUCTIONS** | 1 | 24 | 318 | 318 |

---

## 🏗️ STRUKTUR-VALIDIERUNG (NEU!)

### 📄 FALSCH PLATZIERTE DATEIEN

| Datei | Aktuell | Ideal | Begründung |
|-------|---------|-------|------------|
| `instructions-redundancy-scanner.cjs` | UNCLASSIFIED | INSTRUCTIONS | Datei gehört besser zu INSTRUCTIONS |
| `instructions/README.md` | INSTRUCTIONS | DOCUMENTATION | Datei gehört besser zu DOCUMENTATION |

### ⚠️ STRUKTUR-VERLETZUNGEN

#### README-PLACEMENT (1 Verletzungen)

- **[`LOW`]** `instructions/README.md`
  - Erwartet: Verzeichnis-Root
  - Aktuell: Unterverzeichnis

### 🏷️ NAMING-INKONSISTENZEN

#### CAMELCASE_IN_MARKDOWN (2 Dateien)

- **[`LOW`]** `instructions/README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien
- **[`LOW`]** `README.md`
  - **Empfehlung:** kebab-case für Markdown-Dateien


---

## 🔍 ANALYSIS-VERIFICATION REPORT

### 📊 VERIFICATION-ZUSAMMENFASSUNG

| Metrik | Wert |
|--------|------|
| **Status** | FAILED |
| **Confidence-Score** | 0% |
| **Verification-Levels** | N/A |
| **Major Issues** | 0 |

❌ **UNRELIABLE RESULTS** - Analyse sollte wiederholt werden.

---

## 🏗️ MODULARISIERUNGS-EMPFEHLUNGEN

### 1. ⚠️ Scope UNCLASSIFIED hat 29238 Tokens (>10k GLOBAL LIMIT)

- **Typ:** SPLIT_SCOPE
- **Scope:** UNCLASSIFIED
- **Aktion:** Aufteilen in Sub-Scopes oder separate Verzeichnisse
- **Priorität:** HIGH

### 2. 🔔 18 Dateien ohne Scope-Zuordnung

- **Typ:** CATEGORIZE_FILES
- **Scope:** UNCLASSIFIED
- **Aktion:** Neue Scope-Pattern definieren oder Dateien reorganisieren
- **Priorität:** MEDIUM


---

## 🤖 KI-ARBEITSEMPFEHLUNGEN (WORK-CONTEXT-OPTIMIERT)

🎯 **KI-WORK-CONTEXT-ANALYSE:**
- **Projekt-Total:** 30’581 Tokens (inkl. irrelevante Bilder/Research)
- **KI-Work-Relevant:** 318 Tokens (1% des Projekts)
- **Filtered Out:** Bilder, Research-Docs, Archive (30’263 Tokens)

✅ **WORK-CONTEXT OK:** KI kann effizient mit relevanten Bereichen arbeiten

**Arbeitsweise:** Multi-Scope-Operationen möglich, Scope-Trennung trotzdem sinnvoll

### 📋 TOP TOKEN-INTENSIVE DATEIEN

| Datei | Tokens | Zeilen | Scopes |
|-------|--------|--------|---------|
| `universal-project-analyzer.cjs` | 4801 | 1329 | UNCLASSIFIED |
| `scopes/structure-optimizer.cjs` | 3552 | 1208 | UNCLASSIFIED |
| `contradiction-scanner.cjs` | 3275 | 1002 | UNCLASSIFIED |
| `core/analysis-verifier.cjs` | 2230 | 670 | UNCLASSIFIED |
| `structure-deep-analyzer.cjs` | 2156 | 579 | UNCLASSIFIED |
| `scopes/redundancy-detector.cjs` | 2151 | 698 | UNCLASSIFIED |
| `scopes/structure-optimizer-v2.cjs` | 1845 | 573 | UNCLASSIFIED |
| `master-analyzer.cjs` | 1815 | 579 | UNCLASSIFIED |
| `instructions-redundancy-scanner.cjs` | 1508 | 472 | UNCLASSIFIED |
| `scopes/instruction-contradiction-scanner.cjs` | 1293 | 436 | UNCLASSIFIED |

---

*Generiert von Universelles Projekt-Analyse-System v1.0*
