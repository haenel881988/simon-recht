# 🔍 WIDERSPRUCHS-SCANNER REPORT

**Generiert:** 2.8.2025, 14:02:14  
**Scanner-Version:** v1.0  
**Projekt:** simon-recht

## 📊 ZUSAMMENFASSUNG

| Kategorie | Anzahl | Schweregrad |
|-----------|---------|-------------|
| 🚨 Instructions-Widersprüche | 0 | HIGH |
| 🔢 Token-Warnungen | 0 | CRITICAL |
| 🔗 Ungültige Links | 4 | HIGH |
| 📄 Leere Dateien | 1 | MEDIUM |
| 📂 Pfad-Fehler | 20 | MEDIUM |

## 🎯 EMPFEHLUNGEN

### ⚠️ HIGH
Repariere 4 ungültige Links für Navigation

### 💡 MEDIUM
Bereinige 1 leere/redundante Dateien

## 🔍 DETAILIERTE ERGEBNISSE

### ⚔️ INSTRUCTIONS-WIDERSPRÜCHE
✅ Keine Widersprüche gefunden

### 🔢 TOKEN-WARNUNGEN
✅ Alle Dateien im Token-Limit

### 🔗 UNGÜLTIGE LINKS
- `C:\apps\website\simon-recht\docs\documentation\technical\styles-system.md` (Zeile 180): Link zu `glossar.md` nicht gefunden
    → `**Alle englischen/technischen Begriffe sind detailliert erklärt in:** → **[📖 glossar.md](glossar.md)**`
- `C:\apps\website\simon-recht\docs\website_struktur\statische-seiten\static\index.md` (Zeile 55): Link zu `/blog/mindset-gegen-grosskonzern` nicht gefunden
    → `**[→ Wie Mindset Großkonzerne schlägt - Meine komplette Geschichte](/blog/mindset-gegen-grosskonzern)**`
- `C:\apps\website\simon-recht\docs\website_struktur\statische-seiten\static\index.md` (Zeile 55): Link zu `/blog/mindset-gegen-grosskonzern` nicht gefunden
    → `**[→ Wie Mindset Großkonzerne schlägt - Meine komplette Geschichte](/blog/mindset-gegen-grosskonzern)**`
- `C:\apps\website\simon-recht\src\content\pages\index.md` (Zeile 399): Link zu `/blog/mindset-gegen-grosskonzern` nicht gefunden
    → `### **[Mindset schlägt Großkonzern - Die komplette Geschichte](/blog/mindset-gegen-grosskonzern)**`

### 📄 LEERE/REDUNDANTE DATEIEN
- `C:\apps\website\simon-recht\src\styles\README.md`: EMPTY (0 Bytes)
    → `[DATEI LEER]`

### 📂 PFAD-REFERENZ-FEHLER
- `C:\apps\website\simon-recht\docs\documentation\technical\analyzer-tools.md` (Zeile 186): Referenz zu `tools/analyzer/projekt-analyse-YYYY-MM-DD-HH-MM-SS.md` ungültig
    → `tools/analyzer/projekt-analyse-YYYY-MM-DD-HH-MM-SS.md`
- `C:\apps\website\simon-recht\docs\todos\struktur-migration-plan.md` (Zeile 35): Referenz zu `docs/archive/auto-cleanup-2025-07-25` ungültig
    → `# New-Item -ItemType Directory -Path "docs/archive/auto-cleanup-2025-07-25" -Force`
- `C:\apps\website\simon-recht\docs\todos\struktur-migration-plan.md` (Zeile 38): Referenz zu `docs/archive/auto-cleanup-2025-07-25/` ungültig
    → `# Move-Item "docs\01_PLAYBOOK_CONTENT\_altes_chaos_archiv\*" "docs/archive/auto-cleanup-2025-07-25/"`
- `C:\apps\website\simon-recht\docs\todos\struktur-migration-plan.md` (Zeile 38): Referenz zu `docs/archive/auto-cleanup-2025-07-25/` ungültig
    → `# Move-Item "docs\01_PLAYBOOK_CONTENT\_altes_chaos_archiv\*" "docs/archive/auto-cleanup-2025-07-25/"`
