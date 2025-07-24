# 🔧 SYMLINK PERMISSION FIX STRATEGIEN

## 🎯 WINDOWS SYMLINK LÖSUNGSANSÄTZE

### **STRATEGIE 1: HARDLINK STATT SYMLINK (EMPFOHLEN)**

```javascript
// Robuster als Symlink - keine Admin-Rechte erforderlich
const createLogReference = async (targetPath, linkPath) => {
  try {
    // Hardlink erstellen (funktioniert ohne Admin)
    await fs.link(targetPath, linkPath);
    this.logInfo(`✅ Hardlink erstellt: ${linkPath} → ${targetPath}`);
  } catch (error) {
    // Fallback: Kopie erstellen
    await fs.copyFile(targetPath, linkPath);
    this.logInfo(`📄 Kopie erstellt: ${linkPath} ← ${targetPath}`);
  }
};
```

### **STRATEGIE 2: JUNCTION-LINK (WINDOWS-NATIV)**

```javascript
// Windows Junction Links - keine Admin-Rechte nötig
const { exec } = require("child_process");

const createJunctionLink = (targetPath, linkPath) => {
  return new Promise((resolve, reject) => {
    exec(`mklink /J "${linkPath}" "${targetPath}"`, (error, stdout) => {
      if (error) {
        // Fallback zu Kopie
        fs.copyFile(targetPath, linkPath).then(resolve).catch(reject);
      } else {
        resolve(stdout);
      }
    });
  });
};
```

### **STRATEGIE 3: REGISTRY-BASIERTE LÖSUNG**

```javascript
// Current-Log-Path in Registry speichern
const Registry = require("winreg");

const setCurrentLogPath = async (logPath) => {
  const regKey = new Registry({
    hive: Registry.HKCU,
    key: "\\Software\\SimonRecht\\BuildChecker",
  });

  return new Promise((resolve) => {
    regKey.set("CurrentLogFile", Registry.REG_SZ, logPath, () => {
      resolve();
    });
  });
};
```

### **STRATEGIE 4: JSON-POINTER-SYSTEM (EINFACHSTE)**

```javascript
// current-build-log.json mit Pfad-Referenz
const updateCurrentLogPointer = async (latestLogPath) => {
  const pointerFile = path.join(this.logDir, "current-build-log.json");
  const pointerData = {
    currentLog: latestLogPath,
    timestamp: new Date().toISOString(),
    version: "v5.0",
  };

  await fs.writeFile(pointerFile, JSON.stringify(pointerData, null, 2));
  this.logInfo(`✅ Log-Pointer aktualisiert: ${pointerData.currentLog}`);
};
```

## 🚀 IMPLEMENTIERUNG IN CHECKER

### **Robuste updateSymlink() Methode:**

```javascript
async updateSymlink(latestLogPath) {
  const symlinkPath = path.join(this.logDir, 'current-build-log.md');
  const pointerPath = path.join(this.logDir, 'current-build-log.json');

  try {
    // STRATEGIE 1: Hardlink versuchen
    if (fs.existsSync(symlinkPath)) await fs.unlink(symlinkPath);
    await fs.link(latestLogPath, symlinkPath);
    this.logInfo(`✅ Hardlink erstellt: current-build-log.md`);

  } catch (hardlinkError) {
    try {
      // STRATEGIE 2: Junction Link versuchen
      await this.createJunctionLink(latestLogPath, symlinkPath);
      this.logInfo(`✅ Junction Link erstellt: current-build-log.md`);

    } catch (junctionError) {
      // STRATEGIE 3: JSON-Pointer (Fallback)
      await this.updateCurrentLogPointer(latestLogPath);

      // STRATEGIE 4: Kopie als letzter Ausweg
      await fs.copyFile(latestLogPath, symlinkPath);
      this.logInfo(`📄 Kopie erstellt: current-build-log.md`);
    }
  }
}
```

### **KI-INTEGRATION FÜR LOG-ZUGRIFF:**

```javascript
// KI kann current-build-log.json lesen für echten aktuellen Pfad
const getCurrentLogPath = async () => {
  const pointerFile = path.join(logDir, "current-build-log.json");

  if (fs.existsSync(pointerFile)) {
    const pointer = JSON.parse(await fs.readFile(pointerFile, "utf8"));
    return pointer.currentLog;
  }

  // Fallback zu current-build-log.md
  return path.join(logDir, "current-build-log.md");
};
```

## 🎯 SOFORT-IMPLEMENTIERUNG

Diese Lösung ist bulletproof und funktioniert auf allen Windows-Systemen ohne Admin-Rechte!
