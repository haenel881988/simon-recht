# Wichtige Informationen die die KI berücksichtigen muss:

Diese Instructions sind universell und global gültig.
Sollten Wiedersprüchlichkeiten gefunden werden, müssen diese umgehend von der KI durch diese Anweisung, in dieser Datei, überschrieben oder gelöscht werden.

Für jede einzelne Änderung am Code, an Dateien muss die KI folgende Tools verwenden.:

**Build-Checker**
Für Website-Spezifische Dinge muss die KI den Build-Checker und die Readme.md Datei verwenden der sich im folgenden Verzeichnis befindet:
tools\build_check
tools\build_check\README.md

Wichtig anzumerken ist, dass die Build-Performance / Zeit NICHT analysiert werden darf.
Generell gilt, lieber eine längere und saubere Build-Qualität, statt eine generische Performance-Optimierung.
Stösst die KI auf Wiedersprüchlichkeiten, innerhalb dem Projektes muss diese Wiedersprüchlichkeit gelöscht oder entsprechend dieser Anweisung korrigiert werden.
Die Anweisung, hier in diesem Dokument hat die höchste Priorität und ist restriktiv von der KI einzuhalten. Alle anderen Anweisungen, die sich in anderen potenziellen Dateien befinden können, sind von der KI automatisch zu erkennen und die jeweiligen Einträge eigenständig zu löschen oder – wenn nötig – zu überschreiben.

Wie genau der build-checker funktioniert, ist in diesem Verzeichnis dokumentiert: ".github\instructions\core\build_check"

Sollten die Dateien / Verzeichnisse (für die Modularisierung) und Dokumentationen noch nicht existieren, muss die KI zwangsweise das ganze entsprechend von der KI aufgearbeitet werden.
Aber Achtung: Keine Änderung, ohne manuelle Analyse durch die KI, kombiniert mit dem Analyse-Tool!!!

**Analyse-Tool:**
Verzeichnis: "tools\analyzer"
README.md: "tools\analyzer\README.md"
Archiv: "tools\analyzer\archiv"

Das Analyse-Tool ist für die Analyse vom gesamten Projekt verantwortlich und bietet umfassende Einblicke in die Code-Qualität, Struktur und potenzielle Probleme.

Dabei muss das Analyse-Tool eigenständig veraltete und nicht mehr gültige Analysen automatisch in das Archiv verschieben, bis auf die neueste Datei.

Wie genau das Analyse-Tool funktioniert ist in dem Verzeichnis dokumentiert.:".github\instructions\core\analyzer"

Sollten die Dateien / Verzeichnisse (für die Modularisierung) und Dokumentationen noch nicht existieren, muss die KI zwangsweise das ganze entsprechend von der KI aufgearbeitet werden.
Aber Achtung: Keine Änderung, ohne manuelle Analyse durch die KI, kombiniert mit dem Analyse-Tool!!!

**todos:**
Verzeichnis: "docs\todos"
Die einzigste Quelle der Wahrheit was die todos betrifft ist diese Datei: "docs\todos\todos.md"

Dabei gilt der Grundsatz: Wenn Probleme in der Struktur auftreten, treten auch Probleme automatisch in dem Content-First-Prinzip auf.
Layout-Probleme, CSS, Responsivität, falsche Verlinkungen, fehlende / nicht korrekte Inhalte etc.

Zuerst muss die Struktur der Website stabil sein. Es dürfen keinerlei tote links, leere Verzeichnisse, leere Dateien, redundante Inhalte etc. vorhanden sein.

Sollte die Todo-Liste länger als 1200 Zeilen lang sein, muss die KI mit der Modularisierung der todo-Liste beginnen. Dabei muss die KI erstmal im Verzeichnis der todo-liste ein neues unterverzeichnis evaluieren für eine strukturierung und modularisierung der todo-aufgaben.
Dabei wäre es evtl. sinnvoll, die unterverzeichnisse nach priorität zu gliedern und zu strukturieren.
Dabei pro Priorität, ein Verzeichnis innerhalb dem todo-verzeichnis.
Die KI muss zwingend folgenden Workflow für jeden neuen Chat einhalten:

