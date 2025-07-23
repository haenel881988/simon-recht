#!/usr/bin/env node

/**
 * 🎯 SIMON'S AUTOMATISCHES INVENTUR-SCRIPT v2.0
 *
 * WORKFLOW:
 * 1. Multi-Scope Build-Checker durchlaufen lassen
 * 2. Vollständige Projekt-Inventur
 * 3. projekt_inventar.md aktualisieren
 *
 * ✅ NEU: Multi-Scope-Integration
 * ✅ Scope-basierte Build-Checker v2.0
 * ✅ Modulare Architektur-Unterstützung
 *
 * AUSFÜHRUNG:
 * - Manuell: node tools/inventory/auto-inventory.js
 * - Automatisch: Vor jedem Build-Prozess
 * - Durch KI: Bei expliziter Anfrage
 */

const fs = require("fs").promises;
const path = require("path");

class AutoInventory {
  constructor() {
    this.projectRoot = path.join(__dirname, "..", "..");
    this.inventoryFile = path.join(
      this.projectRoot,
      ".github",
      "instructions",
      "organisation",
      "inventar",
      "projekt_inventar.md"
    );
    this.excludedPaths = [
      "node_modules",
      ".git",
      "dist",
      ".astro",
      "package-lock.json",
    ];
    this.inventory = {
      directories: [],
      files: [],
      scripts: [],
      configs: [],
      docs: [],
      stats: {},
    };
  }

  async run() {
    console.log("🚀 Starte automatische Inventur...");

    try {
      // 1. Build-Checker laufen lassen
      await this.runBuildChecker();

      // 2. Projekt scannen
      await this.scanProject();

      // 3. Inventar aktualisieren
      await this.updateInventoryFile();

      console.log("✅ Inventur erfolgreich abgeschlossen!");
    } catch (error) {
      console.error("❌ Inventur-Fehler:", error.message);
      process.exit(1);
    }
  }

  async runBuildChecker() {
    console.log("🔍 Führe Build-Checker aus...");
    const { spawn } = require("child_process");

    return new Promise((resolve, reject) => {
      const checkerPath = path.join(
        this.projectRoot,
        "tools",
        "build_check",
        "multi-scope-checker.cjs"
      );

      const checker = spawn("node", [checkerPath], {
        cwd: this.projectRoot,
        stdio: "inherit",
      });

      checker.on("close", (code) => {
        if (code === 0) {
          console.log("✅ Build-Checker erfolgreich");
          resolve();
        } else {
          reject(new Error(`Build-Checker fehlgeschlagen: ${code}`));
        }
      });
    });
  }

  async scanProject() {
    console.log("📁 Scanne Projektstruktur...");
    await this.scanDirectory(this.projectRoot, "");
    this.calculateStats();
  }

  async scanDirectory(dirPath, relativePath) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        const relPath = path.join(relativePath, entry.name).replace(/\\/g, "/");

        // Ausgeschlossene Pfade überspringen
        if (
          this.excludedPaths.some(
            (excluded) =>
              relPath.startsWith(excluded) || entry.name.startsWith(".")
          )
        ) {
          continue;
        }

        if (entry.isDirectory()) {
          this.inventory.directories.push(relPath);
          await this.scanDirectory(fullPath, relPath);
        } else {
          this.categorizeFile(relPath, entry.name);
        }
      }
    } catch (error) {
      console.log(`⚠️ Überspringe Verzeichnis: ${relativePath}`);
    }
  }

  categorizeFile(filePath, fileName) {
    const ext = path.extname(fileName).toLowerCase();

    if ([".js", ".cjs", ".mjs", ".ts"].includes(ext)) {
      this.inventory.scripts.push(filePath);
    } else if (
      [".json", ".config.js", ".config.mjs"].includes(ext) ||
      fileName.includes("config")
    ) {
      this.inventory.configs.push(filePath);
    } else if ([".md", ".txt", ".rst"].includes(ext)) {
      this.inventory.docs.push(filePath);
    } else {
      this.inventory.files.push(filePath);
    }
  }

  calculateStats() {
    this.inventory.stats = {
      totalDirectories: this.inventory.directories.length,
      totalFiles:
        this.inventory.files.length +
        this.inventory.scripts.length +
        this.inventory.configs.length +
        this.inventory.docs.length,
      totalScripts: this.inventory.scripts.length,
      totalConfigs: this.inventory.configs.length,
      totalDocs: this.inventory.docs.length,
      lastUpdate: new Date().toISOString(),
    };
  }

  async updateInventoryFile() {
    console.log("📝 Aktualisiere Inventar-Datei...");

    const content = this.generateInventoryContent();

    try {
      await fs.mkdir(path.dirname(this.inventoryFile), { recursive: true });
      await fs.writeFile(this.inventoryFile, content, "utf-8");
      console.log("✅ projekt_inventar.md aktualisiert");
    } catch (error) {
      throw new Error(`Inventar-Update fehlgeschlagen: ${error.message}`);
    }
  }

  generateInventoryContent() {
    const timestamp = new Date().toLocaleString("de-DE");

    return `# 📋 Projekt-Inventar

**Letzte Aktualisierung:** ${timestamp} - **AUTOMATISCH GENERIERT**  
**Script:** tools/inventory/auto-inventory.js

## 📊 **ÜBERSICHT**

- **📁 Verzeichnisse:** ${this.inventory.stats.totalDirectories}
- **📄 Gesamt-Dateien:** ${this.inventory.stats.totalFiles}
- **⚙️ Scripts:** ${this.inventory.stats.totalScripts}
- **🔧 Konfigurationen:** ${this.inventory.stats.totalConfigs}
- **📝 Dokumentation:** ${this.inventory.stats.totalDocs}

## 📁 **VERZEICHNISSTRUKTUR**

${this.inventory.directories.map((dir) => `- ${dir}/`).join("\n")}

## ⚙️ **SCRIPTS & TOOLS**

${this.inventory.scripts.map((script) => `- ${script}`).join("\n")}

## 🔧 **KONFIGURATIONSDATEIEN**

${this.inventory.configs.map((config) => `- ${config}`).join("\n")}

## 📝 **DOKUMENTATION**

${this.inventory.docs.map((doc) => `- ${doc}`).join("\n")}

## 📄 **SONSTIGE DATEIEN**

${this.inventory.files
  .slice(0, 50)
  .map((file) => `- ${file}`)
  .join("\n")}
${
  this.inventory.files.length > 50
    ? `\n... und ${this.inventory.files.length - 50} weitere Dateien`
    : ""
}

---

**🤖 Dieses Inventar wurde automatisch generiert.**  
**Manuelle Ausführung:** \`node tools/inventory/auto-inventory.js\`  
**Build-Integration:** Läuft automatisch vor jedem Build-Prozess.
`;
  }
}

// Script ausführen
if (require.main === module) {
  const inventory = new AutoInventory();
  inventory.run().catch(console.error);
}

module.exports = AutoInventory;
