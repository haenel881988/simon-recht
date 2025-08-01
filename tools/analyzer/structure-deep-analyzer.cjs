#!/usr/bin/env node
/**
 * 🏗️ STRUCTURE-DEEP-ANALYZER v1.0
 *
 * Tiefgreifende Strukturanalyse für simon-recht Projekt
 * Erweitert universal-project-analyzer um strukturelle Insights
 */

const fs = require("fs");
const path = require("path");
const { SCOPE_DEFINITIONS } = require("./modules/scope-definitions.js");

class StructureDeepAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.structures = {
      directories: new Map(),
      filesByType: new Map(),
      scopeDepth: new Map(),
      namingPatterns: new Map(),
      sizingAnalysis: new Map(),
      dependencyMap: new Map(),
    };
  }

  async analyze() {
    console.log("🏗️ STRUKTUR-TIEFENANALYSE - simon-recht v1.0");
    console.log("============================================================");
    console.log(`📁 Projekt-Root: ${this.projectRoot}`);
    console.log(`⏰ Start-Zeit: ${new Date().toLocaleString("de-DE")}`);

    console.log("📊 PHASE 1: Verzeichnis-Hierarchie-Mapping...");
    await this.mapDirectoryHierarchy();

    console.log("📋 PHASE 2: Dateityp-Verteilungs-Analyse...");
    await this.analyzeFileTypes();

    console.log("🎯 PHASE 3: Scope-Tiefe-Analyse...");
    await this.analyzeScopeDepth();

    console.log("🏷️ PHASE 4: Naming-Pattern-Analyse...");
    await this.analyzeNamingPatterns();

    console.log("📏 PHASE 5: Größen-Verteilungs-Analyse...");
    await this.analyzeSizing();

    console.log("🔗 PHASE 6: Dependency-Mapping...");
    await this.mapDependencies();

    await this.generateReport();
  }

  async mapDirectoryHierarchy() {
    const scanDir = (dirPath, depth = 0, parent = null) => {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      const dirInfo = {
        path: dirPath,
        depth,
        parent,
        children: [],
        fileCount: 0,
        totalSize: 0,
        subdirectoryCount: 0,
      };

      for (const item of items) {
        if (this.shouldIgnore(item.name)) continue;

        const fullPath = path.join(dirPath, item.name);
        if (item.isDirectory()) {
          dirInfo.subdirectoryCount++;
          const childInfo = scanDir(fullPath, depth + 1, dirPath);
          dirInfo.children.push(childInfo);
          dirInfo.totalSize += childInfo.totalSize;
        } else {
          dirInfo.fileCount++;
          try {
            const stats = fs.statSync(fullPath);
            dirInfo.totalSize += stats.size;
          } catch (e) {
            console.warn(`⚠️ Fehler bei ${fullPath}: ${e.message}`);
          }
        }
      }

      this.structures.directories.set(dirPath, dirInfo);
      return dirInfo;
    };

    scanDir(this.projectRoot);
  }

  async analyzeFileTypes() {
    const analyzeDir = (dirPath) => {
      try {
        const items = fs.readdirSync(dirPath);
        for (const item of items) {
          if (this.shouldIgnore(item)) continue;

          const fullPath = path.join(dirPath, item);
          const stats = fs.statSync(fullPath);

          if (stats.isDirectory()) {
            analyzeDir(fullPath);
          } else {
            const extension = path.extname(item).toLowerCase();
            const fileType = extension || "no-extension";

            if (!this.structures.filesByType.has(fileType)) {
              this.structures.filesByType.set(fileType, {
                count: 0,
                totalSize: 0,
                avgSize: 0,
                files: [],
              });
            }

            const typeInfo = this.structures.filesByType.get(fileType);
            typeInfo.count++;
            typeInfo.totalSize += stats.size;
            typeInfo.avgSize = typeInfo.totalSize / typeInfo.count;
            typeInfo.files.push({
              path: fullPath.replace(this.projectRoot, ""),
              size: stats.size,
            });
          }
        }
      } catch (error) {
        console.warn(
          `⚠️ Fehler beim Analysieren von ${dirPath}: ${error.message}`
        );
      }
    };

    analyzeDir(this.projectRoot);
  }

  async analyzeScopeDepth() {
    for (const [scopeName, patterns] of Object.entries(SCOPE_DEFINITIONS)) {
      const scopeInfo = {
        files: [],
        avgDepth: 0,
        maxDepth: 0,
        minDepth: Infinity,
        directories: new Set(),
      };

      // Analysiere alle Dateien für diesen Scope
      const analyzeForScope = (dirPath, currentDepth = 0) => {
        try {
          const items = fs.readdirSync(dirPath);
          for (const item of items) {
            if (this.shouldIgnore(item)) continue;

            const fullPath = path.join(dirPath, item);
            const relativePath = fullPath
              .replace(this.projectRoot + path.sep, "")
              .replace(/\\/g, "/");
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
              analyzeForScope(fullPath, currentDepth + 1);
            } else {
              // Prüfe ob Datei zu diesem Scope gehört
              const matchesScope = patterns.some(
                (pattern) =>
                  pattern.test(relativePath) ||
                  pattern.test(
                    fs.readFileSync(fullPath, "utf-8").substring(0, 500)
                  )
              );

              if (matchesScope) {
                scopeInfo.files.push({
                  path: relativePath,
                  depth: currentDepth,
                });
                scopeInfo.maxDepth = Math.max(scopeInfo.maxDepth, currentDepth);
                scopeInfo.minDepth = Math.min(scopeInfo.minDepth, currentDepth);
                scopeInfo.directories.add(path.dirname(relativePath));
              }
            }
          }
        } catch (error) {
          console.warn(
            `⚠️ Scope-Analyse Fehler in ${dirPath}: ${error.message}`
          );
        }
      };

      analyzeForScope(this.projectRoot);

      if (scopeInfo.files.length > 0) {
        scopeInfo.avgDepth =
          scopeInfo.files.reduce((sum, file) => sum + file.depth, 0) /
          scopeInfo.files.length;
        scopeInfo.minDepth =
          scopeInfo.minDepth === Infinity ? 0 : scopeInfo.minDepth;
      } else {
        scopeInfo.minDepth = 0;
      }

      this.structures.scopeDepth.set(scopeName, scopeInfo);
    }
  }

  async analyzeNamingPatterns() {
    const patterns = {
      camelCase: /^[a-z][a-zA-Z0-9]*$/,
      kebabCase: /^[a-z0-9]+(-[a-z0-9]+)*$/,
      snakeCase: /^[a-z0-9]+(_[a-z0-9]+)*$/,
      PascalCase: /^[A-Z][a-zA-Z0-9]*$/,
      mixedCase: /^[a-zA-Z0-9_-]+$/,
      numbers: /\d/,
      specialChars: /[^a-zA-Z0-9_.-]/,
    };

    const analyzeNames = (dirPath) => {
      try {
        const items = fs.readdirSync(dirPath);
        for (const item of items) {
          if (this.shouldIgnore(item)) continue;

          const nameWithoutExt = path.parse(item).name;
          const fullPath = path.join(dirPath, item);
          const stats = fs.statSync(fullPath);

          for (const [patternName, regex] of Object.entries(patterns)) {
            if (!this.structures.namingPatterns.has(patternName)) {
              this.structures.namingPatterns.set(patternName, {
                files: [],
                directories: [],
              });
            }

            if (regex.test(nameWithoutExt)) {
              const patternInfo =
                this.structures.namingPatterns.get(patternName);
              if (stats.isDirectory()) {
                patternInfo.directories.push(
                  fullPath.replace(this.projectRoot, "")
                );
                analyzeNames(fullPath);
              } else {
                patternInfo.files.push(fullPath.replace(this.projectRoot, ""));
              }
            }
          }

          if (stats.isDirectory()) {
            analyzeNames(fullPath);
          }
        }
      } catch (error) {
        console.warn(`⚠️ Naming-Analyse Fehler: ${error.message}`);
      }
    };

    analyzeNames(this.projectRoot);
  }

  async analyzeSizing() {
    const sizeCategories = {
      tiny: { min: 0, max: 1024, files: [] }, // < 1KB
      small: { min: 1024, max: 10240, files: [] }, // 1KB - 10KB
      medium: { min: 10240, max: 102400, files: [] }, // 10KB - 100KB
      large: { min: 102400, max: 1048576, files: [] }, // 100KB - 1MB
      huge: { min: 1048576, max: Infinity, files: [] }, // > 1MB
    };

    const analyzeSizeInDir = (dirPath) => {
      try {
        const items = fs.readdirSync(dirPath);
        for (const item of items) {
          if (this.shouldIgnore(item)) continue;

          const fullPath = path.join(dirPath, item);
          const stats = fs.statSync(fullPath);

          if (stats.isDirectory()) {
            analyzeSizeInDir(fullPath);
          } else {
            for (const [categoryName, category] of Object.entries(
              sizeCategories
            )) {
              if (stats.size >= category.min && stats.size < category.max) {
                category.files.push({
                  path: fullPath.replace(this.projectRoot, ""),
                  size: stats.size,
                  sizeFormatted: this.formatBytes(stats.size),
                });
                break;
              }
            }
          }
        }
      } catch (error) {
        console.warn(`⚠️ Größen-Analyse Fehler: ${error.message}`);
      }
    };

    analyzeSizeInDir(this.projectRoot);
    this.structures.sizingAnalysis = new Map(Object.entries(sizeCategories));
  }

  async mapDependencies() {
    // Analysiere Import/Require-Statements
    const findDependencies = (dirPath) => {
      try {
        const items = fs.readdirSync(dirPath);
        for (const item of items) {
          if (this.shouldIgnore(item)) continue;

          const fullPath = path.join(dirPath, item);
          const stats = fs.statSync(fullPath);

          if (stats.isDirectory()) {
            findDependencies(fullPath);
          } else if (
            item.endsWith(".js") ||
            item.endsWith(".cjs") ||
            item.endsWith(".mjs") ||
            item.endsWith(".astro")
          ) {
            try {
              const content = fs.readFileSync(fullPath, "utf-8");
              const imports = [];

              // Find imports/requires
              const importRegex =
                /(?:import.*from\s+['"`]([^'"`]+)['"`]|require\(['"`]([^'"`]+)['"`]\))/g;
              let match;
              while ((match = importRegex.exec(content)) !== null) {
                imports.push(match[1] || match[2]);
              }

              if (imports.length > 0) {
                this.structures.dependencyMap.set(
                  fullPath.replace(this.projectRoot, ""),
                  imports
                );
              }
            } catch (readError) {
              console.warn(
                `⚠️ Dependency-Analyse Lesefehler: ${readError.message}`
              );
            }
          }
        }
      } catch (error) {
        console.warn(`⚠️ Dependency-Mapping Fehler: ${error.message}`);
      }
    };

    findDependencies(this.projectRoot);
  }

  async generateReport() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const reportPath = path.join(
      this.projectRoot,
      "tools",
      "analyzer",
      `struktur-tiefenanalyse-${timestamp}.md`
    );

    let report = `# 🏗️ STRUKTUR-TIEFENANALYSE - simon-recht\n\n`;
    report += `**Erstellt:** ${new Date().toLocaleString("de-DE")}  \n`;
    report += `**Tool-Version:** Structure-Deep-Analyzer v1.0  \n`;
    report += `**Projekt-Root:** ${this.projectRoot}\n\n`;

    // Verzeichnis-Hierarchie
    report += `## 📁 VERZEICHNIS-HIERARCHIE\n\n`;
    const rootDir = this.structures.directories.get(this.projectRoot);
    report += `| Verzeichnis | Tiefe | Dateien | Unterordner | Größe |\n`;
    report += `|-------------|-------|---------|-------------|-------|\n`;

    const addDirToReport = (dirInfo, name = "ROOT") => {
      const indent = "  ".repeat(dirInfo.depth);
      report += `| ${indent}${name} | ${dirInfo.depth} | ${
        dirInfo.fileCount
      } | ${dirInfo.subdirectoryCount} | ${this.formatBytes(
        dirInfo.totalSize
      )} |\n`;

      for (const child of dirInfo.children) {
        const childName = path.basename(child.path);
        addDirToReport(child, childName);
      }
    };

    if (rootDir) addDirToReport(rootDir);

    // Dateityp-Verteilung
    report += `\n## 📋 DATEITYP-VERTEILUNG\n\n`;
    report += `| Extension | Anzahl | Gesamt-Größe | Ø Größe |\n`;
    report += `|-----------|--------|-------------|----------|\n`;

    const sortedTypes = Array.from(this.structures.filesByType.entries()).sort(
      (a, b) => b[1].count - a[1].count
    );

    for (const [ext, info] of sortedTypes) {
      report += `| ${ext || "keine"} | ${info.count} | ${this.formatBytes(
        info.totalSize
      )} | ${this.formatBytes(info.avgSize)} |\n`;
    }

    // Scope-Tiefe-Analyse
    report += `\n## 🎯 SCOPE-TIEFEN-ANALYSE\n\n`;
    report += `| Scope | Dateien | Ø Tiefe | Min/Max | Verzeichnisse |\n`;
    report += `|-------|---------|---------|---------|---------------|\n`;

    for (const [scopeName, info] of this.structures.scopeDepth.entries()) {
      report += `| ${scopeName} | ${
        info.files.length
      } | ${info.avgDepth.toFixed(1)} | ${info.minDepth}/${info.maxDepth} | ${
        info.directories.size
      } |\n`;
    }

    // Naming-Pattern-Analyse
    report += `\n## 🏷️ NAMING-PATTERN-VERTEILUNG\n\n`;
    report += `| Pattern | Dateien | Verzeichnisse | Gesamt |\n`;
    report += `|---------|---------|---------------|--------|\n`;

    for (const [pattern, info] of this.structures.namingPatterns.entries()) {
      const total = info.files.length + info.directories.length;
      report += `| ${pattern} | ${info.files.length} | ${info.directories.length} | ${total} |\n`;
    }

    // Größen-Verteilung
    report += `\n## 📏 DATEIGRÖSSEN-VERTEILUNG\n\n`;
    report += `| Kategorie | Anzahl | Größten-Bereich |\n`;
    report += `|-----------|--------|----------------|\n`;

    for (const [category, info] of this.structures.sizingAnalysis.entries()) {
      const range =
        category === "huge"
          ? "> 1MB"
          : category === "large"
          ? "100KB - 1MB"
          : category === "medium"
          ? "10KB - 100KB"
          : category === "small"
          ? "1KB - 10KB"
          : "< 1KB";
      report += `| ${category} | ${info.files.length} | ${range} |\n`;
    }

    // Top 10 größte Dateien
    const allFiles = [];
    for (const [, info] of this.structures.sizingAnalysis.entries()) {
      allFiles.push(...info.files);
    }
    const topFiles = allFiles.sort((a, b) => b.size - a.size).slice(0, 10);

    if (topFiles.length > 0) {
      report += `\n### 📊 TOP 10 GRÖSSTE DATEIEN\n\n`;
      report += `| Datei | Größe |\n`;
      report += `|-------|-------|\n`;
      for (const file of topFiles) {
        report += `| ${file.path} | ${file.sizeFormatted} |\n`;
      }
    }

    // Dependency-Mapping
    if (this.structures.dependencyMap.size > 0) {
      report += `\n## 🔗 DEPENDENCY-MAPPING\n\n`;
      report += `| Datei | Dependencies |\n`;
      report += `|-------|-------------|\n`;

      for (const [file, deps] of this.structures.dependencyMap.entries()) {
        report += `| ${file} | ${deps.join(", ")} |\n`;
      }
    }

    // Struktur-Empfehlungen
    report += `\n## 💡 STRUKTUR-EMPFEHLUNGEN\n\n`;

    // Tiefe Verschachtelung
    const deepScopes = Array.from(this.structures.scopeDepth.entries())
      .filter(([, info]) => info.maxDepth > 4)
      .sort((a, b) => b[1].maxDepth - a[1].maxDepth);

    if (deepScopes.length > 0) {
      report += `### 🔍 TIEFE VERSCHACHTELUNG (>4 Ebenen)\n\n`;
      for (const [scope, info] of deepScopes) {
        report += `- **${scope}:** Max-Tiefe ${
          info.maxDepth
        } (Ø ${info.avgDepth.toFixed(1)})\n`;
      }
      report += `\n**EMPFEHLUNG:** Flachere Hierarchien fördern Übersichtlichkeit.\n\n`;
    }

    // Große Dateien
    const hugeFiles = this.structures.sizingAnalysis.get("huge");
    if (hugeFiles && hugeFiles.files.length > 0) {
      report += `### 📦 GROSSE DATEIEN (>1MB)\n\n`;
      for (const file of hugeFiles.files) {
        report += `- **${file.path}:** ${file.sizeFormatted}\n`;
      }
      report += `\n**EMPFEHLUNG:** Große Dateien auf Modularisierung prüfen.\n\n`;
    }

    // Naming-Inkonsistenzen
    const mixedNaming = this.structures.namingPatterns.get("mixedCase");
    if (
      mixedNaming &&
      mixedNaming.files.length + mixedNaming.directories.length > 10
    ) {
      report += `### 🏷️ NAMING-INKONSISTENZEN\n\n`;
      report += `**Mixed-Case Pattern:** ${
        mixedNaming.files.length + mixedNaming.directories.length
      } Items\n\n`;
      report += `**EMPFEHLUNG:** Einheitliche Naming-Convention etablieren (kebab-case für Dateien).\n\n`;
    }

    // Scope-Balance
    const scopeSizes = Array.from(this.structures.scopeDepth.entries())
      .map(([name, info]) => ({ name, count: info.files.length }))
      .sort((a, b) => b.count - a.count);

    const largestScope = scopeSizes[0];
    const smallestScope = scopeSizes[scopeSizes.length - 1];

    if (
      largestScope &&
      smallestScope &&
      largestScope.count > smallestScope.count * 5
    ) {
      report += `### ⚖️ SCOPE-UNBALANCE\n\n`;
      report += `**Größter Scope:** ${largestScope.name} (${largestScope.count} Dateien)\n`;
      report += `**Kleinster Scope:** ${smallestScope.name} (${smallestScope.count} Dateien)\n\n`;
      report += `**EMPFEHLUNG:** Große Scopes in Sub-Scopes aufteilen.\n\n`;
    }

    fs.writeFileSync(reportPath, report);

    console.log("============================================================");
    console.log(`📊 STRUKTUR-TIEFENANALYSE ABGESCHLOSSEN!`);
    console.log(`📄 Report gespeichert: ${reportPath}`);
    console.log("============================================================");

    return reportPath;
  }

  shouldIgnore(name) {
    const ignorePatterns = [
      "node_modules",
      ".git",
      ".vscode",
      "dist",
      ".astro",
      ".DS_Store",
      "Thumbs.db",
      ".env",
      ".env.local",
    ];
    return ignorePatterns.some((pattern) => name.includes(pattern));
  }

  formatBytes(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
}

// Führe Analyse aus wenn direkt aufgerufen
if (require.main === module) {
  const analyzer = new StructureDeepAnalyzer();
  analyzer.analyze().catch(console.error);
}

module.exports = StructureDeepAnalyzer;
