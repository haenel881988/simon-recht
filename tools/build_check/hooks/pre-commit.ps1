# 🚨 SIMON'S PRE-COMMIT HOOK v1.0 (PowerShell)
# 
# 🎯 AUTOMATISCHE INVENTAR-AKTUALISIERUNG VOR COMMIT

Write-Host "🔍 Pre-Commit: Starte Inventar-Update..." -ForegroundColor Cyan

try {
    # Führe Inventory-Scope aus
    Set-Location "tools\build_check"
    $result = & node multi-scope-checker.cjs inventory
    
    # Prüfe ob Inventar-Datei aktualisiert wurde
    $inventoryFile = "..\..\\.github\instructions\organisation\inventar\projekt_inventar.md"
    
    if (Test-Path $inventoryFile) {
        Write-Host "📝 Füge aktualisiertes Inventar zum Commit hinzu..." -ForegroundColor Green
        Set-Location "..\\.."
        & git add $inventoryFile
        Write-Host "✅ Inventar-Update abgeschlossen" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Inventar-Datei nicht gefunden - Commit wird fortgesetzt" -ForegroundColor Yellow
    }
    
    Write-Host "✅ Pre-Commit Hook abgeschlossen" -ForegroundColor Green
    exit 0
    
} catch {
    Write-Host "⚠️ Inventar-Update Fehler: $($_.Exception.Message)" -ForegroundColor Yellow
    Write-Host "✅ Commit wird fortgesetzt (Inventar nicht kritisch)" -ForegroundColor Green
    exit 0
}
