@echo off
title SHAHID RESTRO - Local Server
color 0A

echo.
echo ================================================
echo    🍽️  SHAHID RESTRO - Starting Website
echo ================================================
echo.

cd /d "%~dp0"

echo 📂 Current directory: %CD%
echo.

echo 🔍 Checking Python installation...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python is not installed or not in PATH
    echo 📥 Please install Python from https://python.org
    pause
    exit /b 1
)

echo ✅ Python found!
echo.

echo 🚀 Starting local server...
echo.
echo 📱 Your website will be available at:
echo    http://localhost:3000
echo.
echo 🌐 Browser should open automatically
echo 🔴 Press Ctrl+C to stop the server
echo.

python launch_server.py

pause
