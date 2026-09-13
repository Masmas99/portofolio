<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import type { Project } from '@/types/project';
import { useI18n } from '@/lib/i18n';
import { techBrands } from '@/lib/techStack';

defineProps<{ projects: Project[] }>();

const { locale, t, setLocale, initLocale } = useI18n();

const activeProject = ref<number | null>(null);
const selectedProject = ref<Project | null>(null);
const cardRef = ref<HTMLElement | null>(null);
const lanyardEl = ref<HTMLElement | null>(null);
const cvUrl = '/storage/cv/CV-Mashudi.pdf';
const cardTilt = ref({ rx: 0, ry: 0 });
const hasLanded = ref(false);
const menuOpen = ref(false);
const strapBaseline = ref(168);

function syncStrapBaseline(): void {
    const dynamics =
        lanyardEl.value?.querySelector<HTMLElement>('.lanyard-dynamics');
    if (dynamics) {
        strapBaseline.value = dynamics.offsetHeight || 168;
    }
}

function toggleMenu(): void {
    menuOpen.value = !menuOpen.value;
}

function closeMenu(): void {
    menuOpen.value = false;
}

function openProject(project: Project): void {
    selectedProject.value = project;
}

function closeProject(): void {
    selectedProject.value = null;
}

function onMenuEscape(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
        if (selectedProject.value) {
            closeProject();
        } else if (menuOpen.value) {
            closeMenu();
        }
    }
}

watch([menuOpen, selectedProject], ([open, project]) => {
    document.body.style.overflow = open || project ? 'hidden' : '';
});

const drag = ref({ x: 0, y: 0, rot: 0 });
const isDragging = ref(false);
const isSpringing = ref(false);
let dragPointerId: number | null = null;
let dragStartX = 0;
let dragStartY = 0;
let dragOriginX = 0;
let dragOriginY = 0;
let lastMove = { x: 0, y: 0, t: 0 };
let curVel = { x: 0, y: 0 };
let springRaf: number | null = null;
let entranceAnim: Animation | null = null;

const introActive = ref(false);
const siteReady = ref(false);
const bootLine = ref('');
const bootLines = [
    '> booting dev./ahmad ...',
    '> mounting components ......',
    '> preloading assets & fonts ...',
    '> ready in 2s',
];
let introTimer: number | null = null;
let introFadeTimer: number | null = null;
let revealObserver: IntersectionObserver | null = null;

function startIntro(): void {
    const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
    ).matches;
    const seen = sessionStorage.getItem('intro:seen') === '1';
    if (reduce || seen) {
        finishIntro(true);
        return;
    }
    sessionStorage.setItem('intro:seen', '1');
    introActive.value = true;
    bootLine.value = bootLines[0];
    let i = 0;
    introTimer = window.setInterval(() => {
        i += 1;
        if (i < bootLines.length) {
            bootLine.value = bootLines[i];
        } else {
            if (introTimer !== null) window.clearInterval(introTimer);
            introTimer = null;
            introFadeTimer = window.setTimeout(() => finishIntro(false), 320);
        }
    }, 460);
}

function finishIntro(animate: boolean): void {
    introActive.value = false;
    if (introTimer !== null) window.clearInterval(introTimer);
    window.setTimeout(
        () => {
            siteReady.value = true;
        },
        animate ? 620 : 0,
    );
}

function initReveals(): void {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach((el) => el.classList.add('is-visible'));
        return;
    }
    revealObserver = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver?.unobserve(entry.target);
                }
            }
        },
        { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );
    els.forEach((el) => revealObserver?.observe(el));
}

function springToZero(
    startX: number,
    startY: number,
    startRot: number,
    velX: number,
    velY: number,
): void {
    const stiffness = 140;
    const damping = 18;
    let x = startX;
    let y = startY;
    let rot = startRot;
    let vx = Math.max(-1800, Math.min(1800, velX));
    let vy = Math.max(-1800, Math.min(1800, velY));
    let vr = vx * 0.05 + vy * 0.025;
    const startedAt = performance.now();
    let prev = startedAt;

    const step = (now: number) => {
        const elapsed = now - startedAt;
        let dt = (now - prev) / 1000;
        prev = now;
        if (dt > 0.05) dt = 0.05;

        vx += (-stiffness * x - damping * vx) * dt;
        vy += (-stiffness * y - damping * vy) * dt;
        vr += (-stiffness * rot - damping * vr) * dt;
        x += vx * dt;
        y += vy * dt;
        rot += vr * dt;

        drag.value.x = x;
        drag.value.y = y;
        drag.value.rot = rot;

        const settled =
            Math.abs(x) < 0.2 &&
            Math.abs(y) < 0.2 &&
            Math.abs(rot) < 0.05 &&
            Math.abs(vx) < 8 &&
            Math.abs(vy) < 8 &&
            Math.abs(vr) < 2;
        if (settled || elapsed > 2000) {
            drag.value.x = 0;
            drag.value.y = 0;
            drag.value.rot = 0;
            isSpringing.value = false;
            springRaf = null;
            return;
        }
        springRaf = requestAnimationFrame(step);
    };

    isSpringing.value = true;
    springRaf = requestAnimationFrame(step);
}

function cancelSpring(): void {
    if (springRaf !== null) {
        cancelAnimationFrame(springRaf);
        springRaf = null;
    }
    isSpringing.value = false;
}

function playEntrance(): void {
    const el = lanyardEl.value;
    if (!el || entranceAnim) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        hasLanded.value = true;
        return;
    }

    const stiffness = 70;
    const damping = 12;
    let pos = -320;
    let vel = 0;
    let rot = -3.2;
    const dt = 0.025;
    const steps = 80;
    const frames: Keyframe[] = [];

    for (let i = 0; i < steps; i++) {
        vel += (-stiffness * pos - damping * vel) * dt;
        pos += vel * dt;
        rot = -pos * 0.01;
        frames.push({
            offset: i / (steps - 1),
            transform: `translateY(${pos.toFixed(2)}px) rotate(${rot.toFixed(2)}deg)`,
            opacity: Math.max(0, Math.min(1, (pos + 90) / 40)),
        });
    }
    frames.push({
        offset: 1,
        transform: 'translateY(0px) rotate(0deg)',
        opacity: 1,
    });

    entranceAnim = el.animate(frames, {
        duration: 2000,
        easing: 'linear',
        fill: 'forwards',
    });
    entranceAnim.addEventListener('finish', () => {
        entranceAnim = null;
        hasLanded.value = true;
    });
}

watch(siteReady, (ready) => {
    if (ready) {
        requestAnimationFrame(playEntrance);
    }
});

onMounted(() => {
    initLocale();
    startIntro();
    initReveals();
    window.addEventListener('keydown', onMenuEscape);
    window.addEventListener('resize', syncStrapBaseline);
    requestAnimationFrame(syncStrapBaseline);

    resizeConstellation();
    if (!reduceMotion) {
        bgRunning = true;
        bgRaf = requestAnimationFrame(constellationTick);
    }
    window.addEventListener('resize', resizeConstellation);
    window.addEventListener('pointermove', onConstellationPointerMove, {
        passive: true,
    });
    window.addEventListener('pointerdown', onConstellationPointerDown, {
        passive: true,
    });
    document.addEventListener('pointerleave', onConstellationPointerLeave);
    document.addEventListener(
        'visibilitychange',
        onConstellationVisibilityChange,
    );
});

onUnmounted(() => {
    cancelSpring();
    if (entranceAnim) entranceAnim.cancel();
    if (introTimer !== null) window.clearInterval(introTimer);
    if (introFadeTimer !== null) window.clearTimeout(introFadeTimer);
    revealObserver?.disconnect();
    window.removeEventListener('keydown', onMenuEscape);
    window.removeEventListener('resize', syncStrapBaseline);
    document.body.style.overflow = '';

    bgRunning = false;
    cancelAnimationFrame(bgRaf);
    window.removeEventListener('resize', resizeConstellation);
    window.removeEventListener('pointermove', onConstellationPointerMove);
    window.removeEventListener('pointerdown', onConstellationPointerDown);
    document.removeEventListener('pointerleave', onConstellationPointerLeave);
    document.removeEventListener(
        'visibilitychange',
        onConstellationVisibilityChange,
    );
});

