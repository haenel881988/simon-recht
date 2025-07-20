#!/usr/bin/env node

/**
 * 🚀 SIMPLIFIED BUILD CHECKER v1.0.0
 * Fokussiert auf echte Probleme, keine Mikromanagement-Überprüfungen
 *
 * PRINZIP: Nur echte Build-blockierende und SEO-kritische Issues melden
 * ZIEL: Weniger Rauschen, mehr Wert
 */

const fs = require("fs").promises;
const path = require("path");

class SimplifiedBuildChecker {
  constructor() {
    this.startTime = new Date();
    this.issues = [];
    this.projectRoot = process.cwd();

    // Nur kritische Standards - keine Mikromanagement-Regeln
    this.standards = {
      minContentLength: 1000, // Reduziert von 2300 - realistischer
      maxCriticalIssues: 5, // Fokus auf echte Probleme
      requireImageAlt: true,
      requireMetaDescription: true,
    };
  }

  /**
   * 🎯 HAUPT-AUSFÜHRUNG - Fokussiert und schlank
   */
  async run() {
    console.log("🚀 Simplified Build Checker gestartet...");
    console.log("📋 Fokus: Echte Build-Probleme und kritische SEO-Issues");

    try {
      // 1. KRITISCHE BUILD-PROBLEME prüfen
      await this.checkCriticalBuildIssues();

      // 2. ECHTE SEO-PROBLEME prüfen
      await this.checkEssentialSEO();

      // 3. CONTENT-QUALITÄT prüfen (vereinfacht)
      await this.checkContentQuality();

      // 4. Report generieren
      await this.generateSimplifiedReport();

      console.log(
        `✅ Build-Check abgeschlossen: ${this.issues.length} Issues gefunden`
      );

      // Deployment-Entscheidung
      const criticalIssues = this.issues.filter(
        (i) => i.priority === "CRITICAL"
      );
      const isDeploymentSafe = criticalIssues.length === 0;

      console.log(
        isDeploymentSafe
          ? "🚀 DEPLOYMENT BEREIT - Keine kritischen Probleme"
          : `❌ DEPLOYMENT BLOCKIERT - ${criticalIssues.length} kritische Probleme`
      );
    } catch (error) {
      console.error("❌ Build-Checker Fehler:", error.message);
      this.addIssue("CRITICAL", "Build-Checker Systemeemer", error.message);
    }
  }

  /**
   * 🔥 KRITISCHE BUILD-PROBLEME - Nur echte Blocker
   */
  async checkCriticalBuildIssues() {
    console.log("🔥 Prüfe kritische Build-Probleme...");

    // 1. Astro Config prüfen
    try {
      await fs.access(path.join(this.projectRoot, "astro.config.mjs"));
    } catch {
      this.addIssue(
        "CRITICAL",
        "Astro Config fehlt",
        "astro.config.mjs nicht gefunden"
      );
    }

    // 2. Package.json prüfen
    try {
      const packageJson = await fs.readFile(
        path.join(this.projectRoot, "package.json"),
        "utf-8"
      );
      const pkg = JSON.parse(packageJson);

      if (!pkg.scripts || !pkg.scripts.build) {
        this.addIssue(
          "CRITICAL",
          "Build-Script fehlt",
          "package.json hat kein build-Script"
        );
      }
    } catch {
      this.addIssue(
        "CRITICAL",
        "Package.json Problem",
        "package.json nicht lesbar"
      );
    }

    // 3. Basis-Verzeichnisse prüfen
    const requiredDirs = ["src", "public"];
    for (const dir of requiredDirs) {
      try {
        await fs.access(path.join(this.projectRoot, dir));
      } catch {
        this.addIssue(
          "CRITICAL",
          `${dir}/ Verzeichnis fehlt`,
          `Erforderliches Verzeichnis ${dir}/ nicht gefunden`
        );
      }
    }
  }

