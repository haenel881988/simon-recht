# 🗂️ INTELLIGENTE LOG-ARCHIVIERUNG
# Automatisches Management alter Build-Checker Logs

param(
    [int]$MaxAgeMinutes = 5,
    [string]$LogDir = "tools\build_check\logfiles",
    [string]$ArchiveDir = "tools\build_check\logfiles\archive"
)

Write-Host "🚀 STARTE INTELLIGENTE LOG-ARCHIVIERUNG" -ForegroundColor Cyan

# Erstelle Archiv-Verzeichnis falls nicht vorhanden
$TodayArchive = Join-Path $ArchiveDir (Get-Date -Format "yyyy-MM-dd")
if (!(Test-Path $TodayArchive)) {
    New-Item -ItemType Directory -Path $TodayArchive -Force
    Write-Host "📁 ARCHIV-ORDNER ERSTELLT: $TodayArchive" -ForegroundColor Green
}

# Finde alle Build-Checker Logs
$AllLogs = Get-ChildItem -Path $LogDir -Filter "simon-build-checker-*.md" -File

Write-Host "🔍 GEFUNDENE LOGS: $($AllLogs.Count)" -ForegroundColor Yellow

# Kategorisiere Logs nach Alter
$CurrentLogs = @()
$OldLogs = @()
$CutoffTime = (Get-Date).AddMinutes(-$MaxAgeMinutes)

foreach ($Log in $AllLogs) {
    if ($Log.LastWriteTime -gt $CutoffTime) {
        $CurrentLogs += $Log
        Write-Host "✅ AKTUELL: $($Log.Name) ($(($Log.LastWriteTime).ToString('HH:mm:ss')))" -ForegroundColor Green
    } else {
        $OldLogs += $Log  
        Write-Host "⏰ VERALTET: $($Log.Name) ($(($Log.LastWriteTime).ToString('HH:mm:ss')))" -ForegroundColor Red
    }
}

# Verschiebe veraltete Logs ins Archiv
if ($OldLogs.Count -gt 0) {
    Write-Host "📦 ARCHIVIERE $($OldLogs.Count) VERALTETE LOGS..." -ForegroundColor Yellow
    
    foreach ($OldLog in $OldLogs) {
        $DestPath = Join-Path $TodayArchive $OldLog.Name
        Move-Item -Path $OldLog.FullName -Destination $DestPath -Force
        Write-Host "  📁 $($OldLog.Name) → ARCHIV" -ForegroundColor Gray
    }
} else {
    Write-Host "✅ KEINE VERALTETEN LOGS ZUM ARCHIVIEREN" -ForegroundColor Green
}

# Aktualisiere Symlink wenn vorhanden
$SymlinkPath = Join-Path $LogDir "current-build-log.md"
if (Test-Path $SymlinkPath) {
    # Prüfe ob Symlink noch gültig ist
    $Target = Get-Item $SymlinkPath | Select-Object -ExpandProperty Target
    if ($Target -and !(Test-Path (Join-Path $LogDir $Target))) {
        Remove-Item $SymlinkPath -Force
        Write-Host "🗑️ VERALTETER SYMLINK ENTFERNT" -ForegroundColor Yellow
    }
}

# Erstelle neuen Symlink falls aktuelle Logs vorhanden
if ($CurrentLogs.Count -gt 0) {
    $LatestLog = $CurrentLogs | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    
    if (Test-Path $SymlinkPath) {
        Remove-Item $SymlinkPath -Force
    }
    
    # PowerShell Symlink (Windows)
    New-Item -ItemType SymbolicLink -Path $SymlinkPath -Target $LatestLog.Name -Force | Out-Null
    Write-Host "🔗 NEUER SYMLINK: current-build-log.md → $($LatestLog.Name)" -ForegroundColor Green
} else {
    # Erstelle BUILD-REQUIRED Marker
    $BuildRequired = Join-Path $LogDir "build-required.txt"
    "🚨 KEINE AKTUELLEN LOGS - BUILD ERFORDERLICH!" | Out-File $BuildRequired -Encoding UTF8
    Write-Host "🚨 BUILD-REQUIRED MARKER ERSTELLT" -ForegroundColor Red
}

# Zusammenfassung
Write-Host "`n📊 ARCHIVIERUNGS-ZUSAMMENFASSUNG:" -ForegroundColor Cyan
Write-Host "  ✅ Aktuelle Logs: $($CurrentLogs.Count)" -ForegroundColor Green
Write-Host "  📦 Archivierte Logs: $($OldLogs.Count)" -ForegroundColor Yellow
Write-Host "  🕒 Max-Alter: $MaxAgeMinutes Minuten" -ForegroundColor Gray

if ($CurrentLogs.Count -eq 0) {
    Write-Host "`n🚨 WARNUNG: KEINE AKTUELLEN LOGS!" -ForegroundColor Red
    Write-Host "   Build-Checker muss ausgeführt werden!" -ForegroundColor Yellow
    exit 1
} else {
    Write-Host "`n✅ LOG-ARCHIVIERUNG ERFOLGREICH" -ForegroundColor Green
    exit 0
}
