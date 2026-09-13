<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    private const MAX_ATTEMPTS = 3;

    private const DECAY_SECONDS = 1200;

    public function create(): Response
    {
        return Inertia::render('Admin/Login');
    }

    public function store(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        if (RateLimiter::tooManyAttempts($this->throttleKey($request, $credentials['email']), self::MAX_ATTEMPTS)) {
            $minutes = (int) ceil(RateLimiter::availableIn($this->throttleKey($request, $credentials['email'])) / 60);

            return Redirect::back()->withErrors([
                'email' => "Too many login attempts. Account locked for {$minutes} minute(s).",
            ]);
        }

        if (! Auth::attempt($credentials, $request->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey($request, $credentials['email']), self::DECAY_SECONDS);

            $attemptsLeft = RateLimiter::retriesLeft($this->throttleKey($request, $credentials['email']), self::MAX_ATTEMPTS);

            return Redirect::back()->withErrors([
                'email' => "These credentials do not match our records. Attempts left: {$attemptsLeft}.",
            ]);
        }

        RateLimiter::clear($this->throttleKey($request, $credentials['email']));

        $request->session()->regenerate();

        return Redirect::intended(route('admin.projects.index'));
    }

    private function throttleKey(Request $request, string $email): string
    {
        return 'login:'.mb_strtolower($email).'|'.$request->ip();
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::route('admin.login');
    }
}
