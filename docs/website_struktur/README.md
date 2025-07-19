# Design und Struktur der Website

**⚠️ MIGRATION STATUS: LEGACY → ASTRO-NATIVE**

**🔄 AKTUELLE SITUATION (19.07.2025):**
Diese Dokumentations-Struktur wird schrittweise zu **Astro-native Content Collections** migriert:

- **NEUE STRUKTUR:** `src/content/` (Astro Content API)
- **LEGACY STRUKTUR:** `docs/website_struktur/` (wird archiviert)

**MIGRATION-PHASES:**

- ✅ **Phase 1:** Instructions & Build-Checker aktualisiert
- 🔄 **Phase 2:** Dokumentations-Updates (AKTIV)
- ⏳ **Phase 3:** Content-Migration zu src/content
- ⏳ **Phase 4:** Legacy-Archivierung

---

## **LEGACY-DOKUMENTATION (wird migriert):**

**Struktur**
Die Struktur der Website wird auf statische und dynamischen Elemente und Seiten aufgeteilt, so wie es von Astro vorgesehen ist.

**Statische Elemente**

sind Header, Footer und die Navigation. Diese werden in den jeweiligen Markdown-Dateien definiert und hier referenziert:
**LEGACY PATH:** `C:\apps\website\simon-recht\01_PLAYBOOK_CONTENT\website_struktur\website_elemente`
**NEUE STRUKTUR:** `src/content/components/` (geplant)

**Header**
**LEGACY:** Der Header ist in `docs\website_struktur\website_elemente\header.md` festgelegt.
**ASTRO-NATIVE:** Wird zu Astro Component mit Content Collection Data

**_Footer_**
**LEGACY:** Der Footer ist in `docs\website_struktur\website_elemente\footer.md` festgelegt.
**ASTRO-NATIVE:** Wird zu Astro Component mit Content Collection Data

**dynamische Elemente**

sind die Inhalte der Seiten, die sich je nach Benutzerinteraktion ändern.
Dynamische Seiten sind die Startseite, Übermich --> Journalisten Unterseite, Blog-Indexseite / Blogseiten und Kontaktformular.

Dazu gehören:

- Startseite
- Über mich
- Blog ✅ **MIGRIERT:** `src/content/blog/`
- Kontakt

**LEGACY PFADE:** `C:\apps\website\simon-recht\01_PLAYBOOK_CONTENT\website_struktur\website_text`
**NEUE STRUKTUR:** `src/content/pages/` (Astro Content Collections)

**Design**

Das gesamte Design der Website wird hier definiert:
`docs\website_struktur\website_design\global_css.md`

**⚠️ DESIGN-HINWEIS:**
Sollten einige Angaben fehlen in der Datei:
`docs\website_struktur\website_design\global_css.md`

Muss die KI zuerst mit mir Rücksprache nehmen und mir die Styling / Design-Fragen direkt in der Datei angeben, vorschläge machen, gemäß der Datei:
`docs\website_struktur\website_design\global_css.md`

---

**🎯 ASTRO-NATIVE BENEFITS:**

- **Content Collections API** für typisiertes Content Management
- **Frontmatter Validation** via Zod Schema
- **Automatische Routing** für Blog & Pages
- **Build-Time Validation** aller Content-Dateien
- **SEO-Optimierung** durch strukturierte Metadaten
