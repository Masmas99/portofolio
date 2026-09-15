import {
    A as e,
    D as t,
    O as n,
    S as r,
    T as i,
    _ as a,
    a as o,
    b as s,
    d as c,
    f as l,
    g as u,
    h as ee,
    j as d,
    l as f,
    m as p,
    n as m,
    p as h,
    t as te,
    u as g,
    v as _,
    x as v,
    y as ne,
} from './app-CuankhWN.js';
import { t as y } from './_plugin-vue_export-helper-BDNMzG2s.js';
var re = { class: `relative z-10 flex flex-col items-center text-center` },
    ie = [`data-text`],
    ae = {
        key: 0,
        class: `text-accent mb-4 font-mono text-sm font-bold tracking-widest`,
    },
    oe = {
        class: `bg-surface-raised/60 border-border-subtle mb-6 w-full max-w-md rounded-lg border p-4 text-left font-mono text-[11px] leading-relaxed`,
    },
    se = {
        key: 0,
        class: `mr-1.5 inline-block animate-pulse bg-emerald-400`,
        style: { width: `6px`, height: `13px`, 'vertical-align': `middle` },
    },
    b = { class: `text-text-primary mb-2 text-xl font-semibold` },
    ce = { class: `text-text-muted mb-8 text-sm leading-relaxed` },
    le = 120,
    x = 170,
    S = y(
        _({
            __name: `Error`,
            props: { status: {} },
            setup(_) {
                let y = _,
                    S = c(
                        () =>
                            ({
                                403: `403: Forbidden`,
                                404: `404: Page Not Found`,
                                500: `500: Server Error`,
                                503: `503: Service Unavailable`,
                            })[y.status] ?? `${y.status}: Error`,
                    ),
                    C = c(
                        () =>
                            ({
                                403: `Sorry, you are forbidden from accessing this page.`,
                                404: `Sorry, the page you are looking for could not be found.`,
                                500: `Whoops, something went wrong on our servers.`,
                                503: `Sorry, we are doing some maintenance. Please check back soon.`,
                            })[y.status] ?? `An unexpected error occurred.`,
                    ),
                    w = c(() => String(y.status)),
                    T = t(null),
                    E = [],
                    D = [],
                    O = [],
                    k = { x: -9999, y: -9999, active: !1 },
                    A = { x: -9999, y: -9999, t: -1 },
                    j = null,
                    M = 0,
                    N = !1,
                    P = window.matchMedia(
                        `(prefers-reduced-motion: reduce)`,
                    ).matches,
                    F = [
                        `#f59e0b`,
                        `#06b6d4`,
                        `#f43f5e`,
                        `#a855f7`,
                        `#10b981`,
                        `#e2e8f0`,
                    ];
                function ue() {
                    let e = window.innerWidth,
                        t = window.innerHeight,
                        n = Math.max(
                            40,
                            Math.min(100, Math.round((e * t) / 18e3)),
                        );
                    E.length = 0;
                    for (let r = 0; r < n; r++)
                        E.push({
                            x: Math.random() * e,
                            y: Math.random() * t,
                            vx: (Math.random() - 0.5) * 0.15,
                            vy: (Math.random() - 0.5) * 0.15,
                            r: Math.random() * 1.5 + 0.5,
                        });
                }
                function I() {
                    let e = T.value;
                    if (!e) return;
                    let t = Math.min(window.devicePixelRatio || 1, 2),
                        n = window.innerWidth,
                        r = window.innerHeight;
                    ((e.width = Math.round(n * t)),
                        (e.height = Math.round(r * t)),
                        (j = e.getContext(`2d`)),
                        j?.setTransform(t, 0, 0, t, 0, 0),
                        ue(),
                        P && R());
                }
                function L(e, t) {
                    let n = 35 + Math.floor(Math.random() * 20);
                    for (let r = 0; r < n; r++) {
                        let n = Math.random() * Math.PI * 2,
                            r = 2 + Math.random() * 5;
                        D.push({
                            x: e,
                            y: t,
                            vx: Math.cos(n) * r,
                            vy: Math.sin(n) * r - 1.5,
                            life: 1,
                            maxLife: 0.5 + Math.random() * 0.7,
                            color: F[Math.floor(Math.random() * F.length)],
                            size: 1.5 + Math.random() * 2,
                        });
                    }
                }
                function R() {
                    let e = j;
                    if (!e) return;
                    let t = window.innerWidth,
                        n = window.innerHeight;
                    if ((e.clearRect(0, 0, t, n), k.active)) {
                        let r = e.createRadialGradient(
                            k.x,
                            k.y,
                            0,
                            k.x,
                            k.y,
                            180,
                        );
                        (r.addColorStop(0, `rgba(255,255,255,0.06)`),
                            r.addColorStop(1, `rgba(255,255,255,0)`),
                            (e.fillStyle = r),
                            e.fillRect(0, 0, t, n));
                    }
                    let r = performance.now() - A.t;
                    if (r < 900) {
                        let t = r / 900;
                        (e.beginPath(),
                            e.arc(A.x, A.y, 30 + t * 220, 0, Math.PI * 2),
                            (e.strokeStyle = `rgba(255,255,255,${(0.25 * (1 - t)).toFixed(3)})`),
                            (e.lineWidth = 1.5),
                            e.stroke());
                    }
                    k.active && O.push({ x: k.x, y: k.y, life: 1 });
                    for (let t = O.length - 1; t >= 0; t--) {
                        let n = O[t];
                        if (((n.life -= 0.04), n.life <= 0)) {
                            O.splice(t, 1);
                            continue;
                        }
                        ((e.fillStyle = `rgba(255,255,255,${(n.life * 0.25).toFixed(3)})`),
                            e.beginPath(),
                            e.arc(n.x, n.y, 2.5 * n.life, 0, Math.PI * 2),
                            e.fill());
                    }
                    for (let e of E) {
                        if (k.active) {
                            let t = k.x - e.x,
                                n = k.y - e.y,
                                r = t * t + n * n;
                            if (r < 28900) {
                                let i = Math.sqrt(r) || 1,
                                    a = 1 - i / x;
                                ((e.vx += (t / i) * a * 0.025),
                                    (e.vy += (n / i) * a * 0.025));
                            }
                        }
                        if (r < 300) {
                            let t = e.x - A.x,
                                n = e.y - A.y,
                                i = Math.hypot(t, n);
                            if (i < 200 && i > 0) {
                                let a = (1 - i / 200) * (1 - r / 300) * 2;
                                ((e.vx += (t / i) * a), (e.vy += (n / i) * a));
                            }
                        }
                        ((e.vx *= 0.98),
                            (e.vy *= 0.98),
                            (e.x += e.vx),
                            (e.y += e.vy),
                            e.x < -25 && (e.x = t + 25),
                            e.x > t + 25 && (e.x = -25),
                            e.y < -25 && (e.y = n + 25),
                            e.y > n + 25 && (e.y = -25));
                    }
                    for (let t = 0; t < E.length; t++) {
                        let n = E[t];
                        for (let r = t + 1; r < E.length; r++) {
                            let t = E[r],
                                i = n.x - t.x,
                                a = n.y - t.y,
                                o = i * i + a * a;
                            if (o < 14400) {
                                let r = Math.sqrt(o);
                                (e.beginPath(),
                                    e.moveTo(n.x, n.y),
                                    e.lineTo(t.x, t.y),
                                    (e.strokeStyle = `rgba(255,255,255,${(0.12 * (1 - r / le)).toFixed(3)})`),
                                    (e.lineWidth = 1),
                                    e.stroke());
                            }
                        }
                        if (k.active) {
                            let t = k.x - n.x,
                                r = k.y - n.y,
                                i = t * t + r * r;
                            if (i < 28900) {
                                let t = Math.sqrt(i);
                                (e.beginPath(),
                                    e.moveTo(n.x, n.y),
                                    e.lineTo(k.x, k.y),
                                    (e.strokeStyle = `rgba(255,255,255,${(0.18 * (1 - t / x)).toFixed(3)})`),
                                    (e.lineWidth = 1),
                                    e.stroke());
                            }
                        }
                    }
                    e.fillStyle = `rgba(255,255,255,0.7)`;
                    for (let t of E)
                        (e.beginPath(),
                            e.arc(t.x, t.y, t.r, 0, Math.PI * 2),
                            e.fill());
                    for (let t = D.length - 1; t >= 0; t--) {
                        let n = D[t];
                        if (
                            ((n.vy += 0.05),
                            (n.x += n.vx),
                            (n.y += n.vy),
                            (n.vx *= 0.985),
                            (n.vy *= 0.985),
                            (n.life -= 0.016 / n.maxLife),
                            n.life <= 0)
                        ) {
                            D.splice(t, 1);
                            continue;
                        }
                        ((e.globalAlpha = n.life),
                            (e.fillStyle = n.color),
                            e.beginPath(),
                            e.arc(n.x, n.y, n.size * n.life, 0, Math.PI * 2),
                            e.fill(),
                            (e.globalAlpha = 1));
                    }
                }
                function z() {
                    N && (R(), (M = requestAnimationFrame(z)));
                }
                function B(e) {
                    ((k.x = e.clientX), (k.y = e.clientY), (k.active = !0));
                }
                function V(e) {
                    ((A.x = e.clientX),
                        (A.y = e.clientY),
                        (A.t = performance.now()));
                }
                function H() {
                    k.active = !1;
                }
                let U = t(0),
                    W = t(``),
                    G = 0,
                    K = null;
                function de(e) {
                    if (e.target.closest(`a`)) return;
                    L(e.clientX, e.clientY);
                    let t = Date.now();
                    ((U.value = t - G < 2e3 ? U.value + 1 : 1),
                        (G = t),
                        U.value >= 2 &&
                            ((W.value = `COMBO x${U.value}`),
                            K && clearTimeout(K),
                            (K = setTimeout(() => {
                                W.value = ``;
                            }, 1200))));
                }
                let q = t({ x: 0, y: 0 });
                function fe(e) {
                    ((q.value.x = e.clientX), (q.value.y = e.clientY));
                }
                let pe = c(() => {
                        let e = window.innerWidth / 2;
                        return ((q.value.x - e) / e) * 8;
                    }),
                    me = c(() => {
                        let e = window.innerHeight / 2;
                        return ((q.value.y - e) / e) * 5;
                    }),
                    J = [
                        `> ERROR 404: page not found`,
                        `> scanning nearby routes...`,
                        `> no matching route detected`,
                        `> try clicking around for fun`,
                    ],
                    Y = t([]),
                    X = 0,
                    Z = 0,
                    Q = null;
                function he() {
                    if (X >= J.length) return;
                    let e = J[X];
                    Z <= e.length
                        ? ((Y.value[X] = e.slice(0, Z)), Z++)
                        : (X++, (Z = 0));
                }
                function $() {
                    document.hidden
                        ? ((N = !1), cancelAnimationFrame(M))
                        : P || ((N = !0), (M = requestAnimationFrame(z)));
                }
                return (
                    ne(() => {
                        (I(),
                            window.addEventListener(`resize`, I),
                            P || ((N = !0), (M = requestAnimationFrame(z))),
                            document.addEventListener(`visibilitychange`, $),
                            (Q = window.setInterval(he, 38)));
                    }),
                    s(() => {
                        ((N = !1),
                            cancelAnimationFrame(M),
                            window.removeEventListener(`resize`, I),
                            document.removeEventListener(`visibilitychange`, $),
                            Q && clearInterval(Q),
                            K && clearTimeout(K));
                    }),
                    (t, s) => (
                        v(),
                        p(
                            g,
                            null,
                            [
                                a(n(te), { title: S.value }, null, 8, [
                                    `title`,
                                ]),
                                l(
                                    `div`,
                                    {
                                        class: `bg-surface text-text-primary noise-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6`,
                                        onMousemove: fe,
                                        onPointermove: B,
                                        onPointerdown: V,
                                        onPointerleave: H,
                                        onClick: de,
                                    },
                                    [
                                        l(
                                            `canvas`,
                                            {
                                                ref_key: `canvasEl`,
                                                ref: T,
                                                class: `pointer-events-none fixed inset-0 z-0`,
                                            },
                                            null,
                                            512,
                                        ),
                                        (s[3] ||= ee(
                                            `<div class="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]" style="background:repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 1px,
                    rgba(255, 255, 255, 0.08) 1px,
                    rgba(255, 255, 255, 0.08) 2px
                );" data-v-50cd6864></div><div class="pointer-events-none fixed inset-0 z-[2] select-none" data-v-50cd6864><span class="text-text-muted absolute font-mono text-2xl font-bold opacity-[0.06]" style="top:12%;left:8%;animation:drift 14s ease-in-out infinite;" data-v-50cd6864>4</span><span class="text-text-muted absolute font-mono text-3xl font-bold opacity-[0.05]" style="top:65%;right:12%;animation:drift 18s ease-in-out infinite 2s;" data-v-50cd6864>!</span><span class="text-text-muted absolute font-mono text-2xl font-bold opacity-[0.04]" style="top:22%;right:6%;animation:drift 12s ease-in-out infinite 5s;" data-v-50cd6864>{</span><span class="text-text-muted absolute font-mono text-xl font-bold opacity-[0.05]" style="bottom:18%;left:10%;animation:drift 16s ease-in-out infinite 1s;" data-v-50cd6864>}</span><span class="text-text-muted absolute font-mono text-3xl font-bold opacity-[0.04]" style="top:55%;left:4%;animation:drift 13s ease-in-out infinite 4s;" data-v-50cd6864>~</span><span class="text-text-muted absolute font-mono text-xl font-bold opacity-[0.06]" style="bottom:28%;right:8%;animation:drift 15s ease-in-out infinite 3s;" data-v-50cd6864>#</span></div>`,
                                            2,
                                        )),
                                        l(`div`, re, [
                                            l(
                                                `div`,
                                                {
                                                    class: `glitch-wrapper mb-6 select-none`,
                                                    style: e({
                                                        transform: `perspective(800px) rotateY(${pe.value}deg) rotateX(${-me.value}deg)`,
                                                    }),
                                                },
                                                [
                                                    l(
                                                        `span`,
                                                        {
                                                            class: `glitch font-mono text-[100px] leading-none font-bold tracking-tighter sm:text-[140px]`,
                                                            'data-text':
                                                                w.value,
                                                        },
                                                        d(w.value),
                                                        9,
                                                        ie,
                                                    ),
                                                ],
                                                4,
                                            ),
                                            a(
                                                o,
                                                { name: `combo` },
                                                {
                                                    default: i(() => [
                                                        W.value
                                                            ? (v(),
                                                              p(
                                                                  `div`,
                                                                  ae,
                                                                  d(W.value),
                                                                  1,
                                                              ))
                                                            : h(``, !0),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                            l(`div`, oe, [
                                                (v(!0),
                                                p(
                                                    g,
                                                    null,
                                                    r(
                                                        Y.value,
                                                        (e, t) => (
                                                            v(),
                                                            p(
                                                                `p`,
                                                                {
                                                                    key: t,
                                                                    class: `text-text-muted`,
                                                                },
                                                                [
                                                                    t ===
                                                                    Y.value
                                                                        .length -
                                                                        1
                                                                        ? (v(),
                                                                          p(
                                                                              `span`,
                                                                              se,
                                                                          ))
                                                                        : h(
                                                                              ``,
                                                                              !0,
                                                                          ),
                                                                    u(
                                                                        ` ` +
                                                                            d(
                                                                                e,
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                            )
                                                        ),
                                                    ),
                                                    128,
                                                )),
                                            ]),
                                            l(`h1`, b, d(S.value), 1),
                                            l(`p`, ce, d(C.value), 1),
                                            a(
                                                n(m),
                                                {
                                                    href: `/`,
                                                    class: `bg-accent hover:bg-accent-dim inline-block rounded-lg px-6 py-2.5 text-sm font-medium text-zinc-950 transition-colors`,
                                                    onClick: (s[0] ||=
                                                        f(() => {}, [`stop`])),
                                                },
                                                {
                                                    default: i(() => [
                                                        ...(s[1] ||= [
                                                            u(
                                                                ` Back to Home `,
                                                                -1,
                                                            ),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                            (s[2] ||= l(
                                                `p`,
                                                {
                                                    class: `text-text-muted/40 mt-8 font-mono text-[10px] tracking-widest uppercase`,
                                                },
                                                ` click anywhere for fireworks `,
                                                -1,
                                            )),
                                        ]),
                                    ],
                                    32,
                                ),
                            ],
                            64,
                        )
                    )
                );
            },
        }),
        [[`__scopeId`, `data-v-50cd6864`]],
    );
export { S as default };
