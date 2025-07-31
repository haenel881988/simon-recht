#!/usr/bin/env node
// Logfile-Handling: Immer nur die letzten 8 Logdateien behalten, ältere löschen
function cleanupOldLogs(
  logDir,
  pattern = /^projekt-analyse-.*\.md$|^widerspruchs-report-.*\.md$/i,
  keep = 8
) {
  const fs = require("fs");
  const path = require("path");
  if (!fs.existsSync(logDir)) return;
  const files = fs
    .readdirSync(logDir)
    .filter((f) => pattern.test(f))
    .map((f) => ({
      name: f,
      time: fs.statSync(path.join(logDir, f)).mtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time);
  if (files.length > keep) {
    files.slice(keep).forEach((f) => {
      try {
        fs.unlinkSync(path.join(logDir, f.name));
      } catch (e) {
        /* ignore */
      }
    });
  }
}

// Vor Analyse Logfiles bereinigen
cleanupOldLogs(
  __dirname,
  /^projekt-analyse-.*\.md$|^widerspruchs-report-.*\.md$/i,
  8
);

/**
 * 🤖 UNIVERSELLES PROJEKT-ANALYSE-SYSTEM v1.0
 *
 * REVOLUTIONÄRES KI-ASSISTENZ-TOOL für simon-recht
 *
 * FEATURES:
 * - Vollautomatische Projekt-Inventarisierung
 * - Intelligente Bereichs-Erkennung & Überlappungs-Analyse
 * - Token-optimierte Scope-Trennung
 * - Modularisierungs-Empfehlungen
 * - KI-Blindheits-Prevention durch Smart-Chunking
 *
 * ZIEL: KI arbeitet IMMER mit fokussierten Bereichen statt Vollprojekt-Chaos
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UniversalProjectAnalyzer {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot;
    this.stats = {
      totalFiles: 0,
      totalLines: 0,
      totalWords: 0,
      totalChars: 0,
      scopes: new Map(),
      overlaps: [],
      modularizationSuggestions: [],
    };

    // SCOPE-DEFINITION basierend auf simon-recht Projekt
    this.scopePatterns = {
      CONTENT: [/src\/content\//, /\.md$/, /blog/i, /rechtliche/i, /beratung/i],
      CSS_DESIGN: [
        /\.css$/,
        /\.scss$/,
        /styles?\//,
        /design/i,
        /layout/i,
        /global\.css/,
      ],
      ASTRO_COMPONENTS: [
        /\.astro$/,
        /src\/layouts\//,
        /src\/pages\//,
        /src\/components\//,
      ],
      INSTRUCTIONS: [
        /instructions/i,
        /copilot/i,
        /\.github\//,
        /README/i,
        /anrede/i,
        /agent\.md/,
      ],
      TODOS_MANAGEMENT: [/todos?\//, /todo/i, /issues?/i, /verhalten/i],
      BUILD_SYSTEM: [
        /tools?\//,
        /build/i,
        /check/i,
        /package\.json/,
        /astro\.config/,
        /tailwind\.config/,
      ],
      DOCUMENTATION: [/docs?\//, /README/i, /\.md$/, /documentation/i],
      ASSETS: [
        /public\//,
        /assets?\//,
        /images?\//,
        /videos?\//,
        /\.(jpg|jpeg|png|gif|svg|mp4|webm)$/i,
      ],
      CONFIG: [/\.json$/, /\.js$/, /\.mjs$/, /\.ts$/, /config/i, /settings?/i],
    };

    // ÜBERLAPPUNGS-REGELN (CSS-Kontrast + SEO etc.)
    this.overlapRules = [
      {
        scopes: ["CSS_DESIGN", "CONTENT"],
        reason: "CSS-Kontrast-Optimierung betrifft SEO-Rankings",
        priority: "HIGH",
        allowCombined: true,
      },
      {
        scopes: ["ASTRO_COMPONENTS", "CSS_DESIGN"],
        reason: "Layout-Komponenten benötigen Styling-Koordination",
        priority: "MEDIUM",
        allowCombined: true,
      },
      {
        scopes: ["BUILD_SYSTEM", "CSS_DESIGN"],
        reason: "Build-Checker validiert CSS-Architektur",
        priority: "MEDIUM",
        allowCombined: false,
      },
    ];
  }

  /**
   * 🎯 HAUPTANALYSE: Vollständige Projekt-Inventarisierung
   */
  async analyzeProject() {
    console.log("🤖 UNIVERSELLES PROJEKT-ANALYSE-SYSTEM v1.0");
    console.log("=".repeat(60));
    console.log(`📁 Projekt-Root: ${this.projectRoot}`);
    console.log(`⏰ Start-Zeit: ${new Date().toLocaleString("de-DE")}`);
    console.log("");

    const startTime = Date.now();

    // Phase 1: Datei-Inventarisierung
    console.log("📊 PHASE 1: Vollständige Datei-Inventarisierung...");
    await this.scanDirectory(this.projectRoot);

    // Phase 2: Scope-Erkennung
    console.log("\n🔍 PHASE 2: Intelligente Bereichs-Erkennung...");
    this.categorizeByScopes();

    // Phase 3: Überlappungs-Analyse
    console.log("\n🔗 PHASE 3: Scope-Überlappungs-Analyse...");
    this.analyzeOverlaps();

    // Phase 4: Modularisierungs-Empfehlungen
    console.log("\n🏗️ PHASE 4: Modularisierungs-Advisor...");
    this.generateModularizationSuggestions();

    // Phase 5: VERIFICATION (NEU!)
    console.log("\n🔍 PHASE 5: Analysis-Verification...");
    const verificationResults = await this.performAnalysisVerification();

    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;

    // Ergebnis-Report generieren mit Verification
    await this.generateReport(duration, verificationResults);
  }

  /**
   * 📁 Rekursives Verzeichnis-Scanning
   */
  async scanDirectory(dirPath, relativePath = "") {
    try {
      const items = fs.readdirSync(dirPath);

      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relativeItemPath = path
          .join(relativePath, item)
          .replace(/\\/g, "/");

        // Ignoriere System-Dateien und Build-Artefakte
        if (this.shouldIgnore(item)) continue;

        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          await this.scanDirectory(fullPath, relativeItemPath);
        } else {
          await this.analyzeFile(fullPath, relativeItemPath);
        }
      }
    } catch (error) {
      console.warn(`⚠️ Fehler beim Scannen von ${dirPath}: ${error.message}`);
    }
  }

  /**
   * 📄 Einzeldatei-Analyse
   */
  async analyzeFile(fullPath, relativePath) {
    try {
      const content = fs.readFileSync(fullPath, "utf-8");
      const lines = content.split("\n").length;
      const words = content
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
      const chars = content.length;

      this.stats.totalFiles++;
      this.stats.totalLines += lines;
      this.stats.totalWords += words;
      this.stats.totalChars += chars;

      // Scope-Zuordnung bestimmen
      const scopes = this.identifyFileScopes(relativePath, content);

      // Datei-Metadaten speichern
      const fileInfo = {
        path: relativePath,
        size: chars,
        lines,
        words,
        scopes,
        tokenEstimate: Math.ceil(words * 1.3), // Grobe Token-Schätzung
        lastModified: fs.statSync(fullPath).mtime,
      };

      // Zu entsprechenden Scopes hinzufügen
      scopes.forEach((scope) => {
        if (!this.stats.scopes.has(scope)) {
          this.stats.scopes.set(scope, {
            files: [],
            totalLines: 0,
            totalWords: 0,
            totalTokens: 0,
          });
        }

        const scopeData = this.stats.scopes.get(scope);
        scopeData.files.push(fileInfo);
        scopeData.totalLines += lines;
        scopeData.totalWords += words;
        scopeData.totalTokens += fileInfo.tokenEstimate;
      });
    } catch (error) {
      console.warn(
        `⚠️ Fehler beim Analysieren von ${relativePath}: ${error.message}`
      );
    }
  }

  /**
   * 🏷️ Scope-Identifikation für Datei
   */
  identifyFileScopes(filePath, content) {
    const scopes = [];

    for (const [scopeName, patterns] of Object.entries(this.scopePatterns)) {
      for (const pattern of patterns) {
        if (pattern.test(filePath) || pattern.test(content)) {
          scopes.push(scopeName);
          break; // Ein Match pro Scope reicht
        }
      }
    }

    // Falls keine Scope-Zuordnung → UNCLASSIFIED
    if (scopes.length === 0) {
      scopes.push("UNCLASSIFIED");
    }

    return scopes;
  }

  /**
   * 📊 Scope-Kategorisierung zusammenfassen
   */
  categorizeByScopes() {
    console.log("\n📋 SCOPE-VERTEILUNG:");

    const sortedScopes = Array.from(this.stats.scopes.entries()).sort(
      (a, b) => b[1].totalTokens - a[1].totalTokens
    );

    sortedScopes.forEach(([scope, data]) => {
      const fileCount = data.files.length;
      const avgTokensPerFile = Math.round(data.totalTokens / fileCount);

      console.log(
        `  ${scope}: ${fileCount} Dateien, ${data.totalTokens} Tokens (Ø ${avgTokensPerFile})`
      );
    });
  }

  /**
   * 🔗 Überlappungs-Analyse
   */
  analyzeOverlaps() {
    // Multi-Scope-Dateien finden
    const multiScopeFiles = [];

    for (const [scope, data] of this.stats.scopes.entries()) {
      data.files.forEach((file) => {
        if (file.scopes.length > 1) {
          multiScopeFiles.push(file);
        }
      });
    }

    console.log(
      `\n🔗 ÜBERLAPPUNGEN GEFUNDEN: ${multiScopeFiles.length} Multi-Scope-Dateien`
    );

    // Gruppiere nach Scope-Kombinationen
    const overlapMap = new Map();

    multiScopeFiles.forEach((file) => {
      const scopeKey = file.scopes.sort().join("+");
      if (!overlapMap.has(scopeKey)) {
        overlapMap.set(scopeKey, []);
      }
      overlapMap.get(scopeKey).push(file);
    });

    // Analysiere kritische Überlappungen
    for (const [scopeCombo, files] of overlapMap.entries()) {
      const scopes = scopeCombo.split("+");
      const rule = this.overlapRules.find((r) =>
        r.scopes.every((s) => scopes.includes(s))
      );

      if (rule) {
        console.log(
          `  ⚠️ ${scopeCombo}: ${files.length} Dateien (${rule.priority} Priority)`
        );
        console.log(`     Grund: ${rule.reason}`);
        console.log(
          `     Kombiniert erlaubt: ${rule.allowCombined ? "✅" : "❌"}`
        );

        this.stats.overlaps.push({
          scopes,
          files,
          rule,
          recommendation: rule.allowCombined
            ? "ALLOW_COMBINED"
            : "SEPARATE_ANALYSIS",
        });
      }
    }
  }

  /**
   * 🏗️ Modularisierungs-Empfehlungen
   */
  generateModularizationSuggestions() {
    const suggestions = [];

    // 1. Große Scopes aufteilen
    for (const [scope, data] of this.stats.scopes.entries()) {
      if (data.totalTokens > 10000) {
        // >10k Tokens = zu groß für KI-Kontext
        suggestions.push({
          type: "SPLIT_SCOPE",
          scope,
          reason: `Scope ${scope} hat ${data.totalTokens} Tokens (>10k Limit)`,
          action: `Aufteilen in Sub-Scopes oder separate Verzeichnisse`,
          priority: "HIGH",
        });
      }
    }

    // 2. UNCLASSIFIED-Dateien kategorisieren
    if (this.stats.scopes.has("UNCLASSIFIED")) {
      const unclassified = this.stats.scopes.get("UNCLASSIFIED");
      if (unclassified.files.length > 5) {
        suggestions.push({
          type: "CATEGORIZE_FILES",
          scope: "UNCLASSIFIED",
          reason: `${unclassified.files.length} Dateien ohne Scope-Zuordnung`,
          action: `Neue Scope-Pattern definieren oder Dateien reorganisieren`,
          priority: "MEDIUM",
        });
      }
    }

    // 3. Token-optimierte Verzeichnis-Struktur
    const totalTokens = Array.from(this.stats.scopes.values()).reduce(
      (sum, data) => sum + data.totalTokens,
      0
    );

    if (totalTokens > 50000) {
      // >50k = Projekt zu groß für normale KI-Analyse
      suggestions.push({
        type: "IMPLEMENT_CHUNKING",
        scope: "PROJECT_WIDE",
        reason: `Gesamtprojekt hat ${totalTokens} Tokens (>50k GitHub Copilot Limit)`,
        action: `Zwingend Scope-basierte Analyse implementieren`,
        priority: "CRITICAL",
      });
    }

    this.stats.modularizationSuggestions = suggestions;

    console.log("\n🏗️ MODULARISIERUNGS-EMPFEHLUNGEN:");
    suggestions.forEach((suggestion, index) => {
      console.log(
        `  ${index + 1}. [${suggestion.priority}] ${suggestion.reason}`
      );
      console.log(`     → ${suggestion.action}`);
    });
  }

  /**
   * 🔍 PHASE 5: Analysis-Verification + Conflict-Detection
   */
  async performAnalysisVerification() {
    try {
      // NEUE: Widerspruchs-Scanner Integration
      const ContradictionScanner = require("./contradiction-scanner.cjs");
      const SmartExceptionHandler = require("./modules/smart-exception-handler.cjs");

      const scanner = new ContradictionScanner(this.projectRoot);
      const contradictionResults = await scanner.scanProject();

      // Bei kritischen Widersprüchen → Smart Exception werfen
      if (contradictionResults.contradictions.length > 0) {
        const exceptionHandler = new SmartExceptionHandler();
        const exception = exceptionHandler.throwConflictException(
          contradictionResults.contradictions
        );

        console.log(
          "\n🚨 ANALYSE GESTOPPT - REGEL-KONFLIKTE MÜSSEN GELÖST WERDEN!"
        );
        return {
          summary: {
            validationStatus: "CONFLICT_DETECTED",
            overallConfidence: 0,
            conflicts: contradictionResults.contradictions,
            exception: exception,
          },
        };
      }

      // Original Verification (wenn keine Konflikte)
      const AnalysisVerifier = require("./core/analysis-verifier.cjs");
      const verifier = new AnalysisVerifier();

      const currentResults = {
        tokens: {
          summary: {
            totalTokens: this.stats.totalWords * 1.3,
            totalFiles: this.stats.totalFiles,
          },
        },
        scopes: Object.fromEntries(this.stats.scopes),
        overlaps: this.stats.overlaps,
        modularization: this.stats.modularizationSuggestions,
      };

      const verificationReport = await verifier.verifyAnalysisResults(
        this.projectRoot,
        currentResults
      );

      console.log(
        `✅ Verification-Status: ${verificationReport.summary.validationStatus}`
      );
      console.log(
        `🎯 Confidence-Score: ${verificationReport.summary.overallConfidence}%`
      );

      return verificationReport;
    } catch (error) {
      console.log(`⚠️ Verification fehlgeschlagen: ${error.message}`);
      return {
        summary: {
          validationStatus: "FAILED",
          overallConfidence: 0,
          error: error.message,
        },
      };
    }
  }

  /**
   * �📄 Vollständigen Report generieren
   */
  async generateReport(duration, verificationResults = null) {
    const timestamp = new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/[:.]/g, "-");
    const reportPath = path.join(
      this.projectRoot,
      "tools",
      "analyzer",
      `projekt-analyse-${timestamp}.md`
    );

    // Report-Verzeichnis erstellen falls nicht existent
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    const report = this.generateMarkdownReport(duration, verificationResults);

    fs.writeFileSync(reportPath, report, "utf-8");

    console.log("\n" + "=".repeat(60));
    console.log(`📊 ANALYSE ABGESCHLOSSEN! (${duration.toFixed(2)}s)`);
    console.log(`📄 Report gespeichert: ${reportPath}`);

    // Verification-Status anzeigen
    if (verificationResults) {
      console.log(
        `🔍 Verification: ${verificationResults.summary.validationStatus} (${verificationResults.summary.overallConfidence}%)`
      );
    }
    console.log("");

    // Kurze Zusammenfassung ausgeben
    this.printSummary();

    return reportPath;
  }

  /**
   * 📝 Markdown-Report generieren
   */
  generateMarkdownReport(duration, verificationResults = null) {
    const timestamp = new Date().toLocaleString("de-DE");

    let report = `# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** ${timestamp}  
**Analysedauer:** ${duration.toFixed(2)} Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | ${this.stats.totalFiles.toLocaleString()} |
| **Zeilen gesamt** | ${this.stats.totalLines.toLocaleString()} |
| **Wörter gesamt** | ${this.stats.totalWords.toLocaleString()} |
| **Zeichen gesamt** | ${this.stats.totalChars.toLocaleString()} |
| **Geschätzte Tokens** | ${Array.from(this.stats.scopes.values())
      .reduce((sum, data) => sum + data.totalTokens, 0)
      .toLocaleString()} |

---

## 🎯 SCOPE-VERTEILUNG

`;

    // Scope-Tabelle
    const sortedScopes = Array.from(this.stats.scopes.entries()).sort(
      (a, b) => b[1].totalTokens - a[1].totalTokens
    );

    report += `| Scope | Dateien | Zeilen | Tokens | Avg/Datei |\n`;
    report += `|-------|---------|--------|--------|-----------|\n`;

    sortedScopes.forEach(([scope, data]) => {
      const avgTokens = Math.round(data.totalTokens / data.files.length);
      report += `| **${scope}** | ${
        data.files.length
      } | ${data.totalLines.toLocaleString()} | ${data.totalTokens.toLocaleString()} | ${avgTokens} |\n`;
    });

    // Überlappungen
    if (this.stats.overlaps.length > 0) {
      report += `\n---\n\n## 🔗 SCOPE-ÜBERLAPPUNGEN\n\n`;

      this.stats.overlaps.forEach((overlap, index) => {
        report += `### ${index + 1}. ${overlap.scopes.join(" + ")}\n\n`;
        report += `- **Dateien:** ${overlap.files.length}\n`;
        report += `- **Grund:** ${overlap.rule.reason}\n`;
        report += `- **Priorität:** ${overlap.rule.priority}\n`;
        report += `- **Kombiniert erlaubt:** ${
          overlap.rule.allowCombined ? "✅ Ja" : "❌ Nein"
        }\n`;
        report += `- **Empfehlung:** ${overlap.recommendation}\n\n`;

        if (overlap.files.length <= 10) {
          report += `**Betroffene Dateien:**\n`;
          overlap.files.forEach((file) => {
            report += `- \`${file.path}\` (${file.tokenEstimate} Tokens)\n`;
          });
        } else {
          report += `**Zu viele Dateien für Auflistung** (${overlap.files.length} Dateien)\n`;
        }
        report += `\n`;
      });
    }

    // VERIFICATION-SEKTION (NEU!)
    if (verificationResults) {
      report += `\n---\n\n## 🔍 ANALYSIS-VERIFICATION REPORT\n\n`;

      report += `### 📊 VERIFICATION-ZUSAMMENFASSUNG\n\n`;
      report += `| Metrik | Wert |\n`;
      report += `|--------|------|\n`;
      report += `| **Status** | ${verificationResults.summary.validationStatus} |\n`;
      report += `| **Confidence-Score** | ${verificationResults.summary.overallConfidence}% |\n`;
      report += `| **Verification-Levels** | ${
        verificationResults.summary.levelsCompleted?.join(", ") || "N/A"
      } |\n`;
      report += `| **Major Issues** | ${
        verificationResults.summary.majorIssues || 0
      } |\n`;

      if (verificationResults.summary.validationStatus === "VERIFIED") {
        report += `\n✅ **ANALYSIS VERIFIED** - Ergebnisse wurden durch Multi-Level-Checks bestätigt.\n`;
      } else if (
        verificationResults.summary.validationStatus === "QUESTIONABLE"
      ) {
        report += `\n⚠️ **QUESTIONABLE RESULTS** - Manuelle Überprüfung empfohlen.\n`;
      } else {
        report += `\n❌ **UNRELIABLE RESULTS** - Analyse sollte wiederholt werden.\n`;
      }

      if (verificationResults.recommendations?.length > 0) {
        report += `\n### 💡 VERIFICATION-EMPFEHLUNGEN\n\n`;
        verificationResults.recommendations.forEach((rec, index) => {
          report += `${index + 1}. **[${rec.priority}]** ${rec.message}\n`;
        });
      }
    }

    // Modularisierungs-Empfehlungen
    if (this.stats.modularizationSuggestions.length > 0) {
      report += `\n---\n\n## 🏗️ MODULARISIERUNGS-EMPFEHLUNGEN\n\n`;

      this.stats.modularizationSuggestions.forEach((suggestion, index) => {
        const priorityEmoji = {
          CRITICAL: "🚨",
          HIGH: "⚠️",
          MEDIUM: "🔔",
          LOW: "ℹ️",
        }[suggestion.priority];

        report += `### ${index + 1}. ${priorityEmoji} ${suggestion.reason}\n\n`;
        report += `- **Typ:** ${suggestion.type}\n`;
        report += `- **Scope:** ${suggestion.scope}\n`;
        report += `- **Aktion:** ${suggestion.action}\n`;
        report += `- **Priorität:** ${suggestion.priority}\n\n`;
      });
    }

    // KI-Arbeitsempfehlungen
    report += `\n---\n\n## 🤖 KI-ARBEITSEMPFEHLUNGEN\n\n`;

    const totalTokens = Array.from(this.stats.scopes.values()).reduce(
      (sum, data) => sum + data.totalTokens,
      0
    );

    if (totalTokens > 128000) {
      report += `⚠️ **KRITISCH:** Projekt überschreitet VS Code Insiders Limit (128k Tokens)\n\n`;
      report += `**Empfohlene Arbeitsweise:**\n`;
      report += `1. **Zwingend Scope-basierte Analyse** - Niemals Vollprojekt laden\n`;
      report += `2. **Token-Budget pro Chat:** Max. 20k Tokens für sichere Arbeit\n`;
      report += `3. **Neue Chat-Sessions** für jeden Scope\n`;
      report += `4. **Kritische Überlappungen** (CSS+SEO) nur bei Bedarf kombinieren\n\n`;
    } else if (totalTokens > 64000) {
      report += `⚠️ **WARNUNG:** Projekt überschreitet Standard VS Code Limit (64k Tokens)\n\n`;
      report += `**Empfohlene Arbeitsweise:**\n`;
      report += `1. **VS Code Insiders verwenden** für 128k Token-Vorteil\n`;
      report += `2. **Scope-fokussierte Arbeit** bevorzugen\n`;
      report += `3. **Chat-Session-Hygiene** beachten\n\n`;
    } else {
      report += `✅ **OK:** Projekt passt in Standard-Kontextfenster\n\n`;
      report += `**Arbeitsweise:** Normaler Modus möglich, Scope-Trennung trotzdem empfohlen\n\n`;
    }

    // Top Token-intensive Dateien
    const allFiles = [];
    for (const [, data] of this.stats.scopes.entries()) {
      allFiles.push(...data.files);
    }

    const topFiles = allFiles
      .sort((a, b) => b.tokenEstimate - a.tokenEstimate)
      .slice(0, 10);

    report += `### 📋 TOP TOKEN-INTENSIVE DATEIEN\n\n`;
    report += `| Datei | Tokens | Zeilen | Scopes |\n`;
    report += `|-------|--------|--------|---------|\n`;

    topFiles.forEach((file) => {
      report += `| \`${file.path}\` | ${file.tokenEstimate} | ${
        file.lines
      } | ${file.scopes.join(", ")} |\n`;
    });

    report += `\n---\n\n*Generiert von Universelles Projekt-Analyse-System v1.0*\n`;

    return report;
  }

  /**
   * 📊 Kurze Konsolen-Zusammenfassung
   */
  printSummary() {
    const totalTokens = Array.from(this.stats.scopes.values()).reduce(
      (sum, data) => sum + data.totalTokens,
      0
    );

    console.log("🎯 ANALYSE-ZUSAMMENFASSUNG:");
    console.log(`   📁 ${this.stats.totalFiles} Dateien analysiert`);
    console.log(`   🔢 ${totalTokens.toLocaleString()} Tokens geschätzt`);
    console.log(`   🎯 ${this.stats.scopes.size} Bereiche identifiziert`);
    console.log(`   🔗 ${this.stats.overlaps.length} Überlappungen gefunden`);
    console.log(
      `   🏗️ ${this.stats.modularizationSuggestions.length} Verbesserungsvorschläge`
    );

    if (totalTokens > 128000) {
      console.log("   🚨 KRITISCH: VS Code Insiders Limit überschritten!");
    } else if (totalTokens > 64000) {
      console.log("   ⚠️ WARNUNG: Standard VS Code Limit überschritten");
    } else {
      console.log("   ✅ OK: Projekt passt in Kontextfenster");
    }
  }

  /**
   * 🚫 Dateien/Verzeichnisse ignorieren
   * ERWEITERTE TABU-LISTE für simon-recht Projekt
   */
  shouldIgnore(name) {
    const ignorePatterns = [
      /^\.git/,
      /^\.vscode/,
      /^\.astro/, // 🚨 SIMON'S TABU: Astro Build-Cache
      /^node_modules/,
      /^\.next/,
      /^dist/,
      /^build/,
      /^\.cache/, // 🚨 CACHE-VERZEICHNISSE
      /logfiles?/i, // Build-Checker-Logs
      /widerspruchs-report-.*\.md$/i, // Analyzer-Reports
      /projekt-analyse-.*\.md$/i, // Analyzer-Reports
      /analyse-.*\.md$/i, // Analyzer-Reports
      /output/i,
      /archiv/i,
      /\.log$/,
      /\.tmp$/,
      /\.bak$/,
      /\.cache$/,
      /^\.DS_Store$/,
      /^Thumbs\.db$/,
      /package-lock\.json$/, // 🚨 LOCK-FILES
      /yarn\.lock$/,
      // Exclude all non-source files in tools/analyzer except .js/.cjs/.json/.md (README)
      /^tools\/analyzer\/((?!\.js$|\.cjs$|\.json$|README\.md$).)*$/i,
    ];

    return ignorePatterns.some((pattern) => pattern.test(name));
  }
}

// CLI-Interface
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();
  const analyzer = new UniversalProjectAnalyzer(projectRoot);

  analyzer.analyzeProject().catch((error) => {
    console.error("❌ Analyse-Fehler:", error);
    process.exit(1);
  });
}

module.exports = UniversalProjectAnalyzer;
