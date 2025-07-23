# 🎯 SIMON-RECHT TODO-LISTE - ANTI-VERZETTLUNGS-SYSTEM

**Letzte Aktualisierung:** 23.07.2025  
**Status:** Multi-Scope-Management mit Chat-Trennung

---

## 🚨 **AKTUELLE MULTI-SCOPE-ANFRAGE (Chat: 23.07.2025)**

### **ERKANNTE BEREICHE:**

1. **DESIGN/LAYOUT:** Header und Navigation (HAUPTFOKUS)
2. **INSTRUCTIONS:** Multi-Scope-Exception-System
3. **WORKFLOW:** TODO-basierte Scope-Trennung
4. **ORGANISATION:** Chat pro Thema-System

### **EMPFOHLENE CHAT-AUFTEILUNG:**

#### **📋 NÄCHSTER CHAT: NAVIGATION-KONTRAST-OPTIMIERUNG - FORENSISCHE SCREENSHOT-ANALYSE**

```
SIMON'S FORENSISCHER NAVIGATION-KONTRAST-PROMPT:

"Hallo! Navigation-Kontrast-Optimierung basierend auf forensischer Screenshot-Analyse mit Build-Checker-Diskrepanz-Validierung.

=== FORENSISCHE SCREENSHOT-ANALYSE ===
VISUELLER BEFUND:
- Header: Sehr dunkler Hintergrund (#1a1d24) - Asphaltschwarz
- Navigation-Links: 'Startseite', 'Über mich', 'Blog', 'Kontakt' in grau-bläulicher Farbe
- KONTRAST-PROBLEM ERKANNT: Navigation erscheint MATT und SCHWACH lesbar
- Links sind grenzwertig erkennbar gegen den sehr dunklen Hintergrund
- Visuell suboptimale Lesbarkeit trotz professioneller Optik

=== BUILD-CHECKER-LOG-TECHNICAL-DATA ===
TECHNISCHE MESSUNGEN (simon-build-checker-v4-2025-07-23T07-25-08-738Z.md):
- Navigation-Kontrast: #6b8a9a auf #1a1d24 = 4.60:1
- Status: Technisch AA-konform (≥4.5:1) aber grenzwertig
- Health Score: 17/100 (Optimierung dringend erforderlich)

=== SCREENSHOT vs. LOG DISKREPANZ ===
KRITISCHE ERKENNTNIS:
- TECHNICAL: 4.60:1 = "offiziell bestanden"
- VISUAL: Screenshot zeigt schwache, matte Navigation-Lesbarkeit
- PROBLEM: 4.60:1 ist zu niedrig für optimale User Experience

=== KONTRAST-OPTIMIERUNGS-AUFGABE ===
ZIEL: Navigation von 4.60:1 auf 6.0:1+ verbessern
1. Navigation-Farbe aufhellen (aktuell #6b8a9a → heller)
2. Hintergrund-Farbe beibehalten (#1a1d24)
3. Hover-States für bessere Interaktivität
4. Mindest-Ziel: 6.0:1 Kontrast (robuste AA-Compliance)
5. Optimal-Ziel: 7.0:1+ (AAA-Standard anstreben)

SCOPE: DESIGN/ACCESSIBILITY - Navigation-Kontrast-Verbesserung"
```

3. CHECKER-VERBESSERUNG: Falls weitere Diskrepanzen → Checker für Navigation-Scope verbessern
4. HEALTH-SCORE-STEIGERUNG: Von 17/100 auf >80/100

=== EXPECTED WORKFLOW ===