- `C:\apps\website\simon-recht\docs\todos\struktur-migration-plan.md` (Zeile 35): Referenz zu `docs/archive/` ungültig
    → `# New-Item -ItemType Directory -Path "docs/archive/auto-cleanup-2025-07-25" -Force`
- `C:\apps\website\simon-recht\docs\todos\todos.md` (Zeile 281): Referenz zu `tools/analyzer/universal-project-analyzer.cjs.` ungültig
    → `- [ ] **Prompt:** "Öffne tools/analyzer/universal-project-analyzer.cjs. Füge Zeilen-Zählung pro Datei hinzu. Implementiere Warnung bei >1200 Zeilen. Schlage Auto-Modularisierung vor. Teste mit großen Dateien und validiere Ausgabe."`
- `C:\apps\website\simon-recht\docs\todos\todos.md` (Zeile 290): Referenz zu `tools/analyzer/structure-optimizer-v2.cjs` ungültig
    → `- [ ] **Prompt:** "Prüfe ob tools/analyzer/structure-optimizer-v2.cjs existiert. Falls ja: erweitere um Auto-Modularisierung bei >1200 Zeilen. Falls nein: erstelle Basis-Implementierung für Datei-Struktur-Optimierung."`
- `C:\apps\website\simon-recht\docs\todos\todos.md` (Zeile 299): Referenz zu `tools/analyzer/contradiction-scanner.cjs.` ungültig
    → `- [ ] **Prompt:** "Öffne tools/analyzer/contradiction-scanner.cjs. Füge Funktion hinzu die alle Dateien auf >1200 Zeilen prüft. Warne bei Überschreitung. Integriere in bestehende Widerspruchs-Reports."`
- `C:\apps\website\simon-recht\docs\todos\todos.md` (Zeile 450): Referenz zu `docs/lessons-learned/` ungültig
    → `4. **Lesson Learned:** Dokumentation in docs/lessons-learned/`
- `C:\apps\website\simon-recht\docs\todos\todos.md` (Zeile 464): Referenz zu `docs/ideen/` ungültig
    → `- **Veraltete Instructions:** Falsche Pfadangaben (docs/ideen/ existiert nicht)`
- `C:\apps\website\simon-recht\docs\todos\todos.md` (Zeile 490): Referenz zu `docs/projekt/` ungültig
    → `- [ ] Instructions-Pfade-Konflikte (docs/projekt/ existiert nicht)`
- `C:\apps\website\simon-recht\docs\todos\verhaltensmuster\vollstaendige_analyse_backup.md` (Zeile 19): Referenz zu `docs/ideen/` ungültig
    → `- **Veraltete und widersprüchliche Instruction-Dateien:** Die bestehenden KI-Anweisungen im Projekt waren zum Teil **nicht mehr aktuell** und enthielten **Konflikte**. So verwiesen die Instructions auf Verzeichnisse wie `docs/ideen/`, `docs/fails_learnings/` oder `docs/authentizitaet/`, **die im Projekt längst nicht mehr existieren**. Gleichzeitig lagen die entsprechenden Inhalte in einem Archivpfad (`01_PLAYBOOK_CONTENT/_altes_chaos_archiv/...`), was zu extremer **Pfad-Verwirrung** führte. Darüber hinaus gab es **regelrechte Widersprüche** innerhalb der Anleitungstexte – z.B. bzgl. Dateioperationen (_„nie neue Datei erstellen“_ vs. _„Neue Dateien für neue Funktionen erlaubt“_) oder der Sprachrichtlinie (teils englische Begriffe trotz Vorgabe _„alle Instructions auf Deutsch“_). Solche inkonsistenten Vorgaben konnten von Copilot Chat nicht einheitlich befolgt werden. Im besten Fall ignorierte das Modell manche widersprüchlichen Teile; im schlimmsten Fall folgte es den falschen (veralteten) Anweisungen. Copilot selbst erkannte später kritisch, dass die **Instructions “total veraltet und widersprüchlich”** waren – ein Hauptgrund, warum es zunächst falsche Annahmen traf.`
