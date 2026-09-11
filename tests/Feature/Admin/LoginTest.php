<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
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
