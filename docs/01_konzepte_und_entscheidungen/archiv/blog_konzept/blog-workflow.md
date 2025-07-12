# Blog-Erstellungs-Workflow

## 🎯 Schritt-für-Schritt Anleitung für neue MSP-Blogs

### Phase 1: Vorbereitung & Konzept

1. **Thema definieren**
   - Problem/Pain Point des MSP identifizieren
   - Zielgruppe festlegen (MSP-Inhaber, IT-Techniker, etc.)
   - Fokus-Keyword bestimmen

2. **Titel entwickeln**
   ```bash
   # Titel-Generator verwenden
   npm run blog:slug "Mein geplanter Blog Titel"
   ```
   - Reptiliengehirn-Trigger einbauen (Schmerz, Furcht, Gier)
   - Whitelist-Sprache verwenden
   - Blacklist-Begriffe vermeiden

### Phase 2: Content-Erstellung

3. **Blog-Datei erstellen**
   ```bash
   # Neue Datei im Blog-Verzeichnis
   touch src/content/blog/[GENERIERTER-SLUG].md
   ```

4. **Frontmatter ausfüllen** (aus Template kopieren)
   ```yaml
   ---
   title: "Vollständiger Titel"
   description: "Max. 155 Zeichen, Fokus-Keyword enthalten"
   author: "Simon Haenel"
   datePublished: "YYYY-MM-DD"
   dateModified: "YYYY-MM-DD"
   category: "Lead-Generation" # oder passende Kategorie
   readingTime: "X Min."
   focusKeyword: "Haupt-Keyword"
   keywords: ["Keyword1", "Keyword2", "Keyword3", "Keyword4", "Keyword5"]
   tags: ["Tag1", "Tag2", "Tag3", "Tag4"]
   featured: false
   hasAudio: true # falls Audio geplant
   audioSrc: "/audio/[slug]/[slug].mp3"
   audioTitle: "Kurztitel für Audio"
   audioDescription: "Audio-Beschreibung"
   ---
   ```

5. **AIDA-Struktur verwenden**
   - **Attention:** Schockierender/provokanter Einstieg
   - **Interest:** Problem vertiefen, Schmerz verstärken
   - **Desire:** Lösung präsentieren, Nutzen aufzeigen
   - **Action:** Klarer Call-to-Action

### Phase 3: Qualitätskontrolle

6. **Automatische Validierung**
   ```bash
   npm run blog:validate src/content/blog/[DATEINAME].md
   ```
   - Blacklist-Check
   - Interlinking-Vorschläge
   - Slug-Validierung

7. **Manuelle Checks**
   - [ ] Alle H2/H3-Überschriften enthalten Fokus-Keyword oder Varianten
   - [ ] Mindestens 3 Whitelist-Begriffe verwendet
   - [ ] FAQ-Sektion eingebaut
   - [ ] Call-to-Action vorhanden
   - [ ] Lesezeit realistisch eingeschätzt

### Phase 4: SEO-Optimierung

8. **Keyword-Density prüfen**
   - Fokus-Keyword: 1-2% Density
   - Varianten und verwandte Begriffe einstreuen
   - Natürlichen Lesefluss beibehalten

9. **Interlinking umsetzen**
   - Vorschläge aus Automatisierung umsetzen
   - 2-3 interne Links zu relevanten Blogs
   - 1-2 externe Links zu seriösen Quellen

### Phase 5: Finalisierung

10. **Audio-Content vorbereiten** (optional)
    - Skript für Podcast-Version erstellen
    - Audio-Dateien in `/public/audio/[slug]/` ablegen

11. **Veröffentlichung**
    - Git-Commit mit aussagekräftiger Message
    - Build und Deploy über Vercel
    - Social Media Posts vorbereiten

## 🔧 Verfügbare Tools

```bash
# Slug aus Titel generieren
npm run blog:slug "Mein Blog Titel"

# Blog validieren
npm run blog:validate src/content/blog/mein-blog.md

# Blacklist/Whitelist prüfen
# Automatisch in Validierung enthalten
```

## 📋 Checkliste vor Veröffentlichung

- [ ] Titel triggert Reptiliengehirn
- [ ] Keine Blacklist-Begriffe verwendet
- [ ] Mindestens 3 Whitelist-Begriffe eingebaut
- [ ] AIDA-Struktur befolgt
- [ ] Fokus-Keyword optimal eingesetzt (Titel, H1, H2, Meta-Description)
- [ ] Interlinking umgesetzt
- [ ] Call-to-Action klar definiert
- [ ] Lesezeit realistisch
- [ ] Audio-Content vorbereitet (falls aktiviert)
- [ ] Automatische Validierung bestanden

## 💡 Content-Ideen für weitere Blogs

### Probleme/Pain Points:
- "Warum zahlen meine Kunden immer zu spät?"
- "Meine Techniker sind überlastet - was tun?"
- "Cybersecurity-Vorfälle fressen mein Budget"
- "Kunden verstehen den Wert unserer Services nicht"

### Lösungsansätze:
- MSP-Preismodelle optimieren
- Automatisierung einführen
- Kundenerwartungen managen
- Upselling-Strategien

### Trending-Themen:
- KI in MSP-Businesses
- Remote Work Support
- Compliance und Datenschutz
- Cloud-Migration für KMUs

---

*Aktualisiert: 17.06.2025*
*Nächste Review: Bei Bedarf nach ersten Blog-Erstellungen*
