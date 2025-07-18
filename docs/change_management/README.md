Bei jeglicher Änderung muss die KI eine Backup-Datei erstellen.

# 🛡️ ANTI-VERZETTLUNGS- UND BACKUP-SYSTEM

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

## 🔄 ABLAUF (WORKFLOW)

1. Analyse der Quelldatei und/oder Quellverzeichnisse
2. Scopes identifizieren und dokumentieren
3. Backup der Quelldatei/des Verzeichnisses erstellen (backups/)
4. Änderungsprotokoll anlegen (history/)
5. Änderung durchführen
6. Git add & commit als zusätzliches Backup

## 📌 HINWEIS

Diese Regeln sind verbindlich und werden in den copilot-instructions.md übernommen. Die KI verwaltet das Change Management eigenständig und sorgt für Nachvollziehbarkeit und Wiederverwendbarkeit aller Workflows.

# variablen:

scopes = bereiche
Astra = Copilot
Copilot = KI

# Workflow:

1. Analyse der Quelldatei und / oder Quellverzeichniss/e
   Dafür muss die KI die Quelldatei / und - oder Quellverzeichnis analysieren.
2. Die KI muss jede Datei / jedes Quellverzeichnis die Bereiche (Scopes) identifizieren und prüfen, ob die Quelle evtl. verschiedene Scopes besitzt.
3. Die KI muss ein Änderungsprotokoll erstellen - wenn nicht vorhanden in diesem Verzeichnis:
   C:\apps\website\simon-recht\docs\change_management\history

4. Jede einzelne Änderung muss dokumentiert werden und zwar folgendermassen:
5. 1. Beschreibung des Fehlers, Problems, der Änderung (SMART)
6. 2. Zeitpunkt der Änderung
7. 3. Exakte und detaillierte und konkrete und spezifische / SMART-Kriterien für die Änderung - bzw. Lösungsvorschlag.
8. 4. Verweis auf die betroffenen Bereiche (Scopes)

9. Erstellung einer Backup-Datei
   Die KI muss eine Sicherungskopie der Quelldatei / des Quellverzeichnisses erstellen, bevor Änderungen vorgenommen werden.

- Nach dem die Punkte abgearbeitet sind, muss die KI git add und git commit ausführen --> welches als zusätzliches Backup dient.
