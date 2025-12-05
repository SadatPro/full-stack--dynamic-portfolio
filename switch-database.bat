@echo off
echo Database Configuration Switcher
echo ================================
echo.
echo 1. SQLite (Current)
echo 2. MySQL
echo.
set /p choice="Select database (1-2): "

if "%choice%"=="1" goto sqlite
if "%choice%"=="2" goto mysql
echo Invalid choice!
pause
exit /b 1

:sqlite
echo Switching to SQLite...
(
echo DB_CONNECTION=sqlite
echo # DB_HOST=127.0.0.1
echo # DB_PORT=3306
echo # DB_DATABASE=portfolio_db
echo # DB_USERNAME=root
echo # DB_PASSWORD=
) > .env
echo SQLite configuration applied!
goto end

:mysql
echo Switching to MySQL...
(
echo DB_CONNECTION=mysql
echo DB_HOST=127.0.0.1
echo DB_PORT=3306
echo DB_DATABASE=portfolio_db
echo DB_USERNAME=root
echo DB_PASSWORD=root
) > .env
echo MySQL configuration applied!
echo Make sure MySQL container is running: docker start portfolio-mysql
goto end

:end
echo.
echo Running cache clear...
php artisan config:clear
php artisan route:clear
echo Done!
pause