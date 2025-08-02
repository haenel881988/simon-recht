/**
 * 📊 SCOPE-DEFINITIONS-MODUL
 *
 * Zentrale Definition aller Projekt-Scopes und Überlappungsregeln
 * Ausgelagert aus universal-project-analyzer.cjs für bessere Wartbarkeit
 */

const SCOPE_DEFINITIONS = {
  // 🚨 SPEZIFISCHE PATTERNS ZUERST (wichtig für korrekte Zuordnung!)
  DOCUMENTATION_CORE: [
    /^docs\/documentation\/core\//, // Kern-Dokumentation (Authentizität, Analyzer-Instructions)
  ],
  DOCUMENTATION_TECHNICAL: [
    /^docs\/documentation\/technical\//, // Technical-Docs (Build, CSS, Tools)
  ],
  DOCUMENTATION_WEBSITE: [
    /^docs\/documentation\/website\//, // Website-Content (Marketing, Struktur)
  ],
  DOCUMENTATION_HUB: [
    /^docs\/documentation\/README\.md$/, // Navigation-Hub (nicht modularisieren!)
  ],
  IDEENWERKSTATT: [
    /^docs\/00_ideenwerkstatt\//, // Ideenwerkstatt als separater Scope (NICHT anfassen!)
  ],
  // 🔧 ANALYZER-TOOLS SUB-SCOPES (AUFGETEILT)
  ANALYZER_CORE_TOOLS: [
    /^tools\/analyzer\/universal-project-analyzer\.cjs$/, // Haupt-Analyzer
    /^tools\/analyzer\/master-analyzer\.cjs$/, // Master-Tool
    /^tools\/analyzer\/contradiction-scanner\.cjs$/, // Widerspruchs-Scanner
  ],
  ANALYZER_REPORTS: [
    /^tools\/analyzer\/.*\.md$/, // Alle Reports (.md)
  ],
  ANALYZER_MODULES_BASE: [
    /^tools\/analyzer\/modules\//, // Module-Verzeichnis (3 Dateien)
  ],
  ANALYZER_MODULES_CORE: [
    /^tools\/analyzer\/core\//, // Core-Module (3 Dateien)
  ],
  ANALYZER_MODULES_SCOPES: [
    /^tools\/analyzer\/scopes\//, // Scope-spezifische Tools (4 Dateien)
  ],
  ANALYZER_LEGACY_TOOLS: [
    /^tools\/analyzer\/.*\.cjs$/, // Remaining .cjs Tools
    /^tools\/analyzer\/.*\.js$/, // JavaScript Tools
    /^tools\/project-maintenance\//, // Project-Maintenance-Tools
  ],
  // 📄 LEGACY-WEBSITE-STRUKTUR SUB-SCOPES (AUFGETEILT)
  LEGACY_RECHERCHE_GRUND: [
    /^docs\/website_struktur\/recherche\/grundrecherche\.md$/, // Haupt-Marktanalyse
    /^docs\/website_struktur\/recherche\/tiefenrecherche\.md$/, // Haupt-Tiefen-Recherche
  ],
  LEGACY_RECHERCHE_COACHING: [
    /^docs\/website_struktur\/recherche\/tiefen_recherche\/ph01_/, // Coaching-Markt DACH
  ],
  LEGACY_RECHERCHE_SEO: [
    /^docs\/website_struktur\/recherche\/tiefen_recherche\/ph02_/, // SEO & Content-Strategie
  ],
  LEGACY_RECHERCHE_GTM: [
    /^docs\/website_struktur\/recherche\/tiefen_recherche\/ph03_/, // Go-to-Market Plan
  ],
  LEGACY_RECHERCHE_BILDUNG: [
    /^docs\/website_struktur\/recherche\/tiefen_recherche\/ph04_/, // Digitale Bildung
  ],
  LEGACY_CONTENT: [
    /^docs\/website_struktur\/content\//, // Content-Strukturen & Stories
    /^docs\/website_struktur\/dynamische-seiten\//, // Blog-Content
    /^docs\/website_struktur\/statische-seiten\//, // Static-Pages
  ],
  LEGACY_DESIGN: [
    /^docs\/website_struktur\/website_design\//, // Design-System & CSS
    /^docs\/website_struktur\/website_elemente\//, // Header/Footer etc.
  ],
  LEGACY_ZIELGRUPPE: [
    /^docs\/website_struktur\/zielgruppe\//, // Persona & Targeting
  ],
  // 🎯 ALLGEMEINE PATTERNS DANACH
  CSS_DESIGN: [
    /^src\/styles\//, // Nur src/styles/ Verzeichnis
    /^docs\/website_struktur\/website_design\//, // Design-Dokumentation
    /\.css$/, // CSS-Dateien
    /global_css\.md$/, // Spezifische CSS-Dokumente
    /60-30-10.*\.md$/, // Design-System-Dokumente
  ],
  CONTENT: [
    /^src\/content\//, // Nur src/content/ Verzeichnis
    /^src\/pages\/.*\.astro$/, // Astro Seiten-Dateien
    /^docs\/website_struktur\/content\//, // Content-Dokumentation
  ],
  ASTRO_COMPONENTS: [
    /^src\/layouts\/.*\.astro$/, // Layout-Komponenten
    /^src\/components\/.*\.astro$/, // Andere Komponenten
    /^src\/pages\/.*\.astro$/, // Seiten-Komponenten
  ],
  INSTRUCTIONS: [
    /^\.github\/instructions\//, // Nur .github/instructions/
    /^\.github\/copilot-instructions\.md$/, // Haupt-Instructions
    /copilot-instructions\.md$/, // Alle copilot-instructions Dateien
    /instructions.*\.md$/, // Instructions-Dateien
  ],
  TODOS_STRUKTUR: [
    /^docs\/todos\/struktur-migration-plan/, // Struktur-Migration (JSON+MD)
  ],
  TODOS_CORE: [
    /^docs\/todos\/README\.md$/, // TODO Navigation-Hub
    /^docs\/todos\/todos\.md$/, // Haupt-TODO-Liste
  ],
  TODOS_PRIORITAETEN: [
    /^docs\/todos\/prioritaeten\//, // Prioritäts-Kategorien
  ],
  TODOS_VERHALTENSMUSTER: [
    /^docs\/todos\/verhaltensmuster\//, // Verhaltensanalysen
  ],
  BUILD_SYSTEM: [
    /^tools\/build_check\/(?!logfiles\/archive)/, // Build-Tools aber NICHT alte Logfiles
    /^package\.json$/, // Package-Config
    /^astro\.config\.mjs$/, // Astro-Config
    /^tailwind\.config\.mjs$/, // Tailwind-Config
  ],
  LEGACY_DOCUMENTATION: [
    /^docs\/website_struktur\/recherche\//, // Recherche-Dokumentation (Legacy)
    /^docs\/marketing\//, // Marketing-Dokumentation (Legacy)
    /^README\.md$/, // Nur Haupt-README
    /readme\.md$/i, // README-Dateien in Verzeichnissen
  ],
  ASSETS: [
    /^public\//, // Nur public/ Verzeichnis
    /^src\/content\/.*\.(jpg|jpeg|png|gif|svg|mp4|webm)$/i, // Asset-Dateien
  ],
  CONFIG: [
    /^\.json$/, // Nur Root-JSON-Dateien
    /^tools\/.*\.js$/, // Tool-Konfigurationen
    /^tools\/.*\.mjs$/, // Tool-Module
  ],
  LOGS_ARCHIVE: [
    /^tools\/build_check\/logfiles\/archive\//, // Archivierte Logfiles
    /^tools\/analyzer\/projekt-analyse-.*\.md$/, // Alte Analysen
    /^tools\/analyzer\/widerspruchs-report-.*\.md$/, // Alte Reports
  ],
};

const OVERLAP_RULES = [
  {
    scopes: ["CSS_DESIGN", "CONTENT"],
    reason: "CSS-Kontrast-Optimierung betrifft SEO-Rankings",
    priority: "HIGH",
    allowCombined: true,
  },
  {
    scopes: ["ASTRO_COMPONENTS", "CSS_DESIGN"],
    reason: "Layout-Komponenten benötigen Styling-Koordination",
    priority: "MEDIUM",
    allowCombined: true,
  },
  {
    scopes: ["BUILD_SYSTEM", "CSS_DESIGN"],
    reason: "Build-Checker validiert CSS-Architektur",
    priority: "MEDIUM",
    allowCombined: false,
  },
];

const TOKEN_LIMITS = {
  PER_SCOPE: 50000,
  GITHUB_COPILOT_TOTAL: 50000,
  LINE_LIMIT_MODULARIZATION: 1200,
  WARNING_THRESHOLD: 0.8,
};

module.exports = {
  SCOPE_DEFINITIONS,
  OVERLAP_RULES,
  TOKEN_LIMITS,
};
