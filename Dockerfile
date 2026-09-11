FROM php:8.3-fpm

# Install dependensi sistem & ekstensi PHP
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev zip unzip nginx

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

# Install dependensi Laravel
RUN composer install --optimize-autoloader --no-dev

# Set hak akses folder
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Konfigurasi Nginx ringkas untuk Render
RUN echo 'server { \
    listen 80; \
    root /var/www/public; \
    index index.php; \
    location / { try_files $uri $uri/ /index.php?$query_string; } \
    location ~ \.php$ { include fastcgi_params; fastcgi_pass 127.0.0.1:9000; fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name; } \
}' > /etc/nginx/sites-available/default

EXPOSE 80

# Jalankan PHP-FPM dan Nginx bersamaan
CMD php-fpm -D && nginx -g 'daemon off;'