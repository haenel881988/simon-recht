/**
 * 📊 SCOPE-DEFINITIONS-MODUL
 *
 * Zentrale Definition aller Projekt-Scopes und Überlappungsregeln
 * Ausgelagert aus universal-project-analyzer.cjs für bessere Wartbarkeit
 */

const SCOPE_DEFINITIONS = {
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
  TODOS_MANAGEMENT: [
    /^docs\/todos\//, // Nur docs/todos/ Verzeichnis
  ],
  BUILD_SYSTEM: [
    /^tools\/build_check\/(?!logfiles\/archive)/, // Build-Tools aber NICHT alte Logfiles
    /^package\.json$/, // Package-Config
    /^astro\.config\.mjs$/, // Astro-Config
    /^tailwind\.config\.mjs$/, // Tailwind-Config
  ],
  DOCUMENTATION: [
    /^docs\/website_struktur\/recherche\//, // Recherche-Dokumentation
    /^docs\/marketing\//, // Marketing-Dokumentation
    /^docs\/00_ideenwerkstatt\//, // Ideenwerkstatt
    /^README\.md$/, // Nur Haupt-README
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
