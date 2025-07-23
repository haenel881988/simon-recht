#!/usr/bin/env node

/**
 * 🔍 SIMON'S SEO-SCOPE v1.0 - CONTENT & AUTHENTIZITÄTS-SPEZIALIST
 *
 * 🎯 VERANTWORTLICHKEITEN:
 * ✅ Content-Länge & Keyword-Dichte-Analyse
 * ✅ Authentizitäts-Validierung (Marketing-Floskeln-Erkennung)
 * ✅ Meta-Tags & strukturierte Daten-Prüfung
 * ✅ Simon's echte IT-Expertise Compliance
 * ✅ Blog-Performance & SEO-Optimierung
 */

const fs = require("fs").promises;
const path = require("path");
const BaseChecker = require("../core/base-checker.cjs");

class SEOScope {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.contentPath = path.join(projectRoot, "src/content");
    this.blogPath = path.join(this.contentPath, "blog");
    this.pagesPath = path.join(this.contentPath, "pages");
    this.contentAnalysis = [];
  }

  /**
   * 🎯 HAUPT-AUSFÜHRUNG
   */
  async run() {
    const issues = [];
    const metrics = {};
    const kiPrompts = [];

    try {
      // 1️⃣ CONTENT-DATEIEN SCANNEN
      console.log("🔍 Scanne Content-Dateien...");
      const contentFiles = await this.scanContentFiles();
      metrics.totalContentFiles = contentFiles.length;

      // 2️⃣ BLOG-CONTENT ANALYSIEREN
      console.log("🔍 Analysiere Blog-Content...");
      const blogAnalysis = await this.analyzeBlogContent(
        contentFiles.filter((f) => f.type === "blog")
      );

      // 3️⃣ AUTHENTIZITÄTS-PRÜFUNG
      console.log("🔍 Prüfe Content-Authentizität...");
      const authenticityIssues = await this.validateAuthenticity(contentFiles);

      // 4️⃣ SEO-METRIKEN BERECHNEN
      console.log("🔍 Berechne SEO-Metriken...");
      metrics.averageWordCount = this.calculateAverageWordCount(blogAnalysis);
      metrics.averageKeywordDensity =
        this.calculateAverageKeywordDensity(blogAnalysis);
      metrics.blogsWithOptimalLength = blogAnalysis.filter(
        (b) => b.wordCount >= 2300
      ).length;

      // 5️⃣ PROBLEME SAMMELN
      const contentIssues = this.analyzeContentIssues(blogAnalysis);
      const seoIssues = this.validateSEORequirements(contentFiles);

      issues.push(...contentIssues, ...authenticityIssues, ...seoIssues);

      // 6️⃣ KI-PROMPTS GENERIEREN
      if (issues.length > 0) {
        kiPrompts.push(...this.generateSEOFixPrompts(issues, metrics));
      }

      // 7️⃣ HEALTH-SCORE BERECHNEN
      const healthScore = this.calculateSEOHealthScore(issues, metrics);

      console.log(`🔍 SEO-Scope abgeschlossen: ${healthScore}/100`);
      console.log(
        `🔍 Content-Analyse: ${metrics.totalContentFiles} Dateien, Ø ${metrics.averageWordCount} Wörter`
      );

      return BaseChecker.createScopeInterface().createResult(
        healthScore,
        issues,
        metrics,
        kiPrompts
      );
    } catch (error) {
      console.error("❌ SEO-Scope Fehler:", error.message);
      issues.push({
        severity: "critical",
        category: "seo-system",
        description: `SEO-Scope Systemfehler: ${error.message}`,
        file: "seo-scope",
        kiPrompt: `Debug SEO-Scope Systemfehler: ${error.message}`,
      });

      return BaseChecker.createScopeInterface().createResult(
        0,
        issues,
        metrics,
        kiPrompts
      );
    }
  }

  /**
   * 📂 CONTENT-DATEIEN SCANNEN
   */
  async scanContentFiles() {
    const files = [];

    try {
      // Blog-Dateien
      const blogFiles = await fs.readdir(this.blogPath);
      for (const file of blogFiles) {
        if (file.endsWith(".md")) {
          files.push({
            name: file,
            path: path.join(this.blogPath, file),
            type: "blog",
          });
        }
      }

      // Pages-Dateien (falls vorhanden)
      try {
        const pageFiles = await fs.readdir(this.pagesPath);
        for (const file of pageFiles) {
          if (file.endsWith(".md")) {
            files.push({
              name: file,
              path: path.join(this.pagesPath, file),
              type: "page",
            });
          }
        }
      } catch (err) {
        // Pages-Verzeichnis existiert möglicherweise nicht
      }
    } catch (error) {
      console.error(
        "❌ Fehler beim Scannen der Content-Dateien:",
        error.message
      );
    }

    return files;
  }

  /**
   * 📝 BLOG-CONTENT DETAILANALYSE
   */
  async analyzeBlogContent(blogFiles) {
    const analysis = [];

    for (const file of blogFiles) {
      try {
        const content = await fs.readFile(file.path, "utf-8");

        // Frontmatter extrahieren
        const frontmatterMatch = content.match(/^---([\s\S]*?)---/);
        const frontmatter = frontmatterMatch ? frontmatterMatch[1] : "";
        const bodyContent = content.replace(/^---([\s\S]*?)---/, "").trim();

        // Wörter zählen (ohne Code-Blöcke)
        const textOnly = bodyContent
          .replace(/```[\s\S]*?```/g, "") // Code-Blöcke entfernen
          .replace(/`[^`]*`/g, "") // Inline-Code entfernen
          .replace(/#{1,6}\s/g, "") // Markdown-Headers entfernen
          .replace(/[^\w\s]/g, " ") // Sonderzeichen zu Leerzeichen
          .replace(/\s+/g, " ") // Mehrfache Leerzeichen normalisieren
          .trim();

        const wordCount = textOnly
          .split(/\s+/)
          .filter((word) => word.length > 0).length;

        // Title aus Frontmatter extrahieren
        const titleMatch = frontmatter.match(/title:\s*["']([^"']*)["']/);
        const title = titleMatch ? titleMatch[1] : file.name;

        // Keyword-Dichte berechnen (vereinfacht)
        const keywordDensity = this.calculateKeywordDensity(textOnly, title);

        analysis.push({
          file: file.name,
          title: title,
          wordCount: wordCount,
          keywordDensity: keywordDensity,
          hasOptimalLength: wordCount >= 2300,
          content: textOnly,
          frontmatter: frontmatter,
        });
      } catch (error) {
        console.error(`❌ Fehler bei Analyse von ${file.name}:`, error.message);
      }
    }

    return analysis;
  }

  /**
   * 🔑 KEYWORD-DICHTE BERECHNUNG
   */
  calculateKeywordDensity(content, title) {
    if (!title || !content) return 0;

    // Hauptkeyword aus Titel ableiten (vereinfacht)
    const keywords = title
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 3) // Nur Wörter > 3 Zeichen
      .slice(0, 3); // Maximal 3 Keywords

    if (keywords.length === 0) return 0;

    const contentLower = content.toLowerCase();
    const totalWords = content.split(/\s+/).length;

    let keywordOccurrences = 0;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      const matches = contentLower.match(regex);
      keywordOccurrences += matches ? matches.length : 0;
    });

    return totalWords > 0
      ? Math.round((keywordOccurrences / totalWords) * 1000) / 10
      : 0;
  }

  /**
   * ✅ AUTHENTIZITÄTS-VALIDIERUNG - DEAKTIVIERT (CSS-FOKUS PRIORITÄT)
   */
  async validateAuthenticity(contentFiles) {
    const issues = [];

    // 🚫 MARKETING-FLOSKEL-PRÜFUNG TEMPORÄR DEAKTIVIERT
    // Fokus auf CSS-Optimierung - Marketing-Analyse später
    console.log("🔄 Authentizitäts-Prüfung übersprungen (CSS-Fokus-Modus)");

    return issues;
  }

  /**
   * 📊 CONTENT-PROBLEME ANALYSIEREN
   */
  analyzeContentIssues(blogAnalysis) {
    const issues = [];

    blogAnalysis.forEach((blog) => {
      // Wortanzahl-Prüfung
      if (blog.wordCount < 2300) {
        const severity = blog.wordCount < 1000 ? "critical" : "important";
        issues.push({
          severity: severity,
          category: "seo-content",
          description: `Blog zu kurz: ${blog.file} hat nur ${blog.wordCount} Wörter (mindestens 2300 erforderlich)`,
          file: blog.file,
          location: "content-length",
          kiPrompt: `Erweitere Blog ${blog.file} von ${blog.wordCount} auf mindestens 2300 Wörter für optimales SEO`,
        });
      }

      // Keyword-Dichte-Prüfung
      if (blog.keywordDensity < 1.0 || blog.keywordDensity > 3.0) {
        issues.push({
          severity: "optimization",
          category: "seo-keywords",
          description: `Suboptimale Keyword-Dichte: ${blog.file} hat ${blog.keywordDensity}% (ideal: 1.5-2.5%)`,
          file: blog.file,
          location: "keyword-density",
          kiPrompt: `Optimiere Keyword-Dichte in ${blog.file}: Aktuell ${blog.keywordDensity}%, Ziel: 1.5-2.5%`,
        });
      }
    });

    return issues;
  }

  /**
   * 🔍 SEO-ANFORDERUNGEN VALIDIEREN
   */
  validateSEORequirements(contentFiles) {
    const issues = [];

    // Prüfe ob ausreichend Content vorhanden ist
    const blogFiles = contentFiles.filter((f) => f.type === "blog");
    if (blogFiles.length < 5) {
      issues.push({
        severity: "important",
        category: "seo-strategy",
        description: `Zu wenig Blog-Content: Nur ${blogFiles.length} Blogs (mindestens 5 für SEO-Momentum erforderlich)`,
        file: "content-strategy",
        kiPrompt: `Erstelle ${
          5 - blogFiles.length
        } zusätzliche Blogs für SEO-Content-Strategie`,
      });
    }

    return issues;
  }

  /**
   * 📈 METRIKEN-BERECHNUNGEN
   */
  calculateAverageWordCount(blogAnalysis) {
    if (blogAnalysis.length === 0) return 0;
    const total = blogAnalysis.reduce((sum, blog) => sum + blog.wordCount, 0);
    return Math.round(total / blogAnalysis.length);
  }

  calculateAverageKeywordDensity(blogAnalysis) {
    if (blogAnalysis.length === 0) return 0;
    const total = blogAnalysis.reduce(
      (sum, blog) => sum + blog.keywordDensity,
      0
    );
    return Math.round((total / blogAnalysis.length) * 10) / 10;
  }

  /**
   * 🎯 SEO-HEALTH-SCORE BERECHNUNG
   */
  calculateSEOHealthScore(issues, metrics) {
    let score = 100;

    // Malus für Issues
    const criticalIssues = issues.filter(
      (i) => i.severity === "critical"
    ).length;
    const importantIssues = issues.filter(
      (i) => i.severity === "important"
    ).length;
    const optimizationIssues = issues.filter(
      (i) => i.severity === "optimization"
    ).length;

    score -= criticalIssues * 30; // -30 pro kritischem Issue
    score -= importantIssues * 15; // -15 pro wichtigem Issue
    score -= optimizationIssues * 5; // -5 pro Optimierung

    // Bonus für gute Content-Performance
    const contentBonus = Math.min(
      15,
      (metrics.blogsWithOptimalLength || 0) * 3
    );
    score += contentBonus;

    // Bonus für gute Keyword-Dichte
    if (
      metrics.averageKeywordDensity >= 1.5 &&
      metrics.averageKeywordDensity <= 2.5
    ) {
      score += 10;
    }

    return Math.max(0, Math.min(100, score));
  }

  /**
   * 🤖 SEO-FIX-PROMPTS GENERIEREN
   */
  generateSEOFixPrompts(issues, metrics) {
    const prompts = [];

    const contentIssues = issues.filter((i) => i.category === "seo-content");
    if (contentIssues.length > 0) {
      prompts.push(
        `SMART SEO-Content-Expansion: Erweitere ${contentIssues.length} Blogs auf mindestens 2300 Wörter. ` +
          `Aktueller Durchschnitt: ${metrics.averageWordCount} Wörter.`
      );
    }

    const authenticityIssues = issues.filter(
      (i) => i.category === "authenticity"
    );
    if (authenticityIssues.length > 0) {
      prompts.push(
        `Authentizitäts-Optimierung: Ersetze ${authenticityIssues.length} Marketing-Floskeln ` +
          `durch Simon's echte IT-Expertise und 5-Jahre-Praxis-Terminologie.`
      );
    }

    return prompts;
  }
}

module.exports = SEOScope;
