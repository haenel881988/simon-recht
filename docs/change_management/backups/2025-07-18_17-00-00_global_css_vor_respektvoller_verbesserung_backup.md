# BACKUP - GLOBAL_CSS.MD VOR RESPEKTVOLLER VERBESSERUNG

# Datum: 18.07.2025 - 17:00:00

# Grund: Backup vor Vervollständigung der leeren Bereiche (OHNE Überschreibung bestehender Definitionen)

Diese Datei dient dazu, in einfacher Sprache das Design zu beschreiben.

# Website Design - Global CSS

Statische Elemente:
**Header**

- Dunkelblauer Hintergrund (#1E3A8A) mit weißer Schrift.
- Header-Animation-hochscrollen: Beim Hochscrollen wird der Header eingeblendet.
- Header-Animation-unterscrollen: Header wird ausgeblendet.

**_Menüleiste:_**

- Burger-Menü-Icon (drei horizontale Striche)
- Burger-Menü-Animation-Hintergrund: Hellblau (#3B82F6) mit weißer Schrift.
- Burger-Menü-Animation: Wenn 3 Sekunden lang keine Interaktion erfolgt, wird das Menü ausgeblendet.

**Footer**

- Dunkelblauer Hintergrund (#1E3A8A) mit weißer Schrift.
- Keine Animation nötig!

Dynamische Elemente:

# Universelles Styling

Der Hintergrund ist komplett in dunkelblau (#1E3A8A) gehalten, um eine konsistente und beruhigende Atmosphäre zu schaffen. Die Schriftfarbe ist weiß, um einen klaren Kontrast zu bieten und die Lesbarkeit zu gewährleisten.
Generell gilt, die website ist minimalistisch und schlicht gehalten.

# Schriftarten

**H1:**

**_H2:_**

**_H3:_**

**_H4:_**

**_Text:_**

**_Buttons:_**

- tesla Hintergrund (#3B82F6) mit kyberblauer (abgeleitet aus dem Star Wars Universum) Schriftfarbe.
- Button-Animation-Text: Beim Hover-Effekt wird der Text leicht vergrößert und erhält einen roten Glowing-Effekt (#EF4444).

**Startseite**

**_Hero-Section_**

- 2-Spalten Grid Layout (1fr 1fr) mit 4rem Gap
- Linke Spalte: H1 Headline + größerer Subtext (1.25rem)
- Rechte Spalte: Bild 300x300px, rounded corners (1rem), Schatten
- Mobile: 1-Spalte Layout, zentriert

**_1. Abschnitt: Proof of Concept_**

- H2 zentriert mit 3rem margin-bottom
- Grüne Card-Border (#10B981) für Gerichtsurteil
- Blockquote mit 1.25rem font-size, italic
  H
  **_2. Abschnitt: Das System_**

- Leichter transparenter Hintergrund (rgba(255,255,255,0.05))
- Rote H3 (#EF4444) für "Die bittere Wahrheit"
- Rote Card-Border (#EF4444) für Anwalt vs. ChatGPT
- Zentrierter Text mit 1.125rem font-size

**_3. Abschnitt: 3-Säulen-Methode_**

- 3-Spalten Grid (auto-fit, minmax(300px, 1fr))
- Card-Design für jede Säule
- H4 Headlines für Säulen-Titel
- Orange Links (#F97316) für weitere Infos

**_4. Abschnitt: Beta-Anmeldung (CTA)_**

- Transparenter Hintergrund (rgba(255,255,255,0.05))
- Beta-Highlight Box: Grüner Hintergrund (rgba(16,185,129,0.2)) mit grüner Border (#10B981)
- Checkmark-Liste mit Flex-Layout (✅ + Text linksbündig)
- Großer Button (1.25rem font-size, 1rem 3rem padding)

**_5. Abschnitt: FAQ_**

- Standard Hintergrund (dunkelblau #1E3A8A)
- H3 mit ❓ Emoji für Fragen
- Maximale Breite 800px, zentriert
- Abschließender roter Call-out (#EF4444) für Motivation

**Über mich**

**Kontaktformular**

**Blog-Indexseite / Beiträge**

- Gleicher dunkelblauer Hintergrund (#1E3A8A) wie Rest der Website
- Blog-Grid Layout für Beitrags-Übersicht
- Orange Links (#F97316) für Blog-Verlinkungen
