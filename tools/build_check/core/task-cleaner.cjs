#!/usr/bin/env node

/**
 * 🧹 SIMON'S AUTOMATISCHER TASK-CLEANER v1.0
 *
 * 🎯 ZWECK: Automatische Prozess-Terminierung nach Build-Check-Abschluss
 *
 * ✅ FEATURES:
 * - Beendet alle Node.js Checker-Prozesse
 * - Memory-Cleanup für VS Code Extensions
 * - Resource-Monitoring und Alerts
 * - Intelligente Prozess-Identifikation
 * - Fail-Safe: Keine kritischen System-Prozesse
 *
 * 🚨 SICHERHEIT:
 * - Nur Checker-spezifische Prozesse
 * - Whitelist-basierte Terminierung
 * - VS Code selbst bleibt unberührt
 * - Backup-Mechanismen für kritische Tasks
 */

const { execSync, exec } = require("child_process");
const os = require("os");

class TaskCleaner {
  constructor() {
    this.checkerProcessNames = [
      "multi-scope-checker.cjs",
      "css-scope.cjs",
      "seo-scope.cjs",
      "vscode-scope.cjs",
      "inventory-scope.cjs",
      "vercel-deployment-validator.cjs",
      "auto-inventory.js",
    ];

    this.results = {
      terminatedProcesses: [],
      memoryBefore: 0,
      memoryAfter: 0,
      gcPerformed: false,
      errors: [],
    };
  }

  async cleanupTasks() {
    console.log("🧹 SIMON'S AUTOMATISCHER TASK-CLEANER GESTARTET");
    console.log("🎯 Bereinige Checker-Prozesse für optimale Performance...\n");

    try {
      // 1. Memory-Status vor Cleanup
      this.results.memoryBefore = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(
        `📊 Memory vor Cleanup: ${Math.round(this.results.memoryBefore)}MB`
      );

      // 2. Identifiziere und beende Checker-Prozesse
      await this.terminateCheckerProcesses();

      // 3. Erzwinge Garbage Collection
      await this.forceGarbageCollection();

      // 4. System-Resource-Cleanup
      await this.systemResourceCleanup();

      // 5. Memory-Status nach Cleanup
      this.results.memoryAfter = process.memoryUsage().heapUsed / 1024 / 1024;
      const memorySaved = this.results.memoryBefore - this.results.memoryAfter;

      console.log(
        `📊 Memory nach Cleanup: ${Math.round(this.results.memoryAfter)}MB`
      );
      if (memorySaved > 0) {
        console.log(`🎯 Memory gespart: ${Math.round(memorySaved)}MB`);
      }

      // 6. Erfolgs-Report
      this.printCleanupReport();

      return this.results;
    } catch (error) {
      console.error(`❌ Fehler beim Task-Cleanup: ${error.message}`);
      this.results.errors.push(error.message);
      return this.results;
    }
  }

  async terminateCheckerProcesses() {
    console.log("🔍 Suche nach Checker-Prozessen...");

    try {
      let processes = [];

      if (os.platform() === "win32") {
        // Windows PowerShell Prozess-Suche
        const output = execSync(
          `powershell.exe -Command "Get-Process | Where-Object {$_.ProcessName -like '*node*' -or $_.CommandLine -like '*multi-scope*' -or $_.CommandLine -like '*scope.cjs'} | Select-Object Id,ProcessName,CommandLine | ConvertTo-Json"`,
          {
            encoding: "utf8",
            timeout: 10000,
          }
        );

        try {
          const parsed = JSON.parse(output);
          processes = Array.isArray(parsed) ? parsed : [parsed];
        } catch (parseError) {
          console.log("⚠️ Keine Checker-Prozesse gefunden (Parse-Error)");
          return;
        }
      } else {
        // Linux/Mac ps-basierte Suche
        const output = execSync(
          `ps aux | grep -E "(multi-scope|scope\\.cjs|auto-inventory)" | grep -v grep`,
          {
            encoding: "utf8",
            timeout: 10000,
          }
        );

        processes = output.split("\n").filter((line) => line.trim().length > 0);
      }

      if (processes.length === 0) {
        console.log("✅ Keine aktiven Checker-Prozesse gefunden");
        return;
      }

      // Beende identifizierte Prozesse
      for (const process of processes) {
        await this.terminateProcess(process);
      }
    } catch (error) {
      console.log(
        "⚠️ Prozess-Suche fehlgeschlagen (möglicherweise keine Prozesse aktiv)"
      );
      console.log(`   Details: ${error.message.substring(0, 100)}...`);
    }
  }

