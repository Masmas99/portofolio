<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="/images/logo.png" sizes="any">
        <link rel="apple-touch-icon" href="/images/logo.png">

        <meta name="theme-color" content="#09090b" />
        <meta name="color-scheme" content="dark" />

        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin />

        <meta
            name="description"
            content="Full-stack developer & network engineer. Building reliable web apps with Laravel, Vue, and Tailwind — and designing stable networks."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mashudi" />
        <meta
            property="og:title"
            content="Mashudi — Full-Stack Developer & Network Engineer"
        />
        <meta
            property="og:description"
            content="Full-stack developer & network engineer. Building reliable web apps with Laravel, Vue, and Tailwind — and designing stable networks."
        />
        <meta property="og:url" content="{{ url('/') }}" />
        <meta property="og:image" content="{{ url('images/og.png') }}" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
            name="twitter:title"
            content="Mashudi — Full-Stack Developer & Network Engineer"
        />
        <meta
            name="twitter:description"
            content="Building reliable web apps and designing stable networks."
        />
        <meta name="twitter:image" content="{{ url('images/og.png') }}" />
        <link rel="canonical" href="{{ url('/') }}" />
        @php
            $schema = json_encode(
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'Person',
                    'name' => config('app.name'),
                    'url' => url('/'),
                    'jobTitle' => 'Full-Stack Developer & Network Engineer',
                    'knowsAbout' => ['Laravel', 'Vue', 'Network Engineering', 'Routing and Switching'],
                ],
                JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE,
            );
        @endphp
        <script type="application/ld+json">
            {!! $schema !!}
        </script>

        @fonts

        @vite(['resources/css/app.css', 'resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
