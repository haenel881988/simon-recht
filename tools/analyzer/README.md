# 🤖 UNIVERSELLES PROJEKT-ANALYSE-SYSTEM

## 🎯 ÜBERBLICK

Das **Universelle Projekt-Analyse-System** ist ein revolutionäres Tool für intelligente KI-Assistenz, das speziell für das simon-recht Projekt entwickelt wurde.

### **HAUPTZIELE:**

- **Token-optimierte KI-Arbeit** durch Scope-basierte Analyse
- **Vollständige Projekt-Inventarisierung** mit automatischer Kategorisierung
- **Intelligente Bereichs-Erkennung** und Überlappungs-Analyse
- **Modularisierungs-Empfehlungen** für bessere Projekt-Struktur
- **KI-Blindheits-Prevention** durch Smart-Chunking

---

## 🚀 VERWENDUNG

### **Basic Usage:**

```bash
# Aktuelles Verzeichnis analysieren
node tools/analyzer/universal-project-analyzer.cjs

# Spezifisches Projekt analysieren
node tools/analyzer/universal-project-analyzer.cjs C:\path\to\project
```

### **Integration mit Build-Checker:**

```bash
# Vollständige Projekt-Analyse + Build-Check
cd tools/build_check
node multi-scope-checker.cjs --with-analyzer

# Nur Analyzer (ohne Build-Check)
node ../analyzer/universal-project-analyzer.cjs
```

---

## 📊 FEATURES IM DETAIL

### **1. VOLLAUTOMATISCHE INVENTARISIERUNG**

- **Rekursives Scannen** aller Projektdateien
- **Zeilen/Wörter/Token-Zählung** pro Datei
- **Datei-Metadaten** mit Last-Modified-Timestamp
- **Intelligent Ignore-Patterns** für Build-Artefakte

### **2. SCOPE-ERKENNUNG ENGINE**

Automatische Kategorisierung in folgende Bereiche:

| Scope                | Erkennungs-Pattern                       | Zweck                      |
| -------------------- | ---------------------------------------- | -------------------------- |
| **CONTENT**          | `src/content/`, `*.md`, Blog-Keywords    | Rechtliche Inhalte, Texte  |
| **CSS_DESIGN**       | `*.css`, `styles/`, Design-Keywords      | Styling, Layout, Farben    |
| **ASTRO_COMPONENTS** | `*.astro`, `src/layouts/`, `src/pages/`  | Astro-Framework Dateien    |
| **INSTRUCTIONS**     | `instructions/`, `copilot/`, `.github/`  | KI-Anweisungen, Workflows  |
| **TODOS_MANAGEMENT** | `todos/`, `issues/`, Verhaltens-Dateien  | Aufgaben-Management        |
| **BUILD_SYSTEM**     | `tools/`, `package.json`, Config-Dateien | Build-Tools, Konfiguration |
| **DOCUMENTATION**    | `docs/`, `README`, Markdown-Dateien      | Projekt-Dokumentation      |
| **ASSETS**           | `public/`, `assets/`, Media-Dateien      | Bilder, Videos, Ressourcen |
| **CONFIG**           | `*.json`, `*.js`, Config-Keywords        | Konfigurationsdateien      |

### **3. ÜBERLAPPUNGS-ANALYSE**

Intelligente Erkennung von Multi-Scope-Dateien mit konfigurierbaren Regeln:

```javascript
// Beispiel: CSS-Kontrast betrifft sowohl Design als auch SEO
{
  scopes: ['CSS_DESIGN', 'CONTENT'],
  reason: 'CSS-Kontrast-Optimierung betrifft SEO-Rankings',
  priority: 'HIGH',
  allowCombined: true  // ✅ Kombination erlaubt
}
```

### **4. TOKEN-MANAGEMENT**

- **Token-Schätzung** pro Datei (Wörter × 1.3)
- **Scope-Token-Budget** Verfolgung
- **KI-Limit-Validation** (64k Standard / 128k Insiders)
- **Chunking-Empfehlungen** bei Überschreitung

### **5. MODULARISIERUNGS-ADVISOR**

Automatische Empfehlungen für bessere Projekt-Struktur:

- **SPLIT_SCOPE:** Große Bereiche aufteilen (>10k Tokens)
- **CATEGORIZE_FILES:** UNCLASSIFIED-Dateien kategorisieren
- **IMPLEMENT_CHUNKING:** Token-Limits durchsetzen (>50k Critical)

---

## 📄 REPORT-GENERATION

Das Tool generiert detaillierte Markdown-Reports mit:

### **PROJEKT-ÜBERSICHT**

- Dateien/Zeilen/Wörter/Token-Statistiken
- Scope-Verteilungs-Tabelle
- Top Token-intensive Dateien

### **SCOPE-ÜBERLAPPUNGEN**

- Multi-Scope-Dateien Auflistung
- Kombinationsregeln und Prioritäten
- Arbeitsempfehlungen (Erlaubt/Getrennt)

### **KI-ARBEITSEMPFEHLUNGEN**

- **>128k Tokens:** Zwingend Scope-basierte Analyse
- **>64k Tokens:** VS Code Insiders empfohlen
- **<64k Tokens:** Standard-Modus OK

