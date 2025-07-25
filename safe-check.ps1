# SICHERE DATEI-ANALYSE
Write-Host "SICHERE ANALYSE LEERER DATEIEN..." -ForegroundColor Cyan

$candidateFiles = @(
    "docs\checker_entwicklung\css_checker_entwicklung.md",
    "docs\checker_entwicklung\entscheidungen_log.md", 
    "docs\checker_entwicklung\naechste_schritte.md",
    "docs\checker_entwicklung\probleme_und_loesungen.md"
)

foreach ($file in $candidateFiles) {
    Write-Host "Analysiere: $file" -NoNewline
    
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
            Write-Host " - HAT INHALT ($lineCount Zeilen)" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host " - LESEFEHLER" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "WENN ALLES OK:" -ForegroundColor Cyan  
Write-Host "Dann manuell loeschen oder Script anpassen" -ForegroundColor White
