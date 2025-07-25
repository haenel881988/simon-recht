#!/usr/bin/env node

/**
 * 🎭 MASTER-ANALYZER v2.0 (SELBST-ANALYSIEREND + TOKEN-AWARE)
 * 
 * 🎯 ZWECK: Orchestriert alle Analyzer-Module + Selbst-Analyse
 * 🔢 TOKEN-BEWUSST: Automatische Token-Zählung für sichere KI-Arbeit
 * 🔄 SELBST-ÜBERWACHUNG: Analysiert eigene Komplexität
 * 🎪 MODULAR: Koordiniert spezialisierte Analyzer-Scopes
 */

const fs = require('fs').promises;
const path = require('path');

// Module-Imports (dynamisch für bessere Modularität)
const TokenCounter = require('./core/token-counter.cjs');
const LinkValidator = require('./core/link-validator.cjs');
const InstructionContradictionScanner = require('./scopes/instruction-contradiction-scanner.cjs');
const RedundancyDetector = require('./scopes/redundancy-detector.cjs');
const StructureOptimizer = require('./scopes/structure-optimizer.cjs');

class MasterAnalyzer {
  constructor() {
    this.results = {
      meta: {
        analysisDate: new Date().toISOString(),
        version: '2.0',
        selfAnalysisEnabled: true
      },
      tokens: null,
      links: null,
      contradictions: null,
      redundancy: null,
      structure: null,
      selfAnalysis: null,
      recommendations: [],
      criticalIssues: [],
      overallStatus: 'UNKNOWN'
    };
    
    this.modules = [
      { name: 'TokenCounter', class: TokenCounter, scope: 'core' },
      { name: 'LinkValidator', class: LinkValidator, scope: 'core' },
      { name: 'InstructionContradictionScanner', class: InstructionContradictionScanner, scope: 'instructions' },
      { name: 'RedundancyDetector', class: RedundancyDetector, scope: 'cleanup' },
      { name: 'StructureOptimizer', class: StructureOptimizer, scope: 'organization' }
    ];
  }

  /**
   * 🎯 HAUPT-ANALYSE-ORCHESTRIERUNG
   */
  async runFullAnalysis(projectRoot) {
    console.log('🎭 MASTER-ANALYZER: Starte vollständige Projekt-Analyse...');
    console.log(`📁 Projekt-Root: ${projectRoot}`);
    console.log(`🕒 Start-Zeit: ${new Date().toLocaleString('de-DE')}`);
    
    try {
      // 1. SELBST-ANALYSE ZUERST (Meta-Ebene)
      await this.performComprehensiveSelfAnalysis(projectRoot);
      
      // 2. TOKEN-ANALYSE (Basis für alle anderen)
      await this.runTokenAnalysis(projectRoot);
      
      // 3. STRUKTUR-ANALYSE
      await this.runStructuralAnalysis(projectRoot);
      
      // 4. CONTENT-INTEGRITÄT
      await this.runContentIntegrityAnalysis(projectRoot);
      
      // 5. REDUNDANZ-BEREINIGUNG
      await this.runRedundancyAnalysis(projectRoot);
      
      // 6. STRUKTUR-OPTIMIERUNG
      await this.runStructureOptimization(projectRoot);
      
      // 7. GESAMT-BEWERTUNG
      await this.generateOverallAssessment();
      
      // 8. FINALE EMPFEHLUNGEN
      await this.generateMasterRecommendations();
      
      return this.generateMasterReport();
      
    } catch (error) {
      console.error('❌ Master-Analyse Fehler:', error);
      throw error;
    }
  }

