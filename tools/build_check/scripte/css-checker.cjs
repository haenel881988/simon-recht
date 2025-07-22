#!/usr/bin/env node

/**
 * 🎨 SIMON'S CSS-CHECKER v1.0 - Spezialisierte CSS-Analyse
 *
 * ✅ Mobile-First Design Validierung
 * ✅ Navigation Layout Analyse
 * ✅ Text Readability Checks
 * ✅ Responsive Breakpoint Tests
 * ✅ Element Spacing/Positioning
 * ✅ Simon's 3-Farben-Regel Compliance
 */

const fs = require("fs").promises;
const path = require("path");

// ✅ SIMON'S 3-FARBEN-PALETTE
const SIMON_COLORS = {
  ASPHALTSCHWARZ: "#1a1d24",
  ANALYSE_BLAU: "#4a6d7c",
  ANALYSE_BLAU_HELL: "#6b8a9a",
  GLUT_ORANGE: "#ff4500",
};

// ✅ MOBILE-FIRST BREAKPOINTS
const BREAKPOINTS = {
  MOBILE: 320,
  MOBILE_L: 425,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1440,
};

// ✅ CSS-REGELN FÜR SIMON'S WEBSITE
const CSS_RULES = {
  // Mobile-First Prinzipien
  MOBILE_FIRST: {
    name: "Mobile-First Design",
    description:
      "Styles beginnen bei 320px, dann Media Queries für größere Screens",
    patterns: ["@media \\(min-width:", "mobile-first", "responsive"],
  },

  // Navigation Standards
  NAVIGATION: {
    name: "Navigation Accessibility",
    description: "Navigation muss touch-friendly und accessible sein",
    minTouchTarget: 44, // px
    requiredARIA: ["aria-label", "aria-expanded", "role"],
  },

  // Text Readability
  TEXT_READABILITY: {
    name: "Text Lesbarkeit",
    description: "Optimale Zeilenhöhe, Schriftgrößen und Abstände",
    minFontSize: 16,
    optimalLineHeight: 1.5,
    maxLineLength: 75, // Zeichen
  },

  // Simon's Design System
  COLOR_SYSTEM: {
    name: "3-Farben-System",
    description: "Ausschließlich Simon's definierte Farbpalette verwenden",
    allowedColors: Object.values(SIMON_COLORS),
  },
};

const CONFIG = {
  LOG_DIR: path.join(__dirname, "..", "logfiles"),
  CSS_FILES: [
    path.join(__dirname, "..", "..", "..", "src", "styles", "global.css"), // NUR die aktive CSS-Datei
  ],
  ASTRO_DIR: path.join(__dirname, "..", "..", "..", "src"),
};

class SimonCSSChecker {
  constructor() {
    this.startTime = new Date();
    this.issues = [];
    this.mobileFirstScore = 0;
    this.navigationScore = 0;
    this.readabilityScore = 0;
    this.colorSystemScore = 0;
    this.analyzedFiles = [];
  }

  async run() {
    console.log("🎨 Simon's CSS-Checker v1.0 gestartet...");

    try {
      await this.checkFileNamingConventions();
      await this.analyzeCSSFiles();
      await this.checkMobileFirstDesign();
      await this.analyzeNavigation();
      await this.checkTextReadability();
      await this.validateColorSystem();
      await this.createCSSLogFile();

      const overallScore = this.calculateOverallScore();
      console.log(`✅ CSS-Check abgeschlossen! CSS-Score: ${overallScore}/100`);
      console.log(`📱 Mobile-First: ${this.mobileFirstScore}/100`);
      console.log(`🧭 Navigation: ${this.navigationScore}/100`);
      console.log(`📖 Readability: ${this.readabilityScore}/100`);
      console.log(`🎨 Color-System: ${this.colorSystemScore}/100`);
    } catch (error) {
      console.error("❌ CSS-Checker Fehler:", error.message);
      process.exit(1);
    }
  }

