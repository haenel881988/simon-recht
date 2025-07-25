#!/usr/bin/env node

/**
 * 🔗 LINK-VALIDATOR v2.0 (MODULAR)
 * 
 * 🎯 ZWECK: Interne Links & Referenzen validieren
 * 🛡️ INTEGRITÄT: Verhindert tote Links in Instructions
 * 🔄 SELBST-CHECK: Validiert eigene Referenzen
 */

const fs = require('fs').promises;
const path = require('path');

class LinkValidator {
  constructor() {
    this.results = {
      invalidLinks: [],
      validLinks: [],
      externalLinks: [],
      warnings: [],
      statistics: {}
    };
  }

  /**
   * 🔍 HAUPT-LINK-VALIDIERUNG
   */
  async validateLinks(projectRoot) {
    console.log('🔗 LINK-VALIDATOR: Starte Validierung...');
    
    // 1. Markdown-Dateien scannen
    await this.scanMarkdownFiles(projectRoot);
    
    // 2. Instructions-spezifische Links
    await this.validateInstructionLinks(projectRoot);
    
    // 3. SELBST-VALIDIERUNG
    await this.performSelfValidation(projectRoot);
    
    return this.generateLinkReport();
  }

  /**
   * 📚 INSTRUCTION-LINKS VALIDIEREN
   */
  async validateInstructionLinks(projectRoot) {
    const instructionFile = path.join(projectRoot, '.github', 'copilot-instructions.md');
    
    try {
      const content = await fs.readFile(instructionFile, 'utf-8');
      
      // Modular-Links extrahieren [Text](instructions/scope/file.md)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;
      
      while ((match = linkRegex.exec(content)) !== null) {
        const [fullMatch, text, linkPath] = match;
        
        if (linkPath.startsWith('instructions/')) {
          const fullPath = path.join(projectRoot, '.github', linkPath);
          const exists = await this.fileExists(fullPath);
          
          if (exists) {
            this.results.validLinks.push({
              text,
              path: linkPath,
              type: 'instruction-module',
              status: 'OK'
            });
          } else {
            this.results.invalidLinks.push({
              text,
              path: linkPath,
              type: 'instruction-module',
              status: 'MISSING',
              location: instructionFile
            });
          }
        }
      }
    } catch (error) {
      this.results.warnings.push(`Instruction-Link-Validierung Fehler: ${error.message}`);
    }
  }

  /**
   * 📄 MARKDOWN-DATEIEN SCANNEN
   */
  async scanMarkdownFiles(projectRoot) {
    const markdownFiles = await this.findMarkdownFiles(projectRoot);
    
    for (const file of markdownFiles) {
      await this.validateFileLinks(file, projectRoot);
    }
  }

  /**
   * 📁 MARKDOWN-DATEIEN FINDEN
   */
  async findMarkdownFiles(dir) {
    const files = [];
    await this.walkDirectory(dir, files, '.md');
    return files;
  }

