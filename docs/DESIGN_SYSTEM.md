# CSS Design System - simon-haenel.com

## 🎨 **DESIGN PHILOSOPHIE**

### **Brand Identity:**
- **Kernbotschaft:** "Mindset schlägt Grosskonzern"
- **Zielgruppe:** Informatiker, Technik-affine Menschen, KI-Interessierte
- **Tonalität:** Professionell, vertrauenswürdig, innovativ, kämpferisch

### **Farbpalette:**
```css
:root {
  /* Primärfarben - Vertrauen & Kompetenz */
  --color-primary: #1e40af;     /* Tiefes Blau - Vertrauen */
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e3a8a;
  
  /* Sekundärfarben - Erfolg & Energie */
  --color-success: #059669;     /* Grün - Erfolg/Sieg */
  --color-warning: #d97706;     /* Orange - Aufmerksamkeit */
  --color-danger: #dc2626;      /* Rot - Kampf/Entschlossenheit */
  
  /* Neutrale Farben */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-900: #111827;
  
  /* Text */
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-text-muted: #9ca3af;
}
```

### **Typografie:**
```css
:root {
  /* Font Families */
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### **Spacing & Layout:**
```css
:root {
  /* Spacing Scale */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */
  
  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
}
```

## 🏗️ **KOMPONENTEN-SYSTEM**

### **1. HERO SECTION:**
```css
.hero {
  @apply min-h-screen bg-gradient-to-br from-blue-50 to-white;
  @apply flex items-center justify-center px-4;
}

.hero__content {
  @apply max-w-4xl mx-auto text-center;
}

.hero__title {
  @apply text-5xl md:text-6xl font-bold text-gray-900 mb-6;
  @apply bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent;
}

.hero__subtitle {
  @apply text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed;
}

.hero__cta {
  @apply inline-flex items-center px-8 py-4 bg-blue-600 text-white;
  @apply font-semibold rounded-lg hover:bg-blue-700 transition-colors;
  @apply shadow-lg hover:shadow-xl transform hover:-translate-y-1;
}
```

### **2. FEATURE GRID:**
```css
.feature-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto;
}

.feature-card {
  @apply bg-white rounded-xl shadow-lg border border-gray-200;
  @apply p-6 hover:shadow-xl transition-shadow duration-300;
}

.feature-card__icon {
  @apply w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4;
}

.feature-card__title {
  @apply text-xl font-semibold text-gray-900 mb-3;
}

.feature-card__description {
  @apply text-gray-600 leading-relaxed;
}
```

### **3. CONTENT SECTIONS:**
```css
.content-section {
  @apply py-16 px-4;
}

.content-section--primary {
  @apply bg-white;
}

.content-section--secondary {
  @apply bg-gray-50;
}

.content-section__container {
  @apply max-w-4xl mx-auto;
}

.content-section__title {
  @apply text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center;
}

.content-section__subtitle {
  @apply text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto;
}
```

### **4. BLOG STYLING:**
```css
.blog-post {
  @apply max-w-3xl mx-auto px-4 py-8;
}

.blog-post__header {
  @apply mb-12 text-center;
}

.blog-post__title {
  @apply text-4xl md:text-5xl font-bold text-gray-900 mb-4;
}

.blog-post__meta {
  @apply text-gray-500 mb-6;
}

.blog-post__content {
  @apply prose prose-lg prose-blue mx-auto;
}

/* Prose Styling */
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-12 mb-6;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-8 mb-4;
}

.prose p {
  @apply text-gray-700 leading-relaxed mb-6;
}

.prose strong {
  @apply text-gray-900 font-semibold;
}