  /**
   * 🏷️ Prüfe Datei-Namenskonventionen
   */
  async checkFileNamingConventions() {
    console.log("🏷️ Prüfe Datei-Namenskonventionen...");

    const stylesDir = path.join(__dirname, "..", "..", "..", "src", "styles");

    try {
      const files = await fs.readdir(stylesDir);
      const cssFiles = files.filter((file) => file.endsWith(".css"));

      // ✅ Check: Nur global.css erlaubt als aktive CSS-Datei
      const allowedMainCSS = "global.css";
      const forbiddenPatterns = [
        "global_NEU.css",
        "global_ALT.css",
        "styles.css",
        "main.css",
      ];

      if (!cssFiles.includes(allowedMainCSS)) {
        this.addIssue({
          type: "Fehlende Haupt-CSS",
          file: "styles/",
          description: "global.css nicht gefunden - Haupt-CSS-Datei fehlt",
          severity: "CRITICAL",
          fix: "Erstelle oder benenne CSS-Datei zu global.css um",
        });
      }

      // Check für verbotene CSS-Dateien
      const forbiddenFiles = cssFiles.filter((file) =>
        forbiddenPatterns.some((pattern) =>
          file.includes(pattern.replace(".css", ""))
        )
      );

      if (forbiddenFiles.length > 0) {
        this.addIssue({
          type: "Namenskonventions-Verletzung",
          file: forbiddenFiles.join(", "),
          description: `Verbotene CSS-Dateinamen gefunden: ${forbiddenFiles.join(
            ", "
          )}`,
          severity: "CRITICAL",
          fix: "Benenne Dateien nach Simon's Namenskonvention um oder archiviere sie",
        });
      }

      // Check für multiple CSS-Dateien
      if (cssFiles.length > 1) {
        const extraFiles = cssFiles.filter((file) => file !== allowedMainCSS);
        this.addIssue({
          type: "Multiple CSS-Dateien",
          file: extraFiles.join(", "),
          description: `${cssFiles.length} CSS-Dateien gefunden, nur global.css erlaubt`,
          severity: "IMPORTANT",
          fix: "Konsolidiere CSS in global.css oder archiviere alte Versionen",
        });
      }

      console.log(
        `✅ Namenskonvention: ${cssFiles.length} CSS-Dateien geprüft`
      );
    } catch (error) {
      console.log(`ℹ️  Styles-Verzeichnis nicht zugänglich: ${error.message}`);
    }
  }

  /**
   * 📄 Analysiere CSS-Dateien
   */
  async analyzeCSSFiles() {
    console.log("📄 Analysiere CSS-Dateien...");

    for (const cssFile of CONFIG.CSS_FILES) {
      try {
        const content = await fs.readFile(cssFile, "utf-8");
        this.analyzedFiles.push({
          path: cssFile,
          content: content,
          lines: content.split("\n").length,
          size: Buffer.byteLength(content, "utf8"),
        });
        console.log(`✅ Analysiert: ${path.basename(cssFile)}`);
      } catch (error) {
        console.log(`ℹ️  Datei nicht gefunden: ${path.basename(cssFile)}`);
      }
    }
  }

  /**
   * 📱 Mobile-First Design Check
   */
  async checkMobileFirstDesign() {
    console.log("📱 Prüfe Mobile-First Design...");

    this.mobileFirstScore = 0;
    const maxPoints = 100;

    if (this.analyzedFiles.length === 0) {
      console.log("❌ Mobile-First: Keine CSS-Dateien zu analysieren");
      return;
    }

    // ✅ Analysiere NUR die erste/einzige CSS-Datei (global.css)
    const file = this.analyzedFiles[0];
    const content = file.content;
    let points = 0;

    // ✅ Check: Media Queries verwenden min-width (Mobile-First)
    const mediaQueries = content.match(/@media\s*\([^)]*\)/g) || [];
    const minWidthQueries = mediaQueries.filter((q) => q.includes("min-width"));
    const maxWidthQueries = mediaQueries.filter((q) => q.includes("max-width"));

