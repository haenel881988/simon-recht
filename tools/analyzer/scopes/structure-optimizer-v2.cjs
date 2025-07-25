#!/usr/bin/env node

/**
 * 🏗️ STRUCTURE-OPTIMIZER v2.0 (HANG-SICHER + SCHNELL)
 *
 * 🎯 ZWECK: Projekt-Struktur bewerten & Umzugspläne mit Link-Mapping erstellen
 * 🚀 OPTIMIERT: Keine Endlosschleifen, schnelle Verarbeitung
 * 🔗 LINK-MAPPING: Alte → Neue Pfade für automatische KI-Umsetzung
 * 📋 INVENTARISIERUNG: Vollständige Datei-Kategorisierung
 */

const fs = require("fs").promises;
const path = require("path");

class StructureOptimizerV2 {
  constructor() {
    this.results = {
      currentStructure: {},
      movementPlan: [],
      linkMappings: [],
      migrationScript: [],
      statistics: {},
      recommendations: [],
    };

    // Vereinfachte Ziel-Strukturen
    this.targetStructures = {
      // Archive-Kategorien (hohe Priorität)
      archive_candidates: {
        patterns: [
          /backup|old|alt|deprecated|chaos|temp|tmp/i,
          /\d{4}-\d{2}-\d{2}/,
        ],
        target: "docs/archive/auto-cleanup-2025-07-25/",
        priority: "HIGH",
      },

      // Leere Dateien (sofort löschbar)
      empty_files: {
        patterns: [/\.md$|\.txt$/],
        condition: "empty",
        target: "DELETE",
        priority: "IMMEDIATE",
      },

      // Dokumentation strukturieren
      documentation: {
        patterns: [/\.md$/, /docs\//],
        target: "docs/organized/",
        priority: "MEDIUM",
      },

      // Tools konsolidieren
      tools: {
        patterns: [/\.cjs$|\.js$|\.ps1$/],
        target: "tools/consolidated/",
        priority: "MEDIUM",
      },
    };

    // Geschützte Dateien (nie verschieben)
    this.protectedFiles = [
      /\.github\/copilot-instructions/,
      /src\//,
      /public\//,
      /node_modules/,
      /\.git/,
      /package\.json$/,
      /astro\.config/,
      /tailwind\.config/,
      /tools\/analyzer\/.*\.cjs$/,
    ];
  }

  /**
   * 🚀 HAUPT-STRUKTUR-OPTIMIERUNG
   */
  async optimizeStructure(projectRoot) {
    console.log("🏗️ STRUCTURE-OPTIMIZER v2.0: Starte schnelle Analyse...");

    try {
      // 1. Schnelle Datei-Inventarisierung
      const allFiles = await this.quickInventory(projectRoot);
      console.log(`📁 ${allFiles.length} Dateien gefunden`);

      // 2. Kategorisierung ohne komplexe Analyse
      await this.categorizeFiles(allFiles, projectRoot);
      console.log("📋 Dateien kategorisiert");

      // 3. Umzugspläne generieren
      await this.generateMovementPlans(allFiles, projectRoot);
      console.log("🚛 Umzugspläne erstellt");

      // 4. Link-Mappings (vereinfacht)
      await this.createSimpleLinkMappings();
      console.log("🔗 Link-Mappings generiert");

      // 5. Migration-Scripts
      await this.generateMigrationScript(projectRoot);
      console.log("📜 Migration-Script erstellt");

      return this.generateFinalReport();
    } catch (error) {
      console.error("❌ Structure-Optimizer Fehler:", error.message);
      throw error;
    }
  }

  /**
   * 📁 SCHNELLE DATEI-INVENTARISIERUNG
   */
  async quickInventory(projectRoot) {
    const files = [];

    await this.quickWalk(projectRoot, files, 0);

    return files.map((filePath) => ({
      path: filePath,
      relativePath: path.relative(projectRoot, filePath),
      name: path.basename(filePath),
      ext: path.extname(filePath),
      dir: path.dirname(path.relative(projectRoot, filePath)),
    }));
  }

  /**
   * 🚶 SCHNELLER VERZEICHNIS-DURCHLAUF (mit Tiefenbegrenzung)
   * 🚨 SIMON'S TABU-VERZEICHNISSE: .astro, .vscode, node_modules
   */
  async quickWalk(dir, files, depth) {
    if (depth > 10) return; // Tiefenbegrenzung gegen Endlosschleifen

    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        // 🚨 SIMON'S ERWEITERTE TABU-LISTE
        if (this.shouldIgnoreDirectory(entry.name)) continue;
        
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          await this.quickWalk(fullPath, files, depth + 1);
        } else if (entry.isFile()) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Verzeichnis nicht zugänglich - überspringen
    }
  }

  /**
   * 🚫 SIMON'S TABU-VERZEICHNISSE (ABSOLUTES VERBOT)
   */
  shouldIgnoreDirectory(name) {
    const SIMON_TABU_DIRS = [
      '.astro',         // 🚨 Astro Build-Cache  
      '.vscode',        // 🚨 VS Code Settings
      'node_modules',   // 🚨 NPM Dependencies
      '.git',           // Git Repository
      'dist',           // Build Output
      'build',          // Build Output
      '.next',          // Next.js Cache
      '.cache',         // Generic Cache
    ];

    // Exakte Übereinstimmung ODER Pattern-Match
    return SIMON_TABU_DIRS.includes(name) || 
           name.startsWith('.') && name !== '.github';
  }

  /**
   * 📋 DATEI-KATEGORISIERUNG
   */
  async categorizeFiles(files, projectRoot) {
    for (const file of files) {
      // Geschützte Dateien überspringen
      if (this.isProtectedFile(file.relativePath)) {
        continue;
      }

      // Dateigröße prüfen für leere Dateien
      try {
        const stats = await fs.stat(path.join(projectRoot, file.relativePath));
        file.size = stats.size;
        file.isEmpty = stats.size === 0;
        file.modified = stats.mtime;
      } catch (error) {
        file.size = -1;
        file.isEmpty = false;
      }

      // Kategorie basierend auf Pattern bestimmen
      file.category = this.determineCategory(file);
      file.targetStructure = this.determineTarget(file);
    }
  }

  /**
   * 🛡️ GESCHÜTZTE DATEI PRÜFEN
   */
  isProtectedFile(relativePath) {
    return this.protectedFiles.some((pattern) => pattern.test(relativePath));
  }

  /**
   * 📂 KATEGORIE BESTIMMEN
   */
  determineCategory(file) {
    const relativePath = file.relativePath;
    const fileName = file.name;

    // Leere Dateien
    if (file.isEmpty) {
      return "empty_files";
    }

    // Archive-Kandidaten
    for (const pattern of this.targetStructures.archive_candidates.patterns) {
      if (pattern.test(relativePath) || pattern.test(fileName)) {
        return "archive_candidates";
      }
    }

    // Dokumentation
    if (file.ext === ".md" || relativePath.includes("docs/")) {
      return "documentation";
    }

    // Tools
    if ([".cjs", ".js", ".ps1", ".bat"].includes(file.ext)) {
      return "tools";
    }

    return "other";
  }

  /**
   * 🎯 ZIEL-PFAD BESTIMMEN
   */
  determineTarget(file) {
    const category = file.category;
    const structure = this.targetStructures[category];

    if (!structure) return file.relativePath;

    if (structure.target === "DELETE" && file.isEmpty) {
      return "DELETE";
    }

    if (structure.target) {
      return path.join(structure.target, file.name).replace(/\\/g, "/");
    }

    return file.relativePath;
  }

  /**
   * 🚛 UMZUGSPLÄNE GENERIEREN
   */
  async generateMovementPlans(files, projectRoot) {
    let movementId = 1;

    for (const file of files) {
      if (file.targetStructure && file.targetStructure !== file.relativePath) {
        const movement = {
          id: movementId++,
          type: file.targetStructure === "DELETE" ? "DELETE" : "MOVE",
          source: file.relativePath,
          target: file.targetStructure,
          category: file.category,
          priority: this.targetStructures[file.category]?.priority || "LOW",
          size: file.size,
          isEmpty: file.isEmpty,
          reason: this.getMovementReason(file),
          risk: this.assessMovementRisk(file),
          migrationCommand: this.generateMovementCommand(file, projectRoot),
        };

        this.results.movementPlan.push(movement);
      }
    }

    // Nach Priorität sortieren
    this.results.movementPlan.sort((a, b) => {
      const priorityOrder = { IMMEDIATE: 1, HIGH: 2, MEDIUM: 3, LOW: 4 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  /**
   * 📝 BEWEGUNGSGRUND ERMITTELN
   */
  getMovementReason(file) {
    if (file.isEmpty) return "Leere Datei - sicher löschbar";
    if (file.category === "archive_candidates")
      return "Archive/Backup-Pattern erkannt";
    if (file.category === "documentation") return "Dokumentation strukturieren";
    if (file.category === "tools") return "Tools konsolidieren";
    return "Struktur-Optimierung";
  }

  /**
   * ⚠️ BEWEGUNGSRISIKO BEWERTEN
   */
  assessMovementRisk(file) {
    if (file.isEmpty) return "NONE";
    if (file.category === "archive_candidates") return "LOW";
    if (this.isProtectedFile(file.relativePath)) return "HIGH";
    return "MEDIUM";
  }

  /**
   * 💻 BEWEGUNGSKOMMANDO GENERIEREN
   */
  generateMovementCommand(file, projectRoot) {
    const sourcePath = path.join(projectRoot, file.relativePath);

    if (file.targetStructure === "DELETE") {
      return `Remove-Item "${sourcePath}" -Force`;
    }

    const targetPath = path.join(projectRoot, file.targetStructure);
    const targetDir = path.dirname(targetPath);

    return [
      `New-Item -ItemType Directory -Path "${targetDir}" -Force`,
      `Move-Item "${sourcePath}" "${targetPath}"`,
    ].join(" ; ");
  }

  /**
   * 🔗 VEREINFACHTE LINK-MAPPINGS
   */
  async createSimpleLinkMappings() {
    for (const movement of this.results.movementPlan) {
      if (movement.type === "MOVE") {
        const mapping = {
          oldPath: movement.source,
          newPath: movement.target,
          affectedFiles: [], // Vereinfacht - würde komplexe Suche erfordern
          updateCommands: [
            `# Update Links von: ${movement.source}`,
            `# Zu: ${movement.target}`,
            `# Manuelle Überprüfung empfohlen`,
          ],
        };

        this.results.linkMappings.push(mapping);
      }
    }
  }

  /**
   * 📜 MIGRATION-SCRIPT GENERIEREN
   */
  async generateMigrationScript(projectRoot) {
    const script = [
      "# 🚛 STRUKTUR-MIGRATION SCRIPT",
      "# Generiert von Structure-Optimizer v2.0",
      `# Datum: ${new Date().toLocaleDateString("de-DE")}`,
      "",
      "# WICHTIG: Backup erstellen vor Ausführung!",
      'Write-Host "🔄 Starte Struktur-Migration..." -ForegroundColor Green',
      "",
    ];

    // Sofortige Aktionen (DELETE)
    const immediateActions = this.results.movementPlan.filter(
      (m) => m.priority === "IMMEDIATE"
    );
    if (immediateActions.length > 0) {
      script.push("# 🗑️ SOFORTIGE AKTIONEN (Leere Dateien löschen)");
      immediateActions.forEach((action) => {
        script.push(
          `Write-Host "Lösche: ${action.source}" -ForegroundColor Yellow`
        );
        script.push(action.migrationCommand);
        script.push("");
      });
    }

    // Archiv-Verschiebungen
    const archiveActions = this.results.movementPlan.filter(
      (m) => m.category === "archive_candidates"
    );
    if (archiveActions.length > 0) {
      script.push("# 📦 ARCHIV-VERSCHIEBUNGEN");
      archiveActions.slice(0, 10).forEach((action) => {
        // Erste 10
        script.push(
          `Write-Host "Archiviere: ${action.source}" -ForegroundColor Cyan`
        );
        script.push(action.migrationCommand);
        script.push("");
      });
    }

    script.push(
      'Write-Host "✅ Migration abgeschlossen!" -ForegroundColor Green'
    );
    this.results.migrationScript = script;
  }

  /**
   * 📊 FINAL-REPORT GENERIEREN
   */
  generateFinalReport() {
    // Statistiken berechnen
    this.results.statistics = {
      totalFiles: this.results.movementPlan.length,
      immediateActions: this.results.movementPlan.filter(
        (m) => m.priority === "IMMEDIATE"
      ).length,
      highPriorityActions: this.results.movementPlan.filter(
        (m) => m.priority === "HIGH"
      ).length,
      mediumPriorityActions: this.results.movementPlan.filter(
        (m) => m.priority === "MEDIUM"
      ).length,
      deleteActions: this.results.movementPlan.filter(
        (m) => m.type === "DELETE"
      ).length,
      moveActions: this.results.movementPlan.filter((m) => m.type === "MOVE")
        .length,
      linkMappings: this.results.linkMappings.length,
    };

    // Empfehlungen
    this.results.recommendations = this.generateRecommendations();

    return {
      summary: {
        status: this.getOverallStatus(),
        ...this.results.statistics,
      },
      movementPlan: this.results.movementPlan.slice(0, 20), // Top 20
      linkMappings: this.results.linkMappings.slice(0, 10), // Top 10
      migrationScript: this.results.migrationScript,
      recommendations: this.results.recommendations,
      nextSteps: this.generateNextSteps(),
    };
  }

  /**
   * 🎯 GESAMT-STATUS
   */
  getOverallStatus() {
    const stats = this.results.statistics;

    if (stats.immediateActions > 20) return "AUFRÄUMUNG_DRINGEND";
    if (stats.totalFiles > 50) return "STRUKTURIERUNG_ERFORDERLICH";
    if (stats.totalFiles > 10) return "OPTIMIERUNG_MÖGLICH";
    return "STRUKTUR_OK";
  }

  /**
   * 💡 EMPFEHLUNGEN GENERIEREN
   */
  generateRecommendations() {
    const recommendations = [];
    const stats = this.results.statistics;

    if (stats.immediateActions > 0) {
      recommendations.push({
        priority: "SOFORT",
        action: `${stats.immediateActions} leere Dateien löschen`,
        impact: "Sofortige Aufräumung ohne Risiko",
        command: "Migration-Script Sektion: SOFORTIGE AKTIONEN",
      });
    }

    if (stats.highPriorityActions > 0) {
      recommendations.push({
        priority: "HEUTE",
        action: `${stats.highPriorityActions} Archive-Kandidaten verschieben`,
        impact: "Projekt-Übersichtlichkeit deutlich verbessern",
        command: "Migration-Script Sektion: ARCHIV-VERSCHIEBUNGEN",
      });
    }

    if (stats.linkMappings > 0) {
      recommendations.push({
        priority: "NACH_MIGRATION",
        action: "Link-Updates durchführen",
        impact: "Sicherstellen dass alle Referenzen funktionieren",
        command: "Manuelle Link-Überprüfung empfohlen",
      });
    }

    return recommendations;
  }

  /**
   * 🎯 NÄCHSTE SCHRITTE
   */
  generateNextSteps() {
    return [
      {
        step: 1,
        action: "Backup erstellen",
        command: 'git commit -am "Backup vor Struktur-Migration"',
      },
      {
        step: 2,
        action: "Migration-Script ausführen (Sektion für Sektion)",
        command: "PowerShell Script aus migrationScript kopieren",
      },
      {
        step: 3,
        action: "Links validieren",
        command: "node tools/analyzer/core/link-validator.cjs",
      },
      {
        step: 4,
        action: "Struktur-Analyse wiederholen",
        command: "node tools/analyzer/scopes/structure-optimizer.cjs",
      },
    ];
  }
}

// Export für Modul-Verwendung
module.exports = StructureOptimizerV2;

// CLI-Ausführung
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();

  const optimizer = new StructureOptimizerV2();
  optimizer
    .optimizeStructure(projectRoot)
    .then((report) => {
      console.log("\n🏗️ STRUKTUR-OPTIMIERUNG ABGESCHLOSSEN:\n");
      console.log("📊 ZUSAMMENFASSUNG:");
      console.log(`   Status: ${report.summary.status}`);
      console.log(`   Dateien zu bearbeiten: ${report.summary.totalFiles}`);
      console.log(`   Sofortige Aktionen: ${report.summary.immediateActions}`);
      console.log(`   Hohe Priorität: ${report.summary.highPriorityActions}`);
      console.log(`   Lösch-Aktionen: ${report.summary.deleteActions}`);
      console.log(`   Verschiebungen: ${report.summary.moveActions}`);

      if (report.recommendations.length > 0) {
        console.log("\n💡 TOP-EMPFEHLUNGEN:");
        report.recommendations.forEach((rec, index) => {
          console.log(`   ${index + 1}. [${rec.priority}] ${rec.action}`);
        });
      }

      if (report.nextSteps.length > 0) {
        console.log("\n🎯 NÄCHSTE SCHRITTE:");
        report.nextSteps.forEach((step) => {
          console.log(`   ${step.step}. ${step.action}`);
        });
      }

      console.log("\n📜 Migration-Script wurde generiert!");
      console.log("📄 Vollständiger Report verfügbar.");

      // JSON-Output für weitere Verarbeitung
      if (process.argv.includes("--json")) {
        console.log("\n" + JSON.stringify(report, null, 2));
      }
    })
    .catch((error) => {
      console.error("❌ Struktur-Optimierung Fehler:", error);
      process.exit(1);
    });
}
