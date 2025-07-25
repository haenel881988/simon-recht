GitHub Copilot in VS Code – Token‑Limits, Context‑Windows und KI‑Blindheit
Executive Summary
GitHub Copilot ist tief in VS Code integriert und verwendet große Sprachmodelle (LLMs) von OpenAI, um Chat‑Interaktionen und Code‑Vervollständigungen zu generieren. Die Leistungsfähigkeit hängt maßgeblich vom Token‑Budget ab. Für Standard‑Benutzer war das Chat‑Modell lange auf eine Kontextfenstergröße von etwa 4 000 Tokens beschränkt, während Code‑Vervollständigungen etwa 8 000 Tokens nutzen können
github.com
. Ab Dezember 2024/Februar 2025 brachte GitHub mit dem GPT‑4o‑Modell ein neues Angebot:

64k‑Context (≈ 64 000 Tokens) für Copilot Chat in der stabilen VS Code‑Version; 128k im Insiders‑Build
github.blog
devclarity.ai
. Dieses Fenster berücksichtigt eingereichte Dateien und Chat‑Verlauf.

Der Standard‑Gratis‑Plan erlaubt 2 000 Code‑Vervollständigungen und 50 Chat‑Anfragen pro Monat; Copilot Pro hat keine Limits, unterliegt aber weiterhin serverseitigen Fair‑Use‑Beschränkungen
code.visualstudio.com
docs.github.com
.

Dateianhänge waren bis Februar 2025 auf 10 Dateien pro Bearbeitung begrenzt. Seit dem VS Code v1.98‑Release ist diese Client‑Beschränkung aufgehoben; es gelten nur noch serverseitige Regeln
code.visualstudio.com
.

Ist eine Datei größer als das verfügbare Token‑Budget, sendet Copilot nur eine Struktur (Funktionen und Beschreibung), und wenn selbst diese den Kontext sprengt, wird sie ausgeschlossen
code.visualstudio.com
.

Die wichtigste Lehre für Entwickler lautet: das Token‑Budget ist knapp und begrenzt die Menge an Kontext, den Copilot verarbeiten kann. Der Wechsel zu größeren Modelle (z. B. GPT‑4o) vergrößert das Fenster, aber die grundlegende Strategie bleibt: Prompt und Dateianhänge reduzieren, Sessions bewusst unterbrechen und Kontext gezielt steuern, um KI‑Blindheit zu vermeiden.

Technische Spezifikationen
Token‑Limits & Context‑Windows
Nutzungsszenario Kontextfenster (tok) Hinweise Quellen
Copilot Chat (Standard) ≈ 4 000 Tokens Ältere Versionen der Chat‑Funktion nutzen ein 4k‑Fenster
github.com
. Das Fenster enthält sowohl Nutzereingaben als auch Antworten; mit zunehmendem Gespräch wird älterer Kontext abgeschnitten, was zu „Blindheit“ führen kann. GitHub‑Diskussion
github.com
Copilot Completions ≈ 8 000 Tokens Code‑Vervollständigungen haben ein größeres Kontextfenster als Chat
github.com
. Dies gilt auch für Inline‑Vorschläge und neue Zeilen. GitHub‑Diskussion
github.com
Copilot Chat (GPT‑4o) 64 000–128 000 Tokens Seit Dezember 2024 unterstützt Copilot Chat in GitHub.com, der GitHub CLI und VS Code (stable) 64k Tokens; das VS Code Insiders‑Build bietet 128k Tokens
github.blog
. GitHub‑Changelog
github.blog
Maximale Ausgabe (Output) 4 096 Tokens (typisch) Unabhängig von der Eingabe begrenzen die zugrunde liegenden OpenAI‑Modelle die Antwortlänge meist auf 4 096 Tokens. Interne Metadaten von GPT‑4o bestätigen 4 096 Output‑Tokens bei 128k‑Fenster
github.com
. interne Modell‑Capabilities
github.com
Copilot Free Plan 2 000 completions & 50 chats / Monat Der kostenlose VS‑Code‑Plan umfasst monatlich 2 000 Code‑Vervollständigungen und 50 Chat‑Anfragen; Pro‑Nutzer haben unbegrenzte Anfragen
code.visualstudio.com
. VS Code‑Blog
code.visualstudio.com
Rate‑Limit (historisch) 14 Interaktionen / 10 Minuten Vor Februar 2025 gab es in VS Code eine clientseitige Begrenzung von 14 Interaktionen pro 10 Minuten für Copilot Edits. Diese wurde mit Version 1.98 entfernt; serverseitige Limits bestehen weiter
code.visualstudio.com
. VS Code‑Release‑Notes
code.visualstudio.com