    if (minWidthQueries.length > maxWidthQueries.length) {
      points += 30;
      console.log(
        "✅ Mobile-First: Mehr min-width als max-width Media Queries"
      );
    } else {
      this.addIssue({
        type: "Mobile-First Violation",
        file: path.basename(file.path),
        description: `${maxWidthQueries.length} max-width vs ${minWidthQueries.length} min-width queries`,
        severity: "IMPORTANT",
        fix: "Verwende min-width statt max-width für Mobile-First Ansatz",
      });
    }

    // ✅ Check: Responsive Breakpoints
    const hasResponsiveBreakpoints = Object.values(BREAKPOINTS).some(
      (bp) => content.includes(`${bp}px`) || content.includes(`${bp / 16}rem`)
    );

    if (hasResponsiveBreakpoints) {
      points += 25;
      console.log("✅ Mobile-First: Standard Breakpoints erkannt");
    } else {
      this.addIssue({
        type: "Fehlende Breakpoints",
        file: path.basename(file.path),
        description:
          "Keine Standard Mobile/Tablet/Desktop Breakpoints gefunden",
        severity: "IMPORTANT",
        fix: "Füge responsive Breakpoints hinzu: 320px, 768px, 1024px",
      });
    }

    // ✅ Check: Touch-friendly Größen
    const hasMinTouchSizes =
      content.includes("44px") || content.includes("2.75rem");
    if (hasMinTouchSizes) {
      points += 20;
      console.log("✅ Mobile-First: Touch-friendly Größen erkannt");
    }

    // ✅ Check: Viewport Meta Tag Unterstützung
    if (
      content.includes("viewport") ||
      content.includes("vw") ||
      content.includes("vh")
    ) {
      points += 25;
      console.log("✅ Mobile-First: Viewport-relative Einheiten verwendet");
    }

