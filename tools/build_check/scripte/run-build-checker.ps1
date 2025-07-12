# 🤖 BUILD-CHECKER POWERSHELL LAUNCHER
# 
# ZWECK: Einfache Ausführung des Build-Checkers mit PowerShell
# VERWENDUNG: .\run-build-checker.ps1
# 
# WICHTIG: Verwendet ausschließlich PowerShell-Syntax wie gefordert

Write-Host "🤖 BUILD-CHECKER WIRD GESTARTET..." -ForegroundColor Cyan
Write-Host "📅 Zeitstempel: $(Get-Date -Format 'dd.MM.yyyy HH:mm:ss')" -ForegroundColor Gray

# Arbeitsverzeichnis wechseln
Set-Location "c:\apps\website\simon-recht"

try {
    Write-Host "🚀 Führe Build-Checker aus..." -ForegroundColor Yellow
    
    # Node.js Build-Checker ausführen
    node "tools\build_check\scripte\build-checker.cjs"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ BUILD-CHECKER ERFOLGREICH ABGESCHLOSSEN" -ForegroundColor Green
        Write-Host "📄 Log-Datei wurde in tools\build_check\logfiles\ gespeichert" -ForegroundColor Gray
    } else {
        Write-Host "❌ BUILD-CHECKER MIT FEHLERN BEENDET" -ForegroundColor Red
    }
    
} catch {
    Write-Host "❌ FEHLER BEIM AUSFÜHREN DES BUILD-CHECKERS:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""
Write-Host "🔍 Möchten Sie die neueste Log-Datei anzeigen? (j/n)" -ForegroundColor Yellow
$response = Read-Host

if ($response -eq "j" -or $response -eq "J" -or $response -eq "ja") {
    try {
        $logDir = "tools\build_check\logfiles"
        $latestLog = Get-ChildItem -Path $logDir -Filter "*.md" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
        
        if ($latestLog) {
            Write-Host "📄 Öffne Log-Datei: $($latestLog.Name)" -ForegroundColor Cyan
            notepad.exe $latestLog.FullName
        } else {
            Write-Host "❌ Keine Log-Datei gefunden" -ForegroundColor Red
        }
    } catch {
        Write-Host "❌ Fehler beim Öffnen der Log-Datei: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🎯 BUILD-CHECKER SITZUNG BEENDET" -ForegroundColor Cyan
