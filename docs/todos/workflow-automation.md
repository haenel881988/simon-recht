# 🔄 WORKFLOW-AUTOMATION - SIMON-RECHT

**Microsoft/OpenAI/Anthropic Pattern für Solo-Projekte**

---

## 🎯 **CHAT-SCOPE-SEPARATION**

### **RULE: EIN CHAT PRO SCOPE**

- **Technical Chat:** CSS, Astro, Build, Performance
- **Content Chat:** Blog, SEO, Texte, User Experience
- **Strategy Chat:** Vision, Roadmap, Business Logic

### **CONTEXT-HANDOFF-AUTOMATION**

```bash
# Automatischer Kontext-Transfer zwischen Chats
node tools/workflow/context-handoff.js --from=technical --to=content
```

---

## 🤖 **MICROSOFT-STYLE AUTOMATION**

### **1. ISSUE-KATEGORISIERUNG (AUTO)**

```javascript
// Auto-Detection von TODO-Typ
if (contains('CSS', 'Build', 'Performance')) → technical/
if (contains('Blog', 'Text', 'SEO')) → content/
if (contains('Vision', 'Strategy', 'Business')) → strategy/
```

### **2. PRIORITY-SCORING (AUTO)**

```javascript
// Kritische Pfade automatisch erkennen
if (blocksWebsiteLaunch) → priority: CRITICAL
if (improvesUserExperience) → priority: HIGH
if (optimizesWorkflow) → priority: LOW
```

### **3. DEPENDENCY-TRACKING (AUTO)**

```javascript
// Abhängigkeiten automatisch verfolgen
technical.completed → content.canStart
content.completed → strategy.canPlan
```

---

## 📊 **TOKEN-OPTIMIERUNG (ENTERPRISE-LEVEL)**

### **CONTEXT-MINIMIERUNG:**

- ✅ Nur scope-relevante Dateien laden
- ✅ Zusammenfassungen statt komplette Logs
- ✅ Modulare Instructions pro Chat-Typ
- ✅ **1200-ZEILEN-REGEL:** Dateien > 1200 Zeilen automatisch modularisieren
- ✅ **TABU-VERZEICHNISSE:** .astro, .vscode, node_modules NIEMALS analysieren

### **AUTOMATED SUMMARIES:**

- ✅ Daily Progress Reports (automated)
- ✅ Cross-Chat Status Updates
- ✅ Milestone Achievement Notifications

### **🚨 TABU-VERZEICHNISSE (ABSOLUTES VERBOT):**

```javascript
// NIEMALS DIESE VERZEICHNISSE ANALYSIEREN:
const FORBIDDEN_DIRS = [
  '.astro',         // Astro Build-Cache
  '.vscode',        // VS Code Settings
  'node_modules',   // NPM Dependencies
  'dist',           // Build Output
  '.git'            // Git Repository Data
];

// AUTO-DETECTION für neue Installations-Verzeichnisse
const AUTO_FORBIDDEN_PATTERNS = [
  /^\./,            // Alle Hidden Directories
  /node_modules/,   // Package Manager
  /build|dist/,     // Build Outputs
  /cache/,          // Cache Directories
];
```

### **🔢 1200-ZEILEN-REGEL (ENTERPRISE-STANDARD):**

```javascript
// Automatische Modularisierung bei Überschreitung
if (fileLines > 1200) {
  // Datei in Unter-Scopes aufteilen
  createSubModules(file, maxLines: 800);
  warnUser(`File ${file} exceeds 1200 lines - auto-modularization required`);
}
```

---

**🎯 SIMON'S VORTEIL:** Solo-Projekt mit Enterprise-Workflows = Maximum Efficiency!