  /**
   * 🔄 UMFASSENDE SELBST-ANALYSE
   */
  async performComprehensiveSelfAnalysis(projectRoot) {
    console.log('🔄 SELBST-ANALYSE: Master-Analyzer analysiert sich und alle Module...');
    
    const selfAnalysis = {
      masterAnalyzer: await this.analyzeSelf(),
      modules: [],
      complexity: {},
      recommendations: []
    };
    
    // Alle Analyzer-Module analysieren
    const analyzerDir = path.join(projectRoot, 'tools', 'analyzer');
    
    // Core-Module
    const coreDir = path.join(analyzerDir, 'core');
    try {
      const coreFiles = await fs.readdir(coreDir);
      for (const file of coreFiles) {
        if (file.endsWith('.cjs')) {
          const analysis = await this.analyzeModule(path.join(coreDir, file), 'core');
          selfAnalysis.modules.push(analysis);
        }
      }
    } catch (error) {
      // Core-Verzeichnis Problem
    }
    
    // Scope-Module
    const scopesDir = path.join(analyzerDir, 'scopes');
    try {
      const scopeFiles = await fs.readdir(scopesDir);
      for (const file of scopeFiles) {
        if (file.endsWith('.cjs')) {
          const analysis = await this.analyzeModule(path.join(scopesDir, file), 'scope');
          selfAnalysis.modules.push(analysis);
        }
      }
    } catch (error) {
      // Scopes-Verzeichnis Problem
    }
    
    // Master-Analyzer selbst
    const masterAnalysis = await this.analyzeModule(__filename, 'master');
    selfAnalysis.modules.push(masterAnalysis);
    
    // Komplexitäts-Bewertung
    selfAnalysis.complexity = this.assessAnalyzerComplexity(selfAnalysis.modules);
    
    this.results.selfAnalysis = selfAnalysis;
  }

  /**
   * 🧬 EINZELMODUL-ANALYSE
   */
  async analyzeModule(filePath, type) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const filename = path.basename(filePath);
      
      // Token-Zählung
      const tokens = Math.ceil(content.length / 3); // Code-Token-Schätzung
      
