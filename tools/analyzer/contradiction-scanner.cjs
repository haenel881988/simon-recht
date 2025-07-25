#!/usr/bin/env node

/**
 * 🔍 SIMON'S WIDERSPRUCHS-SCANNER v1.0
 *
 * 🎯 ZWECK: Token-sparende Instructions-Analyse ohne KI-Search-Chaos
 * 🛡️ SICHERHEIT: Verhindert Layout-Zerstörung durch strukturierte Validierung
 * 🧠 ANTI-PROKRASTINATION: Direkte Problem-Identifikation statt Tool-Bau
 *
 * FEATURES:
 * ✅ Interne Link-Validierung (404-Links finden)
 * ✅ Leere/Redundante Dateien-Detection
 * ✅ Ungültige Pfad-Referenzen scannen
 * ✅ Instructions-Widersprüche erkennen
 * ✅ Token-Estimation für sichere KI-Arbeit
 */

const fs = require("fs").promises;
const path = require("path");

class ContradictionScanner {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.results = {
      invalidLinks: [],
      emptyFiles: [],
      contradictions: [],
      pathErrors: [],
      tokenWarnings: [],
      recommendations: [],
    };

    // Instructions-Dateien für Widerspruchs-Analyse
    this.instructionFiles = [
      ".github/copilot-instructions.md",
      "docs/instructions/**/*.md",
      "docs/todos/**/*.md",
    ];

