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
// 📊 SIMON'S TOKEN-OPTIMIERTE DATEIGROSSEN (WISSENSCHAFTLICH BASIERT)
const FILE_SIZE_LIMITS = {
  OPTIMAL_READ: 800,      // KI kann perfekt verarbeiten
  WARNING_ZONE: 1000,     // Noch gut lesbar, aber Vorsicht
  CRITICAL_LIMIT: 1200,   // Absolute Obergrenze für Einzeldateien
  EMERGENCY_BREAK: 1500   // Sofortige Modularisierung zwingend
};

// Automatische Modularisierung bei Überschreitung
if (fileLines > CRITICAL_LIMIT) {
  createSubModules(file, maxLines: OPTIMAL_READ);
  warnUser(`🚨 ${file} exceeds ${CRITICAL_LIMIT} lines - auto-modularization REQUIRED`);
}

// Präventive Warnung
if (fileLines > WARNING_ZONE) {
  warnUser(`⚠️ ${file}: ${fileLines} lines approaching limit - consider splitting`);
}
```

### **🔍 SEARCH-ERLAUBT / REPLACE-VERBOTEN REGEL:**

```javascript
// ✅ ERLAUBTE OPERATIONEN
const ALLOWED_OPERATIONS = [
  'grep_search',          // Suchen in Dateien
  'semantic_search',      // Semantische Suche  
  'file_search',          // Datei-Pattern-Suche
  'read_file',           // Dateien lesen
  'list_dir',            // Verzeichnisse auflisten
];

// ❌ VERBOTENE BULK-OPERATIONEN
const FORBIDDEN_OPERATIONS = [
  'bulk_replace',         // 🚨 NIEMALS Bulk-Replacements
  'mass_file_edit',       // 🚨 NIEMALS Mass-Edits
  'auto_refactor',        // 🚨 NIEMALS Auto-Refactoring
  'search_and_replace',   // 🚨 NIEMALS Search & Replace
];
```

### **🔒 ZWINGENDER VALIDIERUNGS-PROTOKOLL:**

```javascript
// JEDE OPERATION MUSS VALIDIERT WERDEN
function mandatoryValidation(operation, target) {
  // 1. PRE-VALIDATION (vor Aktion)
  validatePreConditions(operation, target);
  
  // 2. EXECUTE mit Monitoring
  const result = executeWithLogging(operation, target);
  
  // 3. POST-VALIDATION (nach Aktion)  
  validatePostConditions(result, target);
  
  // 4. CONSISTENCY-CHECK (Konsistenz prüfen)
  enforceConsistencyCheck(target);
  
  return result;
}
```

---

**🎯 SIMON'S VORTEIL:** Solo-Projekt mit Enterprise-Workflows = Maximum Efficiency!
