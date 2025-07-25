#!/usr/bin/env node

/**
 * 🧹 REDUNDANCY-DETECTOR v1.0 (INTELLIGENTE DATEI-BEWERTUNG)
 * 
 * 🎯 ZWECK: Redundante/verwaiste Dateien identifizieren
 * 🧠 INTELLIGENZ: Bewertung der Notwendigkeit basierend auf Kontext
 * 🔄 SELBST-SCHUTZ: Schützt wichtige System-Dateien vor Löschung
 * 📊 KATEGORISIERUNG: Gruppiert Redundanz nach Typen
 */

const fs = require('fs').promises;
const path = require('path');

class RedundancyDetector {
  constructor() {
    this.results = {
      duplicateFiles: [],
      emptyFiles: [],
      orphanedFiles: [],
      potentialRedundancy: [],
      archiveableFiles: [],
      statistics: {},
      recommendations: [],
      protectedFiles: []
    };
    
    // Geschützte Dateien/Verzeichnisse (NIEMALS als redundant markieren)
    this.protectedPatterns = [
      /node_modules/,
      /\.git/,
      /\.vscode/,
      /\.github\/copilot-instructions/,
      /tools\/analyzer/,
      /package\.json$/,
      /astro\.config/,
      /tailwind\.config/,
      /README\.md$/,
      /src\//,
      /public\//
    ];
    
    // Archiv-Kandidaten Pattern
    this.archiveCandidatePatterns = [
      {
        pattern: /archiv|backup|alt|old|deprecated|legacy/i,
        reason: "Explizit als Archiv/Backup benannt",
        confidence: 0.9
      },
      {
        pattern: /\d{4}-\d{2}-\d{2}.*backup/i,
        reason: "Datierte Backup-Datei",
        confidence: 0.95
      },
      {
        pattern: /_backup\.|\.backup/i,
        reason: "Backup-Endung",
        confidence: 0.85
      },
      {
        pattern: /chaos|temp|tmp|test/i,
        reason: "Temporäre/Test-Datei",
        confidence: 0.7
      }
    ];
    
    // Wichtige Datei-Referenz-Tracker
    this.referenceTracker = new Map();
  }

  /**
   * 🔍 HAUPT-REDUNDANZ-ANALYSE
   */
  async analyzeRedundancy(projectRoot) {
    console.log('🧹 REDUNDANCY-DETECTOR: Starte intelligente Datei-Analyse...');
    
    // 1. Alle Dateien scannen und kategorisieren
    await this.scanAllFiles(projectRoot);
    
    // 2. Datei-Referenzen aufbauen
    await this.buildReferenceMap(projectRoot);
    
    // 3. Duplicate Content Detection
    await this.detectDuplicateContent(projectRoot);
    
    // 4. Orphaned Files finden
    await this.findOrphanedFiles(projectRoot);
    
    // 5. Archive-Kandidaten bewerten
    await this.evaluateArchiveCandidates(projectRoot);
    
    // 6. SELBST-SCHUTZ: Analyzer-Dateien schützen
    await this.protectAnalyzerFiles(projectRoot);
    
    return this.generateRedundancyReport();
  }

  /**
   * 📁 ALLE DATEIEN SCANNEN
   */
  async scanAllFiles(projectRoot) {
    console.log('📁 Scanne alle Projekt-Dateien...');
    
    const allFiles = [];
    await this.walkDirectoryWithDetails(projectRoot, allFiles);
    
    // Dateien nach Größe und Typ kategorisieren
    for (const file of allFiles) {
      await this.categorizeFile(file, projectRoot);
    }
  }