    // Häufige Widerspruchs-Pattern
    this.contradictionPatterns = [
      {
        pattern1: /ABSOLUT VERBOTEN.*search/i,
        pattern2: /grep.search|file.search|semantic.search/i,
        description: "Search-Verbot vs. Search-Nutzung",
      },
      {
        pattern1: /ZERO NEUE TOOLS/i,
        pattern2: /entwickeln|erstellen|bauen.*tool/i,
        description: "Tool-Moratorium vs. Tool-Entwicklung",
      },
      {
        pattern1: /NUR WEBSITE-ARBEIT/i,
        pattern2: /dashboard|analyse.*system|modularisierung/i,
        description: "Website-Fokus vs. Tool-Features",
      },
    ];
  }

  /**
   * 🔍 HAUPT-SCAN-METHODE
   */
  async scanProject() {
    console.log("🔍 WIDERSPRUCHS-SCANNER gestartet...");
    console.log(`📁 Projekt-Root: ${this.projectRoot}`);

    try {
      await this.scanInvalidLinks();
      await this.scanEmptyFiles();
      await this.scanInstructionContradictions();
      await this.scanPathReferences();
      await this.generateReport();

      return this.results;
    } catch (error) {
      console.error("❌ Scanner-Fehler:", error);
      throw error;
    }
  }

  /**
   * 🔗 UNGÜLTIGE LINKS SCANNEN
   */
  async scanInvalidLinks() {
    console.log("\n🔗 Scanne ungültige interne Links...");

    const mdFiles = await this.findMarkdownFiles();

    for (const filePath of mdFiles) {
      try {
        const content = await fs.readFile(filePath, "utf-8");
        const links = this.extractInternalLinks(content);

        for (const link of links) {
          const targetPath = this.resolveRelativePath(filePath, link);
          const exists = await this.fileExists(targetPath);

          if (!exists) {
            this.results.invalidLinks.push({
              file: filePath,
              link: link,
              targetPath: targetPath,
              severity: "HIGH",
            });
          }
        }
      } catch (error) {
        console.warn(`⚠️ Fehler beim Scannen von ${filePath}:`, error.message);
      }
    }

    console.log(
      `🔗 ${this.results.invalidLinks.length} ungültige Links gefunden`
    );
  }

  /**
   * 📄 LEERE DATEIEN SCANNEN
   */
  async scanEmptyFiles() {
    console.log("\n📄 Scanne leere/redundante Dateien...");

    const allFiles = await this.findAllFiles();

    for (const filePath of allFiles) {
      try {
        const stats = await fs.stat(filePath);
        const content = await fs.readFile(filePath, "utf-8");

        // Leere Dateien
        if (stats.size === 0 || content.trim().length === 0) {
          this.results.emptyFiles.push({
            file: filePath,
            size: stats.size,
            type: "EMPTY",
            severity: "MEDIUM",
          });
        }

        // Sehr kleine Dateien (< 50 Zeichen, nur Whitespace)
        if (content.trim().length > 0 && content.trim().length < 50) {
          this.results.emptyFiles.push({
            file: filePath,
            size: stats.size,
            content: content.trim(),
            type: "MINIMAL",
            severity: "LOW",
          });
        }
      } catch (error) {
        // Datei nicht lesbar - notieren
        this.results.emptyFiles.push({
          file: filePath,
          error: error.message,
          type: "UNREADABLE",
          severity: "HIGH",
        });
      }
    }

    console.log(
      `📄 ${this.results.emptyFiles.length} problematische Dateien gefunden`
    );
  }

  /**
   * ⚔️ INSTRUCTIONS-WIDERSPRÜCHE SCANNEN
   */
  async scanInstructionContradictions() {
    console.log("\n⚔️ Scanne Instructions-Widersprüche...");

    const instructionFiles = await this.findInstructionFiles();

    for (const filePath of instructionFiles) {
      try {
        const content = await fs.readFile(filePath, "utf-8");

        // Token-Warnung für sehr große Instructions
        const estimatedTokens = Math.floor(content.length / 4);
        if (estimatedTokens > 10000) {
          this.results.tokenWarnings.push({
            file: filePath,
            estimatedTokens: estimatedTokens,
            severity: "CRITICAL",
            recommendation: "Datei aufteilen oder modularisieren",
          });
        }

        // Pattern-basierte Widerspruchs-Suche
        for (const contradiction of this.contradictionPatterns) {
          const match1 = content.match(contradiction.pattern1);
          const match2 = content.match(contradiction.pattern2);

          if (match1 && match2) {
            this.results.contradictions.push({
              file: filePath,
              description: contradiction.description,
              evidence1: match1[0],
              evidence2: match2[0],
              severity: "HIGH",
            });
          }
        }
      } catch (error) {
        console.warn(
          `⚠️ Fehler beim Scannen von Instructions ${filePath}:`,
          error.message
        );
      }
    }

    console.log(
      `⚔️ ${this.results.contradictions.length} Widersprüche gefunden`
    );
  }

  /**
   * 📂 PFAD-REFERENZEN VALIDIEREN
   */
  async scanPathReferences() {
    console.log("\n📂 Validiere Pfad-Referenzen...");

    const mdFiles = await this.findMarkdownFiles();
    const pathPattern = /(?:docs\/|src\/|tools\/|\.github\/)[^\s\)]+/g;

    for (const filePath of mdFiles) {
      try {
        const content = await fs.readFile(filePath, "utf-8");
        const paths = content.match(pathPattern) || [];

        for (const refPath of paths) {
          const fullPath = path.join(this.projectRoot, refPath);
          const exists = await this.fileExists(fullPath);

          if (!exists) {
            this.results.pathErrors.push({
              file: filePath,
              referencedPath: refPath,
              fullPath: fullPath,
              severity: "MEDIUM",
            });
          }
        }
      } catch (error) {
        console.warn(
          `⚠️ Fehler beim Pfad-Scan von ${filePath}:`,
          error.message
        );
      }
    }

    console.log(
      `📂 ${this.results.pathErrors.length} ungültige Pfad-Referenzen gefunden`
    );
  }

  /**
   * 📊 RECOMMENDATIONS GENERIEREN
   */
  generateRecommendations() {
    const total =
      this.results.invalidLinks.length +
      this.results.emptyFiles.length +
      this.results.contradictions.length +
      this.results.pathErrors.length;

    if (total === 0) {
      this.results.recommendations.push({
        priority: "SUCCESS",
        action: "Projekt ist strukturell sauber - KI kann sicher arbeiten!",
      });
      return;
    }

    // Kritische Issues zuerst
    if (this.results.contradictions.length > 0) {
      this.results.recommendations.push({
        priority: "CRITICAL",
        action: `Löse ${this.results.contradictions.length} Instructions-Widersprüche vor KI-Arbeit`,
      });
    }

    if (this.results.tokenWarnings.length > 0) {
      this.results.recommendations.push({
        priority: "CRITICAL",
        action: `${this.results.tokenWarnings.length} Dateien überschreiten Token-Limits - Modularisierung erforderlich`,
      });
    }

    // Mittlere Issues
    if (this.results.invalidLinks.length > 0) {
      this.results.recommendations.push({
        priority: "HIGH",
        action: `Repariere ${this.results.invalidLinks.length} ungültige Links für Navigation`,
      });
    }

    // Niedrige Issues
    if (this.results.emptyFiles.length > 0) {
      this.results.recommendations.push({
        priority: "MEDIUM",
        action: `Bereinige ${this.results.emptyFiles.length} leere/redundante Dateien`,
      });
    }
  }

  /**
   * 📄 REPORT GENERIEREN
   */
  async generateReport() {
    console.log("\n📄 Generiere Widerspruchs-Report...");

    this.generateRecommendations();

    const reportPath = path.join(
      this.projectRoot,
      "tools",
      "analyzer",
      `widerspruchs-report-${new Date().toISOString().split("T")[0]}.md`
    );

    const report = this.formatReport();
    await fs.writeFile(reportPath, report, "utf-8");

    console.log(`📄 Report gespeichert: ${reportPath}`);
    console.log("\n" + "=".repeat(60));
    console.log("🎯 WIDERSPRUCHS-SCAN ABGESCHLOSSEN");
    console.log("=".repeat(60));

    // Kurze Zusammenfassung
    const criticalIssues =
      this.results.contradictions.length + this.results.tokenWarnings.length;
    const totalIssues =
      this.results.invalidLinks.length +
      this.results.emptyFiles.length +
      this.results.contradictions.length +
      this.results.pathErrors.length;

    console.log(`🚨 Kritische Issues: ${criticalIssues}`);
    console.log(`⚠️ Gesamt-Issues: ${totalIssues}`);
    console.log(`📋 Empfehlungen: ${this.results.recommendations.length}`);

    if (criticalIssues === 0) {
      console.log("✅ KI KANN SICHER ARBEITEN!");
    } else {
      console.log("🚨 INSTRUCTIONS-REPARATUR ERFORDERLICH!");
    }

    return reportPath;
  }

  /**
   * 📝 REPORT FORMATIEREN
   */
  formatReport() {
    const timestamp = new Date().toLocaleString("de-DE");

    return `# 🔍 WIDERSPRUCHS-SCANNER REPORT

**Generiert:** ${timestamp}  
**Scanner-Version:** v1.0  
**Projekt:** simon-recht

## 📊 ZUSAMMENFASSUNG

| Kategorie | Anzahl | Schweregrad |
|-----------|---------|-------------|
| 🚨 Instructions-Widersprüche | ${this.results.contradictions.length} | HIGH |
| 🔢 Token-Warnungen | ${this.results.tokenWarnings.length} | CRITICAL |
| 🔗 Ungültige Links | ${this.results.invalidLinks.length} | HIGH |
| 📄 Leere Dateien | ${this.results.emptyFiles.length} | MEDIUM |
| 📂 Pfad-Fehler | ${this.results.pathErrors.length} | MEDIUM |

## 🎯 EMPFEHLUNGEN

${this.results.recommendations
  .map(
    (rec) =>
      `### ${
        rec.priority === "CRITICAL"
          ? "🚨"
          : rec.priority === "HIGH"
          ? "⚠️"
          : "💡"
      } ${rec.priority}
