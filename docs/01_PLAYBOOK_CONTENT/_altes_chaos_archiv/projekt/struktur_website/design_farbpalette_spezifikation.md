# 🎨 DESIGN & FARBPALETTE SPEZIFIKATION - simon-recht

**Erstellt:** 13. Juli 2025  
**Status:** Master-Vorlage für alle UI-Elemente  
**Fokus:** Professionell, ernst, vertrauenswürdig - KEINE "bunten Textboxen"

---

## 🎯 **FOKUS-KEYWORD ANALYSE**

**Primäres Keyword:** "Mindset schlägt Grosskonzern"
- **Suchvolumen:** Nische, aber hochrelevant
- **Intent:** Informational + Commercial Investigation
- **Konkurrenz:** Gering (Einzigartiger Ansatz)

**Sekundäre Keywords:**
- "Grosskonzern besiegen ohne Anwalt"
- "KI juristische Hilfe Schweiz"  
- "Pensionskasse Klage erfolgreich"
- "Rechtsstreit ohne Anwalt gewinnen"

**LSI-Keywords (semantisch verwandt):**
- Gerichtsurteil BV.2024.00062
- Pensionskasse Schweiz Invalidenleistungen
- ChatGPT juristische Beratung
- Mindset Grosskonzern

---

## 🎨 **HAUPT-FARBPALETTE**

### **PRIMÄRFARBEN (Corporate Identity)**
```css
/* SCHWARZ - Hauptfarbe für Seriosität */
--color-primary-black: #000000;
--color-primary-black-soft: #1a1a1a;

/* WEISS - Für Kontrast und Klarheit */
--color-primary-white: #ffffff;
--color-primary-white-soft: #f8f9fa;

/* GRAU-TÖNE - Für Abstufungen */
--color-gray-100: #f3f4f6;  /* Hellstes Grau */
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;  /* Dunkelstes Grau */
```

### **AKZENTFARBEN (Sparsam verwenden!)**
```css
/* ROT - Für Probleme und Warnungen */
--color-accent-red: #dc2626;
--color-accent-red-light: #ef4444;
--color-accent-red-dark: #b91c1c;

/* GRÜN - NUR für Erfolg/Gerichtsurteil */
--color-accent-green: #16a34a;
--color-accent-green-light: #22c55e;
--color-accent-green-dark: #15803d;

/* ORANGE - Für Call-to-Action Buttons */
--color-accent-orange: #ea580c;
--color-accent-orange-light: #f97316;
--color-accent-orange-dark: #c2410c;
```

---

## 📱 **UI-ELEMENT SPEZIFIKATION**

### **1. NAVIGATION**
```css
/* Navigation Bar */
.navigation {
  background: var(--color-primary-black);
  border-bottom: 1px solid var(--color-gray-700);
}

/* Logo/Brand */
.nav-brand {
  color: var(--color-primary-white);
  font-weight: 700;
}

/* Navigation Links */
.nav-link {
  color: var(--color-gray-300);
  transition: color 0.2s ease;
}
.nav-link:hover {
  color: var(--color-primary-white);
}
```
**Verwendung:** Hauptnavigation auf allen Seiten

### **2. HERO-SECTION**
```css
/* Hero Background */
.hero-section {
  background: var(--color-primary-black);
  color: var(--color-primary-white);
}

/* Haupttitel */
.hero-title {
  color: var(--color-primary-white);
  font-size: 3.5rem;
  font-weight: 700;
}

/* Rot-Akzent im Titel */
.hero-title-accent {
  color: var(--color-accent-red);
}

/* Hero Subtitle */
.hero-subtitle {
  color: var(--color-gray-300);
  font-size: 1.25rem;
}
```
**Verwendung:** Landingpage Hero-Bereich

### **3. TRUST-BADGES & ERFOLGS-ELEMENTE**
```css
/* Gerichtsurteil Badge */
.trust-badge {
  background: var(--color-gray-900);
  border: 1px solid var(--color-gray-700);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

/* Erfolgs-Text im Badge */
.trust-badge-success {
  color: var(--color-accent-green);
  font-weight: 700;
}

/* Erfolgs-Highlighting */
.success-highlight {
  background: var(--color-gray-900);
  border: 2px solid var(--color-accent-green);
  color: var(--color-accent-green-light);
}
```
**Verwendung:** Gerichtsurteil-Bestätigung, Erfolgsnachweis

### **4. PROBLEM-BEREICHE**
```css
/* Problem-Section Background */
.problem-section {
  background: var(--color-gray-900);
}

/* Problem-Items */
.problem-item {
  background: var(--color-gray-800);
  border: 1px solid var(--color-gray-700);
  color: var(--color-gray-300);
}

/* Problem-Hervorhebung */
.problem-emphasis {
  color: var(--color-primary-white);
  font-weight: 600;
}
```
**Verwendung:** Problem-Bullet-Points, Schmerzpunkt-Darstellung