1. Screenshot analysieren → Icons/Symbole identifizieren
2. global.css öffnen → Rote X-Symbol-Farbe korrigieren (#ff0000 → helleres Rot >4.5:1)
3. index.astro + disclaimer.astro → Icon-Klassen prüfen
4. Build testen → Health Score validieren
5. Bei Diskrepanzen → Checker für Navigation-Scope dokumentieren/verbessern

SCOPE: Nur Kontrast-Fixes für Icons/Symbole - Navigation-Layout bleibt unverändert.
START: Sofort mit Kontrast-Korrektur der roten X-Symbole."

```

#### **📋 ZUKÜNFTIGER CHAT: INSTRUCTIONS-VERBESSERUNG**

```

SIMON'S SMART-PROMPT:

"Lass uns das Anti-Verzettlungs-System in die Instructions einbauen.

KONTEXT: Ich neige dazu, mehrere Bereiche gleichzeitig zu nennen, was zu Verzettelung führt.

ZIEL: Exception-System für Multi-Scope-Anfragen mit automatischer TODO-Generierung.

SCOPE: Nur Instructions-Optimierung."

```

---

## **🔥 SOFORTIGE PRIORITÄT - CSS-ARCHITEKTUR**

### **📋 PHASE 1: DESIGN-DOKUMENTATION VERVOLLSTÄNDIGEN**

#### **TODO #001: UI-Komponenten-Bestandsaufnahme** ✅ ABGESCHLOSSEN

- **Ziel:** Vollständige Analyse aller verwendeten UI-Elemente in Astro-Dateien
- **Scope:** 7 Astro-Dateien analysiert (beweise.astro, datenschutz.astro, disclaimer.astro, impressum.astro, index.astro, blog/index.astro, blog/[slug].astro, urteil.astro)
- **Deliverable:** Strukturierte Liste aller Navigation-, Content-, Card-, Button-Patterns ✅
- **Ergebnis:** 100+ Tailwind-Klassen dokumentiert, Migration-Prioritäten definiert
- **Status:** ✅ ABGESCHLOSSEN (2025-01-18)
- **Details:** Siehe `docs/todos/todo_001_ui_komponenten_bestandsaufnahme.md`

#### **TODO #002: global_css.md systematisch erweitern** 📝

- **Ziel:** ALLE erkannten UI-Patterns in natürlicher Sprache dokumentieren
- **Input:** Ergebnisse aus TODO #001
- **Focus:** Navigation, Hero-Sections, Content-Bereiche, Cards, Formulare
- **60/30/10 Integration:** Jedes Element muss Farbschema-Zuordnung haben
- **Status:** VORBEREITET
- **Dependencies:** TODO #001

### **📋 PHASE 2: GESAMMELTE CSS-MIGRATION**

#### **TODO #003: Semantische CSS-Klassen entwickeln** 🎨

- **Ziel:** Alle Design-Definitionen aus global_css.md in global.css implementieren
- **Strategy:** Semantische Namen statt Utility-Classes
- **Examples:** `.hero-section`, `.legal-card`, `.evidence-navigation`
- **60/30/10 Enforcement:** Strikte Verwendung der definierten Farben
- **Status:** WARTET AUF TODO #002

#### **TODO #004: CSS-Variablen-System erweitern** ⚙️

- **Ziel:** Vollständige CSS-Custom-Properties für alle Patterns
- **Scope:** Spacing, Typography, Layouts, Components
- **Base:** Bestehende `:root` Variablen erweitern
- **Status:** PARALLEL ZU TODO #003

### **📋 PHASE 3: SYSTEMATISCHE ASTRO-BEREINIGUNG**

#### **TODO #005: Tailwind-Migration per Datei** 🧹

- **Ziel:** Alle 304+ Tailwind Classes durch semantische CSS-Klassen ersetzen
- **Priority Order:** beweise.astro → datenschutz.astro → disclaimer.astro → impressum.astro
- **Method:** Manuelle 1:1 Ersetzung (KEINE Scripts!)
- **Validation:** Build-Checker muss 0 CSS-Verletzungen bestätigen
- **Status:** WARTET AUF TODO #003

#### **TODO #006: Build-Checker Validierung** ✅

- **Ziel:** Vollständige CSS-Architektur-Compliance erreichen
- **Target:** 0 kritische CSS-Issues in Build-Checker Log
- **Method:** Iterative Verbesserung mit `pnpm build` Tests
- **Success Metric:** "Saubere 60/30/10 CSS-Architektur bestätigt"
- **Status:** FINAL STEP

---

## **🛠️ PROJEKT-INFRASTRUCTURE TODOs**

### **TODO #007: Projekt-Inventar vollständig aktualisieren** 📊

- **Problem:** projekt_inventar.md ist veraltet (User bestätigt)
- **Scope:** Vollständige manuelle Erfassung aller Dateien/Verzeichnisse
- **Method:** Systematische Durchforstung mit list_dir
- **Output:** Aktuelles, vollständiges Projekt-Inventar
- **Priority:** MITTEL (parallel zu CSS-Arbeit möglich)

### **TODO #008: Instructions-Bereinigung** 📋

- **Problem:** Verweise auf nicht-existierende Verzeichnisse (docs/projekt/)
- **Scope:** Systematische Prüfung aller Instruction-Dateien
- **Method:** Grep-Search + manuelle Validierung
- **Target:** 100% korrekte Verzeichnis-Referenzen
- **Dokumentation:** Alle Konflikte in issues.md dokumentiert

### **TODO #009: Scopes-Definition & Dokumentation** 🎯

- **User-Frage:** "Was sind mit Scopes gemeint und wie wende ich die Scopes an?"
- **Ziel:** Klare Scopes-Dokumentation erstellen
- **Content:** Scope-Definitionen, Anwendungsbeispiele, Workflow-Guidelines
- **Location:** Neue Datei `docs/scopes_definition.md`
- **Priority:** NIEDRIG (User-getrieben)

---

## **💡 WORKFLOW-OPTIMIERUNG TODOs**

### **TODO #010: Content-Freigabe-System strukturieren** 📝

- **Problem:** Zentrale Freigabe-Liste fehlt
- **Current State:** `docs\website_struktur\origin` definiert aber nicht strukturiert
- **Goal:** Explizite Freigabe-Markierungen für Website-Texte
- **Method:** Freigabe-Status in Frontmatter oder separate Tracking-Datei

### **TODO #011: Archiv-Konsolidierung** 🗂️

- **Problem:** Mehrere Archiv-/Ideen-Ordner mit ähnlichen Inhalten
- **Scope:** `01_PLAYBOOK_CONTENT/_altes_chaos_archiv/`, `docs/todos/archiv/`
- **Goal:** Klare Archiv-Hierarchie und Ablage-Regeln
- **Method:** Inhalte analysieren, kategorisieren, konsolidieren

---

## **🤖 KI-PROMPT FÜR CSS-WORKFLOW**

### **NÄCHSTER SCHRITT:**

```

PROMPT: "Führe TODO #001 durch - Vollständige UI-Komponenten-Bestandsaufnahme aller Astro-Dateien. Analysiere manuell beweise.astro, datenschutz.astro, disclaimer.astro, impressum.astro, index.astro und erstelle strukturierte Liste aller verwendeten UI-Patterns (Navigation, Buttons, Cards, Layouts, etc.). Dokumentiere aktuell verwendete Tailwind-Classes pro Pattern für spätere semantische Mapping."

```

### **NACH BESTANDSAUFNAHME:**

```

PROMPT: "Basierend auf UI-Komponenten-Analyse: Erweitere global_css.md systematisch um ALLE erkannten Patterns. Jedes UI-Element muss in natürlicher Sprache mit 60/30/10 Farbschema-Zuordnung definiert werden. KEINE CSS-Code - nur Design-Beschreibungen!"

```

### **NACH DESIGN-DOKUMENTATION:**

```

PROMPT: "Implementiere alle Design-Definitionen aus erweiterte global_css.md in semantische CSS-Klassen in global.css. Strikte 60/30/10 Farbverwendung. Dann systematische Migration aller Tailwind-Classes in Astro-Dateien zu neuen semantischen Klassen."

```

---

## **📊 SUCCESS METRICS**

✅ **CSS-Migration erfolgreich wenn:**

- Build-Checker zeigt 0 CSS-Architektur-Verletzungen
- Alle Astro-Dateien verwenden semantische CSS-Klassen
- 60/30/10 Farbschema 100% konsistent umgesetzt
- global_css.md vollständig und aktuell

✅ **Projekt-Infrastructure erfolgreich wenn:**

- projekt_inventar.md 100% aktuell
- Alle Instruction-Referenzen korrekt
- Issues-Liste vollständig abgearbeitet

**🎯 HAUPTZIEL: Saubere, semantische CSS-Architektur basierend auf vollständiger Design-Dokumentation**
```
