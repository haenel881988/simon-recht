# 🔧 PROJECT-MAINTENANCE

**Zweck:** Automatisierte Wartung und Qualitätssicherung des Projekts

## **📁 DATEIEN:**

### **🔍 DATEI-ANALYSE:**

- `check-empty-files.ps1` - Analysiert leere Dateien im Projekt
- `safe-check.ps1` - Sicherheits-Validierung vor Operationen

### **🧹 CLEANUP-TOOLS:**

- `cleanup-empty-files.ps1` - Entfernt leere/redundante Dateien
- `smart-commit.bat` - Intelligente Git-Commit-Automatisierung

## **🚀 USAGE:**

```powershell
# Datei-Analyse durchführen
.\check-empty-files.ps1

# Sicherheits-Check
.\safe-check.ps1

# Projekt aufräumen
.\cleanup-empty-files.ps1

# Smart Commit
.\smart-commit.bat
```

## **⚠️ SICHERHEIT:**

- **Backup zwingend** vor Cleanup-Operationen
- **safe-check.ps1** vor kritischen Änderungen ausführen
- **Git-Status prüfen** vor smart-commit

## **🔗 INTEGRATION:**

- Mit `tools/analyzer/` für Vollständige Projekt-Analyse
- Mit `tools/build_check/` für Quality-Gates
- Mit Git-Workflow für automatische Commits
