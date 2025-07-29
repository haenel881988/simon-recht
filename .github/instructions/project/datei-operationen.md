# 📁 DATEI-OPERATIONEN

## **BACKUP-STRATEGIEN:**

### **🛡️ AUTOMATISCHES BACKUP:**
```bash
# Vor kritischen Operationen
cp -r .github/instructions .github/instructions.backup.$(date +%Y%m%d_%H%M%S)

# Original-Content Archivierung
docs/projekt/00_origin/{content-name}_original_{YYYY-MM-DD}.md
```

### **🔄 ROLLBACK-PROTOKOLL:**
```bash
# Bei Fehlern sofortiger Rollback
git checkout HEAD~1 -- .github/instructions/
git add . && git commit -m "🔄 Rollback: Instructions restored"
```

## **🔍 SEARCH-REGELN:**

### **✅ ERLAUBTE OPERATIONEN:**
- ✅ Manual file analysis mit strukturiertem Output
- ✅ Einzeldatei-Operationen mit Validation
- ✅ Scope-fokussierte Analysen
- ✅ Cross-Reference Updates (manuell validiert)

### **❌ VERBOTENE OPERATIONEN:**
- ❌ Bulk-Replace ohne Validation
- ❌ Search-and-Replace über multiple Dateien
- ❌ Mass-Edit Operationen
- ❌ Automated Content-Modification

## **🔒 INTEGRITÄTS-CHECKS:**

### **📊 PRE-OPERATION VALIDATION:**
```bash
# Datei-Existenz prüfen
[ -f "target/file.md" ] || echo "❌ File not found"

# Backup erstellen
cp "target/file.md" "target/file.md.backup"

# Permission-Check
[ -w "target/file.md" ] || echo "❌ No write permission"
```

### **📊 POST-OPERATION VALIDATION:**
```bash
# Integrität prüfen  
diff -q "target/file.md" "target/file.md.backup" && echo "✅ File modified"

# Build-Test
npm run build || echo "❌ Build broken - Rollback required"

# Link-Validation
node tools/analyzer/contradiction-scanner.cjs
```

## **🎯 WORKFLOW-INTEGRATION:**

### **🔄 STANDARDPROZESS:**
1. **PRE-CHECK:** Backup + Validation
2. **OPERATION:** Kleine, validierte Änderungen
3. **POST-CHECK:** Build + Link-Test
4. **DOCUMENTATION:** Change-Log Update
5. **COMMIT:** Atomic commits mit klaren Messages
