---
name: 🚨 Veraltete Datenanalyse
about: Melde wenn KI veraltete Log-Dateien oder falsche Zeitstempel verwendet
title: "[VERALTETE DATEN] KI analysiert Log vom [DATUM]"
labels: ["bug", "data-integrity", "ai-behavior"]
assignees: []
---

## 🚨 Problem-Beschreibung

**KI hat veraltete Daten analysiert:**

**Erwartete Log-Datei:** `simon-build-checker-v4-YYYY-MM-DD`
**Tatsächlich analysierte Datei:** `[DATEINAME]`
**Aktuelles Datum:** {{ date }}
**Analysiertes Datum:** [EINGEBEN]

## 📋 Reproduktions-Schritte

1. [Beschreibe den Prompt/Befehl]
2. [KI-Antwort mit falschen Zeitstempel]
3. [Erwartetes vs. tatsächliches Verhalten]

## 🎯 Erwartetes Verhalten

- [ ] KI sollte neueste Log-Datei automatisch finden
- [ ] Zeitstempel-Validierung vor Analyse
- [ ] Warnung bei veralteten Daten (>24h)

## 🔧 Lösungsvorschlag

- [ ] Symlink auf aktuelle Log-Datei erstellen
- [ ] KI-Instructions für Zeitstempel-Check erweitern
- [ ] Automatische Log-Rotation implementieren

## 📊 Kontext

**Build-Checker-Version:** [v4.0/v5.0]
**Betroffene Dateien:**

- `tools/build_check/logfiles/[DATEI]`
- `.github/copilot-instructions.md`

## 🚨 Kritikalität

- [ ] Niedrig - Keine Auswirkungen
- [ ] Mittel - Falsche Analyse-Ergebnisse
- [ ] Hoch - Verwirrung über Projekt-Status
- [x] Kritisch - KI ignoriert Instructions