- `C:\apps\website\simon-recht\docs\todos\verhaltensmuster\vollstaendige_analyse_backup.md` (Zeile 19): Referenz zu `docs/fails_learnings/` ungültig
    → `- **Veraltete und widersprüchliche Instruction-Dateien:** Die bestehenden KI-Anweisungen im Projekt waren zum Teil **nicht mehr aktuell** und enthielten **Konflikte**. So verwiesen die Instructions auf Verzeichnisse wie `docs/ideen/`, `docs/fails_learnings/` oder `docs/authentizitaet/`, **die im Projekt längst nicht mehr existieren**. Gleichzeitig lagen die entsprechenden Inhalte in einem Archivpfad (`01_PLAYBOOK_CONTENT/_altes_chaos_archiv/...`), was zu extremer **Pfad-Verwirrung** führte. Darüber hinaus gab es **regelrechte Widersprüche** innerhalb der Anleitungstexte – z.B. bzgl. Dateioperationen (_„nie neue Datei erstellen“_ vs. _„Neue Dateien für neue Funktionen erlaubt“_) oder der Sprachrichtlinie (teils englische Begriffe trotz Vorgabe _„alle Instructions auf Deutsch“_). Solche inkonsistenten Vorgaben konnten von Copilot Chat nicht einheitlich befolgt werden. Im besten Fall ignorierte das Modell manche widersprüchlichen Teile; im schlimmsten Fall folgte es den falschen (veralteten) Anweisungen. Copilot selbst erkannte später kritisch, dass die **Instructions “total veraltet und widersprüchlich”** waren – ein Hauptgrund, warum es zunächst falsche Annahmen traf.`
- `C:\apps\website\simon-recht\docs\todos\verhaltensmuster\vollstaendige_analyse_backup.md` (Zeile 19): Referenz zu `docs/authentizitaet/` ungültig
    → `- **Veraltete und widersprüchliche Instruction-Dateien:** Die bestehenden KI-Anweisungen im Projekt waren zum Teil **nicht mehr aktuell** und enthielten **Konflikte**. So verwiesen die Instructions auf Verzeichnisse wie `docs/ideen/`, `docs/fails_learnings/` oder `docs/authentizitaet/`, **die im Projekt längst nicht mehr existieren**. Gleichzeitig lagen die entsprechenden Inhalte in einem Archivpfad (`01_PLAYBOOK_CONTENT/_altes_chaos_archiv/...`), was zu extremer **Pfad-Verwirrung** führte. Darüber hinaus gab es **regelrechte Widersprüche** innerhalb der Anleitungstexte – z.B. bzgl. Dateioperationen (_„nie neue Datei erstellen“_ vs. _„Neue Dateien für neue Funktionen erlaubt“_) oder der Sprachrichtlinie (teils englische Begriffe trotz Vorgabe _„alle Instructions auf Deutsch“_). Solche inkonsistenten Vorgaben konnten von Copilot Chat nicht einheitlich befolgt werden. Im besten Fall ignorierte das Modell manche widersprüchlichen Teile; im schlimmsten Fall folgte es den falschen (veralteten) Anweisungen. Copilot selbst erkannte später kritisch, dass die **Instructions “total veraltet und widersprüchlich”** waren – ein Hauptgrund, warum es zunächst falsche Annahmen traf.`
- `C:\apps\website\simon-recht\docs\todos\verhaltensmuster\vollstaendige_analyse_backup.md` (Zeile 23): Referenz zu `.github/instructions/agent.md` ungültig
    → `- **Unvollständige Kontext-Injektion durch VS Code-Einstellungen:** In der `.vscode/settings.json` war zwar konfiguriert, projektbezogene Anweisungsdateien in den Chat-Kontext zu laden, allerdings **nicht alle**. Laut Einstellung wurden z.B. `.github/instructions/agent.md`, `anrede.md`, `settings.md` und `original_content_management.md` vorab eingebunden. Wichtige Dateien wie `namenskonvention.md` oder die allgemeinen Verhaltensregeln (`generelles.md` bzw. das Hook-Training README) fehlten jedoch in dieser Liste. Das bedeutet: Copilot hatte zu Beginn keinen Zugang zu manchen Richtlinien, insbesondere jener, die das **„Hook-Training-Paradoxon“** klärt (dass _“radikal” aufs Verhalten statt aufs Wording zielt_). Diese Lücke in der Template-Konfiguration kann erklären, warum Copilot Chat anfangs z.B. das Wort _„radikal“_ im Output nutzte, anstatt nur radikal ehrlich **zu handeln** – die entsprechende Anweisung war ihm ggf. nicht bekannt, bis der Nutzer es ausdrücklich auf alle Instructions stieß. Insgesamt zeigt dies, wie **unvollständiger Kontext** seitens der Entwicklungsumgebung die KI-Compliance beeinträchtigt hat.`