- Backup in Form von git add und git commit
- git push
- Analyse- und buildchecker vollständig nacheinander ausführen
- Todo-Liste auf Basis der Erkenntnisse des analyse- und buildcheckers aktualisieren
- Dabei muss die Todo-Liste für jede einzelne Aufgabe folgendes Framework verwenden:
- [ ] Aufgabe: Beschreibung, SMART Analyse (einfach ohne Zeitangabe, da die KI keine Zeit braucht)
- [ ] Kontext: Relevante Informationen und Zusammenhänge
- [ ] Ressourcen: hoch detaillierter Prompt inkl. vollständigem kontext.
- [ ] Priorität: Hoch/Mittel/Niedrig --> entsprechend modularisieren und dem jeweiligen Prioritätsverzeichnis zuordnen
- [ ] Status: Offen/In Bearbeitung/Erledigt
- [ ] Verantwortlich: KI

# 🎯 SIMON-RECHT PROJEKT: KI-INSTRUCTIONS (MODULAR HUB)

❌ NIEMALS replace_string_in_file verwenden für Content

**Version:** 2.0 - Modularisiert  
**Letzte Aktualisierung:** 25.07.2025  
**Gesamt-Tokens:** ~5,000 (unter GitHub Copilot Limit)

---

## 📋 **INSTRUCTIONS-NAVIGATION (SCOPE-BASIERT):**

### 🧠 **CORE-SYSTEM:**

- **[📚 Internalisierungs-System](instructions/core/internalisierung.md)** - Regel-Verbesserung & Selbstkorrektur
- **[🚨 Anti-Prokrastinations-Protokoll](instructions/core/anti-prokrastination.md)** - Vermeidungsstrategien erkennen
- **[🏛️ Hierarchie & Konflikt-Auflösung](instructions/core/hierarchie.md)** - Regel-Prioritäten

Sollten die Dateien / Verzeichnisse (für die Modularisierung) und Dokumentationen noch nicht existieren, muss die KI zwangsweise das ganze entsprechend von der KI aufgearbeitet werden.
Aber Achtung: Keine Änderung, ohne manuelle Analyse durch die KI, kombiniert mit dem Analyse-Tool!!!

### 🛠️ **DEVELOPMENT-WORKFLOW:**

- **[🎨 CSS-Regeln & Design-System](instructions/development/css-regeln.md)** - 60/30/10+ System, Semantic Classes
- **[🚀 Astro-Workflow](instructions/development/astro-workflow.md)** - Build-Prozess, Component-Struktur
- **[🔧 Build-Checker Integration](instructions/development/build-prozess.md)** - Multi-Scope Validierung

Sollten die Dateien / Verzeichnisse (für die Modularisierung) und Dokumentationen noch nicht existieren, muss die KI zwangsweise das ganze entsprechend von der KI aufgearbeitet werden.
Aber Achtung: Keine Änderung, ohne manuelle Analyse durch die KI, kombiniert mit dem Analyse-Tool!!!

### 📄 **CONTENT & SEO:**

