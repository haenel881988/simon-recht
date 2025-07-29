#!/usr/bin/env node

/**
 * 🚨 SMART EXCEPTION HANDLER v1.0
 *
 * Intelligente Exception-Ausgabe für Widersprüche
 * Mit User-Rückfrage-System und KI-Empfehlungen
 */

class SmartExceptionHandler {
  constructor() {
    this.conflictDatabase = new Map();
  }

  /**
   * 🚨 KRITISCHEN WIDERSPRUCH MELDEN
   */
  throwConflictException(conflicts) {
    console.log("\n🚨 " + "=".repeat(60));
    console.log("🚨 KRITISCHE REGEL-WIDERSPRÜCHE ERKANNT!");
    console.log("🚨 " + "=".repeat(60));

    conflicts.forEach((conflict, index) => {
      console.log(`\n⚠️ KONFLIKT ${index + 1}:`);
      console.log(`📁 Datei: ${conflict.file}`);
      console.log(`🔍 Problem: ${conflict.description}`);
      console.log(`📝 Beweis 1: "${conflict.evidence1}"`);
      console.log(`📝 Beweis 2: "${conflict.evidence2}"`);
      console.log(
        `🎯 KI-Empfehlung: ${
          conflict.recommendation || "Manuelle Klärung erforderlich"
        }`
      );
    });

    console.log("\n💡 BENUTZER-RÜCKFRAGE ERFORDERLICH:");
    console.log("=".repeat(40));
    console.log("🤔 Simon, welche Regel soll gelten?");
    console.log("📋 Bitte entscheide für jeden Konflikt:");

    conflicts.forEach((conflict, index) => {
      console.log(`\n${index + 1}. ${conflict.description}`);
      console.log(`   Option A: ${conflict.evidence1}`);
      console.log(`   Option B: ${conflict.evidence2}`);
      console.log(`   💡 Empfehlung: ${conflict.recommendation}`);
    });

    console.log("\n🔧 AUTOMATISCHE KORREKTUR MÖGLICH:");
    console.log("✅ KI kann nach deiner Entscheidung automatisch korrigieren");
    console.log("✅ Alle anderen Dateien werden entsprechend angepasst");

    return {
      type: "RULE_CONFLICT_EXCEPTION",
      conflicts: conflicts,
      requiresUserInput: true,
      autoFixAvailable: true,
    };
  }

  /**
   * 🎯 EMPFEHLUNG GENERIEREN
   */
  generateRecommendation(conflict) {
    const recommendations = {
      "Zeilenlimit-Widerspruch":
        "Global-Regel sollte alle lokalen Regeln überschreiben",
      "Tool-Nutzung vs. Tool-Verbot":
        "Definiere explizite Ausnahmen oder absolute Verbote",
      "Search-Verbot vs. Search-Nutzung":
        "Unterscheide zwischen KI-Tools und manueller Analyse",
    };

    return (
      recommendations[conflict.description] ||
      "Manuelle Konflikt-Lösung erforderlich"
    );
  }
}

module.exports = SmartExceptionHandler;