  /**
   * 🚶 DETAILLIERTER VERZEICHNIS-DURCHLAUF
   */
  async walkDirectoryWithDetails(dir, files) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          // Wichtige Verzeichnisse nicht überspringen
          if (!entry.name.startsWith('.') && 
              entry.name !== 'node_modules' && 
              entry.name !== 'dist') {
            await this.walkDirectoryWithDetails(fullPath, files);
          }
        } else if (entry.isFile()) {
          const stats = await fs.stat(fullPath);
          files.push({
            path: fullPath,
            name: entry.name,
            size: stats.size,
            modified: stats.mtime,
            extension: path.extname(entry.name)
          });
        }
      }
    } catch (error) {
      // Verzeichnis nicht zugänglich - ignorieren
    }
  }

  /**
   * 📋 DATEI-KATEGORISIERUNG
   */
  async categorizeFile(file, projectRoot) {
    const relativePath = path.relative(projectRoot, file.path);
    
    // Geschützte Dateien identifizieren
    if (this.isProtectedFile(relativePath)) {
      this.results.protectedFiles.push({
        path: relativePath,
        reason: "Geschützt durch System-Pattern",
        size: file.size
      });
      return;
    }
    
    // Leere Dateien
    if (file.size === 0) {
      this.results.emptyFiles.push({
        path: relativePath,
        lastModified: file.modified,
        recommendation: "Prüfen ob benötigt oder löschen"
      });
      return;
    }
    
    // Archiv-Kandidaten
    for (const candidate of this.archiveCandidatePatterns) {
      if (candidate.pattern.test(relativePath)) {
        this.results.archiveableFiles.push({
          path: relativePath,
          reason: candidate.reason,
          confidence: candidate.confidence,
          size: file.size,
          lastModified: file.modified
        });
        break;
      }
    }
  }

  /**
   * 🛡️ GESCHÜTZTE DATEI-PRÜFUNG
   */
  isProtectedFile(relativePath) {
    return this.protectedPatterns.some(pattern => pattern.test(relativePath));
  }

  /**
   * 🔗 REFERENZ-MAP AUFBAUEN
   */
  async buildReferenceMap(projectRoot) {
    console.log('🔗 Baue Datei-Referenz-Map auf...');
    
    // Wichtige Dateien für Referenz-Suche
    const referenceFiles = [
      '.github/copilot-instructions.md',
      'astro.config.mjs',
      'package.json',
      'tailwind.config.mjs'
    ];
    
    for (const refFile of referenceFiles) {
      const filePath = path.join(projectRoot, refFile);
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        await this.extractFileReferences(content, refFile);
      } catch (error) {
        // Datei existiert nicht
      }
    }
    
    // Alle .md Dateien nach Links durchsuchen
    await this.scanMarkdownReferences(projectRoot);
  }

  /**
   * 📄 MARKDOWN-REFERENZEN SCANNEN
   */
  async scanMarkdownReferences(projectRoot) {
    const markdownFiles = [];
    await this.findFilesByExtension(projectRoot, '.md', markdownFiles);
    
    for (const mdFile of markdownFiles) {
      try {
        const content = await fs.readFile(mdFile, 'utf-8');
        const relativePath = path.relative(projectRoot, mdFile);
        await this.extractFileReferences(content, relativePath);
      } catch (error) {
        // Datei-Lesefehler ignorieren
      }
    }
  }

  /**
   * 🔍 DATEI-REFERENZEN EXTRAHIEREN
   */
  async extractFileReferences(content, sourceFile) {
    // Link-Pattern [Text](path) und direkte Pfad-Referenzen
    const linkPatterns = [
      /\[([^\]]+)\]\(([^)]+)\)/g,     // Markdown Links
      /["']([^"']*\.(md|js|cjs|ts|astro|css|json))['"]/g, // Datei-Pfade in Quotes
      /src\/[^\s"']+/g,               // src/ Pfade
      /docs\/[^\s"']+/g,              // docs/ Pfade
      /tools\/[^\s"']+/g              // tools/ Pfade
    ];
    
    for (const pattern of linkPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const referencedPath = match[1] || match[0];
        
        if (!this.referenceTracker.has(referencedPath)) {
          this.referenceTracker.set(referencedPath, []);
        }
        this.referenceTracker.get(referencedPath).push(sourceFile);
      }
    }
  }

  /**
   * 📄 DATEIEN NACH EXTENSION FINDEN
   */
  async findFilesByExtension(dir, extension, files) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          if (!entry.name.startsWith('.') && 
              entry.name !== 'node_modules' && 
              entry.name !== 'dist') {
            await this.findFilesByExtension(fullPath, extension, files);
          }
        } else if (entry.isFile() && entry.name.endsWith(extension)) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Verzeichnis-Fehler ignorieren
    }
  }

  /**
   * 🔄 DUPLICATE CONTENT DETECTION
   */
  async detectDuplicateContent(projectRoot) {
    console.log('🔄 Suche nach doppeltem Inhalt...');
    
    const contentHashes = new Map();
    const allFiles = [];
    await this.walkDirectoryWithDetails(projectRoot, allFiles);
    
    for (const file of allFiles) {
      if (file.size > 0 && file.size < 1024 * 1024) { // Nur Dateien < 1MB
        try {
          const content = await fs.readFile(file.path, 'utf-8');
          const contentHash = this.simpleHash(content);
          
          if (!contentHashes.has(contentHash)) {
            contentHashes.set(contentHash, []);
          }
          contentHashes.get(contentHash).push({
            path: path.relative(projectRoot, file.path),
            size: file.size,
            modified: file.modified
          });
        } catch (error) {
          // Binärdatei oder Lesefehler - ignorieren
        }
      }
    }
    
    // Duplikate sammeln
    for (const [hash, files] of contentHashes.entries()) {
      if (files.length > 1) {
        this.results.duplicateFiles.push({
          contentHash: hash,
          files: files,
          duplicateCount: files.length,
          totalWastedSpace: files.reduce((sum, f) => sum + f.size, 0) - files[0].size
        });
      }
    }
  }

  /**
   * 🔢 EINFACHER HASH-ALGORITHMUS
   */
  simpleHash(content) {
    // Normalisierte Content-Vergleich (Whitespace-ignorant)
    const normalized = content
      .replace(/\s+/g, ' ')
      .replace(/\r\n/g, '\n')
      .trim();
    
    let hash = 0;
    for (let i = 0; i < normalized.length; i++) {
      const char = normalized.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 32-bit integer
    }
    return hash.toString(16);
  }

  /**
   * 🏚️ VERWAISTE DATEIEN FINDEN
   */
  async findOrphanedFiles(projectRoot) {
    console.log('🏚️ Suche nach verwaisten Dateien...');
    
    const allFiles = [];
    await this.walkDirectoryWithDetails(projectRoot, allFiles);
    
    for (const file of allFiles) {
      const relativePath = path.relative(projectRoot, file.path);
      
      // Geschützte Dateien überspringen
      if (this.isProtectedFile(relativePath)) {
        continue;
      }
      
      // Prüfen ob Datei referenziert wird
      const isReferenced = this.isFileReferenced(relativePath);
      
      if (!isReferenced && this.isPotentialOrphan(file)) {
        this.results.orphanedFiles.push({
          path: relativePath,
          size: file.size,
          lastModified: file.modified,
          reason: "Keine Referenzen gefunden",
          risk: this.calculateOrphanRisk(file, relativePath)
        });
      }
    }
  }

  /**
   * 🔗 DATEI-REFERENZ-PRÜFUNG
   */
  isFileReferenced(relativePath) {
    // Direkte Referenz-Suche
    for (const [refPath, sources] of this.referenceTracker.entries()) {
      if (refPath.includes(relativePath) || relativePath.includes(refPath)) {
        return true;
      }
    }
    
    // Pattern-basierte wichtige Dateien
    const importantPatterns = [
      /src\//,
      /public\//,
      /\.astro$/,
      /\.css$/,
      /package\.json$/,
      /astro\.config/,
      /README\.md$/
    ];
    
    return importantPatterns.some(pattern => pattern.test(relativePath));
  }

  /**
   * 🤔 POTENTIELLER WAISE-PRÜFUNG
   */
  isPotentialOrphan(file) {
    // Kriterien für potentielle Waisen
    const potentialOrphanPatterns = [
      /\.backup$/,
      /\.old$/,
      /\.tmp$/,
      /_backup\./,
      /test/i,
      /beispiel/i,
      /sample/i
    ];
    
    return potentialOrphanPatterns.some(pattern => 
      pattern.test(file.name) || pattern.test(file.path)
    );
  }

  /**
   * ⚠️ WAISE-RISIKO BERECHNUNG
   */
  calculateOrphanRisk(file, relativePath) {
    let risk = 0.1; // Basis-Risiko
    
    // Faktor 1: Alter der Datei
    const ageInDays = (Date.now() - file.modified.getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays > 30) risk += 0.3;
    if (ageInDays > 90) risk += 0.2;
    
    // Faktor 2: Datei-Name Pattern
    if (/backup|old|tmp|test/i.test(relativePath)) risk += 0.4;
    
    // Faktor 3: Verzeichnis-Kontext
    if (relativePath.includes('archiv') || relativePath.includes('backup')) risk += 0.3;
    
    // Faktor 4: Dateigröße (sehr kleine Dateien = höheres Risiko)
    if (file.size < 100) risk += 0.2;
    
    return Math.min(risk, 1.0);
  }

  /**
   * 📦 ARCHIV-KANDIDATEN BEWERTEN
   */
  async evaluateArchiveCandidates(projectRoot) {
    console.log('📦 Bewerte Archive-Kandidaten...');
    
    // Bereits in categorizeFile() gesammelt
    // Hier: Zusätzliche Kontext-Bewertung
    
    for (const candidate of this.results.archiveableFiles) {
      // Zusätzliche Bewertung basierend auf Verzeichnis-Struktur
      if (candidate.path.includes('docs/') && candidate.confidence < 0.8) {
        candidate.confidence = Math.max(candidate.confidence, 0.6);
        candidate.reason += " (in docs/ Verzeichnis)";
      }
    }
  }

  /**
   * 🛡️ ANALYZER-DATEIEN SCHÜTZEN
   */
  async protectAnalyzerFiles(projectRoot) {
    console.log('🛡️ SELBST-SCHUTZ: Schütze Analyzer-Dateien...');
    
    const analyzerFiles = [
      'tools/analyzer/master-analyzer.cjs',
      'tools/analyzer/core/token-counter.cjs',
      'tools/analyzer/core/link-validator.cjs',
      'tools/analyzer/scopes/instruction-contradiction-scanner.cjs',
      'tools/analyzer/scopes/redundancy-detector.cjs' // SELBST!
    ];
    
    for (const analyzerFile of analyzerFiles) {
      this.results.protectedFiles.push({
        path: analyzerFile,
        reason: "Analyzer-Tool (SELBST-SCHUTZ)",
        size: "varies",
        priority: "KRITISCH"
      });
    }
  }

  /**
   * 📊 REDUNDANZ-REPORT GENERIERUNG
   */
  generateRedundancyReport() {
    // Statistiken berechnen
    const totalWastedSpace = this.results.duplicateFiles
      .reduce((sum, dup) => sum + dup.totalWastedSpace, 0);
    
    this.results.statistics = {
      totalFiles: this.results.emptyFiles.length + 
                 this.results.orphanedFiles.length + 
                 this.results.archiveableFiles.length + 
                 this.results.duplicateFiles.length,
      emptyFiles: this.results.emptyFiles.length,
      duplicateGroups: this.results.duplicateFiles.length,
      orphanedFiles: this.results.orphanedFiles.length,
      archiveCandidates: this.results.archiveableFiles.length,
      protectedFiles: this.results.protectedFiles.length,
      estimatedSpaceSaving: totalWastedSpace,
      highRiskOrphans: this.results.orphanedFiles.filter(o => o.risk > 0.7).length
    };
    
    // Empfehlungen generieren
    this.generateRedundancyRecommendations();
    
    return {
      summary: {
        status: this.getRedundancyStatus(),
        ...this.results.statistics
      },
      details: this.results,
      safeActions: this.generateSafeActions(),
      warnings: this.generateWarnings()
    };
  }

  /**
   * 🎯 REDUNDANZ-STATUS
   */
  getRedundancyStatus() {
    const totalIssues = this.results.statistics.totalFiles;
    
    if (totalIssues > 50) return 'SEHR_UNORDENTLICH';
    if (totalIssues > 20) return 'AUFRÄUMEN_ERFORDERLICH';
    if (totalIssues > 5) return 'LEICHTE_REDUNDANZ';
    return 'SAUBER';
  }

  /**
   * 💡 REDUNDANZ-EMPFEHLUNGEN
   */
  generateRedundancyRecommendations() {
    const recommendations = [];
    
    if (this.results.statistics.emptyFiles > 0) {
      recommendations.push({
        priority: 'NIEDRIG',
        action: `${this.results.statistics.emptyFiles} leere Dateien löschen`,
        risk: 'MINIMAL',
        impact: 'Aufräumung'
      });
    }
    
    if (this.results.statistics.duplicateGroups > 0) {
      recommendations.push({
        priority: 'MITTEL',
        action: `${this.results.statistics.duplicateGroups} Duplikat-Gruppen konsolidieren`,
        risk: 'NIEDRIG',
        impact: `~${Math.round(this.results.statistics.estimatedSpaceSaving / 1024)}KB Speicher sparen`
      });
    }
    
    if (this.results.statistics.archiveCandidates > 0) {
      recommendations.push({
        priority: 'NIEDRIG',
        action: `${this.results.statistics.archiveCandidates} Dateien ins Archiv verschieben`,
        risk: 'NIEDRIG',
        impact: 'Projekt-Übersichtlichkeit'
      });
    }
    
    if (this.results.statistics.highRiskOrphans > 0) {
      recommendations.push({
        priority: 'MITTEL',
        action: `${this.results.statistics.highRiskOrphans} verwaiste Dateien prüfen`,
        risk: 'MITTEL',
        impact: 'Mögliche Bereinigung'
      });
    }
    
    this.results.recommendations = recommendations;
  }

  /**
   * ✅ SICHERE AKTIONEN
   */
  generateSafeActions() {
    const safeActions = [];
    
    // Leere Dateien (immer sicher)
    this.results.emptyFiles.forEach(file => {
      safeActions.push({
        type: 'DELETE_EMPTY',
        file: file.path,
        reason: 'Leere Datei, sicher löschbar',
        risk: 'NONE'
      });
    });
    
    // Hohe Konfidenz Archive-Kandidaten
    this.results.archiveableFiles
      .filter(file => file.confidence > 0.8)
      .forEach(file => {
        safeActions.push({
          type: 'MOVE_TO_ARCHIVE',
          file: file.path,
          reason: file.reason,
          risk: 'MINIMAL'
        });
      });
    
    return safeActions;
  }

  /**
   * ⚠️ WARNUNGEN GENERIEREN
   */
  generateWarnings() {
    const warnings = [];
    
    if (this.results.orphanedFiles.length > 0) {
      warnings.push({
        type: 'ORPHANED_FILES',
        message: `${this.results.orphanedFiles.length} potentiell verwaiste Dateien gefunden`,
        advice: 'Manuelle Prüfung empfohlen vor Löschung'
      });
    }
    
    if (this.results.statistics.protectedFiles > 10) {
      warnings.push({
        type: 'MANY_PROTECTED_FILES',
        message: `${this.results.statistics.protectedFiles} geschützte Dateien`,
        advice: 'Schutz-Pattern überprüfen'
      });
    }
    
    return warnings;
  }
}

