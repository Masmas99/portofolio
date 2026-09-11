<?php

use App\Models\Project;
use Inertia\Testing\AssertableInertia;

it('renders the portfolio with projects in sort order', function () {
    Project::factory()->create([
        'title' => 'Second',
        'sort_order' => 1,
    ]);
    Project::factory()->create([
        'title' => 'First',
        'sort_order' => 0,
    ]);

    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Welcome')
                ->has('projects', 2)
                ->where('projects.0.title', 'First')
                ->where('projects.1.title', 'Second'),
        );
});
