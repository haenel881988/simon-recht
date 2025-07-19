# 🎯 MASTER DESIGN STANDARDS - SIMON HAENEL WEBSITE

**Zentrale Wahrheit für alle Design-Entscheidungen**
**Erstellt:** 19.07.2025
**Status:** AKTIV - Alle anderen Design-Dokumente sind DEPRECATED

---

## 🚨 **KI-INSTRUCTION: ZWINGEND VOR JEDER CSS-ÄNDERUNG LESEN!**

**⚠️ PFLICHT-REGELUNG:**

- **DIESE DATEI** ist die EINZIGE gültige Design-Referenz
- **VOR JEDER** CSS-Änderung muss diese Datei gelesen werden
- **NIEMALS** von diesen Standards abweichen
- **EIN ELEMENT = EINE CSS-KLASSE** (Multiple-Classes VERBOTEN!)

---

## 🎨 **60/30/10 FARBSYSTEM "NACHTSTAHL & WARNSIGNAL"**

### **60% - DOMINANZFARBE: #1a1d24 (Asphaltschwarz)**

- **Anwendung:** Website-Hintergrund, großflächige Sektionen, Header, Footer
- **Psychologie:** Seriosität, Stärke, Fokus - strategische Überlegenheit
- **CSS-Variable:** `--color-primary`

### **30% - SEKUNDÄRFARBE: #4a6d7c (Analyse-Blau)**

- **Anwendung:** Info-Boxen, Blockquotes, sekundäre Buttons, strukturelle Elemente
- **Psychologie:** Intelligenz, Analyse, systematische Kompetenz
- **CSS-Variable:** `--color-secondary`

### **10% - AKZENTFARBE: #ff4500 (Glut-Orange)**

- **Anwendung:** Call-to-Action Buttons, Links, kritische Hervorhebungen
- **Psychologie:** Entschlossenheit, Aktion, unmissverständliche Warnung
- **CSS-Variable:** `--color-accent`

### **ZUSATZFARBE: #00D4FF (Kyberblau)**

- **Anwendung:** Spezielle Schrift-Highlights auf blauem Hintergrund
- **Psychologie:** Authentisch, kontrastreich, Star Wars-inspiriert
- **CSS-Variable:** `--color-cyber`

---

## 🧱 **LAYOUT-ARCHITEKTUR**

### **NAVIGATION (Header)**

```
LINKS: "Simon Haenel" (Logo/Brand)
RECHTS: Startseite | Über mich | Blog | Kontakt
```

### **LAYOUT-KOMPONENTEN**

- **ALLE** Seiten nutzen `Layout.astro`
- **KEINE** eigene HTML-Struktur in Einzelseiten
- **EINHEITLICHER** Header und Footer für alle Seiten

### **FOOTER-STRUCTURE**

```
HAUPTZEILE: "Simon Haenel - Informatiker, der mit KI eine Pensionskasse besiegte"
UNTERTITEL: "Gerichtsurteil BV.2024.00062 - Der Beweis, dass Mindset Grosskonzern schlägt"
UPDATE: "Aktualisiert am: [BUILD-TIMESTAMP]"

RECHTLICHE LINKS: Impressum | Datenschutz | Disclaimer
SOCIAL MEDIA: Facebook | Instagram | LinkedIn
```

---

## 🚫 **VERBOTENE TECHNOLOGIEN**

### **CSS-VERBOTE**

- ❌ **TAILWIND CSS** komplett verboten (bg-gray-900, text-white, etc.)
- ❌ **INLINE-STYLES** universell verboten (`style="..."`)
- ❌ **MULTIPLE-CLASSES** pro Element verboten (`class="card blue"`)
- ❌ **HOVER-EFFEKTE** verboten (hover:shadow-xl, etc.)
- ❌ **JAVASCRIPT-EFFEKTE** verboten
- ❌ **HINTERGRÜNDE** für Content-Bereiche verboten

### **JAVASCRIPT-VERBOTE**

- ❌ **ALLE JAVASCRIPT-INTERAKTIONEN** verboten
- ❌ **BUTTON-ANIMATIONEN** verboten
- ❌ **HOVER-SCRIPTS** verboten
- ❌ **BLINGBLING-EFFEKTE** verboten

