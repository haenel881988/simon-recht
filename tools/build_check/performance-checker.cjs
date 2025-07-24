#!/usr/bin/env node

/**
 * 🚀 SIMON'S PERFORMANCE-OPTIMIERTER CHECKER v6.0
 *
 * 🎯 NEUE FEATURES:
 * - Sequentielle Scope-Ausführung (IDE-schonend)
 * - Automatischer Task-Cleanup nach Build
 * - Resource-Monitoring mit Memory-Tracking
 * - Intelligente Pausen zwischen Scopes
 * - Erzwungene Garbage Collection
 *
 * 🚀 PERFORMANCE-OPTIMIERUNGEN:
 * - Keine parallelen Prozesse mehr
 * - Memory-Cleanup zwischen Scopes
 * - Adaptive Throttling basierend auf Memory-Nutzung
 * - Automatische Prozess-Terminierung nach Abschluss
 *
 * 🧠 SIMON'S ANTI-IDE-ÜBERLASTUNG-SYSTEM:
 * - Schont deine Hardware-Ressourcen
 * - Verhindert Concurrent-Process-Chaos
 * - Garantiert saubere Task-Beendigung
 */

const MultiScopeChecker = require("./multi-scope-checker.cjs");

async function runPerformanceOptimizedChecker() {
  console.log("🚀 SIMON'S PERFORMANCE-OPTIMIERTER CHECKER v6.0");
  console.log("🎯 IDE-schonend • Memory-optimiert • Task-Cleanup inkludiert\n");

  // Memory-Status vor Start
  const startMemory = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`📊 Start-Memory: ${Math.round(startMemory)}MB\n`);

  try {
    // Multi-Scope-Checker mit Performance-Optimierungen starten
    const path = require("path");
    const projectRoot = path.resolve(__dirname, "../..");
    const checker = new MultiScopeChecker(projectRoot);
    const result = await checker.run(); // Finaler Memory-Status
    const endMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    const memorySaved = startMemory - endMemory;

    console.log("\n🎯 ═══════════════════════════════════════════════════════");
    console.log("🚀 PERFORMANCE-OPTIMIERTER CHECKER ABGESCHLOSSEN!");
    console.log("🎯 ═══════════════════════════════════════════════════════");
    console.log(`📊 End-Memory: ${Math.round(endMemory)}MB`);
    if (memorySaved > 0) {
      console.log(`💾 Memory gespart: ${Math.round(memorySaved)}MB`);
    }
    console.log(`🎯 Health-Score: ${result.summary?.healthScore || "N/A"}/100`);
    console.log("✅ IDE-Performance geschont durch sequentielle Ausführung!");
    console.log("🧹 Task-Cleanup automatisch durchgeführt!");
    console.log("🎯 ═══════════════════════════════════════════════════════\n");

    return result;
  } catch (error) {
    console.error(`💥 Performance-Checker Fehler: ${error.message}`);

    // Notfall-Cleanup bei Fehlern
    try {
      console.log("🚨 Starte Notfall-Task-Cleanup...");
      const TaskCleaner = require("./core/task-cleaner.cjs");
      const cleaner = new TaskCleaner();
      await cleaner.cleanupTasks();
      console.log("✅ Notfall-Cleanup abgeschlossen!");
    } catch (cleanupError) {
      console.log(`⚠️ Notfall-Cleanup fehlgeschlagen: ${cleanupError.message}`);
    }

    process.exit(1);
  }
}

// Script direkt ausführen
if (require.main === module) {
  runPerformanceOptimizedChecker()
    .then(() => {
      console.log(
        "🎯 Alle Checker-Tasks beendet - IDE bereit für weitere Arbeit!"
      );
      process.exit(0);
    })
    .catch((error) => {
      console.error("💥 Kritischer Fehler:", error);
      process.exit(1);
    });
}

module.exports = { runPerformanceOptimizedChecker };
