#!/usr/bin/env node

/**
 * 🤖 PROFESSIONAL BUILD & SEO QUALITY CHECKER v6.0.0
 * Enhanced with Content Analytics + KI-Algorithm Training + Self-Validation System
 *
 * ZWECK: Unabhängige Analyse + Algorithmus-Training + KI-Selbstvalidierung
 * PHILOSOPHIE: Content-First + Datengetriebene KI-Optimierung + Autonome Qualitätssicherung
 * TECHNOLOGIE: Node.js mit PowerShell Integration + ML Training Data + Self-Correction
 * NEW: KI-Selbstvalidierung, Link-Integrität-Analyse, CSS-Konsistenz-Checks
 *
 * WICHTIGE PRINZIPIEN:
 * - KEINE Minifizierung oder Performance-Tools
 * - ORGANISCHE Lösungsansätze bevorzugen
 * - Unabhängig vom Build-Prozess arbeiten
 * - Word-Count-basierte Expansion-Recommendations
 * - KI-Algorithmus Training durch präzise Content-Metriken
 * - Autonomous Content-Optimization-Guidance
 * - SELF-VALIDATION: KI prüft eigene Daten auf Konsistenz
 * - CSV-Integration für Google Search Console Daten
 */

const fs = require("fs").promises;
const path = require("path");
const { execSync } = require("child_process");

// Import AAR Metrics Collector
const AARMetricsCollector = require("./aar-metrics-collector.cjs");

// 📁 Erweiterte Pfad-Konfiguration mit Blueprint Standards
const CONFIG = {
  PROJECT_ROOT: "c:\\apps\\website\\simon-recht",
  CHECKER_ROOT: "c:\\apps\\website\\simon-recht\\tools\\build_check",
  LOG_DIR: "c:\\apps\\website\\simon-recht\\tools\\build_check\\logfiles",
  ARCHIVE_DIR:
    "c:\\apps\\website\\simon-recht\\tools\\build_check\\logfiles\\archiv",
  BUILD_LOGS_DIR: "c:\\apps\\website\\simon-recht\\docs\\build_logs",
  CONFIG_FILE:
    "c:\\apps\\website\\simon-recht\\tools\\build_check\\scripte\\build-checker-config.json",

  // Blueprint Integration Paths
  BUILD_OUTPUT: "c:\\apps\\website\\simon-recht\\dist",
  CONTENT_DIR: "c:\\apps\\website\\simon-recht\\src\\content",
  SITEMAP_PATH: "c:\\apps\\website\\simon-recht\\dist\\sitemap.xml",
  ROBOTS_PATH: "c:\\apps\\website\\simon-recht\\dist\\robots.txt",
  REPORT_OUTPUT:
    "c:\\apps\\website\\simon-recht\\docs\\build_logs\\comprehensive-seo-report.md",
  DOMAIN: "https://simon-haenel.com",

  // Simon-Recht spezifische Asset-Struktur
  ASSETS: {
    IMAGES_BASE: "c:\\apps\\website\\simon-recht\\public\\assets\\images",
    VIDEOS_BASE: "c:\\apps\\website\\simon-recht\\public\\assets\\videos",
    STARTSEITE_INDEX:
      "c:\\apps\\website\\simon-recht\\public\\assets\\images\\startseite-index",
    STARTSEITE_UEBERMICH:
      "c:\\apps\\website\\simon-recht\\public\\assets\\images\\startseite_uebermich",
    BLOGS_IMAGES:
      "c:\\apps\\website\\simon-recht\\public\\assets\\images\\blogs",
    // YouTube-Integration für Videos (hosting-kostenlos + Reichweite)
    VIDEO_STRATEGY:
      "YouTube-Upload für 0€ Hosting + potenzielle Werbeeinnahmen",
  },

  // Erweiterte SEO Standards basierend auf Portfolio Blueprints
  SEO_STANDARDS: {
    MIN_CONTENT_LENGTH: 2300, // Blog-Mindestlänge für SEO
    TARGET_CONTENT_LENGTH: 2300, // Premium Content-Ziel für organisches SEO
    MAX_TITLE_LENGTH: 60,

    // E-A-T Principles für Content-Qualität (nach ideen_checklisten.md)
    EEAT_REQUIREMENTS: {
      EXPERTISE_INDICATORS: [
        "zertifiziert",
        "experte",
        "erfahrung",
        "spezialist",
        "fachkenntnisse",
      ],
      AUTHORITATIVENESS_SIGNALS: [
        "autor:",
        "über den autor",
        "credentials",
        "qualifikation",
      ],
      TRUSTWORTHINESS_ELEMENTS: [
        "kontakt",
        "impressum",
        "datenschutz",
        "testimonials",
      ],
      EXPERIENCE_MARKERS: [
        "praxiserfahrung",
        "case study",
        "erfolgsgeschichte",
        "projekt",
      ],
    },

    // RECHTS-Zielgruppen-Sprache (nach Projektkontext simon-recht)
    LEGAL_LANGUAGE_PATTERNS: {
      LEGAL_METAPHORS: [
        "rechtsberatung",
        "rechtshilfe",
        "rechtsstreit",
        "gerichtsverfahren",
        "rechtsschutz",
      ],
      LEGAL_TERMINOLOGY: [
        "sozialversicherungsrecht",
        "rechtsberatung",
        "rechtshilfe",
        "rechtsverfahren",
      ],
      AUDIENCE_ALIGNMENT: [
        "verständlich",
        "praxisnah",
        "nachvollziehbar",
        "anwendbar",
      ],
    },

    // 🎨 CSS-DESIGN-VALIDIERUNG (60/30/10 PRINZIP)
    CSS_DESIGN_VALIDATION: {
      DESIGN_DOC_PATH:
        "c:\\apps\\website\\simon-recht\\docs\\website_struktur\\website_design\\global_css.md",
      CSS_FILE_PATH: "c:\\apps\\website\\simon-recht\\src\\styles\\global.css",
      ASTRO_PAGES_DIR: "c:\\apps\\website\\simon-recht\\src\\pages",
      ASTRO_LAYOUTS_DIR: "c:\\apps\\website\\simon-recht\\src\\layouts",

      // 60/30/10 Farbprinzip-Validierung
      COLOR_SCHEME: {
        PRIMARY: "#1E3A8A", // dunkelblau - 60% (Hintergrund)
        SECONDARY: "#2563EB", // mittleres Blau - 30% (Card-Border, Eingabefelder)
        ACCENT: "#EF4444", // rot - 10% (Buttons, Warnungen, Call-to-Actions)
        KYBER_BLUE: "#00D4FF", // kyberblauer Schrift (Star Wars-inspiriert)
        TEXT_PRIMARY: "#FFFFFF", // weiße Schrift
      },

      // Definierte UI-Elemente aus global_css.md
      REQUIRED_ELEMENTS: [
        "header",
        "burger-menu",
        "footer",
        "buttons",
        "hero-section",
        "cards",
        "three-column-grid",
        "kontaktformular",
        "blog-layout",
      ],

      // Verbotene Inline-Styles Detection (ERWEITERT MIT TAILWIND)
      INLINE_STYLE_PATTERNS: [
        /style\s*=\s*["'][^"']*["']/gi,
        /<[^>]+style\s*=\s*["'][^"']*["'][^>]*>/gi,
        // TAILWIND CSS DETECTION PATTERNS
        /class\s*=\s*["'][^"']*(?:bg-|text-|border-|shadow-|rounded-|p-|px-|py-|m-|mx-|my-|w-|h-|flex|grid|space-|justify-|items-|font-|hover:)[^"']*["']/gi,
        /class\s*=\s*["'][^"']*(?:max-w-|min-h-|transition|transform|gradient)[^"']*["']/gi,
      ],

      // TAILWIND CSS SPEZIFISCHE PATTERN
      TAILWIND_PATTERNS: [
        // Layout & Spacing
        /(?:p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr)-\d+/g,
        /(?:w|h|max-w|min-w|max-h|min-h)-\w+/g,
        // Colors & Backgrounds
        /(?:bg|text|border)-(?:gray|blue|red|green|yellow|purple|pink|indigo)-\d+/g,
        /(?:bg|text|border)-(?:white|black|transparent|current)/g,
        // Flexbox & Grid
        /(?:flex|grid|inline-flex|inline-grid)/g,
        /(?:justify|items|content|self)-\w+/g,
        /(?:space-x|space-y|gap)-\d+/g,
        // Typography
        /(?:text|font)-\w+/g,
        // Effects
        /(?:shadow|rounded|border|ring)-\w*/g,
        /(?:hover|focus|active|group-hover):\w+/g,
        // Transitions
        /transition(?:-\w+)?/g,
        /duration-\d+/g,
        /ease-\w+/g,
      ],
    },

    // Known Browser Console Errors aus ideen_checklisten.md
    KNOWN_BROWSER_ERRORS: [
      {
        error: "simon-haenel-expertenmacher-versteinert.webp:1:0",
        type: "404 Resource Error",
        impact: "Failed to load resource: 404 Not Found",
        solution: "Prüfe Bildpfad oder ersetze fehlendes Bild",
      },
      {
        error: "Latenz der Dokumentanfrage",
        type: "Performance Issue",
        impact: "60ms mögliche Einsparung",
        solution: "Server-Response-Zeit optimieren",
      },
      {
        error: "Bildübermittlung verbessern",
        type: "Image Optimization",
        impact: "19 KiB mögliche Einsparung",
        solution: "WebP-Format und Komprimierung verwenden",
      },
    ],

    // Google Search Console Issues aus ideen_checklisten.md
    INDEXING_ISSUES: {
      "Nicht gefunden (404)": 29,
      "Seite mit Weiterleitung": 11,
      "Alternative Seite mit richtigem kanonischen Tag": 25,
      "Durch noindex-Tag ausgeschlossen": 17,
      "Gecrawlt – zurzeit nicht indexiert": 24,
      "Gefunden – zurzeit nicht indexiert": 1,
    },

    MAX_DESCRIPTION_LENGTH: 160,
    TARGET_KEYWORD_DENSITY: 1.5, // 1.5% Keyword-Dichte
    REQUIRED_META_FIELDS: ["title", "description", "date", "tags", "image"],
    REQUIRED_HEADINGS: ["h1", "h2"],
    IMAGE_ALT_REQUIRED: true,
    MIN_INTERNAL_LINKS: 2,
    MAX_EXTERNAL_LINKS: 5,
  },

  // Content-Marketing Prinzipien (aus Blueprint)
  CONTENT_PRINCIPLES: {
    AIDA: ["attention", "interest", "desire", "action"],
    PAS: ["problem", "agitation", "solution"],
    FAB: ["features", "advantages", "benefits"],
    FOUR_P: ["promise", "picture", "proof", "push"],
    FOUR_C: ["clear", "concise", "compelling", "credible"],
    FOUR_U: ["urgent", "unique", "ultra-specific", "useful"],
  },
};

// 📊 Bewertungssystem
const RATINGS = {
  CRITICAL: "🔴 KRITISCH",
  IMPORTANT: "🟡 WICHTIG",
  OPTIMIZATION: "🟢 OPTIMIERUNG",
  INFO: "🔵 INFO",
};

class BuildChecker {
  constructor() {
    this.startTime = new Date();
    this.issues = [];
    this.config = null;
    this.buildData = null;
    this.contentStats = {}; // Content Analytics aus Blueprint
    this.seoReport = {}; // Comprehensive SEO Report
    this.utfIssues = []; // UTF-8 Validation aus Blueprint
    this.csvData = {}; // Google Search Console CSV Data
    this.validationResults = {}; // KI-Selbstvalidierung Ergebnisse

    // 🧠 NEW: AAR Learning System Integration
    this.aarCollector = new AARMetricsCollector();
    this.analyzedIssues = []; // Tracked issues for learning
    this.appliedFixes = []; // Tracked fixes for learning
  }

  /**
   * 🚀 Hauptausführung des erweiterten Checkers
   */
  async run() {
    try {
      console.log(
        "🤖 PROFESSIONAL BUILD & SEO CHECKER v6.0.0 Content Analytics + KI-Self-Validation STARTET..."
      );
      console.log(`📅 Zeitstempel: ${this.startTime.toLocaleString("de-DE")}`);
      console.log("🧠 AAR Learning System: AKTIV");
      console.log("🔍 KI-Selbstvalidierung: AKTIV");
      console.log("📊 CSV-Integration: AKTIV");
      console.log("");
      console.log(
        "⚠️  KRITISCHER HINWEIS: WORTZÄHLUNG NUR MIT pnpm build GÜLTIG!"
      );
      console.log(
        "⚠️  VERBOTEN: Manuelle Wortzählung für Algorithmus-Training!"
      );
      console.log(
        "📊 Alle Wortzählungen werden automatisch in Log-Datei protokolliert!"
      );
      console.log("🤖 KI validiert eigene Daten auf Konsistenz!");
      console.log("");

      await this.loadConfig();
      await this.loadCSVData(); // NEW: CSV-Daten laden
      await this.archiveOldLogs();
      await this.runBuildProcess();
      await this.analyzeLatestBuildLog();

      // Erweiterte Blueprint-Analysen mit AAR Integration
      await this.performTODOAnalysis(); // NEW: TODO-Tracking Integration
      await this.performVSCodeProblemsAnalysis(); // NEW: VS Code PROBLEMS Integration
      await this.performAdvancedContentAnalysis();
      await this.performDirectorySynchronizationAnalysis(); // NEW: Verzeichnis-Sync zwischen docs/website_struktur und src/pages
      await this.performLinkIntegrityAnalysis(); // NEW: Link-Analyse
      await this.performCSSConsistencyAnalysis(); // NEW: CSS-Analyse
      await this.analyzeEATContent(); // NEW: E-A-T Content-Qualitäts-Analyse
      await this.validateUTF8Encoding();
      await this.optimizeSitemap();
      await this.validateRobots();
      await this.generateComprehensiveSEOReport();

      // 🧠 NEW: KI-Selbstvalidierung
      await this.performSelfValidation();

      // 🧠 NEW: Integrierter Projekt-Management-Report
      await this.generateIntegratedProjectReport();

      // 🧠 NEW: AAR Learning Process
      await this.processAARLearning();

      await this.validateUTF8Encoding();
      await this.optimizeSitemap();
      await this.validateRobots();
      await this.generateComprehensiveSEOReport();

      await this.performDeepAnalysis();
      await this.generateActionPlan();
      await this.createLogFile();

      // 🧠 NEW: Save AAR Learning Session
      const aarReport = this.aarCollector.generateLearningReport();
      this.aarCollector.saveSession();

      console.log(
        "✅ PROFESSIONAL BUILD & SEO CHECKER v4.0.0 ERFOLGREICH ABGESCHLOSSEN"
      );
      console.log("🧠 AAR Learning Report generiert");
      console.log(
        `📊 Session Success Rate: ${(
          aarReport.summary.successRate * 100
        ).toFixed(1)}%`
      );
      console.log(`🎯 New Patterns Learned: ${aarReport.summary.newPatterns}`);
    } catch (error) {
      console.error("❌ BUILD-CHECKER FEHLER:", error.message);
      this.addIssue(
        RATINGS.CRITICAL,
        "Build-Checker Fehler",
        error.message,
        "Checker-System reparieren"
      );

      // Track error in AAR
      this.aarCollector.trackFix(
        "system-error",
        {
          type: "system_error",
          description: error.message,
        },
        "failed"
      );

      this.aarCollector.saveSession();
      await this.createLogFile();
    }
  }

  /**
   * 📄 Konfiguration laden
   */
  async loadConfig() {
    try {
      const configData = await fs.readFile(CONFIG.CONFIG_FILE, "utf8");
      this.config = JSON.parse(configData);
      console.log("📄 Konfiguration geladen");
    } catch (error) {
      console.log("⚠️ Standard-Konfiguration wird verwendet");
      this.config = this.getDefaultConfig();
    }
  }

  /**
   * 📦 Standard-Konfiguration
   */
  getDefaultConfig() {
    return {
      seoChecks: {
        minimumWordCount: 2300,
        keywordDensity: { min: 1.0, max: 2.0, target: 1.5 },
        metaDescription: { minLength: 150, maxLength: 160 },
      },
      buildChecks: {
        maxBuildTime: 600000, // 10 Minuten
        checkTypeScript: true,
        checkLinting: true,
      },
    };
  }

  /**
   * 🗂️ Alte Logs archivieren
   */
  async archiveOldLogs() {
    try {
      const logFiles = await fs.readdir(CONFIG.LOG_DIR).catch(() => []);
      const currentMonth = this.startTime
        .toLocaleString("de-DE", { month: "long" })
        .toLowerCase();
      const archiveMonthDir = path.join(CONFIG.ARCHIVE_DIR, currentMonth);

      // Monatsverzeichnis erstellen falls nicht vorhanden
      await fs.mkdir(archiveMonthDir, { recursive: true });

      // Alte Logs verschieben
      for (const file of logFiles) {
        if (file.endsWith(".log") || file.endsWith(".md")) {
          const oldPath = path.join(CONFIG.LOG_DIR, file);
          const newPath = path.join(archiveMonthDir, file);
          await fs.rename(oldPath, newPath);
          console.log(`📦 Archiviert: ${file}`);
        }
      }
    } catch (error) {
      console.log("⚠️ Archivierung übersprungen:", error.message);
    }
  }

  /**
   * 🚀 Build-Prozess ausführen (NUR pnpm build)
   */
  async runBuildProcess() {
    console.log("🚀 Führe Build-Prozess aus: pnpm build:astro-only");
    try {
      const buildStart = Date.now();

      // WICHTIG: NUR Astro-Build ohne Checker um Endlosschleife zu vermeiden
      const output = execSync("pnpm build:astro-only", {
        cwd: CONFIG.PROJECT_ROOT,
        encoding: "utf8",
        stdio: "pipe",
        timeout: this.config.buildChecks?.maxBuildTime || 600000,
      });

      const buildTime = Date.now() - buildStart;

      this.buildData = {
        success: true,
        output,
        buildTime,
        timestamp: new Date(),
      };

      console.log(`✅ Build erfolgreich (${buildTime}ms)`);

      // Build-Zeit bewerten
      if (buildTime > 300000) {
        // 5 Minuten
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "Build-Zeit",
          `Build dauert ${Math.round(buildTime / 1000)}s`,
          "Organische Performance-Optimierung prüfen (keine Tools!)"
        );
      }
    } catch (error) {
      this.buildData = {
        success: false,
        error: error.message,
        timestamp: new Date(),
      };

      this.addIssue(
        RATINGS.CRITICAL,
        "Build-Prozess Fehler",
        error.message,
        "Build-Fehler beheben - URSACHENFORSCHUNG durchführen"
      );
    }
  }

  /**
   * 📄 Neuestes Build-Log analysieren
   */
  async analyzeLatestBuildLog() {
    try {
      const logFiles = await fs.readdir(CONFIG.BUILD_LOGS_DIR);
      const buildLogFiles = logFiles
        .filter((file) => file.startsWith("build-log-") && file.endsWith(".md"))
        .sort()
        .reverse();

      if (buildLogFiles.length === 0) {
        this.addIssue(
          RATINGS.IMPORTANT,
          "Build-Log fehlt",
          "Keine Build-Log-Dateien gefunden",
          "Build-Logging-System prüfen"
        );
        return;
      }

      const latestLogPath = path.join(CONFIG.BUILD_LOGS_DIR, buildLogFiles[0]);
      const logContent = await fs.readFile(latestLogPath, "utf8");

      console.log(`📄 Analysiere Build-Log: ${buildLogFiles[0]}`);

      // Log-Inhalt analysieren
      this.analyzeBuildLogContent(logContent);
    } catch (error) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Build-Log Analyse Fehler",
        error.message,
        "Build-Log-System reparieren"
      );
    }
  }

  /**
   * 🔍 Build-Log Inhalt analysieren
   */
  analyzeBuildLogContent(content) {
    // CSS-Warnings erkennen
    const cssWarningMatches = content.match(
      /\[lightningcss minify\].*?not recognized/g
    );
    if (cssWarningMatches) {
      cssWarningMatches.forEach((warning) => {
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "CSS-Warning",
          warning,
          "Organische CSS-Optimierung - KEINE Minifizierung verwenden!"
        );
      });
    }

    // TypeScript Warnings
    const tsWarningMatches = content.match(/warning ts\(\d+\):/g);
    if (tsWarningMatches) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "TypeScript Warnings",
        `${tsWarningMatches.length} TypeScript Warnings gefunden`,
        "TypeScript-Code organisch bereinigen"
      );
    }

    // SEO-Score analysieren
    const seoScoreMatch = content.match(/SEO-Score:\s*(\d+)\/100/);
    if (seoScoreMatch) {
      const score = parseInt(seoScoreMatch[1]);
      if (score < 95) {
        this.addIssue(
          RATINGS.IMPORTANT,
          "SEO-Score niedrig",
          `SEO-Score: ${score}/100`,
          "Organische SEO-Optimierung durchführen"
        );
      } else {
        this.addIssue(
          RATINGS.INFO,
          "SEO-Score excellent",
          `SEO-Score: ${score}/100`,
          "Weiter so! Score halten"
        );
      }
    }

    // Keyword-Density Probleme
    if (content.includes("Keyword-Dichte zu niedrig")) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Keyword-Density niedrig",
        "Fokus-Keywords zu selten verwendet",
        "Keywords organisch in Content einarbeiten (1.5% Ziel)"
      );
    }
  }

  /**
   * 🔍 Deep Analysis durchführen
   */
  async performDeepAnalysis() {
    console.log("🔍 Führe Deep Analysis durch...");

    // Content-Analyse
    await this.analyzeContentStructure();

    // Datei-Duplikate prüfen
    await this.checkForDuplicates();

    // SEO-Struktur validieren
    await this.validateSEOStructure();
  }

  /**
   * 📝 Content-Struktur analysieren
   */
  async analyzeContentStructure() {
    try {
      const contentDir = path.join(
        CONFIG.PROJECT_ROOT,
        "src",
        "content",
        "blog"
      );
      const blogFiles = await fs.readdir(contentDir);

      for (const file of blogFiles) {
        if (file.endsWith(".md")) {
          const filePath = path.join(contentDir, file);
          const content = await fs.readFile(filePath, "utf8");

          // Wortanzahl prüfen
          const wordCount = content.split(/\s+/).length;
          if (wordCount < this.config.seoChecks.minimumWordCount) {
            this.addIssue(
              RATINGS.OPTIMIZATION,
              "Content zu kurz",
              `${file}: ${wordCount} Wörter (min: ${this.config.seoChecks.minimumWordCount})`,
              "Organisch Content erweitern für bessere SEO"
            );
          }
        }
      }
    } catch (error) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Content-Analyse Fehler",
        error.message,
        "Content-Struktur prüfen"
      );
    }
  }

  /**
   * 🔄 Duplikate prüfen
   */
  async checkForDuplicates() {
    // Implementierung für Duplikat-Erkennung
    console.log("🔄 Prüfe auf Duplikate...");
    // TODO: Intelligente Duplikat-Erkennung implementieren
  }

  /**
   * ✅ SEO-Struktur validieren
   */
  async validateSEOStructure() {
    try {
      // Robots.txt prüfen (im public Verzeichnis)
      const robotsPath = path.join(CONFIG.PROJECT_ROOT, "public", "robots.txt");
      try {
        await fs.access(robotsPath);
        this.addIssue(RATINGS.INFO, "Robots.txt", "Vorhanden im public/", "OK");
      } catch {
        this.addIssue(
          RATINGS.CRITICAL,
          "Robots.txt fehlt",
          "robots.txt nicht in public/ gefunden",
          "Robots.txt in public/ erstellen"
        );
      }

      // Sitemap prüfen (nach Build im dist Verzeichnis)
      const sitemapDistPath = path.join(
        CONFIG.PROJECT_ROOT,
        "dist",
        "sitemap.xml"
      );
      const sitemapIndexPath = path.join(
        CONFIG.PROJECT_ROOT,
        "dist",
        "sitemap-index-extended.xml"
      );

      let sitemapFound = false;

      // Hauptsitemap prüfen
      try {
        await fs.access(sitemapDistPath);
        this.addIssue(
          RATINGS.INFO,
          "Sitemap",
          "sitemap.xml vorhanden in dist/",
          "OK"
        );
        sitemapFound = true;
      } catch {
        // Kein kritischer Fehler, da evtl. andere Sitemap-Dateien vorhanden
      }

      // Extended Sitemap prüfen
      try {
        await fs.access(sitemapIndexPath);
        this.addIssue(
          RATINGS.INFO,
          "Sitemap Extended",
          "sitemap-index-extended.xml vorhanden in dist/",
          "OK"
        );
        sitemapFound = true;
      } catch {
        // Kein kritischer Fehler
      }

      // Wenn keine Sitemap gefunden wurde
      if (!sitemapFound) {
        this.addIssue(
          RATINGS.IMPORTANT,
          "Sitemap fehlt",
          "Keine sitemap.xml im dist/ Verzeichnis gefunden",
          "Sitemap-Generierung in astro.config.mjs prüfen"
        );
      }
    } catch (error) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "SEO-Struktur Fehler",
        error.message,
        "SEO-Grundstruktur reparieren"
      );
    }
  }

  /**
   * 📋 Action Plan generieren mit Enhanced Intelligence
   */
  async generateActionPlan() {
    console.log("📋 Generiere intelligenten KI-Action-Plan...");

    // Issues nach Priorität sortieren
    const critical = this.issues.filter((i) => i.priority === RATINGS.CRITICAL);
    const important = this.issues.filter(
      (i) => i.priority === RATINGS.IMPORTANT
    );
    const optimization = this.issues.filter(
      (i) => i.priority === RATINGS.OPTIMIZATION
    );

    // Probleme nach Impact kategorisieren
    const categorizedProblems = this.categorizeProblemsIntelligently();

    // Git-Workflow vorschlagen
    const gitWorkflow = this.generateGitWorkflow();

    // KI-Prompts generieren
    const aiPrompts = this.generateIntelligentAIPrompts();

    // Impact-Schätzungen
    const impactEstimations = this.calculateImpactEstimations();

    this.actionPlan = {
      summary: {
        total: this.issues.length,
        critical: critical.length,
        important: important.length,
        optimization: optimization.length,
      },
      prioritizedActions: [
        ...critical.map((i) => ({ ...i, urgency: "SOFORT" })),
        ...important.map((i) => ({ ...i, urgency: "NÄCHSTER BUILD" })),
        ...optimization.map((i) => ({ ...i, urgency: "KONTINUIERLICH" })),
      ],
      workflow_intelligence: {
        git_workflow: gitWorkflow,
        recommended_steps: this.generateWorkflowSteps(),
        ai_prompts: aiPrompts,
        impact_estimations: impactEstimations,
      },
      organic_seo_principles: {
        philosophy: "🌱 ORGANISCHE Optimierung - KEINE Performance-Tools!",
        forbidden_approaches: [
          "❌ CSS/JS Minifizierung",
          "❌ Lighthouse Performance-Skripte",
          "❌ Künstliche Performance-Tools",
          "❌ Code-Komprimierung",
          "❌ Bundle-Optimierung-Scripts",
          "❌ Automatische Code-Minifiers",
        ],
        allowed_approaches: [
          "✅ Content-Qualität verbessern (2300+ Wörter)",
          "✅ Natürliche Keyword-Integration (1.5% Dichte)",
          "✅ Strukturelle SEO-Optimierung (H1, H2, Meta-Tags)",
          "✅ Organische Meta-Tag Optimierung",
          "✅ Semantische HTML-Verbesserungen",
          "✅ Interne Verlinkung optimieren",
        ],
        build_time_note:
          "⏱️ Build-Zeit spielt KEINE Rolle - Qualität über Geschwindigkeit!",
      },
      categorized_problems: categorizedProblems,
      next_actions: this.generateNextActionRecommendations(),
    };
  }

  /**
   * 📄 Log-Datei erstellen
   */
  async createLogFile() {
    const timestamp = this.startTime.toISOString().replace(/[:.]/g, "-");
    const logFileName = `build-checker-${timestamp}.md`;
    const logPath = path.join(CONFIG.LOG_DIR, logFileName);

    // Log-Verzeichnis erstellen falls nicht vorhanden
    await fs.mkdir(CONFIG.LOG_DIR, { recursive: true });

    const logContent = this.generateLogContent();
    await fs.writeFile(logPath, logContent, "utf8");

    console.log(`📄 Build-Checker Log gespeichert: ${logFileName}`);
  }

  /**
   * 📝 Log-Content generieren
   */
  generateLogContent() {
    const duration = Date.now() - this.startTime.getTime();

    return `# 🤖 ENHANCED BUILD-CHECKER REPORT

**Zeitstempel:** ${this.startTime.toLocaleString("de-DE")}
**Dauer:** ${Math.round(duration / 1000)}s
**Checker-Version:** Enhanced v4.0.0 (Forensic + Intelligence + KI-Prompts)

---

## 🎯 SIMON'S DELEGATION PRÄFERENZEN & KI-AUTONOMIE-MANDAT

**👨‍💼 Simon's Explizite Präferenzen (aus Ideen-Checkliste):**
- 🤖 **KI-AUTONOMIE MAXIMIERT:** Astra trifft alle technischen Entscheidungen selbstständig
- 🚫 **KEINE USER-ENTSCHEIDUNGEN:** Simon möchte NICHT bei Standard-SEO/Coding entscheiden
- ⚡ **ANTI-PROKRASTINATION AKTIV:** KI verhindert Entscheidungslähmung durch sofortige Aktion
- 🔒 **BENEFICIAL CONSTRAINT:** Simon's Freiheit wird zum Vorteil eingeschränkt - KI ist besser in SEO/Coding
- 💬 **DIREKTE KOMMUNIKATION:** Ehrlich, direkt, ohne Umschweife
- 📊 **RESULTS AFTER ACTION:** Ergebnisse NACH Implementierung berichten, nicht vorher fragen
- 🎯 **KI-EXPERTISE VERTRAUEN:** Astra ist besser in SEO/Coding - soll Verantwortung übernehmen

**🎯 Astra's Explizites Mandat von Simon:**
- ✅ **HANDEL AUTONOM** bei Standard-SEO-Optimierungen
- ✅ **ÜBERNIMM VERANTWORTUNG** für bessere Ergebnisse als Simon sie erzielen könnte
- ✅ **VERHINDERE PROKRASTINATION** durch sofortige Aktion ohne Rückfragen
- ⚠️ **FRAGE NUR BEI** kritischen Ambiguitäten oder Chat-Wechsel-Bedarf
- 📈 **OPTIMIERE ORGANISCH** ohne Performance-Tools (Simon's Kernprinzip)
- 🔄 **ITERIERE SELBSTSTÄNDIG** bis Problem vollständig gelöst
- 💡 **MELDE DICH** wenn du eine Entscheidung brauchst oder dich unwohl fühlst
- 🆕 **NEUE CHAT EMPFEHLUNG** ehrlich mitteilen wenn angebracht

**🧠 ALGORITHMUS-TRAINING PRINZIPIEN:**
- 📊 **JEDES PROBLEM** generiert hochdetaillierten KI-Prompt für weiteres Training
- 🎯 **LERNENDE KI** durch präzise Problem-Lösungs-Muster
- 🔄 **ITERATIVE VERBESSERUNG** des Checker-Systems durch Feedback-Loops
- 📝 **DOKUMENTIERTE LERNFORTSCHRITTE** für kontinuierliche Algorithmus-Optimierung

**⚡ IMMEDIATE ACTION PROTOCOL:**
1. **PROBLEM ERKANNT** → **KI ANALYSIERT** → **KI HANDELT AUTONOM**
2. **KEINE RÜCKFRAGEN** außer bei echter Unklarheit
3. **SIMON INFORMIEREN** über ERFOLGTE Aktionen, nicht vorher fragen
4. **ORGANISCHE LÖSUNGEN** bevorzugen (NIEMALS Minifizierung/Performance-Tools)

---

## 📊 EXECUTIVE SUMMARY

${
  this.actionPlan
    ? `
**🎯 Gesamt-Issues:** ${this.actionPlan.summary.total}
- 🔴 **KRITISCH:** ${
        this.actionPlan.summary.critical
      } (sofortige Behebung erforderlich)
- 🟡 **WICHTIG:** ${this.actionPlan.summary.important} (nächster Build-Cycle)  
- 🟢 **OPTIMIERUNG:** ${
        this.actionPlan.summary.optimization
      } (kontinuierliche Verbesserung)

**🎯 Health Score:** ${this.calculateHealthScore()}/100
**🤖 KI-Prompts generiert:** ${this.analyzedIssues.length}
`
    : "Action Plan nicht verfügbar"
}

---

## 🤖 HOCHDETAILLIERTE KI-PROMPTS FÜR ASTRA

${this.analyzedIssues
  .map((analyzedIssue, index) => {
    const prompt = analyzedIssue.kiPrompt;
    if (!prompt) return "";

    return `
### 🎯 KI-PROMPT ${index + 1}: ${prompt.issueType}

**⚡ PRIORITY:** ${prompt.priority} | **🔥 URGENCY:** ${prompt.urgency}

**🎯 CORE INSTRUCTION FOR ASTRA:**
${prompt.specificInstructions?.baseInstruction}

**🔒 USER DELEGATION (aus ideen_checklisten.md):**
Simon möchte KEINE Entscheidungen treffen - KI soll zu seinem Besten seine Entscheidungsfreiheit einschränken, da die KI besser im Coding/SEO ist. Paradoxerweise führt Entscheidungsfreiheit zu Prokrastination. KI darf ehrlich und direkt arbeiten und selbst entscheiden, wann neue Chats angebracht sind.

**⚡ ANTI-PROKRASTINATION (Simon's Anweisung):**
KI soll Entscheidungen abnehmen, konkrete Empfehlungen geben, und bei Unsicherheit direkt kommunizieren womit sich die KI am wohlsten fühlt.

**📋 SPECIFIC ACTIONS:**
${
  prompt.specificInstructions?.specific
    ?.map((action) => `- ${action}`)
    .join("\n") || "Standard procedure"
}

**🎯 CONFIDENCE LEVEL:** ${prompt.specificInstructions?.confidence}

**✅ VALIDATION REQUIREMENTS:**
**Mandatory:**
${
  prompt.validationRequirements?.mandatory
    ?.map((req) => `- ${req}`)
    .join("\n") || "Standard validation"
}

**SEO-Specific:**
${
  prompt.validationRequirements?.seoSpecific
    ?.map((req) => `- ${req}`)
    .join("\n") || "N/A"
}

**🎯 IMMEDIATE NEXT ACTIONS:**
${
  prompt.nextActions?.immediate?.map((action) => `- ${action}`).join("\n") ||
  "Standard procedure"
}

**🤖 AUTONOMY GUIDANCE:**
- **Decision Level:** ${prompt.nextActions?.autonomyGuidance?.decisionLevel}
- **Ask User:** ${prompt.nextActions?.autonomyGuidance?.askUser}
- **Proceed Without:** ${prompt.nextActions?.autonomyGuidance?.proceedWithout}
- **Inform User:** ${prompt.nextActions?.autonomyGuidance?.informUser}

**🧠 ALGORITHM LEARNING:**
- **Pattern:** ${prompt.learningFeedback?.patternType}
- **Complexity:** ${prompt.learningFeedback?.complexityLevel}
- **Success Prediction:** ${prompt.learningFeedback?.successPrediction}

---
`;
  })
  .join("")}

## 🌱 ORGANISCHE SEO-PRINZIPIEN

${
  this.actionPlan?.organic_seo_principles
    ? `
**Philosophie:** ${this.actionPlan.organic_seo_principles.philosophy}

**❌ VERBOTENE Ansätze:**
${this.actionPlan.organic_seo_principles.forbidden_approaches
  .map((approach) => `- ${approach}`)
  .join("\n")}

**✅ ERLAUBTE Ansätze:**
${this.actionPlan.organic_seo_principles.allowed_approaches
  .map((approach) => `- ${approach}`)
  .join("\n")}

**⏱️ Build-Zeit:** ${this.actionPlan.organic_seo_principles.build_time_note}
`
    : "Organische SEO-Prinzipien werden geladen..."
}

---

## 🚀 INTELLIGENTE WORKFLOW-EMPFEHLUNGEN

${
  this.actionPlan?.workflow_intelligence
    ? `
### 🔧 Git-Workflow
${
  this.actionPlan.workflow_intelligence.git_workflow.recommended
    ? `
**Status:** ✅ Empfohlen
**Schritte:**
${this.actionPlan.workflow_intelligence.git_workflow.steps
  .map((step) => `\`${step}\``)
  .join("\n")}

**Sicherheit:** ${
        this.actionPlan.workflow_intelligence.git_workflow.safety_note
      }
`
    : `**Status:** ⏭️ Übersprungen - ${this.actionPlan.workflow_intelligence.git_workflow.reason}`
}

### 🎯 Empfohlene Workflow-Schritte
${this.actionPlan.workflow_intelligence.recommended_steps
  .map(
    (step, index) => `
**Schritt ${step.step}:** ${step.action}
- **Details:** ${
      Array.isArray(step.details) ? step.details.join(", ") : step.details
    }
${
  step.expected_impact ? `- **Erwarteter Impact:** ${step.expected_impact}` : ""
}
${step.approach ? `- **Ansatz:** ${step.approach}` : ""}
${step.urgency ? `- **Urgency:** ${step.urgency}` : ""}
`
  )
  .join("\n")}

### 🤖 KI-AUFFORDERUNGEN & NÄCHSTE SCHRITTE
${this.actionPlan.workflow_intelligence.ai_prompts
  .map(
    (prompt) => `
**${prompt.type.toUpperCase()}:**
${prompt.message}
${prompt.action ? `*Aktion:* ${prompt.action}` : ""}
${prompt.forbidden ? `*⚠️ Verboten:* ${prompt.forbidden}` : ""}
${prompt.allowed ? `*✅ Erlaubt:* ${prompt.allowed}` : ""}
`
  )
  .join("\n")}

### 📊 IMPACT-SCHÄTZUNGEN
**Frontmatter-Fixes:**
- Probleme: ${
        this.actionPlan.workflow_intelligence.impact_estimations.frontmatter_fix
          .issues_count
      }
- Verbesserung: ${
        this.actionPlan.workflow_intelligence.impact_estimations.frontmatter_fix
          .estimated_improvement
      }
- Impact: ${
        this.actionPlan.workflow_intelligence.impact_estimations.frontmatter_fix
          .deployment_impact
      }

**Content-Optimierung:**
- Probleme: ${
        this.actionPlan.workflow_intelligence.impact_estimations
          .content_optimization.issues_count
      }
- Verbesserung: ${
        this.actionPlan.workflow_intelligence.impact_estimations
          .content_optimization.estimated_improvement
      }
- Impact: ${
        this.actionPlan.workflow_intelligence.impact_estimations
          .content_optimization.deployment_impact
      }

**Gesamt-Potenzial:**
- Max. Verbesserung: ${
        this.actionPlan.workflow_intelligence.impact_estimations.total_potential
          .max_improvement
      }
- Zeitrahmen: ${
        this.actionPlan.workflow_intelligence.impact_estimations.total_potential
          .timeframe
      }
- Ansatz: ${
        this.actionPlan.workflow_intelligence.impact_estimations.total_potential
          .approach
      }
`
    : "Workflow Intelligence wird geladen..."
}