${rec.action}`
  )
  .join("\n\n")}

## 🔍 DETAILIERTE ERGEBNISSE

### ⚔️ INSTRUCTIONS-WIDERSPRÜCHE
${
  this.results.contradictions.length === 0
    ? "✅ Keine Widersprüche gefunden"
    : this.results.contradictions
        .map(
          (item) =>
            `- **${item.description}** in \`${item.file}\`
  - Widerspruch 1: "${item.evidence1}"
  - Widerspruch 2: "${item.evidence2}"`
        )
        .join("\n")
}

### 🔢 TOKEN-WARNUNGEN
${
  this.results.tokenWarnings.length === 0
    ? "✅ Alle Dateien im Token-Limit"
    : this.results.tokenWarnings
        .map(
          (item) =>
            `- \`${
              item.file
            }\`: ${item.estimatedTokens.toLocaleString()} Tokens (${
              item.recommendation
            })`
        )
        .join("\n")
}

### 🔗 UNGÜLTIGE LINKS
${
  this.results.invalidLinks.length === 0
    ? "✅ Alle Links funktional"
    : this.results.invalidLinks
        .map(
          (item) =>
            `- \`${item.file}\`: Link zu \`${item.link}\` nicht gefunden`
        )
        .join("\n")
}

### 📄 LEERE/REDUNDANTE DATEIEN
${
  this.results.emptyFiles.length === 0
    ? "✅ Keine leeren Dateien"
    : this.results.emptyFiles
        .map((item) => `- \`${item.file}\`: ${item.type} (${item.size} Bytes)`)
        .join("\n")
}

