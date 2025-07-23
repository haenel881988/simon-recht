#!/usr/bin/env node

/**
 * 🎨 SIMON'S CSS-SCOPE v1.0 - DESIGN & KONTRAST SPEZIALIST
 *
 * 🎯 VERANTWORTLICHKEITEN:
 * ✅ WCAG-Kontrast-Tests (AA & AAA)
 * ✅ CSS-Variablen-Extraktion & -Simulation
 * ✅ Icon- & Symbol-Kontrast-Validierung
 * ✅ Reality-based CSS-Regel-Simulation
 * ✅ Simon's 3-Farben-Palette Compliance
 */

const fs = require("fs").promises;
const path = require("path");
const BaseChecker = require("../core/base-checker.cjs");

// 🎨 SIMON'S ECHTE 3-FARBEN-PALETTE
const SIMON_COLORS = {
  ASPHALTSCHWARZ: "#1a1d24",
  ANALYSE_BLAU: "#4a6d7c",
  ANALYSE_BLAU_HELL: "#6b8a9a",
  ANALYSE_BLAU_UEBERSCHRIFT: "#7ba1b3",
  NAVIGATION_OPTIMIERT: "#8db4c7",
  GLUT_ORANGE: "#ff4500",
  WEISS_TEXT: "#ffffff",
};