.prose blockquote {
  @apply border-l-4 border-blue-500 pl-6 italic text-gray-700;
}
```

## 🎯 **UI PATTERNS**

### **Call-to-Action Buttons:**
```css
.btn {
  @apply inline-flex items-center justify-center px-6 py-3;
  @apply font-medium rounded-lg transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.btn--primary {
  @apply bg-blue-600 text-white hover:bg-blue-700;
  @apply focus:ring-blue-500 shadow-lg hover:shadow-xl;
}

.btn--secondary {
  @apply bg-white text-blue-600 border-2 border-blue-600;
  @apply hover:bg-blue-50 focus:ring-blue-500;
}

.btn--success {
  @apply bg-green-600 text-white hover:bg-green-700;
  @apply focus:ring-green-500;
}
```

### **Cards & Containers:**
```css
.card {
  @apply bg-white rounded-xl shadow-lg border border-gray-200;
  @apply transition-shadow duration-300 hover:shadow-xl;
}

.card__header {
  @apply p-6 border-b border-gray-200;
}

.card__body {
  @apply p-6;
}

.card__footer {
  @apply p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl;
}
```

## 🔥 **BESONDERE ELEMENTE**

### **"Mindset schlägt Grosskonzern" Badge:**
```css
.mindset-badge {
  @apply inline-flex items-center px-4 py-2;
  @apply bg-gradient-to-r from-blue-600 to-purple-600;
  @apply text-white font-semibold rounded-full;
  @apply shadow-lg transform hover:scale-105 transition-transform;
}
```

### **Erfolgs-Testimonial Box:**
```css
.success-story {
  @apply bg-green-50 border-2 border-green-200 rounded-xl p-6;
  @apply relative overflow-hidden;
}

.success-story::before {
  content: '"';
  @apply absolute top-2 left-4 text-6xl text-green-300 font-serif;
}

.success-story__content {
  @apply relative z-10 text-green-900 font-medium text-lg;
}

.success-story__author {
  @apply mt-4 text-green-700 font-semibold;
}
```

### **KI-Integration Highlight:**
```css
.ai-highlight {
  @apply bg-gradient-to-r from-purple-100 to-blue-100;
  @apply border-l-4 border-purple-500 p-4 rounded-r-lg;
}

.ai-highlight__icon {
  @apply w-6 h-6 text-purple-600 mr-3;
}

.ai-highlight__text {
  @apply text-purple-900 font-medium;
}
```

## 📱 **RESPONSIVE DESIGN**

### **Breakpoints:**
```css
/* Mobile First Approach */
.responsive-grid {
  @apply grid grid-cols-1;     /* Mobile */
  @apply sm:grid-cols-2;       /* 640px+ */
  @apply md:grid-cols-3;       /* 768px+ */
  @apply lg:grid-cols-4;       /* 1024px+ */
  @apply xl:grid-cols-5;       /* 1280px+ */
}

.responsive-text {
  @apply text-base;            /* Mobile */
  @apply sm:text-lg;           /* 640px+ */
  @apply md:text-xl;           /* 768px+ */
  @apply lg:text-2xl;          /* 1024px+ */
}

.responsive-spacing {
  @apply py-8;                 /* Mobile */
  @apply sm:py-12;             /* 640px+ */
  @apply md:py-16;             /* 768px+ */
  @apply lg:py-20;             /* 1024px+ */
}
```

## 🎨 **ANIMATION & TRANSITIONS**

### **Hover Effects:**
```css
.hover-lift {
  @apply transition-transform duration-200;
  @apply hover:-translate-y-1 hover:shadow-xl;
}

.hover-glow {
  @apply transition-shadow duration-200;
  @apply hover:shadow-2xl hover:shadow-blue-500/25;
}

.hover-scale {
  @apply transition-transform duration-200;
  @apply hover:scale-105;
}
```

### **Loading States:**
```css
.loading-pulse {
  @apply animate-pulse bg-gray-200 rounded;
}

.loading-spin {
  @apply animate-spin text-blue-600;
}
```

---

## 🎯 **UMSETZUNGSPLAN:**

1. **CSS Variables in Tailwind Config integrieren**
2. **Komponenten-Library in `/src/components/` erstellen**
3. **Design Tokens in separater CSS-Datei definieren**
4. **Storybook für Komponenten-Dokumentation**
5. **Dark Mode Support vorbereiten**

**Diese Dokumentation wird kontinuierlich erweitert basierend auf den Designentscheidungen.**