    this.mobileFirstScore = Math.min(points, maxPoints);
  }

  /**
   * 🧭 Navigation Analyse
   */
  async analyzeNavigation() {
    console.log("🧭 Analysiere Navigation...");

    this.navigationScore = 0;
    const maxPoints = 100;

    if (this.analyzedFiles.length === 0) {
      console.log("❌ Navigation: Keine CSS-Dateien zu analysieren");
      return;
    }

    // ✅ Analysiere NUR die erste/einzige CSS-Datei (global.css)
    const file = this.analyzedFiles[0];
    const content = file.content;
    let points = 0;

    // ✅ Check: Navigation Klassen vorhanden
    const navSelectors = [
      ".nav",
      ".navigation",
      "nav",
      ".header-nav",
      ".menu",
    ].filter((sel) => content.includes(sel));

    if (navSelectors.length > 0) {
      points += 20;
      console.log(
        `✅ Navigation: ${navSelectors.length} Navigation-Selektoren gefunden`
      );
    }

    // ✅ Check: Touch-friendly Navigation
    const hasTouchTargets = content.match(
      /min-width:\s*44px|min-height:\s*44px|padding:\s*[1-9]/
    );
    if (hasTouchTargets) {
      points += 30;
      console.log("✅ Navigation: Touch-friendly Größen erkannt");
    } else {
      this.addIssue({
        type: "Navigation Touch-Target",
        file: path.basename(file.path),
        description:
          "Navigation-Elemente sollten mindestens 44px Touch-Target haben",
        severity: "IMPORTANT",
        fix: "Füge min-width: 44px; min-height: 44px; für Navigation-Links hinzu",
      });
    }

    // ✅ Check: Mobile Navigation (Hamburger/Toggle)
    const hasMobileNav =
      content.includes("hamburger") ||
      content.includes("menu-toggle") ||
      content.includes("nav-toggle");
    if (hasMobileNav) {
      points += 25;
      console.log("✅ Navigation: Mobile Navigation Pattern erkannt");
    }

    // ✅ Check: Navigation Hover States
    const hasHoverStates =
      content.includes(":hover") || content.includes(":focus");
    if (hasHoverStates) {
      points += 25;
      console.log("✅ Navigation: Hover/Focus States definiert");
    }

    this.navigationScore = Math.min(points, maxPoints);
  }

  /**
   * 📖 Text Readability Check
   */
  async checkTextReadability() {
    console.log("📖 Prüfe Text Lesbarkeit...");

    let readabilityPoints = 0;
    const maxPoints = 100;

    for (const file of this.analyzedFiles) {
      const content = file.content;

      // ✅ Check: Minimale Schriftgröße
      const fontSizes =
        content.match(/font-size:\s*(\d+(?:\.\d+)?)(px|rem|em)/g) || [];
      const smallFonts = fontSizes.filter((size) => {
        const match = size.match(/(\d+(?:\.\d+)?)(px|rem|em)/);
        if (match) {
          const value = parseFloat(match[1]);
          const unit = match[2];
          // Konvertiere zu px für Vergleich
          const pxValue =
            unit === "rem" ? value * 16 : unit === "em" ? value * 16 : value;
          return pxValue < CSS_RULES.TEXT_READABILITY.minFontSize;
        }
        return false;
      });

      if (smallFonts.length === 0) {
        readabilityPoints += 30;
        console.log("✅ Readability: Alle Schriftgrößen ≥ 16px");
      } else {
        this.addIssue({
          type: "Zu kleine Schrift",
          file: path.basename(file.path),
          description: `${smallFonts.length} Schriftgrößen unter 16px gefunden`,
          severity: "IMPORTANT",
          fix: "Erhöhe Schriftgrößen auf mindestens 16px für bessere Lesbarkeit",
        });
      }

      // ✅ Check: Line Height
      const lineHeights =
        content.match(/line-height:\s*(\d+(?:\.\d+)?)/g) || [];
      const goodLineHeights = lineHeights.filter((lh) => {
        const value = parseFloat(lh.match(/(\d+(?:\.\d+)?)/)[1]);
        return value >= CSS_RULES.TEXT_READABILITY.optimalLineHeight;
      });

      if (goodLineHeights.length > 0) {
        readabilityPoints += 25;
        console.log("✅ Readability: Optimale Line-Height verwendet");
      }

      // ✅ Check: Spacing und Margins
      const hasGoodSpacing =
        content.includes("margin") && content.includes("padding");
      if (hasGoodSpacing) {
        readabilityPoints += 25;
        console.log("✅ Readability: Spacing-Properties definiert");
      }

      // ✅ Check: Responsive Typography
      const hasResponsiveType =
        content.includes("clamp(") ||
        (content.includes("font-size") && content.includes("@media"));
      if (hasResponsiveType) {
        readabilityPoints += 20;
        console.log("✅ Readability: Responsive Typography erkannt");
      }
    }

    this.readabilityScore = Math.min(readabilityPoints, maxPoints);
  }

  /**
   * 🎨 Color System Validation
   */
  async validateColorSystem() {
    console.log("🎨 Validiere Simon's 3-Farben-System...");

    let colorPoints = 0;
    const maxPoints = 100;

    for (const file of this.analyzedFiles) {
      const content = file.content;

      // ✅ Check: Simon's Farben verwendet
      const simonColorsUsed = Object.entries(SIMON_COLORS).filter(
        ([name, color]) =>
          content.includes(color.toLowerCase()) ||
          content.includes(color.toUpperCase())
      );

      if (simonColorsUsed.length >= 3) {
        colorPoints += 40;
        console.log(
          `✅ Color-System: ${simonColorsUsed.length}/4 Simon-Farben verwendet`
        );
      } else {
        this.addIssue({
          type: "Unvollständiges Farbsystem",
          file: path.basename(file.path),
          description: `Nur ${simonColorsUsed.length}/4 Simon-Farben gefunden`,
          severity: "IMPORTANT",
          fix: "Verwende vollständige 3-Farben-Palette: Asphaltschwarz, Analyse-Blau, Glut-Orange",
        });
      }

      // ✅ Check: Fremde Farben erkennen
      const allColors = content.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g) || [];
      const unknownColors = allColors.filter(
        (color) =>
          !Object.values(SIMON_COLORS).includes(color.toLowerCase()) &&
          !Object.values(SIMON_COLORS).includes(color.toUpperCase())
      );

      if (unknownColors.length === 0) {
        colorPoints += 30;
        console.log("✅ Color-System: Keine fremden Farben gefunden");
      } else {
        this.addIssue({
          type: "Fremde Farben",
          file: path.basename(file.path),
          description: `${
            unknownColors.length
          } nicht-autorisierte Farben: ${unknownColors.join(", ")}`,
          severity: "CRITICAL",
          fix: "Ersetze fremde Farben durch Simon's 3-Farben-Palette",
        });
      }

      // ✅ Check: CSS-Variablen für Farben
      const hasColorVariables =
        content.includes("--analyse-blau") ||
        content.includes("--asphaltschwarz") ||
        content.includes("--glut-orange");
      if (hasColorVariables) {
        colorPoints += 30;
        console.log("✅ Color-System: CSS-Variablen für Farben verwendet");
      }
    }

    this.colorSystemScore = Math.min(colorPoints, maxPoints);
  }

  /**
   * 📄 Erstelle CSS-spezifische Logdatei
   */
  async createCSSLogFile() {
    console.log("📄 Erstelle CSS-Checker Logdatei...");

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const logFileName = `simon-css-checker-v1-${timestamp}.md`;
    const logPath = path.join(CONFIG.LOG_DIR, logFileName);

    const logContent = this.generateCSSLogContent();

    try {
      await fs.mkdir(CONFIG.LOG_DIR, { recursive: true });
      await fs.writeFile(logPath, logContent, "utf-8");
      console.log(`📄 CSS-Log gespeichert: ${logFileName}`);
    } catch (error) {
      console.error(
        "❌ Fehler beim Speichern der CSS-Logdatei:",
        error.message
      );
    }
  }

  /**
   * 📝 Generiere CSS-Log Content
   */
  generateCSSLogContent() {
    const duration = Math.round((new Date() - this.startTime) / 1000);
    const overallScore = this.calculateOverallScore();

    return `# 🎨 SIMON'S CSS-CHECKER v1.0 REPORT

**Zeitstempel:** ${new Date().toLocaleString("de-DE")}
**Dauer:** ${duration}s
**Checker-Version:** CSS-Analyzer v1.0

---

## 🎯 CSS EXECUTIVE SUMMARY

**🎯 Gesamt CSS-Score:** ${overallScore}/100

### 📊 **DETAIL-SCORES**
- 📱 **Mobile-First Design:** ${this.mobileFirstScore}/100
- 🧭 **Navigation Analyse:** ${this.navigationScore}/100  
- 📖 **Text Readability:** ${this.readabilityScore}/100
- 🎨 **Color System:** ${this.colorSystemScore}/100

**🎯 Gefundene Issues:** ${this.issues.length}
- 🔴 **KRITISCH:** ${
      this.issues.filter((i) => i.severity === "CRITICAL").length
    }
- 🟡 **WICHTIG:** ${
      this.issues.filter((i) => i.severity === "IMPORTANT").length
    }

---

## 📄 ANALYSIERTE CSS-DATEIEN

${this.analyzedFiles
  .map(
    (file) => `### 📄 ${path.basename(file.path)}
- **📊 Zeilen:** ${file.lines}
- **💾 Größe:** ${Math.round(file.size / 1024)} KB
- **📍 Pfad:** ${file.path}
`
  )
  .join("\n")}

---

## 📱 MOBILE-FIRST DESIGN ANALYSE

**Score: ${this.mobileFirstScore}/100**

### ✅ **MOBILE-FIRST PRINZIPIEN**
- Basis-Styles für 320px+ entwickeln
- Media Queries mit min-width verwenden  
- Touch-friendly Button/Link Größen (44px+)
- Viewport-relative Einheiten nutzen

### 📊 **EMPFOHLENE BREAKPOINTS**
- **📱 Mobile:** 320px
- **📱 Mobile L:** 425px
- **📃 Tablet:** 768px
- **💻 Laptop:** 1024px
- **🖥️ Desktop:** 1440px

---

## 🧭 NAVIGATION ANALYSE

**Score: ${this.navigationScore}/100**

### ✅ **NAVIGATION STANDARDS**
- Touch-Target mindestens 44px
- Hover/Focus States definiert
- Mobile Navigation Pattern
- Accessibility Features

---

## 📖 TEXT READABILITY ANALYSE

**Score: ${this.readabilityScore}/100**

### ✅ **LESBARKEITS-STANDARDS**
- Minimale Schriftgröße: 16px
- Optimale Line-Height: 1.5+
- Ausreichende Abstände
- Responsive Typography

---

## 🎨 SIMON'S COLOR SYSTEM ANALYSE

**Score: ${this.colorSystemScore}/100**

### 🎯 **SIMON'S 3-FARBEN-PALETTE**
- **🖤 Asphaltschwarz:** ${SIMON_COLORS.ASPHALTSCHWARZ} (60% Dominanz)
- **🔵 Analyse-Blau:** ${SIMON_COLORS.ANALYSE_BLAU} (30% Sekundär)
- **🔵 Analyse-Blau Hell:** ${SIMON_COLORS.ANALYSE_BLAU_HELL} (Fließtext)
- **🟠 Glut-Orange:** ${SIMON_COLORS.GLUT_ORANGE} (10% Akzent)

---

## 🚨 CSS-SPEZIFISCHE ISSUES

${this.issues
  .map(
    (issue) => `### ${this.getSeverityIcon(issue.severity)} ${issue.type}: ${
      issue.file
    }
