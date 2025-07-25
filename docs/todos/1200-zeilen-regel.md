# 🔢 1200-ZEILEN-REGEL - ENTERPRISE-STANDARD

**ZWINGEND FÜR ALLE KI-TOOLS UND ANALYSERS**

---

## 🎯 **REGEL-DEFINITION:**

```javascript
// ENTERPRISE-STANDARD: Maximale Dateigröße für KI-Verarbeitung
const MAX_LINES_PER_FILE = 1200;
const OPTIMAL_LINES_PER_MODULE = 800;
const WARNING_THRESHOLD = 1000;
```

## 🚨 **AUTOMATISCHE ÜBERWACHUNG:**

### **ALLE ANALYZER/TOOLS MÜSSEN PRÜFEN:**
- [ ] universal-project-analyzer.cjs
- [ ] structure-optimizer-v2.cjs  
- [ ] contradiction-scanner.cjs
- [ ] master-analyzer.cjs
- [ ] build-checker Scripts

### **AUTO-MODULARISIERUNG BEI ÜBERSCHREITUNG:**
```javascript
function enforceLineLimits(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').split('\n').length;
  
  if (lines > MAX_LINES_PER_FILE) {
    console.warn(`🚨 ${filePath}: ${lines} Zeilen > ${MAX_LINES_PER_FILE} Limit!`);
    suggestModularization(filePath);
  }
  
  if (lines > WARNING_THRESHOLD) {
    console.warn(`⚠️ ${filePath}: ${lines} Zeilen nähert sich Limit`);
  }
}
```

---

## 🚫 **SIMON'S TABU-VERZEICHNISSE (FINAL)**

### **ABSOLUTES VERBOT FÜR ALLE TOOLS:**
```javascript
const SIMON_TABU_DIRS = [
  '.astro',         // Astro Build-Cache
  '.vscode',        // VS Code Settings  
  'node_modules',   // NPM Dependencies
  '.git',           // Git Repository
  'dist',           // Build Output
  'build',          // Build Output
  '.next',          // Next.js Cache
  '.cache',         // Generic Cache
  '.temp',          // Temporary Files
  '.tmp',           // Temporary Files
];

// AUTOMATISCHE ERKENNUNG NEUER INSTALLATIONS-VERZEICHNISSE
const AUTO_TABU_PATTERNS = [
  /^\..*cache/i,    // Alle Cache-Verzeichnisse
  /^\..*temp/i,     // Alle Temp-Verzeichnisse  
  /node_modules/,   // Package Manager
  /build|dist/,     // Build Outputs
];
```

---

## ✅ **VALIDATION-PROTOCOL:**

### **JEDER ANALYZER MUSS:**
1. ✅ Tabu-Verzeichnisse ausschließen
2. ✅ 1200-Zeilen-Regel überwachen  
3. ✅ Automatische Modularisierung vorschlagen
4. ✅ Token-optimierte Verarbeitung
5. ✅ Enterprise-Level Logging

### **REGELMÄSSIGE AUDITS:**
- [ ] Wöchentliche Zeilen-Zählung aller Tools
- [ ] Automatische Tabu-Verzeichnis-Erkennung
- [ ] Performance-Monitoring der Analyzer

---

**🎯 ZIEL:** KI arbeitet IMMER mit optimaler Token-Effizienz und niemals mit irrelevanten Dateien!
