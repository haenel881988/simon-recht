# 🚨 EXCEPTION-SYSTEM

## **WIDERSPRUCHS-ERKENNUNG:**

### **🔍 SCANNER-TRIGGER:**

- **Unterschiedliche Token-Limits** in verschiedenen Dateien
- **Multiple oberste Prioritäten** ohne Hierarchie
- **Broken Links** zu nicht existierenden Dateien
- **Leere/redundante Dateien** ohne Zweck

### **⚠️ EXCEPTION-STUFEN:**

#### **🚨 LEVEL 1 - CRITICAL (SOFORT STOPPEN):**

- Instructions-Widersprüche erkannt
- Token-Limit-Überschreitung droht
- Datenverlust-Risiko bei Operation
- Build-Failure nach Änderung

#### **⚠️ LEVEL 2 - HIGH (RÜCKFRAGE REQUIRED):**

- Scope-Overflow (>3 Scopes)
- Priority-Inflation (>3 "Hoch")
- Dependency-Chain unvollständig
- Validation-Bypass erkannt

#### **💡 LEVEL 3 - MEDIUM (WARNING + PROCEED):**

- Performance-Impact möglich
- Documentation veraltet
- Non-critical broken links
- Minor inconsistencies

## **FEHLERBEHANDLUNG:**

### **🔧 AUTOMATIC FIXES:**

```
✅ Log-Cleanup bei Analyzer-Tools
✅ Syntax-Error-Correction nach Code-Änderung
✅ Priority-Rebalancing bei Inflation
✅ Dependency-Resolution bei Creation
```

### **🤔 MANUAL FIXES (SIMON-DECISION):**

```
❓ Token-Limit-Conflicts zwischen Dateien
❓ Scope-Definition-Overlaps
❓ Content-Authenticity-Questions
❓ Architecture-Decision-Impacts
```

## **PREVENTION-PROTOKOLL:**

### **🛡️ BEFORE-ACTION-CHECKS:**

1. **Validation-First:** Tool-based fact-checking zwingend
2. **Scope-Declaration:** Explicit scope limits vor Arbeit
3. **Dependency-Mapping:** Link-Chains validieren
4. **Token-Budget:** Estimation vor Multi-Scope-Work

### **🔍 AFTER-ACTION-VERIFICATION:**

1. **Build-Test:** Nach jeder strukturellen Änderung
2. **Link-Check:** Nach Datei-Operations
3. **Syntax-Validation:** Nach Code-Modifications
4. **Priority-Audit:** Nach TODO-Updates

## **WIDERSPRUCHS-RESOLUTION:**

### **📋 CONFLICT-HIERARCHY:**

1. **.github/copilot-instructions.md** = MASTER TRUTH
2. **Core-Instructions** = HIGH AUTHORITY
3. **Scope-Instructions** = MEDIUM AUTHORITY
4. **Legacy-Files** = LOW AUTHORITY (eliminate)

### **🔄 RESOLUTION-WORKFLOW:**

1. **Identify:** Exact conflict location & nature
2. **Prioritize:** Which rule takes precedence?
3. **Document:** Why this resolution chosen?
4. **Implement:** Systematic correction across files
5. **Verify:** No new conflicts introduced

## **EMERGENCY-PROTOCOLS:**

### **🚨 IMMEDIATE-STOP-CONDITIONS:**

- Token-Context exploding (>80% GitHub Copilot limit)
- Critical Instructions contradicting each other
- Build completely failing after changes
- Data-Loss-Risk operations detected

### **🔄 ROLLBACK-PROCEDURES:**

- Git revert to last known good state
- Restore from automatic backup
- Re-run analyzer to validate state
- Document what went wrong + prevention
