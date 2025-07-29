# INSTRUCTIONS

Betreffendes Verzeichnis.: ".github"

**Ziel und Zweck**

Die Zielsetzung dieses Verzeichnisses ist die systematische Analyse und Verbesserung von Fehlern und Problemen innerhalb des Verzeichnisses: ".github".
Dies umfasst die Identifizierung von Schwachstellen, die Dokumentation von Fehlerursachen und die Entwicklung nachhaltiger Lösungen.

Insbesondere ist der Hauptaugenmerk darauf zu legen, dass ein spezifisches Analysetool erstellt werden soll um eine vollautomatisierte inventarisierung durchzuführen.
Das Analysetool soll sich in diesem Verzeichnis befinden:
tools\analyzer\instructions

Dabei ist speziell zu berücksichtigen, dass die KI mit sogenannten Scopes, also Bereichen / unterbereichen arbeiten muss.
Jedes Tool, jedes skript führt einen Bereich bzw. Scopes / unterbereich durch, gemäss übergeordneter Aufgabe.

Jedes skript / tool muss linear arbeiten, heisst, keine ausführung von parallelen Tools / Skripte.

Dabei muss die KI für jeden Scope / Bereich innerhalb des Analyzer, separate unterbereiche in Form von unterverzeichnissen erstellen.

Darüber hinaus muss die KI sicherstellen, dass die Berichte der jeweiligen Analyzing Tools, in den jeweiligen Scopes abgelegt werden. Dabei sollen veraltete Berichte archiviert und neue Berichte entsprechend den aktuellen Standards erstellt werden.
Das alter der Berichte muss dynamisch angepasst werden. Logdateien z.B.: dürfen nicht älter als 5min sein.
Bei der Inventarisierungsberichte muss sichergestellt werden, dass nur die inkrementiellen Änderungen erfasst werden.
Das Analysetool muss in der Lage sein, diese Anforderungen zu erfüllen und entsprechende Mechanismen zur Überwachung und Anpassung der Berichtsalter einzuführen.

Ausserdem muss die KI das Analysetool verwenden um die Arbeit von der KI zu validieren.
Sämtliche Codes / Verzeichnisse / Dateien / ausgenommen die blogseiten, und astro-spezifische seiten, müssen modularsiert werden.
