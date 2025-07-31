# 📁 DATEI-OPERATIONEN

## **BACKUP-ZWANG:**

### **🔐 VOR JEDER ÄNDERUNG ZWINGEND:**

```powershell
git add .
git commit -m "Backup vor [Operation-Beschreibung]"
git push
```

### **🎯 BACKUP-TRIGGER:**

- Strukturelle Änderungen an Dateien/Verzeichnissen
- CSS-Modifikationen mit Layout-Impact
- Instructions-Updates mit Rule-Changes
- Analyzer-Code-Modifications
- Content-Migrations zwischen Scopes
- **TOKEN-OVERFLOW-MODULARISIERUNG (CONTENT-PRESERVATION-ZWANG)**

## **🛡️ CONTENT-PRESERVATION-PROTOKOLL:**

### **🚨 BEI TOKEN-OVERFLOW ZWINGEND:**

1. **NIEMALS INHALTE LÖSCHEN** um Token-Limits zu erreichen
2. **BACKUP ERSTELLEN:** Original-Datei sichern
3. **STATUS VALIDIEREN:** Welche Items sind tatsächlich erledigt?
4. **KATEGORISIEREN:** Nach Priorität/Status/Thema sortieren
5. **MIGRIEREN:** Items in Verzeichnisse VERSCHIEBEN (nicht löschen)
6. **VERLINKEN:** Master-Liste als Navigation zu Detail-Listen
7. **VALIDIEREN:** Kein Content-Verlust, nur bessere Struktur

### **❌ TOKEN-PANIK-VERHALTEN (VERBOTEN):**

- Hektische Kürzungen ohne Validation
- "Modularisierung" durch Content-Destruction
- Behaupten "modularisiert" wenn nur "gelöscht"
- Token-Druck als Rechtfertigung für Datenverlust

## **SEARCH-REGELN:**

### **🔍 TOOL-HIERARCHY (ZWINGEND):**

#### **1. SEMANTIC_SEARCH für unbekannte Patterns:**

```
✅ WANN: "Wo finde ich CSS-Klassen?"
✅ ZWECK: Unklare Suchbegriffe, breite Exploration
❌ NICHT: Exakte Strings, bekannte Dateinamen
```

#### **2. GREP_SEARCH für exakte Matches:**

```
✅ WANN: "Finde alle 'Priorität: Hoch'"
✅ ZWECK: Exakte Strings, Zahlen zählen, Pattern
❌ NICHT: Semantische Suche, Konzept-Finding
```

#### **3. FILE_SEARCH für Dateinamen:**

```
✅ WANN: "Alle .astro Dateien finden"
✅ ZWECK: Glob-Pattern, Datei-Extensions
❌ NICHT: Content-Suche in Dateien
```

### **🚫 VERBOTENE BULK-OPERATIONS:**

- Keine Search-Tools für Mass-Replace
- Keine automated Bulk-Edits ohne Validation
- Manual Analysis über Search-Replace-All
- Single-File-Focus statt Mass-Operations

## **INTEGRITÄT-CHECKS:**

### **📊 NACH JEDER DATEI-OPERATION:**

#### **🔗 LINK-VALIDATION:**

```powershell
# Broken Links checken
node tools/analyzer/universal-project-analyzer.cjs
# Widerspruchs-Report prüfen (aktuellsten Report verwenden)
Get-ChildItem tools/analyzer/widerspruchs-report-*.md | Sort-Object LastWriteTime -Descending | Select-Object -First 1
```

#### **🏗️ BUILD-VALIDATION:**

```powershell
# Astro Build testen
npm run build
# Build-Checker ausführen
node tools/build_check/multi-scope-checker.cjs
```

#### **📏 SYNTAX-VALIDATION:**

```powershell
# PowerShell Syntax bei .ps1
Get-Command -Syntax script.ps1
# Node.js Syntax bei .cjs/.js
node -c script.cjs
```

## **GIT-WORKFLOW:**

### **📝 COMMIT-STANDARDS:**

#### **🎯 COMMIT-MESSAGE-FORMAT:**

```
[SCOPE] Kurze Beschreibung

- Detail 1: Was geändert
- Detail 2: Warum geändert
- Detail 3: Impact/Consequence

Refs: #issue-number
```

#### **📋 SCOPE-PREFIXES:**

```
[CSS] - Styling-Änderungen
[CONTENT] - Blog/Text-Updates
[BUILD] - Build-System-Changes
[DOCS] - Documentation-Updates
[FIX] - Bugfixes/Corrections
[ANALYZER] - Tool-Improvements
[STRUCTURE] - Directory/File-Organization
```

### **🔄 PUSH-FREQUENCY:**

- Nach jeder stabilen Iteration
- Vor größeren Structural-Changes
- Nach Tool-Modifications
- Bei Context-Switch zwischen Scopes

## **DEPENDENCY-MANAGEMENT:**

### **🔗 DEPENDENCY-TRACKING:**

#### **📁 VOR DATEI-ERSTELLUNG:**

1. **Target-Directory exists?** `Test-Path $targetDir`
2. **Dependencies resolved?** Alle referenced Files existieren
3. **Import-Paths valid?** Relative Pfade stimmen
4. **Cross-References mapped?** Wer linkt zu dieser Datei?

#### **🗂️ VOR DATEI-VERSCHIEBUNG:**

1. **Incoming-Links identifizieren:** `grep -r "old-filename"`
2. **Outgoing-Links validieren:** Links in Datei selbst prüfen
3. **Update-Impact schätzen:** Wie viele Dateien betroffen?
4. **Rollback-Plan:** Wie rückgängig machen?

#### **🗑️ VOR DATEI-LÖSCHUNG:**

1. **Reference-Scan:** `grep -r "filename" .`
2. **Orphan-Check:** Würden andere Dateien broken?
3. **Archive-Option:** Verschieben statt löschen?
4. **Cleanup-Cascade:** Abhängige Dateien auch entfernen?

## **QUALITY-GATES:**

### **✅ PASS-CRITERIA:**

- Build-System funktioniert ohne Errors
- Keine broken Links in critical Files
- Syntax-Validation erfolgreich
- Git-History nachvollziehbar

### **❌ FAIL-CRITERIA:**

- Build-Failure nach Changes
- Critical Instructions inconsistent
- Massive Token-Increase ohne Benefit
- Data-Loss-Risk detected

### **🔄 ROLLBACK-TRIGGERS:**

- Failed Quality-Gate nach 2 Retry-Attempts
- Simon's explicit Rollback-Request
- Critical System-Functionality broken
- Unrecoverable State reached

## **AUTOMATION-RULES:**

### **🤖 AUTO-CLEANUP:**

- Log-Files: Keep last 8, delete older
- Backup-Files (.bak): Clean weekly
- Temporary-Files (.tmp): Clean daily
- Cache-Directories: Clean after major changes

### **🔍 AUTO-VALIDATION:**

- Syntax-Check nach Code-Changes
- Link-Check nach Structural-Changes
- Build-Test vor Git-Push (wenn möglich)
- Token-Count nach Major-Additions
