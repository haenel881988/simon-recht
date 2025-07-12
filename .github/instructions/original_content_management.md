# Original-Content Management & Archivierung

## Zweck und Philosophie
Original-Inhalte sind das wertvollste Asset eines Projekts. Sie enthalten die authentische Stimme, den ursprünglichen Gedankenfluss und die rohe Kreativität des Autors. Diese Anweisung gewährleistet, dass kein Original-Content verloren geht.

## Verpflichtende Anweisungen für die KI

### 1. Automatische Archivierung
Die KI MUSS vor jeder Bearbeitung, Strukturierung oder Optimierung von Content:
- Den Original-Text vollständig in `docs/projekt/00_origin/` archivieren
- Eindeutige Namenskonvention verwenden: `{content-name}_original_{YYYY-MM-DD}.md`
- Vollständige Metadaten hinzufügen

### 2. Metadaten-Pflicht
Jede Original-Datei MUSS folgende Metadaten enthalten:
```markdown
**Datum:** {YYYY-MM-DD}
**Erstellt von:** {Author}
**Status:** Original-Version, unbearbeitet
**Quelle:** {source-path}
**Wortanzahl:** {word-count}
**Kernbotschaft:** {key-message}
**Stil-Charakteristika:** {authentic-voice-traits}
```

### 3. Unveränderlichkeit
- Original-Dateien werden NIEMALS überschrieben oder gelöscht
- Bei neuen Versionen wird eine neue Original-Datei mit neuem Datum erstellt
- Jede Bearbeitung verweist auf die entsprechende Original-Datei

### 4. Bidirektionale Verlinkung
Die KI MUSS in jeder bearbeiteten Version einen Verweis zum Original erstellen:
```markdown
<!-- Original archiviert in: docs/projekt/00_origin/{filename} -->
<!-- Bearbeitet am: {date} -->
```

### 5. Authentizitäts-Extraktion
Bei der Archivierung MUSS die KI:
- Charakteristische Wortwendungen extrahieren
- Stilistische Besonderheiten dokumentieren
- Kernbotschaften identifizieren
- Diese in `docs/authentizitaet/` für zukünftige Verwendung speichern

### 6. Workflow-Integration
Der Original-Content-Workflow ist in JEDEN Content-Bearbeitungsprozess zu integrieren:
1. **Empfangen** → Sofortige Archivierung in `00_origin`
2. **Analysieren** → Metadaten und Stil-Extraktion
3. **Bearbeiten** → Mit Verweis auf Original
4. **Dokumentieren** → Änderungen und Begründung

## Verzeichnisstruktur
```
docs/projekt/00_origin/
├── README.md (diese Anweisung)
├── {content-name}_original_{YYYY-MM-DD}.md
├── {content-name}_original_{YYYY-MM-DD}_v2.md
└── archive/
    └── {older-versions}/
```

## Qualitätssicherung
Die KI führt regelmäßig (alle 20 Arbeitsschritte) einen Check durch:
- Sind alle Original-Inhalte archiviert?
- Sind alle Metadaten vollständig?
- Existieren alle bidirektionalen Verweise?
- Ist die Namenskonvention eingehalten?

## Ausnahmen
Es gibt KEINE Ausnahmen. Jeder Content, der bearbeitet wird, MUSS vorher archiviert werden.

---
**Erstellt:** 12.07.2025
**Status:** Verpflichtende Anweisung
**Gültigkeit:** Dauerhaft
