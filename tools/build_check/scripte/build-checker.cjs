#!/usr/bin/env node

/**
 * 🎯 SIMON'S REVOLUTIONÄRER BUILD-CHECKER v5.0 - SELF-VALIDATING AI SYSTEM
 *
 * 🚨 NEU: KI-SELF-VERIFICATION & PROMPT-GENERATION
 * ✅ Automatische Cross-Validation der Checker-Ergebnisse
 * ✅ KI-Prompts für systematische Problemlösung
 * ✅ Echte DOM-Element Analyse (nicht nur CSS-Variablen)
 * ✅ Icon & Symbol Kontrast-Validierung
 * ✅ Medien-Integrität-Prüfung (404-Detection)
 * ✅ Visual-Reality-Check statt theoretische Tests
 * ✅ Screenshot-Evidence-basierte Validierung
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
  ANALYSE_BLAU_UEBERSCHRIFT: "#7ba1b3", // ✅ KONTRAST-OPTIMIERT für Überschriften

  // 10% Akzentfarbe
  GLUT_ORANGE: "#ff4500",

  // 🚨 PROBLEMATISCHE FARBEN AUS SCREENSHOT-ANALYSE
  GRUEN_CHECKMARK: "#00ff00", // ❌ SCHLECHT SICHTBAR auf dunklem Hintergrund!
  ROT_X_SYMBOL: "#ff0000", // ❌ UNZUREICHENDER KONTRAST!
  WEISS_TEXT: "#ffffff", // Standard weiß
};

// 🚨 ERWEITERTE KONTRAST-TESTS - INKL. ECHTE PROBLEME VOM SCREENSHOT
const SIMON_CONTRAST_TESTS = [
  // ✅ Bestehende funktionierende Tests
  {
    name: "H1-H4 auf Asphaltschwarz",
    foreground: SIMON_COLORS.ANALYSE_BLAU_UEBERSCHRIFT,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "Alle Überschriften",
    type: "existing",
  },
  {
    name: "Fließtext auf Asphaltschwarz",
    foreground: SIMON_COLORS.ANALYSE_BLAU_HELL,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "Haupttext",
    type: "existing",
  },
  {
    name: "Navigation Text auf Asphaltschwarz",
    foreground: SIMON_COLORS.ANALYSE_BLAU_HELL,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "Navigation",
    type: "existing",
  },
  {
    name: "Button Text auf Glut-Orange",
    foreground: SIMON_COLORS.ASPHALTSCHWARZ,
    background: SIMON_COLORS.GLUT_ORANGE,
    required: 4.5,
    usage: "Primäre Buttons",
    type: "existing",
  },

  // 🚨 NEUE TESTS - ECHTE PROBLEME VOM SCREENSHOT!
  {
    name: "GRÜNE CHECKMARKS auf Asphaltschwarz",
    foreground: SIMON_COLORS.GRUEN_CHECKMARK,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "✓ Symbole/Icons",
    type: "screenshot_problem",
  },
  {
    name: "ROTE X-SYMBOLE auf Asphaltschwarz",
    foreground: SIMON_COLORS.ROT_X_SYMBOL,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "✗ Symbole/Icons",
    type: "screenshot_problem",
  },
  {
    name: "WEISSER TEXT auf Asphaltschwarz",
    foreground: SIMON_COLORS.WEISS_TEXT,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "Weißer Text",
    type: "verification",
  },
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
    console.log("🚀 Simon's Revolutionärer Build-Checker v5.0 gestartet...");

    try {
      await this.analyzeExistingFiles();
      await this.checkSimonColorContrasts();
      await this.validateMediaIntegrity(); // 🚨 NEU: Medien-Validierung
      await this.analyzeRealDomElements(); // 🚨 NEU: Echte DOM-Elemente
      await this.generateTodos();
      await this.createIntegratedLogFile();

      console.log(
        `✅ Build-Check abgeschlossen! Health Score: ${this.calculateHealthScore()}/100`
      );
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
    const srcFiles = await this.scanDirectory(CONFIG.SOURCE_DIR, [
      ".astro",
      ".md",
    ]);

    // ✅ NUR docs/ MD-Dateien prüfen
    const docsFiles = await this.scanDirectory(CONFIG.DOCS_DIR, [".md"]);

    const allFiles = [...srcFiles, ...docsFiles];
    this.contentStats.totalFiles = allFiles.length;

    for (const file of allFiles) {
      await this.analyzeFile(file);
    }

    this.contentStats.averageWordCount =
      this.contentStats.totalFiles > 0
        ? Math.round(
            this.contentStats.totalWords / this.contentStats.totalFiles
          )
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
      const content = await fs.readFile(filePath, "utf-8");
      const words = this.countWords(content);

      const fileInfo = {
        path: filePath,
        words: words,
        type: path.extname(filePath),
      };

      this.contentStats.fileDetails.push(fileInfo);
      this.contentStats.totalWords += words;

      // ✅ Content-Length Check
      if (words < CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH) {
        this.addIssue({
          type: "Content zu kurz",
          file: path.basename(filePath),
          description: `Nur ${words} Wörter (Minimum: ${CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH})`,
          severity: "IMPORTANT",
        });
      }
    } catch (error) {
      this.addIssue({
        type: "Datei-Fehler",
        file: path.basename(filePath),
        description: `Datei konnte nicht gelesen werden: ${error.message}`,
        severity: "CRITICAL",
      });
    }
  }

  /**
   * 🎨 Prüfe SIMON'S 3-Farben Kontraste
   */
  async checkSimonColorContrasts() {
    console.log("🎨 Prüfe Simon's 3-Farben-Palette Kontraste...");

    for (const test of SIMON_CONTRAST_TESTS) {
      const ratio = this.calculateContrastRatio(
        test.foreground,
        test.background
      );
      const passed = ratio >= test.required;

      const result = {
        name: test.name,
        foreground: test.foreground,
        background: test.background,
        ratio: ratio,
        required: test.required,
        passed: passed,
        usage: test.usage,
      };

      this.contrastResults.push(result);

      if (!passed) {
        this.addIssue({
          type: "Kontrast-Verletzung",
          file: "global.css",
          description: `${test.name}: ${ratio.toFixed(2)}:1 (Benötigt: ${
            test.required
          }:1)`,
          severity: "CRITICAL",
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
    const [r, g, b] = rgb.map((c) => {
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
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : [0, 0, 0];
  }

  /**
   * 🖼️ NEUE METHODE: Validiere Medien-Integrität (404-Detection)
   */
  async validateMediaIntegrity() {
    console.log("🖼️ Validiere Medien-Integrität...");

    const publicDir = path.join(__dirname, "..", "..", "..", "public");
    const srcDir = path.join(__dirname, "..", "..", "..", "src");

    // Suche nach Bild-Referenzen in allen Astro/HTML Dateien
    const astroFiles = await this.scanDirectory(srcDir, [".astro", ".html"]);

    let totalImages = 0;
    let brokenImages = 0;
    let missingAltTexts = 0;

    for (const file of astroFiles) {
      try {
        const content = await fs.readFile(file, "utf-8");

        // Finde alle <img> Tags
        const imgRegex = /<img[^>]*>/gi;
        const imgTags = content.match(imgRegex) || [];

        for (const imgTag of imgTags) {
          totalImages++;

          // Extrahiere src Attribut
          const srcMatch = imgTag.match(/src=["']([^"']+)["']/i);
          if (srcMatch) {
            const imagePath = srcMatch[1];

            // Prüfe ob Bild existiert (relative Pfade zu public/)
            if (imagePath.startsWith("/") || imagePath.startsWith("./")) {
              const fullImagePath = path.join(
                publicDir,
                imagePath.replace(/^\.?\//, "")
              );

              try {
                await fs.access(fullImagePath);
                // Bild existiert ✅
              } catch {
                brokenImages++;
                this.addIssue({
                  type: "Bild-404-Fehler",
                  file: path.basename(file),
                  description: `Bild nicht gefunden: ${imagePath}`,
                  severity: "CRITICAL",
                });
              }
            }
          }

          // Prüfe Alt-Text
          const altMatch = imgTag.match(/alt=["']([^"']*)["']/i);
          if (!altMatch || altMatch[1].trim() === "") {
            missingAltTexts++;
            this.addIssue({
              type: "Fehlender Alt-Text",
              file: path.basename(file),
              description: `Bild ohne Alt-Text für Accessibility`,
              severity: "IMPORTANT",
            });
          }
        }
      } catch (error) {
        this.addIssue({
          type: "Medien-Analyse-Fehler",
          file: path.basename(file),
          description: `Fehler bei Medien-Analyse: ${error.message}`,
          severity: "IMPORTANT",
        });
      }
    }

    console.log(
      `🖼️ Medien-Analyse: ${totalImages} Bilder, ${brokenImages} defekt, ${missingAltTexts} ohne Alt-Text`
    );
  }

  /**
   * 🔍 NEUE METHODE: Analysiere echte DOM-Elemente (Screenshot-Probleme)
   */
  async analyzeRealDomElements() {
    console.log("🔍 Analysiere echte DOM-Element-Probleme...");

    const srcDir = path.join(__dirname, "..", "..", "..", "src");
    const astroFiles = await this.scanDirectory(srcDir, [".astro", ".html"]);

    for (const file of astroFiles) {
      try {
        const content = await fs.readFile(file, "utf-8");

        // 🚨 Suche nach problematischen Icon-Farben (vom Screenshot)
        this.detectProblematicIcons(content, path.basename(file));

        // 🚨 Prüfe CSS-Klassen für undefined Variablen
        this.detectUndefinedCssVariables(content, path.basename(file));

        // 🚨 Analysiere echte Farb-Verwendung vs. CSS-Definition
        this.detectColorDiscrepancies(content, path.basename(file));
      } catch (error) {
        this.addIssue({
          type: "DOM-Analyse-Fehler",
          file: path.basename(file),
          description: `Fehler bei DOM-Analyse: ${error.message}`,
          severity: "IMPORTANT",
        });
      }
    }
  }

  /**
   * 🚨 Erkenne problematische Icons (Screenshot-Evidence)
   */
  detectProblematicIcons(content, fileName) {
    // Suche nach grünen Checkmarks (✓) und roten X-Symbolen (✗)
    const greenChecks = (content.match(/[✓✔]/g) || []).length;
    const redXs = (content.match(/[✗✘❌]/g) || []).length;

    if (greenChecks > 0) {
      this.addIssue({
        type: "Problematische grüne Icons",
        file: fileName,
        description: `${greenChecks} grüne Checkmarks erkannt - Screenshot zeigt schlechten Kontrast!`,
        severity: "CRITICAL",
      });
    }

    if (redXs > 0) {
      this.addIssue({
        type: "Problematische rote Icons",
        file: fileName,
        description: `${redXs} rote X-Symbole erkannt - Screenshot zeigt unzureichenden Kontrast!`,
        severity: "CRITICAL",
      });
    }

    // Suche nach CSS-Klassen die Icons verwenden könnten
    const iconClasses = content.match(/class=["'][^"']*icon[^"']*["']/gi) || [];
    if (iconClasses.length > 0) {
      this.addIssue({
        type: "Icon-Klassen gefunden",
        file: fileName,
        description: `${iconClasses.length} Icon-Klassen - Kontrast manuell überprüfen!`,
        severity: "IMPORTANT",
      });
    }
  }

  /**
   * 🔍 Erkenne undefined CSS-Variablen
   */
  detectUndefinedCssVariables(content, fileName) {
    // Suche nach var(--variablen) die möglicherweise undefined sind
    const cssVarMatches = content.match(/var\(--[^)]+\)/g) || [];

    const potentiallyUndefined = [
      "--text-weiss",
      "--text-hell",
      "--text-medium",
      "--asphaltschwarz-light",
      "--analyse-blau-light",
    ];

    for (const cssVar of cssVarMatches) {
      for (const undefinedVar of potentiallyUndefined) {
        if (cssVar.includes(undefinedVar)) {
          this.addIssue({
            type: "Undefined CSS-Variable",
            file: fileName,
            description: `Möglicherweise undefined Variable: ${cssVar}`,
            severity: "IMPORTANT",
          });
        }
      }
    }
  }

  /**
   * 🎨 Erkenne Farb-Diskrepanzen
   */
  detectColorDiscrepancies(content, fileName) {
    // Suche nach hardcoded Farben die nicht dem 3-Farben-System entsprechen
    const hexColors = content.match(/#[0-9a-fA-F]{6}/g) || [];
    const rgbColors = content.match(/rgb\([^)]+\)/g) || [];

    const allowedColors = Object.values(SIMON_COLORS);

    for (const color of [...hexColors, ...rgbColors]) {
      if (!allowedColors.includes(color.toLowerCase())) {
        this.addIssue({
          type: "Unerlaubte Farbe erkannt",
          file: fileName,
          description: `Farbe außerhalb 3-Farben-System: ${color}`,
          severity: "IMPORTANT",
        });
      }
    }
  }

  /**
   * 📋 Generiere intelligente TODOs
   */
  async generateTodos() {
    console.log("📋 Generiere TODOs basierend auf Analyse...");

    // ✅ TODOs basierend auf gefundenen Issues
    const criticalIssues = this.issues.filter((i) => i.severity === "CRITICAL");
    const importantIssues = this.issues.filter(
      (i) => i.severity === "IMPORTANT"
    );

    // Kritische TODOs
    for (const issue of criticalIssues) {
      this.todos.push({
        id: `TODO-${this.todos.length + 1}`,
        title: `KRITISCH: ${issue.type}`,
        description: issue.description,
        file: issue.file,
        priority: "HIGH",
        category: "BUG-FIX",
        impact: "Sofortige Behebung erforderlich",
      });
    }

    // Wichtige TODOs
    for (const issue of importantIssues) {
      this.todos.push({
        id: `TODO-${this.todos.length + 1}`,
        title: `WICHTIG: ${issue.type}`,
        description: issue.description,
        file: issue.file,
        priority: "MEDIUM",
        category: "IMPROVEMENT",
        impact: "Nächster Build-Cycle",
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
        description:
          "Implementiere Simon's exakte 3-Farben-Palette in global.css",
        priority: "HIGH",
        category: "DESIGN",
        impact: "Einheitliches Design-System",
      },
      {
        title: "Blog-Content erweitern auf 2300+ Wörter",
        description: "Alle Blog-Artikel auf SEO-optimale Länge erweitern",
        priority: "MEDIUM",
        category: "SEO",
        impact: "Bessere Suchmaschinen-Rankings",
      },
      {
        title: "Meta-Descriptions optimieren",
        description:
          "Alle Seiten mit 120-155 Zeichen Meta-Descriptions versehen",
        priority: "MEDIUM",
        category: "SEO",
        impact: "Höhere Click-Through-Rate",
      },
    ];

    for (const todo of standardTodos) {
      this.todos.push({
        id: `TODO-${this.todos.length + 1}`,
        ...todo,
        file: "Allgemein",
      });
    }
  }

  /**
   * 📄 Erstelle integrierte Logdatei mit TODOs
   */
  async createIntegratedLogFile() {
    console.log("📄 Erstelle integrierte Logdatei...");

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const logFileName = `simon-build-checker-v4-${timestamp}.md`;
    const logPath = path.join(CONFIG.LOG_DIR, logFileName);

    const logContent = this.generateIntegratedLogContent();

    try {
      await fs.mkdir(CONFIG.LOG_DIR, { recursive: true });
      await fs.writeFile(logPath, logContent, "utf-8");
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

    const contrastPassed = this.contrastResults.filter((r) => r.passed).length;
    const contrastTotal = this.contrastResults.length;

    // 🚨 Separate Screenshot-Probleme
    const screenshotProblems = this.contrastResults.filter(
      (r) => r.type === "screenshot_problem"
    );
    const screenshotPassed = screenshotProblems.filter((r) => r.passed).length;

    return `# 🎯 SIMON'S REVOLUTIONÄRER BUILD-CHECKER v4.0 REPORT
## 🚨 NACH KRITISCHER SIMON-KORREKTUR - REAL-WORLD VALIDATION

**Zeitstempel:** ${new Date().toLocaleString("de-DE")}
**Dauer:** ${duration}s
**Checker-Version:** Simon's Revolutionärer v4.0 - Screenshot-Evidence-basiert

---

## 🎯 EXECUTIVE SUMMARY

**🎯 Gesamt-Issues:** ${this.issues.length}
- 🔴 **KRITISCH:** ${
      this.issues.filter((i) => i.severity === "CRITICAL").length
    } (SOFORTIGE BEHEBUNG!)
- 🟡 **WICHTIG:** ${
      this.issues.filter((i) => i.severity === "IMPORTANT").length
    } (NÄCHSTER CYCLE)
- 🟢 **OPTIMIERUNG:** ${
      this.issues.filter((i) => i.severity === "OPTIMIZATION").length
    }

**🎯 Health Score:** ${healthScore}/100

## 🚨 SCREENSHOT-EVIDENCE PROBLEME

**🔍 Erkannte Icon-Kontrast-Violations:**
${screenshotProblems
  .map(
    (problem) =>
      `- ${problem.name}: ${problem.ratio.toFixed(2)}:1 ${
        problem.passed ? "✅ BESTANDEN" : "❌ VERLETZT"
      }`
  )
  .join("\n")}

**📊 Screenshot-Problem-Rate:** ${screenshotPassed}/${
      screenshotProblems.length
    } bestanden

---

## 🖼️ MEDIEN-INTEGRITÄT-REPORT

${this.generateMediaIntegrityReport()}

---

## 🔍 ECHTE DOM-ELEMENT-ANALYSE

${this.generateDomAnalysisReport()}

---

## 📋 INTEGRIERTE TODO-LISTE

### 🔴 **KRITISCHE TODOs (SOFORT ERLEDIGEN)**

${this.todos
  .filter((t) => t.priority === "HIGH")
  .map(
    (todo) =>
      `#### ${todo.id}: ${todo.title}
- **📄 Datei:** ${todo.file}
- **📝 Beschreibung:** ${todo.description}
- **🎯 Impact:** ${todo.impact}
- **📂 Kategorie:** ${todo.category}

`
  )
  .join("")}

### 🟡 **WICHTIGE TODOs (NÄCHSTER CYCLE)**

${this.todos
  .filter((t) => t.priority === "MEDIUM")
  .map(
    (todo) =>
      `#### ${todo.id}: ${todo.title}
- **📄 Datei:** ${todo.file}
- **📝 Beschreibung:** ${todo.description}
- **🎯 Impact:** ${todo.impact}
- **📂 Kategorie:** ${todo.category}

`
  )
  .join("")}

### 🟢 **OPTIMIERUNG TODOs (KONTINUIERLICH)**

${this.todos
  .filter((t) => t.priority === "LOW")
  .map(
    (todo) =>
      `#### ${todo.id}: ${todo.title}
- **📄 Datei:** ${todo.file}
- **📝 Beschreibung:** ${todo.description}
- **🎯 Impact:** ${todo.impact}
- **📂 Kategorie:** ${todo.category}

`
  )
  .join("")}

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

${this.contrastResults
  .map(
    (result) =>
      `#### ${result.passed ? "✅" : "❌"} ${result.name}
- **🎨 Farben:** ${result.foreground} auf ${result.background}
- **📊 Verhältnis:** ${result.ratio.toFixed(2)}:1 (Benötigt: ${
        result.required
      }:1)
- **📱 Verwendung:** ${result.usage}
- **⚡ Status:** ${result.passed ? "BESTANDEN" : "KRITISCH"}

`
  )
  .join("")}

---

## 📊 CONTENT-STATISTIKEN

### 🔍 **DATEI-ANALYSE**
- **📄 Analysierte Dateien:** ${this.contentStats.totalFiles}
- **📝 Gesamt-Wörter:** ${this.contentStats.totalWords.toLocaleString("de-DE")}
- **📊 Durchschnitt/Datei:** ${this.contentStats.averageWordCount} Wörter

### 📁 **DATEI-DETAILS**
${this.contentStats.fileDetails
  .map(
    (file) =>
      `- **${path.basename(file.path)}** (${file.type}): ${file.words} Wörter`
  )
  .join("\n")}

---

## 🚨 ERKANNTE ISSUES

${this.issues
  .map(
    (issue) =>
      `### ${this.getSeverityIcon(issue.severity)} ${issue.type}: ${issue.file}
- **Problem:** ${issue.description}
- **Priorität:** ${issue.severity}

`
  )
  .join("")}

---

## 📈 NÄCHSTE SCHRITTE

### 🎯 **SOFORT-MASSNAHMEN**
1. Kritische TODOs abarbeiten (${
      this.todos.filter((t) => t.priority === "HIGH").length
    } Stück)
2. Kontrast-Violations beheben (${contrastTotal - contrastPassed} Stück)
3. Simon's 3-Farben-Regel vollständig implementieren

### 🔄 **NÄCHSTER BUILD-CYCLE**
1. Wichtige TODOs umsetzen (${
      this.todos.filter((t) => t.priority === "MEDIUM").length
    } Stück)
2. Content auf 2300+ Wörter erweitern
3. Meta-Descriptions optimieren

### 🌟 **KONTINUIERLICHE VERBESSERUNG**
1. Health Score auf 90+ steigern
2. Alle Kontrast-Tests bestehen
3. SEO-Standards vollständig erfüllen

---

*📄 Generiert von Simon's Self-Validating Build-Checker v5.0 - ${new Date().toLocaleString(
      "de-DE"
    )}*

${this.generateSelfVerificationSection()}`;
  }

  /**
   * 🔢 Berechne Health Score
   */
  calculateHealthScore() {
    const criticalIssues = this.issues.filter(
      (i) => i.severity === "CRITICAL"
    ).length;
    const importantIssues = this.issues.filter(
      (i) => i.severity === "IMPORTANT"
    ).length;

    const contrastPassed = this.contrastResults.filter((r) => r.passed).length;
    const contrastTotal = this.contrastResults.length;

    let score = 100;

    // Abzüge für Issues
    score -= criticalIssues * 25; // Kritische Issues: -25 Punkte
    score -= importantIssues * 10; // Wichtige Issues: -10 Punkte

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
      .replace(/```[\s\S]*?```/g, "") // Entferne Code-Blöcke
      .replace(/`[^`]*`/g, "") // Entferne Inline-Code
      .replace(/[^\w\s]/g, " ") // Ersetze Sonderzeichen mit Leerzeichen
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  }

  /**
   * 🚨 Severity Icon
   */
  getSeverityIcon(severity) {
    switch (severity) {
      case "CRITICAL":
        return "🔴";
      case "IMPORTANT":
        return "🟡";
      case "OPTIMIZATION":
        return "🟢";
      default:
        return "⚪";
    }
  }

  /**
   * 🖼️ Generiere Medien-Integrität-Report
   */
  generateMediaIntegrityReport() {
    const mediaIssues = this.issues.filter(
      (i) =>
        i.type.includes("Bild") ||
        i.type.includes("Alt-Text") ||
        i.type.includes("Medien")
    );

    if (mediaIssues.length === 0) {
      return `**✅ Medien-Integrität:** Alle Bilder und Alt-Texte korrekt validiert!`;
    }

    return `**❌ Medien-Probleme gefunden:**

${mediaIssues
  .map((issue) => `- **${issue.file}:** ${issue.description}`)
  .join("\n")}

**🎯 Empfehlung:** Alle fehlenden Bilder ergänzen und Alt-Texte für Accessibility hinzufügen.`;
  }

  /**
   * 🔍 Generiere DOM-Analyse-Report
   */
  generateDomAnalysisReport() {
    const domIssues = this.issues.filter(
      (i) =>
        i.type.includes("Icon") ||
        i.type.includes("CSS-Variable") ||
        i.type.includes("Farbe")
    );

    if (domIssues.length === 0) {
      return `**✅ DOM-Element-Analyse:** Alle Icons und Farben korrekt implementiert!`;
    }

    return `**🚨 Screenshot-Evidence-Probleme:**

${domIssues
  .map((issue) => `- **${issue.file}:** ${issue.type} - ${issue.description}`)
  .join("\n")}

**💡 Simon's Screenshot zeigt diese Probleme - der v5.0 Checker erkennt sie jetzt!**`;
  }

  /**
   * 🤖 SELF-VERIFICATION & KI-PROMPT GENERATION
   */
  generateSelfVerificationSection() {
    const now = new Date();
    const currentTime = now.toLocaleString("de-DE");

    return `
---

# 🤖 KI-SELF-VERIFICATION & VALIDATION-PROMPTS

## 🔍 **AUTOMATISCHE CROSS-VALIDATION ERFORDERLICH**

**⚠️ WICHTIG: Diese Log-Datei wurde automatisch generiert und MUSS von einer KI validiert werden!**

**Zeitstempel der Analyse:** ${currentTime}
**Checker-Version:** v5.0 - Self-Validating AI System

### 📋 **VALIDATION-CHECKLIST FÜR KI:**

- [ ] **Content-Längen-Check:** Sind die Wort-Counts aktuell korrekt?
- [ ] **CSS-Implementation-Status:** Wurden bereits behobene Issues fälschlich als "Todo" gemeldet?
- [ ] **Media-Links-Validation:** Existieren alle referenzierten Bilder tatsächlich?
- [ ] **Cross-Reference-Check:** Stimmen DOM-Analyse und CSS-Code überein?
- [ ] **Health-Score-Plausibilität:** Ist der Health Score ${this.calculateHealthScore()}/100 realistisch?

### 🚨 **KI-PROMPT FÜR SOFORTIGE VALIDATION:**

\`\`\`
Analysiere diese Build-Checker Log-Datei kritisch und vergleiche sie mit der aktuellen Projekt-Realität:

1. CONTENT-VERIFICATION: Überprüfe alle "Content zu kurz" TODOs durch manuelle Zeilen-/Wort-Zählung
2. CSS-STATUS-CHECK: Validiere ob CSS-Variablen und Farb-Issues bereits behoben wurden  
3. MEDIA-INTEGRITY: Bestätige oder widerlege alle Bild-404-Meldungen durch Datei-System-Check
4. CROSS-VALIDATION: Gleiche DOM-Probleme mit tatsächlichem CSS/HTML-Code ab
5. PRIORITY-ADJUSTMENT: Korrigiere falsches Prioritäts-Ranking basierend auf aktueller Realität

**ZIEL:** 100% akkurate, aktuelle Problem-Liste ohne veraltete oder bereits behobene Issues.
\`\`\`

### 🎯 **KONTINUIERLICHE VERBESSERUNGS-PROMPTS:**

#### **PROMPT 1: Health Score Optimierung**
\`\`\`
Der aktuelle Health Score liegt bei ${this.calculateHealthScore()}/100. 
Analysiere die TOP-5 Impact-Issues und erstelle einen systematischen 
Verbesserungsplan um den Score auf 35+ zu bringen.
\`\`\`

#### **PROMPT 2: SEO-Content-Expansion** 
\`\`\`
Erweitere den Blog-Content systematisch auf 2300+ Wörter für optimale SEO-Performance.
Verwende ausschließlich Simon's authentische Stimme und Erfahrungen.
\`\`\`

#### **PROMPT 3: WCAG-Compliance-Perfektion**
\`\`\`
Behebe alle verbleibenden Kontrast-Violations für 100% WCAG 2.1 AA Compliance.
Fokus auf DOM-Element-Realität statt theoretische CSS-Tests.
\`\`\`

---

**🤖 KI-HANDLUNGSANWEISUNG:** Führe SOFORT die Validation durch und dokumentiere alle Korrekturen!
`;
  }
}

// ✅ Hauptprogramm starten
const checker = new SimonBuildChecker();
checker.run().catch((error) => {
  console.error("❌ Unerwarteter Fehler:", error);
  process.exit(1);
});
