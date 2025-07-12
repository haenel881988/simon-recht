# 🗄️ Original-Content Management

## Zweck
Das `00_origin` Verzeichnis dient zur Archivierung und Versionierung aller Original-Inhalte, bevor sie bearbeitet, strukturiert oder optimiert werden.

## Anweisungen für die KI

### Grundregeln
1. **IMMER vor Bearbeitung**: Jeder Original-Text wird hier mit Zeitstempel archiviert
2. **Namenskonvention**: `{content-name}_original_{YYYY-MM-DD}.md`
3. **Vollständige Metadaten**: Datum, Autor, Quelle, Status, Wortanzahl
4. **Unveränderlichkeit**: Original-Dateien werden NIEMALS überschrieben

### Workflow
1. Original-Content in `00_origin` archivieren
2. Bearbeitete Version in entsprechendem Zielverzeichnis erstellen
3. Verweis zwischen Original und bearbeiteter Version
4. Versionierung bei größeren Änderungen

### Metadaten-Template
```markdown
**Datum:** {YYYY-MM-DD}
**Erstellt von:** {Author}
**Status:** Original-Version, unbearbeitet
**Quelle:** {source-path}
**Wortanzahl:** {word-count}
**Kernbotschaft:** {key-message}
```

### Verzeichnisstruktur
```
00_origin/
├── fallbeispiel_story_original_2025-07-12.md
├── website_texte_original_2025-07-XX.md
├── marketing_content_original_2025-07-XX.md
└── README.md (diese Datei)
```

## Automatische Verwaltung
Die KI übernimmt eigenständig:
- Archivierung bei Content-Erstellung/-Bearbeitung
- Metadaten-Pflege
- Versionierung
- Verlinkung zwischen Original und bearbeiteten Versionen

---
**Letztes Update:** 12.07.2025 durch KI
