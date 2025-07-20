Hinweis an die KI:
Da ich der User, Simon, ein totaler design-laie bin, bitte ich die KI, mir bei der beschreibung vom CSS hier, anhand von analogien / metaphern zu erklären, wie das design eigentlich funktioniert und was alles wichtig ist beim styling.

Ich habe vergessen zu erwähnen, dass die KI automatisch den Scope identifizieren soll, und automatisch eine Rolle annehmen soll.
Ausserdem sollte die KI in der Lage sein, kontextbezogene Beispiele zu geben, um die Erklärungen zu verdeutlichen.

Diese Datei dient dazu, in einfacher Sprache das Design zu beschreiben.

# Website Design - Global CSS

Diese Hinweise müssen in CSS umgesetzt werden.:

## GRUNDPRINZIP: ABSOLUTE EINHEITLICHKEIT

ALLE Seiten (Homepage, Blog, statische Seiten) müssen das GLEICHE Layout verwenden:

- Layout.astro für ALLE Seiten zwingend
- global.css für ALLE Seiten zwingend
- KEINE separaten HTML-Strukturen
- KEINE Inline-Styles (universell verboten)

## Das "Nachtstahl & Warnsignal" Farbsystem - REINE 3-FARBEN-REGEL

Dieses Farbsystem ist nicht einfach nur "dunkel". Es ist eine visuelle Strategie, die unsere Mission widerspiegelt: Wir sind nicht die Underdogs, wir sind die strategische Bedrohung. Die Tonalität ist kühl, analytisch und präzise, mit einem Akzent, der keine Zweifel an unserer Entschlossenheit lässt.

**ABSOLUT NUR 3 FARBEN - KEINE AUSNAHMEN!**

### 60% – Die Dominanzfarbe: #1a1d24 (Asphaltschwarz)

Beschreibung: Das ist unsere Basis. Kein reines Schwarz, das billig und ermüdend wirkt, sondern ein tiefes, fast schwarzes Anthrazit mit einem minimalen blauen Unterton. Es wirkt wie der Asphalt in einer Grossstadt bei Nacht oder der polierte Stahl einer Maschine.

Psychologische Wirkung: Seriosität, Stärke, Fokus. Diese Farbe schafft eine konzentrierte Umgebung, in der der Inhalt im Mittelpunkt steht. Sie signalisiert, dass wir uns in einem ernsten Territorium befinden, in dem Oberflächlichkeit keinen Platz hat. Das ist der Raum, in dem Strategien geschmiedet werden.

**Systematische Anwendung:**

- **Haupt-Hintergrund:** Body-Background, alle Sektionen-Hintergründe
- **Content-Bereiche:** Alle grossen Flächen der Website
- **Container-Hintergründe:** Maximale Dominanz für Ruhe und Fokus

### 30% – Die Sekundärfarbe: #4a6d7c (Analyse-Blau)

Beschreibung: Ein kühles, gedecktes Stahlblau. Es ist die Farbe von technischen Blueprints, von Code-Editoren und von tiefem, klarem Wasser. Es ist nicht emotional, sondern intellektuell.

Psychologische Wirkung: Intelligenz, Analyse, Systematik. Diese Farbe bricht die Dunkelheit des Hintergrunds auf und schafft Struktur. Sie strahlt Ruhe und logische Kompetenz aus. Das ist die Farbe, die unsere Methode und unsere analytische Überlegenheit repräsentiert.

**Systematische Anwendung:**

