const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/AdminLayout-DQz9mA5t.js',
            'assets/LoginController-QMf_F_lG.js',
            'assets/Login-DiHcj-aW.js',
            'assets/Form-GR8JUOCL.js',
            'assets/ProjectController-CVhlr8jw.js',
            'assets/Index-DWuUNGCl.js',
            'assets/Welcome-wOgD-D8I.js',
            'assets/Welcome-UHUDsfqk.css',
        ]),
) => i.map((i) => d[i]);
var e =
    (typeof globalThis == `object` && globalThis) ||
    (typeof window == `object` && window) ||
    (typeof self == `object` && self) ||
    (typeof global == `object` && global) ||
    (function () {
        return this;
    })();
function t(e, t, { signal: n, edges: r } = {}) {
    let i,
        a = null,
        o = r != null && r.includes(`leading`),
        s = r == null || r.includes(`trailing`),
        c = () => {
            a !== null && (e.apply(i, a), (i = void 0), (a = null));
        },
        l = () => {
            (s && c(), p());
        },
        u = null,
        d = () => {
            (u != null && clearTimeout(u),
                (u = setTimeout(() => {
                    ((u = null), l());
                }, t)));
        },
        f = () => {
            u !== null && (clearTimeout(u), (u = null));
        },
        p = () => {
            (f(), (i = void 0), (a = null));
        },
        m = () => {
            c();
        },
        h = function (...e) {
            if (n?.aborted) return;
            ((i = this), (a = e));
            let t = u == null;
            (d(), o && t && c());
        };
    return (
        (h.schedule = d),
        (h.cancel = p),
        (h.flush = m),
        n?.addEventListener(`abort`, p, { once: !0 }),
        h
    );
}
function n() {}
function r(e) {
    return e == null || (typeof e != `object` && typeof e != `function`);
}
function i(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function a(e) {
    if (r(e)) return e;
    if (
        Array.isArray(e) ||
        i(e) ||
        e instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
    )
        return e.slice(0);
    let t = Object.getPrototypeOf(e);
    if (t == null) return Object.assign(Object.create(t), e);
    let n = t.constructor;
    if (e instanceof Date || e instanceof Map || e instanceof Set)
        return new n(e);
    if (e instanceof RegExp) {
        let t = new n(e);
        return ((t.lastIndex = e.lastIndex), t);
    }
    if (e instanceof DataView) return new n(e.buffer.slice(0));
    if (e instanceof Error) {
        let t;
        return (
            (t =
                e instanceof AggregateError
                    ? new n(e.errors, e.message, { cause: e.cause })
                    : new n(e.message, { cause: e.cause })),
            (t.stack = e.stack),
            Object.assign(t, e),
            t
        );
    }
    return typeof File < `u` && e instanceof File
        ? new n([e], e.name, { type: e.type, lastModified: e.lastModified })
        : typeof e == `object`
          ? Object.assign(Object.create(t), e)
          : e;
}
function o(t) {
    return e.Buffer !== void 0 && e.Buffer.isBuffer(t);
}
function s(e) {
    return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
    );
}
function c(e) {
    return e == null
        ? e === void 0
            ? `[object Undefined]`
            : `[object Null]`
        : Object.prototype.toString.call(e);
}
var l = `[object RegExp]`,
    u = `[object String]`,
    d = `[object Number]`,
    f = `[object Boolean]`,
    p = `[object Arguments]`,
    m = `[object Symbol]`,
    h = `[object Date]`,
    g = `[object Map]`,
    _ = `[object Set]`,
    v = `[object Array]`,
    y = `[object Function]`,
    b = `[object ArrayBuffer]`,
    x = `[object Object]`,
    S = `[object Error]`,
    C = `[object DataView]`,
    w = `[object Uint8Array]`,
    ee = `[object Uint8ClampedArray]`,
    T = `[object Uint16Array]`,
    E = `[object Uint32Array]`,
    te = `[object BigUint64Array]`,
    ne = `[object Int8Array]`,
    re = `[object Int16Array]`,
    ie = `[object Int32Array]`,
    ae = `[object BigInt64Array]`,
    oe = `[object Float32Array]`,
    se = `[object Float64Array]`;
function ce(e, t) {
    return le(e, void 0, e, new Map(), t);
}
function le(e, t, n, a = new Map(), s = void 0) {
    let c = s?.(e, t, n, a);
    if (c !== void 0) return c;
    if (r(e)) return e;
    if (a.has(e)) return a.get(e);
    if (Array.isArray(e)) {
        let t = Array(e.length);
        a.set(e, t);
        for (let r = 0; r < e.length; r++) t[r] = le(e[r], r, n, a, s);
        return (
            Object.hasOwn(e, `index`) && (t.index = e.index),
            Object.hasOwn(e, `input`) && (t.input = e.input),
            t
        );
    }
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return ((t.lastIndex = e.lastIndex), t);
    }
    if (e instanceof Map) {
        let t = new Map();
        a.set(e, t);
        for (let [r, i] of e) t.set(r, le(i, r, n, a, s));
        return t;
    }
    if (e instanceof Set) {
        let t = new Set();
        a.set(e, t);
        for (let r of e) t.add(le(r, void 0, n, a, s));
        return t;
    }
    if (o(e)) return e.subarray();
    if (i(e)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        a.set(e, t);
        for (let r = 0; r < e.length; r++) t[r] = le(e[r], r, n, a, s);
        return t;
    }
    if (
        e instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
    )
        return e.slice(0);
    if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return (a.set(e, t), ue(t, e, n, a, s), t);
    }
    if (typeof File < `u` && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return (a.set(e, t), ue(t, e, n, a, s), t);
    }
    if (typeof Blob < `u` && e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return (a.set(e, t), ue(t, e, n, a, s), t);
    }
    if (e instanceof Error) {
        let t = structuredClone(e);
        return (
            a.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            (t.constructor = e.constructor),
            ue(t, e, n, a, s),
            t
        );
    }
    if (e instanceof Boolean) {
        let t = new Boolean(e.valueOf());
        return (a.set(e, t), ue(t, e, n, a, s), t);
    }
    if (e instanceof Number) {
        let t = new Number(e.valueOf());
        return (a.set(e, t), ue(t, e, n, a, s), t);
    }
    if (e instanceof String) {
        let t = new String(e.valueOf());
        return (a.set(e, t), ue(t, e, n, a, s), t);
    }
    if (typeof e == `object` && de(e)) {
        let t = Object.create(Object.getPrototypeOf(e));
        return (a.set(e, t), ue(t, e, n, a, s), t);
    }
    return e;
}
function ue(e, t, n = e, r, i) {
    let a = [...Object.keys(t), ...s(t)];
    for (let o = 0; o < a.length; o++) {
        let s = a[o],
            c = Object.getOwnPropertyDescriptor(e, s);
        (c == null || c.writable) && (e[s] = le(t[s], s, n, r, i));
    }
}
function de(e) {
    switch (c(e)) {
        case p:
        case v:
        case b:
        case C:
        case f:
        case h:
        case oe:
        case se:
        case ne:
        case re:
        case ie:
        case g:
        case d:
        case x:
        case l:
        case _:
        case u:
        case m:
        case w:
        case ee:
        case T:
        case E:
            return !0;
        default:
            return !1;
    }
}
function D(e) {
    return le(e, void 0, e, new Map(), void 0);
}
function fe(e) {
    if (!e || typeof e != `object`) return !1;
    let t = Object.getPrototypeOf(e);
    return t !== null &&
        t !== Object.prototype &&
        Object.getPrototypeOf(t) !== null
        ? !1
        : Object.prototype.toString.call(e) === `[object Object]`;
}
function pe(e) {
    return e === `__proto__`;
}
function me(e) {
    if (typeof e != `object` || !e) return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    if (Object.prototype.toString.call(e) !== `[object Object]`) {
        let t = e[Symbol.toStringTag];
        return t == null ||
            !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable
            ? !1
            : e.toString() === `[object ${t}]`;
    }
    let t = e;
    for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function he(e, t) {
    return e === t || (Number.isNaN(e) && Number.isNaN(t));
}
function ge(e, t, n) {
    return _e(e, t, void 0, void 0, void 0, void 0, n);
}
function _e(e, t, n, r, i, a, o) {
    let s = o(e, t, n, r, i, a);
    if (s !== void 0) return s;
    if (typeof e == typeof t)
        switch (typeof e) {
            case `bigint`:
            case `string`:
            case `boolean`:
            case `symbol`:
            case `undefined`:
                return e === t;
            case `number`:
                return e === t || Object.is(e, t);
            case `function`:
                return e === t;
            case `object`:
                return ve(e, t, a, o);
        }
    return ve(e, t, a, o);
}
function ve(e, t, n, r) {
    if (Object.is(e, t)) return !0;
    let i = c(e),
        a = c(t);
    if (
        (i === `[object Arguments]` && (i = x),
        a === `[object Arguments]` && (a = x),
        i !== a)
    )
        return !1;
    switch (i) {
        case u:
            return e.toString() === t.toString();
        case d:
            return he(e.valueOf(), t.valueOf());
        case f:
        case h:
        case m:
            return Object.is(e.valueOf(), t.valueOf());
        case l:
            return e.source === t.source && e.flags === t.flags;
        case y:
            return e === t;
    }
    n ??= new Map();
    let p = n.get(e),
        ce = n.get(t);
    if (p != null && ce != null) return p === t;
    (n.set(e, t), n.set(t, e));
    try {
        switch (i) {
            case g:
                if (e.size !== t.size) return !1;
                for (let [i, a] of e.entries())
                    if (!t.has(i) || !_e(a, t.get(i), i, e, t, n, r)) return !1;
                return !0;
            case _: {
                if (e.size !== t.size) return !1;
                let i = Array.from(e.values()),
                    a = Array.from(t.values());
                for (let o = 0; o < i.length; o++) {
                    let s = i[o],
                        c = a.findIndex((i) => _e(s, i, void 0, e, t, n, r));
                    if (c === -1) return !1;
                    a.splice(c, 1);
                }
                return !0;
            }
            case v:
            case w:
            case ee:
            case T:
            case E:
            case te:
            case ne:
            case re:
            case ie:
            case ae:
            case oe:
            case se:
                if (o(e) !== o(t) || e.length !== t.length) return !1;
                for (let i = 0; i < e.length; i++)
                    if (!_e(e[i], t[i], i, e, t, n, r)) return !1;
                return !0;
            case b:
                return (
                    e.byteLength === t.byteLength &&
                    ve(new Uint8Array(e), new Uint8Array(t), n, r)
                );
            case C:
                return e.byteLength !== t.byteLength ||
                    e.byteOffset !== t.byteOffset
                    ? !1
                    : ve(new Uint8Array(e), new Uint8Array(t), n, r);
            case S:
                return e.name === t.name && e.message === t.message;
            case x: {
                if (
                    !(
                        ve(e.constructor, t.constructor, n, r) ||
                        (fe(e) && fe(t))
                    )
                )
                    return !1;
                let i = [...Object.keys(e), ...s(e)],
                    a = [...Object.keys(t), ...s(t)];
                if (i.length !== a.length) return !1;
                for (let a = 0; a < i.length; a++) {
                    let o = i[a],
                        s = e[o];
                    if (!Object.hasOwn(t, o)) return !1;
                    let c = t[o];
                    if (!_e(s, c, o, e, t, n, r)) return !1;
                }
                return !0;
            }
            default:
                return !1;
        }
    } finally {
        (n.delete(e), n.delete(t));
    }
}
function ye(e, t) {
    return ge(e, t, n);
}
function be(e) {
    return Number.isSafeInteger(e) && e >= 0;
}
var xe = {
    '&': `&amp;`,
    '<': `&lt;`,
    '>': `&gt;`,
    '"': `&quot;`,
    "'": `&#39;`,
};
function Se(e) {
    return e.replace(/[&<>"']/g, (e) => xe[e]);
}
function Ce(e) {
    return e != null && typeof e != `function` && be(e.length);
}
function we(e) {
    return typeof e == `symbol` || e instanceof Symbol;
}
function Te(e) {
    return e == null ? `` : Ee(e);
}
function Ee(e) {
    if (typeof e == `string`) return e;
    if (Array.isArray(e)) return e.map(Ee).join(`,`);
    if (we(e)) return e.toString();
    let t = e + ``;
    return t === `0` && Object.is(Number(e), -0) ? `-0` : t;
}
function De(e) {
    return typeof e == `string` || typeof e == `symbol`
        ? e
        : Object.is(e?.valueOf?.(), -0)
          ? `-0`
          : String(e);
}
function Oe(e) {
    if (Array.isArray(e)) return e.map(De);
    if (typeof e == `symbol`) return [e];
    e = Te(e);
    let t = [],
        n = e.length;
    if (n === 0) return t;
    let r = 0,
        i = ``,
        a = ``,
        o = !1,
        s = !1,
        c = /^-?\d+(?:\.\d+)?$/;
    for (e.charCodeAt(0) === 46 && t.push(``); r < n;) {
        let l = e[r];
        if (a)
            l === `\\` && r + 1 < n
                ? (r++, (i += e[r]))
                : l === a
                  ? (a = ``)
                  : (i += l);
        else if (o) {
            if (l === `"` || l === `'`) ((a = l), (s = !0));
            else if (l === `]`) {
                if (((o = !1), !s && i.includes(`.`) && !c.test(i))) {
                    let e = i.split(`.`);
                    for (let n = 0; n < e.length; n++)
                        e[n] !== `` && t.push(e[n]);
                } else t.push(i);
                i = ``;
            } else i += l;
        } else if (l === `[`) ((o = !0), (s = !1), (i &&= (t.push(i), ``)));
        else if (l === `.`) {
            i &&= (t.push(i), ``);
            let n = e[r + 1];
            (n === void 0 || n === `.`) && t.push(``);
        } else i += l;
        r++;
    }
    return (i && t.push(i), t);
}
var ke = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function Ae(e) {
    switch (typeof e) {
        case `number`:
        case `symbol`:
            return !1;
        case `string`:
            return e === `` || e.startsWith(`.`) || e.endsWith(`.`)
                ? !1
                : ke.test(e);
        default:
            return !1;
    }
}
function O(e, t, n) {
    if (e == null) return n;
    switch (typeof t) {
        case `string`: {
            if (pe(t)) return n;
            let r = e[t];
            return r === void 0
                ? Ae(t) && !Object.hasOwn(e, t)
                    ? O(e, Oe(t), n)
                    : n
                : r;
        }
        case `number`:
        case `symbol`: {
            typeof t == `number` && (t = De(t));
            let r = e[t];
            return r === void 0 ? n : r;
        }
        default: {
            if (Array.isArray(t)) return je(e, t, n);
            if (((t = Object.is(t?.valueOf(), -0) ? `-0` : String(t)), pe(t)))
                return n;
            let r = e[t];
            return r === void 0 ? n : r;
        }
    }
}
function je(e, t, n) {
    if (t.length === 0) return n;
    let r = e;
    for (let e = 0; e < t.length; e++) {
        if (r == null || pe(t[e])) return n;
        r = r[t[e]];
    }
    return r === void 0 ? n : r;
}
function Me(e) {
    return e !== null && (typeof e == `object` || typeof e == `function`);
}
function Ne(e, t) {
    return ce(e, (n, r, i, a) => {
        let o = t?.(n, r, i, a);
        if (o !== void 0) return o;
        if (typeof e == `object`) {
            if (
                c(e) === `[object Object]` &&
                typeof e.constructor != `function`
            ) {
                let t = {};
                return (a.set(e, t), ue(t, e, i, a), t);
            }
            switch (Object.prototype.toString.call(e)) {
                case d:
                case u:
                case f: {
                    let t = new e.constructor(e?.valueOf());
                    return (ue(t, e), t);
                }
                case p: {
                    let t = {};
                    return (
                        ue(t, e),
                        (t.length = e.length),
                        (t[Symbol.iterator] = e[Symbol.iterator]),
                        t
                    );
                }
                default:
                    return;
            }
        }
    });
}
function Pe(e) {
    return Ne(e);
}
function Fe(e) {
    return typeof e == `object` && !!e && c(e) === `[object Arguments]`;
}
var Ie = /^(?:0|[1-9]\d*)$/;
function Le(e, t = 2 ** 53 - 1) {
    switch (typeof e) {
        case `number`:
            return Number.isInteger(e) && e >= 0 && e < t;
        case `symbol`:
            return !1;
        case `string`:
            return Ie.test(e);
    }
}
function Re(e, t) {
    let n;
    if (
        ((n = Array.isArray(t)
            ? t
            : typeof t == `string` && Ae(t) && !(t in Object(e))
              ? Oe(t)
              : [t]),
        n.length === 0)
    )
        return !1;
    let r = e;
    for (let e = 0; e < n.length; e++) {
        let t = De(n[e]);
        if (
            (r == null || !Object.hasOwn(r, t)) &&
            !((Array.isArray(r) || Fe(r)) && Le(t) && Number(t) < r.length)
        )
            return !1;
        r = r[t];
    }
    return !0;
}
function ze(e) {
    return typeof e == `object` && !!e;
}
function Be(e) {
    return ze(e) && Ce(e);
}
var Ve = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    He = /^\w*$/;
function Ue(e, t) {
    return Array.isArray(e)
        ? !1
        : typeof e == `number` || typeof e == `boolean` || e == null || we(e)
          ? !0
          : (typeof e == `string` && (He.test(e) || !Ve.test(e))) ||
            (t != null && Object.hasOwn(t, e));
}
function We(e) {
    return i(e);
}
var Ge = (e, t, n) => {
    let r = e[t];
    (!(Object.hasOwn(e, t) && he(r, n)) || (n === void 0 && !(t in e))) &&
        (e[t] = n);
};
function Ke(e) {
    return e === `__proto__` || e === `constructor` || e === `prototype`;
}
function qe(e, t, n, r) {
    if (e == null && !Me(e)) return e;
    let i;
    i = Ue(t, e) ? [t] : Array.isArray(t) ? t : Oe(t);
    let a = n(O(e, i)),
        o = e;
    for (let t = 0; t < i.length && o != null; t++) {
        let n = De(i[t]);
        if (Ke(n)) return e;
        let s;
        if (t === i.length - 1) s = a;
        else {
            let a = o[n],
                c = r?.(a, n, e);
            s = c === void 0 ? (Me(a) ? a : Le(i[t + 1]) ? [] : {}) : c;
        }
        (Ge(o, n, s), (o = o[n]));
    }
    return e;
}
function Je(e, t, n) {
    return qe(
        e,
        t,
        () => n,
        () => void 0,
    );
}
function Ye(e, n = 0, r = {}) {
    typeof r != `object` && (r = {});
    let { leading: i = !1, trailing: a = !0, maxWait: o } = r,
        s = [, ,];
    (i && (s[0] = `leading`), a && (s[1] = `trailing`));
    let c,
        l = null,
        u = t(
            function (...t) {
                ((c = e.apply(this, t)), (l = null));
            },
            n,
            { edges: s },
        ),
        d = function (...t) {
            return o != null &&
                (l === null && (l = Date.now()), Date.now() - l >= o)
                ? ((i || a) && (c = e.apply(this, t)),
                  (l = Date.now()),
                  u.cancel(),
                  u.schedule(),
                  c)
                : (u.apply(this, t), c);
        };
    return ((d.cancel = u.cancel), (d.flush = () => (u.flush(), c)), d);
}
function Xe(e, ...t) {
    let n = t.slice(0, -1),
        r = t[t.length - 1],
        i = e;
    for (let e = 0; e < n.length; e++) {
        let t = n[e];
        i = Ze(i, t, r, new Map());
    }
    return i;
}
function Ze(e, t, n, i) {
    if ((r(e) && (e = Object(e)), typeof t != `object` || !t)) return e;
    if (i.has(t)) return a(i.get(t));
    if ((i.set(t, e), Array.isArray(t))) {
        t = t.slice();
        for (let e = 0; e < t.length; e++) e in t || (t[e] = void 0);
    }
    let c = [...Object.keys(t), ...s(t)];
    for (let r = 0; r < c.length; r++) {
        let a = c[r];
        if (pe(a)) continue;
        let s = t[a],
            l = e[a];
        if (
            (Fe(s) && (s = { ...s }),
            Fe(l) && (l = { ...l }),
            o(s) && (s = Pe(s)),
            Array.isArray(s))
        ) {
            if (Array.isArray(l)) {
                let e = [],
                    t = Reflect.ownKeys(l);
                for (let n = 0; n < t.length; n++) {
                    let r = t[n];
                    e[r] = l[r];
                }
                l = e;
            } else if (Be(l)) {
                let e = [];
                for (let t = 0; t < l.length; t++) e[t] = l[t];
                l = e;
            } else l = [];
        }
        let u = n(l, s, a, e, t, i);
        u === void 0
            ? Array.isArray(s) ||
              (ze(l) && ze(s) && (me(l) || me(s) || We(l) || We(s)))
                ? (e[a] = Ze(l, s, n, i))
                : l == null && me(s)
                  ? (e[a] = Ze({}, s, n, i))
                  : l == null && We(s)
                    ? (e[a] = Pe(s))
                    : (l === void 0 || s !== void 0) && (e[a] = s)
            : (e[a] = u);
    }
    return e;
}
function Qe(e, ...t) {
    return Xe(e, ...t, n);
}
function $e(e) {
    return Se(Te(e));
}
var et = (e) =>
        (typeof File < `u` && e instanceof File) ||
        e instanceof Blob ||
        (typeof FileList < `u` && e instanceof FileList && e.length > 0),
    tt = (e) =>
        e instanceof FormData ||
        et(e) ||
        (typeof e == `object` && !!e && Object.values(e).some((e) => tt(e))),
    nt = class extends Error {
        response;
        constructor(e) {
            (super(`HTTP error ${e.status}`),
                (this.name = `HttpResponseError`),
                (this.response = e));
        }
    },
    rt = class extends Error {
        constructor(e = `Request was cancelled`) {
            (super(e), (this.name = `HttpCancelledError`));
        }
    },
    it = class extends Error {
        constructor(e = `Network error`) {
            (super(e), (this.name = `HttpNetworkError`));
        }
    };
function at(e) {
    let t = new URLSearchParams();
    return (
        Object.entries(e).forEach(([e, n]) => {
            n != null &&
                (Array.isArray(n)
                    ? n.forEach((n) => t.append(`${e}[]`, String(n)))
                    : typeof n == `object`
                      ? t.append(e, JSON.stringify(n))
                      : t.append(e, String(n)));
        }),
        t.toString()
    );
}
function ot(e, t, n) {
    if (
        (t &&
            !e.startsWith(`http://`) &&
            !e.startsWith(`https://`) &&
            (e = t.replace(/\/$/, ``) + `/` + e.replace(/^\//, ``)),
        n && Object.keys(n).length > 0)
    ) {
        let t = at(n);
        t && (e += (e.includes(`?`) ? `&` : `?`) + t);
    }
    return e;
}
function st() {
    return typeof window > `u`
        ? null
        : (window.axios?.defaults?.headers?.common?.[`X-Requested-With`] ??
              null);
}
function ct(e, t = new FormData(), n = null) {
    for (let r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
            lt(t, n ? `${n}[${r}]` : r, e[r]);
    return t;
}
function lt(e, t, n) {
    if (Array.isArray(n)) return n.forEach((n, r) => lt(e, `${t}[${r}]`, n));
    if (n instanceof Date) return e.append(t, n.toISOString());
    if (typeof File < `u` && n instanceof File) return e.append(t, n, n.name);
    if (n instanceof Blob) return e.append(t, n);
    if (typeof n == `boolean`) return e.append(t, n ? `1` : `0`);
    if (typeof n == `string`) return e.append(t, n);
    if (typeof n == `number`) return e.append(t, `${n}`);
    if (n == null) return e.append(t, ``);
    ct(n, e, t);
}
function ut(e, t) {
    if (e != null)
        return e instanceof FormData
            ? e
            : typeof e == `object` && tt(e)
              ? ct(e)
              : typeof e == `object` ||
                  t[`Content-Type`]?.includes(`application/json`)
                ? JSON.stringify(e)
                : String(e);
}
function dt(e) {
    let t = {};
    return (
        e.forEach((e, n) => {
            t[n.toLowerCase()] = e;
        }),
        t
    );
}
function ft(e = {}) {
    let t = e.xsrfCookieName ?? `XSRF-TOKEN`,
        n = e.xsrfHeaderName ?? `X-XSRF-TOKEN`;
    function r() {
        if (typeof document > `u`) return null;
        let e = document.cookie.match(RegExp(`(^|;\\s*)` + t + `=([^;]*)`));
        return e ? decodeURIComponent(e[2]) : null;
    }
    return {
        setXsrfCookieName(e) {
            t = e;
        },
        setXsrfHeaderName(e) {
            n = e;
        },
        async request(e) {
            let t = ot(e.url, e.baseURL, e.params),
                i = e.method.toUpperCase(),
                a = {},
                o = st();
            (o && (a[`X-Requested-With`] = o),
                e.data !== void 0 &&
                    ![`GET`, `DELETE`].includes(i) &&
                    !(e.data instanceof FormData) &&
                    !tt(e.data) &&
                    (a[`Content-Type`] = `application/json`),
                e.headers &&
                    Object.entries(e.headers).forEach(([e, t]) => {
                        t !== void 0 && (a[e] = String(t));
                    }));
            let s = r();
            s && ![`GET`, `HEAD`, `OPTIONS`].includes(i) && (a[n] = s);
            let c = e.signal,
                l,
                u = e.timeout ?? 3e4;
            if (u > 0 && !c) {
                let e = new AbortController();
                ((c = e.signal), (l = setTimeout(() => e.abort(), u)));
            }
            let d = [`GET`, `DELETE`].includes(i) ? void 0 : ut(e.data, a);
            d instanceof FormData && delete a[`Content-Type`];
            try {
                let n = await fetch(t, {
                    method: i,
                    headers: a,
                    body: d,
                    signal: c,
                    credentials: e.credentials ?? `same-origin`,
                });
                l && clearTimeout(l);
                let r;
                r = n.headers.get(`content-type`)?.includes(`application/json`)
                    ? await n.json()
                    : await n.text();
                let o = { status: n.status, data: r, headers: dt(n.headers) };
                if (!n.ok) throw new nt(o);
                return o;
            } catch (e) {
                throw (
                    l && clearTimeout(l),
                    e instanceof nt
                        ? e
                        : e instanceof DOMException && e.name === `AbortError`
                          ? new rt()
                          : e instanceof TypeError
                            ? new it(e.message)
                            : e
                );
            }
        },
    };
}
var pt = ft(),
    mt = pt,
    ht = void 0,
    gt = void 0,
    _t = `same-origin`,
    vt = (e) => `${e.method}:${e.baseURL ?? ht ?? ``}${e.url}`,
    yt = (e) =>
        e.status === 204 && e.headers[`precognition-success`] === `true`,
    bt = {},
    k = {
        get: (e, t = {}, n = {}) => St(xt(`get`, e, t, n)),
        post: (e, t = {}, n = {}) => St(xt(`post`, e, t, n)),
        patch: (e, t = {}, n = {}) => St(xt(`patch`, e, t, n)),
        put: (e, t = {}, n = {}) => St(xt(`put`, e, t, n)),
        delete: (e, t = {}, n = {}) => St(xt(`delete`, e, t, n)),
        useHttpClient(e) {
            return ((mt = e), k);
        },
        withBaseURL(e) {
            return ((ht = e), k);
        },
        withTimeout(e) {
            return ((gt = e), k);
        },
        withCredentials(e) {
            return (
                (_t = typeof e == `string` ? e : e ? `include` : `omit`), k
            );
        },
        fingerprintRequestsUsing(e) {
            return ((vt = e === null ? () => null : e), k);
        },
        determineSuccessUsing(e) {
            return ((yt = e), k);
        },
        withXsrfCookieName(e) {
            return (pt.setXsrfCookieName(e), k);
        },
        withXsrfHeaderName(e) {
            return (pt.setXsrfHeaderName(e), k);
        },
    },
    xt = (e, t, n, r) => ({
        url: t,
        method: e,
        ...r,
        ...([`get`, `delete`].includes(e)
            ? { params: Qe({}, n, r?.params) }
            : { data: Qe({}, n, r?.data) }),
    }),
    St = (e = {}) => {
        let t = [Ct, Tt, Et].reduce((e, t) => t(e), e);
        return (t.onBefore ?? (() => !0))() === !1
            ? Promise.resolve(null)
            : ((t.onStart ?? (() => null))(),
              mt
                  .request({
                      method: t.method,
                      url: t.url,
                      baseURL: t.baseURL ?? ht,
                      data: t.data,
                      params: t.params,
                      headers: t.headers,
                      signal: t.signal,
                      timeout: t.timeout,
                      credentials: _t,
                  })
                  .then(
                      async (e) => {
                          t.precognitive && Dt(e);
                          let n = e.status,
                              r = e;
                          return (
                              t.precognitive &&
                                  t.onPrecognitionSuccess &&
                                  yt(e) &&
                                  (r = await Promise.resolve(
                                      t.onPrecognitionSuccess(e) ?? r,
                                  )),
                              t.onSuccess &&
                                  wt(n) &&
                                  (r = await Promise.resolve(
                                      t.onSuccess(r) ?? r,
                                  )),
                              (kt(t, n) ?? ((e) => e))(r) ?? r
                          );
                      },
                      (e) => {
                          if (Ot(e)) return Promise.reject(e);
                          let n = e;
                          return (
                              t.precognitive && Dt(n.response),
                              (
                                  kt(t, n.response.status) ??
                                  ((e, t) => Promise.reject(t))
                              )(n.response, n)
                          );
                      },
                  )
                  .finally(t.onFinish ?? (() => null)));
    },
    Ct = (e) => {
        let t = e.only ?? e.validate;
        return {
            ...e,
            timeout: e.timeout ?? gt,
            precognitive: e.precognitive !== !1,
            fingerprint: e.fingerprint === void 0 ? vt(e, mt) : e.fingerprint,
            headers: {
                ...e.headers,
                Accept: `application/json`,
                'Content-Type': At(e),
                ...(e.precognitive === !1 ? {} : { Precognition: !0 }),
                ...(t
                    ? { 'Precognition-Validate-Only': Array.from(t).join() }
                    : {}),
            },
        };
    },
    wt = (e) => e >= 200 && e < 300,
    Tt = (e) =>
        typeof e.fingerprint == `string`
            ? (bt[e.fingerprint]?.abort(), delete bt[e.fingerprint], e)
            : e,
    Et = (e) =>
        typeof e.fingerprint != `string` || e.signal || !e.precognitive
            ? e
            : ((bt[e.fingerprint] = new AbortController()),
              { ...e, signal: bt[e.fingerprint].signal }),
    Dt = (e) => {
        if (e.headers?.precognition !== `true`)
            throw Error(
                `Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.`,
            );
    },
    Ot = (e) => !(e instanceof nt) || typeof e.response?.status != `number`,
    kt = (e, t) =>
        ({
            401: e.onUnauthorized,
            403: e.onForbidden,
            404: e.onNotFound,
            409: e.onConflict,
            422: e.onValidationError,
            423: e.onLocked,
        })[t],
    At = (e) =>
        e.headers?.[`Content-Type`] ??
        e.headers?.[`Content-type`] ??
        e.headers?.[`content-type`] ??
        (tt(e.data) ? `multipart/form-data` : `application/json`),
    jt = (e, t) => {
        if (!e.includes(`*`)) return [e];
        let n = e.split(`.`),
            r = [``];
        for (let e of n)
            if (e === `*`) {
                let e = [];
                for (let n of r) {
                    let r = n ? O(t, n) : t;
                    if (Array.isArray(r))
                        for (let t = 0; t < r.length; t++)
                            e.push(n ? `${n}.${t}` : String(t));
                    else if (typeof r == `object` && r)
                        for (let t of Object.keys(r))
                            e.push(n ? `${n}.${t}` : t);
                }
                r = e;
            } else r = r.map((t) => (t ? `${t}.${e}` : e));
        return r;
    },
    Mt = (e, t) =>
        t.includes(`*`)
            ? RegExp(
                  `^` + t.replace(/\./g, `\\.`).replace(/\*/g, `[^.]+`) + `$`,
              ).test(e)
            : e === t,
    Nt = (e, t) =>
        Object.fromEntries(
            Object.entries(e).filter(([e]) => !t.some((t) => Mt(e, t))),
        ),
    Pt = (e, t = {}) => {
        let n = {
                errorsChanged: [],
                touchedChanged: [],
                validatingChanged: [],
                validatedChanged: [],
            },
            r = !1,
            i = !1,
            a = (e) => (e === i ? [] : ((i = e), n.validatingChanged)),
            o = [],
            s = (e) => {
                let t = [...new Set(e)];
                return o.length !== t.length || !t.every((e) => o.includes(e))
                    ? ((o = t), n.validatedChanged)
                    : [];
            },
            c = () => o.filter((e) => d[e] === void 0),
            l = [],
            u = (e) => {
                let t = [...new Set(e)];
                return l.length !== t.length || !t.every((e) => l.includes(e))
                    ? ((l = t), n.touchedChanged)
                    : [];
            },
            d = {},
            f = (e) => {
                let t = It(e);
                return ye(d, t) ? [] : ((d = t), n.errorsChanged);
            },
            p = (e) => {
                let t = { ...d };
                return (delete t[Lt(e)], f(t));
            },
            m = () => Object.keys(d).length > 0,
            h = 1500,
            g = (e) => {
                ((h = e), S.cancel(), (S = x()));
            },
            _ = t,
            v = null,
            y = [],
            b = null,
            x = () =>
                Ye(
                    (t) => {
                        e({
                            get: (e, n = {}, r = {}) =>
                                k.get(e, ee(n), C(r, t, n)),
                            post: (e, n = {}, r = {}) =>
                                k.post(e, ee(n), C(r, t, n)),
                            patch: (e, n = {}, r = {}) =>
                                k.patch(e, ee(n), C(r, t, n)),
                            put: (e, n = {}, r = {}) =>
                                k.put(e, ee(n), C(r, t, n)),
                            delete: (e, n = {}, r = {}) =>
                                k.delete(e, ee(n), C(r, t, n)),
                        }).catch((e) =>
                            e instanceof rt ||
                            (e instanceof nt && e.response?.status === 422)
                                ? null
                                : Promise.reject(e),
                        );
                    },
                    h,
                    { leading: !0, trailing: !0 },
                ),
            S = x(),
            C = (e, t, n = {}) => {
                let r = { ...e, ...t },
                    i = Array.from(r.only ?? r.validate ?? l);
                return {
                    ...t,
                    ...Qe({}, e, t),
                    only: i,
                    timeout: r.timeout ?? 5e3,
                    onValidationError: (e, t) => (
                        [
                            ...s([...o, ...i]),
                            ...f(Qe(Nt({ ...d }, i), e.data.errors)),
                        ].forEach((e) => e()),
                        r.onValidationError
                            ? r.onValidationError(e, t)
                            : Promise.reject(t)
                    ),
                    onSuccess: (e) => (
                        s([...o, ...i]).forEach((e) => e()),
                        r.onSuccess ? r.onSuccess(e) : e
                    ),
                    onPrecognitionSuccess: (e) => (
                        [...s([...o, ...i]), ...f(Nt({ ...d }, i))].forEach(
                            (e) => e(),
                        ),
                        r.onPrecognitionSuccess ? r.onPrecognitionSuccess(e) : e
                    ),
                    onBefore: () => {
                        let e = l.some((e) => e.includes(`*`)),
                            t = e
                                ? [...new Set(l.flatMap((e) => jt(e, n)))]
                                : l;
                        return (r.onBeforeValidation &&
                            r.onBeforeValidation(
                                { data: n, touched: t },
                                { data: _, touched: y },
                            ) === !1) ||
                            (r.onBefore || (() => !0))() === !1
                            ? !1
                            : (e && u(t).forEach((e) => e()),
                              (b = l),
                              (v = n),
                              !0);
                    },
                    onStart: () => {
                        (a(!0).forEach((e) => e()),
                            (r.onStart ?? (() => null))());
                    },
                    onFinish: () => {
                        (a(!1).forEach((e) => e()),
                            (y = b),
                            (_ = v),
                            (b = v = null),
                            (r.onFinish ?? (() => null))());
                    },
                };
            },
            w = (e, t, n) => {
                if (e === void 0) {
                    let e = Array.from(n?.only ?? n?.validate ?? []);
                    (u([...l, ...e]).forEach((e) => e()), S(n ?? {}));
                    return;
                }
                if (et(t) && !r) {
                    console.warn(
                        `Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.`,
                    );
                    return;
                }
                ((e = Lt(e)),
                    (e.includes(`*`) || O(_, e) !== t) &&
                        (u([e, ...l]).forEach((e) => e()), S(n ?? {})));
            },
            ee = (e) => (r === !1 ? Rt(e) : e),
            T = {
                touched: () => l,
                validate(e, t, n) {
                    return (
                        typeof e == `object` &&
                            !(`target` in e) &&
                            ((n = e), (e = t = void 0)),
                        w(e, t, n),
                        T
                    );
                },
                touch(e) {
                    let t = Array.isArray(e) ? e : [Lt(e)];
                    return (u([...l, ...t]).forEach((e) => e()), T);
                },
                validating: () => i,
                valid: c,
                errors: () => d,
                hasErrors: m,
                setErrors(e) {
                    return (f(e).forEach((e) => e()), T);
                },
                forgetError(e) {
                    return (p(e).forEach((e) => e()), T);
                },
                defaults(e) {
                    return ((t = e), (_ = e), T);
                },
                reset(...e) {
                    if (e.length === 0) u([]).forEach((e) => e());
                    else {
                        let n = [...l];
                        (e.forEach((e) => {
                            (n.includes(e) && n.splice(n.indexOf(e), 1),
                                Je(_, e, O(t, e)));
                        }),
                            u(n).forEach((e) => e()));
                    }
                    return T;
                },
                setTimeout(e) {
                    return (g(e), T);
                },
                on(e, t) {
                    return (n[e].push(t), T);
                },
                validateFiles() {
                    return ((r = !0), T);
                },
                withoutFileValidation() {
                    return ((r = !1), T);
                },
            };
        return T;
    },
    Ft = (e) =>
        Object.keys(e).reduce(
            (t, n) => ({ ...t, [n]: Array.isArray(e[n]) ? e[n][0] : e[n] }),
            {},
        ),
    It = (e) =>
        Object.keys(e).reduce(
            (t, n) => ({ ...t, [n]: typeof e[n] == `string` ? [e[n]] : e[n] }),
            {},
        ),
    Lt = (e) => (typeof e == `string` ? e : e.target.name),
    Rt = (e) => {
        let t = { ...e };
        return (
            Object.keys(t).forEach((e) => {
                let n = t[e];
                if (n !== null) {
                    if (et(n)) {
                        delete t[e];
                        return;
                    }
                    if (Array.isArray(n)) {
                        t[e] = Object.values(Rt({ ...n }));
                        return;
                    }
                    if (typeof n == `object`) {
                        t[e] = Rt(t[e]);
                        return;
                    }
                }
            }),
            t
        );
    },
    zt = `modulepreload`,
    Bt = function (e) {
        return `/build/` + e;
    },
    Vt = {},
    Ht = function (e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            let e = document.getElementsByTagName(`link`),
                i = document.querySelector(`meta[property=csp-nonce]`),
                a = i?.nonce || i?.getAttribute(`nonce`);
            function o(e) {
                return Promise.all(
                    e.map((e) =>
                        Promise.resolve(e).then(
                            (e) => ({ status: `fulfilled`, value: e }),
                            (e) => ({ status: `rejected`, reason: e }),
                        ),
                    ),
                );
            }
            function s(e) {
                return import.meta.resolve
                    ? import.meta.resolve(e)
                    : new URL(e, import.meta.url).href;
            }
            r = o(
                t.map((t) => {
                    if (((t = Bt(t, n)), (t = s(t)), t in Vt)) return;
                    Vt[t] = !0;
                    let r = t.endsWith(`.css`);
                    for (let n = e.length - 1; n >= 0; n--) {
                        let i = e[n];
                        if (i.href === t && (!r || i.rel === `stylesheet`))
                            return;
                    }
                    let i = document.createElement(`link`);
                    if (
                        ((i.rel = r ? `stylesheet` : zt),
                        r || (i.as = `script`),
                        (i.crossOrigin = ``),
                        (i.href = t),
                        a && i.setAttribute(`nonce`, a),
                        document.head.appendChild(i),
                        r)
                    )
                        return new Promise((e, n) => {
                            (i.addEventListener(`load`, e),
                                i.addEventListener(`error`, () =>
                                    n(Error(`Unable to preload CSS for ${t}`)),
                                ));
                        });
                }),
            );
        }
        function i(e) {
            let t = new Event(`vite:preloadError`, { cancelable: !0 });
            if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
                throw e;
        }
        return r.then((t) => {
            for (let e of t || []) e.status === `rejected` && i(e.reason);
            return e().catch(i);
        });
    },
    Ut = new (class {
        config = {};
        defaults;
        constructor(e) {
            this.defaults = e;
        }
        extend(e) {
            return (e && (this.defaults = { ...this.defaults, ...e }), this);
        }
        replace(e) {
            this.config = e;
        }
        get(e) {
            return Re(this.config, e) ? O(this.config, e) : O(this.defaults, e);
        }
        set(e, t) {
            typeof e == `string`
                ? Je(this.config, e, t)
                : Object.entries(e).forEach(([e, t]) => {
                      Je(this.config, e, t);
                  });
        }
    })({
        form: {
            recentlySuccessfulDuration: 2e3,
            forceIndicesArrayFormatInFormData: !0,
            withAllErrors: !1,
        },
        prefetch: { cacheFor: 3e4, hoverDelay: 75 },
    });
function Wt(e, t) {
    let n;
    return function (...r) {
        (clearTimeout(n), (n = setTimeout(() => e.apply(this, r), t)));
    };
}
function Gt(e, t) {
    return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Kt = (e) => Gt(`before`, { cancelable: !0, detail: { visit: e } }),
    qt = (e, { page: t, visitId: n } = {}) =>
        Gt(`error`, { detail: { errors: e, page: t, visitId: n } }),
    Jt = (e) => Gt(`networkError`, { cancelable: !0, detail: { error: e } }),
    Yt = (e) => Gt(`finish`, { detail: { visit: e } }),
    Xt = (e) =>
        Gt(`httpException`, { cancelable: !0, detail: { response: e } }),
    Zt = (e) => Gt(`beforeUpdate`, { detail: { page: e } }),
    Qt = (e, { cached: t = !1, visitId: n } = {}) =>
        Gt(`navigate`, { detail: { page: e, cached: t, visitId: n } }),
    $t = (e, { replace: t, visitId: n }) =>
        Gt(`clientVisit`, { detail: { page: e, replace: t, visitId: n } }),
    en = (e) => Gt(`progress`, { detail: { progress: e } }),
    tn = (e) => Gt(`start`, { detail: { visit: e } }),
    nn = (e, { visitId: t } = {}) =>
        Gt(`success`, { detail: { page: e, visitId: t } }),
    rn = (e, t) =>
        Gt(`prefetched`, {
            detail: { fetchedAt: Date.now(), response: e, visit: t },
        }),
    an = (e) => Gt(`prefetching`, { detail: { visit: e } }),
    on = (e) => Gt(`flash`, { detail: { flash: e } }),
    sn = (e, t) =>
        Gt(`location`, {
            cancelable: !0,
            detail: { url: e, versionChange: t },
        }),
    cn = class {
        static locationVisitKey = `inertiaLocationVisit`;
        static set(e, t) {
            typeof window < `u` &&
                window.sessionStorage.setItem(e, JSON.stringify(t));
        }
        static get(e) {
            if (typeof window < `u`)
                return JSON.parse(window.sessionStorage.getItem(e) || `null`);
        }
        static merge(e, t) {
            let n = this.get(e);
            n === null ? this.set(e, t) : this.set(e, { ...n, ...t });
        }
        static remove(e) {
            typeof window < `u` && window.sessionStorage.removeItem(e);
        }
        static removeNested(e, t) {
            let n = this.get(e);
            n !== null && (delete n[t], this.set(e, n));
        }
        static exists(e) {
            try {
                return this.get(e) !== null;
            } catch {
                return !1;
            }
        }
        static clear() {
            typeof window < `u` && window.sessionStorage.clear();
        }
    },
    ln = async (e) => {
        if (typeof window > `u`) throw Error(`Unable to encrypt history`);
        let t = mn(),
            n = await _n(await vn());
        if (!n) throw Error(`Unable to encrypt history`);
        return await fn(t, n, e);
    },
    un = { key: `historyKey`, iv: `historyIv` },
    dn = async (e) => {
        let t = mn(),
            n = await vn();
        if (!n) throw Error(`Unable to decrypt history`);
        return await pn(t, n, e);
    },
    fn = async (e, t, n) => {
        if (typeof window > `u`) throw Error(`Unable to encrypt history`);
        if (window.crypto.subtle === void 0)
            return (
                console.warn(
                    `Encryption is not supported in this environment. SSL is required.`,
                ),
                Promise.resolve(n)
            );
        let r = new TextEncoder(),
            i = JSON.stringify(n),
            a = new Uint8Array(i.length * 3),
            o = r.encodeInto(i, a);
        return window.crypto.subtle.encrypt(
            { name: `AES-GCM`, iv: e },
            t,
            a.subarray(0, o.written),
        );
    },
    pn = async (e, t, n) => {
        if (window.crypto.subtle === void 0)
            return (
                console.warn(
                    `Decryption is not supported in this environment. SSL is required.`,
                ),
                Promise.resolve(n)
            );
        let r = await window.crypto.subtle.decrypt(
            { name: `AES-GCM`, iv: e },
            t,
            n,
        );
        return JSON.parse(new TextDecoder().decode(r));
    },
    mn = () => {
        let e = cn.get(un.iv);
        if (e) return new Uint8Array(e);
        let t = window.crypto.getRandomValues(new Uint8Array(12));
        return (cn.set(un.iv, Array.from(t)), t);
    },
    hn = async () =>
        window.crypto.subtle === void 0
            ? (console.warn(
                  `Encryption is not supported in this environment. SSL is required.`,
              ),
              Promise.resolve(null))
            : window.crypto.subtle.generateKey(
                  { name: `AES-GCM`, length: 256 },
                  !0,
                  [`encrypt`, `decrypt`],
              ),
    gn = async (e) => {
        if (window.crypto.subtle === void 0)
            return (
                console.warn(
                    `Encryption is not supported in this environment. SSL is required.`,
                ),
                Promise.resolve()
            );
        let t = await window.crypto.subtle.exportKey(`raw`, e);
        cn.set(un.key, Array.from(new Uint8Array(t)));
    },
    _n = async (e) => {
        if (e) return e;
        let t = await hn();
        return t ? (await gn(t), t) : null;
    },
    vn = async () => {
        let e = cn.get(un.key);
        return e
            ? await window.crypto.subtle.importKey(
                  `raw`,
                  new Uint8Array(e),
                  { name: `AES-GCM`, length: 256 },
                  !0,
                  [`encrypt`, `decrypt`],
              )
            : null;
    },
    yn = (e) => {
        let t = {};
        for (let n of Object.keys(e)) e[n] !== void 0 && (t[n] = e[n]);
        return t;
    },
    bn = (e, t, n) => {
        if (e === t) return !0;
        for (let r in e)
            if (!n.includes(r) && e[r] !== t[r] && !xn(e[r], t[r])) return !1;
        for (let r in t) if (!n.includes(r) && !(r in e)) return !1;
        return !0;
    },
    xn = (e, t) => {
        switch (typeof e) {
            case `object`:
                return bn(e, t, []);
            case `function`:
                return e.toString() === t.toString();
            default:
                return e === t;
        }
    },
    Sn = (e, t, n) => {
        let r = Oe(t);
        if (r.length === 0) return e;
        let i = (e, t) => {
            if (t === r.length) return n;
            let a = r[t],
                o = Array.isArray(e)
                    ? [...e]
                    : e && typeof e == `object`
                      ? { ...e }
                      : /^(?:0|[1-9]\d*)$/.test(a)
                        ? []
                        : {};
            return ((o[a] = i(e?.[a], t + 1)), o);
        };
        return i(e, 0);
    },
    Cn = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 },
    wn = (e) => {
        if (typeof e == `number`) return e;
        for (let [t, n] of Object.entries(Cn))
            if (e.endsWith(t)) return parseFloat(e) * n;
        return parseInt(e);
    },
    Tn = new (class {
        cached = [];
        inFlightRequests = [];
        removalTimers = [];
        currentUseId = null;
        add(e, t, { cacheFor: n, cacheTags: r }) {
            if (this.findInFlight(e)) return Promise.resolve();
            let i = this.findCached(e);
            if (!e.fresh && i && i.staleTimestamp > Date.now())
                return Promise.resolve();
            let [a, o] = this.extractStaleValues(n),
                s = new Promise((n, r) => {
                    t({
                        ...e,
                        onCancel: () => {
                            (this.remove(e), e.onCancel(), r());
                        },
                        onError: (t) => {
                            (this.remove(e), e.onError(t), r());
                        },
                        onPrefetching(t) {
                            e.onPrefetching(t);
                        },
                        onPrefetched(t, n) {
                            e.onPrefetched(t, n);
                        },
                        onPrefetchResponse(e) {
                            n(e);
                        },
                        onPrefetchError(t) {
                            (Tn.removeFromInFlight(e), r(t));
                        },
                    });
                }).then((t) => {
                    this.remove(e);
                    let n = t.getPageResponse();
                    (A.mergeOncePropsIntoResponse(n),
                        this.cached.push({
                            params: { ...e },
                            staleTimestamp: Date.now() + a,
                            expiresAt: Date.now() + o,
                            response: s,
                            singleUse: o === 0,
                            timestamp: Date.now(),
                            inFlight: !1,
                            tags: Array.isArray(r) ? r : [r],
                        }));
                    let i = this.getShortestOncePropTtl(n);
                    return (
                        this.scheduleForRemoval(e, i ? Math.min(o, i) : o),
                        this.removeFromInFlight(e),
                        t.handlePrefetch(),
                        t
                    );
                });
            return (
                this.inFlightRequests.push({
                    params: { ...e },
                    response: s,
                    staleTimestamp: null,
                    inFlight: !0,
                }),
                s
            );
        }
        removeAll() {
            ((this.cached = []),
                this.removalTimers.forEach((e) => {
                    clearTimeout(e.timer);
                }),
                (this.removalTimers = []));
        }
        removeByTags(e) {
            this.cached = this.cached.filter(
                (t) => !t.tags.some((t) => e.includes(t)),
            );
        }
        remove(e) {
            ((this.cached = this.cached.filter(
                (t) => !this.paramsAreEqual(t.params, e),
            )),
                this.clearTimer(e));
        }
        removeFromInFlight(e) {
            this.inFlightRequests = this.inFlightRequests.filter(
                (t) => !this.paramsAreEqual(t.params, e),
            );
        }
        extractStaleValues(e) {
            let [t, n] = this.cacheForToStaleAndExpires(e);
            return [wn(t), wn(n)];
        }
        cacheForToStaleAndExpires(e) {
            if (!Array.isArray(e)) return [e, e];
            switch (e.length) {
                case 0:
                    return [0, 0];
                case 1:
                    return [e[0], e[0]];
                default:
                    return [e[0], e[1]];
            }
        }
        clearTimer(e) {
            let t = this.removalTimers.find((t) =>
                this.paramsAreEqual(t.params, e),
            );
            t &&
                (clearTimeout(t.timer),
                (this.removalTimers = this.removalTimers.filter(
                    (e) => e !== t,
                )));
        }
        scheduleForRemoval(e, t) {
            if (!(typeof window > `u`) && (this.clearTimer(e), t > 0)) {
                let n = window.setTimeout(() => this.remove(e), t);
                this.removalTimers.push({ params: e, timer: n });
            }
        }
        get(e) {
            return this.findCached(e) || this.findInFlight(e);
        }
        use(e, t) {
            let n = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
            this.currentUseId = n;
            let r = { ...t, cached: !0 };
            return e.response.then((e) => {
                if (this.currentUseId === n)
                    return (
                        e.mergeParams({ ...r, onPrefetched: () => {} }),
                        this.removeSingleUseItems(t),
                        e.handle()
                    );
            });
        }
        removeSingleUseItems(e) {
            this.cached = this.cached.filter(
                (t) => !this.paramsAreEqual(t.params, e) || !t.singleUse,
            );
        }
        findCached(e) {
            return (
                this.cached.find((t) => this.paramsAreEqual(t.params, e)) ||
                null
            );
        }
        findInFlight(e) {
            return (
                this.inFlightRequests.find((t) =>
                    this.paramsAreEqual(t.params, e),
                ) || null
            );
        }
        withoutPurposePrefetchHeader(e) {
            let t = D(e);
            return (
                t.headers.Purpose === `prefetch` && delete t.headers.Purpose, t
            );
        }
        paramsAreEqual(e, t) {
            return bn(
                this.withoutPurposePrefetchHeader(e),
                this.withoutPurposePrefetchHeader(t),
                [
                    `id`,
                    `showProgress`,
                    `replace`,
                    `prefetch`,
                    `preserveScroll`,
                    `preserveState`,
                    `onBefore`,
                    `onBeforeUpdate`,
                    `onStart`,
                    `onProgress`,
                    `onFinish`,
                    `onCancel`,
                    `onSuccess`,
                    `onError`,
                    `onFlash`,
                    `onPrefetched`,
                    `onCancelToken`,
                    `onPrefetching`,
                    `async`,
                    `viewTransition`,
                    `optimistic`,
                    `component`,
                    `pageProps`,
                    `cached`,
                ],
            );
        }
        updateCachedOncePropsFromCurrentPage() {
            this.cached.forEach((e) => {
                e.response.then((t) => {
                    let n = t.getPageResponse();
                    A.mergeOncePropsIntoResponse(n, { force: !0 });
                    for (let [e, t] of Object.entries(n.deferredProps ?? {})) {
                        let r = t.filter((e) => O(n.props, e) === void 0);
                        r.length > 0
                            ? (n.deferredProps[e] = r)
                            : delete n.deferredProps[e];
                    }
                    let r = this.getShortestOncePropTtl(n);
                    if (r === null) return;
                    let i = e.expiresAt - Date.now(),
                        a = Math.min(i, r);
                    a > 0
                        ? this.scheduleForRemoval(e.params, a)
                        : this.remove(e.params);
                });
            });
        }
        getShortestOncePropTtl(e) {
            let t = Object.values(e.onceProps ?? {})
                .map((e) => e.expiresAt)
                .filter((e) => !!e);
            return t.length === 0 ? null : Math.min(...t) - Date.now();
        }
    })(),
    En = (e, t = 1) => {
        window.requestAnimationFrame(() => {
            t > 1 ? En(e, t - 1) : e();
        });
    },
    Dn = (e) => {
        if (typeof window > `u`) return null;
        let t = document.querySelector(
            `script[data-page="${e}"][type="application/json"]`,
        );
        return t?.textContent ? JSON.parse(t.textContent) : null;
    },
    On = typeof window > `u`,
    kn = !On && /Firefox/i.test(window.navigator.userAgent),
    An = class {
        static save() {
            j.saveScrollPositions(this.getScrollRegions());
        }
        static getScrollRegions() {
            return Array.from(this.regions()).map((e) => ({
                top: e.scrollTop,
                left: e.scrollLeft,
            }));
        }
        static regions() {
            return document.querySelectorAll(`[scroll-region]`);
        }
        static scrollToTop() {
            if (
                kn &&
                getComputedStyle(document.documentElement).scrollBehavior ===
                    `smooth`
            )
                return En(() => window.scrollTo(0, 0), 2);
            window.scrollTo(0, 0);
        }
        static reset() {
            ((!On && window.location.hash) || this.scrollToTop(),
                this.regions().forEach((e) => {
                    typeof e.scrollTo == `function`
                        ? e.scrollTo(0, 0)
                        : ((e.scrollTop = 0), (e.scrollLeft = 0));
                }),
                this.save(),
                this.scrollToAnchor());
        }
        static scrollToAnchor() {
            let e = On ? null : window.location.hash;
            e &&
                setTimeout(() => {
                    let t = document.getElementById(e.slice(1));
                    t ? t.scrollIntoView() : this.scrollToTop();
                });
        }
        static restore(e) {
            On ||
                window.requestAnimationFrame(() => {
                    (this.restoreDocument(), this.restoreScrollRegions(e));
                });
        }
        static restoreScrollRegions(e) {
            On ||
                this.regions().forEach((t, n) => {
                    let r = e[n];
                    r &&
                        (typeof t.scrollTo == `function`
                            ? t.scrollTo(r.left, r.top)
                            : ((t.scrollTop = r.top), (t.scrollLeft = r.left)));
                });
        }
        static restoreDocument() {
            let e = j.getDocumentScrollPosition();
            window.scrollTo(e.left, e.top);
        }
        static onScroll(e) {
            let t = e.target;
            typeof t.hasAttribute == `function` &&
                t.hasAttribute(`scroll-region`) &&
                this.save();
        }
        static onWindowScroll() {
            j.saveDocumentScrollPosition({
                top: window.scrollY,
                left: window.scrollX,
            });
        }
    },
    jn = (e) =>
        (typeof File < `u` && e instanceof File) ||
        e instanceof Blob ||
        (typeof FileList < `u` && e instanceof FileList && e.length > 0);
function Mn(e) {
    return (
        jn(e) ||
        (e instanceof FormData && Array.from(e.values()).some((e) => Mn(e))) ||
        (typeof e == `object` && !!e && Object.values(e).some((e) => Mn(e)))
    );
}
var Nn = (e) => e instanceof FormData;
function Pn(e, t = new FormData(), n = null, r = `brackets`) {
    e ||= {};
    for (let i in e)
        Object.prototype.hasOwnProperty.call(e, i) &&
            In(t, Fn(n, i, `indices`), e[i], r);
    return t;
}
function Fn(e, t, n) {
    return e ? (n === `brackets` ? `${e}[]` : `${e}[${t}]`) : t;
}
function In(e, t, n, r) {
    if (Array.isArray(n))
        return Array.from(n.keys()).forEach((i) =>
            In(e, Fn(t, i.toString(), r), n[i], r),
        );
    if (n instanceof Date) return e.append(t, n.toISOString());
    if (n instanceof File) return e.append(t, n, n.name);
    if (n instanceof Blob) return e.append(t, n);
    if (typeof n == `boolean`) return e.append(t, n ? `1` : `0`);
    if (typeof n == `string`) return e.append(t, n);
    if (typeof n == `number`) return e.append(t, `${n}`);
    if (n == null) return e.append(t, ``);
    Pn(n, e, t, r);
}
function Ln(e) {
    return /\[\d+\]/.test(decodeURIComponent(e.search));
}
function Rn(e) {
    if (!e || e === `?`) return {};
    let t = {};
    return (
        e
            .replace(/^\?/, ``)
            .split(`&`)
            .filter(Boolean)
            .forEach((e) => {
                let [n, r] = Bn(e);
                Hn(t, Vn(n), Vn(r));
            }),
        t
    );
}
function zn(e, t) {
    let n = [];
    return (Wn(e, ``, n, t), n.length ? `?` + n.join(`&`) : ``);
}
function Bn(e) {
    let t = e.indexOf(`=`);
    return t === -1 ? [e, ``] : [e.substring(0, t), e.substring(t + 1)];
}
function Vn(e) {
    return decodeURIComponent(e.replace(/\+/g, ` `));
}
function Hn(e, t, n) {
    let r = Un(t);
    if (r.some((e) => e === `__proto__`)) return;
    let i = e;
    for (; r.length > 1;) {
        let e = r.shift(),
            t = r[0] === ``;
        ((typeof i[e] != `object` || i[e] === null) && (i[e] = t ? [] : {}),
            (i = i[e]));
    }
    let a = r.shift();
    a === `` && Array.isArray(i) ? i.push(n) : (i[a] = n);
}
function Un(e) {
    let t = [],
        n = e.split(`[`)[0];
    n && t.push(n);
    let r,
        i = /\[([^\]]*)\]/g;
    for (; (r = i.exec(e)) !== null;) t.push(r[1]);
    return t;
}
function Wn(e, t, n, r) {
    if (e !== void 0) {
        if (e === null) {
            n.push(`${t}=`);
            return;
        }
        if (Array.isArray(e)) {
            e.forEach((e, i) => {
                Wn(e, r === `indices` ? `${t}[${i}]` : `${t}[]`, n, r);
            });
            return;
        }
        if (typeof e == `object`) {
            Object.keys(e).forEach((i) => {
                Wn(e[i], t ? `${t}[${i}]` : i, n, r);
            });
            return;
        }
        n.push(`${t}=${encodeURIComponent(String(e))}`);
    }
}
function Gn(e) {
    return new URL(
        e.toString(),
        typeof window > `u` ? void 0 : window.location.toString(),
    );
}
var Kn = (e, t, n, r, i) => {
    let a = typeof e == `string` ? Gn(e) : e;
    if (
        ((Mn(t) || r) &&
            !Nn(t) &&
            (Ut.get(`form.forceIndicesArrayFormatInFormData`) &&
                (i = `indices`),
            (t = Pn(t, new FormData(), null, i))),
        Nn(t))
    )
        return [a, t];
    let [o, s] = qn(n, a, t, i);
    return [Gn(o), s];
};
function qn(e, t, n, r = `brackets`) {
    let i = e === `get` && !Nn(n) && Object.keys(n).length > 0,
        a = er(t.toString()),
        o = a || t.toString().startsWith(`/`) || t.toString() === ``,
        s =
            !o &&
            !t.toString().startsWith(`#`) &&
            !t.toString().startsWith(`?`),
        c = /^[.]{1,2}([/]|$)/.test(t.toString()),
        l = t.toString().includes(`?`) || i,
        u = t.toString().includes(`#`),
        d = new URL(
            t.toString(),
            typeof window > `u`
                ? `http://localhost`
                : window.location.toString(),
        );
    if (i) {
        let e = Ln(d) ? `indices` : r;
        d.search = zn({ ...Rn(d.search), ...n }, e);
    }
    return [
        [
            a ? `${d.protocol}//${d.host}` : ``,
            o ? d.pathname : ``,
            s ? d.pathname.substring(+!c) : ``,
            l ? d.search : ``,
            u ? d.hash : ``,
        ].join(``),
        i ? {} : n,
    ];
}
function Jn(e) {
    return ((e = new URL(e.href)), (e.hash = ``), e);
}
var Yn = (e, t) => {
        e.hash && !t.hash && Jn(e).href === t.href && (t.hash = e.hash);
    },
    Xn = (e, t) => Jn(e).href === Jn(t).href,
    Zn = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function Qn(e) {
    return (
        typeof e == `object` &&
        !!e &&
        e !== void 0 &&
        `url` in e &&
        `method` in e
    );
}
function $n(e) {
    return e.component
        ? typeof e.component == `string`
            ? e.component
            : (console.error(
                  `The "component" property on the URL method pair received multiple components (${Object.keys(e.component).join(`, `)}), but only a single component string is supported for instant visits. Use the withComponent() method to specify which component to use.`,
              ),
              null)
        : null;
}
function er(e) {
    return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
var A = new (class {
        page;
        swapComponent;
        resolveComponent;
        onFlashCallback;
        componentId = {};
        listeners = [];
        isFirstPageLoad = !0;
        cleared = !1;
        pendingDeferredProps = null;
        historyQuotaExceeded = !1;
        optimisticBaseline = {};
        pendingOptimistics = [];
        optimisticCounter = 0;
        init({
            initialPage: e,
            swapComponent: t,
            resolveComponent: n,
            onFlash: r,
        }) {
            return (
                (this.page = {
                    ...e,
                    flash: e.flash ?? {},
                    rescuedProps: e.rescuedProps ?? [],
                }),
                (this.swapComponent = t),
                (this.resolveComponent = n),
                (this.onFlashCallback = r),
                or.on(`historyQuotaExceeded`, () => {
                    this.historyQuotaExceeded = !0;
                }),
                this
            );
        }
        set(
            e,
            {
                replace: t = !1,
                preserveScroll: n = !1,
                preserveState: r = !1,
                viewTransition: i = !1,
                cached: a = !1,
                initialRender: o = !1,
                visitId: s,
            } = {},
        ) {
            (Object.keys(e.deferredProps || {}).length &&
                ((this.pendingDeferredProps = {
                    deferredProps: e.deferredProps,
                    component: e.component,
                    url: e.url,
                }),
                e.initialDeferredProps === void 0 &&
                    (e.initialDeferredProps = e.deferredProps)),
                (this.componentId = {}));
            let c = this.componentId;
            return (
                e.clearHistory && j.clear(),
                this.resolve(e.component, e).then((l) => {
                    if (c !== this.componentId) return;
                    e.rememberedState ??= {};
                    let u = typeof window > `u`,
                        d = u ? new URL(e.url) : window.location,
                        f = !u && n ? An.getScrollRegions() : [];
                    t ||= Xn(Gn(e.url), d);
                    let p = { ...e, flash: {} };
                    return new Promise((e) =>
                        t ? j.replaceState(p, e) : j.pushState(p, e),
                    ).then(() => {
                        let c = !this.isTheSame(e);
                        if (
                            (!c &&
                                Object.keys(e.props.errors || {}).length > 0 &&
                                (i = !1),
                            (this.page = e),
                            (this.cleared = !1),
                            this.hasOnceProps() &&
                                Tn.updateCachedOncePropsFromCurrentPage(),
                            c && this.fireEventsFor(`newComponent`),
                            this.isFirstPageLoad &&
                                this.fireEventsFor(`firstLoad`),
                            (this.isFirstPageLoad = !1),
                            this.historyQuotaExceeded)
                        ) {
                            this.historyQuotaExceeded = !1;
                            return;
                        }
                        return this.swap({
                            component: l,
                            page: e,
                            preserveState: r,
                            viewTransition: i,
                            initialRender: o,
                        }).then(() => {
                            (n
                                ? window.requestAnimationFrame(() =>
                                      An.restoreScrollRegions(f),
                                  )
                                : An.reset(),
                                this.pendingDeferredProps &&
                                    this.pendingDeferredProps.component ===
                                        e.component &&
                                    this.pendingDeferredProps.url === e.url &&
                                    or.fireInternalEvent(
                                        `loadDeferredProps`,
                                        this.pendingDeferredProps.deferredProps,
                                    ),
                                (this.pendingDeferredProps = null),
                                t || Qt(e, { cached: a, visitId: s }));
                        });
                    });
                })
            );
        }
        setQuietly(e, { preserveState: t = !1 } = {}) {
            return this.resolve(e.component, e).then(
                (n) => (
                    (this.page = e),
                    (this.cleared = !1),
                    j.setCurrent(e),
                    this.swap({
                        component: n,
                        page: e,
                        preserveState: t,
                        viewTransition: !1,
                    })
                ),
            );
        }
        clear() {
            this.cleared = !0;
        }
        isCleared() {
            return this.cleared;
        }
        get() {
            return this.page;
        }
        getWithoutFlashData() {
            return { ...this.page, flash: {} };
        }
        hasOnceProps() {
            return Object.keys(this.page.onceProps ?? {}).length > 0;
        }
        merge(e) {
            this.page = { ...this.page, ...e };
        }
        setPropsQuietly(e) {
            return (
                (this.page = { ...this.page, props: e }),
                this.resolve(this.page.component, this.page).then((e) =>
                    this.swap({
                        component: e,
                        page: this.page,
                        preserveState: !0,
                        viewTransition: !1,
                    }),
                )
            );
        }
        setFlash(e) {
            ((this.page = { ...this.page, flash: e }),
                this.onFlashCallback?.(e));
        }
        setUrlHash(e) {
            this.page.url.includes(e) || (this.page.url += e);
        }
        remember(e) {
            this.page.rememberedState = e;
        }
        swap({
            component: e,
            page: t,
            preserveState: n,
            viewTransition: r,
            initialRender: i = !1,
        }) {
            let a = () =>
                this.swapComponent({
                    component: e,
                    page: t,
                    preserveState: n,
                    initialRender: i,
                });
            if (
                !r ||
                !document?.startViewTransition ||
                document.visibilityState === `hidden`
            )
                return a();
            let o = typeof r == `boolean` ? () => null : r;
            return new Promise((e) => {
                let t = document.startViewTransition(() => a().then(e));
                (t.ready.catch(() => {}), o(t));
            });
        }
        resolve(e, t) {
            return Promise.resolve(this.resolveComponent(e, t));
        }
        nextOptimisticId() {
            return ++this.optimisticCounter;
        }
        setBaseline(e, t) {
            e in this.optimisticBaseline || (this.optimisticBaseline[e] = t);
        }
        updateBaseline(e, t) {
            e in this.optimisticBaseline && (this.optimisticBaseline[e] = t);
        }
        hasBaseline(e) {
            return e in this.optimisticBaseline;
        }
        registerOptimistic(e, t) {
            this.pendingOptimistics.push({ id: e, callback: t });
        }
        unregisterOptimistic(e) {
            this.pendingOptimistics = this.pendingOptimistics.filter(
                (t) => t.id !== e,
            );
        }
        replayOptimistics() {
            let e = Object.keys(this.optimisticBaseline);
            if (e.length === 0) return {};
            let t = D(this.page.props);
            for (let n of e) t[n] = D(this.optimisticBaseline[n]);
            for (let { callback: e } of this.pendingOptimistics) {
                let n = e(D(t));
                n && Object.assign(t, n);
            }
            let n = {};
            for (let r of e) n[r] = t[r];
            return n;
        }
        pendingOptimisticCount() {
            return this.pendingOptimistics.length;
        }
        clearOptimisticState() {
            ((this.optimisticBaseline = {}), (this.pendingOptimistics = []));
        }
        isTheSame(e) {
            return this.page.component === e.component;
        }
        on(e, t) {
            return (
                this.listeners.push({ event: e, callback: t }),
                () => {
                    this.listeners = this.listeners.filter(
                        (n) => n.event !== e && n.callback !== t,
                    );
                }
            );
        }
        fireEventsFor(e) {
            this.listeners
                .filter((t) => t.event === e)
                .forEach((e) => e.callback());
        }
        mergeOncePropsIntoResponse(e, { force: t = !1 } = {}) {
            Object.entries(e.onceProps ?? {}).forEach(([n, r]) => {
                let i = this.page.onceProps?.[n];
                i !== void 0 &&
                    (t || O(e.props, r.prop) === void 0) &&
                    (Je(e.props, r.prop, O(this.page.props, i.prop)),
                    (e.onceProps[n].expiresAt = i.expiresAt));
            });
        }
    })(),
    tr = class {
        items = [];
        processingPromise = null;
        add(e) {
            return (this.items.push(e), this.process());
        }
        process() {
            return (
                (this.processingPromise ??= this.processNext().finally(() => {
                    this.processingPromise = null;
                })),
                this.processingPromise
            );
        }
        processNext() {
            let e = this.items.shift();
            return e
                ? Promise.resolve(e()).then(() => this.processNext())
                : Promise.resolve();
        }
    },
    nr = typeof window > `u`,
    rr = new tr(),
    ir = !nr && /CriOS/.test(window.navigator.userAgent),
    ar = class {
        rememberedState = `rememberedState`;
        scrollRegions = `scrollRegions`;
        preserveUrl = !1;
        current = {};
        initialState = null;
        remember(e, t) {
            this.replaceState({
                ...A.getWithoutFlashData(),
                rememberedState: {
                    ...(A.get()?.rememberedState ?? {}),
                    [t]: e,
                },
            });
        }
        restore(e) {
            if (!nr)
                return this.current[this.rememberedState]?.[e] === void 0
                    ? this.initialState?.[this.rememberedState]?.[e]
                    : this.current[this.rememberedState]?.[e];
        }
        pushState(e, t = null) {
            if (!nr) {
                if (this.preserveUrl) {
                    t && t();
                    return;
                }
                ((this.current = e),
                    rr.add(() =>
                        this.getPageData(e).then((n) => {
                            let r = () =>
                                this.doPushState({ page: n }, e.url).then(() =>
                                    t?.(),
                                );
                            return ir
                                ? new Promise((e) => {
                                      setTimeout(() => r().then(e));
                                  })
                                : r();
                        }),
                    ));
            }
        }
        clonePageProps(e) {
            try {
                return (structuredClone(e.props), e);
            } catch {
                return { ...e, props: D(e.props) };
            }
        }
        getPageData(e) {
            let t = this.clonePageProps(e);
            return new Promise((n) =>
                e.encryptHistory ? ln(t).then(n) : n(t),
            );
        }
        processQueue() {
            return rr.process();
        }
        decrypt(e = null) {
            if (nr) return Promise.resolve(e ?? A.get());
            let t = e ?? window.history.state?.page;
            return this.decryptPageData(t).then((e) => {
                if (!e) throw Error(`Unable to decrypt history`);
                return (
                    this.initialState === null
                        ? (this.initialState = e ?? void 0)
                        : (this.current = e ?? {}),
                    e
                );
            });
        }
        decryptPageData(e) {
            return e instanceof ArrayBuffer ? dn(e) : Promise.resolve(e);
        }
        saveScrollPositions(e) {
            rr.add(() =>
                Promise.resolve().then(() => {
                    if (
                        window.history.state?.page &&
                        !ye(this.getScrollRegions(), e)
                    )
                        return this.doReplaceState({
                            page: window.history.state.page,
                            scrollRegions: e,
                        });
                }),
            );
        }
        saveDocumentScrollPosition(e) {
            rr.add(() =>
                Promise.resolve().then(() => {
                    if (
                        window.history.state?.page &&
                        !ye(this.getDocumentScrollPosition(), e)
                    )
                        return this.doReplaceState({
                            page: window.history.state.page,
                            documentScrollPosition: e,
                        });
                }),
            );
        }
        getScrollRegions() {
            return window.history.state?.scrollRegions || [];
        }
        getDocumentScrollPosition() {
            return (
                window.history.state?.documentScrollPosition || {
                    top: 0,
                    left: 0,
                }
            );
        }
        replaceState(e, t = null) {
            if (ye(this.current, e)) {
                t && t();
                return;
            }
            let { flash: n, ...r } = e;
            if ((A.merge(r), !nr)) {
                if (this.preserveUrl) {
                    t && t();
                    return;
                }
                ((this.current = e),
                    rr.add(() =>
                        this.getPageData(e).then((n) => {
                            let r = () =>
                                this.doReplaceState({ page: n }, e.url).then(
                                    () => t?.(),
                                );
                            return ir
                                ? new Promise((e) => {
                                      setTimeout(() => r().then(e));
                                  })
                                : r();
                        }),
                    ));
            }
        }
        isHistoryThrottleError(e) {
            return (
                e instanceof Error &&
                e.name === `SecurityError` &&
                (e.message.includes(`history.pushState`) ||
                    e.message.includes(`history.replaceState`))
            );
        }
        isQuotaExceededError(e) {
            return e instanceof Error && e.name === `QuotaExceededError`;
        }
        withThrottleProtection(e) {
            return Promise.resolve().then(() => {
                try {
                    return e();
                } catch (e) {
                    if (!this.isHistoryThrottleError(e)) throw e;
                    console.error(e.message);
                }
            });
        }
        doReplaceState(e, t) {
            return this.withThrottleProtection(() => {
                window.history.replaceState(
                    {
                        ...e,
                        scrollRegions:
                            e.scrollRegions ??
                            window.history.state?.scrollRegions,
                        documentScrollPosition:
                            e.documentScrollPosition ??
                            window.history.state?.documentScrollPosition,
                    },
                    ``,
                    t,
                );
            });
        }
        doPushState(e, t) {
            return this.withThrottleProtection(() => {
                try {
                    window.history.pushState(e, ``, t);
                } catch (e) {
                    if (!this.isQuotaExceededError(e)) throw e;
                    or.fireInternalEvent(`historyQuotaExceeded`, t);
                }
            });
        }
        getState(e, t) {
            return this.current?.[e] ?? t;
        }
        deleteState(e) {
            this.current[e] !== void 0 &&
                (delete this.current[e], this.replaceState(this.current));
        }
        clearInitialState(e) {
            this.initialState &&
                this.initialState[e] !== void 0 &&
                delete this.initialState[e];
        }
        browserHasHistoryEntry() {
            return !nr && !!window.history.state?.page;
        }
        clear() {
            (cn.remove(un.key), cn.remove(un.iv));
        }
        setCurrent(e) {
            this.current = e;
        }
        isValidState(e) {
            return !!e.page;
        }
        getAllState() {
            return this.current;
        }
    };
typeof window < `u` &&
    window.history.scrollRestoration &&
    (window.history.scrollRestoration = `manual`);
var j = new ar(),
    or = new (class {
        internalListeners = [];
        init() {
            (typeof window < `u` &&
                (window.addEventListener(
                    `popstate`,
                    this.handlePopstateEvent.bind(this),
                ),
                window.addEventListener(
                    `pageshow`,
                    this.handlePageshowEvent.bind(this),
                ),
                window.addEventListener(
                    `scroll`,
                    Wt(An.onWindowScroll.bind(An), 100),
                    !0,
                )),
                typeof document < `u` &&
                    document.addEventListener(
                        `scroll`,
                        Wt(An.onScroll.bind(An), 100),
                        !0,
                    ));
        }
        onGlobalEvent(e, t) {
            return this.registerListener(`inertia:${e}`, (e) => {
                let n = t(e);
                e.cancelable &&
                    !e.defaultPrevented &&
                    n === !1 &&
                    e.preventDefault();
            });
        }
        on(e, t) {
            return (
                this.internalListeners.push({ event: e, listener: t }),
                () => {
                    this.internalListeners = this.internalListeners.filter(
                        (e) => e.listener !== t,
                    );
                }
            );
        }
        onMissingHistoryItem() {
            (A.clear(), this.fireInternalEvent(`missingHistoryItem`));
        }
        fireInternalEvent(e, ...t) {
            this.internalListeners
                .filter((t) => t.event === e)
                .forEach((e) => e.listener(...t));
        }
        registerListener(e, t) {
            return (
                document.addEventListener(e, t),
                () => document.removeEventListener(e, t)
            );
        }
        handlePageshowEvent(e) {
            e.persisted && j.decrypt().catch(() => this.onMissingHistoryItem());
        }
        handlePopstateEvent(e) {
            let t = e.state || null;
            if (t === null) {
                let e = Gn(A.get().url);
                ((e.hash = window.location.hash),
                    j.replaceState({ ...A.getWithoutFlashData(), url: e.href }),
                    An.reset());
                return;
            }
            if (!j.isValidState(t)) return this.onMissingHistoryItem();
            j.decrypt(t.page)
                .then((e) => {
                    if (A.get().version !== e.version) {
                        this.onMissingHistoryItem();
                        return;
                    }
                    (I.cancelAll({ prefetch: !1 }),
                        A.setQuietly(e, { preserveState: !1 }).then(() => {
                            (An.restore(j.getScrollRegions()), Qt(A.get()));
                            let t = {},
                                n = A.get().props;
                            for (let [r, i] of Object.entries(
                                e.initialDeferredProps ?? e.deferredProps ?? {},
                            )) {
                                let e = i.filter((e) => O(n, e) === void 0);
                                e.length > 0 && (t[r] = e);
                            }
                            Object.keys(t).length > 0 &&
                                this.fireInternalEvent(`loadDeferredProps`, t);
                        }));
                })
                .catch(() => {
                    this.onMissingHistoryItem();
                });
        }
    })(),
    sr = new (class {
        type;
        constructor() {
            this.type = this.resolveType();
        }
        resolveType() {
            return typeof window > `u`
                ? `navigate`
                : (window.performance?.getEntriesByType(`navigation`)[0]
                      ?.type ?? `navigate`);
        }
        get() {
            return this.type;
        }
        isBackForward() {
            return this.type === `back_forward`;
        }
        isReload() {
            return this.type === `reload`;
        }
    })();
function cr() {
    let e = typeof window < `u` ? window.crypto : void 0;
    if (e?.randomUUID) return e.randomUUID();
    let t = () =>
        e?.getRandomValues
            ? e.getRandomValues(new Uint8Array(1))[0]
            : Math.floor(Math.random() * 256);
    return `10000000-1000-4000-8000-100000000000`.replace(/[018]/g, (e) =>
        (e ^ (t() & (15 >> (e / 4)))).toString(16),
    );
}
var lr = class {
        static handle() {
            (this.clearRememberedStateOnReload(),
                [
                    this.handleBackForward,
                    this.handleLocation,
                    this.handleDefault,
                ].find((e) => e.bind(this)()));
        }
        static clearRememberedStateOnReload() {
            sr.isReload() &&
                (j.deleteState(j.rememberedState),
                j.clearInitialState(j.rememberedState));
        }
        static handleBackForward() {
            if (!sr.isBackForward() || !j.browserHasHistoryEntry()) return !1;
            let e = j.getScrollRegions();
            return (
                j
                    .decrypt()
                    .then((t) => {
                        let n = cr();
                        A.set(t, {
                            preserveScroll: !0,
                            preserveState: !0,
                            visitId: n,
                        }).then(() => {
                            (An.restore(e), Qt(A.get(), { visitId: n }));
                        });
                    })
                    .catch(() => {
                        or.onMissingHistoryItem();
                    }),
                !0
            );
        }
        static handleLocation() {
            if (!cn.exists(cn.locationVisitKey)) return !1;
            let e = cn.get(cn.locationVisitKey) || {};
            return (
                cn.remove(cn.locationVisitKey),
                typeof window < `u` && A.setUrlHash(window.location.hash),
                j
                    .decrypt(A.get())
                    .then(() => {
                        let t = cr(),
                            n = j.getState(j.rememberedState, {}),
                            r = j.getScrollRegions();
                        (A.remember(n),
                            A.set(A.get(), {
                                preserveScroll: e.preserveScroll,
                                preserveState: !0,
                                initialRender: !0,
                                visitId: t,
                            }).then(() => {
                                (e.preserveScroll && An.restore(r),
                                    this.fireInitialEvents(t));
                            }));
                    })
                    .catch(() => {
                        or.onMissingHistoryItem();
                    }),
                !0
            );
        }
        static handleDefault() {
            typeof window < `u` && A.setUrlHash(window.location.hash);
            let e = cr();
            A.set(A.get(), {
                preserveScroll: !0,
                preserveState: !0,
                initialRender: !0,
                visitId: e,
            }).then(() => {
                (sr.isReload()
                    ? An.restore(j.getScrollRegions())
                    : An.scrollToAnchor(),
                    this.fireInitialEvents(e));
            });
        }
        static fireInitialEvents(e) {
            let t = A.get();
            (Qt(t, { visitId: e }),
                Object.keys(t.flash).length > 0 &&
                    queueMicrotask(() => on(t.flash)));
        }
    },
    ur = class {
        intervalId = null;
        timeoutId = null;
        throttle = !1;
        keepAlive = !1;
        cb;
        interval;
        cbCount = 0;
        mode;
        inFlight = !1;
        currentCancel = null;
        stopped = !0;
        instanceId = 0;
        constructor(e, t, n) {
            ((this.keepAlive = n.keepAlive ?? !1),
                (this.mode = n.mode ?? `overlap`),
                (this.cb = t),
                (this.interval = e),
                (n.autoStart ?? !0) && this.start());
        }
        stop() {
            ((this.stopped = !0),
                this.instanceId++,
                (this.inFlight = !1),
                (this.currentCancel = null),
                (this.intervalId &&= (clearInterval(this.intervalId), null)),
                (this.timeoutId &&= (clearTimeout(this.timeoutId), null)));
        }
        start() {
            if (!(typeof window > `u`)) {
                if ((this.stop(), (this.stopped = !1), this.mode === `rest`)) {
                    this.scheduleNext();
                    return;
                }
                this.intervalId = window.setInterval(
                    () => this.tick(),
                    this.interval,
                );
            }
        }
        isInBackground(e) {
            ((this.throttle = !this.keepAlive && e),
                this.throttle && (this.cbCount = 0));
        }
        scheduleNext() {
            this.stopped ||
                (this.timeoutId = window.setTimeout(() => {
                    ((this.timeoutId = null), this.tick());
                }, this.interval));
        }
        tick() {
            (!this.throttle || this.cbCount % 10 == 0
                ? this.fire()
                : this.mode === `rest` && this.scheduleNext(),
                this.throttle && this.cbCount++);
        }
        fire() {
            this.inFlight && this.mode === `cancel` && this.currentCancel?.();
            let e = this.instanceId;
            this.cb({
                onStart: (t) => {
                    e === this.instanceId &&
                        ((this.inFlight = !0), (this.currentCancel = t));
                },
                onFinish: () => {
                    e === this.instanceId &&
                        ((this.inFlight = !1),
                        (this.currentCancel = null),
                        this.mode === `rest` && this.scheduleNext());
                },
            });
        }
    },
    dr = new (class {
        polls = [];
        constructor() {
            this.setupVisibilityListener();
        }
        get count() {
            return this.polls.length;
        }
        add(e, t, n) {
            let r = new ur(e, t, n);
            return (
                this.polls.push(r),
                {
                    stop: () => r.stop(),
                    start: () => r.start(),
                    destroy: () => {
                        (r.stop(),
                            (this.polls = this.polls.filter((e) => e !== r)));
                    },
                }
            );
        }
        clear() {
            (this.polls.forEach((e) => e.stop()), (this.polls = []));
        }
        setupVisibilityListener() {
            typeof document > `u` ||
                document.addEventListener(
                    `visibilitychange`,
                    () => {
                        this.polls.forEach((e) =>
                            e.isInBackground(document.hidden),
                        );
                    },
                    !1,
                );
        }
    })(),
    M = new (class {
        requestHandlers = [];
        responseHandlers = [];
        errorHandlers = [];
        onRequest(e) {
            return (
                this.requestHandlers.push(e),
                () => {
                    this.requestHandlers = this.requestHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        onResponse(e) {
            return (
                this.responseHandlers.push(e),
                () => {
                    this.responseHandlers = this.responseHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        onError(e) {
            return (
                this.errorHandlers.push(e),
                () => {
                    this.errorHandlers = this.errorHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        async processRequest(e) {
            let t = e;
            for (let e of this.requestHandlers) t = await e(t);
            return t;
        }
        async processResponse(e) {
            let t = e;
            for (let e of this.responseHandlers) t = await e(t);
            return t;
        }
        async processError(e) {
            for (let t of this.errorHandlers) await t(e);
        }
    })(),
    fr = class extends Error {
        code;
        url;
        constructor(e, t, n) {
            (super(n ? `${e} (${n})` : e),
                (this.name = `HttpError`),
                (this.code = t),
                (this.url = n));
        }
    },
    pr = class extends fr {
        response;
        constructor(e, t, n) {
            (super(e, `ERR_HTTP_RESPONSE`, n),
                (this.name = `HttpResponseError`),
                (this.response = t));
        }
    },
    mr = class extends fr {
        constructor(e = `Request was cancelled`, t) {
            (super(e, `ERR_CANCELLED`, t), (this.name = `HttpCancelledError`));
        }
    },
    hr = class extends fr {
        cause;
        constructor(e, t, n) {
            (super(e, `ERR_NETWORK`, t),
                (this.name = `HttpNetworkError`),
                (this.cause = n));
        }
    };
function gr(e) {
    let t = document.cookie.match(RegExp(`(^|;\\s*)(` + e + `)=([^;]*)`));
    return t ? decodeURIComponent(t[3]) : null;
}
function _r(e) {
    let t = {};
    return (
        e
            .getAllResponseHeaders()
            .split(`\r
`)
            .forEach((e) => {
                let n = e.indexOf(`:`);
                n > 0 &&
                    (t[e.slice(0, n).toLowerCase().trim()] = e
                        .slice(n + 1)
                        .trim());
            }),
        t
    );
}
function vr(e) {
    return typeof FormData < `u` && e instanceof FormData;
}
function yr(e) {
    return (
        typeof e == `string` ||
        vr(e) ||
        (typeof Blob < `u` && e instanceof Blob) ||
        (typeof ArrayBuffer < `u` && e instanceof ArrayBuffer) ||
        (typeof ArrayBuffer < `u` && ArrayBuffer.isView(e)) ||
        (typeof URLSearchParams < `u` && e instanceof URLSearchParams)
    );
}
function br(e, t) {
    if (!t.headers) return;
    let n = vr(t.data);
    Object.entries(t.headers).forEach(([t, r]) => {
        (t.toLowerCase() !== `content-type` || !n) &&
            e.setRequestHeader(t, String(r));
    });
}
function xr(e, t) {
    if (!t || Object.keys(t).length === 0) return e;
    let [n] = qn(`get`, e, t);
    return n;
}
var Sr = class {
        xsrfCookieName;
        xsrfHeaderName;
        constructor(e = {}) {
            ((this.xsrfCookieName = e.xsrfCookieName ?? `XSRF-TOKEN`),
                (this.xsrfHeaderName = e.xsrfHeaderName ?? `X-XSRF-TOKEN`));
        }
        async request(e) {
            let t = await M.processRequest(e);
            try {
                let e = await this.doRequest(t);
                return await M.processResponse(e);
            } catch (e) {
                throw (
                    (e instanceof pr || e instanceof hr || e instanceof mr) &&
                        (await M.processError(e)),
                    e
                );
            }
        }
        doRequest(e) {
            return new Promise((t, n) => {
                let r = new XMLHttpRequest(),
                    i = xr(e.url, e.params);
                r.open(e.method.toUpperCase(), i, !0);
                let a = gr(this.xsrfCookieName);
                (a && r.setRequestHeader(this.xsrfHeaderName, a),
                    Object.keys(e.headers ?? {}).some(
                        (e) => e.toLowerCase() === `x-requested-with`,
                    ) ||
                        r.setRequestHeader(
                            `X-Requested-With`,
                            `XMLHttpRequest`,
                        ));
                let o = null;
                (e.data !== null &&
                    e.data !== void 0 &&
                    (yr(e.data)
                        ? (o = e.data)
                        : typeof e.data == `object`
                          ? ((o = JSON.stringify(e.data)),
                            !e.headers?.[`Content-Type`] &&
                                !e.headers?.[`content-type`] &&
                                r.setRequestHeader(
                                    `Content-Type`,
                                    `application/json`,
                                ))
                          : (o = String(e.data))),
                    br(r, e),
                    e.onUploadProgress &&
                        (r.upload.onprogress = (t) => {
                            let n = t.lengthComputable
                                ? t.loaded / t.total
                                : void 0;
                            e.onUploadProgress({
                                progress: n,
                                percentage: n ? Math.round(n * 100) : 0,
                                loaded: t.loaded,
                                total: t.lengthComputable ? t.total : void 0,
                            });
                        }),
                    e.signal &&
                        e.signal.addEventListener(`abort`, () => r.abort()),
                    (r.onabort = () =>
                        n(new mr(`Request was cancelled`, e.url))),
                    (r.onerror = () => n(new hr(`Network error`, e.url))),
                    (r.onload = () => {
                        let i = {
                            status: r.status,
                            data: r.responseText,
                            headers: _r(r),
                        };
                        r.status >= 400
                            ? n(
                                  new pr(
                                      `Request failed with status ${r.status}`,
                                      i,
                                      e.url,
                                  ),
                              )
                            : t(i);
                    }),
                    r.send(o));
            });
        }
    },
    Cr = new Sr();
function wr(e) {
    return !(`request` in e);
}
var Tr = {
        getClient() {
            return Cr;
        },
        setClient(e) {
            if (!wr(e)) {
                Cr = e;
                return;
            }
            ((Cr = new Sr(e)),
                e.xsrfCookieName && k.withXsrfCookieName(e.xsrfCookieName),
                e.xsrfHeaderName && k.withXsrfHeaderName(e.xsrfHeaderName));
        },
        onRequest: M.onRequest.bind(M),
        onResponse: M.onResponse.bind(M),
        onError: M.onError.bind(M),
        processRequest: M.processRequest.bind(M),
        processResponse: M.processResponse.bind(M),
        processError: M.processError.bind(M),
    },
    Er = new (class {
        requestHandlers = [];
        responseHandlers = [];
        onVisitRequest(e) {
            return (
                this.requestHandlers.push(e),
                () => {
                    this.requestHandlers = this.requestHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        onVisitResponse(e) {
            return (
                this.responseHandlers.push(e),
                () => {
                    this.responseHandlers = this.responseHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        async processRequest(e, t) {
            let n = t;
            for (let t of this.requestHandlers) n = await t(e, n);
            return n;
        }
        async processResponse(e, t) {
            let n = t;
            for (let t of this.responseHandlers) n = await t(e, n);
            return n;
        }
    })();
function Dr() {
    typeof window > `u` || (window.__inertia_interceptors__ = Er);
}
var Or = class e {
        callbacks = [];
        params;
        constructor(e) {
            if (!e.prefetch) this.params = e;
            else {
                let t = {
                    onBefore: this.wrapCallback(e, `onBefore`),
                    onBeforeUpdate: this.wrapCallback(e, `onBeforeUpdate`),
                    onStart: this.wrapCallback(e, `onStart`),
                    onProgress: this.wrapCallback(e, `onProgress`),
                    onFinish: this.wrapCallback(e, `onFinish`),
                    onCancel: this.wrapCallback(e, `onCancel`),
                    onSuccess: this.wrapCallback(e, `onSuccess`),
                    onError: this.wrapCallback(e, `onError`),
                    onHttpException: this.wrapCallback(e, `onHttpException`),
                    onNetworkError: this.wrapCallback(e, `onNetworkError`),
                    onFlash: this.wrapCallback(e, `onFlash`),
                    onCancelToken: this.wrapCallback(e, `onCancelToken`),
                    onPrefetched: this.wrapCallback(e, `onPrefetched`),
                    onPrefetching: this.wrapCallback(e, `onPrefetching`),
                };
                this.params = {
                    ...e,
                    ...t,
                    onPrefetchResponse: e.onPrefetchResponse || (() => {}),
                    onPrefetchError: e.onPrefetchError || (() => {}),
                };
            }
        }
        static create(t) {
            return new e(t);
        }
        data() {
            return this.params.method === `get` ? null : this.params.data;
        }
        queryParams() {
            return this.params.method === `get` ? this.params.data : {};
        }
        isPartial() {
            return (
                this.params.only.length > 0 ||
                this.params.except.length > 0 ||
                this.params.reset.length > 0
            );
        }
        isPrefetch() {
            return this.params.prefetch === !0;
        }
        isDeferredPropsRequest() {
            return this.params.deferredProps === !0;
        }
        isPollRequest() {
            return this.params.poll === !0;
        }
        onCancelToken(e) {
            this.params.onCancelToken({ cancel: e });
        }
        markAsFinished() {
            ((this.params.completed = !0),
                (this.params.cancelled = !1),
                (this.params.interrupted = !1));
        }
        markAsCancelled({ cancelled: e = !0, interrupted: t = !1 }) {
            (this.params.onCancel(),
                (this.params.completed = !1),
                (this.params.cancelled = e),
                (this.params.interrupted = t));
        }
        wasCancelledAtAll() {
            return this.params.cancelled || this.params.interrupted;
        }
        onFinish() {
            this.params.onFinish(this.params);
        }
        onStart() {
            this.params.onStart(this.params);
        }
        onPrefetching() {
            this.params.onPrefetching(this.params);
        }
        onPrefetchResponse(e) {
            this.params.onPrefetchResponse && this.params.onPrefetchResponse(e);
        }
        onPrefetchError(e) {
            this.params.onPrefetchError && this.params.onPrefetchError(e);
        }
        all() {
            return this.params;
        }
        headers() {
            let e = { ...this.params.headers };
            this.isPartial() &&
                (e[`X-Inertia-Partial-Component`] = A.get().component);
            let t = this.params.only.concat(this.params.reset);
            return (
                t.length > 0 && (e[`X-Inertia-Partial-Data`] = t.join(`,`)),
                this.params.except.length > 0 &&
                    (e[`X-Inertia-Partial-Except`] =
                        this.params.except.join(`,`)),
                this.params.reset.length > 0 &&
                    (e[`X-Inertia-Reset`] = this.params.reset.join(`,`)),
                this.params.errorBag &&
                    this.params.errorBag.length > 0 &&
                    (e[`X-Inertia-Error-Bag`] = this.params.errorBag),
                e
            );
        }
        setPreserveOptions(t) {
            ((this.params.preserveScroll = e.resolvePreserveOption(
                this.params.preserveScroll,
                t,
            )),
                (this.params.preserveState = e.resolvePreserveOption(
                    this.params.preserveState,
                    t,
                )));
        }
        runCallbacks() {
            this.callbacks.forEach(({ name: e, args: t }) => {
                this.params[e](...t);
            });
        }
        merge(e) {
            this.params = { ...this.params, ...e };
        }
        wrapCallback(e, t) {
            return (...n) => {
                (this.recordCallback(t, n), e[t](...n));
            };
        }
        recordCallback(e, t) {
            this.callbacks.push({ name: e, args: t });
        }
        static resolvePreserveOption(e, t) {
            return typeof e == `function`
                ? e(t)
                : e === `errors`
                  ? Object.keys(t.props.errors || {}).length > 0
                  : e;
        }
    },
    kr = {
        createIframeAndPage(e) {
            typeof e == `object` &&
                (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
            let t = document.createElement(`html`);
            ((t.innerHTML = e),
                t
                    .querySelectorAll(`a`)
                    .forEach((e) => e.setAttribute(`target`, `_top`)));
            let n = document.createElement(`iframe`);
            return (
                (n.style.backgroundColor = `white`),
                (n.style.borderRadius = `5px`),
                (n.style.width = `100%`),
                (n.style.height = `100%`),
                n.setAttribute(`sandbox`, `allow-scripts`),
                { iframe: n, page: t }
            );
        },
        show(e) {
            let { iframe: t, page: n } = this.createIframeAndPage(e);
            ((t.style.boxSizing = `border-box`), (t.style.display = `block`));
            let r = document.createElement(`dialog`);
            ((r.id = `inertia-error-dialog`),
                Object.assign(r.style, {
                    width: `calc(100vw - 100px)`,
                    height: `calc(100vh - 100px)`,
                    padding: `0`,
                    margin: `auto`,
                    border: `none`,
                    backgroundColor: `transparent`,
                }));
            let i = document.createElement(`style`);
            i.textContent = `
      dialog#inertia-error-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
      }

      dialog#inertia-error-dialog:focus {
        outline: none;
      }
    `;
            let a = Ut.get(`nonce`);
            (a && (i.nonce = a),
                document.head.appendChild(i),
                r.addEventListener(`click`, (e) => {
                    e.target === r && r.close();
                }),
                r.addEventListener(`close`, () => {
                    (i.remove(), r.remove());
                }),
                r.appendChild(t),
                document.body.prepend(r),
                r.showModal(),
                r.focus(),
                (t.srcdoc = n.outerHTML));
        },
    },
    Ar = (e, t) => e === t || e.startsWith(`${t}.`),
    jr = (e, t) => {
        let { only: n, except: r } = e;
        return !(
            (n.length === 0 && r.length === 0) ||
            (n.length > 0 && !n.some((e) => Ar(t, e))) ||
            (r.length > 0 && r.some((e) => Ar(t, e)))
        );
    },
    Mr = new tr(),
    Nr = class e {
        constructor(e, t, n) {
            ((this.requestParams = e),
                (this.response = t),
                (this.originatingPage = n));
        }
        requestParams;
        response;
        originatingPage;
        wasPrefetched = !1;
        processed = !1;
        static create(t, n, r) {
            return new e(t, n, r);
        }
        isProcessed() {
            return this.processed;
        }
        async handlePrefetch() {
            Xn(this.requestParams.all().url, window.location) && this.handle();
        }
        async handle() {
            return Mr.add(() => this.process());
        }
        async process() {
            if (this.requestParams.all().prefetch)
                return (
                    (this.wasPrefetched = !0),
                    (this.requestParams.all().prefetch = !1),
                    this.requestParams
                        .all()
                        .onPrefetched(this.response, this.requestParams.all()),
                    rn(this.response, this.requestParams.all()),
                    Promise.resolve()
                );
            if (
                (this.requestParams.runCallbacks(),
                (this.processed = !0),
                !this.isInertiaResponse())
            )
                return this.handleNonInertiaResponse();
            if (this.isHttpException()) {
                let e = {
                    ...this.response,
                    data: this.getDataFromResponse(this.response.data),
                };
                if (
                    this.requestParams.all().onHttpException(e) === !1 ||
                    !Xt(e)
                )
                    return;
            }
            (await j.processQueue(),
                (j.preserveUrl = this.requestParams.all().preserveUrl),
                await this.setPage());
            let { flash: e } = A.get();
            Object.keys(e).length > 0 &&
                !this.requestParams.isDeferredPropsRequest() &&
                (on(e), this.requestParams.all().onFlash(e));
            let t = A.get().props.errors || {};
            if (Object.keys(t).length > 0) {
                let e = this.getScopedErrors(t);
                return (
                    qt(e, {
                        page: A.get(),
                        visitId: this.requestParams.all().id,
                    }),
                    this.requestParams.all().onError(e)
                );
            }
            (I.flushByCacheTags(
                this.requestParams.all().invalidateCacheTags || [],
            ),
                this.wasPrefetched || I.flush(A.get().url),
                nn(A.get(), { visitId: this.requestParams.all().id }),
                await this.requestParams.all().onSuccess(A.get()),
                (j.preserveUrl = !1));
        }
        mergeParams(e) {
            this.requestParams.merge(e);
        }
        getPageResponse() {
            let e = this.getDataFromResponse(this.response.data);
            return typeof e == `object`
                ? (this.response.data = {
                      ...e,
                      flash: e.flash ?? {},
                      rescuedProps: e.rescuedProps ?? [],
                  })
                : (this.response.data = e);
        }
        async handleNonInertiaResponse() {
            if (this.isInertiaRedirect()) {
                I.visit(this.getHeader(`x-inertia-redirect`), {
                    ...this.requestParams.all(),
                    method: `get`,
                    data: {},
                });
                return;
            }
            if (this.isLocationVisit()) {
                let e = Gn(this.getHeader(`x-inertia-location`));
                return (
                    Yn(this.requestParams.all().url, e), this.locationVisit(e)
                );
            }
            let e = {
                ...this.response,
                data: this.getDataFromResponse(this.response.data),
            };
            if (this.requestParams.all().onHttpException(e) !== !1 && Xt(e))
                return kr.show(e.data);
        }
        isInertiaResponse() {
            return this.hasHeader(`x-inertia`);
        }
        isHttpException() {
            return this.response.status >= 400;
        }
        hasStatus(e) {
            return this.response.status === e;
        }
        getHeader(e) {
            return this.response.headers[e];
        }
        hasHeader(e) {
            return this.getHeader(e) !== void 0;
        }
        isInertiaRedirect() {
            return this.hasStatus(409) && this.hasHeader(`x-inertia-redirect`);
        }
        isLocationVisit() {
            return this.hasStatus(409) && this.hasHeader(`x-inertia-location`);
        }
        locationVisit(e) {
            try {
                if (typeof window > `u`) return;
                let t = this.getHeader(`x-inertia-version`),
                    n = !!t && t !== A.get().version;
                if (!sn(e, n) || (n && this.requestParams.all().async)) return;
                (cn.set(cn.locationVisitKey, {
                    preserveScroll:
                        this.requestParams.all().preserveScroll === !0,
                }),
                    Xn(window.location, e)
                        ? window.location.reload()
                        : (window.location.href = e.href));
            } catch {
                return !1;
            }
        }
        async setPage() {
            let e = this.getPageResponse();
            return this.shouldSetPage(e)
                ? ((this.response = await Er.processResponse(
                      this.requestParams.all(),
                      this.response,
                  )),
                  this.mergeProps(e),
                  A.mergeOncePropsIntoResponse(e),
                  this.preserveOptimisticProps(e),
                  this.preserveEqualProps(e),
                  await this.setRememberedState(e),
                  this.requestParams.setPreserveOptions(e),
                  (e.url = j.preserveUrl ? A.get().url : this.pageUrl(e)),
                  this.requestParams.all().onBeforeUpdate(e),
                  Zt(e),
                  A.set(e, {
                      replace: this.requestParams.all().replace,
                      preserveScroll: this.requestParams.all().preserveScroll,
                      preserveState: this.requestParams.all().preserveState,
                      viewTransition: this.requestParams.all().viewTransition,
                      cached: this.requestParams.all().cached,
                      visitId: this.requestParams.all().id,
                  }))
                : Promise.resolve();
        }
        getDataFromResponse(e) {
            if (typeof e != `string`) return e;
            try {
                return JSON.parse(e);
            } catch {
                return e;
            }
        }
        shouldSetPage(e) {
            if (
                !this.requestParams.all().async ||
                this.originatingPage.component !== e.component
            )
                return !0;
            if (this.originatingPage.component !== A.get().component) return !1;
            let t = Gn(this.originatingPage.url),
                n = Gn(A.get().url);
            return t.origin === n.origin && t.pathname === n.pathname;
        }
        pageUrl(e) {
            let t = Gn(e.url);
            return (
                e.preserveFragment
                    ? (t.hash = this.requestParams.all().url.hash)
                    : Yn(this.requestParams.all().url, t),
                t.pathname + t.search + t.hash
            );
        }
        preserveOptimisticProps(e) {
            if (I.hasPendingOptimistic())
                for (let t of Object.keys(e.props))
                    A.hasBaseline(t) &&
                        (A.updateBaseline(t, e.props[t]),
                        (e.props[t] = A.get().props[t]));
        }
        preserveEqualProps(e) {
            if (e.component !== A.get().component) return;
            let t = A.get().props;
            Object.entries(e.props).forEach(([n, r]) => {
                ye(r, t[n]) && (e.props[n] = t[n]);
            });
        }
        mergeProps(e) {
            if (
                !this.requestParams.isPartial() ||
                e.component !== A.get().component
            )
                return;
            let t = e.mergeProps || [],
                n = e.prependProps || [],
                r = e.deepMergeProps || [],
                i = e.matchPropsOn || [],
                a = (t, n) => {
                    let r = O(A.get().props, t),
                        a = O(e.props, t);
                    if (Array.isArray(a)) {
                        let o = this.mergeOrMatchItems(r || [], a, t, i, n);
                        Je(e.props, t, o);
                    } else if (typeof a == `object` && a) {
                        let n = { ...(r || {}), ...a };
                        Je(e.props, t, n);
                    }
                };
            (t.forEach((e) => a(e, !0)),
                n.forEach((e) => a(e, !1)),
                r.forEach((t) => {
                    let n = O(A.get().props, t),
                        r = O(e.props, t),
                        a = (e, t, n) =>
                            Array.isArray(t)
                                ? this.mergeOrMatchItems(e, t, n, i)
                                : typeof t == `object` && t
                                  ? Object.keys(t).reduce(
                                        (r, i) => (
                                            (r[i] = a(
                                                e ? e[i] : void 0,
                                                t[i],
                                                `${n}.${i}`,
                                            )),
                                            r
                                        ),
                                        { ...e },
                                    )
                                  : t;
                    Je(e.props, t, a(n, r, t));
                }));
            let o = new Set(
                [
                    ...this.requestParams.all().only,
                    ...this.requestParams.all().except,
                ]
                    .filter((e) => e.includes(`.`))
                    .map((e) => e.split(`.`)[0]),
            );
            for (let t of o) {
                let n = A.get().props[t];
                this.isObject(n) &&
                    this.isObject(e.props[t]) &&
                    (e.props[t] = this.deepMergeObjects(n, e.props[t]));
            }
            ((e.props = { ...A.get().props, ...e.props }),
                this.shouldPreserveErrors(e) &&
                    (e.props.errors = A.get().props.errors),
                A.get().scrollProps &&
                    (e.scrollProps = {
                        ...(A.get().scrollProps || {}),
                        ...(e.scrollProps || {}),
                    }),
                A.hasOnceProps() &&
                    (e.onceProps = {
                        ...(A.get().onceProps || {}),
                        ...(e.onceProps || {}),
                    }),
                this.requestParams.isDeferredPropsRequest() &&
                    (e.flash = { ...A.get().flash }));
            let s = A.get().initialDeferredProps;
            (s && Object.keys(s).length > 0 && (e.initialDeferredProps = s),
                (e.rescuedProps = this.mergeRescuedProps(e)));
        }
        mergeRescuedProps(e) {
            let t = A.get().rescuedProps ?? [],
                n = e.rescuedProps ?? [],
                r = new Set(t.filter((e) => !jr(this.requestParams.all(), e)));
            return (n.forEach((e) => r.add(e)), Array.from(r));
        }
        shouldPreserveErrors(e) {
            if (!this.requestParams.all().preserveErrors) return !1;
            let t = A.get().props.errors;
            if (!t || Object.keys(t).length === 0) return !1;
            let n = e.props.errors;
            return !(n && Object.keys(n).length > 0);
        }
        isObject(e) {
            return e && typeof e == `object` && !Array.isArray(e);
        }
        deepMergeObjects(e, t) {
            let n = { ...e };
            for (let r of Object.keys(t)) {
                let i = e[r],
                    a = t[r];
                n[r] =
                    this.isObject(i) && this.isObject(a)
                        ? this.deepMergeObjects(i, a)
                        : a;
            }
            return n;
        }
        mergeOrMatchItems(e, t, n, r, i = !0) {
            let a = Array.isArray(e) ? e : [],
                o = r.find((e) => e.split(`.`).slice(0, -1).join(`.`) === n);
            if (!o) return i ? [...a, ...t] : [...t, ...a];
            let s = o.split(`.`).pop() || ``,
                c = new Map();
            return (
                t.forEach((e) => {
                    this.hasUniqueProperty(e, s) && c.set(e[s], e);
                }),
                i
                    ? this.appendWithMatching(a, t, c, s)
                    : this.prependWithMatching(a, t, c, s)
            );
        }
        appendWithMatching(e, t, n, r) {
            let i = e.map((e) =>
                    this.hasUniqueProperty(e, r) && n.has(e[r])
                        ? n.get(e[r])
                        : e,
                ),
                a = t.filter(
                    (t) =>
                        !this.hasUniqueProperty(t, r) ||
                        !e.some(
                            (e) =>
                                this.hasUniqueProperty(e, r) && e[r] === t[r],
                        ),
                );
            return [...i, ...a];
        }
        prependWithMatching(e, t, n, r) {
            let i = e.filter(
                (e) => !this.hasUniqueProperty(e, r) || !n.has(e[r]),
            );
            return [...t, ...i];
        }
        hasUniqueProperty(e, t) {
            return e && typeof e == `object` && t in e;
        }
        async setRememberedState(e) {
            let t = await j.getState(j.rememberedState, {});
            this.requestParams.all().preserveState &&
                t &&
                e.component === A.get().component &&
                (e.rememberedState = t);
        }
        getScopedErrors(e) {
            return this.requestParams.all().errorBag
                ? e[this.requestParams.all().errorBag || ``] || {}
                : e;
        }
    },
    Pr = class e {
        constructor(e, t, { optimistic: n = !1 } = {}) {
            ((this.page = t),
                (this.requestParams = Or.create(e)),
                (this.cancelToken = new AbortController()),
                (this.optimistic = n));
        }
        page;
        response;
        cancelToken;
        requestParams;
        requestHasFinished = !1;
        optimistic;
        static create(t, n, r) {
            return new e(t, n, r);
        }
        isPrefetch() {
            return this.requestParams.isPrefetch();
        }
        getUrl() {
            return this.requestParams.all().url;
        }
        isOptimistic() {
            return this.optimistic;
        }
        isPendingOptimistic() {
            return (
                this.isOptimistic() &&
                (!this.response || !this.response.isProcessed())
            );
        }
        async send() {
            (this.requestParams.onCancelToken(() => {
                this.response || this.cancel({ cancelled: !0 });
            }),
                tn(this.requestParams.all()),
                this.requestParams.onStart(),
                this.requestParams.all().prefetch &&
                    (this.requestParams.onPrefetching(),
                    an(this.requestParams.all())));
            let e = this.requestParams.all().prefetch,
                t = {
                    method: this.requestParams.all().method,
                    url: Jn(this.requestParams.all().url).href,
                    data: this.requestParams.data(),
                    signal: this.cancelToken.signal,
                    headers: this.getHeaders(),
                    onUploadProgress: this.onProgress.bind(this),
                },
                n = await Er.processRequest(this.requestParams.all(), t);
            return Tr.getClient()
                .request(n)
                .then(
                    (e) => (
                        (this.response = Nr.create(
                            this.requestParams,
                            e,
                            this.page,
                        )),
                        this.response.handle()
                    ),
                )
                .catch((e) =>
                    e instanceof pr
                        ? ((this.response = Nr.create(
                              this.requestParams,
                              e.response,
                              this.page,
                          )),
                          this.response.handle())
                        : Promise.reject(e),
                )
                .catch((t) => {
                    if (
                        !(t instanceof mr) &&
                        this.requestParams.all().onNetworkError(t) !== !1 &&
                        Jt(t)
                    )
                        return (
                            e && this.requestParams.onPrefetchError(t),
                            Promise.reject(t)
                        );
                })
                .finally(() => {
                    (this.finish(),
                        e &&
                            this.response &&
                            this.requestParams.onPrefetchResponse(
                                this.response,
                            ));
                });
        }
        finish() {
            this.requestParams.wasCancelledAtAll() ||
                (this.requestParams.markAsFinished(), this.fireFinishEvents());
        }
        fireFinishEvents() {
            this.requestHasFinished ||
                ((this.requestHasFinished = !0),
                Yt(this.requestParams.all()),
                this.requestParams.onFinish());
        }
        cancel({ cancelled: e = !1, interrupted: t = !1 }) {
            this.requestHasFinished ||
                (this.cancelToken.abort(),
                this.requestParams.markAsCancelled({
                    cancelled: e,
                    interrupted: t,
                }),
                this.fireFinishEvents());
        }
        onProgress(e) {
            this.requestParams.data() instanceof FormData &&
                (en(e), this.requestParams.all().onProgress(e));
        }
        getHeaders() {
            let e = {
                    ...this.requestParams.headers(),
                    Accept: `text/html, application/xhtml+xml`,
                    'X-Requested-With': `XMLHttpRequest`,
                    'X-Inertia': !0,
                },
                t = A.get();
            t.version && (e[`X-Inertia-Version`] = t.version);
            let n = Object.entries(t.onceProps || {})
                .filter(([, e]) =>
                    O(t.props, e.prop) === void 0
                        ? !1
                        : !e.expiresAt || e.expiresAt > Date.now(),
                )
                .map(([e]) => e);
            return (
                n.length > 0 &&
                    (e[`X-Inertia-Except-Once-Props`] = n.join(`,`)),
                e
            );
        }
    },
    Fr = class {
        requests = [];
        maxConcurrent;
        interruptible;
        constructor({ maxConcurrent: e, interruptible: t }) {
            ((this.maxConcurrent = e), (this.interruptible = t));
        }
        send(e) {
            (this.requests.push(e),
                e.send().finally(() => {
                    this.requests = this.requests.filter((t) => t !== e);
                }));
        }
        interruptInFlight() {
            this.cancel({ interrupted: !0 }, !1);
        }
        cancelInFlight(e = {}) {
            let t =
                typeof e == `function`
                    ? e
                    : (t) => {
                          let { prefetch: n = !0, optimistic: r = !0 } = e;
                          return (
                              (n || !t.isPrefetch()) && (r || !t.isOptimistic())
                          );
                      };
            this.requests.filter(t).forEach((e) => e.cancel({ cancelled: !0 }));
        }
        cancel({ cancelled: e = !1, interrupted: t = !1 } = {}, n = !1) {
            (!n && !this.shouldCancel()) ||
                this.requests.shift()?.cancel({ cancelled: e, interrupted: t });
        }
        shouldCancel() {
            return (
                this.interruptible && this.requests.length >= this.maxConcurrent
            );
        }
        hasPendingOptimistic() {
            return this.requests.some((e) => e.isPendingOptimistic());
        }
    },
    Ir = () => {},
    Lr = class {
        syncRequestStream = new Fr({ maxConcurrent: 1, interruptible: !0 });
        asyncRequestStream = new Fr({
            maxConcurrent: 1 / 0,
            interruptible: !1,
        });
        clientVisitQueue = new tr();
        pendingOptimisticCallback = void 0;
        init({
            initialPage: e,
            resolveComponent: t,
            swapComponent: n,
            onFlash: r,
        }) {
            (A.init({
                initialPage: e,
                resolveComponent: t,
                swapComponent: n,
                onFlash: r,
            }),
                lr.handle(),
                or.init(),
                or.on(`missingHistoryItem`, () => {
                    typeof window < `u` &&
                        this.visit(window.location.href, {
                            preserveState: !0,
                            preserveScroll: !0,
                            replace: !0,
                        });
                }),
                or.on(`loadDeferredProps`, (e) => {
                    this.loadDeferredProps(e);
                }),
                or.on(`historyQuotaExceeded`, (e) => {
                    window.location.href = e;
                }));
        }
        optimistic(e) {
            return ((this.pendingOptimisticCallback = e), this);
        }
        get(e, t = {}, n = {}) {
            return this.visit(e, { ...n, method: `get`, data: t });
        }
        post(e, t = {}, n = {}) {
            return this.visit(e, {
                preserveState: !0,
                ...n,
                method: `post`,
                data: t,
            });
        }
        put(e, t = {}, n = {}) {
            return this.visit(e, {
                preserveState: !0,
                ...n,
                method: `put`,
                data: t,
            });
        }
        patch(e, t = {}, n = {}) {
            return this.visit(e, {
                preserveState: !0,
                ...n,
                method: `patch`,
                data: t,
            });
        }
        delete(e, t = {}) {
            return this.visit(e, { preserveState: !0, ...t, method: `delete` });
        }
        reload(e = {}) {
            return this.doReload(e);
        }
        doReload(e = {}) {
            if (!(typeof window > `u`))
                return this.visit(window.location.href, {
                    ...e,
                    preserveScroll: !0,
                    preserveState: !0,
                    async: !0,
                    headers: {
                        ...(e.headers || {}),
                        'Cache-Control': `no-cache`,
                    },
                });
        }
        remember(e, t = `default`) {
            j.remember(e, t);
        }
        restore(e = `default`) {
            return j.restore(e);
        }
        on(e, t) {
            return typeof window > `u` ? () => {} : or.onGlobalEvent(e, t);
        }
        once(e, t) {
            if (typeof window > `u`) return () => {};
            let n = this.on(e, (e) => (n(), t(e)));
            return n;
        }
        hasPendingOptimistic() {
            return this.asyncRequestStream.hasPendingOptimistic();
        }
        get activePolls() {
            return dr.count;
        }
        cancelAll({ async: e = !0, prefetch: t = !0, sync: n = !0 } = {}) {
            (e && this.asyncRequestStream.cancelInFlight({ prefetch: t }),
                n && this.syncRequestStream.cancelInFlight());
        }
        poll(e, t = {}, n = {}) {
            return dr.add(
                e,
                ({ onStart: e, onFinish: n }) => {
                    let r = typeof t == `function` ? t() : t;
                    this.doReload({
                        poll: !0,
                        preserveErrors: !0,
                        ...r,
                        onCancelToken: (t) => {
                            (e(t.cancel), r.onCancelToken?.(t));
                        },
                        onFinish: (e) => {
                            (n(), r.onFinish?.(e));
                        },
                    });
                },
                {
                    autoStart: n.autoStart ?? !0,
                    keepAlive: n.keepAlive ?? !1,
                    mode: n.mode,
                },
            );
        }
        visit(e, t = {}) {
            ((t.optimistic = t.optimistic ?? this.pendingOptimisticCallback),
                (this.pendingOptimisticCallback = void 0),
                t.optimistic && (t.async = t.async ?? !0));
            let n = this.getPendingVisit(e, {
                    ...t,
                    showProgress:
                        t.showProgress ?? (!t.async || !!t.optimistic),
                }),
                r = this.getVisitEvents(t);
            if (r.onBefore(n) === !1 || !Kt(n)) return;
            let i = Gn(A.get().url);
            ((n.only.length > 0 || n.except.length > 0 || n.reset.length > 0
                ? Zn(n.url, i)
                : Xn(n.url, i)) ||
                this.asyncRequestStream.cancelInFlight(
                    (e) =>
                        !e.isPrefetch() &&
                        !e.isOptimistic() &&
                        Zn(e.getUrl(), i),
                ),
                n.async || this.syncRequestStream.interruptInFlight(),
                t.optimistic && this.applyOptimisticUpdate(t.optimistic, r),
                !A.isCleared() && !n.preserveUrl && An.save());
            let a = { ...n, ...r },
                o = () => {
                    let e = Tn.get(a);
                    e
                        ? (xi.reveal(e.inFlight), Tn.use(e, a))
                        : (xi.reveal(!0),
                          (n.async
                              ? this.asyncRequestStream
                              : this.syncRequestStream
                          ).send(
                              Pr.create(a, A.get(), {
                                  optimistic: !!t.optimistic,
                              }),
                          ));
                };
            (Array.isArray(n.component) &&
                (console.error(
                    `The "component" prop received an array of components (${n.component.join(`, `)}), but only a single component string is supported for instant visits. Pass an explicit component name instead.`,
                ),
                (n.component = null)),
                n.component
                    ? j.processQueue().then(() => {
                          this.performInstantSwap(n).then(() => {
                              ((a.preserveScroll = !0),
                                  (a.preserveState = !0),
                                  (a.replace = !0),
                                  (a.viewTransition = !1),
                                  o());
                          });
                      })
                    : o());
        }
        getCached(e, t = {}) {
            return Tn.findCached(this.getPrefetchParams(e, t));
        }
        flush(e, t = {}) {
            Tn.remove(this.getPrefetchParams(e, t));
        }
        flushAll() {
            Tn.removeAll();
        }
        flushByCacheTags(e) {
            Tn.removeByTags(Array.isArray(e) ? e : [e]);
        }
        getPrefetching(e, t = {}) {
            return Tn.findInFlight(this.getPrefetchParams(e, t));
        }
        prefetch(e, t = {}, n = {}) {
            if ((t.method ?? (Qn(e) ? e.method : `get`)) !== `get`)
                throw Error(`Prefetch requests must use the GET method`);
            let r = this.getPendingVisit(e, {
                ...t,
                async: !0,
                showProgress: !1,
                prefetch: !0,
                viewTransition: !1,
            });
            if (
                r.url.origin + r.url.pathname + r.url.search ===
                window.location.origin +
                    window.location.pathname +
                    window.location.search
            )
                return;
            let i = this.getVisitEvents(t);
            if (i.onBefore(r) === !1 || !Kt(r)) return;
            (xi.hide(), this.asyncRequestStream.interruptInFlight());
            let a = { ...r, ...i };
            new Promise((e) => {
                let t = () => {
                    A.get() ? e() : setTimeout(t, 50);
                };
                t();
            }).then(() => {
                Tn.add(
                    a,
                    (e) => {
                        this.asyncRequestStream.send(Pr.create(e, A.get()));
                    },
                    {
                        cacheFor: Ut.get(`prefetch.cacheFor`),
                        cacheTags: [],
                        ...n,
                    },
                );
            });
        }
        clearHistory() {
            j.clear();
        }
        decryptHistory() {
            return j.decrypt();
        }
        resolveComponent(e, t) {
            return A.resolve(e, t);
        }
        replace(e) {
            this.clientVisit(e, { replace: !0 });
        }
        replaceProp(e, t, n) {
            this.replace({
                preserveScroll: !0,
                preserveState: !0,
                props(n) {
                    return Sn(n, e, typeof t == `function` ? t(O(n, e), n) : t);
                },
                ...(n || {}),
            });
        }
        appendToProp(e, t, n) {
            this.replaceProp(
                e,
                (e, n) => {
                    let r = typeof t == `function` ? t(e, n) : t;
                    return (
                        Array.isArray(e) || (e = e === void 0 ? [] : [e]),
                        [...e, r]
                    );
                },
                n,
            );
        }
        prependToProp(e, t, n) {
            this.replaceProp(
                e,
                (e, n) => {
                    let r = typeof t == `function` ? t(e, n) : t;
                    return (
                        Array.isArray(e) || (e = e === void 0 ? [] : [e]),
                        [r, ...e]
                    );
                },
                n,
            );
        }
        push(e) {
            this.clientVisit(e);
        }
        flash(e, t) {
            let n = A.get().flash,
                r;
            if (typeof e == `function`) r = e(n);
            else if (typeof e == `string`) r = { ...n, [e]: t };
            else if (e && Object.keys(e).length) r = { ...n, ...e };
            else return;
            (A.setFlash(r), Object.keys(r).length && on(r));
        }
        clientVisit(e, { replace: t = !1 } = {}) {
            this.clientVisitQueue.add(() =>
                this.performClientVisit(e, { replace: t }),
            );
        }
        performClientVisit(e, { replace: t = !1 } = {}) {
            let n = A.get(),
                r =
                    typeof e.props == `function`
                        ? Object.fromEntries(
                              Object.values(n.onceProps ?? {}).map((e) => [
                                  e.prop,
                                  O(n.props, e.prop),
                              ]),
                          )
                        : {},
                i =
                    typeof e.props == `function`
                        ? e.props(n.props, r)
                        : (e.props ?? n.props),
                a = typeof e.flash == `function` ? e.flash(n.flash) : e.flash,
                {
                    viewTransition: o,
                    onError: s,
                    onFinish: c,
                    onFlash: l,
                    onSuccess: u,
                    ...d
                } = e,
                f = { ...n, ...d, flash: a ?? {}, props: i },
                p = Or.resolvePreserveOption(e.preserveScroll ?? !1, f),
                m = Or.resolvePreserveOption(e.preserveState ?? !1, f),
                h = this.createVisitId();
            return A.set(f, {
                replace: t,
                preserveScroll: p,
                preserveState: m,
                viewTransition: o,
                visitId: h,
            })
                .then(() => {
                    $t(A.get(), { replace: t, visitId: h });
                    let n = A.get().flash;
                    Object.keys(n).length > 0 && (on(n), l?.(n));
                    let r = A.get().props.errors || {};
                    if (Object.keys(r).length === 0) {
                        u?.(A.get());
                        return;
                    }
                    let i = e.errorBag ? r[e.errorBag || ``] || {} : r;
                    s?.(i);
                })
                .finally(() => c?.(e));
        }
        performInstantSwap(e) {
            let t = A.get(),
                n = Object.fromEntries(
                    (t.sharedProps ?? [])
                        .filter((e) => e in t.props)
                        .map((e) => [e, t.props[e]]),
                ),
                r =
                    typeof e.pageProps == `function`
                        ? e.pageProps(D(t.props), D(n))
                        : e.pageProps,
                i = r === null ? { ...n } : { ...r },
                a = this.preserveOncePropsOnInstantVisit(t, i),
                o = {
                    component: e.component,
                    url: e.url.pathname + e.url.search + e.url.hash,
                    version: t.version,
                    props: { ...i, errors: {} },
                    flash: {},
                    rescuedProps: [],
                    clearHistory: !1,
                    encryptHistory: t.encryptHistory,
                    sharedProps: t.sharedProps,
                    onceProps: a,
                    rememberedState: {},
                };
            return A.set(o, {
                replace: e.replace,
                preserveScroll: Or.resolvePreserveOption(e.preserveScroll, o),
                preserveState: !1,
                viewTransition: e.viewTransition,
                visitId: e.id,
            });
        }
        preserveOncePropsOnInstantVisit(e, t) {
            let n = {};
            return (
                Object.entries(e.onceProps ?? {}).forEach(([r, i]) => {
                    if (O(t, i.prop) !== void 0) return;
                    let a = O(e.props, i.prop);
                    a !== void 0 && (Je(t, i.prop, a), (n[r] = i));
                }),
                n
            );
        }
        getPrefetchParams(e, t) {
            return {
                ...this.getPendingVisit(e, {
                    ...t,
                    async: !0,
                    showProgress: !1,
                    prefetch: !0,
                    viewTransition: !1,
                }),
                ...this.getVisitEvents(t),
            };
        }
        createVisitId() {
            return cr();
        }
        getPendingVisit(e, t) {
            if (Qn(e)) {
                let n = e;
                ((e = n.url), (t.method = t.method ?? n.method));
            }
            let n = Ut.get(`visitOptions`),
                r = (n && n(e.toString(), D(t))) || {},
                i = {
                    method: `get`,
                    data: {},
                    replace: !1,
                    preserveScroll: !1,
                    preserveState: !1,
                    only: [],
                    except: [],
                    headers: {},
                    errorBag: ``,
                    forceFormData: !1,
                    queryStringArrayFormat: `brackets`,
                    async: !1,
                    showProgress: !0,
                    fresh: !1,
                    reset: [],
                    preserveUrl: !1,
                    preserveErrors: !1,
                    prefetch: !1,
                    invalidateCacheTags: [],
                    viewTransition: !1,
                    component: null,
                    pageProps: null,
                    cached: !1,
                    ...yn(t),
                    ...yn(r),
                },
                [a, o] = Kn(
                    e,
                    i.data,
                    i.method,
                    i.forceFormData,
                    i.queryStringArrayFormat,
                ),
                s = {
                    id: this.createVisitId(),
                    cancelled: !1,
                    completed: !1,
                    interrupted: !1,
                    ...i,
                    url: a,
                    data: o,
                };
            return (s.prefetch && (s.headers.Purpose = `prefetch`), s);
        }
        getVisitEvents(e) {
            return {
                onCancelToken: e.onCancelToken || Ir,
                onBefore: e.onBefore || Ir,
                onBeforeUpdate: e.onBeforeUpdate || Ir,
                onStart: e.onStart || Ir,
                onProgress: e.onProgress || Ir,
                onFinish: e.onFinish || Ir,
                onCancel: e.onCancel || Ir,
                onSuccess: e.onSuccess || Ir,
                onError: e.onError || Ir,
                onHttpException: e.onHttpException || Ir,
                onNetworkError: e.onNetworkError || Ir,
                onFlash: e.onFlash || Ir,
                onPrefetched: e.onPrefetched || Ir,
                onPrefetching: e.onPrefetching || Ir,
            };
        }
        applyOptimisticUpdate(e, t) {
            let n = A.get().props,
                r = e(D(n));
            if (!r) return;
            let i = [];
            for (let e of Object.keys(r)) ye(n[e], r[e]) || i.push(e);
            if (i.length === 0) return;
            let a = A.nextOptimisticId(),
                o = A.get().component;
            for (let e of i) A.setBaseline(e, D(n[e]));
            (A.registerOptimistic(a, e), A.setPropsQuietly({ ...n, ...r }));
            let s = !0,
                c = t.onSuccess;
            t.onSuccess = (e) => ((s = !1), c(e));
            let l = t.onFinish;
            t.onFinish = (e) => {
                if ((A.unregisterOptimistic(a), s && A.get().component === o)) {
                    let e = A.replayOptimistics();
                    Object.keys(e).length > 0 &&
                        A.setPropsQuietly({ ...A.get().props, ...e });
                }
                return (
                    A.pendingOptimisticCount() === 0 &&
                        A.clearOptimisticState(),
                    l(e)
                );
            };
        }
        loadDeferredProps(e) {
            e &&
                Object.values(e).forEach((e) => {
                    this.doReload({
                        only: e,
                        deferredProps: !0,
                        preserveErrors: !0,
                    });
                });
        }
    },
    Rr = class {
        static createWayfinderCallback(...e) {
            return () =>
                e.length === 1
                    ? Qn(e[0])
                        ? e[0]
                        : e[0]()
                    : {
                          method: typeof e[0] == `function` ? e[0]() : e[0],
                          url: typeof e[1] == `function` ? e[1]() : e[1],
                      };
        }
        static parseUseFormArguments(...e) {
            return e.length === 0
                ? { rememberKey: null, data: {}, precognitionEndpoint: null }
                : e.length === 1
                  ? {
                        rememberKey: null,
                        data: e[0],
                        precognitionEndpoint: null,
                    }
                  : e.length === 2
                    ? typeof e[0] == `string`
                        ? {
                              rememberKey: e[0],
                              data: e[1],
                              precognitionEndpoint: null,
                          }
                        : {
                              rememberKey: null,
                              data: e[1],
                              precognitionEndpoint:
                                  this.createWayfinderCallback(e[0]),
                          }
                    : {
                          rememberKey: null,
                          data: e[2],
                          precognitionEndpoint: this.createWayfinderCallback(
                              e[0],
                              e[1],
                          ),
                      };
        }
        static parseSubmitArguments(e, t) {
            return e.length === 3 || (e.length === 2 && typeof e[0] == `string`)
                ? { method: e[0], url: e[1], options: e[2] ?? {} }
                : Qn(e[0])
                  ? { ...e[0], options: e[1] ?? {} }
                  : { ...t(), options: e[0] ?? {} };
        }
        static mergeHeadersForValidation(e, t, n) {
            let r = (e) => (
                (e.headers = { ...(n ?? {}), ...(e.headers ?? {}) }),
                e
            );
            return (
                e && typeof e == `object` && !(`target` in e)
                    ? (e = r(e))
                    : t && typeof t == `object`
                      ? (t = r(t))
                      : typeof e == `string`
                        ? (t = r(t ?? {}))
                        : (e = r(e ?? {})),
                [e, t]
            );
        }
    },
    zr = `server`;
function Br(e, t) {
    return e.match(/\sdata-inertia(=|\s|>)/)
        ? e
        : e.replace(
              /^<([a-zA-Z][^\s/>]*)/,
              `<$1 data-inertia="server-head-${t}"`,
          );
}
function Vr(e, t) {
    if (!t) return [];
    let n = typeof t == `function` ? t(e) : e.props[t === !0 ? `head` : t];
    return Array.isArray(n)
        ? n
              .map((e) => (typeof e == `string` ? e.trim() : e))
              .filter((e) => typeof e == `string` && e.length > 0)
              .map(Br)
        : [];
}
var Hr = {
    buildDOMElement(e) {
        let t = document.createElement(`template`);
        t.innerHTML = e;
        let n = t.content.firstChild;
        if (!e.startsWith(`<script `)) return n;
        let r = document.createElement(`script`);
        return (
            (r.innerHTML = n.innerHTML),
            n.getAttributeNames().forEach((e) => {
                r.setAttribute(e, n.getAttribute(e) || ``);
            }),
            r
        );
    },
    isInertiaManagedElement(e) {
        return (
            e.nodeType === Node.ELEMENT_NODE &&
            e.getAttribute(`data-inertia`) !== null
        );
    },
    findMatchingElementIndex(e, t) {
        let n = e.getAttribute(`data-inertia`);
        return n === null
            ? -1
            : t.findIndex((e) => e.getAttribute(`data-inertia`) === n);
    },
    update: Wt(function (e) {
        let t = e.map((e) => this.buildDOMElement(e)),
            n = Array.from(document.head.childNodes).filter((e) =>
                this.isInertiaManagedElement(e),
            );
        (t.some((e) => e instanceof HTMLTitleElement) &&
            document.head
                .querySelectorAll(`title:not([data-inertia])`)
                .forEach((e) => e.remove()),
            n.forEach((e) => {
                let n = this.findMatchingElementIndex(e, t);
                if (n === -1) {
                    e.remove();
                    return;
                }
                let r = t.splice(n, 1)[0];
                r && !e.isEqualNode(r) && e.replaceWith(r);
            }),
            t.forEach((e) => {
                document.head.appendChild(e);
            }));
    }, 1),
};
function Ur(e, t, n, r = []) {
    let i = r.length ? { [zr]: r } : {},
        a = 0;
    function o() {
        let e = (a += 1);
        return ((i[e] = []), e.toString());
    }
    function s(e) {
        e !== null && Object.keys(i).indexOf(e) !== -1 && (delete i[e], f());
    }
    function c(e) {
        Object.keys(i).indexOf(e) === -1 && (i[e] = []);
    }
    function l(e, t = []) {
        (e !== null && Object.keys(i).indexOf(e) > -1 && (i[e] = t), f());
    }
    function u(e = []) {
        (e.length ? (i[zr] = e) : delete i[zr], f());
    }
    function d() {
        let e = t(``),
            n = i[zr] || [],
            r = Object.keys(i)
                .filter((e) => e !== zr)
                .flatMap((e) => i[e]),
            a = {
                ...(e ? { title: `<title data-inertia="">${e}</title>` } : {}),
            },
            o = n.concat(r).reduce((e, n) => {
                if (n.indexOf(`<`) === -1) return e;
                if (n.indexOf(`<title `) === 0) {
                    let r = n.match(/(<title [^>]+>)(.*?)(<\/title>)/s);
                    return ((e.title = r ? `${r[1]}${t(r[2])}${r[3]}` : n), e);
                }
                let r = n.match(/ data-inertia=(["'])[^"']+\1/);
                return (r ? (e[r[0]] = n) : (e[Object.keys(e).length] = n), e);
            }, a);
        return Object.values(o);
    }
    function f() {
        e ? n(d()) : Hr.update(d());
    }
    return (
        f(),
        {
            forceUpdate: f,
            updateServerHead: u,
            createProvider: function () {
                let e = o();
                return {
                    reconnect: () => c(e),
                    update: (t) => l(e, t),
                    disconnect: () => s(e),
                };
            },
        }
    );
}
new tr();
function Wr() {
    let e = {},
        t = {},
        n = { shared: e, named: t },
        r = new Set(),
        i = !1,
        a = () => {
            n = { shared: e, named: t };
        },
        o = () => {
            i ||
                ((i = !0),
                queueMicrotask(() => {
                    ((i = !1), r.forEach((e) => e()));
                }));
        };
    return {
        set(t) {
            let n = { ...e, ...t };
            ye(e, n) || ((e = n), a(), o());
        },
        setFor(e, n) {
            let r = t[e] || {},
                i = { ...r, ...n };
            ye(r, i) || ((t = { ...t, [e]: i }), a(), o());
        },
        reset() {
            ((e = {}), (t = {}), a(), o());
        },
        subscribe(e) {
            return (r.add(e), () => r.delete(e));
        },
        get: () => n,
    };
}
function Gr(e) {
    return typeof e == `object` && !!e && !Array.isArray(e);
}
function Kr(e) {
    return Gr(e) && `component` in e;
}
function qr(e, t) {
    return `component` in e && t(e.component);
}
function Jr(e, t) {
    return !Gr(e) || t(e) || qr(e, t)
        ? !1
        : Object.values(e).every(
              (e) =>
                  t(e) ||
                  (Array.isArray(e) && t(e[0])) ||
                  (Kr(e) && t(e.component)),
          );
}
function Yr(e, t) {
    return Gr(e) && !t(e) && !qr(e, t) && !Jr(e, t);
}
function Xr(e, t) {
    if (Yr(e, t)) return !0;
    if (!Gr(e) || t(e) || qr(e, t)) return !1;
    let n = Object.values(e);
    return n.length > 0 && n.every((e) => typeof e == `function`);
}
function Zr(e, t) {
    return (
        Array.isArray(e) && e.length === 2 && t(e[0]) && Gr(e[1]) && !t(e[1])
    );
}
function Qr(e, t) {
    if (Array.isArray(e) && t(e[0]))
        return { component: e[0], props: e[1] ?? {} };
    if (Kr(e) && t(e.component))
        return { component: e.component, props: e.props ?? {} };
    if (t(e)) return { component: e, props: {} };
    throw Error(`Invalid layout definition: received ${typeof e}`);
}
function $r(e, t, n) {
    return !e || (n && n(e))
        ? []
        : Jr(e, t)
          ? Object.entries(e).map(([e, n]) => ({ ...Qr(n, t), name: e }))
          : Zr(e, t)
            ? [{ component: e[0], props: e[1] ?? {} }]
            : Array.isArray(e)
              ? e.map((e) => Qr(e, t))
              : Kr(e) && t(e.component)
                ? [{ component: e.component, props: e.props ?? {} }]
                : t(e)
                  ? [{ component: e, props: {} }]
                  : [];
}
function ei(e) {
    return (
        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
        e.defaultPrevented
    );
}
function ti(e) {
    let t = e.currentTarget.tagName.toLowerCase() === `a`,
        n = t ? e.currentTarget.target : ``;
    return !(
        ei(e) ||
        (t && e.altKey) ||
        (t && e.ctrlKey) ||
        (t && e.metaKey) ||
        (t && e.shiftKey) ||
        (t && n !== `` && n !== `_self`) ||
        (t && `button` in e && e.button !== 0)
    );
}
function ni(e) {
    let t = e.currentTarget.tagName.toLowerCase() === `button`;
    return !ei(e) && (e.key === `Enter` || (t && e.key === ` `));
}
var N = `nprogress`,
    ri,
    P,
    F = {
        minimum: 0.08,
        easing: `linear`,
        speed: 200,
        trickle: !0,
        trickleSpeed: 200,
        showSpinner: !0,
        barSelector: `.bar, [role="bar"]`,
        spinnerSelector: `.spinner, [role="spinner"]`,
        parent: `body`,
        color: `#29d`,
        includeCSS: !0,
        popover: null,
        template: [
            `<div class="bar">`,
            `<div class="peg"></div>`,
            `</div>`,
            `<div class="spinner">`,
            `<div class="spinner-icon"></div>`,
            `</div>`,
        ].join(``),
    },
    ii = null,
    ai = !1,
    oi = (e) => {
        (Object.assign(F, e),
            (ri = F.popover ?? `popover` in HTMLElement.prototype),
            F.includeCSS && yi(F.color),
            (P = document.createElement(`div`)),
            (P.id = N),
            P.setAttribute(`aria-hidden`, `true`),
            (P.innerHTML = F.template),
            ri && (P.popover = `manual`));
    },
    si = (e) => {
        let t = ci();
        ((e = gi(e, F.minimum, 1)), (ii = e === 1 ? null : e));
        let n = fi(!t),
            r = n.querySelector(F.barSelector),
            i = F.speed,
            a = F.easing;
        (n.offsetWidth,
            vi((t) => {
                let o = {
                    transition: `all ${i}ms ${a}`,
                    transform: `translate3d(${_i(e)}%,0,0)`,
                };
                for (let e in o) r.style[e] = o[e];
                if (e !== 1) return setTimeout(t, i);
                ((n.style.transition = `none`),
                    (n.style.opacity = `1`),
                    n.offsetWidth,
                    setTimeout(() => {
                        ((n.style.transition = `all ${i}ms linear`),
                            (n.style.opacity = `0`),
                            setTimeout(() => {
                                (mi(),
                                    (n.style.transition = ``),
                                    (n.style.opacity = ``),
                                    t());
                            }, i));
                    }, i));
            }));
    },
    ci = () => typeof ii == `number`,
    li = () => {
        ii || si(0);
        let e = function () {
            setTimeout(function () {
                ii && (di(), e());
            }, F.trickleSpeed);
        };
        F.trickle && e();
    },
    ui = (e) => {
        (!e && !ii) || (di(0.3 + 0.5 * Math.random()), si(1));
    },
    di = (e) => {
        let t = ii;
        if (t === null) return li();
        if (!(t > 1))
            return (
                (e =
                    typeof e == `number`
                        ? e
                        : (() => {
                              let e = {
                                  0.1: [0, 0.2],
                                  0.04: [0.2, 0.5],
                                  0.02: [0.5, 0.8],
                                  0.005: [0.8, 0.99],
                              };
                              for (let n in e)
                                  if (t >= e[n][0] && t < e[n][1])
                                      return parseFloat(n);
                              return 0;
                          })()),
                si(gi(t + e, 0, 0.994))
            );
    },
    fi = (e) => {
        if (hi()) return document.getElementById(N);
        document.documentElement.classList.add(`${N}-busy`);
        let t = P.querySelector(F.barSelector),
            n = e ? `-100` : _i(ii || 0);
        if (
            ((t.style.transition = `all 0 linear`),
            (t.style.transform = `translate3d(${n}%,0,0)`),
            F.showSpinner || P.querySelector(F.spinnerSelector)?.remove(),
            ri)
        )
            (document.body.appendChild(P), ai || P.showPopover());
        else {
            let e = pi();
            (e !== document.body && e.classList.add(`${N}-custom-parent`),
                e.appendChild(P),
                ai && (P.style.display = `none`));
        }
        return P;
    },
    pi = () => document.querySelector(F.parent),
    mi = () => {
        if (
            (document.documentElement.classList.remove(`${N}-busy`),
            ri && P?.isConnected)
        )
            try {
                P.hidePopover();
            } catch {}
        (ri || pi().classList.remove(`${N}-custom-parent`), P?.remove());
    },
    hi = () => document.getElementById(N) !== null;
function gi(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
var _i = (e) => (-1 + e) * 100,
    vi = (() => {
        let e = [],
            t = () => {
                let n = e.shift();
                n && n(t);
            };
        return (n) => {
            (e.push(n), e.length === 1 && t());
        };
    })(),
    yi = (e) => {
        let t = document.createElement(`style`),
            n = Ut.get(`nonce`);
        (n && (t.nonce = n),
            (t.textContent = `
    #${N} {
      pointer-events: none;
      background: none;
      border: none;
      margin: 0;
      padding: 0;
      overflow: visible;
      inset: unset;
      width: 100%;
      height: 0;
      position: fixed;
      top: 0;
      left: 0;
    }

    #${N}::backdrop {
      display: none;
    }

    #${N} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${N} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${N} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${N} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${N}-spinner 400ms linear infinite;
    }

    .${N}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${N}-custom-parent #${N} .spinner,
    .${N}-custom-parent #${N} .bar {
      position: absolute;
    }

    @keyframes ${N}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `),
            document.head.appendChild(t));
    },
    bi = {
        configure: oi,
        isStarted: ci,
        done: ui,
        set: si,
        remove: mi,
        start: li,
        status: ii,
        show: () => {
            if (((ai = !1), P?.isConnected)) {
                if (ri)
                    try {
                        P.showPopover();
                    } catch {}
                else P.style.display = ``;
            }
        },
        hide: () => {
            if (((ai = !0), P?.isConnected)) {
                if (ri)
                    try {
                        P.hidePopover();
                    } catch {}
                else P.style.display = `none`;
            }
        },
    },
    xi = new (class {
        hideCount = 0;
        start() {
            bi.start();
        }
        reveal(e = !1) {
            ((this.hideCount = Math.max(0, this.hideCount - 1)),
                (e || this.hideCount === 0) && bi.show());
        }
        hide() {
            (this.hideCount++, bi.hide());
        }
        set(e) {
            bi.set(Math.max(0, Math.min(1, e)));
        }
        finish() {
            bi.done();
        }
        reset() {
            bi.set(0);
        }
        remove() {
            (bi.done(), bi.remove());
        }
        isStarted() {
            return bi.isStarted();
        }
        getStatus() {
            return bi.status;
        }
    })();
function Si(e) {
    (document.addEventListener(`inertia:start`, (t) => Ci(t, e)),
        document.addEventListener(`inertia:progress`, wi));
}
function Ci(e, t) {
    e.detail.visit.showProgress || xi.hide();
    let n = setTimeout(() => xi.start(), t);
    document.addEventListener(`inertia:finish`, (e) => Ti(e, n), { once: !0 });
}
function wi(e) {
    xi.isStarted() &&
        e.detail.progress?.percentage &&
        xi.set(
            Math.max(
                xi.getStatus(),
                (e.detail.progress.percentage / 100) * 0.9,
            ),
        );
}
function Ti(e, t) {
    (clearTimeout(t),
        xi.isStarted() &&
            (e.detail.visit.completed
                ? xi.finish()
                : e.detail.visit.interrupted
                  ? xi.reset()
                  : e.detail.visit.cancelled && xi.remove()));
}
function Ei({
    delay: e = 250,
    color: t = `#29d`,
    includeCSS: n = !0,
    showSpinner: r = !1,
    popover: i = null,
} = {}) {
    (Si(e),
        bi.configure({ showSpinner: r, includeCSS: n, color: t, popover: i }));
}
function Di(e, t, n) {
    return `<script data-page="${e}" type="application/json">${JSON.stringify(t).replace(/\//g, `\\/`)}<\/script><div data-server-rendered="true" id="${e}">${n}</div>`;
}
var I = new Lr();
function Oi(e) {
    let t = Object.create(null);
    for (let n of e.split(`,`)) t[n] = 1;
    return (e) => e in t;
}
var L = {},
    ki = [],
    Ai = () => {},
    ji = () => !1,
    Mi = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Ni = (e) => e.startsWith(`onUpdate:`),
    R = Object.assign,
    Pi = (e, t) => {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    },
    Fi = Object.prototype.hasOwnProperty,
    z = (e, t) => Fi.call(e, t),
    B = Array.isArray,
    Ii = (e) => Hi(e) === `[object Map]`,
    Li = (e) => Hi(e) === `[object Set]`,
    Ri = (e) => Hi(e) === `[object Date]`,
    V = (e) => typeof e == `function`,
    H = (e) => typeof e == `string`,
    zi = (e) => typeof e == `symbol`,
    U = (e) => typeof e == `object` && !!e,
    Bi = (e) => (U(e) || V(e)) && V(e.then) && V(e.catch),
    Vi = Object.prototype.toString,
    Hi = (e) => Vi.call(e),
    Ui = (e) => Hi(e).slice(8, -1),
    Wi = (e) => Hi(e) === `[object Object]`,
    Gi = (e) =>
        H(e) && e !== `NaN` && e[0] !== `-` && `` + parseInt(e, 10) === e,
    Ki = Oi(
        `,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`,
    ),
    qi = (e) => {
        let t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    Ji = /-\w/g,
    Yi = qi((e) => e.replace(Ji, (e) => e.slice(1).toUpperCase())),
    Xi = /\B([A-Z])/g,
    Zi = qi((e) => e.replace(Xi, `-$1`).toLowerCase()),
    Qi = qi((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    $i = qi((e) => (e ? `on${Qi(e)}` : ``)),
    ea = (e, t) => !Object.is(e, t),
    ta = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
    },
    na = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n,
        });
    },
    ra = (e) => {
        let t = parseFloat(e);
        return isNaN(t) ? e : t;
    },
    ia = (e) => {
        let t = H(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t;
    },
    aa,
    oa = () =>
        (aa ||=
            typeof globalThis < `u`
                ? globalThis
                : typeof self < `u`
                  ? self
                  : typeof window < `u`
                    ? window
                    : typeof global < `u`
                      ? global
                      : {});
function sa(e) {
    if (B(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++) {
            let r = e[n],
                i = H(r) ? da(r) : sa(r);
            if (i) for (let e in i) t[e] = i[e];
        }
        return t;
    }
    if (H(e) || U(e)) return e;
}
var ca = /;(?![^(]*\))/g,
    la = /:([^]+)/,
    ua = /\/\*[^]*?\*\//g;
function da(e) {
    let t = {};
    return (
        e
            .replace(ua, ``)
            .split(ca)
            .forEach((e) => {
                if (e) {
                    let n = e.split(la);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim());
                }
            }),
        t
    );
}
function fa(e) {
    let t = ``;
    if (H(e)) t = e;
    else if (B(e))
        for (let n = 0; n < e.length; n++) {
            let r = fa(e[n]);
            r && (t += r + ` `);
        }
    else if (U(e)) for (let n in e) e[n] && (t += n + ` `);
    return t.trim();
}
var pa = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,
    ma = Oi(pa);
pa + ``;
function ha(e) {
    return !!e || e === ``;
}
function ga(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = va(e[r], t[r]);
    return n;
}
function _a(e, t) {
    if (e.size !== t.size) return !1;
    let n = Array.from(t),
        r = new Uint8Array(n.length);
    for (let t of e) {
        let e = -1;
        for (let i = 0; i < n.length; i++)
            if (!r[i] && va(t, n[i])) {
                e = i;
                break;
            }
        if (e < 0) return !1;
        r[e] = 1;
    }
    return !0;
}
function va(e, t) {
    if (e === t) return !0;
    let n = Ri(e),
        r = Ri(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (((n = zi(e)), (r = zi(t)), n || r)) return e === t;
    if (((n = B(e)), (r = B(t)), n || r)) return n && r ? ga(e, t) : !1;
    if (((n = U(e)), (r = U(t)), n || r)) {
        if (!n || !r) return !1;
        if (
            ((n = Ii(e)),
            (r = Ii(t)),
            n || r || ((n = Li(e)), (r = Li(t)), n || r))
        )
            return n && r ? _a(e, t) : !1;
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) {
            let r = e.hasOwnProperty(n),
                i = t.hasOwnProperty(n);
            if ((r && !i) || (!r && i) || !va(e[n], t[n])) return !1;
        }
    }
    return String(e) === String(t);
}
function ya(e, t) {
    return e.findIndex((e) => va(e, t));
}
var ba = (e) => !!(e && e.__v_isRef === !0),
    xa = (e) =>
        H(e)
            ? e
            : e == null
              ? ``
              : B(e) || (U(e) && (e.toString === Vi || !V(e.toString)))
                ? ba(e)
                    ? xa(e.value)
                    : JSON.stringify(e, Sa, 2)
                : String(e),
    Sa = (e, t) =>
        ba(t)
            ? Sa(e, t.value)
            : Ii(t)
              ? {
                    [`Map(${t.size})`]: [...t.entries()].reduce(
                        (e, [t, n], r) => ((e[Ca(t, r) + ` =>`] = n), e),
                        {},
                    ),
                }
              : Li(t)
                ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ca(e)) }
                : zi(t)
                  ? Ca(t)
                  : U(t) && !B(t) && !Wi(t)
                    ? String(t)
                    : t,
    Ca = (e, t = ``) => (zi(e) ? `Symbol(${e.description ?? t})` : e),
    W,
    wa = class {
        constructor(e = !1) {
            ((this.detached = e),
                (this._active = !0),
                (this._on = 0),
                (this.effects = []),
                (this.cleanups = []),
                (this._isPaused = !1),
                (this._warnOnRun = !0),
                (this.__v_skip = !0),
                !e &&
                    W &&
                    (W.active
                        ? ((this.parent = W),
                          (this.index =
                              (W.scopes || (W.scopes = [])).push(this) - 1))
                        : ((this._active = !1), (this._warnOnRun = !1))));
        }
        get active() {
            return this._active;
        }
        pause() {
            if (this._active) {
                this._isPaused = !0;
                let e, t;
                if (this.scopes) {
                    let n = this.scopes.slice();
                    for (e = 0, t = n.length; e < t; e++) n[e].pause();
                }
                for (e = 0, t = this.effects.length; e < t; e++)
                    this.effects[e].pause();
            }
        }
        resume() {
            if (this._active && this._isPaused) {
                this._isPaused = !1;
                let e, t;
                if (this.scopes) {
                    let n = this.scopes.slice();
                    for (e = 0, t = n.length; e < t; e++) n[e].resume();
                }
                let n = this.effects.slice();
                for (e = 0, t = n.length; e < t; e++) n[e].resume();
            }
        }
        run(e) {
            if (this._active) {
                let t = W;
                try {
                    return ((W = this), e());
                } finally {
                    W = t;
                }
            }
        }
        on() {
            ++this._on === 1 && ((this.prevScope = W), (W = this));
        }
        off() {
            if (this._on > 0 && --this._on === 0) {
                if (W === this) W = this.prevScope;
                else {
                    let e = W;
                    for (; e;) {
                        if (e.prevScope === this) {
                            e.prevScope = this.prevScope;
                            break;
                        }
                        e = e.prevScope;
                    }
                }
                this.prevScope = void 0;
            }
        }
        stop(e) {
            if (this._active) {
                this._active = !1;
                let t, n;
                for (t = 0, n = this.effects.length; t < n; t++)
                    this.effects[t].stop();
                for (
                    this.effects.length = 0, t = 0, n = this.cleanups.length;
                    t < n;
                    t++
                )
                    this.cleanups[t]();
                if (((this.cleanups.length = 0), this.scopes)) {
                    let e = this.scopes.slice();
                    for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
                    this.scopes.length = 0;
                }
                if (!this.detached && this.parent && !e) {
                    let e = this.parent.scopes.pop();
                    e &&
                        e !== this &&
                        ((this.parent.scopes[this.index] = e),
                        (e.index = this.index));
                }
                this.parent = void 0;
            }
        }
    };
function Ta() {
    return W;
}
var G,
    Ea = new WeakSet(),
    Da = class {
        constructor(e) {
            ((this.fn = e),
                (this.deps = void 0),
                (this.depsTail = void 0),
                (this.flags = 5),
                (this.next = void 0),
                (this.cleanup = void 0),
                (this.scheduler = void 0),
                W && (W.active ? W.effects.push(this) : (this.flags &= -2)));
        }
        pause() {
            this.flags |= 64;
        }
        resume() {
            this.flags & 64 &&
                ((this.flags &= -65),
                Ea.has(this) && (Ea.delete(this), this.trigger()));
        }
        notify() {
            (this.flags & 2 && !(this.flags & 32)) ||
                this.flags & 8 ||
                ja(this);
        }
        run() {
            if (!(this.flags & 1)) return this.fn();
            ((this.flags |= 2), Wa(this), Pa(this));
            let e = G,
                t = Ba;
            ((G = this), (Ba = !0));
            try {
                return this.fn();
            } finally {
                (Fa(this), (G = e), (Ba = t), (this.flags &= -3));
            }
        }
        stop() {
            if (this.flags & 1) {
                for (let e = this.deps; e; e = e.nextDep) Ra(e);
                ((this.deps = this.depsTail = void 0),
                    Wa(this),
                    this.onStop && this.onStop(),
                    (this.flags &= -2));
            }
        }
        trigger() {
            this.flags & 64
                ? Ea.add(this)
                : this.scheduler
                  ? this.scheduler()
                  : this.runIfDirty();
        }
        runIfDirty() {
            Ia(this) && this.run();
        }
        get dirty() {
            return Ia(this);
        }
    },
    Oa = 0,
    ka,
    Aa;
function ja(e, t = !1) {
    if (((e.flags |= 8), t)) {
        ((e.next = Aa), (Aa = e));
        return;
    }
    ((e.next = ka), (ka = e));
}
function Ma() {
    Oa++;
}
function Na() {
    if (--Oa > 0) return;
    if (Aa) {
        let e = Aa;
        for (Aa = void 0; e;) {
            let t = e.next;
            ((e.next = void 0), (e.flags &= -9), (e = t));
        }
    }
    let e;
    for (; ka;) {
        let t = ka;
        for (ka = void 0; t;) {
            let n = t.next;
            if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
                try {
                    t.trigger();
                } catch (t) {
                    e ||= t;
                }
            t = n;
        }
    }
    if (e) throw e;
}
function Pa(e) {
    for (let t = e.deps; t; t = t.nextDep)
        ((t.version = -1),
            (t.prevActiveLink = t.dep.activeLink),
            (t.dep.activeLink = t));
}
function Fa(e) {
    let t,
        n = e.depsTail,
        r = n;
    for (; r;) {
        let e = r.prevDep;
        (r.version === -1 ? (r === n && (n = e), Ra(r), za(r)) : (t = r),
            (r.dep.activeLink = r.prevActiveLink),
            (r.prevActiveLink = void 0),
            (r = e));
    }
    ((e.deps = t), (e.depsTail = n));
}
function Ia(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (
            t.dep.version !== t.version ||
            (t.dep.computed &&
                (La(t.dep.computed) || t.dep.version !== t.version))
        )
            return !0;
    return !!e._dirty;
}
function La(e) {
    if (
        (e.flags & 4 && !(e.flags & 16)) ||
        ((e.flags &= -17), e.globalVersion === Ga) ||
        ((e.globalVersion = Ga),
        !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Ia(e)))
    )
        return;
    e.flags |= 2;
    let t = e.dep,
        n = G,
        r = Ba;
    ((G = e), (Ba = !0));
    try {
        Pa(e);
        let n = e.fn(e._value);
        (t.version === 0 || ea(n, e._value)) &&
            ((e.flags |= 128), (e._value = n), t.version++);
    } catch (e) {
        throw (t.version++, e);
    } finally {
        ((G = n), (Ba = r), Fa(e), (e.flags &= -3));
    }
}
function Ra(e, t = !1) {
    let { dep: n, prevSub: r, nextSub: i } = e;
    if (
        (r && ((r.nextSub = i), (e.prevSub = void 0)),
        i && ((i.prevSub = r), (e.nextSub = void 0)),
        n.subs === e && ((n.subs = r), !r && n.computed))
    ) {
        n.computed.flags &= -5;
        for (let e = n.computed.deps; e; e = e.nextDep) Ra(e, !0);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
}
function za(e) {
    let { prevDep: t, nextDep: n } = e;
    (t && ((t.nextDep = n), (e.prevDep = void 0)),
        n && ((n.prevDep = t), (e.nextDep = void 0)));
}
var Ba = !0,
    Va = [];
function Ha() {
    (Va.push(Ba), (Ba = !1));
}
function Ua() {
    let e = Va.pop();
    Ba = e === void 0 || e;
}
function Wa(e) {
    let { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
        let e = G;
        G = void 0;
        try {
            t();
        } finally {
            G = e;
        }
    }
}
var Ga = 0,
    Ka = class {
        constructor(e, t) {
            ((this.sub = e),
                (this.dep = t),
                (this.version = t.version),
                (this.nextDep =
                    this.prevDep =
                    this.nextSub =
                    this.prevSub =
                    this.prevActiveLink =
                        void 0));
        }
    },
    qa = class {
        constructor(e) {
            ((this.computed = e),
                (this.version = 0),
                (this.activeLink = void 0),
                (this.subs = void 0),
                (this.map = void 0),
                (this.key = void 0),
                (this.sc = 0),
                (this.__v_skip = !0));
        }
        track(e) {
            if (!G || !Ba || G === this.computed) return;
            let t = this.activeLink;
            if (t === void 0 || t.sub !== G)
                ((t = this.activeLink = new Ka(G, this)),
                    G.deps
                        ? ((t.prevDep = G.depsTail),
                          (G.depsTail.nextDep = t),
                          (G.depsTail = t))
                        : (G.deps = G.depsTail = t),
                    Ja(t));
            else if (
                t.version === -1 &&
                ((t.version = this.version), t.nextDep)
            ) {
                let e = t.nextDep;
                ((e.prevDep = t.prevDep),
                    t.prevDep && (t.prevDep.nextDep = e),
                    (t.prevDep = G.depsTail),
                    (t.nextDep = void 0),
                    (G.depsTail.nextDep = t),
                    (G.depsTail = t),
                    G.deps === t && (G.deps = e));
            }
            return t;
        }
        trigger(e) {
            (this.version++, Ga++, this.notify(e));
        }
        notify(e) {
            Ma();
            try {
                for (let e = this.subs; e; e = e.prevSub)
                    e.sub.notify() && e.sub.dep.notify();
            } finally {
                Na();
            }
        }
    };
function Ja(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
        let t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let e = t.deps; e; e = e.nextDep) Ja(e);
        }
        let n = e.dep.subs;
        (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
    }
}
var Ya = new WeakMap(),
    Xa = Symbol(``),
    Za = Symbol(``),
    Qa = Symbol(``);
function K(e, t, n) {
    if (Ba && G) {
        let t = Ya.get(e);
        t || Ya.set(e, (t = new Map()));
        let r = t.get(n);
        (r || (t.set(n, (r = new qa())), (r.map = t), (r.key = n)), r.track());
    }
}
function $a(e, t, n, r, i, a) {
    let o = Ya.get(e);
    if (!o) {
        Ga++;
        return;
    }
    let s = (e) => {
        e && e.trigger();
    };
    if ((Ma(), t === `clear`)) o.forEach(s);
    else {
        let i = B(e),
            a = i && Gi(n);
        if (i && n === `length`) {
            let e = Number(r);
            o.forEach((t, n) => {
                (n === `length` || n === Qa || (!zi(n) && n >= e)) && s(t);
            });
        } else
            switch (
                ((n !== void 0 || o.has(void 0)) && s(o.get(n)),
                a && s(o.get(Qa)),
                t)
            ) {
                case `add`:
                    i
                        ? a && s(o.get(`length`))
                        : (s(o.get(Xa)), Ii(e) && s(o.get(Za)));
                    break;
                case `delete`:
                    i || (s(o.get(Xa)), Ii(e) && s(o.get(Za)));
                    break;
                case `set`:
                    Ii(e) && s(o.get(Xa));
            }
    }
    Na();
}
function eo(e) {
    let t = q(e);
    return t === e ? t : (K(t, `iterate`, Qa), Bo(e) ? t : t.map(Uo));
}
function to(e) {
    return (K((e = q(e)), `iterate`, Qa), e);
}
function no(e, t) {
    return zo(e) ? Wo(Ro(e) ? Uo(t) : t) : Uo(t);
}
var ro = {
    __proto__: null,
    [Symbol.iterator]() {
        return io(this, Symbol.iterator, (e) => no(this, e));
    },
    concat(...e) {
        return eo(this).concat(...e.map((e) => (B(e) ? eo(e) : e)));
    },
    entries() {
        return io(this, `entries`, (e) => ((e[1] = no(this, e[1])), e));
    },
    every(e, t) {
        return oo(this, `every`, e, t, void 0, arguments);
    },
    filter(e, t) {
        return oo(
            this,
            `filter`,
            e,
            t,
            (e) => e.map((e) => no(this, e)),
            arguments,
        );
    },
    find(e, t) {
        return oo(this, `find`, e, t, (e) => no(this, e), arguments);
    },
    findIndex(e, t) {
        return oo(this, `findIndex`, e, t, void 0, arguments);
    },
    findLast(e, t) {
        return oo(this, `findLast`, e, t, (e) => no(this, e), arguments);
    },
    findLastIndex(e, t) {
        return oo(this, `findLastIndex`, e, t, void 0, arguments);
    },
    forEach(e, t) {
        return oo(this, `forEach`, e, t, void 0, arguments);
    },
    includes(...e) {
        return co(this, `includes`, e);
    },
    indexOf(...e) {
        return co(this, `indexOf`, e);
    },
    join(e) {
        return eo(this).join(e);
    },
    lastIndexOf(...e) {
        return co(this, `lastIndexOf`, e);
    },
    map(e, t) {
        return oo(this, `map`, e, t, void 0, arguments);
    },
    pop() {
        return lo(this, `pop`);
    },
    push(...e) {
        return lo(this, `push`, e);
    },
    reduce(e, ...t) {
        return so(this, `reduce`, e, t);
    },
    reduceRight(e, ...t) {
        return so(this, `reduceRight`, e, t);
    },
    shift() {
        return lo(this, `shift`);
    },
    some(e, t) {
        return oo(this, `some`, e, t, void 0, arguments);
    },
    splice(...e) {
        return lo(this, `splice`, e);
    },
    toReversed() {
        return eo(this).toReversed();
    },
    toSorted(e) {
        return eo(this).toSorted(e);
    },
    toSpliced(...e) {
        return eo(this).toSpliced(...e);
    },
    unshift(...e) {
        return lo(this, `unshift`, e);
    },
    values() {
        return io(this, `values`, (e) => no(this, e));
    },
};
function io(e, t, n) {
    let r = to(e),
        i = r[t]();
    return (
        r !== e &&
            !Bo(e) &&
            ((i._next = i.next),
            (i.next = () => {
                let e = i._next();
                return (e.done || (e.value = n(e.value)), e);
            })),
        i
    );
}
var ao = Array.prototype;
function oo(e, t, n, r, i, a) {
    let o = to(e),
        s = o !== e && !Bo(e),
        c = o[t];
    if (c !== ao[t]) {
        let t = c.apply(e, a);
        return s ? Uo(t) : t;
    }
    let l = n;
    o !== e &&
        (s
            ? (l = function (t, r) {
                  return n.call(this, no(e, t), r, e);
              })
            : n.length > 2 &&
              (l = function (t, r) {
                  return n.call(this, t, r, e);
              }));
    let u = c.call(o, l, r);
    return s && i ? i(u) : u;
}
function so(e, t, n, r) {
    let i = to(e),
        a = i !== e && !Bo(e),
        o = n,
        s = !1;
    i !== e &&
        (a
            ? ((s = r.length === 0),
              (o = function (t, r, i) {
                  return (
                      s && ((s = !1), (t = no(e, t))),
                      n.call(this, t, no(e, r), i, e)
                  );
              }))
            : n.length > 3 &&
              (o = function (t, r, i) {
                  return n.call(this, t, r, i, e);
              }));
    let c = i[t](o, ...r);
    return s ? no(e, c) : c;
}
function co(e, t, n) {
    let r = q(e);
    K(r, `iterate`, Qa);
    let i = r[t](...n);
    return (i === -1 || i === !1) && Vo(n[0])
        ? ((n[0] = q(n[0])), r[t](...n))
        : i;
}
function lo(e, t, n = []) {
    (Ha(), Ma());
    let r = q(e)[t].apply(e, n);
    return (Na(), Ua(), r);
}
var uo = Oi(`__proto__,__v_isRef,__isVue`),
    fo = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== `arguments` && e !== `caller`)
            .map((e) => Symbol[e])
            .filter(zi),
    );
function po(e) {
    zi(e) || (e = String(e));
    let t = q(this);
    return (K(t, `has`, e), t.hasOwnProperty(e));
}
var mo = class {
        constructor(e = !1, t = !1) {
            ((this._isReadonly = e), (this._isShallow = t));
        }
        get(e, t, n) {
            if (t === `__v_skip`) return e.__v_skip;
            let r = this._isReadonly,
                i = this._isShallow;
            if (t === `__v_isReactive`) return !r;
            if (t === `__v_isReadonly`) return r;
            if (t === `__v_isShallow`) return i;
            if (t === `__v_raw`)
                return n === (r ? (i ? Mo : jo) : i ? Ao : ko).get(e) ||
                    Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
                    ? e
                    : void 0;
            let a = B(e);
            if (!r) {
                let e;
                if (a && (e = ro[t])) return e;
                if (t === `hasOwnProperty`) return po;
            }
            let o = Reflect.get(e, t, J(e) ? e : n);
            if ((zi(t) ? fo.has(t) : uo(t)) || (r || K(e, `get`, t), i))
                return o;
            if (J(o)) {
                let e = a && Gi(t) ? o : o.value;
                return r && U(e) ? Io(e) : e;
            }
            return U(o) ? (r ? Io(o) : Po(o)) : o;
        }
    },
    ho = class extends mo {
        constructor(e = !1) {
            super(!1, e);
        }
        set(e, t, n, r) {
            let i = e[t],
                a = B(e) && Gi(t);
            if (!this._isShallow) {
                let e = zo(i);
                if (
                    (!Bo(n) && !zo(n) && ((i = q(i)), (n = q(n))),
                    !a && J(i) && !J(n))
                )
                    return (e || (i.value = n), !0);
            }
            let o = a ? Number(t) < e.length : z(e, t),
                s = Reflect.set(e, t, n, J(e) ? e : r);
            return (
                e === q(r) &&
                    s &&
                    (o
                        ? ea(n, i) && $a(e, `set`, t, n, i)
                        : $a(e, `add`, t, n)),
                s
            );
        }
        deleteProperty(e, t) {
            let n = z(e, t),
                r = e[t],
                i = Reflect.deleteProperty(e, t);
            return (i && n && $a(e, `delete`, t, void 0, r), i);
        }
        has(e, t) {
            let n = Reflect.has(e, t);
            return ((!zi(t) || !fo.has(t)) && K(e, `has`, t), n);
        }
        ownKeys(e) {
            return (K(e, `iterate`, B(e) ? `length` : Xa), Reflect.ownKeys(e));
        }
    },
    go = class extends mo {
        constructor(e = !1) {
            super(!0, e);
        }
        set(e, t) {
            return !0;
        }
        deleteProperty(e, t) {
            return !0;
        }
    },
    _o = new ho(),
    vo = new go(),
    yo = new ho(!0),
    bo = (e) => e,
    xo = (e) => Reflect.getPrototypeOf(e);
function So(e, t, n) {
    return function (...r) {
        let i = this.__v_raw,
            a = q(i),
            o = Ii(a),
            s = e === `entries` || (e === Symbol.iterator && o),
            c = e === `keys` && o,
            l = i[e](...r),
            u = n ? bo : t ? Wo : Uo;
        return (
            !t && K(a, `iterate`, c ? Za : Xa),
            R(Object.create(l), {
                next() {
                    let { value: e, done: t } = l.next();
                    return t
                        ? { value: e, done: t }
                        : { value: s ? [u(e[0]), u(e[1])] : u(e), done: t };
                },
            })
        );
    };
}
function Co(e) {
    return function (...t) {
        return e === `delete` ? !1 : e === `clear` ? void 0 : this;
    };
}
function wo(e, t) {
    let n = {
        get(n) {
            let r = this.__v_raw,
                i = q(r),
                a = q(n);
            e || (ea(n, a) && K(i, `get`, n), K(i, `get`, a));
            let { has: o } = xo(i),
                s = t ? bo : e ? Wo : Uo;
            if (o.call(i, n)) return s(r.get(n));
            if (o.call(i, a)) return s(r.get(a));
            r !== i && r.get(n);
        },
        get size() {
            let t = this.__v_raw;
            return (!e && K(q(t), `iterate`, Xa), t.size);
        },
        has(t) {
            let n = this.__v_raw,
                r = q(n),
                i = q(t);
            return (
                e || (ea(t, i) && K(r, `has`, t), K(r, `has`, i)),
                t === i ? n.has(t) : n.has(t) || n.has(i)
            );
        },
        forEach(n, r) {
            let i = this,
                a = i.__v_raw,
                o = q(a),
                s = t ? bo : e ? Wo : Uo;
            return (
                !e && K(o, `iterate`, Xa),
                a.forEach((e, t) => n.call(r, s(e), s(t), i))
            );
        },
    };
    return (
        R(
            n,
            e
                ? {
                      add: Co(`add`),
                      set: Co(`set`),
                      delete: Co(`delete`),
                      clear: Co(`clear`),
                  }
                : {
                      add(e) {
                          let n = q(this),
                              r = xo(n),
                              i = q(e),
                              a = !t && !Bo(e) && !zo(e) ? i : e;
                          return (
                              r.has.call(n, a) ||
                                  (ea(e, a) && r.has.call(n, e)) ||
                                  (ea(i, a) && r.has.call(n, i)) ||
                                  (n.add(a), $a(n, `add`, a, a)),
                              this
                          );
                      },
                      set(e, n) {
                          !t && !Bo(n) && !zo(n) && (n = q(n));
                          let r = q(this),
                              { has: i, get: a } = xo(r),
                              o = i.call(r, e);
                          o ||= ((e = q(e)), i.call(r, e));
                          let s = a.call(r, e);
                          return (
                              r.set(e, n),
                              o
                                  ? ea(n, s) && $a(r, `set`, e, n, s)
                                  : $a(r, `add`, e, n),
                              this
                          );
                      },
                      delete(e) {
                          let t = q(this),
                              { has: n, get: r } = xo(t),
                              i = n.call(t, e);
                          i ||= ((e = q(e)), n.call(t, e));
                          let a = r ? r.call(t, e) : void 0,
                              o = t.delete(e);
                          return (i && $a(t, `delete`, e, void 0, a), o);
                      },
                      clear() {
                          let e = q(this),
                              t = e.size !== 0,
                              n = e.clear();
                          return (
                              t && $a(e, `clear`, void 0, void 0, void 0), n
                          );
                      },
                  },
        ),
        [`keys`, `values`, `entries`, Symbol.iterator].forEach((r) => {
            n[r] = So(r, e, t);
        }),
        n
    );
}
function To(e, t) {
    let n = wo(e, t);
    return (t, r, i) =>
        r === `__v_isReactive`
            ? !e
            : r === `__v_isReadonly`
              ? e
              : r === `__v_raw`
                ? t
                : Reflect.get(z(n, r) && r in t ? n : t, r, i);
}
var Eo = { get: To(!1, !1) },
    Do = { get: To(!1, !0) },
    Oo = { get: To(!0, !1) },
    ko = new WeakMap(),
    Ao = new WeakMap(),
    jo = new WeakMap(),
    Mo = new WeakMap();
function No(e) {
    switch (e) {
        case `Object`:
        case `Array`:
            return 1;
        case `Map`:
        case `Set`:
        case `WeakMap`:
        case `WeakSet`:
            return 2;
        default:
            return 0;
    }
}
function Po(e) {
    return zo(e) ? e : Lo(e, !1, _o, Eo, ko);
}
function Fo(e) {
    return Lo(e, !1, yo, Do, Ao);
}
function Io(e) {
    return Lo(e, !0, vo, Oo, jo);
}
function Lo(e, t, n, r, i) {
    if (
        !U(e) ||
        (e.__v_raw && !(t && e.__v_isReactive)) ||
        e.__v_skip ||
        !Object.isExtensible(e)
    )
        return e;
    let a = i.get(e);
    if (a) return a;
    let o = No(Ui(e));
    if (o === 0) return e;
    let s = new Proxy(e, o === 2 ? r : n);
    return (i.set(e, s), s);
}
function Ro(e) {
    return zo(e) ? Ro(e.__v_raw) : !!(e && e.__v_isReactive);
}
function zo(e) {
    return !!(e && e.__v_isReadonly);
}
function Bo(e) {
    return !!(e && e.__v_isShallow);
}
function Vo(e) {
    return e ? !!e.__v_raw : !1;
}
function q(e) {
    let t = e && e.__v_raw;
    return t ? q(t) : e;
}
function Ho(e) {
    return (
        !z(e, `__v_skip`) && Object.isExtensible(e) && na(e, `__v_skip`, !0), e
    );
}
var Uo = (e) => (U(e) ? Po(e) : e),
    Wo = (e) => (U(e) ? Io(e) : e);
function J(e) {
    return e ? e.__v_isRef === !0 : !1;
}
function Go(e) {
    return qo(e, !1);
}
function Ko(e) {
    return qo(e, !0);
}
function qo(e, t) {
    return J(e) ? e : new Jo(e, t);
}
var Jo = class {
    constructor(e, t) {
        ((this.dep = new qa()),
            (this.__v_isRef = !0),
            (this.__v_isShallow = !1),
            (this._rawValue = t ? e : q(e)),
            (this._value = t ? e : Uo(e)),
            (this.__v_isShallow = t));
    }
    get value() {
        return (this.dep.track(), this._value);
    }
    set value(e) {
        let t = this._rawValue,
            n = this.__v_isShallow || Bo(e) || zo(e);
        ((e = n ? e : q(e)),
            ea(e, t) &&
                ((this._rawValue = e),
                (this._value = n ? e : Uo(e)),
                this.dep.trigger()));
    }
};
function Yo(e) {
    return J(e) ? e.value : e;
}
var Xo = {
    get: (e, t, n) => (t === `__v_raw` ? e : Yo(Reflect.get(e, t, n))),
    set: (e, t, n, r) => {
        let i = e[t];
        return J(i) && !J(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, r);
    },
};
function Zo(e) {
    return Ro(e) ? e : new Proxy(e, Xo);
}
var Qo = class {
    constructor(e, t, n) {
        ((this.fn = e),
            (this.setter = t),
            (this._value = void 0),
            (this.dep = new qa(this)),
            (this.__v_isRef = !0),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 16),
            (this.globalVersion = Ga - 1),
            (this.next = void 0),
            (this.effect = this),
            (this.__v_isReadonly = !t),
            (this.isSSR = n));
    }
    notify() {
        if (((this.flags |= 16), !(this.flags & 8) && G !== this))
            return (ja(this, !0), !0);
    }
    get value() {
        let e = this.dep.track();
        return (La(this), e && (e.version = this.dep.version), this._value);
    }
    set value(e) {
        this.setter && this.setter(e);
    }
};
function $o(e, t, n = !1) {
    let r, i;
    return (V(e) ? (r = e) : ((r = e.get), (i = e.set)), new Qo(r, i, n));
}
var es = {},
    ts = new WeakMap(),
    ns = void 0;
function rs(e, t = !1, n = ns) {
    if (n) {
        let t = ts.get(n);
        (t || ts.set(n, (t = [])), t.push(e));
    }
}
function is(e, t, n = L) {
    let {
            immediate: r,
            deep: i,
            once: a,
            scheduler: o,
            augmentJob: s,
            call: c,
        } = n,
        l = (e) => (i ? e : Bo(e) || i === !1 || i === 0 ? as(e, 1) : as(e)),
        u,
        d,
        f,
        p,
        m = !1,
        h = !1;
    if (
        (J(e)
            ? ((d = () => e.value), (m = Bo(e)))
            : Ro(e)
              ? ((d = () => l(e)), (m = !0))
              : B(e)
                ? ((h = !0),
                  (m = e.some((e) => Ro(e) || Bo(e))),
                  (d = () =>
                      e.map((e) => {
                          if (J(e)) return e.value;
                          if (Ro(e)) return l(e);
                          if (V(e)) return c ? c(e, 2) : e();
                      })))
                : (d = V(e)
                      ? t
                          ? c
                              ? () => c(e, 2)
                              : e
                          : () => {
                                if (f) {
                                    Ha();
                                    try {
                                        f();
                                    } finally {
                                        Ua();
                                    }
                                }
                                let t = ns;
                                ns = u;
                                try {
                                    return c ? c(e, 3, [p]) : e(p);
                                } finally {
                                    ns = t;
                                }
                            }
                      : Ai),
        t && i)
    ) {
        let e = d,
            t = i === !0 ? 1 / 0 : i;
        d = () => as(e(), t);
    }
    let g = Ta(),
        _ = () => {
            (u.stop(), g && g.active && Pi(g.effects, u));
        };
    if (a && t) {
        let e = t;
        t = (...t) => {
            let n = e(...t);
            return (_(), n);
        };
    }
    let v = h ? Array(e.length).fill(es) : es,
        y = (e) => {
            if (!(!(u.flags & 1) || (!u.dirty && !e))) {
                if (t) {
                    let n = u.run();
                    if (
                        e ||
                        i ||
                        m ||
                        (h ? n.some((e, t) => ea(e, v[t])) : ea(n, v))
                    ) {
                        f && f();
                        let e = ns;
                        ns = u;
                        try {
                            let e = [
                                n,
                                v === es ? void 0 : h && v[0] === es ? [] : v,
                                p,
                            ];
                            ((v = n), c ? c(t, 3, e) : t(...e));
                        } finally {
                            ns = e;
                        }
                    }
                } else u.run();
            }
        };
    return (
        s && s(y),
        (u = new Da(d)),
        (u.scheduler = o ? () => o(y, !1) : y),
        (p = (e) => rs(e, !1, u)),
        (f = u.onStop =
            () => {
                let e = ts.get(u);
                if (e) {
                    if (c) c(e, 4);
                    else for (let t of e) t();
                    ts.delete(u);
                }
            }),
        t ? (r ? y(!0) : (v = u.run())) : o ? o(y.bind(null, !0), !0) : u.run(),
        (_.pause = u.pause.bind(u)),
        (_.resume = u.resume.bind(u)),
        (_.stop = _),
        _
    );
}
function as(e, t = 1 / 0, n) {
    if (
        t <= 0 ||
        !U(e) ||
        e.__v_skip ||
        ((n ||= new Map()), (n.get(e) || 0) >= t)
    )
        return e;
    if ((n.set(e, t), t--, J(e))) as(e.value, t, n);
    else if (B(e)) for (let r = 0; r < e.length; r++) as(e[r], t, n);
    else if (Li(e) || Ii(e))
        e.forEach((e) => {
            as(e, t, n);
        });
    else if (Wi(e)) {
        for (let r in e) as(e[r], t, n);
        for (let r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && as(e[r], t, n);
    }
    return e;
}
function os(e, t, n, r) {
    try {
        return r ? e(...r) : e();
    } catch (e) {
        cs(e, t, n);
    }
}
function ss(e, t, n, r) {
    if (V(e)) {
        let i = os(e, t, n, r);
        return (
            i &&
                Bi(i) &&
                i.catch((e) => {
                    cs(e, t, n);
                }),
            i
        );
    }
    if (B(e)) {
        let i = [];
        for (let a = 0; a < e.length; a++) i.push(ss(e[a], t, n, r));
        return i;
    }
}
function cs(e, t, n, r = !0) {
    let i = t ? t.vnode : null,
        { errorHandler: a, throwUnhandledErrorInProduction: o } =
            (t && t.appContext.config) || L;
    if (t) {
        let r = t.parent,
            i = t.proxy,
            o = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r;) {
            let t = r.ec;
            if (t) {
                for (let n = 0; n < t.length; n++)
                    if (t[n](e, i, o) === !1) return;
            }
            r = r.parent;
        }
        if (a) {
            (Ha(), os(a, null, 10, [e, i, o]), Ua());
            return;
        }
    }
    ls(e, n, i, r, o);
}
function ls(e, t, n, r = !0, i = !1) {
    if (i) throw e;
    console.error(e);
}
var us = [],
    ds = -1,
    fs = [],
    ps = null,
    ms = 0,
    hs = Promise.resolve(),
    gs = null;
function _s(e) {
    let t = gs || hs;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function vs(e) {
    let t = ds + 1,
        n = us.length;
    for (; t < n;) {
        let r = (t + n) >>> 1,
            i = us[r],
            a = ws(i);
        a < e || (a === e && i.flags & 2) ? (t = r + 1) : (n = r);
    }
    return t;
}
function ys(e) {
    if (!(e.flags & 1)) {
        let t = ws(e),
            n = us[us.length - 1];
        (!n || (!(e.flags & 2) && t >= ws(n))
            ? us.push(e)
            : us.splice(vs(t), 0, e),
            (e.flags |= 1),
            bs());
    }
}
function bs() {
    gs ||= hs.then(Ts);
}
function xs(e) {
    if (!B(e))
        ps && e.id === -1
            ? ps.splice(ms + 1, 0, e)
            : e.flags & 1 || (fs.push(e), (e.flags |= 1));
    else for (let t = 0; t < e.length; t++) fs.push(e[t]);
    bs();
}
function Ss(e, t, n = ds + 1) {
    for (; n < us.length; n++) {
        let t = us[n];
        if (t && t.flags & 2) {
            if (e && t.id !== e.uid) continue;
            (us.splice(n, 1),
                n--,
                t.flags & 4 && (t.flags &= -2),
                t(),
                t.flags & 4 || (t.flags &= -2));
        }
    }
}
function Cs(e) {
    if (fs.length) {
        let e = [...new Set(fs)].sort((e, t) => ws(e) - ws(t));
        if (((fs.length = 0), ps)) {
            for (let t = 0; t < e.length; t++) ps.push(e[t]);
            return;
        }
        for (ps = e, ms = 0; ms < ps.length; ms++) {
            let e = ps[ms];
            (e.flags & 4 && (e.flags &= -2),
                e.flags & 8 || e(),
                (e.flags &= -2));
        }
        ((ps = null), (ms = 0));
    }
}
var ws = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Ts(e) {
    try {
        for (ds = 0; ds < us.length; ds++) {
            let e = us[ds];
            e &&
                !(e.flags & 8) &&
                (e.flags & 4 && (e.flags &= -2),
                os(e, e.i, e.i ? 15 : 14),
                e.flags & 4 || (e.flags &= -2));
        }
    } finally {
        for (; ds < us.length; ds++) {
            let e = us[ds];
            e && (e.flags &= -2);
        }
        ((ds = -1),
            (us.length = 0),
            Cs(e),
            (gs = null),
            (us.length || fs.length) && Ts(e));
    }
}
var Y = null,
    Es = null;
function Ds(e) {
    let t = Y;
    return ((Y = e), (Es = (e && e.type.__scopeId) || null), t);
}
function Os(e, t = Y, n) {
    if (!t || e._n) return e;
    let r = (...n) => {
        r._d && mu(-1);
        let i = Ds(t),
            a = lu.length,
            o;
        try {
            o = e(...n);
        } finally {
            for (let e = lu.length; e > a; e--) fu();
            (Ds(i), r._d && mu(1));
        }
        return o;
    };
    return ((r._n = !0), (r._c = !0), (r._d = !0), r);
}
function ks(e, t) {
    if (Y === null) return e;
    let n = Zu(Y),
        r = (e.dirs ||= []);
    for (let e = 0; e < t.length; e++) {
        let [i, a, o, s = L] = t[e];
        i &&
            (V(i) && (i = { mounted: i, updated: i }),
            i.deep && as(a),
            r.push({
                dir: i,
                instance: n,
                value: a,
                oldValue: void 0,
                arg: o,
                modifiers: s,
            }));
    }
    return e;
}
function As(e, t, n, r) {
    let i = e.dirs,
        a = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        let s = i[o];
        a && (s.oldValue = a[o].value);
        let c = s.dir[r];
        c && (Ha(), ss(c, n, 8, [e.el, s, e, t]), Ua());
    }
}
function js(e, t) {
    if (Lu) {
        let n = Lu.provides,
            r = Lu.parent && Lu.parent.provides;
        (r === n && (n = Lu.provides = Object.create(r)), (n[e] = t));
    }
}
function Ms(e, t, n = !1) {
    let r = Ru();
    if (r || hl) {
        let i = hl
            ? hl._context.provides
            : r
              ? r.parent == null || r.ce
                  ? r.vnode.appContext && r.vnode.appContext.provides
                  : r.parent.provides
              : void 0;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return n && V(t) ? t.call(r && r.proxy) : t;
    }
}
var Ns = Symbol.for(`v-scx`),
    Ps = () => Ms(Ns);
function Fs(e, t, n) {
    return Is(e, t, n);
}
function Is(e, t, n = L) {
    let { immediate: r, deep: i, flush: a, once: o } = n,
        s = R({}, n),
        c = (t && r) || (!t && a !== `post`),
        l;
    if (Wu) {
        if (a === `sync`) {
            let e = Ps();
            l = e.__watcherHandles ||= [];
        } else if (!c) {
            let e = () => {};
            return ((e.stop = Ai), (e.resume = Ai), (e.pause = Ai), e);
        }
    }
    let u = Lu;
    s.call = (e, t, n) => ss(e, u, t, n);
    let d = !1;
    (a === `post`
        ? (s.scheduler = (e) => {
              Kl(e, u && u.suspense);
          })
        : a !== `sync` &&
          ((d = !0),
          (s.scheduler = (e, t) => {
              t ? e() : ys(e);
          })),
        (s.augmentJob = (e) => {
            (t && (e.flags |= 4),
                d && ((e.flags |= 2), u && ((e.id = u.uid), (e.i = u))));
        }));
    let f = is(e, t, s);
    return (Wu && (l ? l.push(f) : c && f()), f);
}
function Ls(e, t, n) {
    let r = this.proxy,
        i = H(e) ? (e.includes(`.`) ? Rs(r, e) : () => r[e]) : e.bind(r, r),
        a;
    V(t) ? (a = t) : ((a = t.handler), (n = t));
    let o = Vu(this),
        s = Is(i, a.bind(r), n);
    return (o(), s);
}
function Rs(e, t) {
    let n = t.split(`.`);
    return () => {
        let t = e;
        for (let e = 0; e < n.length && t; e++) t = t[n[e]];
        return t;
    };
}
var zs = Symbol(`_vte`),
    Bs = (e) => e.__isTeleport,
    Vs = Symbol(`_leaveCb`),
    Hs = Symbol(`_enterCb`);
function Us() {
    let e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map(),
    };
    return (
        Nc(() => {
            e.isMounted = !0;
        }),
        Ic(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
var Ws = [Function, Array],
    Gs = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Ws,
        onEnter: Ws,
        onAfterEnter: Ws,
        onEnterCancelled: Ws,
        onBeforeLeave: Ws,
        onLeave: Ws,
        onAfterLeave: Ws,
        onLeaveCancelled: Ws,
        onBeforeAppear: Ws,
        onAppear: Ws,
        onAfterAppear: Ws,
        onAppearCancelled: Ws,
    },
    Ks = (e) => {
        let t = e.subTree;
        return t.component ? Ks(t.component) : t;
    },
    qs = {
        name: `BaseTransition`,
        props: Gs,
        setup(e, { slots: t }) {
            let n = Ru(),
                r = Us();
            return () => {
                let i = t.default && tc(t.default(), !0),
                    a = i && i.length ? Js(i) : n.subTree ? Ou() : void 0;
                if (!a) return;
                let o = q(e),
                    { mode: s } = o;
                if (r.isLeaving) return Qs(a);
                let c = $s(a);
                if (!c) return Qs(a);
                let l = Zs(c, o, r, n, (e) => (l = e));
                c.type !== X && ec(c, l);
                let u = n.subTree && $s(n.subTree);
                if (u && u.type !== X && !yu(u, c) && Ks(n).type !== X) {
                    let e = Zs(u, o, r, n);
                    if ((ec(u, e), s === `out-in` && c.type !== X))
                        return (
                            (r.isLeaving = !0),
                            (e.afterLeave = () => {
                                ((r.isLeaving = !1),
                                    n.job.flags & 8 || n.update(),
                                    delete e.afterLeave,
                                    (u = void 0));
                            }),
                            Qs(a)
                        );
                    s === `in-out` && c.type !== X
                        ? (e.delayLeave = (e, t, n) => {
                              let i = Xs(r, u);
                              ((i[String(u.key)] = u),
                                  (e[Vs] = () => {
                                      (t(),
                                          (e[Vs] = void 0),
                                          delete l.delayedLeave,
                                          (u = void 0));
                                  }),
                                  (l.delayedLeave = () => {
                                      (n(),
                                          delete l.delayedLeave,
                                          (u = void 0));
                                  }));
                          })
                        : (u = void 0);
                } else u &&= void 0;
                return a;
            };
        },
    };
function Js(e) {
    let t = e[0];
    if (e.length > 1) {
        for (let n of e)
            if (n.type !== X) {
                t = n;
                break;
            }
    }
    return t;
}
var Ys = qs;
function Xs(e, t) {
    let { leavingVNodes: n } = e,
        r = n.get(t.type);
    return (r || ((r = Object.create(null)), n.set(t.type, r)), r);
}
function Zs(e, t, n, r, i) {
    let {
            appear: a,
            mode: o,
            persisted: s = !1,
            onBeforeEnter: c,
            onEnter: l,
            onAfterEnter: u,
            onEnterCancelled: d,
            onBeforeLeave: f,
            onLeave: p,
            onAfterLeave: m,
            onLeaveCancelled: h,
            onBeforeAppear: g,
            onAppear: _,
            onAfterAppear: v,
            onAppearCancelled: y,
        } = t,
        b = String(e.key),
        x = Xs(n, e),
        S = (e, t) => {
            e && ss(e, r, 9, t);
        },
        C = (e, t) => {
            let n = t[1];
            (S(e, t),
                B(e)
                    ? e.every((e) => e.length <= 1) && n()
                    : e.length <= 1 && n());
        },
        w = {
            mode: o,
            persisted: s,
            beforeEnter(t) {
                let r = c;
                if (!n.isMounted) {
                    if (a) r = g || c;
                    else return;
                }
                t[Vs] && t[Vs](!0);
                let i = x[b];
                (i && yu(e, i) && i.el[Vs] && i.el[Vs](), S(r, [t]));
            },
            enter(t) {
                if (x[b] === e) return;
                let r = l,
                    i = u,
                    o = d;
                if (!n.isMounted) {
                    if (a) ((r = _ || l), (i = v || u), (o = y || d));
                    else return;
                }
                let s = !1;
                t[Hs] = (e) => {
                    s ||
                        ((s = !0),
                        S(e ? o : i, [t]),
                        w.delayedLeave && w.delayedLeave(),
                        (t[Hs] = void 0));
                };
                let c = t[Hs].bind(null, !1);
                r ? C(r, [t, c]) : c();
            },
            leave(t, r) {
                let i = String(e.key);
                if ((t[Hs] && t[Hs](!0), n.isUnmounting)) return r();
                S(f, [t]);
                let a = !1;
                t[Vs] = (n) => {
                    a ||
                        ((a = !0),
                        r(),
                        S(n ? h : m, [t]),
                        (t[Vs] = void 0),
                        x[i] === e && delete x[i]);
                };
                let o = t[Vs].bind(null, !1);
                ((x[i] = e), p ? C(p, [t, o]) : o());
            },
            clone(e) {
                let a = Zs(e, t, n, r, i);
                return (i && i(a), a);
            },
        };
    return w;
}
function Qs(e) {
    if (Tc(e)) return ((e = Tu(e)), (e.children = null), e);
}
function $s(e) {
    if (!Tc(e)) return Bs(e.type) && e.children ? Js(e.children) : e;
    if (e.component) return e.component.subTree;
    let { shapeFlag: t, children: n } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && V(n.default)) return n.default();
    }
}
function ec(e, t) {
    if (e.shapeFlag & 6 && e.component) {
        e.transition = t;
        let n = e.component.subTree;
        ec((Bs(n.type) && $s(n)) || n, t);
    } else
        e.shapeFlag & 128
            ? ((e.ssContent.transition = t.clone(e.ssContent)),
              (e.ssFallback.transition = t.clone(e.ssFallback)))
            : (e.transition = t);
}
function tc(e, t = !1, n) {
    let r = [],
        i = 0;
    for (let a = 0; a < e.length; a++) {
        let o = e[a],
            s =
                n == null
                    ? o.key
                    : String(n) + String(o.key == null ? a : o.key);
        o.type === ou
            ? (o.patchFlag & 128 && i++, (r = r.concat(tc(o.children, t, s))))
            : (t || o.type !== X) && r.push(s == null ? o : Tu(o, { key: s }));
    }
    if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
    return r;
}
function nc(e, t) {
    return V(e) ? R({ name: e.name }, t, { setup: e }) : e;
}
function rc(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + `-`, 0, 0];
}
function ic(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var ac = new WeakMap();
function oc(e, t, n, r, i = !1) {
    if (B(e)) {
        e.forEach((e, a) => oc(e, t && (B(t) ? t[a] : t), n, r, i));
        return;
    }
    if (wc(r) && !i) {
        r.shapeFlag & 512 &&
            r.type.__asyncResolved &&
            r.component.subTree.component &&
            oc(e, t, n, r.component.subTree);
        return;
    }
    let a = r.shapeFlag & 4 ? Zu(r.component) : r.el,
        o = i ? null : a,
        { i: s, r: c } = e,
        l = t && t.r,
        u = s.refs === L ? (s.refs = {}) : s.refs,
        d = s.setupState,
        f = q(d),
        p = d === L ? ji : (e) => !ic(u, e) && z(f, e),
        m = (e, t) => !(t && ic(u, t));
    if (l != null && l !== c) {
        if ((sc(t), H(l))) ((u[l] = null), p(l) && (d[l] = null));
        else if (J(l)) {
            let e = t;
            (m(l, e.k) && (l.value = null), e.k && (u[e.k] = null));
        }
    }
    if (V(c)) os(c, s, 12, [o, u]);
    else {
        let t = H(c),
            r = J(c);
        if (t || r) {
            let s = () => {
                if (e.f) {
                    let n = t
                        ? p(c)
                            ? d[c]
                            : u[c]
                        : m(c) || !e.k
                          ? c.value
                          : u[e.k];
                    if (i) B(n) && Pi(n, a);
                    else if (B(n)) n.includes(a) || n.push(a);
                    else if (t) ((u[c] = [a]), p(c) && (d[c] = u[c]));
                    else {
                        let t = [a];
                        (m(c, e.k) && (c.value = t), e.k && (u[e.k] = t));
                    }
                } else
                    t
                        ? ((u[c] = o), p(c) && (d[c] = o))
                        : r &&
                          (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
            };
            if (o) {
                let t = () => {
                    (s(), ac.delete(e));
                };
                ((t.id = -1), ac.set(e, t), Kl(t, n));
            } else (sc(e), s());
        }
    }
}
function sc(e) {
    let t = ac.get(e);
    t && ((t.flags |= 8), ac.delete(e));
}
var cc = !1,
    lc = () => {
        cc ||=
            (console.error(`Hydration completed but contains mismatches.`), !0);
    },
    uc = (e) => e.namespaceURI.includes(`svg`) && e.tagName !== `foreignObject`,
    dc = (e) => e.namespaceURI.includes(`MathML`),
    fc = (e) => {
        if (e.nodeType === 1) {
            if (uc(e)) return `svg`;
            if (dc(e)) return `mathml`;
        }
    },
    pc = (e) => e.nodeType === 8;
function mc(e) {
    let {
            mt: t,
            p: n,
            o: {
                patchProp: r,
                createText: i,
                nextSibling: a,
                parentNode: o,
                remove: s,
                insert: c,
                createComment: l,
            },
        } = e,
        u = (e, t) => {
            if (!t.hasChildNodes()) {
                (n(null, e, t), Cs(), (t._vnode = e));
                return;
            }
            (d(t.firstChild, e, null, null, null), Cs(), (t._vnode = e));
        },
        d = (n, r, s, l, u, y = !1) => {
            y ||= !!r.dynamicChildren;
            let b = pc(n) && n.data === `[`,
                x = () => h(n, r, s, l, u, b),
                { type: S, ref: C, shapeFlag: w, patchFlag: ee } = r,
                T = n.nodeType;
            ((r.el = n), ee === -2 && ((y = !1), (r.dynamicChildren = null)));
            let E = null;
            switch (S) {
                case su:
                    T === 3
                        ? (n.data !== r.children &&
                              (lc(), (n.data = r.children)),
                          (E = a(n)))
                        : r.children === ``
                          ? (c((r.el = i(``)), o(n), n), (E = n))
                          : (E = x());
                    break;
                case X:
                    v(n)
                        ? ((E = a(n)), _((r.el = n.content.firstChild), n, s))
                        : (E = T !== 8 || b ? x() : a(n));
                    break;
                case cu:
                    if (
                        (b && ((n = a(n)), (T = n.nodeType)),
                        T === 1 || T === 3)
                    ) {
                        E = n;
                        let e = !r.children.length;
                        for (let t = 0; t < r.staticCount; t++)
                            (e &&
                                (r.children +=
                                    E.nodeType === 1 ? E.outerHTML : E.data),
                                t === r.staticCount - 1 && (r.anchor = E),
                                (E = a(E)));
                        return b ? a(E) : E;
                    }
                    x();
                    break;
                case ou:
                    E = b ? m(n, r, s, l, u, y) : x();
                    break;
                default:
                    if (w & 1)
                        E =
                            (T !== 1 ||
                                r.type.toLowerCase() !==
                                    n.tagName.toLowerCase()) &&
                            !v(n)
                                ? x()
                                : f(n, r, s, l, u, y);
                    else if (w & 6) {
                        r.slotScopeIds = u;
                        let e = o(n);
                        if (
                            ((E = b
                                ? g(n)
                                : pc(n) && n.data === `teleport start`
                                  ? g(n, n.data, `teleport end`)
                                  : a(n)),
                            t(r, e, null, s, l, fc(e), y),
                            wc(r) && !r.component.subTree)
                        ) {
                            let t;
                            (b
                                ? ((t = Z(cu)),
                                  (t.anchor = E
                                      ? E.previousSibling
                                      : e.lastChild))
                                : (t = n.nodeType === 3 ? Eu(``) : Z(`div`)),
                                (t.el = n),
                                (r.component.subTree = t));
                        }
                    } else
                        w & 64
                            ? (E =
                                  T === 8
                                      ? r.type.hydrate(n, r, s, l, u, y, e, p)
                                      : x())
                            : w & 128 &&
                              (E = r.type.hydrate(
                                  n,
                                  r,
                                  s,
                                  l,
                                  fc(o(n)),
                                  u,
                                  y,
                                  e,
                                  d,
                              ));
            }
            return (C != null && oc(C, null, l, r), E);
        },
        f = (e, t, n, i, a, o) => {
            o ||= !!t.dynamicChildren;
            let {
                    type: c,
                    dynamicProps: l,
                    props: u,
                    patchFlag: d,
                    shapeFlag: f,
                    dirs: m,
                    transition: h,
                } = t,
                g = c === `input` || c === `option`,
                y = !!l;
            if (g || y || d !== -1) {
                m && As(t, null, n, `created`);
                let c = !1;
                if (v(e)) {
                    c =
                        Ql(null, h) &&
                        n &&
                        n.vnode.props &&
                        n.vnode.props.appear;
                    let r = e.content.firstChild;
                    if (c) {
                        let e = r.getAttribute(`class`);
                        (e && (r.$cls = e), h.beforeEnter(r));
                    }
                    (_(r, e, n), (t.el = e = r));
                }
                if (f & 16 && !(u && (u.innerHTML || u.textContent))) {
                    let r = p(e.firstChild, t, e, n, i, a, o);
                    for (r && !yc(e, 1) && lc(); r;) {
                        let e = r;
                        ((r = r.nextSibling), s(e));
                    }
                } else if (f & 8) {
                    let n = t.children;
                    n[0] ===
                        `
` &&
                        (e.tagName === `PRE` || e.tagName === `TEXTAREA`) &&
                        (n = n.slice(1));
                    let { textContent: r } = e;
                    r !== n &&
                        r !==
                            n.replace(
                                /\r\n|\r/g,
                                `
`,
                            ) &&
                        (yc(e, 0) || lc(), (e.textContent = t.children));
                }
                if (u) {
                    if (g || y || !o || d & 48) {
                        let t = e.tagName.includes(`-`),
                            i = e.namespaceURI.includes(`svg`)
                                ? `svg`
                                : e.namespaceURI.includes(`MathML`)
                                  ? `mathml`
                                  : void 0;
                        for (let a in u)
                            if (
                                (g &&
                                    (a.endsWith(`value`) ||
                                        a === `indeterminate`)) ||
                                (Mi(a) && !Ki(a)) ||
                                a[0] === `.` ||
                                (t && !Ki(a)) ||
                                (l && l.includes(a))
                            ) {
                                if (gc(e, a, u[a])) continue;
                                r(e, a, null, u[a], i, n);
                            }
                    } else if (u.onClick)
                        r(e, `onClick`, null, u.onClick, void 0, n);
                    else if (d & 4 && Ro(u.style))
                        for (let e in u.style) u.style[e];
                }
                let b;
                ((b = u && u.onVnodeBeforeMount) && Nu(b, n, t),
                    m && As(t, null, n, `beforeMount`),
                    ((b = u && u.onVnodeMounted) || m || c) &&
                        au(() => {
                            (b && Nu(b, n, t),
                                c && h.enter(e),
                                m && As(t, null, n, `mounted`));
                        }, i));
            }
            return e.nextSibling;
        },
        p = (e, t, r, o, s, l, u) => {
            u ||= !!t.dynamicChildren;
            let f = t.children,
                p = f.length,
                m = !1;
            for (let t = 0; t < p; t++) {
                let h = u ? f[t] : (f[t] = ku(f[t])),
                    g = h.type === su;
                e
                    ? (g &&
                          !u &&
                          t + 1 < p &&
                          ku(f[t + 1]).type === su &&
                          (c(i(e.data.slice(h.children.length)), r, a(e)),
                          (e.data = h.children)),
                      (e = d(e, h, o, s, l, u)))
                    : g && !h.children
                      ? c((h.el = i(``)), r)
                      : (m || ((m = !0), yc(r, 1) || lc()),
                        n(null, h, r, null, o, s, fc(r), l));
            }
            return e;
        },
        m = (e, t, n, r, i, s) => {
            let { slotScopeIds: u } = t;
            u && (i = i ? i.concat(u) : u);
            let d = o(e),
                f = p(a(e), t, d, n, r, i, s);
            return f && pc(f) && f.data === `]`
                ? a((t.anchor = f))
                : (lc(), c((t.anchor = l(`]`)), d, f), f);
        },
        h = (e, t, r, i, c, l) => {
            if ((xc(e, t) || lc(), (t.el = null), l)) {
                let t = g(e);
                for (;;) {
                    let n = a(e);
                    if (n && n !== t) s(n);
                    else break;
                }
            }
            let u = a(e),
                d = o(e);
            return (
                s(e),
                n(null, t, d, u, r, i, fc(d), c),
                r && ((r.vnode.el = t.el), Dl(r, t.el)),
                u
            );
        },
        g = (e, t = `[`, n = `]`) => {
            let r = 0;
            for (; e;)
                if (
                    ((e = a(e)),
                    e && pc(e) && (e.data === t && r++, e.data === n))
                ) {
                    if (r === 0) return a(e);
                    r--;
                }
            return e;
        },
        _ = (e, t, n) => {
            let r = t.parentNode;
            r && r.replaceChild(e, t);
            let i = n;
            for (; i;)
                (i.vnode.el === t && (i.vnode.el = i.subTree.el = e),
                    (i = i.parent));
        },
        v = (e) => e.nodeType === 1 && e.tagName === `TEMPLATE`;
    return [u, d];
}
var hc = new Set([`src`, `srcset`, `href`, `poster`]);
function gc(e, t, n) {
    return hc.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1;
}
var _c = `data-allow-mismatch`,
    vc = { 0: `text`, 1: `children`, 2: `class`, 3: `style`, 4: `attribute` };
function yc(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(_c);) e = e.parentElement;
    return bc(e && e.getAttribute(_c), t);
}
function bc(e, t) {
    if (e == null) return !1;
    if (e === ``) return !0;
    {
        let n = e.split(`,`);
        return t === 0 && n.includes(`children`) ? !0 : n.includes(vc[t]);
    }
}
function xc(e, t) {
    return yc(e.parentElement, 1) || Sc(e) || Cc(t);
}
function Sc(e) {
    return e.nodeType === 1 && bc(e.getAttribute(_c), 1);
}
function Cc({ props: e }) {
    let t = e && e[_c];
    return typeof t == `string` && bc(t, 1);
}
(oa().requestIdleCallback, oa().cancelIdleCallback);
var wc = (e) => !!e.type.__asyncLoader,
    Tc = (e) => e.type.__isKeepAlive;
function Ec(e, t) {
    Oc(e, `a`, t);
}
function Dc(e, t) {
    Oc(e, `da`, t);
}
function Oc(e, t, n = Lu) {
    let r = (e.__wdc ||= () => {
        let t = n;
        for (; t;) {
            if (t.isDeactivated) return;
            t = t.parent;
        }
        return e();
    });
    if ((Ac(t, r, n), n)) {
        let e = n.parent;
        for (; e && e.parent;)
            (Tc(e.parent.vnode) && kc(r, t, n, e), (e = e.parent));
    }
}
function kc(e, t, n, r) {
    let i = Ac(t, e, r, !0);
    Lc(() => {
        Pi(r[t], i);
    }, n);
}
function Ac(e, t, n = Lu, r = !1) {
    if (n) {
        let i = n[e] || (n[e] = []),
            a = (t.__weh ||= (...r) => {
                Ha();
                let i = Vu(n),
                    a = ss(t, n, e, r);
                return (i(), Ua(), a);
            });
        return (r ? i.unshift(a) : i.push(a), a);
    }
}
var jc =
        (e) =>
        (t, n = Lu) => {
            (!Wu || e === `sp`) && Ac(e, (...e) => t(...e), n);
        },
    Mc = jc(`bm`),
    Nc = jc(`m`),
    Pc = jc(`bu`),
    Fc = jc(`u`),
    Ic = jc(`bum`),
    Lc = jc(`um`),
    Rc = jc(`sp`),
    zc = jc(`rtg`),
    Bc = jc(`rtc`);
function Vc(e, t = Lu) {
    Ac(`ec`, e, t);
}
var Hc = Symbol.for(`v-ndc`);
function Uc(e, t, n, r) {
    let i,
        a = n && n[r],
        o = B(e);
    if (o || H(e)) {
        let n = o && Ro(e),
            r = !1,
            s = !1;
        (n && ((r = !Bo(e)), (s = zo(e)), (e = to(e))), (i = Array(e.length)));
        for (let n = 0, o = e.length; n < o; n++)
            i[n] = t(
                r ? (s ? Wo(Uo(e[n])) : Uo(e[n])) : e[n],
                n,
                void 0,
                a && a[n],
            );
    } else if (typeof e == `number`) {
        i = Array(e);
        for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
    } else if (U(e)) {
        if (e[Symbol.iterator])
            i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
        else {
            let n = Object.keys(e);
            i = Array(n.length);
            for (let r = 0, o = n.length; r < o; r++) {
                let o = n[r];
                i[r] = t(e[o], o, r, a && a[r]);
            }
        }
    } else i = [];
    return (n && (n[r] = i), i);
}
function Wc(e, t, n, r, i, a) {
    if (((n ??= {}), Y.ce || (Y.parent && wc(Y.parent) && Y.parent.ce))) {
        let e = a != null && n.key == null ? R({}, n, { key: a }) : n,
            i = Object.keys(e).length > 0;
        return (
            t !== 'default' && (e.name = t),
            du(),
            _u(ou, null, [Z(`slot`, e, r && r())], i ? -2 : 64)
        );
    }
    let o = e[t];
    o && o._c && (o._d = !1);
    let s = lu.length;
    du();
    let c;
    try {
        let i = o && Gc(o(n)),
            s = n.key || a || (i && i.key);
        c = _u(
            ou,
            { key: (s && !zi(s) ? s : `_${t}`) + (!i && r ? `_fb` : ``) },
            i || (r ? r() : []),
            i && e._ === 1 ? 64 : -2,
        );
    } catch (e) {
        for (let e = lu.length; e > s; e--) fu();
        throw e;
    } finally {
        o && o._c && (o._d = !0);
    }
    return (!i && c.scopeId && (c.slotScopeIds = [c.scopeId + `-s`]), c);
}
function Gc(e) {
    return e.some(
        (e) => !vu(e) || !(e.type === X || (e.type === ou && !Gc(e.children))),
    )
        ? e
        : null;
}
var Kc = (e) => (e ? (Uu(e) ? Zu(e) : Kc(e.parent)) : null),
    qc = R(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Kc(e.parent),
        $root: (e) => Kc(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => nl(e),
        $forceUpdate: (e) =>
            (e.f ||= () => {
                ys(e.update);
            }),
        $nextTick: (e) => (e.n ||= _s.bind(e.proxy)),
        $watch: (e) => Ls.bind(e),
    }),
    Jc = (e, t) => e !== L && !e.__isScriptSetup && z(e, t),
    Yc = {
        get({ _: e }, t) {
            if (t === `__v_skip`) return !0;
            let {
                ctx: n,
                setupState: r,
                data: i,
                props: a,
                accessCache: o,
                type: s,
                appContext: c,
            } = e;
            if (t[0] !== `$`) {
                let e = o[t];
                if (e !== void 0)
                    switch (e) {
                        case 1:
                            return r[t];
                        case 2:
                            return i[t];
                        case 4:
                            return n[t];
                        case 3:
                            return a[t];
                    }
                else if (Jc(r, t)) return ((o[t] = 1), r[t]);
                else if (i !== L && z(i, t)) return ((o[t] = 2), i[t]);
                else if (z(a, t)) return ((o[t] = 3), a[t]);
                else if (n !== L && z(n, t)) return ((o[t] = 4), n[t]);
                else Zc && (o[t] = 0);
            }
            let l = qc[t],
                u,
                d;
            if (l) return (t === `$attrs` && K(e.attrs, `get`, ``), l(e));
            if ((u = s.__cssModules) && (u = u[t])) return u;
            if (n !== L && z(n, t)) return ((o[t] = 4), n[t]);
            if (((d = c.config.globalProperties), z(d, t))) return d[t];
        },
        set({ _: e }, t, n) {
            let { data: r, setupState: i, ctx: a } = e;
            return Jc(i, t)
                ? ((i[t] = n), !0)
                : r !== L && z(r, t)
                  ? ((r[t] = n), !0)
                  : z(e.props, t) || (t[0] === `$` && t.slice(1) in e)
                    ? !1
                    : ((a[t] = n), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: t,
                    accessCache: n,
                    ctx: r,
                    appContext: i,
                    props: a,
                    type: o,
                },
            },
            s,
        ) {
            let c;
            return !!(
                n[s] ||
                (e !== L && s[0] !== `$` && z(e, s)) ||
                Jc(t, s) ||
                z(a, s) ||
                z(r, s) ||
                z(qc, s) ||
                z(i.config.globalProperties, s) ||
                ((c = o.__cssModules) && c[s])
            );
        },
        defineProperty(e, t, n) {
            return (
                n.get == null
                    ? z(n, `value`) && this.set(e, t, n.value, null)
                    : (e._.accessCache[t] = 0),
                Reflect.defineProperty(e, t, n)
            );
        },
    };
function Xc(e) {
    return B(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
}
var Zc = !0;
function Qc(e) {
    let t = nl(e),
        n = e.proxy,
        r = e.ctx;
    ((Zc = !1), t.beforeCreate && el(t.beforeCreate, e, `bc`));
    let {
        data: i,
        computed: a,
        methods: o,
        watch: s,
        provide: c,
        inject: l,
        created: u,
        beforeMount: d,
        mounted: f,
        beforeUpdate: p,
        updated: m,
        activated: h,
        deactivated: g,
        beforeDestroy: _,
        beforeUnmount: v,
        destroyed: y,
        unmounted: b,
        render: x,
        renderTracked: S,
        renderTriggered: C,
        errorCaptured: w,
        serverPrefetch: ee,
        expose: T,
        inheritAttrs: E,
        components: te,
        directives: ne,
        filters: re,
    } = t;
    if ((l && $c(l, r, null), o))
        for (let e in o) {
            let t = o[e];
            V(t) && (r[e] = t.bind(n));
        }
    if (i) {
        let t = i.call(n, n);
        U(t) && (e.data = Po(t));
    }
    if (((Zc = !0), a))
        for (let e in a) {
            let t = a[e],
                i = Q({
                    get: V(t) ? t.bind(n, n) : V(t.get) ? t.get.bind(n, n) : Ai,
                    set: !V(t) && V(t.set) ? t.set.bind(n) : Ai,
                });
            Object.defineProperty(r, e, {
                enumerable: !0,
                configurable: !0,
                get: () => i.value,
                set: (e) => (i.value = e),
            });
        }
    if (s) for (let e in s) tl(s[e], r, n, e);
    if (c) {
        let e = V(c) ? c.call(n) : c;
        Reflect.ownKeys(e).forEach((t) => {
            js(t, e[t]);
        });
    }
    u && el(u, e, `c`);
    function ie(e, t) {
        B(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
    }
    if (
        (ie(Mc, d),
        ie(Nc, f),
        ie(Pc, p),
        ie(Fc, m),
        ie(Ec, h),
        ie(Dc, g),
        ie(Vc, w),
        ie(Bc, S),
        ie(zc, C),
        ie(Ic, v),
        ie(Lc, b),
        ie(Rc, ee),
        B(T))
    ) {
        if (T.length) {
            let t = (e.exposed ||= {});
            T.forEach((e) => {
                Object.defineProperty(t, e, {
                    get: () => n[e],
                    set: (t) => (n[e] = t),
                    enumerable: !0,
                });
            });
        } else e.exposed ||= {};
    }
    (x && e.render === Ai && (e.render = x),
        E != null && (e.inheritAttrs = E),
        te && (e.components = te),
        ne && (e.directives = ne),
        ee && rc(e));
}
function $c(e, t, n = Ai) {
    B(e) && (e = sl(e));
    for (let n in e) {
        let r = e[n],
            i;
        ((i = U(r)
            ? `default` in r
                ? Ms(r.from || n, r.default, !0)
                : Ms(r.from || n)
            : Ms(r)),
            J(i)
                ? Object.defineProperty(t, n, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => i.value,
                      set: (e) => (i.value = e),
                  })
                : (t[n] = i));
    }
}
function el(e, t, n) {
    ss(B(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function tl(e, t, n, r) {
    let i = r.includes(`.`) ? Rs(n, r) : () => n[r];
    if (H(e)) {
        let n = t[e];
        V(n) && Fs(i, n);
    } else if (V(e)) Fs(i, e.bind(n));
    else if (U(e)) {
        if (B(e)) e.forEach((e) => tl(e, t, n, r));
        else {
            let r = V(e.handler) ? e.handler.bind(n) : t[e.handler];
            V(r) && Fs(i, r, e);
        }
    }
}
function nl(e) {
    let t = e.type,
        { mixins: n, extends: r } = t,
        {
            mixins: i,
            optionsCache: a,
            config: { optionMergeStrategies: o },
        } = e.appContext,
        s = a.get(t),
        c;
    return (
        s
            ? (c = s)
            : !i.length && !n && !r
              ? (c = t)
              : ((c = {}),
                i.length && i.forEach((e) => rl(c, e, o, !0)),
                rl(c, t, o)),
        U(t) && a.set(t, c),
        c
    );
}
function rl(e, t, n, r = !1) {
    let { mixins: i, extends: a } = t;
    (a && rl(e, a, n, !0), i && i.forEach((t) => rl(e, t, n, !0)));
    for (let i in t)
        if (!(r && i === `expose`)) {
            let r = il[i] || (n && n[i]);
            e[i] = r ? r(e[i], t[i]) : t[i];
        }
    return e;
}
var il = {
    data: al,
    props: ul,
    emits: ul,
    methods: ll,
    computed: ll,
    beforeCreate: cl,
    created: cl,
    beforeMount: cl,
    mounted: cl,
    beforeUpdate: cl,
    updated: cl,
    beforeDestroy: cl,
    beforeUnmount: cl,
    destroyed: cl,
    unmounted: cl,
    activated: cl,
    deactivated: cl,
    errorCaptured: cl,
    serverPrefetch: cl,
    components: ll,
    directives: ll,
    watch: dl,
    provide: al,
    inject: ol,
};
function al(e, t) {
    return t
        ? e
            ? function () {
                  return R(
                      V(e) ? e.call(this, this) : e,
                      V(t) ? t.call(this, this) : t,
                  );
              }
            : t
        : e;
}
function ol(e, t) {
    return ll(sl(e), sl(t));
}
function sl(e) {
    if (B(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t;
    }
    return e;
}
function cl(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function ll(e, t) {
    return e ? R(Object.create(null), e, t) : t;
}
function ul(e, t) {
    return e
        ? B(e) && B(t)
            ? [...new Set([...e, ...t])]
            : R(Object.create(null), Xc(e), Xc(t ?? {}))
        : t;
}
function dl(e, t) {
    if (!e) return t;
    if (!t) return e;
    let n = R(Object.create(null), e);
    for (let r in t) n[r] = cl(e[r], t[r]);
    return n;
}
function fl() {
    return {
        app: null,
        config: {
            isNativeTag: ji,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
var pl = 0;
function ml(e, t) {
    return function (n, r = null) {
        (V(n) || (n = R({}, n)), r != null && !U(r) && (r = null));
        let i = fl(),
            a = new WeakSet(),
            o = [],
            s = !1,
            c = (i.app = {
                _uid: pl++,
                _component: n,
                _props: r,
                _container: null,
                _context: i,
                _instance: null,
                version: ed,
                get config() {
                    return i.config;
                },
                set config(e) {},
                use(e, ...t) {
                    return (
                        a.has(e) ||
                            (e && V(e.install)
                                ? (a.add(e), e.install(c, ...t))
                                : V(e) && (a.add(e), e(c, ...t))),
                        c
                    );
                },
                mixin(e) {
                    return (i.mixins.includes(e) || i.mixins.push(e), c);
                },
                component(e, t) {
                    return t ? ((i.components[e] = t), c) : i.components[e];
                },
                directive(e, t) {
                    return t ? ((i.directives[e] = t), c) : i.directives[e];
                },
                mount(a, o, l) {
                    if (!s) {
                        let u = c._ceVNode || Z(n, r);
                        return (
                            (u.appContext = i),
                            l === !0 ? (l = `svg`) : l === !1 && (l = void 0),
                            o && t ? t(u, a) : e(u, a, l),
                            (s = !0),
                            (c._container = a),
                            (a.__vue_app__ = c),
                            Zu(u.component)
                        );
                    }
                },
                onUnmount(e) {
                    o.push(e);
                },
                unmount() {
                    s &&
                        (ss(o, c._instance, 16),
                        e(null, c._container),
                        delete c._container.__vue_app__);
                },
                provide(e, t) {
                    return ((i.provides[e] = t), c);
                },
                runWithContext(e) {
                    let t = hl;
                    hl = c;
                    try {
                        return e();
                    } finally {
                        hl = t;
                    }
                },
            });
        return c;
    };
}
var hl = null,
    gl = (e, t) =>
        t === `modelValue` || t === `model-value`
            ? e.modelModifiers
            : e[`${t}Modifiers`] ||
              e[`${Yi(t)}Modifiers`] ||
              e[`${Zi(t)}Modifiers`];
function _l(e, t, ...n) {
    if (e.isUnmounted) return;
    let r = e.vnode.props || L,
        i = n,
        a = t.startsWith(`update:`),
        o = a && gl(r, t.slice(7));
    o &&
        (o.trim && (i = n.map((e) => (H(e) ? e.trim() : e))),
        o.number && (i = i.map(ra)));
    let s,
        c = r[(s = $i(t))] || r[(s = $i(Yi(t)))];
    (!c && a && (c = r[(s = $i(Zi(t)))]), c && ss(c, e, 6, i));
    let l = r[s + `Once`];
    if (l) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[s]) return;
        ((e.emitted[s] = !0), ss(l, e, 6, i));
    }
}
var vl = new WeakMap();
function yl(e, t, n = !1) {
    let r = n ? vl : t.emitsCache,
        i = r.get(e);
    if (i !== void 0) return i;
    let a = e.emits,
        o = {},
        s = !1;
    if (!V(e)) {
        let r = (e) => {
            let n = yl(e, t, !0);
            n && ((s = !0), R(o, n));
        };
        (!n && t.mixins.length && t.mixins.forEach(r),
            e.extends && r(e.extends),
            e.mixins && e.mixins.forEach(r));
    }
    return !a && !s
        ? (U(e) && r.set(e, null), null)
        : (B(a) ? a.forEach((e) => (o[e] = null)) : R(o, a),
          U(e) && r.set(e, o),
          o);
}
function bl(e, t) {
    return !e || !Mi(t)
        ? !1
        : ((t = t.slice(2)),
          (t = t === `Once` ? t : t.replace(/Once$/, ``)),
          z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Zi(t)) || z(e, t));
}
function xl(e) {
    let {
            type: t,
            vnode: n,
            proxy: r,
            withProxy: i,
            propsOptions: [a],
            slots: o,
            attrs: s,
            emit: c,
            render: l,
            renderCache: u,
            props: d,
            data: f,
            setupState: p,
            ctx: m,
            inheritAttrs: h,
        } = e,
        g = Ds(e),
        _,
        v;
    try {
        if (n.shapeFlag & 4) {
            let e = i || r,
                t = e;
            ((_ = ku(l.call(t, e, u, d, p, f, m))), (v = s));
        } else {
            let e = t;
            ((_ = ku(
                e.length > 1
                    ? e(d, { attrs: s, slots: o, emit: c })
                    : e(d, null),
            )),
                (v = t.props ? s : Sl(s)));
        }
    } catch (t) {
        ((lu.length = 0), cs(t, e, 1), (_ = Z(X)));
    }
    let y = _;
    if (v && h !== !1) {
        let e = Object.keys(v),
            { shapeFlag: t } = y;
        e.length &&
            t & 7 &&
            (a && e.some(Ni) && (v = Cl(v, a)), (y = Tu(y, v, !1, !0)));
    }
    return (
        n.dirs &&
            ((y = Tu(y, null, !1, !0)),
            (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs)),
        n.transition && ec((Bs(y.type) && $s(y)) || y, n.transition),
        (_ = y),
        Ds(g),
        _
    );
}
var Sl = (e) => {
        let t;
        for (let n in e)
            (n === `class` || n === `style` || Mi(n)) && ((t ||= {})[n] = e[n]);
        return t;
    },
    Cl = (e, t) => {
        let n = {};
        for (let r in e) (!Ni(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n;
    };
function wl(e, t, n) {
    let { props: r, children: i, component: a } = e,
        { props: o, children: s, patchFlag: c } = t,
        l = a.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return r ? Tl(r, o, l) : !!o;
        if (c & 8) {
            let e = t.dynamicProps;
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                if (El(o, r, n) && !bl(l, n)) return !0;
            }
        }
    } else
        return (i || s) && (!s || !s.$stable)
            ? !0
            : r === o
              ? !1
              : r
                ? !o || Tl(r, o, l)
                : !!o;
    return !1;
}
function Tl(e, t, n) {
    let r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < r.length; i++) {
        let a = r[i];
        if (El(t, e, a) && !bl(n, a)) return !0;
    }
    return !1;
}
function El(e, t, n) {
    let r = e[n],
        i = t[n];
    return n === `style` && U(r) && U(i) ? !va(r, i) : r !== i;
}
function Dl({ vnode: e, parent: t, suspense: n }, r) {
    for (; t;) {
        let n = t.subTree;
        if (
            (n.suspense &&
                n.suspense.activeBranch === e &&
                ((n.suspense.vnode.el = n.el = r), (e = n)),
            n === e)
        )
            (((e = t.vnode).el = r), (t = t.parent));
        else break;
    }
    n && n.activeBranch === e && (n.vnode.el = r);
}
var Ol = {},
    kl = () => Object.create(Ol),
    Al = (e) => Object.getPrototypeOf(e) === Ol;
function jl(e, t, n, r = !1) {
    let i = {},
        a = kl();
    ((e.propsDefaults = Object.create(null)), Nl(e, t, i, a));
    for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
    ((e.props = n ? (r ? i : Fo(i)) : e.type.props ? i : a), (e.attrs = a));
}
function Ml(e, t, n, r) {
    let {
            props: i,
            attrs: a,
            vnode: { patchFlag: o },
        } = e,
        s = q(i),
        [c] = e.propsOptions,
        l = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            let n = e.vnode.dynamicProps;
            for (let r = 0; r < n.length; r++) {
                let o = n[r];
                if (bl(e.emitsOptions, o)) continue;
                let u = t[o];
                if (c) {
                    if (z(a, o)) u !== a[o] && ((a[o] = u), (l = !0));
                    else {
                        let t = Yi(o);
                        i[t] = Pl(c, s, t, u, e, !1);
                    }
                } else u !== a[o] && ((a[o] = u), (l = !0));
            }
        }
    } else {
        Nl(e, t, i, a) && (l = !0);
        let r;
        for (let a in s)
            (!t || (!z(t, a) && ((r = Zi(a)) === a || !z(t, r)))) &&
                (c
                    ? n &&
                      (n[a] !== void 0 || n[r] !== void 0) &&
                      (i[a] = Pl(c, s, a, void 0, e, !0))
                    : delete i[a]);
        if (a !== s)
            for (let e in a) (!t || !z(t, e)) && (delete a[e], (l = !0));
    }
    l && $a(e.attrs, `set`, ``);
}
function Nl(e, t, n, r) {
    let [i, a] = e.propsOptions,
        o = !1,
        s;
    if (t)
        for (let c in t) {
            if (Ki(c)) continue;
            let l = t[c],
                u;
            i && z(i, (u = Yi(c)))
                ? !a || !a.includes(u)
                    ? (n[u] = l)
                    : ((s ||= {})[u] = l)
                : bl(e.emitsOptions, c) ||
                  ((!(c in r) || l !== r[c]) && ((r[c] = l), (o = !0)));
        }
    if (a) {
        let t = q(n),
            r = s || L;
        for (let o = 0; o < a.length; o++) {
            let s = a[o];
            n[s] = Pl(i, t, s, r[s], e, !z(r, s));
        }
    }
    return o;
}
function Pl(e, t, n, r, i, a) {
    let o = e[n];
    if (o != null) {
        let e = z(o, `default`);
        if (e && r === void 0) {
            let e = o.default;
            if (o.type !== Function && !o.skipFactory && V(e)) {
                let { propsDefaults: a } = i;
                if (n in a) r = a[n];
                else {
                    let o = Vu(i);
                    ((r = a[n] = e.call(null, t)), o());
                }
            } else r = e;
            i.ce && i.ce._setProp(n, r);
        }
        o[0] &&
            (a && !e
                ? (r = !1)
                : o[1] && (r === `` || r === Zi(n)) && (r = !0));
    }
    return r;
}
var Fl = new WeakMap();
function Il(e, t, n = !1) {
    let r = n ? Fl : t.propsCache,
        i = r.get(e);
    if (i) return i;
    let a = e.props,
        o = {},
        s = [],
        c = !1;
    if (!V(e)) {
        let r = (e) => {
            c = !0;
            let [n, r] = Il(e, t, !0);
            (R(o, n), r && s.push(...r));
        };
        (!n && t.mixins.length && t.mixins.forEach(r),
            e.extends && r(e.extends),
            e.mixins && e.mixins.forEach(r));
    }
    if (!a && !c) return (U(e) && r.set(e, ki), ki);
    if (B(a))
        for (let e = 0; e < a.length; e++) {
            let t = Yi(a[e]);
            Ll(t) && (o[t] = L);
        }
    else if (a)
        for (let e in a) {
            let t = Yi(e);
            if (Ll(t)) {
                let n = a[e],
                    r = (o[t] = B(n) || V(n) ? { type: n } : R({}, n)),
                    i = r.type,
                    c = !1,
                    l = !0;
                if (B(i))
                    for (let e = 0; e < i.length; ++e) {
                        let t = i[e],
                            n = V(t) && t.name;
                        if (n === `Boolean`) {
                            c = !0;
                            break;
                        }
                        n === `String` && (l = !1);
                    }
                else c = V(i) && i.name === `Boolean`;
                ((r[0] = c), (r[1] = l), (c || z(r, `default`)) && s.push(t));
            }
        }
    let l = [o, s];
    return (U(e) && r.set(e, l), l);
}
function Ll(e) {
    return e[0] !== `$` && !Ki(e);
}
var Rl = (e) => e === `_` || e === `_ctx` || e === `$stable`,
    zl = (e) => (B(e) ? e.map(ku) : [ku(e)]),
    Bl = (e, t, n) => {
        if (t._n) return t;
        let r = Os((...e) => zl(t(...e)), n);
        return ((r._c = !1), r);
    },
    Vl = (e, t, n) => {
        let r = e._ctx;
        for (let n in e) {
            if (Rl(n)) continue;
            let i = e[n];
            if (V(i)) t[n] = Bl(n, i, r);
            else if (i != null) {
                let e = zl(i);
                t[n] = () => e;
            }
        }
    },
    Hl = (e, t) => {
        let n = zl(t);
        e.slots.default = () => n;
    },
    Ul = (e, t, n) => {
        for (let r in t) (n || !Rl(r)) && (e[r] = t[r]);
    },
    Wl = (e, t, n) => {
        let r = (e.slots = kl());
        if (e.vnode.shapeFlag & 32) {
            let e = t._;
            e ? (Ul(r, t, n), n && na(r, `_`, e, !0)) : Vl(t, r);
        } else t && Hl(e, t);
    },
    Gl = (e, t, n) => {
        let { vnode: r, slots: i } = e,
            a = !0,
            o = L;
        if (r.shapeFlag & 32) {
            let e = t._;
            (e
                ? n && e === 1
                    ? (a = !1)
                    : Ul(i, t, n)
                : ((a = !t.$stable), Vl(t, i)),
                (o = t));
        } else t && (Hl(e, t), (o = { default: 1 }));
        if (a) for (let e in i) !Rl(e) && o[e] == null && delete i[e];
    },
    Kl = au;
function ql(e) {
    return Yl(e);
}
function Jl(e) {
    return Yl(e, mc);
}
function Yl(e, t) {
    let n = oa();
    n.__VUE__ = !0;
    let {
            insert: r,
            remove: i,
            patchProp: a,
            createElement: o,
            createText: s,
            createComment: c,
            setText: l,
            setElementText: u,
            parentNode: d,
            nextSibling: f,
            setScopeId: p = Ai,
            insertStaticContent: m,
        } = e,
        h = (
            e,
            t,
            n,
            r = null,
            i = null,
            a = null,
            o = void 0,
            s = null,
            c = !!t.dynamicChildren,
        ) => {
            if (e === t) return;
            (e && !yu(e, t) && ((r = he(e)), de(e, i, a, !0), (e = null)),
                t.patchFlag === -2 && ((c = !1), (t.dynamicChildren = null)));
            let { type: l, ref: u, shapeFlag: d } = t;
            switch (l) {
                case su:
                    g(e, t, n, r);
                    break;
                case X:
                    _(e, t, n, r);
                    break;
                case cu:
                    e ?? v(t, n, r, o);
                    break;
                case ou:
                    te(e, t, n, r, i, a, o, s, c);
                    break;
                default:
                    d & 1
                        ? x(e, t, n, r, i, a, o, s, c)
                        : d & 6
                          ? ne(e, t, n, r, i, a, o, s, c)
                          : (d & 64 || d & 128) &&
                            l.process(e, t, n, r, i, a, o, s, c, ve);
            }
            u != null && i
                ? oc(u, e && e.ref, a, t || e, !t)
                : u == null && e && e.ref != null && oc(e.ref, null, a, e, !0);
        },
        g = (e, t, n, i) => {
            if (e == null) r((t.el = s(t.children)), n, i);
            else {
                let n = (t.el = e.el);
                t.children !== e.children && l(n, t.children);
            }
        },
        _ = (e, t, n, i) => {
            e == null ? r((t.el = c(t.children || ``)), n, i) : (t.el = e.el);
        },
        v = (e, t, n, r) => {
            [e.el, e.anchor] = m(e.children, t, n, r, e.el, e.anchor);
        },
        y = ({ el: e, anchor: t }, n, i) => {
            let a;
            for (; e && e !== t;) ((a = f(e)), r(e, n, i), (e = a));
            r(t, n, i);
        },
        b = ({ el: e, anchor: t }) => {
            let n;
            for (; e && e !== t;) ((n = f(e)), i(e), (e = n));
            i(t);
        },
        x = (e, t, n, r, i, a, o, s, c) => {
            if (
                (t.type === `svg`
                    ? (o = `svg`)
                    : t.type === `math` && (o = `mathml`),
                e == null)
            )
                S(t, n, r, i, a, o, s, c);
            else {
                let n = e.el && e.el._isVueCE ? e.el : null;
                try {
                    (n && n._beginPatch(), ee(e, t, i, a, o, s, c));
                } finally {
                    n && n._endPatch();
                }
            }
        },
        S = (e, t, n, i, s, c, l, d) => {
            let f,
                p,
                { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
            if (
                ((f = e.el = o(e.type, c, m && m.is, m)),
                h & 8
                    ? u(f, e.children)
                    : h & 16 && w(e.children, f, null, i, s, Xl(e, c), l, d),
                _ && As(e, null, i, `created`),
                C(f, e, e.scopeId, l, i),
                m)
            ) {
                for (let e in m)
                    e !== `value` && !Ki(e) && a(f, e, null, m[e], c, i);
                (`value` in m && a(f, `value`, null, m.value, c),
                    (p = m.onVnodeBeforeMount) && Nu(p, i, e));
            }
            _ && As(e, null, i, `beforeMount`);
            let v = Ql(s, g);
            (v && g.beforeEnter(f),
                r(f, t, n),
                ((p = m && m.onVnodeMounted) || v || _) &&
                    Kl(() => {
                        try {
                            (p && Nu(p, i, e),
                                v && g.enter(f),
                                _ && As(e, null, i, `mounted`));
                        } finally {
                        }
                    }, s));
        },
        C = (e, t, n, r, i) => {
            if ((n && p(e, n), r))
                for (let t = 0; t < r.length; t++) p(e, r[t]);
            if (i) {
                let n = i.subTree;
                if (
                    t === n ||
                    (iu(n.type) && (n.ssContent === t || n.ssFallback === t))
                ) {
                    let t = i.vnode;
                    C(e, t, t.scopeId, t.slotScopeIds, i.parent);
                }
            }
        },
        w = (e, t, n, r, i, a, o, s, c = 0) => {
            for (let l = c; l < e.length; l++) {
                let c = (e[l] = s ? Au(e[l]) : ku(e[l]));
                h(null, c, t, n, r, i, a, o, s);
            }
        },
        ee = (e, t, n, r, i, o, s) => {
            let c = (t.el = e.el),
                { patchFlag: l, dynamicChildren: d, dirs: f } = t;
            l |= e.patchFlag & 16;
            let p = e.props || L,
                m = t.props || L,
                h;
            if (
                (n && Zl(n, !1),
                (h = m.onVnodeBeforeUpdate) && Nu(h, n, t, e),
                f && As(t, e, n, `beforeUpdate`),
                n && Zl(n, !0),
                d &&
                    (!e.dynamicChildren ||
                        e.dynamicChildren.length !== d.length) &&
                    ((l = 0), (s = !1), (d = null)),
                ((p.innerHTML && m.innerHTML == null) ||
                    (p.textContent && m.textContent == null)) &&
                    u(c, ``),
                d
                    ? T(e.dynamicChildren, d, c, n, r, Xl(t, i), o)
                    : s || se(e, t, c, null, n, r, Xl(t, i), o, !1),
                l > 0)
            ) {
                if (l & 16) E(c, p, m, n, i);
                else if (
                    (l & 2 &&
                        p.class !== m.class &&
                        a(c, `class`, null, m.class, i),
                    l & 4 && a(c, `style`, p.style, m.style, i),
                    l & 8)
                ) {
                    let e = t.dynamicProps;
                    for (let t = 0; t < e.length; t++) {
                        let r = e[t],
                            o = p[r],
                            s = m[r];
                        (s !== o || r === `value`) && a(c, r, o, s, i, n);
                    }
                }
                l & 1 && e.children !== t.children && u(c, t.children);
            } else !s && d == null && E(c, p, m, n, i);
            ((h = m.onVnodeUpdated) || f) &&
                Kl(() => {
                    (h && Nu(h, n, t, e), f && As(t, e, n, `updated`));
                }, r);
        },
        T = (e, t, n, r, i, a, o) => {
            for (let s = 0; s < t.length; s++) {
                let c = e[s],
                    l = t[s],
                    u =
                        c.el &&
                        (c.type === ou || !yu(c, l) || c.shapeFlag & 198)
                            ? d(c.el)
                            : n;
                h(c, l, u, null, r, i, a, o, !0);
            }
        },
        E = (e, t, n, r, i) => {
            if (t !== n) {
                if (t !== L)
                    for (let o in t)
                        !Ki(o) && !(o in n) && a(e, o, t[o], null, i, r);
                for (let o in n) {
                    if (Ki(o)) continue;
                    let s = n[o],
                        c = t[o];
                    s !== c && o !== `value` && a(e, o, c, s, i, r);
                }
                `value` in n && a(e, `value`, t.value, n.value, i);
            }
        },
        te = (e, t, n, i, a, o, c, l, u) => {
            let d = (t.el = e ? e.el : s(``)),
                f = (t.anchor = e ? e.anchor : s(``)),
                { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
            (h && (l = l ? l.concat(h) : h),
                e == null
                    ? (r(d, n, i),
                      r(f, n, i),
                      w(t.children || [], n, f, a, o, c, l, u))
                    : p > 0 &&
                        p & 64 &&
                        m &&
                        e.dynamicChildren &&
                        e.dynamicChildren.length === m.length
                      ? (T(e.dynamicChildren, m, n, a, o, c, l),
                        (t.key != null || (a && t === a.subTree)) &&
                            $l(e, t, !0))
                      : se(e, t, n, f, a, o, c, l, u));
        },
        ne = (e, t, n, r, i, a, o, s, c) => {
            ((t.slotScopeIds = s),
                e == null
                    ? t.shapeFlag & 512
                        ? i.ctx.activate(t, n, r, o, c)
                        : re(t, n, r, i, a, o, c)
                    : ie(e, t, c));
        },
        re = (e, t, n, r, i, a, o) => {
            let s = (e.component = Iu(e, r, i));
            if ((Tc(e) && (s.ctx.renderer = ve), Gu(s, !1, o), s.asyncDep)) {
                if ((i && i.registerDep(s, ae, o), !e.el)) {
                    let r = (s.subTree = Z(X));
                    (_(null, r, t, n), (e.placeholder = r.el));
                }
            } else ae(s, e, t, n, i, a, o);
        },
        ie = (e, t, n) => {
            let r = (t.component = e.component);
            if (wl(e, t, n)) {
                if (r.asyncDep && !r.asyncResolved) {
                    oe(r, t, n);
                    return;
                }
                ((r.next = t), r.update());
            } else ((t.el = e.el), (r.vnode = t));
        },
        ae = (e, t, n, r, i, a, o) => {
            let s = () => {
                if (e.isMounted) {
                    let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
                    {
                        let n = tu(e);
                        if (n) {
                            (t && ((t.el = c.el), oe(e, t, o)),
                                n.asyncDep.then(() => {
                                    Kl(() => {
                                        e.isUnmounted || l();
                                    }, i);
                                }));
                            return;
                        }
                    }
                    let u = t,
                        f;
                    (Zl(e, !1),
                        t ? ((t.el = c.el), oe(e, t, o)) : (t = c),
                        n && ta(n),
                        (f = t.props && t.props.onVnodeBeforeUpdate) &&
                            Nu(f, s, t, c),
                        Zl(e, !0));
                    let p = xl(e),
                        m = e.subTree;
                    ((e.subTree = p),
                        h(m, p, d(m.el), he(m), e, i, a),
                        (t.el = p.el),
                        u === null && Dl(e, p.el),
                        r && Kl(r, i),
                        (f = t.props && t.props.onVnodeUpdated) &&
                            Kl(() => Nu(f, s, t, c), i));
                } else {
                    let o,
                        { el: s, props: c } = t,
                        { bm: l, m: u, parent: d, root: f, type: p } = e,
                        m = wc(t);
                    if (
                        (Zl(e, !1),
                        l && ta(l),
                        !m && (o = c && c.onVnodeBeforeMount) && Nu(o, d, t),
                        Zl(e, !0),
                        s && be)
                    ) {
                        let t = () => {
                            ((e.subTree = xl(e)), be(s, e.subTree, e, i, null));
                        };
                        m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
                    } else {
                        f.ce &&
                            f.ce._hasShadowRoot() &&
                            f.ce._injectChildStyle(
                                p,
                                e.parent ? e.parent.type : void 0,
                            );
                        let o = (e.subTree = xl(e));
                        (h(null, o, n, r, e, i, a), (t.el = o.el));
                    }
                    if ((u && Kl(u, i), !m && (o = c && c.onVnodeMounted))) {
                        let e = t;
                        Kl(() => Nu(o, d, e), i);
                    }
                    ((t.shapeFlag & 256 ||
                        (d && wc(d.vnode) && d.vnode.shapeFlag & 256)) &&
                        e.a &&
                        Kl(e.a, i),
                        (e.isMounted = !0),
                        (t = n = r = null));
                }
            };
            e.scope.on();
            let c = (e.effect = new Da(s));
            e.scope.off();
            let l = (e.update = c.run.bind(c)),
                u = (e.job = c.runIfDirty.bind(c));
            ((u.i = e),
                (u.id = e.uid),
                (c.scheduler = () => ys(u)),
                Zl(e, !0),
                l());
        },
        oe = (e, t, n) => {
            t.component = e;
            let r = e.vnode.props;
            ((e.vnode = t),
                (e.next = null),
                Ml(e, t.props, r, n),
                Gl(e, t.children, n),
                Ha(),
                Ss(e),
                Ua());
        },
        se = (e, t, n, r, i, a, o, s, c = !1) => {
            let l = e && e.children,
                d = e ? e.shapeFlag : 0,
                f = t.children,
                { patchFlag: p, shapeFlag: m } = t;
            if (p > 0) {
                if (p & 128) {
                    le(l, f, n, r, i, a, o, s, c);
                    return;
                }
                if (p & 256) {
                    ce(l, f, n, r, i, a, o, s, c);
                    return;
                }
            }
            m & 8
                ? (d & 16 && me(l, i, a), f !== l && u(n, f))
                : d & 16
                  ? m & 16
                      ? le(l, f, n, r, i, a, o, s, c)
                      : me(l, i, a, !0)
                  : (d & 8 && u(n, ``), m & 16 && w(f, n, r, i, a, o, s, c));
        },
        ce = (e, t, n, r, i, a, o, s, c) => {
            ((e ||= ki), (t ||= ki));
            let l = e.length,
                u = t.length,
                d = Math.min(l, u),
                f;
            for (f = 0; f < d; f++) {
                let r = (t[f] = c ? Au(t[f]) : ku(t[f]));
                h(e[f], r, n, null, i, a, o, s, c);
            }
            l > u ? me(e, i, a, !0, !1, d) : w(t, n, r, i, a, o, s, c, d);
        },
        le = (e, t, n, r, i, a, o, s, c) => {
            let l = 0,
                u = t.length,
                d = e.length - 1,
                f = u - 1;
            for (; l <= d && l <= f;) {
                let r = e[l],
                    u = (t[l] = c ? Au(t[l]) : ku(t[l]));
                if (yu(r, u)) h(r, u, n, null, i, a, o, s, c);
                else break;
                l++;
            }
            for (; l <= d && l <= f;) {
                let r = e[d],
                    l = (t[f] = c ? Au(t[f]) : ku(t[f]));
                if (yu(r, l)) h(r, l, n, null, i, a, o, s, c);
                else break;
                (d--, f--);
            }
            if (l > d) {
                if (l <= f) {
                    let e = f + 1,
                        d = e < u ? t[e].el : r;
                    for (; l <= f;)
                        (h(
                            null,
                            (t[l] = c ? Au(t[l]) : ku(t[l])),
                            n,
                            d,
                            i,
                            a,
                            o,
                            s,
                            c,
                        ),
                            l++);
                }
            } else if (l > f) for (; l <= d;) (de(e[l], i, a, !0), l++);
            else {
                let p = l,
                    m = l,
                    g = new Map();
                for (l = m; l <= f; l++) {
                    let e = (t[l] = c ? Au(t[l]) : ku(t[l]));
                    e.key != null && g.set(e.key, l);
                }
                let _,
                    v = 0,
                    y = f - m + 1,
                    b = !1,
                    x = 0,
                    S = Array(y);
                for (l = 0; l < y; l++) S[l] = 0;
                for (l = p; l <= d; l++) {
                    let r = e[l];
                    if (v >= y) {
                        de(r, i, a, !0);
                        continue;
                    }
                    let u;
                    if (r.key != null) u = g.get(r.key);
                    else
                        for (_ = m; _ <= f; _++)
                            if (S[_ - m] === 0 && yu(r, t[_])) {
                                u = _;
                                break;
                            }
                    u === void 0
                        ? de(r, i, a, !0)
                        : ((S[u - m] = l + 1),
                          u >= x ? (x = u) : (b = !0),
                          h(r, t[u], n, null, i, a, o, s, c),
                          v++);
                }
                let C = b ? eu(S) : ki;
                for (_ = C.length - 1, l = y - 1; l >= 0; l--) {
                    let e = m + l,
                        d = t[e],
                        f = t[e + 1],
                        p = e + 1 < u ? f.el || ru(f) : r;
                    S[l] === 0
                        ? h(null, d, n, p, i, a, o, s, c)
                        : b && (_ < 0 || l !== C[_] ? ue(d, n, p, 2) : _--);
                }
            }
        },
        ue = (e, t, n, a, o = null) => {
            let {
                el: s,
                type: c,
                transition: l,
                children: u,
                shapeFlag: d,
            } = e;
            if (d & 6) {
                ue(e.component.subTree, t, n, a);
                return;
            }
            if (d & 128) {
                e.suspense.move(t, n, a);
                return;
            }
            if (d & 64) {
                c.move(e, t, n, ve);
                return;
            }
            if (c === ou) {
                r(s, t, n);
                for (let e = 0; e < u.length; e++) ue(u[e], t, n, a);
                r(e.anchor, t, n);
                return;
            }
            if (c === cu) {
                y(e, t, n);
                return;
            }
            if (a !== 2 && d & 1 && l) {
                if (a === 0)
                    l.persisted && !s[Vs]
                        ? r(s, t, n)
                        : (l.beforeEnter(s),
                          r(s, t, n),
                          Kl(() => l.enter(s), o));
                else {
                    let { leave: a, delayLeave: o, afterLeave: c } = l,
                        u = () => {
                            e.ctx.isUnmounted ? i(s) : r(s, t, n);
                        },
                        d = () => {
                            let e = s._isLeaving || !!s[Vs];
                            (s._isLeaving && s[Vs](!0),
                                l.persisted && !e
                                    ? u()
                                    : a(s, () => {
                                          (u(), c && c());
                                      }));
                        };
                    o ? o(s, u, d) : d();
                }
            } else r(s, t, n);
        },
        de = (e, t, n, r = !1, i = !1) => {
            let {
                type: a,
                props: o,
                ref: s,
                children: c,
                dynamicChildren: l,
                shapeFlag: u,
                patchFlag: d,
                dirs: f,
                cacheIndex: p,
                memo: m,
            } = e;
            if (
                (d === -2 && (i = !1),
                s != null && (Ha(), oc(s, null, n, e, !0), Ua()),
                p != null && (t.renderCache[p] = void 0),
                u & 256)
            ) {
                t.ctx.deactivate(e);
                return;
            }
            let h = u & 1 && f,
                g = !wc(e),
                _;
            if ((g && (_ = o && o.onVnodeBeforeUnmount) && Nu(_, t, e), u & 6))
                pe(e.component, n, r);
            else {
                if (u & 128) {
                    e.suspense.unmount(n, r);
                    return;
                }
                (h && As(e, null, t, `beforeUnmount`),
                    u & 64
                        ? e.type.remove(e, t, n, ve, r)
                        : l && !l.hasOnce && (a !== ou || (d > 0 && d & 64))
                          ? me(l, t, n, !1, !0)
                          : ((a === ou && d & 384) || (!i && u & 16)) &&
                            me(c, t, n),
                    r && D(e));
            }
            let v = m != null && p == null;
            ((g && (_ = o && o.onVnodeUnmounted)) || h || v) &&
                Kl(() => {
                    (_ && Nu(_, t, e),
                        h && As(e, null, t, `unmounted`),
                        v && (e.el = null));
                }, n);
        },
        D = (e) => {
            let { type: t, el: n, anchor: r, transition: a } = e;
            if (t === ou) {
                fe(n, r);
                return;
            }
            if (t === cu) {
                b(e);
                return;
            }
            let o = () => {
                (i(n), a && !a.persisted && a.afterLeave && a.afterLeave());
            };
            if (e.shapeFlag & 1 && a && !a.persisted) {
                let { leave: t, delayLeave: r } = a,
                    i = () => t(n, o);
                r ? r(e.el, o, i) : i();
            } else o();
        },
        fe = (e, t) => {
            let n;
            for (; e !== t;) ((n = f(e)), i(e), (e = n));
            i(t);
        },
        pe = (e, t, n) => {
            let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
            (nu(c),
                nu(l),
                r && ta(r),
                i.stop(),
                a && ((a.flags |= 8), de(o, e, t, n)),
                s && Kl(s, t),
                Kl(() => {
                    e.isUnmounted = !0;
                }, t));
        },
        me = (e, t, n, r = !1, i = !1, a = 0) => {
            for (let o = a; o < e.length; o++) de(e[o], t, n, r, i);
        },
        he = (e) => {
            if (e.shapeFlag & 6) return he(e.component.subTree);
            if (e.shapeFlag & 128) return e.suspense.next();
            let t = f(e.anchor || e.el),
                n = t && t[zs];
            return n ? f(n) : t;
        },
        ge = !1,
        _e = (e, t, n) => {
            let r;
            (e == null
                ? t._vnode &&
                  (de(t._vnode, null, null, !0), (r = t._vnode.component))
                : h(t._vnode || null, e, t, null, null, null, n),
                (t._vnode = e),
                (ge ||= ((ge = !0), Ss(r), Cs(), !1)));
        },
        ve = {
            p: h,
            um: de,
            m: ue,
            r: D,
            mt: re,
            mc: w,
            pc: se,
            pbc: T,
            n: he,
            o: e,
        },
        ye,
        be;
    return (
        t && ([ye, be] = t(ve)),
        { render: _e, hydrate: ye, createApp: ml(_e, ye) }
    );
}
function Xl({ type: e, props: t }, n) {
    return (n === `svg` && e === `foreignObject`) ||
        (n === `mathml` &&
            e === `annotation-xml` &&
            t &&
            t.encoding &&
            t.encoding.includes(`html`))
        ? void 0
        : n;
}
function Zl({ effect: e, job: t }, n) {
    n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Ql(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function $l(e, t, n = !1) {
    let r = e.children,
        i = t.children;
    if (B(r) && B(i))
        for (let e = 0; e < r.length; e++) {
            let t = r[e],
                a = i[e];
            (a.shapeFlag & 1 &&
                !a.dynamicChildren &&
                ((a.patchFlag <= 0 || a.patchFlag === 32) &&
                    ((a = i[e] = Au(i[e])), (a.el = t.el)),
                !n && a.patchFlag !== -2 && $l(t, a)),
                a.type === su &&
                    (a.patchFlag === -1 && (a = i[e] = Au(a)), (a.el = t.el)),
                a.type === X && !a.el && (a.el = t.el));
        }
}
function eu(e) {
    let t = e.slice(),
        n = [0],
        r,
        i,
        a,
        o,
        s,
        c = e.length;
    for (r = 0; r < c; r++) {
        let c = e[r];
        if (c !== 0) {
            if (((i = n[n.length - 1]), e[i] < c)) {
                ((t[r] = i), n.push(r));
                continue;
            }
            for (a = 0, o = n.length - 1; a < o;)
                ((s = (a + o) >> 1), e[n[s]] < c ? (a = s + 1) : (o = s));
            c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), (n[a] = r));
        }
    }
    for (a = n.length, o = n[a - 1]; a-- > 0;) ((n[a] = o), (o = t[o]));
    return n;
}
function tu(e) {
    let t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : tu(t);
}
function nu(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ru(e) {
    if (e.placeholder) return e.placeholder;
    let t = e.component;
    return t ? ru(t.subTree) : null;
}
var iu = (e) => e.__isSuspense;
function au(e, t) {
    t && t.pendingBranch
        ? B(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
        : xs(e);
}
var ou = Symbol.for(`v-fgt`),
    su = Symbol.for(`v-txt`),
    X = Symbol.for(`v-cmt`),
    cu = Symbol.for(`v-stc`),
    lu = [],
    uu = null;
function du(e = !1) {
    lu.push((uu = e ? null : []));
}
function fu() {
    (lu.pop(), (uu = lu[lu.length - 1] || null));
}
var pu = 1;
function mu(e, t = !1) {
    ((pu += e), e < 0 && uu && t && (uu.hasOnce = !0));
}
function hu(e) {
    return (
        (e.dynamicChildren = pu > 0 ? uu || ki : null),
        fu(),
        pu > 0 && uu && uu.push(e),
        e
    );
}
function gu(e, t, n, r, i, a) {
    return hu(Su(e, t, n, r, i, a, !0));
}
function _u(e, t, n, r, i) {
    return hu(Z(e, t, n, r, i, !0));
}
function vu(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function yu(e, t) {
    return e.type === t.type && e.key === t.key;
}
var bu = ({ key: e }) => e ?? null,
    xu = ({ ref: e, ref_key: t, ref_for: n }) => (
        typeof e == `number` && (e = `` + e),
        e == null
            ? null
            : H(e) || J(e) || V(e)
              ? { i: Y, r: e, k: t, f: !!n }
              : e
    );
function Su(
    e,
    t = null,
    n = null,
    r = 0,
    i = null,
    a = e === ou ? 0 : 1,
    o = !1,
    s = !1,
) {
    let c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && bu(t),
        ref: t && xu(t),
        scopeId: Es,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: Y,
    };
    return (
        s
            ? (ju(c, n), a & 128 && e.normalize(c))
            : n && (c.shapeFlag |= H(n) ? 8 : 16),
        pu > 0 &&
            !o &&
            uu &&
            (c.patchFlag > 0 || a & 6) &&
            c.patchFlag !== 32 &&
            uu.push(c),
        c
    );
}
var Z = Cu;
function Cu(e, t = null, n = null, r = 0, i = null, a = !1) {
    if (((!e || e === Hc) && (e = X), vu(e))) {
        let r = Tu(e, t, !0);
        return (
            n && ju(r, n),
            pu > 0 &&
                !a &&
                uu &&
                (r.shapeFlag & 6 ? (uu[uu.indexOf(e)] = r) : uu.push(r)),
            (r.patchFlag = -2),
            r
        );
    }
    if ((Qu(e) && (e = e.__vccOpts), t)) {
        t = wu(t);
        let { class: e, style: n } = t;
        (e && !H(e) && (t.class = fa(e)),
            U(n) && (Vo(n) && !B(n) && (n = R({}, n)), (t.style = sa(n))));
    }
    let o = H(e) ? 1 : iu(e) ? 128 : Bs(e) ? 64 : U(e) ? 4 : V(e) ? 2 : 0;
    return Su(e, t, n, r, i, o, a, !0);
}
function wu(e) {
    return e ? (Vo(e) || Al(e) ? R({}, e) : e) : null;
}
function Tu(e, t, n = !1, r = !1) {
    let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e,
        l = t ? Mu(i || {}, t) : i,
        u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: l,
            key: l && bu(l),
            ref:
                t && t.ref
                    ? n && a
                        ? B(a)
                            ? a.concat(xu(t))
                            : [a, xu(t)]
                        : xu(t)
                    : a,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: s,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== ou ? (o === -1 ? 16 : o | 16) : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: c,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && Tu(e.ssContent),
            ssFallback: e.ssFallback && Tu(e.ssFallback),
            placeholder: e.placeholder,
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
        };
    return (c && r && ec(u, c.clone(u)), u);
}
function Eu(e = ` `, t = 0) {
    return Z(su, null, e, t);
}
function Du(e, t) {
    let n = Z(cu, null, e);
    return ((n.staticCount = t), n);
}
function Ou(e = ``, t = !1) {
    return t ? (du(), _u(X, null, e)) : Z(X, null, e);
}
function ku(e) {
    return e == null || typeof e == `boolean`
        ? Z(X)
        : B(e)
          ? Z(ou, null, e.slice())
          : vu(e)
            ? Au(e)
            : Z(su, null, String(e));
}
function Au(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Tu(e);
}
function ju(e, t) {
    let n = 0,
        { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (B(t)) n = 16;
    else if (typeof t == `object`) {
        if (r & 65) {
            let n = t.default;
            n && (n._c && (n._d = !1), ju(e, n()), n._c && (n._d = !0));
            return;
        }
        {
            n = 32;
            let r = t._;
            !r && !Al(t)
                ? (t._ctx = Y)
                : r === 3 &&
                  Y &&
                  (Y.slots._ === 1
                      ? (t._ = 1)
                      : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    } else if (V(t)) {
        if (r & 65) {
            ju(e, { default: t });
            return;
        }
        ((t = { default: t, _ctx: Y }), (n = 32));
    } else ((t = String(t)), r & 64 ? ((n = 16), (t = [Eu(t)])) : (n = 8));
    ((e.children = t), (e.shapeFlag |= n));
}
function Mu(...e) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (let e in r)
            if (e === `class`)
                t.class !== r.class && (t.class = fa([t.class, r.class]));
            else if (e === `style`) t.style = sa([t.style, r.style]);
            else if (Mi(e)) {
                let n = t[e],
                    i = r[e];
                i && n !== i && !(B(n) && n.includes(i))
                    ? (t[e] = n ? [].concat(n, i) : i)
                    : i == null && n == null && !Ni(e) && (t[e] = i);
            } else e !== `` && (t[e] = r[e]);
    }
    return t;
}
function Nu(e, t, n, r = null) {
    ss(e, t, 7, [n, r]);
}
var Pu = fl(),
    Fu = 0;
function Iu(e, t, n) {
    let r = e.type,
        i = (t ? t.appContext : e.appContext) || Pu,
        a = {
            uid: Fu++,
            vnode: e,
            type: r,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new wa(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            ids: t ? t.ids : [``, 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Il(r, i),
            emitsOptions: yl(r, i),
            emit: null,
            emitted: null,
            propsDefaults: L,
            inheritAttrs: r.inheritAttrs,
            ctx: L,
            data: L,
            props: L,
            attrs: L,
            slots: L,
            refs: L,
            setupState: L,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (
        (a.ctx = { _: a }),
        (a.root = t ? t.root : a),
        (a.emit = _l.bind(null, a)),
        e.ce && e.ce(a),
        a
    );
}
var Lu = null,
    Ru = () => Lu || Y,
    zu,
    Bu;
{
    let e = oa(),
        t = (t, n) => {
            let r;
            return (
                (r = e[t]) || (r = e[t] = []),
                r.push(n),
                (e) => {
                    r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
                }
            );
        };
    ((zu = t(`__VUE_INSTANCE_SETTERS__`, (e) => (Lu = e))),
        (Bu = t(`__VUE_SSR_SETTERS__`, (e) => (Wu = e))));
}
var Vu = (e) => {
        let t = Lu;
        return (
            zu(e),
            e.scope.on(),
            () => {
                (e.scope.off(), zu(t));
            }
        );
    },
    Hu = () => {
        (Lu && Lu.scope.off(), zu(null));
    };
function Uu(e) {
    return e.vnode.shapeFlag & 4;
}
var Wu = !1;
function Gu(e, t = !1, n = !1) {
    t && Bu(t);
    let { props: r, children: i } = e.vnode,
        a = Uu(e);
    (jl(e, r, a, t), Wl(e, i, n || t));
    let o = a ? Ku(e, t) : void 0;
    return (t && Bu(!1), o);
}
function Ku(e, t) {
    let n = e.type;
    ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Yc)));
    let { setup: r } = n;
    if (r) {
        Ha();
        let n = (e.setupContext = r.length > 1 ? Xu(e) : null),
            i = Vu(e),
            a = os(r, e, 0, [e.props, n]),
            o = Bi(a);
        if ((Ua(), i(), (o || e.sp) && !wc(e) && rc(e), o)) {
            if ((a.then(Hu, Hu), t))
                return a
                    .then((n) => {
                        Bu(!0);
                        try {
                            qu(e, n, t);
                        } finally {
                            Bu(!1);
                        }
                    })
                    .catch((t) => {
                        cs(t, e, 0);
                    });
            e.asyncDep = a;
        } else qu(e, a, t);
    } else Ju(e, t);
}
function qu(e, t, n) {
    (V(t)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
        : U(t) && (e.setupState = Zo(t)),
        Ju(e, n));
}
function Ju(e, t, n) {
    let r = e.type;
    e.render ||= r.render || Ai;
    {
        let t = Vu(e);
        Ha();
        try {
            Qc(e);
        } finally {
            (Ua(), t());
        }
    }
}
var Yu = {
    get(e, t) {
        return (K(e, `get`, ``), e[t]);
    },
};
function Xu(e) {
    return {
        attrs: new Proxy(e.attrs, Yu),
        slots: e.slots,
        emit: e.emit,
        expose: (t) => {
            e.exposed = t || {};
        },
    };
}
function Zu(e) {
    return e.exposed
        ? (e.exposeProxy ||= new Proxy(Zo(Ho(e.exposed)), {
              get(t, n) {
                  if (n in t) return t[n];
                  if (n in qc) return qc[n](e);
              },
              has(e, t) {
                  return t in e || t in qc;
              },
          }))
        : e.proxy;
}
function Qu(e) {
    return V(e) && `__vccOpts` in e;
}
var Q = (e, t) => $o(e, t, Wu);
function $u(e, t, n) {
    try {
        mu(-1);
        let r = arguments.length;
        return r === 2
            ? U(t) && !B(t)
                ? vu(t)
                    ? Z(e, null, [t])
                    : Z(e, t)
                : Z(e, null, t)
            : (r > 3
                  ? (n = Array.prototype.slice.call(arguments, 2))
                  : r === 3 && vu(n) && (n = [n]),
              Z(e, t, n));
    } finally {
        mu(1);
    }
}
var ed = `3.5.42`,
    td = void 0,
    nd = typeof window < `u` && window.trustedTypes;
if (nd)
    try {
        td = nd.createPolicy(`vue`, { createHTML: (e) => e });
    } catch {}
var rd = td ? (e) => td.createHTML(e) : (e) => e,
    id = `http://www.w3.org/2000/svg`,
    ad = `http://www.w3.org/1998/Math/MathML`,
    od = typeof document < `u` ? document : null,
    sd = od && od.createElement(`template`),
    cd = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null);
        },
        remove: (e) => {
            let t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, r) => {
            let i =
                t === `svg`
                    ? od.createElementNS(id, e)
                    : t === `mathml`
                      ? od.createElementNS(ad, e)
                      : n
                        ? od.createElement(e, { is: n })
                        : od.createElement(e);
            return (
                e === `select` &&
                    r &&
                    r.multiple != null &&
                    i.setAttribute(`multiple`, r.multiple),
                i
            );
        },
        createText: (e) => od.createTextNode(e),
        createComment: (e) => od.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => od.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, ``);
        },
        insertStaticContent(e, t, n, r, i, a) {
            let o = n ? n.previousSibling : t.lastChild;
            if (i && (i === a || i.nextSibling))
                for (
                    ;
                    t.insertBefore(i.cloneNode(!0), n),
                        !(i === a || !(i = i.nextSibling));
                );
            else {
                sd.innerHTML = rd(
                    r === `svg`
                        ? `<svg>${e}</svg>`
                        : r === `mathml`
                          ? `<math>${e}</math>`
                          : e,
                );
                let i = sd.content;
                if (r === `svg` || r === `mathml`) {
                    let e = i.firstChild;
                    for (; e.firstChild;) i.appendChild(e.firstChild);
                    i.removeChild(e);
                }
                t.insertBefore(i, n);
            }
            return [
                o ? o.nextSibling : t.firstChild,
                n ? n.previousSibling : t.lastChild,
            ];
        },
    },
    ld = `transition`,
    ud = `animation`,
    dd = Symbol(`_vtc`),
    fd = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String,
    },
    pd = R({}, Gs, fd),
    md = ((e) => ((e.displayName = `Transition`), (e.props = pd), e))(
        (e, { slots: t }) => $u(Ys, _d(e), t),
    ),
    hd = (e, t = []) => {
        B(e) ? e.forEach((e) => e(...t)) : e && e(...t);
    },
    gd = (e) => (e ? (B(e) ? e.some((e) => e.length > 1) : e.length > 1) : !1);
function _d(e) {
    let t = {};
    for (let n in e) n in fd || (t[n] = e[n]);
    if (e.css === !1) return t;
    let {
            name: n = `v`,
            type: r,
            duration: i,
            enterFromClass: a = `${n}-enter-from`,
            enterActiveClass: o = `${n}-enter-active`,
            enterToClass: s = `${n}-enter-to`,
            appearFromClass: c = a,
            appearActiveClass: l = o,
            appearToClass: u = s,
            leaveFromClass: d = `${n}-leave-from`,
            leaveActiveClass: f = `${n}-leave-active`,
            leaveToClass: p = `${n}-leave-to`,
        } = e,
        m = vd(i),
        h = m && m[0],
        g = m && m[1],
        {
            onBeforeEnter: _,
            onEnter: v,
            onEnterCancelled: y,
            onLeave: b,
            onLeaveCancelled: x,
            onBeforeAppear: S = _,
            onAppear: C = v,
            onAppearCancelled: w = y,
        } = t,
        ee = (e, t, n, r) => {
            ((e._enterCancelled = r),
                xd(e, t ? u : s),
                xd(e, t ? l : o),
                n && n());
        },
        T = (e, t) => {
            ((e._isLeaving = !1), xd(e, d), xd(e, p), xd(e, f), t && t());
        },
        E = (e) => (t, n) => {
            let i = e ? C : v,
                o = () => ee(t, e, n);
            (hd(i, [t, o]),
                Sd(() => {
                    (xd(t, e ? c : a),
                        bd(t, e ? u : s),
                        gd(i) || wd(t, r, h, o));
                }));
        };
    return R(t, {
        onBeforeEnter(e) {
            (hd(_, [e]), bd(e, a), bd(e, o));
        },
        onBeforeAppear(e) {
            (hd(S, [e]), bd(e, c), bd(e, l));
        },
        onEnter: E(!1),
        onAppear: E(!0),
        onLeave(e, t) {
            e._isLeaving = !0;
            let n = () => T(e, t);
            (bd(e, d),
                e._enterCancelled ? (bd(e, f), Od(e)) : (Od(e), bd(e, f)),
                Sd(() => {
                    e._isLeaving &&
                        (xd(e, d), bd(e, p), gd(b) || wd(e, r, g, n));
                }),
                hd(b, [e, n]));
        },
        onEnterCancelled(e) {
            (ee(e, !1, void 0, !0), hd(y, [e]));
        },
        onAppearCancelled(e) {
            (ee(e, !0, void 0, !0), hd(w, [e]));
        },
        onLeaveCancelled(e) {
            (T(e), hd(x, [e]));
        },
    });
}
function vd(e) {
    if (e == null) return null;
    if (U(e)) return [yd(e.enter), yd(e.leave)];
    {
        let t = yd(e);
        return [t, t];
    }
}
function yd(e) {
    return ia(e);
}
function bd(e, t) {
    (t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
        (e[dd] || (e[dd] = new Set())).add(t));
}
function xd(e, t) {
    t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
    let n = e[dd];
    n && (n.delete(t), n.size || (e[dd] = void 0));
}
function Sd(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e);
    });
}
var Cd = 0;
function wd(e, t, n, r) {
    let i = (e._endId = ++Cd),
        a = () => {
            i === e._endId && r();
        };
    if (n != null) return setTimeout(a, n);
    let { type: o, timeout: s, propCount: c } = Td(e, t);
    if (!o) return r();
    let l = o + `end`,
        u = 0,
        d = () => {
            (e.removeEventListener(l, f), a());
        },
        f = (t) => {
            t.target === e && ++u >= c && d();
        };
    (setTimeout(() => {
        u < c && d();
    }, s + 1),
        e.addEventListener(l, f));
}
function Td(e, t) {
    let n = window.getComputedStyle(e),
        r = (e) => (n[e] || ``).split(`, `),
        i = r(`${ld}Delay`),
        a = r(`${ld}Duration`),
        o = Ed(i, a),
        s = r(`${ud}Delay`),
        c = r(`${ud}Duration`),
        l = Ed(s, c),
        u = null,
        d = 0,
        f = 0;
    t === ld
        ? o > 0 && ((u = ld), (d = o), (f = a.length))
        : t === ud
          ? l > 0 && ((u = ud), (d = l), (f = c.length))
          : ((d = Math.max(o, l)),
            (u = d > 0 ? (o > l ? ld : ud) : null),
            (f = u ? (u === ld ? a.length : c.length) : 0));
    let p =
        u === ld &&
        /\b(?:transform|all)(?:,|$)/.test(r(`${ld}Property`).toString());
    return { type: u, timeout: d, propCount: f, hasTransform: p };
}
function Ed(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((t, n) => Dd(t) + Dd(e[n])));
}
function Dd(e) {
    return e === `auto` ? 0 : Number(e.slice(0, -1).replace(`,`, `.`)) * 1e3;
}
function Od(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
}
function kd(e, t, n) {
    let r = e[dd];
    (r && (t = (t ? [t, ...r] : [...r]).join(` `)),
        t == null
            ? e.removeAttribute(`class`)
            : n
              ? e.setAttribute(`class`, t)
              : (e.className = t));
}
var Ad = Symbol(`_vod`),
    jd = Symbol(`_vsh`),
    Md = Symbol(``),
    Nd = /(?:^|;)\s*display\s*:/;
function Pd(e, t, n) {
    let r = e.style,
        i = H(n),
        a = !1;
    if (n && !i) {
        if (t) {
            if (H(t))
                for (let e of t.split(`;`)) {
                    let t = e.slice(0, e.indexOf(`:`)).trim();
                    n[t] ?? Id(r, t, ``);
                }
            else for (let e in t) n[e] ?? Id(r, e, ``);
        }
        for (let i in n) {
            i === `display` && (a = !0);
            let o = n[i];
            o == null
                ? Id(r, i, ``)
                : Bd(e, i, !H(t) && t ? t[i] : void 0, o) || Id(r, i, o);
        }
    } else if (i) {
        if (t !== n) {
            let e = r[Md];
            (e && (n += `;` + e), (r.cssText = n), (a = Nd.test(n)));
        }
    } else t && e.removeAttribute(`style`);
    Ad in e && ((e[Ad] = a ? r.display : ``), e[jd] && (r.display = `none`));
}
var Fd = /\s*!important$/;
function Id(e, t, n) {
    if (B(n)) n.forEach((n) => Id(e, t, n));
    else if (((n ??= ``), t.startsWith(`--`)))
        Fd.test(n)
            ? e.setProperty(t, n.replace(Fd, ``), `important`)
            : e.setProperty(t, n);
    else {
        let r = zd(e, t);
        Fd.test(n)
            ? e.setProperty(Zi(r), n.replace(Fd, ``), `important`)
            : (e[r] = n);
    }
}
var Ld = [`Webkit`, `Moz`, `ms`],
    Rd = {};
function zd(e, t) {
    let n = Rd[t];
    if (n) return n;
    let r = Yi(t);
    if (r !== `filter` && r in e) return (Rd[t] = r);
    r = Qi(r);
    for (let n = 0; n < Ld.length; n++) {
        let i = Ld[n] + r;
        if (i in e) return (Rd[t] = i);
    }
    return t;
}
function Bd(e, t, n, r) {
    return (
        e.tagName === `TEXTAREA` &&
        (t === `width` || t === `height`) &&
        H(r) &&
        n === r
    );
}
var Vd = `http://www.w3.org/1999/xlink`;
function Hd(e, t, n, r, i, a = ma(t)) {
    r && t.startsWith(`xlink:`)
        ? n == null
            ? e.removeAttributeNS(Vd, t.slice(6, t.length))
            : e.setAttributeNS(Vd, t, n)
        : n == null || (a && !ha(n))
          ? e.removeAttribute(t)
          : e.setAttribute(t, a ? `` : zi(n) ? String(n) : n);
}
function Ud(e, t, n, r, i) {
    if (t === `innerHTML` || t === `textContent`) {
        n != null && (e[t] = t === `innerHTML` ? rd(n) : n);
        return;
    }
    let a = e.tagName;
    if (t === `value` && a !== `PROGRESS` && !a.includes(`-`)) {
        let r = a === `OPTION` ? e.getAttribute(`value`) || `` : e.value,
            i = n == null ? (e.type === `checkbox` ? `on` : ``) : String(n);
        ((r !== i || !(`_value` in e)) && (e.value = i),
            n ?? e.removeAttribute(t),
            (e._value = n));
        return;
    }
    let o = !1;
    if (n === `` || n == null) {
        let r = typeof e[t];
        r === `boolean`
            ? (n = ha(n))
            : n == null && r === `string`
              ? ((n = ``), (o = !0))
              : r === `number` && ((n = 0), (o = !0));
    }
    try {
        e[t] = n;
    } catch {}
    o && e.removeAttribute(i || t);
}
function Wd(e, t, n, r) {
    e.addEventListener(t, n, r);
}
function Gd(e, t, n, r) {
    e.removeEventListener(t, n, r);
}
var Kd = Symbol(`_vei`);
function qd(e, t, n, r, i = null) {
    let a = e[Kd] || (e[Kd] = {}),
        o = a[t];
    if (r && o) o.value = r;
    else {
        let [n, s] = Xd(t);
        r
            ? Wd(e, n, (a[t] = ef(r, i)), s)
            : o && (Gd(e, n, o, s), (a[t] = void 0));
    }
}
var Jd = /(Once|Passive|Capture)$/,
    Yd = /^on:?(?:Once|Passive|Capture)$/;
function Xd(e) {
    let t, n;
    for (; (n = e.match(Jd)) && !Yd.test(e);)
        ((t ||= {}),
            (e = e.slice(0, e.length - n[1].length)),
            (t[n[1].toLowerCase()] = !0));
    return [e[2] === `:` ? e.slice(3) : Zi(e.slice(2)), t];
}
var Zd = 0,
    Qd = Promise.resolve(),
    $d = () => (Zd ||= (Qd.then(() => (Zd = 0)), Date.now()));
function ef(e, t) {
    let n = (e) => {
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= n.attached) return;
        let r = n.value;
        if (B(r)) {
            let n = e.stopImmediatePropagation;
            e.stopImmediatePropagation = () => {
                (n.call(e), (e._stopped = !0));
            };
            let i = r.slice(),
                a = [e];
            for (let n = 0; n < i.length && !e._stopped; n++) {
                let e = i[n];
                e && ss(e, t, 5, a);
            }
        } else ss(r, t, 5, [e]);
    };
    return ((n.value = e), (n.attached = $d()), n);
}
var tf = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) > 96 &&
        e.charCodeAt(2) < 123,
    nf = (e, t, n, r, i, a) => {
        let o = i === `svg`;
        t === `class`
            ? kd(e, r, o)
            : t === `style`
              ? Pd(e, n, r)
              : Mi(t)
                ? Ni(t) || qd(e, t, n, r, a)
                : (
                        t[0] === `.`
                            ? ((t = t.slice(1)), !0)
                            : t[0] === `^`
                              ? ((t = t.slice(1)), !1)
                              : rf(e, t, r, o)
                    )
                  ? (Ud(e, t, r),
                    !e.tagName.includes(`-`) &&
                        (t === `value` ||
                            t === `checked` ||
                            t === `selected`) &&
                        Hd(e, t, r, o, a, t !== `value`))
                  : e._isVueCE &&
                      (af(e, t) ||
                          (e._def.__asyncLoader && (/[A-Z]/.test(t) || !H(r))))
                    ? Ud(e, Yi(t), r, a, t)
                    : (t === `true-value`
                          ? (e._trueValue = r)
                          : t === `false-value` && (e._falseValue = r),
                      Hd(e, t, r, o));
    };
function rf(e, t, n, r) {
    if (r)
        return !!(
            t === `innerHTML` ||
            t === `textContent` ||
            (t in e && tf(t) && V(n))
        );
    if (
        t === `spellcheck` ||
        t === `draggable` ||
        t === `translate` ||
        t === `autocorrect` ||
        (t === `sandbox` && e.tagName === `IFRAME`) ||
        t === `form` ||
        (t === `list` && e.tagName === `INPUT`) ||
        (t === `type` && e.tagName === `TEXTAREA`)
    )
        return !1;
    if (t === `width` || t === `height`) {
        let t = e.tagName;
        if (t === `IMG` || t === `VIDEO` || t === `CANVAS` || t === `SOURCE`)
            return !1;
    }
    return tf(t) && H(n) ? !1 : t in e;
}
function af(e, t) {
    let n = e._def.props;
    if (!n) return !1;
    let r = Yi(t);
    return Array.isArray(n)
        ? n.some((e) => Yi(e) === r)
        : Object.keys(n).some((e) => Yi(e) === r);
}
var of = (e) => {
    let t = e.props[`onUpdate:modelValue`] || !1;
    return B(t) ? (e) => ta(t, e) : t;
};
function sf(e) {
    e.target.composing = !0;
}
function cf(e) {
    let t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event(`input`)));
}
var lf = Symbol(`_assign`),
    uf = Symbol(`_initialValue`);
function df(e, t, n) {
    return (t && (e = e.trim()), n && (e = ra(e)), e);
}
var ff = {
        created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
            (e.parentNode &&
                (e.type === `text`
                    ? (e[uf] = e.defaultValue.replace(/[\r\n]/g, ``))
                    : e.type === `textarea` &&
                      (e[uf] = e.defaultValue.replace(
                          /\r\n?/g,
                          `
`,
                      ))),
                (e[lf] = of(i)));
            let a = r || (i.props && i.props.type === `number`);
            (Wd(e, t ? `change` : `input`, (t) => {
                t.target.composing || e[lf](df(e.value, n, a));
            }),
                (n || a) &&
                    Wd(e, `change`, () => {
                        e.value = df(e.value, n, a);
                    }),
                t ||
                    (Wd(e, `compositionstart`, sf),
                    Wd(e, `compositionend`, cf),
                    Wd(e, `change`, cf)));
        },
        mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
            let i = t ?? ``,
                a = e[uf];
            (delete e[uf],
                a !== void 0 &&
                (e.type === `text` || e.type === `textarea`) &&
                e.value !== a
                    ? e[lf](df(e.value, n, r))
                    : (e.value = i));
        },
        beforeUpdate(
            e,
            {
                value: t,
                oldValue: n,
                modifiers: { lazy: r, trim: i, number: a },
            },
            o,
        ) {
            if (((e[lf] = of(o)), e.composing)) return;
            let s =
                    (a || e.type === `number`) && !/^0\d/.test(e.value)
                        ? ra(e.value)
                        : e.value,
                c = t ?? ``;
            if (s === c) return;
            let l = e.getRootNode();
            ((l instanceof Document || l instanceof ShadowRoot) &&
                l.activeElement === e &&
                e.type !== `range` &&
                ((r && t === n) || (i && e.value.trim() === c))) ||
                (e.value = c);
        },
    },
    pf = {
        deep: !0,
        created(e, { value: t, modifiers: { number: n } }, r) {
            ((e._modelValue = t),
                Wd(e, `change`, () => {
                    let t = Array.prototype.filter
                            .call(e.options, (e) => e.selected)
                            .map((e) => (n ? ra(gf(e)) : gf(e))),
                        r = e.multiple,
                        i = r ? (Li(e._modelValue) ? new Set(t) : t) : t[0],
                        a = (e._pendingValue = [
                            r,
                            r ? (B(i) ? t.slice() : t) : i,
                        ]);
                    try {
                        e[lf](i);
                    } finally {
                        _s(() => {
                            e._pendingValue === a && (e._pendingValue = void 0);
                        });
                    }
                }),
                (e[lf] = of(r)));
        },
        mounted(e, { value: t }) {
            hf(e, t);
        },
        beforeUpdate(e, { value: t }, n) {
            ((e._modelValue = t), (e[lf] = of(n)));
        },
        updated(e, { value: t }) {
            let n = e._pendingValue;
            ((e._pendingValue = void 0),
                (!n || n[0] !== e.multiple || !mf(t, n[1], n[0])) && hf(e, t));
        },
    };
function mf(e, t, n) {
    if (!n || B(e)) return va(e, t);
    if (Li(e)) {
        if (e.size !== t.length) return !1;
        for (let n of t) if (!e.has(n)) return !1;
        return !0;
    }
    return !1;
}
function hf(e, t) {
    let n = e.multiple,
        r = B(t);
    if (!(n && !r && !Li(t))) {
        for (let i = 0, a = e.options.length; i < a; i++) {
            let a = e.options[i],
                o = gf(a);
            if (n) {
                if (r) {
                    let e = typeof o;
                    a.selected =
                        e === `string` || e === `number`
                            ? t.some((e) => String(e) === String(o))
                            : ya(t, o) > -1;
                } else a.selected = t.has(o);
            } else if (va(gf(a), t)) {
                e.selectedIndex !== i && (e.selectedIndex = i);
                return;
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
}
function gf(e) {
    return `_value` in e ? e._value : e.value;
}
var _f = [`ctrl`, `shift`, `alt`, `meta`],
    vf = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => `button` in e && e.button !== 0,
        middle: (e) => `button` in e && e.button !== 1,
        right: (e) => `button` in e && e.button !== 2,
        exact: (e, t) => _f.some((n) => e[`${n}Key`] && !t.includes(n)),
    },
    yf = (e, t) => {
        if (!e) return e;
        let n = (e._withMods ||= {}),
            r = t.join(`.`);
        return (
            n[r] ||
            (n[r] = (n, ...r) => {
                for (let e = 0; e < t.length; e++) {
                    let r = vf[t[e]];
                    if (r && r(n, t)) return;
                }
                return e(n, ...r);
            })
        );
    },
    bf = {
        esc: `escape`,
        space: ` `,
        up: `arrow-up`,
        left: `arrow-left`,
        right: `arrow-right`,
        down: `arrow-down`,
        delete: `backspace`,
    },
    xf = (e, t) => {
        let n = (e._withKeys ||= {}),
            r = t.join(`.`);
        return (
            n[r] ||
            (n[r] = (n) => {
                if (!(`key` in n)) return;
                let r = Zi(n.key);
                if (t.some((e) => e === r || bf[e] === r)) return e(n);
            })
        );
    },
    Sf = R({ patchProp: nf }, cd),
    Cf,
    wf = !1;
function Tf() {
    return (Cf ||= ql(Sf));
}
function Ef() {
    return ((Cf = wf ? Cf : Jl(Sf)), (wf = !0), Cf);
}
var Df = (...e) => {
        let t = Tf().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (e) => {
                let r = Af(e);
                if (!r) return;
                let i = t._component;
                (!V(i) &&
                    !i.render &&
                    !i.template &&
                    (i.template = r.innerHTML),
                    r.nodeType === 1 && (r.textContent = ``));
                let a = n(r, !1, kf(r));
                return (
                    r instanceof Element &&
                        (r.removeAttribute(`v-cloak`),
                        r.setAttribute(`data-v-app`, ``)),
                    a
                );
            }),
            t
        );
    },
    Of = (...e) => {
        let t = Ef().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (e) => {
                let t = Af(e);
                if (t) return n(t, !0, kf(t));
            }),
            t
        );
    };
function kf(e) {
    if (e instanceof SVGElement) return `svg`;
    if (typeof MathMLElement == `function` && e instanceof MathMLElement)
        return `mathml`;
}
function Af(e) {
    return H(e) ? document.querySelector(e) : e;
}
var jf = Wr(),
    Mf = Go(jf.get());
jf.subscribe(() => {
    Mf.value = jf.get();
});
function Nf() {
    (jf.reset(), (Mf.value = jf.get()));
}
var Pf = {
    created() {
        if (!this.$options.remember) return;
        (Array.isArray(this.$options.remember) &&
            (this.$options.remember = { data: this.$options.remember }),
            typeof this.$options.remember == `string` &&
                (this.$options.remember = { data: [this.$options.remember] }),
            typeof this.$options.remember.data == `string` &&
                (this.$options.remember = {
                    data: [this.$options.remember.data],
                }));
        let e =
                this.$options.remember.key instanceof Function
                    ? this.$options.remember.key.call(this)
                    : this.$options.remember.key,
            t = I.restore(e),
            n = this.$options.remember.data.filter(
                (e) =>
                    this[e] === null ||
                    typeof this[e] != `object` ||
                    this[e].__rememberable !== !1,
            ),
            r = (e) =>
                this[e] !== null &&
                typeof this[e] == `object` &&
                typeof this[e].__remember == `function` &&
                typeof this[e].__restore == `function`;
        n.forEach((i) => {
            (this[i] !== void 0 &&
                t !== void 0 &&
                t[i] !== void 0 &&
                (r(i) ? this[i].__restore(t[i]) : (this[i] = t[i])),
                this.$watch(
                    i,
                    () => {
                        I.remember(
                            n.reduce(
                                (e, t) => ({
                                    ...e,
                                    [t]: D(
                                        r(t) ? this[t].__remember() : this[t],
                                    ),
                                }),
                                {},
                            ),
                            e,
                        );
                    },
                    { immediate: !0, deep: !0 },
                ));
        });
    },
};
function Ff(e) {
    let { data: t, rememberKey: n } = e,
        { precognitionEndpoint: r } = e,
        i = typeof t == `function`,
        a = () => (i ? t() : t),
        o = n ? I.restore(n) : null,
        s = D(o?.data ?? D(a())),
        c = (e) => e,
        l = null,
        u = null,
        d = () => u ?? fp.get(`form.withAllErrors`),
        f,
        p = !1,
        m = [],
        h = Po({
            ...D(s),
            isDirty: !1,
            errors: {},
            hasErrors: !1,
            processing: !1,
            progress: null,
            wasSuccessful: !1,
            recentlySuccessful: !1,
            withPrecognition(...e) {
                r = Rr.createWayfinderCallback(...e);
                let t = this,
                    n = Pt((e) => {
                        let { method: t, url: n } = r(),
                            i = D(c(this.data()));
                        return e[t](n, i);
                    }, D(s));
                ((l = n),
                    n
                        .on(`validatingChanged`, () => {
                            t.validating = n.validating();
                        })
                        .on(`validatedChanged`, () => {
                            t.__valid = n.valid();
                        })
                        .on(`touchedChanged`, () => {
                            t.__touched = n.touched();
                        })
                        .on(`errorsChanged`, () => {
                            let e = d() ? n.errors() : Ft(n.errors());
                            ((this.errors = {}),
                                this.setError(e),
                                (t.__valid = n.valid()));
                        }));
                let i = (e, t) => (t(e), e);
                return (
                    Object.assign(t, {
                        __touched: [],
                        __valid: [],
                        validating: !1,
                        validator: () => n,
                        withAllErrors: () => i(t, () => (u = !0)),
                        valid: (e) => t.__valid.includes(e),
                        invalid: (e) => e in this.errors,
                        setValidationTimeout: (e) =>
                            i(t, () => n.setTimeout(e)),
                        validateFiles: () => i(t, () => n.validateFiles()),
                        withoutFileValidation: () =>
                            i(t, () => n.withoutFileValidation()),
                        touch: (e, ...r) => (
                            Array.isArray(e)
                                ? n.touch(e)
                                : typeof e == `string`
                                  ? n.touch([e, ...r])
                                  : n.touch(e),
                            t
                        ),
                        touched: (e) =>
                            typeof e == `string`
                                ? t.__touched.includes(e)
                                : t.__touched.length > 0,
                        validate: (e, r) => {
                            if (
                                (typeof e == `object` &&
                                    !(`target` in e) &&
                                    ((r = e), (e = void 0)),
                                e === void 0)
                            )
                                n.validate(r);
                            else {
                                let t = Lt(e),
                                    i = c(this.data());
                                n.validate(t, O(i, t), r);
                            }
                            return t;
                        },
                        setErrors: (e) => i(t, () => this.setError(e)),
                        forgetError: (e) => i(t, () => this.clearErrors(Lt(e))),
                    }),
                    t
                );
            },
            data() {
                return Object.keys(s).reduce(
                    (e, t) => Je(e, t, O(this, t)),
                    {},
                );
            },
            transform(e) {
                return ((c = e), this);
            },
            defaults(e, t) {
                if (i)
                    throw Error(
                        'You cannot call `defaults()` when using a function to define your form data.',
                    );
                return (
                    (p = !0),
                    e === void 0
                        ? ((s = D(this.data())), (this.isDirty = !1))
                        : (s =
                              typeof e == `string`
                                  ? Je(D(s), e, t)
                                  : Object.assign({}, D(s), e)),
                    l?.defaults(s),
                    this
                );
            },
            reset(...e) {
                let t = D(i ? D(a()) : s);
                return (
                    e.length === 0
                        ? (i && (s = t), Object.assign(this, t))
                        : e
                              .filter((e) => Re(t, e))
                              .forEach((e) => {
                                  (i && Je(s, e, O(t, e)),
                                      Je(this, e, O(t, e)));
                              }),
                    l?.reset(...e),
                    this
                );
            },
            setError(e, t) {
                let n = typeof e == `string` ? { [e]: t } : e;
                return (
                    Object.assign(this.errors, n),
                    (this.hasErrors = Object.keys(this.errors).length > 0),
                    l?.setErrors(n),
                    this
                );
            },
            clearErrors(...e) {
                return (
                    (this.errors = Object.keys(this.errors).reduce(
                        (t, n) => ({
                            ...t,
                            ...(e.length > 0 && !e.includes(n)
                                ? { [n]: this.errors[n] }
                                : {}),
                        }),
                        {},
                    )),
                    (this.hasErrors = Object.keys(this.errors).length > 0),
                    l &&
                        (e.length === 0
                            ? l.setErrors({})
                            : e.forEach(l.forgetError)),
                    this
                );
            },
            resetAndClearErrors(...e) {
                return (this.reset(...e), this.clearErrors(...e), this);
            },
            __rememberable: n === null,
            __remember() {
                let e = this.data();
                if (m.length > 0) {
                    let t = { ...e };
                    return (
                        m.forEach((e) => delete t[e]),
                        { data: t, errors: this.errors }
                    );
                }
                return { data: e, errors: this.errors };
            },
            __restore(e) {
                (Object.assign(this, e.data), this.setError(e.errors));
            },
        });
    return (
        o?.errors && h.setError(o.errors),
        Fs(
            h,
            () => {
                h.isDirty = !ye(h.data(), s);
            },
            { immediate: !0, deep: !0 },
        ),
        Fs(
            h,
            (e) => {
                if (!n) return;
                let t = I.restore(n),
                    r = D(e.__remember());
                ye(t, r) || I.remember(r, n);
            },
            { immediate: !0, deep: !0 },
        ),
        r && h.withPrecognition(r),
        {
            form: h,
            setDefaults: (e) => {
                s = e;
            },
            getTransform: () => c,
            getPrecognitionEndpoint: () => r ?? null,
            markAsSuccessful: () => {
                (h.clearErrors(),
                    (h.wasSuccessful = !0),
                    (h.recentlySuccessful = !0),
                    (f = setTimeout(
                        () => (h.recentlySuccessful = !1),
                        fp.get(`form.recentlySuccessfulDuration`),
                    )));
            },
            wasDefaultsCalledInOnSuccess: () => p,
            resetDefaultsCalledInOnSuccess: () => {
                p = !1;
            },
            setRememberExcludeKeys: (e) => {
                m = e;
            },
            resetBeforeSubmit: () => {
                ((h.wasSuccessful = !1),
                    (h.recentlySuccessful = !1),
                    clearTimeout(f));
            },
            finishProcessing: () => {
                ((h.processing = !1), (h.progress = null));
            },
            withAllErrors: {
                enabled: d,
                enable: () => {
                    u = !0;
                },
            },
        }
    );
}
var If = null,
    Lf = !1;
function Rf(e) {
    if (Lf) return;
    If === null && ((Lf = !0), (If = new Set(Object.keys(zf({})))), (Lf = !1));
    let t = Object.keys(e).filter((e) => If.has(e));
    t.length > 0 &&
        console.error(
            `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((e) => `"${e}"`).join(`, `)}. These fields will be overwritten by form methods/properties. Please rename these fields.`,
        );
}
function zf(...e) {
    let {
        rememberKey: t,
        data: n,
        precognitionEndpoint: r,
    } = Rr.parseUseFormArguments(...e);
    Rf(D(typeof n == `function` ? n() : n));
    let i = null,
        a = null,
        {
            form: o,
            setDefaults: s,
            getTransform: c,
            getPrecognitionEndpoint: l,
            markAsSuccessful: u,
            wasDefaultsCalledInOnSuccess: d,
            resetDefaultsCalledInOnSuccess: f,
            setRememberExcludeKeys: p,
            resetBeforeSubmit: m,
            finishProcessing: h,
        } = Ff({ data: n, rememberKey: t, precognitionEndpoint: r }),
        g = o,
        _ =
            (e) =>
            (t, n = {}) => {
                g.submit(e, t, n);
            };
    return (
        Object.assign(g, {
            submit(...e) {
                let {
                    method: t,
                    url: n,
                    options: r,
                } = Rr.parseSubmitArguments(e, l());
                f();
                let o = {
                    ...r,
                    onCancelToken: (e) => ((i = e), r.onCancelToken?.(e)),
                    onBefore: (e) => (m(), r.onBefore?.(e)),
                    onStart: (e) => ((g.processing = !0), r.onStart?.(e)),
                    onProgress: (e) => (
                        (g.progress = e ?? null),
                        r.onProgress?.(e)
                    ),
                    onSuccess: async (e) => {
                        u();
                        let t = r.onSuccess ? await r.onSuccess(e) : null;
                        return (d() || (s(D(g.data())), (g.isDirty = !1)), t);
                    },
                    onError: (e) => (
                        g.clearErrors().setError(e),
                        r.onError?.(e)
                    ),
                    onCancel: () => r.onCancel?.(),
                    onFinish: (e) => (h(), (i = null), r.onFinish?.(e)),
                };
                ((o.optimistic = o.optimistic ?? a ?? void 0), (a = null));
                let p = c()(g.data());
                t === `delete` ? I.delete(n, { ...o, data: p }) : I[t](n, p, o);
            },
            get: _(`get`),
            post: _(`post`),
            put: _(`put`),
            patch: _(`patch`),
            delete: _(`delete`),
            cancel() {
                i && i.cancel();
            },
            dontRemember(...e) {
                return (p(e), g);
            },
            optimistic(e) {
                return ((a = e), g);
            },
        }),
        l(),
        g
    );
}
function Bf(e) {
    if (!e) return !1;
    if (typeof e == `function`) return !0;
    if (typeof e == `object`) {
        let t = e;
        return (
            typeof t.render == `function` ||
            typeof t.setup == `function` ||
            typeof t.template == `string` ||
            `__file` in t ||
            `__name` in t
        );
    }
    return !1;
}
function Vf(e) {
    if (typeof e != `function`) return !1;
    let t = e;
    return t.length === 2 && t.prototype === void 0;
}
var Hf = Go(void 0),
    $ = Go(),
    Uf = null,
    Wf = Ko(null),
    Gf = Go(void 0),
    Kf,
    qf = nc({
        name: `Inertia`,
        props: {
            initialPage: { type: Object, required: !0 },
            initialComponent: { type: Object, required: !1 },
            resolveComponent: { type: Function, required: !1 },
            titleCallback: { type: Function, required: !1, default: (e) => e },
            onHeadUpdate: {
                type: Function,
                required: !1,
                default: () => () => {},
            },
            defaultLayout: { type: Function, required: !1 },
            serverHead: { type: [Boolean, String, Function], required: !1 },
        },
        setup({
            initialPage: e,
            initialComponent: t,
            resolveComponent: n,
            titleCallback: r,
            onHeadUpdate: i,
            defaultLayout: a,
            serverHead: o,
        }) {
            ((Hf.value = t ? Ho(t) : void 0),
                ($.value = { ...e, flash: e.flash ?? {} }),
                (Gf.value = void 0));
            let s = typeof window > `u`;
            if (
                ((Kf = Ur(
                    s,
                    (e) => (r ? r(e, $.value) : e),
                    i || (() => {}),
                    Vr(e, o),
                )),
                !s)
            ) {
                I.init({
                    initialPage: e,
                    resolveComponent: n,
                    swapComponent: async (e) => {
                        (e.preserveState || Nf(),
                            (Hf.value = Ho(e.component)),
                            ($.value = e.page),
                            (Gf.value = e.preserveState
                                ? Gf.value
                                : Date.now()));
                    },
                    onFlash: (e) => {
                        $.value = { ...$.value, flash: e };
                    },
                });
                let t = (e) => {
                    Kf.updateServerHead(Vr(e.detail.page, o));
                };
                (I.on(`navigate`, t), I.on(`clientVisit`, t));
            }
            return () => {
                if (Hf.value) {
                    Hf.value.inheritAttrs = !!Hf.value.inheritAttrs;
                    let e = $u(Hf.value, { ...$.value.props, key: Gf.value });
                    if (
                        ((Wf.value &&= ((Hf.value.layout = Wf.value), null)),
                        Hf.value.layout && Vf(Hf.value.layout))
                    )
                        return Hf.value.layout($u, e);
                    let t,
                        n = null,
                        r = Hf.value.layout;
                    if (
                        typeof r == `function` &&
                        r.length <= 1 &&
                        r.prototype === void 0
                    ) {
                        let e = r($.value.props);
                        Xr(e, Bf)
                            ? ((t = a?.($.value.component, $.value)), (n = e))
                            : (t = e);
                    } else
                        Yr(r, Bf)
                            ? ((t = a?.($.value.component, $.value)), (n = r))
                            : (t = r ?? a?.($.value.component, $.value));
                    if (t) {
                        let r = $r(t, Bf, Hf.value.layout && !n ? Vf : void 0);
                        if (
                            (n &&
                                (r = r.map((e) => ({
                                    ...e,
                                    props: { ...e.props, ...n },
                                }))),
                            r.length > 0)
                        ) {
                            let t = s ? { shared: {}, named: {} } : Mf.value;
                            return r.reduceRight((e, n) => {
                                let r = n.component;
                                return (
                                    (r.inheritAttrs = !!r.inheritAttrs),
                                    $u(
                                        r,
                                        {
                                            ...$.value.props,
                                            ...n.props,
                                            ...t.shared,
                                            ...((n.name && t.named[n.name]) ||
                                                {}),
                                        },
                                        () => e,
                                    )
                                );
                            }, e);
                        }
                    }
                    return e;
                }
            };
        },
    }),
    Jf = {
        install(e) {
            ((I.form = zf),
                Object.defineProperty(e.config.globalProperties, '$inertia', {
                    get: () => I,
                }),
                Object.defineProperty(e.config.globalProperties, '$page', {
                    get: () => $.value,
                }),
                Object.defineProperty(
                    e.config.globalProperties,
                    '$headManager',
                    { get: () => Kf },
                ),
                e.mixin(Pf));
        },
    };
function Yf() {
    return (
        (Uf ||= Po({
            props: Q(() => $.value?.props),
            url: Q(() => $.value?.url),
            component: Q(() => $.value?.component),
            version: Q(() => $.value?.version),
            clearHistory: Q(() => $.value?.clearHistory),
            deferredProps: Q(() => $.value?.deferredProps),
            rescuedProps: Q(() => $.value?.rescuedProps),
            mergeProps: Q(() => $.value?.mergeProps),
            prependProps: Q(() => $.value?.prependProps),
            deepMergeProps: Q(() => $.value?.deepMergeProps),
            matchPropsOn: Q(() => $.value?.matchPropsOn),
            rememberedState: Q(() => $.value?.rememberedState),
            encryptHistory: Q(() => $.value?.encryptHistory),
            scrollProps: Q(() => $.value?.scrollProps),
            flash: Q(() => $.value?.flash),
        })),
        Uf
    );
}
async function Xf({
    id: e = `app`,
    resolve: t,
    setup: n,
    title: r,
    progress: i = {},
    page: a,
    render: o,
    defaults: s = {},
    nonce: c,
    http: l,
    layout: u,
    serverHead: d,
    withApp: f,
    dev: p = !1,
} = {}) {
    (fp.replace(s), c && fp.set(`nonce`, c), l && Tr.setClient(l), p && Dr());
    let m = typeof window > `u`,
        h = (e, n) => Promise.resolve(t(e, n)).then((e) => e.default || e);
    if (m && !a && !o)
        return async (t, i) => {
            let a = [],
                o = {
                    initialPage: t,
                    initialComponent: await h(t.component, t),
                    resolveComponent: h,
                    titleCallback: r,
                    onHeadUpdate: (e) => (a = e),
                    defaultLayout: u,
                    serverHead: d,
                },
                s;
            n
                ? (s = n({ el: null, App: qf, props: o, plugin: Jf }))
                : ((s = Of({ render: () => $u(qf, o) })),
                  s.use(Jf),
                  f && f(s, { ssr: !0, page: t }));
            let c = Di(e, t, await i(s));
            return { head: a, body: c };
        };
    let g = a || Dn(e),
        _ = [],
        v = await Promise.all([
            h(g.component, g),
            I.decryptHistory().catch(() => {}),
        ]).then(([t]) => {
            let i = {
                initialPage: g,
                initialComponent: t,
                resolveComponent: h,
                titleCallback: r,
                onHeadUpdate: m ? (e) => (_ = e) : void 0,
                defaultLayout: u,
                serverHead: d,
            };
            if (m) return n({ el: null, App: qf, props: i, plugin: Jf });
            let a = document.getElementById(e);
            if (n) return n({ el: a, App: qf, props: i, plugin: Jf });
            if (a.hasAttribute(`data-server-rendered`)) {
                let e = Of({ render: () => $u(qf, i) });
                (e.use(Jf), f && f(e, { ssr: !1, page: g }), e.mount(a));
            } else {
                let e = Df({ render: () => $u(qf, i) });
                (e.use(Jf), f && f(e, { ssr: !1, page: g }), e.mount(a));
            }
        });
    if ((!m && i && Ei(i), m && o && v)) {
        let t = Di(e, g, await o(v));
        return { head: _, body: t };
    }
}
function Zf(e) {
    return (
        typeof e.type == `string` &&
        [
            `area`,
            `base`,
            `br`,
            `col`,
            `embed`,
            `hr`,
            `img`,
            `input`,
            `keygen`,
            `link`,
            `meta`,
            `param`,
            `source`,
            `track`,
            `wbr`,
        ].indexOf(e.type) > -1
    );
}
function Qf(e) {
    ((e.props = e.props || {}),
        (e.props[`data-inertia`] =
            e.props[`head-key`] === void 0 ? `` : e.props[`head-key`]));
    let t = Object.keys(e.props).reduce((t, n) => {
        let r = String(e.props[n]);
        return [`key`, `head-key`].includes(n)
            ? t
            : r === ``
              ? t + ` ${n}`
              : t + ` ${n}="${$e(r)}"`;
    }, ``);
    return `<${String(e.type)}${t}>`;
}
function $f(e) {
    let { children: t } = e;
    return typeof t == `string`
        ? t
        : Array.isArray(t)
          ? t.reduce((e, t) => e + ap(t), ``)
          : ``;
}
function ep(e) {
    return typeof e.type == `function`;
}
function tp(e) {
    return typeof e.type == `object`;
}
function np(e) {
    return /(comment|cmt)/i.test(e.type.toString());
}
function rp(e) {
    return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
}
function ip(e) {
    return /(text|txt)/i.test(e.type.toString());
}
function ap(e) {
    if (ip(e)) return String(e.children);
    if (rp(e) || np(e)) return ``;
    let t = Qf(e);
    return (
        e.children && (t += $f(e)), Zf(e) || (t += `</${String(e.type)}>`), t
    );
}
function op(e, t) {
    return (
        t &&
            !e.find((e) => e.startsWith(`<title`)) &&
            e.push(`<title data-inertia="">${$e(t)}</title>`),
        e
    );
}
function sp(e, t) {
    return op(
        e
            .flatMap((e) => cp(e))
            .map((e) => ap(e))
            .filter((e) => e),
        t,
    );
}
function cp(e) {
    return ep(e)
        ? cp(e.type())
        : tp(e)
          ? (console.warn(
                `Using components in the <Head> component is not supported.`,
            ),
            [])
          : ip(e) && e.children
            ? e
            : rp(e) && e.children
              ? e.children.flatMap((e) => cp(e))
              : np(e)
                ? []
                : e;
}
var lp = nc({
        props: { title: { type: String, required: !1 } },
        setup(e, { slots: t }) {
            let n = Kf.createProvider();
            return (
                Ic(() => {
                    n.disconnect();
                }),
                () => {
                    n.update(sp(t.default ? t.default() : [], e.title));
                }
            );
        },
    }),
    up = () => {},
    dp = nc({
        name: `Link`,
        props: {
            as: { type: [String, Object], default: `a` },
            data: { type: Object, default: () => ({}) },
            href: { type: [String, Object], default: `` },
            method: { type: String, default: `get` },
            replace: { type: Boolean, default: !1 },
            preserveScroll: { type: [Boolean, String, Function], default: !1 },
            preserveState: { type: [Boolean, String, Function], default: null },
            preserveUrl: { type: Boolean, default: !1 },
            only: { type: Array, default: () => [] },
            except: { type: Array, default: () => [] },
            headers: { type: Object, default: () => ({}) },
            queryStringArrayFormat: { type: String, default: `brackets` },
            async: { type: Boolean, default: !1 },
            prefetch: { type: [Boolean, String, Array], default: !1 },
            cacheFor: { type: [Number, String, Array], default: 0 },
            onStart: { type: Function, default: up },
            onProgress: { type: Function, default: up },
            onFinish: { type: Function, default: up },
            onBefore: { type: Function, default: up },
            onCancel: { type: Function, default: up },
            onSuccess: { type: Function, default: up },
            onError: { type: Function, default: up },
            onCancelToken: { type: Function, default: up },
            onPrefetching: { type: Function, default: up },
            onPrefetched: { type: Function, default: up },
            cacheTags: { type: [String, Array], default: () => [] },
            viewTransition: { type: [Boolean, Object], default: !1 },
            component: { type: String, default: null },
            instant: { type: Boolean, default: !1 },
            pageProps: { type: [Object, Function], default: null },
        },
        setup(e, { slots: t, attrs: n }) {
            let r = Go(0),
                i = Go(),
                a = Q(() =>
                    e.prefetch === !0
                        ? [`hover`]
                        : e.prefetch === !1
                          ? []
                          : Array.isArray(e.prefetch)
                            ? e.prefetch
                            : [e.prefetch],
                ),
                o = Q(() =>
                    e.cacheFor === 0
                        ? a.value.length === 1 && a.value[0] === `click`
                            ? 0
                            : fp.get(`prefetch.cacheFor`)
                        : e.cacheFor,
                );
            (Nc(() => {
                a.value.includes(`mount`) && g();
            }),
                Lc(() => {
                    clearTimeout(i.value);
                }));
            let s = Q(() =>
                    Qn(e.href)
                        ? e.href.method
                        : (e.method ?? `get`).toLowerCase(),
                ),
                c = Q(() =>
                    typeof e.as != `string` || e.as.toLowerCase() !== `a`
                        ? e.as
                        : s.value === `get`
                          ? e.as.toLowerCase()
                          : `button`,
                ),
                l = Q(() =>
                    qn(
                        s.value,
                        Qn(e.href) ? e.href.url : e.href,
                        e.data || {},
                        e.queryStringArrayFormat,
                    ),
                ),
                u = Q(() => l.value[0]),
                d = Q(() => l.value[1]),
                f = Q(() =>
                    e.component
                        ? e.component
                        : e.instant && Qn(e.href)
                          ? $n(e.href)
                          : null,
                ),
                p = Q(() =>
                    c.value === `button`
                        ? { type: `button` }
                        : c.value === `a` || typeof c.value != `string`
                          ? { href: u.value }
                          : {},
                ),
                m = Q(() => ({
                    data: d.value,
                    method: s.value,
                    replace: e.replace,
                    preserveScroll: e.preserveScroll,
                    preserveState: e.preserveState ?? s.value !== `get`,
                    preserveUrl: e.preserveUrl,
                    only: e.only,
                    except: e.except,
                    headers: e.headers,
                    async: e.async,
                    component: f.value,
                    pageProps: e.pageProps,
                })),
                h = Q(() => ({
                    ...m.value,
                    viewTransition: e.viewTransition,
                    onCancelToken: e.onCancelToken,
                    onBefore: e.onBefore,
                    onStart: (t) => {
                        (r.value++, e.onStart?.(t));
                    },
                    onProgress: e.onProgress,
                    onFinish: (t) => {
                        (r.value--, e.onFinish?.(t));
                    },
                    onCancel: e.onCancel,
                    onSuccess: e.onSuccess,
                    onError: e.onError,
                })),
                g = () => {
                    I.prefetch(
                        u.value,
                        {
                            ...m.value,
                            onPrefetching: e.onPrefetching,
                            onPrefetched: e.onPrefetched,
                        },
                        { cacheFor: o.value, cacheTags: e.cacheTags },
                    );
                },
                _ = {
                    onClick: (e) => {
                        ti(e) &&
                            (e.preventDefault(), I.visit(u.value, h.value));
                    },
                },
                v = {
                    onMouseenter: () => {
                        i.value = setTimeout(() => {
                            g();
                        }, fp.get(`prefetch.hoverDelay`));
                    },
                    onMouseleave: () => {
                        clearTimeout(i.value);
                    },
                    onClick: _.onClick,
                },
                y = {
                    onMousedown: (e) => {
                        ti(e) && (e.preventDefault(), g());
                    },
                    onKeydown: (e) => {
                        ni(e) && (e.preventDefault(), g());
                    },
                    onMouseup: (e) => {
                        ti(e) &&
                            (e.preventDefault(), I.visit(u.value, h.value));
                    },
                    onKeyup: (e) => {
                        ni(e) &&
                            (e.preventDefault(), I.visit(u.value, h.value));
                    },
                    onClick: (e) => {
                        ti(e) && e.preventDefault();
                    },
                };
            return () =>
                $u(
                    c.value,
                    {
                        ...n,
                        ...p.value,
                        'data-loading': r.value > 0 ? `` : void 0,
                        ...(a.value.includes(`hover`)
                            ? v
                            : a.value.includes(`click`)
                              ? y
                              : _),
                    },
                    t,
                );
        },
    }),
    fp = Ut.extend({}),
    pp = `Mashudi`;
Xf({
    resolve: async (e, t) => {
        let n = Object.assign({
                './pages/Admin/AdminLayout.vue': () =>
                    Ht(
                        () =>
                            import(`./AdminLayout-DQz9mA5t.js`).then(
                                (e) => e.n,
                            ),
                        __vite__mapDeps([0, 1]),
                    ),
                './pages/Admin/Login.vue': () =>
                    Ht(
                        () => import(`./Login-DiHcj-aW.js`),
                        __vite__mapDeps([2, 1]),
                    ),
                './pages/Admin/Projects/Form.vue': () =>
                    Ht(
                        () => import(`./Form-GR8JUOCL.js`),
                        __vite__mapDeps([3, 0, 1, 4]),
                    ),
                './pages/Admin/Projects/Index.vue': () =>
                    Ht(
                        () => import(`./Index-DWuUNGCl.js`),
                        __vite__mapDeps([5, 0, 1, 4]),
                    ),
                './pages/Welcome.vue': () =>
                    Ht(
                        () => import(`./Welcome-wOgD-D8I.js`),
                        __vite__mapDeps([6, 7]),
                    ),
            }),
            r = await (n[`./pages/${e}.vue`] || n[`./Pages/${e}.vue`])?.();
        if (!r) throw Error(`Page not found: ${e}`);
        return r.default ?? r;
    },
    title: (e) => e ?? pp,
    progress: { color: `#4B5563` },
});
export {
    sa as A,
    Wc as C,
    Go as D,
    ks as E,
    I as M,
    Yo as O,
    Uc as S,
    Os as T,
    Z as _,
    md as a,
    Lc as b,
    xf as c,
    Q as d,
    Su as f,
    Eu as g,
    Du as h,
    Yf as i,
    xa as j,
    fa as k,
    yf as l,
    gu as m,
    dp as n,
    pf as o,
    Ou as p,
    zf as r,
    ff as s,
    lp as t,
    ou as u,
    nc as v,
    Fs as w,
    du as x,
    Nc as y,
};
