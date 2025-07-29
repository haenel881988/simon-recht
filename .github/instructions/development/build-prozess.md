# 🔧 BUILD-CHECKER INTEGRATION

## **MULTI-SCOPE VALIDATION:**

### **🎯 ZWECK:**
- **Quality Gates** vor jedem Build
- **Cross-Scope Validation** (CSS, SEO, Performance)
- **Automatic Regression Detection**
- **CI/CD Integration Ready**

### **📊 VALIDATION-SCOPES:**
```javascript
scopes: {
  CSS_DESIGN: "Styling & Responsive",
  SEO_CONTENT: "Meta-Tags & Structure", 
  PERFORMANCE: "Build-Zeit & Bundle-Size",
  ACCESSIBILITY: "ARIA & Semantic HTML",
  VSCODE: "Extensions & Settings"
}
```

## **🚀 USAGE:**

### **🔧 BEFEHLE:**
```bash
# Full Multi-Scope Check
node tools/build_check/multi-scope-checker.cjs

# Performance Only
node tools/build_check/performance-checker.cjs

# Install Git Hooks
.\tools\build_check\install-git-hooks.ps1
```

### **📈 METRICS:**
- **Health Score:** 0-100 (Ziel: >80)
- **Build Time:** <3s für Astro Build
- **Bundle Size:** Monitoring & Alerts
- **CSS Validation:** Semantic Classes Check

## **🛡️ QUALITY GATES:**

### **✅ PASS-KRITERIEN:**
- Build erfolgt ohne Errors
- CSS enthält keine Tailwind-Classes
- Meta-Tags vollständig
- Performance-Budget eingehalten

### **❌ FAIL-KRITERIEN:**
- Build-Errors
- Tailwind in Production
- Fehlende Meta-Tags
- Performance-Regression

## **🔄 INTEGRATION:**

### **GIT HOOKS:**
```bash
# Pre-Commit Hook
#!/bin/bash
node tools/build_check/multi-scope-checker.cjs
if [ $? -ne 0 ]; then
  echo "❌ Build-Check failed!"
  exit 1
fi
```

### **VERCEL DEPLOYMENT:**
```json
{
  "buildCommand": "npm run build && node tools/build_check/multi-scope-checker.cjs",
  "outputDirectory": "dist"
}
```
