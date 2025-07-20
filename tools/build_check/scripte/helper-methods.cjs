/**
 * 📂 HELPER METHODS FOR BUILD-CHECKER
 * Hilfsmethoden für den Enhanced Build-Checker
 */

const fs = require("fs").promises;
const path = require("path");

class HelperMethods {
  /**
   * 📂 Hilfsmethode: Finde alle Astro-Dateien
   */
  static async getAstroFiles(projectRoot) {
    const srcDir = path.join(projectRoot, "src");

    try {
      const files = await this.getFilesRecursively(srcDir);
      return files.filter((file) => file.endsWith(".astro"));
    } catch (error) {
      console.error("❌ Fehler beim Sammeln von Astro-Dateien:", error.message);
      return [];
    }
  }

  /**
   * 📂 Rekursiv alle Dateien sammeln
   */
  static async getFilesRecursively(dir) {
    const files = [];

    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          // Überspringe node_modules und .git
          if (!["node_modules", ".git", "dist"].includes(entry.name)) {
            const subFiles = await this.getFilesRecursively(fullPath);
            files.push(...subFiles);
          }
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`❌ Fehler beim Lesen von ${dir}:`, error.message);
    }

    return files;
  }
}

module.exports = HelperMethods;
