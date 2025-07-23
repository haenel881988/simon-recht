#!/usr/bin/env node

/**
 * 🚀 SIMON'S REVOLUTIONÄRER MULTI-SCOPE BUILD-CHECKER v2.0
 *
 * 🎯 SCOPE-BASIERTE ARCHITEKTUR:
 * ✅ CSS-Scope: Design & Kontrast-Spezialist
 * ✅ SEO-Scope: Content & Authentizitäts-Spezialist
 * ✅ A11Y-Scope: Accessibility-Experte (Coming Soon)
 * ✅ ESLint-Scope: Code-Qualitäts-Inspektor (Coming Soon)
 * ✅ Media-Scope: Bilder & Videos-Validator (Coming Soon)
 *
 * 🚨 FEATURES:
 * ✅ Modulare Scope-Ausführung
 * ✅ Parallele Scope-Verarbeitung
 * ✅ Scope-spezifische Health-Scores
 * ✅ Automatische KI-Prompt-Generation
 * ✅ Detaillierte Metriken pro Scope
 */

const BaseChecker = require("./core/base-checker.cjs");
const CSSScope = require("./scopes/css-scope.cjs");
const SEOScope = require("./scopes/seo-scope.cjs");
const path = require("path");
const fs = require("fs").promises;

class MultiScopeBuildChecker extends BaseChecker {
  constructor(projectRoot) {
    super(projectRoot);
    this.availableScopes = new Map();
    this.registerScopes();
  }

  /**
   * 🎯 SCOPE-REGISTRIERUNG
   */
  registerScopes() {
    // Aktive Scopes registrieren
    this.availableScopes.set("css", () => new CSSScope(this.projectRoot));
    this.availableScopes.set("seo", () => new SEOScope(this.projectRoot));

    // Zukünftige Scopes (Coming Soon)
    // this.availableScopes.set('a11y', () => new A11YScope(this.projectRoot));
    // this.availableScopes.set('eslint', () => new ESLintScope(this.projectRoot));
    // this.availableScopes.set('media', () => new MediaScope(this.projectRoot));
  }

  /**
   * 🚀 HAUPT-AUSFÜHRUNG
   */
  async run() {
    console.log(
      "🚀 Simon's Revolutionärer Multi-Scope Build-Checker v2.0 gestartet..."
    );
    console.log(`🎯 Projekt-Root: ${this.projectRoot}`);
    console.log(
      `📊 Registrierte Scopes: ${Array.from(this.availableScopes.keys()).join(
        ", "
      )}`
    );

    try {
      // 1️⃣ ALLE SCOPES PARALLEL AUSFÜHREN
      const scopePromises = Array.from(this.availableScopes.entries()).map(
        ([scopeName, scopeFactory]) => {
          const scopeInstance = scopeFactory();
          return this.runScope(scopeName, scopeInstance);
        }
      );

      // Warten auf alle Scopes
      await Promise.all(scopePromises);

      // 2️⃣ FINALE BERICHTSGENERIERUNG
      const finalReport = this.generateReport();

      // 3️⃣ LOG-DATEI ERSTELLEN
      await this.saveDetailedReport(finalReport);

      // 4️⃣ KONSOLEN-AUSGABE
      this.printScopeSummary();

      console.log(`\n✅ Multi-Scope Build-Check abgeschlossen!`);
      console.log(
        `🎯 Gesamt-Health-Score: ${finalReport.summary.healthScore}/100`
      );

      return finalReport;
    } catch (error) {
      console.error(
        "❌ KRITISCHER FEHLER im Multi-Scope-Checker:",
        error.message
      );
      console.error(error.stack);

      return {
        success: false,
        error: error.message,
        summary: { healthScore: 0, totalIssues: 1, criticalIssues: 1 },
      };
    }
  }

  /**
   * 📊 SCOPE-ZUSAMMENFASSUNG AUSGEBEN
   */
  printScopeSummary() {
    console.log("\n📊 ═══════════════════════════════════════════════════════");
    console.log("🎯 SCOPE-SPEZIFISCHE ERGEBNISSE:");
    console.log("📊 ═══════════════════════════════════════════════════════");

    Object.entries(this.results.scopes).forEach(([scopeName, scope]) => {
      const statusIcon = this.getScopeStatusIcon(scope);
      const healthBar = this.createHealthBar(scope.healthScore);

      console.log(`${statusIcon} ${scopeName.toUpperCase()}-SCOPE:`);
      console.log(`   📊 Health Score: ${scope.healthScore}/100 ${healthBar}`);
      console.log(
        `   🚨 Issues: ${scope.issues.length} (${
          scope.issues.filter((i) => i.severity === "critical").length
        } kritisch)`
      );

      // Top-Issues anzeigen (max 3)
      const topIssues = scope.issues
        .filter((i) => i.severity === "critical" || i.severity === "important")
        .slice(0, 3);

      if (topIssues.length > 0) {
        console.log(`   🔍 Top-Issues:`);
        topIssues.forEach((issue, index) => {
          const severityIcon = issue.severity === "critical" ? "🚨" : "⚠️";
          console.log(`      ${severityIcon} ${issue.description}`);
        });
      }

      // KI-Prompts anzeigen (max 2)
      if (scope.kiPrompts && scope.kiPrompts.length > 0) {
        console.log(`   🤖 KI-Prompts: ${scope.kiPrompts.length} verfügbar`);
        scope.kiPrompts.slice(0, 2).forEach((prompt, index) => {
          console.log(`      💡 ${prompt}`);
        });
      }

      console.log("");
    });
  }

