# 🚨 AKTUELLE PROJEKT-ISSUES & WIDERSPRÜCHE

**Letzte Aktualisierung:** 19.07.2025

## **🔴 KRITISCHE ISSUES**

### **Issue #001: Massive CSS-Architektur-Verletzungen**

- **Problem:** 304+ Tailwind CSS Classes in beweise.astro, ähnlich in anderen Astro-Dateien
- **Impact:** Verletzt etabliertes 60/30/10 Design-Prinzip
- **Status:** ERKANNT durch Build-Checker v6.0.0
- **Lösung:** Systematische Migration zu semantischen CSS-Klassen erforderlich

### **Issue #002: Verzeichnisstruktur-Konflikte**

- **Problem:** Instructions beziehen sich auf nicht-existierende Verzeichnisse
- **Beispiele:**
  - `docs/projekt/` wird in Instructions erwähnt, existiert aber nicht
  - Leere `docs/change_management/` Verzeichnisse
- **Status:** IDENTIFIKATION ERFORDERLICH
- **Lösung:** Systematische Instruction-Bereinigung nötig

## **🟡 WICHTIGE ISSUES**

### **Issue #003: Projekt-Inventar veraltet**

- **Problem:** `projekt_inventar.md` ist nicht aktuell und unvollständig
- **Impact:** KI hat nicht vollständiges Projektverständnis
- **Status:** BESTÄTIGT durch User
- **Lösung:** Vollständige manuelle Inventarisierung erforderlich

### **Issue #004: Unklare Scopes-Definition**

- **Problem:** User fragt "Was sind mit Scopes gemeint und wie wende ich die Scopes an?"
- **Impact:** Workflow-Unsicherheit
- **Status:** KLÄRUNG AUSSTEHEND
- **Lösung:** Scopes-Dokumentation erstellen

### **Issue #005: Content-Freigabe-Workflow unklar**

- **Problem:** Zentrale Freigabe-Liste für Website-Texte fehlt
- **Impact:** Unklarheit über verwendbare Inhalte
- **Status:** TEILWEISE GEKLÄRT (`docs\website_struktur\origin`)
- **Lösung:** Explizite Freigabe-Markierungen implementieren

## **🟢 OPTIMIERUNGS-ISSUES**

### **Issue #006: Mehrfache Archiv-/Ideen-Ordner**

- **Problem:** Verschiedene Archiv-Verzeichnisse mit ähnlichen Inhalten
- **Impact:** Verwirrung über Ablageorte
- **Status:** STRUKTURELLES PROBLEM
- **Lösung:** Konsolidierung und klare Regeln

### **Issue #007: Automatische Dokumentation unvollständig**

- **Problem:** Manuelle vs. automatische Pflege nicht klar getrennt
- **Impact:** Inkonsistente Dokumentation
- **Status:** TEILWEISE GELÖST (AAR-System aktiv)
- **Lösung:** Vollständige Automatisierung definieren

## **📋 INSTRUCTIONS-KONFLIKTE**

### **Konflikt #001: Verzeichnis-Referenzen**

- **Instruction-Zeile:** Bezug auf `docs/projekt/`
- **Realität:** Verzeichnis existiert nicht
- **Datei:** `.github/copilot-instructions.md`
- **Status:** DOKUMENTIERT

### **Konflikt #002: Leere Dokumentations-Verzeichnisse**

- **Problem:** `docs/change_management/` Struktur angelegt aber leer
- **Impact:** Instructions erwarten Inhalte die nicht existieren
- **Status:** STRUKTURELL

## **✅ BEHOBENE ISSUES (ARCHIVIERT)**

- Build-Checker Implementation ✅
- CSS-Detection System ✅
- Design-System Dokumentation ✅
- SEO-Checker Integration ✅

## **🎯 NÄCHSTE SCHRITTE**

1. **CSS-Migration priorisieren** (Issue #001)
2. **Instruction-Bereinigung** (Konflikt #001, #002)
3. **Projekt-Inventar aktualisieren** (Issue #003)
4. **Scopes-Definition klären** (Issue #004)