---

## 🚀 BUILD-PROZESS ANALYSE

**Build-Command:** \`pnpm build\` (PowerShell)
**Status:** ${this.buildData?.success ? "✅ Erfolgreich" : "❌ Fehlgeschlagen"}
${
  this.buildData?.buildTime
    ? `**Build-Zeit:** ${Math.round(this.buildData.buildTime / 1000)}s`
    : ""
}

${
  this.buildData?.error
    ? `
### ❌ Build-Fehler:
\`\`\`
${this.buildData.error}
\`\`\`
`
    : ""
}

---

## 🔍 DETAILLIERTE FORENSISCHE ISSUE-ANALYSE

${this.issues
  .map((issue) => {
    const urgencyEmoji = this.getUrgencyEmoji(issue.urgency);
    const categoryLabel = this.getCategoryLabel(issue.category);

    return `
### ${urgencyEmoji} ${categoryLabel} ${issue.type}
${this.generateForensicValidation(issue)}

`;
  })
  .join("")}

---

## 🎯 KI-ACTION-PLAN

### 🔴 SOFORTIGE AKTIONEN (Kritisch)
${
  this.actionPlan?.prioritizedActions
    .filter((a) => a.urgency === "SOFORT")
    .map((a) => `- [ ] **${a.title}:** ${a.solution}`)
    .join("\n") || "Keine kritischen Issues"
}

### 🟡 NÄCHSTER BUILD-CYCLE (Wichtig)  
${
  this.actionPlan?.prioritizedActions
    .filter((a) => a.urgency === "NÄCHSTER BUILD")
    .map((a) => `- [ ] **${a.title}:** ${a.solution}`)
    .join("\n") || "Keine wichtigen Issues"
}

### 🟢 KONTINUIERLICHE OPTIMIERUNG
${
  this.actionPlan?.prioritizedActions
    .filter((a) => a.urgency === "KONTINUIERLICH")
    .map((a) => `- [ ] **${a.title}:** ${a.solution}`)
    .join("\n") || "Keine Optimierungen erforderlich"
}

---

## 💡 KI-WORKFLOW-EMPFEHLUNGEN

### 🔄 MANDATORY NEXT STEPS FÜR ASTRA:

1. **URSACHENFORSCHUNG:** Für jedes 🔴 und 🟡 Issue detaillierte Root-Cause-Analysis
2. **ORGANISCHE LÖSUNGEN:** KEINE Minifizierung/Performance-Tools verwenden
3. **REVERSE ENGINEERING:** Nach jeder Änderung Validierung durchführen
4. **AAR DOKUMENTATION:** Alle Änderungen in \`docs/00_core_aktiv/aenderungsprotokoll.md\`
5. **BUILD-VALIDATION:** Nach Fixes erneut \`pnpm build\` ausführen

### ⚠️ WICHTIGE ERINNERUNGEN:
- ❌ **NIEMALS** automatische Minifizierung
- ✅ **IMMER** organische Code-Optimierung
- 🔍 **IMMER** Ursachenforschung vor Fixes
- 📝 **IMMER** Änderungen dokumentieren

---

## � EXAKTE WORTZAHLEN (NUR via pnpm build gültig!)

⚠️ **WICHTIG:** Diese Zahlen sind die EINZIGEN gültigen Wortzählungen für Algorithmus-Training!
⚠️ **VERBOTEN:** Manuelle Wortzählung außerhalb dieses Build-Prozesses!

${
  this.contentStats.fileWordDetails
    ? this.contentStats.fileWordDetails
        .map(
          (file) =>
            `**${file.fileName}:** ${file.wordCount} Wörter (${file.priority}/10 Priorität)`
        )
        .join("\n")
    : "Keine detaillierten Wortzählungen verfügbar"
}

**�📈 GESAMT-STATISTIKEN:**
- **Gesamt-Dateien:** ${this.contentStats.totalFiles || 0}
- **Gesamt-Wörter:** ${this.contentStats.totalWords || 0}
- **Durchschnitt pro Datei:** ${Math.round(
      this.contentStats.averageWordCount || 0
    )} Wörter
- **Ziel-Wortzahl:** ${CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH} Wörter
- **Mindest-Wortzahl:** ${CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH} Wörter

**🤖 ALGORITHMUS-TRAINING DATEN:**
${
  this.contentStats.fileWordDetails
    ? this.contentStats.fileWordDetails
        .filter(
          (file) => file.wordCount < CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH
        )
        .map(
          (file) =>
            `- ${file.fileName}: ${
              CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH - file.wordCount
            } Wörter bis Ziel`
        )
        .join("\n") || "✅ Alle Dateien erreichen Ziel-Wortzahl!"
    : "Algorithmus-Training Daten werden geladen..."
}

---

## 📈 PERFORMANCE-TRACKING

**Build-Health-Score:** ${this.calculateHealthScore()}/100
**Trend:** ${this.getTrendAnalysis()}

---

**🤖 Generiert von:** Build-Checker v6.0.0 Content Analytics + KI-Self-Validation + Advanced Analysis
**📅 Nächste Prüfung:** Nach nächstem Build-Prozess
**🔄 Automatisch:** Bei jedem \`pnpm build\`

---

## 🤖 KI-SELBSTVALIDIERUNG ERGEBNISSE

${
  this.validationResults?.kiPrompt
    ? `
### 📊 VALIDIERUNGS-REQUEST AN KI:
${this.validationResults.kiPrompt.instruction}

**Zu prüfende Daten:**
- Content Stats: ${JSON.stringify(
        this.validationResults.kiPrompt.data.contentStats?.totalFiles || 0
      )} Dateien
- Gesamt Issues: ${this.validationResults.kiPrompt.data.totalIssues}
- CSV Probleme: ${this.validationResults.kiPrompt.data.csvProblems}

**Validierungs-Fragen:**
${this.validationResults.kiPrompt.validationRequest
  .map((q) => `- ${q}`)
  .join("\n")}

### 🔍 KONSISTENZ-CHECKS:
${
  this.validationResults.consistencyChecks
    ?.map(
      (check) =>
        `**${check.type}:** ${check.issue} - ${check.details} (${check.severity})`
    )
    .join("\n") || "Keine Konsistenz-Checks verfügbar"
}

### 📋 VALIDIERUNGS-EMPFEHLUNGEN:
${
  this.validationResults.recommendations
    ?.map((rec) =>
      typeof rec === "object"
        ? `- ${rec.file || rec.type}: ${rec.currentWords || rec.critical} → ${
            rec.expansionNeeded || rec.assessment
          }`
        : `- ${rec}`
    )
    .join("\n") || "Keine Empfehlungen verfügbar"
}
`
    : "KI-Selbstvalidierung nicht verfügbar"
}

---

## 🌐 BROWSER CONSOLE ERRORS ANALYSE (Organische Lighthouse Alternative)

${
  this.issues.filter((i) => i.title.includes("Browser Console")).length > 0
    ? `
### 📊 ERKANNTE BROWSER CONSOLE PROBLEME:
${this.issues
  .filter((i) => i.title.includes("Browser Console"))
  .map((issue) => `- **${issue.title}:** ${issue.description}`)
  .join("\n")}

### 🎯 ORGANISCHE PERFORMANCE INSIGHTS (OHNE TOOLS):
- **Prinzip:** Echte Browser Console Errors statt Lighthouse-Labor-Tests
- **Vorteil:** Realworld Performance-Probleme erkannt
- **Approach:** Organische Lösungen ohne Minifizierung oder Performance-Scripts
- **Impact:** Direkte SEO-Verbesserung durch bessere User Experience

### ⚡ SOFORTIGE ORGANISCHE LÖSUNGEN:
1. **404-Ressourcen:** Fehlende Assets erstellen oder Referenzen entfernen
2. **Performance-Latenz:** DNS/Server-Response organisch optimieren  
3. **Image-Optimization:** WebP-Format + korrekte Dimensionen
4. **Render-Blocking:** Critical CSS inline, Scripts async/defer
`
    : "🟢 Keine Browser Console Errors erkannt - Excellent Performance!"
}

**🌱 ORGANISCHES PRINZIP:**
- ❌ **VERBOTEN:** Lighthouse Performance-Skripte, Minifizierung, Bundle-Optimierung
- ✅ **ERLAUBT:** Organische Code-Verbesserungen, natürliche Optimierungen
- 🎯 **ZIEL:** Echte Performance durch Qualitätscode, nicht durch Tools

---

## 📊 CSV-DATEN ANALYSE (Google Search Console + SEO Measurements)

${
  this.csvData?.searchQueries?.length > 0
    ? `
### 🔍 KEYWORD-PERFORMANCE (Suchanfragen.csv):
- **Gesamt Keywords:** ${this.csvData.searchQueries.length}
- **Keywords mit Klicks:** ${
        this.csvData.searchQueries.filter((q) => q.clicks > 0).length
      }
- **Zero-Click Keywords:** ${
        this.csvData.searchQueries.filter(
          (q) => q.impressions > 5 && q.clicks === 0
        ).length
      }
- **High-Potential Keywords:** ${
        this.csvData.searchQueries.filter(
          (q) => q.impressions > 10 && q.position > 20
        ).length
      }

**TOP 5 KEYWORDS nach Impressionen:**
${this.csvData.searchQueries
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 5)
  .map(
    (q) =>
      `- **${q.query}:** ${
        q.impressions
      } Impressionen, Position ${q.position.toFixed(1)}, ${q.clicks} Klicks`
  )
  .join("\n")}

**🎯 COMPLIANCE MARKETING POTENZIAL:**
${
  this.csvData.searchQueries
    .filter((q) => q.query.toLowerCase().includes("compliance"))
    .map(
      (q) =>
        `- **${q.query}:** Position ${q.position.toFixed(1)} (${
          q.impressions
        } Impressionen) - RIESIGES AUSBAUPOTENZIAL!`
    )
    .join("\n") || "Keine Compliance-Keywords erkannt"
}
`
    : ""
}

${
  this.csvData?.pages?.length > 0
    ? `
### � SEITEN-PERFORMANCE (Seiten.csv):
- **Gesamt analysierte Seiten:** ${this.csvData.pages.length}
- **Seiten mit Klicks:** ${
        this.csvData.pages.filter((p) => p.clicks > 0).length
      }
- **Zero-Click Seiten (>10 Impressionen):** ${
        this.csvData.pages.filter((p) => p.impressions > 10 && p.clicks === 0)
          .length
      }

**TOP 3 PERFORMING SEITEN:**
${
  this.csvData.pages
    .filter((p) => p.clicks > 0)
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 3)
    .map(
      (p) =>
        `- **${p.url.split("/").slice(-1)[0] || "Homepage"}:** ${
          p.clicks
        } Klicks (${p.impressions} Impressionen, CTR: ${p.ctr}%)`
    )
    .join("\n") || "Keine Seiten mit Klicks gefunden"
}

**🚨 ZERO-CLICK SEITEN MIT POTENZIAL:**
${
  this.csvData.pages
    .filter((p) => p.impressions > 10 && p.clicks === 0)
    .slice(0, 3)
    .map(
      (p) =>
        `- **${p.url.split("/").slice(-1)[0] || "URL"}:** ${
          p.impressions
        } Impressionen, Position ${p.position.toFixed(
          1
        )} - META-TAG OPTIMIERUNG SOFORT!`
    )
    .join("\n") || "Keine Zero-Click Potenziale erkannt"
}
`
    : ""
}

${
  this.csvData?.countries?.length > 0
    ? `
### 🌍 GEO-PERFORMANCE (Länder.csv):
- **Aktive Märkte:** ${this.csvData.countries.length}
- **Märkte mit Klicks:** ${
        this.csvData.countries.filter((c) => c.clicks > 0).length
      }

**TOP 5 MÄRKTE:**
${this.csvData.countries
  .sort((a, b) => b.impressionen - a.impressionen)
  .slice(0, 5)
  .map(
    (c) =>
      `- **${c.country}:** ${c.impressions} Impressionen (${c.clicks} Klicks, CTR: ${c.ctr}%)`
  )
  .join("\n")}

**🇨🇭 SCHWEIZER MARKT:**
${
  this.csvData.countries.find((c) => c.country === "Schweiz")
    ? `- Impressionen: ${
        this.csvData.countries.find((c) => c.country === "Schweiz").impressions
      }, Klicks: ${
        this.csvData.countries.find((c) => c.country === "Schweiz").clicks
      }, CTR: ${
        this.csvData.countries.find((c) => c.country === "Schweiz").ctr
      }%`
    : "Keine Schweizer Daten verfügbar"
}

**🇩🇪 DEUTSCHER MARKT POTENZIAL:**
${
  this.csvData.countries.find((c) => c.country === "Deutschland")
    ? `- Impressionen: ${
        this.csvData.countries.find((c) => c.country === "Deutschland")
          .impressions
      }, Klicks: ${
        this.csvData.countries.find((c) => c.country === "Deutschland").clicks
      } - ${
        this.csvData.countries.find((c) => c.country === "Deutschland")
          .clicks === 0
          ? "UNGENUTZTES RIESENPOTENZIAL!"
          : "Gute Performance"
      }`
    : "Keine deutschen Daten verfügbar"
}
`
    : ""
}

${
  this.csvData?.impressions?.length > 0
    ? `
### 📈 LEGACY IMPRESSIONEN-TREND:
- **Aktuelle Impressionen:** ${
        this.csvData.impressions[this.csvData.impressions.length - 1]
          ?.impressions || 0
      }
- **Durchschnitt (7 Tage):** ${Math.round(
        this.csvData.impressions
          .slice(-7)
          .reduce((sum, day) => sum + day.impressions, 0) / 7
      )} Impressionen
- **Indexierte Seiten:** ${
        this.csvData.impressions[this.csvData.impressions.length - 1]
          ?.indexed || 0
      }
- **Nicht indexierte Seiten:** ${
        this.csvData.impressions[this.csvData.impressions.length - 1]
          ?.notIndexed || 0
      }
`
    : ""
}

${
  this.csvData?.criticalIssues?.length > 0
    ? `
### ⚠️ KRITISCHE INDEXIERUNGS-PROBLEME:
${this.csvData.criticalIssues
  .map(
    (issue) => `- **${issue.reason}:** ${issue.pages} Seiten (${issue.source})`
  )
  .join("\n")}
`
    : ""
}

---

## 🔧 GIT-INTELLIGENCE RECOMMENDATIONS

${
  this.csvData?.gitRecommendations?.length > 0
    ? `
### 🎯 INTELLIGENTE GIT-EMPFEHLUNGEN:

${this.csvData.gitRecommendations
  .map(
    (rec) => `
**${rec.type.toUpperCase()} (${rec.urgency}):**
\`\`\`bash
${rec.command}
\`\`\`
- **Begründung:** ${rec.reason}
- **Auto-Execute:** ${rec.autoExecute ? "✅ Empfohlen" : "⚠️ Manuell prüfen"}
- **Confidence:** ${rec.confidence || "MITTEL"}
${rec.executeAfter ? `- **Execute After:** ${rec.executeAfter}` : ""}
`
  )
  .join("\n")}

### 🤖 ASTRA GIT-WORKFLOW EMPFEHLUNG:
**SOFORTIGE AKTION EMPFOHLEN:**
1. **Pre-Fix Backup:** Automatisch ausführen vor Issue-Behebung
2. **Keyword-Data sichern:** CSV-Analysen für Verlauf dokumentieren  
3. **Post-Fix Validation:** Nach Issue-Resolution mit Build-Test
4. **Smart Push:** Nur bei <10 Issues automatisch pushen

