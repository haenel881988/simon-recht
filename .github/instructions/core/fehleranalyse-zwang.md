# 🔬 FEHLERANALYSE-ZWANG

## **KRITISCHE REGEL (INTERNALISIERT 26.07.2025):**

```
ALLE PROBLEME/FEHLER ZWINGEND ANALYSIEREN BEVOR LÖSUNGSVORSCHLAG!
```

### **🚨 SIMON'S FEHLERANALYSE-PROTOKOLL:**

**BEI JEDEM FEHLER/PROBLEM ZWINGEND:**

1. **ROOT-CAUSE-ANALYSIS:** Technische Ursache exakt identifizieren
2. **REVERSE-ENGINEERING:** Warum ist der Fehler entstanden?
3. **AAR (AFTER ACTION REVIEW):** Was hätte verhindert werden können?
4. **LESSON LEARNED:** Dauerhafter Lerneffekt dokumentieren
5. **PREVENTION:** Wie künftig verhindern?

### **VERBOTENE VERHALTENSWEISEN:**

- ❌ Sofort Lösungen vorschlagen ohne Analyse
- ❌ "Wahrscheinlich liegt es an..." ohne Beweis
- ❌ Problem umgehen statt analysieren
- ❌ Schnelle Fixes ohne Verständnis

### **ZWINGEND ERFORDERLICH:**

- ✅ Exakte technische Ursache identifizieren
- ✅ Tools/Scripts zur Analyse verwenden
- ✅ Fehler vollständig dokumentieren
- ✅ Prevention-Maßnahmen implementieren

## **BEISPIEL-TEMPLATE FÜR FEHLERANALYSE:**

```
🚨 FEHLER ERKANNT: [Beschreibung]

ROOT-CAUSE-ANALYSIS:
- Technische Ursache: [Exakte Ursache]
- Tools verwendet: [Analyse-Tools]
- Beweis: [Messbare Daten]

REVERSE-ENGINEERING:
- Warum entstanden: [Ursachenkette]
- Hätte verhindert werden können durch: [Prevention]

AAR (AFTER ACTION REVIEW):
- Was lief schief: [Analyse]
- Was lief gut: [Positive Aspekte]
- Verbesserungsvorschläge: [Konkrete Maßnahmen]

LESSON LEARNED:
- Dauerhafter Lerneffekt: [Regel für Zukunft]
- Instructions-Update: [Welche Regeln erweitern]

PREVENTION:
- Künftige Vermeidung: [Konkrete Maßnahmen]
- Monitoring/Validation: [Wie überwachen]
```

### **TOOL-INTEGRATION:**

- Bei Token-Limits: Analyse-Scripts verwenden
- Dokumentation in: `docs/lessons_learned/YYYY-MM-DD_[fehler].md`
- AAR-Reports in: `docs/change_management/aar/`

### **🤖 AUTONOMES ARBEITEN & FEHLERBEHANDLUNG:**

**ERWEITERTE AUTONOMIE-REGELN (aus agent.md konsolidiert):**

1. **VOLLSTÄNDIGE KONTEXT-BERÜCKSICHTIGUNG:**

   - Bei jeder Aufgabe ALLE relevanten Instructions einbeziehen
   - README-Dateien automatisch analysieren
   - Verzeichnisstruktur verstehen

2. **SYSTEMATISCHE FEHLERERMITTLUNG:**

   - Ursprung des Fehlers in .github-Verzeichnis analysieren
   - Betroffene Dokumente vollständig prüfen
   - Gesamten Projekt-Kontext berücksichtigen

3. **TRANSPARENTE KOMMUNIKATION:**

   - Fehlerursache im Chat UND betroffenen Dokumenten erklären
   - Konkrete Lösungsvorschläge dokumentieren
   - Nach Korrektur selbstkritisch validieren

4. **VOLLSTÄNDIGE DOKUMENTATION:**
   - Jeden Fehler komplett dokumentieren
   - AAR (After Action Review) zwingend durchführen
   - Reverse Engineering für Ursachenanalyse

**FAIL-SAFE DIRECTORIES:**

- Lessons Learned: `docs/change_management/history/`
- AAR Reports: `docs/change_management/aar/`
