#!/usr/bin/env node

/**
 * Frontmatter SEO Validator
 * Prüft alle Markdown-Dateien auf SEO-konforme Frontmatter
 * 
 * Kriterien:
 * - Title: Max. 60 Zeichen
 * - Description: Max. 155 Zeichen
 * - Fokus-Keyword: Muss in Title UND Description enthalten sein
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfiguration
const CONFIG = {
  maxTitleLength: 60,
  maxDescriptionLength: 155,
  contentDir: path.join(__dirname, '../src/content/blog'),
  reportDir: path.join(__dirname, '../docs/12_lighthouse_performance')
};

/**
 * Extrahiert Frontmatter aus Markdown-Datei
 */
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n(.*?)\n---/s;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/['"]/g, '');
      frontmatter[key] = value;
    }
  }
  
  return frontmatter;
}

/**
 * Validiert Frontmatter-Felder
 */
function validateFrontmatter(frontmatter, filename) {
  const violations = [];
  
  // Title-Validierung
  if (!frontmatter.title) {
    violations.push('❌ Title fehlt');
  } else if (frontmatter.title.length > CONFIG.maxTitleLength) {
    violations.push(`❌ Title zu lang: ${frontmatter.title.length}/${CONFIG.maxTitleLength} Zeichen`);
  }
  
  // Description-Validierung
  if (!frontmatter.description) {
    violations.push('❌ Description fehlt');
  } else if (frontmatter.description.length > CONFIG.maxDescriptionLength) {
    violations.push(`❌ Description zu lang: ${frontmatter.description.length}/${CONFIG.maxDescriptionLength} Zeichen`);
  }
  
  // Fokus-Keyword-Validierung
  if (frontmatter.focusKeyword) {
    const keyword = frontmatter.focusKeyword.toLowerCase();
    const titleLower = (frontmatter.title || '').toLowerCase();
    const descLower = (frontmatter.description || '').toLowerCase();
    
    if (!titleLower.includes(keyword)) {
      violations.push(`❌ Fokus-Keyword "${frontmatter.focusKeyword}" nicht in Title gefunden`);
    }
    
    if (!descLower.includes(keyword)) {
      violations.push(`❌ Fokus-Keyword "${frontmatter.focusKeyword}" nicht in Description gefunden`);
    }
  } else {
    violations.push('⚠️ Fokus-Keyword fehlt');
  }
  
  return violations;
}

/**
 * Hauptfunktion
 */
async function runValidator() {
  console.log('🔍 Frontmatter SEO Validator gestartet...\n');
  
  const files = fs.readdirSync(CONFIG.contentDir)
    .filter(file => file.endsWith('.md'));
  
  let totalFiles = 0;
  let conformFiles = 0;
  const allViolations = [];
  
  for (const file of files) {
    totalFiles++;
    const filePath = path.join(CONFIG.contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatter = extractFrontmatter(content);
    
    if (!frontmatter) {
      console.log(`⚠️ ${file}: Kein Frontmatter gefunden`);
      continue;
    }
    
    const violations = validateFrontmatter(frontmatter, file);
    
    if (violations.length === 0) {
      conformFiles++;
      console.log(`✅ ${file}: SEO-konform`);
    } else {
      console.log(`❌ ${file}:`);
      violations.forEach(violation => console.log(`   ${violation}`));
      
      allViolations.push({
        file,
        violations,
        frontmatter
      });
    }
    console.log('');
  }
  
  // Statistiken
  const conformRate = ((conformFiles / totalFiles) * 100).toFixed(1);
  console.log(`📊 Ergebnis:`);
  console.log(`   Geprüfte Dateien: ${totalFiles}`);
  console.log(`   SEO-konforme Dateien: ${conformFiles} (${conformRate}%)`);
  console.log(`   Verstöße: ${allViolations.length}`);
  
  // Report generieren
  if (allViolations.length > 0) {
    console.log(`\n📝 Detaillierter Report wird erstellt...`);
    await generateReport(allViolations, totalFiles, conformFiles);
    console.log(`✅ Report gespeichert in: ${CONFIG.reportDir}`);
  }
  
  return allViolations.length === 0;
}

/**
 * Generiert detaillierten Report
 */
async function generateReport(violations, totalFiles, conformFiles) {
  const timestamp = new Date().toISOString().split('T')[0];
  const reportPath = path.join(CONFIG.reportDir, `frontmatter-validation-${timestamp}.md`);
  
  const conformRate = ((conformFiles / totalFiles) * 100).toFixed(1);
  
  let report = `# Frontmatter SEO Validation Report - ${timestamp}\n\n`;
  report += `## 📊 Statistiken\n`;
  report += `- **Geprüfte Dateien:** ${totalFiles}\n`;
  report += `- **SEO-konforme Dateien:** ${conformFiles} (${conformRate}%)\n`;
  report += `- **Dateien mit Verstößen:** ${violations.length}\n\n`;
  
  report += `## ❌ Verstöße\n\n`;
  
  for (const violation of violations) {
    report += `### ${violation.file}\n`;
    report += `**Aktuelle Werte:**\n`;
    report += `- Title: "${violation.frontmatter.title}" (${(violation.frontmatter.title || '').length} Zeichen)\n`;
    report += `- Description: "${violation.frontmatter.description}" (${(violation.frontmatter.description || '').length} Zeichen)\n`;
    report += `- Fokus-Keyword: "${violation.frontmatter.focusKeyword || 'Nicht definiert'}"\n\n`;
    
    report += `**Gefundene Probleme:**\n`;
    violation.violations.forEach(v => {
      report += `- ${v}\n`;
    });
    report += `\n`;
  }
  
  // Sicherstellen, dass Report-Verzeichnis existiert
  if (!fs.existsSync(CONFIG.reportDir)) {
    fs.mkdirSync(CONFIG.reportDir, { recursive: true });
  }
  
  fs.writeFileSync(reportPath, report);
}

// Script ausführen wenn direkt aufgerufen
if (import.meta.url === `file://${process.argv[1]}`) {
  runValidator()
    .then(isValid => {
      process.exit(isValid ? 0 : 1);
    })
    .catch(error => {
      console.error('❌ Fehler beim Validieren:', error);
      process.exit(1);
    });
}

export { runValidator, validateFrontmatter };
