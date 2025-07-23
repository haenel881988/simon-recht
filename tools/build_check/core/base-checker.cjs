#!/usr/bin/env node

/**
 * 🎯 SIMON'S BASE-CHECKER FRAMEWORK v1.0 - CORE FOUNDATION
 *
 * 🚀 FEATURES:
 * ✅ Scope-basierte Architektur
 * ✅ Modulare Testausführung
 * ✅ Health-Score-System
 * ✅ Automatische Problemkategorisierung
 * ✅ KI-Prompt-Generation pro Scope
 */

const fs = require("fs").promises;
const path = require("path");

class BaseChecker {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.startTime = new Date();
    this.results = {
      scopes: {},
      summary: {
        totalIssues: 0,
        criticalIssues: 0,
        importantIssues: 0,
        optimizationIssues: 0,
        healthScore: 0,
        executionTime: 0,
      },
    };
  }

  /**
   * 🎯 SCOPE-REGISTRIERUNG & ORCHESTRIERUNG
   */
  async runScope(scopeName, scopeInstance) {
    console.log(`🔍 Starte ${scopeName}-Scope...`);
    const scopeStartTime = new Date();

    try {
      const scopeResults = await scopeInstance.run();
      const scopeExecutionTime = new Date() - scopeStartTime;

      // 📊 SCOPE-ERGEBNISSE STRUKTURIEREN
      const structuredResults = {
        name: scopeName,
        executionTime: scopeExecutionTime,
        healthScore: scopeResults.healthScore || 0,
        issues: scopeResults.issues || [],
        metrics: scopeResults.metrics || {},
        kiPrompts: scopeResults.kiPrompts || [],
        status:
          scopeResults.issues?.filter((i) => i.severity === "critical").length >
          0
            ? "critical"
            : "success",
      };

      this.results.scopes[scopeName] = structuredResults;

      // 📈 GESAMT-METRIKEN AKTUALISIEREN
      this.updateGlobalMetrics(structuredResults);

      console.log(
        `✅ ${scopeName}-Scope abgeschlossen (${scopeExecutionTime}ms)`
      );
      console.log(
        `📊 ${scopeName} Health Score: ${structuredResults.healthScore}/100`
      );

      return structuredResults;
    } catch (error) {
      console.error(`❌ FEHLER in ${scopeName}-Scope:`, error.message);

      const errorResults = {
        name: scopeName,
        executionTime: new Date() - scopeStartTime,
        healthScore: 0,
        issues: [
          {
            severity: "critical",
            category: "system",
            description: `Scope-Ausführungsfehler: ${error.message}`,
            file: "system",
            kiPrompt: `Debug ${scopeName}-Scope: ${error.message}`,
          },
        ],
        status: "error",
      };

      this.results.scopes[scopeName] = errorResults;
      this.updateGlobalMetrics(errorResults);

      return errorResults;
    }
  }

  /**
   * 📊 GLOBALE METRIKEN BERECHNUNG
   */
  updateGlobalMetrics(scopeResults) {
    const issues = scopeResults.issues || [];

    // Issue-Zählung nach Schweregrad
    this.results.summary.criticalIssues += issues.filter(
      (i) => i.severity === "critical"
    ).length;
    this.results.summary.importantIssues += issues.filter(
      (i) => i.severity === "important"
    ).length;
    this.results.summary.optimizationIssues += issues.filter(
      (i) => i.severity === "optimization"
    ).length;
    this.results.summary.totalIssues += issues.length;
  }

  /**
   * 🎯 GESAMT-HEALTH-SCORE BERECHNUNG
   */
  calculateGlobalHealthScore() {
    const scopes = Object.values(this.results.scopes);

    if (scopes.length === 0) return 0;

    // Gewichtete Durchschnitts-Berechnung
    const totalWeightedScore = scopes.reduce((sum, scope) => {
      return sum + (scope.healthScore || 0);
    }, 0);

    const averageScore = Math.round(totalWeightedScore / scopes.length);

    // Malus für kritische Issues
    const criticalMalus = this.results.summary.criticalIssues * 10;
    const importantMalus = this.results.summary.importantIssues * 2;

    const finalScore = Math.max(
      0,
      Math.min(100, averageScore - criticalMalus - importantMalus)
    );

    this.results.summary.healthScore = finalScore;
    return finalScore;
  }

  /**
   * 📄 FINALER BERICHT GENERATION
   */
  generateReport() {
    this.results.summary.executionTime = new Date() - this.startTime;
    const finalHealthScore = this.calculateGlobalHealthScore();

    console.log("\n🎯 ═══════════════════════════════════════════════════════");
    console.log("📊 SIMON'S MULTI-SCOPE BUILD-CHECKER ZUSAMMENFASSUNG");
    console.log("🎯 ═══════════════════════════════════════════════════════");

    // Scope-spezifische Ergebnisse
    Object.entries(this.results.scopes).forEach(([scopeName, scope]) => {
      const statusIcon =
        scope.status === "critical"
          ? "🚨"
          : scope.status === "error"
          ? "❌"
          : "✅";
      console.log(
        `${statusIcon} ${scopeName.toUpperCase()}: ${scope.healthScore}/100 (${
          scope.issues.length
        } Issues)`
      );
    });

    console.log("\n📈 GESAMT-METRIKEN:");
    console.log(`🎯 Health Score: ${finalHealthScore}/100`);
    console.log(`🚨 Kritische Issues: ${this.results.summary.criticalIssues}`);
    console.log(`⚠️  Wichtige Issues: ${this.results.summary.importantIssues}`);
    console.log(`💡 Optimierungen: ${this.results.summary.optimizationIssues}`);
    console.log(`⏱️  Ausführungszeit: ${this.results.summary.executionTime}ms`);

    return this.results;
  }

  /**
   * 🎯 SCOPE-INTERFACE (ABSTRACT)
   */
  static createScopeInterface() {
    return {
      // Jeder Scope muss diese Methode implementieren
      async run() {
        throw new Error("Scope muss run() Methode implementieren");
      },

      // Standard-Return-Format für alle Scopes
      createResult(healthScore, issues = [], metrics = {}, kiPrompts = []) {
        return {
          healthScore,
          issues,
          metrics,
          kiPrompts,
        };
      },
    };
  }
}

module.exports = BaseChecker;
