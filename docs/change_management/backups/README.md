# 🔐 BACKUP-VERZEICHNIS MANAGEMENT

## 📁 **BACKUP-STRUKTUR:**

```
docs/change_management/backups/
├── YYYY-MM-DD_HH-MM-SS_[DATEINAME]_backup.md
├── YYYY-MM-DD_HH-MM-SS_[DATEINAME]_backup.md
└── README.md (diese Datei)
```

## 🔄 **BACKUP-WORKFLOW:**

### **AUTOMATISCHE BACKUP-ERSTELLUNG:**

1. **VOR JEDER ÄNDERUNG:** Automatische Sicherung erstellen
2. **ZEITSTEMPEL:** `YYYY-MM-DD_HH-MM-SS` Format
3. **DATEINAME:** Original-Dateiname + `_backup.md`
4. **EIGENSTÄNDIGE VERWALTUNG:** KI verwaltet Verzeichnis selbst

### **BACKUP-NAMENSKONVENTION:**

```
2025-07-18_14-30-15_copilot-instructions_backup.md
2025-07-18_14-35-22_projekt_inventar_backup.md
2025-07-18_14-40-18_README_backup.md
```

## 📋 **BACKUP-REGELN:**

### **WANN BACKUP ERSTELLEN:**

- ✅ **VOR JEDER DATEI-ÄNDERUNG:** Automatische Sicherung
- ✅ **VOR INSTRUCTIONS-UPDATES:** Zwingend erforderlich
- ✅ **VOR WORKFLOW-ÄNDERUNGEN:** Sicherheitskopie anlegen
- ✅ **VOR STRUKTUR-ÄNDERUNGEN:** Backup erstellen

### **BACKUP-INHALT:**

- ✅ **VOLLSTÄNDIGE DATEI:** Kompletter Originalinhalt
- ✅ **ZEITSTEMPEL:** Wann wurde Backup erstellt
- ✅ **GRUND:** Warum wurde Backup erstellt
- ✅ **ÄNDERUNGS-REFERENZ:** Was wird geändert

## 🗂️ **BACKUP-VERWALTUNG:**

### **AUTOMATISCHE BEREINIGUNG:**

- **BEHALTE:** Letzte 10 Backups pro Datei
- **ARCHIVIERE:** Ältere Backups nach 30 Tagen
- **LÖSCHE:** Backups älter als 90 Tage

### **BACKUP-KATEGORIEN:**

```
├── instructions/     # copilot-instructions.md Backups
├── workflows/       # Workflow-Datei Backups
├── documentation/   # Dokumentations-Backups
└── struktur/        # Struktur-Änderungs-Backups
```

## 🚨 **BACKUP-PFLICHT:**

**ABSOLUTE REGEL:** Keine Änderung ohne Backup!

### **BACKUP-WORKFLOW-ABLAUF:**

1. **ANALYSIERE:** Welche Datei wird geändert
2. **BACKUP:** Erstelle Sicherungskopie
3. **DOKUMENTIERE:** Änderungsgrund dokumentieren
4. **ÄNDERE:** Erst nach Backup ändern
5. **COMMIT:** Git-Commit als zusätzliche Sicherung

---

**DIESES VERZEICHNIS WIRD EIGENSTÄNDIG VON DER KI VERWALTET**
