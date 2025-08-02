#!/usr/bin/env node

/**
 * 🔄 SIMON'S INSTRUCTIONS-REDUNDANZ-SCANNER v1.0
 *
 * 🎯 ZWECK: Inhaltliche Duplikate in Instructions-System erkennen
 * 🛡️ SICHERHEIT: Verhindert redundante Regeln und Token-Inflation
 * 🧠 ZERO-REDUNDANCY: Jede Regel nur einmal im Instructions-System
 *
 * FEATURES:
 * ✅ Pattern-basierte Redundanz-Erkennung
 * ✅ Cross-File Content-Duplikate
 * ✅ Semantic Content-Matching
 * ✅ Consolidation-Recommendations
 */

const fs = require("fs").promises;
const path = require("path");

class InstructionsRedundancyScanner {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.results = {
      redundancies: [],
      crossFileRedundancies: [],
      recommendations: [],
    };

    // 🔄 REDUNDANZ-PATTERN FÜR INHALTLICHE DUPLIKATE
    this.redundancyPatterns = [
      {
        key: "validation_workflow",
        patterns: [
          /ZWINGEND.*NACH.*ARBEIT.*validieren/i,
          /Tool.*validieren.*Arbeit/i,
          /Build.*Checker.*validieren/i,
          /Ergebnis.*mit.*Tools.*validieren/i,
        ],
        description: "Work-Validation Duplikate",
      },
      {
        key: "decision_minimization",
        patterns: [
          /Entscheidungs.*minimierung/i,
          /Willenskraft.*schon/i,
          /Option.*vorschlagen.*verboten/i,
          /A.*oder.*B.*verboten/i,
        ],
        description: "Decision-Minimization Duplikate",
      },
      {
        key: "scope_validation",
        patterns: [
          /Scope.*Checker.*verwenden/i,
          /spezifisch.*Checker.*für.*Scope/i,
          /CSS.*Checker.*SEO.*Checker/i,
          /Tool.*basiert.*validation/i,
        ],
        description: "Scope-Validation Duplikate",
      },
      {
        key: "content_preservation",
        patterns: [
          /Content.*Preservation/i,
          /Inhalte.*ERHALTEN.*UMSTRUKTURIEREN/i,
          /Token.*Panik.*Datenverlust/i,
          /Modularisierung.*ohne.*löschen/i,
        ],
        description: "Content-Preservation Duplikate",
      },
      {
        key: "analyzer_zwang",
        patterns: [
          /Analyzer.*ZWINGEND/i,
          /Universal.*Project.*Analyzer/i,
          /tools\/analyzer.*ausführen/i,
          /Projekt.*Analyse.*vor.*Änderung/i,
        ],
        description: "Analyzer-Zwang Duplikate",
      },
      {
        key: "beweis_zwang",
        patterns: [
          /BEWEIS.*Tool.*Name/i,
          /Tool.*basierte.*Fakten/i,
          /Beweise.*vor.*Behauptungen/i,
          /VALIDIERT.*bestätigt/i,
        ],
        description: "Beweis-Zwang Duplikate",
      },
    ];
  }

  /**
   * 🔍 HAUPT-SCAN-METHODE
   */
  async scanRedundancies() {
    console.log("🔄 INSTRUCTIONS-REDUNDANZ-SCANNER gestartet...");
    console.log(`📁 Projekt-Root: ${this.projectRoot}`);

    try {
      const instructionFiles = await this.findInstructionFiles();
      await this.scanPatternRedundancies(instructionFiles);
      await this.scanCrossFileRedundancies(instructionFiles);
      await this.generateReport();

      return this.results;
    } catch (error) {
      console.error("❌ Redundanz-Scanner-Fehler:", error);
      throw error;
    }
  }

  /**
   * 🔍 INSTRUCTION-DATEIEN FINDEN
   */
  async findInstructionFiles() {
    const instructionPaths = [
      ".github/copilot-instructions.md",
      ".github/instructions",
      "docs/todos",
    ];

    const files = [];

    for (const searchPath of instructionPaths) {
      const fullPath = path.join(this.projectRoot, searchPath);

      try {
        const stats = await fs.stat(fullPath);

        if (stats.isFile() && fullPath.endsWith(".md")) {
          files.push(fullPath);
        } else if (stats.isDirectory()) {
          const dirFiles = await this.findMarkdownFiles(fullPath);
          files.push(...dirFiles);
        }
      } catch (error) {
        // Pfad existiert nicht - ignorieren
      }
    }

    console.log(`📋 ${files.length} Instruction-Dateien gefunden`);
    return files;
  }

  /**
   * 📄 MARKDOWN-DATEIEN REKURSIV FINDEN
   */
  async findMarkdownFiles(dirPath) {
    const files = [];

    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          const subFiles = await this.findMarkdownFiles(fullPath);
          files.push(...subFiles);
        } else if (entry.isFile() && entry.name.endsWith(".md")) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`⚠️ Verzeichnis-Scan Fehler ${dirPath}:`, error.message);
    }

    return files;
  }

  /**
   * 🔄 PATTERN-BASIERTE REDUNDANZ-SCANNER
   */
  async scanPatternRedundancies(instructionFiles) {
    console.log("\n🔄 Scanne Pattern-Redundanzen...");

    for (const filePath of instructionFiles) {
      try {
        const content = await fs.readFile(filePath, "utf-8");

        for (const redundancy of this.redundancyPatterns) {
          let matches = 0;
          const foundLines = [];

          for (const pattern of redundancy.patterns) {
            const match = content.match(pattern);
            if (match) {
              matches++;
              const lineNumber = this.findLineNumber(content, match[0]);
              foundLines.push({
                line: lineNumber,
                text: this.extractLineContent(content, lineNumber),
                pattern: pattern.source,
              });
            }
          }

          if (matches > 1) {
            this.results.redundancies.push({
              file: filePath,
              redundancyType: redundancy.key,
              description: redundancy.description,
              matchCount: matches,
              lines: foundLines,
              severity: "MEDIUM",
              recommendation: `Konsolidiere ${matches} ähnliche Regeln zu einer einheitlichen Regel`,
            });
          }
        }
      } catch (error) {
        console.error(`⚠️ Pattern-Scan Fehler ${filePath}:`, error.message);
      }
    }

    console.log(
      `🔄 ${this.results.redundancies.length} Pattern-Redundanzen gefunden`
    );
  }

  /**
   * 🔄 CROSS-FILE REDUNDANZ-SCANNER
   */
  async scanCrossFileRedundancies(instructionFiles) {
    console.log("\n🔄 Scanne Cross-File-Redundanzen...");

    const contentBlocks = new Map();

    for (const filePath of instructionFiles) {
      try {
        const content = await fs.readFile(filePath, "utf-8");

        // Extrahiere bedeutungsvolle Content-Blöcke
        const blocks = this.extractContentBlocks(content);

        for (const block of blocks) {
          const normalizedBlock = this.normalizeContent(block.content);
          if (normalizedBlock.length > 100) {
            // Mindestlänge für Relevanz
            const key = this.generateContentHash(normalizedBlock);

            if (contentBlocks.has(key)) {
              // Duplikat gefunden!
              const existing = contentBlocks.get(key);
              this.results.crossFileRedundancies.push({
                file: filePath,
                redundancyType: "cross_file_duplicate",
                description: `Identischer Content in ${path.basename(
                  existing.file
                )}`,
                line: block.line,
                duplicateFile: existing.file,
                duplicateLine: existing.line,
                severity: "HIGH",
                recommendation: `Entferne Duplikat und verweise auf ${path.basename(
                  existing.file
                )}`,
                content: block.content.substring(0, 200) + "...",
              });
            } else {
              contentBlocks.set(key, {
                file: filePath,
                line: block.line,
                content: block.content,
              });
            }
          }
        }
      } catch (error) {
        console.error(`⚠️ Cross-File-Scan Fehler ${filePath}:`, error.message);
      }
    }

    console.log(
      `🔄 ${this.results.crossFileRedundancies.length} Cross-File-Redundanzen gefunden`
    );
  }

  /**
   * 📄 CONTENT-BLOCK-EXTRAKTOR
   */
  extractContentBlocks(content) {
    const lines = content.split("\n");
    const blocks = [];
    let currentBlock = "";
    let blockStart = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Block-Trenner: Leer-Zeilen, Headers, Separatoren
      if (
        line === "" ||
        line.startsWith("#") ||
        line.startsWith("---") ||
        line.startsWith("===")
      ) {
        if (currentBlock.trim().length > 50) {
          blocks.push({
            content: currentBlock.trim(),
            line: blockStart + 1,
          });
        }
        currentBlock = "";
        blockStart = i + 1;
      } else {
        currentBlock += line + "\n";
      }
    }

    // Letzter Block
    if (currentBlock.trim().length > 50) {
      blocks.push({
        content: currentBlock.trim(),
        line: blockStart + 1,
      });
    }

    return blocks;
  }

  /**
   * 🔧 CONTENT-NORMALISIERUNG für besseren Vergleich
   */
  normalizeContent(content) {
    return content
      .toLowerCase()
      .replace(/\s+/g, " ") // Multiple Spaces zu Single Space
      .replace(/[✅❌⚠️🔧🎯📋]/g, "") // Emojis entfernen
      .replace(/\*\*([^*]+)\*\*/g, "$1") // Bold Markdown entfernen
      .replace(/`([^`]+)`/g, "$1") // Code Backticks entfernen
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Markdown Links entfernen
      .trim();
  }

  /**
   * 🔨 CONTENT-HASH für Duplikat-Erkennung
   */
  generateContentHash(content) {
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }

  /**
   * 🔢 ZEILEN-NUMMER FINDEN
   */
  findLineNumber(content, searchText) {
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchText)) {
        return i + 1;
      }
    }
    return 1;
  }

  /**
   * 📄 ZEILEN-INHALT EXTRAHIEREN
   */
  extractLineContent(content, lineNumber) {
    const lines = content.split("\n");
    return lines[lineNumber - 1] || "";
  }

  /**
   * 📄 REPORT GENERIEREN
   */
  async generateReport() {
    const reportPath = path.join(
      this.projectRoot,
      "tools",
      "analyzer",
      `redundanz-report-${new Date().toISOString().split("T")[0]}.md`
    );

    const totalRedundancies =
      this.results.redundancies.length +
      this.results.crossFileRedundancies.length;

    let report = `# 🔄 INSTRUCTIONS-REDUNDANZ-REPORT\n\n`;
    report += `**Erstellt:** ${new Date().toLocaleString("de-DE")}\n`;
    report += `**Scanner:** Instructions-Redundancy-Scanner v1.0\n`;
    report += `**Projekt-Root:** ${this.projectRoot}\n\n`;

    report += `## 📊 ZUSAMMENFASSUNG\n\n`;
    report += `- **Pattern-Redundanzen:** ${this.results.redundancies.length}\n`;
    report += `- **Cross-File-Redundanzen:** ${this.results.crossFileRedundancies.length}\n`;
    report += `- **Gesamt-Redundanzen:** ${totalRedundancies}\n\n`;

    if (this.results.redundancies.length > 0) {
      report += `## 🔄 PATTERN-REDUNDANZEN\n\n`;
      for (const redundancy of this.results.redundancies) {
        report += `### ⚠️ ${redundancy.description}\n\n`;
        report += `**Datei:** \`${path.basename(redundancy.file)}\`\n`;
        report += `**Matches:** ${redundancy.matchCount}\n`;
        report += `**Empfehlung:** ${redundancy.recommendation}\n\n`;

        report += `**Gefundene Zeilen:**\n`;
        for (const line of redundancy.lines) {
          report += `- Zeile ${line.line}: \`${line.text.substring(
            0,
            100
          )}...\`\n`;
        }
        report += `\n`;
      }
    }

    if (this.results.crossFileRedundancies.length > 0) {
      report += `## 🔄 CROSS-FILE-REDUNDANZEN\n\n`;
      for (const redundancy of this.results.crossFileRedundancies) {
        report += `### 🚨 ${redundancy.description}\n\n`;
        report += `**Datei:** \`${path.basename(redundancy.file)}\` (Zeile ${
          redundancy.line
        })\n`;
        report += `**Duplikat in:** \`${path.basename(
          redundancy.duplicateFile
        )}\` (Zeile ${redundancy.duplicateLine})\n`;
        report += `**Empfehlung:** ${redundancy.recommendation}\n\n`;
        report += `**Content-Preview:**\n\`\`\`\n${redundancy.content}\n\`\`\`\n\n`;
      }
    }

    if (totalRedundancies === 0) {
      report += `## ✅ KEINE REDUNDANZEN\n\n`;
      report += `Keine Redundanzen gefunden! Instructions-System ist optimal strukturiert.\n\n`;
    }

    await fs.writeFile(reportPath, report, "utf-8");
    console.log(`📄 Report gespeichert: ${reportPath}`);
  }
}

// CLI Usage
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();

  const scanner = new InstructionsRedundancyScanner(projectRoot);
  scanner
    .scanRedundancies()
    .then((results) => {
      const totalRedundancies =
        results.redundancies.length + results.crossFileRedundancies.length;
      console.log(`\n📊 REDUNDANZ-SCAN ABGESCHLOSSEN:`);
      console.log(`   🔄 Pattern-Redundanzen: ${results.redundancies.length}`);
      console.log(
        `   🔄 Cross-File-Redundanzen: ${results.crossFileRedundancies.length}`
      );
      console.log(`   📋 Gesamt-Redundanzen: ${totalRedundancies}`);

      if (totalRedundancies === 0) {
        console.log(`\n✅ PERFEKT: Keine Redundanzen gefunden!`);
      } else {
        console.log(
          `\n⚠️ ${totalRedundancies} Redundanzen identifiziert - Bereinigung empfohlen`
        );
      }
    })
    .catch((error) => {
      console.error("\n❌ Redundanz-Scan fehlgeschlagen:", error);
      process.exit(1);
    });
}

module.exports = InstructionsRedundancyScanner;
