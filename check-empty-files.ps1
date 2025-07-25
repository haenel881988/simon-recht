# 🔍 SICHERER DATEI-ANALYSE-MODUS
# Nur ANZEIGEN, NICHT LÖSCHEN

Write-Host "🔍 SICHERE ANALYSE LEERER DATEIEN..." -ForegroundColor Cyan
Write-Host ""

$candidateFiles = @(
    "docs\checker_entwicklung\css_checker_entwicklung.md",
    "docs\checker_entwicklung\entscheidungen_log.md", 
    "docs\checker_entwicklung\naechste_schritte.md",
    "docs\checker_entwicklung\probleme_und_loesungen.md"
)

Write-Host "📋 ANALYSIERE NUR SICHERE KANDIDATEN..." -ForegroundColor Yellow
Write-Host ""

foreach ($file in $candidateFiles) {
    Write-Host "🔍 Analysiere: $file" -NoNewline
    
    if (-not (Test-Path $file)) {
        Write-Host " - NICHT GEFUNDEN" -ForegroundColor Gray
        continue
    }
    
    try {
        $content = Get-Content $file -Raw -ErrorAction Stop
        $size = (Get-Item $file).Length
        
        if ([string]::IsNullOrWhiteSpace($content)) {
            Write-Host " - LEER ($size Bytes) - SICHER LOESCHBAR" -ForegroundColor Green
        } else {
            $lineCount = (Get-Content $file | Measure-Object -Line).Lines
            Write-Host " - HAT INHALT ($lineCount Zeilen, $size Bytes)" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host " - LESEFEHLER" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🎯 WENN ALLES OK AUSSIEHT:" -ForegroundColor Cyan  
Write-Host "   Dann: .\cleanup-empty-files.ps1" -ForegroundColor White
Write-Host ""
