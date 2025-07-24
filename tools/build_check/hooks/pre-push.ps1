# 🛡️ SIMON'S PRE-PUSH HOOK v1.0 (PowerShell) - VERCEL-DEPLOYMENT-SCHUTZ
# 
# 🎯 GIT-PUSH NUR BEI 100% VERCEL-DEPLOYMENT-GARANTIE

Write-Host "🛡️ Pre-Push: Starte Vercel-Deployment-Validierung..." -ForegroundColor Cyan

try {
    # Führe Vercel-Deployment-Validator aus
    Set-Location "tools\build_check"
    & node core\vercel-deployment-validator.cjs
    
    $validationResult = $LASTEXITCODE
    
    if ($validationResult -eq 0) {
        Write-Host "🚀 Push wird durchgeführt - Vercel-Deployment garantiert!" -ForegroundColor Green
        exit 0
    } else {
        Write-Host "🚫 Push wird blockiert - Deployment-Probleme erkannt!" -ForegroundColor Red
        Write-Host "🔧 Behebe die Fehler und versuche es erneut" -ForegroundColor Yellow
        exit 1
    }
    
} catch {
    Write-Host "💥 Kritischer Fehler bei Deployment-Validierung: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "🚫 Push wird zur Sicherheit blockiert" -ForegroundColor Red
    exit 1
}
