<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps<{ status: number }>();

const title = computed(
    () =>
        ({
            403: '403: Forbidden',
            404: '404: Page Not Found',
            500: '500: Server Error',
            503: '503: Service Unavailable',
        })[props.status] ?? `${props.status}: Error`,
);

const description = computed(
    () =>
        ({
            403: 'Sorry, you are forbidden from accessing this page.',
            404: 'Sorry, the page you are looking for could not be found.',
            500: 'Whoops, something went wrong on our servers.',
            503: 'Sorry, we are doing some maintenance. Please check back soon.',
        })[props.status] ?? 'An unexpected error occurred.',
);

const statusStr = computed(() => String(props.status));

// ======================== Parallax tilt ========================

const mouse = ref({ x: 0, y: 0 });

function onMousemove(e: MouseEvent): void {
    mouse.value.x = e.clientX;
    mouse.value.y = e.clientY;
}

const tiltX = computed(() => {
    const cx = window.innerWidth / 2;
    return ((mouse.value.x - cx) / cx) * 8;
});

const tiltY = computed(() => {
    const cy = window.innerHeight / 2;
    return ((mouse.value.y - cy) / cy) * 5;
});

// ======================== Typewriter ========================

const terminalLines = [
    '> ERROR 404: page not found',
    '> scanning nearby routes...',
    '> no matching route detected',
    '> try clicking around for fun',
];
const displayedLines = ref<string[]>([]);
let typeLine = 0;
let typeChar = 0;
let typeTimer: ReturnType<typeof setInterval> | null = null;

function typewriterTick(): void {
    if (typeLine >= terminalLines.length) return;
    const line = terminalLines[typeLine];
    if (typeChar <= line.length) {
        displayedLines.value[typeLine] = line.slice(0, typeChar);
        typeChar++;
    } else {
        typeLine++;
        typeChar = 0;
    }
}

onMounted(() => {
    typeTimer = window.setInterval(typewriterTick, 38);
});

onUnmounted(() => {
    if (typeTimer) clearInterval(typeTimer);
});
</script>

<template>
    <Head :title="title" />

    <div
        class="bg-surface text-text-primary noise-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6"
        @mousemove="onMousemove"
    >
        <div class="grid-pattern pointer-events-none fixed inset-0" />

        <div class="pointer-events-none fixed inset-0 select-none">
            <span
                class="text-text-muted absolute font-mono text-2xl font-bold opacity-[0.06]"
                style="
                    top: 12%;
                    left: 8%;
                    animation: drift 14s ease-in-out infinite;
                "
                >4</span
            >
            <span
                class="text-text-muted absolute font-mono text-3xl font-bold opacity-[0.05]"
                style="
                    top: 65%;
                    right: 12%;
                    animation: drift 18s ease-in-out infinite 2s;
                "
                >!</span
            >
            <span
                class="text-text-muted absolute font-mono text-2xl font-bold opacity-[0.04]"
                style="
                    top: 22%;
                    right: 6%;
                    animation: drift 12s ease-in-out infinite 5s;
                "
                >{</span
            >
            <span
                class="text-text-muted absolute font-mono text-xl font-bold opacity-[0.05]"
                style="
                    bottom: 18%;
                    left: 10%;
                    animation: drift 16s ease-in-out infinite 1s;
                "
                >}</span
            >
            <span
                class="text-text-muted absolute font-mono text-3xl font-bold opacity-[0.04]"
                style="
                    top: 55%;
                    left: 4%;
                    animation: drift 13s ease-in-out infinite 4s;
                "
                >~</span
            >
            <span
                class="text-text-muted absolute font-mono text-xl font-bold opacity-[0.06]"
                style="
                    bottom: 28%;
                    right: 8%;
                    animation: drift 15s ease-in-out infinite 3s;
                "
                >#</span
            >
        </div>

        <div class="relative z-10 flex flex-col items-center text-center">
            <div
                class="mb-6 select-none"
                :style="{
                    transform: `perspective(800px) rotateY(${tiltX}deg) rotateX(${-tiltY}deg)`,
                }"
            >
                <span
                    class="glitch font-mono text-[100px] leading-none font-bold tracking-tighter sm:text-[140px]"
                    :data-text="statusStr"
                    >{{ statusStr }}</span
                >
            </div>

            <div
                class="bg-surface-raised/60 border-border-subtle mb-6 w-full max-w-md rounded-lg border p-4 text-left font-mono text-[11px] leading-relaxed"
            >
                <p
                    v-for="(line, i) in displayedLines"
                    :key="i"
                    class="text-text-muted"
                >
                    <span
                        v-if="i === displayedLines.length - 1"
                        class="mr-1.5 inline-block animate-pulse bg-emerald-400"
                        style="width: 6px; height: 13px; vertical-align: middle"
                    />
                    {{ line }}
                </p>
            </div>

            <h1 class="text-text-primary mb-2 text-xl font-semibold">
                {{ title }}
            </h1>
            <p class="text-text-muted mb-8 text-sm leading-relaxed">
                {{ description }}
            </p>

            <Link
                href="/"
                class="bg-accent hover:bg-accent-dim inline-block rounded-lg px-6 py-2.5 text-sm font-medium text-zinc-950 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    </div>