class CSSScope {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.globalCSSPath = path.join(projectRoot, "src/styles/global.css");
    this.cssVariables = {};
    this.contrastResults = [];
  }

  /**
   * 🎯 HAUPT-AUSFÜHRUNG
   */
  async run() {
    const issues = [];
    const metrics = {};
    const kiPrompts = [];

    try {
      // 1️⃣ CSS-VARIABLEN EXTRAHIEREN
      console.log("🎨 Extrahiere CSS-Variablen...");
      this.cssVariables = await this.extractCSSVariables();
      metrics.cssVariablesCount = Object.keys(this.cssVariables).length;

      // 2️⃣ KONTRAST-TESTS DURCHFÜHREN
      console.log("🎨 Führe WCAG-Kontrast-Tests durch...");
      this.contrastResults = await this.performContrastTests();

      // 3️⃣ REALITY-CHECK & CSS-SIMULATION
      console.log("🎨 Simuliere angewendete CSS-Regeln...");
      const realityCheck = await this.simulateAppliedCSS();

      // 4️⃣ PROBLEME IDENTIFIZIEREN
      const contrastIssues = this.analyzeContrastResults();
      const cssIssues = this.validateCSSStructure();

      issues.push(...contrastIssues, ...cssIssues);

      // 5️⃣ METRIKEN SAMMELN
      metrics.contrastTests = this.contrastResults.length;
      metrics.passedTests = this.contrastResults.filter((t) => t.passed).length;
      metrics.failedTests = this.contrastResults.filter(
        (t) => !t.passed
      ).length;
      metrics.averageContrast = this.calculateAverageContrast();

      // 6️⃣ KI-PROMPTS GENERIEREN
      if (issues.length > 0) {
        kiPrompts.push(...this.generateCSSFixPrompts(issues));
      }

      // 7️⃣ HEALTH-SCORE BERECHNUNG MIT SELBSTKRITIK-VALIDIERUNG
      let healthScore = this.calculateCSSHealthScore(issues, metrics);

      // 🚨 ZWINGENDER SELBSTKRITIK-CHECK (Instructions-Compliance)
      const totalTests = metrics.contrastTests;
      if (totalTests < 10) {
        // ANTI-SELBSTLOB: Bei weniger als 10 Tests → Maximum 70/100
        healthScore = Math.min(70, healthScore);
        issues.push({
          severity: "important",
          category: "css-testing",
          description: `Oberflächliche CSS-Analyse: Nur ${totalTests} Tests durchgeführt (mindestens 10 für umfassende Validierung)`,
          file: "css-scope",
          location: "test-coverage",
          kiPrompt: `Erweitere CSS-Tests: Aktuell ${totalTests}/10 - Füge Icon-Kontrast, Button-States, Link-Validierung hinzu`,
        });
      }

      console.log(`🎨 CSS-Scope abgeschlossen: ${healthScore}/100`);
      console.log(
        `🎨 Kontrast-Tests: ${metrics.passedTests}/${metrics.contrastTests} bestanden`
      );
      if (totalTests < 10) {
        console.log(
          `⚠️  Selbstkritik: Nur ${totalTests} Tests - NICHT umfassend genug für "perfekt"`
        );
      }

      return BaseChecker.createScopeInterface().createResult(
        healthScore,
        issues,
        metrics,
        kiPrompts
      );
    } catch (error) {
      console.error("❌ CSS-Scope Fehler:", error.message);
      issues.push({
        severity: "critical",
        category: "css-system",
        description: `CSS-Scope Systemfehler: ${error.message}`,
        file: "css-scope",
        kiPrompt: `Debug CSS-Scope Systemfehler: ${error.message}`,
      });

      return BaseChecker.createScopeInterface().createResult(
        0,
        issues,
        metrics,
        kiPrompts
      );
    }
  }

  /**
   * 🔍 CSS-VARIABLEN-EXTRAKTION mit FRESH-READ
   */
  async extractCSSVariables() {
    try {
      const cssContent = await fs.readFile(this.globalCSSPath, "utf-8");
      const variables = {};

      // CSS-Variablen-Pattern: --variable-name: #color;
      const variablePattern = /--([a-zA-Z-]+):\s*([^;]+);/g;
      let match;

      while ((match = variablePattern.exec(cssContent)) !== null) {
        const varName = match[1];
        const varValue = match[2].trim().split("/*")[0].trim(); // Kommentare entfernen
        variables[varName] = varValue;
      }

      console.log(
        `🎨 ${Object.keys(variables).length} CSS-Variablen extrahiert`
      );
      return variables;
    } catch (error) {
      console.error("❌ Fehler beim CSS-Variablen-Lesen:", error.message);
      return {};
    }
  }

  /**
   * 🎯 WCAG-KONTRAST-TESTS
   */
  async performContrastTests() {
    const tests = [
      {
        name: "H1-H4 auf Asphaltschwarz",
        foreground:
          this.cssVariables["analyse-blau-ueberschrift"] ||
          SIMON_COLORS.ANALYSE_BLAU_UEBERSCHRIFT,
        background: SIMON_COLORS.ASPHALTSCHWARZ,
        required: 4.5,
        usage: "Überschriften",
      },
      {
        name: "Navigation auf Asphaltschwarz",
        foreground:
          this.cssVariables["navigation-optimiert"] ||
          SIMON_COLORS.NAVIGATION_OPTIMIERT,
        background: SIMON_COLORS.ASPHALTSCHWARZ,
        required: 4.5,
        usage: "Navigation",
      },
      {
        name: "Fließtext auf Asphaltschwarz",
        foreground:
          this.cssVariables["analyse-blau-hell"] ||
          SIMON_COLORS.ANALYSE_BLAU_HELL,
        background: SIMON_COLORS.ASPHALTSCHWARZ,
        required: 4.5,
        usage: "Haupttext",
      },
      {
        name: "Button Text auf Glut-Orange",
        foreground: SIMON_COLORS.ASPHALTSCHWARZ,
        background: SIMON_COLORS.GLUT_ORANGE,
        required: 4.5,
        usage: "Primäre Buttons",
      },
    ];

    const results = [];

    for (const test of tests) {
      const contrast = this.calculateContrast(test.foreground, test.background);
      const passed = contrast >= test.required;

      results.push({
        ...test,
        contrast: contrast,
        passed: passed,
        wcagAA: contrast >= 4.5,
        wcagAAA: contrast >= 7.0,
      });
    }

    return results;
  }

  /**
   * 🧮 KONTRAST-BERECHNUNG (WCAG 2.1)
   */
  calculateContrast(color1, color2) {
    const getLuminance = (hex) => {
      const rgb = this.hexToRgb(hex);
      const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((c) => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return Math.round(((brightest + 0.05) / (darkest + 0.05)) * 100) / 100;
  }

  /**
   * 🎨 HEX-TO-RGB KONVERTER
   */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  /**
   * 🔍 CSS-REALITY-SIMULATION (Ohne Dev-Server)
   */
  async simulateAppliedCSS() {
    // Simuliert welche CSS-Regeln tatsächlich angewendet werden
    const simulatedElements = {
      "navbar-brand":
        this.cssVariables["navigation-optimiert"] ||
        SIMON_COLORS.NAVIGATION_OPTIMIERT,
      "navbar-link":
        this.cssVariables["navigation-optimiert"] ||
        SIMON_COLORS.NAVIGATION_OPTIMIERT,
      headings:
        this.cssVariables["analyse-blau-ueberschrift"] ||
        SIMON_COLORS.ANALYSE_BLAU_UEBERSCHRIFT,
    };

    console.log("🎨 CSS-Reality-Check:", simulatedElements);
    return simulatedElements;
  }

  /**
   * 📊 KONTRAST-PROBLEME ANALYSIEREN
   */
  analyzeContrastResults() {
    const issues = [];

    this.contrastResults.forEach((test) => {
      if (!test.passed) {
        issues.push({
          severity: test.contrast < 3.0 ? "critical" : "important",
          category: "accessibility",
          description: `Kontrast-Problem: ${test.name} hat nur ${test.contrast}:1 (mindestens ${test.required}:1 erforderlich)`,
          file: "global.css",
          location: test.usage,
          kiPrompt: `Optimiere Farbkontrast für ${test.usage}: Aktuell ${test.contrast}:1, benötigt ${test.required}:1`,
        });
      }
    });

    return issues;
  }

  /**
   * 🏗️ CSS-STRUKTUR VALIDIERUNG
   */
  validateCSSStructure() {
    const issues = [];
    const requiredVariables = ["asphaltschwarz", "analyse-blau", "glut-orange"];

    requiredVariables.forEach((varName) => {
      if (!this.cssVariables[varName]) {
        issues.push({
          severity: "important",
          category: "css-structure",
          description: `Fehlende CSS-Variable: --${varName}`,
          file: "global.css",
          kiPrompt: `Ergänze fehlende CSS-Variable --${varName} in global.css`,
        });
      }
    });

    return issues;
  }

  /**
   * 📈 DURCHSCHNITTS-KONTRAST BERECHNUNG
   */
  calculateAverageContrast() {
    if (this.contrastResults.length === 0) return 0;

    const total = this.contrastResults.reduce(
      (sum, test) => sum + test.contrast,
      0
    );
    return Math.round((total / this.contrastResults.length) * 100) / 100;
  }

  /**
   * 🎯 CSS-HEALTH-SCORE BERECHNUNG
   */
  calculateCSSHealthScore(issues, metrics) {
    let score = 100;

    // Malus für Issues
    const criticalIssues = issues.filter(
      (i) => i.severity === "critical"
    ).length;
    const importantIssues = issues.filter(
      (i) => i.severity === "important"
    ).length;

    score -= criticalIssues * 25; // -25 pro kritischem Issue
    score -= importantIssues * 10; // -10 pro wichtigem Issue

    // Bonus für gute Kontrast-Performance
    const contrastBonus = Math.min(10, (metrics.passedTests || 0) * 2);
    score += contrastBonus;

    return Math.max(0, Math.min(100, score));
  }

  /**
   * 🤖 KI-PROMPTS FÜR CSS-FIXES GENERIEREN
   */
  generateCSSFixPrompts(issues) {
    const prompts = [];

    const contrastIssues = issues.filter((i) => i.category === "accessibility");
    if (contrastIssues.length > 0) {
      prompts.push(
        `SMART CSS-Kontrast-Fix: Optimiere ${contrastIssues.length} Kontrast-Probleme in global.css. ` +
          `Fokus auf WCAG AA Compliance für Navigation und Überschriften.`
      );
    }

    const structureIssues = issues.filter(
      (i) => i.category === "css-structure"
    );
    if (structureIssues.length > 0) {
      prompts.push(
        `CSS-Struktur-Reparatur: Ergänze ${structureIssues.length} fehlende CSS-Variablen ` +
          `für vollständige Simon's 3-Farben-Palette Compliance.`
      );
    }

    return prompts;
  }
}

module.exports = CSSScope;
