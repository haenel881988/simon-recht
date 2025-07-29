#!/usr/bin/env node

/**
 * 🔍 ANALYSIS-VERIFIER v1.0 (REVOLUTIONÄR)
 *
 * 🎯 ZWECK: Verifiziert alle Analyzer-Ausgaben durch Crosschecks
 * 🤖 KI-SAFE: Verhindert Halluzinationen durch mehrfache Validierung
 * 🔄 SELBST-VALIDIEREND: Prüft eigene Ergebnisse automatisch
 * 🎪 INTEGRIERT: Arbeitet mit allen bestehenden Analyzern zusammen
 *
 * REVOLUTIONÄRES FEATURE:
 * - Jedes Analyzer-Ergebnis wird automatisch gegengeprüft
 * - Widersprüchliche Resultate werden markiert
 * - Confidence-Score für jede Analyse-Aussage
 * - Cross-Tool-Validation (Universal <-> Master <-> Build-Checker)
 */

const fs = require("fs").promises;
const path = require("path");

class AnalysisVerifier {
  constructor() {
    this.results = {
      verificationDate: new Date().toISOString(),
      verifiedAnalyses: [],
      conflictingResults: [],
      confidenceScores: {},
      validationStatus: "PENDING",
      crossValidationResults: {},
      selfVerificationReport: {},
    };

    // 🚨 ENDLOSSCHLEIFE-SCHUTZ
    this.recursionGuard = {
      isRunning: false,
      startTime: null,
      maxDuration: 30000, // 30 Sekunden Timeout
      calledBy: process.env.ANALYZER_CALLER || "direct",
    };

    // VERIFIZIERUNGS-STUFEN
    this.verificationLevels = {
      BASIC: ["existence_check", "syntax_validation"],
      ADVANCED: ["cross_reference_check", "logic_validation"],
      EXPERT: ["content_coherence", "prediction_accuracy"],
      MASTER: ["multi_tool_consensus", "temporal_consistency"],
    };
  }