      // Komplexitäts-Metriken
      const lines = content.split('\n').length;
      const functions = (content.match(/async \w+\(|function \w+\(|\w+\s*\(/g) || []).length;
      const classes = (content.match(/class \w+/g) || []).length;
      const comments = (content.match(/\/\*\*[\s\S]*?\*\/|\/\/.*/g) || []).length;
      
      // Status-Bewertung
      let status = 'OK';
      if (tokens > 2000) status = 'ZU_KOMPLEX';
      else if (tokens > 1000) status = 'KOMPLEX';
      
      return {
        filename,
        type,
        path: path.relative(process.cwd(), filePath),
        metrics: {
          tokens,
          lines,
          functions,
          classes,
          comments,
          documentationRatio: comments / functions
        },
        status,
        recommendations: this.generateModuleRecommendations(tokens, functions, classes)
      };
    } catch (error) {
      return {
        filename: path.basename(filePath),
        type,
        error: error.message,
        status: 'ERROR'
      };
    }
  }

  /**
   * 🔍 MASTER-ANALYZER SELBST-ANALYSE
   */
  async analyzeSelf() {
    const selfPath = __filename;
    const selfAnalysis = await this.analyzeModule(selfPath, 'master');
    
    // Zusätzliche Master-spezifische Metriken
    selfAnalysis.orchestrationComplexity = this.modules.length;
    selfAnalysis.selfAwarenessLevel = 'VOLL'; // Kann sich selbst analysieren
    
    return selfAnalysis;
  }

  /**
   * 📊 ANALYZER-KOMPLEXITÄTS-BEWERTUNG
   */
  assessAnalyzerComplexity(modules) {
    const totalTokens = modules.reduce((sum, mod) => sum + (mod.metrics?.tokens || 0), 0);
    const totalFunctions = modules.reduce((sum, mod) => sum + (mod.metrics?.functions || 0), 0);
    const avgDocumentation = modules.reduce((sum, mod) => sum + (mod.metrics?.documentationRatio || 0), 0) / modules.length;
    
    return {
      totalModules: modules.length,
      totalTokens,
      totalFunctions,
      averageDocumentationRatio: avgDocumentation,
      status: totalTokens > 10000 ? 'ZU_KOMPLEX' : totalTokens > 5000 ? 'KOMPLEX' : 'OK',
      recommendation: totalTokens > 10000 ? 'WEITERE_MODULARISIERUNG' : 'STABIL'
    };
  }

  /**
   * 💡 MODUL-EMPFEHLUNGEN
   */
  generateModuleRecommendations(tokens, functions, classes) {
    const recommendations = [];
    
    if (tokens > 2000) {
      recommendations.push('Modul weiter aufteilen - zu komplex');
    }
    
    if (functions > 20) {
      recommendations.push('Funktions-Anzahl reduzieren - zu viele Zuständigkeiten');
    }
    
    if (classes > 3) {
      recommendations.push('Klassen in separate Module auslagern');
    }
    
    return recommendations;
  }

  /**
   * 🔢 TOKEN-ANALYSE DURCHFÜHRUNG
   */
  async runTokenAnalysis(projectRoot) {
    console.log('🔢 TOKEN-ANALYSE: Starte Token-Zählung...');
    
    const tokenCounter = new TokenCounter();
    this.results.tokens = await tokenCounter.analyzeTokens(projectRoot);
    
    // Token-basierte Kritische Issues
    if (this.results.tokens.summary.status === 'KRITISCH') {
      this.results.criticalIssues.push({
        type: 'TOKEN_OVERFLOW',
        severity: 'KRITISCH',
        description: `Token-Limit überschritten: ${this.results.tokens.summary.totalTokens} Tokens`,
        action: 'Sofortige Modularisierung erforderlich'
      });
    }
  }

  /**
   * 🏗️ STRUKTUR-ANALYSE DURCHFÜHRUNG
   */
  async runStructuralAnalysis(projectRoot) {
    console.log('🏗️ STRUKTUR-ANALYSE: Starte Link-Validierung...');
    
    const linkValidator = new LinkValidator();
    this.results.links = await linkValidator.validateLinks(projectRoot);
    
    // Link-basierte Kritische Issues
    if (this.results.links.summary.status === 'DEFEKTE_LINKS_GEFUNDEN') {
      this.results.criticalIssues.push({
        type: 'BROKEN_LINKS',
        severity: 'HOCH',
        description: `${this.results.links.summary.invalidLinks} defekte Links gefunden`,
        action: 'Links reparieren für Instructions-Integrität'
      });
    }
  }

  /**
   * 🏗️ STRUKTUR-OPTIMIERUNG DURCHFÜHRUNG
   */
  async runStructureOptimization(projectRoot) {
    console.log('🏗️ STRUKTUR-OPTIMIERUNG: Starte intelligente Struktur-Analyse...');
    
    const structureOptimizer = new StructureOptimizer();
    this.results.structure = await structureOptimizer.optimizeStructure(projectRoot);
    
    // Struktur-basierte Kritische Issues
    if (this.results.structure.summary.currentStructureScore < 30) {
      this.results.criticalIssues.push({
        type: 'POOR_STRUCTURE',
        severity: 'KRITISCH',
        description: `Sehr schlechte Projekt-Struktur: ${this.results.structure.summary.currentStructureScore}/100`,
        action: 'Sofortige Struktur-Reorganisation mit Migration-Script'
      });
    }
    
    if (this.results.structure.summary.highUrgencyMovements > 10) {
      this.results.criticalIssues.push({
        type: 'MANY_URGENT_MOVES',
        severity: 'HOCH',
        description: `${this.results.structure.summary.highUrgencyMovements} Dateien mit hoher Bewegungs-Priorität`,
        action: 'High-Priority Bewegungen priorisieren'
      });
    }
  }

  /**
   * 🧹 REDUNDANZ-ANALYSE DURCHFÜHRUNG
   */
  async runRedundancyAnalysis(projectRoot) {
    console.log('🧹 REDUNDANZ-ANALYSE: Starte Datei-Bereinigung...');
    
    const redundancyDetector = new RedundancyDetector();
    this.results.redundancy = await redundancyDetector.analyzeRedundancy(projectRoot);
    
    // Redundanz-basierte Empfehlungen
    if (this.results.redundancy.summary.status === 'SEHR_UNORDENTLICH') {
      this.results.criticalIssues.push({
        type: 'PROJECT_CLUTTER',
        severity: 'MITTEL',
        description: `Projekt sehr unordentlich: ${this.results.redundancy.summary.totalFiles} redundante Dateien`,
        action: 'Datei-Bereinigung durchführen'
      });
    }
  }

  /**
   * 📚 CONTENT-INTEGRITÄT DURCHFÜHRUNG
   */
  async runContentIntegrityAnalysis(projectRoot) {
    console.log('📚 CONTENT-INTEGRITÄT: Starte Widerspruchs-Analyse...');
    
    const contradictionScanner = new InstructionContradictionScanner();
    this.results.contradictions = await contradictionScanner.scanContradictions(projectRoot);
    
    // Widerspruchs-basierte Kritische Issues
    if (this.results.contradictions.summary.criticalIssues > 0) {
      this.results.criticalIssues.push({
        type: 'INSTRUCTION_CONTRADICTIONS',
        severity: 'KRITISCH',
        description: `${this.results.contradictions.summary.criticalIssues} kritische Instruction-Widersprüche`,
        action: 'Widersprüche auflösen für konsistente KI-Anweisungen'
      });
    }
  }

  /**
   * 🎯 GESAMT-BEWERTUNG
   */
  async generateOverallAssessment() {
    console.log('🎯 GESAMT-BEWERTUNG: Bewerte Projekt-Gesundheit...');
    
    const criticalCount = this.results.criticalIssues.length;
    const tokenStatus = this.results.tokens?.summary?.status || 'UNKNOWN';
    const linkStatus = this.results.links?.summary?.status || 'UNKNOWN';
    const contradictionStatus = this.results.contradictions?.summary?.status || 'UNKNOWN';
    const redundancyStatus = this.results.redundancy?.summary?.status || 'UNKNOWN';
    const structureStatus = this.results.structure?.summary?.estimatedImprovement?.status || 'UNKNOWN';
    
    // Overall Status Logic
    if (criticalCount > 0 || tokenStatus === 'KRITISCH') {
      this.results.overallStatus = 'KRITISCH';
    } else if (tokenStatus === 'WARNUNG' || linkStatus === 'DEFEKTE_LINKS_GEFUNDEN') {
      this.results.overallStatus = 'WARNUNG';
    } else if (contradictionStatus === 'KEINE_WIDERSPRÜCHE' && 
               tokenStatus === 'OK' && 
               linkStatus === 'ALLE_LINKS_OK' &&
               redundancyStatus === 'SAUBER' &&
               structureStatus === 'OPTIMAL') {
      this.results.overallStatus = 'OPTIMAL';
    } else {
      this.results.overallStatus = 'VERBESSERBAR';
    }
  }

  /**
   * 💡 MASTER-EMPFEHLUNGEN
   */
  async generateMasterRecommendations() {
    console.log('💡 EMPFEHLUNGEN: Generiere Handlungs-Plan...');
    
    // Prioritäts-basierte Empfehlungen
    const recommendations = [];
    
    // 1. Kritische Issues zuerst
    this.results.criticalIssues.forEach((issue, index) => {
      recommendations.push({
        priority: index + 1,
        type: 'KRITISCH',
        action: issue.action,
        reason: issue.description,
        impact: 'Projekt-blockierend'
      });
    });
    
    // 2. Token-Optimierung
    if (this.results.tokens?.summary?.totalTokens > 5000) {
      recommendations.push({
        priority: recommendations.length + 1,
        type: 'OPTIMIERUNG',
        action: 'Instructions weiter modularisieren',
        reason: `${this.results.tokens.summary.totalTokens} Tokens noch zu hoch`,
        impact: 'KI-Performance-Verbesserung'
      });
    }
    
    // 3. Analyzer-Selbst-Optimierung
    if (this.results.selfAnalysis?.complexity?.status !== 'OK') {
      recommendations.push({
        priority: recommendations.length + 1,
        type: 'SELBST_OPTIMIERUNG',
        action: 'Analyzer-Tools weiter modularisieren',
        reason: 'Analyzer-Komplexität zu hoch',
        impact: 'Tool-Wartbarkeit verbessern'
      });
    }
    
    this.results.recommendations = recommendations;
  }

  /**
   * 📊 MASTER-REPORT GENERIERUNG
   */
  generateMasterReport() {
    const report = {
      meta: this.results.meta,
      summary: {
        overallStatus: this.results.overallStatus,
        criticalIssues: this.results.criticalIssues.length,
        totalTokens: this.results.tokens?.summary?.totalTokens || 0,
        validLinks: this.results.links?.summary?.validLinks || 0,
        invalidLinks: this.results.links?.summary?.invalidLinks || 0,
        contradictions: this.results.contradictions?.summary?.totalContradictions || 0,
        redundantFiles: this.results.redundancy?.summary?.totalFiles || 0,
        structureScore: this.results.structure?.summary?.currentStructureScore || 0,
        movementsNeeded: this.results.structure?.summary?.totalMovementsNeeded || 0,
        selfAnalysisModules: this.results.selfAnalysis?.modules?.length || 0
      },
      criticalIssues: this.results.criticalIssues,
      recommendations: this.results.recommendations.slice(0, 10), // Top 10
      details: {
        tokens: this.results.tokens,
        links: this.results.links,
        contradictions: this.results.contradictions,
        redundancy: this.results.redundancy,
        structure: this.results.structure,
        selfAnalysis: this.results.selfAnalysis
      }
    };
    
    return report;
  }
}

// Export für Modul-Verwendung
module.exports = MasterAnalyzer;

// CLI-Ausführung
if (require.main === module) {
  const projectRoot = process.argv[2] || process.cwd();
  
  const analyzer = new MasterAnalyzer();
  analyzer.runFullAnalysis(projectRoot)
    .then(report => {
      console.log('\n🎭 MASTER-ANALYSE ABGESCHLOSSEN:\n');
      console.log('📊 ZUSAMMENFASSUNG:');
      console.log(`   Status: ${report.summary.overallStatus}`);
      console.log(`   Kritische Issues: ${report.summary.criticalIssues}`);
      console.log(`   Gesamt-Tokens: ${report.summary.totalTokens}`);
      console.log(`   Defekte Links: ${report.summary.invalidLinks}`);
      console.log(`   Widersprüche: ${report.summary.contradictions}`);
      console.log(`   Redundante Dateien: ${report.summary.redundantFiles}`);
      console.log(`   Struktur-Score: ${report.summary.structureScore}/100`);
      console.log(`   Bewegungen nötig: ${report.summary.movementsNeeded}`);
      console.log(`   Selbst-Analyse Module: ${report.summary.selfAnalysisModules}`);
      
      if (report.criticalIssues.length > 0) {
        console.log('\n🚨 KRITISCHE ISSUES:');
        report.criticalIssues.forEach((issue, index) => {
          console.log(`   ${index + 1}. ${issue.description}`);
        });
      }
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 TOP-EMPFEHLUNGEN:');
        report.recommendations.slice(0, 5).forEach((rec, index) => {
          console.log(`   ${rec.priority}. ${rec.action}`);
        });
      }
      
      console.log('\n📄 Vollständiger Report in JSON-Format verfügbar.');
      
      // JSON-Output für weitere Verarbeitung
      if (process.argv.includes('--json')) {
        console.log('\n' + JSON.stringify(report, null, 2));
      }
    })
    .catch(error => {
      console.error('❌ Master-Analyse Fehler:', error);
      process.exit(1);
    });
}