  /**
   * 🎨 SCOPE-STATUS-ICON
   */
  getScopeStatusIcon(scope) {
    if (scope.status === "error") return "❌";
    if (scope.status === "critical") return "🚨";
    if (scope.healthScore >= 80) return "✅";
    if (scope.healthScore >= 60) return "⚠️";
    return "🔴";
  }

  /**
   * 📊 HEALTH-BAR VISUALISIERUNG
   */
  createHealthBar(score) {
    const bars = Math.round(score / 10);
    const filled = "█".repeat(bars);
    const empty = "░".repeat(10 - bars);
    return `[${filled}${empty}]`;
  }

  /**
   * 💾 DETAILLIERTER BERICHT SPEICHERN
   */
  async saveDetailedReport(report) {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const logFileName = `multi-scope-build-report-${timestamp}.md`;
      const logPath = path.join(
        this.projectRoot,
        "tools/build_check/logfiles",
        logFileName
      );

      // Markdown-Report generieren
      const markdownReport = this.generateMarkdownReport(report);

      await fs.writeFile(logPath, markdownReport, "utf-8");
      console.log(`📄 Detaillierter Bericht gespeichert: ${logFileName}`);
    } catch (error) {
      console.error("❌ Fehler beim Speichern des Berichts:", error.message);
    }
  }

  /**
   * 📝 MARKDOWN-BERICHT GENERIEREN
   */
  generateMarkdownReport(report) {
    const timestamp = new Date().toLocaleString("de-DE");

    let markdown = `# 🚀 Multi-Scope Build-Checker Bericht\n\n`;
    markdown += `**Generiert:** ${timestamp}\n`;
    markdown += `**Projekt:** simon-recht\n`;
    markdown += `**Gesamt-Health-Score:** ${report.summary.healthScore}/100\n\n`;

    // Executive Summary
    markdown += `## 📊 Executive Summary\n\n`;
    markdown += `- **Ausführungszeit:** ${report.summary.executionTime}ms\n`;
    markdown += `- **Scopes getestet:** ${Object.keys(report.scopes).length}\n`;
    markdown += `- **Gesamt-Issues:** ${report.summary.totalIssues}\n`;
    markdown += `- **Kritische Issues:** ${report.summary.criticalIssues}\n`;
    markdown += `- **Wichtige Issues:** ${report.summary.importantIssues}\n`;
    markdown += `- **Optimierungen:** ${report.summary.optimizationIssues}\n\n`;

    // Scope-Details
    Object.entries(report.scopes).forEach(([scopeName, scope]) => {
      markdown += `## 🎯 ${scopeName.toUpperCase()}-Scope\n\n`;
      markdown += `**Health Score:** ${scope.healthScore}/100\n`;
      markdown += `**Status:** ${scope.status}\n`;
      markdown += `**Ausführungszeit:** ${scope.executionTime}ms\n`;
      markdown += `**Issues:** ${scope.issues.length}\n\n`;

      if (scope.metrics && Object.keys(scope.metrics).length > 0) {
        markdown += `### 📈 Metriken\n\n`;
        Object.entries(scope.metrics).forEach(([key, value]) => {
          markdown += `- **${key}:** ${value}\n`;
        });
        markdown += `\n`;
      }

      if (scope.issues.length > 0) {
        markdown += `### 🚨 Issues\n\n`;
        scope.issues.forEach((issue, index) => {
          const severityIcon =
            issue.severity === "critical"
              ? "🚨"
              : issue.severity === "important"
              ? "⚠️"
              : "💡";
          markdown += `${
            index + 1
          }. ${severityIcon} **${issue.severity.toUpperCase()}:** ${
            issue.description
          }\n`;
          markdown += `   - **Datei:** ${issue.file}\n`;
          if (issue.location)
            markdown += `   - **Position:** ${issue.location}\n`;
          markdown += `\n`;
        });
      }

      if (scope.kiPrompts && scope.kiPrompts.length > 0) {
        markdown += `### 🤖 KI-Optimierungs-Prompts\n\n`;
        scope.kiPrompts.forEach((prompt, index) => {
          markdown += `${index + 1}. ${prompt}\n\n`;
        });
      }

      markdown += `---\n\n`;
    });

    // Footer
    markdown += `## 🔗 Nächste Schritte\n\n`;
    markdown += `1. Kritische Issues priorisiert beheben\n`;
    markdown += `2. KI-Prompts für automatisierte Optimierung nutzen\n`;
    markdown += `3. Health-Score über 80/100 anstreben\n`;
    markdown += `4. Scope-spezifische Verbesserungen implementieren\n\n`;
    markdown += `*Generiert von Simon's Multi-Scope Build-Checker v2.0*\n`;

    return markdown;
  }
}

// 🎯 MAIN EXECUTION
async function main() {
  // Korrigiere den Projekt-Root - gehe 2 Ebenen höher vom tools/build_check
  const projectRoot = path.resolve(__dirname, "../..");
  const checker = new MultiScopeBuildChecker(projectRoot);

  try {
    const results = await checker.run();

    // Exit-Code basierend auf Health-Score
    const healthScore = results.summary.healthScore;
    if (healthScore >= 80) {
      process.exit(0); // Excellent
    } else if (healthScore >= 60) {
      process.exit(0); // Good enough - don't block build
    } else if (results.summary.criticalIssues > 0) {
      console.log(
        "⚠️  Kritische Issues gefunden, aber Build wird nicht blockiert"
      );
      process.exit(0); // Don't block deployment
    } else {
      process.exit(0); // Always allow build to continue
    }
  } catch (error) {
    console.error("💥 UNERWARTETER FEHLER:", error.message);
    process.exit(0); // Don't block build even on error
  }
}

// Direkte Ausführung
if (require.main === module) {
  main();
}

module.exports = MultiScopeBuildChecker;