// ===== Interactive constellation background =====
const constellation = ref<HTMLCanvasElement | null>(null);

interface Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
}

const stars: Star[] = [];
const pointer = { x: -9999, y: -9999, active: false };
const pulse = { x: -9999, y: -9999, t: -1 };
let bgCtx: CanvasRenderingContext2D | null = null;
let bgRaf = 0;
let bgRunning = false;
const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
).matches;

function seedStars(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const count = Math.max(50, Math.min(120, Math.round((w * h) / 15000)));
    stars.length = 0;
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.18,
            r: Math.random() * 1.6 + 0.6,
        });
    }
}

function resizeConstellation(): void {
    const canvas = constellation.value;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    bgCtx = canvas.getContext('2d');
    bgCtx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedStars();
    if (reduceMotion) {
        drawConstellationFrame();
    }
}

function onConstellationPointerMove(event: PointerEvent): void {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
}

function onConstellationPointerDown(event: PointerEvent): void {
    pulse.x = event.clientX;
    pulse.y = event.clientY;
    pulse.t = performance.now();
}

function onConstellationPointerLeave(): void {
    pointer.active = false;
}

const LINK = 120;
const MOUSE_LINK = 170;

function drawConstellationFrame(): void {
    const ctx = bgCtx;
    if (!ctx) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    // soft glow that follows the cursor
    if (pointer.active) {
        const glow = ctx.createRadialGradient(
            pointer.x,
            pointer.y,
            0,
            pointer.x,
            pointer.y,
            180,
        );
        glow.addColorStop(0, 'rgba(255,255,255,0.07)');
        glow.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
    }

    // expanding ring on click
    const now = performance.now();
    const age = now - pulse.t;
    if (age < 900) {
        const p = age / 900;
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, 30 + p * 220, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${(0.28 * (1 - p)).toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }

    // physics + cursor interaction
    for (const star of stars) {
        if (pointer.active) {
            const dx = pointer.x - star.x;
            const dy = pointer.y - star.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < MOUSE_LINK * MOUSE_LINK) {
                const d = Math.sqrt(d2) || 1;
                const falloff = 1 - d / MOUSE_LINK;
                star.vx += (dx / d) * falloff * 0.03;
                star.vy += (dy / d) * falloff * 0.03;
            }
        }
        // shockwave push from click
        if (age < 300) {
            const px = star.x - pulse.x;
            const py = star.y - pulse.y;
            const pd = Math.hypot(px, py);
            if (pd < 200 && pd > 0) {
                const force = (1 - pd / 200) * (1 - age / 300) * 2.2;
                star.vx += (px / pd) * force;
                star.vy += (py / pd) * force;
            }
        }
        star.vx *= 0.98;
        star.vy *= 0.98;
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < -25) star.x = w + 25;
        if (star.x > w + 25) star.x = -25;
        if (star.y < -25) star.y = h + 25;
        if (star.y > h + 25) star.y = -25;
    }

    // constellation lines between stars
    for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
            const b = stars[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < LINK * LINK) {
                const d = Math.sqrt(d2);
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = `rgba(255,255,255,${(0.14 * (1 - d / LINK)).toFixed(3)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
        // lines that reach toward the cursor
        if (pointer.active) {
            const dx = pointer.x - a.x;
            const dy = pointer.y - a.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < MOUSE_LINK * MOUSE_LINK) {
                const d = Math.sqrt(d2);
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(pointer.x, pointer.y);
                ctx.strokeStyle = `rgba(255,255,255,${(0.22 * (1 - d / MOUSE_LINK)).toFixed(3)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    // star dots
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
    }
}

function constellationTick(): void {
    if (!bgRunning) return;
    drawConstellationFrame();
    bgRaf = requestAnimationFrame(constellationTick);
}

function onConstellationVisibilityChange(): void {
    if (document.hidden) {
        bgRunning = false;
        cancelAnimationFrame(bgRaf);
    } else if (!reduceMotion) {
        bgRunning = true;
        bgRaf = requestAnimationFrame(constellationTick);
    }
}

const lanyardDragStyle = computed(() => ({
    transform: `translate3d(${drag.value.x}px, ${drag.value.y}px, 0) rotate(${drag.value.rot}deg)`,
    transition:
        isDragging.value || isSpringing.value
            ? 'none'
            : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
}));

/* Hook hinges against the pull so it reads as flexible */
const clipStyle = computed(() => {
    const tilt = Math.max(-9, Math.min(9, -drag.value.x * 0.01));
    return {
        transform: `translate3d(${drag.value.x}px, ${drag.value.y}px, 0) rotate(${drag.value.rot + tilt}deg)`,
        transition:
            isDragging.value || isSpringing.value
                ? 'none'
                : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
    };
});

/* Fabric strap rotates + stretches to follow the dragged card */
const lanyardStrapStyle = computed(() => {
    const targetY = Math.max(48, strapBaseline.value + drag.value.y);
    const angle = -Math.atan2(drag.value.x, targetY) * (180 / Math.PI);
    const scaleY = Math.max(
        0.55,
        Math.hypot(drag.value.x, targetY) / strapBaseline.value,
    );
    return {
        transform: `rotate(${angle}deg) scaleY(${scaleY})`,
        transition:
            isDragging.value || isSpringing.value
                ? 'none'
                : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
    };
});

function onLanyardPointerDown(event: PointerEvent) {
    cancelSpring();
    dragPointerId = event.pointerId;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    dragOriginX = drag.value.x;
    dragOriginY = drag.value.y;
    drag.value.x = dragOriginX;
    drag.value.y = dragOriginY;
    lastMove = { x: event.clientX, y: event.clientY, t: performance.now() };
    curVel = { x: 0, y: 0 };
    isDragging.value = true;
    if (event.currentTarget instanceof HTMLElement) {
        event.currentTarget.setPointerCapture?.(event.pointerId);
    }
    event.preventDefault();
}

function onLanyardPointerMove(event: PointerEvent) {
    if (!isDragging.value || event.pointerId !== dragPointerId) {
        return;
    }
    const now = performance.now();
    if (lastMove.t > 0 && now - lastMove.t > 0) {
        const dt = (now - lastMove.t) / 1000;
        const instX = (event.clientX - lastMove.x) / dt;
        const instY = (event.clientY - lastMove.y) / dt;
        curVel.x = curVel.x * 0.35 + instX * 0.65;
        curVel.y = curVel.y * 0.35 + instY * 0.65;
    }
    lastMove = { x: event.clientX, y: event.clientY, t: now };

    const dx = event.clientX - dragStartX;
    const dy = event.clientY - dragStartY;
    drag.value.x = dragOriginX + dx;
    drag.value.y = dragOriginY + dy;
    drag.value.rot = dx * 0.05 + dy * 0.025;
}

function onLanyardPointerUp() {
    dragPointerId = null;
    isDragging.value = false;
    springToZero(
        drag.value.x,
        drag.value.y,
        drag.value.rot,
        curVel.x,
        curVel.y,
    );
    lastMove = { x: 0, y: 0, t: 0 };
    curVel = { x: 0, y: 0 };
}

const avatarSources = [
    '/images/avatar.webp',
    '/images/avatar.png',
    '/images/avatar.jpg',
];
const avatarIndex = ref(0);
const avatarFailed = ref(false);

function handleAvatarError() {
    if (avatarIndex.value < avatarSources.length - 1) {
        avatarIndex.value += 1;
    } else {
        avatarFailed.value = true;
    }
}

const skills = [
    { category: 'Backend', items: ['PHP 8', 'Laravel', 'MySQL', 'REST API'] },
    {
        category: 'Frontend',
        items: ['Vue 3', 'Inertia.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        category: 'Network Engineering',
        items: ['TCP/IP', 'Routing & Switching', 'Cisco', 'MikroTik'],
    },
    { category: 'DevOps', items: ['Ubuntu Server', 'Nginx', 'Bash', 'Git'] },
];

function handleCardTilt(event: MouseEvent) {
    const card = cardRef.value;
    if (!card) {
        return;
    }
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    cardTilt.value.ry = px * 20;
    cardTilt.value.rx = -py * 14;
}

function resetCardTilt() {
    cardTilt.value.rx = 0;
    cardTilt.value.ry = 0;
}

function setActiveProject(id: number | null) {
    activeProject.value = id;
}
</script>

<template>
    <Head>
        <title>Mashudi — Full-Stack Developer & Network Engineer</title>
        <link
            rel="preload"
            as="image"
            href="/images/avatar.webp"
            fetchpriority="high"
        />
    </Head>

    <div
        class="bg-surface text-text-primary noise-bg min-h-screen"
        :class="{ 'site-ready': siteReady }"
    >
        <!-- Boot overlay -->
        <Transition name="boot-fade">
            <div
                v-if="introActive"
                class="boot-overlay bg-surface fixed inset-0 z-[100] flex items-center justify-center"
                role="status"
                aria-live="polite"
            >
                <div class="flex w-[min(90vw,420px)] flex-col items-center">
                    <img
                        src="/images/logo.png"
                        alt="Mashudi"
                        class="mb-6 h-16 w-auto"
                    />
                    <p class="boot-line text-text-secondary font-mono text-xs">
                        {{ bootLine }}
                        <span class="boot-cursor" aria-hidden="true" />
                    </p>
                    <div class="boot-progress mt-4 w-full">
                        <div class="boot-progress-bar" />
                    </div>
                    <p
                        class="text-text-muted mt-3 font-mono text-[10px] tracking-widest uppercase"
                    >
                        initializing portfolio
                    </p>
                </div>
            </div>
        </Transition>

        <!-- Grid Pattern Background -->
        <div class="grid-pattern pointer-events-none fixed inset-0" />

        <!-- Animated monochrome background -->
        <div class="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
            <div
                class="orb orb-1 absolute -top-[12%] -left-[10%] h-[560px] w-[560px] bg-white/[0.05]"
            />
            <div
                class="orb orb-2 absolute -right-[12%] -bottom-[14%] h-[680px] w-[680px] bg-white/[0.04]"
            />
            <div
                class="orb orb-3 absolute top-[16%] right-[16%] h-[420px] w-[420px] bg-white/[0.05]"
            />
        </div>

        <!-- Sweeping scan line -->
        <div class="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
            <div class="scan-sweep" />
        </div>

        <!-- Radar pulse rings -->
        <div class="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
            <div
                class="radar-ring absolute bottom-[12%] left-[8%]"
                style="animation-delay: 0s"
            />
            <div
                class="radar-ring absolute bottom-[12%] left-[8%]"
                style="animation-delay: 1.6s"
            />
            <div
                class="radar-ring absolute bottom-[12%] left-[8%]"
                style="animation-delay: 3.2s"
            />
        </div>

        <!-- Floating terminal particles -->
        <div class="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
            <span
                class="bg-particle"
                style="
                    left: 6%;
                    animation-duration: 20s;
                    animation-delay: 0s;
                    --particle-drift-x: 26px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 14%;
                    animation-duration: 26s;
                    animation-delay: -4s;
                    --particle-drift-x: -18px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 24%;
                    animation-duration: 17s;
                    animation-delay: -9s;
                    --particle-drift-x: 34px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 33%;
                    animation-duration: 23s;
                    animation-delay: -14s;
                    --particle-drift-x: -22px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 44%;
                    animation-duration: 19s;
                    animation-delay: -2s;
                    --particle-drift-x: 20px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 55%;
                    animation-duration: 27s;
                    animation-delay: -7s;
                    --particle-drift-x: -30px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 64%;
                    animation-duration: 16s;
                    animation-delay: -11s;
                    --particle-drift-x: 28px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 74%;
                    animation-duration: 24s;
                    animation-delay: -17s;
                    --particle-drift-x: -16px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 84%;
                    animation-duration: 21s;
                    animation-delay: -5s;
                    --particle-drift-x: 36px;
                "
            />
            <span
                class="bg-particle"
                style="
                    left: 92%;
                    animation-duration: 26s;
                    animation-delay: -12s;
                    --particle-drift-x: -20px;
                "
            />
        </div>

        <!-- Interactive constellation background -->
        <canvas
            ref="constellation"
            class="pointer-events-none fixed inset-0 z-0 h-full w-full"
            aria-hidden="true"
        />

        <!-- Navigation -->
        <nav
            class="border-border-subtle bg-surface/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xl"
        >
            <div
                class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6"
            >
                <a href="#" aria-label="Mashudi">
                    <img
                        src="/images/logo.png"
                        alt="Mashudi"
                        class="h-8 w-auto"
                    />
                </a>
                <div class="hidden items-center gap-6 lg:flex">
                    <a
                        href="#about"
                        class="text-text-secondary hover:text-text-primary text-xs transition-colors"
                        >{{ t.nav.about }}</a
                    >
                    <a
                        href="#projects"
                        class="text-text-secondary hover:text-text-primary text-xs transition-colors"
                        >{{ t.nav.projects }}</a
                    >
                    <a
                        href="#skills"
                        class="text-text-secondary hover:text-text-primary text-xs transition-colors"
                        >{{ t.nav.skills }}</a
                    >
                    <a
                        href="#contact"
                        class="text-text-secondary hover:text-text-primary text-xs transition-colors"
                        >{{ t.nav.contact }}</a
                    >

                    <!-- Language Switcher (ID / EN) -->
                    <div
                        class="border-border-subtle bg-surface-overlay inline-flex items-center rounded-lg border p-0.5"
                        role="group"
                        aria-label="Language switcher"
                    >
                        <button
                            type="button"
                            class="flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-xs font-medium transition-all duration-200"
                            :class="
                                locale === 'id'
                                    ? 'bg-surface text-accent border-border-subtle/80 border shadow-sm'
                                    : 'text-text-muted hover:text-text-primary'
                            "
                            @click="setLocale('id')"
                            title="Bahasa Indonesia"
                        >
                            <span>ID</span>
                        </button>

                        <button
                            type="button"
                            class="flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-xs font-medium transition-all duration-200"
                            :class="
                                locale === 'en'
                                    ? 'bg-surface text-accent border-border-subtle/80 border shadow-sm'
                                    : 'text-text-muted hover:text-text-primary'
                            "
                            @click="setLocale('en')"
                            title="English"
                        >
                            <span>EN</span>
                        </button>
                    </div>
                </div>

                <!-- Right items on mobile (Language toggle + Hamburger) -->
                <div class="flex items-center gap-2 lg:hidden">
                    <button
                        type="button"
                        class="text-text-secondary hover:bg-surface-overlay border-border-subtle flex h-9 items-center justify-center rounded-lg border px-2.5 font-mono text-xs font-medium transition-colors"
                        :title="
                            locale === 'id'
                                ? 'Switch to English'
                                : 'Ganti ke Bahasa Indonesia'
                        "
                        @click="setLocale(locale === 'id' ? 'en' : 'id')"
                    >
                        <span>{{ locale === 'id' ? 'ID' : 'EN' }}</span>
                    </button>

                    <!-- Hamburger button (mobile) -->
                    <button
                        type="button"
                        class="text-text-secondary hover:bg-surface-overlay flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                        :class="
                            menuOpen
                                ? 'border-border-subtle bg-surface-overlay'
                                : 'border-border-subtle'
                        "
                        aria-label="Toggle menu"
                        :aria-expanded="menuOpen"
                        @click="toggleMenu"
                    >
                        <span class="relative block h-3.5 w-5">
                            <span
                                class="absolute left-0 block h-px w-full bg-current transition-all duration-300"
                                :class="
                                    menuOpen
                                        ? 'top-1/2 -translate-y-1/2 rotate-45'
                                        : 'top-0'
                                "
                            />
                            <span
                                class="absolute top-1/2 left-0 block h-px w-full -translate-y-1/2 bg-current transition-all duration-200"
                                :class="menuOpen ? 'opacity-0' : 'opacity-100'"
                            />
                            <span
                                class="absolute left-0 block h-px w-full bg-current transition-all duration-300"
                                :class="
                                    menuOpen
                                        ? 'top-1/2 -translate-y-1/2 -rotate-45'
                                        : 'top-full -translate-y-full'
                                "
                            />
                        </span>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile menu overlay backdrop -->
        <div
            class="bg-surface/60 fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
            :class="
                menuOpen
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
            "
            aria-hidden="true"
            @click="closeMenu"
        />

        <!-- Mobile menu drawer (slides in from the right) -->
        <aside
            class="border-border-subtle bg-surface fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col border-l shadow-2xl transition-transform duration-300 ease-out lg:hidden"
            :class="menuOpen ? 'translate-x-0' : 'translate-x-full'"
            aria-label="Mobile menu"
        >
            <div
                class="border-border-subtle flex h-14 shrink-0 items-center justify-between border-b px-6"
            >
                <a href="#" class="flex items-center" @click="closeMenu">
                    <img
                        src="/images/logo.png"
                        alt="Mashudi"
                        class="h-8 w-auto"
                    />
                </a>
                <button
                    type="button"
                    class="text-text-secondary hover:bg-surface-overlay hover:text-text-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                    aria-label="Close menu"
                    @click="closeMenu"
                >
                    <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        class="h-4 w-4"
                        aria-hidden="true"
                    >
                        <path
                            d="m3 3 10 10M13 3 3 13"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
            </div>

            <nav class="flex flex-col">
                <a
                    href="#about"
                    class="border-border-subtle text-text-secondary hover:bg-surface-overlay hover:text-text-primary group flex items-center justify-between border-b px-6 py-4 text-sm transition-colors"
                    @click="closeMenu"
                >
                    <span>{{ t.nav.about }}</span>
                    <span
                        class="text-accent font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        >&rarr;</span
                    >
                </a>
                <a
                    href="#projects"
                    class="border-border-subtle text-text-secondary hover:bg-surface-overlay hover:text-text-primary group flex items-center justify-between border-b px-6 py-4 text-sm transition-colors"
                    @click="closeMenu"
                >
                    <span>{{ t.nav.projects }}</span>
                    <span
                        class="text-accent font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        >&rarr;</span
                    >
                </a>
                <a
                    href="#skills"
                    class="border-border-subtle text-text-secondary hover:bg-surface-overlay hover:text-text-primary group flex items-center justify-between border-b px-6 py-4 text-sm transition-colors"
                    @click="closeMenu"
                >
                    <span>{{ t.nav.skills }}</span>
                    <span
                        class="text-accent font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        >&rarr;</span
                    >
                </a>
                <a
                    href="#contact"
                    class="border-border-subtle text-text-secondary hover:bg-surface-overlay hover:text-text-primary group flex items-center justify-between border-b px-6 py-4 text-sm transition-colors"
                    @click="closeMenu"
                >
                    <span>{{ t.nav.contact }}</span>
                    <span
                        class="text-accent font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        >&rarr;</span
                    >
                </a>
            </nav>

            <div class="border-border-subtle mt-auto space-y-4 border-t p-6">
                <div>
                    <p
                        class="text-text-muted mb-2 font-mono text-[10px] tracking-widest uppercase"
                    >
                        {{ t.nav.language }}
                    </p>
                    <div
                        class="border-border-subtle bg-surface-overlay flex w-full items-center rounded-lg border p-1"
                        role="group"
                        aria-label="Language switcher"
                    >
                        <button
                            type="button"
                            class="flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 font-mono text-xs font-medium transition-all duration-200"
                            :class="
                                locale === 'id'
                                    ? 'bg-surface text-accent border-border-subtle/80 border shadow-sm'
                                    : 'text-text-muted hover:text-text-primary'
                            "
                            @click="setLocale('id')"
                        >
                            <span>ID</span>
                        </button>
                        <button
                            type="button"
                            class="flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 font-mono text-xs font-medium transition-all duration-200"
                            :class="
                                locale === 'en'
                                    ? 'bg-surface text-accent border-border-subtle/80 border shadow-sm'
                                    : 'text-text-muted hover:text-text-primary'
                            "
                            @click="setLocale('en')"
                        >
                            <span>EN</span>
                        </button>
                    </div>
                </div>

                <div>
                    <p
                        class="text-text-muted mb-3 font-mono text-[10px] tracking-widest uppercase"
                    >
                        Full-Stack Developer &bull; Network Engineer
                    </p>
                    <a
                        :href="cvUrl"
                        target="_blank"
                        rel="noopener"
                        class="bg-accent hover:bg-accent-dim flex w-full items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-medium text-zinc-950 transition-colors"
                        @click="closeMenu"
                    >
                        {{ t.nav.downloadCv }}
                    </a>
                </div>
            </div>
        </aside>

        <!-- ============================================ -->
        <!-- HERO SECTION                                 -->
        <!-- ============================================ -->
        <section
            class="relative flex min-h-screen items-center justify-center overflow-hidden pt-14"
        >
            <!-- Glow orb -->
            <div
                class="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    class="orb-hero h-[600px] w-[600px] rounded-full bg-white/[0.04] blur-[120px]"
                />
            </div>

            <div class="relative z-10 mx-auto max-w-6xl px-6 py-24">
                <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <!-- Left: Text -->
                    <div class="hero-stagger order-2 space-y-8 lg:order-1">
                        <div class="space-y-2">
                            <p
                                class="text-accent font-mono text-xs tracking-widest uppercase"
                            >
                                {{ t.hero.badge }}
                            </p>
                            <h1
                                class="text-5xl font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl"
                            >
                                {{ t.hero.title1 }}
                                <br />
                                <span class="text-text-muted">{{
                                    t.hero.title2
                                }}</span>
                            </h1>
                        </div>

                        <p
                            class="text-text-secondary max-w-md text-lg leading-relaxed"
                        >
                            {{ t.hero.description }}
                        </p>

                        <div class="flex items-center gap-3">
                            <a
                                href="#projects"
                                class="bg-text-primary text-surface inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-opacity hover:opacity-90"
                            >
                                {{ t.hero.viewWork }}
                                <svg
                                    class="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    />
                                </svg>
                            </a>
                            <a
                                :href="cvUrl"
                                target="_blank"
                                rel="noopener"
                                class="border-border-subtle text-text-secondary hover:border-border-default hover:text-text-primary inline-flex h-10 items-center rounded-lg border px-5 text-sm font-medium transition-colors"
                            >
                                {{ t.hero.downloadCv }}
                            </a>
                        </div>
                    </div>

                    <!-- Right: Interactive 3D Lanyard ID Card -->
                    <div
                        class="lanyard-scene order-1 flex justify-center lg:order-2 lg:justify-end"
                    >
                        <div
                            ref="lanyardEl"
                            class="lanyard-draggable flex flex-col items-center"
                            :class="{
                                'lanyard-idle':
                                    hasLanded && !isDragging && !isSpringing,
                                'lanyard-dragging': isDragging,
                            }"
                            @pointerdown="onLanyardPointerDown"
                            @pointermove="onLanyardPointerMove"
                            @pointerup="onLanyardPointerUp"
                            @pointercancel="onLanyardPointerUp"
                        >
                            <!-- Fabric strap anchor: black lanyard hanging down to the clip -->
                            <div class="lanyard-anchor">
                                <div class="lanyard-loop" />
                                <div
                                    class="lanyard-dynamics"
                                    :style="lanyardStrapStyle"
                                >
                                    <div class="lanyard-strap">
                                        <div class="lanyard-strap-stripes" />
                                        <div class="lanyard-strap-seam" />
                                        <div
                                            class="lanyard-strap-text font-mono text-[9px] tracking-[0.35em]"
                                        >
                                            DEVELOPER&nbsp;&bull;&nbsp;FULL
                                            STACK&nbsp;&bull;&nbsp;NETWORK&nbsp;&bull;&nbsp;
                                        </div>
                                    </div>
                                    <div class="lanyard-tail" />
                                </div>

                                <!-- Gunmetal metal connector: loop ring → buckle body → clip jaws.
                                     Pivots at the swivel (top ring) so it stays welded to the card. -->
                                <div class="lanyard-clip" :style="clipStyle">
                                    <svg
                                        class="lanyard-clip-metal"
                                        viewBox="0 0 120 46"
                                        fill="none"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="clipBody"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#d6d6d6"
                                                />
                                                <stop
                                                    offset="0.45"
                                                    stop-color="#8b8b8b"
                                                />
                                                <stop
                                                    offset="1"
                                                    stop-color="#4d4d4d"
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="clipGroove"
                                                x1="0"
                                                y1="0"
                                                x2="1"
                                                y2="0"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#3f3f3f"
                                                />
                                                <stop
                                                    offset="0.5"
                                                    stop-color="#6b6b6b"
                                                />
                                                <stop
                                                    offset="1"
                                                    stop-color="#383838"
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="clipJaw"
                                                x1="0"
                                                y1="0"
                                                x2="1"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#c4c4c4"
                                                />
                                                <stop
                                                    offset="1"
                                                    stop-color="#565656"
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="clipDark"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#6f6f74"
                                                />
                                                <stop
                                                    offset="0.5"
                                                    stop-color="#3a3a3f"
                                                />
                                                <stop
                                                    offset="1"
                                                    stop-color="#232327"
                                                />
                                            </linearGradient>
                                        </defs>

                                        <!-- metal loop the strap's tail passes through -->
                                        <path
                                            d="M54 4a6 6 0 1 1 12 0a6 6 0 1 1 -12 0 M56.5 4a3 3 0 1 0 7 0a3 3 0 1 0 -7 0"
                                            fill-rule="evenodd"
                                            fill="url(#clipBody)"
                                            stroke="#2f2f2f"
                                            stroke-width="1"
                                        />
                                        <rect
                                            x="56"
                                            y="10"
                                            width="8"
                                            height="3"
                                            rx="1.5"
                                            fill="#2b2b2b"
                                        />

                                        <!-- buckle body (anchor plate) -->
                                        <path
                                            d="M46 13h28l2 4a8 8 0 0 1-8 8H52a8 8 0 0 1-8-8l2-4z"
                                            fill="url(#clipDark)"
                                            stroke="#232326"
                                            stroke-width="1"
                                        />
                                        <!-- slot where the strap end tucks in -->
                                        <rect
                                            x="51"
                                            y="15"
                                            width="18"
                                            height="7"
                                            rx="2"
                                            fill="#101013"
                                            stroke="#222226"
                                            stroke-width="1"
                                        />
                                        <!-- subtle top highlight -->
                                        <path
                                            d="M48 14h24"
                                            stroke="rgba(255,255,255,0.35)"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                        />

                                        <!-- clamp plate pinned to the card -->
                                        <path
                                            d="M47 30h26l2 4a4 4 0 0 1-4 4H49a4 4 0 0 1-4-4l2-4z"
                                            fill="url(#clipGroove)"
                                            stroke="#333333"
                                            stroke-width="1"
                                        />
                                        <!-- hinge rivet -->
                                        <circle
                                            cx="60"
                                            cy="30.5"
                                            r="2.2"
                                            fill="#222226"
                                            stroke="#4d4d4d"
                                            stroke-width="0.8"
                                        />
                                        <!-- gripping prongs -->
                                        <path
                                            d="M50 38c-2.5 3-2.5 5.5 0 7"
                                            stroke="url(#clipJaw)"
                                            stroke-width="2.5"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M70 38c2.5 3 2.5 5.5 0 7"
                                            stroke="url(#clipJaw)"
                                            stroke-width="2.5"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <!-- Card rides with the clip -->
                            <div
                                class="lanyard-moving"
                                :style="lanyardDragStyle"
                            >
                                <!-- 3D Card -->
                                <div
                                    ref="cardRef"
                                    class="card-3d border-border-subtle bg-surface-raised relative h-[360px] w-[260px] overflow-hidden rounded-xl border"
                                    style="transform-style: preserve-3d"
                                    :style="{
                                        transform: `perspective(1000px) rotateX(${cardTilt.rx}deg) rotateY(${cardTilt.ry}deg) scale(1.04)`,
                                    }"
                                    @mousemove="handleCardTilt"
                                    @mouseleave="resetCardTilt"
                                >
                                    <!-- Photo background -->
                                    <img
                                        v-if="!avatarFailed"
                                        :src="avatarSources[avatarIndex]"
                                        :key="avatarSources[avatarIndex]"
                                        alt="Profile photo"
                                        class="absolute inset-0 h-full w-full object-cover"
                                        fetchpriority="high"
                                        decoding="async"
                                        @error="handleAvatarError"
                                    />
                                    <div
                                        v-else
                                        class="text-accent bg-surface-overlay flex h-full w-full items-center justify-center font-mono text-6xl font-semibold"
                                    >
                                        AK
                                    </div>

                                    <!-- Readability gradient -->
                                    <div
                                        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40"
                                    />

                                    <!-- Edge light -->
                                    <div
                                        class="card-edge-light pointer-events-none absolute inset-0 rounded-xl"
                                    />

                                    <!-- Glare sweep -->
                                    <div
                                        class="card-glare pointer-events-none absolute inset-0"
                                    />

                                    <!-- Scan line overlay -->
                                    <div
                                        class="scan-line pointer-events-none absolute inset-0 opacity-25"
                                    />

                                    <!-- Name overlay -->
                                    <div
                                        class="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 p-4"
                                    >
                                        <div class="bg-accent h-px w-8" />
                                        <h2
                                            class="mt-1 text-lg font-semibold tracking-tight text-white drop-shadow-lg"
                                        >
                                            Mashudi
                                        </h2>
                                        <p
                                            class="font-mono text-[9px] tracking-[0.3em] text-white/70 uppercase"
                                        >
                                            Full-Stack
                                        </p>
                                        <span
                                            class="mt-0.5 font-mono text-[8px] text-white/35"
                                        >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll indicator -->
            <div
                class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            >
                <span
                    class="text-text-muted font-mono text-[10px] tracking-widest uppercase"
                    >{{ t.hero.scroll }}</span
                >
                <div
                    class="from-text-muted h-8 w-px bg-gradient-to-b to-transparent"
                />
            </div>
        </section>

        <!-- ============================================ -->
        <!-- TECH MARQUEE                                 -->
        <!-- ============================================ -->
        <div
            class="marquee border-border-subtle bg-surface-overlay/40 overflow-hidden border-y"
        >
            <div class="marquee-track flex w-max items-center">
                <div
                    v-for="n in 2"
                    :key="n"
                    class="flex shrink-0 items-center gap-12 px-6 py-5"
                >
                    <span
                        v-for="tech in techBrands"
                        :key="tech.name"
                        class="group/tech flex items-center gap-2.5"
                        :title="tech.name"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            class="h-5 w-5 opacity-80 transition-opacity duration-300 group-hover/tech:opacity-100"
                            aria-hidden="true"
                        >
                            <path
                                :d="tech.d"
                                fill="currentColor"
                                :style="{
                                    color:
                                        tech.name === 'github'
                                            ? 'var(--color-text-primary)'
                                            : tech.color,
                                }"
                            />
                        </svg>
                        <span
                            class="text-text-muted group-hover/tech:text-text-secondary font-mono text-xs tracking-wider uppercase"
                        >
                            {{ tech.name }}
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <!-- ============================================ -->
        <!-- ABOUT SECTION                                -->
        <!-- ============================================ -->
        <section id="about" class="border-border-subtle relative border-t">
            <div class="reveal mx-auto max-w-6xl px-6 py-24">
                <!-- Section label -->
                <div class="mb-16 flex items-center gap-4">
                    <span
                        class="text-accent font-mono text-xs tracking-widest uppercase"
                        >{{ t.about.sectionNum }}</span
                    >
                    <div class="glow-line flex-1" />
                    <span
                        class="text-text-muted font-mono text-xs tracking-widest uppercase"
                        >{{ t.about.sectionTitle }}</span
                    >
                </div>

                <div class="grid gap-16 lg:grid-cols-12">
                    <!-- Large statement -->
                    <div class="lg:col-span-7">
                        <h2
                            class="text-4xl leading-[1.1] font-semibold tracking-tighter text-balance sm:text-5xl"
                        >
                            {{ t.about.statement1 }}
                            <span class="text-text-muted">{{
                                t.about.statementWorks
                            }}</span
                            >,
                            <br />
                            {{ t.about.statement2 }}
                            <span class="text-accent">{{
                                t.about.statementNetwork
                            }}</span>
                        </h2>
                    </div>

                    <!-- Bio text -->
                    <div
                        class="lg:border-border-subtle space-y-6 lg:col-span-5 lg:border-l lg:pl-8"
                    >
                        <p class="text-text-secondary text-sm leading-relaxed">
                            {{ t.about.p1 }}
                        </p>
                        <p class="text-text-secondary text-sm leading-relaxed">
                            {{ t.about.p2 }}
                        </p>

                        <!-- Quick facts -->
                        <div class="grid grid-cols-2 gap-4 pt-4">
                            <div
                                class="border-border-subtle bg-surface-raised rounded-lg border p-4"
                            >
                                <p
                                    class="text-text-muted font-mono text-[10px] tracking-widest uppercase"
                                >
                                    {{ t.about.basedIn }}
                                </p>
                                <p class="mt-1 text-sm font-medium">
                                    {{ t.about.location }}
                                </p>
                            </div>
                            <div
                                class="border-border-subtle bg-surface-raised rounded-lg border p-4"
                            >
                                <p
                                    class="text-text-muted font-mono text-[10px] tracking-widest uppercase"
                                >
                                    {{ t.about.languages }}
                                </p>
                                <p class="mt-1 text-sm font-medium">
                                    {{ t.about.languagesList }}
                                </p>
                            </div>
                            <div
                                class="border-border-subtle bg-surface-raised rounded-lg border p-4"
                            >
                                <p
                                    class="text-text-muted font-mono text-[10px] tracking-widest uppercase"
                                >
                                    {{ t.about.education }}
                                </p>
                                <p class="mt-1 text-sm font-medium">
                                    {{ t.about.major }}
                                </p>
                            </div>
                            <div
                                class="border-border-subtle bg-surface-raised rounded-lg border p-4"
                            >
                                <p
                                    class="text-text-muted font-mono text-[10px] tracking-widest uppercase"
                                >
                                    {{ t.about.availability }}
                                </p>
                                <p class="text-accent mt-1 text-sm font-medium">
                                    {{ t.about.status }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ============================================ -->
        <!-- PROJECTS SECTION                             -->
        <!-- ============================================ -->
        <section
            id="projects"
            class="border-border-subtle bg-surface-raised relative border-t"
        >
            <div class="reveal mx-auto max-w-6xl px-6 py-24">
                <!-- Section label -->
                <div class="mb-16 flex items-center gap-4">
                    <span
                        class="text-accent font-mono text-xs tracking-widest uppercase"
                        >{{ t.projects.sectionNum }}</span
                    >
                    <div class="glow-line flex-1" />
                    <span
                        class="text-text-muted font-mono text-xs tracking-widest uppercase"
                        >{{ t.projects.sectionTitle }}</span
                    >
                </div>

                <div class="mb-12">
                    <h2
                        class="text-4xl font-semibold tracking-tighter sm:text-5xl"
                    >
                        {{ t.projects.title }}
                    </h2>
                    <p class="text-text-secondary mt-3 max-w-md text-sm">
                        {{ t.projects.description }}
                    </p>
                </div>

                <!-- Project Grid -->
                <div
                    v-if="projects && projects.length > 0"
                    class="grid gap-6 md:grid-cols-2"
                >
                    <div
                        v-for="project in projects"
                        :key="project.id"
                        class="group border-border-subtle bg-surface hover:border-accent/40 relative flex cursor-pointer flex-col justify-between rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        role="button"
                        tabindex="0"
                        :aria-label="`Open ${project.title}`"
                        @mouseenter="setActiveProject(project.id)"
                        @mouseleave="setActiveProject(null)"
                        @click="openProject(project)"
                        @keydown.enter="openProject(project)"
                    >
                        <div>
                            <!-- Preview image container -->
                            <div
                                class="border-border-subtle bg-surface-overlay group/img relative mb-5 h-48 overflow-hidden rounded-lg border"
                            >
                                <img
                                    v-if="project.image_url"
                                    :src="project.image_url"
                                    :alt="`${project.title} preview`"
                                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div v-else class="flex h-full w-full flex-col">
                                    <div
                                        class="border-border-subtle bg-surface flex h-6 shrink-0 items-center gap-1 border-b px-3"
                                    >
                                        <span
                                            class="bg-border-default h-1.5 w-1.5 rounded-full"
                                        />
                                        <span
                                            class="bg-border-default h-1.5 w-1.5 rounded-full"
                                        />
                                        <span
                                            class="bg-border-default h-1.5 w-1.5 rounded-full"
                                        />
                                        <span
                                            class="bg-border-default/60 ml-2 h-1.5 w-16 rounded-full"
                                        />
                                    </div>
                                    <div class="grid flex-1 place-items-center">
                                        <div class="text-center">
                                            <p
                                                class="text-accent font-mono text-[10px] tracking-widest uppercase"
                                            >
                                                {{ t.projects.preview }}
                                            </p>
                                            <p
                                                class="text-text-muted mt-1 text-xs"
                                            >
                                                {{ t.projects.noScreenshot }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- External link action -->
                            <div class="mb-4 flex items-center justify-end">
                                <a
                                    v-if="project.link"
                                    :href="project.link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-text-muted group-hover:text-accent flex items-center gap-1 font-mono text-xs transition-colors"
                                    @click.stop
                                    :title="`Open ${project.title}`"
                                >
                                    <span>{{ t.projects.visit }}</span>
                                    <svg
                                        class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.8"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <!-- Title -->
                            <h3
                                class="text-lg font-semibold tracking-tight transition-colors"
                            >
                                <button
                                    type="button"
                                    class="hover:text-accent text-left transition-colors"
                                    @click.stop="openProject(project)"
                                >
                                    {{ project.title }}
                                </button>
                            </h3>

                            <p
                                class="text-text-secondary mt-2 text-sm leading-relaxed"
                            >
                                {{ project.description }}
                            </p>
                        </div>

                        <!-- Tags -->
                        <div
                            class="border-border-subtle/60 mt-5 flex flex-wrap gap-2 border-t pt-4"
                        >
                            <span
                                v-for="tag in project.tags"
                                :key="tag"
                                class="border-border-subtle bg-surface-overlay text-text-muted rounded-md border px-2 py-0.5 font-mono text-[10px]"
                            >
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <div
                    v-else
                    class="border-border-subtle bg-surface-raised rounded-xl border p-12 text-center"
                >
                    <p class="text-text-muted font-mono text-xs">
                        {{ t.projects.empty }}
                    </p>
                </div>
            </div>
        </section>

        <!-- ============================================ -->
        <!-- SKILLS SECTION                               -->
        <!-- ============================================ -->
        <section id="skills" class="border-border-subtle relative border-t">
            <div class="reveal mx-auto max-w-6xl px-6 py-24">
                <!-- Section label -->
                <div class="mb-16 flex items-center gap-4">
                    <span
                        class="text-accent font-mono text-xs tracking-widest uppercase"
                        >{{ t.skills.sectionNum }}</span
                    >
                    <div class="glow-line flex-1" />
                    <span
                        class="text-text-muted font-mono text-xs tracking-widest uppercase"
                        >{{ t.skills.sectionTitle }}</span
                    >
                </div>

                <div class="mb-12">
                    <h2
                        class="text-4xl font-semibold tracking-tighter sm:text-5xl"
                    >
                        {{ t.skills.title }}
                    </h2>
                    <p class="text-text-secondary mt-3 max-w-md text-sm">
                        {{ t.skills.description }}
                    </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="skill in skills"
                        :key="skill.category"
                        class="border-border-subtle bg-surface-raised rounded-xl border p-6"
                    >
                        <p
                            class="text-accent font-mono text-[10px] tracking-widest uppercase"
                        >
                            {{ skill.category }}
                        </p>
                        <ul class="mt-4 space-y-2">
                            <li
                                v-for="item in skill.items"
                                :key="item"
                                class="text-text-secondary flex items-center gap-2 text-sm"
                            >
                                <span class="bg-border-default h-px w-3" />
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Terminal-style command line -->
                <div
                    class="border-border-subtle bg-surface-raised mt-12 rounded-xl border p-5"
                >
                    <div
                        class="border-border-subtle mb-3 flex items-center gap-2 border-b pb-3"
                    >
                        <div class="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                        <div class="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                        <div class="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                        <span
                            class="text-text-muted ml-2 font-mono text-[10px]"
                        >
                            terminal
                        </span>
                    </div>
                    <div class="space-y-1.5 font-mono text-xs">
                        <p>
                            <span class="text-accent">$</span>
                            <span class="text-text-muted"> cat /etc/motd</span>
                        </p>
                        <p class="text-text-secondary pl-4 whitespace-pre-line">
                            {{ t.skills.motd }}
                        </p>
                        <p>
                            <span class="text-accent">$</span>
                            <span class="text-text-muted animate-pulse">_</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ============================================ -->
        <!-- CONTACT / FOOTER                             -->
        <!-- ============================================ -->
        <section
            id="contact"
            class="border-border-subtle bg-surface-raised relative border-t"
        >
            <div class="reveal mx-auto max-w-6xl px-6 py-24">
                <!-- Section label -->
                <div class="mb-16 flex items-center gap-4">
                    <span
                        class="text-accent font-mono text-xs tracking-widest uppercase"
                        >{{ t.contact.sectionNum }}</span
                    >
                    <div class="glow-line flex-1" />
                    <span
                        class="text-text-muted font-mono text-xs tracking-widest uppercase"
                        >{{ t.contact.sectionTitle }}</span
                    >
                </div>

                <div class="grid gap-16 lg:grid-cols-2">
                    <!-- CTA -->
                    <div>
                        <h2
                            class="text-4xl leading-[1.1] font-semibold tracking-tighter sm:text-5xl"
                        >
                            {{ t.contact.title1 }}
                            <br />
                            <span class="text-accent">{{
                                t.contact.title2
                            }}</span>
                        </h2>
                        <p class="text-text-secondary mt-4 max-w-sm text-sm">
                            {{ t.contact.description }}
                        </p>
                        <div class="mt-8 flex items-center gap-3">
                            <a
                                href="mailto:masamasmas88@gmail.com"
                                class="bg-text-primary text-surface inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-opacity hover:opacity-90"
                            >
                                {{ t.contact.cta }}
                                <svg
                                    class="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Links -->
                    <div
                        class="lg:border-border-subtle space-y-6 lg:border-l lg:pl-8"
                    >
                        <div>
                            <p
                                class="text-text-muted font-mono text-[10px] tracking-widest uppercase"
                            >
                                {{ t.contact.social }}
                            </p>
                            <div class="mt-3 flex flex-col gap-2">
                                <a
                                    href="https://github.com/Masmas99"
                                    class="group border-border-subtle bg-surface hover:border-border-default flex items-center justify-between rounded-lg border px-4 py-3 transition-colors"
                                >
                                    <span
                                        class="text-text-secondary group-hover:text-text-primary text-sm transition-colors"
                                        >GitHub</span
                                    >
                                    <svg
                                        class="text-text-muted h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    class="group border-border-subtle bg-surface hover:border-border-default flex items-center justify-between rounded-lg border px-4 py-3 transition-colors"
                                >
                                    <span
                                        class="text-text-secondary group-hover:text-text-primary text-sm transition-colors"
                                        >LinkedIn</span
                                    >
                                    <svg
                                        class="text-text-muted h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com/feaf.v"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="group border-border-subtle bg-surface hover:border-border-default flex items-center justify-between rounded-lg border px-4 py-3 transition-colors"
                                >
                                    <span
                                        class="text-text-secondary group-hover:text-text-primary text-sm transition-colors"
                                        >Instagram</span
                                    >
                                    <svg
                                        class="text-text-muted h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:masamasmas88@gmail.com"
                                    class="group border-border-subtle bg-surface hover:border-border-default flex items-center justify-between rounded-lg border px-4 py-3 transition-colors"
                                >
                                    <span
                                        class="text-text-secondary group-hover:text-text-primary text-sm transition-colors"
                                        >Email</span
                                    >
                                    <svg
                                        class="text-text-muted h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer bar -->
            <div class="border-border-subtle border-t px-6 py-6">
                <div
                    class="mx-auto flex max-w-6xl items-center justify-between"
                >
                    <p class="text-text-muted font-mono text-[10px]">
                        {{ t.contact.copyright }}
                    </p>
                    <p class="text-text-muted font-mono text-[10px]">
                        <span class="text-accent">&gt;</span>
                        {{ t.contact.secureByDefault }}
                    </p>
                </div>
            </div>
        </section>
        <!-- ============================================ -->
        <!-- PROJECT DETAIL / PREVIEW MODAL               -->
        <!-- ============================================ -->
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="selectedProject"
                class="bg-surface/80 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md sm:p-6"
                @click="closeProject"
                aria-modal="true"
                role="dialog"
            >
                <Transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="opacity-0 scale-95 translate-y-4"
                    enter-to-class="opacity-100 scale-100 translate-y-0"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="opacity-100 scale-100 translate-y-0"
                    leave-to-class="opacity-0 scale-95 translate-y-4"
                >
                    <div
                        class="border-border-subtle bg-surface-raised relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-2xl"
                        @click.stop
                    >
                        <!-- Modal header -->
                        <div
                            class="border-border-subtle flex items-center justify-between border-b px-6 py-4"
                        >
                            <div class="flex items-center gap-3">
                                <span
                                    class="border-border-subtle bg-surface-overlay text-text-muted inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase"
                                >
                                    <span
                                        class="bg-accent h-1 w-1 rounded-full"
                                    />
                                    {{ selectedProject.status }}
                                </span>
                                <h3
                                    class="text-base font-semibold tracking-tight text-white"
                                >
                                    {{ selectedProject.title }}
                                </h3>
                            </div>

                            <button
                                type="button"
                                class="text-text-muted hover:text-text-primary hover:bg-surface-overlay flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                                @click="closeProject"
                                aria-label="Close modal"
                            >
                                <svg
                                    class="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.8"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!-- Screenshot preview -->
                        <div
                            v-if="selectedProject.image_url"
                            class="border-border-subtle bg-surface-overlay relative max-h-80 overflow-hidden border-b"
                        >
                            <img
                                :src="selectedProject.image_url"
                                :alt="`${selectedProject.title} full preview`"
                                class="h-full w-full object-cover"
                            />
                        </div>

                        <!-- Modal body -->
                        <div class="space-y-4 p-6">
                            <div>
                                <h4
                                    class="text-text-muted font-mono text-[10px] tracking-widest uppercase"
                                >
                                    {{ t.projects.modalAbout }}
                                </h4>
                                <p
                                    class="text-text-secondary mt-1.5 text-sm leading-relaxed whitespace-pre-line"
                                >
                                    {{ selectedProject.description }}
                                </p>
                            </div>

                            <!-- Tags -->
                            <div v-if="selectedProject.tags?.length">
                                <h4
                                    class="text-text-muted mb-2 font-mono text-[10px] tracking-widest uppercase"
                                >
                                    {{ t.projects.modalTech }}
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        v-for="tag in selectedProject.tags"
                                        :key="tag"
                                        class="border-border-subtle bg-surface-overlay text-text-muted rounded-md border px-2.5 py-1 font-mono text-xs"
                                    >
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Modal footer -->
                        <div
                            class="border-border-subtle bg-surface flex items-center justify-end gap-3 border-t px-6 py-4"
                        >
                            <button
                                type="button"
                                class="border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-overlay rounded-lg border px-4 py-2 text-xs font-medium transition-colors"
                                @click="closeProject"
                            >
                                {{ t.projects.modalClose }}
                            </button>

                            <a
                                v-if="selectedProject.link"
                                :href="selectedProject.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium text-zinc-950 transition-colors"
                            >
                                <span>{{ t.projects.modalVisit }}</span>
                                <svg
                                    class="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.lanyard-scene {
    perspective: 1200px;
}

.lanyard-draggable {
    cursor: grab;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    will-change: transform;
}

.lanyard-draggable:active {
    cursor: grabbing;
}

/* Strap hangs from a fixed anchor point at the top.
   Paint order (bottom -> top): card (1), strap/tail (20), clip/hook (30). */
.lanyard-anchor {
    position: relative;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Card moves together with the clip when dragged.
   Same pivot as the clip: the swivel sits 34px above the card top
   (clip height 42 minus -8px bottom margin overlap). */
.lanyard-moving {
    position: relative;
    z-index: 1;
    will-change: transform;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-origin: 50% -34px;
}

.lanyard-dragging .lanyard-dynamics,
.lanyard-dragging .lanyard-clip,
.lanyard-dragging .card-3d {
    transition: none;
}

/* Neck loop ring the strap hangs from */
.lanyard-loop {
    position: relative;
    z-index: 2;
    width: 34px;
    height: 12px;
    margin: 0 auto -2px;
    border: 2.5px solid #858585;
    border-bottom-color: transparent;
    border-radius: 12px 12px 0 0;
    box-shadow:
        inset 0 2px 2px rgba(0, 0, 0, 0.4),
        0 1px 1px rgba(255, 255, 255, 0.08);
}

/* Strap + tail stretch/rotate together to follow the dragged card */
.lanyard-dynamics {
    transform-origin: top center;
    display: flex;
    flex-direction: column;
    align-items: center;
    will-change: transform;
}

/* Vertical strap */
.lanyard-strap {
    position: relative;
    width: 48px;
    height: 150px;
    overflow: hidden;
    background:
        repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.035) 0,
            2px,
            transparent 2px,
            7px
        ),
        linear-gradient(
            90deg,
            #141416 0%,
            #202023 22%,
            #2a2a2f 50%,
            #202023 78%,
            #141416 100%
        );
    border: 1px solid var(--color-border-subtle);
    border-top: none;
    clip-path: polygon(13px 0, 35px 0, 44px 100%, 4px 100%);
    box-shadow:
        inset 6px 0 8px -5px rgba(0, 0, 0, 0.55),
        inset -6px 0 8px -5px rgba(0, 0, 0, 0.55),
        inset 3px 0 4px -2px rgba(255, 255, 255, 0.05);
}

