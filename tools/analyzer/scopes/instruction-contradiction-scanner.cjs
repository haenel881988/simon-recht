#!/usr/bin/env node

/**
 * ⚡ INSTRUCTION-CONTRADICTION-SCANNER v2.0 (FOKUSSIERT)
 *
 * 🎯 ZWECK: Instructions-Widersprüche erkennen & auflösen
 * 🧠 ANTI-KONFUSION: Verhindert KI-Verwirrung durch klare Regeln
 * 🔄 SELBST-ÜBERWACHUNG: Prüft eigene Regelkonsistenz
 */

const fs = require("fs").promises;
const path = require("path");

class InstructionContradictionScanner {
  constructor() {
    this.results = {
      contradictions: [],
      ruleConflicts: [],
      priorityIssues: [],
      recommendations: [],
      statistics: {},
    };

    // Erweiterte Widerspruchs-Pattern für Instructions
    this.contradictionPatterns = [
      {
        id: "search_ban_vs_usage",
        pattern1: /ABSOLUT VERBOTEN.*search/gi,
        pattern2: /grep.search|file.search|semantic.search|nutze.*search/gi,
        description: "Search-Tools Verbot vs. Search-Nutzung",
        severity: "KRITISCH",
        scope: "tools",
      },
      {
        id: "tool_moratorium_vs_development",
        pattern1: /ZERO NEUE TOOLS|TOOL.*MORATORIUM/gi,
        pattern2: /entwickeln|erstellen|bauen.*tool|neue.*tool/gi,
        description: "Tool-Entwicklungsverbot vs. Tool-Bau-Anweisungen",
        severity: "KRITISCH",
        scope: "development",
      },
      {
        id: "layout_protection_vs_changes",
        pattern1: /NIEMALS.*LAYOUT.*ÄNDERN|LAYOUT.*SCHUTZ/gi,
        pattern2: /css.*ändern|style.*modifizier|layout.*anpass/gi,
        description: "Layout-Schutz vs. CSS-Änderungs-Erlaubnis",
        severity: "HOCH",
        scope: "css",
      },
      {
        id: "token_monitoring_vs_overflow",
        pattern1: /TOKEN.*MONITORING|Context.*Limit/gi,
        pattern2: /ignoriere.*token|ohne.*token.*check/gi,
        description: "Token-Überwachung vs. Token-Ignorierung",
        severity: "HOCH",
        scope: "core",
      },
      {
        id: "prokrastination_vs_tool_focus",
        pattern1: /ANTI.PROKRASTINATION|tools.*nur.*wenn.*blockierend/gi,
        pattern2: /sofort.*tool|tool.*entwickeln.*jetzt/gi,
        description: "Anti-Prokrastination vs. Sofortige Tool-Entwicklung",
        severity: "MITTEL",
        scope: "coaching",
      },
      {
        id: "backup_requirement_vs_direct_edit",
        pattern1: /NIEMALS.*ohne.*backup|backup.*zwingend/gi,
        pattern2: /direkt.*ändern|ohne.*sicherung/gi,
        description: "Backup-Pflicht vs. Direkte Bearbeitung",
        severity: "KRITISCH",
        scope: "safety",
      },
    ];

    // Instructions-Hierarchie für Konflikt-Auflösung
    this.ruleHierarchy = {
      SICHERHEIT: 10, // Layout-Schutz, Backup-Pflicht
      ANTI_CHAOS: 9, // Token-Limits, Widerspruchs-Vermeidung
      PROJEKT_FOKUS: 8, // Website-Launch Priorität
      COACHING: 7, // Anti-Prokrastination
      WORKFLOW: 6, // Tools, Prozesse
      CONTENT: 5, // SEO, Blog-Regeln
    };
  }

  /**
   * 🔍 HAUPT-WIDERSPRUCHS-ANALYSE
   */
  async scanContradictions(projectRoot) {
    console.log("⚡ CONTRADICTION-SCANNER: Starte Instructions-Analyse...");

    // 1. Instructions-Dateien laden
    const instructionFiles = await this.loadInstructionFiles(projectRoot);

    // 2. Widersprüche in einzelnen Dateien
    for (const file of instructionFiles) {
      await this.scanFileContradictions(file);
    }

    // 3. Cross-File Widersprüche (zwischen Modulen)
    await this.scanCrossFileContradictions(instructionFiles);

    // 4. SELBST-ANALYSE
    await this.performSelfContradictionCheck(projectRoot);

    return this.generateContradictionReport();
  }

