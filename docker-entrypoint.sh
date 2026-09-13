#!/bin/sh
set -e

cd /var/www

# Pastikan struktur storage & file sqlite ada
mkdir -p storage/framework/sessions storage/framework/views storage/framework/cache/data
mkdir -p storage/logs storage/app/public/cv
touch storage/database.sqlite
chown -R www-data:www-data storage bootstrap/cache

# Buat .env dari contoh jika belum ada, lalu pastikan APP_KEY terisi
if [ ! -f .env ]; then
    cp .env.example .env
fi
if [ -z "$APP_KEY" ]; then
    php artisan key:generate --force
fi

# File CV (bagian dari repo) dipastikan ada
php artisan storage:link || true

# Migrasi + seed (idempotent: updateOrCreate)
php artisan migrate --force
php artisan db:seed --force

# Cache konfigurasi untuk performa (aman di-skip bila gagal)
php artisan config:cache || true
php artisan route:cache || true
php artisan view:cache || true

# Jalankan PHP-FPM + Nginx
php-fpm -D
exec nginx -g 'daemon off;'