@media (max-width: 640px) {
    .lanyard-strap {
        height: 110px;
    }
}

/* Stitched seams along the edges */
.lanyard-strap-seam {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 24px;
    transform: translateX(-50%);
    background: repeating-linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.09) 0 2px,
        transparent 2px 6px
    );
    mask-image: linear-gradient(
        90deg,
        transparent 0,
        #000 3px,
        transparent 4px 20px,
        #000 21px,
        transparent 24px
    );
    -webkit-mask-image: linear-gradient(
        90deg,
        transparent 0,
        #000 3px,
        transparent 4px 20px,
        #000 21px,
        transparent 24px
    );
    opacity: 0.7;
}

/* Slotted tail that slides into the clip */
.lanyard-tail {
    position: relative;
    z-index: 1;
    margin: 0 auto -10px;
    width: 14px;
    height: 18px;
    background: linear-gradient(90deg, #17171a 0%, #26262b 50%, #17171a 100%);
    border: 1px solid var(--color-border-subtle);
    border-top: none;
    clip-path: polygon(0 0, 100% 0, 78% 100%, 22% 100%);
}

.lanyard-strap-stripes {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
        45deg,
        transparent 0 10px,
        rgba(34, 197, 94, 0.06) 10px 12px,
        rgba(255, 255, 255, 0.02) 12px 13px,
        transparent 13px 22px
    );
    background-size: 200% 200%;
    animation: strap-slide 6s linear infinite;
}