### **MODULARISIERUNG**

- Struktur-Verbesserungsvorschläge
- Token-Optimierungs-Tipps
- Verzeichnis-Reorganisation

---

## 🔧 KONFIGURATION

### **Scope-Pattern anpassen:**

```javascript
this.scopePatterns = {
  CUSTOM_SCOPE: [/custom-pattern/, /\.custom$/, /custom-keyword/i],
};
```

### **Überlappungs-Regeln definieren:**

```javascript
this.overlapRules = [
  {
    scopes: ["SCOPE_A", "SCOPE_B"],
    reason: "Begründung für Überlappung",
    priority: "HIGH|MEDIUM|LOW",
    allowCombined: true | false,
  },
];
```

### **Ignore-Pattern erweitern:**

```javascript
const ignorePatterns = [/^\.git/, /^node_modules/, /^custom-ignore/];
```

---

## 🤖 KI-INTEGRATION

### **GITHUB COPILOT OPTIMIERUNG:**

- **Auto-Scope-Detection:** KI identifiziert Arbeitsbereich automatisch
- **Token-Budget-Management:** Automatische Chunk-Größen-Anpassung
- **Context-Window-Optimization:** Scope-spezifische Datei-Auswahl
- **Blindheits-Prevention:** Warnung bei Token-Limit-Überschreitung

### **WORKFLOW-INTEGRATION:**

```bash
# 1. Projekt analysieren
node tools/analyzer/universal-project-analyzer.cjs

# 2. Report prüfen für Scope-Empfehlungen
# 3. KI-Chat mit spezifischem Scope starten
# 4. Bei Überlappungen → Kombinierte Analyse (falls erlaubt)
```

---

## 📁 OUTPUT-DATEIEN

### **Report-Pfad:**

```
tools/analyzer/projekt-analyse-YYYY-MM-DD-HH-MM-SS.md
```

### **Datei-Struktur:**

```
tools/
├── analyzer/
│   ├── universal-project-analyzer.cjs    # Haupt-Tool
│   ├── README.md                          # Diese Dokumentation
│   └── projekt-analyse-[timestamp].md    # Generierte Reports
└── build_check/
    ├── multi-scope-checker.cjs           # Bestehender Build-Checker
    └── logfiles/                          # Build-Logs
```

---

## 🎯 ANWENDUNGSFÄLLE

### **1. NEUE KI-CHAT-SESSION STARTEN:**

```bash
# 1. Projekt analysieren
node tools/analyzer/universal-project-analyzer.cjs

# 2. Report öffnen und relevanten Scope identifizieren
# 3. KI-Prompt mit Scope-Focus:
"Arbeite nur im SCOPE [CSS_DESIGN] - Analysiere nur diese Dateien: [Liste]"
```

### **2. MULTI-SCOPE-PROBLEM (CSS + SEO):**

```bash
# 1. Überlappungs-Analyse prüfen
# 2. Wenn allowCombined: true → Kombinierte Analyse OK
# 3. KI-Prompt: "CSS-Kontrast-Optimierung mit SEO-Impact"
```

### **3. PROJEKT-REFACTORING:**

```bash
# 1. Modularisierungs-Empfehlungen aus Report umsetzen
# 2. Große Scopes aufteilen
# 3. UNCLASSIFIED-Dateien kategorisieren
# 4. Re-Analyse zur Validierung
```

### **4. TOKEN-BUDGET-MANAGEMENT:**

```bash
# 1. Token-intensive Dateien identifizieren
# 2. Chunking-Strategien anwenden
# 3. Scope-basierte KI-Arbeit erzwingen
```

---

## 🚨 WICHTIGE REGELN

### **FÜR KI-ASSISTENTEN:**

1. **IMMER** Analyzer vor Vollprojekt-Analyse ausführen
2. **NIE** mehr als 20k Tokens pro Chat-Session laden
3. **SCOPE-FOKUS** zwingend einhalten (außer erlaubte Überlappungen)
4. **TOKEN-BUDGET** vor jeder Datei-Operation prüfen
5. **NEUE SESSIONS** für jeden Scope starten

### **FÜR ENTWICKLER:**

1. **Regelmäßige Analysen** bei Projekt-Änderungen
2. **Report-basierte** KI-Prompt-Strategien
3. **Modularisierungs-Empfehlungen** umsetzen
4. **Token-Limits** respektieren (64k/128k)

---

## 🔄 UPDATES & MAINTENANCE

### **Version 1.0 Features:**

- ✅ Basis-Inventarisierung
- ✅ Scope-Auto-Detection
- ✅ Überlappungs-Analyse
- ✅ Token-Management
- ✅ Markdown-Reports

### **Geplante Erweiterungen:**

- [ ] **v1.1:** Integration in VS Code Extension
- [ ] **v1.2:** Real-time Scope-Monitoring
- [ ] **v1.3:** KI-Chat-Auto-Configuration
- [ ] **v1.4:** Multi-Language Support
- [ ] **v1.5:** GitHub Actions Integration

---

**🎯 ZIEL:** KI arbeitet IMMER fokussiert und token-optimiert statt chaotisch im Vollprojekt-Modus!
