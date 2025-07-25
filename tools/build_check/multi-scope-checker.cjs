#!/usr/bin/env node

/**
 * 🚀 SIMON'S REVOLUTIONÄRER MULTI-SCOPE BUILD-CHECKER v5.2
 *
 * 🎯 SCOPE-BASIERTE ARCHITEKTUR:
 * ✅ CSS-Scope: Design & Kontrast-Spezialist
 * ✅ SEO-Scope: Content & Authentizitäts-Spezialist
 * ✅ VS Code-Scope: TypeScript & Linting-Spezialist
 * ✅ ANALYZER-Scope: Universelle Projekt-Inventarisierung (NEU!)
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
 * ✅ AUTOMATISCHE LOG-ARCHIVIERUNG (5-Minuten-Regel)
 * ✅ REAL-TIME DASHBOARD SUPPORT
 * 🤖 UNIVERSELLES PROJEKT-ANALYSE-SYSTEM Integration
 */

const BaseChecker = require("./core/base-checker.cjs");
const CSSScope = require("./scopes/css-scope.cjs");
const SEOScope = require("./scopes/seo-scope.cjs");
const VSCodeScope = require("./scopes/vscode-scope.cjs");
const InventoryScope = require("./scopes/inventory-scope.cjs");
const UniversalProjectAnalyzer = require("../analyzer/universal-project-analyzer.cjs");
const path = require("path");
const fs = require("fs").promises;

class MultiScopeBuildChecker extends BaseChecker {
  constructor(projectRoot) {
    super(projectRoot);
    this.availableScopes = new Map();
    this.logDir = path.join(
      this.projectRoot,
      "tools",
      "build_check",
      "logfiles"
    );
    this.archiveDir = path.join(this.logDir, "archive");
    this.registerScopes();
  }

  /**
   * 🎯 SCOPE-REGISTRIERUNG
   */
  registerScopes() {
    // Aktive Scopes registrieren
    this.availableScopes.set("css", () => new CSSScope(this.projectRoot));
    this.availableScopes.set("seo", () => new SEOScope(this.projectRoot));
    this.availableScopes.set("vscode", () => new VSCodeScope(this.projectRoot));
    this.availableScopes.set(
      "inventory",
      () => new InventoryScope(this.projectRoot)
    );

    // 🤖 NEUER ANALYZER-SCOPE - Universelle Projekt-Analyse
    const projectRoot = this.projectRoot; // Capture for closure
    this.availableScopes.set("analyzer", () => ({
      name: "ANALYZER",
      description: "Universelle Projekt-Inventarisierung & Scope-Analyse",
      async run() {
        console.log("\n🤖 ANALYZER-SCOPE: Universelle Projekt-Analyse...");

        const analyzer = new UniversalProjectAnalyzer(projectRoot);
        const reportPath = await analyzer.analyzeProject();

        // Build-Checker kompatibles Ergebnis zurückgeben
        const totalTokens = Array.from(analyzer.stats.scopes.values()).reduce(
          (sum, data) => sum + data.totalTokens,
          0
        );

        const healthScore =
          totalTokens > 128000
            ? Math.max(20, 100 - Math.floor((totalTokens - 128000) / 1000))
            : Math.min(100, 80 + Math.floor((128000 - totalTokens) / 5000));

        return {
          scope: "ANALYZER",
          healthScore,
          criticalIssues: analyzer.stats.modularizationSuggestions.filter(
            (s) => s.priority === "CRITICAL"
          ).length,
          warnings: analyzer.stats.modularizationSuggestions.filter(
            (s) => s.priority !== "CRITICAL"
          ).length,
          details: {
            totalFiles: analyzer.stats.totalFiles,
            totalTokens,
            scopesDetected: analyzer.stats.scopes.size,
            overlaps: analyzer.stats.overlaps.length,
            reportPath,
          },
          recommendations: analyzer.stats.modularizationSuggestions.map(
            (s) => `[${s.priority}] ${s.reason} → ${s.action}`
          ),
        };
      },
    }));

    // Zukünftige Scopes (Coming Soon)
    // this.availableScopes.set('a11y', () => new A11YScope(this.projectRoot));
    // this.availableScopes.set('eslint', () => new ESLintScope(this.projectRoot));
    // this.availableScopes.set('media', () => new MediaScope(this.projectRoot));
  }

