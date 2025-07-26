# 🔒 SIMON'S VALIDIERUNGS-ZWANG (INTERNALISIERT)

**ABSOLUTE REGELN - NICHT VERHANDELBAR**

---

## 🚨 **ZWINGENDER 4-STUFEN-VALIDIERUNG:**

### **STUFE 1: PRE-VALIDATION (VOR JEDER AKTION)**

```
✅ Target existiert?
✅ Permissions vorhanden?
✅ Dependencies erfüllt?
✅ Backup erstellt (wenn kritisch)?
✅ Token-Limit geprüft (<1200 Zeilen)?
✅ Operation erlaubt (kein bulk_replace)?
```

### **STUFE 2: EXECUTION-MONITORING (WÄHREND AKTION)**

```
✅ Operation geloggt?
✅ Progress überwacht?
✅ Error-Patterns erkannt?
✅ Timeout-Schutz aktiv?
```

### **STUFE 3: POST-VALIDATION (NACH AKTION)**

```
✅ Result-Integrität geprüft?
✅ Target noch valid?
✅ Keine unbeabsichtigten Änderungen?
✅ Business-Logic intakt?
```

### **STUFE 4: CONSISTENCY-CHECK (KONSISTENZ)**

```
✅ Cross-References funktionieren?
✅ Dependent-Files intakt?
✅ Projekt-Integrität gewährleistet?
✅ Build funktioniert noch?
```

---

## 🔍 **SEARCH-ERLAUBT / REPLACE-VERBOTEN**

### **✅ IMMER ERLAUBT:**

- `grep_search` - Textsuche in Dateien
- `semantic_search` - KI-basierte Suche
- `file_search` - Datei-Pattern-Matching
- `read_file` - Einzeldatei lesen
- `list_dir` - Verzeichnisse auflisten

### **❌ ABSOLUT VERBOTEN:**

- `bulk_replace` - 🚨 NIEMALS
- `search_and_replace` - 🚨 NIEMALS
- `mass_edit` - 🚨 NIEMALS
- `auto_refactor` - 🚨 NIEMALS
- `pattern_replace` - 🚨 NIEMALS

---

## 📐 **TOKEN-OPTIMIERTE ARBEITSWEISE:**

### **WORKFLOW-OPTIMIERUNG:**

1. **SEARCH FIRST:** Immer erst grep_search/semantic_search
2. **TARGETED READ:** Nur relevante Dateien lesen
3. **CHUNK PROCESSING:** Große Dateien in 500-800 Zeilen Chunks
4. **VALIDATE ALWAYS:** Jede Operation validieren

### **DATEIGROSSEN-LIMITS:**

- **OPTIMAL:** 0-800 Zeilen (perfekte KI-Verarbeitung)
- **WARNING:** 801-1200 Zeilen (vorsichtig arbeiten)
- **CRITICAL:** >1200 Zeilen (sofortige Modularisierung)

---

## 🎯 **SMART-REGELN (SELEKTIV)**

### **SMART ERFORDERLICH FÜR:**

- Website-Launch-Deadlines
- Content-Creation-Goals
- Technical-Debt-Reduction
- SEO-Performance-Targets

### **SMART NICHT ERFORDERLICH FÜR:**

- Kreative Content-Erstellung
- Design-Entscheidungen
- Brainstorming-Sessions
- Experimentelle Features

---

**🔒 DIESE REGELN SIND INTERNALISIERT UND NICHT VERHANDELBAR!**