  /**
   * 📚 INSTRUCTIONS-DATEIEN LADEN
   */
  async loadInstructionFiles(projectRoot) {
    const files = [];

    // Haupt-Instructions
    const mainInstructions = path.join(
      projectRoot,
      ".github",
      "copilot-instructions.md"
    );
    if (await this.fileExists(mainInstructions)) {
      files.push({
        path: mainInstructions,
        type: "main",
        content: await fs.readFile(mainInstructions, "utf-8"),
      });
    }

    // Modulare Instructions
    const instructionsDir = path.join(projectRoot, ".github", "instructions");
    try {
      await this.loadInstructionModules(instructionsDir, files);
    } catch (error) {
      // Instructions-Module noch nicht erstellt
    }

    // TODO-Dateien (enthalten auch Regeln)
    const todoFiles = [
      path.join(projectRoot, "docs", "todos", "todos.md"),
      path.join(projectRoot, "docs", "todos", "verhaltensprobleme.md"),
    ];

    for (const todoFile of todoFiles) {
      if (await this.fileExists(todoFile)) {
        files.push({
          path: todoFile,
          type: "todos",
          content: await fs.readFile(todoFile, "utf-8"),
        });
      }
    }

    return files;
  }

  /**
   * 📁 INSTRUCTION-MODULE LADEN
   */
  async loadInstructionModules(instructionsDir, files) {
    const scopes = ["core", "development", "content", "project", "coaching"];

    for (const scope of scopes) {
      const scopeDir = path.join(instructionsDir, scope);
      try {
        const scopeFiles = await fs.readdir(scopeDir);

        for (const file of scopeFiles) {
          if (file.endsWith(".md")) {
            const filePath = path.join(scopeDir, file);
            files.push({
              path: filePath,
              type: `module_${scope}`,
              content: await fs.readFile(filePath, "utf-8"),
              scope,
            });
          }
        }
      } catch (error) {
        // Scope-Verzeichnis existiert nicht
      }
    }
  }

  /**
   * 📄 EINZELDATEI-WIDERSPRUCHS-SCAN
   */
  async scanFileContradictions(file) {
    const relativePath = file.path.replace(process.cwd(), "");

    for (const pattern of this.contradictionPatterns) {
      const matches1 = [...file.content.matchAll(pattern.pattern1)];
      const matches2 = [...file.content.matchAll(pattern.pattern2)];

      if (matches1.length > 0 && matches2.length > 0) {
        this.results.contradictions.push({
          id: pattern.id,
          file: relativePath,
          type: "same_file",
          description: pattern.description,
          severity: pattern.severity,
          scope: pattern.scope,
          evidence: {
            pattern1_matches: matches1.length,
            pattern2_matches: matches2.length,
            first_conflict: {
              rule1: matches1[0][0].substring(0, 100),
              rule2: matches2[0][0].substring(0, 100),
            },
          },
        });
      }
    }
  }

  /**
   * 🔗 CROSS-FILE WIDERSPRUCHS-SCAN
   */
  async scanCrossFileContradictions(files) {
    for (let i = 0; i < files.length; i++) {
      for (let j = i + 1; j < files.length; j++) {
        await this.compareTwoFiles(files[i], files[j]);
      }
    }
  }

  /**
   * 📊 ZWEI-DATEIEN-VERGLEICH
   */
  async compareTwoFiles(file1, file2) {
    for (const pattern of this.contradictionPatterns) {
      const matches1 = [...file1.content.matchAll(pattern.pattern1)];
      const matches2 = [...file2.content.matchAll(pattern.pattern2)];

      if (matches1.length > 0 && matches2.length > 0) {
        this.results.ruleConflicts.push({
          id: pattern.id,
          type: "cross_file",
          description: pattern.description,
          severity: pattern.severity,
          scope: pattern.scope,
          files: {
            file1: file1.path.replace(process.cwd(), ""),
            file2: file2.path.replace(process.cwd(), ""),
            file1_type: file1.type,
            file2_type: file2.type,
          },
          evidence: {
            rule1_file: file1.path.replace(process.cwd(), ""),
            rule2_file: file2.path.replace(process.cwd(), ""),
            conflict_preview: {
              rule1: matches1[0][0].substring(0, 100),
              rule2: matches2[0][0].substring(0, 100),
            },
          },
        });
      }
    }
  }

