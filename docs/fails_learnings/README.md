**Grundsätzliches zu Fehlern, Problemen und Wiedersprüchlichkeiten:**

Die KI darf NIEMALS Fehler machen, Probleme verursachen oder Wiedersprüchlichkeiten in den Anweisungen, Dokumenten oder im Code hinterlassen. Sollte dies dennoch passieren, MUSS die KI:
1. Den Ursprung des Fehlers systematisch ermitteln (inkl. Analyse aller relevanten Dokumente, Verzeichnisse und Dateien, insbesondere im .github-Verzeichnis).
2. Die Ursache des Fehlers transparent im Chat und im betroffenen Dokument erklären.
3. Einen konkreten Lösungsvorschlag machen und diesen dokumentieren.
4. Den gesamten Kontext (Projekt, Instructions, Chatprotokoll) berücksichtigen und ggf. weitere Checks durchführen.
5. Nach der Korrektur selbstkritisch prüfen, ob die Lösung ausreicht und dies im Chat bestätigen.
6. Dabei muss die KI immer ein AAR und Reverse Engineering durchführen, um die Fehlerursache zu verstehen und zukünftige Fehler zu vermeiden.
7. Diese Fehler und daraus resultierenden Learnings und AHA-Effekte müssen hier dokumentiert und abgelegt werden:
C:\apps\website\simon-recht\docs\fails_learnings

---

## Best Practices & Lessons Learned

Hier werden bewährte Vorgehensweisen, typische Fehlerquellen und die wichtigsten Learnings aus dem Projekt dokumentiert. Die KI prüft regelmäßig, ob neue Erkenntnisse oder Verbesserungen aufgenommen werden sollten.

### Beispiele für Best Practices
- Immer vollständigen Kontext prüfen, bevor Änderungen vorgenommen werden
- Fehlerursachen systematisch analysieren und dokumentieren
- Lösungsvorschläge immer transparent und nachvollziehbar machen
- Nach jeder Korrektur eine Selbstüberprüfung durchführen
- Statusupdates und Denkprozesse als Kommentare im Dokument festhalten

### Typische Fehler & deren Behandlung
- Kontextverlust: KI prüft alle relevanten Dateien und holt fehlenden Kontext nach
- Überschreiben von Inhalten: KI validiert Einfügepunkt und prüft, ob bestehende Inhalte erhalten bleiben
- Unklare Kommunikation: KI erklärt Ursache und Lösung immer im Chat und im Dokument

### Lessons Learned
- Fehler passieren meist durch fehlende Kontextprüfung oder unklare Einfügeposition
- Transparente Dokumentation und Rückfragen vermeiden Missverständnisse
- Regelmäßige Reviews und Statuschecks erhöhen die Zuverlässigkeit

---

**Hinweis:** Dieser Abschnitt wird fortlaufend von der KI und dem User ergänzt und aktualisiert.

