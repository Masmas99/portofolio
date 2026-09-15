import { n as e, t } from './wayfinder-Dp7PqxvV.js';
var n = (e) => ({ url: n.url(e), method: `get` });
((n.definition = { methods: [`get`, `head`], url: `/admin` }),
    (n.url = (t) => n.definition.url + e(t)),
    (n.get = (e) => ({ url: n.url(e), method: `get` })),
    (n.head = (e) => ({ url: n.url(e), method: `head` })));
var r = (e) => ({ action: n.url(e), method: `get` });
((r.get = (e) => ({ action: n.url(e), method: `get` })),
    (r.head = (e) => ({
        action: n.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (n.form = r));
var i = (e) => ({ url: i.url(e), method: `get` });
((i.definition = { methods: [`get`, `head`], url: `/admin/projects/create` }),
    (i.url = (t) => i.definition.url + e(t)),
    (i.get = (e) => ({ url: i.url(e), method: `get` })),
    (i.head = (e) => ({ url: i.url(e), method: `head` })));
var a = (e) => ({ action: i.url(e), method: `get` });
((a.get = (e) => ({ action: i.url(e), method: `get` })),
    (a.head = (e) => ({
        action: i.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (i.form = a));
var o = (e) => ({ url: o.url(e), method: `post` });
((o.definition = { methods: [`post`], url: `/admin/projects` }),
    (o.url = (t) => o.definition.url + e(t)),
    (o.post = (e) => ({ url: o.url(e), method: `post` })));
var s = (e) => ({ action: o.url(e), method: `post` });
((s.post = (e) => ({ action: o.url(e), method: `post` })), (o.form = s));
var c = (e, t) => ({ url: c.url(e, t), method: `get` });
((c.definition = {
    methods: [`get`, `head`],
    url: `/admin/projects/{project}`,
}),
    (c.url = (n, r) => {
        ((typeof n == `string` || typeof n == `number`) && (n = { project: n }),
            typeof n == `object` &&
                !Array.isArray(n) &&
                `id` in n &&
                (n = { project: n.id }),
            Array.isArray(n) && (n = { project: n[0] }),
            (n = t(n)));
        let i = {
            project: typeof n.project == `object` ? n.project.id : n.project,
        };
        return (
            c.definition.url
                .replace(`{project}`, i.project.toString())
                .replace(/\/+$/, ``) + e(r)
        );
    }),
    (c.get = (e, t) => ({ url: c.url(e, t), method: `get` })),
    (c.head = (e, t) => ({ url: c.url(e, t), method: `head` })));
var l = (e, t) => ({ action: c.url(e, t), method: `get` });
((l.get = (e, t) => ({ action: c.url(e, t), method: `get` })),
    (l.head = (e, t) => ({
        action: c.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (c.form = l));
var u = (e, t) => ({ url: u.url(e, t), method: `put` });
((u.definition = {
    methods: [`put`, `post`],
    url: `/admin/projects/{project}`,
}),
    (u.url = (n, r) => {
        ((typeof n == `string` || typeof n == `number`) && (n = { project: n }),
            typeof n == `object` &&
                !Array.isArray(n) &&
                `id` in n &&
                (n = { project: n.id }),
            Array.isArray(n) && (n = { project: n[0] }),
            (n = t(n)));
        let i = {
            project: typeof n.project == `object` ? n.project.id : n.project,
        };
        return (
            u.definition.url
                .replace(`{project}`, i.project.toString())
                .replace(/\/+$/, ``) + e(r)
        );
    }),
    (u.put = (e, t) => ({ url: u.url(e, t), method: `put` })),
    (u.post = (e, t) => ({ url: u.url(e, t), method: `post` })));
var d = (e, t) => ({
    action: u.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((d.put = (e, t) => ({
    action: u.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (d.post = (e, t) => ({ action: u.url(e, t), method: `post` })),
    (u.form = d));
var f = (e, t) => ({ url: f.url(e, t), method: `delete` });
((f.definition = { methods: [`delete`], url: `/admin/projects/{project}` }),
    (f.url = (n, r) => {
        ((typeof n == `string` || typeof n == `number`) && (n = { project: n }),
            typeof n == `object` &&
                !Array.isArray(n) &&
                `id` in n &&
                (n = { project: n.id }),
            Array.isArray(n) && (n = { project: n[0] }),
            (n = t(n)));
        let i = {
            project: typeof n.project == `object` ? n.project.id : n.project,
        };
        return (
            f.definition.url
                .replace(`{project}`, i.project.toString())
                .replace(/\/+$/, ``) + e(r)
        );
    }),
    (f.delete = (e, t) => ({ url: f.url(e, t), method: `delete` })));
var p = (e, t) => ({
    action: f.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((p.delete = (e, t) => ({
    action: f.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (f.form = p));
export { o as a, n as i, f as n, u as o, c as r, i as t };