- `C:\apps\website\simon-recht\docs\todos\verhaltensmuster\vollstaendige_analyse_backup.md` (Zeile 19): Referenz zu `docs/ideen/` ungültig
    → `- **Veraltete und widersprüchliche Instruction-Dateien:** Die bestehenden KI-Anweisungen im Projekt waren zum Teil **nicht mehr aktuell** und enthielten **Konflikte**. So verwiesen die Instructions auf Verzeichnisse wie `docs/ideen/`, `docs/fails_learnings/` oder `docs/authentizitaet/`, **die im Projekt längst nicht mehr existieren**. Gleichzeitig lagen die entsprechenden Inhalte in einem Archivpfad (`01_PLAYBOOK_CONTENT/_altes_chaos_archiv/...`), was zu extremer **Pfad-Verwirrung** führte. Darüber hinaus gab es **regelrechte Widersprüche** innerhalb der Anleitungstexte – z.B. bzgl. Dateioperationen (_„nie neue Datei erstellen“_ vs. _„Neue Dateien für neue Funktionen erlaubt“_) oder der Sprachrichtlinie (teils englische Begriffe trotz Vorgabe _„alle Instructions auf Deutsch“_). Solche inkonsistenten Vorgaben konnten von Copilot Chat nicht einheitlich befolgt werden. Im besten Fall ignorierte das Modell manche widersprüchlichen Teile; im schlimmsten Fall folgte es den falschen (veralteten) Anweisungen. Copilot selbst erkannte später kritisch, dass die **Instructions “total veraltet und widersprüchlich”** waren – ein Hauptgrund, warum es zunächst falsche Annahmen traf.`
- `C:\apps\website\simon-recht\docs\todos\verhaltensmuster\vollstaendige_analyse_backup.md` (Zeile 51): Referenz zu `docs/…` ungültig
    → `**1. Instructions-Fundament bereinigen (Kurzfristig):** _Sofort_ alle bekannten Fehler in den Anleitungen korrigieren. Dazu gehört: falsche Pfade updaten (z.B. Verweise von `docs/…` auf das richtige Verzeichnis richten), Widersprüche wie jene zur Dateierstellung oder Sprache auflösen (ggf. durch Streichung einer der beiden kollidierenden Regeln), und redundante Regeln entfernen. Anschließend die überarbeitete `.github/copilot-instructions.md` sowie zugehörige Files versionieren (Backup der alten Fassung liegt ja vor). Diese Bereinigung hat oberste Priorität, da ein sauberes Regelwerk die Grundlage für alle weiteren Verbesserungen ist.`
- `C:\apps\website\simon-recht\docs\website_struktur\recherche\tiefen_recherche\ph02_SEO- und Content-Strategie DACH_.md` (Zeile 369): Referenz zu `tools/keyword-research/` ungültig
    → `15. 11 beste Keyword-Recherche-Tools für SEO im Jahr 2025, Zugriff am Juli 12, 2025, https://www.seo.com/de/tools/keyword-research/`
- `C:\apps\website\simon-recht\tools\build_check\logfiles\build-checker-2025-07-21T11-11-45-682Z.md` (Zeile 12591): Referenz zu `docs/00_core_aktiv/aenderungsprotokoll.md` ungültig
    → `4. **AAR DOKUMENTATION:** Alle Änderungen in `docs/00_core_aktiv/aenderungsprotokoll.md``
- `C:\apps\website\simon-recht\tools\build_check\logfiles\build-checker-2025-07-21T11-11-45-682Z.md` (Zeile 12719): Referenz zu `docs/015_build_logs/seo_messungs_dateien/KEYWORD-EXPANSION-VORSCHLAEGE.md` ungültig
    → `git add docs/015_build_logs/seo_messungs_dateien/KEYWORD-EXPANSION-VORSCHLAEGE.md && git commit -m "Add: Data-driven keyword expansion recommendations"`

---
*Report generiert durch Simon's Widerspruchs-Scanner v1.0*
