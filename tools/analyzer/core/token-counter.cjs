#!/usr/bin/env node

/**
 * 🔢 TOKEN-COUNTER v2.0 (SELBST-ANALYSIEREND)
 * 
 * 🎯 ZWECK: Präzise Token-Zählung für sichere KI-Arbeit
 * 🛡️ ANTI-OVERFLOW: Verhindert Context-Limit-Überschreitung
 * 🔄 SELBST-ANALYSE: Analysiert eigene Token-Komplexität
 */

const fs = require('fs').promises;
const path = require('path');

class TokenCounter {
  constructor() {
    this.tokenResults = {
      totalTokens: 0,
      fileTokens: {},
      warnings: [],
      criticalFiles: [],
      recommendations: []
    };
    
    // GitHub Copilot Context Limits
    this.limits = {
      copilotInstructions: 8000,    // Sicheres Limit für Instructions
      contextWindow: 32000,         // Gesamt-Context für Conversation
      warningThreshold: 6400,       // 80% Warning
      criticalThreshold: 7200       // 90% Critical
    };
  }

  /**
   * 📊 HAUPT-TOKEN-ANALYSE
   */
  async analyzeTokens(projectRoot) {
    console.log('🔢 TOKEN-COUNTER: Starte Analyse...');
    
    // 1. Instructions-Dateien scannen
    await this.scanInstructionFiles(projectRoot);
    
    // 2. Tool-Dateien scannen (inklusive SELBST)
    await this.scanToolFiles(projectRoot);
    
    // 3. Content-Dateien scannen
    await this.scanContentFiles(projectRoot);
    
    // 4. SELBST-ANALYSE durchführen
    await this.performSelfAnalysis(projectRoot);
    
    return this.generateTokenReport();
  }

  /**
   * 🧠 SELBST-ANALYSE: Analyzer analysiert sich selbst
   */
  async performSelfAnalysis(projectRoot) {
    console.log('🔄 SELBST-ANALYSE: Token-Counter analysiert sich selbst...');
    
    const selfPath = __filename;
    const selfTokens = await this.countFileTokens(selfPath);
    
    this.tokenResults.fileTokens['[SELF] token-counter.cjs'] = {
      tokens: selfTokens,
      type: 'self-analysis',
      status: selfTokens > 1000 ? 'KOMPLEX' : 'OPTIMAL'
    };
    
    // Analyzer-Tools analysieren
    const analyzerDir = path.join(projectRoot, 'tools', 'analyzer');
    try {
      const files = await fs.readdir(analyzerDir);
      for (const file of files) {
        if (file.endsWith('.cjs') && file !== 'token-counter.cjs') {
          const filePath = path.join(analyzerDir, file);
          const tokens = await this.countFileTokens(filePath);
          
          this.tokenResults.fileTokens[`[ANALYZER] ${file}`] = {
            tokens,
            type: 'analyzer-tool',
            status: tokens > 2000 ? 'ZU_GROSS' : 'OK'
          };
        }
      }
    } catch (error) {
      this.tokenResults.warnings.push(`Fehler bei Analyzer-Selbstanalyse: ${error.message}`);
    }
  }

  /**
   * 📚 INSTRUCTIONS-TOKEN-ANALYSE
   */
  async scanInstructionFiles(projectRoot) {
    const instructionPaths = [
      '.github/copilot-instructions.md',
      '.github/instructions/**/*.md'
    ];
    
    for (const pattern of instructionPaths) {
      await this.scanPattern(projectRoot, pattern, 'instructions');
    }
  }

  /**
   * 🔧 TOOL-TOKEN-ANALYSE  
   */
  async scanToolFiles(projectRoot) {
    const toolPaths = [
      'tools/**/*.cjs',
      'tools/**/*.js',
      'tools/**/*.md'
    ];
    
    for (const pattern of toolPaths) {
      await this.scanPattern(projectRoot, pattern, 'tools');
    }
  }

  /**
   * 📄 CONTENT-TOKEN-ANALYSE
   */
  async scanContentFiles(projectRoot) {
    const contentPaths = [
      'src/**/*.astro',
      'src/**/*.md',
      'docs/**/*.md'
    ];
    
    for (const pattern of contentPaths) {
      await this.scanPattern(projectRoot, pattern, 'content');
    }
  }

  /**
   * 🔍 PATTERN-BASIERTES SCANNEN
   */
  async scanPattern(projectRoot, pattern, type) {
    try {
      const globPattern = path.join(projectRoot, pattern);
      // Vereinfachtes Glob-Matching (ohne externe Dependencies)
      const files = await this.findFiles(projectRoot, pattern);
      
      for (const file of files) {
        const tokens = await this.countFileTokens(file);
        const relativePath = path.relative(projectRoot, file);
        
        this.tokenResults.fileTokens[relativePath] = {
          tokens,
          type,
          status: this.getTokenStatus(tokens, type)
        };
        
        this.tokenResults.totalTokens += tokens;
      }
    } catch (error) {
      this.tokenResults.warnings.push(`Pattern-Scan Fehler (${pattern}): ${error.message}`);
    }
  }