// Export für Modul-Verwendung
module.exports = RedundancyDetector;

// CLI-Ausführung
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();
  
  const detector = new RedundancyDetector();
  detector.analyzeRedundancy(projectRoot)
    .then(report => {
      console.log('\n🧹 REDUNDANZ-ANALYSE ABGESCHLOSSEN:\n');
      console.log('📊 ZUSAMMENFASSUNG:');
      console.log(`   Status: ${report.summary.status}`);
      console.log(`   Leere Dateien: ${report.summary.emptyFiles}`);
      console.log(`   Duplikat-Gruppen: ${report.summary.duplicateGroups}`);
      console.log(`   Verwaiste Dateien: ${report.summary.orphanedFiles}`);
      console.log(`   Archiv-Kandidaten: ${report.summary.archiveCandidates}`);
      console.log(`   Geschützte Dateien: ${report.summary.protectedFiles}`);
      
      if (report.safeActions.length > 0) {
        console.log('\n✅ SICHERE AKTIONEN:');
        report.safeActions.slice(0, 5).forEach((action, index) => {
          console.log(`   ${index + 1}. ${action.type}: ${action.file}`);
        });
      }
      
      console.log('\n📄 Vollständiger Report verfügbar.');
      
      // JSON-Output für weitere Verarbeitung
      if (process.argv.includes('--json')) {
        console.log('\n' + JSON.stringify(report, null, 2));
      }
    })
    .catch(error => {
      console.error('❌ Redundanz-Analyse Fehler:', error);
      process.exit(1);
    });
}
