var Ie = Object.defineProperty;
var Le = (e, t, n) => t in e ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var H = (e, t, n) => Le(e, typeof t != "symbol" ? t + "" : t, n);
function L() {
}
function T(e, t) {
  for (const n in t) e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function ve(e) {
  return e();
}
function de() {
  return /* @__PURE__ */ Object.create(null);
}
function A(e) {
  e.forEach(ve);
}
function pe(e) {
  return typeof e == "function";
}
function Y(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Te(e) {
  return Object.keys(e).length === 0;
}
function Z(e, t, n, i) {
  if (e) {
    const a = ze(e, t, n, i);
    return e[0](a);
  }
}
function ze(e, t, n, i) {
  return e[1] && i ? T(n.ctx.slice(), e[1](i(t))) : n.ctx;
}
function M(e, t, n, i) {
  if (e[2] && i) {
    const a = e[2](i(n));
    if (t.dirty === void 0)
      return a;
    if (typeof a == "object") {
      const s = [], r = Math.max(t.dirty.length, a.length);
      for (let u = 0; u < r; u += 1)
        s[u] = t.dirty[u] | a[u];
      return s;
    }
    return t.dirty | a;
  }
  return t.dirty;
}
function Q(e, t, n, i, a, s) {
  if (a) {
    const r = ze(t, n, i, s);
    e.p(r, a);
  }
}
function x(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let i = 0; i < n; i++)
      t[i] = -1;
    return t;
  }
  return -1;
}
function Ve(e) {
  const t = {};
  for (const n in e) n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function he(e, t) {
  const n = {};
  t = new Set(t);
  for (const i in e) !t.has(i) && i[0] !== "$" && (n[i] = e[i]);
  return n;
}
function De(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function ee(e, t) {
  e.appendChild(t);
}
function y(e, t, n) {
  e.insertBefore(t, n || null);
}
function v(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function w(e) {
  return document.createElement(e);
}
function ke(e) {
  return document.createTextNode(e);
}
function te() {
  return ke(" ");
}
function Re() {
  return ke("");
}
function P(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function b(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const Ue = ["width", "height"];
function D(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const i in t)
    t[i] == null ? e.removeAttribute(i) : i === "style" ? e.style.cssText = t[i] : i === "__value" ? e.value = e[i] = t[i] : n[i] && n[i].set && Ue.indexOf(i) === -1 ? e[i] = t[i] : b(e, i, t[i]);
}
function We(e) {
  return Array.from(e.childNodes);
}
let ne;
function I(e) {
  ne = e;
}
function $(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((i) => i.call(this, t));
}
const B = [], me = [];
let C = [];
const ge = [], qe = /* @__PURE__ */ Promise.resolve();
let K = !1;
function Fe() {
  K || (K = !0, qe.then(ye));
}
function X(e) {
  C.push(e);
}
const J = /* @__PURE__ */ new Set();
let O = 0;
function ye() {
  if (O !== 0)
    return;
  const e = ne;
  do {
    try {
      for (; O < B.length; ) {
        const t = B[O];
        O++, I(t), Ge(t.$$);
      }
    } catch (t) {
      throw B.length = 0, O = 0, t;
    }
    for (I(null), B.length = 0, O = 0; me.length; ) me.pop()();
    for (let t = 0; t < C.length; t += 1) {
      const n = C[t];
      J.has(n) || (J.add(n), n());
    }
    C.length = 0;
  } while (B.length);
  for (; ge.length; )
    ge.pop()();
  K = !1, J.clear(), I(e);
}
function Ge(e) {
  if (e.fragment !== null) {
    e.update(), A(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(X);
  }
}
function He(e) {
  const t = [], n = [];
  C.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), C = t;
}
const V = /* @__PURE__ */ new Set();
let j;
function Je() {
  j = {
    r: 0,
    c: [],
    p: j
    // parent group
  };
}
function Ke() {
  j.r || A(j.c), j = j.p;
}
function m(e, t) {
  e && e.i && (V.delete(e), e.i(t));
}
function _(e, t, n, i) {
  if (e && e.o) {
    if (V.has(e)) return;
    V.add(e), j.c.push(() => {
      V.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else i && i();
}
function we(e, t) {
  const n = {}, i = {}, a = { $$scope: 1 };
  let s = e.length;
  for (; s--; ) {
    const r = e[s], u = t[s];
    if (u) {
      for (const d in r)
        d in u || (i[d] = 1);
      for (const d in u)
        a[d] || (n[d] = u[d], a[d] = 1);
      e[s] = u;
    } else
      for (const d in r)
        a[d] = 1;
  }
  for (const r in i)
    r in n || (n[r] = void 0);
  return n;
}
function S(e) {
  e && e.c();
}
function z(e, t, n) {
  const { fragment: i, after_update: a } = e.$$;
  i && i.m(t, n), X(() => {
    const s = e.$$.on_mount.map(ve).filter(pe);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : A(s), e.$$.on_mount = [];
  }), a.forEach(X);
}
function k(e, t) {
  const n = e.$$;
  n.fragment !== null && (He(n.after_update), A(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Xe(e, t) {
  e.$$.dirty[0] === -1 && (B.push(e), Fe(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ie(e, t, n, i, a, s, r = null, u = [-1]) {
  const d = ne;
  I(e);
  const h = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: L,
    not_equal: a,
    bound: de(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: de(),
    dirty: u,
    skip_bound: !1,
    root: t.target || d.$$.root
  };
  r && r(h.root);
  let f = !1;
  if (h.ctx = n ? n(e, t.props || {}, (o, c, ...g) => {
    const p = g.length ? g[0] : c;
    return h.ctx && a(h.ctx[o], h.ctx[o] = p) && (!h.skip_bound && h.bound[o] && h.bound[o](p), f && Xe(e, o)), c;
  }) : [], h.update(), f = !0, A(h.before_update), h.fragment = i ? i(h.ctx) : !1, t.target) {
    if (t.hydrate) {
      const o = We(t.target);
      h.fragment && h.fragment.l(o), o.forEach(v);
    } else
      h.fragment && h.fragment.c();
    t.intro && m(e.$$.fragment), z(e, t.target, t.anchor), ye();
  }
  I(d);
}
class ae {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    H(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    H(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    k(this, 1), this.$destroy = L;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!pe(n))
      return L;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const a = i.indexOf(n);
      a !== -1 && i.splice(a, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Te(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ye = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ye);
function Se(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Se(e[t])) && (i && (i += " "), i += n);
  } else for (n in e) e[n] && (i && (i += " "), i += n);
  return i;
}
function R() {
  for (var e, t, n = 0, i = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Se(e)) && (i && (i += " "), i += t);
  return i;
}
var je = /* @__PURE__ */ ((e) => (e.xs = "(min-width: 0)", e.sm = "(min-width: 640px)", e.md = "(min-width: 768px)", e.lg = "(min-width: 1024px)", e.xl = "(min-width: 1280px)", e))(je || {});
[...Object.keys(je)];
function _e(e, t) {
  return `var(--${e}-${t})`;
}
function Ze(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n}`).join("; ");
}
function Me(e, t) {
  const n = {};
  for (const [i, a] of Object.entries(e))
    if (a !== void 0 && t[i]) {
      const { name: s, category: r } = t[i];
      if (typeof a == "object" && a !== null)
        for (const [u, d] of Object.entries(a))
          d !== void 0 && (n[`--${s}-${u}`] = _e(r, d));
      else a !== null && (n[`--${s}`] = _e(r, a));
    }
  return n;
}
function Qe(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = w("div"), b(t, "class", "spinner"), b(
        t,
        "data-invert",
        /*invert*/
        e[0]
      ), b(
        t,
        "data-size",
        /*size*/
        e[1]
      ), b(t, "role", "progressbar");
    },
    m(i, a) {
      y(i, t, a), ee(t, n);
    },
    p(i, [a]) {
      a & /*invert*/
      1 && b(
        t,
        "data-invert",
        /*invert*/
        i[0]
      ), a & /*size*/
      2 && b(
        t,
        "data-size",
        /*size*/
        i[1]
      );
    },
    i: L,
    o: L,
    d(i) {
      i && v(t);
    }
  };
}
function xe(e, t, n) {
  let { invert: i = void 0, size: a = "sm" } = t;
  return e.$$set = (s) => {
    "invert" in s && n(0, i = s.invert), "size" in s && n(1, a = s.size);
  }, [i, a];
}
class Ne extends ae {
  constructor(t) {
    super(), ie(this, t, xe, Qe, Y, { invert: 0, size: 1 });
  }
}
function be(e) {
  let t;
  const n = (
    /*#slots*/
    e[2].default
  ), i = Z(
    n,
    e,
    /*$$scope*/
    e[1],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(a, s) {
      i && i.m(a, s), t = !0;
    },
    p(a, s) {
      i && i.p && (!t || s & /*$$scope*/
      2) && Q(
        i,
        n,
        a,
        /*$$scope*/
        a[1],
        t ? M(
          n,
          /*$$scope*/
          a[1],
          s,
          null
        ) : x(
          /*$$scope*/
          a[1]
        ),
        null
      );
    },
    i(a) {
      t || (m(i, a), t = !0);
    },
    o(a) {
      _(i, a), t = !1;
    },
    d(a) {
      i && i.d(a);
    }
  };
}
function et(e) {
  let t, n, i = (
    /*condition*/
    e[0] && be(e)
  );
  return {
    c() {
      i && i.c(), t = Re();
    },
    m(a, s) {
      i && i.m(a, s), y(a, t, s), n = !0;
    },
    p(a, [s]) {
      /*condition*/
      a[0] ? i ? (i.p(a, s), s & /*condition*/
      1 && m(i, 1)) : (i = be(a), i.c(), m(i, 1), i.m(t.parentNode, t)) : i && (Je(), _(i, 1, 1, () => {
        i = null;
      }), Ke());
    },
    i(a) {
      n || (m(i), n = !0);
    },
    o(a) {
      _(i), n = !1;
    },
    d(a) {
      a && v(t), i && i.d(a);
    }
  };
}
function tt(e, t, n) {
  let { $$slots: i = {}, $$scope: a } = t, { condition: s } = t;
  return e.$$set = (r) => {
    "condition" in r && n(0, s = r.condition), "$$scope" in r && n(1, a = r.$$scope);
  }, [s, a, i];
}
class E extends ae {
  constructor(t) {
    super(), ie(this, t, tt, et, Y, { condition: 0 });
  }
}
function nt(e) {
  let t, n;
  const i = (
    /*#slots*/
    e[22].default
  ), a = Z(
    i,
    e,
    /*$$scope*/
    e[28],
    null
  );
  return {
    c() {
      t = w("span"), a && a.c(), b(t, "class", "button-text");
    },
    m(s, r) {
      y(s, t, r), a && a.m(t, null), n = !0;
    },
    p(s, r) {
      a && a.p && (!n || r & /*$$scope*/
      268435456) && Q(
        a,
        i,
        s,
        /*$$scope*/
        s[28],
        n ? M(
          i,
          /*$$scope*/
          s[28],
          r,
          null
        ) : x(
          /*$$scope*/
          s[28]
        ),
        null
      );
    },
    i(s) {
      n || (m(a, s), n = !0);
    },
    o(s) {
      _(a, s), n = !1;
    },
    d(s) {
      s && v(t), a && a.d(s);
    }
  };
}
function it(e) {
  let t, n, i;
  return n = new Ne({
    props: {
      size: U(
        /*size*/
        e[8]
      ),
      invert: (
        /*getSpinnerInvertedness*/
        e[13](
          /*invert*/
          e[6]
        )
      )
    }
  }), {
    c() {
      t = w("div"), S(n.$$.fragment), b(t, "class", "button-spinner");
    },
    m(a, s) {
      y(a, t, s), z(n, t, null), i = !0;
    },
    p(a, s) {
      const r = {};
      s & /*size*/
      256 && (r.size = U(
        /*size*/
        a[8]
      )), s & /*invert*/
      64 && (r.invert = /*getSpinnerInvertedness*/
      a[13](
        /*invert*/
        a[6]
      )), n.$set(r);
    },
    i(a) {
      i || (m(n.$$.fragment, a), i = !0);
    },
    o(a) {
      _(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && v(t), k(n);
    }
  };
}
function at(e) {
  let t, n, i, a, s, r, u;
  n = new E({
    props: {
      condition: !!/*$$slots*/
      (e[15] && /*$$slots*/
      e[15].default),
      $$slots: { default: [nt] },
      $$scope: { ctx: e }
    }
  }), a = new E({
    props: {
      condition: !!/*busy*/
      e[2],
      $$slots: { default: [it] },
      $$scope: { ctx: e }
    }
  });
  let d = [
    {
      href: s = /*$$restProps*/
      e[14].href
    },
    {
      class: r = R("button", { className: (
        /*className*/
        e[11]
      ) })
    },
    { "data-active": (
      /*active*/
      e[0]
    ) },
    { "data-appearance": (
      /*appearance*/
      e[1]
    ) },
    { "data-busy": (
      /*busy*/
      e[2]
    ) },
    { "data-disabled": (
      /*disabled*/
      e[4]
    ) },
    { "data-fill": (
      /*fill*/
      e[3]
    ) },
    { "data-invert": (
      /*invert*/
      e[6]
    ) },
    { "data-shape": (
      /*shape*/
      e[7]
    ) },
    { "data-size": (
      /*size*/
      e[8]
    ) },
    { "data-underline": (
      /*underline*/
      e[9]
    ) },
    { "data-variant": (
      /*variant*/
      e[10]
    ) },
    { style: (
      /*mergedStyles*/
      e[12]
    ) },
    { hidden: (
      /*hidden*/
      e[5]
    ) },
    /*$$restProps*/
    e[14]
  ], h = {};
  for (let f = 0; f < d.length; f += 1)
    h = T(h, d[f]);
  return {
    c() {
      t = w("a"), S(n.$$.fragment), i = te(), S(a.$$.fragment), D(t, h);
    },
    m(f, o) {
      y(f, t, o), z(n, t, null), ee(t, i), z(a, t, null), u = !0;
    },
    p(f, o) {
      const c = {};
      o & /*$$slots*/
      32768 && (c.condition = !!/*$$slots*/
      (f[15] && /*$$slots*/
      f[15].default)), o & /*$$scope*/
      268435456 && (c.$$scope = { dirty: o, ctx: f }), n.$set(c);
      const g = {};
      o & /*busy*/
      4 && (g.condition = !!/*busy*/
      f[2]), o & /*$$scope, size, invert*/
      268435776 && (g.$$scope = { dirty: o, ctx: f }), a.$set(g), D(t, h = we(d, [
        (!u || o & /*$$restProps*/
        16384 && s !== (s = /*$$restProps*/
        f[14].href)) && { href: s },
        (!u || o & /*className*/
        2048 && r !== (r = R("button", { className: (
          /*className*/
          f[11]
        ) }))) && { class: r },
        (!u || o & /*active*/
        1) && { "data-active": (
          /*active*/
          f[0]
        ) },
        (!u || o & /*appearance*/
        2) && { "data-appearance": (
          /*appearance*/
          f[1]
        ) },
        (!u || o & /*busy*/
        4) && { "data-busy": (
          /*busy*/
          f[2]
        ) },
        (!u || o & /*disabled*/
        16) && { "data-disabled": (
          /*disabled*/
          f[4]
        ) },
        (!u || o & /*fill*/
        8) && { "data-fill": (
          /*fill*/
          f[3]
        ) },
        (!u || o & /*invert*/
        64) && { "data-invert": (
          /*invert*/
          f[6]
        ) },
        (!u || o & /*shape*/
        128) && { "data-shape": (
          /*shape*/
          f[7]
        ) },
        (!u || o & /*size*/
        256) && { "data-size": (
          /*size*/
          f[8]
        ) },
        (!u || o & /*underline*/
        512) && { "data-underline": (
          /*underline*/
          f[9]
        ) },
        (!u || o & /*variant*/
        1024) && { "data-variant": (
          /*variant*/
          f[10]
        ) },
        { style: (
          /*mergedStyles*/
          f[12]
        ) },
        (!u || o & /*hidden*/
        32) && { hidden: (
          /*hidden*/
          f[5]
        ) },
        o & /*$$restProps*/
        16384 && /*$$restProps*/
        f[14]
      ]));
    },
    i(f) {
      u || (m(n.$$.fragment, f), m(a.$$.fragment, f), u = !0);
    },
    o(f) {
      _(n.$$.fragment, f), _(a.$$.fragment, f), u = !1;
    },
    d(f) {
      f && v(t), k(n), k(a);
    }
  };
}
function st(e) {
  let t, n;
  const i = (
    /*#slots*/
    e[22].default
  ), a = Z(
    i,
    e,
    /*$$scope*/
    e[28],
    null
  );
  return {
    c() {
      t = w("span"), a && a.c(), b(t, "class", "button-text");
    },
    m(s, r) {
      y(s, t, r), a && a.m(t, null), n = !0;
    },
    p(s, r) {
      a && a.p && (!n || r & /*$$scope*/
      268435456) && Q(
        a,
        i,
        s,
        /*$$scope*/
        s[28],
        n ? M(
          i,
          /*$$scope*/
          s[28],
          r,
          null
        ) : x(
          /*$$scope*/
          s[28]
        ),
        null
      );
    },
    i(s) {
      n || (m(a, s), n = !0);
    },
    o(s) {
      _(a, s), n = !1;
    },
    d(s) {
      s && v(t), a && a.d(s);
    }
  };
}
function rt(e) {
  let t, n, i;
  return n = new Ne({
    props: {
      size: U(
        /*size*/
        e[8]
      ),
      invert: (
        /*getSpinnerInvertedness*/
        e[13](
          /*invert*/
          e[6]
        )
      )
    }
  }), {
    c() {
      t = w("div"), S(n.$$.fragment), b(t, "class", "button-spinner");
    },
    m(a, s) {
      y(a, t, s), z(n, t, null), i = !0;
    },
    p(a, s) {
      const r = {};
      s & /*size*/
      256 && (r.size = U(
        /*size*/
        a[8]
      )), s & /*invert*/
      64 && (r.invert = /*getSpinnerInvertedness*/
      a[13](
        /*invert*/
        a[6]
      )), n.$set(r);
    },
    i(a) {
      i || (m(n.$$.fragment, a), i = !0);
    },
    o(a) {
      _(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && v(t), k(n);
    }
  };
}
function ot(e) {
  let t, n, i, a, s, r, u, d;
  n = new E({
    props: {
      condition: !!/*$$slots*/
      (e[15] && /*$$slots*/
      e[15].default),
      $$slots: { default: [st] },
      $$scope: { ctx: e }
    }
  }), a = new E({
    props: {
      condition: !!/*busy*/
      e[2],
      $$slots: { default: [rt] },
      $$scope: { ctx: e }
    }
  });
  let h = [
    {
      class: s = R("button", { className: (
        /*className*/
        e[11]
      ) })
    },
    { "data-active": (
      /*active*/
      e[0]
    ) },
    { "data-appearance": (
      /*appearance*/
      e[1]
    ) },
    { "data-busy": (
      /*busy*/
      e[2]
    ) },
    { "data-disabled": (
      /*disabled*/
      e[4]
    ) },
    { "data-fill": (
      /*fill*/
      e[3]
    ) },
    { "data-invert": (
      /*invert*/
      e[6]
    ) },
    { "data-shape": (
      /*shape*/
      e[7]
    ) },
    { "data-size": (
      /*size*/
      e[8]
    ) },
    { "data-underline": (
      /*underline*/
      e[9]
    ) },
    { "data-variant": (
      /*variant*/
      e[10]
    ) },
    { style: (
      /*mergedStyles*/
      e[12]
    ) },
    { hidden: (
      /*hidden*/
      e[5]
    ) },
    /*$$restProps*/
    e[14]
  ], f = {};
  for (let o = 0; o < h.length; o += 1)
    f = T(f, h[o]);
  return {
    c() {
      t = w("button"), S(n.$$.fragment), i = te(), S(a.$$.fragment), D(t, f);
    },
    m(o, c) {
      y(o, t, c), z(n, t, null), ee(t, i), z(a, t, null), t.autofocus && t.focus(), r = !0, u || (d = [
        P(
          t,
          "click",
          /*click_handler*/
          e[23]
        ),
        P(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[24]
        ),
        P(
          t,
          "focus",
          /*focus_handler*/
          e[25]
        ),
        P(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[26]
        ),
        P(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[27]
        )
      ], u = !0);
    },
    p(o, c) {
      const g = {};
      c & /*$$slots*/
      32768 && (g.condition = !!/*$$slots*/
      (o[15] && /*$$slots*/
      o[15].default)), c & /*$$scope*/
      268435456 && (g.$$scope = { dirty: c, ctx: o }), n.$set(g);
      const p = {};
      c & /*busy*/
      4 && (p.condition = !!/*busy*/
      o[2]), c & /*$$scope, size, invert*/
      268435776 && (p.$$scope = { dirty: c, ctx: o }), a.$set(p), D(t, f = we(h, [
        (!r || c & /*className*/
        2048 && s !== (s = R("button", { className: (
          /*className*/
          o[11]
        ) }))) && { class: s },
        (!r || c & /*active*/
        1) && { "data-active": (
          /*active*/
          o[0]
        ) },
        (!r || c & /*appearance*/
        2) && { "data-appearance": (
          /*appearance*/
          o[1]
        ) },
        (!r || c & /*busy*/
        4) && { "data-busy": (
          /*busy*/
          o[2]
        ) },
        (!r || c & /*disabled*/
        16) && { "data-disabled": (
          /*disabled*/
          o[4]
        ) },
        (!r || c & /*fill*/
        8) && { "data-fill": (
          /*fill*/
          o[3]
        ) },
        (!r || c & /*invert*/
        64) && { "data-invert": (
          /*invert*/
          o[6]
        ) },
        (!r || c & /*shape*/
        128) && { "data-shape": (
          /*shape*/
          o[7]
        ) },
        (!r || c & /*size*/
        256) && { "data-size": (
          /*size*/
          o[8]
        ) },
        (!r || c & /*underline*/
        512) && { "data-underline": (
          /*underline*/
          o[9]
        ) },
        (!r || c & /*variant*/
        1024) && { "data-variant": (
          /*variant*/
          o[10]
        ) },
        { style: (
          /*mergedStyles*/
          o[12]
        ) },
        (!r || c & /*hidden*/
        32) && { hidden: (
          /*hidden*/
          o[5]
        ) },
        c & /*$$restProps*/
        16384 && /*$$restProps*/
        o[14]
      ]));
    },
    i(o) {
      r || (m(n.$$.fragment, o), m(a.$$.fragment, o), r = !0);
    },
    o(o) {
      _(n.$$.fragment, o), _(a.$$.fragment, o), r = !1;
    },
    d(o) {
      o && v(t), k(n), k(a), u = !1, A(d);
    }
  };
}
function lt(e) {
  let t, n, i, a;
  return t = new E({
    props: {
      condition: (
        /*$$restProps*/
        e[14].href
      ),
      $$slots: { default: [at] },
      $$scope: { ctx: e }
    }
  }), i = new E({
    props: {
      condition: !/*$$restProps*/
      e[14].href,
      $$slots: { default: [ot] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      S(t.$$.fragment), n = te(), S(i.$$.fragment);
    },
    m(s, r) {
      z(t, s, r), y(s, n, r), z(i, s, r), a = !0;
    },
    p(s, [r]) {
      const u = {};
      r & /*$$restProps*/
      16384 && (u.condition = /*$$restProps*/
      s[14].href), r & /*$$scope, $$restProps, className, active, appearance, busy, disabled, fill, invert, shape, size, underline, variant, hidden, $$slots*/
      268488703 && (u.$$scope = { dirty: r, ctx: s }), t.$set(u);
      const d = {};
      r & /*$$restProps*/
      16384 && (d.condition = !/*$$restProps*/
      s[14].href), r & /*$$scope, className, active, appearance, busy, disabled, fill, invert, shape, size, underline, variant, hidden, $$restProps, $$slots*/
      268488703 && (d.$$scope = { dirty: r, ctx: s }), i.$set(d);
    },
    i(s) {
      a || (m(t.$$.fragment, s), m(i.$$.fragment, s), a = !0);
    },
    o(s) {
      _(t.$$.fragment, s), _(i.$$.fragment, s), a = !1;
    },
    d(s) {
      s && v(n), k(t, s), k(i, s);
    }
  };
}
function U(e) {
  switch (e) {
    case "xs":
    case "sm":
      return "xs";
    case "md":
      return "sm";
    case "lg":
      return "md";
    default:
      return "md";
  }
}
function ft(e, t, n) {
  const i = [
    "active",
    "appearance",
    "bgColor",
    "busy",
    "color",
    "fill",
    "disabled",
    "hidden",
    "invert",
    "radius",
    "shape",
    "shadow",
    "size",
    "spacing",
    "textSize",
    "underline",
    "variant",
    "class"
  ];
  let a = he(t, i), { $$slots: s = {}, $$scope: r } = t;
  const u = De(s);
  let { active: d = void 0, appearance: h = void 0, bgColor: f = void 0, busy: o = void 0, color: c = void 0, fill: g = void 0, disabled: p = void 0, hidden: se = void 0, invert: re = void 0, radius: W = "md", shape: oe = void 0, shadow: q = void 0, size: le = "md", spacing: F = void 0, textSize: G = void 0, underline: fe = void 0, variant: ue = void 0 } = t, { class: ce = a.class } = t;
  const Oe = Ze(Me(
    {
      bgColor: f,
      color: c,
      radius: W,
      shadow: q,
      spacing: F,
      textSize: G
    },
    {
      bgColor: {
        name: "button-bg-color",
        category: "color"
      },
      color: { name: "button-color", category: "color" },
      radius: {
        name: "button-radius",
        category: "radius"
      },
      shadow: {
        name: "button-shadow",
        category: "shadow"
      },
      spacing: { name: "button-spacing", category: "size" },
      textSize: {
        name: "button-text-size",
        category: "text"
      }
    }
  ));
  function Be(l) {
    let N = l;
    switch (h) {
      case "primary":
        return !N;
      case "secondary":
        return !!N;
      case "tertiary":
        return !!N;
      case "control":
        return !0;
      case "minimal":
        return !!N;
      case "link":
        return !!N;
      default:
        return !1;
    }
  }
  function Ce(l) {
    $.call(this, e, l);
  }
  function Ee(l) {
    $.call(this, e, l);
  }
  function Ae(l) {
    $.call(this, e, l);
  }
  function Pe(l) {
    $.call(this, e, l);
  }
  function $e(l) {
    $.call(this, e, l);
  }
  return e.$$set = (l) => {
    t = T(T({}, t), Ve(l)), n(14, a = he(t, i)), "active" in l && n(0, d = l.active), "appearance" in l && n(1, h = l.appearance), "bgColor" in l && n(16, f = l.bgColor), "busy" in l && n(2, o = l.busy), "color" in l && n(17, c = l.color), "fill" in l && n(3, g = l.fill), "disabled" in l && n(4, p = l.disabled), "hidden" in l && n(5, se = l.hidden), "invert" in l && n(6, re = l.invert), "radius" in l && n(18, W = l.radius), "shape" in l && n(7, oe = l.shape), "shadow" in l && n(19, q = l.shadow), "size" in l && n(8, le = l.size), "spacing" in l && n(20, F = l.spacing), "textSize" in l && n(21, G = l.textSize), "underline" in l && n(9, fe = l.underline), "variant" in l && n(10, ue = l.variant), "class" in l && n(11, ce = l.class), "$$scope" in l && n(28, r = l.$$scope);
  }, [
    d,
    h,
    o,
    g,
    p,
    se,
    re,
    oe,
    le,
    fe,
    ue,
    ce,
    Oe,
    Be,
    a,
    u,
    f,
    c,
    W,
    q,
    F,
    G,
    s,
    Ce,
    Ee,
    Ae,
    Pe,
    $e,
    r
  ];
}
class dt extends ae {
  constructor(t) {
    super(), ie(this, t, ft, lt, Y, {
      active: 0,
      appearance: 1,
      bgColor: 16,
      busy: 2,
      color: 17,
      fill: 3,
      disabled: 4,
      hidden: 5,
      invert: 6,
      radius: 18,
      shape: 7,
      shadow: 19,
      size: 8,
      spacing: 20,
      textSize: 21,
      underline: 9,
      variant: 10,
      class: 11
    });
  }
}
export {
  dt as Button
};
