# DESIGN_KONTRAST_SCOPE - Navigation & Accessibility

## 🎯 SCOPE-DEFINITION

**BEREICH:** Header-Navigation Kontrast-Optimierung
**ZIEL:** Navigation von 4.60:1 auf 6.0:1+ Kontrast verbessern
**EVIDENZ:** Screenshot zeigt visuell schwache Navigation-Lesbarkeit

## 📋 FORENSISCHE SCREENSHOT-ANALYSE

**VISUELLER BEFUND:**

- Header: Sehr dunkler Hintergrund (#1a1d24)
- Navigation-Links: Grau-bläuliche Farbe, matt und schwer lesbar
- Kontrast-Problem: Links visuell grenzwertig erkennbar
- Betroffen: "Startseite", "Über mich", "Blog", "Kontakt"

**TECHNICAL vs. VISUAL GAP:**

- Log-Messung: 4.60:1 (technisch AA-konform)
- Screenshot-Realität: Visuell unzureichend lesbar
- Problem: 4.60:1 zu niedrig für optimale UX

## 🔧 VERBESSERUNGSPLAN

**KONTRAST-ZIELE:**

- Minimum: 6.0:1 (robuste AA-Compliance)
- Optimal: 7.0:1+ (AAA-Standard anstreben)
- Methode: Navigation-Farbe aufhellen bei unverändertem Hintergrund

**TECHNISCHE UMSETZUNG:**

1. Navigation-Farbe von #6b8a9a zu hellerem Ton
2. Hover-States optimieren für bessere Interaktion
3. Active-States für bessere Orientierung

## ✅ INTERNALISIERT: ANHANG-FORENSIK

**NEUE REGEL:** KI muss IMMER alle Anhänge tiefenanalysieren
**FORENSIK-LEVEL:** Pixel-genaue Screenshot-Analyse erforderlich
**DISKREPANZ-ERKENNUNG:** Visual vs. Technical Gaps identifizieren
