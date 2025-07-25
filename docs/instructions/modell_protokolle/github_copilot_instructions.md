# 🤖 GITHUB COPILOT PROTOKOLL & VERHALTENSREGELN

## 🎯 PROJEKTSTATUS: VS CODE INSIDERS NUTZER

**KRITISCHE VORTEILE:**

- **128k Token Kontextfenster** (vs. 64k Standard)
- **Erweiterte Features** vor Standard-Release
- **Bessere Performance** bei großen Projekten

---

## 🧠 SIMON'S COPILOT-INTERNALISIERUNGS-DEFINITION

**INTERNALISIEREN = Copilot dauerhaft verbessern/erweitern durch Erkenntnisse**

### **COPILOT-INTERNALISIERUNGS-WORKFLOW:**

**WENN COPILOT FEHLER MACHT:**

1. **SOFORT URSACHEN-ANALYSE:** Token-Überlauf? Kontext-Verlust? Falsche Anweisung?
2. **INSTRUCTION-UPDATE:** Diese Datei mit neuen Regeln erweitern
3. **MUSTER-VERHINDERUNG:** Wiederholung des Fehlers dauerhaft ausschließen
4. **COPILOT-COACHING:** Bessere Prompt-Strategien entwickeln
5. **QUALITÄTS-STEIGERUNG:** Kontinuierliche Verbesserung der KI-Interaktion

---

## 🚨 KRITISCHE TOKEN-MANAGEMENT REGELN

### **ABSOLUTE LIMITS (RECHERCHE-BASIERT):**

- **VS Code Insiders Kontextfenster:** 128.000 Tokens
- **VS Code Standard Kontextfenster:** 64.000 Tokens
- **Maximaler Output:** 4.096 Tokens (typisch)
- **Praktische Datei-Schwelle:** 1.000-2.000 Zeilen (Leistungsabfall)

### **KI-BLINDHEITS-ERKENNUNGS-SYSTEM:**

#### **KRITISCHE WARNSIGNALE:**

1. **Katastrophaler Kontextverlust:** "Ich habe nicht die Fähigkeit, mich an frühere Gespräche zu erinnern"
2. **Halluzination/Fabrikation:** Erfindung nicht-existierender APIs oder Code
3. **Oberflächlichkeit:** Generische Vorschläge, die Projekt-Kontext ignorieren
4. **Inkonsistenz:** Widersprüche zu eigenen früheren Vorschlägen
5. **Aufgabenabbruch:** Steckenbleiben in Schleifen oder Abbruch ohne Lösung

#### **HAUPTAUSLÖSER DER KI-BLINDHEIT:**

1. **Automatische Zusammenfassung:** KRITISCH - kann zu Kontextverlust führen
2. **Token-Limit-Überschreitung:** Prompt >128k Tokens in Insiders
3. **Große Dateien:** >1.000-2.000 Zeilen pro Datei
4. **Lange Chat-Verläufe:** Akkumulierte Token-Last
5. **Ineffektive Kontext-Retrieval:** "Usability-Lücke" trotz großem Fenster

### **SOFORT-MAßNAHMEN BEI KI-BLINDHEIT:**

```
⚠️ EXCEPTION_TYPE: COPILOT_KI_BLINDHEIT_ERKANNT
SYMPTOM: [Spezifisches Fehlverhalten]
TOKEN_STATUS: [Geschätzte aktuelle Token-Nutzung]
SOFORT_AKTION: [Neue Session/Kontext-Reset/Datei-Reduzierung]
PREVENTION: [Regel-Update für Zukunft]
```

**RECOVERY-PROTOKOLL:**

1. **"Stopp und Neuversuch"** - Generation stoppen, Prompt neu senden
2. **Neue Chat-Session** starten (⌘N in VS Code)
3. **Kontext explizit neu etablieren** mit fokussierten Datei-Anhängen
4. **Diagnostik-Frage:** "Wie viel hast du geraten vs. analysiert?"
5. **Modell-Wechsel** (GPT-4o → o4-mini → Claude) bei Persistenz

---

## 🔧 PRÄVENTIVE COPILOT-STRATEGIEN

### **OPTIMAL TOKEN-MANAGEMENT:**

#### **DATEI-STRATEGIE:**