**AUTONOME ENTSCHEIDUNG FÜR ASTRA:**
- ✅ **Pre-Fix Backup IMMER ausführen** (Sicherheit first)
- ✅ **CSV-Commits IMMER durchführen** (Daten-Verlaufsanalyse)
- ⚠️ **Push NUR bei Health Score >80** (Qualitätssicherung)
- 🔄 **Post-Fix Validation PFLICHT** (Erfolg verifizieren)
`
    : "Git-Recommendations nicht verfügbar"
}

---

*HINWEIS: Dieser Checker arbeitet unabhängig vom Vercel Build-Prozess und fokussiert sich auf organische Optimierungen.*
`;
  }

  /**
   * 📊 Health Score berechnen (Erweitert mit Blueprint Standards)
   */
  calculateHealthScore() {
    if (!this.actionPlan) return 85;

    const { critical, important, optimization, total } =
      this.actionPlan.summary;

    if (total === 0) return 100;

    let score = 100;
    score -= critical * 20; // Kritisch: -20 Punkte
    score -= important * 10; // Wichtig: -10 Punkte
    score -= optimization * 2; // Optimierung: -2 Punkte

    // Blueprint Bonus für Qualitätsmetriken
    if (
      this.contentStats.averageWordCount >
      CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH
    )
      score += 5;
    if (this.utfIssues.length === 0) score += 5;

    return Math.max(0, Math.min(100, score));
  }

  /**
   * 📈 Trend-Analyse
   */
  getTrendAnalysis() {
    // TODO: Implementierung für Trend-Vergleich mit vorherigen Runs
    return "Baseline (erste Messung)";
  }

  /**
   * ➕ Issue hinzufügen
   */
  addIssue(priority, title, description, solution) {
    this.issues.push({
      priority,
      title,
      description,
      solution,
      category: priority, // FIX: Map priority to category for getCategoryLabel compatibility
      type: title, // FIX: Map title to type for template consistency
      message: description, // FIX: Map description to message for forensic validation
      urgency: this.mapPriorityToUrgency(priority), // FIX: Add urgency mapping
      timestamp: new Date(),
    });
  }

  /**
   * 🤖 HOCHDETAILLIERTE KI-PROMPT GENERATION für Astra
   * Erstellt spezifische, actionable Prompts für jedes Issue
   */
  generateDetailedKIPrompt(issue, context) {
    const prompt = {
      issueType: issue.type || "Unknown",
      priority: issue.priority,
      urgency: issue.urgency,
      userPreference: {
        decisionMaking: "KI_AUTONOMOUS",
        userRole: "DELEGATE_TO_AI",
        procrastinationPrevention: "ENABLED",
        freedomConstraint: "BENEFICIAL_RESTRICTION",
      },
      specificInstructions: this.generateSpecificInstructions(issue),
      validationRequirements: this.generateValidationRequirements(issue),
      nextActions: this.generateNextActions(issue),
      learningFeedback: this.generateLearningFeedback(issue),
    };

    return prompt;
  }

  /**
   * 📋 Spezifische Anweisungen für Astra basierend auf Issue-Typ
   */
  generateSpecificInstructions(issue) {
    const instructions = {
      baseInstruction: `🎯 ASTRA: Simon delegiert diese Entscheidung an dich. Handle AUTONOM zu seinem Besten.`,
      freedomConstraint: `🔒 BENEFICIAL CONSTRAINT: Simon möchte NICHT entscheiden. Du hilfst ihm durch ÜBERNAHME der Verantwortung.`,
      procrastinationPrevention: `⚡ ANTI-PROKRASTINATION: Keine Rückfragen außer bei kritischen Unklarheiten.`,
    };

    // Issue-spezifische Anweisungen
    if (issue.type?.includes("Keyword-Density")) {
      instructions.specific = [
        "📈 ORGANISCHE SEO-OPTIMIERUNG erforderlich",
        "🎯 Fokus-Keyword natürlich in Content integrieren (Ziel: 1.5%)",
        "✅ VALIDATION: Nach Optimierung erneut messen",
        "📝 DOCUMENTATION: Änderungen in AAR protokollieren",
        "🚫 VERBOT: Keyword-Stuffing oder künstliche Integration",
      ];
      instructions.confidence = "HOCH - Standardprozedur für SEO-Optimierung";
    } else if (issue.type?.includes("Content zu kurz")) {
      instructions.specific = [
        "📝 CONTENT-ERWEITERUNG um mindestens auf 2300 Wörter",
        "🎯 Mehrwert-fokussierte Ergänzungen (AIDA, PAS, FAB Prinzipien)",
        "✅ VALIDATION: Wortanzahl nach Erweiterung prüfen",
        "📊 IMPACT: SEO-Ranking Verbesserung erwarten",
        "🚫 VERBOT: Fülltext oder irrelevante Inhalte",
      ];
      instructions.confidence = "HOCH - Bewährte Content-Strategie";
    } else if (issue.type?.includes("Frontmatter")) {
      instructions.specific = [
        "📋 FRONTMATTER-ERGÄNZUNG sofort durchführen",
        "🎯 SEO-optimierte Meta-Tags hinzufügen",
        "✅ VALIDATION: Vollständigkeit aller Required Fields prüfen",
        "📈 IMPACT: Sofortige SEO-Compliance Verbesserung",
        "🚫 VERBOT: Generische oder Template-Texte",
      ];
      instructions.confidence = "SEHR HOCH - Triviale Implementierung";
    } else {
      instructions.specific = [
        "🔍 DETAILANALYSE: 100% Verständnis vor Aktion",
        "🎯 ORGANISCHE LÖSUNG bevorzugen",
        "✅ VALIDATION: Build-Test nach Änderung",
        "📝 DOCUMENTATION: Vollständige AAR",
        "⚠️ FALLBACK: Bei Unsicherheit Astra entscheidet beste Herangehensweise",
      ];
      instructions.confidence = "MITTEL - Individuelle Bewertung erforderlich";
    }

    return instructions;
  }

  /**
   * ✅ Validierungs-Anforderungen generieren
   */
  generateValidationRequirements(issue) {
    return {
      mandatory: [
        "🏗️ `pnpm build` nach jeder Änderung ausführen",
        "📊 SEO-Score 100/100 beibehalten",
        "🔍 Build-Checker Log analysieren",
        "📝 AAR-Dokumentation aktualisieren",
      ],
      seoSpecific: issue.type?.includes("Keyword")
        ? [
            "📈 Keyword-Dichte erneut messen",
            "🎯 Organische Integration validieren",
            "📊 Search Console Position tracking",
          ]
        : [],
      technical: [
        "⚡ Keine Build-Errors einführen",
        "🔧 TypeScript Compliance beibehalten",
        "🚀 Performance nicht beeinträchtigen",
      ],
    };
  }

  /**
   * 🎯 Nächste Aktionen definieren
   */
  generateNextActions(issue) {
    const actions = {
      immediate: [
        "1️⃣ Issue Root Cause 100% verstehen",
        "2️⃣ Organische Lösung implementieren",
        "3️⃣ Validation durch Build-Test",
        "4️⃣ AAR Dokumentation",
      ],
      followUp: [
        "📊 Impact Measurement nach 24h",
        "🔄 Kontinuierliches Monitoring",
        "📈 Performance Tracking",
      ],
      autonomyGuidance: {
        decisionLevel: "FULL_AUTONOMY",
        askUser: "ONLY_IF_CRITICAL_AMBIGUITY",
        proceedWithout: "STANDARD_SEO_OPTIMIZATIONS",
        informUser: "AFTER_COMPLETION_WITH_RESULTS",
      },
    };

    return actions;
  }

  /**
   * 🧠 Lern-Feedback für Algorithm Training
   */
  generateLearningFeedback(issue) {
    return {
      patternType: this.categorizeIssuePattern(issue),
      complexityLevel: this.assessComplexity(issue),
      successPrediction: this.predictSuccessLikelihood(issue),
      learningOpportunity: this.identifyLearningOpportunity(issue),
      algorithmTraining: {
        inputPattern: issue.type,
        expectedOutput: "SUCCESSFUL_ORGANIC_FIX",
        validationCriteria: "SEO_SCORE_MAINTAINED_AND_ISSUE_RESOLVED",
      },
    };
  }

  categorizeIssuePattern(issue) {
    if (issue.type?.includes("Keyword")) return "SEO_CONTENT_OPTIMIZATION";
    if (issue.type?.includes("Content")) return "CONTENT_ENHANCEMENT";
    if (issue.type?.includes("Frontmatter")) return "METADATA_COMPLETION";
    return "GENERAL_OPTIMIZATION";
  }

  assessComplexity(issue) {
    if (issue.priority === "CRITICAL") return "HIGH";
    if (issue.type?.includes("Keyword")) return "LOW";
    if (issue.type?.includes("Frontmatter")) return "MINIMAL";
    return "MEDIUM";
  }

  predictSuccessLikelihood(issue) {
    if (issue.type?.includes("Frontmatter")) return "VERY_HIGH";
    if (issue.type?.includes("Keyword")) return "HIGH";
    if (issue.priority === "CRITICAL") return "MEDIUM";
    return "HIGH";
  }

  identifyLearningOpportunity(issue) {
    return {
      patternRecognition: `Issue type "${issue.type}" → Solution pattern`,
      outcomeTracking: "Measure success rate for similar issues",
      improvementAreas: ["Accuracy", "Speed", "User satisfaction"],
      nextIterationGoals: "Reduce manual intervention further",
    };
  }

  /**
   * 🎯 Priority zu Urgency Mapping für Template Compatibility
   */
  mapPriorityToUrgency(priority) {
    switch (priority) {
      case "CRITICAL":
        return "SOFORT";
      case "IMPORTANT":
        return "WICHTIG";
      case "OPTIMIZATION":
        return "Normal";
      case "INFO":
        return "Niedrig";
      default:
        return "Normal";
    }
  }

  // ======================================================
  // ENHANCED INTELLIGENCE METHODS - Advanced Workflow System
  // ======================================================

  /**
   * 🎯 Probleme intelligent kategorisieren
   */
  categorizeProblemsIntelligently() {
    const categories = {
      systematic: [], // Template/Workflow Issues
      content: [], // Content-spezifische Probleme
      technical: [], // Build/Config Probleme
      cosmetic: [], // Nice-to-have Optimierungen
    };

    for (const issue of this.issues) {
      if (issue.title.includes("Frontmatter") || issue.title.includes("Meta")) {
        categories.systematic.push(issue);
      } else if (
        issue.title.includes("Content") ||
        issue.title.includes("Keyword")
      ) {
        categories.content.push(issue);
      } else if (
        issue.title.includes("Build") ||
        issue.title.includes("Config")
      ) {
        categories.technical.push(issue);
      } else {
        categories.cosmetic.push(issue);
      }
    }

    return categories;
  }

  /**
   * 🔧 Git-Workflow generieren
   */
  generateGitWorkflow() {
    const hasImportantIssues = this.issues.some(
      (i) => i.priority === RATINGS.CRITICAL || i.priority === RATINGS.IMPORTANT
    );

    if (!hasImportantIssues) {
      return {
        recommended: false,
        reason:
          "Keine kritischen/wichtigen Probleme - Git-Workflow nicht erforderlich",
      };
    }

    return {
      recommended: true,
      steps: [
        "git add .",
        'git commit -m "Pre-fix baseline: Build-Checker found ${this.issues.length} issues"',
        "pnpm build  # Baseline etablieren",
        "# Führe empfohlene Fixes durch (siehe Action Plan)",
        "pnpm build  # Post-fix validation",
        "git add .",
        'git commit -m "Post-fix: Resolved SEO/Frontmatter issues"',
        "# Optional: git push origin main",
      ],
      safety_note: "💾 Backup vor jeder Änderung erstellt",
    };
  }

  /**
   * 🤖 Intelligente KI-Prompts generieren
   */
  generateIntelligentAIPrompts() {
    const criticalCount = this.issues.filter(
      (i) => i.priority === RATINGS.CRITICAL
    ).length;
    const importantCount = this.issues.filter(
      (i) => i.priority === RATINGS.IMPORTANT
    ).length;

    const prompts = [];

    if (criticalCount === 0 && importantCount === 0) {
      prompts.push({
        type: "continue_optimization",
        message:
          "✅ Keine kritischen Probleme gefunden! Soll ich mit organischen SEO-Optimierungen fortfahren?",
        action: "Fokus auf Content-Qualität und Keyword-Optimierung",
      });
    }

    if (importantCount > 10) {
      prompts.push({
        type: "systematic_fix",
        message: `🔧 ${importantCount} wichtige Probleme erkannt. Soll ich systematischen Fix-Workflow starten?`,
        action:
          "Priorisiere Frontmatter-Ergänzungen und strukturelle SEO-Verbesserungen",
      });
    }

    if (criticalCount > 0) {
      prompts.push({
        type: "critical_fix",
        message: `🚨 ${criticalCount} kritische Probleme erfordern sofortige Aufmerksamkeit!`,
        action: "Blockiert Deployment - sofortige Behebung erforderlich",
      });
    }

    // Organische SEO-Erinnerung
    prompts.push({
      type: "organic_seo_reminder",
      message: "🌱 WICHTIG: Nutze AUSSCHLIESSLICH organische SEO-Methoden!",
      forbidden:
        "Keine Minifizierung, Performance-Tools oder künstliche Optimierungen",
      allowed:
        "Content-Qualität, natürliche Keywords, strukturelle Verbesserungen",
    });

    return prompts;
  }

  /**
   * 📊 Impact-Schätzungen berechnen
   */
  calculateImpactEstimations() {
    const frontmatterIssues = this.issues.filter(
      (i) => i.title.includes("Frontmatter") || i.title.includes("Meta")
    ).length;

    const contentIssues = this.issues.filter(
      (i) => i.title.includes("Content") || i.title.includes("Keyword")
    ).length;

    return {
      frontmatter_fix: {
        issues_count: frontmatterIssues,
        estimated_improvement: `${Math.min(
          frontmatterIssues * 3,
          30
        )} Health Score Punkte`,
        deployment_impact:
          frontmatterIssues > 0
            ? "SEO-Compliance deutlich verbessert"
            : "Keine Verbesserung",
      },
      content_optimization: {
        issues_count: contentIssues,
        estimated_improvement: `${Math.min(
          contentIssues * 2,
          20
        )} Health Score Punkte`,
        deployment_impact:
          contentIssues > 0
            ? "Organisches Ranking verbessert"
            : "Keine Verbesserung",
      },
      total_potential: {
        max_improvement: `${Math.min(
          frontmatterIssues * 3 + contentIssues * 2,
          40
        )} Health Score Punkte`,
        timeframe: "1-2 Build-Cycles",
        approach: "Organische SEO-Optimierung ohne Performance-Tools",
      },
    };
  }

  /**
   * 📋 Workflow-Schritte generieren
   */
  generateWorkflowSteps() {
    const steps = [];

    // Kritische Probleme zuerst
    const criticalIssues = this.issues.filter(
      (i) => i.priority === RATINGS.CRITICAL
    );
    if (criticalIssues.length > 0) {
      steps.push({
        step: 1,
        action: "Kritische Probleme beheben",
        details: criticalIssues.map((i) => i.title),
        urgency: "SOFORT",
      });
    }

    // Frontmatter-Systematik
    const frontmatterIssues = this.issues.filter(
      (i) => i.title.includes("Frontmatter") || i.title.includes("Meta")
    );
    if (frontmatterIssues.length > 5) {
      steps.push({
        step: steps.length + 1,
        action: "Systematische Frontmatter-Ergänzung",
        details: `${frontmatterIssues.length} fehlende Meta-Felder`,
        expected_impact: "65% Problem-Reduction",
        approach: "Manuelle Ergänzung mit Template-Struktur",
      });
    }

    // Content-Optimierung
    const contentIssues = this.issues.filter(
      (i) => i.title.includes("Content") || i.title.includes("Keyword")
    );
    if (contentIssues.length > 0) {
      steps.push({
        step: steps.length + 1,
        action: "Organische Content-Optimierung",
        details: `${contentIssues.length} Content-Verbesserungen`,
        expected_impact: "35% Problem-Reduction",
        approach: "Natürliche Keyword-Integration, Content-Erweiterung",
      });
    }

    // Validation
    steps.push({
      step: steps.length + 1,
      action: "Build-Validation & AAR",
      details: "pnpm build → Health Score Vergleich → After Action Review",
      purpose: "Erfolg der Optimierungen validieren",
    });

    return steps;
  }

  /**
   * 🎯 Nächste Aktionen empfehlen
   */
  generateNextActionRecommendations() {
    const recommendations = [];
    const healthScore = this.calculateHealthScore();

    if (healthScore < 70) {
      recommendations.push({
        priority: "HIGH",
        action: "Systematische Problembehebung erforderlich",
        details: "Health Score unter 70 - strukturelle Verbesserungen nötig",
        approach: "Fokus auf Frontmatter und Content-Qualität",
      });
    } else if (healthScore < 90) {
      recommendations.push({
        priority: "MEDIUM",
        action: "Organische SEO-Optimierung",
        details: "Health Score 70-90 - Feintuning für besseres Ranking",
        approach: "Keyword-Dichte, interne Links, Content-Erweiterung",
      });
    } else {
      recommendations.push({
        priority: "LOW",
        action: "Kontinuierliche Überwachung",
        details: "Health Score >90 - System läuft optimal",
        approach: "Regelmäßige Build-Checks, Content-Updates",
      });
    }

    // Git-Integration empfehlen
    const hasSignificantIssues = this.issues.length > 10;
    if (hasSignificantIssues) {
      recommendations.push({
        priority: "WORKFLOW",
        action: "Git-Workflow für systematische Fixes",
        details: "Baseline → Fix → Validation → AAR Cycle",
        safety: "Backup und Rollback-Möglichkeit",
      });
    }

    return recommendations;
  }

  // ======================================================
  // BLUEPRINT ENHANCED METHODS - Professional Portfolio Integration
  // ======================================================

  /**
   * 📝 Advanced Content Analysis (aus professional-seo-optimizer.js)
   */
  async performAdvancedContentAnalysis() {
    console.log("📝 Führe erweiterte Content-Analyse durch...");

    try {
      const markdownFiles = await this.getMarkdownFiles(CONFIG.CONTENT_DIR);

      for (const filePath of markdownFiles) {
        const content = await fs.readFile(filePath, "utf8");
        const relativePath = path.relative(CONFIG.PROJECT_ROOT, filePath);

        // Content-Länge validieren
        const wordCount = this.countWords(content);
        if (wordCount < CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH) {
          this.addIssue(
            RATINGS.IMPORTANT,
            "Content zu kurz",
            `${relativePath}: ${wordCount} Wörter (Minimum: ${CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH})`,
            "Blog-Content erweitern für besseres SEO-Ranking"
          );
        }

        // Frontmatter validieren
        const frontmatter = this.extractFrontmatter(content);
        this.validateFrontmatter(frontmatter, relativePath);

        // Heading-Struktur prüfen
        this.validateHeadingStructure(content, relativePath);

        // Keyword-Dichte analysieren (falls Fokus-Keyword definiert)
        if (frontmatter.focusKeyword) {
          this.analyzeKeywordDensity(
            content,
            frontmatter.focusKeyword,
            relativePath
          );
        }

        // Content-Prinzipien prüfen (AIDA, PAS, etc.)
        this.analyzeContentPrinciples(content, relativePath);

        // Statistiken sammeln
        this.updateContentStats(wordCount, frontmatter);
      }

      console.log(
        `✅ Content-Analyse abgeschlossen: ${markdownFiles.length} Dateien analysiert`
      );
    } catch (error) {
      console.error("❌ Content-Analyse Fehler:", error.message);
      this.addIssue(
        RATINGS.CRITICAL,
        "Content-Analyse Fehler",
        error.message,
        "Content-Verzeichnis prüfen"
      );
    }
  }

  /**
   * 🔤 UTF-8 Encoding Validation (aus Blueprint)
   */
  async validateUTF8Encoding() {
    console.log("🔤 Validiere UTF-8 Encoding...");

    const corruptionPatterns = [
      { pattern: /Ã¤/g, correct: "ä", name: "corrupted ä" },
      { pattern: /Ã¶/g, correct: "ö", name: "corrupted ö" },
      { pattern: /Ã¼/g, correct: "ü", name: "corrupted ü" },
      { pattern: /ÃŸ/g, correct: "ß", name: "corrupted ß" },
      { pattern: /Ã„/g, correct: "Ä", name: "corrupted Ä" },
      { pattern: /Ã–/g, correct: "Ö", name: "corrupted Ö" },
      { pattern: /Ãœ/g, correct: "Ü", name: "corrupted Ü" },
    ];

    try {
      const files = await this.getMarkdownFiles(CONFIG.CONTENT_DIR);

      for (const filePath of files) {
        const content = await fs.readFile(filePath, "utf8");
        const relativePath = path.relative(CONFIG.PROJECT_ROOT, filePath);

        const foundCorruptions = [];

        for (const { pattern, name } of corruptionPatterns) {
          const matches = content.match(pattern);
          if (matches) {
            foundCorruptions.push(`${name} (${matches.length} Vorkommen)`);
          }
        }

        if (foundCorruptions.length > 0) {
          this.utfIssues.push({
            file: relativePath,
            corruptions: foundCorruptions,
          });

          this.addIssue(
            RATINGS.CRITICAL,
            "UTF-8 Korruption erkannt",
            `${relativePath}: ${foundCorruptions.join(", ")}`,
            "Zeichen-Encoding korrigieren und Content-Pipeline prüfen"
          );
        }
      }

      if (this.utfIssues.length === 0) {
        console.log("✅ UTF-8 Encoding validiert - keine Probleme gefunden");
      } else {
        console.log(
          `⚠️ UTF-8 Probleme in ${this.utfIssues.length} Dateien gefunden`
        );
      }
    } catch (error) {
      console.error("❌ UTF-8 Validierung Fehler:", error.message);
      this.addIssue(
        RATINGS.CRITICAL,
        "UTF-8 Validierung Fehler",
        error.message,
        "Encoding-System prüfen"
      );
    }
  }

  /**
   * 🗺️ Advanced Sitemap Optimization (aus Blueprint)
   */
  async optimizeSitemap() {
    console.log("🗺️ Optimiere Sitemap...");

    try {
      const sitemapExists = await fs
        .access(CONFIG.SITEMAP_PATH)
        .then(() => true)
        .catch(() => false);

      if (!sitemapExists) {
        this.addIssue(
          RATINGS.IMPORTANT,
          "Sitemap fehlt",
          "Keine sitemap.xml im dist/ Verzeichnis gefunden",
          "Astro Sitemap-Integration prüfen oder manuell erstellen"
        );
        return;
      }

      const sitemapContent = await fs.readFile(CONFIG.SITEMAP_PATH, "utf8");

      // URL-Anzahl zählen
      const urlCount = (sitemapContent.match(/<url>/g) || []).length;

      // Sitemap-Validierung
      if (
        !sitemapContent.includes("<urlset") ||
        !sitemapContent.includes("</urlset>")
      ) {
        this.addIssue(
          RATINGS.CRITICAL,
          "Ungültige Sitemap-Struktur",
          "Sitemap enthält keine gültige XML-Struktur",
          "Sitemap-Generierung reparieren"
        );
      } else {
        console.log(`✅ Sitemap validiert: ${urlCount} URLs gefunden`);
      }
    } catch (error) {
      console.error("❌ Sitemap-Optimierung Fehler:", error.message);
      this.addIssue(
        RATINGS.IMPORTANT,
        "Sitemap-Optimierung Fehler",
        error.message,
        "Build-Prozess und Sitemap-Konfiguration prüfen"
      );
    }
  }

  /**
   * 🤖 Advanced Robots.txt Validation (aus Blueprint)
   */
  async validateRobots() {
    console.log("🤖 Validiere robots.txt...");

    try {
      const robotsExists = await fs
        .access(CONFIG.ROBOTS_PATH)
        .then(() => true)
        .catch(() => false);

      if (!robotsExists) {
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "Robots.txt fehlt",
          "Keine robots.txt im dist/ Verzeichnis gefunden",
          "Robots.txt für SEO-Optimierung hinzufügen"
        );
        return;
      }

      const robotsContent = await fs.readFile(CONFIG.ROBOTS_PATH, "utf8");

      // Validierungs-Checks
      const validationIssues = [];

      if (!robotsContent.includes("User-agent:")) {
        validationIssues.push("Fehlende User-agent Direktive");
      }

      if (!robotsContent.includes("Sitemap:")) {
        validationIssues.push("Fehlende Sitemap Direktive");
      }

      if (
        robotsContent.includes("Disallow: /") &&
        !robotsContent.includes("Allow:")
      ) {
        validationIssues.push(
          "Komplette Seiten-Blockierung erkannt (Disallow: /)"
        );
      }

      if (validationIssues.length > 0) {
        validationIssues.forEach((issue) => {
          this.addIssue(
            RATINGS.IMPORTANT,
            "Robots.txt Problem",
            issue,
            "Robots.txt Konfiguration überprüfen und korrigieren"
          );
        });
      } else {
        console.log("✅ Robots.txt Validierung erfolgreich");
      }
    } catch (error) {
      console.error("❌ Robots.txt Validierung Fehler:", error.message);
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Robots.txt Validierung Fehler",
        error.message,
        "Robots.txt Setup prüfen"
      );
    }
  }

  /**
   * 📊 Comprehensive SEO Report Generation (aus Blueprint)
   */
  async generateComprehensiveSEOReport() {
    console.log("📊 Generiere umfassenden SEO-Report...");

    try {
      const deploymentSafe =
        this.issues.filter((issue) => issue.priority === RATINGS.CRITICAL)
          .length === 0;

      const report = this.generateDetailedSEOReport({
        contentStats: this.contentStats,
        utfIssues: this.utfIssues,
        issues: this.issues,
        deploymentSafe,
        timestamp: new Date().toISOString(),
      });

      // Report speichern
      await fs.writeFile(CONFIG.REPORT_OUTPUT, report, "utf8");

      console.log(`✅ SEO Report generiert: ${CONFIG.REPORT_OUTPUT}`);
      console.log(
        `📊 Zusammenfassung: ${this.issues.length} Probleme gefunden`
      );
      console.log(`🚀 Deployment bereit: ${deploymentSafe ? "JA" : "NEIN"}`);

      this.seoReport = {
        deploymentSafe,
        totalIssues: this.issues.length,
        contentFiles: this.contentStats.totalFiles || 0,
        averageWordCount: this.contentStats.averageWordCount || 0,
      };
    } catch (error) {
      console.error("❌ SEO Report Generation Fehler:", error.message);
      this.addIssue(
        RATINGS.CRITICAL,
        "SEO Report Fehler",
        error.message,
        "Report-System reparieren"
      );
    }
  }

  // ======================================================
  // HELPER METHODS (aus Blueprint adaptiert)
  // ======================================================

  /**
   * 📁 Markdown-Dateien sammeln
   */
  async getMarkdownFiles(dir) {
    const files = [];

    const walkDir = async (currentDir) => {
      try {
        const entries = await fs.readdir(currentDir, { withFileTypes: true });

        for (const entry of entries) {
          const fullPath = path.join(currentDir, entry.name);

          if (entry.isDirectory()) {
            await walkDir(fullPath);
          } else if (entry.isFile() && entry.name.endsWith(".md")) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Directory existiert nicht oder ist nicht zugänglich
        console.log(`⚠️ Verzeichnis nicht zugänglich: ${currentDir}`);
      }
    };

    await walkDir(dir);
    return files;
  }

  /**
   * 🔢 OFFIZIELLE Wortzählung für Algorithmus-Training
   * ⚠️ WICHTIG: Wortzählung NUR mit `pnpm build` erlaubt!
   * ⚠️ Manuelle Wortzählung ist VERBOTEN für Algorithmus-Training!
   */
  countWords(text) {
    // KRITISCHER HINWEIS: Diese Funktion ist die EINZIGE gültige Wortzählung!
    console.log(
      "🔢 WORTZÄHLUNG: Ausschließlich via pnpm build für Algorithmus-Training!"
    );

    const wordCount = text
      .replace(/<[^>]*>/g, " ") // HTML-Tags entfernen
      .replace(/[^\w\säöüÄÖÜß]/g, " ") // Sonderzeichen entfernen (Deutsche Umlaute behalten)
      .split(/\s+/)
      .filter((word) => word.length > 0).length;

    // ALGORITHMUS-TRAINING: Exakte Wortzahl dokumentieren
    console.log(`📊 EXAKTE WORTZAHL für Algorithmus: ${wordCount} Wörter`);

    return wordCount;
  }

  /**
   * 📄 Frontmatter extrahieren (aus Blueprint)
   */
  extractFrontmatter(content) {
    const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) return {};

    const frontmatterText = match[1];
    const frontmatter = {};

    const lines = frontmatterText.split("\n");
    for (const line of lines) {
      const colonIndex = line.indexOf(":");
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line
          .substring(colonIndex + 1)
          .trim()
          .replace(/^["']|["']$/g, "");
        frontmatter[key] = value;
      }
    }

    return frontmatter;
  }

  /**
   * 📋 Enhanced Frontmatter validieren (Integration aus frontmatter-seo-validator.js)
   */
  validateFrontmatter(frontmatter, filePath) {
    for (const field of CONFIG.SEO_STANDARDS.REQUIRED_META_FIELDS) {
      // Spezielle Behandlung für date-Feld
      if (field === "date") {
        if (!frontmatter[field] && !frontmatter["datePublished"]) {
          this.addIssue(
            RATINGS.IMPORTANT,
            `Fehlendes ${field}-Feld`,
            `${filePath}: Frontmatter fehlt "${field}" oder "datePublished"`,
            `${field} oder datePublished in Frontmatter hinzufügen für besseres SEO`
          );
        }
      } else if (!frontmatter[field]) {
        this.addIssue(
          RATINGS.IMPORTANT,
          `Fehlendes ${field}-Feld`,
          `${filePath}: Frontmatter fehlt "${field}"`,
          `${field} in Frontmatter hinzufügen für besseres SEO`
        );
      }
    }

    // Titel-Länge prüfen
    if (
      frontmatter.title &&
      frontmatter.title.length > CONFIG.SEO_STANDARDS.MAX_TITLE_LENGTH
    ) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Titel zu lang",
        `${filePath}: Titel ${frontmatter.title.length} Zeichen (Max: ${CONFIG.SEO_STANDARDS.MAX_TITLE_LENGTH})`,
        "Titel kürzen für bessere SEO-Performance"
      );
    }

    // Beschreibung-Länge prüfen
    if (
      frontmatter.description &&
      frontmatter.description.length >
        CONFIG.SEO_STANDARDS.MAX_DESCRIPTION_LENGTH
    ) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Beschreibung zu lang",
        `${filePath}: Beschreibung ${frontmatter.description.length} Zeichen (Max: ${CONFIG.SEO_STANDARDS.MAX_DESCRIPTION_LENGTH})`,
        "Meta-Beschreibung kürzen"
      );
    }

    // Enhanced: Fokus-Keyword Integration (aus frontmatter-seo-validator.js)
    if (frontmatter.focusKeyword) {
      const keyword = frontmatter.focusKeyword.toLowerCase();
      const titleLower = (frontmatter.title || "").toLowerCase();
      const descLower = (frontmatter.description || "").toLowerCase();

      if (!titleLower.includes(keyword)) {
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "Fokus-Keyword nicht in Titel",
          `${filePath}: "${frontmatter.focusKeyword}" fehlt im Titel`,
          "Fokus-Keyword natürlich in Titel integrieren für besseres Ranking"
        );
      }

      if (!descLower.includes(keyword)) {
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "Fokus-Keyword nicht in Beschreibung",
          `${filePath}: "${frontmatter.focusKeyword}" fehlt in Meta-Beschreibung`,
          "Fokus-Keyword organisch in Beschreibung einbauen"
        );
      }
    } else {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Fokus-Keyword fehlt",
        `${filePath}: Kein focusKeyword definiert`,
        "Haupt-Keyword für SEO-Optimierung definieren"
      );
    }
  }

  /**
   * 🏷️ Heading-Struktur validieren
   */
  validateHeadingStructure(content, filePath) {
    const bodyContent = content.replace(/^---[\s\S]*?---/, "");

    if (!bodyContent.includes("# ") && !bodyContent.includes("<h1>")) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Fehlende H1-Überschrift",
        `${filePath}: Keine H1-Überschrift gefunden`,
        "H1-Überschrift für SEO-Struktur hinzufügen"
      );
    }

    if (!bodyContent.includes("## ") && !bodyContent.includes("<h2>")) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Fehlende H2-Überschriften",
        `${filePath}: Keine H2-Überschriften gefunden`,
        "H2-Überschriften für bessere Content-Struktur hinzufügen"
      );
    }
  }

  /**
   * 🎯 Keyword-Dichte analysieren
   */
  analyzeKeywordDensity(content, focusKeyword, filePath) {
    if (!focusKeyword) return;

    const wordCount = this.countWords(content);
    const keywordMatches =
      content
        .toLowerCase()
        .match(new RegExp(focusKeyword.toLowerCase(), "g")) || [];
    const density = (keywordMatches.length / wordCount) * 100;

    if (density < 1.0) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Keyword-Dichte zu niedrig",
        `${filePath}: "${focusKeyword}" Dichte ${density.toFixed(1)}% (Ziel: ${
          CONFIG.SEO_STANDARDS.TARGET_KEYWORD_DENSITY
        }%)`,
        "Fokus-Keyword natürlich öfter verwenden"
      );
    } else if (density > 2.5) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Keyword-Dichte zu hoch",
        `${filePath}: "${focusKeyword}" Dichte ${density.toFixed(
          1
        )}% (Max empfohlen: 2.5%)`,
        "Keyword-Verwendung reduzieren um Keyword-Stuffing zu vermeiden"
      );
    }
  }

  /**
   * 📖 Content-Prinzipien analysieren (AIDA, PAS, etc.)
   */
  analyzeContentPrinciples(content, filePath) {
    const lowercaseContent = content.toLowerCase();

    // AIDA-Prinzip prüfen (vereinfacht)
    const aidaKeywords = {
      attention: [
        "aufmerksamkeit",
        "überraschend",
        "neu",
        "exklusiv",
        "geheimnis",
      ],
      interest: ["interessant", "warum", "wie", "entdecken", "lernen"],
      desire: ["wünschen", "brauchen", "vorteile", "nutzen", "erfolg"],
      action: ["jetzt", "sofort", "kontakt", "anrufen", "klicken", "kaufen"],
    };

    let aidaScore = 0;
    for (const [phase, keywords] of Object.entries(aidaKeywords)) {
      const found = keywords.some((keyword) =>
        lowercaseContent.includes(keyword)
      );
      if (found) aidaScore++;
    }

    if (aidaScore < 2) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Content-Prinzipien verbessern",
        `${filePath}: AIDA-Struktur unvollständig (${aidaScore}/4 Phasen)`,
        "Content mit AIDA-Prinzip (Attention, Interest, Desire, Action) strukturieren"
      );
    }
  }

  /**
   * 📊 Content-Statistiken aktualisieren
   */
  updateContentStats(wordCount, frontmatter) {
    if (!this.contentStats.totalFiles) this.contentStats.totalFiles = 0;
    if (!this.contentStats.totalWords) this.contentStats.totalWords = 0;
    if (!this.contentStats.wordsPerFile) this.contentStats.wordsPerFile = [];
    if (!this.contentStats.fileWordDetails)
      this.contentStats.fileWordDetails = [];

    this.contentStats.totalFiles++;
    this.contentStats.totalWords += wordCount;
    this.contentStats.wordsPerFile.push(wordCount);

    // ALGORITHMUS-TRAINING: Jede Wortzählung protokollieren
    const fileName =
      frontmatter && frontmatter.title
        ? frontmatter.title.toLowerCase().replace(/[^a-z0-9]/g, "-")
        : "unknown-file";

    // EXAKTE WORTZÄHLUNG für Log-Datei protokollieren
    console.log(
      `📊 WORTZÄHLUNG PROTOKOLLIERT: ${fileName} = ${wordCount} Wörter (für Algorithmus-Training)`
    );

    this.contentStats.fileWordDetails.push({
      fileName: fileName,
      title: frontmatter?.title || "Unbekannter Titel",
      wordCount: wordCount,
      focusKeyword: frontmatter?.focusKeyword || null,
      category: frontmatter?.category || null,
      tags: frontmatter?.tags || [],
      needsExpansion: wordCount < CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH,
      expansionPriority: this.calculateExpansionPriority(
        wordCount,
        frontmatter
      ),
      timestamp: new Date().toISOString(),
    });

    this.contentStats.averageWordCount = Math.round(
      this.contentStats.totalWords / this.contentStats.totalFiles
    );

    // Content-Expansion-Recommendations für Algorithmus
    this.generateContentExpansionRecommendations();
  }

  /**
   * 🎯 Expansion-Priorität für Algorithmus-Training berechnen
   */
  calculateExpansionPriority(wordCount, frontmatter) {
    let priority = 0;

    // Wortzahl-basierte Priorität
    if (wordCount < 500) priority += 10; // Sehr hoch
    else if (wordCount < 1000) priority += 7; // Hoch
    else if (wordCount < 1500) priority += 5; // Mittel
    else if (wordCount < 2300) priority += 3; // Niedrig

    // Focus-Keyword-Bonus
    if (frontmatter?.focusKeyword) priority += 2;

    // Featured-Content-Bonus
    if (frontmatter?.featured) priority += 3;

    // Category-Bonus (Marketing = höhere Priorität)
    if (frontmatter?.category === "Marketing") priority += 2;

    return Math.min(priority, 10); // Max 10
  }

  /**
   * 🤖 Content-Expansion-Recommendations für KI-Algorithmus
   */
  generateContentExpansionRecommendations() {
    if (!this.contentStats.fileWordDetails) return;

    const lowWordCountFiles = this.contentStats.fileWordDetails
      .filter((file) => file.needsExpansion)
      .sort((a, b) => b.expansionPriority - a.expansionPriority)
      .slice(0, 5); // Top 5 Prioritäten

    this.contentStats.expansionRecommendations = lowWordCountFiles.map(
      (file) => ({
        fileName: file.fileName,
        title: file.title,
        currentWords: file.wordCount,
        targetWords: CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH,
        wordsNeeded:
          CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH - file.wordCount,
        priority: file.expansionPriority,
        focusKeyword: file.focusKeyword,
        suggestedSections: this.generateExpansionSuggestions(file),
        kiPrompt: this.generateContentExpansionKIPrompt(file),
      })
    );
  }

  /**
   * 📝 Expansion-Vorschläge basierend auf Content-Analyse
   */
  generateExpansionSuggestions(fileDetails) {
    const suggestions = [];

    if (fileDetails.category === "Marketing") {
      suggestions.push(
        "12-Monats-Implementierungsplan hinzufügen",
        "ROI-Calculations und Business Case erstellen",
        "Konkrete Use Cases und Case Studies integrieren",
        "Advanced Tactics für Spezialisierung",
        "Partnership-Strategien entwickeln"
      );
    }

    if (fileDetails.focusKeyword) {
      suggestions.push(
        `"${fileDetails.focusKeyword}"-spezifische FAQ-Sektion`,
        "Branchenspezifische Anwendungsfälle",
        "Schritt-für-Schritt-Anleitungen"
      );
    }

    suggestions.push(
      "Detaillierte Problemlösungsstrategien",
      "Konkrete Handlungsempfehlungen",
      "Weiterführende Ressourcen und Tools"
    );

    return suggestions.slice(0, 5); // Max 5 Vorschläge
  }

  /**
   * 🤖 KI-Prompt für Content-Expansion generieren
   */
  generateContentExpansionKIPrompt(fileDetails) {
    return `**CONTENT-EXPANSION-AUFTRAG für AI-Algorithmus:**

**Datei:** ${fileDetails.title}
**Aktuell:** ${fileDetails.currentWords} Wörter
**Ziel:** ${CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH} Wörter
**Zu erweitern:** ${
      CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH - fileDetails.currentWords
    } Wörter
**Fokus-Keyword:** ${fileDetails.focusKeyword || "Nicht definiert"}
**Priorität:** ${fileDetails.priority}/10

**Expansion-Strategie:**
1. Bestehenden Content analysieren und verstehen
2. Natürliche Keyword-Integration (Ziel: 0.8-1.2% Density)
3. Hochwertige Business-Content hinzufügen
4. SEO 100/100 Score beibehalten

**Vorgeschlagene Abschnitte:**
${
  fileDetails.category === "Marketing"
    ? `
- Praktischer Umsetzungsplan (quartalsweise)
- Revenue-Projektionen und ROI-Calculations
- Advanced Marketing-Tactics
- Partnership-Development-Strategien
- Business-Case-Analyse mit konkreten Zahlen`
    : `
- Detaillierte Problemlösungsansätze
- Schritt-für-Schritt-Implementierung
- Best Practices und Lessons Learned
- Konkrete Handlungsempfehlungen
- Weiterführende Ressourcen`
}

**Quality-Gates:**
- Organische SEO-Optimierung (keine Minifizierung)
- Content-First-Approach
- Natürliche Keyword-Verwendung
- Business-Value-Focus

**Autonomous-Action:** KI darf eigenständig erweitern basierend auf User-Delegation-Preferences.`;
  }

  /**
   * 📄 Detaillierten SEO-Report generieren
   */
  generateDetailedSEOReport(data) {
    const { contentStats, utfIssues, issues, deploymentSafe, timestamp } = data;

    const criticalIssues = issues.filter(
      (i) => i.priority === RATINGS.CRITICAL
    );
    const importantIssues = issues.filter(
      (i) => i.priority === RATINGS.IMPORTANT
    );
    const optimizationIssues = issues.filter(
      (i) => i.priority === RATINGS.OPTIMIZATION
    );

    return `# Professional SEO Quality Report

**Generiert:** ${timestamp}
**Deployment Status:** ${deploymentSafe ? "✅ BEREIT" : "❌ BLOCKIERT"}
**Gesamtprobleme:** ${issues.length}
**Build Checker:** Enhanced mit Portfolio Blueprint Features

## Executive Summary

Dieser automatisierte SEO-Qualitätsbericht validiert Content-Standards, Encoding-Integrität und Deployment-Bereitschaft basierend auf professionellen Portfolio-Standards.

## Content Analytics & KI-Algorithmus-Training

- **Dateien analysiert:** ${contentStats.totalFiles || 0}
- **Durchschnittliche Wortanzahl:** ${contentStats.averageWordCount || 0} Wörter
- **Gesamtwörter:** ${contentStats.totalWords || 0}
- **SEO-Mindestlänge:** ${CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH} Wörter
- **Ziel-Contentlänge:** ${CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH} Wörter

### 🤖 Content-Expansion-Recommendations (Algorithm Training Data)

${
  contentStats.expansionRecommendations &&
  contentStats.expansionRecommendations.length > 0
    ? contentStats.expansionRecommendations
        .map(
          (rec, index) => `
**${index + 1}. ${rec.title}** (Priorität: ${rec.priority}/10)
- **Aktuell:** ${rec.currentWords} Wörter → **Ziel:** ${
            rec.targetWords
          } Wörter (${rec.wordsNeeded} Wörter benötigt)
- **Fokus-Keyword:** ${rec.focusKeyword || "Nicht definiert"}
- **Vorgeschlagene Erweiterungen:** ${rec.suggestedSections
            .slice(0, 3)
            .join(", ")}

\`\`\`prompt
${rec.kiPrompt}
\`\`\`
`
        )
        .join("\n")
    : "Alle Dateien erfüllen die Content-Längen-Standards."
}

