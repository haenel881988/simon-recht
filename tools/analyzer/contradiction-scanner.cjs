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

    // UNIVERSELLE Widerspruchs-Pattern (erweitert für ALLE Konflikte)
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
      // ZAHLEN-WIDERSPRÜCHE (wie 1200/1000-Zeilen)
      {
        pattern1: /1200.*Zeilen.*(?:global|regel)/i,
        pattern2: /1000.*Zeilen.*(?:regel|limit)/i,
        description: "Zeilenlimit-Konflikt: 1200 vs 1000 Zeilen",
        severity: "CRITICAL",
        autoFix: "Global-Regel (1200) sollte lokale Regeln überschreiben",
      },
      // TOOL-NUTZUNGS-WIDERSPRÜCHE
      {
        pattern1: /replace_string_in_file.*VERBOTEN/i,
        pattern2: /replace_string_in_file\(/i,
        description: "Tool-Verbot vs. Tool-Nutzung",
        severity: "HIGH",
      },
      // SCOPE-WIDERSPRÜCHE
      {
        pattern1: /SEPARATE.*SCOPES/i,
        pattern2: /KOMBINIERT.*erlaubt/i,
        description: "Scope-Isolation vs. Scope-Kombination",
        severity: "MEDIUM",
      },
      // TOKEN-WIDERSPRÜCHE
      {
        pattern1: /(\d+)k?\s*Token.*Limit/i,
        pattern2: /(\d+)k?\s*Token.*Limit/i,
        description: "Unterschiedliche Token-Limits definiert",
        severity: "HIGH",
        customCheck: this.checkTokenLimitConflicts.bind(this),
      },
      // PRIORITÄTS-WIDERSPRÜCHE
      {
        pattern1: /KRITISCH|CRITICAL|HÖCHSTE PRIORITÄT/i,
        pattern2: /KRITISCH|CRITICAL|HÖCHSTE PRIORITÄT/i,
        description: "Multiple kritische Prioritäten",
        severity: "MEDIUM",
        customCheck: this.checkMultipleCriticalPriorities.bind(this),
      },
      // SPRACH-WIDERSPRÜCHE
      {
        pattern1: /DU-Form.*zwingend/i,
        pattern2: /SIE-Form|Sie\s+(?:sind|haben|können)/i,
        description: "Du-Form vs. Sie-Form Konflikt",
        severity: "LOW",
      },
      // WORKFLOW-WIDERSPRÜCHE
      {
        pattern1: /ZWINGEND.*(?:vor|nach)/i,
        pattern2: /OPTIONAL|kann.*übersprungen/i,
        description: "Zwingender vs. optionaler Workflow",
        severity: "HIGH",
      },
    ];

    // KONTEXT-AUSSCHLÜSSE für False-Positives
    this.contextExclusions = [
      /Ein Beispiel aus der Praxis:/i,
      /Beispiel.*:/i,
      /Z\.B\.:/i,
      /Zum Beispiel:/i,
      /Example:/i,
      /BEISPIEL-KONFLIKTE:/i,
      /\*\*Beispiel.*\*\*/i,
      /<!-- Beispiel/i,
      /Demo:/i,
      /Illustration:/i,
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
            // Finde Zeilennummer für den Link
            const lineNumber = this.findLineNumber(content, link);
            const lineContent = this.extractLineContent(content, lineNumber);

            this.results.invalidLinks.push({
              file: filePath,
              link: link,
              targetPath: targetPath,
              severity: "HIGH",
              lineNumber: lineNumber,
              lineContent: lineContent,
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
            lineNumber: 1,
            lineContent: "[DATEI LEER]",
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
            lineNumber: 1,
            lineContent: content.trim(),
          });
        }
      } catch (error) {
        // Datei nicht lesbar - notieren
        this.results.emptyFiles.push({
          file: filePath,
          error: error.message,
          type: "UNREADABLE",
          severity: "HIGH",
          lineNumber: 1,
          lineContent: `[FEHLER: ${error.message}]`,
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
          // Standard Pattern-Matching
          const match1 = content.match(contradiction.pattern1);
          const match2 = content.match(contradiction.pattern2);

          if (match1 && match2) {
            // KONTEXT-PRÜFUNG: Ist das ein Beispiel/Illustration?
            const isExample = this.isExampleContext(
              content,
              match1[0],
              match2[0]
            );

            if (!isExample) {
              // Custom Check falls definiert
              if (contradiction.customCheck) {
                const customResult = contradiction.customCheck(
                  content,
                  match1,
                  match2,
                  filePath
                );
                if (customResult) {
                  const line1 = this.findLineNumber(content, match1[0]);
                  const line2 = this.findLineNumber(content, match2[0]);
                  const lineContent1 = this.extractLineContent(content, line1);
                  const lineContent2 = this.extractLineContent(content, line2);

                  this.results.contradictions.push({
                    file: filePath,
                    description: contradiction.description,
                    evidence1: match1[0],
                    evidence2: match2[0],
                    severity: contradiction.severity || "HIGH",
                    autoFix: contradiction.autoFix || null,
                    customDetails: customResult,
                    line1: line1,
                    line2: line2,
                    lineContent1: lineContent1,
                    lineContent2: lineContent2,
                  });
                }
              } else {
                // Standard Widerspruch
                const line1 = this.findLineNumber(content, match1[0]);
                const line2 = this.findLineNumber(content, match2[0]);
                const lineContent1 = this.extractLineContent(content, line1);
                const lineContent2 = this.extractLineContent(content, line2);

                this.results.contradictions.push({
                  file: filePath,
                  description: contradiction.description,
                  evidence1: match1[0],
                  evidence2: match2[0],
                  severity: contradiction.severity || "HIGH",
                  autoFix: contradiction.autoFix || null,
                  line1: line1,
                  line2: line2,
                  lineContent1: lineContent1,
                  lineContent2: lineContent2,
                });
              }
            }
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
    const pathPattern =
      /(?:docs\/|src\/|tools\/|\.github\/)[^\s\)\`\*\,\"\|]+/g;

    for (const filePath of mdFiles) {
      try {
        const content = await fs.readFile(filePath, "utf-8");
        const paths = content.match(pathPattern) || [];

        for (const refPath of paths) {
          const fullPath = path.join(this.projectRoot, refPath);
          const exists = await this.fileExists(fullPath);

          if (!exists) {
            const lineNumber = this.findLineNumber(content, refPath);
            const lineContent = this.extractLineContent(content, lineNumber);

            this.results.pathErrors.push({
              file: filePath,
              referencedPath: refPath,
              fullPath: fullPath,
              severity: "MEDIUM",
              lineNumber: lineNumber,
              lineContent: lineContent,
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
   * � CUSTOM CHECK: Token-Limit-Konflikte
   */
  checkTokenLimitConflicts(content, match1, match2, filePath) {
    const tokenLimits = [];
    const tokenPattern = /(\d+)k?\s*Token.*(?:Limit|limit)/gi;
    let match;

    while ((match = tokenPattern.exec(content)) !== null) {
      const tokenValue = parseInt(match[1]);
      const isKilo = match[0].includes("k");
      const actualTokens = isKilo ? tokenValue * 1000 : tokenValue;

      tokenLimits.push({
        value: actualTokens,
        text: match[0],
        position: match.index,
      });
    }

    // Prüfe auf unterschiedliche Token-Limits
    const uniqueLimits = [...new Set(tokenLimits.map((t) => t.value))];
    if (uniqueLimits.length > 1) {
      return {
        conflictingLimits: uniqueLimits,
        recommendation: `Unify token limits. Suggested: ${Math.max(
          ...uniqueLimits
        )} tokens`,
        evidence: tokenLimits.map((t) => t.text),
      };
    }

    return null;
  }

  /**
   * 🎯 CUSTOM CHECK: Multiple kritische Prioritäten
   */
  checkMultipleCriticalPriorities(content, match1, match2, filePath) {
    const criticalMatches =
      content.match(/(?:KRITISCH|CRITICAL|HÖCHSTE PRIORITÄT)/gi) || [];

    if (criticalMatches.length > 3) {
      return {
        criticalCount: criticalMatches.length,
        recommendation: "Reduce critical priorities - max 3 per document",
        suggestion: "Use HIGH/MEDIUM for less critical items",
      };
    }

    return null;
  }

  /**
   * �📊 RECOMMENDATIONS GENERIEREN
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

    // ERWEITERTE EXCEPTION-AUSGABE für KI
    if (criticalIssues > 0) {
      console.log("\n" + "🚨".repeat(20));
      console.log("❌ CRITICAL EXCEPTIONS DETECTED ❌");
      console.log("🚨".repeat(20));

      this.results.contradictions
        .filter((c) => c.severity === "CRITICAL")
        .forEach((contradiction, index) => {
          console.log(`\n🔥 EXCEPTION ${index + 1}:`);
          console.log(`📁 File: ${contradiction.file}`);
          console.log(`⚔️ Conflict: ${contradiction.description}`);
          console.log(`📝 Evidence 1: "${contradiction.evidence1}"`);
          console.log(`📝 Evidence 2: "${contradiction.evidence2}"`);
          if (contradiction.autoFix) {
            console.log(`🔧 Suggested Fix: ${contradiction.autoFix}`);
          }
          console.log(
            `❓ USER ACTION REQUIRED: Please clarify which rule should take precedence.`
          );
        });

      console.log("\n" + "🚨".repeat(20));
      console.log("⚠️ KI: STOP WORK UNTIL CONFLICTS RESOLVED!");
      console.log("🚨".repeat(20));
    }

    if (criticalIssues === 0) {
      console.log("✅ KI KANN SICHER ARBEITEN!");
    } else {
      console.log("🚨 INSTRUCTIONS-REPARATUR ERFORDERLICH!");
    }

    return reportPath;
  }

  /**
   * 🧠 KONTEXT-PRÜFUNG: Ist das ein Beispiel/Illustration?
   */
  isExampleContext(content, evidence1, evidence2) {
    // Suche in einem 3-Zeilen-Radius um die Evidenz
    const lines = content.split("\n");

    // Finde Zeilen der Evidenzen
    const line1 = this.findLineNumber(content, evidence1);
    const line2 = this.findLineNumber(content, evidence2);

    // Überprüfe 3 Zeilen vor und nach jedem Match
    const contextLines = [];
    for (
      let i = Math.max(0, line1 - 3);
      i <= Math.min(lines.length - 1, line1 + 3);
      i++
    ) {
      contextLines.push(lines[i]);
    }
    for (
      let i = Math.max(0, line2 - 3);
      i <= Math.min(lines.length - 1, line2 + 3);
      i++
    ) {
      contextLines.push(lines[i]);
    }

    const contextText = contextLines.join("\n");

    // Prüfe auf Beispiel-Indikatoren
    return this.contextExclusions.some((pattern) => pattern.test(contextText));
  }

  /**
   * 📏 ZEILENNUMMER FINDEN
   */
  findLineNumber(content, searchText) {
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchText)) {
        return i + 1; // 1-basierte Zeilennummer
      }
    }
    return 1; // Fallback
  }

  /**
   * 📄 ZEILEN-INHALT EXTRAHIEREN
   */
  extractLineContent(content, lineNumber) {
    const lines = content.split("\n");
    const index = lineNumber - 1; // Zu 0-basiert konvertieren
    if (index >= 0 && index < lines.length) {
      return lines[index].trim();
    }
    return "[ZEILE NICHT GEFUNDEN]";
  }

  /**
   * �📝 REPORT FORMATIEREN
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
  - 📍 Zeile ${item.line1 || "N/A"}: "${item.evidence1}"
    → \`${item.lineContent1 || item.evidence1}\`
  - 📍 Zeile ${item.line2 || "N/A"}: "${item.evidence2}"
    → \`${item.lineContent2 || item.evidence2}\``
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
            `- \`${item.file}\` (Zeile ${
              item.lineNumber || "N/A"
            }): Link zu \`${item.link}\` nicht gefunden
    → \`${item.lineContent || item.link}\``
        )
        .join("\n")
}

### 📄 LEERE/REDUNDANTE DATEIEN
${
  this.results.emptyFiles.length === 0
    ? "✅ Keine leeren Dateien"
    : this.results.emptyFiles
        .map(
          (item) => `- \`${item.file}\`: ${item.type} (${item.size} Bytes)
    → \`${item.lineContent || "[DATEI LEER]"}\``
        )
        .join("\n")
}

### 📂 PFAD-REFERENZ-FEHLER
${
  this.results.pathErrors.length === 0
    ? "✅ Alle Pfade gültig"
    : this.results.pathErrors
        .map(
          (item) =>
            `- \`${item.file}\` (Zeile ${
              item.lineNumber || "N/A"
            }): Referenz zu \`${item.referencedPath}\` ungültig
    → \`${item.lineContent || item.referencedPath}\``
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
      files.push(filePath);
    });
    return files;
  }

  async walkDirectory(dir, callback) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        // 🚫 AUSSCHLUSS-PRÜFUNG DIREKT IM WALK-PROZESS
        const excludePatterns = [
          "node_modules", // NPM Dependencies (MAIN CULPRIT!)
          ".astro", // Astro Build Cache
          ".git", // Git Metadata
          ".vscode", // VS Code Settings
          ".vs", // Visual Studio
          "dist", // Build Output
          ".next", // Next.js Cache
          ".nuxt", // Nuxt.js Cache
          "build", // Alternative Build Dir
          "coverage", // Test Coverage
          ".nyc_output", // Code Coverage
          "tmp", // Temporary Files
          "temp", // Temporary Files
          ".cache", // Cache Files
          ".parcel-cache", // Parcel Cache
          ".turbo", // Turbo Cache
          ".vercel", // Vercel Cache
          ".netlify", // Netlify Cache
          "logs", // Log Directories
          "00_ideenwerkstatt", // Simon's Brainstorming-Bereich (AUSGESCHLOSSEN)
        ];

        // Versteckte Verzeichnisse ausschließen (außer .github)
        const entryName = entry.name;
        const isHiddenDir =
          entryName.startsWith(".") &&
          entryName !== ".github" &&
          entryName !== ".gitignore";

        // Prüfe Verzeichnis-Ausschlüsse
        const shouldExcludeDir =
          excludePatterns.includes(entryName) || isHiddenDir;

        if (entry.isDirectory()) {
          // 🚫 VERZEICHNIS KOMPLETT ÜBERSPRINGEN
          if (!shouldExcludeDir) {
            await this.walkDirectory(fullPath, callback);
          }
          // ELSE: Verzeichnis wird komplett ignoriert - KEINE Rekursion!
        } else {
          // 🚫 DATEI-LEVEL AUSSCHLÜSSE
          const excludeFilePatterns = [
            "package-lock.json",
            "yarn.lock",
            "pnpm-lock.yaml",
            "npm-debug.log",
            "yarn-debug.log",
            "yarn-error.log",
          ];

          const shouldExcludeFile =
            excludeFilePatterns.includes(entryName) ||
            entryName.endsWith(".log") ||
            entryName === ".DS_Store" ||
            entryName === "Thumbs.db" ||
            entryName === "desktop.ini" ||
            entryName.startsWith("projekt-analyse-") || // 🚫 ANALYZER OUTPUT (Simon's Request)
            entryName.startsWith("widerspruchs-report-") || // 🚫 SCANNER OUTPUT
            entryName.includes("-analysis-") || // 🚫 ANALYSIS FILES
            entryName.includes("-report-"); // 🚫 REPORT FILES

          if (!shouldExcludeFile) {
            await callback(fullPath);
          }
          // ELSE: Datei wird ignoriert
        }
      }
    } catch (error) {
      // Verzeichnis nicht zugänglich - ignorieren
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