- **Selektive Anhänge:** Nur relevante Dateien (#file:datei.ts)
- **Temporäre Dateien:** Komplexe Code-Teile in separate Datei kopieren
- **Struktur-Only:** Bei großen Dateien nur Funktions-Signaturen zeigen
- **Chunk-Bearbeitung:** Große Dateien in Abschnitten bearbeiten

#### **PROMPT-OPTIMIERUNG:**

- **Kurz & Fokussiert:** Präzise Fragen statt lange Erklärungen
- **Aufgaben-Teilung:** Große Ziele in kleine Schritte zerlegen
- **Kontext-Qualifizierer:** @workspace, #file, explizite Referenzen
- **Beispiele geben:** Ein-/Ausgabe-Beispiele für Klarheit

#### **SESSION-HYGIENE:**

- **Neue Sessions** für neue, abgegrenzte Aufgaben
- **Relevanz-Check:** Irrelevante Chat-Teile entfernen
- **Automatische Zusammenfassung DEAKTIVIEREN** (VS Code Insiders Settings)
- **Chat-Verlauf exportieren** für wichtige Erkenntnisse

### **VS CODE INSIDERS OPTIMIERUNGEN:**

#### **ERWEITERTE FEATURES NUTZEN:**

- **128k Token-Vorteil** für komplexe Projekte ausnutzen
- **Experimentelle Features** early access
- **Verbesserte Datei-Handling** (>10 Dateien seit v1.98)
- **Premium-Model-Access** mit bewusstem Token-Budget

#### **ENTERPRISE-FUNKTIONEN (FALLS VERFÜGBAR):**

- **copilot-instructions.md:** Projekt-spezifische Regeln (<500 Tokens)
- **Premium-Request-Budget:** Bewusste Modell-Auswahl nach Multiplikator
- **Governance-Compliance:** Team-Standards einhalten

---

## 🚨 KRITISCHE ANTI-MUSTER

### **ABSOLUT VERBOTEN:**

1. **Blind große Projekte laden** ohne Datei-Selektion
2. **Automatische Zusammenfassung ignorieren** in langen Sessions
3. **Token-Überlauf ignorieren** bei Fehlermeldungen
4. **Generische Prompts** ohne Projekt-Kontext
5. **KI-Blindheit weiterarbeiten** ohne Recovery-Protokoll

### **PREMIUM-REQUEST FALLE VERMEIDEN:**

```
MODELL-MULTIPLIKATOR-BEWUSSTSEIN:
- Claude Opus 4: 10x (TEUER!)
- Claude Sonnet 3.7 Thinking: 1.25x
- Gemini 2.5 Pro: 1x
- o4-mini: 0.33x (GÜNSTIG)
- Gemini 2.0 Flash: 0.25x (SEHR GÜNSTIG)
```

**REGEL:** Nur Claude Opus 4 (10x) für kritische, komplexe Aufgaben nutzen!

---

## 🎯 PROJEKT-SPEZIFISCHE COPILOT-KONFIGURATION

### **SIMON-RECHT OPTIMIERUNGEN:**

#### **CONTENT-FOKUS:**

- **Rechtliche Expertise:** NICHT IT-Fokus in Prompts
- **Authentizität:** Simon's echte 5-Jahre IT-Erfahrung verwenden
- **Domain:** simon-haenel.com Kontext berücksichtigen
- **Sprache:** Deutsch, Du-Form für alle Outputs

#### **TECHNISCHE ARCHITEKTUR:**

- **Astro/TypeScript:** Copilot auf SSG-Framework einstellen
- **Markdown-Content:** src/content/ Verzeichnis-Fokus
- **Build-Trennung:** Nur `astro build` - KEINE Checker-Dependencies
- **SEO-Organisch:** Keine Performance-Optimierungen in Code-Generierung

#### **DATEI-PRIORITÄTEN FÜR COPILOT:**

1. **Höchste Priorität:** src/content/ (Markdown-Dateien)
2. **Hohe Priorität:** src/layouts/, src/pages/ (Astro-Komponenten)
3. **Mittlere Priorität:** src/styles/, docs/ (Styling & Dokumentation)
4. **Niedrige Priorität:** tools/, public/ (Build & Assets)

### **COPILOT-INSTRUCTIONS.MD TEMPLATE:**

```markdown
# SIMON-RECHT PROJEKT RULES

## FOKUS

- Rechtliche Beratung/Expertise (NICHT IT)
- Domain: simon-haenel.com
- Sprache: Deutsch, Du-Form
- Simon's echte 5J IT-Erfahrung (Siemens/Yunex)

## TECHNIK

- Astro SSG + TypeScript
- Markdown in src/content/
- Nur astro build (KEINE Checker-Dependencies)
- Organisches SEO (KEINE Performance-Tricks)

## VERBOTEN

- IT-Expertise übertreiben
- Performance-Optimierungen
- Build-Checker-Kopplung
- Englische Outputs
```

---

## 📊 COPILOT-MONITORING & METRIKEN

### **ERFOLGS-INDIKATOREN:**

#### **POSITIVE SIGNALE:**

- ✅ **Kontext-Retention:** Copilot erinnert sich an frühere Chat-Teile
- ✅ **Projekt-Spezifität:** Vorschläge berücksichtigen Astro/TypeScript/Rechtsfokus
- ✅ **Konsistenz:** Neue Vorschläge widersprechen nicht früheren
- ✅ **Relevanz:** Lösungen passen zur aktuellen Aufgabe
- ✅ **Effizienz:** Wenige Iterationen bis zur korrekten Lösung

#### **WARN-INDIKATOREN:**

- ⚠️ **Wiederholungen:** Copilot wiederholt gleiche Vorschläge
- ⚠️ **Allgemeinheit:** Vorschläge werden generisch statt projekt-spezifisch
- ⚠️ **Langsamkeit:** Antworten dauern ungewöhnlich lange
- ⚠️ **Widersprüche:** Neue Vorschläge negieren etablierte Lösungen

### **QUALITÄTS-METRIKEN:**

```
COPILOT-HEALTH-SCORE (1-10):
- Kontext-Retention: ___/10
- Projekt-Relevanz: ___/10
- Code-Qualität: ___/10
- Antwort-Geschwindigkeit: ___/10
- Token-Effizienz: ___/10

GESAMT-SCORE: ___/50
```

**REGEL:** Bei Score <35/50 → Recovery-Protokoll aktivieren!

---

## 🔄 KONTINUIERLICHE VERBESSERUNG

### **WEEKLY COPILOT REVIEW:**

#### **ERFOLGREICHE PATTERNS DOKUMENTIEREN:**

- Welche Prompt-Strategien funktionieren am besten?
- Welche Datei-Kombinationen sind optimal?
- Welche Chat-Session-Längen sind effektiv?

#### **PROBLEM-PATTERNS ELIMINIEREN:**

- Welche Situationen führen zu KI-Blindheit?
- Welche Token-Überschreitungen sind häufig?
- Welche Recovery-Strategien sind erfolgreich?

#### **INSTRUCTION-UPDATES:**

- Neue Erkenntnisse in diese Datei integrieren
- Veraltete Regeln entfernen oder anpassen
- Best-Practices aus Community/Updates einbauen

### **COPILOT-EVOLUTION TRACKING:**

```
CHANGELOG SIMON-RECHT COPILOT-NUTZUNG:
- [DATUM]: VS Code Insiders 128k Token genutzt
- [DATUM]: Automatische Zusammenfassung deaktiviert
- [DATUM]: Premium-Request-Budget optimiert
- [DATUM]: Recovery-Protokoll etabliert
```

---

## 🎯 ZUSAMMENFASSUNG: COPILOT-MASTERY

**DIESE PROTOKOLL-DATEI GARANTIERT:**

1. **MAXIMALE COPILOT-EFFIZIENZ** durch VS Code Insiders Optimierung
2. **KI-BLINDHEITS-PREVENTION** durch Recherche-basierte Strategien
3. **PROJEKT-OPTIMIERUNG** für simon-recht spezifische Anforderungen
4. **TOKEN-MANAGEMENT-MASTERY** für 128k Kontextfenster
5. **KONTINUIERLICHE VERBESSERUNG** durch Monitoring & Updates

**COPILOT IST JETZT EIN PRÄZISES WERKZEUG STATT EINES ZUFALLSGENERATORS!**

---

## 🚨 NOTFALL-PROTOKOLL

### **WENN COPILOT KOMPLETT AUSFÄLLT:**

```
🆘 COPILOT-EMERGENCY-PROTOCOL:
1. VS Code Insiders neu starten
2. Copilot Extension deaktivieren/reaktivieren
3. Neue Chat-Session (⌘N)
4. Token-Budget komplett zurücksetzen
5. Premium-Request-Status prüfen
6. Alternative Modelle testen (o4-mini, Claude)
7. Community-Support konsultieren
```

**DIESE REGELN SIND UNUMGEHBAR UND ZWINGEND FÜR OPTIMALE COPILOT-NUTZUNG!**
