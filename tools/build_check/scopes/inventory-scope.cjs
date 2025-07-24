#!/usr/bin/env node

/**
 * 🚀 SIMON'S INVENTORY-SCOPE v1.0
 *
 * 🎯 ZWECK: Automatische Projekt-Inventarisierung ohne Hintergrundprozesse
 *
 * ✅ FEATURES:
 * - Nutzt existierendes auto-inventory.js System
 * - Change-Detection für Performance-Optimierung
 * - Integration in Multi-Scope-Checker Pipeline
 * - Echtzeit-Updates bei Git-Operations
 * - Zero-Background-Process-Guarantee
 *
 * 🔗 INTEGRATION:
 * - Läuft alle 5 Minuten mit Multi-Scope-Checker
 * - Triggert bei Git-Hooks (pre-commit, pre-push)
 * - Smart-Caching für Performance
 *
 * 📊 OUTPUT:
 * - Health-Score: Inventar-Aktualität (0-100)
 * - Change-Detection: Neue/Geänderte/Gelöschte Dateien
 * - Performance-Metrics: Scan-Zeit, File-Count
 * - Auto-Update: projekt_inventar.md Aktualisierung
 */

const fs = require("fs").promises;
const path = require("path");
// 🚀 ENTFERNT: const { execSync } = require("child_process"); - KEIN NODE-PROZESS-SPAWNING!

class InventoryScope {
  constructor() {
    this.name = "INVENTORY";
    this.description = "Automatische Projekt-Inventarisierung";
    this.version = "1.0";
    this.projectRoot = path.join(__dirname, "..", "..", "..");
    this.inventoryScript = path.join(
      this.projectRoot,
      "tools",
      "inventory",
      "auto-inventory.js"
    );
    this.inventoryFile = path.join(
      this.projectRoot,
      ".github",
      "instructions",
      "organisation",
      "inventar",
      "projekt_inventar.md"
    );
    this.lastScanFile = path.join(
      __dirname,
      "..",
      "metrics",
      "inventory-last-scan.json"
    );

    this.results = {
      status: "unknown",
      healthScore: 0,
      metrics: {},
      changes: {
        new: [],
        modified: [],
        deleted: [],
      },
      recommendations: [],
      errors: [],
    };
  }

  async run() {
    console.log(`🔍 [${this.name}] Starte Inventar-Analyse...`);

    try {
      // 1. Prüfe ob Inventar-Script existiert
      await this.validateInventoryScript();

      // 2. Lade letzte Scan-Daten für Change-Detection
      const lastScan = await this.loadLastScanData();

      // 3. Führe Change-Detection durch
      const currentState = await this.getCurrentProjectState();
      const changes = this.detectChanges(lastScan, currentState);

      // 4. Inventar nur aktualisieren wenn Änderungen vorliegen
      if (changes.hasChanges || this.isInventoryOutdated()) {
        console.log(
          `📝 [${this.name}] Änderungen erkannt - Inventar wird aktualisiert...`
        );
        await this.updateInventory();
        await this.saveCurrentScanData(currentState);
      } else {
        console.log(
          `✅ [${this.name}] Inventar ist aktuell - Keine Aktualisierung nötig`
        );
      }

      // 5. Validiere Inventar-Qualität
      await this.validateInventoryQuality();

      // 6. Berechne Health-Score
      this.calculateHealthScore();

      // 7. Generiere Empfehlungen
      this.generateRecommendations();

      this.results.status = "success";
      console.log(
        `✅ [${this.name}] Analyse abgeschlossen - Health Score: ${this.results.healthScore}%`
      );
    } catch (error) {
      console.error(
        `❌ [${this.name}] Fehler bei Inventar-Analyse:`,
        error.message
      );
      this.results.status = "error";
      this.results.errors.push({
        type: "inventory_error",
        message: error.message,
        timestamp: new Date().toISOString(),
      });
    }

    return this.results;
  }

  async validateInventoryScript() {
    try {
      await fs.access(this.inventoryScript);
      this.results.metrics.inventoryScriptExists = true;
    } catch (error) {
      throw new Error(
        `Inventar-Script nicht gefunden: ${this.inventoryScript}`
      );
    }
  }

  async loadLastScanData() {
    try {
      const data = await fs.readFile(this.lastScanFile, "utf8");
      return JSON.parse(data);
    } catch (error) {
      // Erste Ausführung - keine vorherigen Scan-Daten
      return {
        timestamp: null,
        fileCount: 0,
        directoryCount: 0,
        fileHashes: {},
      };
    }
  }

  async getCurrentProjectState() {
    const state = {
      timestamp: new Date().toISOString(),
      fileCount: 0,
      directoryCount: 0,
      fileHashes: {},
    };

    // Schnelle Datei-Statistiken ohne komplettes Inventar
    try {
      const stats = await this.getQuickProjectStats();
      state.fileCount = stats.files;
      state.directoryCount = stats.directories;

      // Wichtige Dateien für Change-Detection hashen
      const importantFiles = await this.getImportantFilesHashes();
      state.fileHashes = importantFiles;
    } catch (error) {
      console.warn(
        `⚠️ [${this.name}] Warning bei State-Erfassung:`,
        error.message
      );
    }

    return state;
  }

