# 🚀 Einfache Anleitung: KI optimal für Ihr Projekt konfigurieren

## 📚 **Schritt 1: Verstehen Sie Ihr Setup**

### Was Sie bereits haben (SUPER! 👏):
- ✅ Organisierte Projektstruktur
- ✅ `.github/instructions/` Ordner 
- ✅ Dokumentation in `docs/`
- ✅ Clevere Settings-Verwaltung

### Was passiert automatisch:
- 🤖 KI liest ALLE Dateien in `.github/instructions/`
- 🤖 KI versteht Ihr Projekt durch diese Dateien
- 🤖 KI gibt bessere, projektspezifische Antworten

---

## ⚙️ **Schritt 2: Settings.json richtig anpassen**

### **So öffnen Sie Ihre Settings:**
1. **VS Code öffnen**
2. **Tastenkombination:** `Ctrl + Shift + P`
3. **Tippen:** "settings json"
4. **Auswählen:** "Preferences: Open User Settings (JSON)"

### **Wichtige Einstellungen für Ihr Projekt:**

```json
{
    // 🎯 INSTRUCTION-DATEIEN AKTIVIEREN
    "github.copilot.chat.useInstructionFiles": true,
    "github.copilot.chat.alwaysLoadInstructions": true,
    "chat.promptFiles": true,
    
    // 📂 IHR PROJEKT-PFAD
    "chat.instructionsFilesLocations": {
        ".github/instructions": true,
        "C:\\apps\\website\\simon-recht\\.github": true
    },
    
    // 🇩🇪 DEUTSCH ALS STANDARD
    "github.copilot.chat.localeOverride": "de",
    
    // 🔍 BESSERE SUCHE & CONTEXT
    "github.copilot.chat.search.keywordSuggestions": true,
    "github.copilot.chat.scopeSelection": true,
    "github.copilot.chat.codesearch.enabled": true
}
```

---

## 📝 **Schritt 3: Instruction-Dateien richtig nutzen**

### **Ihre wichtigsten Dateien:**

1. **`index.md`** → Überblick über Ihr Projekt
2. **`settings.md`** → Backup Ihrer VS Code Einstellungen  
3. **Diese Datei** → Anleitung für Sie

### **So erstellen Sie neue Instructions:**

#### **Template für neue Instruction-Datei:**
```markdown
# [DATEINAME]: [ZWECK]

## 🎯 Was die KI wissen soll:
- [Wichtige Info 1]
- [Wichtige Info 2]

## 🚫 Was die KI NICHT tun soll:
- [Verbot 1]
- [Verbot 2]

## 📋 Beispiele:
- [Beispiel 1]
- [Beispiel 2]
```

---

## 🔄 **Schritt 4: Workflow ohne Chaos**

### **Ihr täglicher Workflow:**

1. **Vor großen Änderungen:**
   - Beschreiben Sie Ihr Ziel in einer Chat-Nachricht
   - Fragen Sie: "Welche Dateien muss ich bearbeiten?"

2. **Bei Settings-Änderungen:**
   - Aktualisieren Sie `settings.md` 
   - Kopieren Sie neuen Inhalt aus Ihrer echten settings.json

3. **Bei neuen Features:**
   - Dokumentieren Sie in `docs/`
   - Erstellen Sie Instructions falls nötig

4. **Regelmäßig:**
   - Prüfen Sie `index.md` auf Aktualität
   - Git Commits mit klaren Nachrichten

---

## 🆘 **Schritt 5: Wenn etwas schief geht**

### **Häufige Probleme & Lösungen:**

| Problem | Lösung |
|---------|---------|
| KI versteht Projekt nicht | Instructions-Dateien aktualisieren |
| Settings werden ignoriert | Pfad in `instructionsFilesLocations` prüfen |
| Zu viele Änderungen auf einmal | Kleine Schritte, eine Datei nach der anderen |
| Verwirrung bei Ordnerstruktur | `index.md` mit aktueller Struktur füttern |

### **Notfall-Reset:**
```json
// Minimale funktionierende Settings:
{
    "github.copilot.chat.useInstructionFiles": true,
    "chat.instructionsFilesLocations": {
        ".github/instructions": true
    }
}
```

---

## 🎯 **Ihre nächsten Schritte:**

### **Sofort erledigen:**
- [ ] Settings.json mit obigen Einstellungen ergänzen
- [ ] `settings.md` nach Änderungen aktualisieren  
- [ ] Diese Anleitung als Bookmark speichern

### **Diese Woche:**
- [ ] `index.md` mit aktueller Projektstruktur füllen
- [ ] Eine Test-Instruction für Ihr Hauptfeature erstellen
- [ ] Git-Workflow etablieren (kleine, häufige Commits)

### **Langfristig:**
- [ ] Instructions für jedes große Feature
- [ ] Regelmäßige Dokumentation-Updates
- [ ] Backup-Strategie für Settings

---

## 💡 **Pro-Tipps:**

1. **Klein anfangen:** Eine Instruction nach der anderen
2. **Konkret werden:** "Mache X" statt "Verbessere Y"  
3. **Testen:** Neue Instructions sofort mit KI ausprobieren
4. **Dokumentieren:** Änderungen immer in Git committen
5. **Backup:** Settings regelmäßig in `settings.md` sichern

---

**🎉 Glückwunsch! Sie haben jetzt alles, um professionell mit KI zu arbeiten.**

> **Merksatz:** Instruction-Dateien = Gehirn der KI für Ihr Projekt ✨
