# variablen:

scopes = bereiche
Astra = Copilot
Copilot = KI
AAR = After Action Review
RVE = Reverse Engineering

Bei jeglicher Änderung muss die KI eine Backup-Datei erstellen.

# 🛡️ ANTI-VERZETTLUNGS- UND BACKUP-SYSTEM

**Ideen und Brainstorming von Simon**

- Die KI soll einen Workflow integrieren, um bei jeder Änderung, im Änderungsprotokoll ein AAR und ein RVE durchzuführen. Beim AAR und RVE muss die KI anhand meiner Anweisung, der Backup-Datei und der geänderten Datei, zwingend 100% sicher sein, dass die KI die Änderungen korrekt nachvollziehen kann.
  Während der Ausführung muss also die KI, jede einzelne Änderung direkt und während der Ausführung dokumentieren.

- Bevor die KI überhaupt eine Änderung durchführt, muss die KI eine Todo-Liste erstellen, mit allen notwendigen Schritten und Informationen sowie den Scopes, und in der todoliste eigenständig meine Anweisung erstmal aufarbeiten, einteilen in schwierigkeitsgrad und jeweilige Priorisierung.
  Wenn die KI die Todo-Liste abgearbeitet hat - und ich bestätigt habe, muss die KI, die Todo-Liste archivieren im folgenden Pfad:
  C:\apps\website\simon-recht\docs\todos\archiv

Dabei muss nach jeder Aufgabe, das Verzeichnis bis auf die aktuellen todos, sowie der readme-Datei leer sein.
Ich spreche hier von diesem Verzeichnis:
C:\apps\website\simon-recht\docs\todos

## 🎯 ZIEL

Verhindere Verzettlung, sichere jede Änderung, dokumentiere Workflows und berücksichtige immer den aktuellen Chat-Kontext.

## 📋 TODO-LISTE & SYSTEM

- Siehe: `TODO_ANTI_VERZETTLUNGS_SYSTEM.md`
- Backups: `backups/`
- Änderungsprotokolle: `history/`

## 🧠 REGELN FÜR DIE KI

1. **Anti-Verzettlungs-System:** KI muss Simon aktiv helfen, sich zu entzetteln und Aufgaben zu strukturieren.
2. **Backup-Pflicht:** Vor jeder Änderung wird automatisch ein Backup im Verzeichnis `backups/` erstellt (mit Zeitstempel und Dateiname).
3. **Kontext-Pflicht:** KI muss immer den aktuellen Chat und Kontext berücksichtigen, auch wenn Simon an Workflows oder README arbeitet.
4. **Workflow-Entwicklung:** Jeder Workflow wird nur einmal entwickelt und dokumentiert, Lösungen sind wiederverwendbar.
5. **Scope-Prinzip:** Jede Anweisung wird in Scopes (BEREICHE) zerlegt und bearbeitet.
6. **Dokumentationspflicht:** Jede Änderung wird nach SMART-Prinzip dokumentiert (siehe history/README.md).

## 🔄 WORKFLOW (DETAILLIERT)

1. **Analyse der Quelldatei und/oder Quellverzeichnisse**

   - Dafür muss die KI die Quelldatei/das Quellverzeichnis analysieren
   - Bereiche (Scopes) identifizieren und prüfen, ob die Quelle verschiedene Scopes besitzt

2. **Änderungsprotokoll erstellen** (wenn nicht vorhanden)

   - Verzeichnis: `C:\apps\website\simon-recht\docs\change_management\history`

3. **Backup-Datei erstellen**

   - Sicherungskopie der Quelldatei/des Quellverzeichnisses erstellen vor Änderungen
   - Verzeichnis: `backups/`

4. **Dokumentation jeder Änderung (SMART-Prinzip):**

   - Beschreibung des Fehlers/Problems/der Änderung (SMART)
   - Zeitpunkt der Änderung
   - Exakte und detaillierte SMART-Kriterien für die Änderung/Lösungsvorschlag
   - Verweis auf die betroffenen Bereiche (Scopes)

5. **Änderung durchführen**

6. **Git add & commit ausführen**
   - Als zusätzliches Backup

## 📌 HINWEIS

Diese Regeln sind verbindlich und werden in den copilot-instructions.md übernommen. Die KI verwaltet das Change Management eigenständig und sorgt für Nachvollziehbarkeit und Wiederverwendbarkeit aller Workflows.