Was zählt als Token? Sowohl die Eingabe (Benutzernachrichten, angehängte Dateien, Chat‑Verlauf und .instructions.md‑Dateien) als auch die generierte Antwort werden in Tokens gemessen. Große Dateien füllen das Budget schnell; Copilot überträgt im Chat nur das Nötigste (Funktionen, Beschreibungen) und schließt Dateien aus, wenn selbst das Token‑Limit überschritten wird
code.visualstudio.com
.

Dateianhänge & Kontextmanagement
Maximale Dateigröße: Keine feste Obergrenze. Wenn eine Datei in das aktuelle Kontextfenster passt, wird sie vollständig gesendet. Ist sie zu groß, wird eine Outline mit Funktionen und Beschreibungen übertragen. Überschreitet selbst diese Outline das Budget, wird die Datei ignoriert
code.visualstudio.com
.

Anzahl der Dateien: Bis Version 1.98 konnten bei Copilot Edits maximal 10 Dateien gleichzeitig hochgeladen werden. Dieses Limit sowie ein clientseitiges Rate‑Limit wurden aufgehoben
code.visualstudio.com
. Der Service behält sich jedoch serverseitige Fair‑Use‑Limits vor
docs.github.com
.

Chat‑Session‑Persistenz: Der Chat behält den Verlauf im Kontext, bis das Token‑Fenster gefüllt ist. In VS Code können Entwickler über “New Chat” jederzeit eine neue Session starten, um das Gedächtnis zu löschen und das Modell wieder „frisch“ zu machen
code.visualstudio.com
. Das verhindert, dass alte Tokens weiterhin den Kontext blockieren.

Workspace‑Kontext: Copilot kann den Code des aktuellen Arbeitsbereichs durchsuchen. VS Code erlaubt das Anheften relevanter Dateien mit @filename oder das Nutzen des #codebase‑Suchbefehls. Darüber hinaus berücksichtigt Copilot standardmäßig geöffnete Dateien oder angeheftete Elemente; bei großen Projekten sollten Entwickler gezielt festlegen, welche Dateien für die Aufgabe relevant sind, um das Token‑Budget nicht zu überladen.

Modellinformationen
LLM‑Grundlagen: Copilot Chat und Copilot Completions verwenden primär OpenAI‑Modelle. Bis 2023 basierte Copilot auf GPT‑3.5 und Codex. Ab 2024 nutzt es in den kostenpflichtigen Plänen GPT‑4 (“Turbo”) und seit Dezember 2024 GPT‑4o
github.blog
.

Varianten & Updates: Das GPT‑4o‑Modell unterstützt 128k‑Context im Insiders‑Build; alternative Modelle wie o1‑preview und Claude 3 Sonnet werden experimentell in der Copilot‑API getestet. Interne Capability‑Listen zeigen, dass GPT‑4o 128k Eingabe‑Tokens und 4 096 Ausgabe‑Tokens unterstützt
github.com
, während Claude 3 Sonnet bis zu 200k Tokens verarbeiten kann
github.com
.

Zugangsmethoden: Neben der VS‑Code‑Extension existieren Copilot Chat auf GitHub.com, in der GitHub CLI, auf Mobile und im Terminal. Token‑Fenster können je nach Plattform variieren; das 64k/128k‑Fenster gilt laut GitHub‑Changelog für alle Plattformen, die GPT‑4o nutzen
github.blog
.

Best‑Practices‑Katalog
Token‑Management
Prompts kurz und fokussiert halten: Formuliere klare, spezifische Fragen an Copilot. Fülle das Input‑Budget nicht mit unnötigen Erklärungen oder Kontext. Je präziser der Prompt, desto weniger Tokens werden verwendet und desto geringer die Gefahr, das Fenster zu sprengen.

Aufgaben in kleine Schritte teilen: Größere Anforderungen (z. B. Refactoring mehrerer Klassen) sollten in kleine, sequenzielle Fragen unterteilt werden. Dadurch bleibt jedes Gespräch innerhalb des Token‑Fensters und das Modell behält den Überblick.

Relevante Dateien selektiv anhängen: Lädst du eine Datei per Chat hoch, prüfe, ob nur bestimmte Funktionen relevant sind. Entferne überflüssige Teile oder kopiere Ausschnitte. Nutze VS Code‑Befehle wie @filename oder #codebase, um gezielt nach Code zu suchen, anstatt das gesamte Projekt zu laden.

.copilot/instructions.md modular gestalten: Copilot erlaubt benutzerdefinierte Anweisungen pro Repository. Diese Datei wird an jede Anfrage angehängt und beansprucht Tokens. Halte die Anweisungen deshalb kurz (prägnante Stil‑ und Architekturhinweise) und verlinke keine langen externen Ressourcen
docs.github.com
.

