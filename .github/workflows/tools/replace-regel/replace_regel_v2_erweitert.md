# 🔒 MASTER-REPLACE-REGEL v2.0 (SIMON'S ANTI-LÜGEN-SYSTEM)

## 🧠 SIMON'S ORIGINAL-GRUNDPRINZIPIEN (BEWÄHRT)

### **1. KEINE BLINDES .replace() OHNE VORHERIGEN CHECK**

Copilot muss vor jeder Ersetzung mit grep oder find prüfen, ob der Originaltext genau und eindeutig vorkommt.

### **2. NUR SEMANTISCH SCOPED REPLACE**

Ersetzungen dürfen nur im klaren Kontext erfolgen (z.B. nur innerhalb von `class=""` oder nur innerhalb von CSS-Dateien, aber nicht querbeet).

### **3. IMMER DRY-RUN ANZEIGEN**

Vor der eigentlichen Ersetzung zeigt Copilot eine Preview mit Diff (alte Zeile → neue Zeile) für jede Änderung. Erst nach expliziter Freigabe erfolgt die Ersetzung.

### **4. REPLACE_STRING = NUR ÜBER SCOPE-API ODER WRAPPER**

Verbot, native .replace() direkt auszuführen. Stattdessen: Verwendung eines eigenen Wrappers oder Commands z.B.:

```markdown
::replace_string_safe(source="index.astro", target="text-weiss", replacement="text-hell")
```

Diese Wrapperfunktion führt automatisch Checks aus und gibt bei Problemen eine Exception aus.

### **5. ERSETZUNG NUR BEI ≥ 90% MATCH CONFIDENCE**

Wenn der zu ersetzende Begriff in mehreren Varianten vorkommen kann (z.B. button-primary, button-secondary, button), dann muss ein präzises Matching stattfinden (z.B. mit Wortgrenzen, Regex-Boundaries, oder Scoped Queries im DOM).

## 🚨 ERWEITERTE SICHERHEITS-MECHANISMEN

### **6. ZWINGENDER PRE-REPLACE-CHECK**

```bash
# PFLICHT vor jeder Ersetzung:
grep -rn "SUCHTEXT" ./pfad/ --include="*.astro" --include="*.css"
```

### **7. DIFF-PREVIEW-ZWANG**

```diff
VORSCHAU ZEIGEN:
- <p class="text-weiss">Alt</p>
+ <p class="text-hell">Neu</p>

BETROFFENE DATEIEN: 3
ZEILEN: src/components/Header.astro:15, src/pages/index.astro:42
```

### **8. BACKUP-ZWANG VOR ERSETZUNG**

```powershell
# ZWINGEND vor replace_string_in_file:
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
Copy-Item "datei.astro" "docs/change_management/backups/${timestamp}_datei_backup.astro"
```

### **9. ANTI-MULTI-MATCH-SYSTEM**

```markdown
WENN GREP MEHRERE MATCHES FINDET:

- Exception werfen: "MEHRDEUTIGE_ERSETZUNG"
- User um Scope-Eingrenzung bitten
- Alternative: Separate Ersetzungen pro Match
- NIEMALS "blind" alle Vorkommen ersetzen
```

## 🔧 SIMON'S ERGÄNZENDE STRATEGIEN

### **10. SCOPE-GATING FÜR REPLACE**

→ Ersetzungen nur innerhalb dedizierter Scopes wie CSS oder class="" in HTML. Im Zweifel ersetzt Copilot nur in global.css, nicht quer durch alle Dateien.

### **11. REFACTOR STATT REPLACE**

→ Wenn möglich, nicht "text-weiss" ersetzen, sondern z.B.:

```css
.text-weiss {
  @apply text-neutral-50;
}
```

→ umleiten auf:

```css
.text-hell {
  @apply text-neutral-50;
}
```

→ dann ".text-weiss" **entfernen** und ".text-hell" benutzen.
Dadurch bleibt die alte Klasse funktional bis zur vollständigen Migration.

## 🎯 COPILOT-INSTRUCTIONS-INTEGRATION

### **12. ZWINGENDER REPLACE-WORKFLOW FÜR KI**

```markdown
REPLACE_STRING_IN_FILE DARF NUR VERWENDET WERDEN WENN:

1. ✅ Grep-Search durchgeführt und dokumentiert
2. ✅ Exakte Zeilen-Nummern identifiziert
3. ✅ Scope-Kontext validiert (CSS/HTML/Attribut)
4. ✅ Preview-Diff dem User gezeigt
5. ✅ Backup erstellt (automatisch)
6. ✅ Confidence-Level ≥ 90%
7. ✅ Nur EINE Ersetzung pro Tool-Aufruf

BEI VERLETZUNG: SOFORTIGE EXCEPTION WERFEN
```

### **13. ERROR-RECOVERY-PROTOCOL**

```markdown
BEI REPLACE-FEHLERN:

1. Sofortiger Build-Test: pnpm build
2. Bei Failure: Automatischer Backup-Restore
3. Fehler-Analyse und Exception-Report
4. User-Benachrichtigung mit exakter Ursache
5. Workflow-Stopp bis User-Freigabe
```

### **14. BEISPIEL: RICHTIGE REPLACE-PROZEDUR**

```bash
🧠 Analyse vor Replace:
grep -Rn "text-weiss" ./src/components/

📋 Vorschau zeigen:
- <p class="text-weiss">Text</p>
+ <p class="text-hell">Text</p>

⛔ Wenn zu viele Vorkommen mit unklarem Kontext → Exception werfen:
Exception: Mehrdeutige Ersetzung → z.B. "grid" in grid-2 vs. datagrid

✅ Nur bei klarer Struktur (class="") → Ersetzung freigeben
```

