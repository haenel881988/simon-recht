@echo off
REM 🚀 SIMON'S SMART-COMMIT SCRIPT v1.0
REM 
REM 🎯 ERSETZT GIT-HOOKS FÜR WINDOWS
REM 
REM VERWENDUNG:
REM   smart-commit.bat "Commit message"
REM   smart-commit.bat "Feat: Neue Funktion hinzugefügt"

echo 🚀 SIMON'S SMART-COMMIT SCRIPT
echo ================================

if "%~1"=="" (
    echo ❌ FEHLER: Commit-Message erforderlich
    echo 📝 Verwendung: smart-commit.bat "Deine commit message"
    exit /b 1
)

set COMMIT_MSG=%~1

echo 🔍 1. Starte Performance-optimierten Inventar-Update...
cd tools\build_check
node performance-checker.cjs inventory
cd ..\..

echo 📝 2. Füge Änderungen zu Git hinzu...
git add -A

echo 📦 3. Erstelle Commit: %COMMIT_MSG%
git commit -m "%COMMIT_MSG%"

echo 🛡️ 4. Starte Deployment-Validierung...
cd tools\build_check
node core\vercel-deployment-validator.cjs
set VALIDATION_RESULT=%ERRORLEVEL%
cd ..\..

if %VALIDATION_RESULT% equ 0 (
    echo ✅ DEPLOYMENT-VALIDIERUNG BESTANDEN
    echo 🚀 Bereit für Git-Push
    echo.
    echo 💡 NÄCHSTE SCHRITTE:
    echo    git push origin main
    echo.
) else (
    echo ❌ DEPLOYMENT-VALIDIERUNG FEHLGESCHLAGEN
    echo 🚫 Push wird NICHT empfohlen
    echo 🔧 Behebe die Fehler und versuche es erneut
    echo.
    echo 💡 FEHLER BEHEBEN:
    echo    - TypeScript Errors: npm run type-check
    echo    - ESLint Errors: npm run lint --fix
    echo    - Astro Build: npm run build
    echo.
    exit /b 1
)

echo ================================
echo ✅ SMART-COMMIT ABGESCHLOSSEN
