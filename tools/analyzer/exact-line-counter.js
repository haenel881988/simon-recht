#!/usr/bin/env node

/**
 * SIMON'S EXAKTE ZEILEN-ZÄHLER
 * Löst PowerShell Measure-Object Diskrepanz-Problem dauerhaft
 *
 * Problem: PowerShell zeigt 858 Zeilen, manuell sind es 1020+
 * Lösung: Node.js basierte exakte Zeilenzählung mit Validation
 */

const fs = require("fs");
const path = require("path");

class ExactLineCounter {
  constructor() {
    this.results = {};
  }

  /**
   * Zählt Zeilen mit mehreren Methoden für Validation
   */
  countLinesMultiMethod(filePath) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Datei nicht gefunden: ${filePath}`);
    }

    const content = fs.readFileSync(filePath, "utf8");

    // Methode 1: Split by \n
    const splitLines = content.split("\n").length;

    // Methode 2: Regex count
    const regexLines = (content.match(/\n/g) || []).length + 1;

    // Methode 3: Manual iteration
    let manualLines = 1; // Start with 1 for first line
    for (let i = 0; i < content.length; i++) {
      if (content[i] === "\n") {
        manualLines++;
      }
    }

    // Methode 4: Buffer-based counting
    const buffer = fs.readFileSync(filePath);
    let bufferLines = 1;
    for (let i = 0; i < buffer.length; i++) {
      if (buffer[i] === 0x0a) {
        // \n in ASCII
        bufferLines++;
      }
    }

    // File stats
    const stats = fs.statSync(filePath);

    return {
      filePath,
      methods: {
        splitLines,
        regexLines,
        manualLines,
        bufferLines,
      },
      fileSize: stats.size,
      lastModified: stats.mtime,
      // Consistency check
      consistent:
        splitLines === regexLines &&
        regexLines === manualLines &&
        manualLines === bufferLines,
      // Use most reliable method
      finalCount: manualLines,
    };
  }

  /**
   * Analysiert Diskrepanz-Ursachen
   */
  analyzeDiscrepancy(filePath) {
    const result = this.countLinesMultiMethod(filePath);

    console.log("🔍 EXAKTE ZEILEN-ANALYSE:");
    console.log("================================");
    console.log(`📁 Datei: ${result.filePath}`);
    console.log(`📊 Dateigröße: ${result.fileSize} Bytes`);
    console.log(`📅 Letzte Änderung: ${result.lastModified}`);
    console.log("");
    console.log("📊 ZEILEN-ZÄHLUNG (MULTI-METHOD):");
    console.log(`   Split-Method:  ${result.methods.splitLines}`);
    console.log(`   Regex-Method:  ${result.methods.regexLines}`);
    console.log(`   Manual-Method: ${result.methods.manualLines}`);
    console.log(`   Buffer-Method: ${result.methods.bufferLines}`);
    console.log("");
    console.log(`✅ Konsistent: ${result.consistent ? "JA" : "NEIN"}`);
    console.log(`🎯 FINALE ZEILENZAHL: ${result.finalCount}`);

    if (!result.consistent) {
      console.log("");
      console.log("⚠️ DISKREPANZ GEFUNDEN!");
      console.log("🔧 MÖGLICHE URSACHEN:");
      console.log("   - Unterschiedliche Zeilenendings (CRLF vs LF)");
      console.log("   - Unsichtbare Zeichen (BOM, etc.)");
      console.log("   - Encoding-Probleme");
      console.log("   - Datei-Locks oder Cache-Issues");
    }

    return result;
  }

  /**
   * Vergleicht mit PowerShell Measure-Object
   */
  async comparePowerShell(filePath) {
    const { spawn } = require("child_process");

    return new Promise((resolve, reject) => {
      const ps = spawn("powershell", [
        "-Command",
        `Get-Content "${filePath}" | Measure-Object -Line | Select-Object -ExpandProperty Lines`,
      ]);

      let output = "";
      ps.stdout.on("data", (data) => {
        output += data.toString();
      });

      ps.on("close", (code) => {
        if (code === 0) {
          const psLines = parseInt(output.trim());
          const nodeResult = this.countLinesMultiMethod(filePath);

          console.log("");
          console.log("🔄 POWERSHELL VS NODE.JS VERGLEICH:");
          console.log("=====================================");
          console.log(`PowerShell Measure-Object: ${psLines}`);
          console.log(`Node.js Multi-Method:      ${nodeResult.finalCount}`);
          console.log(
            `Diskrepanz:                ${Math.abs(
              psLines - nodeResult.finalCount
            )} Zeilen`
          );

          if (psLines !== nodeResult.finalCount) {
            console.log("");
            console.log("🚨 DISKREPANZ BESTÄTIGT!");
            console.log(
              "💡 LÖSUNG: Node.js Method verwenden für exakte Zählung"
            );
          }

          resolve({
            powerShell: psLines,
            nodeJs: nodeResult.finalCount,
            discrepancy: Math.abs(psLines - nodeResult.finalCount),
          });
        } else {
          reject(new Error("PowerShell command failed"));
        }
      });
    });
  }
}

// CLI Interface
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("📋 USAGE: node exact-line-counter.js <file-path>");
    console.log("📋 EXAMPLE: node exact-line-counter.js src/styles/global.css");
    process.exit(1);
  }

  const filePath = path.resolve(args[0]);
  const counter = new ExactLineCounter();

  try {
    console.log("🚀 SIMON'S EXAKTER ZEILEN-ZÄHLER gestartet...");
    console.log("");

    const result = counter.analyzeDiscrepancy(filePath);

    // PowerShell Vergleich (async)
    counter
      .comparePowerShell(filePath)
      .then((comparison) => {
        console.log("");
        console.log("✅ ANALYSE ABGESCHLOSSEN");
        console.log(
          `🎯 EMPFEHLUNG: Verwende ${result.finalCount} Zeilen (Node.js Multi-Method)`
        );

        // Schreibe Ergebnis in TODO-Liste wenn Diskrepanz
        if (comparison.discrepancy > 0) {
          console.log("");
          console.log(
            "📝 LESSON LEARNED: PowerShell Measure-Object unzuverlässig"
          );
          console.log("🔧 PRÄVENTION: Nur noch Node.js Line-Counter verwenden");
        }
      })
      .catch((err) => {
        console.log("⚠️ PowerShell Vergleich fehlgeschlagen:", err.message);
        console.log(`🎯 ERGEBNIS: ${result.finalCount} Zeilen (Node.js)`);
      });
  } catch (error) {
    console.error("❌ FEHLER:", error.message);
    process.exit(1);
  }
}

module.exports = ExactLineCounter;
