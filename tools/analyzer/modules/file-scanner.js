/**
 * 📁 FILE-SCANNER-MODUL
 *
 * Funktionen für das rekursive Scannen und Analysieren von Dateien
 * Ausgelagert aus universal-project-analyzer.cjs
 */

const fs = require("fs");
const path = require("path");

/**
 * Recursive File Scanner mit Ignorierung von unwichtigen Verzeichnissen
 */
function scanDirectory(dir, ignoreDirs = []) {
  const defaultIgnore = [
    "node_modules",
    ".git",
    "dist",
    ".vscode",
    ".next",
    "coverage",
    "__pycache__",
    ".pytest_cache",
  ];

  const allIgnore = [...defaultIgnore, ...ignoreDirs];
  const files = [];

  function scan(currentDir, relativePath = "") {
    try {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        const relativeFilePath = path
          .join(relativePath, entry.name)
          .replace(/\\/g, "/");

        if (entry.isDirectory()) {
          // Skip ignored directories
          if (allIgnore.includes(entry.name)) {
            continue;
          }
          scan(fullPath, relativeFilePath);
        } else if (entry.isFile()) {
          // Add file with metadata
          const stats = fs.statSync(fullPath);
          files.push({
            path: fullPath,
            relativePath: relativeFilePath,
            name: entry.name,
            size: stats.size,
            modified: stats.mtime,
            extension: path.extname(entry.name).toLowerCase(),
          });
        }
      }
    } catch (error) {
      console.warn(
        `⚠️ Fehler beim Scannen von ${currentDir}: ${error.message}`
      );
    }
  }

  scan(dir);
  return files;
}

/**
 * Datei-Inhalt analysieren und Metadaten extrahieren
 */
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");
    const words = content.split(/\s+/).filter((word) => word.length > 0);
    const chars = content.length;

    // Token-Schätzung (Faustregel: ~4 Zeichen pro Token)
    const estimatedTokens = Math.ceil(chars / 4);

    return {
      lines: lines.length,
      words: words.length,
      chars: chars,
      estimatedTokens: estimatedTokens,
      content: content,
      isEmpty: content.trim().length === 0,
    };
  } catch (error) {
    return {
      lines: 0,
      words: 0,
      chars: 0,
      estimatedTokens: 0,
      content: "",
      isEmpty: true,
      error: error.message,
    };
  }
}

/**
 * Scope-Zuordnung für eine Datei basierend auf Pfad und Inhalt
 */
function assignScopes(filePath, scopeDefinitions) {
  const matchedScopes = [];

  for (const [scopeName, patterns] of Object.entries(scopeDefinitions)) {
    for (const pattern of patterns) {
      if (pattern.test(filePath)) {
        matchedScopes.push(scopeName);
        break; // Nur einmal pro Scope matchen
      }
    }
  }

  return matchedScopes.length > 0 ? matchedScopes : ["UNCATEGORIZED"];
}

module.exports = {
  scanDirectory,
  analyzeFile,
  assignScopes,
};