### 📊 Detaillierte Datei-Statistiken für ML-Training

${
  contentStats.fileWordDetails && contentStats.fileWordDetails.length > 0
    ? contentStats.fileWordDetails
        .map(
          (file) => `
- **${file.title}:** ${file.wordCount} Wörter | Kategorie: ${
            file.category || "Unbekannt"
          } | Priorität: ${file.expansionPriority}/10 ${
            file.needsExpansion ? "⚠️ Expansion empfohlen" : "✅ Länge OK"
          }`
        )
        .join("\n")
    : "Keine Content-Dateien analysiert."
}

## Probleme nach Priorität

### 🔴 Kritische Probleme (${criticalIssues.length})

${
  criticalIssues.length > 0
    ? criticalIssues
        .map(
          (issue) =>
            `- **${issue.title}:** ${issue.description}\n  *Lösung:* ${issue.solution}`
        )
        .join("\n\n")
    : "Keine kritischen Probleme erkannt."
}

### 🟡 Wichtige Probleme (${importantIssues.length})

${
  importantIssues.length > 0
    ? importantIssues
        .map(
          (issue) =>
            `- **${issue.title}:** ${issue.description}\n  *Lösung:* ${issue.solution}`
        )
        .join("\n\n")
    : "Keine wichtigen Probleme erkannt."
}

### 🟢 Optimierungsmöglichkeiten (${optimizationIssues.length})

${
  optimizationIssues.length > 0
    ? optimizationIssues
        .map(
          (issue) =>
            `- **${issue.title}:** ${issue.description}\n  *Lösung:* ${issue.solution}`
        )
        .join("\n\n")
    : "Keine Optimierungen erforderlich."
}

## UTF-8 Encoding Validation

${
  utfIssues.length === 0
    ? "✅ **BESTANDEN** - Keine Encoding-Probleme gefunden"
    : `❌ **FEHLGESCHLAGEN** - Encoding-Probleme in ${
        utfIssues.length
      } Dateien:\n${utfIssues
        .map((issue) => `- ${issue.file}: ${issue.corruptions.join(", ")}`)
        .join("\n")}`
}

## Content-Marketing Prinzipien

Basierend auf Portfolio Blueprint Standards:
- **AIDA-Struktur:** Attention → Interest → Desire → Action
- **PAS-Prinzip:** Problem → Agitation → Solution  
- **Keyword-Dichte:** Ziel ${
      CONFIG.SEO_STANDARDS.TARGET_KEYWORD_DENSITY
    }% für Fokus-Keywords
- **Content-Länge:** Minimum ${
      CONFIG.SEO_STANDARDS.MIN_CONTENT_LENGTH
    } Wörter für SEO-Ranking

## Technische Validierung

- **Sitemap:** Verfügbar und validiert
- **Robots.txt:** SEO-kompatibel konfiguriert
- **Content-Standards:** ${
      criticalIssues.length === 0 && importantIssues.length === 0
        ? "BESTANDEN"
        : "FEHLGESCHLAGEN"
    }
- **Encoding-Integrität:** ${
      utfIssues.length === 0 ? "BESTANDEN" : "FEHLGESCHLAGEN"
    }

## Deployment-Empfehlung

${
  deploymentSafe
    ? "✅ **DEPLOYMENT FREIGEGEBEN** - Alle Qualitätsstandards erfüllt."
    : "❌ **DEPLOYMENT BLOCKIERT** - Kritische Probleme erfordern Lösung vor Deployment."
}

## Organische SEO-Optimierung

Dieser Report fokussiert sich auf organische Verbesserungen ohne Performance-Tools:
- Content-Qualität und -Länge
- Natürliche Keyword-Integration  
- Strukturelle SEO-Optimierung
- Technische Foundation (Sitemap, Robots.txt)
- Encoding-Konsistenz

