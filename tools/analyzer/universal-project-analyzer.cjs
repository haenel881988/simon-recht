#!/usr/bin/env node
// Logfile-Handling: Immer nur die letzten 8 Logdateien behalten, ältere löschen
function cleanupOldLogs(
  logDir,
  pattern = /^projekt-analyse-.*\.md$|^widerspruchs-report-.*\.md$/i,
  keep = 8
) {
  const fs = require("fs");
  const path = require("path");
  if (!fs.existsSync(logDir)) return;
  const files = fs
    .readdirSync(logDir)
    .filter((f) => pattern.test(f))
    .map((f) => ({
      name: f,
      time: fs.statSync(path.join(logDir, f)).mtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time);
  if (files.length > keep) {
    files.slice(keep).forEach((f) => {
      try {
        fs.unlinkSync(path.join(logDir, f.name));
      } catch (e) {
        /* ignore */
      }
    });
  }
}

// Vor Analyse Logfiles bereinigen
cleanupOldLogs(
  __dirname,
  /^projekt-analyse-.*\.md$|^widerspruchs-report-.*\.md$/i,
  8
);

/**
 * 🤖 UNIVERSELLES PROJEKT-ANALYSE-SYSTEM v1.0
 *
 * REVOLUTIONÄRES KI-ASSISTENZ-TOOL für simon-recht
 *
 * FEATURES:
 * - Vollautomatische Projekt-Inventarisierung
 * - Intelligente Bereichs-Erkennung & Überlappungs-Analyse
 * - Token-optimierte Scope-Trennung
 * - Modularisierungs-Empfehlungen
 * - KI-Blindheits-Prevention durch Smart-Chunking
 *
 * ZIEL: KI arbeitet IMMER mit fokussierten Bereichen statt Vollprojekt-Chaos
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// SCOPE-DEFINITIONS aus separatem Modul laden
const {
  SCOPE_DEFINITIONS,
  OVERLAP_RULES,
  TOKEN_LIMITS,
} = require("./modules/scope-definitions.js");

class UniversalProjectAnalyzer {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot;
    this.stats = {
      totalFiles: 0,
      totalLines: 0,
      totalWords: 0,
      totalChars: 0,
      scopes: new Map(),
      overlaps: [],
      modularizationSuggestions: [],
    };

    // SCOPE-PATTERN aus modularer Definition laden
    this.scopePatterns = SCOPE_DEFINITIONS;

    // 🚨 SIMON'S NEUE SCOPES (01.08.2025)
    this.redundancyDetection = {
      duplicateFiles: new Map(),
      filenameRedundancies: [], // SIMON'S NEUE FILENAME-REDUNDANZ-DETECTION
      redundantDirectories: [],
      emptyDirectories: [],
      orphanedFiles: [],
    };

    this.structureValidation = {
      misplacedFiles: [],
      illogicalPlacements: [],
      structureViolations: [],
      namingInconsistencies: [],
    };

    // ÜBERLAPPUNGS-REGELN aus modularer Definition laden
    this.overlapRules = OVERLAP_RULES;
  }

  /**
   * 🎯 HAUPTANALYSE: Vollständige Projekt-Inventarisierung
   */
  async analyzeProject() {
    console.log("🤖 UNIVERSELLES PROJEKT-ANALYSE-SYSTEM v1.0");
    console.log("=".repeat(60));
    console.log(`📁 Projekt-Root: ${this.projectRoot}`);
    console.log(`⏰ Start-Zeit: ${new Date().toLocaleString("de-DE")}`);
    console.log("");

    const startTime = Date.now();

    // Phase 1: Datei-Inventarisierung
    console.log("📊 PHASE 1: Vollständige Datei-Inventarisierung...");
    await this.scanDirectory(this.projectRoot);

    // Phase 2: Scope-Erkennung
    console.log("\n🔍 PHASE 2: Intelligente Bereichs-Erkennung...");
    this.categorizeByScopes();

    // Phase 3: Überlappungs-Analyse
    console.log("\n🔗 PHASE 3: Scope-Überlappungs-Analyse...");
    this.analyzeOverlaps();

    // Phase 4: SIMON'S NEUE REDUNDANZ-ANALYSE
    console.log("\n🔄 PHASE 4: Redundanz-Erkennung...");
    await this.analyzeRedundancies();

    // Phase 5: SIMON'S NEUE STRUKTUR-VALIDIERUNG
    console.log("\n🏗️ PHASE 5: Struktur-Validierung...");
    await this.validateProjectStructure();

    // Phase 6: Modularisierungs-Empfehlungen
    console.log("\n🏗️ PHASE 6: Modularisierungs-Advisor...");
    this.generateModularizationSuggestions();

    // Phase 7: VERIFICATION
    console.log("\n🔍 PHASE 7: Analysis-Verification...");
    const verificationResults = await this.performAnalysisVerification();

    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;

    // Ergebnis-Report generieren mit Verification
    await this.generateReport(duration, verificationResults);
  }

  /**
   * 📁 Rekursives Verzeichnis-Scanning
   */
  async scanDirectory(dirPath, relativePath = "") {
    try {
      const items = fs.readdirSync(dirPath);

      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relativeItemPath = path
          .join(relativePath, item)
          .replace(/\\/g, "/");

        // Ignoriere System-Dateien und Build-Artefakte
        if (this.shouldIgnore(item)) continue;

        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          await this.scanDirectory(fullPath, relativeItemPath);
        } else {
          await this.analyzeFile(fullPath, relativeItemPath);
        }
      }
    } catch (error) {
      console.warn(`⚠️ Fehler beim Scannen von ${dirPath}: ${error.message}`);
    }
  }

  /**
   * 📄 Einzeldatei-Analyse
   */
  async analyzeFile(fullPath, relativePath) {
    try {
      const content = fs.readFileSync(fullPath, "utf-8");
      const lines = content.split("\n").length;
      const words = content
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
      const chars = content.length;

      this.stats.totalFiles++;
      this.stats.totalLines += lines;
      this.stats.totalWords += words;
      this.stats.totalChars += chars;

      // Scope-Zuordnung bestimmen
      const scopes = this.identifyFileScopes(relativePath, content);

      // Datei-Metadaten speichern
      const fileInfo = {
        path: relativePath,
        size: chars,
        lines,
        words,
        scopes,
        tokenEstimate: Math.ceil(words * 1.3), // Grobe Token-Schätzung
        lastModified: fs.statSync(fullPath).mtime,
      };

      // Zu entsprechenden Scopes hinzufügen
      scopes.forEach((scope) => {
        if (!this.stats.scopes.has(scope)) {
          this.stats.scopes.set(scope, {
            files: [],
            totalLines: 0,
            totalWords: 0,
            totalTokens: 0,
          });
        }

        const scopeData = this.stats.scopes.get(scope);
        scopeData.files.push(fileInfo);
        scopeData.totalLines += lines;
        scopeData.totalWords += words;
        scopeData.totalTokens += fileInfo.tokenEstimate;
      });
    } catch (error) {
      console.warn(
        `⚠️ Fehler beim Analysieren von ${relativePath}: ${error.message}`
      );
    }
  }

  /**
   * 🏷️ Scope-Identifikation für Datei (SIMON'S EINZEL-ZUORDNUNG)
   */
  identifyFileScopes(filePath, content) {
    // PRIORITÄTS-REIHENFOLGE: Spezifischste Bereiche zuerst prüfen
    const scopePriority = [
      "DOCUMENTATION_CORE", // Neue Sub-Scopes zuerst!
      "DOCUMENTATION_TECHNICAL",
      "DOCUMENTATION_WEBSITE",
      "DOCUMENTATION_HUB",
      "IDEENWERKSTATT", // Separater Scope für Ideenwerkstatt
      "ANALYZER_CORE_TOOLS", // Haupt-Analyzer-Tools (spezifischste)
      "ANALYZER_REPORTS", // Analyzer Reports
      "ANALYZER_MODULES_BASE", // Analyzer Module Base
      "ANALYZER_MODULES_CORE", // Analyzer Module Core
      "ANALYZER_MODULES_SCOPES", // Analyzer Module Scopes
      "ANALYZER_LEGACY_TOOLS", // Legacy Analyzer Tools
      "LEGACY_RECHERCHE_GRUND", // Legacy Recherche Grund (spezifischste)
      "LEGACY_RECHERCHE_COACHING", // Legacy Recherche Coaching
      "LEGACY_RECHERCHE_SEO", // Legacy Recherche SEO
      "LEGACY_RECHERCHE_GTM", // Legacy Recherche Go-to-Market
      "LEGACY_RECHERCHE_BILDUNG", // Legacy Recherche Bildung
      "LEGACY_CONTENT", // Legacy Content
      "LEGACY_DESIGN", // Legacy Design
      "LEGACY_ZIELGRUPPE", // Legacy Zielgruppe
      "TODOS_PRIORITAETEN", // TODO Prioritäten (spezifisch)
      "TODOS_VERHALTENSMUSTER", // TODO Verhaltensmuster (spezifisch)
      "TODOS_STRUKTUR", // TODO Struktur (spezifisch)
      "TODOS_CORE", // TODO Core (spezifisch) (allgemein)
      "INSTRUCTIONS", // Höchste Priorität: .github/instructions/
      "CSS_DESIGN", // Dann: src/styles/
      "ASTRO_COMPONENTS", // Dann: .astro Dateien
      "ASSETS", // Dann: public/
      "BUILD_SYSTEM", // Dann: Build-Tools
      "CONFIG", // Dann: Konfigurationen
      "CONTENT", // Dann: Content
      "LEGACY_DOCUMENTATION", // Legacy-Dokumentation (niedrigste Priorität)
    ]; // Suche ersten passenden Scope (Einzel-Zuordnung)
    for (const scopeName of scopePriority) {
      if (this.scopePatterns[scopeName]) {
        for (const pattern of this.scopePatterns[scopeName]) {
          if (pattern.test(filePath) || pattern.test(content)) {
            return [scopeName]; // NUR EINEN Scope zurückgeben!
          }
        }
      }
    }

    // Falls keine Scope-Zuordnung → UNCLASSIFIED
    return ["UNCLASSIFIED"];
  }

  /**
   * 📊 Scope-Kategorisierung zusammenfassen
   */
  categorizeByScopes() {
    console.log("\n📋 SCOPE-VERTEILUNG:");

    const sortedScopes = Array.from(this.stats.scopes.entries()).sort(
      (a, b) => b[1].totalTokens - a[1].totalTokens
    );

    sortedScopes.forEach(([scope, data]) => {
      const fileCount = data.files.length;
      const avgTokensPerFile = Math.round(data.totalTokens / fileCount);

      console.log(
        `  ${scope}: ${fileCount} Dateien, ${data.totalTokens} Tokens (Ø ${avgTokensPerFile})`
      );
    });
  }

  /**
   * 🔗 Überlappungs-Analyse
   */
  analyzeOverlaps() {
    // Multi-Scope-Dateien finden (BUG-FIX: Set verwenden für Eindeutigkeit)
    const multiScopeFiles = [];
    const seenFiles = new Set();

    for (const [scope, data] of this.stats.scopes.entries()) {
      data.files.forEach((file) => {
        if (file.scopes.length > 1 && !seenFiles.has(file.path)) {
          multiScopeFiles.push(file);
          seenFiles.add(file.path);
        }
      });
    }

    console.log(
      `\n🔗 ÜBERLAPPUNGEN GEFUNDEN: ${multiScopeFiles.length} Multi-Scope-Dateien`
    );

    // Gruppiere nach Scope-Kombinationen
    const overlapMap = new Map();

    multiScopeFiles.forEach((file) => {
      const scopeKey = file.scopes.sort().join("+");
      if (!overlapMap.has(scopeKey)) {
        overlapMap.set(scopeKey, []);
      }
      overlapMap.get(scopeKey).push(file);
    });

    // Analysiere kritische Überlappungen
    for (const [scopeCombo, files] of overlapMap.entries()) {
      const scopes = scopeCombo.split("+");
      const rule = this.overlapRules.find((r) =>
        r.scopes.every((s) => scopes.includes(s))
      );

      if (rule) {
        console.log(
          `  ⚠️ ${scopeCombo}: ${files.length} Dateien (${rule.priority} Priority)`
        );
        console.log(`     Grund: ${rule.reason}`);
        console.log(
          `     Kombiniert erlaubt: ${rule.allowCombined ? "✅" : "❌"}`
        );

        this.stats.overlaps.push({
          scopes,
          files,
          rule,
          recommendation: rule.allowCombined
            ? "ALLOW_COMBINED"
            : "SEPARATE_ANALYSIS",
        });
      }
    }
  }

  /**
   * 🏗️ Modularisierungs-Empfehlungen
   */
  generateModularizationSuggestions() {
    const suggestions = [];

    // 1. Große Scopes aufteilen
    for (const [scope, data] of this.stats.scopes.entries()) {
      if (data.totalTokens > 15000) {
        // >15k Tokens = GLOBAL LIMIT überschritten
        suggestions.push({
          type: "SPLIT_SCOPE",
          scope,
          reason: `Scope ${scope} hat ${data.totalTokens} Tokens (>15k GLOBAL LIMIT)`,
          action: `Aufteilen in Sub-Scopes oder separate Verzeichnisse`,
          priority: "HIGH",
        });
      }
    }

    // 2. UNCLASSIFIED-Dateien kategorisieren
    if (this.stats.scopes.has("UNCLASSIFIED")) {
      const unclassified = this.stats.scopes.get("UNCLASSIFIED");
      if (unclassified.files.length > 5) {
        suggestions.push({
          type: "CATEGORIZE_FILES",
          scope: "UNCLASSIFIED",
          reason: `${unclassified.files.length} Dateien ohne Scope-Zuordnung`,
          action: `Neue Scope-Pattern definieren oder Dateien reorganisieren`,
          priority: "MEDIUM",
        });
      }
    }

    // 3. TOKEN-KRITISCHE ANALYSE MIT KI-WORK-CONTEXT-FILTER
    const totalTokens = Array.from(this.stats.scopes.values()).reduce(
      (sum, data) => sum + data.totalTokens,
      0
    );

    // SIMON'S KI-WORK-CONTEXT-BERECHNUNG
    const kiRelevantScopes = [
      "ASTRO_COMPONENTS",
      "CSS_DESIGN",
      "INSTRUCTIONS",
      "TODOS_MANAGEMENT",
      "CONFIG",
      "BUILD_SYSTEM",
    ];
    const kiWorkTokens = Array.from(this.stats.scopes.entries())
      .filter(([scope]) => kiRelevantScopes.includes(scope))
      .reduce((sum, [, data]) => sum + data.totalTokens, 0);

    if (totalTokens > 50000) {
      // KI-WORK-CONTEXT vs. PROJEKT-TOTAL
      const kiPercentage = Math.round((kiWorkTokens / totalTokens) * 100);

      suggestions.push({
        type: "IMPLEMENT_CHUNKING",
        scope: "PROJECT_WIDE",
        reason: `Projekt-Total: ${totalTokens} Tokens (KI-Work-Context: ${kiWorkTokens} = ${kiPercentage}%)`,
        action: `HINWEIS: KI arbeitet nur mit relevanten Scopes, nicht Vollprojekt. Bei Token-Warnings: Scope-fokussierte Arbeit nutzen.`,
        priority: kiWorkTokens > 30000 ? "HIGH" : "MEDIUM",
      });
    }

    this.stats.modularizationSuggestions = suggestions;

    console.log("\n🏗️ MODULARISIERUNGS-EMPFEHLUNGEN:");
    suggestions.forEach((suggestion, index) => {
      console.log(
        `  ${index + 1}. [${suggestion.priority}] ${suggestion.reason}`
      );
      console.log(`     → ${suggestion.action}`);
    });
  }

  /**
   * � PHASE 4: REDUNDANZ-ERKENNUNG (SIMON'S REQUEST 01.08.2025)
   */
  async analyzeRedundancies() {
    console.log("\n📋 REDUNDANZ-ANALYSE:");

    // 1. DOPPELTE DATEIEN finden (nach Content-Hash)
    const fileHashes = new Map();
    const allFiles = [];

    for (const [scope, data] of this.stats.scopes.entries()) {
      allFiles.push(...data.files.map((f) => ({ ...f, scope })));
    }

    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(
          path.join(this.projectRoot, file.path),
          "utf-8"
        );
        const hash = crypto.createHash("md5").update(content).digest("hex");

        if (!fileHashes.has(hash)) {
          fileHashes.set(hash, []);
        }
        fileHashes.get(hash).push(file);
      } catch (error) {
        // Datei nicht lesbar (Binär-Datei, etc.)
        continue;
      }
    }

    // Doppelte Dateien identifizieren (Content-basiert)
    for (const [hash, files] of fileHashes.entries()) {
      if (files.length > 1) {
        this.redundancyDetection.duplicateFiles.set(hash, files);
        console.log(
          `  🔄 CONTENT-DUPLIKAT gefunden: ${files.length} identische Dateien`
        );
        files.forEach((f) => console.log(`     - ${f.path} (${f.scope})`));
      }
    }

    // 🚨 SIMON'S NEUE FILENAME-REDUNDANZ-DETECTION
    console.log("\n🚨 FILENAME-REDUNDANZ-ANALYSE:");
    this.detectFilenameRedundancies(allFiles);

    // 2. LEERE VERZEICHNISSE finden
    await this.findEmptyDirectories(this.projectRoot);

    // 3. REDUNDANTE VERZEICHNISSE (ähnliche Namen/Zwecke)
    this.findRedundantDirectories();

    console.log(`\n🔄 REDUNDANZ-ZUSAMMENFASSUNG:`);
    console.log(
      `   � ${this.redundancyDetection.duplicateFiles.size} Content-Duplikat-Gruppen`
    );
    console.log(
      `   🏷️ ${this.redundancyDetection.filenameRedundancies.length} Filename-Redundanzen`
    );
    console.log(
      `   📂 ${this.redundancyDetection.emptyDirectories.length} leere Verzeichnisse`
    );
    console.log(
      `   🔄 ${this.redundancyDetection.redundantDirectories.length} redundante Verzeichnisse`
    );
  }

  /**
   * 🚨 FILENAME-REDUNDANZ-DETECTION (SIMON'S ENHANCEMENT 01.08.2025)
   */
  detectFilenameRedundancies(allFiles) {
    const baseFilenames = new Map();

    // Gruppiere nach Basis-Filename (ohne Suffixe wie _old, _clean, _backup)
    for (const file of allFiles) {
      const fileName = path.basename(file.path, path.extname(file.path));
      const extension = path.extname(file.path);

      // Normalisiere Filename: entferne bekannte Suffixe
      let baseFileName = fileName
        .replace(/_(old|clean|backup|copy|orig|original|new|temp|tmp)$/i, "")
        .replace(/\.(old|clean|backup|copy|orig|original|new|temp|tmp)$/i, "");

      const fullBaseName = baseFileName + extension;
      const dirPath = path.dirname(file.path);
      const uniqueKey = `${dirPath}/${fullBaseName}`;

      if (!baseFilenames.has(uniqueKey)) {
        baseFilenames.set(uniqueKey, []);
      }
      baseFilenames.get(uniqueKey).push(file);
    }

    // Identifiziere Redundanzen
    for (const [baseKey, files] of baseFilenames.entries()) {
      if (files.length > 1) {
        const redundancyGroup = {
          basePattern: baseKey,
          files: files,
          severity: this.assessFilenameRedundancySeverity(files),
        };

        this.redundancyDetection.filenameRedundancies.push(redundancyGroup);

        console.log(`  🚨 FILENAME-REDUNDANZ: ${baseKey}`);
        console.log(`     Severität: ${redundancyGroup.severity}`);
        files.forEach((f) => console.log(`     - ${f.path} (${f.scope})`));
      }
    }
  }

  /**
   * ⚖️ Bewerte Severität von Filename-Redundanzen
   */
  assessFilenameRedundancySeverity(files) {
    // KRITISCH: Beide Dateien im selben Verzeichnis, ähnliche Größe
    if (files.length === 2) {
      const [file1, file2] = files;
      const sizeDiff = Math.abs(file1.size - file2.size);
      const avgSize = (file1.size + file2.size) / 2;
      const sizeDiffPercent = (sizeDiff / avgSize) * 100;

      if (sizeDiffPercent < 20) {
        return "KRITISCH"; // Sehr ähnliche Dateien
      } else if (sizeDiffPercent < 50) {
        return "HOCH"; // Mäßig unterschiedliche Dateien
      } else {
        return "MITTEL"; // Deutlich unterschiedliche Dateien
      }
    }

    return files.length > 2 ? "KRITISCH" : "MITTEL";
  }

  /**
   * 🏗️ PHASE 5: STRUKTUR-VALIDIERUNG (SIMON'S REQUEST 01.08.2025)
   */
  async validateProjectStructure() {
    console.log("\n📋 STRUKTUR-VALIDIERUNG:");

    // 1. DATEI-PLATZIERUNG validieren
    for (const [scope, data] of this.stats.scopes.entries()) {
      for (const file of data.files) {
        this.validateFilePlacement(file, scope);
      }
    }

    // 2. NAMING-KONSISTENZ prüfen
    this.validateNamingConsistency();

    // 3. VERZEICHNIS-LOGIK prüfen
    this.validateDirectoryLogic();

    console.log(`\n🏗️ STRUKTUR-ZUSAMMENFASSUNG:`);
    console.log(
      `   📄 ${this.structureValidation.misplacedFiles.length} falsch platzierte Dateien`
    );
    console.log(
      `   🏷️ ${this.structureValidation.namingInconsistencies.length} Naming-Probleme`
    );
    console.log(
      `   📁 ${this.structureValidation.structureViolations.length} Struktur-Verletzungen`
    );
  }

  /**
   * �🔍 Leere Verzeichnisse rekursiv finden
   */
  async findEmptyDirectories(dirPath, relativePath = "") {
    try {
      const items = fs.readdirSync(dirPath);
      let hasFiles = false;

      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relativeItemPath = path
          .join(relativePath, item)
          .replace(/\\/g, "/");

        if (this.shouldIgnore(item)) continue;

        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          await this.findEmptyDirectories(fullPath, relativeItemPath);
        } else {
          hasFiles = true;
        }
      }

      // Verzeichnis ist leer wenn keine Dateien und keine wichtigen Unterverzeichnisse
      if (!hasFiles && relativePath !== "") {
        this.redundancyDetection.emptyDirectories.push(relativePath);
      }
    } catch (error) {
      // Verzeichnis nicht lesbar
    }
  }

  /**
   * 🔄 Redundante Verzeichnisse finden
   */
  findRedundantDirectories() {
    const directories = new Set();

    // Alle Verzeichnis-Pfade sammeln
    for (const [scope, data] of this.stats.scopes.entries()) {
      for (const file of data.files) {
        const dir = path.dirname(file.path);
        if (dir !== ".") {
          directories.add(dir);
        }
      }
    }

    const dirArray = Array.from(directories);

    // Ähnliche Verzeichnisse finden
    for (let i = 0; i < dirArray.length; i++) {
      for (let j = i + 1; j < dirArray.length; j++) {
        const dir1 = dirArray[i];
        const dir2 = dirArray[j];

        // Ähnlichkeits-Check
        if (this.areSimilarDirectories(dir1, dir2)) {
          this.redundancyDetection.redundantDirectories.push({
            dir1,
            dir2,
            reason: "Ähnliche Namen oder Zwecke",
          });
        }
      }
    }
  }

  /**
   * 📄 Datei-Platzierung validieren
   */
  validateFilePlacement(file, assignedScope) {
    const idealScope = this.getIdealScopeForFile(file);

    if (idealScope !== assignedScope) {
      this.structureValidation.misplacedFiles.push({
        file: file.path,
        currentScope: assignedScope,
        idealScope,
        reason: `Datei gehört besser zu ${idealScope}`,
      });
    }

    // Spezifische Regeln prüfen
    this.validateSpecificRules(file);
  }

  /**
   * 🎯 Idealen Scope für Datei bestimmen
   */
  getIdealScopeForFile(file) {
    const filePath = file.path.toLowerCase();

    // CSS-Dateien gehören zu CSS_DESIGN
    if (filePath.includes(".css") || filePath.includes("styles")) {
      return "CSS_DESIGN";
    }

    // Astro-Komponenten
    if (filePath.includes(".astro")) {
      return "ASTRO_COMPONENTS";
    }

    // Documentation - erweiterte Pattern-Erkennung
    if (
      filePath.toLowerCase().includes("readme") ||
      filePath.includes("docs/") ||
      filePath.includes("docs\\") ||
      filePath.includes("/documentation/") ||
      filePath.includes("\\documentation\\")
    ) {
      return "DOCUMENTATION";
    }

    // Instructions
    if (filePath.includes("instructions") || filePath.includes(".github/")) {
      return "INSTRUCTIONS";
    }

    // Build/Tools
    if (filePath.includes("tools/") || filePath.includes("build")) {
      return "BUILD_SYSTEM";
    }

    // Content
    if (filePath.includes("content/") || filePath.includes("blog/")) {
      return "CONTENT";
    }

    return "UNCLASSIFIED";
  }

  /**
   * 📏 Spezifische Struktur-Regeln validieren
   */
  validateSpecificRules(file) {
    const filePath = file.path;

    // Regel 1: CSS-Dateien sollten in src/styles/ sein
    if (filePath.endsWith(".css") && !filePath.includes("src/styles/")) {
      this.structureValidation.structureViolations.push({
        file: filePath,
        rule: "CSS-LOCATION",
        expected: "src/styles/",
        actual: path.dirname(filePath),
        severity: "MEDIUM",
      });
    }

    // Regel 2: Astro-Komponenten in src/
    if (filePath.endsWith(".astro") && !filePath.startsWith("src/")) {
      this.structureValidation.structureViolations.push({
        file: filePath,
        rule: "ASTRO-LOCATION",
        expected: "src/",
        actual: path.dirname(filePath),
        severity: "HIGH",
      });
    }

    // Regel 3: README-Dateien an Verzeichnis-Root
    if (
      filePath.toLowerCase().includes("readme") &&
      path.basename(path.dirname(filePath)) !==
        path.dirname(path.dirname(filePath))
    ) {
      this.structureValidation.structureViolations.push({
        file: filePath,
        rule: "README-PLACEMENT",
        expected: "Verzeichnis-Root",
        actual: "Unterverzeichnis",
        severity: "LOW",
      });
    }
  }

  /**
   * 🏷️ Naming-Konsistenz validieren
   */
  validateNamingConsistency() {
    const namingPatterns = new Map();

    for (const [scope, data] of this.stats.scopes.entries()) {
      for (const file of data.files) {
        const fileName = path.basename(file.path);
        const fileExt = path.extname(fileName);
        const baseName = path.basename(fileName, fileExt);

        // Naming-Pattern analysieren
        if (baseName.includes("-") && baseName.includes("_")) {
          this.structureValidation.namingInconsistencies.push({
            file: file.path,
            issue: "MIXED_SEPARATORS",
            suggestion: "Verwende einheitlich - oder _",
            severity: "LOW",
          });
        }

        // CamelCase in Dateinamen (sollte kebab-case sein)
        if (/[A-Z]/.test(baseName) && fileExt === ".md") {
          this.structureValidation.namingInconsistencies.push({
            file: file.path,
            issue: "CAMELCASE_IN_MARKDOWN",
            suggestion: "kebab-case für Markdown-Dateien",
            severity: "LOW",
          });
        }
      }
    }
  }

  /**
   * 📁 Verzeichnis-Logik validieren
   */
  validateDirectoryLogic() {
    // Logik für maximale Verzeichnis-Tiefe
    for (const [scope, data] of this.stats.scopes.entries()) {
      for (const file of data.files) {
        const depth = file.path.split("/").length - 1;

        if (depth > 5) {
          this.structureValidation.structureViolations.push({
            file: file.path,
            rule: "MAX_DEPTH",
            expected: "≤ 5 Ebenen",
            actual: `${depth} Ebenen`,
            severity: "MEDIUM",
          });
        }
      }
    }
  }

  /**
   * 🔍 Ähnliche Verzeichnisse erkennen
   */
  areSimilarDirectories(dir1, dir2) {
    // Einfache Ähnlichkeits-Heuristik
    const name1 = path.basename(dir1).toLowerCase();
    const name2 = path.basename(dir2).toLowerCase();

    // Exakte Duplikate
    if (name1 === name2) return true;

    // Ähnliche Namen (Levenshtein-Distance < 3)
    if (this.levenshteinDistance(name1, name2) < 3 && name1.length > 3) {
      return true;
    }

    // Synonyme
    const synonyms = [
      ["docs", "documentation", "doc"],
      ["img", "images", "pictures", "pics"],
      ["js", "javascript", "scripts"],
      ["css", "styles", "stylesheets"],
      ["tmp", "temp", "temporary"],
      ["archive", "archiv", "old", "backup"],
    ];

    for (const group of synonyms) {
      if (group.includes(name1) && group.includes(name2)) {
        return true;
      }
    }

    return false;
  }

  /**
   * 📏 Levenshtein-Distance berechnen
   */
  levenshteinDistance(str1, str2) {
    const matrix = [];

    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }

    return matrix[str2.length][str1.length];
  }

  /**
   * 🔍 PHASE 7: Analysis-Verification + Conflict-Detection
   */
  async performAnalysisVerification() {
    try {
      // NEUE: Widerspruchs-Scanner Integration
      const ContradictionScanner = require("./contradiction-scanner.cjs");
      const SmartExceptionHandler = require("./modules/smart-exception-handler.cjs");

      const scanner = new ContradictionScanner(this.projectRoot);
      const contradictionResults = await scanner.scanProject();

      // Bei kritischen Widersprüchen → Smart Exception werfen
      if (contradictionResults.contradictions.length > 0) {
        const exceptionHandler = new SmartExceptionHandler();
        const exception = exceptionHandler.throwConflictException(
          contradictionResults.contradictions
        );

        console.log(
          "\n🚨 ANALYSE GESTOPPT - REGEL-KONFLIKTE MÜSSEN GELÖST WERDEN!"
        );
        return {
          summary: {
            validationStatus: "CONFLICT_DETECTED",
            overallConfidence: 0,
            conflicts: contradictionResults.contradictions,
            exception: exception,
          },
        };
      }

      // Original Verification (wenn keine Konflikte)
      const AnalysisVerifier = require("./core/analysis-verifier.cjs");
      const verifier = new AnalysisVerifier();

      const currentResults = {
        tokens: {
          summary: {
            totalTokens: this.stats.totalWords * 1.3,
            totalFiles: this.stats.totalFiles,
          },
        },
        scopes: Object.fromEntries(this.stats.scopes),
        overlaps: this.stats.overlaps,
        modularization: this.stats.modularizationSuggestions,
      };

      const verificationReport = await verifier.verifyAnalysisResults(
        this.projectRoot,
        currentResults
      );

      console.log(
        `✅ Verification-Status: ${verificationReport.summary.validationStatus}`
      );
      console.log(
        `🎯 Confidence-Score: ${verificationReport.summary.overallConfidence}%`
      );

      return verificationReport;
    } catch (error) {
      console.log(`⚠️ Verification fehlgeschlagen: ${error.message}`);
      return {
        summary: {
          validationStatus: "FAILED",
          overallConfidence: 0,
          error: error.message,
        },
      };
    }
  }

  /**
   * �📄 Vollständigen Report generieren
   */
  async generateReport(duration, verificationResults = null) {
    const timestamp = new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/[:.]/g, "-");
    const reportPath = path.join(
      this.projectRoot,
      "tools",
      "analyzer",
      `projekt-analyse-${timestamp}.md`
    );

    // Report-Verzeichnis erstellen falls nicht existent
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    const report = this.generateMarkdownReport(duration, verificationResults);

    fs.writeFileSync(reportPath, report, "utf-8");

    console.log("\n" + "=".repeat(60));
    console.log(`📊 ANALYSE ABGESCHLOSSEN! (${duration.toFixed(2)}s)`);
    console.log(`📄 Report gespeichert: ${reportPath}`);

    // Verification-Status anzeigen
    if (verificationResults) {
      console.log(
        `🔍 Verification: ${verificationResults.summary.validationStatus} (${verificationResults.summary.overallConfidence}%)`
      );
    }
    console.log("");

    // Kurze Zusammenfassung ausgeben
    this.printSummary();

    return reportPath;
  }

  /**
   * 📝 Markdown-Report generieren
   */
  generateMarkdownReport(duration, verificationResults = null) {
    const timestamp = new Date().toLocaleString("de-DE");

    let report = `# 🤖 UNIVERSELLE PROJEKT-ANALYSE - simon-recht

**Erstellt:** ${timestamp}  
**Analysedauer:** ${duration.toFixed(2)} Sekunden  
**Tool-Version:** v1.0 + Verification

---

## 📊 PROJEKT-ÜBERSICHT

| Metrik | Wert |
|--------|------|
| **Dateien gesamt** | ${this.stats.totalFiles.toLocaleString()} |
| **Zeilen gesamt** | ${this.stats.totalLines.toLocaleString()} |
| **Wörter gesamt** | ${this.stats.totalWords.toLocaleString()} |
| **Zeichen gesamt** | ${this.stats.totalChars.toLocaleString()} |
| **Geschätzte Tokens** | ${Array.from(this.stats.scopes.values())
      .reduce((sum, data) => sum + data.totalTokens, 0)
      .toLocaleString()} |

---

## 🎯 SCOPE-VERTEILUNG

`;

    // Scope-Tabelle
    const sortedScopes = Array.from(this.stats.scopes.entries()).sort(
      (a, b) => b[1].totalTokens - a[1].totalTokens
    );

    report += `| Scope | Dateien | Zeilen | Tokens | Avg/Datei |\n`;
    report += `|-------|---------|--------|--------|-----------|\n`;

    sortedScopes.forEach(([scope, data]) => {
      const avgTokens = Math.round(data.totalTokens / data.files.length);
      report += `| **${scope}** | ${
        data.files.length
      } | ${data.totalLines.toLocaleString()} | ${data.totalTokens.toLocaleString()} | ${avgTokens} |\n`;
    });

    // Überlappungen
    if (this.stats.overlaps.length > 0) {
      report += `\n---\n\n## 🔗 SCOPE-ÜBERLAPPUNGEN\n\n`;

      this.stats.overlaps.forEach((overlap, index) => {
        report += `### ${index + 1}. ${overlap.scopes.join(" + ")}\n\n`;
        report += `- **Dateien:** ${overlap.files.length}\n`;
        report += `- **Grund:** ${overlap.rule.reason}\n`;
        report += `- **Priorität:** ${overlap.rule.priority}\n`;
        report += `- **Kombiniert erlaubt:** ${
          overlap.rule.allowCombined ? "✅ Ja" : "❌ Nein"
        }\n`;
        report += `- **Empfehlung:** ${overlap.recommendation}\n\n`;

        if (overlap.files.length <= 10) {
          report += `**Betroffene Dateien:**\n`;
          overlap.files.forEach((file) => {
            report += `- \`${file.path}\` (${file.tokenEstimate} Tokens)\n`;
          });
        } else {
          report += `**Zu viele Dateien für Auflistung** (${overlap.files.length} Dateien)\n`;
        }
        report += `\n`;
      });
    }

    // 🚨 SIMON'S NEUE REDUNDANZ-ANALYSE SEKTION
    if (
      this.redundancyDetection.duplicateFiles.size > 0 ||
      this.redundancyDetection.emptyDirectories.length > 0 ||
      this.redundancyDetection.redundantDirectories.length > 0
    ) {
      report += `\n---\n\n## 🔄 REDUNDANZ-ANALYSE (NEU!)\n\n`;

      // Doppelte Dateien
      if (this.redundancyDetection.duplicateFiles.size > 0) {
        report += `### 📄 DOPPELTE DATEIEN\n\n`;
        let duplicateIndex = 1;
        for (const [
          hash,
          files,
        ] of this.redundancyDetection.duplicateFiles.entries()) {
          report += `#### ${duplicateIndex}. Duplikat-Gruppe (${files.length} Dateien)\n\n`;
          files.forEach((file) => {
            report += `- \`${file.path}\` (${file.scope}, ${file.tokenEstimate} Tokens)\n`;
          });
          report += `\n**🎯 EMPFEHLUNG:** Behalte 1 Datei, lösche ${
            files.length - 1
          } Duplikate\n\n`;
          duplicateIndex++;
        }
      }

      // Leere Verzeichnisse
      if (this.redundancyDetection.emptyDirectories.length > 0) {
        report += `### 📂 LEERE VERZEICHNISSE\n\n`;
        this.redundancyDetection.emptyDirectories.forEach((dir) => {
          report += `- \`${dir}/\`\n`;
        });
        report += `\n**🎯 EMPFEHLUNG:** ${this.redundancyDetection.emptyDirectories.length} leere Verzeichnisse löschen\n\n`;
      }

      // Redundante Verzeichnisse
      if (this.redundancyDetection.redundantDirectories.length > 0) {
        report += `### 🔄 REDUNDANTE VERZEICHNISSE\n\n`;
        this.redundancyDetection.redundantDirectories.forEach(
          (redundancy, index) => {
            report += `#### ${index + 1}. \`${redundancy.dir1}\` ↔ \`${
              redundancy.dir2
            }\`\n\n`;
            report += `- **Grund:** ${redundancy.reason}\n`;
            report += `- **🎯 EMPFEHLUNG:** Verzeichnisse zusammenführen oder umbenennen\n\n`;
          }
        );
      }
    }

    // 🚨 SIMON'S NEUE STRUKTUR-VALIDIERUNG SEKTION
    if (
      this.structureValidation.misplacedFiles.length > 0 ||
      this.structureValidation.structureViolations.length > 0 ||
      this.structureValidation.namingInconsistencies.length > 0
    ) {
      report += `\n---\n\n## 🏗️ STRUKTUR-VALIDIERUNG (NEU!)\n\n`;

      // Falsch platzierte Dateien
      if (this.structureValidation.misplacedFiles.length > 0) {
        report += `### 📄 FALSCH PLATZIERTE DATEIEN\n\n`;
        report += `| Datei | Aktuell | Ideal | Begründung |\n`;
        report += `|-------|---------|-------|------------|\n`;
        this.structureValidation.misplacedFiles.forEach((misplaced) => {
          report += `| \`${misplaced.file}\` | ${misplaced.currentScope} | ${misplaced.idealScope} | ${misplaced.reason} |\n`;
        });
        report += `\n`;
      }

      // Struktur-Verletzungen
      if (this.structureValidation.structureViolations.length > 0) {
        report += `### ⚠️ STRUKTUR-VERLETZUNGEN\n\n`;
        const violationsByRule = new Map();
        this.structureValidation.structureViolations.forEach((violation) => {
          if (!violationsByRule.has(violation.rule)) {
            violationsByRule.set(violation.rule, []);
          }
          violationsByRule.get(violation.rule).push(violation);
        });

        for (const [rule, violations] of violationsByRule.entries()) {
          report += `#### ${rule} (${violations.length} Verletzungen)\n\n`;
          violations.forEach((v) => {
            report += `- **[\`${v.severity}\`]** \`${v.file}\`\n`;
            report += `  - Erwartet: ${v.expected}\n`;
            report += `  - Aktuell: ${v.actual}\n`;
          });
          report += `\n`;
        }
      }

      // Naming-Inkonsistenzen
      if (this.structureValidation.namingInconsistencies.length > 0) {
        report += `### 🏷️ NAMING-INKONSISTENZEN\n\n`;
        const namingByIssue = new Map();
        this.structureValidation.namingInconsistencies.forEach((naming) => {
          if (!namingByIssue.has(naming.issue)) {
            namingByIssue.set(naming.issue, []);
          }
          namingByIssue.get(naming.issue).push(naming);
        });

        for (const [issue, namings] of namingByIssue.entries()) {
          report += `#### ${issue} (${namings.length} Dateien)\n\n`;
          namings.forEach((n) => {
            report += `- **[\`${n.severity}\`]** \`${n.file}\`\n`;
            report += `  - **Empfehlung:** ${n.suggestion}\n`;
          });
          report += `\n`;
        }
      }
    }

    // VERIFICATION-SEKTION (NEU!)
    if (verificationResults) {
      report += `\n---\n\n## 🔍 ANALYSIS-VERIFICATION REPORT\n\n`;

      report += `### 📊 VERIFICATION-ZUSAMMENFASSUNG\n\n`;
      report += `| Metrik | Wert |\n`;
      report += `|--------|------|\n`;
      report += `| **Status** | ${verificationResults.summary.validationStatus} |\n`;
      report += `| **Confidence-Score** | ${verificationResults.summary.overallConfidence}% |\n`;
      report += `| **Verification-Levels** | ${
        verificationResults.summary.levelsCompleted?.join(", ") || "N/A"
      } |\n`;
      report += `| **Major Issues** | ${
        verificationResults.summary.majorIssues || 0
      } |\n`;

      if (verificationResults.summary.validationStatus === "VERIFIED") {
        report += `\n✅ **ANALYSIS VERIFIED** - Ergebnisse wurden durch Multi-Level-Checks bestätigt.\n`;
      } else if (
        verificationResults.summary.validationStatus === "QUESTIONABLE"
      ) {
        report += `\n⚠️ **QUESTIONABLE RESULTS** - Manuelle Überprüfung empfohlen.\n`;
      } else {
        report += `\n❌ **UNRELIABLE RESULTS** - Analyse sollte wiederholt werden.\n`;
      }

      if (verificationResults.recommendations?.length > 0) {
        report += `\n### 💡 VERIFICATION-EMPFEHLUNGEN\n\n`;
        verificationResults.recommendations.forEach((rec, index) => {
          report += `${index + 1}. **[${rec.priority}]** ${rec.message}\n`;
        });
      }
    }

    // Modularisierungs-Empfehlungen
    if (this.stats.modularizationSuggestions.length > 0) {
      report += `\n---\n\n## 🏗️ MODULARISIERUNGS-EMPFEHLUNGEN\n\n`;

      this.stats.modularizationSuggestions.forEach((suggestion, index) => {
        const priorityEmoji = {
          CRITICAL: "🚨",
          HIGH: "⚠️",
          MEDIUM: "🔔",
          LOW: "ℹ️",
        }[suggestion.priority];

        report += `### ${index + 1}. ${priorityEmoji} ${suggestion.reason}\n\n`;
        report += `- **Typ:** ${suggestion.type}\n`;
        report += `- **Scope:** ${suggestion.scope}\n`;
        report += `- **Aktion:** ${suggestion.action}\n`;
        report += `- **Priorität:** ${suggestion.priority}\n\n`;
      });
    }

    // KI-Arbeitsempfehlungen mit SIMON'S KI-WORK-CONTEXT-LOGIK
    report += `\n---\n\n## 🤖 KI-ARBEITSEMPFEHLUNGEN (WORK-CONTEXT-OPTIMIERT)\n\n`;

    const totalTokens = Array.from(this.stats.scopes.values()).reduce(
      (sum, data) => sum + data.totalTokens,
      0
    );

    // SIMON'S KI-WORK-CONTEXT-BERECHNUNG
    const kiRelevantScopes = [
      "ASTRO_COMPONENTS",
      "CSS_DESIGN",
      "INSTRUCTIONS",
      "TODOS_MANAGEMENT",
      "CONFIG",
      "BUILD_SYSTEM",
    ];
    const kiWorkTokens = Array.from(this.stats.scopes.entries())
      .filter(([scope]) => kiRelevantScopes.includes(scope))
      .reduce((sum, [, data]) => sum + data.totalTokens, 0);

    const kiPercentage = Math.round((kiWorkTokens / totalTokens) * 100);

    report += `🎯 **KI-WORK-CONTEXT-ANALYSE:**\n`;
    report += `- **Projekt-Total:** ${totalTokens.toLocaleString()} Tokens (inkl. irrelevante Bilder/Research)\n`;
    report += `- **KI-Work-Relevant:** ${kiWorkTokens.toLocaleString()} Tokens (${kiPercentage}% des Projekts)\n`;
    report += `- **Filtered Out:** Bilder, Research-Docs, Archive (${(
      totalTokens - kiWorkTokens
    ).toLocaleString()} Tokens)\n\n`;

    if (kiWorkTokens > 64000) {
      report += `⚠️ **WORK-CONTEXT KRITISCH:** KI-relevante Bereiche überschreiten 64k Limit\n\n`;
      report += `**Empfohlene Arbeitsweise:**\n`;
      report += `1. **Zwingend Scope-basierte Arbeit** - Einzelne Scopes fokussieren\n`;
      report += `2. **Token-Budget pro Chat:** Max. 15k Tokens aus relevanten Scopes\n`;
      report += `3. **Separate Chat-Sessions** für CSS, Content, Instructions\n\n`;
    } else if (kiWorkTokens > 30000) {
      report += `⚠️ **WORK-CONTEXT WARNUNG:** KI-relevante Bereiche werden groß\n\n`;
      report += `**Empfohlene Arbeitsweise:**\n`;
      report += `1. **Scope-fokussierte Arbeit** bevorzugen für Effizienz\n`;
      report += `2. **Multi-Scope nur bei Abhängigkeiten** (CSS+Astro Components)\n`;
      report += `3. **Token-Monitoring** bei komplexen Operationen\n\n`;
    } else {
      report += `✅ **WORK-CONTEXT OK:** KI kann effizient mit relevanten Bereichen arbeiten\n\n`;
      report += `**Arbeitsweise:** Multi-Scope-Operationen möglich, Scope-Trennung trotzdem sinnvoll\n\n`;
    }

    // Top Token-intensive Dateien
    const allFiles = [];
    for (const [, data] of this.stats.scopes.entries()) {
      allFiles.push(...data.files);
    }

    const topFiles = allFiles
      .sort((a, b) => b.tokenEstimate - a.tokenEstimate)
      .slice(0, 10);

    report += `### 📋 TOP TOKEN-INTENSIVE DATEIEN\n\n`;
    report += `| Datei | Tokens | Zeilen | Scopes |\n`;
    report += `|-------|--------|--------|---------|\n`;

    topFiles.forEach((file) => {
      report += `| \`${file.path}\` | ${file.tokenEstimate} | ${
        file.lines
      } | ${file.scopes.join(", ")} |\n`;
    });

    report += `\n---\n\n*Generiert von Universelles Projekt-Analyse-System v1.0*\n`;

    return report;
  }

  /**
   * 📊 Kurze Konsolen-Zusammenfassung
   */
  printSummary() {
    const totalTokens = Array.from(this.stats.scopes.values()).reduce(
      (sum, data) => sum + data.totalTokens,
      0
    );

    console.log("🎯 ANALYSE-ZUSAMMENFASSUNG:");
    console.log(`   📁 ${this.stats.totalFiles} Dateien analysiert`);
    console.log(`   🔢 ${totalTokens.toLocaleString()} Tokens geschätzt`);
    console.log(`   🎯 ${this.stats.scopes.size} Bereiche identifiziert`);
    console.log(`   🔗 ${this.stats.overlaps.length} Überlappungen gefunden`);
    console.log(
      `   🏗️ ${this.stats.modularizationSuggestions.length} Verbesserungsvorschläge`
    );

    // 🚨 SIMON'S NEUE METRIKEN
    console.log(
      `   🔄 ${this.redundancyDetection.duplicateFiles.size} Duplikat-Gruppen`
    );
    console.log(
      `   📂 ${this.redundancyDetection.emptyDirectories.length} leere Verzeichnisse`
    );
    console.log(
      `   📄 ${this.structureValidation.misplacedFiles.length} falsch platzierte Dateien`
    );
    console.log(
      `   🏷️ ${this.structureValidation.namingInconsistencies.length} Naming-Probleme`
    );

    if (totalTokens > 128000) {
      console.log("   🚨 KRITISCH: VS Code Insiders Limit überschritten!");
    } else if (totalTokens > 64000) {
      console.log("   ⚠️ WARNUNG: Standard VS Code Limit überschritten");
    } else {
      console.log("   ✅ OK: Projekt passt in Kontextfenster");
    }
  }

  /**
   * 🚫 Dateien/Verzeichnisse ignorieren
   * ERWEITERTE TABU-LISTE für simon-recht Projekt
   * 🎯 KI-WORK-CONTEXT-FOKUS: Nur relevante Arbeits-Dateien zählen
   */
  shouldIgnore(name) {
    const ignorePatterns = [
      /^\.git/,
      /^\.vscode/,
      /^\.astro/, // 🚨 SIMON'S TABU: Astro Build-Cache
      /^node_modules/,
      /^\.next/,
      /^dist/,
      /^build/,
      /^\.cache/, // 🚨 CACHE-VERZEICHNISSE
      /logfiles?/i, // Build-Checker-Logs
      /widerspruchs-report-.*\.md$/i, // Analyzer-Reports
      /projekt-analyse-.*\.md$/i, // Analyzer-Reports
      /analyse-.*\.md$/i, // Analyzer-Reports
      /struktur-tiefenanalyse-.*\.md$/i, // Struktur-Reports
      /output/i,
      /archiv/i,
      /\.log$/,
      /\.tmp$/,
      /\.bak$/,
      /\.cache$/,
      /^\.DS_Store$/,
      /^Thumbs\.db$/,
      /package-lock\.json$/, // 🚨 LOCK-FILES
      /yarn\.lock$/,

      // 🎯 KI-IRRELEVANTE DATEIEN (SIMON'S FALSE-POSITIVE-STOPP)
      /\.webp$/i, // Bilder verzerren Token-Counts
      /\.jpg$/i,
      /\.jpeg$/i,
      /\.png$/i,
      /\.gif$/i,
      /\.svg$/i,
      /\.ico$/i,
      /\.pdf$/i,
      /\.mp4$/i,
      /\.mov$/i,
      /\.avi$/i,
      /\.txt$/i, // Research-TXT-Files (book_1.txt etc.)

      // FORSCHUNGS-/RESEARCH-VERZEICHNISSE (KI arbeitet selten damit)
      /recherche.*tiefen_recherche/i,
      /grundrecherche/i,
      /tiefenrecherche/i,

      // Exclude all non-source files in tools/analyzer except .js/.cjs/.json/.md (README)
      /^tools\/analyzer\/((?!\.js$|\.cjs$|\.json$|README\.md$).)*$/i,
    ];

    return ignorePatterns.some((pattern) => pattern.test(name));
  }
}

// CLI-Interface
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();
  const analyzer = new UniversalProjectAnalyzer(projectRoot);

  analyzer.analyzeProject().catch((error) => {
    console.error("❌ Analyse-Fehler:", error);
    process.exit(1);
  });
}

module.exports = UniversalProjectAnalyzer;