</template>

<style scoped>
/* ==================== Glitch ==================== */
@keyframes glitch {
    0%,
    100% {
        text-shadow:
            2px 0 #f43f5e,
            -2px 0 #06b6d4;
    }
    20% {
        text-shadow:
            -3px 0 #f43f5e,
            3px 0 #06b6d4;
    }
    40% {
        text-shadow:
            3px 0 #f43f5e,
            -3px 0 #06b6d4;
    }
    60% {
        text-shadow:
            -2px 0 #f43f5e,
            2px 0 #06b6d4;
    }
    80% {
        text-shadow:
            2px 0 #f43f5e,
            -2px 0 #06b6d4;
    }
}

.glitch {
    color: var(--color-accent);
    animation: glitch 2s infinite;
    position: relative;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.glitch::before {
    color: #f43f5e;
    animation: glitch-clip-1 3s infinite linear alternate-reverse;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-2px, -1px);
}

.glitch::after {
    color: #06b6d4;
    animation: glitch-clip-2 3s infinite linear alternate-reverse;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(2px, 1px);
}

@keyframes glitch-clip-1 {
    0% {
        clip-path: polygon(0 2%, 100% 2%, 100% 8%, 0 8%);
        transform: translate(-2px);
    }
    10% {
        clip-path: polygon(0 12%, 100% 12%, 100% 18%, 0 18%);
        transform: translate(2px, -1px);
    }
    20% {
        clip-path: polygon(0 28%, 100% 28%, 100% 34%, 0 34%);
        transform: translate(-1px, 1px);
    }
    30% {
        clip-path: polygon(0 42%, 100% 42%, 100% 48%, 0 48%);
        transform: translate(1px, -2px);
    }
    40% {
        clip-path: polygon(0 55%, 100% 55%, 100% 60%, 0 60%);
        transform: translate(-2px, 0);
    }
    50% {
        clip-path: polygon(0 70%, 100% 70%, 100% 76%, 0 76%);
        transform: translate(2px, 1px);
    }
    60% {
        clip-path: polygon(0 5%, 100% 5%, 100% 12%, 0 12%);
        transform: translate(-1px, -1px);
    }
    70% {
        clip-path: polygon(0 35%, 100% 35%, 100% 42%, 0 42%);
        transform: translate(2px, -2px);
    }
    80% {
        clip-path: polygon(0 60%, 100% 60%, 100% 68%, 0 68%);
        transform: translate(-2px, 1px);
    }
    90% {
        clip-path: polygon(0 18%, 100% 18%, 100% 26%, 0 26%);
        transform: translate(1px, 2px);
    }
    100% {
        clip-path: polygon(0 45%, 100% 45%, 100% 52%, 0 52%);
        transform: translate(-1px, -1px);
    }
}

@keyframes glitch-clip-2 {
    0% {
        clip-path: polygon(0 68%, 100% 68%, 100% 75%, 0 75%);
        transform: translate(2px);
    }
    12% {
        clip-path: polygon(0 82%, 100% 82%, 100% 88%, 0 88%);
        transform: translate(-1px, 2px);
    }
    24% {
        clip-path: polygon(0 15%, 100% 15%, 100% 22%, 0 22%);
        transform: translate(1px, -1px);
    }
    36% {
        clip-path: polygon(0 50%, 100% 50%, 100% 56%, 0 56%);
        transform: translate(-2px, 1px);
    }
    48% {
        clip-path: polygon(0 75%, 100% 75%, 100% 82%, 0 82%);
        transform: translate(1px, -2px);
    }
    60% {
        clip-path: polygon(0 30%, 100% 30%, 100% 36%, 0 36%);
        transform: translate(-1px, 2px);
    }
    72% {
        clip-path: polygon(0 60%, 100% 60%, 100% 66%, 0 66%);
        transform: translate(2px, -1px);
    }
    84% {
        clip-path: polygon(0 8%, 100% 8%, 100% 15%, 0 15%);
        transform: translate(-2px, 1px);
    }
    100% {
        clip-path: polygon(0 42%, 100% 42%, 100% 50%, 0 50%);
        transform: translate(1px, -1px);
    }
}

/* ==================== Floating debris ==================== */
@keyframes drift {
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
    25% {
        transform: translate(12px, -18px) rotate(5deg);
    }
    50% {
        transform: translate(-8px, -30px) rotate(-4deg);
    }
    75% {
        transform: translate(16px, -12px) rotate(6deg);
    }
}
</style>