Chat‑Sessions regelmäßig neu starten: Wenn eine Unterhaltung lang wird oder Copilot nicht mehr zielgerichtet antwortet, klicke auf „New Chat“ (⌘N), um ein neues Gespräch zu starten
code.visualstudio.com
. Das löscht den vorhandenen Kontext und macht Platz im Token‑Fenster.

Error‑Handling & Recovery
Fehlermeldungen verstehen: Bei Überschreiten des Token‑Limits meldet Copilot, dass die Nachricht zu lang ist oder der Kontext nicht verarbeitet werden kann. Bei serverseitigen Rate‑Limits erhälst du eine Mitteilung wie „Rate limit exceeded“
code.visualstudio.com
. Verkürze den Prompt, entferne Dateianhänge oder warte einige Minuten ab.

Datei‑Chunking nutzen: Für sehr große Dateien kann es sinnvoll sein, diese in kleinere Abschnitte aufzuteilen und nacheinander zu diskutieren. Füge nur das relevante Teilstück in den Chat ein, anstatt die gesamte Datei hochzuladen.

Arbeiten offline vorbereiten: Wenn du merkst, dass Copilot häufig blind wird oder ungenau antwortet, arbeite vorab offline. Erstelle Notizen, definiere die Problemstellung und wähle die relevanten Code‑Teile. So kannst du diese zielgerichtet an Copilot übergeben, ohne redundante Tokens zu verbrauchen.

Warten bei Rate‑Limits: Rate‑Limits sind serverseitig und sollen alle Nutzer fair behandeln. Falls du eine Limit‑Fehlermeldung erhältst, warte ein paar Minuten und starte dann eine neue Anfrage
docs.github.com
.

Community‑Workflows
Entwickler berichten in Foren und Blogs von folgenden bewährten Vorgehensweisen:

Context‑Pinning: In VS Code lassen sich wichtige Nachrichten „anheften“. Pinne die Kernfrage oder den relevanten Codeabschnitt an, damit er bei langen Gesprächen nicht aus dem Fenster fällt.

Multi‑File‑Koordination: Bei Projekten mit vielen Modulen wähle die wesentlichen Dateien aus, die Copilot analysieren soll. Beschreibe intermodulare Beziehungen in deiner Frage (z. B. „Diese Klasse ruft jene API auf“), damit Copilot den Zusammenhang versteht.

Anleitungen in README oder Comments einbauen: Manche Teams integrieren kurze Hinweise in den Projektdateien selbst („Dieser Service ist zuständig für…“). Copilot liest diese Kommentare beim Vervollständigen und Chatten und kann so besser navigieren.

Problemanalyse: KI‑Blindheit durch Context‑Überlauf
KI‑Blindheit beschreibt das Phänomen, dass ein Sprachmodell bei Überschreitung des Token‑Fensters relevante Details verliert. Symptome sind:

Halluzination & Oberflächlichkeit: Das Modell liefert unerwartete oder fantasievolle Antworten, weil Teile des Inputs abgeschnitten wurden.

Wiederholungen & Inkonsistenz: Antworten drehen sich im Kreis oder widersprechen vorherigen Aussagen. Dies ist ein Hinweis darauf, dass frühere Informationen aus dem Kontext gefallen sind.

Ignorierte Dateianhänge: Bei sehr langen Dateien sendet Copilot nur eine Outline oder schließt die Datei ganz aus
code.visualstudio.com
. Entwickler erleben dann, dass Chat‑Antworten den Code nicht berücksichtigen, obwohl sie ihn hochgeladen haben.

Typische Triggerpunkte sind lange Chat‑Verläufe (größer als 4k Tokens im Standard oder 64k/128k Tokens im GPT‑4o‑Modus) und komplexe Projekte mit vielen Dateianhängen. Wenn die Summe aus Chat‑Verlauf, Anweisungen und Dateien das Fenster überschreitet, schneidet Copilot den ältesten Kontext ab und verliert den Überblick
github.com
.

Prävention und Monitoring:

Token‑Monitoring: Behalte die Länge deiner Prompts im Auge. Ein kurzer Prompt von 500 Wörtern (~750 Tokens) plus Dateianhang (z. B. 200 Zeilen Code ≈ 800 Tokens) kann bereits 1 500 Tokens verbrauchen. Verwende Tools oder VS Code‑Erweiterungen, die die geschätzte Tokenanzahl anzeigen.

Kontext bewusst managen: Pinne wichtige Informationen, entferne irrelevante Nachrichten und beginne bei Bedarf neue Chats.

Warnsignale früh erkennen: Wenn Copilot unklar oder ungenau antwortet, prüfe, ob du das Token‑Limit erreicht hast. Lädst du große Dateien hoch, beachte, dass nur ein Outline übertragen wird
code.visualstudio.com
.

