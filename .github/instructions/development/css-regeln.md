# 🎨 CSS-REGELN & DESIGN-SYSTEM

## **60/30/10+ FLEX-SYSTEM:**

### **🎨 FARBSCHEMA:**
- **60%:** asphaltschwarz (Hauptfarbe)
- **30%:** stormy-blue (Sekundärfarbe)  
- **10%+:** accent-colors (Akzente, flexibel)

### **🏗️ CSS-ARCHITEKTUR:**
- **Semantische Klassen** statt Tailwind in Production
- **CSS Custom Properties** für Konsistenz
- **Mobile-First** Responsive Design
- **Desktop-optimiert** für Zielgruppe

### **🚫 VERBOTEN:**
- ❌ Tailwind-Klassen in Production-Code
- ❌ Inline-Styles ohne Grund
- ❌ !important ohne Dokumentation

### **✅ ERLAUBT:**
- ✅ Semantische CSS-Klassen (.hero-section, .cta-button)
- ✅ CSS Custom Properties (--color-primary)
- ✅ BEM-Methodology bei komplexen Komponenten

## **🔧 IMPLEMENTIERUNG:**

### **KLASSEN-NAMING:**
```css
/* ✅ Gut - Semantisch */
.hero-section { }
.navigation-primary { }
.content-legal { }

/* ❌ Schlecht - Technisch */
.bg-blue-500 { }
.text-lg { }
.mt-4 { }
```

### **RESPONSIVE BREAKPOINTS:**
```css
/* Mobile First */
.component { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }
```
