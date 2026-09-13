<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class CvController extends Controller
{
    public function __invoke(): StreamedResponse
    {
        $path = 'cv/CV-Mashudi.pdf';

        abort_unless(Storage::disk('public')->exists($path), 404);

        return Storage::disk('public')->response(
            $path,
            'CV-Mashudi.pdf',
            ['Cache-Control' => 'public, max-age=3600'],
        );
    }
}