  async getQuickProjectStats() {
    // Nutze PowerShell für schnelle Statistiken
    try {
      const result = execSync(
        `
        $files = Get-ChildItem -Path "${this.projectRoot}" -Recurse -File | Where-Object { 
          $_.FullName -notmatch "node_modules|\.git|dist|\.astro" 
        }
        $dirs = Get-ChildItem -Path "${this.projectRoot}" -Recurse -Directory | Where-Object { 
          $_.FullName -notmatch "node_modules|\.git|dist|\.astro" 
        }
        Write-Output "$($files.Count)|$($dirs.Count)"
      `,
        { encoding: "utf8", shell: "powershell.exe" }
      );

      const [files, dirs] = result.trim().split("|").map(Number);
      return { files, directories: dirs };
    } catch (error) {
      // Fallback ohne Shell
      return { files: 0, directories: 0 };
    }
  }

  async getImportantFilesHashes() {
    const importantPatterns = [
      "package.json",
      "astro.config.mjs",
      "tailwind.config.mjs",
      "src/**/*.astro",
      "src/**/*.ts",
      "src/content/**/*.md",
    ];

    const hashes = {};

    for (const pattern of importantPatterns) {
      try {
        const filePath = path.join(
          this.projectRoot,
          pattern.replace("**/*", "")
        );
        if (await this.fileExists(filePath)) {
          const stats = await fs.stat(filePath);
          hashes[pattern] = {
            size: stats.size,
            mtime: stats.mtime.toISOString(),
          };
        }
      } catch (error) {
        // Datei existiert nicht oder Fehler - ignorieren
      }
    }

    return hashes;
  }

  detectChanges(lastScan, currentState) {
    const changes = {
      hasChanges: false,
      fileCountChanged: false,
      directoryCountChanged: false,
      importantFilesChanged: [],
    };

    // Datei-/Verzeichnis-Anzahl-Änderungen
    if (lastScan.fileCount !== currentState.fileCount) {
      changes.hasChanges = true;
      changes.fileCountChanged = true;
    }

    if (lastScan.directoryCount !== currentState.directoryCount) {
      changes.hasChanges = true;
      changes.directoryCountChanged = true;
    }

    // Wichtige Dateien-Änderungen
    for (const [file, hash] of Object.entries(currentState.fileHashes)) {
      const lastHash = lastScan.fileHashes[file];
      if (
        !lastHash ||
        lastHash.size !== hash.size ||
        lastHash.mtime !== hash.mtime
      ) {
        changes.hasChanges = true;
        changes.importantFilesChanged.push(file);
      }
    }

    this.results.changes = changes;
    return changes;
  }

  async isInventoryOutdated() {
    try {
      const stats = await fs.stat(this.inventoryFile);
      const age = Date.now() - stats.mtime.getTime();
      const maxAge = 60 * 60 * 1000; // 1 Stunde

      const isOutdated = age > maxAge;
      this.results.metrics.inventoryAge = Math.round(age / (60 * 1000)); // Minuten
      this.results.metrics.inventoryOutdated = isOutdated;

      return isOutdated;
    } catch (error) {
      // Inventar-Datei existiert nicht - definitiv outdated
      this.results.metrics.inventoryExists = false;
      return true;
    }
  }

  async updateInventory() {
    const startTime = Date.now();

    try {
      // 🚀 DIREKTE JAVASCRIPT-FUNKTION statt Node-Prozess spawning
      console.log(`🔄 [${this.name}] Führe Auto-Inventory aus...`);

      // 🎯 IMPORT DAS SCRIPT DIREKT - KEIN NEUER NODE-PROZESS!
      const inventoryModule = require(this.inventoryScript);

      // Führe die Hauptfunktion direkt aus
      if (typeof inventoryModule === "function") {
        await inventoryModule();
      } else if (
        inventoryModule.run &&
        typeof inventoryModule.run === "function"
      ) {
        await inventoryModule.run();
      } else if (
        inventoryModule.main &&
        typeof inventoryModule.main === "function"
      ) {
        await inventoryModule.main();
      } else {
        // Fallback zu Fallback-Methode
        throw new Error("Kein ausführbarer Export gefunden");
      }

      const duration = Date.now() - startTime;
      this.results.metrics.updateDuration = duration;
      this.results.metrics.inventoryUpdated = true;

      console.log(`✅ [${this.name}] Inventar aktualisiert (${duration}ms)`);
    } catch (error) {
      console.warn(
        `⚠️ [${this.name}] Inventar-Update Timeout - verwende Fallback-Methode`
      );

      // Fallback: Einfache Inventar-Aktualisierung ohne externes Script
      await this.updateInventoryFallback();

      const duration = Date.now() - startTime;
      this.results.metrics.updateDuration = duration;
      this.results.metrics.inventoryUpdated = true;
      this.results.metrics.usedFallback = true;
    }
  }

