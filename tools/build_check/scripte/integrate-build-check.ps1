# 🚀 BUILD-CHECK INTEGRATION SCRIPT
# 
# ZWECK: Integration des Build-Checkers in den bestehenden Build-Prozess
# VERWENDUNG: Wird automatisch vom build.cjs aufgerufen
# 
# WICHTIG: Arbeitet unabhängig vom Vercel Build und verwendet nur organische Optimierungen

param(
    [switch]$Verbose = $false,
    [switch]$SkipArchive = $false
)

Write-Host "🤖 BUILD-CHECK INTEGRATION STARTET..." -ForegroundColor Cyan

# Arbeitsverzeichnis setzen
Set-Location "c:\apps\website\simon-astro"

try {
    if ($Verbose) {
        Write-Host "🔍 Verbose Mode: Detaillierte Ausgaben aktiviert" -ForegroundColor Yellow
    }
    
    Write-Host "🚀 Führe Build-Checker aus..." -ForegroundColor Green
    
    # Build-Checker ausführen
    $checkerResult = node "tools\build_check\scripte\build-checker.cjs"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ BUILD-CHECKER ERFOLGREICH" -ForegroundColor Green
        
        # Neueste Log-Datei finden
        $logDir = "tools\build_check\logfiles"
        $latestLog = Get-ChildItem -Path $logDir -Filter "build-checker-*.md" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
        
        if ($latestLog) {
            Write-Host "📄 Log-Datei erstellt: $($latestLog.Name)" -ForegroundColor Gray
            
            if ($Verbose) {
                Write-Host "📊 Build-Check Details:" -ForegroundColor Cyan
                $logContent = Get-Content $latestLog.FullName -Raw
                
                # Health Score extrahieren
                if ($logContent -match "Build-Health-Score:\s*(\d+)/100") {
                    $healthScore = $matches[1]
                    if ($healthScore -ge 90) {
                        Write-Host "🏆 Excellent Health Score: $healthScore/100" -ForegroundColor Green
                    } elseif ($healthScore -ge 70) {
                        Write-Host "⚠️ Good Health Score: $healthScore/100" -ForegroundColor Yellow
                    } else {
                        Write-Host "🔴 Needs Attention: $healthScore/100" -ForegroundColor Red
                    }
                }
                
                # Issue Count extrahieren
                if ($logContent -match "Gesamt-Issues:\s*(\d+)") {
                    $totalIssues = $matches[1]
                    Write-Host "📋 Total Issues gefunden: $totalIssues" -ForegroundColor Gray
                }
            }
            
            # Auto-Dokumentation (optional)
            Write-Host "📝 Dokumentiere Build-Check..." -ForegroundColor Gray
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            $docEntry = "[$timestamp] Build-Check completed - Log: $($latestLog.Name)"
            
            # Dokumentation in AAR hinzufügen (falls gewünscht)
            # Add-Content -Path "docs\00_core_aktiv\aenderungsprotokoll.md" -Value "`n- $docEntry"
            
        } else {
            Write-Host "⚠️ Keine Log-Datei gefunden" -ForegroundColor Yellow
        }
        
    } else {
        Write-Host "❌ BUILD-CHECKER FEHLER (Exit Code: $LASTEXITCODE)" -ForegroundColor Red
        return $LASTEXITCODE
    }
    
} catch {
    Write-Host "❌ FEHLER BEIM BUILD-CHECK:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    return 1
}

Write-Host "🎯 BUILD-CHECK INTEGRATION ABGESCHLOSSEN" -ForegroundColor Cyan
return 0