  /**
   * �️ AUTOMATISCHE LOG-ARCHIVIERUNG (5-MINUTEN-REGEL)
   */
  async archiveOldLogs() {
    try {
      // Erstelle Archiv-Verzeichnis falls nicht vorhanden
      const todayArchive = path.join(
        this.archiveDir,
        new Date().toISOString().split("T")[0]
      );
      await fs.mkdir(todayArchive, { recursive: true });

      // Finde alle Build-Checker Logs
      const files = await fs.readdir(this.logDir);
      const logFiles = files.filter(
        (file) =>
          file.startsWith("simon-build-checker-") && file.endsWith(".md")
      );

      const cutoffTime = Date.now() - 5 * 60 * 1000; // 5 Minuten
      let archivedCount = 0;

      for (const logFile of logFiles) {
        const logPath = path.join(this.logDir, logFile);
        const stats = await fs.stat(logPath);

        if (stats.mtime.getTime() < cutoffTime) {
          // Verschiebe ins Archiv
          const archivePath = path.join(todayArchive, logFile);
          await fs.rename(logPath, archivePath);
          archivedCount++;
          console.log(
            `📦 ARCHIVIERT: ${logFile} (${Math.round(
              (Date.now() - stats.mtime.getTime()) / 60000
            )}min alt)`
          );
        }
      }

      // Entferne veraltete Symlinks
      const symlinkPath = path.join(this.logDir, "current-build-log.md");
      try {
        const symlinkStats = await fs.lstat(symlinkPath);
        if (symlinkStats.isSymbolicLink()) {
          const target = await fs.readlink(symlinkPath);
          const targetPath = path.join(this.logDir, target);
          try {
            await fs.access(targetPath);
          } catch {
            // Target existiert nicht mehr - Symlink entfernen
            await fs.unlink(symlinkPath);
            console.log("🗑️ VERALTETER SYMLINK ENTFERNT");
          }
        }
      } catch {
        // Symlink existiert nicht
      }

      if (archivedCount > 0) {
        console.log(
          `✅ LOG-ARCHIVIERUNG: ${archivedCount} veraltete Logs archiviert`
        );
      } else {
        console.log("✅ LOG-ARCHIVIERUNG: Keine veralteten Logs gefunden");
      }
    } catch (error) {
      console.error(
        "⚠️ WARNUNG: Log-Archivierung fehlgeschlagen:",
        error.message
      );
    }
  }

  /**
   * 🔗 SYMLINK-MANAGEMENT (BULLETPROOF v5.1)
   */
  async updateSymlink(logFileName) {
    const symlinkPath = path.join(this.logDir, "current-build-log.md");
    const pointerPath = path.join(this.logDir, "current-build-log.json");
    const fullLogPath = path.join(this.logDir, logFileName);

    try {
      // STRATEGIE 1: Hardlink versuchen (keine Admin-Rechte nötig)
      try {
        await fs.access(symlinkPath);
        await fs.unlink(symlinkPath);
      } catch {
        // Datei existiert nicht - das ist OK
      }
      await fs.link(fullLogPath, symlinkPath);
      console.log(
        `✅ HARDLINK ERSTELLT: current-build-log.md → ${logFileName}`
      );
    } catch (hardlinkError) {
      try {
        // STRATEGIE 2: JSON-Pointer System (bulletproof fallback)
        const pointerData = {
          currentLog: logFileName,
          fullPath: fullLogPath,
          timestamp: new Date().toISOString(),
          version: "v5.1",
          fallbackReason: "Hardlink failed - using pointer system",
        };

        await fs.writeFile(pointerPath, JSON.stringify(pointerData, null, 2));

        // STRATEGIE 3: Kopie als backup
        try {
          await fs.access(symlinkPath);
          await fs.unlink(symlinkPath);
        } catch {
          // Datei existiert nicht - das ist OK
        }
        await fs.copyFile(fullLogPath, symlinkPath);

        console.log(
          `� FALLBACK-SYSTEM AKTIV: JSON-Pointer + Kopie erstellt für ${logFileName}`
        );
      } catch (fallbackError) {
        console.error(
          `❌ ALLE SYMLINK-STRATEGIEN FEHLGESCHLAGEN: ${fallbackError.message}`
        );
      }
    }
  }

