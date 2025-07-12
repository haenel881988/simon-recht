/**
 * 🧠 AAR METRICS COLLECTOR v1.0.0
 * Sammelt automatisch Lern-Daten für selbstverbessernden Build-Checker
 * 
 * Features:
 * - Pattern Recognition für False Positives
 * - Fix Success Rate Tracking
 * - Context-Aware Learning Data
 * - ML Training Data Generation
 */

const fs = require('fs');
const path = require('path');

class AARMetricsCollector {
    constructor() {
        this.metricsDir = path.join(__dirname, '../metrics');
        this.patternsFile = path.join(this.metricsDir, 'learned-patterns.json');
        this.metricsFile = path.join(this.metricsDir, 'aar-metrics.json');
        this.ensureDirectoryExists();
        
        // Learning Data Structure
        this.patterns = this.loadExistingPatterns();
        this.sessionMetrics = {
            timestamp: new Date().toISOString(),
            sessionId: this.generateSessionId(),
            issues: [],
            fixes: [],
            patterns: [],
            confidence: {}
        };
    }

    ensureDirectoryExists() {
        if (!fs.existsSync(this.metricsDir)) {
            fs.mkdirSync(this.metricsDir, { recursive: true });
        }
    }

    generateSessionId() {
        return `aar-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    loadExistingPatterns() {
        try {
            if (fs.existsSync(this.patternsFile)) {
                return JSON.parse(fs.readFileSync(this.patternsFile, 'utf8'));
            }
        } catch (error) {
            console.warn('⚠️ Could not load existing patterns:', error.message);
        }
        
        return {
            falsePositives: [],
            truePositives: [],
            commonFixes: [],
            contextPatterns: {},
            confidenceScores: {}
        };
    }

    /**
     * 🔍 ISSUE ANALYSIS - Analysiert ein Issue und sammelt Lern-Daten
     */
    analyzeIssue(issue, context = {}) {
        const analysis = {
            issueId: this.generateIssueId(issue),
            type: issue.type || 'unknown',
            description: issue.description,
            filePath: issue.filePath,
            context: {
                fileType: this.detectFileType(issue.filePath),
                isProduction: this.isProductionFile(issue.filePath),
                frontmatterFields: context.frontmatterFields || null,
                ...context
            },
            detectedAt: new Date().toISOString(),
            confidence: this.calculateInitialConfidence(issue),
            similarPatterns: this.findSimilarPatterns(issue)
        };

        this.sessionMetrics.issues.push(analysis);
        return analysis;
    }

    /**
     * 🛠️ FIX TRACKING - Verfolgt angewendete Fixes und deren Success Rate
     */
    trackFix(issueId, fix, outcome) {
        const fixRecord = {
            issueId,
            fixType: fix.type,
            fixDescription: fix.description,
            codeChanges: fix.codeChanges || null,
            outcome: outcome, // 'success', 'failed', 'false_positive'
            appliedAt: new Date().toISOString(),
            verificationResult: null
        };

        this.sessionMetrics.fixes.push(fixRecord);
        
        // Update Confidence Scores based on fix outcome
        this.updateConfidenceScores(issueId, outcome);
        
        return fixRecord;
    }

    /**
     * 🎯 CONFIDENCE CALCULATION - Berechnet Vertrauen in Issue-Detection
     */
    calculateInitialConfidence(issue) {
        let confidence = 0.5; // Base confidence

        // File type context
        if (this.isProductionFile(issue.filePath)) {
            confidence += 0.2;
        }

        // Pattern matching with historical data
        const similarPattern = this.findMostSimilarPattern(issue);
        if (similarPattern) {
            confidence = (confidence + similarPattern.averageConfidence) / 2;
        }

        // Issue type specific confidence
        const typeConfidence = this.patterns.confidenceScores[issue.type] || 0.5;
        confidence = (confidence + typeConfidence) / 2;

        return Math.min(Math.max(confidence, 0.1), 0.95); // Clamp between 0.1-0.95
    }

    /**
     * 📊 PATTERN DETECTION - Erkennt wiederkehrende Muster
     */
    detectPattern(issue, fix, outcome) {
        const pattern = {
            patternId: this.generatePatternId(issue, fix),
            issuePattern: {
                type: issue.type,
                filePattern: this.extractFilePattern(issue.filePath),
                descriptionKeywords: this.extractKeywords(issue.description)
            },
            fixPattern: {
                type: fix.type,
                success: outcome === 'success',
                codePattern: this.extractCodePattern(fix.codeChanges)
            },
            frequency: 1,
            successRate: outcome === 'success' ? 1 : 0,
            lastSeen: new Date().toISOString()
        };

        this.sessionMetrics.patterns.push(pattern);
        this.updateGlobalPatterns(pattern);
        
        return pattern;
    }

    /**
     * 🔄 LEARNING FEEDBACK LOOP - Verbessert Algorithmus basierend auf Feedback
     */
    processFeedback(issueId, userFeedback) {
        // userFeedback: 'correct', 'false_positive', 'needs_improvement'
        const issue = this.sessionMetrics.issues.find(i => i.issueId === issueId);
        if (!issue) return;

        // Update confidence based on feedback
        switch (userFeedback) {
            case 'correct':
                this.patterns.confidenceScores[issue.type] = 
                    Math.min((this.patterns.confidenceScores[issue.type] || 0.5) + 0.1, 0.95);
                break;
            case 'false_positive':
                this.patterns.falsePositives.push({
                    pattern: this.extractIssuePattern(issue),
                    timestamp: new Date().toISOString()
                });
                this.patterns.confidenceScores[issue.type] = 
                    Math.max((this.patterns.confidenceScores[issue.type] || 0.5) - 0.15, 0.1);
                break;
        }

        this.savePatternsToFile();
    }

    /**
     * 🎓 ML TRAINING DATA EXPORT - Exportiert Daten für Machine Learning
     */
    exportTrainingData() {
        const trainingData = {
            metadata: {
                exportedAt: new Date().toISOString(),
                totalSessions: this.getAllSessionCount(),
                totalIssues: this.getTotalIssueCount(),
                totalFixes: this.getTotalFixCount()
            },
            features: this.extractFeatures(),
            labels: this.extractLabels(),
            patterns: this.patterns,
            sessionMetrics: this.sessionMetrics
        };

        const exportFile = path.join(this.metricsDir, `training-data-${Date.now()}.json`);
        fs.writeFileSync(exportFile, JSON.stringify(trainingData, null, 2));
        
        console.log(`🎓 Training Data exported: ${exportFile}`);
        return exportFile;
    }

    // === HELPER METHODS ===

    generateIssueId(issue) {
        return `issue-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
    }