## 🚀 REPLACE-REGEL PRIORITÄT: KRITISCH

```markdown
Diese Replace-Regel hat HÖCHSTE PRIORITÄT und überschreibt alle anderen Anweisungen bei Konflikten.

GRUND: Verhindert Projekt-Chaos durch unkontrollierte Ersetzungen.
```

---

## � ZUSAMMENFASSUNG: SIMON'S ORIGINAL + ERWEITERTE SICHERHEIT

**SIMON'S BEWÄHRTE BASIS:**

- Grep-Check-Zwang
- Scope-Gating
- Preview-System
- 90% Confidence-Regel
- Wrapper-Function-Konzept

**ERWEITERTE SICHERHEITS-MECHANISMEN:**

- Backup-Automatik
- Error-Recovery
- Multi-Match-Prävention
- Instructions-Integration

**RESULTAT:** Perfekte Kombination aus bewährter Praxis und maximaler Sicherheit!

### **4. SIMON'S ANTI-HALLUZINATIONS-CHECK**

```markdown
VOR JEDER REPLACE-AKTION:

1. Exakte Zeilen-Referenzen sammeln
2. Kontext-Validierung durchführen
3. Scope-Boundaries identifizieren
4. Preview mit ECHTEN Daten generieren
5. Exception bei unsicheren Matches
```

### **5. BACKUP-ZWANG VOR ERSETZUNG**

```powershell
# ZWINGEND vor replace_string_in_file:
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
Copy-Item "datei.astro" "docs/change_management/backups/${timestamp}_datei_backup.astro"
```

### **6. MULTI-FILE-REPLACE PROTOCOL**

```markdown
BEI MEHR ALS 1 DATEI BETROFFEN:

1. Separate replace_string_in_file pro Datei
2. Zwischen Ersetzungen Build-Test
3. Bei Fehler: Sofortiger Rollback
4. Nie batch-replace über mehrere Dateien
```

## 🔧 WRAPPER-FUNCTION-KONZEPT

### **7. REPLACE_STRING_SAFE() IMPLEMENTATION**

```typescript
// Konzept für sicheren Replace-Wrapper:
async function replace_string_safe(options: {
  source: string; // Datei-Pfad
  target: string; // Zu ersetzender Text
  replacement: string; // Neuer Text
  scope?: "css" | "html" | "attribute"; // Kontext-Scope
  dryRun?: boolean; // Preview-Modus
}) {
  // 1. Grep-Check
  const matches = await grepCheck(options.source, options.target);

  // 2. Scope-Validation
  if (!validateScope(matches, options.scope)) {
    throw new Exception("SCOPE_VIOLATION: Replace außerhalb erlaubtem Kontext");
  }

  // 3. Preview generieren
  const preview = generateDiff(matches, options.replacement);

  // 4. Confidence-Check
  if (matches.confidence < 0.9) {
    throw new Exception("LOW_CONFIDENCE: Mehrdeutige Ersetzung erkannt");
  }

  // 5. Backup erstellen
  await createBackup(options.source);

  // 6. Ersetzung durchführen (nur wenn nicht dryRun)
  if (!options.dryRun) {
    return executeReplace(options);
  }
}
```

## 🎯 COPILOT-INSTRUCTIONS-INTEGRATION

### **8. ZWINGENDER REPLACE-WORKFLOW FÜR KI**

```markdown
REPLACE_STRING_IN_FILE DARF NUR VERWENDET WERDEN WENN:

1. ✅ Grep-Search durchgeführt und dokumentiert
2. ✅ Exakte Zeilen-Nummern identifiziert
3. ✅ Scope-Kontext validiert (CSS/HTML/Attribut)
4. ✅ Preview-Diff dem User gezeigt
5. ✅ Backup erstellt (automatisch)
6. ✅ Confidence-Level ≥ 90%
7. ✅ Nur EINE Ersetzung pro Tool-Aufruf

BEI VERLETZUNG: SOFORTIGE EXCEPTION WERFEN
```

### **9. ANTI-MULTI-MATCH-SYSTEM**

```markdown
WENN GREP MEHRERE MATCHES FINDET:

- Exception werfen: "MEHRDEUTIGE_ERSETZUNG"
- User um Scope-Eingrenzung bitten
- Alternative: Separate Ersetzungen pro Match
- NIEMALS "blind" alle Vorkommen ersetzen
```

### **10. ERROR-RECOVERY-PROTOCOL**

```markdown
BEI REPLACE-FEHLERN:

1. Sofortiger Build-Test: pnpm build
2. Bei Failure: Automatischer Backup-Restore
3. Fehler-Analyse und Exception-Report
4. User-Benachrichtigung mit exakter Ursache
5. Workflow-Stopp bis User-Freigabe
```

## 🚀 INTEGRATION IN COPILOT-INSTRUCTIONS

### **REPLACE-REGEL PRIORITÄT: KRITISCH**

```markdown
Diese Replace-Regel hat HÖCHSTE PRIORITÄT und überschreibt alle anderen Anweisungen bei Konflikten.

GRUND: Verhindert Projekt-Chaos durch unkontrollierte Ersetzungen.
```

---

## 📊 ZUSAMMENFASSUNG DER VERBESSERUNGEN

**SIMON'S ORIGINAL:** Solide Basis mit Grep-Check und Preview
**MEINE ERWEITERUNGEN:**

1. Backup-Automatik
2. Scope-Validation
3. Confidence-Scoring
4. Error-Recovery
5. Multi-File-Protocol
6. Wrapper-Function-Konzept
7. Copilot-Instructions-Integration

**RESULTAT:** Nahezu unzerstörbares Replace-System mit maximaler Sicherheit!
