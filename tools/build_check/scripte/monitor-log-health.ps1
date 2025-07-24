# 🩺 LOG-HEALTH-MONITOR
# Kontinuierliche Überwachung der Build-Checker Log-Integrität

param(
    [switch]$Continuous,
    [int]$CheckIntervalSeconds = 60
)

function Test-LogHealth {
    $LogDir = "tools\build_check\logfiles"
    $ArchiveDir = "$LogDir\archive"
    $MaxAgeMinutes = 5
    
    $Health = @{
        Status = "UNKNOWN"
        CurrentLogs = 0
        OldLogs = 0
        SymlinkValid = $false
        LastLogAge = $null
        Recommendations = @()
        Score = 0
    }
    
    # Prüfe aktuelle Logs
    $AllLogs = Get-ChildItem -Path $LogDir -Filter "simon-build-checker-*.md" -File -ErrorAction SilentlyContinue
    $CutoffTime = (Get-Date).AddMinutes(-$MaxAgeMinutes)
    
    $CurrentLogs = $AllLogs | Where-Object { $_.LastWriteTime -gt $CutoffTime }
    $OldLogs = $AllLogs | Where-Object { $_.LastWriteTime -le $CutoffTime }
    
    $Health.CurrentLogs = $CurrentLogs.Count
    $Health.OldLogs = $OldLogs.Count
    
    # Symlink-Validierung
    $SymlinkPath = Join-Path $LogDir "current-build-log.md"
    if (Test-Path $SymlinkPath) {
        $Target = Get-Item $SymlinkPath | Select-Object -ExpandProperty Target -ErrorAction SilentlyContinue
        if ($Target -and (Test-Path (Join-Path $LogDir $Target))) {
            $Health.SymlinkValid = $true
        }
    }
    
    # Neuestes Log-Alter
    if ($AllLogs.Count -gt 0) {
        $NewestLog = $AllLogs | Sort-Object LastWriteTime -Descending | Select-Object -First 1
        $Health.LastLogAge = [math]::Round(((Get-Date) - $NewestLog.LastWriteTime).TotalMinutes, 1)
    }
    
    # Health-Score berechnen
    $Score = 0
    
    if ($Health.CurrentLogs -gt 0) { $Score += 40 }
    if ($Health.OldLogs -eq 0) { $Score += 20 }
    if ($Health.SymlinkValid) { $Score += 20 }
    if ($Health.LastLogAge -and $Health.LastLogAge -lt 2) { $Score += 20 }
    
    $Health.Score = $Score
    
    # Status-Bewertung
    switch ($Score) {
        { $_ -ge 80 } { $Health.Status = "EXCELLENT" }
        { $_ -ge 60 } { $Health.Status = "GOOD" }
        { $_ -ge 40 } { $Health.Status = "WARNING" }
        { $_ -ge 20 } { $Health.Status = "CRITICAL" }
        default { $Health.Status = "FAILURE" }
    }
    
    # Empfehlungen generieren
    if ($Health.CurrentLogs -eq 0) {
        $Health.Recommendations += "🚨 SOFORT: Build-Checker ausführen - keine aktuellen Logs!"
    }
    
    if ($Health.OldLogs -gt 0) {
        $Health.Recommendations += "📦 Archivierung: $($Health.OldLogs) veraltete Logs archivieren"
    }
    
    if (-not $Health.SymlinkValid) {
        $Health.Recommendations += "🔗 Symlink: current-build-log.md erstellen/reparieren"
    }
    
    if ($Health.LastLogAge -and $Health.LastLogAge -gt 10) {
        $Health.Recommendations += "⏰ Veraltung: Logs sind $($Health.LastLogAge) Min alt - neuen Build erwägen"
    }
    
    return $Health
}

function Show-HealthReport {
    param($Health)
    
    $StatusColor = switch ($Health.Status) {
        "EXCELLENT" { "Green" }
        "GOOD" { "Cyan" }
        "WARNING" { "Yellow" }
        "CRITICAL" { "Red" }
        "FAILURE" { "DarkRed" }
    }
    
    Write-Host "`n🩺 LOG-HEALTH-REPORT" -ForegroundColor Cyan
    Write-Host "=" * 50 -ForegroundColor Gray
    
    Write-Host "📊 STATUS: " -NoNewline -ForegroundColor White
    Write-Host $Health.Status -ForegroundColor $StatusColor
    
    Write-Host "🎯 SCORE: " -NoNewline -ForegroundColor White
    Write-Host "$($Health.Score)/100" -ForegroundColor $StatusColor
    
    Write-Host "📄 AKTUELLE LOGS: " -NoNewline -ForegroundColor White
    Write-Host $Health.CurrentLogs -ForegroundColor $(if ($Health.CurrentLogs -gt 0) { "Green" } else { "Red" })
    
    Write-Host "⏰ VERALTETE LOGS: " -NoNewline -ForegroundColor White
    Write-Host $Health.OldLogs -ForegroundColor $(if ($Health.OldLogs -eq 0) { "Green" } else { "Yellow" })
    
    Write-Host "🔗 SYMLINK: " -NoNewline -ForegroundColor White
    Write-Host $(if ($Health.SymlinkValid) { "✅ GÜLTIG" } else { "❌ UNGÜLTIG" }) -ForegroundColor $(if ($Health.SymlinkValid) { "Green" } else { "Red" })
    
    if ($Health.LastLogAge) {
        Write-Host "🕒 LETZTER LOG: " -NoNewline -ForegroundColor White
        Write-Host "$($Health.LastLogAge) Minuten alt" -ForegroundColor $(if ($Health.LastLogAge -lt 5) { "Green" } else { "Yellow" })
    }
    
    if ($Health.Recommendations.Count -gt 0) {
        Write-Host "`n💡 EMPFEHLUNGEN:" -ForegroundColor Yellow
        foreach ($Rec in $Health.Recommendations) {
            Write-Host "  $Rec" -ForegroundColor Gray
        }
    }
    
    Write-Host "=" * 50 -ForegroundColor Gray
    Write-Host "⏰ GEPRÜFT: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" -ForegroundColor Gray
}

# Haupt-Ausführung
if ($Continuous) {
    Write-Host "🔄 KONTINUIERLICHER LOG-HEALTH-MONITOR GESTARTET" -ForegroundColor Green
    Write-Host "   Prüfung alle $CheckIntervalSeconds Sekunden" -ForegroundColor Gray
    Write-Host "   Drücke Ctrl+C zum Beenden`n" -ForegroundColor Gray
    
    while ($true) {
        $Health = Test-LogHealth
        Show-HealthReport $Health
        
        Start-Sleep -Seconds $CheckIntervalSeconds
        Clear-Host
    }
} else {
    $Health = Test-LogHealth
    Show-HealthReport $Health
    
    # Exit-Code basierend auf Health
    switch ($Health.Status) {
        "EXCELLENT" { exit 0 }
        "GOOD" { exit 0 }
        "WARNING" { exit 1 }
        "CRITICAL" { exit 2 }
        "FAILURE" { exit 3 }
    }
}
