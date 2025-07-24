# SIMON'S GIT-HOOKS INSTALLER v1.0
#
# INSTALLIERT DEPLOYMENT-SCHUTZ UND INVENTAR-AUTOMATION

Write-Host "SIMON'S GIT-HOOKS INSTALLER" -ForegroundColor Cyan
Write-Host "Installiere Deployment-Schutz und Inventar-Automation..." -ForegroundColor White
Write-Host ""

try {
    $projectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
    $hooksDir = Join-Path $projectRoot ".git\hooks"
    
    Write-Host "Projekt-Root: $projectRoot" -ForegroundColor Gray
    Write-Host "Git-Hooks-Verzeichnis: $hooksDir" -ForegroundColor Gray
    Write-Host ""
    
    # Prüfe ob .git/hooks Verzeichnis existiert
    if (-not (Test-Path $hooksDir)) {
        throw "Git-Hooks-Verzeichnis nicht gefunden. Bist du in einem Git-Repository?"
    }
    
    # Installiere Pre-Commit Hook
    Write-Host "Installiere Pre-Commit Hook..." -ForegroundColor Yellow
    $preCommitTarget = Join-Path $hooksDir "pre-commit"
    
    $preCommitContent = @"
#!/bin/sh
# SIMON'S PRE-COMMIT HOOK - PowerShell Wrapper
powershell.exe -ExecutionPolicy Bypass -File "tools/build_check/hooks/pre-commit.ps1"
"@
    
    Set-Content -Path $preCommitTarget -Value $preCommitContent -Encoding UTF8
    Write-Host "Pre-Commit Hook installiert" -ForegroundColor Green
    
    # Installiere Pre-Push Hook
    Write-Host "Installiere Pre-Push Hook..." -ForegroundColor Yellow
    $prePushTarget = Join-Path $hooksDir "pre-push"
    
    $prePushContent = @"
#!/bin/sh
# SIMON'S PRE-PUSH HOOK - PowerShell Wrapper
powershell.exe -ExecutionPolicy Bypass -File "tools/build_check/hooks/pre-push.ps1"
"@
    
    Set-Content -Path $prePushTarget -Value $prePushContent -Encoding UTF8
    Write-Host "Pre-Push Hook installiert" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "===========================================================" -ForegroundColor Cyan
    Write-Host "GIT-HOOKS ERFOLGREICH INSTALLIERT!" -ForegroundColor Green
    Write-Host "===========================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "INSTALLIERTE HOOKS:" -ForegroundColor White
    Write-Host "   Pre-Commit: Automatische Inventar-Updates" -ForegroundColor Gray
    Write-Host "   Pre-Push: Vercel-Deployment-Validierung" -ForegroundColor Gray
    Write-Host ""
    Write-Host "AB SOFORT AKTIV:" -ForegroundColor White
    Write-Host "   Inventar wird automatisch vor jedem Commit aktualisiert" -ForegroundColor Gray
    Write-Host "   Git-Push nur bei 100% Vercel-Deployment-Garantie" -ForegroundColor Gray
    Write-Host "   Fehlerhafte Builds werden automatisch blockiert" -ForegroundColor Gray
    Write-Host ""
    Write-Host "TESTING:" -ForegroundColor White
    Write-Host "   Test Pre-Commit: git commit --allow-empty -m 'Test Inventar-Update'" -ForegroundColor Gray
    Write-Host "   Test Pre-Push: git push origin HEAD (nur bei erfolgreichen Build)" -ForegroundColor Gray
    Write-Host ""
    Write-Host "DEPLOYMENT-SCHUTZ AKTIV - Zero-Surprise-Deployments garantiert!" -ForegroundColor Green
    
} catch {
    Write-Host ""
    Write-Host "INSTALLATION FEHLGESCHLAGEN:" -ForegroundColor Red
    Write-Host "   $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "LOESUNGEN:" -ForegroundColor Yellow
    Write-Host "   1. Fuehre das Script im Projekt-Root aus" -ForegroundColor Gray
    Write-Host "   2. Stelle sicher, dass du in einem Git-Repository bist" -ForegroundColor Gray
    Write-Host "   3. Pruefe PowerShell-Berechtigungen" -ForegroundColor Gray
    
    exit 1
}
