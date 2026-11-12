@echo off
title Aetherovate Software Solutions - Local Launcher
color 0B
cls

echo =====================================================================
echo          AETHEROVATE SOFTWARE SOLUTIONS - LAUNCHER
echo      Engineering Ideas Into Live, Scalable Software.
echo =====================================================================
echo.

cd /d "%~dp0"

:: 1. Copy user uploaded video and project screenshots if available
set "SOURCE_VIDEO=C:\Users\dell\.gemini\antigravity\brain\dc79335b-2f79-4dfe-b27c-db1217737066\.user_uploaded\media_1794298419845_7882ff0e.mp4"
if exist "%SOURCE_VIDEO%" (
    if not exist "%~dp0company-workflow.mp4" (
        echo [INFO] Syncing Corporate Video to project directory...
        copy /y "%SOURCE_VIDEO%" "%~dp0company-workflow.mp4" >nul
        echo [OK] Video synced successfully!
    )
)

if not exist "%~dp0assets" mkdir "%~dp0assets"
set "IMG_KONTRACTOR=C:\Users\dell\.gemini\antigravity\brain\dc79335b-2f79-4dfe-b27c-db1217737066\.user_uploaded\media_1794464580811_bc404f94.jpg"
set "IMG_SOLAR=C:\Users\dell\.gemini\antigravity\brain\dc79335b-2f79-4dfe-b27c-db1217737066\.user_uploaded\media_1794464580808_eb3fec4c.jpg"
set "IMG_CEO=C:\Users\dell\.gemini\antigravity\brain\dc79335b-2f79-4dfe-b27c-db1217737066\.user_uploaded\media_1794466332659_0dd7bebb.jpg"
set "IMG_FOUNDER=C:\Users\dell\.gemini\antigravity\brain\dc79335b-2f79-4dfe-b27c-db1217737066\.user_uploaded\media_1794466427358_f07077ac.webp"
set "IMG_LOGO=C:\Users\dell\.gemini\antigravity\brain\dc79335b-2f79-4dfe-b27c-db1217737066\.user_uploaded\media_1794466602508_d3a7b56e.jpg"
if exist "%IMG_KONTRACTOR%" if not exist "%~dp0assets\project-kontractor.jpg" copy /y "%IMG_KONTRACTOR%" "%~dp0assets\project-kontractor.jpg" >nul
if exist "%IMG_SOLAR%" if not exist "%~dp0assets\project-solarscience.jpg" copy /y "%IMG_SOLAR%" "%~dp0assets\project-solarscience.jpg" >nul
if exist "%IMG_CEO%" if not exist "%~dp0assets\ceo-shivam.jpg" copy /y "%IMG_CEO%" "%~dp0assets\ceo-shivam.jpg" >nul
if exist "%IMG_FOUNDER%" if not exist "%~dp0assets\founder-ajit.webp" copy /y "%IMG_FOUNDER%" "%~dp0assets\founder-ajit.webp" >nul
if exist "%IMG_LOGO%" if not exist "%~dp0assets\aetherovate-logo.jpg" copy /y "%IMG_LOGO%" "%~dp0assets\aetherovate-logo.jpg" >nul

echo [INFO] Starting Aetherovate Website in your default browser...
echo.

:: 2. Check if Python is available to host a local web server (best for video streaming & WebGL)
python -c "import sys; sys.exit(0)" >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Python detected! Starting local high-speed server on port 3000...
    start "" "http://localhost:3000"
    python -m http.server 3000
    goto end
)

:: 3. Check if Node / npx is available
where npx >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js detected! Starting local web server...
    start "" "http://localhost:3000"
    npx -y serve -l 3000 .
    goto end
)

:: 4. Fallback: Launch directly in default browser
echo [INFO] Opening index.html directly in your default browser...
start "" "%~dp0index.html"

:end
echo.
echo =====================================================================
echo  Website is now running! Keep this window open while testing.
echo  Press Ctrl+C or close this window to stop.
echo =====================================================================
pause
