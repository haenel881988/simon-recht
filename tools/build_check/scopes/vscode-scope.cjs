const fs = require("fs").promises;
const path = require("path");

/**
 * 🔍 VS CODE PROBLEMS SCOPE
 * Erfasst und analysiert alle VS Code Probleme (TypeScript-Fehler, Linting, etc.)
 */
class VSCodeScope {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.name = "VSCode Problems";
    this.healthScore = 100;
    this.issues = [];
    this.metrics = {};
    this.kiPrompts = [];
  }

  async run() {
    console.log("🔍 VS Code Problems Scope gestartet...");

    try {
      // 1. TypeScript-Fehler analysieren
      await this.analyzeTypeScriptErrors();

      // 2. ESLint-Probleme erfassen
      await this.analyzeESLintProblems();

      // 3. Astro-spezifische Probleme
      await this.analyzeAstroProblems();

      // 4. Build-Fehler analysieren
      await this.analyzeBuildErrors();

      // 5. VS Code Extension Probleme
      await this.analyzeVSCodeProblems();

      // 6. Health Score berechnen
      this.calculateHealthScore();

      console.log(`🔍 VS Code Scope abgeschlossen: ${this.healthScore}/100`);
      console.log(
        `🚨 Probleme erfasst: TypeScript(${
          this.metrics.typescriptErrors || 0
        }), ESLint(${this.metrics.eslintErrors || 0}), Astro(${
          this.metrics.astroErrors || 0
        })`
      );
    } catch (error) {
      this.addIssue("critical", `VS Code Scope Fehler: ${error.message}`);
      this.healthScore = 0;
    }

    return {
      name: this.name,
      healthScore: this.healthScore,
      issues: this.issues,
      metrics: this.metrics,
      kiPrompts: this.kiPrompts,
      status:
        this.healthScore >= 80
          ? "excellent"
          : this.healthScore >= 60
          ? "good"
          : "needs-attention",
    };
  }

  async analyzeTypeScriptErrors() {
    try {
      // TypeScript-Konfiguration prüfen
      const tsconfigPath = path.join(this.projectRoot, "tsconfig.json");

      try {
        await fs.access(tsconfigPath);
        console.log("📝 TypeScript-Konfiguration gefunden");

        // TypeScript-Fehler simulieren (in echter Implementierung würde hier tsc --noEmit laufen)
        const mockTSErrors = [
          // Hier würden echte TS-Fehler aus dem Compiler kommen
        ];

        this.metrics.typescriptErrors = mockTSErrors.length;

        if (mockTSErrors.length > 0) {
          this.addIssue(
            "critical",
            `${mockTSErrors.length} TypeScript-Fehler gefunden`
          );
          this.kiPrompts.push(
            "TypeScript-Fehler beheben mit: tsc --noEmit --watch"
          );
        }
      } catch {
        this.addIssue("info", "Keine TypeScript-Konfiguration gefunden");
      }
    } catch (error) {
      this.addIssue(
        "warning",
        `TypeScript-Analyse fehlgeschlagen: ${error.message}`
      );
    }
  }

  async analyzeESLintProblems() {
    try {
      const eslintConfigPath = path.join(this.projectRoot, ".eslintrc.js");

      try {
        await fs.access(eslintConfigPath);
        console.log("🔍 ESLint-Konfiguration gefunden");

        // ESLint-Probleme simulieren
        const mockESLintProblems = [
          // Hier würden echte ESLint-Probleme kommen
        ];

        this.metrics.eslintProblems = mockESLintProblems.length;

        if (mockESLintProblems.length > 0) {
          this.addIssue(
            "warning",
            `${mockESLintProblems.length} ESLint-Probleme gefunden`
          );
          this.kiPrompts.push(
            "ESLint-Probleme automatisch fixen mit: npm run lint:fix"
          );
        }
      } catch {
        this.addIssue("info", "Keine ESLint-Konfiguration gefunden");
      }
    } catch (error) {
      this.addIssue(
        "warning",
        `ESLint-Analyse fehlgeschlagen: ${error.message}`
      );
    }
  }

  async analyzeAstroProblems() {
    try {
      // Astro-Konfiguration prüfen
      const astroConfigPath = path.join(this.projectRoot, "astro.config.mjs");

      try {
        await fs.access(astroConfigPath);
        console.log("🚀 Astro-Konfiguration gefunden");

        // Astro-spezifische Probleme prüfen
        const astroConfig = await fs.readFile(astroConfigPath, "utf8");

        // Häufige Astro-Probleme checken
        if (!astroConfig.includes("output:")) {
          this.addIssue(
            "warning",
            "Astro output-Modus nicht spezifiziert (empfohlen: static)"
          );
        }

        if (!astroConfig.includes("integrations:")) {
          this.addIssue("info", "Keine Astro-Integrations konfiguriert");
        }

        this.metrics.astroConfigValid = true;
      } catch {
        this.addIssue(
          "critical",
          "Astro-Konfiguration nicht gefunden oder fehlerhaft"
        );
        this.metrics.astroConfigValid = false;
      }
    } catch (error) {
      this.addIssue(
        "warning",
        `Astro-Analyse fehlgeschlagen: ${error.message}`
      );
    }
  }

  async analyzeBuildErrors() {
    try {
      // Package.json auf Build-Scripts prüfen
      const packageJsonPath = path.join(this.projectRoot, "package.json");

      try {
        const packageJson = JSON.parse(
          await fs.readFile(packageJsonPath, "utf8")
        );

        if (!packageJson.scripts?.build) {
          this.addIssue(
            "warning",
            "Kein Build-Script in package.json definiert"
          );
        }

        if (!packageJson.scripts?.dev) {
          this.addIssue("warning", "Kein Dev-Script in package.json definiert");
        }

        // Dependencies auf Konflikte prüfen
        const deps = {
          ...packageJson.dependencies,
          ...packageJson.devDependencies,
        };

        if (deps.astro && deps.vite) {
          const astroVersion = deps.astro;
          const viteVersion = deps.vite;

          // Vereinfachte Versions-Kompatibilitätsprüfung
          this.metrics.dependencyConflicts = 0; // In echter Implementierung würde hier geprüft
        }

        this.metrics.buildScriptsAvailable = !!(
          packageJson.scripts?.build && packageJson.scripts?.dev
        );
      } catch {
        this.addIssue("critical", "package.json nicht lesbar oder fehlerhaft");
      }
    } catch (error) {
      this.addIssue(
        "warning",
        `Build-Analyse fehlgeschlagen: ${error.message}`
      );
    }
  }

  /**
   * 🚨 VS CODE EXTENSION PROBLEME ANALYSIEREN
   */
  async analyzeVSCodeProblems() {
    try {
      console.log("🔍 Analysiere VS Code Extension-Probleme...");

      const { exec } = require("child_process");
      const { promisify } = require("util");
      const execAsync = promisify(exec);

      try {
        // TypeScript Compiler für echte Fehler ausführen
        const { stdout, stderr } = await execAsync("npx tsc --noEmit", {
          cwd: this.projectRoot,
          timeout: 30000,
        });

        if (stderr) {
          const tsErrors = this.parseTypeScriptOutput(stderr);
          this.metrics.realTypescriptErrors = tsErrors.length;

          tsErrors.forEach((error) => {
            this.addIssue(
              "critical",
              `TypeScript: ${error.message} (${error.file}:${error.line})`
            );
          });

          if (tsErrors.length > 0) {
            this.kiPrompts.push(
              `🔧 TypeScript-Fehler beheben: ${tsErrors.length} Probleme in VS Code Problems Panel`
            );
          }
        } else {
          this.metrics.realTypescriptErrors = 0;
          console.log("✅ Keine TypeScript-Fehler gefunden");
        }
      } catch (tsError) {
        this.addIssue("warning", "TypeScript-Compiler nicht verfügbar");
      }

      try {
        // ESLint für echte Linting-Probleme
        const { stdout, stderr } = await execAsync(
          "npx eslint . --format json",
          {
            cwd: this.projectRoot,
            timeout: 20000,
          }
        );

        if (stdout) {
          const eslintResults = JSON.parse(stdout);
          let totalErrors = 0;
          let totalWarnings = 0;

          eslintResults.forEach((file) => {
            file.messages.forEach((msg) => {
              if (msg.severity === 2) {
                totalErrors++;
                this.addIssue(
                  "critical",
                  `ESLint Error: ${msg.message} (${file.filePath}:${msg.line})`
                );
              } else {
                totalWarnings++;
                this.addIssue(
                  "warning",
                  `ESLint Warning: ${msg.message} (${file.filePath}:${msg.line})`
                );
              }
            });
          });

          this.metrics.eslintRealErrors = totalErrors;
          this.metrics.eslintRealWarnings = totalWarnings;

          if (totalErrors > 0) {
            this.kiPrompts.push(
              `🔧 ESLint-Fehler beheben: ${totalErrors} Errors, ${totalWarnings} Warnings`
            );
          }
        }
      } catch (eslintError) {
        this.addIssue("info", "ESLint nicht konfiguriert oder verfügbar");
      }
    } catch (error) {
      this.addIssue(
        "warning",
        `VS Code Probleme-Analyse fehlgeschlagen: ${error.message}`
      );
    }
  }

  /**
   * 📝 TYPESCRIPT OUTPUT PARSEN
   */
  parseTypeScriptOutput(output) {
    const errors = [];
    const lines = output.split("\n");

    lines.forEach((line) => {
      // Beispiel: src/components/Header.astro(15,7): error TS2345: Argument of type...
      const match = line.match(/^(.+?)\((\d+),(\d+)\): error TS(\d+): (.+)$/);
      if (match) {
        errors.push({
          file: match[1],
          line: match[2],
          column: match[3],
          code: match[4],
          message: match[5],
        });
      }
    });

    return errors;
  }

  calculateHealthScore() {
    let score = 100;

    // Reduziere Score basierend auf Issues
    this.issues.forEach((issue) => {
      switch (issue.severity) {
        case "critical":
          score -= 25;
          break;
        case "warning":
          score -= 10;
          break;
        case "info":
          score -= 2;
          break;
      }
    });

    this.healthScore = Math.max(0, score);
  }

  addIssue(severity, description) {
    this.issues.push({
      severity,
      description,
      timestamp: new Date().toISOString(),
      scope: "vscode",
    });
  }
}

module.exports = VSCodeScope;