Alternativen nutzen: Für sehr große Projekte kann es sinnvoll sein, alternative LLMs mit größeren Kontextfenstern wie Claude 3 Sonnet (200k Tokens) einzusetzen
github.com
oder den Chat mit 128k‑Fenster in VS Code Insiders zu nutzen
github.blog
.

Workflow‑Empfehlungen
Kleine Projekte (< 5k Zeilen Code)
Minimalistische Anfragen: Du kannst in der Regel deine gesamte Code‑Basis einbinden. Verwende präzise Fragen („Wie kann ich die UserService‑Klasse refactoren?“) und wähle nur relevante Dateien.

Gemeinsame Sessions: Halte den Chat relativ kurz (1–2 Fragen), um KI‑Blindheit zu vermeiden. Nutze New Chat, sobald du das Gefühl hast, dass Antworten abdriften.

Mittlere Projekte (5k–50k Zeilen Code)
Modulares Arbeiten: Teile das Projekt in Module und fokussiere dich bei einer Anfrage auf ein Modul. Beschreibe in deinem Prompt die Abhängigkeiten zu anderen Modulen.

Angehängte Dateien einschränken: Hänge nur die Dateien an, die du gerade bearbeiten möchtest, und fasse Kontext in eigenen Worten zusammen.

.instructions.md nutzen: Lege generelle Code‑Stil‑ und Architekturprinzipien in /.copilot/instructions.md ab. Halte diese Datei kurz (idealerweise < 500 Tokens), damit genügend Platz für die eigentliche Anfrage bleibt
docs.github.com
.

Große Projekte (> 50k Zeilen Code)
Arbeitsbereich begrenzen: Wähle gezielt den Teil der Codebasis aus, der für die aktuelle Aufgabe relevant ist. Verwende VS Code‑Funktionen wie Arbeitsbereichsfilter, um Copilot nur bestimmte Ordner lesen zu lassen.

Sequentiales Chunking: Bearbeite große Dateien oder Datenstrukturen in mehreren Schritten. Beginne mit einer Zusammenfassung und lass Copilot anschließend auf Teilabschnitte eingehen.

128k‑Modus nutzen: Verwende den GPT‑4o‑Modus im VS Code Insiders‑Build, um das 128k‑Fenster auszunutzen
github.blog
. Achte dennoch darauf, das Fenster nicht vollständig auszuschöpfen, um Platz für Output zu lassen.

Multi‑File‑Koordination
Arbeitsset definieren: Entscheide vorab, welche Dateien Copilot benötigt. Nutze Dateibenennungen im Prompt („Sieh dir cart.ts und product.ts an…“).

Zusammenhänge beschreiben: Statt alle Dateien anzuhängen, beschreibe kurz, wie sie interagieren. Das spart Tokens und hilft der KI, den Zusammenhang zu verstehen.

Nachbereitungsphase einplanen: Nachdem Copilot Änderungen vorgeschlagen hat, prüfe die Ergebnisse manuell. Ergänze fehlende Details oder korrigiere Fehler, bevor du den Chat fortsetzt.

Chat‑Session‑Management
Neustart bei Ermüdung: Starte einen neuen Chat, wenn Antworten oberflächlich werden
code.visualstudio.com
.

Angehängte Dateien erneut hochladen: In neuen Sessions müssen relevante Dateien neu angeheftet werden, da die vorherige Kontextliste verloren geht.

Verlauf exportieren: Dokumentiere wichtige Erkenntnisse und Code‑Snippets außerhalb des Chats (z. B. in einem Wiki oder einer README), damit sie bei späteren Sessions leicht wiedergegeben werden können.

Fazit
GitHub Copilot bietet in VS Code einen leistungsfähigen KI‑Assistenten, dessen Fähigkeiten jedoch durch Token‑Fenster begrenzt sind. Für Standard‑Nutzer sind Chat‑Sessions auf etwa 4k Tokens limitiert
github.com
; mit GPT‑4o stehen bis zu 64k (Stable) bzw. 128k (Insiders) zur Verfügung
github.blog
. Dateianhänge und .copilot‑Instruktionen beanspruchen Teile dieses Budgets und müssen gezielt gemanagt werden
code.visualstudio.com
. Eine bewusste Prompt‑Strategie, modulare Arbeitsweise und regelmäßiger Neustart der Session verhindern KI‑Blindheit und ermöglichen eine effiziente Nutzung des Assistenzsystems. Serverseitige Rate‑Limits und Fair‑Use‑Regeln bleiben bestehen
docs.github.com
; wer Copilot professionell einsetzt, sollte daher proaktiv mit dem Token‑Budget haushalten, klare Fragen stellen und den Kontext gezielt steuern.
