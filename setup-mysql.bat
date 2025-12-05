@echo off
echo Setting up MySQL with Docker...

:: Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo Docker is not running. Please start Docker Desktop and try again.
    pause
    exit /b 1
)

:: Create MySQL container
echo Creating MySQL container...
docker run -d --name portfolio-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=portfolio_db -p 3306:3306 mysql:8.0

:: Wait for MySQL to be ready
echo Waiting for MySQL to be ready...
timeout /t 30 /nobreak >nul

:: Update .env file
echo Updating .env file...
(
echo DB_CONNECTION=mysql
echo DB_HOST=127.0.0.1
echo DB_PORT=3306
echo DB_DATABASE=portfolio_db
echo DB_USERNAME=root
echo DB_PASSWORD=root
) >> .env.mysql

echo MySQL setup complete!
echo.
echo To switch to MySQL:
echo 1. Backup your current .env file: copy .env .env.backup
echo 2. Update your .env file with MySQL settings
echo 3. Run: php artisan migrate
echo 4. Run: php artisan db:seed (if you have seeders)
echo.
echo To start MySQL container later: docker start portfolio-mysql
echo To stop MySQL container: docker stop portfolio-mysql
echo.
pause