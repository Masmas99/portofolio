<?php

use Illuminate\Support\Facades\Storage;

it('serves the CV pdf inline via the route', function () {
    Storage::fake('public');
    Storage::disk('public')->put(
        'cv/CV-Mashudi.pdf',
        '%PDF-1.4 test content for the download route',
    );

    $this->get(route('cv.download'))
        ->assertOk()
        ->assertHeader('Content-Type', 'application/pdf')
        ->assertHeader(
            'Content-Disposition',
            'inline; filename=CV-Mashudi.pdf',
        );
});

it('returns 404 when the CV pdf is missing', function () {
    Storage::fake('public');

    $this->get(route('cv.download'))->assertNotFound();
});