---

## ✅ **ERLAUBTE TECHNOLOGIEN**

### **CSS-ERLAUBT**

- ✅ **CUSTOM CSS-KLASSEN** in `global.css`
- ✅ **EINE KLASSE** pro Element
- ✅ **SEMANTISCHE NAMEN** (.hero, .card, .section)
- ✅ **CSS-VARIABLEN** für Farben

### **CONTENT-STRUKTUR**

- ✅ **CONTENT COLLECTIONS** für Blog
- ✅ **MARKDOWN-DATEIEN** als Content-Quelle
- ✅ **ASTRO-KOMPONENTEN** für Layout
- ✅ **STATISCHE GENERIERUNG** ohne JavaScript

---

## 📝 **CONTENT-ARCHITEKTUR**

### **STATISCHE SEITEN**

```
docs/website_struktur/statische-seiten/static/ → src/pages/
- index.md → index.astro
- ueber_mich.md → ueber_mich.astro
```

### **DYNAMISCHE SEITEN**

```
docs/website_struktur/dynamische-seiten/blog/ → src/content/blog/
- Automatische Astro-Generierung via Build-Prozess
```

### **BUILD-PROCESS-INTEGRATION**

- **ALLE** statischen Seiten in Build-Checker integriert
- **AUTOMATISCHE** Validierung der Design-Compliance
- **FEHLER-DETECTION** bei Standard-Abweichungen

---

## 🔧 **IMPLEMENTATION-RULES**

### **CSS-KLASSEN-NAMING**

```css
/* ERLAUBT - Semantisch und eindeutig */
.hero {
}
.card {
}
.section {
}
.nav-container {
}

/* VERBOTEN - Multiple Classes */
.card.blue {
} /* NIEMALS! */
.text-white {
} /* TAILWIND VERBOTEN! */
```

### **FARBEN-IMPLEMENTATION**

```css
:root {
  --color-primary: #1a1d24; /* Asphaltschwarz */
  --color-secondary: #4a6d7c; /* Analyse-Blau */
  --color-accent: #ff4500; /* Glut-Orange */
  --color-cyber: #00d4ff; /* Kyberblau */
}
```

---

## 🚨 **VALIDATION-PROTOKOLL**

### **BUILD-CHECKER REQUIREMENTS**

1. **Design-System Validation:** Alle Farben müssen 60/30/10 entsprechen
2. **Multiple-Class Detection:** KEINE mehrfachen Klassen erlaubt
3. **Tailwind Detection:** ALLE Tailwind-Classes werden als CRITICAL gemeldet
4. **Inline-Style Detection:** ALLE Inline-Styles werden als CRITICAL gemeldet
5. **Layout Consistency:** ALLE Seiten müssen Layout.astro verwenden

### **INSTRUCTION-COMPLIANCE**

- **Design-Dokument-Referenz:** KI-Instructions müssen diese Datei zwingend erwähnen
- **Anti-Apology Rule:** Verantwortung statt Entschuldigungen
- **One-Class-per-Element:** Explizite Regel in Instructions

---

## 📋 **MIGRATION-ROADMAP**

### **PHASE 1: FOUNDATION CLEANUP** ✅

- [x] Master Design Standards erstellt
- [ ] Build-Checker erweitert
- [ ] KI-Instructions aktualisiert

### **PHASE 2: LAYOUT HARMONIZATION**

- [ ] Layout.astro Navigation korrigiert
- [ ] Blog-Index auf Layout.astro umgestellt
- [ ] Alle Tailwind-Classes entfernt

### **PHASE 3: CONTENT INTEGRATION**

- [ ] Statische Seiten in Build-Prozess
- [ ] Content Collections für alle Seiten
- [ ] Vollständige Design-Compliance

---

## 🎯 **SUCCESS METRICS**

**Build-Checker Ziele:**

- **0** Multiple-Class Violations
- **0** Tailwind CSS Detections
- **0** Inline-Style Violations
- **0** Design-System Abweichungen
- **100%** Layout.astro Usage

**DIESE DATEI IST DIE EINZIGE WAHRHEIT FÜR ALLE DESIGN-ENTSCHEIDUNGEN!**