  /**
   * 🚶 VERZEICHNIS-DURCHLAUF
   */
  async walkDirectory(dir, files, extension) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          if (!entry.name.startsWith('.') && 
              entry.name !== 'node_modules' && 
              entry.name !== 'dist') {
            await this.walkDirectory(fullPath, files, extension);
          }
        } else if (entry.isFile() && entry.name.endsWith(extension)) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Verzeichnis nicht zugänglich - ignorieren
    }
  }

  /**
   * 📄 EINZELDATEI-LINK-VALIDIERUNG
   */
  async validateFileLinks(filePath, projectRoot) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const relativePath = path.relative(projectRoot, filePath);
      
      // Links extrahieren
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;
      
      while ((match = linkRegex.exec(content)) !== null) {
        const [fullMatch, text, linkPath] = match;
        
        if (linkPath.startsWith('http')) {
          // Externe Links (nicht validieren, nur sammeln)
          this.results.externalLinks.push({
            text,
            url: linkPath,
            sourceFile: relativePath
          });
        } else {
          // Interne Links validieren
          await this.validateInternalLink(text, linkPath, filePath, projectRoot);
        }
      }
    } catch (error) {
      this.results.warnings.push(`Datei-Link-Validierung Fehler (${filePath}): ${error.message}`);
    }
  }

  /**
   * 🔗 INTERNE LINK-VALIDIERUNG
   */
  async validateInternalLink(text, linkPath, sourceFile, projectRoot) {
    const relativePath = path.relative(projectRoot, sourceFile);
    
    // Relative Pfad-Auflösung
    const sourceDir = path.dirname(sourceFile);
    const targetPath = path.resolve(sourceDir, linkPath);
    
    const exists = await this.fileExists(targetPath);
    
    const linkInfo = {
      text,
      path: linkPath,
      resolvedPath: path.relative(projectRoot, targetPath),
      sourceFile: relativePath,
      type: 'internal'
    };
    
    if (exists) {
      this.results.validLinks.push({
        ...linkInfo,
        status: 'OK'
      });
    } else {
      this.results.invalidLinks.push({
        ...linkInfo,
        status: 'MISSING'
      });
    }
  }

  /**
   * 🔄 SELBST-VALIDIERUNG
   */
  async performSelfValidation(projectRoot) {
    console.log('🔄 SELBST-VALIDIERUNG: Link-Validator prüft sich selbst...');
    
    const selfPath = __filename;
    await this.validateFileLinks(selfPath, projectRoot);
    
    // Andere Analyzer-Module prüfen
    const analyzerDir = path.join(projectRoot, 'tools', 'analyzer');
    try {
      const coreDir = path.join(analyzerDir, 'core');
      const coreFiles = await fs.readdir(coreDir);
      
      for (const file of coreFiles) {
        if (file.endsWith('.cjs') && file !== 'link-validator.cjs') {
          const filePath = path.join(coreDir, file);
          await this.validateFileLinks(filePath, projectRoot);
        }
      }
    } catch (error) {
      this.results.warnings.push(`Selbst-Validierung Fehler: ${error.message}`);
    }
  }

  /**
   * 📁 DATEI-EXISTENZ PRÜFEN
   */
  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 📊 LINK-REPORT GENERIERUNG
   */
  generateLinkReport() {
    this.results.statistics = {
      totalLinks: this.results.validLinks.length + this.results.invalidLinks.length,
      validLinks: this.results.validLinks.length,
      invalidLinks: this.results.invalidLinks.length,
      externalLinks: this.results.externalLinks.length,
      validityRate: this.results.validLinks.length / 
        (this.results.validLinks.length + this.results.invalidLinks.length) * 100
    };

    return {
      summary: {
        status: this.results.invalidLinks.length === 0 ? 'ALLE_LINKS_OK' : 'DEFEKTE_LINKS_GEFUNDEN',
        ...this.results.statistics
      },
      details: this.results,
      recommendations: this.generateLinkRecommendations()
    };
  }

  /**
   * 💡 LINK-EMPFEHLUNGEN
   */
  generateLinkRecommendations() {
    const recommendations = [];
    
    if (this.results.invalidLinks.length > 0) {
      recommendations.push({
        priority: 'HOCH',
        action: 'Defekte Links reparieren',
        count: this.results.invalidLinks.length,
        details: this.results.invalidLinks.slice(0, 5) // Erste 5 zeigen
      });
    }
    
    if (this.results.statistics.validityRate < 90) {
      recommendations.push({
        priority: 'MITTEL',
        action: 'Link-Qualität verbessern',
        reason: `Nur ${this.results.statistics.validityRate.toFixed(1)}% der Links funktionieren`
      });
    }
    
    return recommendations;
  }
}

// Export für Modul-Verwendung
module.exports = LinkValidator;

// CLI-Ausführung
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();
  
  const validator = new LinkValidator();
  validator.validateLinks(projectRoot)
    .then(report => {
      console.log('\n🔗 LINK-VALIDIERUNG ABGESCHLOSSEN:\n');
      console.log(JSON.stringify(report, null, 2));
    })
    .catch(error => {
      console.error('❌ Link-Validierung Fehler:', error);
      process.exit(1);
    });
}
