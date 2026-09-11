<script setup lang="ts">
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { destroy as logout } from '@/actions/App/Http/Controllers/Admin/LoginController';

const page = usePage();
const user = computed(() => page.props.auth.user);
const flash = computed(() => page.props.flash);
</script>

<template>
    <div class="bg-surface text-text-primary min-h-screen">
        <header
            class="border-border-subtle bg-surface/80 sticky top-0 z-40 border-b backdrop-blur-xl"
        >
            <div
                class="mx-auto flex h-14 max-w-5xl items-center justify-between px-6"
            >
                <div class="flex items-center gap-4">
                    <Link
                        href="/"
                        class="font-mono text-sm font-medium tracking-tight"
                    >
                        <span class="text-accent">&gt;</span> dev<span
                            class="text-text-muted"
                            >.</span
                        >
                    </Link>
                    <span
                        class="border-border-subtle text-text-muted hidden rounded-md border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase sm:inline"
                    >
                        Admin
                    </span>
                </div>

                <div v-if="user" class="flex items-center gap-3">
                    <span class="text-text-secondary hidden text-xs sm:inline">
                        {{ user.email }}
                    </span>
                    <Link
                        :href="logout.url()"
                        method="post"
                        as="button"
                        class="border-border-subtle text-text-muted hover:text-text-primary hover:bg-surface-overlay rounded-md border px-3 py-1.5 text-xs transition-colors"
                    >
                        Log out
                    </Link>
                </div>
            </div>
        </header>

        <div
            v-if="flash.success"
            class="fixed top-16 left-1/2 z-50 -translate-x-1/2"
        >
            <p
                class="bg-surface-overlay border-border-subtle text-text-primary rounded-lg border px-4 py-2 text-sm shadow-lg shadow-black/40"
            >
                <span class="text-accent">&gt;</span> {{ flash.success }}
            </p>
        </div>

        <main class="mx-auto max-w-5xl px-6 py-8">
            <slot />
        </main>
    </div>
</template>
