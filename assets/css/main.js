(() => {

  function downloadFile() {
    const link = document.createElement("a");
    link.href = "./assets/img/Resume-Graduate.pdf";      // your file path
    link.download = "Resume-Graduate.pdf";        // forced download name
    link.target = "_blank";              // avoid blocking
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  var t = {
      5580: (t, r, e) => {
        var o = e(6110)(e(9325), "DataView");
        t.exports = o;
      },
      8223: (t, r, e) => {
        var o = e(6110)(e(9325), "Map");
        t.exports = o;
      },
      2804: (t, r, e) => {
        var o = e(6110)(e(9325), "Promise");
        t.exports = o;
      },
      6545: (t, r, e) => {
        var o = e(6110)(e(9325), "Set");
        t.exports = o;
      },
      1873: (t, r, e) => {
        var o = e(9325).Symbol;
        t.exports = o;
      },
      8303: (t, r, e) => {
        var o = e(6110)(e(9325), "WeakMap");
        t.exports = o;
      },
      1033: (t) => {
        t.exports = function (t, r, e) {
          switch (e.length) {
            case 0:
              return t.call(r);
            case 1:
              return t.call(r, e[0]);
            case 2:
              return t.call(r, e[0], e[1]);
            case 3:
              return t.call(r, e[0], e[1], e[2]);
          }
          return t.apply(r, e);
        };
      },
      695: (t, r, e) => {
        var o = e(8096),
          n = e(2428),
          s = e(6449),
          i = e(3656),
          a = e(361),
          c = e(7167),
          u = Object.prototype.hasOwnProperty;
        t.exports = function (t, r) {
          var e = s(t),
            l = !e && n(t),
            p = !e && !l && i(t),
            f = !e && !l && !p && c(t),
            v = e || l || p || f,
            b = v ? o(t.length, String) : [],
            d = b.length;
          for (var h in t)
            (!r && !u.call(t, h)) ||
              (v &&
                ("length" == h ||
                  (p && ("offset" == h || "parent" == h)) ||
                  (f &&
                    ("buffer" == h ||
                      "byteLength" == h ||
                      "byteOffset" == h)) ||
                  a(h, d))) ||
              b.push(h);
          return b;
        };
      },
      6547: (t, r, e) => {
        var o = e(3360),
          n = e(5288),
          s = Object.prototype.hasOwnProperty;
        t.exports = function (t, r, e) {
          var i = t[r];
          (s.call(t, r) && n(i, e) && (void 0 !== e || r in t)) || o(t, r, e);
        };
      },
      3360: (t, r, e) => {
        var o = e(3243);
        t.exports = function (t, r, e) {
          "__proto__" == r && o
            ? o(t, r, {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0,
              })
            : (t[r] = e);
        };
      },
      2552: (t, r, e) => {
        var o = e(1873),
          n = e(659),
          s = e(9350),
          i = o ? o.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : i && i in Object(t)
            ? n(t)
            : s(t);
        };
      },
      7534: (t, r, e) => {
        var o = e(2552),
          n = e(346);
        t.exports = function (t) {
          return n(t) && "[object Arguments]" == o(t);
        };
      },
      5083: (t, r, e) => {
        var o = e(1882),
          n = e(7296),
          s = e(3805),
          i = e(7473),
          a = /^\[object .+?Constructor\]$/,
          c = Function.prototype,
          u = Object.prototype,
          l = c.toString,
          p = u.hasOwnProperty,
          f = RegExp(
            "^" +
              l
                .call(p)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        t.exports = function (t) {
          return !(!s(t) || n(t)) && (o(t) ? f : a).test(i(t));
        };
      },
      4901: (t, r, e) => {
        var o = e(2552),
          n = e(294),
          s = e(346),
          i = {};
        (i["[object Float32Array]"] =
          i["[object Float64Array]"] =
          i["[object Int8Array]"] =
          i["[object Int16Array]"] =
          i["[object Int32Array]"] =
          i["[object Uint8Array]"] =
          i["[object Uint8ClampedArray]"] =
          i["[object Uint16Array]"] =
          i["[object Uint32Array]"] =
            !0),
          (i["[object Arguments]"] =
            i["[object Array]"] =
            i["[object ArrayBuffer]"] =
            i["[object Boolean]"] =
            i["[object DataView]"] =
            i["[object Date]"] =
            i["[object Error]"] =
            i["[object Function]"] =
            i["[object Map]"] =
            i["[object Number]"] =
            i["[object Object]"] =
            i["[object RegExp]"] =
            i["[object Set]"] =
            i["[object String]"] =
            i["[object WeakMap]"] =
              !1),
          (t.exports = function (t) {
            return s(t) && n(t.length) && !!i[o(t)];
          });
      },
      8984: (t, r, e) => {
        var o = e(5527),
          n = e(3650),
          s = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          if (!o(t)) return n(t);
          var r = [];
          for (var e in Object(t))
            s.call(t, e) && "constructor" != e && r.push(e);
          return r;
        };
      },
      9302: (t, r, e) => {
        var o = e(3488),
          n = e(6757),
          s = e(2865);
        t.exports = function (t, r) {
          return s(n(t, r, o), t + "");
        };
      },
      9570: (t, r, e) => {
        var o = e(7334),
          n = e(3243),
          s = e(3488),
          i = n
            ? function (t, r) {
                return n(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: o(r),
                  writable: !0,
                });
              }
            : s;
        t.exports = i;
      },
      8096: (t) => {
        t.exports = function (t, r) {
          for (var e = -1, o = Array(t); ++e < t; ) o[e] = r(e);
          return o;
        };
      },
      4128: (t, r, e) => {
        var o = e(1800),
          n = /^\s+/;
        t.exports = function (t) {
          return t ? t.slice(0, o(t) + 1).replace(n, "") : t;
        };
      },
      7301: (t) => {
        t.exports = function (t) {
          return function (r) {
            return t(r);
          };
        };
      },
      1791: (t, r, e) => {
        var o = e(6547),
          n = e(3360);
        t.exports = function (t, r, e, s) {
          var i = !e;
          e || (e = {});
          for (var a = -1, c = r.length; ++a < c; ) {
            var u = r[a],
              l = s ? s(e[u], t[u], u, e, t) : void 0;
            void 0 === l && (l = t[u]), i ? n(e, u, l) : o(e, u, l);
          }
          return e;
        };
      },
      5481: (t, r, e) => {
        var o = e(9325)["__core-js_shared__"];
        t.exports = o;
      },
      999: (t, r, e) => {
        var o = e(9302),
          n = e(6800);
        t.exports = function (t) {
          return o(function (r, e) {
            var o = -1,
              s = e.length,
              i = s > 1 ? e[s - 1] : void 0,
              a = s > 2 ? e[2] : void 0;
            for (
              i = t.length > 3 && "function" == typeof i ? (s--, i) : void 0,
                a && n(e[0], e[1], a) && ((i = s < 3 ? void 0 : i), (s = 1)),
                r = Object(r);
              ++o < s;

            ) {
              var c = e[o];
              c && t(r, c, o, i);
            }
            return r;
          });
        };
      },
      3243: (t, r, e) => {
        var o = e(6110),
          n = (function () {
            try {
              var t = o(Object, "defineProperty");
              return t({}, "", {}), t;
            } catch (t) {}
          })();
        t.exports = n;
      },
      4840: (t, r, e) => {
        var o = "object" == typeof e.g && e.g && e.g.Object === Object && e.g;
        t.exports = o;
      },
      6110: (t, r, e) => {
        var o = e(5083),
          n = e(392);
        t.exports = function (t, r) {
          var e = n(t, r);
          return o(e) ? e : void 0;
        };
      },
      659: (t, r, e) => {
        var o = e(1873),
          n = Object.prototype,
          s = n.hasOwnProperty,
          i = n.toString,
          a = o ? o.toStringTag : void 0;
        t.exports = function (t) {
          var r = s.call(t, a),
            e = t[a];
          try {
            t[a] = void 0;
            var o = !0;
          } catch (t) {}
          var n = i.call(t);
          return o && (r ? (t[a] = e) : delete t[a]), n;
        };
      },
      5861: (t, r, e) => {
        var o = e(5580),
          n = e(8223),
          s = e(2804),
          i = e(6545),
          a = e(8303),
          c = e(2552),
          u = e(7473),
          l = "[object Map]",
          p = "[object Promise]",
          f = "[object Set]",
          v = "[object WeakMap]",
          b = "[object DataView]",
          d = u(o),
          h = u(n),
          y = u(s),
          x = u(i),
          g = u(a),
          j = c;
        ((o && j(new o(new ArrayBuffer(1))) != b) ||
          (n && j(new n()) != l) ||
          (s && j(s.resolve()) != p) ||
          (i && j(new i()) != f) ||
          (a && j(new a()) != v)) &&
          (j = function (t) {
            var r = c(t),
              e = "[object Object]" == r ? t.constructor : void 0,
              o = e ? u(e) : "";
            if (o)
              switch (o) {
                case d:
                  return b;
                case h:
                  return l;
                case y:
                  return p;
                case x:
                  return f;
                case g:
                  return v;
              }
            return r;
          }),
          (t.exports = j);
      },
      392: (t) => {
        t.exports = function (t, r) {
          return null == t ? void 0 : t[r];
        };
      },
      361: (t) => {
        var r = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
          var o = typeof t;
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ("number" == o || ("symbol" != o && r.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        };
      },
      6800: (t, r, e) => {
        var o = e(5288),
          n = e(4894),
          s = e(361),
          i = e(3805);
        t.exports = function (t, r, e) {
          if (!i(e)) return !1;
          var a = typeof r;
          return (
            !!("number" == a
              ? n(e) && s(r, e.length)
              : "string" == a && r in e) && o(e[r], t)
          );
        };
      },
      7296: (t, r, e) => {
        var o,
          n = e(5481),
          s = (o = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + o
            : "";
        t.exports = function (t) {
          return !!s && s in t;
        };
      },
      5527: (t) => {
        var r = Object.prototype;
        t.exports = function (t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || r);
        };
      },
      3650: (t, r, e) => {
        var o = e(4335)(Object.keys, Object);
        t.exports = o;
      },
      6009: (t, r, e) => {
        t = e.nmd(t);
        var o = e(4840),
          n = r && !r.nodeType && r,
          s = n && t && !t.nodeType && t,
          i = s && s.exports === n && o.process,
          a = (function () {
            try {
              return (
                (s && s.require && s.require("util").types) ||
                (i && i.binding && i.binding("util"))
              );
            } catch (t) {}
          })();
        t.exports = a;
      },
      9350: (t) => {
        var r = Object.prototype.toString;
        t.exports = function (t) {
          return r.call(t);
        };
      },
      4335: (t) => {
        t.exports = function (t, r) {
          return function (e) {
            return t(r(e));
          };
        };
      },
      6757: (t, r, e) => {
        var o = e(1033),
          n = Math.max;
        t.exports = function (t, r, e) {
          return (
            (r = n(void 0 === r ? t.length - 1 : r, 0)),
            function () {
              for (
                var s = arguments, i = -1, a = n(s.length - r, 0), c = Array(a);
                ++i < a;

              )
                c[i] = s[r + i];
              i = -1;
              for (var u = Array(r + 1); ++i < r; ) u[i] = s[i];
              return (u[r] = e(c)), o(t, this, u);
            }
          );
        };
      },
      9325: (t, r, e) => {
        var o = e(4840),
          n = "object" == typeof self && self && self.Object === Object && self,
          s = o || n || Function("return this")();
        t.exports = s;
      },
      2865: (t, r, e) => {
        var o = e(9570),
          n = e(1811)(o);
        t.exports = n;
      },
      1811: (t) => {
        var r = Date.now;
        t.exports = function (t) {
          var e = 0,
            o = 0;
          return function () {
            var n = r(),
              s = 16 - (n - o);
            if (((o = n), s > 0)) {
              if (++e >= 800) return arguments[0];
            } else e = 0;
            return t.apply(void 0, arguments);
          };
        };
      },
      7473: (t) => {
        var r = Function.prototype.toString;
        t.exports = function (t) {
          if (null != t) {
            try {
              return r.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
      },
      1800: (t) => {
        var r = /\s/;
        t.exports = function (t) {
          for (var e = t.length; e-- && r.test(t.charAt(e)); );
          return e;
        };
      },
      6139: (t, r, e) => {
        var o = e(6547),
          n = e(1791),
          s = e(999),
          i = e(4894),
          a = e(5527),
          c = e(5950),
          u = Object.prototype.hasOwnProperty,
          l = s(function (t, r) {
            if (a(r) || i(r)) n(r, c(r), t);
            else for (var e in r) u.call(r, e) && o(t, e, r[e]);
          });
        t.exports = l;
      },
      7334: (t) => {
        t.exports = function (t) {
          return function () {
            return t;
          };
        };
      },
      8221: (t, r, e) => {
        var o = e(3805),
          n = e(124),
          s = e(9374),
          i = Math.max,
          a = Math.min;
        t.exports = function (t, r, e) {
          var c,
            u,
            l,
            p,
            f,
            v,
            b = 0,
            d = !1,
            h = !1,
            y = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function x(r) {
            var e = c,
              o = u;
            return (c = u = void 0), (b = r), (p = t.apply(o, e));
          }
          function g(t) {
            var e = t - v;
            return void 0 === v || e >= r || e < 0 || (h && t - b >= l);
          }
          function j() {
            var t = n();
            if (g(t)) return m(t);
            f = setTimeout(
              j,
              (function (t) {
                var e = r - (t - v);
                return h ? a(e, l - (t - b)) : e;
              })(t)
            );
          }
          function m(t) {
            return (f = void 0), y && c ? x(t) : ((c = u = void 0), p);
          }
          function k() {
            var t = n(),
              e = g(t);
            if (((c = arguments), (u = this), (v = t), e)) {
              if (void 0 === f)
                return (function (t) {
                  return (b = t), (f = setTimeout(j, r)), d ? x(t) : p;
                })(v);
              if (h) return clearTimeout(f), (f = setTimeout(j, r)), x(v);
            }
            return void 0 === f && (f = setTimeout(j, r)), p;
          }
          return (
            (r = s(r) || 0),
            o(e) &&
              ((d = !!e.leading),
              (l = (h = "maxWait" in e) ? i(s(e.maxWait) || 0, r) : l),
              (y = "trailing" in e ? !!e.trailing : y)),
            (k.cancel = function () {
              void 0 !== f && clearTimeout(f),
                (b = 0),
                (c = v = u = f = void 0);
            }),
            (k.flush = function () {
              return void 0 === f ? p : m(n());
            }),
            k
          );
        };
      },
      5288: (t) => {
        t.exports = function (t, r) {
          return t === r || (t != t && r != r);
        };
      },
      3488: (t) => {
        t.exports = function (t) {
          return t;
        };
      },
      2428: (t, r, e) => {
        var o = e(7534),
          n = e(346),
          s = Object.prototype,
          i = s.hasOwnProperty,
          a = s.propertyIsEnumerable,
          c = o(
            (function () {
              return arguments;
            })()
          )
            ? o
            : function (t) {
                return n(t) && i.call(t, "callee") && !a.call(t, "callee");
              };
        t.exports = c;
      },
      6449: (t) => {
        var r = Array.isArray;
        t.exports = r;
      },
      4894: (t, r, e) => {
        var o = e(1882),
          n = e(294);
        t.exports = function (t) {
          return null != t && n(t.length) && !o(t);
        };
      },
      3656: (t, r, e) => {
        t = e.nmd(t);
        var o = e(9325),
          n = e(9935),
          s = r && !r.nodeType && r,
          i = s && t && !t.nodeType && t,
          a = i && i.exports === s ? o.Buffer : void 0,
          c = (a ? a.isBuffer : void 0) || n;
        t.exports = c;
      },
      2193: (t, r, e) => {
        var o = e(8984),
          n = e(5861),
          s = e(2428),
          i = e(6449),
          a = e(4894),
          c = e(3656),
          u = e(5527),
          l = e(7167),
          p = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          if (null == t) return !0;
          if (
            a(t) &&
            (i(t) ||
              "string" == typeof t ||
              "function" == typeof t.splice ||
              c(t) ||
              l(t) ||
              s(t))
          )
            return !t.length;
          var r = n(t);
          if ("[object Map]" == r || "[object Set]" == r) return !t.size;
          if (u(t)) return !o(t).length;
          for (var e in t) if (p.call(t, e)) return !1;
          return !0;
        };
      },
      1882: (t, r, e) => {
        var o = e(2552),
          n = e(3805);
        t.exports = function (t) {
          if (!n(t)) return !1;
          var r = o(t);
          return (
            "[object Function]" == r ||
            "[object GeneratorFunction]" == r ||
            "[object AsyncFunction]" == r ||
            "[object Proxy]" == r
          );
        };
      },
      294: (t) => {
        t.exports = function (t) {
          return (
            "number" == typeof t &&
            t > -1 &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        };
      },
      3805: (t) => {
        t.exports = function (t) {
          var r = typeof t;
          return null != t && ("object" == r || "function" == r);
        };
      },
      346: (t) => {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      4394: (t, r, e) => {
        var o = e(2552),
          n = e(346);
        t.exports = function (t) {
          return "symbol" == typeof t || (n(t) && "[object Symbol]" == o(t));
        };
      },
      7167: (t, r, e) => {
        var o = e(4901),
          n = e(7301),
          s = e(6009),
          i = s && s.isTypedArray,
          a = i ? n(i) : o;
        t.exports = a;
      },
      5950: (t, r, e) => {
        var o = e(695),
          n = e(8984),
          s = e(4894);
        t.exports = function (t) {
          return s(t) ? o(t) : n(t);
        };
      },
      124: (t, r, e) => {
        var o = e(9325);
        t.exports = function () {
          return o.Date.now();
        };
      },
      9935: (t) => {
        t.exports = function () {
          return !1;
        };
      },
      7350: (t, r, e) => {
        var o = e(8221),
          n = e(3805);
        t.exports = function (t, r, e) {
          var s = !0,
            i = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          return (
            n(e) &&
              ((s = "leading" in e ? !!e.leading : s),
              (i = "trailing" in e ? !!e.trailing : i)),
            o(t, r, { leading: s, maxWait: r, trailing: i })
          );
        };
      },
      9374: (t, r, e) => {
        var o = e(4128),
          n = e(3805),
          s = e(4394),
          i = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          u = parseInt;
        t.exports = function (t) {
          if ("number" == typeof t) return t;
          if (s(t)) return NaN;
          if (n(t)) {
            var r = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = n(r) ? r + "" : r;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = o(t);
          var e = a.test(t);
          return e || c.test(t)
            ? u(t.slice(2), e ? 2 : 8)
            : i.test(t)
            ? NaN
            : +t;
        };
      },
    },
    r = {};
  function e(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var s = (r[o] = { id: o, loaded: !1, exports: {} });
    return t[o](s, s.exports, e), (s.loaded = !0), s.exports;
  }
  (e.n = (t) => {
    var r = t && t.__esModule ? () => t.default : () => t;
    return e.d(r, { a: r }), r;
  }),
    (e.d = (t, r) => {
      for (var o in r)
        e.o(r, o) &&
          !e.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: r[o] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (e.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      "use strict";
      var t = e(7350),
        r = e.n(t),
        o = e(2193),
        n = e.n(o),
        s = e(6139),
        i = e.n(s);
      class a {
        constructor(t = ".tpl-navbar-sticky", r = {}) {
          (this.defaults = {
            preStuckClass: "pre-stuck",
            stuckClass: "stuck",
            stickyTarget: null,
            stickyNode: null,
            stuckClassTimeout: null,
            stuckBg: null,
            stuckTheme: null,
            scrollYDown: 250,
            scrollYUp: 25,
            bsTheme: null,
          }),
            (this.options = i()(this.defaults, r)),
            (this.selector = t),
            this.init();
        }
        init() {
          const t = document.querySelector(this.selector);
          if (null != t) {
            if (
              (this.dataAtts(t),
              (this.options.stickyNode = t),
              null !== this.options.stickyTarget)
            ) {
              const t = document.querySelector(this.options.stickyTarget);
              null != t && (this.options.stickyNode = t);
            }
            window.addEventListener(
              "scroll",
              r()(() => this.scrollEvent(t, this.options.stickyNode), 1e3)
            );
          }
        }
        dataAtts(t) {
          n()(t.dataset.StickyTarget) ||
            (this.options.stickyTarget = t.dataset.StickyTarget),
            n()(t.dataset.StuckBg) ||
              (this.options.stuckBg = t.dataset.StuckBg),
            n()(t.dataset.StuckTheme) ||
              (this.options.stuckTheme = t.dataset.StuckTheme),
            n()(t.dataset.ScrollYDown) ||
              (this.options.scrollYDown = Number(t.dataset.ScrollYDown)),
            n()(t.dataset.ScrollYUp) ||
              (this.options.scrollYUp = Number(t.dataset.ScrollYUp)),
            n()(t.dataset.bsTheme) ||
              (this.options.bsTheme = t.dataset.bsTheme);
        }
        scrollEvent(t, r) {
          const e = window.scrollY;
          e >= this.options.scrollYDown &&
            (r.classList.contains(this.options.preStuckClass) ||
              (r.classList.add(this.options.preStuckClass),
              (this.options.stuckClassTimeout = setTimeout(() => {
                r.classList.add(this.options.stuckClass),
                  null !== this.options.stuckBg &&
                    t.classList.add(this.options.stuckBg),
                  null !== this.options.stuckTheme &&
                    t.setAttribute("data-bs-theme", this.options.stuckTheme);
              }, 250))),
            r.classList.contains(this.options.stuckClass) &&
              clearTimeout(this.options.stuckClassTimeout)),
            e <= this.options.scrollYUp &&
              (r.classList.contains(this.options.preStuckClass) ||
                r.classList.contains(this.options.stuckClass)) &&
              (r.classList.remove(this.options.preStuckClass),
              r.classList.remove(this.options.stuckClass),
              null !== this.options.stuckBg &&
                t.classList.remove(this.options.stuckBg),
              null !== this.options.bsTheme &&
                t.setAttribute("data-bs-theme", this.options.bsTheme));
        }
      }
      !(function () {
        function t() {
          new a();
        }
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", t)
          : t();
      })();
    })();

    
})();
