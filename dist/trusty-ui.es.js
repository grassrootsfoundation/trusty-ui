var T = Object.defineProperty;
var U = (t, e, n) => e in t ? T(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var p = (t, e, n) => U(t, typeof e != "symbol" ? e + "" : e, n);
function x() {
}
function m(t, e) {
  for (const n in e) t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function C(t) {
  return t();
}
function S() {
  return /* @__PURE__ */ Object.create(null);
}
function y(t) {
  t.forEach(C);
}
function I(t) {
  return typeof t == "function";
}
function V(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function q(t) {
  return Object.keys(t).length === 0;
}
function z(t, e, n, r) {
  if (t) {
    const o = M(t, e, n, r);
    return t[0](o);
  }
}
function M(t, e, n, r) {
  return t[1] && r ? m(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function F(t, e, n, r) {
  if (t[2] && r) {
    const o = t[2](r(n));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const l = [], f = Math.max(e.dirty.length, o.length);
      for (let i = 0; i < f; i += 1)
        l[i] = e.dirty[i] | o[i];
      return l;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function G(t, e, n, r, o, l) {
  if (o) {
    const f = M(e, n, r, l);
    t.p(f, o);
  }
}
function H(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function J(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function A(t, e) {
  const n = {};
  e = new Set(e);
  for (const r in t) !e.has(r) && r[0] !== "$" && (n[r] = t[r]);
  return n;
}
function K(t, e, n) {
  t.insertBefore(e, n || null);
}
function D(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Q(t) {
  return document.createElement(t);
}
function W(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const X = ["width", "height"];
function N(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null ? t.removeAttribute(r) : r === "style" ? t.style.cssText = e[r] : r === "__value" ? t.value = t[r] = e[r] : n[r] && n[r].set && X.indexOf(r) === -1 ? t[r] = e[r] : W(t, r, e[r]);
}
function Y(t) {
  return Array.from(t.childNodes);
}
let k;
function h(t) {
  k = t;
}
const d = [], P = [];
let _ = [];
const B = [], Z = /* @__PURE__ */ Promise.resolve();
let $ = !1;
function tt() {
  $ || ($ = !0, Z.then(L));
}
function w(t) {
  _.push(t);
}
const b = /* @__PURE__ */ new Set();
let a = 0;
function L() {
  if (a !== 0)
    return;
  const t = k;
  do {
    try {
      for (; a < d.length; ) {
        const e = d[a];
        a++, h(e), et(e.$$);
      }
    } catch (e) {
      throw d.length = 0, a = 0, e;
    }
    for (h(null), d.length = 0, a = 0; P.length; ) P.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      b.has(n) || (b.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; B.length; )
    B.pop()();
  $ = !1, b.clear(), h(t);
}
function et(t) {
  if (t.fragment !== null) {
    t.update(), y(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(w);
  }
}
function nt(t) {
  const e = [], n = [];
  _.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), _ = e;
}
const g = /* @__PURE__ */ new Set();
let rt;
function R(t, e) {
  t && t.i && (g.delete(t), t.i(e));
}
function st(t, e, n, r) {
  if (t && t.o) {
    if (g.has(t)) return;
    g.add(t), rt.c.push(() => {
      g.delete(t);
    }), t.o(e);
  }
}
function ot(t, e) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const f = t[l], i = e[l];
    if (i) {
      for (const s in f)
        s in i || (r[s] = 1);
      for (const s in i)
        o[s] || (n[s] = i[s], o[s] = 1);
      t[l] = i;
    } else
      for (const s in f)
        o[s] = 1;
  }
  for (const f in r)
    f in n || (n[f] = void 0);
  return n;
}
function lt(t, e, n) {
  const { fragment: r, after_update: o } = t.$$;
  r && r.m(e, n), w(() => {
    const l = t.$$.on_mount.map(C).filter(I);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : y(l), t.$$.on_mount = [];
  }), o.forEach(w);
}
function ct(t, e) {
  const n = t.$$;
  n.fragment !== null && (nt(n.after_update), y(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function it(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), tt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ft(t, e, n, r, o, l, f = null, i = [-1]) {
  const s = k;
  h(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: x,
    not_equal: o,
    bound: S(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: S(),
    dirty: i,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  f && f(c.root);
  let v = !1;
  if (c.ctx = n ? n(t, e.props || {}, (u, E, ...O) => {
    const j = O.length ? O[0] : E;
    return c.ctx && o(c.ctx[u], c.ctx[u] = j) && (!c.skip_bound && c.bound[u] && c.bound[u](j), v && it(t, u)), E;
  }) : [], c.update(), v = !0, y(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = Y(e.target);
      c.fragment && c.fragment.l(u), u.forEach(D);
    } else
      c.fragment && c.fragment.c();
    e.intro && R(t.$$.fragment), lt(t, e.target, e.anchor), L();
  }
  h(s);
}
class ut {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    p(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    p(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ct(this, 1), this.$destroy = x;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!I(n))
      return x;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !q(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const at = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(at);
function dt(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), l = z(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let f = [
    {
      class: n = "button " + /*className*/
      t[0]
    },
    /*$$restProps*/
    t[1]
  ], i = {};
  for (let s = 0; s < f.length; s += 1)
    i = m(i, f[s]);
  return {
    c() {
      e = Q("div"), l && l.c(), N(e, i);
    },
    m(s, c) {
      K(s, e, c), l && l.m(e, null), r = !0;
    },
    p(s, [c]) {
      l && l.p && (!r || c & /*$$scope*/
      4) && G(
        l,
        o,
        s,
        /*$$scope*/
        s[2],
        r ? F(
          o,
          /*$$scope*/
          s[2],
          c,
          null
        ) : H(
          /*$$scope*/
          s[2]
        ),
        null
      ), N(e, i = ot(f, [
        (!r || c & /*className*/
        1 && n !== (n = "button " + /*className*/
        s[0])) && { class: n },
        c & /*$$restProps*/
        2 && /*$$restProps*/
        s[1]
      ]));
    },
    i(s) {
      r || (R(l, s), r = !0);
    },
    o(s) {
      st(l, s), r = !1;
    },
    d(s) {
      s && D(e), l && l.d(s);
    }
  };
}
function _t(t, e, n) {
  const r = ["class"];
  let o = A(e, r), { $$slots: l = {}, $$scope: f } = e, { class: i = o.class } = e;
  return t.$$set = (s) => {
    e = m(m({}, e), J(s)), n(1, o = A(e, r)), "class" in s && n(0, i = s.class), "$$scope" in s && n(2, f = s.$$scope);
  }, [i, o, f, l];
}
class gt extends ut {
  constructor(e) {
    super(), ft(this, e, _t, dt, V, { class: 0 });
  }
}
export {
  gt as Button
};