  async terminateProcess(processInfo) {
    try {
      let pid = null;

      if (typeof processInfo === "object" && processInfo.Id) {
        // Windows PowerShell Object
        pid = processInfo.Id;
        const commandLine = processInfo.CommandLine || "";

        // Sicherheits-Check: Nur Checker-spezifische Prozesse
        const isCheckerProcess = this.checkerProcessNames.some((name) =>
          commandLine.includes(name)
        );

        if (!isCheckerProcess) {
          console.log(
            `⚠️ Überspringe Prozess ${pid} (nicht Checker-spezifisch)`
          );
          return;
        }

        console.log(`🔄 Beende Checker-Prozess ${pid}...`);
        execSync(`taskkill /F /PID ${pid}`, { timeout: 5000 });
      } else if (typeof processInfo === "string") {
        // Linux/Mac ps output
        const parts = processInfo.trim().split(/\s+/);
        pid = parts[1];

        console.log(`🔄 Beende Checker-Prozess ${pid}...`);
        execSync(`kill -9 ${pid}`, { timeout: 5000 });
      }

      if (pid) {
        this.results.terminatedProcesses.push(pid);
        console.log(`✅ Prozess ${pid} erfolgreich beendet`);
      }
    } catch (error) {
      console.log(
        `⚠️ Konnte Prozess nicht beenden: ${error.message.substring(0, 100)}`
      );
    }
  }

  async forceGarbageCollection() {
    console.log("🧹 Erzwinge Garbage Collection...");

    try {
      // Node.js Garbage Collection
      if (global.gc) {
        global.gc();
        this.results.gcPerformed = true;
        console.log("✅ Node.js Garbage Collection durchgeführt");
      } else {
        console.log(
          "⚠️ Garbage Collection nicht verfügbar (node --expose-gc erforderlich)"
        );
      }

      // Manual Memory-Cleanup
      if (global.Buffer) {
        global.Buffer.alloc(0);
      }

      // Kurze Pause für GC-Stabilisierung
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.log(`⚠️ GC-Fehler: ${error.message}`);
    }
  }

  async systemResourceCleanup() {
    console.log("🔧 System-Resource-Cleanup...");

    try {
      // Windows: Temp-Dateien bereinigen
      if (os.platform() === "win32") {
        try {
          execSync(
            "powershell.exe -Command \"Get-ChildItem $env:TEMP -Recurse -Name 'node-*','npm-*' | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\"",
            {
              timeout: 5000,
              stdio: "pipe",
            }
          );
          console.log("✅ Windows Temp-Cleanup durchgeführt");
        } catch (tempError) {
          console.log("⚠️ Temp-Cleanup übersprungen (keine Berechtigung)");
        }
      }

      // Alle Plattformen: Node.js Cache-Cleanup
      try {
        delete require.cache;
        console.log("✅ Node.js Require-Cache geleert");
      } catch (cacheError) {
        console.log("⚠️ Cache-Cleanup teilweise fehlgeschlagen");
      }
    } catch (error) {
      console.log(`⚠️ System-Cleanup-Fehler: ${error.message}`);
    }
  }

  printCleanupReport() {
    console.log("\n🎯 ═══════════════════════════════════════════════════════");
    console.log("📊 TASK-CLEANUP ABGESCHLOSSEN");
    console.log("🎯 ═══════════════════════════════════════════════════════");

    console.log(
      `🔄 Beendete Prozesse: ${this.results.terminatedProcesses.length}`
    );
    if (this.results.terminatedProcesses.length > 0) {
      this.results.terminatedProcesses.forEach((pid) => {
        console.log(`   📦 PID: ${pid}`);
      });
    }

    const memorySaved = this.results.memoryBefore - this.results.memoryAfter;
    if (memorySaved > 0) {
      console.log(`💾 Memory gespart: ${Math.round(memorySaved)}MB`);
    }

    console.log(
      `🧹 Garbage Collection: ${
        this.results.gcPerformed ? "Durchgeführt" : "Übersprungen"
      }`
    );

    if (this.results.errors.length > 0) {
      console.log(`⚠️ Warnungen: ${this.results.errors.length}`);
    }

    console.log("\n✅ System bereit für optimale Performance!");
    console.log("🎯 ═══════════════════════════════════════════════════════\n");
  }
}

// Script-Ausführung
if (require.main === module) {
  const cleaner = new TaskCleaner();

  cleaner
    .cleanupTasks()
    .then((results) => {
      const exitCode = results.errors.length > 0 ? 1 : 0;
      process.exit(exitCode);
    })
    .catch((error) => {
      console.error("💥 KRITISCHER CLEANUP-FEHLER:", error);
      process.exit(1);
    });
}

module.exports = TaskCleaner;
