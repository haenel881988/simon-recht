#!/usr/bin/env node

/**
 * 🏗️ STRUCTURE-OPTIMIZER v1.0 (INTELLIGENTE UMZUGSPLANUNG)
 *
 * 🎯 ZWECK: Projekt-Struktur bewerten & Umzugspläne mit Link-Mapping erstellen
 * 🧠 INTELLIGENZ: Optimal-Struktur vorschlagen basierend auf Inhalts-Analyse
 * 🔗 LINK-MAPPING: Alte → Neue Pfade für automatische KI-Umsetzung
 * 📋 INVENTARISIERUNG: Vollständige Datei-Kategorisierung mit Ziel-Strukturen
 */

const fs = require("fs").promises;
const path = require("path");

class StructureOptimizer {
  constructor() {
    this.results = {
      currentStructure: {},
      proposedStructure: {},
      movementPlan: [],
      linkMappings: [],
      inventoryRecommendations: [],
      structureScore: 0,
      improvements: [],
      migrationScript: [],
    };

    // Ideal-Struktur-Templates basierend auf Content-Typen
    this.idealStructures = {
      documentation: {
        pattern: /\.(md|txt|rst)$/,
        targetStructure: {
          active: "docs/active/",
          archive: "docs/archive/",
          reference: "docs/reference/",
          instructions: "docs/instructions/",
          todos: "docs/todos/",
        },
      },
      tools: {
        pattern: /\.(cjs|js|ts|ps1|bat)$/,
        targetStructure: {
          analyzers: "tools/analyzer/",
          build_tools: "tools/build_check/",
          utilities: "tools/utilities/",
          scripts: "tools/scripts/",
        },
      },
      configs: {
        pattern: /\.(json|mjs|config|yml|yaml)$/,
        targetStructure: {
          root_configs: "./",
          tool_configs: "tools/configs/",
          build_configs: "build/",
        },
      },
      content: {
        pattern: /\.(astro|html|css|scss)$/,
        targetStructure: {
          pages: "src/pages/",
          layouts: "src/layouts/",
          components: "src/components/",
          styles: "src/styles/",
        },
      },
      assets: {
        pattern: /\.(png|jpg|jpeg|svg|webp|ico|pdf)$/,
        targetStructure: {
          images: "public/assets/images/",
          documents: "public/assets/documents/",
          icons: "public/assets/icons/",
        },
      },
    };

    // Chaos-Pattern die aufgeräumt werden müssen
    this.chaosPatterns = [
      {
        pattern: /chaos|temp|tmp|alt|old|backup|deprecated/i,
        reason: "Chaos/Temp-Bezeichnung im Namen",
        urgency: "HOCH",
        action: "ARCHIV_ODER_LÖSCHEN",
      },
      {
        pattern: /\d{4}-\d{2}-\d{2}.*backup/i,
        reason: "Datierte Backup-Datei",
        urgency: "MITTEL",
        action: "ARCHIV_VERSCHIEBEN",
      },
      {
        pattern: /archiv.*archiv|backup.*backup/i,
        reason: "Doppelte Archiv-Verschachtelung",
        urgency: "HOCH",
        action: "STRUKTUR_GLÄTTEN",
      },
      {
        pattern: /docs\/\w+\/\w+\/\w+\/\w+\//,
        reason: "Zu tiefe Verzeichnis-Verschachtelung",
        urgency: "MITTEL",
        action: "STRUKTUR_ABFLACHEN",
      },
    ];
  }

  /**
   * 🏗️ HAUPT-STRUKTUR-OPTIMIERUNG
   */
  async optimizeStructure(projectRoot) {
    console.log(
      "🏗️ STRUCTURE-OPTIMIZER: Starte intelligente Struktur-Analyse..."
    );

    // 1. Aktuelle Struktur inventarisieren
    await this.inventarizeCurrentStructure(projectRoot);

    // 2. Content-basierte Kategorisierung
    await this.categorizeByContent(projectRoot);

    // 3. Chaos-Pattern identifizieren
    await this.identifyChaosPatterns(projectRoot);

    // 4. Optimal-Struktur generieren
    await this.generateOptimalStructure(projectRoot);

    // 5. Umzugsplan mit Link-Mapping erstellen
    await this.createMovementPlan(projectRoot);

    // 6. KI-Umsetzungs-Script generieren
    await this.generateMigrationScript(projectRoot);

    // 7. SELBST-STRUKTUR-ANALYSE
    await this.analyzeSelfStructure(projectRoot);

    return this.generateStructureReport();
  }