### **5. AGITATION-BEREICHE**
```css
/* Agitation Section */
.agitation-section {
  background: var(--color-gray-800);
}

/* Kritik-Text (Anwälte angreifen) */
.critique-text {
  color: var(--color-gray-300);
  font-style: italic;
}

/* Kritik-Hervorhebung */
.critique-highlight {
  color: var(--color-accent-red);
  font-weight: 600;
}

/* Wahrheits-Box */
.truth-box {
  background: var(--color-gray-900);
  border: 1px solid var(--color-gray-700);
  border-radius: 0.5rem;
  padding: 2rem;
}
```
**Verwendung:** Agitation-Bereiche, Anwaltskritik

### **6. SOLUTION-BEREICHE**
```css
/* Solution Section */
.solution-section {
  background: var(--color-primary-black);
}

/* Fallstudie-Box */
.case-study-box {
  background: var(--color-gray-900);
  border: 2px solid var(--color-accent-green);
  border-radius: 0.5rem;
  padding: 2rem;
}

/* Lösungs-Features */
.feature-card {
  background: var(--color-gray-900);
  border: 1px solid var(--color-gray-700);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.feature-title {
  color: var(--color-primary-white);
  font-weight: 700;
}

.feature-description {
  color: var(--color-gray-300);
}
```
**Verwendung:** Lösungsdarstellung, Feature-Karten

### **7. CALL-TO-ACTION BUTTONS**
```css
/* Primärer CTA (Haupt-Aktion) */
.cta-primary {
  background: var(--color-accent-orange);
  color: var(--color-primary-white);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  transition: background 0.2s ease;
}
.cta-primary:hover {
  background: var(--color-accent-orange-dark);
}

/* Sekundärer CTA (Alternative) */
.cta-secondary {
  background: transparent;
  color: var(--color-primary-white);
  border: 2px solid var(--color-primary-white);
  border-radius: 0.5rem;
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  transition: all 0.2s ease;
}
.cta-secondary:hover {
  background: var(--color-primary-white);
  color: var(--color-primary-black);
}
```
**Verwendung:** Call-to-Action Buttons, Links zu Hauptaktionen

### **8. FOOTER**
```css
/* Footer */
.footer {
  background: var(--color-gray-900);
  border-top: 1px solid var(--color-gray-700);
  color: var(--color-gray-300);
}

/* Footer Links */
.footer-link {
  color: var(--color-gray-400);
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: var(--color-gray-200);
}

/* Copyright Text */
.footer-copyright {
  color: var(--color-gray-500);
  font-size: 0.875rem;
}
```
**Verwendung:** Website-Footer mit Links

---

## 🚫 **VERBOTENE DESIGN-ELEMENTE**

### **NIEMALS VERWENDEN:**
- ❌ Bunte Hintergrundfarben (Blau, Lila, Pink, Gelb für Backgrounds)
- ❌ Gradient-Backgrounds mit mehreren Farben
- ❌ Animationen (pulse, glow, scale, etc.)
- ❌ Hover-Effekte mit Transform-Scale
- ❌ Mehrfarbige Textboxen
- ❌ "Barbie-like" farbenfrohe Gestaltung

### **ERLAUBTE AUSNAHMEN:**
- ✅ ROT nur für Probleme/Warnungen
- ✅ GRÜN nur für Gerichtsurteil/Erfolg
- ✅ ORANGE nur für CTA-Buttons
- ✅ Einfache Hover-Transitions (color change)

---

## 📋 **ELEMENT-MAPPING (Wo wird was verwendet)**

| Element | Farbe | Verwendung |
|---------|-------|------------|
| **Navigation** | Schwarz + Grau | Alle Seiten |
| **Hero Background** | Schwarz | Landingpage |
| **Trust Badge** | Grau + Grün-Akzent | Gerichtsurteil |
| **Problem Items** | Grau-Töne | Problem-Bereiche |
| **Agitation Text** | Grau + Rot-Akzent | Kritik-Bereiche |
| **Solution Cards** | Grau + Grün-Border | Lösungs-Features |
| **CTA Buttons** | Orange (primär) | Call-to-Actions |
| **Footer** | Grau | Alle Seiten |

---

## 🔧 **IMPLEMENTIERUNGS-CHECKLISTE**

- [ ] Alle bunten Hintergrundfarben entfernen
- [ ] Gradient-Backgrounds durch einfarbige ersetzen
- [ ] Animationen komplett entfernen
- [ ] Trust-Badge nur grün für Gerichtsurteil
- [ ] CTA-Buttons einheitlich orange
- [ ] Problem-Bereiche einheitlich grau
- [ ] Navigation schwarz-grau konsistent
- [ ] Footer-Design vereinheitlichen

**WICHTIG:** Diese Spezifikation ist bindend für ALLE Design-Entscheidungen!
