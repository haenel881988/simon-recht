# 🧹 AUTOMATISCHE BEREINIGUNG LEERER DATEIEN
# Generiert basierend auf Structure-Optimizer v2.0 Analyse
# Datum: 2025-07-25

Write-Host "🧹 STARTE AUTOMATISCHE BEREINIGUNG LEERER DATEIEN..." -ForegroundColor Cyan
Write-Host ""

# Liste der leeren Dateien (basierend auf Analyzer-Ergebnissen)
$emptyFiles = @(
    "docs\checker_entwicklung\css_checker_entwicklung.md",
    "docs\checker_entwicklung\entscheidungen_log.md", 
    "docs\checker_entwicklung\naechste_schritte.md",
    "docs\checker_entwicklung\probleme_und_loesungen.md",
    "docs\checker_entwicklung\README.md",
    "docs\01_PLAYBOOK_CONTENT\_altes_chaos_archiv\README.md",
    "docs\01_PLAYBOOK_CONTENT\_altes_chaos_archiv\ideen\widerspruchs_regelung.md",
    "docs\todos\archiv\old_todos.md",
    "docs\website_struktur\dynamische-seiten\README.md",
    "docs\website_struktur\origin\README.md",
    "docs\website_struktur\recherche\README.md",
    "docs\website_struktur\statische-seiten\README.md",
    "docs\website_struktur\website_design\README.md",
    "docs\website_struktur\website_elemente\README.md",
    "docs\website_struktur\zielgruppe\README.md"
)

$deletedCount = 0
$notFoundCount = 0
$errorCount = 0

Write-Host "📋 Prüfe $($emptyFiles.Length) potentielle leere Dateien..." -ForegroundColor Yellow
Write-Host ""

foreach ($file in $emptyFiles) {
    Write-Host "🔍 Prüfe: $file" -NoNewline
    
    # Prüfe ob Datei existiert
    if (-not (Test-Path $file)) {
        Write-Host " - NICHT GEFUNDEN" -ForegroundColor Gray
        $notFoundCount++
        continue
    }
    
    try {
        # Prüfe ob Datei wirklich leer ist (0 Bytes oder nur Whitespace)
        $content = Get-Content $file -Raw -ErrorAction Stop
        
        if ([string]::IsNullOrWhiteSpace($content)) {
            # Datei ist leer - sicher löschen
            Remove-Item $file -Force -ErrorAction Stop
            Write-Host " - ✅ GELÖSCHT (leer)" -ForegroundColor Green
            $deletedCount++
        } else {
            # Datei hat Inhalt - nicht löschen
            $lineCount = (Get-Content $file | Measure-Object -Line).Lines
            Write-Host " - ⚠️ HAT INHALT ($lineCount Zeilen) - BEHALTEN" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host " - ❌ FEHLER: $($_.Exception.Message)" -ForegroundColor Red
        $errorCount++
    }
}

Write-Host ""
Write-Host "📊 BEREINIGUNG ABGESCHLOSSEN:" -ForegroundColor Cyan
Write-Host "   ✅ Gelöscht: $deletedCount Dateien" -ForegroundColor Green
Write-Host "   ⚠️ Nicht gefunden: $notFoundCount Dateien" -ForegroundColor Yellow
Write-Host "   ❌ Fehler: $errorCount Dateien" -ForegroundColor Red
Write-Host ""

if ($deletedCount -gt 0) {
    Write-Host "🎯 NÄCHSTE SCHRITTE:" -ForegroundColor Cyan
    Write-Host "   1. git add -A" -ForegroundColor White
    Write-Host "   2. git commit -m 'Cleanup: $deletedCount leere Dateien entfernt'" -ForegroundColor White
    Write-Host "   3. Structure-Optimizer erneut ausführen zur Validierung" -ForegroundColor White
    Write-Host ""
}

Write-Host "✨ Bereinigung abgeschlossen! Workspace ist jetzt aufgeräumter." -ForegroundColor Green
