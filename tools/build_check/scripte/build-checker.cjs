#!/usr/bin/env node

/**
 * 🎯 SIMON'S KORREKTER BUILD-CHECKER v3.0
 * 
 * ✅ NUR deine 3 Farben aus global_css.md
 * ✅ Korrekte Kontrast-Berechnung für deine Farbpalette
 * ✅ TODO-Liste in Hauptlogdatei integriert
 * ✅ NUR vorhandene MD/Astro-Dateien prüfen
 */

const fs = require("fs").promises;
const path = require("path");

// ✅ SIMON'S ECHTE 3-FARBEN-PALETTE AUS global_css.md
const SIMON_COLORS = {
  // 60% Dominanzfarbe
  ASPHALTSCHWARZ: "#1a1d24",
  
  // 30% Sekundärfarbe  
  ANALYSE_BLAU: "#4a6d7c",
  ANALYSE_BLAU_HELL: "#6b8a9a", // Aufgehellt für Fließtext
  
  // 10% Akzentfarbe
  GLUT_ORANGE: "#ff4500"
};

// ✅ SIMON'S DESIGN-KONTRAST-KOMBINATIONEN
const SIMON_CONTRAST_TESTS = [
  // Überschriften auf Hintergrund
  {
    name: "H1-H4 auf Asphaltschwarz",
    foreground: SIMON_COLORS.ANALYSE_BLAU,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "Alle Überschriften"
  },
  // Fließtext auf Hintergrund  
  {
    name: "Fließtext auf Asphaltschwarz",
    foreground: SIMON_COLORS.ANALYSE_BLAU_HELL,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "Haupttext"
  },
  // Navigation
  {
    name: "Navigation Text auf Analyse-Blau",
    foreground: SIMON_COLORS.ANALYSE_BLAU_HELL,
    background: SIMON_COLORS.ANALYSE_BLAU,
    required: 4.5,
    usage: "Navigation"
  },
  // Primärer Button
  {
    name: "Button Text auf Glut-Orange",
    foreground: SIMON_COLORS.ASPHALTSCHWARZ,
    background: SIMON_COLORS.GLUT_ORANGE,
    required: 4.5,
    usage: "Primäre Buttons"
  }
];

const CONFIG = {
  LOG_DIR: path.join(__dirname, "..", "logfiles"),
  SOURCE_DIR: path.join(__dirname, "..", "..", "..", "src"),
  DOCS_DIR: path.join(__dirname, "..", "..", "..", "docs"),
  SEO_STANDARDS: {
    MIN_CONTENT_LENGTH: 300,
    TARGET_CONTENT_LENGTH: 2300,
    MIN_DESCRIPTION_LENGTH: 120,
    TARGET_DESCRIPTION_LENGTH: 155,
  },
};

class SimonBuildChecker {
  constructor() {
    this.startTime = new Date();
    this.issues = [];
    this.todos = [];
    this.contrastResults = [];
    this.contentStats = {
      totalFiles: 0,
      totalWords: 0,
      averageWordCount: 0,
      fileDetails: [],
    };
  }

  async run() {
    console.log("🚀 Simon's Korrekter Build-Checker v3.0 gestartet...");

    try {
      await this.analyzeExistingFiles();
      await this.checkSimonColorContrasts();
      await this.generateTodos();
      await this.createIntegratedLogFile();

      console.log(`✅ Build-Check abgeschlossen! Health Score: ${this.calculateHealthScore()}/100`);
      console.log(`📋 TODOs generiert: ${this.todos.length}`);
      console.log(`🎨 Kontrast-Tests: ${this.contrastResults.length}`);
    } catch (error) {
      console.error("❌ Build-Checker Fehler:", error.message);
      process.exit(1);
    }
  }

  /**
   * 🔍 Analysiere NUR vorhandene MD/Astro-Dateien
   */
  async analyzeExistingFiles() {
    console.log("🔍 Analysiere vorhandene Dateien...");

    // ✅ NUR src/ Verzeichnis prüfen
    const srcFiles = await this.scanDirectory(CONFIG.SOURCE_DIR, ['.astro', '.md']);
    
    // ✅ NUR docs/ MD-Dateien prüfen 
    const docsFiles = await this.scanDirectory(CONFIG.DOCS_DIR, ['.md']);

    const allFiles = [...srcFiles, ...docsFiles];
    this.contentStats.totalFiles = allFiles.length;

    for (const file of allFiles) {
      await this.analyzeFile(file);
    }

    this.contentStats.averageWordCount = this.contentStats.totalFiles > 0 
      ? Math.round(this.contentStats.totalWords / this.contentStats.totalFiles)
      : 0;
  }