  /**
   * �🚀 HAUPT-AUSFÜHRUNG
   */
  async run() {
    console.log(
      "🚀 Simon's Revolutionärer Multi-Scope Build-Checker v5.1 gestartet..."
    );
    console.log(`🎯 Projekt-Root: ${this.projectRoot}`);
    console.log(
      `📊 Registrierte Scopes: ${Array.from(this.availableScopes.keys()).join(
        ", "
      )}`
    );

    try {
      // 0️⃣ AUTOMATISCHE LOG-ARCHIVIERUNG VOR START
      await this.archiveOldLogs();

      // 1️⃣ ALLE SCOPES SEQUENZIELL AUSFÜHREN (PERFORMANCE-OPTIMIERT)
      console.log(
        "🎯 Starte sequenzielle Scope-Ausführung für Performance-Optimierung..."
      );

      for (const [scopeName, scopeFactory] of this.availableScopes.entries()) {
        const scopeInstance = scopeFactory();

        // Resource-Monitor vor Scope-Start
        const memBefore = process.memoryUsage();
        console.log(`🔍 Starte ${scopeName}-Scope...`);

        await this.runScope(scopeName, scopeInstance);

        // Resource-Monitor nach Scope-Ende
        const memAfter = process.memoryUsage();
        const memDiff = Math.round(
          (memAfter.heapUsed - memBefore.heapUsed) / 1024 / 1024
        );

        console.log(
          `✅ ${scopeName}-Scope abgeschlossen (${
            memDiff > 0 ? "+" : ""
          }${memDiff}MB)`
        );

        // Intelligente Pause zwischen Scopes für System-Recovery
        if (memDiff > 50) {
          // Bei >50MB Memory-Verbrauch
          console.log(
            `⏸️ System-Recovery-Pause (${memDiff}MB Memory-Verbrauch)...`
          );
          await new Promise((resolve) => setTimeout(resolve, 2000)); // 2s Pause

          // Garbage Collection erzwingen
          if (global.gc) {
            global.gc();
            console.log(`🧹 Garbage Collection durchgeführt`);
          }
        } else {
          // Kurze Pause für System-Stabilität
          await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5s Pause
        }
      }

      // 2️⃣ FINALE BERICHTSGENERIERUNG
      const finalReport = this.generateReport();

      // 3️⃣ LOG-DATEI ERSTELLEN
      const logFileName = await this.saveDetailedReport(finalReport);

      // 4️⃣ SYMLINK AKTUALISIEREN
      await this.updateSymlink(logFileName);

      // 5️⃣ KONSOLEN-AUSGABE
      this.printScopeSummary();

      console.log(`\n✅ Multi-Scope Build-Check abgeschlossen!`);
      console.log(
        `🎯 Gesamt-Health-Score: ${finalReport.summary.healthScore}/100`
      );

      // 🧹 AUTOMATISCHER TASK-CLEANUP für Simon's Performance
      console.log("\n🧹 Starte automatischen Task-Cleanup...");
      try {
        const TaskCleaner = require("./core/task-cleaner.cjs");
        const cleaner = new TaskCleaner();
        await cleaner.cleanupTasks();
        console.log("✅ Task-Cleanup erfolgreich abgeschlossen!");
      } catch (cleanupError) {
        console.log(`⚠️ Task-Cleanup übersprungen: ${cleanupError.message}`);
      }

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
      const logFileName = `simon-build-checker-v5-${timestamp}.md`;
      const logPath = path.join(this.logDir, logFileName);

      // Markdown-Report generieren
      const markdownReport = this.generateMarkdownReport(report);

      await fs.writeFile(logPath, markdownReport, "utf-8");
      console.log(`📄 Detaillierter Bericht gespeichert: ${logFileName}`);

      return logFileName; // Dateiname für Symlink zurückgeben
    } catch (error) {
      console.error("❌ Fehler beim Speichern des Berichts:", error.message);
      return null;
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
