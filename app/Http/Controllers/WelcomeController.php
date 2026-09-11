<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Welcome', [
            'projects' => Project::query()
                ->orderBy('sort_order')
                ->orderBy('id')
                ->get(),
        ]);
    }
}
