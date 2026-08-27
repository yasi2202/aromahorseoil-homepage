@echo off
chcp 65001 >nul
cd /d "%~dp0"
title aromahorseoil - Seite ansehen
echo.
echo   Die Seite wird gestartet. Das dauert ein paar Sekunden.
echo.
echo   Der Browser geht gleich von allein auf.
echo   Dieses Fenster bitte offen lassen, solange du die Seite ansiehst.
echo   Zum Beenden einfach dieses Fenster schliessen.
echo.
start "" /min powershell -NoProfile -Command "Start-Sleep -Seconds 12; Start-Process http://localhost:3000"
call npm.cmd run dev
pause
