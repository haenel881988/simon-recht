# 🎯 SIMON-RECHT PROJEKT-ROADMAP

**Datum:** 29.07.2025  
**Status:** AKTIV  
**Analyzer-Guided Cleanup & Modularisierung**

---

## 📊 **AKTUELLER ZUSTAND (ANALYZER-REPORT):**

- **📁 Dateien:** 191 analysiert
- **🔢 Tokens:** 2.600.120 (↑600k seit letztem Mal)
- **🎯 Scopes:** 9 Bereiche identifiziert
- **🔗 Issues:** 2424 ungültige Links, 26 problematische Dateien
- **🚨 Status:** KRITISCH - VS Code Insiders Limit überschritten

---

## 🚀 **3-PHASEN HYBRID-STRATEGIE:**

### **🔍 PHASE 1: ANALYZER-GUIDED QUICK-WINS** ⏰ _2-3 Tage_

#### **✅ 1A. Legacy-Dateien eliminieren (.github/instructions/)**

```bash
🎯 ZIEL: Legacy-Redundanzen bereinigen
📁 TARGET: .github/instructions/
🗑️ CANDIDATES:
   ├── agent.md (Zweck unklar → in core/ integrieren)
   ├── anrede.md (Redundant → in core/internalisierung.md)
   ├── settings.md (Zweck unklar → evaluieren)
   └── original_content_management.md (→ content/authentizitaet.md)

📊 ANALYZER-CHECK: Nach jedem Schritt Token-Messung
🎯 ERWARTUNG: -50k bis -100k Tokens
```

#### **✅ 1B. Kritische Links reparieren (.github/)**

```bash
🎯 ZIEL: Instructions-Navigation funktionsfähig machen
📁 TARGET: .github/instructions/
📝 FEHLENDE DATEIEN (8 Stück):
   ├── development/css-regeln.md
   ├── development/astro-workflow.md
   ├── development/build-prozess.md
   ├── content/seo-regeln.md
   ├── content/blog-workflow.md
   ├── project/datei-operationen.md
   ├── project/scope-system.md
   └── coaching/ (Verzeichnis + 2 Dateien)

📊 ANALYZER-CHECK: Link-Validation nach Erstellung
🎯 ERWARTUNG: 8 von 2424 Links repariert
```

#### **✅ 1C. Leere/redundante Dateien bereinigen**

```bash
🎯 ZIEL: Scanner-Report abarbeiten
📁 TARGET: Projektweite Bereinigung
🗑️ CANDIDATES: 26 problematische Dateien (Scanner-Report)

📊 ANALYZER-CHECK: Sauberkeits-Validation
🎯 ERWARTUNG: -100k bis -200k Tokens
```

### **🏗️ PHASE 2: STRUKTUR-ETABLIERUNG** ⏰ _3-4 Tage_

#### **✅ 2A. Token-Buchhaltungs-System implementieren**

```bash
🎯 ZIEL: Hierarchische Token-Übersicht (wie Buchhaltung)
🔧 TOOL: Universal-Analyzer erweitern
💡 FEATURE: Drill-Down von Gesamt → Verzeichnis → Datei

BEISPIEL-OUTPUT:
📁 .github/ (Total: 264.662 Tokens)
├── 📁 instructions/ (156.890 Tokens)
│   ├── 📁 core/ (45.230 Tokens)
│   │   ├── internalisierung.md (12.450 T)
│   │   └── validierungs-zwang.md (8.890 T)
│   └── 📁 content/ (23.440 Tokens)
└── 📄 copilot-instructions.md (67.772 T)

📊 ANALYZER-CHECK: Buchhaltungs-Report testen
🎯 ERWARTUNG: Klarheit über Token-Verteilung
```

#### **✅ 2B. .github Modularisierung**

```bash
🎯 ZIEL: Basierend auf Cleanup-Erkenntnissen strukturieren
📁 TARGET: .github vollständig optimieren
🔧 METHODE: Datenbasierte Entscheidungen durch Analyzer

📊 ANALYZER-CHECK: Struktur-Validation
🎯 ERWARTUNG: Saubere, navigierbare .github-Struktur
```

#### **✅ 2C. Top 3 überlastete Scopes aufteilen**

```bash
🎯 ZIEL: Größte Token-Verursacher modularisieren
📋 TARGETS (aktuell >250k Tokens):
   ├── DOCUMENTATION: 424.716 Tokens
   ├── CONTENT: 370.811 Tokens
   └── BUILD_SYSTEM: 319.812 Tokens

📊 ANALYZER-CHECK: Token-Reduktion messen
🎯 ERWARTUNG: <200k Tokens pro Scope
```

### **🎨 PHASE 3: FINAL-OPTIMIZATION** ⏰ _2-3 Tage_

#### **✅ 3A. Massive Link-Reparatur**

```bash
🎯 ZIEL: 2424 ungültige Links systematisch beheben
🔧 METHODE: Batch-Reparatur mit Validation
📊 ANALYZER-CHECK: Link-Integrität-Report
🎯 ERWARTUNG: <100 ungültige Links
```

#### **✅ 3B. Performance-Tuning & Documentation**

```bash
🎯 ZIEL: Finaler Schliff
📋 TASKS:
   ├── Build-Performance optimieren
   ├── Documentation aktualisieren
   └── Cross-References validieren

📊 ANALYZER-CHECK: Final-Validation
🎯 ERWARTUNG: Sub-2M Token, <50 Issues
```

---

## 🛡️ **SICHERHEITS-PROTOKOLLE:**

### **📊 ANALYZER-FIRST APPROACH:**

- ✅ **VOR jeder Aktion:** Analyzer-Report generieren
- ✅ **NACH jeder Aktion:** Token-Validation & Link-Check
- ✅ **BEI Problemen:** Sofortiger Rollback möglich

### **🔄 ITERATIVE VALIDATION:**

- ✅ **Kleine Schritte:** Max 5-10 Dateien pro Aktion
- ✅ **Kontinuierliche Messung:** Jeder Schritt dokumentiert
- ✅ **Analyzer-Verification:** Mit endlosschleife-sicherem Verifier

---

## 📈 **SUCCESS-METRIKEN:**

| **PHASE**   | **TOKEN-ZIEL** | **LINK-ZIEL** | **DATEI-ZIEL**    |
| ----------- | -------------- | ------------- | ----------------- |
| **Phase 1** | <2.3M (-300k)  | <2000 invalid | <170 files        |
| **Phase 2** | <2.0M (-600k)  | <1000 invalid | Modular structure |
| **Phase 3** | <1.8M (-800k)  | <100 invalid  | Clean & optimized |

---

## 🎯 **NÄCHSTER SCHRITT:**

**STARTE PHASE 1A:** Legacy-Dateien in `.github/instructions/` analysieren und konsolidieren

**COMMAND:** `node tools/analyzer/universal-project-analyzer.cjs` → Baseline-Messung

---

**💡 Diese Roadmap ist LEBENDIG** - wird nach jedem Analyzer-Report aktualisiert!