  /**
   * 📋 AKTUELLE STRUKTUR INVENTARISIEREN
   */
  async inventarizeCurrentStructure(projectRoot) {
    console.log("📋 Inventarisiere aktuelle Projekt-Struktur...");

    this.results.currentStructure = await this.buildStructureTree(
      projectRoot,
      projectRoot
    );
  }

  /**
   * 🌳 STRUKTUR-BAUM AUFBAUEN
   */
  async buildStructureTree(rootPath, currentPath, depth = 0) {
    const structure = {
      type: "directory",
      name: path.basename(currentPath),
      path: path.relative(rootPath, currentPath),
      depth: depth,
      children: {},
      files: [],
      stats: {
        totalFiles: 0,
        totalSize: 0,
        fileTypes: new Map(),
        lastModified: new Date(0),
      },
    };

    try {
      const entries = await fs.readdir(currentPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentPath, entry.name);

        if (entry.isDirectory()) {
          // Wichtige Verzeichnisse nicht überspringen
          if (
            !entry.name.startsWith(".") &&
            entry.name !== "node_modules" &&
            entry.name !== "dist"
          ) {
            structure.children[entry.name] = await this.buildStructureTree(
              rootPath,
              fullPath,
              depth + 1
            );

            // Stats aggregieren
            const childStats = structure.children[entry.name].stats;
            structure.stats.totalFiles += childStats.totalFiles;
            structure.stats.totalSize += childStats.totalSize;

            // FileTypes mergen
            for (const [type, count] of childStats.fileTypes.entries()) {
              structure.stats.fileTypes.set(
                type,
                (structure.stats.fileTypes.get(type) || 0) + count
              );
            }

            if (childStats.lastModified > structure.stats.lastModified) {
              structure.stats.lastModified = childStats.lastModified;
            }
          }
        } else if (entry.isFile()) {
          const stats = await fs.stat(fullPath);
          const extension = path.extname(entry.name);

          structure.files.push({
            name: entry.name,
            path: path.relative(rootPath, fullPath),
            size: stats.size,
            modified: stats.mtime,
            extension: extension,
          });

          // Stats aktualisieren
          structure.stats.totalFiles++;
          structure.stats.totalSize += stats.size;
          structure.stats.fileTypes.set(
            extension,
            (structure.stats.fileTypes.get(extension) || 0) + 1
          );

          if (stats.mtime > structure.stats.lastModified) {
            structure.stats.lastModified = stats.mtime;
          }
        }
      }
    } catch (error) {
      // Verzeichnis nicht zugänglich
    }

