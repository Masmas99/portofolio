<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { store as login } from '@/actions/App/Http/Controllers/Admin/LoginController';

const LOCK_KEY = 'login:lock';
const LOCK_MINUTES = 10;

interface LockState {
    attempts: number;
    lockedUntil: number;
}

function readLock(): LockState {
    try {
        const raw = localStorage.getItem(LOCK_KEY);
        if (!raw) {
            return { attempts: 0, lockedUntil: 0 };
        }
        const data = JSON.parse(raw) as Partial<LockState>;

        return {
            attempts: Number(data.attempts) || 0,
            lockedUntil: Number(data.lockedUntil) || 0,
        };
    } catch {
        return { attempts: 0, lockedUntil: 0 };
    }
}

function writeLock(state: LockState): void {
    try {
        localStorage.setItem(LOCK_KEY, JSON.stringify(state));
    } catch {
        // storage unavailable — lock stays page-scoped
    }
}

const initial = readLock();
const attempts = ref(initial.attempts);
const lockedUntil = ref(initial.lockedUntil);
let timer: number | null = null;

const locked = computed(() => lockedUntil.value > Date.now());

const remaining = computed(() => {
    const diff = Math.max(0, lockedUntil.value - Date.now());
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return `${minutes}m ${seconds}s`;
});

const form = useForm({
    email: '',
    password: '',
});

function submit(): void {
    if (locked.value) {
        return;
    }

    form.post(login.url(), {
        onError: () => {
            attempts.value += 1;
            lockedUntil.value =
                attempts.value >= 3 ? Date.now() + LOCK_MINUTES * 60 * 1000 : 0;
            if (attempts.value >= 3) {
                attempts.value = 0;
            }
            writeLock({
                attempts: attempts.value,
                lockedUntil: lockedUntil.value,
            });
        },
        onFinish: () => form.reset('password'),
    });
}

if (locked.value) {
    timer = window.setInterval(() => {
        if (lockedUntil.value <= Date.now()) {
            attempts.value = 0;
            lockedUntil.value = 0;
            writeLock({ attempts: 0, lockedUntil: 0 });
            if (timer !== null) {
                window.clearInterval(timer);
                timer = null;
            }
        }
    }, 1000);
}

onUnmounted(() => {
    if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
    }
});
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
                            Login locked after 3 failed attempts. Please wait
                            {{ remaining }} before trying again.
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