- **Problem:** ${issue.description}
- **Fix:** ${issue.fix}
- **Priorität:** ${issue.severity}

`
  )
  .join("")}

---

## 📈 CSS-OPTIMIERUNG NÄCHSTE SCHRITTE

### 🎯 **SOFORT-MASSNAHMEN**
1. Kritische CSS-Issues beheben (${
      this.issues.filter((i) => i.severity === "CRITICAL").length
    } Stück)
2. Mobile-First Media Queries implementieren
3. Touch-friendly Navigation größen

### 🔄 **NÄCHSTER CYCLE**
1. Responsive Typography optimieren
2. Color System vollständig implementieren
3. Accessibility Features erweitern

### 🌟 **KONTINUIERLICHE VERBESSERUNG**
1. CSS-Score auf 90+ steigern
2. Alle Breakpoints testen
3. Performance-optimierte Styles

---

*📄 Generiert von Simon's CSS-Checker v1.0 - ${new Date().toLocaleString(
      "de-DE"
    )}*`;
  }

  /**
   * 🔢 Berechne Gesamt CSS-Score
   */
  calculateOverallScore() {
    return Math.round(
      (this.mobileFirstScore +
        this.navigationScore +
        this.readabilityScore +
        this.colorSystemScore) /
        4
    );
  }

  /**
   * 📝 Füge CSS-Issue hinzu
   */
  addIssue(issue) {
    this.issues.push(issue);
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
}

// ✅ CSS-Checker starten
const cssChecker = new SimonCSSChecker();
cssChecker.run().catch((error) => {
  console.error("❌ CSS-Checker Fehler:", error);
  process.exit(1);
});