    return structure;
  }

  /**
   * 📊 CONTENT-BASIERTE KATEGORISIERUNG
   */
  async categorizeByContent(projectRoot) {
    console.log("📊 Kategorisiere Dateien nach Inhalt und Zweck...");

    const allFiles = [];
    await this.collectAllFiles(this.results.currentStructure, allFiles);

    for (const file of allFiles) {
      await this.categorizeFile(file, projectRoot);
    }
  }

  /**
   * 📁 ALLE DATEIEN SAMMELN
   */
  async collectAllFiles(structure, files) {
    // Dateien in aktueller Ebene
    for (const file of structure.files) {
      files.push(file);
    }

    // Rekursiv in Unterverzeichnisse
    for (const child of Object.values(structure.children)) {
      await this.collectAllFiles(child, files);
    }
  }

  /**
   * 🏷️ DATEI KATEGORISIEREN
   */
  async categorizeFile(file, projectRoot) {
    const filePath = path.join(projectRoot, file.path);

    // Content-Analyse für bessere Kategorisierung
    let contentCategory = "unknown";
    let purposeAnalysis = {};

    try {
      // Nur Text-Dateien analysieren
      if (this.isTextFile(file.extension)) {
        const content = await fs.readFile(filePath, "utf-8");
        purposeAnalysis = await this.analyzeFileContent(content, file);
        contentCategory = purposeAnalysis.category || "document";
      } else {
        contentCategory = this.categorizeByExtension(file.extension);
      }
    } catch (error) {
      // Datei nicht lesbar
    }

    // Ideal-Ziel-Struktur bestimmen
    const targetLocation = this.determineTargetLocation(
      file,
      contentCategory,
      purposeAnalysis
    );

    // Zur Kategorisierung hinzufügen
    if (!this.results.proposedStructure[contentCategory]) {
      this.results.proposedStructure[contentCategory] = [];
    }

    this.results.proposedStructure[contentCategory].push({
      ...file,
      contentCategory,
      purposeAnalysis,
      targetLocation,
      needsMovement: file.path !== targetLocation,
      currentScore: this.scoreFileLocation(file.path, targetLocation),
    });
  }

  /**
   * 📄 TEXT-DATEI PRÜFUNG
   */
  isTextFile(extension) {
    const textExtensions = [
      ".md",
      ".txt",
      ".json",
      ".js",
      ".cjs",
      ".ts",
      ".astro",
      ".html",
      ".css",
      ".scss",
      ".yml",
      ".yaml",
      ".xml",
    ];
    return textExtensions.includes(extension.toLowerCase());
  }

  /**
   * 🔍 DATEI-INHALT ANALYSIEREN
   */
  async analyzeFileContent(content, file) {
    const analysis = {
      category: "document",
      purpose: "unknown",
      importance: "normal",
      references: [],
      keywords: [],
    };

    // Content-Pattern für Kategorisierung
    const patterns = {
      instructions: /instructions|copilot|rules|regeln|anweisungen/i,
      todo: /todo|task|aufgabe|erledigen/i,
      config: /config|configuration|settings|einstellungen/i,
      documentation: /readme|doc|dokumentation|anleitung/i,
      archive: /archiv|backup|alt|old|deprecated/i,
      tool: /function|class|module|tool|script/i,
      changelog: /changelog|änderungen|updates|version/i,
      test: /test|spec|beispiel|sample/i,
    };

    for (const [category, pattern] of Object.entries(patterns)) {
      if (pattern.test(content)) {
        analysis.category = category;
        break;
      }
    }

    // Wichtigkeits-Bewertung
    if (content.includes("KRITISCH") || content.includes("CRITICAL")) {
      analysis.importance = "critical";
    } else if (content.includes("WICHTIG") || content.includes("IMPORTANT")) {
      analysis.importance = "high";
    } else if (content.includes("ARCHIV") || content.includes("DEPRECATED")) {
      analysis.importance = "low";
    }

    // Referenzen extrahieren
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      analysis.references.push({
        text: match[1],
        target: match[2],
      });
    }

    // Keywords extrahieren (erste 10 Wörter)
    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 3)
      .slice(0, 10);
    analysis.keywords = [...new Set(words)];

    return analysis;
  }

  /**
   * 📂 KATEGORISIERUNG NACH EXTENSION
   */
  categorizeByExtension(extension) {
    const extensionCategories = {
      ".md": "documentation",
      ".txt": "documentation",
      ".json": "config",
      ".js": "tool",
      ".cjs": "tool",
      ".ts": "tool",
      ".astro": "content",
      ".html": "content",
      ".css": "style",
      ".scss": "style",
      ".png": "asset",
      ".jpg": "asset",
      ".jpeg": "asset",
      ".svg": "asset",
      ".pdf": "asset",
    };

    return extensionCategories[extension.toLowerCase()] || "unknown";
  }

  /**
   * 🎯 ZIEL-LOCATION BESTIMMEN
   */
  determineTargetLocation(file, category, purposeAnalysis) {
    const fileName = file.name;
    const currentPath = file.path;

    // Spezielle Zweck-basierte Ziele
    switch (purposeAnalysis.category) {
      case "instructions":
        if (fileName.includes("copilot")) {
          return ".github/copilot-instructions.md";
        }
        return "docs/instructions/" + fileName;

      case "todo":
        return "docs/todos/" + fileName;

      case "archive":
        const archiveDate = new Date().toISOString().split("T")[0];
        return `docs/archive/${archiveDate}/${fileName}`;

      case "config":
        if (
          fileName.includes("astro") ||
          fileName.includes("tailwind") ||
          fileName.includes("package")
        ) {
          return fileName; // Root-Level Config
        }
        return "config/" + fileName;

      case "tool":
        if (currentPath.includes("analyzer")) {
          return `tools/analyzer/${this.determineAnalyzerScope(
            file
          )}/${fileName}`;
        }
        if (currentPath.includes("build")) {
          return `tools/build_check/${fileName}`;
        }
        return "tools/utilities/" + fileName;
    }

    // Fallback: Category-basierte Ziele
    switch (category) {
      case "documentation":
        if (purposeAnalysis.importance === "low") {
          return "docs/archive/" + fileName;
        }
        return "docs/active/" + fileName;

      case "content":
        return "src/pages/" + fileName;

      case "style":
        return "src/styles/" + fileName;

      case "asset":
        return "public/assets/" + fileName;

      default:
        return currentPath; // Nicht verschieben wenn unklar
    }
  }

  /**
   * 🔍 ANALYZER-SCOPE BESTIMMEN
   */
  determineAnalyzerScope(file) {
    const fileName = file.name.toLowerCase();

    if (fileName.includes("token")) return "core";
    if (fileName.includes("link")) return "core";
    if (fileName.includes("contradiction")) return "scopes";
    if (fileName.includes("redundancy")) return "scopes";
    if (fileName.includes("structure")) return "scopes";
    if (fileName.includes("master")) return ".";

    return "utilities";
  }

  /**
   * 📊 DATEI-LOCATION BEWERTEN
   */
  scoreFileLocation(currentPath, targetPath) {
    if (currentPath === targetPath) return 100;

    const currentDepth = currentPath.split("/").length;
    const targetDepth = targetPath.split("/").length;

    // Basis-Score basierend auf Pfad-Ähnlichkeit
    let score = 0;

    // Gleiche Top-Level-Directory = +30
    if (currentPath.split("/")[0] === targetPath.split("/")[0]) {
      score += 30;
    }

    // Ähnliche Tiefe = +20
    if (Math.abs(currentDepth - targetDepth) <= 1) {
      score += 20;
    }

    // Chaos-Pattern = -50
    if (
      this.chaosPatterns.some((pattern) => pattern.pattern.test(currentPath))
    ) {
      score -= 50;
    }

    return Math.max(0, Math.min(100, score));
  }

  /**
   * 🚨 CHAOS-PATTERN IDENTIFIZIEREN
   */
  async identifyChaosPatterns(projectRoot) {
    console.log("🚨 Identifiziere Chaos-Pattern und Struktur-Probleme...");

    for (const category of Object.values(this.results.proposedStructure)) {
      for (const file of category) {
        for (const chaosPattern of this.chaosPatterns) {
          if (chaosPattern.pattern.test(file.path)) {
            this.results.improvements.push({
              type: "CHAOS_PATTERN",
              file: file.path,
              issue: chaosPattern.reason,
              urgency: chaosPattern.urgency,
              recommendedAction: chaosPattern.action,
              targetLocation: this.getChaosPatternTarget(file, chaosPattern),
            });
          }
        }
      }
    }
  }

  /**
   * 🎯 CHAOS-PATTERN ZIEL BESTIMMEN
   */
  getChaosPatternTarget(file, chaosPattern) {
    switch (chaosPattern.action) {
      case "ARCHIV_ODER_LÖSCHEN":
        if (file.size === 0) return "DELETE";
        return `docs/archive/chaos-cleanup-${
          new Date().toISOString().split("T")[0]
        }/${file.name}`;

      case "ARCHIV_VERSCHIEBEN":
        return `docs/archive/dated-backups/${file.name}`;

      case "STRUKTUR_GLÄTTEN":
        // Verschachtelung reduzieren
        const pathParts = file.path.split("/");
        return pathParts.slice(0, 2).join("/") + "/" + file.name;

      case "STRUKTUR_ABFLACHEN":
        // Zu tiefe Verschachtelung korrigieren
        const parts = file.path.split("/");
        return parts.slice(0, 3).join("/") + "/" + file.name;

      default:
        return file.path;
    }
  }

  /**
   * 🏗️ OPTIMAL-STRUKTUR GENERIEREN
   */
  async generateOptimalStructure(projectRoot) {
    console.log("🏗️ Generiere optimale Projekt-Struktur...");

    // Struktur-Score berechnen
    let totalScore = 0;
    let totalFiles = 0;

    for (const category of Object.values(this.results.proposedStructure)) {
      for (const file of category) {
        totalScore += file.currentScore;
        totalFiles++;
      }
    }

    this.results.structureScore =
      totalFiles > 0 ? Math.round(totalScore / totalFiles) : 0;

    // Verbesserungs-Potentiale identifizieren
    await this.identifyImprovements();
  }

  /**
   * 💡 VERBESSERUNGS-POTENTIALE IDENTIFIZIEREN
   */
  async identifyImprovements() {
    const improvements = [];

    // Dateien die verschoben werden sollten
    for (const category of Object.values(this.results.proposedStructure)) {
      for (const file of category) {
        if (file.needsMovement && file.currentScore < 70) {
          improvements.push({
            type: "RELOCATION",
            file: file.path,
            issue: `Suboptimale Location (Score: ${file.currentScore})`,
            urgency: file.currentScore < 30 ? "HOCH" : "MITTEL",
            recommendedAction: "VERSCHIEBEN",
            targetLocation: file.targetLocation,
          });
        }
      }
    }

    this.results.improvements.push(...improvements);
  }

  /**
   * 📋 UMZUGSPLAN MIT LINK-MAPPING ERSTELLEN
   */
  async createMovementPlan(projectRoot) {
    console.log("📋 Erstelle detaillierten Umzugsplan mit Link-Mappings...");

    const movements = [];
    const linkMappings = [];

    for (const category of Object.values(this.results.proposedStructure)) {
      for (const file of category) {
        if (file.needsMovement) {
          const movement = {
            id: `move_${movements.length + 1}`,
            sourceFile: file.path,
            targetFile: file.targetLocation,
            reason: `${file.contentCategory} optimization (Score: ${file.currentScore} → 100)`,
            urgency: file.currentScore < 30 ? "HOCH" : "MITTEL",
            size: file.size,
            estimatedImpact: this.calculateMovementImpact(file),
          };

          movements.push(movement);

          // Link-Mapping für alle Referenzen zu dieser Datei
          const linkMapping = await this.createLinkMapping(file, projectRoot);
          if (linkMapping.references.length > 0) {
            linkMappings.push(linkMapping);
          }
        }
      }
    }

    // Nach Priorität sortieren
    this.results.movementPlan = movements.sort((a, b) => {
      const urgencyOrder = { HOCH: 3, MITTEL: 2, NIEDRIG: 1 };
      return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
    });

    this.results.linkMappings = linkMappings;
  }

  /**
   * 📊 BEWEGUNGS-IMPACT BERECHNEN
   */
  calculateMovementImpact(file) {
    const impacts = [];

    if (file.purposeAnalysis.references.length > 0) {
      impacts.push(
        `${file.purposeAnalysis.references.length} Links müssen aktualisiert werden`
      );
    }

    if (file.purposeAnalysis.importance === "critical") {
      impacts.push("Kritische Datei - vorsichtige Behandlung");
    }

    if (file.size > 1024 * 100) {
      // > 100KB
      impacts.push("Große Datei - längere Bewegung");
    }

    return impacts.length > 0 ? impacts : ["Minimaler Impact"];
  }

  /**
   * 🔗 LINK-MAPPING ERSTELLEN
   */
  async createLinkMapping(file, projectRoot) {
    const mapping = {
      movedFile: file.path,
      newLocation: file.targetLocation,
      references: [],
    };

    // Alle Dateien durchsuchen die auf diese Datei verweisen könnten
    const allFiles = [];
    await this.collectAllFiles(this.results.currentStructure, allFiles);

    for (const searchFile of allFiles) {
      if (this.isTextFile(searchFile.extension)) {
        const references = await this.findReferencesToFile(
          searchFile,
          file.path,
          projectRoot
        );
        if (references.length > 0) {
          mapping.references.push({
            referencingFile: searchFile.path,
            references: references,
            updateScript: this.generateLinkUpdateScript(
              searchFile.path,
              references,
              file.path,
              file.targetLocation
            ),
          });
        }
      }
    }

    return mapping;
  }

  /**
   * 🔍 REFERENZEN ZU DATEI FINDEN
   */
  async findReferencesToFile(searchFile, targetFile, projectRoot) {
    const references = [];

    try {
      const content = await fs.readFile(
        path.join(projectRoot, searchFile.path),
        "utf-8"
      );

      // Verschiedene Referenz-Pattern
      const patterns = [
        new RegExp(
          `\\[([^\\]]+)\\]\\(([^)]*${path
            .basename(targetFile)
            .replace(".", "\\.")})\\)`,
          "g"
        ), // Markdown Links
        new RegExp(
          `["']([^"']*${path.basename(targetFile).replace(".", "\\.")})["']`,
          "g"
        ), // Quoted Pfade
        new RegExp(
          `\\b${targetFile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
          "g"
        ), // Direkte Pfad-Referenzen
      ];

      for (const pattern of patterns) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          references.push({
            match: match[0],
            line: this.getLineNumber(content, match.index),
            context: this.getContext(content, match.index),
            type: this.getReferencType(match[0]),
          });
        }
      }
    } catch (error) {
      // Datei nicht lesbar
    }

    return references;
  }

  /**
   * 📄 ZEILEN-NUMMER ERMITTELN
   */
  getLineNumber(content, index) {
    return content.substring(0, index).split("\n").length;
  }

  /**
   * 📖 KONTEXT ERMITTELN
   */
  getContext(content, index) {
    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + 50);
    return content.substring(start, end);
  }

  /**
   * 🏷️ REFERENZ-TYP ERMITTELN
   */
  getReferencType(match) {
    if (match.includes("[") && match.includes("]")) return "markdown_link";
    if (match.includes('"') || match.includes("'")) return "quoted_path";
    return "direct_reference";
  }

  /**
   * 🔧 LINK-UPDATE-SCRIPT GENERIEREN
   */
  generateLinkUpdateScript(referencingFile, references, oldPath, newPath) {
    const scripts = [];

    for (const ref of references) {
      const oldRef = ref.match;
      let newRef = oldRef;

      // Je nach Referenz-Typ unterschiedlich ersetzen
      switch (ref.type) {
        case "markdown_link":
          newRef = oldRef.replace(oldPath, newPath);
          break;
        case "quoted_path":
          newRef = oldRef.replace(oldPath, newPath);
          break;
        case "direct_reference":
          newRef = newPath;
          break;
      }

      scripts.push({
        action: "REPLACE_STRING",
        file: referencingFile,
        oldString: oldRef,
        newString: newRef,
        line: ref.line,
        context: ref.context,
      });
    }

    return scripts;
  }

  /**
   * 🤖 KI-UMSETZUNGS-SCRIPT GENERIEREN
   */
  async generateMigrationScript(projectRoot) {
    console.log(
      "🤖 Generiere KI-Umsetzungs-Script für automatische Migration..."
    );

    const script = {
      metadata: {
        generatedDate: new Date().toISOString(),
        projectRoot: projectRoot,
        totalMovements: this.results.movementPlan.length,
        totalLinkUpdates: this.results.linkMappings.reduce(
          (sum, mapping) => sum + mapping.references.length,
          0
        ),
      },
      phases: [],
    };

    // Phase 1: Verzeichnis-Struktur erstellen
    script.phases.push({
      phase: 1,
      name: "VERZEICHNIS_ERSTELLUNG",
      description: "Ziel-Verzeichnisse erstellen",
      actions: this.generateDirectoryCreationActions(),
    });

    // Phase 2: Dateien verschieben (sicher → unsicher)
    script.phases.push({
      phase: 2,
      name: "DATEI_VERSCHIEBUNG",
      description: "Dateien in optimale Struktur verschieben",
      actions: this.generateFileMovementActions(),
    });

    // Phase 3: Links aktualisieren
    script.phases.push({
      phase: 3,
      name: "LINK_AKTUALISIERUNG",
      description: "Alle Referenzen auf neue Pfade aktualisieren",
      actions: this.generateLinkUpdateActions(),
    });

    // Phase 4: Validierung
    script.phases.push({
      phase: 4,
      name: "VALIDIERUNG",
      description: "Migration validieren und testen",
      actions: this.generateValidationActions(),
    });

    this.results.migrationScript = script;
  }

  /**
   * 📁 VERZEICHNIS-ERSTELLUNGS-AKTIONEN
   */
  generateDirectoryCreationActions() {
    const directories = new Set();

    for (const movement of this.results.movementPlan) {
      const targetDir = path.dirname(movement.targetFile);
      if (targetDir !== ".") {
        directories.add(targetDir);
      }
    }

    return Array.from(directories).map((dir) => ({
      type: "CREATE_DIRECTORY",
      directory: dir,
      command: `create_directory`,
      parameters: { dirPath: dir },
    }));
  }

  /**
   * 📄 DATEI-BEWEGUNGS-AKTIONEN
   */
  generateFileMovementActions() {
    return this.results.movementPlan.map((movement) => ({
      type: "MOVE_FILE",
      id: movement.id,
      source: movement.sourceFile,
      target: movement.targetFile,
      reason: movement.reason,
      urgency: movement.urgency,
      command: "run_in_terminal",
      parameters: {
        command: `Move-Item "${movement.sourceFile}" "${movement.targetFile}" -Force`,
        explanation: `Verschiebe ${movement.sourceFile} nach ${movement.targetFile} (${movement.reason})`,
        isBackground: false,
      },
    }));
  }

  /**
   * 🔗 LINK-UPDATE-AKTIONEN
   */
  generateLinkUpdateActions() {
    const actions = [];

    for (const mapping of this.results.linkMappings) {
      for (const reference of mapping.references) {
        for (const script of reference.updateScript) {
          actions.push({
            type: "UPDATE_LINK",
            file: script.file,
            oldPath: mapping.movedFile,
            newPath: mapping.newLocation,
            command: "replace_string_in_file",
            parameters: {
              filePath: script.file,
              oldString: script.oldString,
              newString: script.newString,
            },
            context: {
              line: script.line,
              context: script.context,
            },
          });
        }
      }
    }

    return actions;
  }

  /**
   * ✅ VALIDIERUNGS-AKTIONEN
   */
  generateValidationActions() {
    return [
      {
        type: "VALIDATE_LINKS",
        command: "run_analyzer",
        parameters: {
          analyzer: "link-validator",
          projectRoot: ".",
        },
      },
      {
        type: "VALIDATE_STRUCTURE",
        command: "run_analyzer",
        parameters: {
          analyzer: "structure-optimizer",
          projectRoot: ".",
        },
      },
      {
        type: "VALIDATE_BUILD",
        command: "run_in_terminal",
        parameters: {
          command: "npm run build",
          explanation: "Website-Build nach Struktur-Migration testen",
          isBackground: false,
        },
      },
    ];
  }

  /**
   * 🔄 SELBST-STRUKTUR-ANALYSE
   */
  async analyzeSelfStructure(projectRoot) {
    console.log(
      "🔄 SELBST-ANALYSE: Structure-Optimizer analysiert eigene Platzierung..."
    );

    const selfPath = __filename;
    const selfAnalysis = {
      currentLocation: path.relative(projectRoot, selfPath),
      optimalLocation: "tools/analyzer/scopes/structure-optimizer.cjs",
      isOptimallyPlaced: false,
      recommendation: "",
    };

    const currentDir = path.dirname(path.relative(projectRoot, selfPath));
    const optimalDir = "tools/analyzer/scopes";

    selfAnalysis.isOptimallyPlaced = currentDir === optimalDir;

    if (!selfAnalysis.isOptimallyPlaced) {
      selfAnalysis.recommendation = `SELBST-VERBESSERUNG: Structure-Optimizer sollte nach ${selfAnalysis.optimalLocation} verschoben werden`;

      // Zur eigenen Bewegungsliste hinzufügen
      this.results.movementPlan.unshift({
        id: "move_self_structure_optimizer",
        sourceFile: selfAnalysis.currentLocation,
        targetFile: selfAnalysis.optimalLocation,
        reason: "SELBST-OPTIMIERUNG: Structure-Optimizer gehört in scopes/",
        urgency: "NIEDRIG",
        size: 0,
        estimatedImpact: ["Verbesserte Tool-Organisation"],
      });
    }

    this.results.selfAnalysis = selfAnalysis;
  }

  /**
   * 📊 STRUKTUR-REPORT GENERIERUNG
   */
  generateStructureReport() {
    const summary = {
      currentStructureScore: this.results.structureScore,
      totalMovementsNeeded: this.results.movementPlan.length,
      highUrgencyMovements: this.results.movementPlan.filter(
        (m) => m.urgency === "HOCH"
      ).length,
      totalLinkUpdatesNeeded: this.results.linkMappings.reduce(
        (sum, mapping) => sum + mapping.references.length,
        0
      ),
      chaosPatterns: this.results.improvements.filter(
        (i) => i.type === "CHAOS_PATTERN"
      ).length,
      estimatedImprovement: this.calculateEstimatedImprovement(),
    };

    return {
      summary,
      currentStructure: this.results.currentStructure,
      proposedStructure: this.results.proposedStructure,
      movementPlan: this.results.movementPlan,
      linkMappings: this.results.linkMappings,
      improvements: this.results.improvements,
      migrationScript: this.results.migrationScript,
      selfAnalysis: this.results.selfAnalysis,
      recommendations: this.generateStructureRecommendations(),
    };
  }

  /**
   * 📈 GESCHÄTZTE VERBESSERUNG BERECHNEN
   */
  calculateEstimatedImprovement() {
    const currentScore = this.results.structureScore;

    // Nach Optimierung erwarteter Score
    let improvedScore = currentScore;

    // Jede Bewegung verbessert den Durchschnitt
    const movements = this.results.movementPlan.length;
    if (movements > 0) {
      improvedScore = Math.min(95, currentScore + movements * 3);
    }

    return {
      currentScore,
      projectedScore: improvedScore,
      improvement: improvedScore - currentScore,
      status:
        improvedScore > 80
          ? "OPTIMAL"
          : improvedScore > 60
          ? "GUT"
          : "VERBESSERBAR",
    };
  }

  /**
   * 💡 STRUKTUR-EMPFEHLUNGEN
   */
  generateStructureRecommendations() {
    const recommendations = [];

    if (this.results.structureScore < 50) {
      recommendations.push({
        priority: "KRITISCH",
        action: "Sofortige Struktur-Reorganisation",
        reason: `Struktur-Score nur ${this.results.structureScore}/100`,
        impact: "Projekt-Übersichtlichkeit und Wartbarkeit",
      });
    }

    if (
      this.results.movementPlan.filter((m) => m.urgency === "HOCH").length > 0
    ) {
      recommendations.push({
        priority: "HOCH",
        action: "High-Priority Dateien verschieben",
        count: this.results.movementPlan.filter((m) => m.urgency === "HOCH")
          .length,
        impact: "Chaos-Pattern beseitigen",
      });
    }

    if (this.results.linkMappings.length > 0) {
      recommendations.push({
        priority: "MITTEL",
        action: "Link-Mappings vor Verschiebung durchführen",
        count: this.results.linkMappings.length,
        impact: "Verhindert kaputte Referenzen",
      });
    }

    return recommendations;
  }
}

// Export für Modul-Verwendung
module.exports = StructureOptimizer;

// CLI-Ausführung
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();

  const optimizer = new StructureOptimizer();
  optimizer
    .optimizeStructure(projectRoot)
    .then((report) => {
      console.log("\n🏗️ STRUKTUR-OPTIMIERUNG ABGESCHLOSSEN:\n");
      console.log("📊 ZUSAMMENFASSUNG:");
      console.log(
        `   Struktur-Score: ${report.summary.currentStructureScore}/100`
      );
      console.log(
        `   Bewegungen nötig: ${report.summary.totalMovementsNeeded}`
      );
      console.log(`   Hohe Priorität: ${report.summary.highUrgencyMovements}`);
      console.log(`   Link-Updates: ${report.summary.totalLinkUpdatesNeeded}`);
      console.log(`   Chaos-Pattern: ${report.summary.chaosPatterns}`);
      console.log(
        `   Projizierte Verbesserung: ${report.summary.estimatedImprovement.improvement} Punkte`
      );

      if (report.movementPlan.length > 0) {
        console.log("\n📋 TOP-BEWEGUNGEN:");
        report.movementPlan.slice(0, 5).forEach((movement, index) => {
          console.log(
            `   ${index + 1}. ${movement.sourceFile} → ${movement.targetFile}`
          );
          console.log(`      Grund: ${movement.reason} (${movement.urgency})`);
        });
      }

      console.log("\n🤖 KI-Umsetzungs-Script generiert!");
      console.log(`   Phasen: ${report.migrationScript.phases.length}`);
      console.log(
        `   Aktionen: ${report.migrationScript.phases.reduce(
          (sum, phase) => sum + phase.actions.length,
          0
        )}`
      );

      console.log("\n📄 Vollständiger Report verfügbar.");

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
