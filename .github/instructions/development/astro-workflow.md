# 🚀 ASTRO-WORKFLOW

## **BUILD-PROZESS:**

### **🎯 ZERO-DEPENDENCY BUILD:**
- **Command:** `astro build`
- **Target:** Vercel-kompatibel
- **Output:** Static Site Generation (SSG)
- **Performance:** <3s Build-Zeit

### **📁 COMPONENT-STRUKTUR:**
```
src/
├── layouts/
│   └── Layout.astro          # Basis-Layout
├── pages/
│   ├── index.astro          # Homepage
│   ├── blog/
│   │   └── [...slug].astro  # Dynamic Blog Routes
│   ├── datenschutz.astro    # Legal Pages
│   ├── disclaimer.astro
│   └── impressum.astro
└── components/              # Reusable Components
    ├── Header.astro
    ├── Footer.astro
    └── BlogCard.astro
```

## **🔧 DEVELOPMENT WORKFLOW:**

### **🚀 BEFEHLE:**
```bash
# Development Server
npm run dev

# Production Build  
npm run build

# Preview Build
npm run preview

# Build Validation
node tools/build_check/multi-scope-checker.cjs
```

### **✅ QUALITÄTS-CHECKS:**
- **Build-Checker:** Multi-Scope Validation
- **Performance:** Lighthouse Scores
- **SEO:** Meta-Tags Validation
- **Accessibility:** ARIA Standards

## **🎨 STYLING INTEGRATION:**

### **CSS CUSTOM PROPERTIES:**
```astro
---
// Component Script
const theme = {
  primary: 'var(--color-asphaltschwarz)',
  secondary: 'var(--color-stormy-blue)'
}
---

<style>
.hero {
  background: var(--color-asphaltschwarz);
  color: var(--color-stormy-blue);
}
</style>
```

### **RESPONSIVE COMPONENTS:**
```astro
<div class="hero-section">
  <h1 class="hero-title">Simon Hänel</h1>
  <p class="hero-subtitle">IT-Recht für Professionals</p>
</div>
```
