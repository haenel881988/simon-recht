Unsortierte Gedanken / Fragen / sonstiges:

- Was sind mit Scopes gemeint und wie wende ich die Scopes an?
-

# Design / Besprechung / Ideen

Das Design wird hier in der md Datei festgehalten.
docs\website_struktur\website_design\global_css.md

Wie würdest du der Website gestalten?
Das Design soll minimalistisch sein.

Der Hintergrund soll auf allen Seiten und abschnitten identisch sein.

Leeres docs-Verzeichnis:
Laut Instructions soll die Dokumentation zentral in docs erfolgen (z.B. Änderungsprotokoll, AAR, Logbuch). Das Verzeichnis ist aber leer.
→ Frage: Sollen die Protokolle und Berichte in einem anderen Ordner liegen oder fehlt hier noch die Ablage?
Dieses leere Verzeichnis habe ich aus einem anderen Projekt übernommen. Es war mal die Absicht, dies zu übernehmen, jedoch sind andere Baustellen wichtiger.

Projekt-Inventar:
Die Inventar-Datei projekt_inventar.md existiert, aber ist sie aktuell und vollständig gepflegt?
→ Frage: Ist die Inventar-Dokumentation auf dem neuesten Stand oder gibt es noch offene Punkte?
Das Inventar ist nicht vollständig und muss durch die KI aktualisiert werden.

Build-Logfiles:
Die Build-Logfiles liegen unter logfiles. Die Instructions verlangen eine automatische Analyse nach jedem Build.
→ Frage: Gibt es einen Workflow, der die Logs nach jedem Build wirklich auswertet und dokumentiert? Wo werden die Ergebnisse abgelegt?
Ja - ich habe in einem anderen Projekt einen analytischen Workflow entwickelt, ein checker der den Build Prozess überwacht. Dieser ist hier zu finden.:
tools\build_check

SEO-Checker & Validierung:
Es gibt Scripte und Metriken für SEO-Checks, aber die genaue Integration in den Build-Prozess ist nicht eindeutig dokumentiert.
→ Frage: Wie erfolgt die Verknüpfung zwischen Build, SEO-Check und Protokollierung? Gibt es einen automatisierten Ablauf?
Ja ganz genau, da hast du mich erwischt. Ich hatte die Stille Erwartung - dass die KI automatisch dies feststellt.
Wenn wir schon dabei sind, der Checker soll auf mein Projekt übertragen werden, dabei sollen die Checks, die noch aus dem alten Projekt stammen, auf das neue Projekt adaptiert / migriert werden.
Hier ist die Readme-Datei für den Checker:
tools\build_check\README.md

Content-Quellen & Freigabe:
Die Instructions verlangen, dass nur von Simon freigegebene Texte verwendet werden.
→ Frage: Gibt es eine zentrale Freigabe-Liste oder Markierung, welche Texte für die Website verwendet werden dürfen?
In diesem Verzeichnis sind die Daten vorhanden:
docs\website_struktur\origin

Dabei dürfen bestehende Texte nicht mit den Inhalten vermischt werden.
Diese Daten sollen nur für neue Inhalte wie Blogs etc. verwendet werden.

Verzeichnisstruktur vs. Instructions:
Einige Instructions beziehen sich auf Verzeichnisse, die im aktuellen Projekt nicht (mehr) existieren oder leer sind (z.B. docs/projekt/).
→ Frage: Gibt es veraltete Strukturen oder sollen bestimmte Ordner noch angelegt/umgezogen werden?
Diese Instructions bitte hier die instruction Datei, die Zeile und Problematische Zeile hier auflisten:
docs\todos\issues.md
Generell alle Probleme hier in der Issues.md festhalten und dokumentieren.

Automatische Dokumentation:
Die Instructions fordern eine automatische Fortschritts- und Änderungsdokumentation.
→ Frage: Wird dies aktuell manuell gepflegt oder gibt es ein automatisiertes System?

Mehrere Archiv- und Ideen-Ordner:
Es gibt verschiedene Archiv- und Ideen-Verzeichnisse, teils mit ähnlichen Namen und Inhalten.
→ Frage: Gibt es eine klare Regel, wo neue Ideen, Storys oder Archivmaterial abgelegt werden sollen?