  /**
   * 🔍 ESSENTIELLE SEO-PROBLEME - Nur wichtige Basics
   */
  async checkEssentialSEO() {
    console.log("🔍 Prüfe essentielle SEO-Probleme...");

    // 1. Robots.txt prüfen
    try {
      const robotsPath = path.join(this.projectRoot, "public", "robots.txt");
      const robots = await fs.readFile(robotsPath, "utf-8");

      if (robots.includes("Disallow: /") && !robots.includes("Allow:")) {
        this.addIssue(
          "CRITICAL",
          "Robots.txt blockiert Website",
          "Komplette Website wird von Suchmaschinen blockiert"
        );
      }
    } catch {
      this.addIssue(
        "IMPORTANT",
        "Robots.txt fehlt",
        "Keine robots.txt für SEO gefunden"
      );
    }

    // 2. Basis-SEO in Hauptseiten prüfen
    await this.checkMainPagesSEO();
  }

  /**
   * 📄 HAUPT-SEITEN SEO prüfen
   */
  async checkMainPagesSEO() {
    const mainPages = ["index.astro"];
    const pagesDir = path.join(this.projectRoot, "src", "pages");

    for (const page of mainPages) {
      try {
        const pagePath = path.join(pagesDir, page);
        const content = await fs.readFile(pagePath, "utf-8");

        // Title-Tag prüfen (Astro-Pattern berücksichtigen)
        const hasTitle =
          content.includes("<title>") ||
          content.includes("title:") ||
          content.includes("const title =") ||
          content.includes("title={title}");

        if (!hasTitle) {
          this.addIssue(
            "CRITICAL",
            `${page} fehlt Title`,
            "Keine Title-Tag für SEO gefunden"
          );
        }

        // Meta Description prüfen
        if (
          !content.includes("description") &&
          !content.includes('meta name="description"')
        ) {
          this.addIssue(
            "IMPORTANT",
            `${page} fehlt Meta Description`,
            "Keine Meta-Description für SEO gefunden"
          );
        }
      } catch {
        this.addIssue(
          "CRITICAL",
          `${page} nicht gefunden`,
          `Hauptseite ${page} fehlt`
        );
      }
    }
  }

  /**
   * 📝 CONTENT-QUALITÄT prüfen (vereinfacht)
   */
  async checkContentQuality() {
    console.log("📝 Prüfe Content-Qualität...");

    try {
      const contentDir = path.join(this.projectRoot, "src", "content");

      // Blog-Content prüfen (falls vorhanden)
      try {
        const blogDir = path.join(contentDir, "blog");
        const blogFiles = await fs.readdir(blogDir);
        const mdFiles = blogFiles.filter((f) => f.endsWith(".md"));

        let shortContent = 0;
        for (const file of mdFiles) {
          const content = await fs.readFile(path.join(blogDir, file), "utf-8");
          const wordCount = this.countWords(content);

          if (wordCount < this.standards.minContentLength) {
            shortContent++;
          }
        }

        if (shortContent > 0) {
          this.addIssue(
            "OPTIMIZATION",
            `${shortContent} Blog-Posts unter ${this.standards.minContentLength} Wörtern`,
            "Kurze Inhalte haben schlechtere SEO-Performance"
          );
        }

        console.log(
          `📊 ${mdFiles.length} Blog-Posts gefunden, ${shortContent} benötigen mehr Content`
        );
      } catch {
        console.log(
          "📝 Kein Blog-Content gefunden - OK für statische Websites"
        );
      }
    } catch {
      console.log(
        "📝 Kein Content-Verzeichnis gefunden - OK für einfache Websites"
      );
    }
  }

  /**
   * 🔢 Einfache Wortzählung
   */
  countWords(text) {
    // Frontmatter entfernen
    const content = text.replace(/^---[\s\S]*?---/, "");
    // HTML-Tags entfernen
    const cleanText = content.replace(/<[^>]*>/g, " ");
    // Wörter zählen
    return cleanText.split(/\s+/).filter((word) => word.length > 0).length;
  }

