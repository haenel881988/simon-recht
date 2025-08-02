# 📺 MEDIA TOOLS

**Zweck:** Medien-Konvertierung und Optimierung für Website

## **📁 DATEIEN:**

### **🖼️ BILD-KONVERTIERUNG:**

- `convert-to-webp.js` - Konvertiert Bilder zu WebP-Format für optimale Performance

## **🚀 USAGE:**

```bash
# WebP Konvertierung
node convert-to-webp.js

# Batch-Konvertierung (alle unterstützten Formate)
node convert-to-webp.js --batch --source=public/assets/images
```

## **📊 VORTEILE:**

- **Performance:** WebP reduziert Dateigröße um 25-35%
- **Qualität:** Verlustfreie Kompression möglich
- **SEO:** Bessere Ladezeiten verbessern Rankings
- **UX:** Schnellere Seitenladezeiten

## **🎯 UNTERSTÜTZTE FORMATE:**

```
INPUT:  .jpg, .jpeg, .png, .gif
OUTPUT: .webp (optimiert für Web)
```

## **⚠️ BACKUP:**

- Originale werden standardmäßig behalten
- `--replace` Flag für direktes Ersetzen
- Backup-Verzeichnis: `public/assets/images/backup/`

## **🔗 INTEGRATION:**

- Mit `src/` für Astro-Component-Optimierung
- Mit `public/assets/` für statische Assets
- Mit Build-Prozess für automatische Optimierung