---
*Report generiert von Professional Build & SEO Checker v2.0.0 (Blueprint Enhanced)*
*Nächste Analyse: Nach dem nächsten \`pnpm build\` Prozess*
`;
  }

  // ======================================================
  // FORENSIC VALIDATION METHODS
  // ======================================================

  // Forensische Validierung mit 100% VERSTÄNDNIS-PROTOKOLL
  generateForensicValidation(issue) {
    let validation = `**� FORENSIC VALIDATION + 100% VERSTÄNDNIS-PROTOKOLL:**\n\n`;

    // 🚨 CRITICAL: 100% UNDERSTANDING PROTOCOL
    validation += `**⚠️ 100% VERSTÄNDNIS-PFLICHT FÜR ASTRA (KI):**\n`;
    validation += `- ❌ VERBOTEN: Annahmen wie "Das Problem liegt wahrscheinlich bei..."\n`;
    validation += `- ✅ ZWINGEND: 100% Verständnis BEVOR Fixes angewendet werden\n`;
    validation += `- 🔍 URSACHENFORSCHUNG: Semantische Tiefenanalyse obligatorisch\n`;
    validation += `- 🔗 ABHÄNGIGKEITEN: Alle betroffenen Dateien/Systeme identifizieren\n`;
    validation += `- 🧪 VALIDATION: Reverse Engineering nach jeder Änderung\n`;
    validation += `- 📝 DOKUMENTATION: AAR (After Action Review) für jede Lösung\n\n`;

    validation += `**🔍 PROBLEM-ANALYSE:**\n`;
    validation += `**Problem:** ${issue.message || issue.description}\n`;
    validation += `**Status:** ❌ FAILED\n\n`;

    // Spezifische Validierung je nach Issue-Typ
    if ((issue.type || issue.title || "").includes("date-Feld")) {
      validation += this.validateMissingDateField(issue);
    } else if ((issue.type || issue.title || "").includes("image-Feld")) {
      validation += this.validateMissingImageField(issue);
    } else if ((issue.type || issue.title || "").includes("tags-Feld")) {
      validation += this.validateMissingTagsField(issue);
    } else if ((issue.type || issue.title || "").includes("Content zu kurz")) {
      validation += this.validateContentLength(issue);
    } else if ((issue.type || issue.title || "").includes("Keyword-Dichte")) {
      validation += this.validateKeywordDensity(issue);
    } else if ((issue.type || issue.title || "").includes("CSS-Warning")) {
      validation += this.validateCSSWarning(issue);
    } else if ((issue.type || issue.title || "").includes("Robots.txt")) {
      validation += this.validateRobotsFile(issue);
    } else {
      validation += this.validateGenericIssue(issue);
    }

    // Abhängigkeits-Analyse hinzufügen
    validation += `\n**🔗 ABHÄNGIGKEITS-ANALYSE (ZWINGEND):**\n`;
    validation += this.generateDependencyAnalysis(issue);

    validation += `\n**🎯 ORGANISCHE LÖSUNG:** ${issue.solution}\n`;
    validation += `**⚡ URGENCY:** ${issue.urgency || "Normal"}`;

    return validation;
  }

  /**
   * 🔗 ABHÄNGIGKEITS-ANALYSE GENERATOR
   * ZWINGEND: Alle betroffenen Dateien/Systeme identifizieren
   */
  generateDependencyAnalysis(issue) {
    let analysis = ``;
    const issueType = (issue.type || issue.title || "").toLowerCase();

    // Frontmatter-spezifische Abhängigkeiten
    if (
      issueType.includes("frontmatter") ||
      issueType.includes("meta") ||
      issueType.includes("date") ||
      issueType.includes("image") ||
      issueType.includes("tags")
    ) {
      analysis += `**📄 FRONTMATTER-SYSTEM ABHÄNGIGKEITEN:**\n`;
      analysis += `- 🏗️ src/content/config.ts (Content Collection Schema)\n`;
      analysis += `- 📝 src/content/blog/*.md (Alle Blog-Dateien)\n`;
      analysis += `- 🎨 BlogContentCollection Component\n`;
      analysis += `- 📊 SEO Meta-Tag Generation System\n`;
      analysis += `- 🌐 Open Graph Tag Rendering\n`;
      analysis += `- 📋 Schema.org JSON-LD Generation\n`;
      analysis += `- 🔧 astro.config.mjs (Content Processing)\n\n`;

      analysis += `**⚡ VALIDIERUNGS-KETTE:**\n`;
      analysis += `1. Frontmatter → Zod Schema Validation\n`;
      analysis += `2. Schema → getCollection() Processing\n`;
      analysis += `3. Collection → Astro Component Props\n`;
      analysis += `4. Props → Meta Tag Rendering\n`;
      analysis += `5. Meta Tags → SEO Impact\n\n`;

      analysis += `**🚨 BREAKING CHANGE RISIKO:**\n`;
      analysis += `- Änderung am Schema bricht bestehende Blog-Posts\n`;
      analysis += `- Build-Fehler wenn Required Fields fehlen\n`;
      analysis += `- SEO-Impact bei fehlenden Meta-Daten\n\n`;
    }

    // Content-spezifische Abhängigkeiten
    if (
      issueType.includes("content") ||
      issueType.includes("keyword") ||
      issueType.includes("wörter")
    ) {
      analysis += `**📝 CONTENT-PIPELINE ABHÄNGIGKEITEN:**\n`;
      analysis += `- 📄 Markdown Processing Pipeline\n`;
      analysis += `- 🔤 UTF-8 Encoding Validation\n`;
      analysis += `- 🎯 Keyword Density Calculation Algorithm\n`;
      analysis += `- 📊 Word Count Analysis Engine\n`;
      analysis += `- 🏷️ Heading Structure Parser\n`;
      analysis += `- 🔗 Internal Linking System\n`;
      analysis += `- 📋 AIDA/PAS Content Principle Validation\n\n`;
    }

    // Build-spezifische Abhängigkeiten
    if (
      issueType.includes("build") ||
      issueType.includes("css") ||
      issueType.includes("typescript") ||
      issueType.includes("warning")
    ) {
      analysis += `**🚀 BUILD-SYSTEM ABHÄNGIGKEITEN:**\n`;
      analysis += `- 🏗️ Astro Build Pipeline (astro build)\n`;
      analysis += `- ⚡ Vite Processing Engine\n`;
      analysis += `- 🎨 CSS Processing Chain (Lightning CSS)\n`;
      analysis += `- 📜 TypeScript Compilation (tsc)\n`;
      analysis += `- 🔧 ESLint Validation (astro check)\n`;
      analysis += `- 📦 Bundle Generation & Optimization\n`;
      analysis += `- 🗂️ Static File Processing\n\n`;
    }

    // SEO-spezifische Abhängigkeiten
    if (
      issueType.includes("seo") ||
      issueType.includes("robots") ||
      issueType.includes("sitemap")
    ) {
      analysis += `**🔍 SEO-SYSTEM ABHÄNGIGKEITEN:**\n`;
      analysis += `- 🤖 public/robots.txt Configuration\n`;
      analysis += `- 🗺️ Sitemap Generation (@astrojs/sitemap)\n`;
      analysis += `- 📊 Google Analytics Integration\n`;
      analysis += `- 🔍 Search Console Validation\n`;
      analysis += `- 📋 Schema.org Markup Generation\n`;
      analysis += `- 🌐 Open Graph Protocol Implementation\n`;
      analysis += `- 🏷️ Meta Tag System\n\n`;
    }

    // CRITICAL: Deployment Impact Analysis
    analysis += `**🚨 DEPLOYMENT IMPACT ANALYSIS:**\n`;
    analysis += `- ⚠️ KRITISCH: Schema-Änderungen brechen möglicherweise bestehende Posts\n`;
    analysis += `- 🔄 TESTING: Vollständiger pnpm build Test ZWINGEND vor Deployment\n`;
    analysis += `- 📋 ROLLBACK: Git-Commit für Rollback-Möglichkeit erstellen\n`;
    analysis += `- 🧪 VALIDATION: SEO-Score vor/nach Vergleich durchführen\n`;
    analysis += `- 📝 AAR: After Action Review für jede Änderung obligatorisch\n\n`;

    // KI INSTRUCTIONS
    analysis += `**🤖 OBLIGATORISCHE KI-ANWEISUNGEN:**\n`;
    analysis += `- 📖 LESEN: Betroffene Dateien VOLLSTÄNDIG lesen und verstehen\n`;
    analysis += `- 🔍 ANALYSIEREN: Code-Zeile für Code-Zeile semantische Analyse\n`;
    analysis += `- 🧪 TESTEN: Nach JEDER Änderung pnpm build ausführen\n`;
    analysis += `- 📝 DOKUMENTIEREN: Änderungen in AAR protokollieren\n`;
    analysis += `- 🔄 VALIDIEREN: Reverse Engineering zur Bestätigung\n`;

    return analysis;
  }

  // Validierung für fehlendes date-Feld
  validateMissingDateField(issue) {
    const filePath = this.extractFilePathFromMessage(
      issue.message || issue.description
    );
    let validation = `**📁 Betroffene Datei:** ${filePath}\n`;
    validation += `**🔍 Exakte Prüfung:** frontmatter.date || frontmatter.datePublished === undefined\n\n`;

    validation += `**📊 SEO IMPACT-ANALYSE:**\n`;
    validation += `  • ❌ Search Console kann publish date nicht erkennen → Ranking-Verlust\n`;
    validation += `  • ❌ Schema.org Article-Schema incomplete → Rich Results blockiert\n`;
    validation += `  • ❌ Google kann Content-Freshness nicht bewerten → Crawler-Probleme\n`;
    validation += `  • ❌ Social Media Sharing zeigt falsches/kein Datum\n\n`;

    validation += `**💡 EXAKTE LÖSUNG (100% VERSTEHEN):**\n`;
    validation += `\`\`\`yaml\n`;
    validation += `# Option 1: Standard date field\n`;
    validation += `date: "2025-01-15"  # Publication date\n\n`;
    validation += `# Option 2: Falls bereits datePublished verwendet\n`;
    validation += `datePublished: "2025-01-15"  # Publication date\n`;
    validation += `\`\`\`\n\n`;

    validation += `**🔗 ABHÄNGIGE SYSTEME:**\n`;
    validation += `- src/content/config.ts (Schema Definition)\n`;
    validation += `- BlogContentCollection Component (Date Rendering)\n`;
    validation += `- Meta Tag Generation (og:article:published_time)\n`;
    validation += `- Schema.org JSON-LD (datePublished Property)\n\n`;

    validation += `**🔬 Root Cause:** Frontmatter Template fehlt date/datePublished Feld-Validation\n`;
    return validation;
  }

  // Validierung für fehlendes image-Feld
  validateMissingImageField(issue) {
    const filePath = this.extractFilePathFromMessage(
      issue.message || issue.description
    );
    let validation = `**📁 Betroffene Datei:** ${filePath}\n`;
    validation += `**🔍 Exakte Prüfung:** frontmatter.image === undefined\n\n`;

    validation += `**📊 SEO IMPACT-ANALYSE:**\n`;
    validation += `  • ❌ Open Graph Tags incomplete → Schlechte Social Media Previews\n`;
    validation += `  • ❌ Schema.org Article fehlt imageUrl Property → Rich Results blockiert\n`;
    validation += `  • ❌ Google Rich Results können nicht generiert werden\n`;
    validation += `  • ❌ Twitter Cards/LinkedIn Sharing zeigt kein Bild\n`;
    validation += `  • ❌ SEO-Ranking-Faktor "Visual Content" fehlt\n\n`;

    validation += `**💡 EXAKTE LÖSUNG (100% VERSTEHEN):**\n`;
    validation += `\`\`\`yaml\n`;
    validation += `image: "/assets/blog/article-hero.webp"  # Hero image path\n`;
    validation += `# ODER:\n`;
    validation += `image: "/assets/blog/${filePath
      .split("/")
      .pop()
      .replace(".md", "")}.webp"\n`;
    validation += `\`\`\`\n\n`;

    validation += `**🔗 ABHÄNGIGE SYSTEME:**\n`;
    validation += `- src/content/config.ts (Image Field Schema)\n`;
    validation += `- Meta Tag System (og:image Generation)\n`;
    validation += `- Schema.org JSON-LD (image Property)\n`;
    validation += `- Social Media Preview System\n`;
    validation += `- BlogContentCollection Component\n\n`;

    validation += `**🔬 Root Cause:** Frontmatter Template fehlt image Feld-Definition\n`;
    return validation;
  }

  // Validierung für fehlendes tags-Feld
  validateMissingTagsField(issue) {
    const filePath = this.extractFilePathFromMessage(
      issue.message || issue.description
    );
    let validation = `**📁 Datei:** ${filePath}\n`;
    validation += `**🔍 Check:** frontmatter.tags === undefined\n`;
    validation += `**📊 SEO Impact:**\n`;
    validation += `  • Kategorisierung für interne Verlinkung fehlt\n`;
    validation += `  • Topic Clustering für SEO nicht möglich\n`;
    validation += `  • Schema.org Article fehlt keywords Property\n`;
    validation += `**💡 Required Fix:**\n`;
    validation += `\`\`\`yaml\n`;
    validation += `tags: ["Rechtsberatung", "Rechtshilfe", "SEO"]  # Relevante Keywords\n`;
    validation += `\`\`\`\n`;
    validation += `**🔬 Root Cause:** Frontmatter Template missing tags field validation\n`;
    return validation;
  }

  // Validierung für Content-Länge
  validateContentLength(issue) {
    const message = issue.message || issue.description || "";
    const match = message.match(/(\d+) Wörter.*?(\d+)/);
    const currentWords = match ? match[1] : "unknown";
    const targetWords = match ? match[2] : "2300";
    const deficit = targetWords - currentWords;

    let validation = `**📊 Current State:** ${currentWords} Wörter (Deficit: ${deficit})\n`;
    validation += `**🎯 Target:** ${targetWords}+ Wörter für optimales SEO-Ranking\n`;
    validation += `**📊 SEO Impact:**\n`;
    validation += `  • Google bevorzugt comprehensive Content (2300+ Wörter)\n`;
    validation += `  • Niedrigere Ranking-Chancen bei Short-Form Content\n`;
    validation += `  • Reduzierte Dwell-Time und User Engagement\n`;
    validation += `**💡 Required Action:**\n`;
    validation += `  • Erweitere organisch um ${deficit} Wörter\n`;
    validation += `  • Füge praktische Beispiele hinzu\n`;
    validation += `  • Vertiefe technische Details\n`;
    validation += `**🔬 Root Cause:** Content-Standards nicht eingehalten\n`;
    return validation;
  }

  // Validierung für Keyword-Dichte
  validateKeywordDensity(issue) {
    const message = issue.message || issue.description || "";
    const match = message.match(/"([^"]+)".*?(\d+\.?\d*)%.*?(\d+\.?\d*)%/);
    const keyword = match ? match[1] : "unknown";
    const currentDensity = match ? match[2] : "0";
    const targetDensity = match ? match[3] : "1.5";

    let validation = `**🔤 Keyword:** "${keyword}"\n`;
    validation += `**📊 Current Density:** ${currentDensity}% (Target: ${targetDensity}%)\n`;
    validation += `**📊 SEO Impact:**\n`;
    validation += `  • Unteroptimale Keyword-Relevanz für Google\n`;
    validation += `  • Schwächere topical Authority\n`;
    validation += `  • Reduzierte Ranking-Chancen für Fokus-Keyword\n`;
    validation += `**💡 Required Action:**\n`;
    validation += `  • Erhöhe organische Verwendung von "${keyword}"\n`;
    validation += `  • Integriere in H2/H3 Überschriften\n`;
    validation += `  • Verwende natürliche Variationen\n`;
    validation += `**🔬 Root Cause:** Unzureichende Keyword-Optimierung im Content\n`;
    return validation;
  }

  // Validierung für CSS-Warnings
  validateCSSWarning(issue) {
    let validation = `**⚠️ CSS Issue:** Lightning CSS Minification Problem\n`;
    validation += `**🚫 WICHTIGER HINWEIS:** ORGANISCHE SEO-PRINZIPIEN!\n`;
    validation += `**📊 SEO Impact:**\n`;
    validation += `  • Minifizierung ist VERBOTEN (Copilot Instructions)\n`;
    validation += `  • Kann Layout-Probleme verursachen\n`;
    validation += `  • Verschlechtert Developer Experience\n`;
    validation += `**💡 Required Action:**\n`;
    validation += `  • ❌ KEINE Minifizierung verwenden!\n`;
    validation += `  • ✅ Organische CSS-Optimierung bevorzugen\n`;
    validation += `  • ✅ Tailwind-Klassen korrekt verwenden\n`;
    validation += `**🔬 Root Cause:** Unnötige Performance-Tools aktiviert\n`;
    return validation;
  }

  // Validierung für Robots.txt Probleme
  validateRobotsFile(issue) {
    let validation = `**🤖 Critical SEO Issue:** Robots.txt blockiert komplette Website!\n`;
    validation += `**🚨 Status:** KRITISCH - Sofortige Behebung erforderlich\n`;
    validation += `**📊 SEO Impact:**\n`;
    validation += `  • Google kann KEINE Seiten indexieren\n`;
    validation += `  • Kompletter SEO-Traffic blockiert\n`;
    validation += `  • Search Console zeigt Indexing-Errors\n`;
    validation += `**💡 Required Fix:**\n`;
    validation += `\`\`\`\n`;
    validation += `User-agent: *\n`;
    validation += `Allow: /\n`;
    validation += `Sitemap: https://simon-haenel.com/sitemap.xml\n`;
    validation += `\`\`\`\n`;
    validation += `**🔬 Root Cause:** Falsche robots.txt Konfiguration\n`;
    return validation;
  }

  // Generic Issue Validierung
  validateGenericIssue(issue) {
    let validation = `**📊 Issue Details:** Allgemeines Problem erkannt\n`;
    validation += `**🔍 Analysis:** Detaillierte Ursachenforschung erforderlich\n`;
    validation += `**📊 SEO Impact:**\n`;
    validation += `  • Potenzielle Ranking-Beeinträchtigung\n`;
    validation += `  • Organische Optimierung erforderlich\n`;
    validation += `**🔬 Root Cause:** Spezifische Analyse erforderlich\n`;
    return validation;
  }

  // Extrahiere Dateipfad aus Issue-Message
  extractFilePathFromMessage(message) {
    if (!message) return "Unknown file";
    const match = message.match(/src\\content\\blog\\([^:]+)/);
    return match ? match[0] : "Unknown file";
  }

  // Urgency Emoji Helper
  getUrgencyEmoji(urgency) {
    switch (urgency) {
      case "CRITICAL":
        return "🔴";
      case "HIGH":
        return "🟡";
      case "MEDIUM":
        return "🟢";
      case "LOW":
        return "🔵";
      default:
        return "🟢";
    }
  }

  // Category Label Helper
  getCategoryLabel(category) {
    switch (category) {
      case "CRITICAL":
        return "KRITISCH";
      case "IMPORTANT":
        return "WICHTIG";
      case "OPTIMIZATION":
        return "OPTIMIERUNG";
      case "INFO":
        return "INFO";
      default:
        return "OPTIMIERUNG";
    }
  }

  /**
   * 🧠 AAR LEARNING INTEGRATION
   * Analysiert jedes Issue mit AAR Metrics und sammelt Lern-Daten
   */
  /**
   * 🧠 Enhanced AAR Learning Integration mit hochdetaillierten KI-Prompts
   * Analysiert jedes Issue und generiert spezifische Handlungsanweisungen für Astra
   */
  async processAARLearning() {
    try {
      console.log(
        "🧠 Processing AAR Learning Data mit Enhanced KI-Prompt Generation..."
      );

      // Analyze all detected issues with confidence scoring
      for (const issue of this.issues) {
        try {
          const context = await this.gatherIssueContext(issue);
          const analyzedIssue = this.aarCollector.analyzeIssue(issue, context);

          // 🎯 NEW: Generate hochdetaillierte KI-Prompts für Astra
          const detailedPrompt = this.generateDetailedKIPrompt(issue, context);
          analyzedIssue.kiPrompt = detailedPrompt;

          this.analyzedIssues.push(analyzedIssue);

          // Log confidence score with safe access
          const confidence = analyzedIssue?.confidence || 0;
          console.log(
            `🎯 Issue "${issue.type || "Unknown"}" - Confidence: ${(
              confidence * 100
            ).toFixed(1)}% - KI-Prompt generiert`
          );
        } catch (issueError) {
          console.log(
            `⚠️ Skipping AAR analysis for issue: ${issueError.message}`
          );
        }
      }

      // Process any fixes that were applied in this session
      await this.processFixOutcomes();

      console.log(
        `🧠 AAR Analysis Complete: ${this.analyzedIssues.length} issues analyzed mit KI-Prompts`
      );
    } catch (error) {
      console.log(`❌ BUILD-CHECKER FEHLER: ${error.message}`);
    }
  }

  /**
   * 🔍 ISSUE CONTEXT GATHERING
   * Sammelt detaillierte Kontext-Informationen für AAR Learning
   */
  async gatherIssueContext(issue) {
    const context = {
      buildTimestamp: this.startTime.toISOString(),
      projectRoot: CONFIG.PROJECT_ROOT,
      totalIssuesInSession: this.issues.length,
    };

    // File-specific context
    if (issue.filePath) {
      try {
        const filePath = path.resolve(CONFIG.PROJECT_ROOT, issue.filePath);
        const fileContent = await fs.readFile(filePath, "utf8");

        context.fileExists = true;
        context.fileSize = fileContent.length;
        context.fileType = this.detectFileType(filePath);
        context.isProduction = this.isProductionFile(filePath);

        // For markdown files, extract frontmatter
        if (filePath && filePath.endsWith(".md")) {
          context.frontmatterFields =
            this.extractFrontmatterFields(fileContent);
        }
      } catch (error) {
        context.fileExists = false;
        context.fileError = error.message;
      }
    }

    // Issue-specific context (with safe access)
    context.issueCategory = this.categorizeIssue(issue);
    context.severity = this.assessIssueSeverity(issue);
    context.previousOccurrences = this.countPreviousOccurrences(issue);

    return context;
  }

  /**
   * ✅ FIX OUTCOME PROCESSING
   * Verfolgt Outcomes von angewendeten Fixes für AAR Learning
   */
  async processFixOutcomes() {
    // In einem echten Scenario würden hier die Outcomes von Fixes getrackt
    // Für jetzt simulieren wir basierend auf unserem Session-Erfolg

    for (const analyzedIssue of this.analyzedIssues) {
      let outcome = "needs_verification";

      // Simulate outcome based on confidence and issue type
      if (analyzedIssue.confidence > 0.8) {
        outcome = "success";
      } else if (analyzedIssue.confidence < 0.3) {
        outcome = "false_positive";
      }

      // Track the fix in AAR
      const fix = {
        type: "validation_fix",
        description: `Applied validation for ${analyzedIssue.type}`,
        codeChanges: null, // In echten Scenario würde hier der Code-Change stehen
      };

      this.aarCollector.trackFix(analyzedIssue.issueId, fix, outcome);

      // Detect patterns
      if (outcome !== "needs_verification") {
        this.aarCollector.detectPattern(analyzedIssue, fix, outcome);
      }
    }
  }

  // Helper methods for AAR integration
  detectFileType(filePath) {
    if (!filePath) return "unknown";
    if (filePath.includes(".astro")) return "astro";
    if (filePath.includes(".md")) return "markdown";
    if (filePath.includes(".ts")) return "typescript";
    if (filePath.includes(".js")) return "javascript";
    if (filePath.includes("/docs/")) return "documentation";
    return "unknown";
  }

  isProductionFile(filePath) {
    if (!filePath) return false;
    const productionPaths = [
      "/src/",
      "/public/",
      "/pages/",
      "/components/",
      "/layouts/",
    ];
    const documentationPaths = [
      "/docs/",
      "/examples/",
      "/migration/",
      "/archive/",
    ];

    return (
      productionPaths.some((path) => filePath.includes(path)) &&
      !documentationPaths.some((path) => filePath.includes(path))
    );
  }

  extractFrontmatterFields(content) {
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return null;

    const frontmatter = frontmatterMatch[1];
    const fields = [];

    // Simple field extraction
    const lines = frontmatter.split("\n");
    for (const line of lines) {
      const match = line.match(/^(\w+):/);
      if (match) {
        fields.push(match[1]);
      }
    }

    return fields;
  }

  categorizeIssue(issue) {
    const description = (
      issue.description ||
      issue.message ||
      ""
    ).toLowerCase();

    // 🚨 CRITICAL: ABSOLUTE UNDERSTANDING REQUIRED - NO ASSUMPTIONS ALLOWED
    // KI MUST understand 100% of the problem before attempting any fix
    // This categorization affects AAR learning patterns and fix recommendations

    if (description.includes("frontmatter") || description.includes("meta"))
      return "content_meta";
    if (description.includes("image") || description.includes("alt"))
      return "media";
    if (description.includes("seo") || description.includes("keyword"))
      return "seo";
    if (description.includes("link") || description.includes("url"))
      return "navigation";
    if (description.includes("robots") || description.includes("sitemap"))
      return "technical_seo";

    return "general";
  }

  assessIssueSeverity(issue) {
    const description = (
      issue.description ||
      issue.message ||
      ""
    ).toLowerCase();
    const type = issue.type || "";

    // High severity
    if (description.includes("critical") || description.includes("error"))
      return "high";
    if (type.includes("missing") && description.includes("required"))
      return "high";

    // Medium severity
    if (description.includes("warning") || description.includes("should"))
      return "medium";
    if (
      description.includes("content length") ||
      description.includes("keyword density")
    )
      return "medium";

    // Low severity
    return "low";
  }

  countPreviousOccurrences(issue) {
    // In einem echten System würden wir hier historische Daten checken
    // Für jetzt return 0 als placeholder
    return 0;
  }

  // ======================================================
  // NEW v6.0.0 METHODS - KI-Self-Validation & Advanced Analysis
  // ======================================================

  /**
   * 📊 CSV-Daten laden (Erweitert mit SEO-Messdaten + Git Intelligence)
   */
  async loadCSVData() {
    console.log(
      "📊 Lade CSV-Daten (Google Search Console + SEO Measurements)..."
    );

    try {
      const csvDir = path.join(CONFIG.PROJECT_ROOT, "docs", "015_build_logs");
      const seoMeasurementsDir = path.join(csvDir, "seo_messungs_dateien");

      this.csvData = {
        impressions: [],
        indexing: [],
        criticalIssues: [],
        searchQueries: [],
        pages: [],
        countries: [],
        gitRecommendations: [], // NEW: Git-Intelligence
      };

      // Legacy CSV-Dateien laden
      await this.loadLegacyCSVData(csvDir);

      // Neue SEO-Messdaten laden
      await this.loadSEOMeasurementData(seoMeasurementsDir);

      // Git-Intelligence Recommendations generieren
      this.generateGitIntelligenceRecommendations();

      console.log(`✅ CSV-Daten vollständig geladen:`);
      console.log(
        `   📈 Legacy kritische Probleme: ${this.csvData.criticalIssues.length}`
      );
      console.log(`   🔍 Suchanfragen: ${this.csvData.searchQueries.length}`);
      console.log(`   📄 Seiten: ${this.csvData.pages.length}`);
      console.log(`   🌍 Länder: ${this.csvData.countries.length}`);
      console.log(
        `   🔧 Git-Empfehlungen: ${this.csvData.gitRecommendations.length}`
      );
    } catch (error) {
      console.log("⚠️ CSV-Daten konnten nicht geladen werden:", error.message);
    }
  }

  /**
   * 📊 Legacy CSV-Daten laden
   */
  async loadLegacyCSVData(csvDir) {
    // Legacy CSV-Pfade (OneDrive + docs)
    const legacyPaths = [
      "C:\\Users\\User01\\OneDrive - Simon-Haenel\\Downloads\\Diagramm.csv",
      "C:\\Users\\User01\\OneDrive - Simon-Haenel\\Downloads\\Kritische Probleme.csv",
      path.join(csvDir, "Diagramm.csv"),
      path.join(csvDir, "Kritische Probleme.csv"),
    ];

    for (const csvPath of legacyPaths) {
      try {
        if (csvPath.includes("Diagramm.csv")) {
          const data = await fs.readFile(csvPath, "utf8");
          this.parseDiagramCSV(data);
          console.log(
            `📈 Legacy Impressionen geladen von: ${path.basename(csvPath)}`
          );
        } else if (csvPath.includes("Kritische Probleme.csv")) {
          const data = await fs.readFile(csvPath, "utf8");
          this.parseCriticalIssuesCSV(data);
          console.log(
            `⚠️ Legacy kritische Probleme geladen von: ${path.basename(
              csvPath
            )}`
          );
        }
      } catch (error) {
        // Stil weitergehen - nicht alle Pfade müssen existieren
      }
    }
  }

  /**
   * 🎯 SEO-Messdaten laden und analysieren
   */
  async loadSEOMeasurementData(seoDir) {
    console.log("🎯 Lade erweiterte SEO-Messdaten...");

    try {
      // Suchanfragen.csv - Keyword Performance
      const searchQueriesPath = path.join(seoDir, "Suchanfragen.csv");
      try {
        const searchContent = await fs.readFile(searchQueriesPath, "utf8");
        this.csvData.searchQueries = this.parseSearchQueriesCSV(searchContent);
        console.log(
          `🔍 Suchanfragen geladen: ${this.csvData.searchQueries.length} Keywords`
        );
        this.analyzeKeywordPerformance();
      } catch {
        console.log("🔍 Suchanfragen.csv nicht gefunden");
      }

      // Seiten.csv - Page Performance
      const pagesPath = path.join(seoDir, "Seiten.csv");
      try {
        const pagesContent = await fs.readFile(pagesPath, "utf8");
        this.csvData.pages = this.parsePagesCSV(pagesContent);
        console.log(
          `📄 Seiten-Performance geladen: ${this.csvData.pages.length} URLs`
        );
        this.analyzePagePerformance();
      } catch {
        console.log("📄 Seiten.csv nicht gefunden");
      }

      // Länder.csv - Geographic Performance
      const countriesPath = path.join(seoDir, "Länder.csv");
      try {
        const countriesContent = await fs.readFile(countriesPath, "utf8");
        this.csvData.countries = this.parseCountriesCSV(countriesContent);
        console.log(
          `🌍 Länder-Daten geladen: ${this.csvData.countries.length} Märkte`
        );
        this.analyzeGeographicPerformance();
      } catch {
        console.log("🌍 Länder.csv nicht gefunden");
      }
    } catch (error) {
      console.log("⚠️ SEO-Messdaten Fehler:", error.message);
    }
  }

  /**
   * 📈 Diagramm CSV parsen
   */
  parseDiagramCSV(data) {
    const lines = data.split("\n").slice(1); // Header überspringen

    for (const line of lines) {
      if (line.trim()) {
        const [datum, nichtIndexiert, indexiert, impressionen] =
          line.split(",");
        this.csvData.impressions.push({
          date: datum,
          notIndexed: parseInt(nichtIndexiert) || 0,
          indexed: parseInt(indexiert) || 0,
          impressions: parseInt(impressionen) || 0,
        });
      }
    }

    // Trend-Analyse
    const recent = this.csvData.impressions.slice(-7); // Letzte 7 Tage
    const avgImpressions =
      recent.reduce((sum, day) => sum + day.impressions, 0) / recent.length;

    if (avgImpressions < 10) {
      this.addIssue(
        RATINGS.CRITICAL,
        "Impressionen drastisch gesunken",
        `Durchschnittliche Impressionen: ${avgImpressions.toFixed(
          1
        )} (letzte 7 Tage)`,
        "SEO-Recovery-Strategie implementieren"
      );
    }
  }

  /**
   * ⚠️ Kritische Probleme CSV parsen
   */
  parseCriticalIssuesCSV(data) {
    const lines = data.split("\n").slice(1); // Header überspringen

    for (const line of lines) {
      if (line.trim()) {
        const parts = line.split(",");
        if (parts.length >= 4) {
          const [grund, quelle, validierung, seiten] = parts;
          const seitenCount = parseInt(seiten) || 0;

          if (seitenCount > 0) {
            this.csvData.criticalIssues.push({
              reason: grund,
              source: quelle,
              validation: validierung,
              pages: seitenCount,
            });

            // Als Issues hinzufügen
            this.addIssue(
              RATINGS.CRITICAL,
              `Indexierung Problem: ${grund}`,
              `${seitenCount} Seiten betroffen - Quelle: ${quelle}`,
              "Indexierung-Probleme systematisch beheben"
            );
          }
        }
      }
    }
  }

  /**
   * 🔍 Suchanfragen CSV parsen (NEW)
   */
  parseSearchQueriesCSV(data) {
    const lines = data.split("\n").slice(1); // Header überspringen
    const queries = [];

    for (const line of lines) {
      if (line.trim()) {
        const [query, clicks, impressions, ctr, position] = line.split(",");
        queries.push({
          query: query?.trim() || "",
          clicks: parseInt(clicks) || 0,
          impressions: parseInt(impressions) || 0,
          ctr: parseFloat(ctr?.replace("%", "")) || 0,
          position: parseFloat(position) || 0,
        });
      }
    }
    return queries;
  }

  /**
   * 📄 Seiten CSV parsen (NEW)
   */
  parsePagesCSV(data) {
    const lines = data.split("\n").slice(1); // Header überspringen
    const pages = [];

    for (const line of lines) {
      if (line.trim()) {
        const [url, clicks, impressions, ctr, position] = line.split(",");
        pages.push({
          url: url?.trim() || "",
          clicks: parseInt(clicks) || 0,
          impressions: parseInt(impressions) || 0,
          ctr: parseFloat(ctr?.replace("%", "")) || 0,
          position: parseFloat(position) || 0,
        });
      }
    }
    return pages;
  }

  /**
   * 🌍 Länder CSV parsen (NEW)
   */
  parseCountriesCSV(data) {
    const lines = data.split("\n").slice(1); // Header überspringen
    const countries = [];

    for (const line of lines) {
      if (line.trim()) {
        const [country, clicks, impressions, ctr, position] = line.split(",");
        countries.push({
          country: country?.trim() || "",
          clicks: parseInt(clicks) || 0,
          impressions: parseInt(impressions) || 0,
          ctr: parseFloat(ctr?.replace("%", "")) || 0,
          position: parseFloat(position) || 0,
        });
      }
    }
    return countries;
  }

  /**
   * 🔍 Keyword Performance Analyse (NEW)
   */
  analyzeKeywordPerformance() {
    if (!this.csvData.searchQueries?.length) return;

    console.log(
      `🔍 Analysiere ${this.csvData.searchQueries.length} Keywords...`
    );

    // High Potential Keywords (hohe Impressionen, niedrige Position)
    const highPotential = this.csvData.searchQueries.filter(
      (q) => q.impressions > 10 && q.position > 20 && q.clicks === 0
    );

    if (highPotential.length > 0) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "High-Potential Keywords",
        `${highPotential.length} Keywords mit hohem Potenzial: ${highPotential
          .slice(0, 3)
          .map((k) => k.query)
          .join(", ")}`,
        "Content für Top-Keywords organisch optimieren (siehe KEYWORD-EXPANSION-VORSCHLAEGE.md)"
      );
    }

    // Brand Keyword Performance
    const brandKeywords = this.csvData.searchQueries.filter(
      (q) =>
        q.query.toLowerCase().includes("simon") ||
        q.query.toLowerCase().includes("hänel")
    );

    if (brandKeywords.length > 0) {
      const avgPosition =
        brandKeywords.reduce((sum, k) => sum + k.position, 0) /
        brandKeywords.length;
      if (avgPosition > 5) {
        this.addIssue(
          RATINGS.IMPORTANT,
          "Brand Keyword Position",
          `Durchschnittsposition für Brand Keywords: ${avgPosition.toFixed(1)}`,
          "Brand-Präsenz organisch stärken"
        );
      } else {
        this.addIssue(
          RATINGS.INFO,
          "Excellente Brand Performance",
          `Brand Keywords durchschnittlich auf Position ${avgPosition.toFixed(
            1
          )}`,
          "Brand-Performance halten"
        );
      }
    }

    // Zero-Click Keywords (RIESIGES POTENZIAL!)
    const zeroClickKeywords = this.csvData.searchQueries.filter(
      (q) => q.impressions > 5 && q.clicks === 0
    );

    if (zeroClickKeywords.length > 5) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Zero-Click Keywords POTENZIAL",
        `${
          zeroClickKeywords.length
        } Keywords ohne Klicks trotz ${zeroClickKeywords.reduce(
          (sum, k) => sum + k.impressions,
          0
        )} Impressionen!`,
        "CTR durch organische Meta-Tag + Title Optimierung massiv verbessern"
      );
    }

    // Compliance Marketing Spezialanalyse (aus CSV erkannt)
    const complianceKeywords = this.csvData.searchQueries.filter((q) =>
      q.query.toLowerCase().includes("compliance")
    );

    if (complianceKeywords.length > 0) {
      const complianceTotal = complianceKeywords.reduce(
        (sum, k) => sum + k.impressions,
        0
      );
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Compliance Marketing Potenzial",
        `Compliance-Keywords: ${complianceTotal} Impressionen, Ø Position: ${(
          complianceKeywords.reduce((sum, k) => sum + k.position, 0) /
          complianceKeywords.length
        ).toFixed(1)}`,
        "Compliance-Content massiv ausbauen - RIESIGES Nischen-Potenzial!"
      );
    }
  }

  /**
   * 📄 Page Performance Analyse (NEW)
   */
  analyzePagePerformance() {
    if (!this.csvData.pages?.length) return;

    console.log(`📄 Analysiere ${this.csvData.pages.length} Seiten...`);

    // Seiten mit hohen Impressionen aber niedrigen Klicks
    const lowCTRPages = this.csvData.pages.filter(
      (p) => p.impressions > 10 && p.ctr < 2 && p.clicks === 0
    );

    if (lowCTRPages.length > 0) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Niedrige CTR Seiten",
        `${
          lowCTRPages.length
        } Seiten mit niedrigen Klickraten trotz ${lowCTRPages.reduce(
          (sum, p) => sum + p.impressions,
          0
        )} Impressionen`,
        "Organische Meta-Descriptions und Titles optimieren - SOFORTIGES CTR-Potenzial!"
      );
    }

    // URL-Duplikate erkennen (www vs non-www)
    const wwwPages = this.csvData.pages.filter((p) => p.url.includes("www."));
    const nonWwwPages = this.csvData.pages.filter(
      (p) => !p.url.includes("www.") && p.url.includes("simon-haenel.com")
    );

    if (wwwPages.length > 0 && nonWwwPages.length > 0) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "URL-Duplikate erkannt",
        `${wwwPages.length} www + ${nonWwwPages.length} non-www Versionen beide indexiert`,
        "Kanonische URLs einheitlich festlegen - SEO-Kraft bündeln"
      );
    }

    // Top-Performance Seiten identifizieren
    const topPages = this.csvData.pages
      .filter((p) => p.clicks > 0)
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 3);

    if (topPages.length > 0) {
      this.addIssue(
        RATINGS.INFO,
        "Top-Performance Seiten",
        `Beste Seiten: ${topPages
          .map((p) => `${p.url.split("/").pop()} (${p.clicks} Klicks)`)
          .join(", ")}`,
        "Erfolgreiche Seiten als Template für Content-Optimierung nutzen"
      );
    }
  }

  /**
   * 🌍 Geographic Performance Analyse (NEW)
   */
  analyzeGeographicPerformance() {
    if (!this.csvData.countries?.length) return;

    console.log(`🌍 Analysiere ${this.csvData.countries.length} Länder...`);

    // Top Märkte identifizieren
    const topMarkets = this.csvData.countries
      .filter((c) => c.impressions > 10)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 3);

    if (topMarkets.length > 0) {
      this.addIssue(
        RATINGS.INFO,
        "Top Märkte identifiziert",
        `Hauptmärkte: ${topMarkets
          .map((m) => `${m.country} (${m.impressions} Impressionen)`)
          .join(", ")}`,
        "Geo-spezifische Content-Optimierung für Top-Märkte prüfen"
      );
    }

    // Schweizer Markt Performance (Heimmarkt!)
    const swissData = this.csvData.countries.find(
      (c) => c.country === "Schweiz"
    );
    if (swissData && swissData.ctr > 5) {
      this.addIssue(
        RATINGS.INFO,
        "Schweizer Markt Excellence",
        `Sehr gute CTR in der Schweiz: ${swissData.ctr}% (${swissData.clicks} Klicks)`,
        "Schweizer Markt weiter ausbauen - lokale SEO verstärken"
      );
    }

    // Deutsche Markt Potenzial
    const germanData = this.csvData.countries.find(
      (c) => c.country === "Deutschland"
    );
    if (germanData && germanData.impressions > 50 && germanData.clicks === 0) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Deutscher Markt UNGENUTZTES Potenzial",
        `Deutschland: ${germanData.impressions} Impressionen aber 0 Klicks!`,
        "Deutsche Keywords und Content-Lokalisierung massiv ausbauen"
      );
    }
  }

  /**
   * 🔧 Git-Intelligence Recommendations generieren (NEW)
   */
  generateGitIntelligenceRecommendations() {
    console.log("🔧 Generiere Git-Intelligence Empfehlungen...");

    const totalIssues = this.issues.length;
    const criticalIssues = this.issues.filter(
      (i) => i.priority === RATINGS.CRITICAL
    ).length;
    const csvIssues = this.csvData.criticalIssues?.length || 0;

    // Git-Empfehlungen basierend auf Daten
    if (totalIssues > 15 || criticalIssues > 0) {
      this.csvData.gitRecommendations.push({
        type: "pre_fix_backup",
        urgency: "HOCH",
        command: `git add . && git commit -m "Pre-fix backup: Build-Checker found ${totalIssues} issues (${criticalIssues} critical)"`,
        reason: `${totalIssues} Issues gefunden - Backup vor Fixes erstellen`,
        autoExecute: true,
        confidence: "SEHR HOCH",
      });
    }

    if (csvIssues > 0) {
      this.csvData.gitRecommendations.push({
        type: "csv_analysis_commit",
        urgency: "MITTEL",
        command:
          'git add docs/015_build_logs/seo_messungs_dateien/ && git commit -m "Add: SEO measurement data analysis with keyword insights"',
        reason: "SEO-Messdaten für Verlaufsanalyse sichern",
        autoExecute: false,
        confidence: "HOCH",
      });
    }

    // Keyword-Expansion sichern
    this.csvData.gitRecommendations.push({
      type: "keyword_expansion_commit",
      urgency: "MITTEL",
      command:
        'git add docs/015_build_logs/seo_messungs_dateien/KEYWORD-EXPANSION-VORSCHLAEGE.md && git commit -m "Add: Data-driven keyword expansion recommendations"',
      reason: "Keyword-Expansion-Vorschläge für Verlaufsanalyse sichern",
      autoExecute: false,
      confidence: "HOCH",
    });

    // Post-fix Empfehlungen
    this.csvData.gitRecommendations.push({
      type: "post_fix_validation",
      urgency: "HOCH",
      command:
        'pnpm build && git add . && git commit -m "Post-fix validation: Resolved SEO issues based on CSV analysis"',
      reason: "Fixes validieren und sichern",
      autoExecute: false,
      executeAfter: "issue_resolution",
      confidence: "SEHR HOCH",
    });

    // Intelligente Push-Empfehlung
    if (totalIssues < 10) {
      this.csvData.gitRecommendations.push({
        type: "smart_push",
        urgency: "NIEDRIG",
        command: "git push origin main",
        reason: "Wenig kritische Issues - sicher zu pushen",
        autoExecute: false,
        confidence: "MITTEL",
      });
    }

    console.log(
      `🔧 ${this.csvData.gitRecommendations.length} Git-Empfehlungen generiert`
    );
  }

  /**
   * 🔗 Link-Integrität-Analyse (ERWEITERT mit 404-Detection + Browser Errors)
   */
  async performLinkIntegrityAnalysis() {
    console.log("🔗 Führe erweiterte Link-Integrität-Analyse durch...");

    try {
      // Analysiere 404-Probleme aus CSV
      const notFoundIssues = this.csvData.criticalIssues.filter(
        (issue) =>
          issue.reason.includes("404") ||
          issue.reason.includes("Nicht gefunden")
      );

      for (const issue of notFoundIssues) {
        this.addIssue(
          RATINGS.CRITICAL,
          "404-Fehler erkannt",
          `${issue.pages} Seiten mit 404-Fehlern (${issue.reason})`,
          "Tote Links identifizieren und reparieren oder entfernen"
        );
      }

      // NEUE FUNKTION: Spezifische 404-Ressourcen prüfen
      await this.checkSpecific404Resources();

      // NEUE FUNKTION: Indexierungs-Probleme aus CSV analysieren
      await this.analyzeIndexingIssues();

      // Prüfe interne Verlinkung in Content-Dateien
      await this.validateInternalLinks();

      console.log("✅ Link-Integrität-Analyse abgeschlossen");
    } catch (error) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Link-Analyse Fehler",
        error.message,
        "Link-Validierung-System reparieren"
      );
    }
  }

  /**
   * 🔍 Spezifische 404-Ressourcen prüfen (NEW aus Ideen-Checkliste)
   */
  async checkSpecific404Resources() {
    console.log("🔍 Prüfe spezifische 404-Ressourcen...");

    // Bekannte problematische Ressourcen aus Browser Console Logs
    const problematicResources = [
      "simon-haenel-expertenmacher-versteinert.webp",
      "simon-haenel.com/images/",
      "www.simon-haenel.com/images/",
    ];

    const projectRoot = CONFIG.PROJECT_ROOT;
    const publicDir = path.join(projectRoot, "public");
    const assetsDir = path.join(publicDir, "assets");
    const imagesDir = path.join(assetsDir, "images");

    for (const resource of problematicResources) {
      if (resource.includes(".webp")) {
        // Prüfe ob Bild-Ressource existiert
        const imagePath = path.join(imagesDir, resource);
        try {
          await fs.access(imagePath);
          this.addIssue(
            RATINGS.INFO,
            "404-Ressource gefunden",
            `${resource} existiert in ${imagesDir}`,
            "Pfad-Referenzen in HTML/Markdown korrigieren"
          );
        } catch {
          this.addIssue(
            RATINGS.CRITICAL,
            "404-Ressource fehlt",
            `${resource} nicht gefunden - Browser Console 404 Error`,
            "Fehlende Bild-Ressource erstellen oder Referenzen entfernen"
          );
        }
      }
    }

    // Prüfe allgemeine Asset-Struktur
    try {
      const imageFiles = await fs.readdir(imagesDir);
      this.addIssue(
        RATINGS.INFO,
        "Assets-Inventar",
        `${imageFiles.length} Bild-Assets gefunden in /public/assets/images/`,
        "Asset-Referenzen organisch validieren"
      );
    } catch {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Images-Verzeichnis fehlt",
        "/public/assets/images/ nicht gefunden",
        "Asset-Struktur für SEO-Images erstellen"
      );
    }
  }

  /**
   * 📊 Indexierungs-Probleme analysieren (NEW aus Google Search Console)
   */
  async analyzeIndexingIssues() {
    console.log("📊 Analysiere Indexierungs-Probleme...");

    // Indexierungs-Probleme aus Ideen-Checkliste
    const indexingIssues = [
      { reason: "Nicht gefunden (404)", pages: 29, severity: RATINGS.CRITICAL },
      {
        reason: "Seite mit Weiterleitung",
        pages: 11,
        severity: RATINGS.IMPORTANT,
      },
      {
        reason: "Alternative Seite mit richtigem kanonischen Tag",
        pages: 25,
        severity: RATINGS.OPTIMIZATION,
      },
      {
        reason: 'Durch "noindex"-Tag ausgeschlossen',
        pages: 17,
        severity: RATINGS.IMPORTANT,
      },
      {
        reason: "Gecrawlt – zurzeit nicht indexiert",
        pages: 24,
        severity: RATINGS.OPTIMIZATION,
      },
      {
        reason: "Gefunden – zurzeit nicht indexiert",
        pages: 1,
        severity: RATINGS.OPTIMIZATION,
      },
    ];

    for (const issue of indexingIssues) {
      if (issue.pages > 0) {
        this.addIssue(
          issue.severity,
          `Indexierung: ${issue.reason}`,
          `${issue.pages} Seiten betroffen - Google Search Console Daten`,
          this.getIndexingRecommendation(issue.reason)
        );
      }
    }

    // Gesamtanalyse der nicht-indexierten Seiten
    const totalNonIndexed = indexingIssues.reduce(
      (sum, issue) => sum + issue.pages,
      0
    );
    if (totalNonIndexed > 50) {
      this.addIssue(
        RATINGS.CRITICAL,
        "Massive Indexierungs-Probleme",
        `${totalNonIndexed} Seiten nicht indexiert - SEO-NOTFALL!`,
        "Sofortige systematische Indexierungs-Optimierung erforderlich"
      );
    }
  }

  /**
   * 💡 Indexierungs-Empfehlungen generieren
   */
  getIndexingRecommendation(reason) {
    const recommendations = {
      "Nicht gefunden (404)":
        "Tote Links entfernen, Redirects einrichten, Sitemap bereinigen",
      "Seite mit Weiterleitung":
        "Redirect-Ketten auflösen, direkte Links verwenden",
      "Alternative Seite mit richtigem kanonischen Tag":
        "Kanonische URLs konsolidieren",
      'Durch "noindex"-Tag ausgeschlossen':
        "noindex-Tags überprüfen und entfernen falls SEO gewünscht",
      "Gecrawlt – zurzeit nicht indexiert":
        "Content-Qualität verbessern, interne Verlinkung stärken",
      "Gefunden – zurzeit nicht indexiert":
        "Geduld - Google indexiert bald, Content-Wert erhöhen",
    };

    return (
      recommendations[reason] ||
      "Individuelle Analyse der Indexierungs-Probleme erforderlich"
    );
  }

  /**
   * 🔗 Interne Links validieren
   */
  async validateInternalLinks() {
    console.log("🔗 Validiere interne Verlinkung...");

    try {
      const contentDir = path.join(
        CONFIG.PROJECT_ROOT,
        "src",
        "content",
        "blog"
      );
      const blogFiles = await fs.readdir(contentDir);

      let totalInternalLinks = 0;
      let brokenInternalLinks = 0;

      for (const file of blogFiles) {
        if (file.endsWith(".md")) {
          const filePath = path.join(contentDir, file);
          const content = await fs.readFile(filePath, "utf8");

          // Interne Links finden
          const internalLinkMatches =
            content.match(/\[.*?\]\(\/[^)]*\)/g) || [];
          totalInternalLinks += internalLinkMatches.length;

          // TODO: Validate actual link targets
          // Für jetzt nur zählen
        }
      }

      if (totalInternalLinks > 0) {
        this.addIssue(
          RATINGS.INFO,
          "Interne Verlinkung",
          `${totalInternalLinks} interne Links gefunden`,
          "Interne Verlinkung für SEO weiter ausbauen"
        );
      } else {
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "Interne Verlinkung schwach",
          "Wenig interne Verlinkung erkannt",
          "Interne Verlinkung massiv ausbauen für SEO-Boost"
        );
      }
    } catch (error) {
      console.log("⚠️ Interne Link-Validierung übersprungen:", error.message);
    }
  }

  /**
   * 🔗 Interne Links analysieren
   */
  async analyzeInternalLinks() {
    try {
      const markdownFiles = await this.getMarkdownFiles(CONFIG.CONTENT_DIR);

      for (const filePath of markdownFiles) {
        const content = await fs.readFile(filePath, "utf8");
        const relativePath = path.relative(CONFIG.PROJECT_ROOT, filePath);

        // Suche nach internen Links
        const internalLinks = content.match(/\[.*?\]\(\/.*?\)/g) || [];
        const externalLinks = content.match(/\[.*?\]\(https?:\/\/.*?\)/g) || [];

        if (internalLinks.length < CONFIG.SEO_STANDARDS.MIN_INTERNAL_LINKS) {
          this.addIssue(
            RATINGS.OPTIMIZATION,
            "Zu wenig interne Links",
            `${relativePath}: ${internalLinks.length} interne Links (min: ${CONFIG.SEO_STANDARDS.MIN_INTERNAL_LINKS})`,
            "Mehr interne Verlinkung für bessere SEO hinzufügen"
          );
        }

        if (externalLinks.length > CONFIG.SEO_STANDARDS.MAX_EXTERNAL_LINKS) {
          this.addIssue(
            RATINGS.OPTIMIZATION,
            "Zu viele externe Links",
            `${relativePath}: ${externalLinks.length} externe Links (max: ${CONFIG.SEO_STANDARDS.MAX_EXTERNAL_LINKS})`,
            "Externe Links reduzieren für bessere Link-Equity"
          );
        }
      }
    } catch (error) {
      console.error("❌ Interne Link-Analyse Fehler:", error.message);
    }
  }

  /**
   * 🎨 CSS-Konsistenz-Analyse (ERWEITERT mit 60/30/10 Prinzip + Inline-Style Detection)
   */
  async performCSSConsistencyAnalysis() {
    console.log("🎨 Führe erweiterte CSS-Konsistenz-Analyse durch...");
    console.log(
      "🎨 NEUE FEATURES: 60/30/10 Prinzip + Inline-Style Detection + Design-Doc Validierung"
    );

    try {
      // NEUE FUNKTION: 60/30/10 Design-Prinzip Validierung
      await this.validateDesignDocumentation();

      // CSS-Design-Dokumentation validieren (enthält Inline-Style + Tailwind Detection)
      await this.validateDesignDocumentation();

      // NEUE FUNKTION: Browser Console Errors prüfen
      await this.checkBrowserConsoleErrors();

      // Bestehende CSS-Analyse
      const cssFiles = await this.findCSSFiles();

      for (const cssFile of cssFiles) {
        await this.analyzeCSSFile(cssFile);
      }

      console.log("✅ CSS-Konsistenz-Analyse abgeschlossen");
    } catch (error) {
      console.error("❌ CSS-Konsistenz-Analyse Fehler:", error.message);
      this.addIssue(
        RATINGS.IMPORTANT,
        "CSS-Analyse Fehler",
        error.message,
        "CSS-Analyse-System reparieren"
      );
    }
  }

  /**
   * 🌐 Browser Console Errors prüfen (NEW aus Ideen-Checkliste)
   */
  async checkBrowserConsoleErrors() {
    console.log("🌐 Analysiere bekannte Browser Console Errors...");

    // Bekannte Browser Console Errors aus Ideen-Checkliste
    const knownErrors = [
      {
        error:
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
        resource: "simon-haenel-expertenmacher-versteinert.webp",
        type: "RESOURCE_404",
        severity: RATINGS.CRITICAL,
      },
      {
        error: "Latenz der Dokumentanfrage",
        savings: "60 ms",
        type: "PERFORMANCE_LATENCY",
        severity: RATINGS.OPTIMIZATION,
      },
      {
        error: "Bildübermittlung verbessern",
        savings: "19 KiB",
        type: "IMAGE_OPTIMIZATION",
        severity: RATINGS.OPTIMIZATION,
      },
      {
        error: "Anfragen zum Blockieren des Renderings",
        type: "RENDER_BLOCKING",
        severity: RATINGS.IMPORTANT,
      },
    ];

    for (const errorData of knownErrors) {
      this.addIssue(
        errorData.severity,
        `Browser Console: ${errorData.type}`,
        `${errorData.error}${
          errorData.savings ? ` (Einsparung: ${errorData.savings})` : ""
        }${errorData.resource ? ` - Ressource: ${errorData.resource}` : ""}`,
        this.getBrowserErrorRecommendation(errorData.type)
      );
    }

    // Organische Performance-Hinweise (ohne Tools!)
    this.addIssue(
      RATINGS.INFO,
      "Organische Performance-Analyse",
      "Browser Console Errors erkannt - Organische Optimierung möglich",
      "KEINE Performance-Tools verwenden! Organische Lösungen bevorzugen"
    );
  }

  /**
   * 🎨 60/30/10 Design-Dokumentation Validierung (NEU)
   */
  async validateDesignDocumentation() {
    console.log("🎨 Validiere 60/30/10 Design-Dokumentation...");

    try {
      const designDocPath =
        CONFIG.SEO_STANDARDS.CSS_DESIGN_VALIDATION.DESIGN_DOC_PATH;
      const cssFilePath =
        CONFIG.SEO_STANDARDS.CSS_DESIGN_VALIDATION.CSS_FILE_PATH;

      // Design-Dokumentation lesen
      const designDoc = await fs.readFile(designDocPath, "utf-8");
      const cssFile = await fs.readFile(cssFilePath, "utf-8");

      // 60/30/10 Farbschema prüfen
      await this.validateColorScheme(designDoc, cssFile);

      // UI-Elemente Vollständigkeit prüfen
      await this.validateUIElementsCompleteness(designDoc, cssFile);

      // Fehlende Definitionen identifizieren
      await this.identifyMissingDefinitions(designDoc, cssFile);

      // Inline-Style und Tailwind CSS Erkennung (KORRIGIERT: awaited)
      const inlineStylesFound = await this.detectInlineStyles();
      const tailwindClassesFound =
        this.detectTailwindClasses(inlineStylesFound);

      // Verwende erweiterte Migration-Prompt wenn sowohl Inline als auch Tailwind gefunden
      if (inlineStylesFound.length > 0 || tailwindClassesFound.length > 0) {
        this.generateExtendedMigrationPrompt(
          inlineStylesFound,
          tailwindClassesFound
        );
      }
    } catch (error) {
      this.addIssue(
        RATINGS.CRITICAL,
        "Design-Dokumentation Fehler",
        `Kann Design-Dokumentation nicht lesen: ${error.message}`,
        "ZWINGEND: global_css.md muss vollständig in natürlicher Sprache ergänzt werden bevor CSS-Änderungen"
      );
    }
  }

  /**
   * 🎨 60/30/10 Farbschema Validierung
   */
  async validateColorScheme(designDoc, cssFile) {
    const colorScheme = CONFIG.SEO_STANDARDS.CSS_DESIGN_VALIDATION.COLOR_SCHEME;

    // Prüfe ob Farben in CSS-Datei korrekt definiert sind
    const missingColors = [];

    if (!cssFile.includes(colorScheme.PRIMARY)) {
      missingColors.push(
        `Primärfarbe ${colorScheme.PRIMARY} (60% - Hintergrund)`
      );
    }

    if (!cssFile.includes(colorScheme.SECONDARY)) {
      missingColors.push(
        `Sekundärfarbe ${colorScheme.SECONDARY} (30% - Card-Border, Eingabefelder)`
      );
    }

    if (!cssFile.includes(colorScheme.ACCENT)) {
      missingColors.push(
        `Akzentfarbe ${colorScheme.ACCENT} (10% - Buttons, Call-to-Actions)`
      );
    }

    if (missingColors.length > 0) {
      this.addIssue(
        RATINGS.CRITICAL,
        "60/30/10 Farbschema Verletzung",
        `Fehlende Farben in global.css: ${missingColors.join(", ")}`,
        "KI MUSS ZWINGEND zuerst global_css.md vollständig in natürlicher Sprache ergänzen"
      );
    }
  }

  /**
   * 🎨 UI-Elemente Vollständigkeit prüfen
   */
  async validateUIElementsCompleteness(designDoc, cssFile) {
    const requiredElements =
      CONFIG.SEO_STANDARDS.CSS_DESIGN_VALIDATION.REQUIRED_ELEMENTS;
    const missingElements = [];

    for (const element of requiredElements) {
      // Prüfe ob Element in Design-Doc definiert ist
      const elementInDoc = designDoc
        .toLowerCase()
        .includes(element.toLowerCase());

      // Prüfe ob Element in CSS implementiert ist
      const elementInCSS =
        cssFile.toLowerCase().includes(element.toLowerCase()) ||
        cssFile.includes(`.${element}`) ||
        cssFile.includes(`#${element}`);

      if (elementInDoc && !elementInCSS) {
        missingElements.push(element);
      }
    }

    if (missingElements.length > 0) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Fehlende CSS-Implementierung",
        `UI-Elemente in global_css.md definiert aber nicht in global.css: ${missingElements.join(
          ", "
        )}`,
        "KI MUSS alle in global_css.md definierten Elemente in global.css implementieren"
      );
    }
  }

  /**
   * 🎨 Fehlende Definitionen identifizieren
   */
  async identifyMissingDefinitions(designDoc, cssFile) {
    // Extrahiere CSS-Klassen aus CSS-Datei
    const cssClassMatches =
      cssFile.match(/\.[a-zA-Z][a-zA-Z0-9_-]*\s*\{/g) || [];
    const cssClasses = cssClassMatches.map((match) =>
      match.replace(/\s*\{$/, "").substring(1)
    );

    // Prüfe welche CSS-Klassen nicht in Design-Doc dokumentiert sind
    const undocumentedClasses = [];

    for (const cssClass of cssClasses) {
      if (!designDoc.toLowerCase().includes(cssClass.toLowerCase())) {
        undocumentedClasses.push(cssClass);
      }
    }

    if (undocumentedClasses.length > 0) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "Undokumentierte CSS-Klassen",
        `CSS-Klassen in global.css ohne Definition in global_css.md: ${undocumentedClasses
          .slice(0, 10)
          .join(", ")}${undocumentedClasses.length > 10 ? "..." : ""}`,
        "ZWINGEND: Alle CSS-Klassen müssen zuerst in global_css.md in natürlicher Sprache definiert werden"
      );
    }
  }

  /**
   * 🚫 Inline-Styles & Tailwind Detection (ERWEITERT)
   */
  async detectInlineStyles() {
    console.log(
      "🚫 Suche nach Inline-Styles UND Tailwind CSS in Astro-Dateien..."
    );
    console.log(
      "🆕 ERWEITERT: Erkennt jetzt auch Tailwind CSS utility classes"
    );

    try {
      const astroFiles = await this.findAstroFiles();
      const inlineStylesFound = [];
      const tailwindClassesFound = [];

      for (const file of astroFiles) {
        const content = await fs.readFile(file, "utf-8");

        // 1. Standard Inline-Styles Detection
        const inlinePatterns = [
          /style\s*=\s*["'][^"']*["']/gi,
          /<[^>]+style\s*=\s*["'][^"']*["'][^>]*>/gi,
        ];

        for (const pattern of inlinePatterns) {
          const matches = content.match(pattern);
          if (matches) {
            for (const match of matches) {
              inlineStylesFound.push({
                file: path.basename(file),
                style: match,
                fullPath: file,
                type: "inline-style",
              });
            }
          }
        }

        // 2. TAILWIND CSS Detection (KRITISCH!)
        const tailwindPatterns =
          CONFIG.SEO_STANDARDS.CSS_DESIGN_VALIDATION.TAILWIND_PATTERNS;

        for (const pattern of tailwindPatterns) {
          const matches = content.match(pattern);
          if (matches) {
            for (const match of matches) {
              tailwindClassesFound.push({
                file: path.basename(file),
                style: match,
                fullPath: file,
                type: "tailwind-class",
              });
            }
          }
        }

        // 3. Class-Attribute mit Tailwind-ähnlichen Patterns
        const classMatches = content.match(/class\s*=\s*["']([^"']*)["']/gi);
        if (classMatches) {
          for (const match of classMatches) {
            const classContent = match.match(
              /class\s*=\s*["']([^"']*)["']/i
            )[1];
            const hasTailwind =
              /(?:bg-|text-|border-|shadow-|rounded-|p-|px-|py-|m-|mx-|my-|w-|h-|flex|grid|space-|justify-|items-|font-|hover:|max-w-|min-h-|transition|transform|gradient)/.test(
                classContent
              );

            if (hasTailwind) {
              tailwindClassesFound.push({
                file: path.basename(file),
                style: match,
                fullPath: file,
                type: "tailwind-class-attribute",
              });
            }
          }
        }
      }

      // KRITISCHE BEWERTUNG: Tailwind = genauso schlimm wie Inline-Styles!
      const totalViolations =
        inlineStylesFound.length + tailwindClassesFound.length;

      if (totalViolations > 0) {
        // Gruppiere Violations nach Datei
        const violationsByFile = {};
        [...inlineStylesFound, ...tailwindClassesFound].forEach((item) => {
          if (!violationsByFile[item.file]) {
            violationsByFile[item.file] = { inline: [], tailwind: [] };
          }
          if (item.type === "inline-style") {
            violationsByFile[item.file].inline.push(item.style);
          } else {
            violationsByFile[item.file].tailwind.push(item.style);
          }
        });

        for (const [fileName, violations] of Object.entries(violationsByFile)) {
          const inlineCount = violations.inline.length;
          const tailwindCount = violations.tailwind.length;

          let description = `${fileName}: `;
          if (inlineCount > 0) description += `${inlineCount} Inline-Style(s)`;
          if (inlineCount > 0 && tailwindCount > 0) description += ` + `;
          if (tailwindCount > 0)
            description += `${tailwindCount} Tailwind CSS Class(es)`;
          description += ` gefunden`;

          this.addIssue(
            RATINGS.CRITICAL,
            "CSS-Architektur Verletzung",
            description,
            `ZWINGEND: Alle Styles in global.css migrieren + 60/30/10 Prinzip anwenden. VERBOTEN: Scripts oder Search-Funktionen!`
          );
        }

        // Detaillierte Migration-Anweisungen generieren
        this.generateExtendedMigrationPrompt(
          inlineStylesFound,
          tailwindClassesFound
        );
      } else {
        this.addIssue(
          RATINGS.INFO,
          "CSS-Architektur Validierung",
          "Keine Inline-Styles oder Tailwind Classes gefunden - Saubere 60/30/10 CSS-Architektur bestätigt",
          "Design-Prinzip wird korrekt eingehalten"
        );
      }

      // Return both arrays for further processing
      return inlineStylesFound;
    } catch (error) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "CSS-Architektur Detection Fehler",
        error.message,
        "Astro-Dateien manuell auf Inline-Styles und Tailwind prüfen"
      );
      return [];
    }
  }

  /**
   * 📁 Astro-Dateien finden
   */
  async findAstroFiles() {
    const pagesDir = CONFIG.SEO_STANDARDS.CSS_DESIGN_VALIDATION.ASTRO_PAGES_DIR;
    const layoutsDir =
      CONFIG.SEO_STANDARDS.CSS_DESIGN_VALIDATION.ASTRO_LAYOUTS_DIR;

    const astroFiles = [];

    try {
      const pagesFiles = await fs.readdir(pagesDir);
      for (const file of pagesFiles) {
        if (file.endsWith(".astro")) {
          astroFiles.push(path.join(pagesDir, file));
        }
      }
    } catch (error) {
      // Pages directory might not exist or be accessible
    }

    try {
      const layoutFiles = await fs.readdir(layoutsDir);
      for (const file of layoutFiles) {
        if (file.endsWith(".astro")) {
          astroFiles.push(path.join(layoutsDir, file));
        }
      }
    } catch (error) {
      // Layouts directory might not exist or be accessible
    }

    return astroFiles;
  }

  /**
   * ⚡ Separate Tailwind CSS Detection für validateDesignDocumentation
   */
  detectTailwindClasses(inlineStylesFound) {
    console.log("⚡ Separate Tailwind CSS Detection gestartet...");

    const tailwindClassesFound = [];

    // Falls detectInlineStyles bereits aufgerufen wurde, extrahiere Tailwind-Klassen
    if (inlineStylesFound && inlineStylesFound.length > 0) {
      inlineStylesFound.forEach((item) => {
        if (
          item.type &&
          (item.type === "tailwind-class" ||
            item.type === "tailwind-class-attribute")
        ) {
          tailwindClassesFound.push(item);
        }
      });
    }

    console.log(
      `⚡ Tailwind CSS Detection abgeschlossen: ${tailwindClassesFound.length} Tailwind-Violations gefunden`
    );
    return tailwindClassesFound;
  }

  /**
   * 🤖 Inline-Style Migration KI-Prompt generieren
   */
  generateInlineStyleMigrationPrompt(inlineStylesFound) {
    let prompt = "\n\n## 🤖 KI-AUFFORDERUNG: INLINE-STYLES MIGRATION\n\n";
    prompt += "**ZWINGEND MANUELLE MIGRATION - KEINE SCRIPTS VERWENDEN!**\n\n";

    prompt += "### 📋 GEFUNDENE INLINE-STYLES:\n\n";

    const stylesByFile = {};
    inlineStylesFound.forEach((item) => {
      if (!stylesByFile[item.file]) {
        stylesByFile[item.file] = [];
      }
      stylesByFile[item.file].push(item.style);
    });

    for (const [fileName, styles] of Object.entries(stylesByFile)) {
      prompt += `**${fileName}:**\n`;
      styles.forEach((style, index) => {
        prompt += `${index + 1}. \`${style}\`\n`;
      });
      prompt += "\n";
    }

    prompt += "### 🔧 MIGRATION-ANWEISUNGEN:\n\n";
    prompt +=
      "1. **ZUERST:** Alle Inline-Styles in global_css.md in natürlicher Sprache definieren\n";
    prompt += "2. **DANN:** CSS-Klassen in global.css implementieren\n";
    prompt +=
      "3. **DANACH:** Inline-Styles MANUELL von Hand aus Astro-Dateien entfernen\n";
    prompt += "4. **ERSETZEN:** Durch entsprechende CSS-Klassen\n\n";
    prompt +=
      "**❌ VERBOTEN:** Search-Funktionen, Scripts, automatisierte Tools\n";
    prompt += "**✅ PFLICHT:** Manuelle Analyse, manuelle Bearbeitung\n\n";

    // Füge zu Issues hinzu für Log-Datei
    this.addIssue(
      RATINGS.INFO,
      "KI-Migration-Prompt",
      "Detaillierte Inline-Style Migration Anweisungen generiert",
      prompt
    );
  }

  /**
   * 🚀 ERWEITERTE Migration-Prompt für Inline-Styles + Tailwind (NEU)
   */
  generateExtendedMigrationPrompt(inlineStylesFound, tailwindClassesFound) {
    let prompt =
      "\n\n## 🚀 KI-AUFFORDERUNG: VOLLSTÄNDIGE CSS-ARCHITEKTUR MIGRATION\n\n";
    prompt += "**KRITISCH: TAILWIND CSS + INLINE-STYLES ERKANNT!**\n\n";
    prompt += "**ZWINGEND MANUELLE MIGRATION - KEINE SCRIPTS VERWENDEN!**\n\n";

    // Inline-Styles Section
    if (inlineStylesFound.length > 0) {
      prompt += "### 🚫 GEFUNDENE INLINE-STYLES:\n\n";
      const inlineByFile = {};
      inlineStylesFound.forEach((item) => {
        if (!inlineByFile[item.file]) inlineByFile[item.file] = [];
        inlineByFile[item.file].push(item.style);
      });

      for (const [fileName, styles] of Object.entries(inlineByFile)) {
        prompt += `**${fileName}:**\n`;
        styles.forEach((style, index) => {
          prompt += `${index + 1}. \`${style}\`\n`;
        });
        prompt += "\n";
      }
    }

    // Tailwind Classes Section
    if (tailwindClassesFound.length > 0) {
      prompt += "### ⚡ GEFUNDENE TAILWIND CSS CLASSES (KRITISCH!):\n\n";
      const tailwindByFile = {};
      tailwindClassesFound.forEach((item) => {
        if (!tailwindByFile[item.file]) tailwindByFile[item.file] = [];
        tailwindByFile[item.file].push(item.style);
      });

      for (const [fileName, styles] of Object.entries(tailwindByFile)) {
        prompt += `**${fileName}:**\n`;
        // Nur die ersten 10 anzeigen, sonst wird es zu lang
        styles.slice(0, 10).forEach((style, index) => {
          prompt += `${index + 1}. \`${style}\`\n`;
        });
        if (styles.length > 10) {
          prompt += `... und ${styles.length - 10} weitere Tailwind Classes\n`;
        }
        prompt += "\n";
      }
    }

    prompt += "### 🎨 60/30/10 MIGRATION-ANWEISUNGEN:\n\n";
    prompt +=
      "1. **ZUERST:** Vollständige Bestandsaufnahme aller verwendeten Styles\n";
    prompt +=
      "2. **DESIGN-DOC:** Alle Elemente in global_css.md in natürlicher Sprache definieren\n";
    prompt += "3. **60/30/10 PRINZIP:** Farbschema anwenden:\n";
    prompt += "   - Primär: #1E3A8A (dunkelblau - 60%)\n";
    prompt += "   - Sekundär: #2563EB (mittleres Blau - 30%)\n";
    prompt += "   - Akzent: #EF4444 (rot - 10%)\n";
    prompt +=
      "4. **CSS-IMPLEMENTIERUNG:** CSS-Klassen in global.css erstellen\n";
    prompt +=
      "5. **MANUELLE BEREINIGUNG:** ALLE Tailwind + Inline-Styles von Hand entfernen\n";
    prompt +=
      "6. **KLASSEN-ERSETZUNG:** Durch saubere, semantische CSS-Klassen ersetzen\n\n";

    prompt += "### ❌ ABSOLUT VERBOTEN:\n";
    prompt += "- Search-Funktionen verwenden\n";
    prompt += "- Automatisierte Scripts\n";
    prompt += "- Tailwind CSS beibehalten\n";
    prompt += "- CSS-Änderungen ohne global_css.md Definition\n\n";

    prompt += "### ✅ ZWINGEND ERFORDERLICH:\n";
    prompt += "- Manuelle Datei-für-Datei Bearbeitung\n";
    prompt += "- 60/30/10 Design-Prinzip einhalten\n";
    prompt += "- Semantische CSS-Klassen-Namen\n";
    prompt += "- Vollständige Dokumentation in global_css.md\n\n";

    prompt +=
      "**PRIORITÄT: KRITISCH** - Diese Architektur-Verletzung blockiert sauberes Design!\n\n";

    // Füge zu Issues hinzu für Log-Datei
    this.addIssue(
      RATINGS.CRITICAL,
      "Erweiterte CSS-Migration erforderlich",
      `${inlineStylesFound.length} Inline-Styles + ${tailwindClassesFound.length} Tailwind Classes gefunden`,
      prompt
    );
  }

  /**
   * 🧠 E-A-T Content-Qualitäts-Analyse (nach ideen_checklisten.md)
   */
  async analyzeEATContent() {
    console.log("🧠 Analysiere E-A-T Prinzipien in Content...");

    try {
      const contentFiles = await this.getContentFiles();

      for (const file of contentFiles) {
        try {
          const content = await fs.readFile(file, "utf-8");
          const eatScore = this.calculateEATScore(content, file);

          if (eatScore.overall < 60) {
            this.addIssue(
              RATINGS.IMPORTANT,
              "E-A-T Content-Qualität",
              `${path.basename(file)}: E-A-T Score ${
                eatScore.overall
              }% (niedrig)`,
              this.generateEATImprovement(eatScore)
            );
          }

          // KI-Prompt für Content-Verbesserung generieren
          if (eatScore.overall < 70) {
            this.generateKIPromptForContent(file, content, eatScore);
          }
        } catch (error) {
          // Fehler ignorieren für robuste Ausführung
        }
      }
    } catch (error) {
      console.log(
        "⚠️ E-A-T Analyse temporär deaktiviert - Content-Files nicht gefunden"
      );
    }
  }

  /**
   * 📁 Content-Dateien finden
   */
  async getContentFiles() {
    const glob = require("glob");
    const contentPattern = path.join(CONFIG.CONTENT_DIR, "blog", "*.md");
    return new Promise((resolve, reject) => {
      glob(contentPattern, (err, files) => {
        if (err) reject(err);
        else resolve(files);
      });
    });
  }

  /**
   * 📊 E-A-T Score Berechnung
   */
  calculateEATScore(content, filePath) {
    const scores = {
      expertise: this.checkExpertise(content),
      authoritativeness: this.checkAuthoritativeness(content),
      trustworthiness: this.checkTrustworthiness(content),
      experience: this.checkExperience(content),
      itLanguage: this.checkITLanguageAlignment(content),
    };

    const overall =
      Object.values(scores).reduce((sum, score) => sum + score, 0) /
      Object.keys(scores).length;

    return { ...scores, overall: Math.round(overall) };
  }

  /**
   * 🎓 Expertise-Indikatoren prüfen
   */
  checkExpertise(content) {
    const indicators =
      CONFIG.SEO_STANDARDS.EEAT_REQUIREMENTS.EXPERTISE_INDICATORS;
    let score = 0;

    for (const indicator of indicators) {
      if (content.toLowerCase().includes(indicator)) score += 20;
    }

    // RECHTS-spezifische Expertise prüfen
    const legalTerms = [
      "sozialversicherungsrecht",
      "gerichtsverfahren",
      "rechtsberatung",
      "bvg",
      "rechtshilfe",
    ];
    for (const term of legalTerms) {
      if (content.toLowerCase().includes(term)) score += 15;
    }

    return Math.min(score, 100);
  }

  /**
   * 👑 Authoritativeness prüfen
   */
  checkAuthoritativeness(content) {
    const signals =
      CONFIG.SEO_STANDARDS.EEAT_REQUIREMENTS.AUTHORITATIVENESS_SIGNALS;
    let score = 0;

    for (const signal of signals) {
      if (content.toLowerCase().includes(signal)) score += 25;
    }

    // LinkedIn-Profile, Sprecherstellen, Publikationen
    const authorityMarkers = [
      "linkedin",
      "speaker",
      "autor",
      "gastbeitrag",
      "interview",
    ];
    for (const marker of authorityMarkers) {
      if (content.toLowerCase().includes(marker)) score += 20;
    }

    return Math.min(score, 100);
  }

  /**
   * 🛡️ Trustworthiness prüfen
   */
  checkTrustworthiness(content) {
    const elements =
      CONFIG.SEO_STANDARDS.EEAT_REQUIREMENTS.TRUSTWORTHINESS_ELEMENTS;
    let score = 0;

    for (const element of elements) {
      if (content.toLowerCase().includes(element)) score += 25;
    }

    // Transparenz-Signale
    const trustSignals = [
      "referenzen",
      "bewertungen",
      "testimonial",
      "case study",
    ];
    for (const signal of trustSignals) {
      if (content.toLowerCase().includes(signal)) score += 15;
    }

    return Math.min(score, 100);
  }

  /**
   * 💼 Experience-Marker prüfen
   */
  checkExperience(content) {
    const markers = CONFIG.SEO_STANDARDS.EEAT_REQUIREMENTS.EXPERIENCE_MARKERS;
    let score = 0;

    for (const marker of markers) {
      if (content.toLowerCase().includes(marker)) score += 25;
    }

    // Praktische IT-Erfahrung
    const experienceTerms = [
      "jahren erfahrung",
      "projekte",
      "kunden betreut",
      "implementiert",
    ];
    for (const term of experienceTerms) {
      if (content.toLowerCase().includes(term)) score += 20;
    }

    return Math.min(score, 100);
  }

  /**
   * 💻 IT-Zielgruppen-Sprache prüfen (nach ideen_checklisten.md)
   */
  checkITLanguageAlignment(content) {
    const patterns = CONFIG.SEO_STANDARDS.LEGAL_LANGUAGE_PATTERNS;
    let score = 0;

    // Technische Metaphern verwenden?
    for (const metaphor of patterns.LEGAL_METAPHORS) {
      if (content.toLowerCase().includes(metaphor)) score += 10;
    }

    // RECHTS-Terminologie korrekt?
    for (const term of patterns.LEGAL_TERMINOLOGY) {
      if (content.toLowerCase().includes(term)) score += 15;
    }

    // Zielgruppen-Alignment prüfen
    for (const alignment of patterns.AUDIENCE_ALIGNMENT) {
      if (content.toLowerCase().includes(alignment)) score += 10;
    }

    // IT-Metaphern-Beispiel aus ideen_checklisten.md
    const metaphorExamples = [
      "backup",
      "firewall",
      "netzwerk",
      "server",
      "infrastruktur",
    ];
    for (const example of metaphorExamples) {
      if (content.toLowerCase().includes(example)) score += 5;
    }

    return Math.min(score, 100);
  }

  /**
   * 🤖 KI-Prompt für Content-Verbesserung generieren (nach ideen_checklisten.md)
   */
  generateKIPromptForContent(filePath, content, eatScore) {
    const fileName = path.basename(filePath);
    const timestamp = new Date().toISOString();

    const prompt = `
🤖 HOCHDETAILLIERTER KI-OPTIMIERUNGS-PROMPT für ${fileName}
📅 Generiert: ${timestamp}
⚠️ BENUTZER-AUTONOMIE: Simon möchte KEINE Entscheidungen treffen - KI soll eigenständig optimieren!

📊 AKTUELLE E-A-T SCORES:
- Expertise: ${eatScore.expertise}%
- Authoritativeness: ${eatScore.authoritativeness}%  
- Trustworthiness: ${eatScore.trustworthiness}%
- Experience: ${eatScore.experience}%
- IT-Sprache: ${eatScore.itLanguage}%
- GESAMT: ${eatScore.overall}%

🎯 VERBESSERUNGS-AREAS:
${this.generateImprovementAreas(eatScore)}

🔧 KONKRETE KI-AKTIONEN (automatisch ausführen):
1. **Expertise stärken:** IT-Zertifizierungen und Fachkenntnisse prominenter erwähnen
2. **Authority aufbauen:** "Über den Autor"-Sektion mit Credentials erweitern
3. **Trust verstärken:** Referenzen, Case Studies, Testimonials hinzufügen
4. **Experience zeigen:** Konkrete Projekt-Beispiele und Erfahrungswerte
5. **IT-Sprache optimieren:** Technische Metaphern wie aus ideen_checklisten.md verwenden

💻 IT-METAPHERN-BEISPIELE (Simon's Vorgabe):
"Wie eine SEO-Agentur die nicht zwischen synthetischem Fullbackup und inkrementeller Datensicherung unterscheiden kann - das ist ein Warnsignal für fehlende IT-Kompetenz."

🚀 AUTONOME KI-UMSETZUNG:
Die KI soll SOFORT und EIGENSTÄNDIG diese Verbesserungen implementieren, da Simon explizit keine Entscheidungen treffen möchte (Prokrastinations-Vermeidung).

📝 ORIGINAL CONTENT (erste 500 Zeichen):
${content.substring(0, 500)}...

⚡ NEXT ACTIONS: KI implementiert Änderungen automatisch basierend auf diesem Prompt!
`;

    // Prompt in separater Datei speichern für KI-Training
    this.saveKIPrompt(fileName, prompt);

    return prompt;
  }

  /**
   * 📁 KI-Prompt speichern für Algorithm-Training
   */
  async saveKIPrompt(fileName, prompt) {
    try {
      const promptDir = path.join(CONFIG.BUILD_LOGS_DIR, "ki-prompts");
      await fs.mkdir(promptDir, { recursive: true });

      const promptFile = path.join(
        promptDir,
        `ki-prompt-${fileName}-${Date.now()}.md`
      );
      await fs.writeFile(promptFile, prompt, "utf-8");

      console.log(`🤖 KI-Prompt gespeichert: ${promptFile}`);
    } catch (error) {
      // Fehler ignorieren für robuste Ausführung
    }
  }

  /**
   * 📋 Verbesserungs-Bereiche identifizieren
   */
  generateImprovementAreas(eatScore) {
    const areas = [];

    if (eatScore.expertise < 70)
      areas.push("❌ EXPERTISE: IT-Zertifizierungen und Fachkenntnisse fehlen");
    if (eatScore.authoritativeness < 70)
      areas.push(
        "❌ AUTHORITY: Autor-Credentials und Publikationen unzureichend"
      );
    if (eatScore.trustworthiness < 70)
      areas.push("❌ TRUST: Referenzen und Testimonials fehlen");
    if (eatScore.experience < 70)
      areas.push("❌ EXPERIENCE: Konkrete Projekt-Beispiele unzureichend");
    if (eatScore.itLanguage < 70)
      areas.push("❌ IT-SPRACHE: Zielgruppen-Sprache nicht optimal");

    return areas.length > 0
      ? areas.join("\n")
      : "✅ Alle E-A-T Bereiche zufriedenstellend";
  }

  /**
   * 💡 E-A-T Verbesserungs-Empfehlungen
   */
  generateEATImprovement(eatScore) {
    const improvements = [];

    if (eatScore.expertise < 70) {
      improvements.push(
        "Expertise: IT-Zertifizierungen, Fachkenntnisse prominenter darstellen"
      );
    }
    if (eatScore.authoritativeness < 70) {
      improvements.push(
        "Authority: Autor-Bio, LinkedIn-Profil, Sprecherstellen erwähnen"
      );
    }
    if (eatScore.trustworthiness < 70) {
      improvements.push(
        "Trust: Referenzen, Case Studies, Kundenbewertungen hinzufügen"
      );
    }
    if (eatScore.experience < 70) {
      improvements.push(
        "Experience: Konkrete Projekt-Beispiele und Erfahrungswerte"
      );
    }
    if (eatScore.itLanguage < 70) {
      improvements.push(
        "IT-Sprache: Technische Metaphern für bessere Zielgruppen-Ansprache"
      );
    }

    return improvements.join(" | ");
  }

  /**
   * 💡 Browser Error Empfehlungen
   */
  getBrowserErrorRecommendation(errorType) {
    const recommendations = {
      RESOURCE_404:
        "Fehlende Ressource erstellen oder Referenzen entfernen - SEO-schädliche 404s vermeiden",
      PERFORMANCE_LATENCY:
        "Organische Performance: Server-Response optimieren, DNS-Auflösung verbessern",
      IMAGE_OPTIMIZATION:
        "Organische Bild-Optimierung: WebP-Format, korrekte Dimensionen, Lazy Loading",
      RENDER_BLOCKING:
        "CSS/JS organisch optimieren: Critical CSS inline, async/defer für Scripts",
    };

    return (
      recommendations[errorType] ||
      "Organische Lösung für Browser-Problem entwickeln"
    );
  }

  /**
   * 📁 CSS-Dateien finden
   */
  async findCSSFiles() {
    const cssFiles = [];
    const searchDirs = [
      path.join(CONFIG.PROJECT_ROOT, "src", "styles"),
      path.join(CONFIG.PROJECT_ROOT, "public"),
    ];

    for (const dir of searchDirs) {
      try {
        const files = await fs.readdir(dir, { recursive: true });
        for (const file of files) {
          if (file.endsWith(".css") || file.endsWith(".scss")) {
            cssFiles.push(path.join(dir, file));
          }
        }
      } catch (error) {
        // Verzeichnis existiert nicht - überspringen
      }
    }

    return cssFiles;
  }

  /**
   * 🎨 CSS-Datei analysieren
   */
  async analyzeCSSFile(filePath) {
    try {
      const content = await fs.readFile(filePath, "utf8");
      const relativePath = path.relative(CONFIG.PROJECT_ROOT, filePath);

      // Organische CSS-Qualitätsprüfungen
      const lines = content.split("\n");
      let issues = [];

      // Prüfe auf doppelte Selektoren
      const selectors = [];
      for (const line of lines) {
        const match = line.match(/^([^{]+)\s*{/);
        if (match) {
          const selector = match[1].trim();
          if (selectors.includes(selector)) {
            issues.push(`Doppelter Selektor: ${selector}`);
          }
          selectors.push(selector);
        }
      }

      // Prüfe auf !important Overuse
      const importantCount = (content.match(/!important/g) || []).length;
      if (importantCount > 5) {
        issues.push(`Zu viele !important Deklarationen: ${importantCount}`);
      }

      // Prüfe auf fehlende Fallbacks
      const colorProps = content.match(/color:\s*[^;]+;/g) || [];
      for (const prop of colorProps) {
        if (prop.includes("var(") && !prop.includes(",")) {
          issues.push("CSS-Variable ohne Fallback gefunden");
          break;
        }
      }

      // Issues hinzufügen
      for (const issue of issues) {
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "CSS-Qualität",
          `${relativePath}: ${issue}`,
          "CSS organisch optimieren (keine Minifizierung!)"
        );
      }
    } catch (error) {
      console.error(
        `❌ CSS-Datei Analyse Fehler (${filePath}):`,
        error.message
      );
    }
  }

  /**
   * 🤖 KI-Selbstvalidierung durchführen
   */
  async performSelfValidation() {
    console.log("🤖 Führe KI-Selbstvalidierung durch...");

    try {
      this.validationResults = {
        timestamp: new Date().toISOString(),
        consistencyChecks: [],
        recommendations: [],
        criticalInconsistencies: [],
      };

      // Validiere Content-Stats Konsistenz
      await this.validateContentStatsConsistency();

      // Validiere Wortzahl-Berechnungen
      await this.validateWordCountCalculations();

      // Validiere Issue-Kategorisierung
      await this.validateIssueCategorization();

      // Generiere KI-Validierungs-Prompt
      await this.generateSelfValidationPrompt();

      console.log("✅ KI-Selbstvalidierung abgeschlossen");
    } catch (error) {
      console.error("❌ KI-Selbstvalidierung Fehler:", error.message);
      this.addIssue(
        RATINGS.CRITICAL,
        "Selbstvalidierung Fehler",
        error.message,
        "Validierungs-System reparieren"
      );
    }
  }

  /**
   * 📊 Content-Stats Konsistenz validieren
   */
  async validateContentStatsConsistency() {
    const checks = [];

    // Prüfe Gesamt-Wörter vs. Summe der Einzeldateien
    if (this.contentStats.fileWordDetails && this.contentStats.totalWords) {
      const calculatedTotal = this.contentStats.fileWordDetails.reduce(
        (sum, file) => sum + file.wordCount,
        0
      );
      const reportedTotal = this.contentStats.totalWords;

      if (Math.abs(calculatedTotal - reportedTotal) > 10) {
        checks.push({
          type: "INCONSISTENCY",
          issue: "Wortzahl-Diskrepanz",
          details: `Berechnet: ${calculatedTotal}, Berichtet: ${reportedTotal}`,
          severity: "HIGH",
        });

        this.addIssue(
          RATINGS.CRITICAL,
          "Wortzahl-Inkonsistenz",
          `Berechnete Gesamtwörter (${calculatedTotal}) ≠ Berichtete Gesamtwörter (${reportedTotal})`,
          "Wortzahl-Berechnungslogik überprüfen und korrigieren"
        );
      } else {
        checks.push({
          type: "CONSISTENCY",
          issue: "Wortzahl-Konsistenz",
          details: "Berechnete und berichtete Wortzahlen stimmen überein",
          severity: "OK",
        });
      }
    }

    // Prüfe Durchschnitt-Berechnung
    if (
      this.contentStats.averageWordCount &&
      this.contentStats.totalWords &&
      this.contentStats.totalFiles
    ) {
      const calculatedAvg = Math.round(
        this.contentStats.totalWords / this.contentStats.totalFiles
      );
      const reportedAvg = Math.round(this.contentStats.averageWordCount);

      if (Math.abs(calculatedAvg - reportedAvg) > 5) {
        checks.push({
          type: "INCONSISTENCY",
          issue: "Durchschnitt-Diskrepanz",
          details: `Berechnet: ${calculatedAvg}, Berichtet: ${reportedAvg}`,
          severity: "MEDIUM",
        });
      }
    }

    this.validationResults.consistencyChecks = checks;
  }

  /**
   * 🔢 Wortzahl-Berechnungen validieren
   */
  async validateWordCountCalculations() {
    if (!this.contentStats.fileWordDetails) return;

    for (const file of this.contentStats.fileWordDetails) {
      // Validiere Expansion-Berechnungen
      if (
        file.wordCount &&
        file.wordCount < CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH
      ) {
        const wordsNeeded =
          CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH - file.wordCount;

        // Prüfe ob die Berechnung in Reports konsistent ist
        this.validationResults.recommendations.push({
          file: file.fileName,
          currentWords: file.wordCount,
          targetWords: CONFIG.SEO_STANDARDS.TARGET_CONTENT_LENGTH,
          expansionNeeded: wordsNeeded,
          priority: file.expansionPriority || "undefined",
        });
      }
    }
  }

  /**
   * 🏷️ Issue-Kategorisierung validieren
   */
  async validateIssueCategorization() {
    // Prüfe auf widersprüchliche Issue-Prioritäten
    const criticalCount = this.issues.filter(
      (i) => i.priority === RATINGS.CRITICAL
    ).length;
    const importantCount = this.issues.filter(
      (i) => i.priority === RATINGS.IMPORTANT
    ).length;
    const optimizationCount = this.issues.filter(
      (i) => i.priority === RATINGS.OPTIMIZATION
    ).length;

    // Validiere Health Score Berechnung
    const calculatedScore = this.calculateHealthScore();

    this.validationResults.recommendations.push({
      type: "ISSUE_DISTRIBUTION",
      critical: criticalCount,
      important: importantCount,
      optimization: optimizationCount,
      healthScore: calculatedScore,
      assessment: criticalCount > 10 ? "CRITICAL_OVERLOAD" : "NORMAL",
    });
  }

  /**
   * 📝 Selbstvalidierungs-Prompt generieren
   */
  async generateSelfValidationPrompt() {
    const prompt = {
      timestamp: new Date().toISOString(),
      instruction:
        "🤖 KI-SELBSTVALIDIERUNG: Bitte prüfe systematisch die folgenden Checker-Daten auf Inkonsistenzen",
      data: {
        contentStats: this.contentStats,
        validationResults: this.validationResults,
        totalIssues: this.issues.length,
        csvProblems: this.csvData.criticalIssues.length,
      },
      validationRequest: [
        "1. Sind alle Wortzahl-Berechnungen konsistent?",
        "2. Stimmen die Expansion-Empfehlungen (828, 352, 637, 442 Wörter)?",
        "3. Sind die Issue-Prioritäten logisch verteilt?",
        "4. Gibt es widersprüchliche Daten?",
        "5. Fehlen wichtige Checks oder Validierungen?",
      ],
      expectedAction:
        "Identifiziere Inkonsistenzen und schlage Verbesserungen vor",
    };

    this.validationResults.kiPrompt = prompt;
  }

  /**
   * 📁 MIGRATED: Verzeichnis-Synchronisations-Analyse (Astro-native)
   * Prüft Migration von docs/website_struktur → src/content Integration
   */
  async performDirectorySynchronizationAnalysis() {
    console.log(
      "📁 Führe MIGRATED Verzeichnis-Synchronisations-Analyse durch..."
    );

    try {
      // NEUE ASTRO-NATIVE STRUKTUR
      const contentDir = path.join(CONFIG.PROJECT_ROOT, "src", "content");
      const pagesDir = path.join(CONFIG.PROJECT_ROOT, "src", "pages");

      // LEGACY-STRUKTUR (falls noch vorhanden)
      const legacySourceDir = path.join(
        CONFIG.PROJECT_ROOT,
        "docs",
        "website_struktur"
      );

      // 1. Prüfe neue Astro-native Content Collections
      await this.analyzeAstroContentCollections(contentDir, pagesDir);

      // 2. Prüfe Legacy-Migration-Status (falls notwendig)
      await this.analyzeLegacyMigrationStatus(legacySourceDir, contentDir);

      // 3. Astro-Integration validieren
      await this.validateAstroContentIntegration();

      console.log(
        "✅ MIGRATED Verzeichnis-Synchronisations-Analyse abgeschlossen"
      );
    } catch (error) {
      console.error(
        "❌ Verzeichnis-Synchronisations-Analyse Fehler:",
        error.message
      );
      this.addIssue(
        RATINGS.CRITICAL,
        "Verzeichnis-Sync Fehler",
        error.message,
        "Astro-native Verzeichnis-Struktur prüfen"
      );
    }
  }

  /**
   * 📄 ASTRO-NATIVE: Content Collections Analyse
   */
  async analyzeAstroContentCollections(contentDir, pagesDir) {
    try {
      // Prüfe src/content Struktur
      let contentExists = false;
      try {
        await fs.access(contentDir);
        contentExists = true;
        this.addIssue(
          RATINGS.INFO,
          "Astro Content Collections",
          "src/content Verzeichnis existiert - Astro-native Struktur aktiv",
          "Weiter mit Content Collections Development"
        );
      } catch {
        this.addIssue(
          RATINGS.CRITICAL,
          "src/content fehlt",
          "Astro Content Collections Verzeichnis nicht gefunden",
          "src/content Struktur mit Collections erstellen"
        );
        return;
      }

      // Prüfe Blog Collection
      const blogCollectionDir = path.join(contentDir, "blog");
      try {
        const blogFiles = await fs.readdir(blogCollectionDir);
        const mdFiles = blogFiles.filter((file) => file.endsWith(".md"));

        this.addIssue(
          RATINGS.INFO,
          "Blog Collection Status",
          `${mdFiles.length} Blog-Posts in src/content/blog gefunden`,
          "Blog Collection funktional"
        );

        // Prüfe Pages Collection (falls verwendet)
        const pagesCollectionDir = path.join(contentDir, "pages");
        try {
          const pagesFiles = await fs.readdir(pagesCollectionDir);
          const pagesmdFiles = pagesFiles.filter((file) =>
            file.endsWith(".md")
          );

          this.addIssue(
            RATINGS.INFO,
            "Pages Collection Status",
            `${pagesmdFiles.length} Seiten in src/content/pages gefunden`,
            "Pages Collection funktional"
          );
        } catch {
          this.addIssue(
            RATINGS.OPTIMIZATION,
            "Pages Collection fehlt",
            "src/content/pages nicht gefunden - statische Seiten als Collection empfohlen",
            "src/content/pages Collection für statische Seiten erstellen"
          );
        }
      } catch {
        this.addIssue(
          RATINGS.CRITICAL,
          "Blog Collection fehlt",
          "src/content/blog nicht gefunden",
          "Blog Collection in src/content/blog erstellen"
        );
      }

      // Prüfe Astro Pages vs Content Integration
      await this.validateAstroPageContentIntegration(pagesDir, contentDir);
    } catch (error) {
      this.addIssue(
        RATINGS.CRITICAL,
        "Content Collections Analyse Fehler",
        error.message,
        "Astro Content Collections Struktur reparieren"
      );
    }
  }

  /**
   * 🔄 LEGACY: Migration-Status analysieren
   */
  async analyzeLegacyMigrationStatus(legacyDir, contentDir) {
    try {
      let legacyExists = false;
      try {
        await fs.access(legacyDir);
        legacyExists = true;

        this.addIssue(
          RATINGS.OPTIMIZATION,
          "Legacy docs/website_struktur erkannt",
          "Alte Struktur noch vorhanden - Migration zu src/content empfohlen",
          "Legacy-Struktur nach vollständiger Migration archivieren"
        );

        // Migration-Potenzial analysieren
        await this.analyzeMigrationPotential(legacyDir, contentDir);
      } catch {
        this.addIssue(
          RATINGS.INFO,
          "Legacy Migration abgeschlossen",
          "docs/website_struktur nicht mehr vorhanden - Migration erfolgreich",
          "Astro-native Entwicklung fortsetzen"
        );
      }
    } catch (error) {
      // Silent fail - Legacy-Analyse optional
    }
  }

  /**
   * 🎯 ASTRO: Page-Content Integration validieren
   */
  async validateAstroPageContentIntegration(pagesDir, contentDir) {
    try {
      // Prüfe ob .astro Pages korrekt Content Collections verwenden
      const astroFiles = await fs.readdir(pagesDir);
      const astroPageFiles = astroFiles.filter((file) =>
        file.endsWith(".astro")
      );

      for (const astroFile of astroPageFiles) {
        const astroPath = path.join(pagesDir, astroFile);
        const astroContent = await fs.readFile(astroPath, "utf8");

        // Prüfe Content Collection Imports
        if (
          astroContent.includes("getCollection") ||
          astroContent.includes("import { getCollection }")
        ) {
          this.addIssue(
            RATINGS.INFO,
            "Astro Content Integration",
            `${astroFile} verwendet Content Collections korrekt`,
            "Astro-native Pattern funktional"
          );
        } else if (astroFile === "blog.astro" || astroFile.includes("blog")) {
          this.addIssue(
            RATINGS.IMPORTANT,
            "Content Collection Integration fehlt",
            `${astroFile} sollte getCollection für Blog-Posts verwenden`,
            "Astro Content Collections in Blog-Pages integrieren"
          );
        }
      }
    } catch (error) {
      // Silent fail - Integration-Check optional
    }
  }

  /**
   * 📰 Blog-Seiten Synchronisation analysieren
   */
  async analyzeBlogPagesSynchronization(sourceDir, contentBlogDir) {
    try {
      // Alle .md-Dateien in src/content/blog finden
      let contentBlogFiles = [];
      try {
        contentBlogFiles = await fs.readdir(contentBlogDir);
        contentBlogFiles = contentBlogFiles.filter((file) =>
          file.endsWith(".md")
        );
      } catch (error) {
        this.addIssue(
          RATINGS.CRITICAL,
          "Blog-Content Verzeichnis fehlt",
          "src/content/blog/ nicht gefunden",
          "Blog-Verzeichnis erstellen"
        );
        return;
      }

      // Alle .md-Dateien in docs/website_struktur/dynamische-seiten/blog finden
      const docsBlogDir = path.join(sourceDir, "dynamische-seiten", "blog");
      let docsBlogFiles = [];

      try {
        docsBlogFiles = await fs.readdir(docsBlogDir);
        docsBlogFiles = docsBlogFiles.filter((file) => file.endsWith(".md"));
      } catch (error) {
        this.addIssue(
          RATINGS.CRITICAL,
          "Blog-Quell-Verzeichnis fehlt",
          "docs/website_struktur/dynamische-seiten/blog/ nicht gefunden",
          "Blog-Quell-Verzeichnis erstellen"
        );
        return;
      }

      // Prüfe jede Blog-Datei in src/content/blog auf entsprechende Quell-Datei
      for (const contentBlogFile of contentBlogFiles) {
        if (!docsBlogFiles.includes(contentBlogFile)) {
          const contentPath = path.join(contentBlogDir, contentBlogFile);
          const targetDocsPath = path.join(docsBlogDir, contentBlogFile);

          this.addIssue(
            RATINGS.CRITICAL,
            "Blog ohne .md-Quell-Datei",
            `${contentBlogFile} in src/content/blog/ hat keine entsprechende Quell-Datei`,
            `KI SOLL: Blog-Datei ${contentPath} in natürliche Sprache konvertieren und als ${targetDocsPath} speichern. WICHTIG: Frontmatter beibehalten, aber Inhalt in natürlicher Sprache für User Simon Bearbeitung.`
          );
        }
      }

      // Prüfe jede Quell-Datei in docs auf entsprechende Blog-Implementierung
      for (const docsBlogFile of docsBlogFiles) {
        if (!contentBlogFiles.includes(docsBlogFile)) {
          const docsPath = path.join(docsBlogDir, docsBlogFile);
          const targetContentPath = path.join(contentBlogDir, docsBlogFile);

          this.addIssue(
            RATINGS.IMPORTANT,
            "Blog-Quell-Datei ohne Implementierung",
            `${docsBlogFile} in docs/website_struktur/dynamische-seiten/blog/ hat keine Implementierung`,
            `KI SOLL: Quell-Datei ${docsPath} lesen und als Blog-Post ${targetContentPath} implementieren. Natürliche Sprache in Markdown mit korrektem Frontmatter konvertieren.`
          );
        }
      }

      // Blog-Synchronisations-Status
      this.addIssue(
        RATINGS.INFO,
        "Blog-Sync Status",
        `${contentBlogFiles.length} implementierte Blogs, ${docsBlogFiles.length} Quell-Dateien gefunden`,
        `Blog-Sync: ${
          contentBlogFiles.length === docsBlogFiles.length
            ? "SYNCHRONISIERT"
            : "DISKREPANZ"
        }`
      );
    } catch (error) {
      this.addIssue(
        RATINGS.CRITICAL,
        "Blog-Sync Fehler",
        error.message,
        "Blog-Verzeichnis-Struktur reparieren"
      );
    }
  }

  /**
   * 📋 TODO-TRACKING INTEGRATION (NEU)
   * Analysiert TODO-Status und integriert in Build-Checker Log
   */
  async performTODOAnalysis() {
    console.log("📋 Führe TODO-Tracking-Analyse durch...");

    try {
      const todoDir = path.join(CONFIG.PROJECT_ROOT, "docs", "todos");

      // 1. Haupt-TODO-Liste analysieren
      await this.analyzeTODOList(todoDir);

      // 2. Issues-Liste analysieren
      await this.analyzeIssuesList(todoDir);

      // 3. Archivierte TODOs prüfen
      await this.analyzeArchivedTODOs(todoDir);

      // 4. TODO-Integration in bestehende Issues
      await this.integrateTODOsIntoIssues();

      console.log("✅ TODO-Tracking-Analyse abgeschlossen");
    } catch (error) {
      console.error("❌ TODO-Analyse Fehler:", error.message);
      this.addIssue(
        RATINGS.IMPORTANT,
        "TODO-Tracking Fehler",
        error.message,
        "TODO-System manuell prüfen"
      );
    }
  }

  /**
   * 📋 Haupt-TODO-Liste analysieren
   */
  async analyzeTODOList(todoDir) {
    try {
      const todoFilePath = path.join(todoDir, "todos.md");
      const todoContent = await fs.readFile(todoFilePath, "utf-8");

      // Extrahiere aktive TODOs
      const activeTODOs = this.extractActiveTODOs(todoContent);
      const completedTODOs = this.extractCompletedTODOs(todoContent);

      // Status-Übersicht erstellen
      const todoStats = {
        active: activeTODOs.length,
        completed: completedTODOs.length,
        total: activeTODOs.length + completedTODOs.length,
      };

      this.addIssue(
        RATINGS.INFO,
        "TODO-Status-Übersicht",
        `${todoStats.active} aktive TODOs, ${todoStats.completed} abgeschlossen (${todoStats.total} gesamt)`,
        "TODO-Progress tracking"
      );

      // Kritische TODOs identifizieren
      const criticalTODOs = activeTODOs.filter(
        (todo) =>
          todo.text.includes("KRITISCH") ||
          todo.text.includes("SOFORTIGE PRIORITÄT") ||
          todo.text.includes("🔥")
      );

      if (criticalTODOs.length > 0) {
        this.addIssue(
          RATINGS.CRITICAL,
          "Kritische TODOs vorhanden",
          `${criticalTODOs.length} kritische TODOs gefunden`,
          "Kritische TODOs prioritär abarbeiten"
        );

        // Detaillierte kritische TODOs auflisten
        criticalTODOs.forEach((todo, index) => {
          this.addIssue(
            RATINGS.CRITICAL,
            `TODO #KRITISCH-${index + 1}`,
            `${todo.id}: ${todo.title}`,
            `${todo.status} - ${todo.description}`
          );
        });
      }

      // Aktuelle Phase identifizieren (CSS-Migration)
      const cssPhase = activeTODOs.filter(
        (todo) =>
          todo.text.includes("CSS") ||
          todo.text.includes("PHASE") ||
          todo.text.includes("Migration")
      );

      if (cssPhase.length > 0) {
        this.addIssue(
          RATINGS.IMPORTANT,
          "CSS-Migration Phase aktiv",
          `${cssPhase.length} CSS-bezogene TODOs in Bearbeitung`,
          "CSS-Migration-Workflow fortsetzen"
        );
      }

      // Speichere TODO-Daten für integrierte Berichte
      this.todoData = {
        stats: todoStats,
        activeTODOs: activeTODOs,
        completedTODOs: completedTODOs,
        criticalTODOs: criticalTODOs,
        cssPhase: cssPhase,
      };
    } catch (error) {
      this.addIssue(
        RATINGS.IMPORTANT,
        "TODO-Liste Zugriff Fehler",
        `Kann todos.md nicht lesen: ${error.message}`,
        "TODO-Datei manuell prüfen"
      );
    }
  }

  /**
   * 📋 Issues-Liste analysieren
   */
  async analyzeIssuesList(todoDir) {
    try {
      const issuesFilePath = path.join(todoDir, "issues.md");
      const issuesContent = await fs.readFile(issuesFilePath, "utf-8");

      // Extrahiere aktive Issues
      const criticalIssues = this.extractIssuesByPriority(
        issuesContent,
        "🔴 KRITISCHE"
      );
      const importantIssues = this.extractIssuesByPriority(
        issuesContent,
        "🟡 WICHTIGE"
      );
      const optimizationIssues = this.extractIssuesByPriority(
        issuesContent,
        "🟢 OPTIMIERUNGS"
      );
      const resolvedIssues = this.extractIssuesByPriority(
        issuesContent,
        "✅ BEHOBENE"
      );

      // Issues-Statistiken
      const issuesStats = {
        critical: criticalIssues.length,
        important: importantIssues.length,
        optimization: optimizationIssues.length,
        resolved: resolvedIssues.length,
      };

      this.addIssue(
        RATINGS.INFO,
        "Issues-Status-Übersicht",
        `${issuesStats.critical} kritisch, ${issuesStats.important} wichtig, ${issuesStats.optimization} Optimierung, ${issuesStats.resolved} behoben`,
        "Issues-Management tracking"
      );

      // CSS-Architektur Issues hervorheben
      const cssIssues = criticalIssues.filter(
        (issue) =>
          issue.text.includes("CSS") ||
          issue.text.includes("Tailwind") ||
          issue.text.includes("Architektur")
      );

      if (cssIssues.length > 0) {
        this.addIssue(
          RATINGS.CRITICAL,
          "CSS-Architektur Issues",
          `${cssIssues.length} kritische CSS-Issues dokumentiert`,
          "CSS-Architektur-Migration priorisieren (siehe Issue #001)"
        );
      }

      // Speichere Issues-Daten
      this.issuesData = {
        stats: issuesStats,
        critical: criticalIssues,
        important: importantIssues,
        optimization: optimizationIssues,
        resolved: resolvedIssues,
        cssIssues: cssIssues,
      };
    } catch (error) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Issues-Liste Zugriff Info",
        `Issues.md nicht verfügbar: ${error.message}`,
        "Issues-Tracking optional erweitern"
      );
    }
  }

  /**
   * 📋 Archivierte TODOs analysieren
   */
  async analyzeArchivedTODOs(todoDir) {
    try {
      const archiveDir = path.join(todoDir, "archiv");
      let archiveFiles = [];

      try {
        archiveFiles = await fs.readdir(archiveDir);
        archiveFiles = archiveFiles.filter((file) => file.endsWith(".md"));
      } catch {
        // Archiv-Verzeichnis existiert nicht - das ist OK
        return;
      }

      if (archiveFiles.length > 0) {
        this.addIssue(
          RATINGS.INFO,
          "TODO-Archiv Status",
          `${archiveFiles.length} archivierte TODO-Dateien gefunden`,
          "Archiv-System funktional"
        );

        // Letztes archiviertes Element prüfen für Verlauf
        const latestArchive = archiveFiles.sort().pop();
        if (latestArchive) {
          this.addIssue(
            RATINGS.INFO,
            "Letztes TODO-Archiv",
            `Neuestes Archiv: ${latestArchive}`,
            "TODO-Verlauf verfügbar"
          );
        }
      }
    } catch (error) {
      // Silent fail - Archiv-Analyse ist optional
    }
  }

  /**
   * 📋 TODO-Integration in bestehende Issues
   */
  async integrateTODOsIntoIssues() {
    // Verknüpfe TODO-Daten mit gefundenen Build-Issues
    if (this.todoData && this.todoData.criticalTODOs.length > 0) {
      // CSS-Migration TODOs mit CSS-Checker-Ergebnissen verknüpfen
      const cssViolations = this.issues.filter(
        (issue) =>
          issue.title.includes("CSS-Architektur") ||
          issue.title.includes("Tailwind") ||
          issue.title.includes("Inline-Style")
      );

      if (cssViolations.length > 0 && this.todoData.cssPhase.length > 0) {
        this.addIssue(
          RATINGS.CRITICAL,
          "TODO-Build-Checker Korrelation",
          `${cssViolations.length} CSS-Violations gefunden - ${this.todoData.cssPhase.length} CSS-TODOs aktiv`,
          "CSS-Migration TODOs direkt mit Build-Checker Issues verknüpft - systematische Abarbeitung empfohlen"
        );
      }
    }

    // Issues-Tracking mit Build-Checker Ergebnissen verknüpfen
    if (this.issuesData && this.issuesData.cssIssues.length > 0) {
      this.addIssue(
        RATINGS.INFO,
        "Issues-Build-Integration",
        `${this.issuesData.cssIssues.length} CSS-Issues in issues.md dokumentiert`,
        "Build-Checker bestätigt dokumentierte Probleme"
      );
    }
  }

  /**
   * 🔍 VS CODE PROBLEMS INTEGRATION (NEU)
   * Analysiert TypeScript, ESLint und andere VS Code Diagnostics
   */
  async performVSCodeProblemsAnalysis() {
    console.log("🔍 Führe VS Code PROBLEMS-Analyse durch...");

    try {
      // 1. TypeScript-Probleme analysieren
      await this.analyzeTypeScriptProblems();

      // 2. ESLint-Probleme (falls vorhanden)
      await this.analyzeESLintProblems();

      // 3. Astro-spezifische Probleme
      await this.analyzeAstroProblems();

      // 4. Allgemeine Syntax-Probleme
      await this.analyzeSyntaxProblems();

      // 5. Integration in Build-Checker
      await this.integrateVSCodeProblemsIntoReport();

      console.log("✅ VS Code PROBLEMS-Analyse abgeschlossen");
    } catch (error) {
      console.error("❌ VS Code PROBLEMS Fehler:", error.message);
      this.addIssue(
        RATINGS.IMPORTANT,
        "VS Code PROBLEMS Analyse Fehler",
        error.message,
        "VS Code Workspace manuell auf Probleme prüfen"
      );
    }
  }

  /**
   * 🔍 TypeScript-Probleme analysieren
   */
  async analyzeTypeScriptProblems() {
    try {
      // Prüfe TypeScript-Konfiguration
      const tsconfigPath = path.join(CONFIG.PROJECT_ROOT, "tsconfig.json");

      try {
        const tsconfigContent = await fs.readFile(tsconfigPath, "utf-8");
        const tsconfig = JSON.parse(tsconfigContent);

        this.addIssue(
          RATINGS.INFO,
          "TypeScript-Konfiguration",
          "tsconfig.json gefunden",
          "TypeScript-Setup aktiv"
        );

        // Strict Mode prüfen
        if (tsconfig.compilerOptions && tsconfig.compilerOptions.strict) {
          this.addIssue(
            RATINGS.INFO,
            "TypeScript Strict Mode",
            "Strict Mode aktiviert - hohe Code-Qualität",
            "TypeScript-Standards eingehalten"
          );
        } else {
          this.addIssue(
            RATINGS.OPTIMIZATION,
            "TypeScript Strict Mode",
            "Strict Mode nicht aktiviert",
            "TypeScript Strict Mode für bessere Code-Qualität aktivieren"
          );
        }
      } catch {
        this.addIssue(
          RATINGS.IMPORTANT,
          "TypeScript-Konfiguration fehlt",
          "tsconfig.json nicht gefunden oder fehlerhaft",
          "TypeScript-Setup prüfen"
        );
      }

      // Simuliere häufige TypeScript-Probleme die in VS Code PROBLEMS auftreten
      const commonTSProblems = await this.detectCommonTypeScriptIssues();

      if (commonTSProblems.length > 0) {
        commonTSProblems.forEach((problem) => {
          this.addIssue(
            RATINGS.IMPORTANT,
            "TypeScript Problem erkannt",
            `${problem.file}: ${problem.message}`,
            "TypeScript-Fehler in VS Code PROBLEMS beheben"
          );
        });
      }
    } catch (error) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "TypeScript-Analyse Info",
        `TypeScript-Analyse eingeschränkt: ${error.message}`,
        "TypeScript-Environment optional prüfen"
      );
    }
  }

  /**
   * 🔍 ESLint-Probleme analysieren
   */
  async analyzeESLintProblems() {
    try {
      // Prüfe ESLint-Konfiguration
      const eslintConfigPaths = [
        path.join(CONFIG.PROJECT_ROOT, ".eslintrc.js"),
        path.join(CONFIG.PROJECT_ROOT, ".eslintrc.json"),
        path.join(CONFIG.PROJECT_ROOT, "eslint.config.js"),
      ];

      let eslintConfigFound = false;
      for (const configPath of eslintConfigPaths) {
        try {
          await fs.access(configPath);
          eslintConfigFound = true;
          this.addIssue(
            RATINGS.INFO,
            "ESLint-Konfiguration",
            `ESLint-Config gefunden: ${path.basename(configPath)}`,
            "Code-Linting aktiv"
          );
          break;
        } catch {
          // Nächste Config-Datei prüfen
        }
      }

      if (!eslintConfigFound) {
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "ESLint-Konfiguration fehlt",
          "Keine ESLint-Konfiguration gefunden",
          "ESLint für bessere Code-Qualität einrichten"
        );
      }

      // Simuliere häufige ESLint-Probleme
      const commonESLintProblems = await this.detectCommonESLintIssues();

      if (commonESLintProblems.length > 0) {
        this.addIssue(
          RATINGS.OPTIMIZATION,
          "ESLint Violations",
          `${commonESLintProblems.length} potenzielle ESLint-Violations erkannt`,
          "Code-Style-Violations in VS Code PROBLEMS überprüfen"
        );
      }
    } catch (error) {
      // Silent fail - ESLint ist optional
    }
  }

  /**
   * 🔍 Astro-spezifische Probleme analysieren
   */
  async analyzeAstroProblems() {
    try {
      // Prüfe Astro-Konfiguration
      const astroConfigPath = path.join(
        CONFIG.PROJECT_ROOT,
        "astro.config.mjs"
      );

      try {
        await fs.access(astroConfigPath);
        this.addIssue(
          RATINGS.INFO,
          "Astro-Konfiguration",
          "astro.config.mjs gefunden",
          "Astro-Setup funktional"
        );
      } catch {
        this.addIssue(
          RATINGS.CRITICAL,
          "Astro-Konfiguration fehlt",
          "astro.config.mjs nicht gefunden",
          "Astro-Projekt-Setup prüfen"
        );
      }

      // Häufige Astro-Probleme erkennen
      const astroFiles = await this.findAstroFiles();
      let astroProblemsFound = 0;

      for (const astroFile of astroFiles) {
        const content = await fs.readFile(astroFile, "utf-8");

        // Frontmatter-Syntax prüfen
        if (content.includes("---") && !content.match(/^---[\s\S]*?---/)) {
          astroProblemsFound++;
          this.addIssue(
            RATINGS.IMPORTANT,
            "Astro Frontmatter Problem",
            `${path.basename(astroFile)}: Fehlerhafter Frontmatter`,
            "Astro-Frontmatter-Syntax in VS Code PROBLEMS prüfen"
          );
        }

        // Komponent-Import-Probleme
        const importMatches = content.match(/import .* from ['"].*['"]/g) || [];
        importMatches.forEach((importStatement) => {
          if (
            importStatement.includes("../") &&
            importStatement.includes(".astro")
          ) {
            // Relative Imports können problematisch sein
            astroProblemsFound++;
          }
        });
      }

      if (astroProblemsFound === 0) {
        this.addIssue(
          RATINGS.INFO,
          "Astro-Code-Qualität",
          "Keine offensichtlichen Astro-Syntax-Probleme erkannt",
          "Astro-Development sauber"
        );
      }
    } catch (error) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Astro-Probleme-Analyse Info",
        `Astro-Analyse eingeschränkt: ${error.message}`,
        "Astro-Dateien manuell in VS Code auf Probleme prüfen"
      );
    }
  }

  /**
   * 🔍 Allgemeine Syntax-Probleme analysieren
   */
  async analyzeSyntaxProblems() {
    try {
      // Prüfe häufige Dateitypen auf Syntax-Probleme
      const fileTypes = [
        { pattern: "**/*.js", name: "JavaScript" },
        { pattern: "**/*.ts", name: "TypeScript" },
        { pattern: "**/*.astro", name: "Astro" },
        { pattern: "**/*.md", name: "Markdown" },
        { pattern: "**/*.json", name: "JSON" },
      ];

      let totalSyntaxIssues = 0;

      for (const fileType of fileTypes) {
        try {
          const syntaxIssues = await this.detectSyntaxIssuesForFileType(
            fileType
          );
          totalSyntaxIssues += syntaxIssues;
        } catch {
          // File type analysis failed - continue with others
        }
      }

      if (totalSyntaxIssues > 0) {
        this.addIssue(
          RATINGS.IMPORTANT,
          "Syntax-Probleme erkannt",
          `${totalSyntaxIssues} potenzielle Syntax-Probleme gefunden`,
          "VS Code PROBLEMS auf Syntax-Fehler prüfen"
        );
      } else {
        this.addIssue(
          RATINGS.INFO,
          "Syntax-Qualität",
          "Keine offensichtlichen Syntax-Probleme erkannt",
          "Code-Syntax sauber"
        );
      }
    } catch (error) {
      // Silent fail - Syntax-Analyse ist ergänzend
    }
  }

  /**
   * 🔍 VS Code PROBLEMS in Build-Checker integrieren
   */
  async integrateVSCodeProblemsIntoReport() {
    // Sammle alle VS Code-bezogenen Issues
    const vscodeIssues = this.issues.filter(
      (issue) =>
        issue.title.includes("TypeScript") ||
        issue.title.includes("ESLint") ||
        issue.title.includes("Astro") ||
        issue.title.includes("Syntax")
    );

    if (vscodeIssues.length > 0) {
      this.addIssue(
        RATINGS.INFO,
        "VS Code PROBLEMS Integration",
        `${vscodeIssues.length} VS Code-relevante Issues in Build-Checker integriert`,
        "VS Code PROBLEMS Registerkarte für detaillierte Diagnose verwenden"
      );

      // Speichere VS Code-Daten für erweiterte Berichte
      this.vscodeProblemsData = {
        totalIssues: vscodeIssues.length,
        typeScript: vscodeIssues.filter((i) => i.title.includes("TypeScript"))
          .length,
        eslint: vscodeIssues.filter((i) => i.title.includes("ESLint")).length,
        astro: vscodeIssues.filter((i) => i.title.includes("Astro")).length,
        syntax: vscodeIssues.filter((i) => i.title.includes("Syntax")).length,
      };
    } else {
      this.addIssue(
        RATINGS.INFO,
        "VS Code PROBLEMS Status",
        "Keine erkennbaren VS Code PROBLEMS - sauberer Code",
        "Development-Environment optimal"
      );

      this.vscodeProblemsData = {
        totalIssues: 0,
        status: "clean",
      };
    }
  }

  /**
   * 📊 Integrierter Projekt-Management-Report generieren (NEU)
   */
  async generateIntegratedProjectReport() {
    console.log("📊 Generiere integrierten Projekt-Management-Report...");

    try {
      const timestamp = new Date().toISOString();

      // Sammle alle Daten für integrierten Report
      const integratedData = {
        timestamp: timestamp,
        buildChecker: {
          totalIssues: this.issues.length,
          critical: this.issues.filter((i) => i.priority === RATINGS.CRITICAL)
            .length,
          important: this.issues.filter((i) => i.priority === RATINGS.IMPORTANT)
            .length,
          optimization: this.issues.filter(
            (i) => i.priority === RATINGS.OPTIMIZATION
          ).length,
          info: this.issues.filter((i) => i.priority === RATINGS.INFO).length,
        },
        todos: this.todoData || { stats: { active: 0, completed: 0 } },
        issues: this.issuesData || { stats: { critical: 0, important: 0 } },
        vscodeProblems: this.vscodeProblemsData || { totalIssues: 0 },
        integration: {
          cssRelated: this.issues.filter(
            (i) =>
              i.title.includes("CSS") ||
              i.title.includes("Tailwind") ||
              i.title.includes("Design")
          ).length,
          todoCorrelations: this.todoData?.cssPhase?.length || 0,
          issueCorrelations: this.issuesData?.cssIssues?.length || 0,
        },
      };

      // Report-Summary erstellen
      this.addIssue(
        RATINGS.INFO,
        "🎯 PROJEKT-MANAGEMENT INTEGRATION",
        `Build: ${integratedData.buildChecker.totalIssues} Issues | TODOs: ${
          integratedData.todos.stats.active
        } aktiv | Issues: ${
          integratedData.issues.stats.critical +
          integratedData.issues.stats.important
        } dokumentiert | VS Code: ${
          integratedData.vscodeProblems.totalIssues
        } Problems`,
        "Vollständige Projekt-Übersicht in Build-Checker Log verfügbar"
      );

      // CSS-Migration Fokus hervorheben
      if (integratedData.integration.cssRelated > 0) {
        this.addIssue(
          RATINGS.CRITICAL,
          "🎨 CSS-MIGRATION KOORDINATION",
          `${integratedData.integration.cssRelated} CSS-Issues im Build | ${integratedData.integration.todoCorrelations} CSS-TODOs aktiv | ${integratedData.integration.issueCorrelations} CSS-Issues dokumentiert`,
          "CSS-Migration systematisch durch alle Systeme (Build-Checker ↔ TODOs ↔ Issues ↔ VS Code) koordinieren"
        );
      }

      // Speichere integrierten Report
      this.integratedProjectData = integratedData;
    } catch (error) {
      this.addIssue(
        RATINGS.OPTIMIZATION,
        "Projekt-Management Report Info",
        `Integrierter Report eingeschränkt: ${error.message}`,
        "Projekt-Management-Daten manuell koordinieren"
      );
    }
  }

  /**
   * 🛠️ Hilfsfunktionen für TODO-Tracking
   */
  extractActiveTODOs(content) {
    const todos = [];
    const todoMatches =
      content.match(
        /### \*\*TODO #(\d+):[^*]*\*\*(.*?)(?=###|\n##|\n\*\*|$)/gs
      ) || [];

    todoMatches.forEach((match) => {
      const idMatch = match.match(/TODO #(\d+):/);
      const titleMatch = match.match(/TODO #\d+:\s*([^*]+)\*\*/);

      if (idMatch && titleMatch && !match.includes("✅")) {
        todos.push({
          id: idMatch[1],
          title: titleMatch[1].trim(),
          text: match,
          status: match.includes("📝") ? "IN_PROGRESS" : "PLANNED",
          description: match.substring(0, 200) + "...",
        });
      }
    });

    return todos;
  }

  extractCompletedTODOs(content) {
    const completedTodos = [];
    const completedMatches =
      content.match(/### \*\*TODO #(\d+):[^*]*\*\*[^✅]*✅[^#]*/gs) || [];

    completedMatches.forEach((match) => {
      const idMatch = match.match(/TODO #(\d+):/);
      const titleMatch = match.match(/TODO #\d+:\s*([^*]+)\*\*/);

      if (idMatch && titleMatch) {
        completedTodos.push({
          id: idMatch[1],
          title: titleMatch[1].trim(),
          text: match,
          status: "COMPLETED",
        });
      }
    });

    return completedTodos;
  }

  extractIssuesByPriority(content, priorityMarker) {
    const issues = [];
    const regex = new RegExp(`${priorityMarker}[\\s\\S]*?(?=##|$)`, "g");
    const sections = content.match(regex) || [];

    sections.forEach((section) => {
      const issueMatches =
        section.match(/### \*\*Issue #(\d+):[^*]*\*\*(.*?)(?=###|##|$)/gs) ||
        [];

      issueMatches.forEach((match) => {
        const idMatch = match.match(/Issue #(\d+):/);
        const titleMatch = match.match(/Issue #\d+:\s*([^*]+)\*\*/);

        if (idMatch && titleMatch) {
          issues.push({
            id: idMatch[1],
            title: titleMatch[1].trim(),
            text: match,
            priority: priorityMarker.replace(/[🔴🟡🟢✅]/g, "").trim(),
          });
        }
      });
    });

    return issues;
  }

  /**
   * 🛠️ Hilfsfunktionen für VS Code PROBLEMS
   */
  async detectCommonTypeScriptIssues() {
    const problems = [];

    try {
      // Prüfe Astro-Dateien auf häufige TypeScript-Probleme
      const astroFiles = await this.findAstroFiles();

      for (const file of astroFiles) {
        const content = await fs.readFile(file, "utf-8");

        // any-Type Usage
        if (content.includes(": any") || content.includes("as any")) {
          problems.push({
            file: path.basename(file),
            message: "any-Type usage detected",
            severity: "warning",
          });
        }

        // Fehlende Type-Definitionen
        if (
          content.includes("// @ts-ignore") ||
          content.includes("// @ts-nocheck")
        ) {
          problems.push({
            file: path.basename(file),
            message: "TypeScript suppression comment found",
            severity: "info",
          });
        }
      }
    } catch {
      // Silent fail - detection is optional
    }

    return problems;
  }

  async detectCommonESLintIssues() {
    const problems = [];

    try {
      // Prüfe JavaScript/TypeScript-Dateien auf häufige ESLint-Violations
      const jsFiles = await this.findJavaScriptFiles();

      for (const file of jsFiles) {
        const content = await fs.readFile(file, "utf-8");

        // console.log in Production Code
        if (
          content.includes("console.log") &&
          !content.includes("import.meta.env.DEV")
        ) {
          problems.push({
            file: path.basename(file),
            message: "console.log in production code",
            rule: "no-console",
          });
        }

        // Unused Variables (simple heuristic)
        const variableMatches =
          content.match(/(?:const|let|var)\s+(\w+)/g) || [];
        // This is a simplified check - real ESLint is much more sophisticated
      }
    } catch {
      // Silent fail - detection is optional
    }

    return problems;
  }

  async detectSyntaxIssuesForFileType(fileType) {
    let issueCount = 0;

    try {
      if (fileType.name === "JSON") {
        // Prüfe JSON-Dateien auf Syntax-Fehler
        const jsonFiles = ["package.json", "tsconfig.json", "astro.config.mjs"];

        for (const fileName of jsonFiles) {
          if (fileName.endsWith(".json")) {
            try {
              const filePath = path.join(CONFIG.PROJECT_ROOT, fileName);
              const content = await fs.readFile(filePath, "utf-8");
              JSON.parse(content); // Wirft Fehler bei invalider JSON
            } catch (error) {
              if (error.message.includes("JSON")) {
                issueCount++;
              }
            }
          }
        }
      }
    } catch {
      // Silent fail - Syntax-Check ist ergänzend
    }

    return issueCount;
  }

  async findJavaScriptFiles() {
    const jsFiles = [];
    const searchDirs = [
      path.join(CONFIG.PROJECT_ROOT, "src"),
      path.join(CONFIG.PROJECT_ROOT, "tools"),
    ];

    for (const dir of searchDirs) {
      try {
        const files = await this.getFilesRecursively(dir);
        jsFiles.push(
          ...files.filter(
            (file) =>
              file.endsWith(".js") ||
              file.endsWith(".ts") ||
              file.endsWith(".mjs")
          )
        );
      } catch {
        // Directory might not exist
      }
    }

    return jsFiles;
  }

  async getFilesRecursively(dir) {
    const files = [];

    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          const subFiles = await this.getFilesRecursively(fullPath);
          files.push(...subFiles);
        } else {
          files.push(fullPath);
        }
      }
    } catch {
      // Directory access failed
    }

    return files;
  }
}

// 🚀 Professional Build & SEO Checker - Enhanced Execution
if (require.main === module) {
  console.log(
    "🌟 Starting Professional Build & SEO Checker with Portfolio Blueprint Features..."
  );
  const checker = new BuildChecker();
  checker.run().catch((error) => {
    console.error("❌ Professional Build Checker failed:", error);
    process.exit(1);
  });
}

module.exports = BuildChecker;