  /**
   * ➕ Issue hinzufügen
   */
  addIssue(
    priority,
    title,
    description,
    solution = "Manuelle Prüfung erforderlich"
  ) {
    this.issues.push({
      priority,
      title,
      description,
      solution,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * 📊 Vereinfachter Report
   */
  async generateSimplifiedReport() {
    const timestamp = new Date().toISOString();
    const criticalIssues = this.issues.filter((i) => i.priority === "CRITICAL");
    const importantIssues = this.issues.filter(
      (i) => i.priority === "IMPORTANT"
    );
    const optimizationIssues = this.issues.filter(
      (i) => i.priority === "OPTIMIZATION"
    );

    const report = `# Simplified Build & SEO Report

**Generiert:** ${timestamp}
**Build-Checker:** Simplified v1.0.0 (Fokus auf echte Probleme)

## 📊 Executive Summary

- **Kritische Issues:** ${criticalIssues.length}
- **Wichtige Issues:** ${importantIssues.length}  
- **Optimierungen:** ${optimizationIssues.length}
- **Gesamt:** ${this.issues.length}

## 🔥 Kritische Probleme (${criticalIssues.length})

${
  criticalIssues.length > 0
    ? criticalIssues
        .map(
          (issue) => `### ❌ ${issue.title}
**Problem:** ${issue.description}
**Lösung:** ${issue.solution}
`
        )
        .join("\n")
    : "✅ Keine kritischen Probleme gefunden"
}

## ⚠️ Wichtige Probleme (${importantIssues.length})

${
  importantIssues.length > 0
    ? importantIssues
        .map(
          (issue) => `### 🟡 ${issue.title}
**Problem:** ${issue.description}
**Lösung:** ${issue.solution}
`
        )
        .join("\n")
    : "✅ Keine wichtigen Probleme gefunden"
}

## 🔧 Optimierungsmöglichkeiten (${optimizationIssues.length})

${
  optimizationIssues.length > 0
    ? optimizationIssues
        .map(
          (issue) => `### 🟢 ${issue.title}
**Problem:** ${issue.description}
**Lösung:** ${issue.solution}
`
        )
        .join("\n")
    : "✅ Keine Optimierungen erforderlich"
}

## 🚀 Deployment-Status

${
  criticalIssues.length === 0
    ? "✅ **DEPLOYMENT BEREIT** - Keine kritischen Probleme blockieren das Deployment"
    : `❌ **DEPLOYMENT BLOCKIERT** - ${criticalIssues.length} kritische Probleme müssen behoben werden`
}

## 🎯 Nächste Schritte

${
  criticalIssues.length > 0
    ? "1. **PRIORITÄT 1:** Kritische Probleme beheben\n2. **DANACH:** Build erneut testen\n3. **OPTIONAL:** Optimierungen implementieren"
    : "1. **DEPLOYMENT:** Bereit für Live-Schaltung\n2. **OPTIONAL:** Optimierungen für bessere Performance implementieren"
}

---
*Simplified Build Checker - Weniger Rauschen, mehr Wert*
*Nächster Check: Nach dem nächsten \`pnpm build\`*
`;

    // Report speichern
    const logDir = path.join(
      this.projectRoot,
      "tools",
      "build_check",
      "logfiles"
    );
    await fs.mkdir(logDir, { recursive: true });

    const reportFile = path.join(
      logDir,
      `simplified-build-check-${timestamp.replace(/[:.]/g, "-")}.md`
    );
    await fs.writeFile(reportFile, report, "utf-8");

    console.log(`📊 Simplified Report gespeichert: ${reportFile}`);

    // Kurze Konsolen-Ausgabe
    console.log("\n🎯 SIMPLIFIED BUILD SUMMARY:");
    console.log(`   🔥 Kritisch: ${criticalIssues.length}`);
    console.log(`   ⚠️  Wichtig: ${importantIssues.length}`);
    console.log(`   🔧 Optimierung: ${optimizationIssues.length}`);
    console.log(`   📊 Gesamt: ${this.issues.length}`);

    return report;
  }
}

// Ausführung
if (require.main === module) {
  const checker = new SimplifiedBuildChecker();
  checker.run().catch((error) => {
    console.error("❌ Simplified Build-Checker Failed:", error);
    process.exit(1);
  });
}

module.exports = SimplifiedBuildChecker;
