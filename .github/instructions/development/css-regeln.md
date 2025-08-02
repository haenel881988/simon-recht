# 🎨 CSS-REGELN & DESIGN-SYSTEM

## **🌍 ENGLISH-FIRST-POLICY (GLOBAL GÜLTIG - 02.08.2025):**

### **📚 SIMON'S KI-ZEITALTER-ANPASSUNG:**

**NEUE REGEL:** Englische Terminologie bevorzugen für bessere KI-Kommunikation!

- ✅ **Foundation, Components, Utilities** = Standard verwenden
- ✅ **Responsive, Layout, CTA** = International üblich
- ✅ **Semantic Classes, BEM-Methodology** = Best Practices
- ✅ **Build-System, Performance** = Industrie-Standard

**UNTERSTÜTZUNG FÜR SIMON:**

- 📖 **Alle Fremdwörter erklärt:** → `src/styles/glossar.md`
- 🎯 **Lernziel:** Englisch-Skills für bessere KI-Kooperation
- 🚀 **Vorteil:** Internationale Standards = Zukunftssicherheit

### **📖 FREMDWORT-SUPPORT:**

```
ZWINGEND BEI NEUEN ENGLISCHEN BEGRIFFEN:
1. Begriff in glossar.md ergänzen
2. Deutsche Übersetzung + praktische Erklärung
3. Code-Beispiel für Simon's Verständnis
4. Warum dieser Begriff international Standard ist
```

## **🔧 VALIDATION-ZWANG (GLOBAL GÜLTIG):**

### **🚨 ZWINGEND NACH JEDER CSS-ÄNDERUNG:**

1. **BUILD-CHECKER AUSFÜHREN:** `node tools/build_check/multi-scope-checker.cjs`
2. **CSS-HEALTH VALIDIEREN:** Score muss ≥95/100 bleiben
3. **REDUNDANZ-CHECK:** Keine Duplikate nach Änderungen
4. **SYNTAX-VALIDATION:** Astro Build testen (`npm run build`)
5. **RESPONSIVE-TEST:** Mobile/Desktop-Breakpoints validieren

### **📊 CSS-QUALITÄTS-GATES:**

- **Health Score:** ≥95/100 (aktuell: 100/100)
- **Redundanzen:** 0 Duplikate erlaubt
- **Modularität:** Jede Komponente in eigenem Modul
- **WCAG-Konformität:** Mindestens 8/10 Kontrast-Tests

## **60/30/10+ FLEX-SYSTEM:**

### **🎨 FARBSCHEMA:**

- **60%:** asphaltschwarz (Hauptfarbe)
- **30%:** stormy-blue (Sekundärfarbe)
- **10%+:** accent-colors (Akzente, flexibel)

### **🏗️ CSS-ARCHITEKTUR:**

- **Semantic Classes** statt Tailwind in Production
- **CSS Custom Properties** für Konsistenz
- **Mobile-First** Responsive Design
- **Desktop-optimiert** für Zielgruppe

### **🚫 VERBOTEN:**

- ❌ Tailwind-Klassen in Production-Code
- ❌ Inline-Styles ohne Grund
- ❌ !important ohne Dokumentation

### **✅ ERLAUBT:**

- ✅ Semantic CSS-Klassen (.hero-section, .cta-button)
- ✅ CSS Custom Properties (--color-primary)
- ✅ BEM-Methodology bei komplexen Komponenten

## **🔧 IMPLEMENTIERUNG:**

### **KLASSEN-NAMING:**

```css
/* ✅ Gut - Semantisch */
.hero-section {
}
.navigation-primary {
}
.content-legal {
}

/* ❌ Schlecht - Technisch */
.bg-blue-500 {
}
.text-lg {
}
.mt-4 {
}
```

### **RESPONSIVE BREAKPOINTS:**

```css
/* Mobile First */
.component {
}

/* Tablet */
@media (min-width: 768px) {
}

/* Desktop */
@media (min-width: 1024px) {
}
```