    generatePatternId(issue, fix) {
        return `pattern-${issue.type}-${fix.type}-${Date.now()}`;
    }

    detectFileType(filePath) {
        if (filePath.includes('.astro')) return 'astro';
        if (filePath.includes('.md')) return 'markdown';
        if (filePath.includes('.ts')) return 'typescript';
        if (filePath.includes('.js')) return 'javascript';
        if (filePath.includes('/docs/')) return 'documentation';
        return 'unknown';
    }

    isProductionFile(filePath) {
        const productionPaths = ['/src/', '/public/', '/pages/', '/components/', '/layouts/'];
        const documentationPaths = ['/docs/', '/examples/', '/migration/', '/archive/'];
        
        return productionPaths.some(path => filePath.includes(path)) && 
               !documentationPaths.some(path => filePath.includes(path));
    }

    findSimilarPatterns(issue) {
        return this.patterns.falsePositives.filter(fp => 
            fp.pattern.type === issue.type || 
            fp.pattern.descriptionKeywords?.some(keyword => 
                issue.description.toLowerCase().includes(keyword.toLowerCase())
            )
        );
    }

    findMostSimilarPattern(issue) {
        // Simplified similarity calculation
        const similarPatterns = this.findSimilarPatterns(issue);
        return similarPatterns.length > 0 ? similarPatterns[0] : null;
    }

    updateConfidenceScores(issueId, outcome) {
        const issue = this.sessionMetrics.issues.find(i => i.issueId === issueId);
        if (!issue) return;

        let adjustment = 0;
        switch (outcome) {
            case 'success': adjustment = 0.05; break;
            case 'false_positive': adjustment = -0.15; break;
            case 'failed': adjustment = -0.05; break;
        }

        this.patterns.confidenceScores[issue.type] = 
            Math.min(Math.max(
                (this.patterns.confidenceScores[issue.type] || 0.5) + adjustment, 
                0.1
            ), 0.95);
    }

    extractFilePattern(filePath) {
        return filePath.split('/').slice(-2).join('/'); // Last 2 path segments
    }

    extractKeywords(description) {
        return description.toLowerCase()
            .split(/\s+/)
            .filter(word => word.length > 3)
            .slice(0, 5); // Top 5 keywords
    }

    extractCodePattern(codeChanges) {
        if (!codeChanges) return null;
        return {
            linesChanged: codeChanges.split('\n').length,
            hasImports: codeChanges.includes('import'),
            hasExports: codeChanges.includes('export'),
            language: this.detectCodeLanguage(codeChanges)
        };
    }

    detectCodeLanguage(code) {
        if (code.includes('import {') || code.includes('const ')) return 'javascript';
        if (code.includes('---') || code.includes('<script>')) return 'astro';
        if (code.includes('title:') || code.includes('description:')) return 'frontmatter';
        return 'unknown';
    }

    extractIssuePattern(issue) {
        return {
            type: issue.type,
            fileType: issue.context.fileType,
            isProduction: issue.context.isProduction,
            keywords: this.extractKeywords(issue.description)
        };
    }

