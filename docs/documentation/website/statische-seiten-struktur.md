# Generelles

Sämtliche Astro-Dateien müssen auf Basis von md-Dateien erzeugt werden. Wenn Astro Datei vorhanden, aber keine md-Datei, dann muss die KI eine aufbereitete md-Datei erstellen, damit ich, Simon, der User, potenzielle Anpassungen durchführen kann, damit die KI nur noch entweder bei statischen Seiten, die Astro Datei aktualisieren muss, oder vom Build Prozess aufgenommen und die Astro-Datei vom Build Prozess aktualisiert wird.

Ausgenommen aus der Regel ist die Blog-Index-Seite und natürlich die jeweiligen README.md-Dateien.
Die Blog-Index-Seite wird ohnehin vom build Prozess aktualisiert / generiert.
Die README.md ist auszuschliessen!

Das Styling der Seiten muss zwingend in der global-css.md Datei definiert werden und zwar in natürlicher Sprache. Hier geht es direkt zur global-css.md Datei.:
docs\website_struktur\website_design\global_css.md

# Verzeichnisstruktur md Dateien, statische und dynamische Seiten.

**Anweisung für die KI**

**_*Umgang mit statischen Seiten:*_**

Verzeichnisstruktur md Dateien:
docs\website_struktur\statische-seiten\static

Verzeichnisstruktur Astro Dateien:
src\pages

- Alle statischen Seiten gehören in das angegebene Verzeichnis.
- Alle statischen Seiten müssen zwingend von der KI manuell / von Hand in Astro-Dateien migriert werden.
  Wenn änderungen am statischen Inhalt gemacht wird, muss die KI immer die Astro-Datei anhand der jeweiligen md-Datei aktualisiert werden.

Folgende statische Seiten haben folgende Variablen um eine korrekte Zuweisung von md- zu astro zu garantieren.

Pfad md Startseiten Datei:
docs\website_struktur\statische-seiten\static\index.md
index.md --> index.astro

Pfad md ueber_mich.md Datei:
docs\website_struktur\statische-seiten\static\ueber_mich.md
ueber_mich.md --> ueber_mich.astro

**_*Umgang mit dynamischen Seiten:*_**

Alle dynamischen Seiten müssen vom Build Prozess in Astro-Dateien aktualisiert werden.

Generell gilt, die md-Dateien dürfen keine Codes besitzen, ausschliesslich natürliche Sprache.
Damit die Inhalte korrekt in die Astro-Dateien migriert werden können, müssen die md-Dateien entsprechend strukturiert sein.
Das ist ohnehin wichtig für SEO.

Verzeichnisstruktur der blog-Seiten im md Format:
docs\website_struktur\dynamische-seiten\blog

Verzeichnisstruktur der blog-Seiten im astro Format:
src\pages\blog

# Verzeichnisstruktur ASTRO Dateien, statische und dynamische Seiten.
