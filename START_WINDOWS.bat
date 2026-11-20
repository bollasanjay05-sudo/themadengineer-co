@echo off
cd /d "%~dp0"
python setup_threeui.py
python run_local.py
pause
