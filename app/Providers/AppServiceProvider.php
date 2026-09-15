<?php

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Inertia\ExceptionResponse;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->registerErrorPages();
        $this->configureDefaults();
        $this->ensurePublicStorageLink();
    }

    /**
     * Render branded Inertia pages for common HTTP error codes instead of the
     * default framework pages.
     */
    protected function registerErrorPages(): void
    {
        Inertia::handleExceptionsUsing(function (ExceptionResponse $response) {
            if (in_array($response->statusCode(), [403, 404, 500, 503])) {
                return $response->render('Errors/Error', [
                    'status' => $response->statusCode(),
                ]);
            }
        });
    }

    /**
     * Make sure public/storage -> storage/app/public exists so files uploaded
     * to the public disk (project images, CV PDF) are reachable on fresh
     * deployments without having to run `php artisan storage:link` manually.
     */
    protected function ensurePublicStorageLink(): void
    {
        if ($this->app->runningUnitTests()) {
            return;
        }

        $link = public_path('storage');

        if (file_exists($link)) {
            return;
        }

        if (! @symlink(storage_path('app/public'), $link)) {
            report(new \RuntimeException(
                'Could not create public/storage symlink to storage/app/public.',
            ));
        }
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }
}