### 📂 PFAD-REFERENZ-FEHLER
${
  this.results.pathErrors.length === 0
    ? "✅ Alle Pfade gültig"
    : this.results.pathErrors
        .map(
          (item) =>
            `- \`${item.file}\`: Referenz zu \`${item.referencedPath}\` ungültig`
        )
        .join("\n")
}

---
*Report generiert durch Simon's Widerspruchs-Scanner v1.0*
`;
  }

  // HELPER METHODS
  async findMarkdownFiles() {
    const files = [];
    await this.walkDirectory(this.projectRoot, async (filePath) => {
      if (filePath.endsWith(".md")) {
        files.push(filePath);
      }
    });
    return files;
  }

  async findInstructionFiles() {
    const files = [];
    const instructionPaths = [
      path.join(this.projectRoot, ".github"),
      path.join(this.projectRoot, "docs", "instructions"),
      path.join(this.projectRoot, "docs", "todos"),
    ];

    for (const dirPath of instructionPaths) {
      try {
        await this.walkDirectory(dirPath, async (filePath) => {
          if (filePath.endsWith(".md")) {
            files.push(filePath);
          }
        });
      } catch (error) {
        // Verzeichnis existiert nicht - ignorieren
      }
    }

    return files;
  }

  async findAllFiles() {
    const files = [];
    await this.walkDirectory(this.projectRoot, async (filePath) => {
      // Ignoriere node_modules, .git, etc.
      if (
        !filePath.includes("node_modules") &&
        !filePath.includes(".git") &&
        !filePath.includes("dist")
      ) {
        files.push(filePath);
      }
    });
    return files;
  }

  async walkDirectory(dir, callback) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          await this.walkDirectory(fullPath, callback);
        } else {
          await callback(fullPath);
        }
      }
    } catch (error) {
      // Verzeichnis nicht zugänglich
    }
  }

  extractInternalLinks(content) {
    // Markdown Links: [text](path) und direkte Pfade
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;

    while ((match = linkPattern.exec(content)) !== null) {
      const link = match[2];
      // Nur interne Links (keine URLs)
      if (!link.startsWith("http") && !link.startsWith("mailto:")) {
        links.push(link);
      }
    }

    return links;
  }

  resolveRelativePath(fromFile, link) {
    const dir = path.dirname(fromFile);
    return path.resolve(dir, link);
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }
}

// CLI Usage
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();

  const scanner = new ContradictionScanner(projectRoot);
  scanner
    .scanProject()
    .then(() => {
      console.log("\n✅ Widerspruchs-Scan erfolgreich abgeschlossen!");
    })
    .catch((error) => {
      console.error("\n❌ Widerspruchs-Scan fehlgeschlagen:", error);
      process.exit(1);
    });
}

module.exports = ContradictionScanner;