  /**
   * 🔄 SELBST-WIDERSPRUCHS-CHECK
   */
  async performSelfContradictionCheck(projectRoot) {
    console.log("🔄 SELBST-CHECK: Scanner prüft eigene Regelkonsistenz...");

    const selfPath = __filename;
    const selfContent = await fs.readFile(selfPath, "utf-8");

    const selfFile = {
      path: selfPath,
      type: "self_analyzer",
      content: selfContent,
    };

    await this.scanFileContradictions(selfFile);

    // Andere Analyzer-Module prüfen
    const analyzerDir = path.join(projectRoot, "tools", "analyzer", "core");
    try {
      const coreFiles = await fs.readdir(analyzerDir);

      for (const file of coreFiles) {
        if (
          file.endsWith(".cjs") &&
          file !== "instruction-contradiction-scanner.cjs"
        ) {
          const filePath = path.join(analyzerDir, file);
          const content = await fs.readFile(filePath, "utf-8");

          const analyzerFile = {
            path: filePath,
            type: "analyzer_module",
            content,
          };

          await this.scanFileContradictions(analyzerFile);
        }
      }
    } catch (error) {
      // Analyzer-Verzeichnis Problem
    }
  }

  /**
   * 📁 DATEI-EXISTENZ PRÜFEN
   */
  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 📊 WIDERSPRUCHS-REPORT GENERIERUNG
   */
  generateContradictionReport() {
    const totalContradictions =
      this.results.contradictions.length + this.results.ruleConflicts.length;

    this.results.statistics = {
      totalContradictions,
      sameFileContradictions: this.results.contradictions.length,
      crossFileContradictions: this.results.ruleConflicts.length,
      criticalIssues: this.countBySeverity("KRITISCH"),
      highIssues: this.countBySeverity("HOCH"),
      mediumIssues: this.countBySeverity("MITTEL"),
    };

    // Empfehlungen basierend auf Schweregrad
    this.generateContradictionRecommendations();

    return {
      summary: {
        status:
          totalContradictions === 0
            ? "KEINE_WIDERSPRÜCHE"
            : "WIDERSPRÜCHE_GEFUNDEN",
        ...this.results.statistics,
      },
      details: this.results,
      priorityActions: this.generatePriorityActions(),
    };
  }

  /**
   * 🔢 SCHWEREGRAD-ZÄHLUNG
   */
  countBySeverity(severity) {
    const sameFile = this.results.contradictions.filter(
      (c) => c.severity === severity
    ).length;
    const crossFile = this.results.ruleConflicts.filter(
      (c) => c.severity === severity
    ).length;
    return sameFile + crossFile;
  }

  /**
   * 💡 WIDERSPRUCHS-EMPFEHLUNGEN
   */
  generateContradictionRecommendations() {
    if (this.results.statistics.criticalIssues > 0) {
      this.results.recommendations.push({
        priority: "SOFORT",
        action: "Kritische Instruction-Widersprüche auflösen",
        count: this.results.statistics.criticalIssues,
        impact: "KI-Konfusion und Layout-Zerstörungs-Risiko",
      });
    }

    if (this.results.statistics.crossFileContradictions > 0) {
      this.results.recommendations.push({
        priority: "HOCH",
        action: "Modul-übergreifende Regel-Konflikte harmonisieren",
        count: this.results.statistics.crossFileContradictions,
        impact: "Unvorhersagbares KI-Verhalten zwischen Scopes",
      });
    }
  }

  /**
   * 🎯 PRIORITÄTS-AKTIONEN
   */
  generatePriorityActions() {
    const actions = [];

    // Kritische Widersprüche zuerst
    const critical = [
      ...this.results.contradictions,
      ...this.results.ruleConflicts,
    ]
      .filter((c) => c.severity === "KRITISCH")
      .slice(0, 3); // Top 3

    critical.forEach((contradiction, index) => {
      actions.push({
        rank: index + 1,
        action: `KRITISCH: ${contradiction.description} auflösen`,
        location:
          contradiction.file ||
          `${contradiction.files?.file1} vs ${contradiction.files?.file2}`,
        scope: contradiction.scope,
        evidence:
          contradiction.evidence?.first_conflict ||
          contradiction.evidence?.conflict_preview,
      });
    });

    return actions;
  }
}

// Export für Modul-Verwendung
module.exports = InstructionContradictionScanner;

// CLI-Ausführung
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();

  const scanner = new InstructionContradictionScanner();
  scanner
    .scanContradictions(projectRoot)
    .then((report) => {
      console.log("\n⚡ INSTRUCTION-WIDERSPRUCHS-ANALYSE ABGESCHLOSSEN:\n");
      console.log(JSON.stringify(report, null, 2));
    })
    .catch((error) => {
      console.error("❌ Widerspruchs-Analyse Fehler:", error);
      process.exit(1);
    });
}
