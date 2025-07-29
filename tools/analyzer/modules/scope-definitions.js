/**
 * 📊 SCOPE-DEFINITIONS-MODUL
 *
 * Zentrale Definition aller Projekt-Scopes und Überlappungsregeln
 * Ausgelagert aus universal-project-analyzer.cjs für bessere Wartbarkeit
 */

const SCOPE_DEFINITIONS = {
  CSS_DESIGN: [
    /styles?\//,
    /css/i,
    /scss/i,
    /design/i,
    /theme/i,
    /\.css$/,
    /60-30-10/i,
    /global_css/i,
  ],
  CONTENT: [
    /content/i,
    /blog/i,
    /pages\//,
    /startseite/i,
    /landingpage/i,
    /seo/i,
    /marketing/i,
  ],
  ASTRO_COMPONENTS: [
    /\.astro$/,
    /components\//,
    /layouts?\//,
    /src\/pages\//,
    /src\/components\//,
  ],
  INSTRUCTIONS: [
    /instructions/i,
    /copilot/i,
    /\.github\//,
    /README/i,
    /anrede/i,
    /agent\.md/,
  ],
  TODOS_MANAGEMENT: [/todos?\//, /todo/i, /issues?/i, /verhalten/i],
  BUILD_SYSTEM: [
    /tools?\//,
    /build/i,
    /check/i,
    /package\.json/,
    /astro\.config/,
    /tailwind\.config/,
  ],
  DOCUMENTATION: [/docs?\//, /README/i, /\.md$/, /documentation/i],
  ASSETS: [
    /public\//,
    /assets?\//,
    /images?\//,
    /videos?\//,
    /\.(jpg|jpeg|png|gif|svg|mp4|webm)$/i,
  ],
  CONFIG: [/\.json$/, /\.js$/, /\.mjs$/, /\.ts$/, /config/i, /settings?/i],
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
