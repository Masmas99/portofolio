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
RUN composer install --optimize-autoloader --no-dev --no-interaction

# Set hak akses folder
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Konfigurasi Nginx ringkas untuk Render
RUN echo 'server { \
    listen 80; \
    root /var/www/public; \
    index index.php; \
    client_max_body_size 20m; \
    location / { try_files $uri $uri/ /index.php?$query_string; } \
    location ~* \.(css|js|woff2?|ttf|png|jpg|jpeg|gif|webp|svg|ico)$ { expires 30d; add_header Cache-Control "public, immutable"; } \
    location ~ \.php$ { include fastcgi_params; fastcgi_pass 127.0.0.1:9000; fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name; } \
}' > /etc/nginx/sites-available/default

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]