    updateGlobalPatterns(pattern) {
        // Find existing pattern or add new one
        const existingPattern = this.patterns.commonFixes.find(p => 
            p.patternId === pattern.patternId || 
            (p.issuePattern.type === pattern.issuePattern.type && 
             p.fixPattern.type === pattern.fixPattern.type)
        );

        if (existingPattern) {
            existingPattern.frequency += 1;
            existingPattern.successRate = 
                (existingPattern.successRate * (existingPattern.frequency - 1) + 
                 (pattern.fixPattern.success ? 1 : 0)) / existingPattern.frequency;
            existingPattern.lastSeen = pattern.lastSeen;
        } else {
            this.patterns.commonFixes.push(pattern);
        }
    }

    extractFeatures() {
        return this.sessionMetrics.issues.map(issue => ({
            fileType: issue.context.fileType,
            isProduction: issue.context.isProduction,
            issueType: issue.type,
            descriptionLength: issue.description.length,
            hasKeywords: this.extractKeywords(issue.description),
            confidence: issue.confidence
        }));
    }

    extractLabels() {
        return this.sessionMetrics.fixes.map(fix => ({
            issueId: fix.issueId,
            outcome: fix.outcome,
            successful: fix.outcome === 'success'
        }));
    }

    getAllSessionCount() {
        try {
            const files = fs.readdirSync(this.metricsDir);
            return files.filter(f => f.startsWith('aar-metrics-')).length;
        } catch {
            return 0;
        }
    }

    getTotalIssueCount() {
        return this.sessionMetrics.issues.length;
    }

    getTotalFixCount() {
        return this.sessionMetrics.fixes.length;
    }

    /**
     * 💾 SAVE SESSION - Speichert Session-Daten
     */
    saveSession() {
        const sessionFile = path.join(this.metricsDir, `aar-metrics-${this.sessionMetrics.sessionId}.json`);
        fs.writeFileSync(sessionFile, JSON.stringify(this.sessionMetrics, null, 2));
        
        this.savePatternsToFile();
        
        console.log(`📊 AAR Metrics saved: ${sessionFile}`);
        return sessionFile;
    }

    savePatternsToFile() {
        fs.writeFileSync(this.patternsFile, JSON.stringify(this.patterns, null, 2));
    }

    /**
     * 📈 GENERATE REPORT - Erstellt Lern-Report
     */
    generateLearningReport() {
        const report = {
            summary: {
                sessionId: this.sessionMetrics.sessionId,
                timestamp: this.sessionMetrics.timestamp,
                totalIssues: this.sessionMetrics.issues.length,
                totalFixes: this.sessionMetrics.fixes.length,
                successRate: this.calculateSessionSuccessRate(),
                newPatterns: this.sessionMetrics.patterns.length
            },
            insights: {
                mostCommonIssueType: this.getMostCommonIssueType(),
                highestConfidenceIssues: this.getHighestConfidenceIssues(),
                falsePositiveRate: this.calculateFalsePositiveRate(),
                improvementAreas: this.identifyImprovementAreas()
            },
            recommendations: this.generateRecommendations()
        };

        const reportFile = path.join(this.metricsDir, `learning-report-${this.sessionMetrics.sessionId}.json`);
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        return report;
    }

    calculateSessionSuccessRate() {
        const successful = this.sessionMetrics.fixes.filter(f => f.outcome === 'success').length;
        return this.sessionMetrics.fixes.length > 0 ? successful / this.sessionMetrics.fixes.length : 0;
    }

    getMostCommonIssueType() {
        const typeCounts = {};
        this.sessionMetrics.issues.forEach(issue => {
            typeCounts[issue.type] = (typeCounts[issue.type] || 0) + 1;
        });
        return Object.keys(typeCounts).reduce((a, b) => typeCounts[a] > typeCounts[b] ? a : b, '');
    }

    getHighestConfidenceIssues() {
        return this.sessionMetrics.issues
            .sort((a, b) => b.confidence - a.confidence)
            .slice(0, 3);
    }

    calculateFalsePositiveRate() {
        const falsePositives = this.sessionMetrics.fixes.filter(f => f.outcome === 'false_positive').length;
        return this.sessionMetrics.fixes.length > 0 ? falsePositives / this.sessionMetrics.fixes.length : 0;
    }

    identifyImprovementAreas() {
        const areas = [];
        
        if (this.calculateFalsePositiveRate() > 0.2) {
            areas.push('High false positive rate - improve pattern recognition');
        }
        
        if (this.calculateSessionSuccessRate() < 0.8) {
            areas.push('Low success rate - enhance fix recommendations');
        }
        
        return areas;
    }

    generateRecommendations() {
        const recommendations = [];
        
        recommendations.push('Continue collecting AAR metrics for better ML training data');
        recommendations.push('Implement confidence-based issue filtering');
        recommendations.push('Add more context-aware validation rules');
        
        return recommendations;
    }
}

module.exports = AARMetricsCollector;
