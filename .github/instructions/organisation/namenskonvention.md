Hier werden die organisatorischen Anweisungen und Namenskonventionen für das Projekt dokumentiert. Die KI muss diese Datei automatisch aktualisieren und sicherstellen, dass alle neuen Dateien und Verzeichnisse den festgelegten Konventionen entsprechen.
Die KI muss darauf achten, dass alle Dateien und Verzeichnisse logisch und sinnvoll sortiert und abgelegt werden. Dabei muss die KI auch darauf achten, dass die Dateien und Verzeichnisse so benannt werden, dass sie selbsterklärend sind und den Inhalt der Datei oder des Verzeichnisses widerspiegeln.

**Inventar-Liste**
Zielort: C:\apps\website\simon-recht\.github\instructions\organisation\inventar
Die KI muss eine vollständige Invetar-Liste führen, inkl. allen Dateien, Verzeichnissen, Skripten, Tools, Workflows etc. die im Projekt vorhanden sind.
Die KI muss dieses Verzeichnis automatisch aktualisieren, wenn neue Dateien, Verzeichnisse, Skripte etc. im Projekt angelegt werden.
Ausgeschlossene Dateien:
 - Alle nativen Installationsdateien die vom Hersteller / Entwickler wie Astro, Tailwind etc. bereitgestellt werden.
 - Alle nativen Konfigurationsdateien die vom Hersteller / Entwickler wie Astro, Tailwind etc. bereitgestellt werden.
 - Alle nativen Skripte, Tools, Workflows die vom Hersteller / Entwickler wie Astro, Tailwind etc. bereitgestellt werden.
 - Alle nativen Readmes, Anleitungen, Dokumentationen die vom Hersteller / Entwickler wie Astro, Tailwind etc. bereitgestellt werden.

## 📂 **Verzeichnisstruktur**

Aktuell liegen die Verzeichnissestruktur innerhalb von docs ohne eine klare Struktur vor, auch wurden bereits interne Verlinkungen, also innerhalb der Instructions, Readmes etc. angelegt.
Wenn die KI auch nur eine Änderung an bereits vorhandenen Dateien und Verzeichnissen / Unterverzeichnissen vornimmt, muss die KI ZWINGEND die gesamte Instructions- und Readme-Kette entsprechend prüfen und anpassen, damit die gesamte Struktur konsistent bleibt.

## 📂 **Verzeichnis-Konventionen**

### **Allgemeine Verzeichnisregeln**
- **Sprache:** Durchgängig deutsch
- **Schreibweise:** Nur Kleinbuchstaben
- **Trennung:** Unterstriche `_` für zusammengesetzte Begriffe
- **Struktur:** Logische Gruppierung nach Zweck/Funktion
- **Tiefe:** Maximal 4 Ebenen tief (für bessere Übersicht)

### **Standard-Verzeichnisstruktur**

**.github/**
```
.github/
├── anleitungen/           # KI-Instructions und Dokumentation
├── organisation/          # Projekt-Organisation und Konventionen
├── vorlagen/             # Templates und Beispiele
└── workflows/            # GitHub Actions (falls verwendet)
```

**docs/**
```
docs/
├── projekt/
│   ├── konzept/          # Alle Konzeptdateien
│   ├── medien/           # Bilder, Videos, etc.
│   ├── rechtliche_dokumente/
│   ├── recherche/        # Grund- und Tiefenrecherche
│   ├── struktur_website/ # Website-Struktur
│   └── chats/           # Chat-Protokolle und Kommunikation
├── ideen/               # Ideensammlung und Brainstorming
└── fails_learnings/     # Fehleranalyse und Lernerfahrungen
```

**src/** (falls Code-Projekt)
```
src/
├── komponenten/         # Wiederverwendbare UI-Komponenten
├── seiten/             # Website-Seiten
├── stile/              # CSS/SCSS Dateien
├── skripte/            # JavaScript/TypeScript Dateien
└── assets/             # Statische Dateien (Bilder, Fonts, etc.)
```

## 🔄 **Automatische Aktualisierung**

**KI-Pflichten:**
1. **Konsistenz-Prüfung:** Bei jeder Dateierstellung/Umbenennung Konventionen prüfen
2. **Inventar-Update:** Automatische Aktualisierung der Inventar-Liste
3. **Link-Prüfung:** Alle internen Verlinkungen bei Strukturänderungen anpassen
4. **README-Update:** Entsprechende README-Dateien bei Änderungen aktualisieren

## 🚫 **Ausnahmen und Sonderfälle**

**Beibehalten (nicht ändern):**
- Native Framework-Dateien (Astro, Tailwind, etc.)
- `package.json`, `node_modules/`
- `.git/`, `.gitignore`
- Hersteller-Dokumentation

**Sonderbehandlung:**
- `README.md` - immer Großschreibung
- Datum in Dateinamen: `YYYY-MM-DD` Format
- Versionsnummern: `v1_0_0` Format

## ✅ **Compliance-Checkliste**

Vor jeder Datei-/Verzeichniserstellung prüfen:
- [ ] Name ist deutsch und selbsterklärend
- [ ] Kleinschreibung verwendet
- [ ] Unterstriche statt Bindestriche
- [ ] Logische Verzeichnisstruktur eingehalten
- [ ] Keine Redundanz zu bestehenden Dateien
- [ ] Inventar-Liste wird aktualisiert
- [ ] Betroffene README-Dateien werden angepasst

## 📄 **Dateinamen-Konventionen**

### **Allgemeine Regeln**
- **Sprache:** Durchgängig deutsch (keine englischen Begriffe mischen)
- **Schreibweise:** Nur Kleinbuchstaben
- **Trennung:** Unterstriche `_` statt Bindestriche `-`
- **Datum:** Format `YYYY-MM-DD` für Datumsangaben
- **Selbsterklärend:** Name muss Zweck/Inhalt der Datei klar beschreiben

### **Spezifische Dateikonventionen**

**JavaScript-Dateien:**
```
zweck_methode_YYYY-MM-DD.js
```
Beispiele:
- `convert_to_webp_2025-07-12.js`
- `gallery_slideshow_2025-07-12.js`
- `contact_form_validation_2025-07-12.js`

**Markdown-Dokumentation:**
```
zweck_beschreibung.md
```
Beispiele:
- `namenskonvention.md`
- `projekt_konzept.md`
- `design_richtlinien.md`

**Bilder/Medien:**
```
person_kontext_stimmung.webp
zweck_beschreibung.webp
```
Beispiele:
- `simon_haenel_natur_froehlich.webp`
- `simon_haenel_buero_professionell.webp`
- `logo_firma_dunkel.webp`

**README-Dateien:**
```
README.md (immer Großschreibung für README)
```

**Konfigurationsdateien:**
```
zweck_konfiguration.json
zweck_einstellungen.yml
```
Beispiele:
- `build_konfiguration.json`
- `deployment_einstellungen.yml`

**Archiv-Dateien:**
```
original_zweck_YYYY-MM-DD.ext
```
Beispiele:
- `original_fallbeispiel_2025-07-12.md`
- `backup_datenbank_2025-07-12.sql`