  /**
   * 📁 DATEI-FINDER (Glob-Ersatz)
   */
  async findFiles(rootDir, pattern) {
    const files = [];
    
    // Pattern-Parsing (vereinfacht)
    const cleanPattern = pattern.replace(/\*\*/g, '').replace(/\*/g, '');
    const extension = path.extname(cleanPattern);
    
    await this.walkDirectory(rootDir, files, extension);
    return files;
  }

  /**
   * 🚶 VERZEICHNIS-DURCHLAUF
   */
  async walkDirectory(dir, files, targetExtension) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
            await this.walkDirectory(fullPath, files, targetExtension);
          }
        } else if (entry.isFile()) {
          if (!targetExtension || path.extname(entry.name) === targetExtension) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Verzeichnis nicht zugänglich - ignorieren
    }
  }

  /**
   * 🔢 DATEI-TOKEN-ZÄHLUNG
   */
  async countFileTokens(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      
      // Token-Schätzung (approximiert)
      // Durchschnitt: 1 Token = 4 Zeichen für Deutschen Text
      // Code: 1 Token = 3 Zeichen
      const isCode = /\.(js|cjs|ts|astro)$/.test(filePath);
      const tokenRatio = isCode ? 3 : 4;
      
      return Math.ceil(content.length / tokenRatio);
    } catch (error) {
      return 0;
    }
  }

  /**
   * 🚨 TOKEN-STATUS BEWERTUNG
   */
  getTokenStatus(tokens, type) {
    switch (type) {
      case 'instructions':
        if (tokens > this.limits.criticalThreshold) return 'KRITISCH';
        if (tokens > this.limits.warningThreshold) return 'WARNUNG';
        return 'OK';
      
      case 'tools':
        if (tokens > 2000) return 'ZU_GROSS';
        if (tokens > 1000) return 'KOMPLEX';
        return 'OK';
      
      default:
        if (tokens > 1000) return 'GROSS';
        return 'OK';
    }
  }

  /**
   * 📊 TOKEN-REPORT GENERIERUNG
   */
  generateTokenReport() {
    // Kritische Dateien identifizieren
    this.tokenResults.criticalFiles = Object.entries(this.tokenResults.fileTokens)
      .filter(([_, data]) => data.status === 'KRITISCH' || data.status === 'ZU_GROSS')
      .map(([file, data]) => ({ file, ...data }));

    // Empfehlungen generieren
    this.generateRecommendations();

    return {
      summary: {
        totalTokens: this.tokenResults.totalTokens,
        fileCount: Object.keys(this.tokenResults.fileTokens).length,
        criticalFiles: this.tokenResults.criticalFiles.length,
        status: this.getOverallStatus()
      },
      details: this.tokenResults,
      recommendations: this.tokenResults.recommendations
    };
  }

  /**
   * 💡 EMPFEHLUNGS-GENERIERUNG
   */
  generateRecommendations() {
    if (this.tokenResults.totalTokens > this.limits.contextWindow * 0.8) {
      this.tokenResults.recommendations.push({
        priority: 'KRITISCH',
        action: 'Sofortige Modularisierung erforderlich',
        reason: `Gesamt-Tokens (${this.tokenResults.totalTokens}) nähern sich Context-Limit`
      });
    }

    this.tokenResults.criticalFiles.forEach(file => {
      this.tokenResults.recommendations.push({
        priority: 'HOCH',
        action: `Datei modularisieren: ${file.file}`,
        reason: `${file.tokens} Tokens (Status: ${file.status})`
      });
    });
  }

  /**
   * 🎯 GESAMT-STATUS
   */
  getOverallStatus() {
    const totalTokens = this.tokenResults.totalTokens;
    
    if (totalTokens > this.limits.criticalThreshold) return 'KRITISCH';
    if (totalTokens > this.limits.warningThreshold) return 'WARNUNG';
    return 'OK';
  }
}

// Export für Modul-Verwendung
module.exports = TokenCounter;

// CLI-Ausführung
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();
  
  const counter = new TokenCounter();
  counter.analyzeTokens(projectRoot)
    .then(report => {
      console.log('\n🔢 TOKEN-ANALYSE ABGESCHLOSSEN:\n');
      console.log(JSON.stringify(report, null, 2));
    })
    .catch(error => {
      console.error('❌ Token-Analyse Fehler:', error);
      process.exit(1);
    });
}