- **ALLE Überschriften:** H1, H2, H3, H4 (Standard-Intensität #4a6d7c)
- **ALLE Fließtexte:** Aufgehellt (#6b8a9a) für optimale Lesbarkeit - GLEICHE FARBFAMILIE!
- **Navigation:** Hintergrund und strukturelle Elemente
- **Info-Boxen:** Hintergrund und Rahmen
- **Sekundäre Buttons:** Rahmen und dezente Elemente
- **Code-Blöcke:** Hintergrund für technische Bereiche
- **Zitat-Hintergründe:** Strukturierung von wichtigen Inhalten

### 10% – Die Akzentfarbe: #ff4500 (Glut-Orange)

Beschreibung: Ein kräftiges, leuchtendes Orangerot. Es ist die Farbe von glühenden Kohlen, einem Warnsignal oder dem entscheidenden Button in einem Cockpit. Es ist ein kontrollierter Ausbruch von Energie in einer ansonsten kühlen Umgebung.

Psychologische Wirkung: Entschlossenheit, Aktion, Warnung. Diese Farbe ist unser "Call to Action". Sie durchbricht die analytische Kühle und fordert zur Handlung auf. Sie ist das visuelle Ausrufezeichen hinter unseren Aussagen. Sie signalisiert Dringlichkeit und die Konsequenz, die aus unserer Analyse folgt.

**Systematische Anwendung - NUR FÜR WICHTIGSTE ELEMENTE:**

- **Primäre Buttons:** AUSSCHLIESSLICH Call-to-Action Buttons
- **Hover-Zustände:** Navigation und Links beim Darüberfahren
- **Wichtigste Hervorhebungen:** Nur kritische Informationen
- **Zitat-Akzente:** Linker Rand-Strich bei wichtigen Zitaten
- **Icons:** Nur für wichtigste Funktionen

## TYPOGRAFIE UND TEXTFARBEN - SYSTEMATISCHE 3-FARBEN-HIERARCHIE

**KRISTALLKLARE REGEL:** Alles mit nur 3 Farben - perfekte Lesbarkeit durch intelligente Helligkeitsvariationen!

### Überschriften-Hierarchie (Alle in Analyse-Blau-Familie):

**H1 (Hauptschlagzeile):** Standard Analyse-Blau (#4a6d7c), sehr gross (3rem), fett

- **Analogie:** Wie die riesige Schlagzeile auf der Titelseite einer Zeitung - das Wichtigste überhaupt.
- **Kontrast:** Perfekt auf Asphaltschwarz (#1a1d24) lesbar

**H2 (Unter-Schlagzeile):** Standard Analyse-Blau (#4a6d7c), gross (2.5rem), fett

- **Analogie:** Wie die zweitwichtigste Meldung auf der Titelseite.

**H3 (Abschnitts-Titel):** Standard Analyse-Blau (#4a6d7c), mittel (2rem), fett

- **Analogie:** Wie die Überschriften der einzelnen Artikel im Innenteil.

**H4 (Unter-Abschnitt):** Standard Analyse-Blau (#4a6d7c), kleiner (1.5rem), fett

- **Analogie:** Wie Zwischentitel in einem längeren Artikel.

### Standard-Textfarben (Intelligente Analyse-Blau Variationen):

**Haupttext (Fließtext):** Aufgehelltes Analyse-Blau (#6b8a9a)

- **Analogie:** Wie die normale Druckfarbe in einem Buch - optimal lesbar und augenfreundlich.
- **Kontrast-Optimierung:** Hellere Variante derselben Farbfamilie für perfekte Lesbarkeit auf Asphaltschwarz.
- **Immer noch 3-Farben-Regel:** Technisch dieselbe Farbe, nur heller!

**Nebensächlicher Text:** Standard Analyse-Blau (#4a6d7c)

- **Analogie:** Wie die kleingedruckten Zusatzinfos in einer Zeitschrift - wichtig, aber weniger prominent.
- **Anwendung:** Meta-Informationen, Datumsangaben, Zusatztexte

**Anklickbare Links:** Aufgehelltes Analyse-Blau (#6b8a9a), beim Darüberfahren Glut-Orange (#ff4500)

- **Analogie:** Wie unterstrichene Wörter in einem Buch. Das Orange ist wie ein Aufleuchten - zeigt "hier geht's weiter!"

**Wichtige Hervorhebungen:** Glut-Orange (#ff4500)

- **Analogie:** Wie mit einem orangenen Textmarker markierte Stellen - das will man auf keinen Fall übersehen!
- **Sparsame Anwendung:** Nur für wirklich kritische Informationen!

## LAYOUT-STRUKTUR - SYSTEMATISCHE 3-FARBEN-ANWENDUNG

### Navigation (Die Wegweiser-Leiste der Website):

**Hintergrund:** Analyse-Blau (#4a6d7c)

- **Analogie:** Wie die dunkelblaue Uniform eines seriösen Sicherheitsdienstes - professionell und vertrauenswürdig.

**Text:** Aufgehelltes Analyse-Blau (#6b8a9a)

- **Analogie:** Wie leuchtende Schilder in einem dunklen Flughafen-Terminal - gut sichtbar und eindeutig.
- **3-Farben-Konform:** Dieselbe Farbfamilie, optimal lesbar!

**Beim Darüberfahren:** Glut-Orange (#ff4500)

- **Analogie:** Wie ein Lichtschalter, der aufleuchtet - zeigt "Hier passiert gleich was!"

### Content-Bereiche (Die systematischen Räume):

**Haupthintergrund:** Asphaltschwarz (#1a1d24)

- **Analogie:** Die Grundlage für alles - wie die Leinwand eines Künstlers.
- **100% Dominanz:** Alle grossen Flächen in dieser Farbe für maximale Ruhe.

**Inhalts-Kasten:** Maximum 1200 Pixel breit, immer in der Mitte

- **Analogie:** Wie ein perfekt zentrierter Bilderrahmen.
- **Hintergrund:** Asphaltschwarz (#1a1d24) - bleibt bei der Dominanzfarbe!

**Abschnitte:** Gleichmässige Innenabstände, klare Trennung

- **Analogie:** Wie Zimmer in einem Museum - genug Raum zum Atmen.
- **Hintergrund:** Konsequent Asphaltschwarz (#1a1d24)

### Buttons - KLARE HIERARCHIE MIT 3 FARBEN:

**Primärer Button (Hauptaktionen):** Glut-Orange (#ff4500) Hintergrund, Asphaltschwarz (#1a1d24) Schrift

- **Analogie:** Wie ein roter Notfall-Knopf - unmöglich zu übersehen!
- **Anwendung:** AUSSCHLIESSLICH für wichtigste Call-to-Actions
- **Schriftfarbe:** Asphaltschwarz für perfekten Kontrast auf Orange

**Sekundärer Button:** Durchsichtig mit Analyse-Blau (#4a6d7c) Rahmen, Analyse-Blau (#4a6d7c) Schrift

- **Analogie:** Wie ein dezenter Lichtschalter - sichtbar aber nicht aufdringlich.
- **Hover:** Analyse-Blau (#4a6d7c) Hintergrund, Asphaltschwarz (#1a1d24) Schrift

**ABSOLUT VERBOTEN:**

- Andere Hintergrundfarben für Buttons
- Weisse oder andere Schriftfarben
- Animationen oder Bewegungen

### Info-Kästen und Hervorhebungen - SYSTEMATISCH:

**Standard Info-Box:**

- **Hintergrund:** Durchscheinendes Analyse-Blau (#4a6d7c) mit 15% Deckkraft
- **Rahmen:** Vollständiger Analyse-Blau (#4a6d7c) Rahmen
- **Text:** Aufgehelltes Analyse-Blau (#6b8a9a)
- **Analogie:** Wie eine elegante Vitrine mit blauem Glas

**Wichtige Hervorhebungs-Box:**

- **Hintergrund:** Durchscheinendes Analyse-Blau (#4a6d7c) mit 20% Deckkraft
- **Rahmen:** Analyse-Blau (#4a6d7c) mit Glut-Orange (#ff4500) linkem Akzent-Strich
- **Text:** Aufgehelltes Analyse-Blau (#6b8a9a)
- **Analogie:** Wie eine Vitrine mit orangenem Warnstreifen

## BLOG-SPEZIFISCHE REGELN - SYSTEMATISCHE 3-FARBEN-ANWENDUNG

### Artikel-Gestaltung (Professionelles Zeitschriften-Layout):

**Artikel-Kopfbereich:** Analyse-Blau (#4a6d7c) Hintergrund

- **Analogie:** Wie die farbige Titelseite einer Fachzeitschrift - sofort erkennbar als neuer Artikel.
- **Text im Kopfbereich:** Asphaltschwarz (#1a1d24) für perfekten Kontrast

**Artikel-Haupttext:** Aufgehelltes Analyse-Blau (#6b8a9a)

- **Analogie:** Wie die Standardschrift in einem hochwertigen Buch - optimal lesbar.
- **3-Farben-Konform:** Analyse-Blau Familie für perfekte Lesbarkeit!

**Meta-Informationen:** Standard Analyse-Blau (#4a6d7c)

- **Analogie:** Wie kleine Notizen am Rand einer Zeitung - wichtig aber dezent.
- **Anwendung:** Datum, Tags, Autor-Info

### Spezial-Elemente in Artikeln:

**Code-Bereiche:**

- **Hintergrund:** Analyse-Blau (#4a6d7c) mit 25% Deckkraft
- **Text:** Aufgehelltes Analyse-Blau (#6b8a9a)
- **Rahmen:** Standard Analyse-Blau (#4a6d7c)
- **Analogie:** Wie ein dunkler Computer-Monitor - technisch und professionell

**Wichtige Zitate:**

- **Hintergrund:** Analyse-Blau (#4a6d7c) mit 20% Deckkraft
- **Linker Akzent-Strich:** Glut-Orange (#ff4500) - 4px breit
- **Text:** Aufgehelltes Analyse-Blau (#6b8a9a)
- **Analogie:** Wie ein Textabschnitt mit orangenem Marker am Rand markiert

**Links im Artikel:**

- **Standard:** Aufgehelltes Analyse-Blau (#6b8a9a)
- **Hover:** Glut-Orange (#ff4500)
- **Unterstreichung:** Nur bei Hover in Glut-Orange (#ff4500)

## DESIGN-KONSISTENZ REGELN

### Zwingend für ALLE Seiten:

1. Layout.astro als Basis verwenden
2. global.css importieren und anwenden
3. Farbpalette exakt einhalten
4. Keine Inline-Styles
5. Keine Animationen oder Übergänge
6. Einheitliche Abstände und Proportionen

## SIMON'S SCHATTIERUNGS-IDEE (Deine geniale Erkenntnis!)

**Deine Idee:** Dezente Schatten um alle Texte für bessere Lesbarkeit

- **Analogie:** Wie die sanften Schatten in einem gut beleuchteten Buchladen - der Text "springt" förmlich vom Hintergrund ab, ohne aufdringlich zu sein.
- **Praktischer Nutzen:** Auf dunklem Hintergrund bekommen helle Texte einen feinen dunklen Schatten, wie ein sanfter Heiligenschein.
- **Umsetzung:** Sehr subtil - fast unsichtbar, aber merkbar bessere Lesbarkeit.

### Was ab sofort VERBOTEN ist (Die Designsünden):

**Inline-Styles:** Direkte Style-Befehle im HTML-Code

- **Analogie:** Wie wenn du in jedem Zimmer die Wandfarbe einzeln auf die Wand schreibst, statt ein einheitliches Farbkonzept zu haben.

**Animationen jeder Art:** Bewegende Elemente

- **Analogie:** Wie unruhige, wackelnde Möbel - lenkt nur ab und macht nervös.

**Bewegungs-Effekte beim Darüberfahren**

- **Analogie:** Wie Möbel, die sich bewegen, wenn man sie berührt - störend und unprofessionell.

**Verlaufs-Farben:** Farbübergänge von einer Farbe zur anderen

- **Analogie:** Wie verwischte Wandfarbe - wir wollen klare, eindeutige Farben.

**Schatten-Effekte:** AUSNAHME: Nur deine dezenten Text-Schatten sind erlaubt!

**Verformungs-Eigenschaften:** Alles was Elemente vergrössert, dreht oder verzerrt

- **Analogie:** Wie Funkhausspigel - wir wollen, dass alles seine normale Form behält.

Das Design gilt auf der gesamten Website und muss als solches auch implementiert werden.

## FINALE FARB-STANDARDISIERUNG - NUR 3 FARBEN:

**Schriftfarbe von H1, H2, H3 und H4:** Standard Analyse-Blau (#4a6d7c)
**Schriftfarbe von Standard-Text:** Aufgehelltes Analyse-Blau (#6b8a9a) - GLEICHE FARBFAMILIE!
**Schriftfarbe von Links:** Aufgehelltes Analyse-Blau (#6b8a9a), Hover Glut-Orange (#ff4500)
**Schriftfarbe von Hervorhebungen:** Glut-Orange (#ff4500)
**Schriftfarbe auf Buttons:** Asphaltschwarz (#1a1d24) auf orangem Hintergrund, Analyse-Blau (#4a6d7c) auf transparentem Hintergrund

**ERFOLG:** Reine 3-Farben-Regel perfekt umgesetzt - professionell, lesbar, systematisch! 🎯