- **[✨ Authentizität & Simon's Stimme](instructions/content/authentizitaet.md)** - Content-Schutz, Original-Texte
- **[📈 SEO-Guidelines](instructions/content/seo-regeln.md)** - Organische Optimierung
- **[📝 Blog-Workflow](instructions/content/blog-workflow.md)** - Content-Erstellung

### 🔧 **PROJECT-MANAGEMENT:**

- **[🚨 Exception-System](instructions/project/exception-system.md)** - Fehlerbehandlung, Widerspruchs-Scanner
- **[📁 Datei-Operationen](instructions/project/datei-operationen.md)** - Backup, Search-Regeln, Integrität
- **[🎯 Scope-System](instructions/project/scope-system.md)** - Bereichs-Definitionen

---

## 🎯 **AKTUELLER PROJEKT-FOKUS:**

### **📋 HÖCHSTE PRIORITÄT (NICHT VERHANDELBAR):**

1. **CSS-Modularisierung:** Tailwind → Semantische Klassen
2. **Layout-Stabilität:** Keine Zerstörung durch Token-Overflow
3. **Instructions-Bereinigung:** Widersprüche eliminieren
4. **Website-Launch:** Ende Juli 2025

### **🚨 KRITISCHE REGELN (ALWAYS ACTIVE):**

- **SIMON'S DU-FORM:** Alle Kommunikation in Du-Form
- **LAYOUT-SCHUTZ:** Niemals ohne Backup/Validation ändern
- **TOKEN-MONITORING:** Bei >80% Context-Limit → Exception werfen
- **ANTI-PROKRASTINATION:** Tools nur wenn Website-blockierend

---

## 🛡️ **SICHERHEITS-PROTOKOLLE:**

### **🔴 VERBOTENE AKTIONEN:**

```
❌ CSS-Änderungen ohne Build-Checker-Validation
❌ File-Operations ohne Backup
❌ Search-Tools für Bulk-Operationen (ONLY manual analysis)
❌ Performance-Terminologie in Code/Comments
❌ Tool-Entwicklung während Website-Fokus
```

### **✅ ERLAUBTE AKTIONEN:**

```
✅ Scope-fokussierte Arbeit mit Tools-Unterstützung
✅ Manual file analysis with structured output
✅ Exception-werfen bei Unklarheit
✅ Modular instruction updates via internalization
✅ Layout-sichere CSS-Verbesserungen
```

---

## 🎯 **SIMON-RECHT SPEZIFIKA:**

### **📊 PROJEKT-EIGENSCHAFTEN:**

Diese Angaben in der Datei: ".github\copilot-instructions.md" sind global gültig. Findet die KI Wiedersprüche, oder noch falsche Angaben in anderen Instructions und / oder Dateien, sind diese durch die globalen Vorgaben zu ersetzen.
Die KI darf Simon niemals als Experte nennen, das ist dubios!
Es geht um den Leser, um den Besucher, um den Interessent / Lead.

- **Domain:** simon-haenel.com
- **Zielgruppe:** Menschen mit juristischen Fragen / Problemen die durch KI Klahrheit gewinnen und auf kostspielige Anwaltliche Unterstützung verzichten wollen.
- **Simon's Erfahrung:** Mithilfe KI, juristischer Erfolg durch positives Gerichtsurteil.
- **Slogan:** Mindset schlägt Grosskonzern
- **Content-Authentizität:** ZWINGEND Simon's echte Stimme bewahren
- **Marktrecherche:** docs\website_struktur\recherche\tiefen_recherche

Vorsicht, wenn die Recherchen, älter als 2 Monate alt sind, so muss die KI mir, dem User, Simon, bescheid geben um die recherchen zu aktualisieren.

### **🎨 DESIGN-SYSTEM:**

- **Farbschema:** 60/30/10+ Flex-System (asphaltschwarz, stormy-blue, accent-colors) --> Achtung: Evtl. Anpassbar, je nach Empfehlung der KI!
- **CSS-Architektur:** Semantische Klassen, KEINE Tailwind in Production
- **Responsive:** Mobile-First Prinzip, inkl. alle Darstellungen berücksichtigt, inkl. Desktop.

### **🚀 TECHNOLOGIE:**

- **Framework:** Astro.js (SSG)
- **Styling:** CSS Custom Properties + Semantic Classes
- **Build:** Zero-dependency `astro build` (Vercel-kompatibel)
- **Quality:** Multi-Scope Build-Checker für Validation

---

## 🔄 **WORKFLOW-INTEGRATION:**

### **📋 TODO-SYSTEM:**

- **Hauptliste:** `docs/todos/todos.md` (Anti-Verzettlungs-System)
- **Scope-Trennung:** Ein Chat pro Scope-Bereich
- **SMART-TODOs:** Spezifisch, Messbar, Terminiert

### **🔧 TOOLS-INTEGRATION:**

Diese Tools müssen hier in dieser Datei von der KI bei jedem neuen Chat geprüft werden, ob nicht weitere tools vorhanden sind, oder neue funktionen / Scopes etc.

- **Build-Checker:** `tools/build_check/multi-scope-checker.cjs`
- **Project-Analyzer:** `tools/analyzer/universal-project-analyzer.cjs`
- **Contradiction-Scanner:** `tools/analyzer/contradiction-scanner.cjs`

---

## 📞 **EMERGENCY-KONTAKTE:**

**BEI KRITISCHEN PROBLEMEN:**

1. **Token-Overflow:** Exception werfen, Scope reduzieren
2. **Layout-Zerstörung:** Sofort Backup wiederherstellen
3. **Instructions-Widerspruch:** Contradiction-Scanner ausführen
4. **Prokrastination-Erkennung:** Anti-Prokrastinations-Protokoll aktivieren

---

**💡 REMEMBER:** Diese Instructions sind **lebendig** - durch Internalisierung kontinuierlich verbessert!

**🎯 MAIN GOAL:** Authentische, professionelle Website für Simon's IT-Erfahrung-Sharing - OHNE Chaos!

## 🤖 AI Token Tracker Integration

### **WICHTIG: Token-Überwachung verwenden**

Die KI muss berücksichtigen, dass der Code nicht über 1200 Zeilen lang sein darf, ansonsten muss modularisiert werden.
Diese Regel ist global gültig. Sollten Widersprüche auftreten, und in anderen Dateien etwas anderes stehen, so muss die KI dies eigenständig erkennen, und die entsprechenden Dateien deren Inhalt gemäss der globalen Regel überschreiben.

### **Automatische Token-Optimierung:**

- Extension sendet automatisch Token-Updates an diesen Chat
- Bei kritischen Limits: Sofortiger Chat-Neustart empfohlen
- Scope-basierte Modularisierung verwenden

**Anleitung für optimale Token-Nutzung:**
📖 `.github/ai_token_tracker/token-tracker.md`

---

## 📁 **OPTIMIERTE .GITHUB VERZEICHNISSTRUKTUR:**

### **🗂️ ÜBERBLICK (AKTUELLER STAND):**

Die Inventarisierung findet in diesem Verzeichnis statt:
".github\instructions\inventarisierung"

Dabei muss die KI das gesamte Projekt, strukturell nach dem folgenden Beispiel dokumentieren:

```
.github/
├── 📄 copilot-instructions.md          # ✅ HAUPTFILE (Dreh- & Angelpunkt)
├── 📄 pull_request_template.md         # ✅ GitHub PR Template
├── 🔧 ai_token_tracker/                # ✅ Token-Überwachung
│   └── token-tracker.md                # Anleitung für Token-Limits
├── 📚 instructions/                    # ✅ Modularisierte Instructions
│   ├── 🧠 core/                        # Kern-System
│   │   ├── internalisierung.md         # ✅ AKTIV - Regel-Verbesserung
│   │   ├── validierungs-zwang.md       # ✅ AKTIV - Zwingender Workflow
│   │   └── fehleranalyse-zwang.md      # ✅ AKTIV - Root-Cause-Analysis
│   ├── 🛠️ development/                 # Development-Workflow
│   │   ├── css-regeln.md               # 📍 VERLINKT ABER FEHLT
│   │   ├── astro-workflow.md           # 📍 VERLINKT ABER FEHLT
│   │   └── build-prozess.md            # 📍 VERLINKT ABER FEHLT
│   ├── 📄 content/                     # Content & SEO
│   │   ├── authentizitaet.md           # ✅ AKTIV - Original-Text-Schutz
│   │   ├── seo-regeln.md               # 📍 VERLINKT ABER FEHLT
│   │   └── blog-workflow.md            # 📍 VERLINKT ABER FEHLT
│   ├── 🔧 project/                     # Project-Management
│   │   ├── exception-system.md         # ✅ AKTIV - Fehlerbehandlung
│   │   ├── datei-operationen.md        # 📍 VERLINKT ABER FEHLT
│   │   └── scope-system.md             # 📍 VERLINKT ABER FEHLT
│   ├── 🤖 coaching/                    # 📍 KOMPLETT FEHLENDES VERZEICHNIS
│   │   ├── produktivitaet.md           # 📍 VERLINKT ABER FEHLT
│   │   └── anti-konfusion.md           # 📍 VERLINKT ABER FEHLT
│   ├── 🏛️ organisation/                # ✅ EXISTIERT - Naming etc.
│   │   ├── README.md                   # ✅ AKTIV
│   │   ├── namenskonvention.md         # ✅ AKTIV
│   │   └── hook-training/              # ✅ AKTIV (3 Dateien)
│   ├── 📄 agent.md                     # ⚠️ LEGACY - Unklar ob aktiv
│   ├── 📄 anrede.md                    # ⚠️ LEGACY - Redundant zu core/
│   ├── 📄 settings.md                  # ⚠️ LEGACY - Unklar ob aktiv
│   └── 📄 original_content_management.md # ⚠️ LEGACY - Redundant zu content/
├── 📂 ISSUE_TEMPLATE/                  # ✅ GitHub Issue Templates
│   └── veraltete-datenanalyse.md       # ✅ AKTIV
├── 📂 prompts/                         # ✅ Prompt-Sammlung
│   └── beispiel-prompt.md              # ✅ AKTIV
└── 📂 workflows/                       # ✅ CI/CD Workflows
    └── tools/                          # ✅ AKTIV
        └── replace-regel/              # ✅ AKTIV
            └── replace_regel_v2_erweitert.md


Dabei ist anzumerken, dass noch die Zeilenangaben fehlen, die Tokenlänge etc um einen vollständigen Überblick über das Projekt zu erhalten.
```

### **🚨 SOFORT-PROBLEME IDENTIFIZIERT:**

Sämtliche Informationen ab dieser Zeile "Start Todos" bis "Ende Todos" gehören in die Todo-Liste

#### **❌ FEHLENDE VERLINKTE DATEIEN (6 Stück):**

1. `instructions/development/css-regeln.md`
2. `instructions/development/astro-workflow.md`
3. `instructions/development/build-prozess.md`
4. `instructions/content/seo-regeln.md`
5. `instructions/content/blog-workflow.md`
6. `instructions/project/datei-operationen.md`
7. `instructions/project/scope-system.md`

#### **📂 FEHLENDES VERZEICHNIS:**

- `instructions/coaching/` (komplett fehlt + 2 verlinkte Dateien)

#### **⚠️ LEGACY-DATEIEN (Redundant):**

- `instructions/agent.md` (Zweck unklar)
- `instructions/anrede.md` (Redundant zu core/)
- `instructions/settings.md` (Zweck unklar)
- `instructions/original_content_management.md` (Redundant zu content/)

### **🎯 SOFORT-AKTIONS-PLAN:**

#### **PHASE 1 - KRITISCHE LINK-REPARATUR:**

1. ✅ **Fehlende Dateien erstellen** (8 Stück)
2. ✅ **Fehlendes coaching/ Verzeichnis** erstellen
3. ✅ **Legacy-Dateien bewerten** und konsolidieren

#### **PHASE 2 - STRUKTUR-OPTIMIERUNG:**

1. ✅ **Redundanzen eliminieren** (4 Legacy-Dateien)
2. ✅ **Cross-Referenzen validieren**
3. ✅ **Relative Pfade korrigieren**

"Ende Todos"