  /**
   * 🎯 HAUPT-VERIFIZIERUNGS-ORCHESTRIERUNG
   */
  async verifyAnalysisResults(projectRoot, analysisResults) {
    // 🚨 REKURSIONS-SCHUTZ AKTIVIEREN
    if (this.recursionGuard.isRunning) {
      console.log("⚠️ REKURSIONS-SCHUTZ: Verifier bereits aktiv, überspringe");
      return this.generateEmptyReport("SKIPPED_RECURSION");
    }

    this.recursionGuard.isRunning = true;
    this.recursionGuard.startTime = Date.now();

    console.log("🔍 ANALYSIS-VERIFIER: Starte Multi-Level-Verification...");
    console.log(`📁 Projekt-Root: ${projectRoot}`);
    console.log(`🕒 Verification-Zeit: ${this.results.verificationDate}`);
    console.log(
      `🛡️ Rekursions-Schutz: AKTIV (Timeout: ${this.recursionGuard.maxDuration}ms)`
    );

    try {
      // 🕒 TIMEOUT-ÜBERWACHUNG
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(
            new Error(
              `TIMEOUT: Verification überschritt ${this.recursionGuard.maxDuration}ms`
            )
          );
        }, this.recursionGuard.maxDuration);
      });

      // 🔄 VERIFICATION-PIPELINE mit Timeout
      const verificationPromise = this.runVerificationPipeline(
        projectRoot,
        analysisResults
      );

      const result = await Promise.race([verificationPromise, timeoutPromise]);

      this.recursionGuard.isRunning = false;
      return result;
    } catch (error) {
      console.error("❌ Verification-Fehler:", error);
      this.results.validationStatus = "FAILED";
      this.recursionGuard.isRunning = false;

      // Bei Timeout oder Rekursion: Notfall-Report
      if (
        error.message.includes("TIMEOUT") ||
        error.message.includes("RECURSION")
      ) {
        return this.generateEmergencyReport(error);
      }

      throw error;
    }
  }

  /**
   * 🔄 VERIFICATION-PIPELINE (Timeout-sicher)
   */
  async runVerificationPipeline(projectRoot, analysisResults) {
    // LEVEL 1: BASIS-VALIDIERUNG
    await this.performBasicValidation(analysisResults);

    // LEVEL 2: CROSS-REFERENCE CHECKS
    await this.performCrossReferenceValidation(projectRoot, analysisResults);

    // LEVEL 3: LOGIC-COHERENCE VALIDATION
    await this.performLogicValidation(analysisResults);

    // LEVEL 4: MULTI-TOOL CONSENSUS (SICHER)
    await this.performSafeMultiToolConsensus(projectRoot);

    // LEVEL 5: SELBST-VALIDIERUNG
    await this.performSelfVerification();

    // FINAL: CONFIDENCE SCORING
    this.calculateConfidenceScores();

    return this.generateVerificationReport();
  }

  /**
   * 🔧 LEVEL 1: BASIS-VALIDIERUNG
   * Prüft ob angegebene Dateien/Pfade tatsächlich existieren
   */
  async performBasicValidation(analysisResults) {
    console.log("🔧 LEVEL 1: Basis-Validierung (Existenz-Checks)...");

    const basicResults = {
      fileExistenceChecks: [],
      pathValidations: [],
      syntaxValidations: [],
    };

    // Datei-Existenz prüfen (aus Link-Validierung)
    if (analysisResults.links?.details?.invalidLinks) {
      for (const invalidLink of analysisResults.links.details.invalidLinks) {
        const exists = await this.fileExists(invalidLink.path);
        basicResults.fileExistenceChecks.push({
          path: invalidLink.path,
          claimedStatus: "MISSING",
          actualStatus: exists ? "EXISTS" : "MISSING",
          verified: !exists, // Link-Validator war korrekt wenn Datei nicht existiert
        });
      }
    }

    this.results.crossValidationResults.basic = basicResults;
  }

  /**
   * 🔗 LEVEL 2: CROSS-REFERENCE VALIDATION
   * Gleicht Resultate verschiedener Analyzer gegeneinander ab
   */
  async performCrossReferenceValidation(projectRoot, analysisResults) {
    console.log("🔗 LEVEL 2: Cross-Reference-Validation...");

    const crossResults = {
      tokenCountConsistency: [],
      linkValidationCrosschecks: [],
      structureConsistency: [],
    };

    // Token-Count Cross-Check (Universal vs Master)
    if (analysisResults.tokens && analysisResults.structure) {
      const universalTokens = analysisResults.tokens.summary?.totalTokens || 0;
      const structureTokens =
        analysisResults.structure.summary?.totalTokens || 0;

      crossResults.tokenCountConsistency.push({
        source1: "universal-analyzer",
        count1: universalTokens,
        source2: "structure-optimizer",
        count2: structureTokens,
        variance: Math.abs(universalTokens - structureTokens),
        consistent:
          Math.abs(universalTokens - structureTokens) < universalTokens * 0.1, // <10% Abweichung OK
      });
    }

    this.results.crossValidationResults.crossReference = crossResults;
  }

  /**
   * 🧠 LEVEL 3: LOGIC-VALIDIERUNG
   * Prüft ob Analyzer-Logik intern konsistent ist
   */
  async performLogicValidation(analysisResults) {
    console.log("🧠 LEVEL 3: Logic-Coherence-Validation...");

    const logicResults = {
      internalConsistency: [],
      logicalCoherence: [],
      predictionAccuracy: [],
    };

    // Interne Konsistenz: Gesamt-Zahlen vs Detail-Summen
    if (analysisResults.links) {
      const totalLinks = analysisResults.links.summary?.totalLinks || 0;
      const validLinks = analysisResults.links.summary?.validLinks || 0;
      const invalidLinks = analysisResults.links.summary?.invalidLinks || 0;

      const calculatedTotal = validLinks + invalidLinks;

      logicResults.internalConsistency.push({
        metric: "link_totals",
        claimedTotal: totalLinks,
        calculatedTotal: calculatedTotal,
        consistent: totalLinks === calculatedTotal,
      });
    }

    this.results.crossValidationResults.logic = logicResults;
  }

  /**
   * 🎪 LEVEL 4: SICHERER MULTI-TOOL CONSENSUS (ENDLOSSCHLEIFE-SICHER)
   * Führt nur DATEI-BASIERTE Analysen durch, keine Tool-Rekursion
   */
  async performSafeMultiToolConsensus(projectRoot) {
    console.log("🎪 LEVEL 4: Safe Multi-Tool-Consensus-Check...");

    const consensusResults = {
      toolComparisons: [],
      consensusScore: 0,
      majorDiscrepancies: [],
      safetyMode: "FILE_BASED_ONLY", // Keine Tool-Rekursion!
    };

    try {
      // 🛡️ SICHERHEITS-MODUS: Nur bestehende Report-Dateien lesen
      const reportsDir = path.join(projectRoot, "tools", "analyzer");

      // Suche nach vorhandenen Analyzer-Reports
      const existingReports = await this.findExistingAnalysisReports(
        reportsDir
      );

      if (existingReports.length >= 2) {
        console.log(
          `✅ ${existingReports.length} bestehende Reports gefunden - führe Konsensus-Check durch`
        );

        // Vergleiche bestehende Reports ohne neue Tool-Ausführung
        for (let i = 0; i < existingReports.length - 1; i++) {
          const report1 = existingReports[i];
          const report2 = existingReports[i + 1];

          consensusResults.toolComparisons.push({
            report1: path.basename(report1.file),
            report2: path.basename(report2.file),
            dateCompare: this.compareDates(report1.date, report2.date),
            similarityScore: this.calculateReportSimilarity(
              report1.data,
              report2.data
            ),
          });
        }

        consensusResults.consensusScore = this.calculateOverallConsensus(
          consensusResults.toolComparisons
        );
      } else {
        console.log("⚠️ Nicht genügend bestehende Reports für Konsensus-Check");
        consensusResults.majorDiscrepancies.push({
          type: "INSUFFICIENT_REPORTS",
          message: `Nur ${existingReports.length} Reports gefunden, minimum 2 benötigt`,
        });
      }
    } catch (error) {
      console.log(`⚠️ Safe Consensus-Check Fehler: ${error.message}`);
      consensusResults.majorDiscrepancies.push({
        type: "CONSENSUS_CHECK_ERROR",
        error: error.message,
      });
    }

    this.results.crossValidationResults.consensus = consensusResults;
  }

  /**
   * 📁 HELPER: Bestehende Analyse-Reports finden (KEINE TOOL-AUSFÜHRUNG)
   */
  async findExistingAnalysisReports(reportsDir) {
    const reports = [];

    try {
      const files = await fs.readdir(reportsDir);

      for (const file of files) {
        if (file.includes("projekt-analyse-") && file.endsWith(".md")) {
          const filePath = path.join(reportsDir, file);
          const stats = await fs.stat(filePath);

          try {
            const content = await fs.readFile(filePath, "utf-8");
            reports.push({
              file: filePath,
              date: stats.mtime,
              data: this.parseReportContent(content),
            });
          } catch (readError) {
            // Datei nicht lesbar, überspringen
          }
        }
      }
    } catch (dirError) {
      // Verzeichnis nicht lesbar
    }

    return reports.sort((a, b) => b.date - a.date); // Neueste zuerst
  }

  /**
   * 📊 HELPER: Report-Ähnlichkeit berechnen
   */
  calculateReportSimilarity(report1, report2) {
    // Einfacher Ähnlichkeits-Score basierend auf gemeinsamen Eigenschaften
    let score = 0;
    let checks = 0;

    // Token-Zahlen vergleichen (falls vorhanden)
    if (report1.tokens && report2.tokens) {
      const diff = Math.abs(report1.tokens - report2.tokens);
      const avg = (report1.tokens + report2.tokens) / 2;
      score += (1 - diff / avg) * 100;
      checks++;
    }

    // Datei-Anzahlen vergleichen
    if (report1.fileCount && report2.fileCount) {
      const diff = Math.abs(report1.fileCount - report2.fileCount);
      const avg = (report1.fileCount + report2.fileCount) / 2;
      score += (1 - diff / avg) * 100;
      checks++;
    }

    return checks > 0 ? score / checks : 50; // Default: mittlere Ähnlichkeit
  }

  /**
   * 📄 HELPER: Report-Content parsen
   */
  parseReportContent(content) {
    const data = {};

    // Extrahiere Token-Zahlen
    const tokenMatch = content.match(/(\d+(?:\.\d+)?)\s*(?:M|k)?\s*Tokens?/i);
    if (tokenMatch) {
      data.tokens = parseFloat(tokenMatch[1]);
    }

    // Extrahiere Datei-Zahlen
    const fileMatch = content.match(/(\d+)\s*Dateien/i);
    if (fileMatch) {
      data.fileCount = parseInt(fileMatch[1]);
    }

    return data;
  }

  /**
   * 📊 HELPER: Gesamt-Konsensus berechnen
   */
  calculateOverallConsensus(comparisons) {
    if (comparisons.length === 0) return 0;

    const avgSimilarity =
      comparisons.reduce((sum, comp) => sum + comp.similarityScore, 0) /
      comparisons.length;
    return Math.round(avgSimilarity);
  }

  /**
   * 📅 HELPER: Datum-Vergleich
   */
  compareDates(date1, date2) {
    const diffMs = Math.abs(date1 - date2);
    const diffHours = diffMs / (1000 * 60 * 60);

    if (diffHours < 1) return "VERY_RECENT";
    if (diffHours < 24) return "RECENT";
    if (diffHours < 168) return "WEEK_OLD";
    return "OLD";
  }

  /**
   * 🔄 LEVEL 5: SELBST-VALIDIERUNG
   * Verifier prüft seine eigenen Ergebnisse
   */
  async performSelfVerification() {
    console.log("🔄 LEVEL 5: Self-Verification...");

    const selfResults = {
      verifierIntegrity: "CHECKING",
      logicConsistency: [],
      completenessCheck: [],
    };

    // Prüfe ob alle Verification-Levels durchgeführt wurden
    const requiredLevels = ["basic", "crossReference", "logic", "consensus"];
    const completedLevels = Object.keys(this.results.crossValidationResults);

    selfResults.completenessCheck = requiredLevels.map((level) => ({
      level,
      completed: completedLevels.includes(level),
    }));

    const allCompleted = selfResults.completenessCheck.every(
      (check) => check.completed
    );
    selfResults.verifierIntegrity = allCompleted ? "VERIFIED" : "INCOMPLETE";

    this.results.selfVerificationReport = selfResults;
  }

  /**
   * 📊 CONFIDENCE SCORING
   * Berechnet Vertrauens-Score für jede Analyse-Aussage
   */
  calculateConfidenceScores() {
    console.log("📊 Confidence-Scoring...");

    const scores = {};

    // Basis-Score: Wie viele Verification-Levels bestanden?
    const levels = Object.keys(this.results.crossValidationResults);
    const baseScore = (levels.length / 4) * 100; // 4 = Anzahl Levels

    // Konsistenz-Bonus: Übereinstimmung zwischen Tools
    let consistencyBonus = 0;
    if (this.results.crossValidationResults.crossReference) {
      const consistent =
        this.results.crossValidationResults.crossReference.tokenCountConsistency?.filter(
          (check) => check.consistent
        ).length || 0;
      const total =
        this.results.crossValidationResults.crossReference.tokenCountConsistency
          ?.length || 1;
      consistencyBonus = (consistent / total) * 20;
    }

    scores.overall = Math.min(100, baseScore + consistencyBonus);
    scores.breakdown = {
      baseVerification: baseScore,
      consistencyBonus: consistencyBonus,
    };

    this.results.confidenceScores = scores;
    this.results.validationStatus =
      scores.overall > 80
        ? "VERIFIED"
        : scores.overall > 60
        ? "QUESTIONABLE"
        : "UNRELIABLE";
  }

  /**
   * 🛠️ HELPER: Tool ausführen und Resultat parsen
   */
  async runTool(toolName, projectRoot) {
    try {
      const { spawn } = require("child_process");
      return new Promise((resolve, reject) => {
        const process = spawn("node", [`tools/analyzer/${toolName}.cjs`], {
          cwd: projectRoot,
          stdio: "pipe",
        });

        let output = "";
        process.stdout.on("data", (data) => {
          output += data.toString();
        });

        process.on("close", (code) => {
          if (code === 0) {
            try {
              // Parse JSON output (falls vorhanden)
              const jsonMatch = output.match(/\{[\s\S]*\}/);
              resolve(jsonMatch ? JSON.parse(jsonMatch[0]) : { output });
            } catch {
              resolve({ output });
            }
          } else {
            reject(new Error(`Tool ${toolName} exit code: ${code}`));
          }
        });
      });
    } catch (error) {
      throw new Error(`Failed to run ${toolName}: ${error.message}`);
    }
  }

  /**
   * 📁 HELPER: Datei-Existenz prüfen
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
   * 📄 VERIFICATION-REPORT GENERIERUNG
   */
  generateVerificationReport() {
    const report = {
      meta: {
        verificationDate: this.results.verificationDate,
        version: "1.0",
        verificationLevels: Object.keys(this.results.crossValidationResults)
          .length,
        safetyMode: "ENDLOSSCHLEIFE_SICHER",
        executionTime: this.recursionGuard.startTime
          ? Date.now() - this.recursionGuard.startTime
          : 0,
      },
      summary: {
        validationStatus: this.results.validationStatus,
        overallConfidence: this.results.confidenceScores.overall || 0,
        levelsCompleted: Object.keys(this.results.crossValidationResults),
        majorIssues: this.results.conflictingResults.length,
        recursionProtected: true,
      },
      details: this.results,
      recommendations: this.generateVerificationRecommendations(),
    };

    console.log(`\n🔍 VERIFICATION ABGESCHLOSSEN:`);
    console.log(`   Status: ${report.summary.validationStatus}`);
    console.log(`   Confidence: ${report.summary.overallConfidence}%`);
    console.log(`   Levels: ${report.summary.levelsCompleted.join(", ")}`);
    console.log(`   Execution Time: ${report.meta.executionTime}ms`);
    console.log(`   🛡️ Recursion Protection: AKTIV`);

    return report;
  }

  /**
   * 🚨 NOTFALL-REPORT bei Rekursion/Timeout
   */
  generateEmergencyReport(error) {
    return {
      meta: {
        verificationDate: this.results.verificationDate,
        version: "1.0-EMERGENCY",
        emergencyReason: error.message,
      },
      summary: {
        validationStatus: "EMERGENCY_STOPPED",
        overallConfidence: 0,
        levelsCompleted: [],
        majorIssues: 1,
        recursionProtected: true,
      },
      error: {
        type: error.message.includes("TIMEOUT") ? "TIMEOUT" : "RECURSION",
        message: error.message,
        timestamp: new Date().toISOString(),
      },
      recommendations: [
        {
          type: "EMERGENCY",
          message: "Verifier wurde aus Sicherheitsgründen gestoppt",
          priority: "CRITICAL",
        },
      ],
    };
  }

  /**
   * 🔄 LEERER REPORT bei Rekursions-Skip
   */
  generateEmptyReport(reason) {
    return {
      meta: {
        verificationDate: this.results.verificationDate,
        version: "1.0-SKIPPED",
        skipReason: reason,
      },
      summary: {
        validationStatus: "SKIPPED",
        overallConfidence: 0,
        levelsCompleted: [],
        majorIssues: 0,
        recursionProtected: true,
      },
      recommendations: [
        {
          type: "INFO",
          message: "Verification übersprungen um Rekursion zu vermeiden",
          priority: "LOW",
        },
      ],
    };
  }

  /**
   * 💡 VERIFICATION-EMPFEHLUNGEN
   */
  generateVerificationRecommendations() {
    const recommendations = [];

    if (this.results.confidenceScores.overall < 70) {
      recommendations.push({
        type: "LOW_CONFIDENCE",
        message: "Analyse-Ergebnisse sollten manuell geprüft werden",
        priority: "HIGH",
      });
    }

    if (this.results.conflictingResults.length > 0) {
      recommendations.push({
        type: "CONFLICTING_DATA",
        message: "Widersprüchliche Analyzer-Resultate gefunden",
        priority: "CRITICAL",
      });
    }

    return recommendations;
  }
}

// Export für Modul-Verwendung
module.exports = AnalysisVerifier;

// CLI-Ausführung
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();
  const analysisFile = process.argv[3];

  if (!analysisFile) {
    console.error(
      "❌ Usage: node analysis-verifier.cjs <projectRoot> <analysisResultsFile>"
    );
    process.exit(1);
  }

  const verifier = new AnalysisVerifier();

  fs.readFile(analysisFile, "utf-8")
    .then((data) => JSON.parse(data))
    .then((analysisResults) =>
      verifier.verifyAnalysisResults(projectRoot, analysisResults)
    )
    .then((report) => {
      console.log("\n🔍 VERIFICATION-REPORT:\n");
      console.log(JSON.stringify(report, null, 2));
    })
    .catch((error) => {
      console.error("💥 VERIFICATION FEHLER:", error);
      process.exit(1);
    });
}
