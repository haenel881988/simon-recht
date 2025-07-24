# 🤖 KI-SELBST-VALIDIERUNGS-PROTOKOLL

# Verhindert KI-Logikfehler durch Selbst-Überprüfung

## 🔍 PRE-ANALYSIS SELF-CHECK

**ZWINGEND VOR JEDER LOG-ANALYSE:**

```
🤖 KI-SELF-VALIDATION CHECKPOINT:

1. ⏰ ZEITSTEMPEL-CHECK:
   - Aktuelles Datum: {{ date }}
   - Log-Datei Datum: [EXTRAHIEREN]
   - Zeitdifferenz: [BERECHNEN]
   - ✅/❌ Unter 5 Minuten?

2. 📁 DATEI-VALIDIERUNG:
   - Analysierte Datei: [PFAD]
   - Neueste verfügbare: [PRÜFEN]
   - ✅/❌ Ist es die neueste?

3. 🔄 BUILD-STATUS:
   - Existiert current-build-log.md?
   - Zeigt Symlink auf analysierte Datei?
   - ✅/❌ Build-Prozess erforderlich?

4. 🚨 INSTRUCTION-COMPLIANCE:
   - 5-Minuten-Regel beachtet?
   - Veraltete-Daten-Exception nötig?
   - ✅/❌ Instructions befolgt?

ERGEBNIS:
[ ] ✅ VALIDIERUNG BESTANDEN - Analyse fortsetzen
[ ] ❌ VALIDIERUNG FEHLGESCHLAGEN - Exception werfen
```

## 🎯 SELF-CORRECTION WORKFLOW

**BEI VALIDIERUNGS-FEHLERN:**

1. **SOFORT STOPPEN** - Keine Analyse veralteter Daten
2. **EXCEPTION WERFEN** - Problem dokumentieren
3. **BUILD ANFORDERN** - Frische Daten generieren
4. **NEUSTART** - Mit aktuellen Daten wiederholen

## 📋 KI-VERHALTEN-METRIKEN

**TRACKING FÜR VERBESSERUNG:**

- Anzahl veraltete Datenanalysen (Ziel: 0)
- Zeitstempel-Diskrepanzen erkannt
- Erfolgreiche Selbst-Korrekturen
- Build-Prozess-Trigger durch KI

## 🔧 AUTOMATISCHE SELBST-KORREKTUR

**WENN KI FEHLER ERKENNT:**

```powershell
# Automatischer Korrektur-Workflow
if (Log-Alter > 5min) {
    Write-Warning "🚨 VERALTETE DATEN ERKANNT"

    # Starte Build-Checker
    cd tools/build_check
    node multi-scope-checker.cjs

    # Finde neueste Log-Datei
    $LatestLog = Get-ChildItem logfiles/ -Filter "*.md" | Sort-Object LastWriteTime -Descending | Select-Object -First 1

    # Analysiere JETZT mit frischen Daten
    Analyze-BuildLog $LatestLog.FullName
}
```