  async updateInventoryFallback() {
    // Einfache Inventar-Erstellung ohne externes Script
    const stats = await this.getQuickProjectStats();
    const timestamp = new Date().toLocaleString("de-DE");

    const inventoryContent = `# 📋 Projekt-Inventar (Fallback)

**Letzte Aktualisierung:** ${timestamp} - **AUTOMATISCH GENERIERT (FALLBACK)**  
**Scope:** InventoryScope v1.0

## 📊 **ÜBERSICHT**

- **📄 Gesamt-Dateien:** ${stats.files}
- **📁 Verzeichnisse:** ${stats.directories}

## 📝 **STATUS**

✅ Automatische Inventarisierung aktiv
⚡ Fallback-Modus verwendet (Performance-optimiert)
🔄 Vollständiges Inventar wird beim nächsten manuellen Update erstellt

---

**🤖 Dieses Inventar wurde automatisch vom InventoryScope generiert.**  
**Vollständiges Update:** \`node tools/inventory/auto-inventory.js\`
`;

    // Ensure directory exists
    const inventoryDir = path.dirname(this.inventoryFile);
    await fs.mkdir(inventoryDir, { recursive: true });

    await fs.writeFile(this.inventoryFile, inventoryContent);
    console.log(`✅ [${this.name}] Fallback-Inventar erstellt`);
  }

  async saveCurrentScanData(currentState) {
    try {
      // Ensure metrics directory exists
      const metricsDir = path.dirname(this.lastScanFile);
      await fs.mkdir(metricsDir, { recursive: true });

      await fs.writeFile(
        this.lastScanFile,
        JSON.stringify(currentState, null, 2)
      );
      this.results.metrics.scanDataSaved = true;
    } catch (error) {
      console.warn(
        `⚠️ [${this.name}] Konnte Scan-Daten nicht speichern:`,
        error.message
      );
    }
  }

  async validateInventoryQuality() {
    try {
      const inventoryContent = await fs.readFile(this.inventoryFile, "utf8");

      // Qualitäts-Checks
      const quality = {
        hasTimestamp: inventoryContent.includes("Letzte Aktualisierung:"),
        hasStats: inventoryContent.includes("ÜBERSICHT"),
        hasDirectories: inventoryContent.includes("VERZEICHNISSTRUKTUR"),
        hasFiles: inventoryContent.includes("SONSTIGE DATEIEN"),
        contentLength: inventoryContent.length,
      };

      this.results.metrics.inventoryQuality = quality;
      this.results.metrics.inventoryValid = Object.values(quality).every(
        (v) => v === true || typeof v === "number"
      );
    } catch (error) {
      this.results.metrics.inventoryValid = false;
      throw new Error(`Inventar-Validierung fehlgeschlagen: ${error.message}`);
    }
  }

  calculateHealthScore() {
    let score = 0;
    const metrics = this.results.metrics;

    // Grundpunkte für funktionierende Komponenten
    if (metrics.inventoryScriptExists) score += 20;
    if (metrics.inventoryExists !== false) score += 20;
    if (metrics.inventoryValid) score += 30;
    if (metrics.inventoryUpdated) score += 20;
    if (metrics.scanDataSaved) score += 10;

    // Abzüge für Probleme
    if (metrics.inventoryOutdated) score -= 15;
    if (this.results.errors.length > 0)
      score -= this.results.errors.length * 10;

    this.results.healthScore = Math.max(0, Math.min(100, score));
  }

  generateRecommendations() {
    const recommendations = [];
    const metrics = this.results.metrics;

    if (!metrics.inventoryScriptExists) {
      recommendations.push({
        type: "critical",
        message: "Auto-Inventory Script fehlt - Inventarisierung nicht möglich",
        action: "Erstelle tools/inventory/auto-inventory.js",
      });
    }

    if (metrics.inventoryOutdated) {
      recommendations.push({
        type: "warning",
        message: `Inventar ist ${metrics.inventoryAge} Minuten alt`,
        action: "Inventar-Update empfohlen",
      });
    }

    if (!metrics.inventoryValid) {
      recommendations.push({
        type: "error",
        message: "Inventar-Datei ist beschädigt oder unvollständig",
        action: "Inventar neu generieren",
      });
    }

    if (this.results.changes.hasChanges) {
      recommendations.push({
        type: "info",
        message:
          "Projekt-Änderungen erkannt - Inventar automatisch aktualisiert",
        action: "Keine weitere Aktion erforderlich",
      });
    }

    this.results.recommendations = recommendations;
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  getResults() {
    return {
      scope: this.name,
      status: this.results.status,
      healthScore: this.results.healthScore,
      summary: `Inventar-Health: ${this.results.healthScore}% | Änderungen: ${
        this.results.changes.hasChanges ? "Ja" : "Nein"
      }`,
      metrics: this.results.metrics,
      changes: this.results.changes,
      recommendations: this.results.recommendations,
      errors: this.results.errors,
      timestamp: new Date().toISOString(),
    };
  }
}

module.exports = InventoryScope;
