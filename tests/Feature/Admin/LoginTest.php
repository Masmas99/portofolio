<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Inertia\Testing\AssertableInertia;

it('shows the login page to guests', function () {
    $this->get(route('admin.login'))
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Login'));
});

it('redirects guests away from the admin dashboard', function () {
    $this->get(route('admin.projects.index'))
        ->assertRedirect(route('admin.login'));
});

it('logs an admin in with valid credentials', function () {
    $user = User::factory()->create([
        'password' => Hash::make('secret-password'),
    ]);

    $this->post(route('admin.login.store'), [
        'email' => $user->email,
        'password' => 'secret-password',
    ])->assertRedirect(route('admin.projects.index'));

    $this->assertAuthenticatedAs($user);
});

it('rejects invalid credentials', function () {
    $this->post(route('admin.login.store'), [
        'email' => 'admin@example.com',
        'password' => 'wrong-password',
    ])->assertSessionHasErrors('email');

    $this->assertGuest();
});

it('locks the email out for 20 minutes after three failed attempts', function () {
    $email = 'admin@example.com';

    for ($i = 0; $i < 3; $i++) {
        $this->post(route('admin.login.store'), [
            'email' => $email,
            'password' => 'wrong-password',
        ])->assertSessionHasErrors('email');
    }

    $this->post(route('admin.login.store'), [
        'email' => $email,
        'password' => 'wrong-password',
    ])->assertSessionHasErrors('email');

    $error = session('errors')->get('email')[0];
    expect($error)->toContain('Too many login attempts');
    expect($error)->toContain('20 minute(s)');

    $this->assertGuest();
});

it('still blocks the login after the lockout kicks in', function () {
    $email = 'admin@example.com';

    for ($i = 0; $i < 4; $i++) {
        $this->post(route('admin.login.store'), [
            'email' => $email,
            'password' => 'wrong-password',
        ]);
    }

    $this->post(route('admin.login.store'), [
        'email' => $email,
        'password' => 'wrong-password',
    ])->assertSessionHasErrors('email');

    $error = session('errors')->get('email')[0];
    expect($error)->toContain('Too many login attempts');
});

it('resets the failed attempts after a successful login', function () {
    $user = User::factory()->create([
        'password' => Hash::make('secret-password'),
    ]);

    $this->post(route('admin.login.store'), [
        'email' => $user->email,
        'password' => 'wrong-password',
    ])->assertSessionHasErrors('email');

    $key = 'login:'.$user->email.'|127.0.0.1';
    expect(RateLimiter::attempts($key))->toBe(1);

    $this->post(route('admin.login.store'), [
        'email' => $user->email,
        'password' => 'secret-password',
    ])->assertRedirect(route('admin.projects.index'));

    expect(RateLimiter::attempts($key))->toBe(0);
});

it('redirects authenticated admins away from the login page', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('admin.login'))
        ->assertRedirect(route('admin.projects.index'));
});

it('logs an admin out', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('admin.logout'))
        ->assertRedirect(route('admin.login'));

    $this->assertGuest();
});
