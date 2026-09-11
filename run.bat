@echo off
echo Starting VinaMeal Frontend...
set PATH=%~dp0node_bin\node-v20.11.1-win-x64;%PATH%
cd frontend
npm run dev
