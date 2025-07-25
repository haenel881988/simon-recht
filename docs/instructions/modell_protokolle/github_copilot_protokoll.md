# 🤖 GITHUB COPILOT MODELL-PROTOKOLL

**Erstellt:** 25.07.2025  
**Status:** PLATZHALTER - Manuelle Recherche erforderlich  
**Modell-Identifikation:** GitHub Copilot

---

## 🎯 MODELL-IDENTIFIKATION

**Selbst-Identifikation:** ✅ Erfolgreich  
**Modell-Name:** GitHub Copilot  
**Anbieter:** Microsoft/GitHub  
**Basis-Modell:** [PLATZHALTER - RECHERCHE ERFORDERLICH]

---

## 📊 TOKEN-LIMITS (RECHERCHE ERFORDERLICH)

### **Kontext-Fenster:**

- **Gesamt-Tokens:** [PLATZHALTER - MANUELLE RECHERCHE]
- **Input-Tokens:** [PLATZHALTER - MANUELLE RECHERCHE]
- **Output-Tokens:** [PLATZHALTER - MANUELLE RECHERCHE]
- **Reasoning-Tokens:** [PLATZHALTER - MANUELLE RECHERCHE]

### **Praktische Grenzen:**

- **Maximale Dateigröße:** [PLATZHALTER - TEST ERFORDERLICH]
- **Sicherer Bereich:** [PLATZHALTER - BERECHNUNG NACH RECHERCHE]
- **Warnung bei:** [PLATZHALTER - 80% VON MAXIMUM]
- **Exception bei:** [PLATZHALTER - 90% VON MAXIMUM]

---

## 🚨 BLINDHEITS-ERKENNUNGS-SYSTEM

### **Prävention:**

```
WENN (Dateigröße × 4) > (Token-Limit × 0.8) DANN:
  EXCEPTION: "BLINDHEITS-GEFAHR - Datei zu groß"
  ALTERNATIVEN: read_file mit offset/limit vorschlagen
```

### **Symptom-Erkennung:**

- **Halluzination:** [PLATZHALTER - SYMPTOME DEFINIEREN]
- **Oberflächlichkeit:** [PLATZHALTER - WARNSIGNALE DEFINIEREN]
- **Wiederholungen:** [PLATZHALTER - PATTERN DEFINIEREN]

### **Exception-Format:**

```
⚠️ EXCEPTION_TYPE: GITHUB_COPILOT_BLINDHEITS_WARNUNG
MODELL: GitHub Copilot
ESTIMATED_TOKENS: [Geschätzte Token-Anzahl]
LIMIT_PERCENTAGE: [Prozent der Token-Grenze]
DATEI_GRÖSSE: [KB]
EMPFEHLUNG: [Segmentierung/Alternative Herangehensweise]
SIMON_ACTION_REQUIRED: [Was Simon entscheiden muss]
```

---

## 🔬 FORSCHUNGS-AUFGABEN (SIMON)

### **Priorität 1 - Token-Limits:**

- [ ] GitHub Copilot offizielle Dokumentation durchsuchen
- [ ] Microsoft Learn/GitHub Docs Token-Limits finden
- [ ] Community-Posts/Reddit nach Erfahrungswerten durchsuchen
- [ ] Praktische Tests mit großen Dateien durchführen

### **Priorität 2 - Modell-Details:**

- [ ] Basis-Modell identifizieren (GPT-4 basiert?)
- [ ] Update-Zyklen und Versioning verstehen
- [ ] API-Limits vs. Chat-Interface-Limits unterscheiden

### **Priorität 3 - Blindheits-Pattern:**

- [ ] Typische Blindheits-Symptome dokumentieren
- [ ] Threshold-Tests durchführen (ab welcher Dateigröße?)
- [ ] Context-Window-Verhalten bei verschiedenen Aufgaben testen

---

## 📋 VALIDIERUNGS-TESTS

### **Test 1: Dateigröße-Schwellen**

```
- 10KB Datei: [PLATZHALTER - TESTERGEBNIS]
- 25KB Datei: [PLATZHALTER - TESTERGEBNIS]
- 50KB Datei: [PLATZHALTER - TESTERGEBNIS]
- 100KB Datei: [PLATZHALTER - TESTERGEBNIS]
```

### **Test 2: Kontext-Akkumulation**

```
- Kurzer Chat (5 Nachrichten): [PLATZHALTER - VERHALTEN]
- Mittlerer Chat (20 Nachrichten): [PLATZHALTER - VERHALTEN]
- Langer Chat (50+ Nachrichten): [PLATZHALTER - VERHALTEN]
```

### **Test 3: Komplexe Analysen**

```
- Multi-Datei-Analyse: [PLATZHALTER - GRENZEN]
- Code-Review großer Dateien: [PLATZHALTER - GRENZEN]
- Umfangreiche Instructions: [PLATZHALTER - GRENZEN]
```

---

## ⚙️ ANPASSUNGEN NACH RECHERCHE

**Nach Abschluss der Recherche:**

1. Alle [PLATZHALTER] durch echte Werte ersetzen
2. Blindheits-Erkennungs-System kalibrieren
3. Exception-Schwellen definieren
4. Präventive Maßnahmen implementieren
5. In Instructions internalisieren

---

## 📊 BENCHMARK-VERGLEICH (ZUKÜNFTIG)

| Modell         | Token-Limit   | Datei-Limit   | Blindheits-Schwelle |
| -------------- | ------------- | ------------- | ------------------- |
| GitHub Copilot | [PLATZHALTER] | [PLATZHALTER] | [PLATZHALTER]       |
| GPT-4          | [PLATZHALTER] | [PLATZHALTER] | [PLATZHALTER]       |
| Claude         | [PLATZHALTER] | [PLATZHALTER] | [PLATZHALTER]       |
| Gemini         | [PLATZHALTER] | [PLATZHALTER] | [PLATZHALTER]       |

**Ziel:** Optimale Modell-Auswahl je nach Aufgabe und Dateigröße
