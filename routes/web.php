<?php

use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', WelcomeController::class)->name('home');

Route::middleware('guest')->group(function () {
    Route::get('/admin/login', [LoginController::class, 'create'])
        ->name('admin.login');
    Route::post('/admin/login', [LoginController::class, 'store'])
        ->name('admin.login.store');
});

Route::post('/admin/logout', [LoginController::class, 'destroy'])
    ->middleware('auth')
    ->name('admin.logout');

Route::middleware('auth')
    ->prefix('admin')
    ->name('admin.projects.')
    ->group(function () {
        Route::get('/', [ProjectController::class, 'index'])
            ->name('index');
        Route::get('/projects/create', [ProjectController::class, 'create'])
            ->name('create');
        Route::post('/projects', [ProjectController::class, 'store'])
            ->name('store');
        Route::get('/projects/{project}', [ProjectController::class, 'edit'])
            ->name('edit');
        Route::match(['put', 'post'], '/projects/{project}', [ProjectController::class, 'update'])
            ->name('update');
        Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])
            ->name('destroy');
    });
