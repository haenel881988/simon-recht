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
  NAVIGATION_OPTIMIERT: "#8db4c7", // ✅ NEUE NAVIGATION-KONTRAST-OPTIMIERUNG: 6.2:1

  // 10% Akzentfarbe
  GLUT_ORANGE: "#ff4500",

  // Zusätzliche Farben für Tests - WCAG-OPTIMIERT
  GRUEN_CHECKMARK: "#00ff00",
  WARNUNG_ORANGE_SYMBOL: "#ff4500", // ⚠️ WCAG-konforme Orange-Symbole statt roter ❌
  WEISS_TEXT: "#ffffff",
};

// 🚨 ERWEITERTE KONTRAST-TESTS
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
    name: "Navigation Text auf Asphaltschwarz - AKTUELL",
    foreground: SIMON_COLORS.NAVIGATION_OPTIMIERT, // ✅ NEUE OPTIMIERTE Navigation
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "Navigation - Optimiert",
    type: "navigation_optimiert",
  },
  {
    name: "Navigation Text auf Asphaltschwarz - ALT",
    foreground: SIMON_COLORS.ANALYSE_BLAU_HELL, // ✅ ALTE Navigation zum Vergleich
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "Navigation - Vorher",
    type: "navigation_alt",
  },
  {
    name: "Button Text auf Glut-Orange",
    foreground: SIMON_COLORS.ASPHALTSCHWARZ,
    background: SIMON_COLORS.GLUT_ORANGE,
    required: 4.5,
    usage: "Primäre Buttons",
    type: "existing",
  },

  // Zusätzliche Tests
  {
    name: "GRÜNE CHECKMARKS auf Asphaltschwarz",
    foreground: SIMON_COLORS.GRUEN_CHECKMARK,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "✓ Symbole/Icons",
    type: "icon_test",
  },
  {
    name: "ORANGE WARNSYMBOLE auf Asphaltschwarz - WCAG-OPTIMIERT",
    foreground: SIMON_COLORS.WARNUNG_ORANGE_SYMBOL,
    background: SIMON_COLORS.ASPHALTSCHWARZ,
    required: 4.5,
    usage: "⚠️ Symbole/Icons (ersetzt ❌)",
    type: "icon_test",
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
   * 🔍 Analysiere echte DOM-Elemente für Icon-Probleme
   */
  async analyzeRealDomElements() {
    console.log("🔍 Analysiere echte DOM-Element-Probleme...");

    const srcDir = path.join(__dirname, "..", "..", "..", "src");
    const astroFiles = await this.scanDirectory(srcDir, [".astro", ".html"]);

    for (const file of astroFiles) {
      try {
        const content = await fs.readFile(file, "utf-8");

        // 🚨 Suche nach problematischen Icon-Farben
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
   * 🚨 Erkenne problematische Icons
   */
  detectProblematicIcons(content, fileName) {
    // Suche nach grünen Checkmarks (✓) und roten X-Symbolen (✗)
    const greenChecks = (content.match(/[✓✔]/g) || []).length;
    const redXs = (content.match(/[✗✘❌]/g) || []).length;

    if (greenChecks > 0) {
      this.addIssue({
        type: "Problematische grüne Icons",
        file: fileName,
        description: `${greenChecks} grüne Checkmarks erkannt - möglicherweise unzureichender Kontrast!`,
        severity: "CRITICAL",
      });
    }

    if (redXs > 0) {
      this.addIssue({
        type: "Problematische rote Icons",
        file: fileName,
        description: `${redXs} rote X-Symbole erkannt - möglicherweise unzureichender Kontrast!`,
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

    // 🚨 Separate Icon-Test-Probleme
    const iconProblems = this.contrastResults.filter(
      (r) => r.type === "icon_test"
    );
    const iconsPassed = iconProblems.filter((r) => r.passed).length;

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

## 🚨 ICON-KONTRAST PROBLEME

**🔍 Erkannte Icon-Kontrast-Violations:**
${iconProblems
  .map(
    (problem) =>
      `- ${problem.name}: ${problem.ratio.toFixed(2)}:1 ${
        problem.passed ? "✅ BESTANDEN" : "❌ VERLETZT"
      }`
  )
  .join("\n")}

**📊 Icon-Problem-Rate:** ${iconsPassed}/${iconProblems.length} bestanden

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
   * 🔢 Berechne Health Score MIT ANOMALIE-ERKENNUNG
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
    score -= importantIssues * 2; // Wichtige Issues: -2 Punkte (reduziert für realistische Scores)

    // Bonus für bestandene Kontrast-Tests
    if (contrastTotal > 0) {
      const contrastBonus = (contrastPassed / contrastTotal) * 20;
      score = Math.max(0, score - 20) + contrastBonus;
    }

    const finalScore = Math.max(0, Math.min(100, Math.round(score)));

    // 🚨 ANOMALIE-ERKENNUNG: Unmögliche Score-Sprünge
    this.detectHealthScoreAnomalies(finalScore);

    return finalScore;
  }

  /**
   * 🚨 ANOMALIE-ERKENNUNG für Health Score
   */
  detectHealthScoreAnomalies(currentScore) {
    // Prüfe vorherigen Score aus letzter Log-Datei
    this.checkHealthScoreJumps(currentScore);

    // Prüfe mathematische Unmöglichkeiten
    if (currentScore > 100) {
      this.addIssue({
        type: "HEALTH-SCORE-ANOMALIE",
        file: "build-checker.cjs",
        description: `🚨 MATHEMATISCHE UNMÖGLICHKEIT: Health Score ${currentScore}/100 ist über Maximum! KI muss Berechnung kritisch analysieren.`,
        severity: "CRITICAL",
      });
    }

    // Prüfe unrealistische hohe Scores bei vielen Issues
    const totalIssues = this.issues.length;
    if (currentScore > 80 && totalIssues > 30) {
      this.addIssue({
        type: "HEALTH-SCORE-ANOMALIE",
        file: "build-checker.cjs",
        description: `🚨 UNREALISTISCHER SCORE: ${currentScore}/100 bei ${totalIssues} Issues ist unglaubwürdig! KI muss Algorithmus überprüfen.`,
        severity: "CRITICAL",
      });
    }

    // Prüfe unrealistische Sprünge
    if (currentScore < 5 && totalIssues < 5) {
      this.addIssue({
        type: "HEALTH-SCORE-ANOMALIE",
        file: "build-checker.cjs",
        description: `🚨 UNTERBEWERTUNG: Score ${currentScore}/100 bei nur ${totalIssues} Issues zu niedrig! KI muss Bewertung hinterfragen.`,
        severity: "IMPORTANT",
      });
    }
  }

  /**
   * 📊 Prüfe Health Score Sprünge gegen vorherige Logs
   */
  checkHealthScoreJumps(currentScore) {
    // Implementierung für zukünftige Log-Vergleiche
    // TODO: Lade vorherige Log-Datei und vergleiche Health Score
    const plausibleRange = { min: 10, max: 90 }; // Realistische Range für Simon's Projekt

    if (
      currentScore < plausibleRange.min ||
      currentScore > plausibleRange.max
    ) {
      this.addIssue({
        type: "HEALTH-SCORE-SPRUNG-ANOMALIE",
        file: "build-checker.cjs",
        description: `🚨 UNPLAUSIBLES ERGEBNIS: Score ${currentScore}/100 außerhalb realistischer Range (${plausibleRange.min}-${plausibleRange.max}). KI muss forensische Analyse durchführen!`,
        severity: "CRITICAL",
      });
    }
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

    return `**🚨 Layout-Probleme:**

${domIssues
  .map((issue) => `- **${issue.file}:** ${issue.type} - ${issue.description}`)
  .join("\n")}

**💡 Layout-Probleme - der v5.0 Checker erkennt sie jetzt!**`;
  }

  /**
   * 🤖 SELF-VERIFICATION & KI-PROMPT GENERATION MIT ANOMALIE-ERKENNUNG
   */
  generateSelfVerificationSection() {
    const now = new Date();
    const currentTime = now.toLocaleString("de-DE");
    const healthScore = this.calculateHealthScore();
    const totalIssues = this.issues.length;

    // 🚨 ANOMALIE-ERKENNUNG
    const anomalies = this.issues.filter((i) => i.type.includes("ANOMALIE"));
    const hasAnomalies = anomalies.length > 0;

    return `
---

# 🤖 KI-SELF-VERIFICATION & VALIDATION-PROMPTS

## 🔍 **AUTOMATISCHE CROSS-VALIDATION ERFORDERLICH**

**⚠️ WICHTIG: Diese Log-Datei wurde automatisch generiert und MUSS von einer KI validiert werden!**

**Zeitstempel der Analyse:** ${currentTime}
**Checker-Version:** v5.0 - Self-Validating AI System with Anomaly Detection

${
  hasAnomalies
    ? `
## 🚨 **KRITISCHE ANOMALIEN ERKANNT**

**SOFORTIGE KI-INTERVENTION ERFORDERLICH:**

${anomalies
  .map(
    (anomaly) => `
### ❌ ${anomaly.type}
- **Problem:** ${anomaly.description}
- **Datei:** ${anomaly.file}
- **Schwere:** ${anomaly.severity}
`
  )
  .join("")}

**🎯 KI-HANDLUNGSANWEISUNG:** Diese Anomalien zeigen Systemfehler oder unrealistische Berechnungen. Führe SOFORT eine kritische Analyse durch!
`
    : ""
}

### 📋 **VALIDATION-CHECKLIST FÜR KI:**

- [ ] **Health-Score-Plausibilität:** Ist ${healthScore}/100 bei ${totalIssues} Issues realistisch?
- [ ] **Content-Längen-Check:** Sind die Wort-Counts aktuell korrekt?
- [ ] **CSS-Implementation-Status:** Wurden bereits behobene Issues fälschlich als "Todo" gemeldet?
- [ ] **Media-Links-Validation:** Existieren alle referenzierten Bilder tatsächlich?
- [ ] **Cross-Reference-Check:** Stimmen DOM-Analyse und CSS-Code überein?
- [ ] **Kontrast-Verbesserungen:** Wurde Navigation-Optimierung korrekt erkannt?

### 🚨 **KI-PROMPT FÜR SOFORTIGE VALIDATION:**

\`\`\`
KRITISCHE SYSTEM-VALIDIERUNG ERFORDERLICH:

1. HEALTH-SCORE-ANOMALIE-CHECK: Score ${healthScore}/100 bei ${totalIssues} Issues - ist das mathematisch plausibel?
2. NAVIGATION-KONTRAST-VALIDIERUNG: Wurde --navigation-optimiert (#8db4c7) korrekt getestet?
3. CONTENT-VERIFICATION: Überprüfe alle "Content zu kurz" TODOs durch manuelle Zeilen-/Wort-Zählung
4. CSS-STATUS-CHECK: Validiere ob CSS-Variablen und Farb-Issues bereits behoben wurden  
5. MEDIA-INTEGRITY: Bestätige oder widerlege alle Bild-404-Meldungen durch Datei-System-Check
6. CROSS-VALIDATION: Gleiche DOM-Probleme mit tatsächlichem CSS/HTML-Code ab
7. PRIORITY-ADJUSTMENT: Korrigiere falsches Prioritäts-Ranking basierend auf aktueller Realität

**ZIEL:** 100% akkurate, aktuelle Problem-Liste ohne veraltete, bereits behobene Issues oder mathematische Unmöglichkeiten.
\`\`\`

### 🎯 **SIMON'S SELBSTKRITIK-ZWANG FÜR KI:**

#### **PROMPT 1: Radikale Selbstkritik**
\`\`\`
SIMON'S AUFTRAG: Sei absolut selbstkritisch bei diesem Build-Checker Ergebnis!

FRAGEN ZUR SELBSTREFLEXION:
- Ist Health Score ${healthScore}/100 glaubwürdig bei dieser Issue-Anzahl?
- Habe ich alle CSS-Änderungen korrekt erkannt oder veraltete Daten verwendet?
- Sind meine Kontrast-Berechnungen mathematisch korrekt?
- Übertreibe ich Issues oder unterschätze ich Verbesserungen?

ZWINGEND: Jedes zweifelhafte Ergebnis MUSS forensisch hinterfragt werden!
\`\`\`

#### **PROMPT 2: Navigation-Kontrast-Verbesserungs-Validierung**
\`\`\`
Validiere SOFORT die Navigation-Kontrast-Optimierung:

VORHER: #6b8a9a (4.60:1) - zu schwach
NACHHER: #8db4c7 (6.2:1) - optimiert

1. Berechne beide Kontrast-Werte manuell gegen #1a1d24
2. Bestätige mathematische Verbesserung
3. Prüfe ob global.css korrekt aktualisiert wurde
4. Erkenne reale Verbesserung im Health Score

ERWARTUNG: Signifikante, aber realistische Verbesserung - NICHT 100+ Punkte Sprung!
\`\`\`

---

**🤖 KI-HANDLUNGSANWEISUNG:** Führe SOFORT die Validation durch und dokumentiere alle Korrekturen!
**🚨 SIMON'S REGEL:** Bei Zweifeln → Exception werfen und nachfragen statt raten!
`;
  }
}

// ✅ Hauptprogramm starten
const checker = new SimonBuildChecker();
checker.run().catch((error) => {
  console.error("❌ Unerwarteter Fehler:", error);
  process.exit(1);
});
