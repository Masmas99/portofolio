<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { store as login } from '@/actions/App/Http/Controllers/Admin/LoginController';

const locked = ref(false);

const form = useForm({
    email: '',
    password: '',
});

function submit(): void {
    form.post(login.url(), {
        onError: () => {
            locked.value = true;
        },
        onFinish: () => form.reset('password'),
    });
}
</script>

<template>
    <div
        class="bg-surface text-text-primary noise-bg relative flex min-h-screen items-center justify-center px-6"
    >
        <!-- Grid Pattern Background -->
        <div class="grid-pattern pointer-events-none fixed inset-0" />

        <div class="relative z-10 w-full max-w-sm">
            <div class="mb-8 text-center">
                <a href="/" class="inline-block">
                    <img
                        src="/images/logo.png"
                        alt="Mashudi"
                        class="h-12 w-auto"
                    />
                </a>
                <p
                    class="text-text-muted mt-2 font-mono text-[10px] tracking-widest uppercase"
                >
                    Admin dashboard
                </p>
            </div>

            <form
                @submit.prevent="submit"
                class="border-border-subtle bg-surface-raised rounded-xl border p-6 shadow-xl shadow-black/30"
            >
                <div class="space-y-4">
                    <div>
                        <label
                            for="email"
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            v-model="form.email"
                            type="email"
                            autocomplete="username"
                            required
                            :disabled="locked"
                            class="border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <p
                            v-if="form.errors.email"
                            class="text-accent mt-1 text-xs"
                        >
                            {{ form.errors.email }}
                        </p>
                    </div>

                    <div>
                        <label
                            for="password"
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            v-model="form.password"
                            type="password"
                            autocomplete="current-password"
                            required
                            :disabled="locked"
                            class="border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <p
                            v-if="form.errors.password"
                            class="text-accent mt-1 text-xs"
                        >
                            {{ form.errors.password }}
                        </p>
                    </div>

                    <div v-if="locked" class="space-y-1">
                        <p class="text-accent text-xs">
                            Login locked after a failed attempt. Reload the page
                            to try again.
                        </p>
                    </div>

                    <button
                        type="submit"
                        :disabled="form.processing || locked"
                        class="bg-accent hover:bg-accent-dim w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {{
                            form.processing
                                ? 'Signing in...'
                                : locked
                                  ? 'Locked'
                                  : 'Sign in'
                        }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