@keyframes strap-slide {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 24px;
    }
}

.lanyard-strap-text {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    writing-mode: vertical-rl;
    height: 160%;
    padding-top: 4px;
    white-space: nowrap;
    color: var(--color-text-muted);
    opacity: 0.6;
    animation: strap-scroll 9s linear infinite;
}

@keyframes strap-scroll {
    0% {
        transform: translate(-50%, 0);
    }
    100% {
        transform: translate(-50%, -50%);
    }
}

.lanyard-clip {
    position: relative;
    z-index: 30;
    width: 104px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -8px;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.55));
    /* Pivot at the swivel (clip top) — where the strap connects.
       Card & hook rotate together around this point, so the hook
       never separates from the card's top edge. */
    transform-origin: 50% 0px;
}

.lanyard-clip-metal {
    width: 104px;
    height: 42px;
}

.card-3d {
    transition: transform 0.15s ease-out;
    will-change: transform;
}

.card-edge-light {
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.08),
        inset 1px 0 0 rgba(255, 255, 255, 0.04),
        0 30px 60px -12px rgba(0, 0, 0, 0.8),
        0 12px 24px -12px rgba(0, 0, 0, 0.6);
}

.card-glare {
    background: linear-gradient(
        115deg,
        transparent 30%,
        rgba(255, 255, 255, 0.09) 45%,
        rgba(255, 255, 255, 0.14) 50%,
        rgba(255, 255, 255, 0.09) 55%,
        transparent 70%
    );
    background-size: 250% 250%;
    background-position: 120% 0;
    animation: glare-sweep 5.5s ease-in-out infinite;
}

@keyframes glare-sweep {
    0%,
    60% {
        background-position: 130% 0;
    }
    85%,
    100% {
        background-position: -30% 0;
    }
}

.lanyard-idle {
    transform-origin: top center;
    animation: lanyard-dangle 4s ease-in-out infinite;
}

@keyframes lanyard-dangle {
    0%,
    100% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(1.1deg);
    }
    75% {
        transform: rotate(-1.1deg);
    }
}
</style>
