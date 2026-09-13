import { t as e } from './AdminLayout-DQz9mA5t.js';
import {
    D as t,
    E as n,
    M as r,
    O as i,
    S as a,
    T as o,
    _ as s,
    a as ee,
    f as c,
    g as l,
    j as u,
    l as d,
    m as f,
    n as p,
    o as te,
    p as m,
    r as ne,
    s as h,
    u as g,
    v as _,
    x as v,
} from './app-yAKn6dPc.js';
import {
    a as y,
    i as b,
    n as re,
    o as ie,
} from './ProjectController-CVhlr8jw.js';
var ae = { class: `mb-8 flex items-center justify-between gap-4` },
    oe = {
        class: `text-accent font-mono text-[10px] tracking-widest uppercase`,
    },
    se = { class: `mt-1 text-2xl font-semibold tracking-tight` },
    ce = { class: `grid gap-6 lg:grid-cols-[1fr_16rem]` },
    x = { class: `space-y-5` },
    S = { key: 0, class: `text-accent mt-1 text-xs` },
    C = { key: 0, class: `text-accent mt-1 text-xs` },
    w = { key: 0, class: `text-accent mt-1 text-xs` },
    T = { class: `flex flex-wrap items-center gap-2` },
    E = [`aria-label`, `onClick`],
    D = { key: 0, class: `text-accent mt-1 text-xs` },
    O = { class: `space-y-5` },
    k = [`value`],
    A = { class: `space-y-2` },
    j = {
        class: `border-border-subtle bg-surface grid h-40 place-items-center overflow-hidden rounded-lg border`,
    },
    M = [`src`],
    N = { key: 1, class: `text-text-muted font-mono text-[10px] uppercase` },
    P = { key: 0, class: `text-accent text-xs` },
    F = { class: `flex items-center gap-3` },
    I = [`href`],
    L = { key: 2, class: `text-text-muted text-xs` },
    R = {
        class: `border-border-subtle mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-5`,
    },
    z = { class: `flex items-center gap-3` },
    le = [`disabled`],
    B = { class: `flex items-start gap-4` },
    V = { class: `text-text-secondary mt-1 text-sm` },
    H = { class: `text-text-primary` },
    U = { class: `flex items-center justify-end gap-3 pt-2` },
    W = [`disabled`],
    ue = [`disabled`],
    G = _({
        layout: e,
        __name: `Form`,
        props: { project: {} },
        setup(e) {
            let _ = e,
                G = [`Draft`, `Active`, `Completed`, `Deployed`, `Live`],
                K = ne({
                    title: _.project?.title ?? ``,
                    description: _.project?.description ?? ``,
                    tags: _.project?.tags ?? [],
                    status: _.project?.status ?? `Draft`,
                    link: _.project?.link ?? ``,
                    sort_order: _.project?.sort_order ?? 0,
                    image: null,
                    remove_image: !1,
                }),
                q = t(``),
                J = t(null),
                Y = _.project?.image_url ?? null,
                X = t(!1),
                Z = t(!1);
            function Q() {
                let e = q.value.trim();
                (e &&
                    !K.tags.includes(e) &&
                    K.tags.length < 8 &&
                    K.tags.push(e),
                    (q.value = ``));
            }
            function de(e) {
                K.tags.splice(e, 1);
            }
            function fe(e) {
                ((e.key === `Enter` || e.key === `,`) &&
                    (e.preventDefault(), Q()),
                    e.key === `Backspace` &&
                        q.value === `` &&
                        K.tags.length > 0 &&
                        K.tags.pop());
            }
            function pe(e) {
                let t = e.target.files?.[0];
                t &&
                    ((K.image = t),
                    (K.remove_image = !1),
                    (J.value = URL.createObjectURL(t)));
            }
            function me() {
                ((K.image = null), (K.remove_image = !0), (J.value = null));
            }
            function he() {
                if (_.project) {
                    K.transform((e) => ({ ...e, _method: `put` })).post(
                        ie.url(_.project.id),
                        { forceFormData: !0 },
                    );
                    return;
                }
                K.post(y.url(), { forceFormData: !0 });
            }
            function ge() {
                X.value = !0;
            }
            function $() {
                Z.value || (X.value = !1);
            }
            function _e() {
                !_.project ||
                    Z.value ||
                    ((Z.value = !0),
                    r.delete(re.url(_.project.id), {
                        onFinish: () => {
                            ((Z.value = !1), (X.value = !1));
                        },
                    }));
            }
            return (e, t) => (
                v(),
                f(`div`, null, [
                    c(`div`, ae, [
                        c(`div`, null, [
                            c(`p`, oe, u(_.project ? `Edit` : `New`), 1),
                            c(
                                `h1`,
                                se,
                                u(
                                    _.project
                                        ? _.project.title
                                        : `Create project`,
                                ),
                                1,
                            ),
                        ]),
                        s(
                            i(p),
                            {
                                href: i(b).url(),
                                class: `border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-overlay rounded-lg border px-3 py-1.5 text-xs transition-colors`,
                            },
                            {
                                default: o(() => [
                                    ...(t[7] ||= [l(` ← Back `, -1)]),
                                ]),
                                _: 1,
                            },
                            8,
                            [`href`],
                        ),
                    ]),
                    c(
                        `form`,
                        {
                            onSubmit: d(he, [`prevent`]),
                            class: `border-border-subtle bg-surface-raised rounded-xl border p-6`,
                        },
                        [
                            c(`div`, ce, [
                                c(`div`, x, [
                                    c(`div`, null, [
                                        (t[8] ||= c(
                                            `label`,
                                            {
                                                for: `title`,
                                                class: `text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase`,
                                            },
                                            ` Title `,
                                            -1,
                                        )),
                                        n(
                                            c(
                                                `input`,
                                                {
                                                    id: `title`,
                                                    'onUpdate:modelValue':
                                                        (t[0] ||= (e) =>
                                                            (i(K).title = e)),
                                                    type: `text`,
                                                    required: ``,
                                                    class: `border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4`,
                                                },
                                                null,
                                                512,
                                            ),
                                            [[h, i(K).title]],
                                        ),
                                        i(K).errors.title
                                            ? (v(),
                                              f(
                                                  `p`,
                                                  S,
                                                  u(i(K).errors.title),
                                                  1,
                                              ))
                                            : m(``, !0),
                                    ]),
                                    c(`div`, null, [
                                        (t[9] ||= c(
                                            `label`,
                                            {
                                                for: `description`,
                                                class: `text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase`,
                                            },
                                            ` Description `,
                                            -1,
                                        )),
                                        n(
                                            c(
                                                `textarea`,
                                                {
                                                    id: `description`,
                                                    'onUpdate:modelValue':
                                                        (t[1] ||= (e) =>
                                                            (i(K).description =
                                                                e)),
                                                    rows: `4`,
                                                    required: ``,
                                                    class: `border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full resize-none rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4`,
                                                },
                                                null,
                                                512,
                                            ),
                                            [[h, i(K).description]],
                                        ),
                                        i(K).errors.description
                                            ? (v(),
                                              f(
                                                  `p`,
                                                  C,
                                                  u(i(K).errors.description),
                                                  1,
                                              ))
                                            : m(``, !0),
                                    ]),
                                    c(`div`, null, [
                                        (t[10] ||= c(
                                            `label`,
                                            {
                                                for: `link`,
                                                class: `text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase`,
                                            },
                                            [
                                                l(` Website link `),
                                                c(
                                                    `span`,
                                                    {
                                                        class: `text-text-secondary`,
                                                    },
                                                    `(optional)`,
                                                ),
                                            ],
                                            -1,
                                        )),
                                        n(
                                            c(
                                                `input`,
                                                {
                                                    id: `link`,
                                                    'onUpdate:modelValue':
                                                        (t[2] ||= (e) =>
                                                            (i(K).link = e)),
                                                    type: `url`,
                                                    placeholder: `https://...`,
                                                    class: `border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4`,
                                                },
                                                null,
                                                512,
                                            ),
                                            [[h, i(K).link]],
                                        ),
                                        i(K).errors.link
                                            ? (v(),
                                              f(`p`, w, u(i(K).errors.link), 1))
                                            : m(``, !0),
                                    ]),
                                    c(`div`, null, [
                                        (t[11] ||= c(
                                            `span`,
                                            {
                                                class: `text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase`,
                                            },
                                            ` Tags `,
                                            -1,
                                        )),
                                        c(`div`, T, [
                                            (v(!0),
                                            f(
                                                g,
                                                null,
                                                a(
                                                    i(K).tags,
                                                    (e, t) => (
                                                        v(),
                                                        f(
                                                            `span`,
                                                            {
                                                                key: e,
                                                                class: `border-border-subtle bg-surface-overlay text-text-secondary inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-xs`,
                                                            },
                                                            [
                                                                l(
                                                                    u(e) + ` `,
                                                                    1,
                                                                ),
                                                                c(
                                                                    `button`,
                                                                    {
                                                                        type: `button`,
                                                                        class: `text-text-muted hover:text-accent`,
                                                                        'aria-label': `Remove ${e}`,
                                                                        onClick:
                                                                            (
                                                                                e,
                                                                            ) =>
                                                                                de(
                                                                                    t,
                                                                                ),
                                                                    },
                                                                    ` × `,
                                                                    8,
                                                                    E,
                                                                ),
                                                            ],
                                                        )
                                                    ),
                                                ),
                                                128,
                                            )),
                                            n(
                                                c(
                                                    `input`,
                                                    {
                                                        'onUpdate:modelValue':
                                                            (t[3] ||= (e) =>
                                                                (q.value = e)),
                                                        type: `text`,
                                                        placeholder: `Type & press Enter...`,
                                                        class: `border-border-subtle bg-surface text-text-primary focus:border-accent w-40 rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none`,
                                                        onKeydown: fe,
                                                        onBlur: Q,
                                                    },
                                                    null,
                                                    544,
                                                ),
                                                [[h, q.value]],
                                            ),
                                        ]),
                                        i(K).errors.tags
                                            ? (v(),
                                              f(`p`, D, u(i(K).errors.tags), 1))
                                            : m(``, !0),
                                    ]),
                                ]),
                                c(`div`, O, [
                                    c(`div`, null, [
                                        (t[12] ||= c(
                                            `label`,
                                            {
                                                for: `status`,
                                                class: `text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase`,
                                            },
                                            ` Status `,
                                            -1,
                                        )),
                                        n(
                                            c(
                                                `select`,
                                                {
                                                    id: `status`,
                                                    'onUpdate:modelValue':
                                                        (t[4] ||= (e) =>
                                                            (i(K).status = e)),
                                                    class: `border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4`,
                                                },
                                                [
                                                    (v(),
                                                    f(
                                                        g,
                                                        null,
                                                        a(G, (e) =>
                                                            c(
                                                                `option`,
                                                                {
                                                                    key: e,
                                                                    value: e,
                                                                },
                                                                u(e),
                                                                9,
                                                                k,
                                                            ),
                                                        ),
                                                        64,
                                                    )),
                                                ],
                                                512,
                                            ),
                                            [[te, i(K).status]],
                                        ),
                                    ]),
                                    c(`div`, null, [
                                        (t[13] ||= c(
                                            `label`,
                                            {
                                                for: `sort_order`,
                                                class: `text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase`,
                                            },
                                            ` Sort order `,
                                            -1,
                                        )),
                                        n(
                                            c(
                                                `input`,
                                                {
                                                    id: `sort_order`,
                                                    'onUpdate:modelValue':
                                                        (t[5] ||= (e) =>
                                                            (i(K).sort_order =
                                                                e)),
                                                    type: `number`,
                                                    min: `0`,
                                                    class: `border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4`,
                                                },
                                                null,
                                                512,
                                            ),
                                            [
                                                [
                                                    h,
                                                    i(K).sort_order,
                                                    void 0,
                                                    { number: !0 },
                                                ],
                                            ],
                                        ),
                                    ]),
                                    c(`div`, null, [
                                        (t[14] ||= c(
                                            `span`,
                                            {
                                                class: `text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase`,
                                            },
                                            ` Screenshot `,
                                            -1,
                                        )),
                                        c(`div`, A, [
                                            c(`div`, j, [
                                                J.value ||
                                                (i(Y) && !i(K).remove_image)
                                                    ? (v(),
                                                      f(
                                                          `img`,
                                                          {
                                                              key: 0,
                                                              src:
                                                                  J.value ??
                                                                  i(Y) ??
                                                                  ``,
                                                              alt: `Preview`,
                                                              class: `h-full w-full object-cover`,
                                                          },
                                                          null,
                                                          8,
                                                          M,
                                                      ))
                                                    : (v(),
                                                      f(
                                                          `span`,
                                                          N,
                                                          ` No screenshot `,
                                                      )),
                                            ]),
                                            c(
                                                `input`,
                                                {
                                                    id: `image`,
                                                    type: `file`,
                                                    accept: `image/png,image/jpeg,image/webp,image/avif`,
                                                    class: `border-border-subtle bg-surface text-text-secondary file:text-text-secondary hover:file:bg-surface-overlay w-full cursor-pointer rounded-lg border px-3 py-2 text-xs transition-colors file:mr-3 file:border-0 file:bg-transparent file:px-0 file:py-0 file:text-xs file:font-medium`,
                                                    onChange: pe,
                                                },
                                                null,
                                                32,
                                            ),
                                            i(K).errors.image
                                                ? (v(),
                                                  f(
                                                      `p`,
                                                      P,
                                                      u(i(K).errors.image),
                                                      1,
                                                  ))
                                                : m(``, !0),
                                            c(`div`, F, [
                                                i(Y) &&
                                                !i(K).remove_image &&
                                                !i(K).image
                                                    ? (v(),
                                                      f(
                                                          `a`,
                                                          {
                                                              key: 0,
                                                              href: i(Y),
                                                              target: `_blank`,
                                                              rel: `noopener`,
                                                              class: `text-text-secondary hover:text-text-primary text-xs underline underline-offset-2`,
                                                          },
                                                          ` Open full screenshot `,
                                                          8,
                                                          I,
                                                      ))
                                                    : m(``, !0),
                                                i(Y) &&
                                                !i(K).remove_image &&
                                                !i(K).image
                                                    ? (v(),
                                                      f(
                                                          `button`,
                                                          {
                                                              key: 1,
                                                              type: `button`,
                                                              class: `text-accent text-xs underline underline-offset-2`,
                                                              onClick: me,
                                                          },
                                                          ` Remove screenshot `,
                                                      ))
                                                    : m(``, !0),
                                                i(K).remove_image || i(K).image
                                                    ? (v(),
                                                      f(
                                                          `span`,
                                                          L,
                                                          ` Will be replaced. `,
                                                      ))
                                                    : m(``, !0),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            c(`div`, R, [
                                c(`div`, null, [
                                    _.project
                                        ? (v(),
                                          f(
                                              `button`,
                                              {
                                                  key: 0,
                                                  type: `button`,
                                                  class: `border-border-subtle rounded-lg border px-4 py-2 text-sm text-red-400 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300`,
                                                  onClick: ge,
                                              },
                                              ` Delete project `,
                                          ))
                                        : m(``, !0),
                                ]),
                                c(`div`, z, [
                                    s(
                                        i(p),
                                        {
                                            href: i(b).url(),
                                            class: `border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-overlay rounded-lg border px-4 py-2 text-sm transition-colors`,
                                        },
                                        {
                                            default: o(() => [
                                                ...(t[15] ||= [
                                                    l(` Cancel `, -1),
                                                ]),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        [`href`],
                                    ),
                                    c(
                                        `button`,
                                        {
                                            type: `submit`,
                                            disabled: i(K).processing,
                                            class: `bg-accent hover:bg-accent-dim rounded-lg px-4 py-2 text-sm font-medium text-zinc-950 transition-colors disabled:opacity-60`,
                                        },
                                        u(
                                            i(K).processing
                                                ? `Saving...`
                                                : _.project
                                                  ? `Save changes`
                                                  : `Create project`,
                                        ),
                                        9,
                                        le,
                                    ),
                                ]),
                            ]),
                        ],
                        32,
                    ),
                    s(
                        ee,
                        {
                            'enter-active-class': `transition duration-200 ease-out`,
                            'enter-from-class': `opacity-0`,
                            'enter-to-class': `opacity-100`,
                            'leave-active-class': `transition duration-150 ease-in`,
                            'leave-from-class': `opacity-100`,
                            'leave-to-class': `opacity-0`,
                        },
                        {
                            default: o(() => [
                                X.value && _.project
                                    ? (v(),
                                      f(
                                          `div`,
                                          {
                                              key: 0,
                                              class: `bg-surface/80 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md`,
                                              onClick: $,
                                              'aria-modal': `true`,
                                              role: `dialog`,
                                          },
                                          [
                                              c(
                                                  `div`,
                                                  {
                                                      class: `border-border-subtle bg-surface-raised w-full max-w-md space-y-4 rounded-2xl border p-6 shadow-2xl`,
                                                      onClick: (t[6] ||=
                                                          d(() => {}, [
                                                              `stop`,
                                                          ])),
                                                  },
                                                  [
                                                      c(`div`, B, [
                                                          (t[19] ||= c(
                                                              `div`,
                                                              {
                                                                  class: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-400`,
                                                              },
                                                              [
                                                                  c(
                                                                      `svg`,
                                                                      {
                                                                          class: `h-5 w-5`,
                                                                          fill: `none`,
                                                                          viewBox: `0 0 24 24`,
                                                                          'stroke-width': `1.8`,
                                                                          stroke: `currentColor`,
                                                                      },
                                                                      [
                                                                          c(
                                                                              `path`,
                                                                              {
                                                                                  'stroke-linecap': `round`,
                                                                                  'stroke-linejoin': `round`,
                                                                                  d: `m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0`,
                                                                              },
                                                                          ),
                                                                      ],
                                                                  ),
                                                              ],
                                                              -1,
                                                          )),
                                                          c(`div`, null, [
                                                              (t[18] ||= c(
                                                                  `h3`,
                                                                  {
                                                                      class: `text-base font-semibold text-white`,
                                                                  },
                                                                  ` Delete project? `,
                                                                  -1,
                                                              )),
                                                              c(`p`, V, [
                                                                  (t[16] ||= l(
                                                                      ` Are you sure you want to delete `,
                                                                      -1,
                                                                  )),
                                                                  c(
                                                                      `strong`,
                                                                      H,
                                                                      `"` +
                                                                          u(
                                                                              _
                                                                                  .project
                                                                                  .title,
                                                                          ) +
                                                                          `"`,
                                                                      1,
                                                                  ),
                                                                  (t[17] ||= l(
                                                                      `? This action cannot be undone. `,
                                                                      -1,
                                                                  )),
                                                              ]),
                                                          ]),
                                                      ]),
                                                      c(`div`, U, [
                                                          c(
                                                              `button`,
                                                              {
                                                                  type: `button`,
                                                                  class: `border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-overlay rounded-lg border px-4 py-2 text-xs font-medium transition-colors`,
                                                                  disabled:
                                                                      Z.value,
                                                                  onClick: $,
                                                              },
                                                              ` Cancel `,
                                                              8,
                                                              W,
                                                          ),
                                                          c(
                                                              `button`,
                                                              {
                                                                  type: `button`,
                                                                  class: `rounded-lg bg-red-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-red-500 disabled:opacity-60`,
                                                                  disabled:
                                                                      Z.value,
                                                                  onClick: _e,
                                                              },
                                                              u(
                                                                  Z.value
                                                                      ? `Deleting...`
                                                                      : `Yes, delete project`,
                                                              ),
                                                              9,
                                                              ue,
                                                          ),
                                                      ]),
                                                  ],
                                              ),
                                          ],
                                      ))
                                    : m(``, !0),
                            ]),
                            _: 1,
                        },
                    ),
                ])
            );
        },
    });
export { G as default };