  /**
   * 📁 Scanne Verzeichnis nach spezifischen Dateitypen
   */
  async scanDirectory(dir, extensions) {
    const files = [];
    
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          // Rekursiv durch Unterverzeichnisse
          const subFiles = await this.scanDirectory(fullPath, extensions);
          files.push(...subFiles);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Verzeichnis existiert nicht oder ist nicht zugänglich
      console.log(`ℹ️  Überspringe Verzeichnis: ${dir}`);
    }

    return files;
  }

  /**
   * 📄 Analysiere einzelne Datei
   */
  async analyzeFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const words = this.countWords(content);
      
      const fileInfo = {
        path: filePath,
        words: words,
        type: path.extname(filePath)
      };

      this.contentStats.fileDetails.push(fileInfo);
      this.contentStats.totalWords += words;

      // ✅ Content-Length Check
      if (words < CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH) {
        this.addIssue({
          type: 'Content zu kurz',
          file: path.basename(filePath),
          description: `Nur ${words} Wörter (Minimum: ${CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH})`,
          severity: 'IMPORTANT'
        });
      }

    } catch (error) {
      this.addIssue({
        type: 'Datei-Fehler',
        file: path.basename(filePath),
        description: `Datei konnte nicht gelesen werden: ${error.message}`,
        severity: 'CRITICAL'
      });
    }
  }

  /**
   * 🎨 Prüfe SIMON'S 3-Farben Kontraste
   */
  async checkSimonColorContrasts() {
    console.log("🎨 Prüfe Simon's 3-Farben-Palette Kontraste...");

    for (const test of SIMON_CONTRAST_TESTS) {
      const ratio = this.calculateContrastRatio(test.foreground, test.background);
      const passed = ratio >= test.required;

      const result = {
        name: test.name,
        foreground: test.foreground,
        background: test.background,
        ratio: ratio,
        required: test.required,
        passed: passed,
        usage: test.usage
      };

      this.contrastResults.push(result);

      if (!passed) {
        this.addIssue({
          type: 'Kontrast-Verletzung',
          file: 'global.css',
          description: `${test.name}: ${ratio.toFixed(2)}:1 (Benötigt: ${test.required}:1)`,
          severity: 'CRITICAL'
        });
      }
    }
  }

  /**
   * 🔢 Berechne Kontrast-Verhältnis
   */
  calculateContrastRatio(color1, color2) {
    const l1 = this.getLuminance(color1);
    const l2 = this.getLuminance(color2);
    
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
  }

  /**
   * 💡 Berechne Luminanz einer Farbe
   */
  getLuminance(hex) {
    const rgb = this.hexToRgb(hex);
    const [r, g, b] = rgb.map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  /**
   * 🎨 Konvertiere Hex zu RGB
   */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [0, 0, 0];
  }

  /**
   * 📋 Generiere intelligente TODOs
   */
  async generateTodos() {
    console.log("📋 Generiere TODOs basierend auf Analyse...");

    // ✅ TODOs basierend auf gefundenen Issues
    const criticalIssues = this.issues.filter(i => i.severity === 'CRITICAL');
    const importantIssues = this.issues.filter(i => i.severity === 'IMPORTANT');

    // Kritische TODOs
    for (const issue of criticalIssues) {
      this.todos.push({
        id: `TODO-${this.todos.length + 1}`,
        title: `KRITISCH: ${issue.type}`,
        description: issue.description,
        file: issue.file,
        priority: 'HIGH',
        category: 'BUG-FIX',
        impact: 'Sofortige Behebung erforderlich'
      });
    }

    // Wichtige TODOs
    for (const issue of importantIssues) {
      this.todos.push({
        id: `TODO-${this.todos.length + 1}`,
        title: `WICHTIG: ${issue.type}`,
        description: issue.description,
        file: issue.file,
        priority: 'MEDIUM',
        category: 'IMPROVEMENT',
        impact: 'Nächster Build-Cycle'
      });
    }

    // ✅ Standard-TODOs für Simon's Website
    this.addStandardTodos();
  }

  /**
   * 📝 Füge Standard-TODOs für Simon's Website hinzu
   */
  addStandardTodos() {
    const standardTodos = [
      {
        title: "3-Farben-Regel global.css implementieren",
        description: "Implementiere Simon's exakte 3-Farben-Palette in global.css",
        priority: "HIGH",
        category: "DESIGN",
        impact: "Einheitliches Design-System"
      },
      {
        title: "Blog-Content erweitern auf 2300+ Wörter",
        description: "Alle Blog-Artikel auf SEO-optimale Länge erweitern",
        priority: "MEDIUM", 
        category: "SEO",
        impact: "Bessere Suchmaschinen-Rankings"
      },
      {
        title: "Meta-Descriptions optimieren",
        description: "Alle Seiten mit 120-155 Zeichen Meta-Descriptions versehen",
        priority: "MEDIUM",
        category: "SEO", 
        impact: "Höhere Click-Through-Rate"
      }
    ];

    for (const todo of standardTodos) {
      this.todos.push({
        id: `TODO-${this.todos.length + 1}`,
        ...todo,
        file: 'Allgemein'
      });
    }
  }

  /**
   * 📄 Erstelle integrierte Logdatei mit TODOs
   */
  async createIntegratedLogFile() {
    console.log("📄 Erstelle integrierte Logdatei...");

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const logFileName = `simon-build-checker-v3-${timestamp}.md`;
    const logPath = path.join(CONFIG.LOG_DIR, logFileName);

    const logContent = this.generateIntegratedLogContent();

    try {
      await fs.mkdir(CONFIG.LOG_DIR, { recursive: true });
      await fs.writeFile(logPath, logContent, 'utf-8');
      console.log(`📄 Log gespeichert: ${logFileName}`);
    } catch (error) {
      console.error("❌ Fehler beim Speichern der Logdatei:", error.message);
    }
  }

  /**
   * 📝 Generiere integrierten Log-Content
   */
  generateIntegratedLogContent() {
    const duration = Math.round((new Date() - this.startTime) / 1000);
    const healthScore = this.calculateHealthScore();

    const contrastPassed = this.contrastResults.filter(r => r.passed).length;
    const contrastTotal = this.contrastResults.length;

    return `# 🎯 SIMON'S BUILD-CHECKER v3.0 REPORT

**Zeitstempel:** ${new Date().toLocaleString('de-DE')}
**Dauer:** ${duration}s
**Checker-Version:** Simon's Korrekter v3.0

---

## 🎯 EXECUTIVE SUMMARY

**🎯 Gesamt-Issues:** ${this.issues.length}
- 🔴 **KRITISCH:** ${this.issues.filter(i => i.severity === 'CRITICAL').length}
- 🟡 **WICHTIG:** ${this.issues.filter(i => i.severity === 'IMPORTANT').length}
- 🟢 **OPTIMIERUNG:** ${this.issues.filter(i => i.severity === 'OPTIMIZATION').length}

**🎯 Health Score:** ${healthScore}/100

---

## 📋 INTEGRIERTE TODO-LISTE

### 🔴 **KRITISCHE TODOs (SOFORT ERLEDIGEN)**

${this.todos.filter(t => t.priority === 'HIGH').map(todo => 
`#### ${todo.id}: ${todo.title}
- **📄 Datei:** ${todo.file}
- **📝 Beschreibung:** ${todo.description}
- **🎯 Impact:** ${todo.impact}
- **📂 Kategorie:** ${todo.category}

`).join('')}

### 🟡 **WICHTIGE TODOs (NÄCHSTER CYCLE)**

${this.todos.filter(t => t.priority === 'MEDIUM').map(todo => 
`#### ${todo.id}: ${todo.title}
- **📄 Datei:** ${todo.file}
- **📝 Beschreibung:** ${todo.description}
- **🎯 Impact:** ${todo.impact}
- **📂 Kategorie:** ${todo.category}

`).join('')}

### 🟢 **OPTIMIERUNG TODOs (KONTINUIERLICH)**

${this.todos.filter(t => t.priority === 'LOW').map(todo => 
`#### ${todo.id}: ${todo.title}
- **📄 Datei:** ${todo.file}
- **📝 Beschreibung:** ${todo.description}
- **🎯 Impact:** ${todo.impact}
- **📂 Kategorie:** ${todo.category}

`).join('')}

---

## 🎨 SIMON'S 3-FARBEN KONTRAST-ANALYSE

### 🎯 **KONTRAST-ÜBERSICHT**
- **🔍 Geprüfte Kombinationen:** ${contrastTotal}
- **✅ Bestanden:** ${contrastPassed}
- **❌ Durchgefallen:** ${contrastTotal - contrastPassed}
- **📊 Erfolgsrate:** ${Math.round((contrastPassed / contrastTotal) * 100)}%

### 🎨 **SIMON'S FARBPALETTE**
- **🖤 Asphaltschwarz:** ${SIMON_COLORS.ASPHALTSCHWARZ} (60% Dominanz)
- **🔵 Analyse-Blau:** ${SIMON_COLORS.ANALYSE_BLAU} (30% Sekundär)
- **🔵 Analyse-Blau Hell:** ${SIMON_COLORS.ANALYSE_BLAU_HELL} (Fließtext)
- **🟠 Glut-Orange:** ${SIMON_COLORS.GLUT_ORANGE} (10% Akzent)

### 📊 **KONTRAST-TESTS DETAILLIERT**

${this.contrastResults.map(result => 
`#### ${result.passed ? '✅' : '❌'} ${result.name}
- **🎨 Farben:** ${result.foreground} auf ${result.background}
- **📊 Verhältnis:** ${result.ratio.toFixed(2)}:1 (Benötigt: ${result.required}:1)
- **📱 Verwendung:** ${result.usage}
- **⚡ Status:** ${result.passed ? 'BESTANDEN' : 'KRITISCH'}

`).join('')}

---

## 📊 CONTENT-STATISTIKEN

### 🔍 **DATEI-ANALYSE**
- **📄 Analysierte Dateien:** ${this.contentStats.totalFiles}
- **📝 Gesamt-Wörter:** ${this.contentStats.totalWords.toLocaleString('de-DE')}
- **📊 Durchschnitt/Datei:** ${this.contentStats.averageWordCount} Wörter

### 📁 **DATEI-DETAILS**
${this.contentStats.fileDetails.map(file => 
`- **${path.basename(file.path)}** (${file.type}): ${file.words} Wörter`
).join('\n')}

---

## 🚨 ERKANNTE ISSUES

${this.issues.map(issue => 
`### ${this.getSeverityIcon(issue.severity)} ${issue.type}: ${issue.file}
- **Problem:** ${issue.description}
- **Priorität:** ${issue.severity}

`).join('')}

---

## 📈 NÄCHSTE SCHRITTE

### 🎯 **SOFORT-MASSNAHMEN**
1. Kritische TODOs abarbeiten (${this.todos.filter(t => t.priority === 'HIGH').length} Stück)
2. Kontrast-Violations beheben (${contrastTotal - contrastPassed} Stück)
3. Simon's 3-Farben-Regel vollständig implementieren

### 🔄 **NÄCHSTER BUILD-CYCLE**
1. Wichtige TODOs umsetzen (${this.todos.filter(t => t.priority === 'MEDIUM').length} Stück)
2. Content auf 2300+ Wörter erweitern
3. Meta-Descriptions optimieren

### 🌟 **KONTINUIERLICHE VERBESSERUNG**
1. Health Score auf 90+ steigern
2. Alle Kontrast-Tests bestehen
3. SEO-Standards vollständig erfüllen

---

*📄 Generiert von Simon's Korrekter Build-Checker v3.0 - ${new Date().toLocaleString('de-DE')}*`;
  }

  /**
   * 🔢 Berechne Health Score
   */
  calculateHealthScore() {
    const criticalIssues = this.issues.filter(i => i.severity === 'CRITICAL').length;
    const importantIssues = this.issues.filter(i => i.severity === 'IMPORTANT').length;
    
    const contrastPassed = this.contrastResults.filter(r => r.passed).length;
    const contrastTotal = this.contrastResults.length;
    
    let score = 100;
    
    // Abzüge für Issues
    score -= (criticalIssues * 25); // Kritische Issues: -25 Punkte
    score -= (importantIssues * 10); // Wichtige Issues: -10 Punkte
    
    // Bonus für bestandene Kontrast-Tests
    if (contrastTotal > 0) {
      const contrastBonus = (contrastPassed / contrastTotal) * 20;
      score = Math.max(0, score - 20) + contrastBonus;
    }
    
    return Math.max(0, Math.min(100, Math.round(score)));
  }

  /**
   * 📝 Füge Issue hinzu
   */
  addIssue(issue) {
    this.issues.push(issue);
  }

  /**
   * 🔤 Zähle Wörter in Text
   */
  countWords(text) {
    return text
      .replace(/```[\s\S]*?```/g, '') // Entferne Code-Blöcke
      .replace(/`[^`]*`/g, '') // Entferne Inline-Code
      .replace(/[^\w\s]/g, ' ') // Ersetze Sonderzeichen mit Leerzeichen
      .split(/\s+/)
      .filter(word => word.length > 0).length;
  }

  /**
   * 🚨 Severity Icon
   */
  getSeverityIcon(severity) {
    switch (severity) {
      case 'CRITICAL': return '🔴';
      case 'IMPORTANT': return '🟡';
      case 'OPTIMIZATION': return '🟢';
      default: return '⚪';
    }
  }
}

// ✅ Hauptprogramm starten
const checker = new SimonBuildChecker();
checker.run().catch(error => {
  console.error("❌ Unerwarteter Fehler:", error);
  process.exit(1);
});
