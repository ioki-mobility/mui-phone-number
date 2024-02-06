import * as bt from "react";
import t, { forwardRef as Z8, useContext as J8, createElement as c3, PureComponent as X8, useState as k1, useEffect as ma } from "react";
import { IconButton as Q8, useMediaQuery as eu, Popper as tu, Stack as f4, Autocomplete as ru, TextField as h4, styled as nu, InputAdornment as lu } from "@mui/material";
var nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function iu(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var w3 = { exports: {} }, ln = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var da;
function au() {
  if (da)
    return ln;
  da = 1;
  var i = t, l = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(x, F, b) {
    var _, C = {}, S = null, V = null;
    b !== void 0 && (S = "" + b), F.key !== void 0 && (S = "" + F.key), F.ref !== void 0 && (V = F.ref);
    for (_ in F)
      a.call(F, _) && !m.hasOwnProperty(_) && (C[_] = F[_]);
    if (x && x.defaultProps)
      for (_ in F = x.defaultProps, F)
        C[_] === void 0 && (C[_] = F[_]);
    return { $$typeof: l, type: x, key: S, ref: V, props: C, _owner: u.current };
  }
  return ln.Fragment = r, ln.jsx = d, ln.jsxs = d, ln;
}
var an = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function cu() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && function() {
    var i = t, l = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), x = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), R = Symbol.iterator, E = "@@iterator";
    function M(w) {
      if (w === null || typeof w != "object")
        return null;
      var N = R && w[R] || w[E];
      return typeof N == "function" ? N : null;
    }
    var B = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(w) {
      {
        for (var N = arguments.length, K = new Array(N > 1 ? N - 1 : 0), ce = 1; ce < N; ce++)
          K[ce - 1] = arguments[ce];
        $("error", w, K);
      }
    }
    function $(w, N, K) {
      {
        var ce = B.ReactDebugCurrentFrame, be = ce.getStackAddendum();
        be !== "" && (N += "%s", K = K.concat([be]));
        var Le = K.map(function(Fe) {
          return String(Fe);
        });
        Le.unshift("Warning: " + N), Function.prototype.apply.call(console[w], console, Le);
      }
    }
    var G = !1, A = !1, J = !1, j = !1, Be = !1, ge;
    ge = Symbol.for("react.module.reference");
    function Q(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === a || w === m || Be || w === u || w === b || w === _ || j || w === V || G || A || J || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === C || w.$$typeof === d || w.$$typeof === x || w.$$typeof === F || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === ge || w.getModuleId !== void 0));
    }
    function he(w, N, K) {
      var ce = w.displayName;
      if (ce)
        return ce;
      var be = N.displayName || N.name || "";
      return be !== "" ? K + "(" + be + ")" : K;
    }
    function ke(w) {
      return w.displayName || "Context";
    }
    function Ae(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case m:
          return "Profiler";
        case u:
          return "StrictMode";
        case b:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case x:
            var N = w;
            return ke(N) + ".Consumer";
          case d:
            var K = w;
            return ke(K._context) + ".Provider";
          case F:
            return he(w, w.render, "ForwardRef");
          case C:
            var ce = w.displayName || null;
            return ce !== null ? ce : Ae(w.type) || "Memo";
          case S: {
            var be = w, Le = be._payload, Fe = be._init;
            try {
              return Ae(Fe(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, et = 0, Je, Ue, Ge, At, P, W, oe;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function ee() {
      {
        if (et === 0) {
          Je = console.log, Ue = console.info, Ge = console.warn, At = console.error, P = console.group, W = console.groupCollapsed, oe = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        et++;
      }
    }
    function re() {
      {
        if (et--, et === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Se({}, w, {
              value: Je
            }),
            info: Se({}, w, {
              value: Ue
            }),
            warn: Se({}, w, {
              value: Ge
            }),
            error: Se({}, w, {
              value: At
            }),
            group: Se({}, w, {
              value: P
            }),
            groupCollapsed: Se({}, w, {
              value: W
            }),
            groupEnd: Se({}, w, {
              value: oe
            })
          });
        }
        et < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = B.ReactCurrentDispatcher, fe;
    function se(w, N, K) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (be) {
            var ce = be.stack.trim().match(/\n( *(at )?)/);
            fe = ce && ce[1] || "";
          }
        return `
` + fe + w;
      }
    }
    var de = !1, ve;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new Ke();
    }
    function U(w, N) {
      if (!w || de)
        return "";
      {
        var K = ve.get(w);
        if (K !== void 0)
          return K;
      }
      var ce;
      de = !0;
      var be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Le;
      Le = te.current, te.current = null, ee();
      try {
        if (N) {
          var Fe = function() {
            throw Error();
          };
          if (Object.defineProperty(Fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Fe, []);
            } catch (Lt) {
              ce = Lt;
            }
            Reflect.construct(w, [], Fe);
          } else {
            try {
              Fe.call();
            } catch (Lt) {
              ce = Lt;
            }
            w.call(Fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Lt) {
            ce = Lt;
          }
          w();
        }
      } catch (Lt) {
        if (Lt && ce && typeof Lt.stack == "string") {
          for (var xe = Lt.stack.split(`
`), gt = ce.stack.split(`
`), Xe = xe.length - 1, tt = gt.length - 1; Xe >= 1 && tt >= 0 && xe[Xe] !== gt[tt]; )
            tt--;
          for (; Xe >= 1 && tt >= 0; Xe--, tt--)
            if (xe[Xe] !== gt[tt]) {
              if (Xe !== 1 || tt !== 1)
                do
                  if (Xe--, tt--, tt < 0 || xe[Xe] !== gt[tt]) {
                    var Bt = `
` + xe[Xe].replace(" at new ", " at ");
                    return w.displayName && Bt.includes("<anonymous>") && (Bt = Bt.replace("<anonymous>", w.displayName)), typeof w == "function" && ve.set(w, Bt), Bt;
                  }
                while (Xe >= 1 && tt >= 0);
              break;
            }
        }
      } finally {
        de = !1, te.current = Le, re(), Error.prepareStackTrace = be;
      }
      var a1 = w ? w.displayName || w.name : "", _n = a1 ? se(a1) : "";
      return typeof w == "function" && ve.set(w, _n), _n;
    }
    function st(w, N, K) {
      return U(w, !1);
    }
    function q(w) {
      var N = w.prototype;
      return !!(N && N.isReactComponent);
    }
    function ut(w, N, K) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return U(w, q(w));
      if (typeof w == "string")
        return se(w);
      switch (w) {
        case b:
          return se("Suspense");
        case _:
          return se("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case F:
            return st(w.render);
          case C:
            return ut(w.type, N, K);
          case S: {
            var ce = w, be = ce._payload, Le = ce._init;
            try {
              return ut(Le(be), N, K);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, He = {}, pt = B.ReactDebugCurrentFrame;
    function Et(w) {
      if (w) {
        var N = w._owner, K = ut(w.type, w._source, N ? N.type : null);
        pt.setExtraStackFrame(K);
      } else
        pt.setExtraStackFrame(null);
    }
    function ft(w, N, K, ce, be) {
      {
        var Le = Function.call.bind(ue);
        for (var Fe in w)
          if (Le(w, Fe)) {
            var xe = void 0;
            try {
              if (typeof w[Fe] != "function") {
                var gt = Error((ce || "React class") + ": " + K + " type `" + Fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[Fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw gt.name = "Invariant Violation", gt;
              }
              xe = w[Fe](N, Fe, ce, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Xe) {
              xe = Xe;
            }
            xe && !(xe instanceof Error) && (Et(be), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", K, Fe, typeof xe), Et(null)), xe instanceof Error && !(xe.message in He) && (He[xe.message] = !0, Et(be), k("Failed %s type: %s", K, xe.message), Et(null));
          }
      }
    }
    var ht = Array.isArray;
    function St(w) {
      return ht(w);
    }
    function Mt(w) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, K = N && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return K;
      }
    }
    function Dr(w) {
      try {
        return C1(w), !1;
      } catch {
        return !0;
      }
    }
    function C1(w) {
      return "" + w;
    }
    function gn(w) {
      if (Dr(w))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mt(w)), C1(w);
    }
    var i1 = B.ReactCurrentOwner, D1 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, tr, U1;
    U1 = {};
    function Tr(w) {
      if (ue.call(w, "ref")) {
        var N = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function Br(w) {
      if (ue.call(w, "key")) {
        var N = Object.getOwnPropertyDescriptor(w, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Lr(w, N) {
      if (typeof w.ref == "string" && i1.current && N && i1.current.stateNode !== N) {
        var K = Ae(i1.current.type);
        U1[K] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(i1.current.type), w.ref), U1[K] = !0);
      }
    }
    function Or(w, N) {
      {
        var K = function() {
          er || (er = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        K.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function Rr(w, N) {
      {
        var K = function() {
          tr || (tr = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        K.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var Ir = function(w, N, K, ce, be, Le, Fe) {
      var xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: w,
        key: N,
        ref: K,
        props: Fe,
        // Record the component responsible for creating this element.
        _owner: Le
      };
      return xe._store = {}, Object.defineProperty(xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
    };
    function G2(w, N, K, ce, be) {
      {
        var Le, Fe = {}, xe = null, gt = null;
        K !== void 0 && (gn(K), xe = "" + K), Br(N) && (gn(N.key), xe = "" + N.key), Tr(N) && (gt = N.ref, Lr(N, be));
        for (Le in N)
          ue.call(N, Le) && !D1.hasOwnProperty(Le) && (Fe[Le] = N[Le]);
        if (w && w.defaultProps) {
          var Xe = w.defaultProps;
          for (Le in Xe)
            Fe[Le] === void 0 && (Fe[Le] = Xe[Le]);
        }
        if (xe || gt) {
          var tt = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          xe && Or(Fe, tt), gt && Rr(Fe, tt);
        }
        return Ir(w, xe, gt, be, ce, i1.current, Fe);
      }
    }
    var Pr = B.ReactCurrentOwner, wn = B.ReactDebugCurrentFrame;
    function w1(w) {
      if (w) {
        var N = w._owner, K = ut(w.type, w._source, N ? N.type : null);
        wn.setExtraStackFrame(K);
      } else
        wn.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function Vr(w) {
      return typeof w == "object" && w !== null && w.$$typeof === l;
    }
    function zn() {
      {
        if (Pr.current) {
          var w = Ae(Pr.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function K2(w) {
      {
        if (w !== void 0) {
          var N = w.fileName.replace(/^.*[\\\/]/, ""), K = w.lineNumber;
          return `

Check your code at ` + N + ":" + K + ".";
        }
        return "";
      }
    }
    var xn = {};
    function Mn(w) {
      {
        var N = zn();
        if (!N) {
          var K = typeof w == "string" ? w : w.displayName || w.name;
          K && (N = `

Check the top-level render call using <` + K + ">.");
        }
        return N;
      }
    }
    function Fn(w, N) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var K = Mn(N);
        if (xn[K])
          return;
        xn[K] = !0;
        var ce = "";
        w && w._owner && w._owner !== Pr.current && (ce = " It was passed a child from " + Ae(w._owner.type) + "."), w1(w), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, ce), w1(null);
      }
    }
    function yn(w, N) {
      {
        if (typeof w != "object")
          return;
        if (St(w))
          for (var K = 0; K < w.length; K++) {
            var ce = w[K];
            Vr(ce) && Fn(ce, N);
          }
        else if (Vr(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var be = M(w);
          if (typeof be == "function" && be !== w.entries)
            for (var Le = be.call(w), Fe; !(Fe = Le.next()).done; )
              Vr(Fe.value) && Fn(Fe.value, N);
        }
      }
    }
    function Y2(w) {
      {
        var N = w.type;
        if (N == null || typeof N == "string")
          return;
        var K;
        if (typeof N == "function")
          K = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === F || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === C))
          K = N.propTypes;
        else
          return;
        if (K) {
          var ce = Ae(N);
          ft(K, w.props, "prop", ce, w);
        } else if (N.PropTypes !== void 0 && !rr) {
          rr = !0;
          var be = Ae(N);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", be || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(w) {
      {
        for (var N = Object.keys(w.props), K = 0; K < N.length; K++) {
          var ce = N[K];
          if (ce !== "children" && ce !== "key") {
            w1(w), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), w1(null);
            break;
          }
        }
        w.ref !== null && (w1(w), k("Invalid attribute `ref` supplied to `React.Fragment`."), w1(null));
      }
    }
    function Hn(w, N, K, ce, be, Le) {
      {
        var Fe = Q(w);
        if (!Fe) {
          var xe = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var gt = K2(be);
          gt ? xe += gt : xe += zn();
          var Xe;
          w === null ? Xe = "null" : St(w) ? Xe = "array" : w !== void 0 && w.$$typeof === l ? (Xe = "<" + (Ae(w.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Xe = typeof w, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Xe, xe);
        }
        var tt = G2(w, N, K, be, Le);
        if (tt == null)
          return tt;
        if (Fe) {
          var Bt = N.children;
          if (Bt !== void 0)
            if (ce)
              if (St(Bt)) {
                for (var a1 = 0; a1 < Bt.length; a1++)
                  yn(Bt[a1], w);
                Object.freeze && Object.freeze(Bt);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yn(Bt, w);
        }
        return w === a ? Nr(tt) : Y2(tt), tt;
      }
    }
    function kr(w, N, K) {
      return Hn(w, N, K, !0);
    }
    function j2(w, N, K) {
      return Hn(w, N, K, !1);
    }
    var q2 = j2, Z2 = kr;
    an.Fragment = a, an.jsx = q2, an.jsxs = Z2;
  }()), an;
}
process.env.NODE_ENV === "production" ? w3.exports = au() : w3.exports = cu();
var Ze = w3.exports, F2 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
F2.exports;
(function(i, l) {
  (function() {
    var r, a = "4.17.21", u = 200, m = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", x = "Invalid `variable` option passed into `_.template`", F = "__lodash_hash_undefined__", b = 500, _ = "__lodash_placeholder__", C = 1, S = 2, V = 4, R = 1, E = 2, M = 1, B = 2, k = 4, $ = 8, G = 16, A = 32, J = 64, j = 128, Be = 256, ge = 512, Q = 30, he = "...", ke = 800, Ae = 16, Se = 1, et = 2, Je = 3, Ue = 1 / 0, Ge = 9007199254740991, At = 17976931348623157e292, P = NaN, W = 4294967295, oe = W - 1, ae = W >>> 1, ee = [
      ["ary", j],
      ["bind", M],
      ["bindKey", B],
      ["curry", $],
      ["curryRight", G],
      ["flip", ge],
      ["partial", A],
      ["partialRight", J],
      ["rearg", Be]
    ], re = "[object Arguments]", te = "[object Array]", fe = "[object AsyncFunction]", se = "[object Boolean]", de = "[object Date]", ve = "[object DOMException]", Ke = "[object Error]", U = "[object Function]", st = "[object GeneratorFunction]", q = "[object Map]", ut = "[object Number]", ue = "[object Null]", He = "[object Object]", pt = "[object Promise]", Et = "[object Proxy]", ft = "[object RegExp]", ht = "[object Set]", St = "[object String]", Mt = "[object Symbol]", Dr = "[object Undefined]", C1 = "[object WeakMap]", gn = "[object WeakSet]", i1 = "[object ArrayBuffer]", D1 = "[object DataView]", er = "[object Float32Array]", tr = "[object Float64Array]", U1 = "[object Int8Array]", Tr = "[object Int16Array]", Br = "[object Int32Array]", Lr = "[object Uint8Array]", Or = "[object Uint8ClampedArray]", Rr = "[object Uint16Array]", Ir = "[object Uint32Array]", G2 = /\b__p \+= '';/g, Pr = /\b(__p \+=) '' \+/g, wn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, w1 = /&(?:amp|lt|gt|quot|#39);/g, rr = /[&<>"']/g, Vr = RegExp(w1.source), zn = RegExp(rr.source), K2 = /<%-([\s\S]+?)%>/g, xn = /<%([\s\S]+?)%>/g, Mn = /<%=([\s\S]+?)%>/g, Fn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yn = /^\w*$/, Y2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nr = /[\\^$.*+?()[\]{}|]/g, Hn = RegExp(Nr.source), kr = /^\s+/, j2 = /\s/, q2 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Z2 = /\{\n\/\* \[wrapped with (.+)\] \*/, w = /,? & /, N = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, K = /[()=,{}\[\]\/\s]/, ce = /\\(\\)?/g, be = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Le = /\w*$/, Fe = /^[-+]0x[0-9a-f]+$/i, xe = /^0b[01]+$/i, gt = /^\[object .+?Constructor\]$/, Xe = /^0o[0-7]+$/i, tt = /^(?:0|[1-9]\d*)$/, Bt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, a1 = /($^)/, _n = /['\n\r\u2028\u2029\\]/g, Lt = "\\ud800-\\udfff", $4 = "\\u0300-\\u036f", W4 = "\\ufe20-\\ufe2f", U4 = "\\u20d0-\\u20ff", $3 = $4 + W4 + U4, W3 = "\\u2700-\\u27bf", U3 = "a-z\\xdf-\\xf6\\xf8-\\xff", G4 = "\\xac\\xb1\\xd7\\xf7", K4 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Y4 = "\\u2000-\\u206f", j4 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", G3 = "A-Z\\xc0-\\xd6\\xd8-\\xde", K3 = "\\ufe0e\\ufe0f", Y3 = G4 + K4 + Y4 + j4, J2 = "['’]", q4 = "[" + Lt + "]", j3 = "[" + Y3 + "]", bn = "[" + $3 + "]", q3 = "\\d+", Z4 = "[" + W3 + "]", Z3 = "[" + U3 + "]", J3 = "[^" + Lt + Y3 + q3 + W3 + U3 + G3 + "]", X2 = "\\ud83c[\\udffb-\\udfff]", J4 = "(?:" + bn + "|" + X2 + ")", X3 = "[^" + Lt + "]", Q2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", el = "[\\ud800-\\udbff][\\udc00-\\udfff]", nr = "[" + G3 + "]", Q3 = "\\u200d", e0 = "(?:" + Z3 + "|" + J3 + ")", X4 = "(?:" + nr + "|" + J3 + ")", t0 = "(?:" + J2 + "(?:d|ll|m|re|s|t|ve))?", r0 = "(?:" + J2 + "(?:D|LL|M|RE|S|T|VE))?", n0 = J4 + "?", l0 = "[" + K3 + "]?", Q4 = "(?:" + Q3 + "(?:" + [X3, Q2, el].join("|") + ")" + l0 + n0 + ")*", e5 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", t5 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", i0 = l0 + n0 + Q4, r5 = "(?:" + [Z4, Q2, el].join("|") + ")" + i0, n5 = "(?:" + [X3 + bn + "?", bn, Q2, el, q4].join("|") + ")", l5 = RegExp(J2, "g"), i5 = RegExp(bn, "g"), tl = RegExp(X2 + "(?=" + X2 + ")|" + n5 + i0, "g"), a5 = RegExp([
      nr + "?" + Z3 + "+" + t0 + "(?=" + [j3, nr, "$"].join("|") + ")",
      X4 + "+" + r0 + "(?=" + [j3, nr + e0, "$"].join("|") + ")",
      nr + "?" + e0 + "+" + t0,
      nr + "+" + r0,
      t5,
      e5,
      q3,
      r5
    ].join("|"), "g"), c5 = RegExp("[" + Q3 + Lt + $3 + K3 + "]"), o5 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, s5 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], u5 = -1, Ye = {};
    Ye[er] = Ye[tr] = Ye[U1] = Ye[Tr] = Ye[Br] = Ye[Lr] = Ye[Or] = Ye[Rr] = Ye[Ir] = !0, Ye[re] = Ye[te] = Ye[i1] = Ye[se] = Ye[D1] = Ye[de] = Ye[Ke] = Ye[U] = Ye[q] = Ye[ut] = Ye[He] = Ye[ft] = Ye[ht] = Ye[St] = Ye[C1] = !1;
    var We = {};
    We[re] = We[te] = We[i1] = We[D1] = We[se] = We[de] = We[er] = We[tr] = We[U1] = We[Tr] = We[Br] = We[q] = We[ut] = We[He] = We[ft] = We[ht] = We[St] = We[Mt] = We[Lr] = We[Or] = We[Rr] = We[Ir] = !0, We[Ke] = We[U] = We[C1] = !1;
    var f5 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, h5 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, m5 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, d5 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, v5 = parseFloat, p5 = parseInt, a0 = typeof nn == "object" && nn && nn.Object === Object && nn, E5 = typeof self == "object" && self && self.Object === Object && self, wt = a0 || E5 || Function("return this")(), rl = l && !l.nodeType && l, G1 = rl && !0 && i && !i.nodeType && i, c0 = G1 && G1.exports === rl, nl = c0 && a0.process, qt = function() {
      try {
        var y = G1 && G1.require && G1.require("util").types;
        return y || nl && nl.binding && nl.binding("util");
      } catch {
      }
    }(), o0 = qt && qt.isArrayBuffer, s0 = qt && qt.isDate, u0 = qt && qt.isMap, f0 = qt && qt.isRegExp, h0 = qt && qt.isSet, m0 = qt && qt.isTypedArray;
    function Nt(y, T, D) {
      switch (D.length) {
        case 0:
          return y.call(T);
        case 1:
          return y.call(T, D[0]);
        case 2:
          return y.call(T, D[0], D[1]);
        case 3:
          return y.call(T, D[0], D[1], D[2]);
      }
      return y.apply(T, D);
    }
    function g5(y, T, D, Z) {
      for (var me = -1, Ce = y == null ? 0 : y.length; ++me < Ce; ) {
        var mt = y[me];
        T(Z, mt, D(mt), y);
      }
      return Z;
    }
    function Zt(y, T) {
      for (var D = -1, Z = y == null ? 0 : y.length; ++D < Z && T(y[D], D, y) !== !1; )
        ;
      return y;
    }
    function w5(y, T) {
      for (var D = y == null ? 0 : y.length; D-- && T(y[D], D, y) !== !1; )
        ;
      return y;
    }
    function d0(y, T) {
      for (var D = -1, Z = y == null ? 0 : y.length; ++D < Z; )
        if (!T(y[D], D, y))
          return !1;
      return !0;
    }
    function T1(y, T) {
      for (var D = -1, Z = y == null ? 0 : y.length, me = 0, Ce = []; ++D < Z; ) {
        var mt = y[D];
        T(mt, D, y) && (Ce[me++] = mt);
      }
      return Ce;
    }
    function An(y, T) {
      var D = y == null ? 0 : y.length;
      return !!D && lr(y, T, 0) > -1;
    }
    function ll(y, T, D) {
      for (var Z = -1, me = y == null ? 0 : y.length; ++Z < me; )
        if (D(T, y[Z]))
          return !0;
      return !1;
    }
    function je(y, T) {
      for (var D = -1, Z = y == null ? 0 : y.length, me = Array(Z); ++D < Z; )
        me[D] = T(y[D], D, y);
      return me;
    }
    function B1(y, T) {
      for (var D = -1, Z = T.length, me = y.length; ++D < Z; )
        y[me + D] = T[D];
      return y;
    }
    function il(y, T, D, Z) {
      var me = -1, Ce = y == null ? 0 : y.length;
      for (Z && Ce && (D = y[++me]); ++me < Ce; )
        D = T(D, y[me], me, y);
      return D;
    }
    function z5(y, T, D, Z) {
      var me = y == null ? 0 : y.length;
      for (Z && me && (D = y[--me]); me--; )
        D = T(D, y[me], me, y);
      return D;
    }
    function al(y, T) {
      for (var D = -1, Z = y == null ? 0 : y.length; ++D < Z; )
        if (T(y[D], D, y))
          return !0;
      return !1;
    }
    var x5 = cl("length");
    function M5(y) {
      return y.split("");
    }
    function F5(y) {
      return y.match(N) || [];
    }
    function v0(y, T, D) {
      var Z;
      return D(y, function(me, Ce, mt) {
        if (T(me, Ce, mt))
          return Z = Ce, !1;
      }), Z;
    }
    function Sn(y, T, D, Z) {
      for (var me = y.length, Ce = D + (Z ? 1 : -1); Z ? Ce-- : ++Ce < me; )
        if (T(y[Ce], Ce, y))
          return Ce;
      return -1;
    }
    function lr(y, T, D) {
      return T === T ? O5(y, T, D) : Sn(y, p0, D);
    }
    function y5(y, T, D, Z) {
      for (var me = D - 1, Ce = y.length; ++me < Ce; )
        if (Z(y[me], T))
          return me;
      return -1;
    }
    function p0(y) {
      return y !== y;
    }
    function E0(y, T) {
      var D = y == null ? 0 : y.length;
      return D ? sl(y, T) / D : P;
    }
    function cl(y) {
      return function(T) {
        return T == null ? r : T[y];
      };
    }
    function ol(y) {
      return function(T) {
        return y == null ? r : y[T];
      };
    }
    function g0(y, T, D, Z, me) {
      return me(y, function(Ce, mt, $e) {
        D = Z ? (Z = !1, Ce) : T(D, Ce, mt, $e);
      }), D;
    }
    function H5(y, T) {
      var D = y.length;
      for (y.sort(T); D--; )
        y[D] = y[D].value;
      return y;
    }
    function sl(y, T) {
      for (var D, Z = -1, me = y.length; ++Z < me; ) {
        var Ce = T(y[Z]);
        Ce !== r && (D = D === r ? Ce : D + Ce);
      }
      return D;
    }
    function ul(y, T) {
      for (var D = -1, Z = Array(y); ++D < y; )
        Z[D] = T(D);
      return Z;
    }
    function _5(y, T) {
      return je(T, function(D) {
        return [D, y[D]];
      });
    }
    function w0(y) {
      return y && y.slice(0, F0(y) + 1).replace(kr, "");
    }
    function kt(y) {
      return function(T) {
        return y(T);
      };
    }
    function fl(y, T) {
      return je(T, function(D) {
        return y[D];
      });
    }
    function $r(y, T) {
      return y.has(T);
    }
    function z0(y, T) {
      for (var D = -1, Z = y.length; ++D < Z && lr(T, y[D], 0) > -1; )
        ;
      return D;
    }
    function x0(y, T) {
      for (var D = y.length; D-- && lr(T, y[D], 0) > -1; )
        ;
      return D;
    }
    function b5(y, T) {
      for (var D = y.length, Z = 0; D--; )
        y[D] === T && ++Z;
      return Z;
    }
    var A5 = ol(f5), S5 = ol(h5);
    function C5(y) {
      return "\\" + d5[y];
    }
    function D5(y, T) {
      return y == null ? r : y[T];
    }
    function ir(y) {
      return c5.test(y);
    }
    function T5(y) {
      return o5.test(y);
    }
    function B5(y) {
      for (var T, D = []; !(T = y.next()).done; )
        D.push(T.value);
      return D;
    }
    function hl(y) {
      var T = -1, D = Array(y.size);
      return y.forEach(function(Z, me) {
        D[++T] = [me, Z];
      }), D;
    }
    function M0(y, T) {
      return function(D) {
        return y(T(D));
      };
    }
    function L1(y, T) {
      for (var D = -1, Z = y.length, me = 0, Ce = []; ++D < Z; ) {
        var mt = y[D];
        (mt === T || mt === _) && (y[D] = _, Ce[me++] = D);
      }
      return Ce;
    }
    function Cn(y) {
      var T = -1, D = Array(y.size);
      return y.forEach(function(Z) {
        D[++T] = Z;
      }), D;
    }
    function L5(y) {
      var T = -1, D = Array(y.size);
      return y.forEach(function(Z) {
        D[++T] = [Z, Z];
      }), D;
    }
    function O5(y, T, D) {
      for (var Z = D - 1, me = y.length; ++Z < me; )
        if (y[Z] === T)
          return Z;
      return -1;
    }
    function R5(y, T, D) {
      for (var Z = D + 1; Z--; )
        if (y[Z] === T)
          return Z;
      return Z;
    }
    function ar(y) {
      return ir(y) ? P5(y) : x5(y);
    }
    function c1(y) {
      return ir(y) ? V5(y) : M5(y);
    }
    function F0(y) {
      for (var T = y.length; T-- && j2.test(y.charAt(T)); )
        ;
      return T;
    }
    var I5 = ol(m5);
    function P5(y) {
      for (var T = tl.lastIndex = 0; tl.test(y); )
        ++T;
      return T;
    }
    function V5(y) {
      return y.match(tl) || [];
    }
    function N5(y) {
      return y.match(a5) || [];
    }
    var k5 = function y(T) {
      T = T == null ? wt : cr.defaults(wt.Object(), T, cr.pick(wt, s5));
      var D = T.Array, Z = T.Date, me = T.Error, Ce = T.Function, mt = T.Math, $e = T.Object, ml = T.RegExp, $5 = T.String, Jt = T.TypeError, Dn = D.prototype, W5 = Ce.prototype, or = $e.prototype, Tn = T["__core-js_shared__"], Bn = W5.toString, Ne = or.hasOwnProperty, U5 = 0, y0 = function() {
        var e = /[^.]+$/.exec(Tn && Tn.keys && Tn.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Ln = or.toString, G5 = Bn.call($e), K5 = wt._, Y5 = ml(
        "^" + Bn.call(Ne).replace(Nr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), On = c0 ? T.Buffer : r, O1 = T.Symbol, Rn = T.Uint8Array, H0 = On ? On.allocUnsafe : r, In = M0($e.getPrototypeOf, $e), _0 = $e.create, b0 = or.propertyIsEnumerable, Pn = Dn.splice, A0 = O1 ? O1.isConcatSpreadable : r, Wr = O1 ? O1.iterator : r, K1 = O1 ? O1.toStringTag : r, Vn = function() {
        try {
          var e = J1($e, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), j5 = T.clearTimeout !== wt.clearTimeout && T.clearTimeout, q5 = Z && Z.now !== wt.Date.now && Z.now, Z5 = T.setTimeout !== wt.setTimeout && T.setTimeout, Nn = mt.ceil, kn = mt.floor, dl = $e.getOwnPropertySymbols, J5 = On ? On.isBuffer : r, S0 = T.isFinite, X5 = Dn.join, Q5 = M0($e.keys, $e), dt = mt.max, Ft = mt.min, ec = Z.now, tc = T.parseInt, C0 = mt.random, rc = Dn.reverse, vl = J1(T, "DataView"), Ur = J1(T, "Map"), pl = J1(T, "Promise"), sr = J1(T, "Set"), Gr = J1(T, "WeakMap"), Kr = J1($e, "create"), $n = Gr && new Gr(), ur = {}, nc = X1(vl), lc = X1(Ur), ic = X1(pl), ac = X1(sr), cc = X1(Gr), Wn = O1 ? O1.prototype : r, Yr = Wn ? Wn.valueOf : r, D0 = Wn ? Wn.toString : r;
      function f(e) {
        if (rt(e) && !pe(e) && !(e instanceof ye)) {
          if (e instanceof Xt)
            return e;
          if (Ne.call(e, "__wrapped__"))
            return Ti(e);
        }
        return new Xt(e);
      }
      var fr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(n) {
          if (!Qe(n))
            return {};
          if (_0)
            return _0(n);
          e.prototype = n;
          var c = new e();
          return e.prototype = r, c;
        };
      }();
      function Un() {
      }
      function Xt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      f.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: K2,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: xn,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Mn,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: f
        }
      }, f.prototype = Un.prototype, f.prototype.constructor = f, Xt.prototype = fr(Un.prototype), Xt.prototype.constructor = Xt;
      function ye(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = W, this.__views__ = [];
      }
      function oc() {
        var e = new ye(this.__wrapped__);
        return e.__actions__ = Ot(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ot(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ot(this.__views__), e;
      }
      function sc() {
        if (this.__filtered__) {
          var e = new ye(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function uc() {
        var e = this.__wrapped__.value(), n = this.__dir__, c = pe(e), o = n < 0, s = c ? e.length : 0, h = Fo(0, s, this.__views__), g = h.start, z = h.end, H = z - g, L = o ? z : g - 1, O = this.__iteratees__, I = O.length, Y = 0, X = Ft(H, this.__takeCount__);
        if (!c || !o && s == H && X == H)
          return ti(e, this.__actions__);
        var le = [];
        e:
          for (; H-- && Y < X; ) {
            L += n;
            for (var we = -1, ie = e[L]; ++we < I; ) {
              var Me = O[we], _e = Me.iteratee, Ut = Me.type, Tt = _e(ie);
              if (Ut == et)
                ie = Tt;
              else if (!Tt) {
                if (Ut == Se)
                  continue e;
                break e;
              }
            }
            le[Y++] = ie;
          }
        return le;
      }
      ye.prototype = fr(Un.prototype), ye.prototype.constructor = ye;
      function Y1(e) {
        var n = -1, c = e == null ? 0 : e.length;
        for (this.clear(); ++n < c; ) {
          var o = e[n];
          this.set(o[0], o[1]);
        }
      }
      function fc() {
        this.__data__ = Kr ? Kr(null) : {}, this.size = 0;
      }
      function hc(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function mc(e) {
        var n = this.__data__;
        if (Kr) {
          var c = n[e];
          return c === F ? r : c;
        }
        return Ne.call(n, e) ? n[e] : r;
      }
      function dc(e) {
        var n = this.__data__;
        return Kr ? n[e] !== r : Ne.call(n, e);
      }
      function vc(e, n) {
        var c = this.__data__;
        return this.size += this.has(e) ? 0 : 1, c[e] = Kr && n === r ? F : n, this;
      }
      Y1.prototype.clear = fc, Y1.prototype.delete = hc, Y1.prototype.get = mc, Y1.prototype.has = dc, Y1.prototype.set = vc;
      function z1(e) {
        var n = -1, c = e == null ? 0 : e.length;
        for (this.clear(); ++n < c; ) {
          var o = e[n];
          this.set(o[0], o[1]);
        }
      }
      function pc() {
        this.__data__ = [], this.size = 0;
      }
      function Ec(e) {
        var n = this.__data__, c = Gn(n, e);
        if (c < 0)
          return !1;
        var o = n.length - 1;
        return c == o ? n.pop() : Pn.call(n, c, 1), --this.size, !0;
      }
      function gc(e) {
        var n = this.__data__, c = Gn(n, e);
        return c < 0 ? r : n[c][1];
      }
      function wc(e) {
        return Gn(this.__data__, e) > -1;
      }
      function zc(e, n) {
        var c = this.__data__, o = Gn(c, e);
        return o < 0 ? (++this.size, c.push([e, n])) : c[o][1] = n, this;
      }
      z1.prototype.clear = pc, z1.prototype.delete = Ec, z1.prototype.get = gc, z1.prototype.has = wc, z1.prototype.set = zc;
      function x1(e) {
        var n = -1, c = e == null ? 0 : e.length;
        for (this.clear(); ++n < c; ) {
          var o = e[n];
          this.set(o[0], o[1]);
        }
      }
      function xc() {
        this.size = 0, this.__data__ = {
          hash: new Y1(),
          map: new (Ur || z1)(),
          string: new Y1()
        };
      }
      function Mc(e) {
        var n = n2(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Fc(e) {
        return n2(this, e).get(e);
      }
      function yc(e) {
        return n2(this, e).has(e);
      }
      function Hc(e, n) {
        var c = n2(this, e), o = c.size;
        return c.set(e, n), this.size += c.size == o ? 0 : 1, this;
      }
      x1.prototype.clear = xc, x1.prototype.delete = Mc, x1.prototype.get = Fc, x1.prototype.has = yc, x1.prototype.set = Hc;
      function j1(e) {
        var n = -1, c = e == null ? 0 : e.length;
        for (this.__data__ = new x1(); ++n < c; )
          this.add(e[n]);
      }
      function _c(e) {
        return this.__data__.set(e, F), this;
      }
      function bc(e) {
        return this.__data__.has(e);
      }
      j1.prototype.add = j1.prototype.push = _c, j1.prototype.has = bc;
      function o1(e) {
        var n = this.__data__ = new z1(e);
        this.size = n.size;
      }
      function Ac() {
        this.__data__ = new z1(), this.size = 0;
      }
      function Sc(e) {
        var n = this.__data__, c = n.delete(e);
        return this.size = n.size, c;
      }
      function Cc(e) {
        return this.__data__.get(e);
      }
      function Dc(e) {
        return this.__data__.has(e);
      }
      function Tc(e, n) {
        var c = this.__data__;
        if (c instanceof z1) {
          var o = c.__data__;
          if (!Ur || o.length < u - 1)
            return o.push([e, n]), this.size = ++c.size, this;
          c = this.__data__ = new x1(o);
        }
        return c.set(e, n), this.size = c.size, this;
      }
      o1.prototype.clear = Ac, o1.prototype.delete = Sc, o1.prototype.get = Cc, o1.prototype.has = Dc, o1.prototype.set = Tc;
      function T0(e, n) {
        var c = pe(e), o = !c && Q1(e), s = !c && !o && N1(e), h = !c && !o && !s && vr(e), g = c || o || s || h, z = g ? ul(e.length, $5) : [], H = z.length;
        for (var L in e)
          (n || Ne.call(e, L)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
          (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          s && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          h && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
          H1(L, H))) && z.push(L);
        return z;
      }
      function B0(e) {
        var n = e.length;
        return n ? e[bl(0, n - 1)] : r;
      }
      function Bc(e, n) {
        return l2(Ot(e), q1(n, 0, e.length));
      }
      function Lc(e) {
        return l2(Ot(e));
      }
      function El(e, n, c) {
        (c !== r && !s1(e[n], c) || c === r && !(n in e)) && M1(e, n, c);
      }
      function jr(e, n, c) {
        var o = e[n];
        (!(Ne.call(e, n) && s1(o, c)) || c === r && !(n in e)) && M1(e, n, c);
      }
      function Gn(e, n) {
        for (var c = e.length; c--; )
          if (s1(e[c][0], n))
            return c;
        return -1;
      }
      function Oc(e, n, c, o) {
        return R1(e, function(s, h, g) {
          n(o, s, c(s), g);
        }), o;
      }
      function L0(e, n) {
        return e && d1(n, vt(n), e);
      }
      function Rc(e, n) {
        return e && d1(n, It(n), e);
      }
      function M1(e, n, c) {
        n == "__proto__" && Vn ? Vn(e, n, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : e[n] = c;
      }
      function gl(e, n) {
        for (var c = -1, o = n.length, s = D(o), h = e == null; ++c < o; )
          s[c] = h ? r : Xl(e, n[c]);
        return s;
      }
      function q1(e, n, c) {
        return e === e && (c !== r && (e = e <= c ? e : c), n !== r && (e = e >= n ? e : n)), e;
      }
      function Qt(e, n, c, o, s, h) {
        var g, z = n & C, H = n & S, L = n & V;
        if (c && (g = s ? c(e, o, s, h) : c(e)), g !== r)
          return g;
        if (!Qe(e))
          return e;
        var O = pe(e);
        if (O) {
          if (g = Ho(e), !z)
            return Ot(e, g);
        } else {
          var I = yt(e), Y = I == U || I == st;
          if (N1(e))
            return li(e, z);
          if (I == He || I == re || Y && !s) {
            if (g = H || Y ? {} : Fi(e), !z)
              return H ? mo(e, Rc(g, e)) : ho(e, L0(g, e));
          } else {
            if (!We[I])
              return s ? e : {};
            g = _o(e, I, z);
          }
        }
        h || (h = new o1());
        var X = h.get(e);
        if (X)
          return X;
        h.set(e, g), Xi(e) ? e.forEach(function(ie) {
          g.add(Qt(ie, n, c, ie, e, h));
        }) : Zi(e) && e.forEach(function(ie, Me) {
          g.set(Me, Qt(ie, n, c, Me, e, h));
        });
        var le = L ? H ? Pl : Il : H ? It : vt, we = O ? r : le(e);
        return Zt(we || e, function(ie, Me) {
          we && (Me = ie, ie = e[Me]), jr(g, Me, Qt(ie, n, c, Me, e, h));
        }), g;
      }
      function Ic(e) {
        var n = vt(e);
        return function(c) {
          return O0(c, e, n);
        };
      }
      function O0(e, n, c) {
        var o = c.length;
        if (e == null)
          return !o;
        for (e = $e(e); o--; ) {
          var s = c[o], h = n[s], g = e[s];
          if (g === r && !(s in e) || !h(g))
            return !1;
        }
        return !0;
      }
      function R0(e, n, c) {
        if (typeof e != "function")
          throw new Jt(d);
        return tn(function() {
          e.apply(r, c);
        }, n);
      }
      function qr(e, n, c, o) {
        var s = -1, h = An, g = !0, z = e.length, H = [], L = n.length;
        if (!z)
          return H;
        c && (n = je(n, kt(c))), o ? (h = ll, g = !1) : n.length >= u && (h = $r, g = !1, n = new j1(n));
        e:
          for (; ++s < z; ) {
            var O = e[s], I = c == null ? O : c(O);
            if (O = o || O !== 0 ? O : 0, g && I === I) {
              for (var Y = L; Y--; )
                if (n[Y] === I)
                  continue e;
              H.push(O);
            } else
              h(n, I, o) || H.push(O);
          }
        return H;
      }
      var R1 = si(m1), I0 = si(zl, !0);
      function Pc(e, n) {
        var c = !0;
        return R1(e, function(o, s, h) {
          return c = !!n(o, s, h), c;
        }), c;
      }
      function Kn(e, n, c) {
        for (var o = -1, s = e.length; ++o < s; ) {
          var h = e[o], g = n(h);
          if (g != null && (z === r ? g === g && !Wt(g) : c(g, z)))
            var z = g, H = h;
        }
        return H;
      }
      function Vc(e, n, c, o) {
        var s = e.length;
        for (c = Ee(c), c < 0 && (c = -c > s ? 0 : s + c), o = o === r || o > s ? s : Ee(o), o < 0 && (o += s), o = c > o ? 0 : ea(o); c < o; )
          e[c++] = n;
        return e;
      }
      function P0(e, n) {
        var c = [];
        return R1(e, function(o, s, h) {
          n(o, s, h) && c.push(o);
        }), c;
      }
      function zt(e, n, c, o, s) {
        var h = -1, g = e.length;
        for (c || (c = Ao), s || (s = []); ++h < g; ) {
          var z = e[h];
          n > 0 && c(z) ? n > 1 ? zt(z, n - 1, c, o, s) : B1(s, z) : o || (s[s.length] = z);
        }
        return s;
      }
      var wl = ui(), V0 = ui(!0);
      function m1(e, n) {
        return e && wl(e, n, vt);
      }
      function zl(e, n) {
        return e && V0(e, n, vt);
      }
      function Yn(e, n) {
        return T1(n, function(c) {
          return _1(e[c]);
        });
      }
      function Z1(e, n) {
        n = P1(n, e);
        for (var c = 0, o = n.length; e != null && c < o; )
          e = e[v1(n[c++])];
        return c && c == o ? e : r;
      }
      function N0(e, n, c) {
        var o = n(e);
        return pe(e) ? o : B1(o, c(e));
      }
      function Ct(e) {
        return e == null ? e === r ? Dr : ue : K1 && K1 in $e(e) ? Mo(e) : Oo(e);
      }
      function xl(e, n) {
        return e > n;
      }
      function Nc(e, n) {
        return e != null && Ne.call(e, n);
      }
      function kc(e, n) {
        return e != null && n in $e(e);
      }
      function $c(e, n, c) {
        return e >= Ft(n, c) && e < dt(n, c);
      }
      function Ml(e, n, c) {
        for (var o = c ? ll : An, s = e[0].length, h = e.length, g = h, z = D(h), H = 1 / 0, L = []; g--; ) {
          var O = e[g];
          g && n && (O = je(O, kt(n))), H = Ft(O.length, H), z[g] = !c && (n || s >= 120 && O.length >= 120) ? new j1(g && O) : r;
        }
        O = e[0];
        var I = -1, Y = z[0];
        e:
          for (; ++I < s && L.length < H; ) {
            var X = O[I], le = n ? n(X) : X;
            if (X = c || X !== 0 ? X : 0, !(Y ? $r(Y, le) : o(L, le, c))) {
              for (g = h; --g; ) {
                var we = z[g];
                if (!(we ? $r(we, le) : o(e[g], le, c)))
                  continue e;
              }
              Y && Y.push(le), L.push(X);
            }
          }
        return L;
      }
      function Wc(e, n, c, o) {
        return m1(e, function(s, h, g) {
          n(o, c(s), h, g);
        }), o;
      }
      function Zr(e, n, c) {
        n = P1(n, e), e = bi(e, n);
        var o = e == null ? e : e[v1(t1(n))];
        return o == null ? r : Nt(o, e, c);
      }
      function k0(e) {
        return rt(e) && Ct(e) == re;
      }
      function Uc(e) {
        return rt(e) && Ct(e) == i1;
      }
      function Gc(e) {
        return rt(e) && Ct(e) == de;
      }
      function Jr(e, n, c, o, s) {
        return e === n ? !0 : e == null || n == null || !rt(e) && !rt(n) ? e !== e && n !== n : Kc(e, n, c, o, Jr, s);
      }
      function Kc(e, n, c, o, s, h) {
        var g = pe(e), z = pe(n), H = g ? te : yt(e), L = z ? te : yt(n);
        H = H == re ? He : H, L = L == re ? He : L;
        var O = H == He, I = L == He, Y = H == L;
        if (Y && N1(e)) {
          if (!N1(n))
            return !1;
          g = !0, O = !1;
        }
        if (Y && !O)
          return h || (h = new o1()), g || vr(e) ? zi(e, n, c, o, s, h) : zo(e, n, H, c, o, s, h);
        if (!(c & R)) {
          var X = O && Ne.call(e, "__wrapped__"), le = I && Ne.call(n, "__wrapped__");
          if (X || le) {
            var we = X ? e.value() : e, ie = le ? n.value() : n;
            return h || (h = new o1()), s(we, ie, c, o, h);
          }
        }
        return Y ? (h || (h = new o1()), xo(e, n, c, o, s, h)) : !1;
      }
      function Yc(e) {
        return rt(e) && yt(e) == q;
      }
      function Fl(e, n, c, o) {
        var s = c.length, h = s, g = !o;
        if (e == null)
          return !h;
        for (e = $e(e); s--; ) {
          var z = c[s];
          if (g && z[2] ? z[1] !== e[z[0]] : !(z[0] in e))
            return !1;
        }
        for (; ++s < h; ) {
          z = c[s];
          var H = z[0], L = e[H], O = z[1];
          if (g && z[2]) {
            if (L === r && !(H in e))
              return !1;
          } else {
            var I = new o1();
            if (o)
              var Y = o(L, O, H, e, n, I);
            if (!(Y === r ? Jr(O, L, R | E, o, I) : Y))
              return !1;
          }
        }
        return !0;
      }
      function $0(e) {
        if (!Qe(e) || Co(e))
          return !1;
        var n = _1(e) ? Y5 : gt;
        return n.test(X1(e));
      }
      function jc(e) {
        return rt(e) && Ct(e) == ft;
      }
      function qc(e) {
        return rt(e) && yt(e) == ht;
      }
      function Zc(e) {
        return rt(e) && u2(e.length) && !!Ye[Ct(e)];
      }
      function W0(e) {
        return typeof e == "function" ? e : e == null ? Pt : typeof e == "object" ? pe(e) ? K0(e[0], e[1]) : G0(e) : fa(e);
      }
      function yl(e) {
        if (!en(e))
          return Q5(e);
        var n = [];
        for (var c in $e(e))
          Ne.call(e, c) && c != "constructor" && n.push(c);
        return n;
      }
      function Jc(e) {
        if (!Qe(e))
          return Lo(e);
        var n = en(e), c = [];
        for (var o in e)
          o == "constructor" && (n || !Ne.call(e, o)) || c.push(o);
        return c;
      }
      function Hl(e, n) {
        return e < n;
      }
      function U0(e, n) {
        var c = -1, o = Rt(e) ? D(e.length) : [];
        return R1(e, function(s, h, g) {
          o[++c] = n(s, h, g);
        }), o;
      }
      function G0(e) {
        var n = Nl(e);
        return n.length == 1 && n[0][2] ? Hi(n[0][0], n[0][1]) : function(c) {
          return c === e || Fl(c, e, n);
        };
      }
      function K0(e, n) {
        return $l(e) && yi(n) ? Hi(v1(e), n) : function(c) {
          var o = Xl(c, e);
          return o === r && o === n ? Ql(c, e) : Jr(n, o, R | E);
        };
      }
      function jn(e, n, c, o, s) {
        e !== n && wl(n, function(h, g) {
          if (s || (s = new o1()), Qe(h))
            Xc(e, n, g, c, jn, o, s);
          else {
            var z = o ? o(Ul(e, g), h, g + "", e, n, s) : r;
            z === r && (z = h), El(e, g, z);
          }
        }, It);
      }
      function Xc(e, n, c, o, s, h, g) {
        var z = Ul(e, c), H = Ul(n, c), L = g.get(H);
        if (L) {
          El(e, c, L);
          return;
        }
        var O = h ? h(z, H, c + "", e, n, g) : r, I = O === r;
        if (I) {
          var Y = pe(H), X = !Y && N1(H), le = !Y && !X && vr(H);
          O = H, Y || X || le ? pe(z) ? O = z : it(z) ? O = Ot(z) : X ? (I = !1, O = li(H, !0)) : le ? (I = !1, O = ii(H, !0)) : O = [] : rn(H) || Q1(H) ? (O = z, Q1(z) ? O = ta(z) : (!Qe(z) || _1(z)) && (O = Fi(H))) : I = !1;
        }
        I && (g.set(H, O), s(O, H, o, h, g), g.delete(H)), El(e, c, O);
      }
      function Y0(e, n) {
        var c = e.length;
        if (c)
          return n += n < 0 ? c : 0, H1(n, c) ? e[n] : r;
      }
      function j0(e, n, c) {
        n.length ? n = je(n, function(h) {
          return pe(h) ? function(g) {
            return Z1(g, h.length === 1 ? h[0] : h);
          } : h;
        }) : n = [Pt];
        var o = -1;
        n = je(n, kt(ne()));
        var s = U0(e, function(h, g, z) {
          var H = je(n, function(L) {
            return L(h);
          });
          return { criteria: H, index: ++o, value: h };
        });
        return H5(s, function(h, g) {
          return fo(h, g, c);
        });
      }
      function Qc(e, n) {
        return q0(e, n, function(c, o) {
          return Ql(e, o);
        });
      }
      function q0(e, n, c) {
        for (var o = -1, s = n.length, h = {}; ++o < s; ) {
          var g = n[o], z = Z1(e, g);
          c(z, g) && Xr(h, P1(g, e), z);
        }
        return h;
      }
      function eo(e) {
        return function(n) {
          return Z1(n, e);
        };
      }
      function _l(e, n, c, o) {
        var s = o ? y5 : lr, h = -1, g = n.length, z = e;
        for (e === n && (n = Ot(n)), c && (z = je(e, kt(c))); ++h < g; )
          for (var H = 0, L = n[h], O = c ? c(L) : L; (H = s(z, O, H, o)) > -1; )
            z !== e && Pn.call(z, H, 1), Pn.call(e, H, 1);
        return e;
      }
      function Z0(e, n) {
        for (var c = e ? n.length : 0, o = c - 1; c--; ) {
          var s = n[c];
          if (c == o || s !== h) {
            var h = s;
            H1(s) ? Pn.call(e, s, 1) : Cl(e, s);
          }
        }
        return e;
      }
      function bl(e, n) {
        return e + kn(C0() * (n - e + 1));
      }
      function to(e, n, c, o) {
        for (var s = -1, h = dt(Nn((n - e) / (c || 1)), 0), g = D(h); h--; )
          g[o ? h : ++s] = e, e += c;
        return g;
      }
      function Al(e, n) {
        var c = "";
        if (!e || n < 1 || n > Ge)
          return c;
        do
          n % 2 && (c += e), n = kn(n / 2), n && (e += e);
        while (n);
        return c;
      }
      function ze(e, n) {
        return Gl(_i(e, n, Pt), e + "");
      }
      function ro(e) {
        return B0(pr(e));
      }
      function no(e, n) {
        var c = pr(e);
        return l2(c, q1(n, 0, c.length));
      }
      function Xr(e, n, c, o) {
        if (!Qe(e))
          return e;
        n = P1(n, e);
        for (var s = -1, h = n.length, g = h - 1, z = e; z != null && ++s < h; ) {
          var H = v1(n[s]), L = c;
          if (H === "__proto__" || H === "constructor" || H === "prototype")
            return e;
          if (s != g) {
            var O = z[H];
            L = o ? o(O, H, z) : r, L === r && (L = Qe(O) ? O : H1(n[s + 1]) ? [] : {});
          }
          jr(z, H, L), z = z[H];
        }
        return e;
      }
      var J0 = $n ? function(e, n) {
        return $n.set(e, n), e;
      } : Pt, lo = Vn ? function(e, n) {
        return Vn(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: t3(n),
          writable: !0
        });
      } : Pt;
      function io(e) {
        return l2(pr(e));
      }
      function e1(e, n, c) {
        var o = -1, s = e.length;
        n < 0 && (n = -n > s ? 0 : s + n), c = c > s ? s : c, c < 0 && (c += s), s = n > c ? 0 : c - n >>> 0, n >>>= 0;
        for (var h = D(s); ++o < s; )
          h[o] = e[o + n];
        return h;
      }
      function ao(e, n) {
        var c;
        return R1(e, function(o, s, h) {
          return c = n(o, s, h), !c;
        }), !!c;
      }
      function qn(e, n, c) {
        var o = 0, s = e == null ? o : e.length;
        if (typeof n == "number" && n === n && s <= ae) {
          for (; o < s; ) {
            var h = o + s >>> 1, g = e[h];
            g !== null && !Wt(g) && (c ? g <= n : g < n) ? o = h + 1 : s = h;
          }
          return s;
        }
        return Sl(e, n, Pt, c);
      }
      function Sl(e, n, c, o) {
        var s = 0, h = e == null ? 0 : e.length;
        if (h === 0)
          return 0;
        n = c(n);
        for (var g = n !== n, z = n === null, H = Wt(n), L = n === r; s < h; ) {
          var O = kn((s + h) / 2), I = c(e[O]), Y = I !== r, X = I === null, le = I === I, we = Wt(I);
          if (g)
            var ie = o || le;
          else
            L ? ie = le && (o || Y) : z ? ie = le && Y && (o || !X) : H ? ie = le && Y && !X && (o || !we) : X || we ? ie = !1 : ie = o ? I <= n : I < n;
          ie ? s = O + 1 : h = O;
        }
        return Ft(h, oe);
      }
      function X0(e, n) {
        for (var c = -1, o = e.length, s = 0, h = []; ++c < o; ) {
          var g = e[c], z = n ? n(g) : g;
          if (!c || !s1(z, H)) {
            var H = z;
            h[s++] = g === 0 ? 0 : g;
          }
        }
        return h;
      }
      function Q0(e) {
        return typeof e == "number" ? e : Wt(e) ? P : +e;
      }
      function $t(e) {
        if (typeof e == "string")
          return e;
        if (pe(e))
          return je(e, $t) + "";
        if (Wt(e))
          return D0 ? D0.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ue ? "-0" : n;
      }
      function I1(e, n, c) {
        var o = -1, s = An, h = e.length, g = !0, z = [], H = z;
        if (c)
          g = !1, s = ll;
        else if (h >= u) {
          var L = n ? null : go(e);
          if (L)
            return Cn(L);
          g = !1, s = $r, H = new j1();
        } else
          H = n ? [] : z;
        e:
          for (; ++o < h; ) {
            var O = e[o], I = n ? n(O) : O;
            if (O = c || O !== 0 ? O : 0, g && I === I) {
              for (var Y = H.length; Y--; )
                if (H[Y] === I)
                  continue e;
              n && H.push(I), z.push(O);
            } else
              s(H, I, c) || (H !== z && H.push(I), z.push(O));
          }
        return z;
      }
      function Cl(e, n) {
        return n = P1(n, e), e = bi(e, n), e == null || delete e[v1(t1(n))];
      }
      function ei(e, n, c, o) {
        return Xr(e, n, c(Z1(e, n)), o);
      }
      function Zn(e, n, c, o) {
        for (var s = e.length, h = o ? s : -1; (o ? h-- : ++h < s) && n(e[h], h, e); )
          ;
        return c ? e1(e, o ? 0 : h, o ? h + 1 : s) : e1(e, o ? h + 1 : 0, o ? s : h);
      }
      function ti(e, n) {
        var c = e;
        return c instanceof ye && (c = c.value()), il(n, function(o, s) {
          return s.func.apply(s.thisArg, B1([o], s.args));
        }, c);
      }
      function Dl(e, n, c) {
        var o = e.length;
        if (o < 2)
          return o ? I1(e[0]) : [];
        for (var s = -1, h = D(o); ++s < o; )
          for (var g = e[s], z = -1; ++z < o; )
            z != s && (h[s] = qr(h[s] || g, e[z], n, c));
        return I1(zt(h, 1), n, c);
      }
      function ri(e, n, c) {
        for (var o = -1, s = e.length, h = n.length, g = {}; ++o < s; ) {
          var z = o < h ? n[o] : r;
          c(g, e[o], z);
        }
        return g;
      }
      function Tl(e) {
        return it(e) ? e : [];
      }
      function Bl(e) {
        return typeof e == "function" ? e : Pt;
      }
      function P1(e, n) {
        return pe(e) ? e : $l(e, n) ? [e] : Di(Oe(e));
      }
      var co = ze;
      function V1(e, n, c) {
        var o = e.length;
        return c = c === r ? o : c, !n && c >= o ? e : e1(e, n, c);
      }
      var ni = j5 || function(e) {
        return wt.clearTimeout(e);
      };
      function li(e, n) {
        if (n)
          return e.slice();
        var c = e.length, o = H0 ? H0(c) : new e.constructor(c);
        return e.copy(o), o;
      }
      function Ll(e) {
        var n = new e.constructor(e.byteLength);
        return new Rn(n).set(new Rn(e)), n;
      }
      function oo(e, n) {
        var c = n ? Ll(e.buffer) : e.buffer;
        return new e.constructor(c, e.byteOffset, e.byteLength);
      }
      function so(e) {
        var n = new e.constructor(e.source, Le.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function uo(e) {
        return Yr ? $e(Yr.call(e)) : {};
      }
      function ii(e, n) {
        var c = n ? Ll(e.buffer) : e.buffer;
        return new e.constructor(c, e.byteOffset, e.length);
      }
      function ai(e, n) {
        if (e !== n) {
          var c = e !== r, o = e === null, s = e === e, h = Wt(e), g = n !== r, z = n === null, H = n === n, L = Wt(n);
          if (!z && !L && !h && e > n || h && g && H && !z && !L || o && g && H || !c && H || !s)
            return 1;
          if (!o && !h && !L && e < n || L && c && s && !o && !h || z && c && s || !g && s || !H)
            return -1;
        }
        return 0;
      }
      function fo(e, n, c) {
        for (var o = -1, s = e.criteria, h = n.criteria, g = s.length, z = c.length; ++o < g; ) {
          var H = ai(s[o], h[o]);
          if (H) {
            if (o >= z)
              return H;
            var L = c[o];
            return H * (L == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function ci(e, n, c, o) {
        for (var s = -1, h = e.length, g = c.length, z = -1, H = n.length, L = dt(h - g, 0), O = D(H + L), I = !o; ++z < H; )
          O[z] = n[z];
        for (; ++s < g; )
          (I || s < h) && (O[c[s]] = e[s]);
        for (; L--; )
          O[z++] = e[s++];
        return O;
      }
      function oi(e, n, c, o) {
        for (var s = -1, h = e.length, g = -1, z = c.length, H = -1, L = n.length, O = dt(h - z, 0), I = D(O + L), Y = !o; ++s < O; )
          I[s] = e[s];
        for (var X = s; ++H < L; )
          I[X + H] = n[H];
        for (; ++g < z; )
          (Y || s < h) && (I[X + c[g]] = e[s++]);
        return I;
      }
      function Ot(e, n) {
        var c = -1, o = e.length;
        for (n || (n = D(o)); ++c < o; )
          n[c] = e[c];
        return n;
      }
      function d1(e, n, c, o) {
        var s = !c;
        c || (c = {});
        for (var h = -1, g = n.length; ++h < g; ) {
          var z = n[h], H = o ? o(c[z], e[z], z, c, e) : r;
          H === r && (H = e[z]), s ? M1(c, z, H) : jr(c, z, H);
        }
        return c;
      }
      function ho(e, n) {
        return d1(e, kl(e), n);
      }
      function mo(e, n) {
        return d1(e, xi(e), n);
      }
      function Jn(e, n) {
        return function(c, o) {
          var s = pe(c) ? g5 : Oc, h = n ? n() : {};
          return s(c, e, ne(o, 2), h);
        };
      }
      function hr(e) {
        return ze(function(n, c) {
          var o = -1, s = c.length, h = s > 1 ? c[s - 1] : r, g = s > 2 ? c[2] : r;
          for (h = e.length > 3 && typeof h == "function" ? (s--, h) : r, g && Dt(c[0], c[1], g) && (h = s < 3 ? r : h, s = 1), n = $e(n); ++o < s; ) {
            var z = c[o];
            z && e(n, z, o, h);
          }
          return n;
        });
      }
      function si(e, n) {
        return function(c, o) {
          if (c == null)
            return c;
          if (!Rt(c))
            return e(c, o);
          for (var s = c.length, h = n ? s : -1, g = $e(c); (n ? h-- : ++h < s) && o(g[h], h, g) !== !1; )
            ;
          return c;
        };
      }
      function ui(e) {
        return function(n, c, o) {
          for (var s = -1, h = $e(n), g = o(n), z = g.length; z--; ) {
            var H = g[e ? z : ++s];
            if (c(h[H], H, h) === !1)
              break;
          }
          return n;
        };
      }
      function vo(e, n, c) {
        var o = n & M, s = Qr(e);
        function h() {
          var g = this && this !== wt && this instanceof h ? s : e;
          return g.apply(o ? c : this, arguments);
        }
        return h;
      }
      function fi(e) {
        return function(n) {
          n = Oe(n);
          var c = ir(n) ? c1(n) : r, o = c ? c[0] : n.charAt(0), s = c ? V1(c, 1).join("") : n.slice(1);
          return o[e]() + s;
        };
      }
      function mr(e) {
        return function(n) {
          return il(sa(oa(n).replace(l5, "")), e, "");
        };
      }
      function Qr(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var c = fr(e.prototype), o = e.apply(c, n);
          return Qe(o) ? o : c;
        };
      }
      function po(e, n, c) {
        var o = Qr(e);
        function s() {
          for (var h = arguments.length, g = D(h), z = h, H = dr(s); z--; )
            g[z] = arguments[z];
          var L = h < 3 && g[0] !== H && g[h - 1] !== H ? [] : L1(g, H);
          if (h -= L.length, h < c)
            return pi(
              e,
              n,
              Xn,
              s.placeholder,
              r,
              g,
              L,
              r,
              r,
              c - h
            );
          var O = this && this !== wt && this instanceof s ? o : e;
          return Nt(O, this, g);
        }
        return s;
      }
      function hi(e) {
        return function(n, c, o) {
          var s = $e(n);
          if (!Rt(n)) {
            var h = ne(c, 3);
            n = vt(n), c = function(z) {
              return h(s[z], z, s);
            };
          }
          var g = e(n, c, o);
          return g > -1 ? s[h ? n[g] : g] : r;
        };
      }
      function mi(e) {
        return y1(function(n) {
          var c = n.length, o = c, s = Xt.prototype.thru;
          for (e && n.reverse(); o--; ) {
            var h = n[o];
            if (typeof h != "function")
              throw new Jt(d);
            if (s && !g && r2(h) == "wrapper")
              var g = new Xt([], !0);
          }
          for (o = g ? o : c; ++o < c; ) {
            h = n[o];
            var z = r2(h), H = z == "wrapper" ? Vl(h) : r;
            H && Wl(H[0]) && H[1] == (j | $ | A | Be) && !H[4].length && H[9] == 1 ? g = g[r2(H[0])].apply(g, H[3]) : g = h.length == 1 && Wl(h) ? g[z]() : g.thru(h);
          }
          return function() {
            var L = arguments, O = L[0];
            if (g && L.length == 1 && pe(O))
              return g.plant(O).value();
            for (var I = 0, Y = c ? n[I].apply(this, L) : O; ++I < c; )
              Y = n[I].call(this, Y);
            return Y;
          };
        });
      }
      function Xn(e, n, c, o, s, h, g, z, H, L) {
        var O = n & j, I = n & M, Y = n & B, X = n & ($ | G), le = n & ge, we = Y ? r : Qr(e);
        function ie() {
          for (var Me = arguments.length, _e = D(Me), Ut = Me; Ut--; )
            _e[Ut] = arguments[Ut];
          if (X)
            var Tt = dr(ie), Gt = b5(_e, Tt);
          if (o && (_e = ci(_e, o, s, X)), h && (_e = oi(_e, h, g, X)), Me -= Gt, X && Me < L) {
            var at = L1(_e, Tt);
            return pi(
              e,
              n,
              Xn,
              ie.placeholder,
              c,
              _e,
              at,
              z,
              H,
              L - Me
            );
          }
          var u1 = I ? c : this, A1 = Y ? u1[e] : e;
          return Me = _e.length, z ? _e = Ro(_e, z) : le && Me > 1 && _e.reverse(), O && H < Me && (_e.length = H), this && this !== wt && this instanceof ie && (A1 = we || Qr(A1)), A1.apply(u1, _e);
        }
        return ie;
      }
      function di(e, n) {
        return function(c, o) {
          return Wc(c, e, n(o), {});
        };
      }
      function Qn(e, n) {
        return function(c, o) {
          var s;
          if (c === r && o === r)
            return n;
          if (c !== r && (s = c), o !== r) {
            if (s === r)
              return o;
            typeof c == "string" || typeof o == "string" ? (c = $t(c), o = $t(o)) : (c = Q0(c), o = Q0(o)), s = e(c, o);
          }
          return s;
        };
      }
      function Ol(e) {
        return y1(function(n) {
          return n = je(n, kt(ne())), ze(function(c) {
            var o = this;
            return e(n, function(s) {
              return Nt(s, o, c);
            });
          });
        });
      }
      function e2(e, n) {
        n = n === r ? " " : $t(n);
        var c = n.length;
        if (c < 2)
          return c ? Al(n, e) : n;
        var o = Al(n, Nn(e / ar(n)));
        return ir(n) ? V1(c1(o), 0, e).join("") : o.slice(0, e);
      }
      function Eo(e, n, c, o) {
        var s = n & M, h = Qr(e);
        function g() {
          for (var z = -1, H = arguments.length, L = -1, O = o.length, I = D(O + H), Y = this && this !== wt && this instanceof g ? h : e; ++L < O; )
            I[L] = o[L];
          for (; H--; )
            I[L++] = arguments[++z];
          return Nt(Y, s ? c : this, I);
        }
        return g;
      }
      function vi(e) {
        return function(n, c, o) {
          return o && typeof o != "number" && Dt(n, c, o) && (c = o = r), n = b1(n), c === r ? (c = n, n = 0) : c = b1(c), o = o === r ? n < c ? 1 : -1 : b1(o), to(n, c, o, e);
        };
      }
      function t2(e) {
        return function(n, c) {
          return typeof n == "string" && typeof c == "string" || (n = r1(n), c = r1(c)), e(n, c);
        };
      }
      function pi(e, n, c, o, s, h, g, z, H, L) {
        var O = n & $, I = O ? g : r, Y = O ? r : g, X = O ? h : r, le = O ? r : h;
        n |= O ? A : J, n &= ~(O ? J : A), n & k || (n &= ~(M | B));
        var we = [
          e,
          n,
          s,
          X,
          I,
          le,
          Y,
          z,
          H,
          L
        ], ie = c.apply(r, we);
        return Wl(e) && Ai(ie, we), ie.placeholder = o, Si(ie, e, n);
      }
      function Rl(e) {
        var n = mt[e];
        return function(c, o) {
          if (c = r1(c), o = o == null ? 0 : Ft(Ee(o), 292), o && S0(c)) {
            var s = (Oe(c) + "e").split("e"), h = n(s[0] + "e" + (+s[1] + o));
            return s = (Oe(h) + "e").split("e"), +(s[0] + "e" + (+s[1] - o));
          }
          return n(c);
        };
      }
      var go = sr && 1 / Cn(new sr([, -0]))[1] == Ue ? function(e) {
        return new sr(e);
      } : l3;
      function Ei(e) {
        return function(n) {
          var c = yt(n);
          return c == q ? hl(n) : c == ht ? L5(n) : _5(n, e(n));
        };
      }
      function F1(e, n, c, o, s, h, g, z) {
        var H = n & B;
        if (!H && typeof e != "function")
          throw new Jt(d);
        var L = o ? o.length : 0;
        if (L || (n &= ~(A | J), o = s = r), g = g === r ? g : dt(Ee(g), 0), z = z === r ? z : Ee(z), L -= s ? s.length : 0, n & J) {
          var O = o, I = s;
          o = s = r;
        }
        var Y = H ? r : Vl(e), X = [
          e,
          n,
          c,
          o,
          s,
          O,
          I,
          h,
          g,
          z
        ];
        if (Y && Bo(X, Y), e = X[0], n = X[1], c = X[2], o = X[3], s = X[4], z = X[9] = X[9] === r ? H ? 0 : e.length : dt(X[9] - L, 0), !z && n & ($ | G) && (n &= ~($ | G)), !n || n == M)
          var le = vo(e, n, c);
        else
          n == $ || n == G ? le = po(e, n, z) : (n == A || n == (M | A)) && !s.length ? le = Eo(e, n, c, o) : le = Xn.apply(r, X);
        var we = Y ? J0 : Ai;
        return Si(we(le, X), e, n);
      }
      function gi(e, n, c, o) {
        return e === r || s1(e, or[c]) && !Ne.call(o, c) ? n : e;
      }
      function wi(e, n, c, o, s, h) {
        return Qe(e) && Qe(n) && (h.set(n, e), jn(e, n, r, wi, h), h.delete(n)), e;
      }
      function wo(e) {
        return rn(e) ? r : e;
      }
      function zi(e, n, c, o, s, h) {
        var g = c & R, z = e.length, H = n.length;
        if (z != H && !(g && H > z))
          return !1;
        var L = h.get(e), O = h.get(n);
        if (L && O)
          return L == n && O == e;
        var I = -1, Y = !0, X = c & E ? new j1() : r;
        for (h.set(e, n), h.set(n, e); ++I < z; ) {
          var le = e[I], we = n[I];
          if (o)
            var ie = g ? o(we, le, I, n, e, h) : o(le, we, I, e, n, h);
          if (ie !== r) {
            if (ie)
              continue;
            Y = !1;
            break;
          }
          if (X) {
            if (!al(n, function(Me, _e) {
              if (!$r(X, _e) && (le === Me || s(le, Me, c, o, h)))
                return X.push(_e);
            })) {
              Y = !1;
              break;
            }
          } else if (!(le === we || s(le, we, c, o, h))) {
            Y = !1;
            break;
          }
        }
        return h.delete(e), h.delete(n), Y;
      }
      function zo(e, n, c, o, s, h, g) {
        switch (c) {
          case D1:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case i1:
            return !(e.byteLength != n.byteLength || !h(new Rn(e), new Rn(n)));
          case se:
          case de:
          case ut:
            return s1(+e, +n);
          case Ke:
            return e.name == n.name && e.message == n.message;
          case ft:
          case St:
            return e == n + "";
          case q:
            var z = hl;
          case ht:
            var H = o & R;
            if (z || (z = Cn), e.size != n.size && !H)
              return !1;
            var L = g.get(e);
            if (L)
              return L == n;
            o |= E, g.set(e, n);
            var O = zi(z(e), z(n), o, s, h, g);
            return g.delete(e), O;
          case Mt:
            if (Yr)
              return Yr.call(e) == Yr.call(n);
        }
        return !1;
      }
      function xo(e, n, c, o, s, h) {
        var g = c & R, z = Il(e), H = z.length, L = Il(n), O = L.length;
        if (H != O && !g)
          return !1;
        for (var I = H; I--; ) {
          var Y = z[I];
          if (!(g ? Y in n : Ne.call(n, Y)))
            return !1;
        }
        var X = h.get(e), le = h.get(n);
        if (X && le)
          return X == n && le == e;
        var we = !0;
        h.set(e, n), h.set(n, e);
        for (var ie = g; ++I < H; ) {
          Y = z[I];
          var Me = e[Y], _e = n[Y];
          if (o)
            var Ut = g ? o(_e, Me, Y, n, e, h) : o(Me, _e, Y, e, n, h);
          if (!(Ut === r ? Me === _e || s(Me, _e, c, o, h) : Ut)) {
            we = !1;
            break;
          }
          ie || (ie = Y == "constructor");
        }
        if (we && !ie) {
          var Tt = e.constructor, Gt = n.constructor;
          Tt != Gt && "constructor" in e && "constructor" in n && !(typeof Tt == "function" && Tt instanceof Tt && typeof Gt == "function" && Gt instanceof Gt) && (we = !1);
        }
        return h.delete(e), h.delete(n), we;
      }
      function y1(e) {
        return Gl(_i(e, r, Oi), e + "");
      }
      function Il(e) {
        return N0(e, vt, kl);
      }
      function Pl(e) {
        return N0(e, It, xi);
      }
      var Vl = $n ? function(e) {
        return $n.get(e);
      } : l3;
      function r2(e) {
        for (var n = e.name + "", c = ur[n], o = Ne.call(ur, n) ? c.length : 0; o--; ) {
          var s = c[o], h = s.func;
          if (h == null || h == e)
            return s.name;
        }
        return n;
      }
      function dr(e) {
        var n = Ne.call(f, "placeholder") ? f : e;
        return n.placeholder;
      }
      function ne() {
        var e = f.iteratee || r3;
        return e = e === r3 ? W0 : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function n2(e, n) {
        var c = e.__data__;
        return So(n) ? c[typeof n == "string" ? "string" : "hash"] : c.map;
      }
      function Nl(e) {
        for (var n = vt(e), c = n.length; c--; ) {
          var o = n[c], s = e[o];
          n[c] = [o, s, yi(s)];
        }
        return n;
      }
      function J1(e, n) {
        var c = D5(e, n);
        return $0(c) ? c : r;
      }
      function Mo(e) {
        var n = Ne.call(e, K1), c = e[K1];
        try {
          e[K1] = r;
          var o = !0;
        } catch {
        }
        var s = Ln.call(e);
        return o && (n ? e[K1] = c : delete e[K1]), s;
      }
      var kl = dl ? function(e) {
        return e == null ? [] : (e = $e(e), T1(dl(e), function(n) {
          return b0.call(e, n);
        }));
      } : i3, xi = dl ? function(e) {
        for (var n = []; e; )
          B1(n, kl(e)), e = In(e);
        return n;
      } : i3, yt = Ct;
      (vl && yt(new vl(new ArrayBuffer(1))) != D1 || Ur && yt(new Ur()) != q || pl && yt(pl.resolve()) != pt || sr && yt(new sr()) != ht || Gr && yt(new Gr()) != C1) && (yt = function(e) {
        var n = Ct(e), c = n == He ? e.constructor : r, o = c ? X1(c) : "";
        if (o)
          switch (o) {
            case nc:
              return D1;
            case lc:
              return q;
            case ic:
              return pt;
            case ac:
              return ht;
            case cc:
              return C1;
          }
        return n;
      });
      function Fo(e, n, c) {
        for (var o = -1, s = c.length; ++o < s; ) {
          var h = c[o], g = h.size;
          switch (h.type) {
            case "drop":
              e += g;
              break;
            case "dropRight":
              n -= g;
              break;
            case "take":
              n = Ft(n, e + g);
              break;
            case "takeRight":
              e = dt(e, n - g);
              break;
          }
        }
        return { start: e, end: n };
      }
      function yo(e) {
        var n = e.match(Z2);
        return n ? n[1].split(w) : [];
      }
      function Mi(e, n, c) {
        n = P1(n, e);
        for (var o = -1, s = n.length, h = !1; ++o < s; ) {
          var g = v1(n[o]);
          if (!(h = e != null && c(e, g)))
            break;
          e = e[g];
        }
        return h || ++o != s ? h : (s = e == null ? 0 : e.length, !!s && u2(s) && H1(g, s) && (pe(e) || Q1(e)));
      }
      function Ho(e) {
        var n = e.length, c = new e.constructor(n);
        return n && typeof e[0] == "string" && Ne.call(e, "index") && (c.index = e.index, c.input = e.input), c;
      }
      function Fi(e) {
        return typeof e.constructor == "function" && !en(e) ? fr(In(e)) : {};
      }
      function _o(e, n, c) {
        var o = e.constructor;
        switch (n) {
          case i1:
            return Ll(e);
          case se:
          case de:
            return new o(+e);
          case D1:
            return oo(e, c);
          case er:
          case tr:
          case U1:
          case Tr:
          case Br:
          case Lr:
          case Or:
          case Rr:
          case Ir:
            return ii(e, c);
          case q:
            return new o();
          case ut:
          case St:
            return new o(e);
          case ft:
            return so(e);
          case ht:
            return new o();
          case Mt:
            return uo(e);
        }
      }
      function bo(e, n) {
        var c = n.length;
        if (!c)
          return e;
        var o = c - 1;
        return n[o] = (c > 1 ? "& " : "") + n[o], n = n.join(c > 2 ? ", " : " "), e.replace(q2, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Ao(e) {
        return pe(e) || Q1(e) || !!(A0 && e && e[A0]);
      }
      function H1(e, n) {
        var c = typeof e;
        return n = n ?? Ge, !!n && (c == "number" || c != "symbol" && tt.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Dt(e, n, c) {
        if (!Qe(c))
          return !1;
        var o = typeof n;
        return (o == "number" ? Rt(c) && H1(n, c.length) : o == "string" && n in c) ? s1(c[n], e) : !1;
      }
      function $l(e, n) {
        if (pe(e))
          return !1;
        var c = typeof e;
        return c == "number" || c == "symbol" || c == "boolean" || e == null || Wt(e) ? !0 : yn.test(e) || !Fn.test(e) || n != null && e in $e(n);
      }
      function So(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Wl(e) {
        var n = r2(e), c = f[n];
        if (typeof c != "function" || !(n in ye.prototype))
          return !1;
        if (e === c)
          return !0;
        var o = Vl(c);
        return !!o && e === o[0];
      }
      function Co(e) {
        return !!y0 && y0 in e;
      }
      var Do = Tn ? _1 : a3;
      function en(e) {
        var n = e && e.constructor, c = typeof n == "function" && n.prototype || or;
        return e === c;
      }
      function yi(e) {
        return e === e && !Qe(e);
      }
      function Hi(e, n) {
        return function(c) {
          return c == null ? !1 : c[e] === n && (n !== r || e in $e(c));
        };
      }
      function To(e) {
        var n = o2(e, function(o) {
          return c.size === b && c.clear(), o;
        }), c = n.cache;
        return n;
      }
      function Bo(e, n) {
        var c = e[1], o = n[1], s = c | o, h = s < (M | B | j), g = o == j && c == $ || o == j && c == Be && e[7].length <= n[8] || o == (j | Be) && n[7].length <= n[8] && c == $;
        if (!(h || g))
          return e;
        o & M && (e[2] = n[2], s |= c & M ? 0 : k);
        var z = n[3];
        if (z) {
          var H = e[3];
          e[3] = H ? ci(H, z, n[4]) : z, e[4] = H ? L1(e[3], _) : n[4];
        }
        return z = n[5], z && (H = e[5], e[5] = H ? oi(H, z, n[6]) : z, e[6] = H ? L1(e[5], _) : n[6]), z = n[7], z && (e[7] = z), o & j && (e[8] = e[8] == null ? n[8] : Ft(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = s, e;
      }
      function Lo(e) {
        var n = [];
        if (e != null)
          for (var c in $e(e))
            n.push(c);
        return n;
      }
      function Oo(e) {
        return Ln.call(e);
      }
      function _i(e, n, c) {
        return n = dt(n === r ? e.length - 1 : n, 0), function() {
          for (var o = arguments, s = -1, h = dt(o.length - n, 0), g = D(h); ++s < h; )
            g[s] = o[n + s];
          s = -1;
          for (var z = D(n + 1); ++s < n; )
            z[s] = o[s];
          return z[n] = c(g), Nt(e, this, z);
        };
      }
      function bi(e, n) {
        return n.length < 2 ? e : Z1(e, e1(n, 0, -1));
      }
      function Ro(e, n) {
        for (var c = e.length, o = Ft(n.length, c), s = Ot(e); o--; ) {
          var h = n[o];
          e[o] = H1(h, c) ? s[h] : r;
        }
        return e;
      }
      function Ul(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Ai = Ci(J0), tn = Z5 || function(e, n) {
        return wt.setTimeout(e, n);
      }, Gl = Ci(lo);
      function Si(e, n, c) {
        var o = n + "";
        return Gl(e, bo(o, Io(yo(o), c)));
      }
      function Ci(e) {
        var n = 0, c = 0;
        return function() {
          var o = ec(), s = Ae - (o - c);
          if (c = o, s > 0) {
            if (++n >= ke)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function l2(e, n) {
        var c = -1, o = e.length, s = o - 1;
        for (n = n === r ? o : n; ++c < n; ) {
          var h = bl(c, s), g = e[h];
          e[h] = e[c], e[c] = g;
        }
        return e.length = n, e;
      }
      var Di = To(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Y2, function(c, o, s, h) {
          n.push(s ? h.replace(ce, "$1") : o || c);
        }), n;
      });
      function v1(e) {
        if (typeof e == "string" || Wt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Ue ? "-0" : n;
      }
      function X1(e) {
        if (e != null) {
          try {
            return Bn.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Io(e, n) {
        return Zt(ee, function(c) {
          var o = "_." + c[0];
          n & c[1] && !An(e, o) && e.push(o);
        }), e.sort();
      }
      function Ti(e) {
        if (e instanceof ye)
          return e.clone();
        var n = new Xt(e.__wrapped__, e.__chain__);
        return n.__actions__ = Ot(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function Po(e, n, c) {
        (c ? Dt(e, n, c) : n === r) ? n = 1 : n = dt(Ee(n), 0);
        var o = e == null ? 0 : e.length;
        if (!o || n < 1)
          return [];
        for (var s = 0, h = 0, g = D(Nn(o / n)); s < o; )
          g[h++] = e1(e, s, s += n);
        return g;
      }
      function Vo(e) {
        for (var n = -1, c = e == null ? 0 : e.length, o = 0, s = []; ++n < c; ) {
          var h = e[n];
          h && (s[o++] = h);
        }
        return s;
      }
      function No() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = D(e - 1), c = arguments[0], o = e; o--; )
          n[o - 1] = arguments[o];
        return B1(pe(c) ? Ot(c) : [c], zt(n, 1));
      }
      var ko = ze(function(e, n) {
        return it(e) ? qr(e, zt(n, 1, it, !0)) : [];
      }), $o = ze(function(e, n) {
        var c = t1(n);
        return it(c) && (c = r), it(e) ? qr(e, zt(n, 1, it, !0), ne(c, 2)) : [];
      }), Wo = ze(function(e, n) {
        var c = t1(n);
        return it(c) && (c = r), it(e) ? qr(e, zt(n, 1, it, !0), r, c) : [];
      });
      function Uo(e, n, c) {
        var o = e == null ? 0 : e.length;
        return o ? (n = c || n === r ? 1 : Ee(n), e1(e, n < 0 ? 0 : n, o)) : [];
      }
      function Go(e, n, c) {
        var o = e == null ? 0 : e.length;
        return o ? (n = c || n === r ? 1 : Ee(n), n = o - n, e1(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Ko(e, n) {
        return e && e.length ? Zn(e, ne(n, 3), !0, !0) : [];
      }
      function Yo(e, n) {
        return e && e.length ? Zn(e, ne(n, 3), !0) : [];
      }
      function jo(e, n, c, o) {
        var s = e == null ? 0 : e.length;
        return s ? (c && typeof c != "number" && Dt(e, n, c) && (c = 0, o = s), Vc(e, n, c, o)) : [];
      }
      function Bi(e, n, c) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var s = c == null ? 0 : Ee(c);
        return s < 0 && (s = dt(o + s, 0)), Sn(e, ne(n, 3), s);
      }
      function Li(e, n, c) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var s = o - 1;
        return c !== r && (s = Ee(c), s = c < 0 ? dt(o + s, 0) : Ft(s, o - 1)), Sn(e, ne(n, 3), s, !0);
      }
      function Oi(e) {
        var n = e == null ? 0 : e.length;
        return n ? zt(e, 1) : [];
      }
      function qo(e) {
        var n = e == null ? 0 : e.length;
        return n ? zt(e, Ue) : [];
      }
      function Zo(e, n) {
        var c = e == null ? 0 : e.length;
        return c ? (n = n === r ? 1 : Ee(n), zt(e, n)) : [];
      }
      function Jo(e) {
        for (var n = -1, c = e == null ? 0 : e.length, o = {}; ++n < c; ) {
          var s = e[n];
          o[s[0]] = s[1];
        }
        return o;
      }
      function Ri(e) {
        return e && e.length ? e[0] : r;
      }
      function Xo(e, n, c) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var s = c == null ? 0 : Ee(c);
        return s < 0 && (s = dt(o + s, 0)), lr(e, n, s);
      }
      function Qo(e) {
        var n = e == null ? 0 : e.length;
        return n ? e1(e, 0, -1) : [];
      }
      var es = ze(function(e) {
        var n = je(e, Tl);
        return n.length && n[0] === e[0] ? Ml(n) : [];
      }), ts = ze(function(e) {
        var n = t1(e), c = je(e, Tl);
        return n === t1(c) ? n = r : c.pop(), c.length && c[0] === e[0] ? Ml(c, ne(n, 2)) : [];
      }), rs = ze(function(e) {
        var n = t1(e), c = je(e, Tl);
        return n = typeof n == "function" ? n : r, n && c.pop(), c.length && c[0] === e[0] ? Ml(c, r, n) : [];
      });
      function ns(e, n) {
        return e == null ? "" : X5.call(e, n);
      }
      function t1(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function ls(e, n, c) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var s = o;
        return c !== r && (s = Ee(c), s = s < 0 ? dt(o + s, 0) : Ft(s, o - 1)), n === n ? R5(e, n, s) : Sn(e, p0, s, !0);
      }
      function is(e, n) {
        return e && e.length ? Y0(e, Ee(n)) : r;
      }
      var as = ze(Ii);
      function Ii(e, n) {
        return e && e.length && n && n.length ? _l(e, n) : e;
      }
      function cs(e, n, c) {
        return e && e.length && n && n.length ? _l(e, n, ne(c, 2)) : e;
      }
      function os(e, n, c) {
        return e && e.length && n && n.length ? _l(e, n, r, c) : e;
      }
      var ss = y1(function(e, n) {
        var c = e == null ? 0 : e.length, o = gl(e, n);
        return Z0(e, je(n, function(s) {
          return H1(s, c) ? +s : s;
        }).sort(ai)), o;
      });
      function us(e, n) {
        var c = [];
        if (!(e && e.length))
          return c;
        var o = -1, s = [], h = e.length;
        for (n = ne(n, 3); ++o < h; ) {
          var g = e[o];
          n(g, o, e) && (c.push(g), s.push(o));
        }
        return Z0(e, s), c;
      }
      function Kl(e) {
        return e == null ? e : rc.call(e);
      }
      function fs(e, n, c) {
        var o = e == null ? 0 : e.length;
        return o ? (c && typeof c != "number" && Dt(e, n, c) ? (n = 0, c = o) : (n = n == null ? 0 : Ee(n), c = c === r ? o : Ee(c)), e1(e, n, c)) : [];
      }
      function hs(e, n) {
        return qn(e, n);
      }
      function ms(e, n, c) {
        return Sl(e, n, ne(c, 2));
      }
      function ds(e, n) {
        var c = e == null ? 0 : e.length;
        if (c) {
          var o = qn(e, n);
          if (o < c && s1(e[o], n))
            return o;
        }
        return -1;
      }
      function vs(e, n) {
        return qn(e, n, !0);
      }
      function ps(e, n, c) {
        return Sl(e, n, ne(c, 2), !0);
      }
      function Es(e, n) {
        var c = e == null ? 0 : e.length;
        if (c) {
          var o = qn(e, n, !0) - 1;
          if (s1(e[o], n))
            return o;
        }
        return -1;
      }
      function gs(e) {
        return e && e.length ? X0(e) : [];
      }
      function ws(e, n) {
        return e && e.length ? X0(e, ne(n, 2)) : [];
      }
      function zs(e) {
        var n = e == null ? 0 : e.length;
        return n ? e1(e, 1, n) : [];
      }
      function xs(e, n, c) {
        return e && e.length ? (n = c || n === r ? 1 : Ee(n), e1(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Ms(e, n, c) {
        var o = e == null ? 0 : e.length;
        return o ? (n = c || n === r ? 1 : Ee(n), n = o - n, e1(e, n < 0 ? 0 : n, o)) : [];
      }
      function Fs(e, n) {
        return e && e.length ? Zn(e, ne(n, 3), !1, !0) : [];
      }
      function ys(e, n) {
        return e && e.length ? Zn(e, ne(n, 3)) : [];
      }
      var Hs = ze(function(e) {
        return I1(zt(e, 1, it, !0));
      }), _s = ze(function(e) {
        var n = t1(e);
        return it(n) && (n = r), I1(zt(e, 1, it, !0), ne(n, 2));
      }), bs = ze(function(e) {
        var n = t1(e);
        return n = typeof n == "function" ? n : r, I1(zt(e, 1, it, !0), r, n);
      });
      function As(e) {
        return e && e.length ? I1(e) : [];
      }
      function Ss(e, n) {
        return e && e.length ? I1(e, ne(n, 2)) : [];
      }
      function Cs(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? I1(e, r, n) : [];
      }
      function Yl(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = T1(e, function(c) {
          if (it(c))
            return n = dt(c.length, n), !0;
        }), ul(n, function(c) {
          return je(e, cl(c));
        });
      }
      function Pi(e, n) {
        if (!(e && e.length))
          return [];
        var c = Yl(e);
        return n == null ? c : je(c, function(o) {
          return Nt(n, r, o);
        });
      }
      var Ds = ze(function(e, n) {
        return it(e) ? qr(e, n) : [];
      }), Ts = ze(function(e) {
        return Dl(T1(e, it));
      }), Bs = ze(function(e) {
        var n = t1(e);
        return it(n) && (n = r), Dl(T1(e, it), ne(n, 2));
      }), Ls = ze(function(e) {
        var n = t1(e);
        return n = typeof n == "function" ? n : r, Dl(T1(e, it), r, n);
      }), Os = ze(Yl);
      function Rs(e, n) {
        return ri(e || [], n || [], jr);
      }
      function Is(e, n) {
        return ri(e || [], n || [], Xr);
      }
      var Ps = ze(function(e) {
        var n = e.length, c = n > 1 ? e[n - 1] : r;
        return c = typeof c == "function" ? (e.pop(), c) : r, Pi(e, c);
      });
      function Vi(e) {
        var n = f(e);
        return n.__chain__ = !0, n;
      }
      function Vs(e, n) {
        return n(e), e;
      }
      function i2(e, n) {
        return n(e);
      }
      var Ns = y1(function(e) {
        var n = e.length, c = n ? e[0] : 0, o = this.__wrapped__, s = function(h) {
          return gl(h, e);
        };
        return n > 1 || this.__actions__.length || !(o instanceof ye) || !H1(c) ? this.thru(s) : (o = o.slice(c, +c + (n ? 1 : 0)), o.__actions__.push({
          func: i2,
          args: [s],
          thisArg: r
        }), new Xt(o, this.__chain__).thru(function(h) {
          return n && !h.length && h.push(r), h;
        }));
      });
      function ks() {
        return Vi(this);
      }
      function $s() {
        return new Xt(this.value(), this.__chain__);
      }
      function Ws() {
        this.__values__ === r && (this.__values__ = Qi(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function Us() {
        return this;
      }
      function Gs(e) {
        for (var n, c = this; c instanceof Un; ) {
          var o = Ti(c);
          o.__index__ = 0, o.__values__ = r, n ? s.__wrapped__ = o : n = o;
          var s = o;
          c = c.__wrapped__;
        }
        return s.__wrapped__ = e, n;
      }
      function Ks() {
        var e = this.__wrapped__;
        if (e instanceof ye) {
          var n = e;
          return this.__actions__.length && (n = new ye(this)), n = n.reverse(), n.__actions__.push({
            func: i2,
            args: [Kl],
            thisArg: r
          }), new Xt(n, this.__chain__);
        }
        return this.thru(Kl);
      }
      function Ys() {
        return ti(this.__wrapped__, this.__actions__);
      }
      var js = Jn(function(e, n, c) {
        Ne.call(e, c) ? ++e[c] : M1(e, c, 1);
      });
      function qs(e, n, c) {
        var o = pe(e) ? d0 : Pc;
        return c && Dt(e, n, c) && (n = r), o(e, ne(n, 3));
      }
      function Zs(e, n) {
        var c = pe(e) ? T1 : P0;
        return c(e, ne(n, 3));
      }
      var Js = hi(Bi), Xs = hi(Li);
      function Qs(e, n) {
        return zt(a2(e, n), 1);
      }
      function e6(e, n) {
        return zt(a2(e, n), Ue);
      }
      function t6(e, n, c) {
        return c = c === r ? 1 : Ee(c), zt(a2(e, n), c);
      }
      function Ni(e, n) {
        var c = pe(e) ? Zt : R1;
        return c(e, ne(n, 3));
      }
      function ki(e, n) {
        var c = pe(e) ? w5 : I0;
        return c(e, ne(n, 3));
      }
      var r6 = Jn(function(e, n, c) {
        Ne.call(e, c) ? e[c].push(n) : M1(e, c, [n]);
      });
      function n6(e, n, c, o) {
        e = Rt(e) ? e : pr(e), c = c && !o ? Ee(c) : 0;
        var s = e.length;
        return c < 0 && (c = dt(s + c, 0)), f2(e) ? c <= s && e.indexOf(n, c) > -1 : !!s && lr(e, n, c) > -1;
      }
      var l6 = ze(function(e, n, c) {
        var o = -1, s = typeof n == "function", h = Rt(e) ? D(e.length) : [];
        return R1(e, function(g) {
          h[++o] = s ? Nt(n, g, c) : Zr(g, n, c);
        }), h;
      }), i6 = Jn(function(e, n, c) {
        M1(e, c, n);
      });
      function a2(e, n) {
        var c = pe(e) ? je : U0;
        return c(e, ne(n, 3));
      }
      function a6(e, n, c, o) {
        return e == null ? [] : (pe(n) || (n = n == null ? [] : [n]), c = o ? r : c, pe(c) || (c = c == null ? [] : [c]), j0(e, n, c));
      }
      var c6 = Jn(function(e, n, c) {
        e[c ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function o6(e, n, c) {
        var o = pe(e) ? il : g0, s = arguments.length < 3;
        return o(e, ne(n, 4), c, s, R1);
      }
      function s6(e, n, c) {
        var o = pe(e) ? z5 : g0, s = arguments.length < 3;
        return o(e, ne(n, 4), c, s, I0);
      }
      function u6(e, n) {
        var c = pe(e) ? T1 : P0;
        return c(e, s2(ne(n, 3)));
      }
      function f6(e) {
        var n = pe(e) ? B0 : ro;
        return n(e);
      }
      function h6(e, n, c) {
        (c ? Dt(e, n, c) : n === r) ? n = 1 : n = Ee(n);
        var o = pe(e) ? Bc : no;
        return o(e, n);
      }
      function m6(e) {
        var n = pe(e) ? Lc : io;
        return n(e);
      }
      function d6(e) {
        if (e == null)
          return 0;
        if (Rt(e))
          return f2(e) ? ar(e) : e.length;
        var n = yt(e);
        return n == q || n == ht ? e.size : yl(e).length;
      }
      function v6(e, n, c) {
        var o = pe(e) ? al : ao;
        return c && Dt(e, n, c) && (n = r), o(e, ne(n, 3));
      }
      var p6 = ze(function(e, n) {
        if (e == null)
          return [];
        var c = n.length;
        return c > 1 && Dt(e, n[0], n[1]) ? n = [] : c > 2 && Dt(n[0], n[1], n[2]) && (n = [n[0]]), j0(e, zt(n, 1), []);
      }), c2 = q5 || function() {
        return wt.Date.now();
      };
      function E6(e, n) {
        if (typeof n != "function")
          throw new Jt(d);
        return e = Ee(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function $i(e, n, c) {
        return n = c ? r : n, n = e && n == null ? e.length : n, F1(e, j, r, r, r, r, n);
      }
      function Wi(e, n) {
        var c;
        if (typeof n != "function")
          throw new Jt(d);
        return e = Ee(e), function() {
          return --e > 0 && (c = n.apply(this, arguments)), e <= 1 && (n = r), c;
        };
      }
      var jl = ze(function(e, n, c) {
        var o = M;
        if (c.length) {
          var s = L1(c, dr(jl));
          o |= A;
        }
        return F1(e, o, n, c, s);
      }), Ui = ze(function(e, n, c) {
        var o = M | B;
        if (c.length) {
          var s = L1(c, dr(Ui));
          o |= A;
        }
        return F1(n, o, e, c, s);
      });
      function Gi(e, n, c) {
        n = c ? r : n;
        var o = F1(e, $, r, r, r, r, r, n);
        return o.placeholder = Gi.placeholder, o;
      }
      function Ki(e, n, c) {
        n = c ? r : n;
        var o = F1(e, G, r, r, r, r, r, n);
        return o.placeholder = Ki.placeholder, o;
      }
      function Yi(e, n, c) {
        var o, s, h, g, z, H, L = 0, O = !1, I = !1, Y = !0;
        if (typeof e != "function")
          throw new Jt(d);
        n = r1(n) || 0, Qe(c) && (O = !!c.leading, I = "maxWait" in c, h = I ? dt(r1(c.maxWait) || 0, n) : h, Y = "trailing" in c ? !!c.trailing : Y);
        function X(at) {
          var u1 = o, A1 = s;
          return o = s = r, L = at, g = e.apply(A1, u1), g;
        }
        function le(at) {
          return L = at, z = tn(Me, n), O ? X(at) : g;
        }
        function we(at) {
          var u1 = at - H, A1 = at - L, ha = n - u1;
          return I ? Ft(ha, h - A1) : ha;
        }
        function ie(at) {
          var u1 = at - H, A1 = at - L;
          return H === r || u1 >= n || u1 < 0 || I && A1 >= h;
        }
        function Me() {
          var at = c2();
          if (ie(at))
            return _e(at);
          z = tn(Me, we(at));
        }
        function _e(at) {
          return z = r, Y && o ? X(at) : (o = s = r, g);
        }
        function Ut() {
          z !== r && ni(z), L = 0, o = H = s = z = r;
        }
        function Tt() {
          return z === r ? g : _e(c2());
        }
        function Gt() {
          var at = c2(), u1 = ie(at);
          if (o = arguments, s = this, H = at, u1) {
            if (z === r)
              return le(H);
            if (I)
              return ni(z), z = tn(Me, n), X(H);
          }
          return z === r && (z = tn(Me, n)), g;
        }
        return Gt.cancel = Ut, Gt.flush = Tt, Gt;
      }
      var g6 = ze(function(e, n) {
        return R0(e, 1, n);
      }), w6 = ze(function(e, n, c) {
        return R0(e, r1(n) || 0, c);
      });
      function z6(e) {
        return F1(e, ge);
      }
      function o2(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Jt(d);
        var c = function() {
          var o = arguments, s = n ? n.apply(this, o) : o[0], h = c.cache;
          if (h.has(s))
            return h.get(s);
          var g = e.apply(this, o);
          return c.cache = h.set(s, g) || h, g;
        };
        return c.cache = new (o2.Cache || x1)(), c;
      }
      o2.Cache = x1;
      function s2(e) {
        if (typeof e != "function")
          throw new Jt(d);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function x6(e) {
        return Wi(2, e);
      }
      var M6 = co(function(e, n) {
        n = n.length == 1 && pe(n[0]) ? je(n[0], kt(ne())) : je(zt(n, 1), kt(ne()));
        var c = n.length;
        return ze(function(o) {
          for (var s = -1, h = Ft(o.length, c); ++s < h; )
            o[s] = n[s].call(this, o[s]);
          return Nt(e, this, o);
        });
      }), ql = ze(function(e, n) {
        var c = L1(n, dr(ql));
        return F1(e, A, r, n, c);
      }), ji = ze(function(e, n) {
        var c = L1(n, dr(ji));
        return F1(e, J, r, n, c);
      }), F6 = y1(function(e, n) {
        return F1(e, Be, r, r, r, n);
      });
      function y6(e, n) {
        if (typeof e != "function")
          throw new Jt(d);
        return n = n === r ? n : Ee(n), ze(e, n);
      }
      function H6(e, n) {
        if (typeof e != "function")
          throw new Jt(d);
        return n = n == null ? 0 : dt(Ee(n), 0), ze(function(c) {
          var o = c[n], s = V1(c, 0, n);
          return o && B1(s, o), Nt(e, this, s);
        });
      }
      function _6(e, n, c) {
        var o = !0, s = !0;
        if (typeof e != "function")
          throw new Jt(d);
        return Qe(c) && (o = "leading" in c ? !!c.leading : o, s = "trailing" in c ? !!c.trailing : s), Yi(e, n, {
          leading: o,
          maxWait: n,
          trailing: s
        });
      }
      function b6(e) {
        return $i(e, 1);
      }
      function A6(e, n) {
        return ql(Bl(n), e);
      }
      function S6() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return pe(e) ? e : [e];
      }
      function C6(e) {
        return Qt(e, V);
      }
      function D6(e, n) {
        return n = typeof n == "function" ? n : r, Qt(e, V, n);
      }
      function T6(e) {
        return Qt(e, C | V);
      }
      function B6(e, n) {
        return n = typeof n == "function" ? n : r, Qt(e, C | V, n);
      }
      function L6(e, n) {
        return n == null || O0(e, n, vt(n));
      }
      function s1(e, n) {
        return e === n || e !== e && n !== n;
      }
      var O6 = t2(xl), R6 = t2(function(e, n) {
        return e >= n;
      }), Q1 = k0(/* @__PURE__ */ function() {
        return arguments;
      }()) ? k0 : function(e) {
        return rt(e) && Ne.call(e, "callee") && !b0.call(e, "callee");
      }, pe = D.isArray, I6 = o0 ? kt(o0) : Uc;
      function Rt(e) {
        return e != null && u2(e.length) && !_1(e);
      }
      function it(e) {
        return rt(e) && Rt(e);
      }
      function P6(e) {
        return e === !0 || e === !1 || rt(e) && Ct(e) == se;
      }
      var N1 = J5 || a3, V6 = s0 ? kt(s0) : Gc;
      function N6(e) {
        return rt(e) && e.nodeType === 1 && !rn(e);
      }
      function k6(e) {
        if (e == null)
          return !0;
        if (Rt(e) && (pe(e) || typeof e == "string" || typeof e.splice == "function" || N1(e) || vr(e) || Q1(e)))
          return !e.length;
        var n = yt(e);
        if (n == q || n == ht)
          return !e.size;
        if (en(e))
          return !yl(e).length;
        for (var c in e)
          if (Ne.call(e, c))
            return !1;
        return !0;
      }
      function $6(e, n) {
        return Jr(e, n);
      }
      function W6(e, n, c) {
        c = typeof c == "function" ? c : r;
        var o = c ? c(e, n) : r;
        return o === r ? Jr(e, n, r, c) : !!o;
      }
      function Zl(e) {
        if (!rt(e))
          return !1;
        var n = Ct(e);
        return n == Ke || n == ve || typeof e.message == "string" && typeof e.name == "string" && !rn(e);
      }
      function U6(e) {
        return typeof e == "number" && S0(e);
      }
      function _1(e) {
        if (!Qe(e))
          return !1;
        var n = Ct(e);
        return n == U || n == st || n == fe || n == Et;
      }
      function qi(e) {
        return typeof e == "number" && e == Ee(e);
      }
      function u2(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ge;
      }
      function Qe(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function rt(e) {
        return e != null && typeof e == "object";
      }
      var Zi = u0 ? kt(u0) : Yc;
      function G6(e, n) {
        return e === n || Fl(e, n, Nl(n));
      }
      function K6(e, n, c) {
        return c = typeof c == "function" ? c : r, Fl(e, n, Nl(n), c);
      }
      function Y6(e) {
        return Ji(e) && e != +e;
      }
      function j6(e) {
        if (Do(e))
          throw new me(m);
        return $0(e);
      }
      function q6(e) {
        return e === null;
      }
      function Z6(e) {
        return e == null;
      }
      function Ji(e) {
        return typeof e == "number" || rt(e) && Ct(e) == ut;
      }
      function rn(e) {
        if (!rt(e) || Ct(e) != He)
          return !1;
        var n = In(e);
        if (n === null)
          return !0;
        var c = Ne.call(n, "constructor") && n.constructor;
        return typeof c == "function" && c instanceof c && Bn.call(c) == G5;
      }
      var Jl = f0 ? kt(f0) : jc;
      function J6(e) {
        return qi(e) && e >= -Ge && e <= Ge;
      }
      var Xi = h0 ? kt(h0) : qc;
      function f2(e) {
        return typeof e == "string" || !pe(e) && rt(e) && Ct(e) == St;
      }
      function Wt(e) {
        return typeof e == "symbol" || rt(e) && Ct(e) == Mt;
      }
      var vr = m0 ? kt(m0) : Zc;
      function X6(e) {
        return e === r;
      }
      function Q6(e) {
        return rt(e) && yt(e) == C1;
      }
      function e7(e) {
        return rt(e) && Ct(e) == gn;
      }
      var t7 = t2(Hl), r7 = t2(function(e, n) {
        return e <= n;
      });
      function Qi(e) {
        if (!e)
          return [];
        if (Rt(e))
          return f2(e) ? c1(e) : Ot(e);
        if (Wr && e[Wr])
          return B5(e[Wr]());
        var n = yt(e), c = n == q ? hl : n == ht ? Cn : pr;
        return c(e);
      }
      function b1(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = r1(e), e === Ue || e === -Ue) {
          var n = e < 0 ? -1 : 1;
          return n * At;
        }
        return e === e ? e : 0;
      }
      function Ee(e) {
        var n = b1(e), c = n % 1;
        return n === n ? c ? n - c : n : 0;
      }
      function ea(e) {
        return e ? q1(Ee(e), 0, W) : 0;
      }
      function r1(e) {
        if (typeof e == "number")
          return e;
        if (Wt(e))
          return P;
        if (Qe(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Qe(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = w0(e);
        var c = xe.test(e);
        return c || Xe.test(e) ? p5(e.slice(2), c ? 2 : 8) : Fe.test(e) ? P : +e;
      }
      function ta(e) {
        return d1(e, It(e));
      }
      function n7(e) {
        return e ? q1(Ee(e), -Ge, Ge) : e === 0 ? e : 0;
      }
      function Oe(e) {
        return e == null ? "" : $t(e);
      }
      var l7 = hr(function(e, n) {
        if (en(n) || Rt(n)) {
          d1(n, vt(n), e);
          return;
        }
        for (var c in n)
          Ne.call(n, c) && jr(e, c, n[c]);
      }), ra = hr(function(e, n) {
        d1(n, It(n), e);
      }), h2 = hr(function(e, n, c, o) {
        d1(n, It(n), e, o);
      }), i7 = hr(function(e, n, c, o) {
        d1(n, vt(n), e, o);
      }), a7 = y1(gl);
      function c7(e, n) {
        var c = fr(e);
        return n == null ? c : L0(c, n);
      }
      var o7 = ze(function(e, n) {
        e = $e(e);
        var c = -1, o = n.length, s = o > 2 ? n[2] : r;
        for (s && Dt(n[0], n[1], s) && (o = 1); ++c < o; )
          for (var h = n[c], g = It(h), z = -1, H = g.length; ++z < H; ) {
            var L = g[z], O = e[L];
            (O === r || s1(O, or[L]) && !Ne.call(e, L)) && (e[L] = h[L]);
          }
        return e;
      }), s7 = ze(function(e) {
        return e.push(r, wi), Nt(na, r, e);
      });
      function u7(e, n) {
        return v0(e, ne(n, 3), m1);
      }
      function f7(e, n) {
        return v0(e, ne(n, 3), zl);
      }
      function h7(e, n) {
        return e == null ? e : wl(e, ne(n, 3), It);
      }
      function m7(e, n) {
        return e == null ? e : V0(e, ne(n, 3), It);
      }
      function d7(e, n) {
        return e && m1(e, ne(n, 3));
      }
      function v7(e, n) {
        return e && zl(e, ne(n, 3));
      }
      function p7(e) {
        return e == null ? [] : Yn(e, vt(e));
      }
      function E7(e) {
        return e == null ? [] : Yn(e, It(e));
      }
      function Xl(e, n, c) {
        var o = e == null ? r : Z1(e, n);
        return o === r ? c : o;
      }
      function g7(e, n) {
        return e != null && Mi(e, n, Nc);
      }
      function Ql(e, n) {
        return e != null && Mi(e, n, kc);
      }
      var w7 = di(function(e, n, c) {
        n != null && typeof n.toString != "function" && (n = Ln.call(n)), e[n] = c;
      }, t3(Pt)), z7 = di(function(e, n, c) {
        n != null && typeof n.toString != "function" && (n = Ln.call(n)), Ne.call(e, n) ? e[n].push(c) : e[n] = [c];
      }, ne), x7 = ze(Zr);
      function vt(e) {
        return Rt(e) ? T0(e) : yl(e);
      }
      function It(e) {
        return Rt(e) ? T0(e, !0) : Jc(e);
      }
      function M7(e, n) {
        var c = {};
        return n = ne(n, 3), m1(e, function(o, s, h) {
          M1(c, n(o, s, h), o);
        }), c;
      }
      function F7(e, n) {
        var c = {};
        return n = ne(n, 3), m1(e, function(o, s, h) {
          M1(c, s, n(o, s, h));
        }), c;
      }
      var y7 = hr(function(e, n, c) {
        jn(e, n, c);
      }), na = hr(function(e, n, c, o) {
        jn(e, n, c, o);
      }), H7 = y1(function(e, n) {
        var c = {};
        if (e == null)
          return c;
        var o = !1;
        n = je(n, function(h) {
          return h = P1(h, e), o || (o = h.length > 1), h;
        }), d1(e, Pl(e), c), o && (c = Qt(c, C | S | V, wo));
        for (var s = n.length; s--; )
          Cl(c, n[s]);
        return c;
      });
      function _7(e, n) {
        return la(e, s2(ne(n)));
      }
      var b7 = y1(function(e, n) {
        return e == null ? {} : Qc(e, n);
      });
      function la(e, n) {
        if (e == null)
          return {};
        var c = je(Pl(e), function(o) {
          return [o];
        });
        return n = ne(n), q0(e, c, function(o, s) {
          return n(o, s[0]);
        });
      }
      function A7(e, n, c) {
        n = P1(n, e);
        var o = -1, s = n.length;
        for (s || (s = 1, e = r); ++o < s; ) {
          var h = e == null ? r : e[v1(n[o])];
          h === r && (o = s, h = c), e = _1(h) ? h.call(e) : h;
        }
        return e;
      }
      function S7(e, n, c) {
        return e == null ? e : Xr(e, n, c);
      }
      function C7(e, n, c, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : Xr(e, n, c, o);
      }
      var ia = Ei(vt), aa = Ei(It);
      function D7(e, n, c) {
        var o = pe(e), s = o || N1(e) || vr(e);
        if (n = ne(n, 4), c == null) {
          var h = e && e.constructor;
          s ? c = o ? new h() : [] : Qe(e) ? c = _1(h) ? fr(In(e)) : {} : c = {};
        }
        return (s ? Zt : m1)(e, function(g, z, H) {
          return n(c, g, z, H);
        }), c;
      }
      function T7(e, n) {
        return e == null ? !0 : Cl(e, n);
      }
      function B7(e, n, c) {
        return e == null ? e : ei(e, n, Bl(c));
      }
      function L7(e, n, c, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : ei(e, n, Bl(c), o);
      }
      function pr(e) {
        return e == null ? [] : fl(e, vt(e));
      }
      function O7(e) {
        return e == null ? [] : fl(e, It(e));
      }
      function R7(e, n, c) {
        return c === r && (c = n, n = r), c !== r && (c = r1(c), c = c === c ? c : 0), n !== r && (n = r1(n), n = n === n ? n : 0), q1(r1(e), n, c);
      }
      function I7(e, n, c) {
        return n = b1(n), c === r ? (c = n, n = 0) : c = b1(c), e = r1(e), $c(e, n, c);
      }
      function P7(e, n, c) {
        if (c && typeof c != "boolean" && Dt(e, n, c) && (n = c = r), c === r && (typeof n == "boolean" ? (c = n, n = r) : typeof e == "boolean" && (c = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = b1(e), n === r ? (n = e, e = 0) : n = b1(n)), e > n) {
          var o = e;
          e = n, n = o;
        }
        if (c || e % 1 || n % 1) {
          var s = C0();
          return Ft(e + s * (n - e + v5("1e-" + ((s + "").length - 1))), n);
        }
        return bl(e, n);
      }
      var V7 = mr(function(e, n, c) {
        return n = n.toLowerCase(), e + (c ? ca(n) : n);
      });
      function ca(e) {
        return e3(Oe(e).toLowerCase());
      }
      function oa(e) {
        return e = Oe(e), e && e.replace(Bt, A5).replace(i5, "");
      }
      function N7(e, n, c) {
        e = Oe(e), n = $t(n);
        var o = e.length;
        c = c === r ? o : q1(Ee(c), 0, o);
        var s = c;
        return c -= n.length, c >= 0 && e.slice(c, s) == n;
      }
      function k7(e) {
        return e = Oe(e), e && zn.test(e) ? e.replace(rr, S5) : e;
      }
      function $7(e) {
        return e = Oe(e), e && Hn.test(e) ? e.replace(Nr, "\\$&") : e;
      }
      var W7 = mr(function(e, n, c) {
        return e + (c ? "-" : "") + n.toLowerCase();
      }), U7 = mr(function(e, n, c) {
        return e + (c ? " " : "") + n.toLowerCase();
      }), G7 = fi("toLowerCase");
      function K7(e, n, c) {
        e = Oe(e), n = Ee(n);
        var o = n ? ar(e) : 0;
        if (!n || o >= n)
          return e;
        var s = (n - o) / 2;
        return e2(kn(s), c) + e + e2(Nn(s), c);
      }
      function Y7(e, n, c) {
        e = Oe(e), n = Ee(n);
        var o = n ? ar(e) : 0;
        return n && o < n ? e + e2(n - o, c) : e;
      }
      function j7(e, n, c) {
        e = Oe(e), n = Ee(n);
        var o = n ? ar(e) : 0;
        return n && o < n ? e2(n - o, c) + e : e;
      }
      function q7(e, n, c) {
        return c || n == null ? n = 0 : n && (n = +n), tc(Oe(e).replace(kr, ""), n || 0);
      }
      function Z7(e, n, c) {
        return (c ? Dt(e, n, c) : n === r) ? n = 1 : n = Ee(n), Al(Oe(e), n);
      }
      function J7() {
        var e = arguments, n = Oe(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var X7 = mr(function(e, n, c) {
        return e + (c ? "_" : "") + n.toLowerCase();
      });
      function Q7(e, n, c) {
        return c && typeof c != "number" && Dt(e, n, c) && (n = c = r), c = c === r ? W : c >>> 0, c ? (e = Oe(e), e && (typeof n == "string" || n != null && !Jl(n)) && (n = $t(n), !n && ir(e)) ? V1(c1(e), 0, c) : e.split(n, c)) : [];
      }
      var e8 = mr(function(e, n, c) {
        return e + (c ? " " : "") + e3(n);
      });
      function t8(e, n, c) {
        return e = Oe(e), c = c == null ? 0 : q1(Ee(c), 0, e.length), n = $t(n), e.slice(c, c + n.length) == n;
      }
      function r8(e, n, c) {
        var o = f.templateSettings;
        c && Dt(e, n, c) && (n = r), e = Oe(e), n = h2({}, n, o, gi);
        var s = h2({}, n.imports, o.imports, gi), h = vt(s), g = fl(s, h), z, H, L = 0, O = n.interpolate || a1, I = "__p += '", Y = ml(
          (n.escape || a1).source + "|" + O.source + "|" + (O === Mn ? be : a1).source + "|" + (n.evaluate || a1).source + "|$",
          "g"
        ), X = "//# sourceURL=" + (Ne.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++u5 + "]") + `
`;
        e.replace(Y, function(ie, Me, _e, Ut, Tt, Gt) {
          return _e || (_e = Ut), I += e.slice(L, Gt).replace(_n, C5), Me && (z = !0, I += `' +
__e(` + Me + `) +
'`), Tt && (H = !0, I += `';
` + Tt + `;
__p += '`), _e && (I += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), L = Gt + ie.length, ie;
        }), I += `';
`;
        var le = Ne.call(n, "variable") && n.variable;
        if (!le)
          I = `with (obj) {
` + I + `
}
`;
        else if (K.test(le))
          throw new me(x);
        I = (H ? I.replace(G2, "") : I).replace(Pr, "$1").replace(wn, "$1;"), I = "function(" + (le || "obj") + `) {
` + (le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (z ? ", __e = _.escape" : "") + (H ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + I + `return __p
}`;
        var we = ua(function() {
          return Ce(h, X + "return " + I).apply(r, g);
        });
        if (we.source = I, Zl(we))
          throw we;
        return we;
      }
      function n8(e) {
        return Oe(e).toLowerCase();
      }
      function l8(e) {
        return Oe(e).toUpperCase();
      }
      function i8(e, n, c) {
        if (e = Oe(e), e && (c || n === r))
          return w0(e);
        if (!e || !(n = $t(n)))
          return e;
        var o = c1(e), s = c1(n), h = z0(o, s), g = x0(o, s) + 1;
        return V1(o, h, g).join("");
      }
      function a8(e, n, c) {
        if (e = Oe(e), e && (c || n === r))
          return e.slice(0, F0(e) + 1);
        if (!e || !(n = $t(n)))
          return e;
        var o = c1(e), s = x0(o, c1(n)) + 1;
        return V1(o, 0, s).join("");
      }
      function c8(e, n, c) {
        if (e = Oe(e), e && (c || n === r))
          return e.replace(kr, "");
        if (!e || !(n = $t(n)))
          return e;
        var o = c1(e), s = z0(o, c1(n));
        return V1(o, s).join("");
      }
      function o8(e, n) {
        var c = Q, o = he;
        if (Qe(n)) {
          var s = "separator" in n ? n.separator : s;
          c = "length" in n ? Ee(n.length) : c, o = "omission" in n ? $t(n.omission) : o;
        }
        e = Oe(e);
        var h = e.length;
        if (ir(e)) {
          var g = c1(e);
          h = g.length;
        }
        if (c >= h)
          return e;
        var z = c - ar(o);
        if (z < 1)
          return o;
        var H = g ? V1(g, 0, z).join("") : e.slice(0, z);
        if (s === r)
          return H + o;
        if (g && (z += H.length - z), Jl(s)) {
          if (e.slice(z).search(s)) {
            var L, O = H;
            for (s.global || (s = ml(s.source, Oe(Le.exec(s)) + "g")), s.lastIndex = 0; L = s.exec(O); )
              var I = L.index;
            H = H.slice(0, I === r ? z : I);
          }
        } else if (e.indexOf($t(s), z) != z) {
          var Y = H.lastIndexOf(s);
          Y > -1 && (H = H.slice(0, Y));
        }
        return H + o;
      }
      function s8(e) {
        return e = Oe(e), e && Vr.test(e) ? e.replace(w1, I5) : e;
      }
      var u8 = mr(function(e, n, c) {
        return e + (c ? " " : "") + n.toUpperCase();
      }), e3 = fi("toUpperCase");
      function sa(e, n, c) {
        return e = Oe(e), n = c ? r : n, n === r ? T5(e) ? N5(e) : F5(e) : e.match(n) || [];
      }
      var ua = ze(function(e, n) {
        try {
          return Nt(e, r, n);
        } catch (c) {
          return Zl(c) ? c : new me(c);
        }
      }), f8 = y1(function(e, n) {
        return Zt(n, function(c) {
          c = v1(c), M1(e, c, jl(e[c], e));
        }), e;
      });
      function h8(e) {
        var n = e == null ? 0 : e.length, c = ne();
        return e = n ? je(e, function(o) {
          if (typeof o[1] != "function")
            throw new Jt(d);
          return [c(o[0]), o[1]];
        }) : [], ze(function(o) {
          for (var s = -1; ++s < n; ) {
            var h = e[s];
            if (Nt(h[0], this, o))
              return Nt(h[1], this, o);
          }
        });
      }
      function m8(e) {
        return Ic(Qt(e, C));
      }
      function t3(e) {
        return function() {
          return e;
        };
      }
      function d8(e, n) {
        return e == null || e !== e ? n : e;
      }
      var v8 = mi(), p8 = mi(!0);
      function Pt(e) {
        return e;
      }
      function r3(e) {
        return W0(typeof e == "function" ? e : Qt(e, C));
      }
      function E8(e) {
        return G0(Qt(e, C));
      }
      function g8(e, n) {
        return K0(e, Qt(n, C));
      }
      var w8 = ze(function(e, n) {
        return function(c) {
          return Zr(c, e, n);
        };
      }), z8 = ze(function(e, n) {
        return function(c) {
          return Zr(e, c, n);
        };
      });
      function n3(e, n, c) {
        var o = vt(n), s = Yn(n, o);
        c == null && !(Qe(n) && (s.length || !o.length)) && (c = n, n = e, e = this, s = Yn(n, vt(n)));
        var h = !(Qe(c) && "chain" in c) || !!c.chain, g = _1(e);
        return Zt(s, function(z) {
          var H = n[z];
          e[z] = H, g && (e.prototype[z] = function() {
            var L = this.__chain__;
            if (h || L) {
              var O = e(this.__wrapped__), I = O.__actions__ = Ot(this.__actions__);
              return I.push({ func: H, args: arguments, thisArg: e }), O.__chain__ = L, O;
            }
            return H.apply(e, B1([this.value()], arguments));
          });
        }), e;
      }
      function x8() {
        return wt._ === this && (wt._ = K5), this;
      }
      function l3() {
      }
      function M8(e) {
        return e = Ee(e), ze(function(n) {
          return Y0(n, e);
        });
      }
      var F8 = Ol(je), y8 = Ol(d0), H8 = Ol(al);
      function fa(e) {
        return $l(e) ? cl(v1(e)) : eo(e);
      }
      function _8(e) {
        return function(n) {
          return e == null ? r : Z1(e, n);
        };
      }
      var b8 = vi(), A8 = vi(!0);
      function i3() {
        return [];
      }
      function a3() {
        return !1;
      }
      function S8() {
        return {};
      }
      function C8() {
        return "";
      }
      function D8() {
        return !0;
      }
      function T8(e, n) {
        if (e = Ee(e), e < 1 || e > Ge)
          return [];
        var c = W, o = Ft(e, W);
        n = ne(n), e -= W;
        for (var s = ul(o, n); ++c < e; )
          n(c);
        return s;
      }
      function B8(e) {
        return pe(e) ? je(e, v1) : Wt(e) ? [e] : Ot(Di(Oe(e)));
      }
      function L8(e) {
        var n = ++U5;
        return Oe(e) + n;
      }
      var O8 = Qn(function(e, n) {
        return e + n;
      }, 0), R8 = Rl("ceil"), I8 = Qn(function(e, n) {
        return e / n;
      }, 1), P8 = Rl("floor");
      function V8(e) {
        return e && e.length ? Kn(e, Pt, xl) : r;
      }
      function N8(e, n) {
        return e && e.length ? Kn(e, ne(n, 2), xl) : r;
      }
      function k8(e) {
        return E0(e, Pt);
      }
      function $8(e, n) {
        return E0(e, ne(n, 2));
      }
      function W8(e) {
        return e && e.length ? Kn(e, Pt, Hl) : r;
      }
      function U8(e, n) {
        return e && e.length ? Kn(e, ne(n, 2), Hl) : r;
      }
      var G8 = Qn(function(e, n) {
        return e * n;
      }, 1), K8 = Rl("round"), Y8 = Qn(function(e, n) {
        return e - n;
      }, 0);
      function j8(e) {
        return e && e.length ? sl(e, Pt) : 0;
      }
      function q8(e, n) {
        return e && e.length ? sl(e, ne(n, 2)) : 0;
      }
      return f.after = E6, f.ary = $i, f.assign = l7, f.assignIn = ra, f.assignInWith = h2, f.assignWith = i7, f.at = a7, f.before = Wi, f.bind = jl, f.bindAll = f8, f.bindKey = Ui, f.castArray = S6, f.chain = Vi, f.chunk = Po, f.compact = Vo, f.concat = No, f.cond = h8, f.conforms = m8, f.constant = t3, f.countBy = js, f.create = c7, f.curry = Gi, f.curryRight = Ki, f.debounce = Yi, f.defaults = o7, f.defaultsDeep = s7, f.defer = g6, f.delay = w6, f.difference = ko, f.differenceBy = $o, f.differenceWith = Wo, f.drop = Uo, f.dropRight = Go, f.dropRightWhile = Ko, f.dropWhile = Yo, f.fill = jo, f.filter = Zs, f.flatMap = Qs, f.flatMapDeep = e6, f.flatMapDepth = t6, f.flatten = Oi, f.flattenDeep = qo, f.flattenDepth = Zo, f.flip = z6, f.flow = v8, f.flowRight = p8, f.fromPairs = Jo, f.functions = p7, f.functionsIn = E7, f.groupBy = r6, f.initial = Qo, f.intersection = es, f.intersectionBy = ts, f.intersectionWith = rs, f.invert = w7, f.invertBy = z7, f.invokeMap = l6, f.iteratee = r3, f.keyBy = i6, f.keys = vt, f.keysIn = It, f.map = a2, f.mapKeys = M7, f.mapValues = F7, f.matches = E8, f.matchesProperty = g8, f.memoize = o2, f.merge = y7, f.mergeWith = na, f.method = w8, f.methodOf = z8, f.mixin = n3, f.negate = s2, f.nthArg = M8, f.omit = H7, f.omitBy = _7, f.once = x6, f.orderBy = a6, f.over = F8, f.overArgs = M6, f.overEvery = y8, f.overSome = H8, f.partial = ql, f.partialRight = ji, f.partition = c6, f.pick = b7, f.pickBy = la, f.property = fa, f.propertyOf = _8, f.pull = as, f.pullAll = Ii, f.pullAllBy = cs, f.pullAllWith = os, f.pullAt = ss, f.range = b8, f.rangeRight = A8, f.rearg = F6, f.reject = u6, f.remove = us, f.rest = y6, f.reverse = Kl, f.sampleSize = h6, f.set = S7, f.setWith = C7, f.shuffle = m6, f.slice = fs, f.sortBy = p6, f.sortedUniq = gs, f.sortedUniqBy = ws, f.split = Q7, f.spread = H6, f.tail = zs, f.take = xs, f.takeRight = Ms, f.takeRightWhile = Fs, f.takeWhile = ys, f.tap = Vs, f.throttle = _6, f.thru = i2, f.toArray = Qi, f.toPairs = ia, f.toPairsIn = aa, f.toPath = B8, f.toPlainObject = ta, f.transform = D7, f.unary = b6, f.union = Hs, f.unionBy = _s, f.unionWith = bs, f.uniq = As, f.uniqBy = Ss, f.uniqWith = Cs, f.unset = T7, f.unzip = Yl, f.unzipWith = Pi, f.update = B7, f.updateWith = L7, f.values = pr, f.valuesIn = O7, f.without = Ds, f.words = sa, f.wrap = A6, f.xor = Ts, f.xorBy = Bs, f.xorWith = Ls, f.zip = Os, f.zipObject = Rs, f.zipObjectDeep = Is, f.zipWith = Ps, f.entries = ia, f.entriesIn = aa, f.extend = ra, f.extendWith = h2, n3(f, f), f.add = O8, f.attempt = ua, f.camelCase = V7, f.capitalize = ca, f.ceil = R8, f.clamp = R7, f.clone = C6, f.cloneDeep = T6, f.cloneDeepWith = B6, f.cloneWith = D6, f.conformsTo = L6, f.deburr = oa, f.defaultTo = d8, f.divide = I8, f.endsWith = N7, f.eq = s1, f.escape = k7, f.escapeRegExp = $7, f.every = qs, f.find = Js, f.findIndex = Bi, f.findKey = u7, f.findLast = Xs, f.findLastIndex = Li, f.findLastKey = f7, f.floor = P8, f.forEach = Ni, f.forEachRight = ki, f.forIn = h7, f.forInRight = m7, f.forOwn = d7, f.forOwnRight = v7, f.get = Xl, f.gt = O6, f.gte = R6, f.has = g7, f.hasIn = Ql, f.head = Ri, f.identity = Pt, f.includes = n6, f.indexOf = Xo, f.inRange = I7, f.invoke = x7, f.isArguments = Q1, f.isArray = pe, f.isArrayBuffer = I6, f.isArrayLike = Rt, f.isArrayLikeObject = it, f.isBoolean = P6, f.isBuffer = N1, f.isDate = V6, f.isElement = N6, f.isEmpty = k6, f.isEqual = $6, f.isEqualWith = W6, f.isError = Zl, f.isFinite = U6, f.isFunction = _1, f.isInteger = qi, f.isLength = u2, f.isMap = Zi, f.isMatch = G6, f.isMatchWith = K6, f.isNaN = Y6, f.isNative = j6, f.isNil = Z6, f.isNull = q6, f.isNumber = Ji, f.isObject = Qe, f.isObjectLike = rt, f.isPlainObject = rn, f.isRegExp = Jl, f.isSafeInteger = J6, f.isSet = Xi, f.isString = f2, f.isSymbol = Wt, f.isTypedArray = vr, f.isUndefined = X6, f.isWeakMap = Q6, f.isWeakSet = e7, f.join = ns, f.kebabCase = W7, f.last = t1, f.lastIndexOf = ls, f.lowerCase = U7, f.lowerFirst = G7, f.lt = t7, f.lte = r7, f.max = V8, f.maxBy = N8, f.mean = k8, f.meanBy = $8, f.min = W8, f.minBy = U8, f.stubArray = i3, f.stubFalse = a3, f.stubObject = S8, f.stubString = C8, f.stubTrue = D8, f.multiply = G8, f.nth = is, f.noConflict = x8, f.noop = l3, f.now = c2, f.pad = K7, f.padEnd = Y7, f.padStart = j7, f.parseInt = q7, f.random = P7, f.reduce = o6, f.reduceRight = s6, f.repeat = Z7, f.replace = J7, f.result = A7, f.round = K8, f.runInContext = y, f.sample = f6, f.size = d6, f.snakeCase = X7, f.some = v6, f.sortedIndex = hs, f.sortedIndexBy = ms, f.sortedIndexOf = ds, f.sortedLastIndex = vs, f.sortedLastIndexBy = ps, f.sortedLastIndexOf = Es, f.startCase = e8, f.startsWith = t8, f.subtract = Y8, f.sum = j8, f.sumBy = q8, f.template = r8, f.times = T8, f.toFinite = b1, f.toInteger = Ee, f.toLength = ea, f.toLower = n8, f.toNumber = r1, f.toSafeInteger = n7, f.toString = Oe, f.toUpper = l8, f.trim = i8, f.trimEnd = a8, f.trimStart = c8, f.truncate = o8, f.unescape = s8, f.uniqueId = L8, f.upperCase = u8, f.upperFirst = e3, f.each = Ni, f.eachRight = ki, f.first = Ri, n3(f, function() {
        var e = {};
        return m1(f, function(n, c) {
          Ne.call(f.prototype, c) || (e[c] = n);
        }), e;
      }(), { chain: !1 }), f.VERSION = a, Zt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), Zt(["drop", "take"], function(e, n) {
        ye.prototype[e] = function(c) {
          c = c === r ? 1 : dt(Ee(c), 0);
          var o = this.__filtered__ && !n ? new ye(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = Ft(c, o.__takeCount__) : o.__views__.push({
            size: Ft(c, W),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, ye.prototype[e + "Right"] = function(c) {
          return this.reverse()[e](c).reverse();
        };
      }), Zt(["filter", "map", "takeWhile"], function(e, n) {
        var c = n + 1, o = c == Se || c == Je;
        ye.prototype[e] = function(s) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: ne(s, 3),
            type: c
          }), h.__filtered__ = h.__filtered__ || o, h;
        };
      }), Zt(["head", "last"], function(e, n) {
        var c = "take" + (n ? "Right" : "");
        ye.prototype[e] = function() {
          return this[c](1).value()[0];
        };
      }), Zt(["initial", "tail"], function(e, n) {
        var c = "drop" + (n ? "" : "Right");
        ye.prototype[e] = function() {
          return this.__filtered__ ? new ye(this) : this[c](1);
        };
      }), ye.prototype.compact = function() {
        return this.filter(Pt);
      }, ye.prototype.find = function(e) {
        return this.filter(e).head();
      }, ye.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ye.prototype.invokeMap = ze(function(e, n) {
        return typeof e == "function" ? new ye(this) : this.map(function(c) {
          return Zr(c, e, n);
        });
      }), ye.prototype.reject = function(e) {
        return this.filter(s2(ne(e)));
      }, ye.prototype.slice = function(e, n) {
        e = Ee(e);
        var c = this;
        return c.__filtered__ && (e > 0 || n < 0) ? new ye(c) : (e < 0 ? c = c.takeRight(-e) : e && (c = c.drop(e)), n !== r && (n = Ee(n), c = n < 0 ? c.dropRight(-n) : c.take(n - e)), c);
      }, ye.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ye.prototype.toArray = function() {
        return this.take(W);
      }, m1(ye.prototype, function(e, n) {
        var c = /^(?:filter|find|map|reject)|While$/.test(n), o = /^(?:head|last)$/.test(n), s = f[o ? "take" + (n == "last" ? "Right" : "") : n], h = o || /^find/.test(n);
        s && (f.prototype[n] = function() {
          var g = this.__wrapped__, z = o ? [1] : arguments, H = g instanceof ye, L = z[0], O = H || pe(g), I = function(Me) {
            var _e = s.apply(f, B1([Me], z));
            return o && Y ? _e[0] : _e;
          };
          O && c && typeof L == "function" && L.length != 1 && (H = O = !1);
          var Y = this.__chain__, X = !!this.__actions__.length, le = h && !Y, we = H && !X;
          if (!h && O) {
            g = we ? g : new ye(this);
            var ie = e.apply(g, z);
            return ie.__actions__.push({ func: i2, args: [I], thisArg: r }), new Xt(ie, Y);
          }
          return le && we ? e.apply(this, z) : (ie = this.thru(I), le ? o ? ie.value()[0] : ie.value() : ie);
        });
      }), Zt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Dn[e], c = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        f.prototype[e] = function() {
          var s = arguments;
          if (o && !this.__chain__) {
            var h = this.value();
            return n.apply(pe(h) ? h : [], s);
          }
          return this[c](function(g) {
            return n.apply(pe(g) ? g : [], s);
          });
        };
      }), m1(ye.prototype, function(e, n) {
        var c = f[n];
        if (c) {
          var o = c.name + "";
          Ne.call(ur, o) || (ur[o] = []), ur[o].push({ name: n, func: c });
        }
      }), ur[Xn(r, B).name] = [{
        name: "wrapper",
        func: r
      }], ye.prototype.clone = oc, ye.prototype.reverse = sc, ye.prototype.value = uc, f.prototype.at = Ns, f.prototype.chain = ks, f.prototype.commit = $s, f.prototype.next = Ws, f.prototype.plant = Gs, f.prototype.reverse = Ks, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = Ys, f.prototype.first = f.prototype.head, Wr && (f.prototype[Wr] = Us), f;
    }, cr = k5();
    G1 ? ((G1.exports = cr)._ = cr, rl._ = cr) : wt._ = cr;
  }).call(nn);
})(F2, F2.exports);
var E1 = F2.exports;
const ou = [
  ["Afghanistan", ["asia"], "af", "93"],
  ["Albania", ["europe"], "al", "355"],
  ["Algeria", ["africa", "north-africa"], "dz", "213"],
  ["American Samoa", ["oceania"], "as", "1684"],
  ["Andorra", ["europe"], "ad", "376"],
  ["Angola", ["africa"], "ao", "244"],
  ["Anguilla", ["america", "carribean"], "ai", "1264"],
  ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"],
  ["Argentina", ["america", "south-america"], "ar", "54", "+.. (..) ........"],
  ["Armenia", ["asia", "ex-ussr"], "am", "374"],
  ["Aruba", ["america", "carribean"], "aw", "297"],
  ["Australia", ["oceania"], "au", "61", "+.. ... ... ..."],
  ["Austria", ["europe", "european-union"], "at", "43"],
  ["Azerbaijan", ["asia", "ex-ussr"], "az", "994"],
  ["Bahamas", ["america", "carribean"], "bs", "1242"],
  ["Bahrain", ["middle-east"], "bh", "973"],
  ["Bangladesh", ["asia"], "bd", "880"],
  ["Barbados", ["america", "carribean"], "bb", "1246"],
  ["Belarus", ["europe", "ex-ussr"], "by", "375", "+... (..) ... .. .."],
  ["Belgium", ["europe", "european-union"], "be", "32", "+.. ... .. .. .."],
  ["Belize", ["america", "central-america"], "bz", "501"],
  ["Benin", ["africa"], "bj", "229", "+... .... ...."],
  ["Bermuda", ["america", "north-america"], "bm", "1441"],
  ["Bhutan", ["asia"], "bt", "975"],
  ["Bolivia", ["america", "south-america"], "bo", "591"],
  ["Bosnia and Herzegovina", ["europe"], "ba", "387"],
  ["Botswana", ["africa"], "bw", "267"],
  ["Brazil", ["america", "south-america"], "br", "55", "+.. (..) ........."],
  ["British Indian Ocean Territory", ["asia"], "io", "246"],
  ["British Virgin Islands", ["america", "carribean"], "vg", "1284"],
  ["Brunei", ["asia"], "bn", "673"],
  ["Bulgaria", ["europe", "european-union"], "bg", "359"],
  ["Burkina Faso", ["africa"], "bf", "226", "+... .. .. .. .."],
  ["Burundi", ["africa"], "bi", "257", "+... .. .. .. .."],
  ["Cambodia", ["asia"], "kh", "855"],
  ["Cameroon", ["africa"], "cm", "237"],
  [
    "Canada",
    ["america", "north-america"],
    "ca",
    "1",
    "+. (...) ...-....",
    1,
    [
      "204",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905"
    ]
  ],
  ["Cape Verde", ["africa"], "cv", "238", "+... ... .. .."],
  ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1],
  ["Cayman Islands", ["america", "carribean"], "ky", "1345"],
  ["Central African Republic", ["africa"], "cf", "236", "+... .... ...."],
  ["Chad", ["africa"], "td", "235", "+... .. .. .. .."],
  ["Chile", ["america", "south-america"], "cl", "56"],
  ["China", ["asia"], "cn", "86", "+.. ..-........."],
  ["Colombia", ["america", "south-america"], "co", "57"],
  ["Comoros", ["africa"], "km", "269", "+... ... ...."],
  ["Congo", ["africa"], "cd", "243"],
  ["Congo", ["africa"], "cg", "242", "+... .. .. ....."],
  ["Cook Islands", ["oceania"], "ck", "682"],
  ["Costa Rica", ["america", "central-america"], "cr", "506", "+... ....-...."],
  ["Côte d’Ivoire", ["africa"], "ci", "225", "+... .. .. .. .."],
  ["Croatia", ["europe", "european-union"], "hr", "385"],
  ["Cuba", ["america", "carribean"], "cu", "53"],
  ["Curaçao", ["america", "carribean"], "cw", "599", "", 0],
  ["Cyprus", ["europe", "european-union"], "cy", "357", "+... .. ......"],
  ["Czech Republic", ["europe", "european-union"], "cz", "420"],
  ["Denmark", ["europe", "european-union"], "dk", "45", "+.. .. .. .. .."],
  ["Djibouti", ["africa"], "dj", "253"],
  ["Dominica", ["america", "carribean"], "dm", "1767"],
  [
    "Dominican Republic",
    ["america", "carribean"],
    "do",
    "1",
    "",
    2,
    ["809", "829", "849"]
  ],
  ["Ecuador", ["america", "south-america"], "ec", "593"],
  ["Egypt", ["africa", "north-africa"], "eg", "20"],
  [
    "El Salvador",
    ["america", "central-america"],
    "sv",
    "503",
    "+... ....-...."
  ],
  ["Equatorial Guinea", ["africa"], "gq", "240", "+... .. ... ...."],
  ["Eritrea", ["africa"], "er", "291"],
  [
    "Estonia",
    ["europe", "european-union", "ex-ussr"],
    "ee",
    "372",
    "+... .... ......"
  ],
  ["Ethiopia", ["africa"], "et", "251"],
  ["Falkland Islands", ["america", "south-america"], "fk", "500"],
  ["Faroe Islands", ["europe"], "fo", "298"],
  ["Fiji", ["oceania"], "fj", "679"],
  ["Finland", ["europe", "european-union"], "fi", "358", "+... .. ... .. .."],
  ["France", ["europe", "european-union"], "fr", "33", "+.. . .. .. .. .."],
  ["French Guiana", ["america", "south-america"], "gf", "594"],
  ["French Polynesia", ["oceania"], "pf", "689"],
  ["Gabon", ["africa"], "ga", "241", "+... .. .. .. .."],
  ["Gambia", ["africa"], "gm", "220"],
  ["Georgia", ["asia", "ex-ussr"], "ge", "995"],
  ["Germany", ["europe", "european-union"], "de", "49", "+.. .... ........"],
  ["Ghana", ["africa"], "gh", "233"],
  ["Gibraltar", ["europe"], "gi", "350"],
  ["Greece", ["europe", "european-union"], "gr", "30"],
  ["Greenland", ["america"], "gl", "299"],
  ["Grenada", ["america", "carribean"], "gd", "1473"],
  ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0],
  ["Guam", ["oceania"], "gu", "1671"],
  ["Guatemala", ["america", "central-america"], "gt", "502", "+... ....-...."],
  ["Guinea", ["africa"], "gn", "224", "+... . ... ...."],
  ["Guinea-Bissau", ["africa"], "gw", "245"],
  ["Guyana", ["america", "south-america"], "gy", "592"],
  ["Haiti", ["america", "carribean"], "ht", "509", "+... ....-...."],
  ["Honduras", ["america", "central-america"], "hn", "504"],
  ["Hong Kong", ["asia"], "hk", "852", "+... .... ...."],
  ["Hungary", ["europe", "european-union"], "hu", "36"],
  ["Iceland", ["europe"], "is", "354", "+... ... ...."],
  ["India", ["asia"], "in", "91", "+.. .....-....."],
  ["Indonesia", ["asia"], "id", "62"],
  ["Iran", ["middle-east"], "ir", "98"],
  ["Iraq", ["middle-east"], "iq", "964"],
  ["Ireland", ["europe", "european-union"], "ie", "353", "+... .. ......."],
  ["Israel", ["middle-east"], "il", "972", "+... ... ... ...."],
  ["Italy", ["europe", "european-union"], "it", "39", "+.. ... .......", 0],
  ["Jamaica", ["america", "carribean"], "jm", "1876"],
  ["Japan", ["asia"], "jp", "81", "+.. .. .... ...."],
  ["Jordan", ["middle-east"], "jo", "962"],
  [
    "Kazakhstan",
    ["asia", "ex-ussr"],
    "kz",
    "7",
    "+. ... ...-..-..",
    1,
    [
      "313",
      "327",
      "7172",
      "312",
      "73622",
      "321",
      "324",
      "336",
      "318",
      "315",
      "325",
      "311",
      "326",
      "310"
    ]
  ],
  ["Kenya", ["africa"], "ke", "254"],
  ["Kiribati", ["oceania"], "ki", "686"],
  ["Kosovo", ["europe"], "ks", "383"],
  ["Kuwait", ["middle-east"], "kw", "965"],
  ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996"],
  ["Laos", ["asia"], "la", "856"],
  ["Latvia", ["europe", "european-union", "ex-ussr"], "lv", "371"],
  ["Lebanon", ["middle-east"], "lb", "961"],
  ["Lesotho", ["africa"], "ls", "266"],
  ["Liberia", ["africa"], "lr", "231"],
  ["Libya", ["africa", "north-africa"], "ly", "218"],
  ["Liechtenstein", ["europe"], "li", "423"],
  ["Lithuania", ["europe", "european-union", "ex-ussr"], "lt", "370"],
  [
    "Luxembourg",
    ["europe", "european-union"],
    "lu",
    "352",
    "+.. . ... ... ..."
  ],
  ["Macau", ["asia"], "mo", "853"],
  ["Macedonia", ["europe"], "mk", "389"],
  ["Madagascar", ["africa"], "mg", "261", "+... .. . ......"],
  ["Malawi", ["africa"], "mw", "265"],
  ["Malaysia", ["asia"], "my", "60", "+.. ..-....-...."],
  ["Maldives", ["asia"], "mv", "960"],
  ["Mali", ["africa"], "ml", "223", "+... .... ...."],
  ["Malta", ["europe", "european-union"], "mt", "356"],
  ["Marshall Islands", ["oceania"], "mh", "692"],
  ["Martinique", ["america", "carribean"], "mq", "596"],
  ["Mauritania", ["africa"], "mr", "222", "+... .... ...."],
  ["Mauritius", ["africa"], "mu", "230", "+... . ... ...."],
  ["Mexico", ["america", "central-america"], "mx", "52"],
  ["Micronesia", ["oceania"], "fm", "691"],
  ["Moldova", ["europe"], "md", "373", "+... (..) ..-..-.."],
  ["Monaco", ["europe"], "mc", "377"],
  ["Mongolia", ["asia"], "mn", "976"],
  ["Montenegro", ["europe"], "me", "382"],
  ["Montserrat", ["america", "carribean"], "ms", "1664"],
  ["Morocco", ["africa", "north-africa"], "ma", "212", "+212-........."],
  ["Mozambique", ["africa"], "mz", "258", "+... ... ......"],
  ["Myanmar", ["asia"], "mm", "95"],
  ["Namibia", ["africa"], "na", "264"],
  ["Nauru", ["africa"], "nr", "674"],
  ["Nepal", ["asia"], "np", "977"],
  ["Netherlands", ["europe", "european-union"], "nl", "31", "+.. .. ........"],
  ["New Caledonia", ["oceania"], "nc", "687"],
  ["New Zealand", ["oceania"], "nz", "64", "+.. ...-...-...."],
  ["Nicaragua", ["america", "central-america"], "ni", "505"],
  ["Niger", ["africa"], "ne", "227", "+... .. .. .. .."],
  ["Nigeria", ["africa"], "ng", "234"],
  ["Niue", ["asia"], "nu", "683"],
  ["Norfolk Island", ["oceania"], "nf", "672"],
  ["North Korea", ["asia"], "kp", "850"],
  ["Northern Mariana Islands", ["oceania"], "mp", "1670"],
  ["Norway", ["europe"], "no", "47", "+.. ... .. ..."],
  ["Oman", ["middle-east"], "om", "968"],
  ["Pakistan", ["asia"], "pk", "92", "+.. ...-......."],
  ["Palau", ["oceania"], "pw", "680"],
  ["Palestine", ["middle-east"], "ps", "970"],
  ["Panama", ["america", "central-america"], "pa", "507"],
  ["Papua New Guinea", ["oceania"], "pg", "675"],
  ["Paraguay", ["america", "south-america"], "py", "595"],
  ["Peru", ["america", "south-america"], "pe", "51"],
  ["Philippines", ["asia"], "ph", "63", "+.. .... ......."],
  ["Poland", ["europe", "european-union"], "pl", "48", "+.. ...-...-..."],
  ["Portugal", ["europe", "european-union"], "pt", "351"],
  ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]],
  ["Qatar", ["middle-east"], "qa", "974"],
  ["Réunion", ["africa"], "re", "262", "+.. . .. .. .. .."],
  ["Romania", ["europe", "european-union"], "ro", "40"],
  ["Russia", ["europe", "asia", "ex-ussr"], "ru", "7", "+. (...) ...-..-..", 0],
  ["Rwanda", ["africa"], "rw", "250", "+... ... ... ..."],
  ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1],
  ["Saint Helena", ["africa"], "sh", "290"],
  ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"],
  ["Saint Lucia", ["america", "carribean"], "lc", "1758"],
  ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2],
  ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"],
  ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"],
  ["Samoa", ["oceania"], "ws", "685"],
  ["San Marino", ["europe"], "sm", "378"],
  ["São Tomé and Príncipe", ["africa"], "st", "239", "+... ... ...."],
  ["Saudi Arabia", ["middle-east"], "sa", "966"],
  ["Senegal", ["africa"], "sn", "221", "+... .. ... .. .."],
  ["Serbia", ["europe"], "rs", "381"],
  [
    "Seychelles",
    ["africa"],
    "sc",
    "248",
    "+... ... ...."
    // from https://en.wikipedia.org/wiki/Telephone_numbers_in_Seychelles
  ],
  ["Sierra Leone", ["africa"], "sl", "232"],
  ["Singapore", ["asia"], "sg", "65", "+.. ....-...."],
  ["Sint Maarten", ["america", "carribean"], "sx", "1721"],
  ["Slovakia", ["europe", "european-union"], "sk", "421"],
  ["Slovenia", ["europe", "european-union"], "si", "386"],
  ["Solomon Islands", ["oceania"], "sb", "677"],
  ["Somalia", ["africa"], "so", "252"],
  ["South Africa", ["africa"], "za", "27", "+.. .. ... ...."],
  ["South Korea", ["asia"], "kr", "82", "+.. ... .... ...."],
  ["South Sudan", ["africa", "north-africa"], "ss", "211"],
  ["Spain", ["europe", "european-union"], "es", "34", "+.. ... ... ..."],
  ["Sri Lanka", ["asia"], "lk", "94"],
  ["Sudan", ["africa"], "sd", "249"],
  ["Suriname", ["america", "south-america"], "sr", "597"],
  ["Swaziland", ["africa"], "sz", "268"],
  ["Sweden", ["europe", "european-union"], "se", "46", "+.. (..) ...-..-.."],
  ["Switzerland", ["europe"], "ch", "41", "+.. .. ... .. .."],
  ["Syria", ["middle-east"], "sy", "963"],
  ["Taiwan", ["asia"], "tw", "886"],
  ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"],
  ["Tanzania", ["africa"], "tz", "255"],
  ["Thailand", ["asia"], "th", "66"],
  ["Timor-Leste", ["asia"], "tl", "670"],
  ["Togo", ["africa"], "tg", "228", "+... ... ....."],
  ["Tokelau", ["oceania"], "tk", "690"],
  ["Tonga", ["oceania"], "to", "676"],
  ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"],
  ["Tunisia", ["africa", "north-africa"], "tn", "216", "+... .. ... ..."],
  ["Turkey", ["europe"], "tr", "90", "+.. ... ... .. .."],
  ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"],
  ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"],
  ["Tuvalu", ["asia"], "tv", "688"],
  ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"],
  ["Uganda", ["africa"], "ug", "256"],
  ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "+... (..) ... .. .."],
  ["United Arab Emirates", ["middle-east"], "ae", "971"],
  [
    "United Kingdom",
    ["europe", "european-union"],
    "gb",
    "44",
    "+.. .... ......"
  ],
  [
    "United States",
    ["america", "north-america"],
    "us",
    "1",
    "+. (...) ...-....",
    0,
    [
      "907",
      "205",
      "251",
      "256",
      "334",
      "479",
      "501",
      "870",
      "480",
      "520",
      "602",
      "623",
      "928",
      "209",
      "213",
      "310",
      "323",
      "408",
      "415",
      "510",
      "530",
      "559",
      "562",
      "619",
      "626",
      "650",
      "661",
      "707",
      "714",
      "760",
      "805",
      "818",
      "831",
      "858",
      "909",
      "916",
      "925",
      "949",
      "951",
      "303",
      "719",
      "970",
      "203",
      "860",
      "202",
      "302",
      "239",
      "305",
      "321",
      "352",
      "386",
      "407",
      "561",
      "727",
      "772",
      "813",
      "850",
      "863",
      "904",
      "941",
      "954",
      "229",
      "404",
      "478",
      "706",
      "770",
      "912",
      "808",
      "319",
      "515",
      "563",
      "641",
      "712",
      "208",
      "217",
      "309",
      "312",
      "618",
      "630",
      "708",
      "773",
      "815",
      "847",
      "219",
      "260",
      "317",
      "574",
      "765",
      "812",
      "316",
      "620",
      "785",
      "913",
      "270",
      "502",
      "606",
      "859",
      "225",
      "318",
      "337",
      "504",
      "985",
      "413",
      "508",
      "617",
      "781",
      "978",
      "301",
      "410",
      "207",
      "231",
      "248",
      "269",
      "313",
      "517",
      "586",
      "616",
      "734",
      "810",
      "906",
      "989",
      "218",
      "320",
      "507",
      "612",
      "651",
      "763",
      "952",
      "314",
      "417",
      "573",
      "636",
      "660",
      "816",
      "228",
      "601",
      "662",
      "406",
      "252",
      "336",
      "704",
      "828",
      "910",
      "919",
      "701",
      "308",
      "402",
      "603",
      "201",
      "609",
      "732",
      "856",
      "908",
      "973",
      "505",
      "575",
      "702",
      "775",
      "212",
      "315",
      "516",
      "518",
      "585",
      "607",
      "631",
      "716",
      "718",
      "845",
      "914",
      "216",
      "330",
      "419",
      "440",
      "513",
      "614",
      "740",
      "937",
      "405",
      "580",
      "918",
      "503",
      "541",
      "215",
      "412",
      "570",
      "610",
      "717",
      "724",
      "814",
      "401",
      "803",
      "843",
      "864",
      "605",
      "423",
      "615",
      "731",
      "865",
      "901",
      "931",
      "210",
      "214",
      "254",
      "281",
      "325",
      "361",
      "409",
      "432",
      "512",
      "713",
      "806",
      "817",
      "830",
      "903",
      "915",
      "936",
      "940",
      "956",
      "972",
      "979",
      "435",
      "801",
      "276",
      "434",
      "540",
      "703",
      "757",
      "804",
      "802",
      "206",
      "253",
      "360",
      "425",
      "509",
      "262",
      "414",
      "608",
      "715",
      "920",
      "304",
      "307"
    ]
  ],
  ["Uruguay", ["america", "south-america"], "uy", "598"],
  ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998"],
  ["Vanuatu", ["oceania"], "vu", "678"],
  ["Vatican City", ["europe"], "va", "39", "+.. .. .... ....", 1],
  ["Venezuela", ["america", "south-america"], "ve", "58"],
  ["Vietnam", ["asia"], "vn", "84"],
  ["Wallis and Futuna", ["oceania"], "wf", "681"],
  ["Yemen", ["middle-east"], "ye", "967"],
  ["Zambia", ["africa"], "zm", "260"],
  ["Zimbabwe", ["africa"], "zw", "263"]
], o3 = {}, pa = (i, l, r) => {
  o3[l] || (o3[l] = []);
  const a = r || 0;
  o3[l][a] = i;
}, su = ou.map((i) => {
  const [l, r, a, u, m, d, x] = i, F = {
    name: l,
    regions: r,
    iso2: a,
    dialCode: u,
    priority: d || 0,
    format: m || void 0,
    hasAreaCodes: !!x,
    isAreaCode: !1
  }, b = (x ?? []).map((_) => {
    const C = {
      ...F,
      regions: r,
      dialCode: `${u}${_}`,
      isAreaCode: !0
    };
    return pa(a, C.dialCode), C;
  });
  return pa(F.iso2, F.dialCode, d), [F, ...b];
}), Ea = su.flat();
function br(i) {
  let l = "https://mui.com/production-error/?code=" + i;
  for (let r = 1; r < arguments.length; r += 1)
    l += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + i + "; visit " + l + " for the full message.";
}
const m4 = "$$material";
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(i) {
    for (var l = 1; l < arguments.length; l++) {
      var r = arguments[l];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, Yt.apply(this, arguments);
}
function C2(i, l) {
  if (i == null)
    return {};
  var r = {}, a = Object.keys(i), u, m;
  for (m = 0; m < a.length; m++)
    u = a[m], !(l.indexOf(u) >= 0) && (r[u] = i[u]);
  return r;
}
function y2() {
  return y2 = Object.assign ? Object.assign.bind() : function(i) {
    for (var l = 1; l < arguments.length; l++) {
      var r = arguments[l];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, y2.apply(this, arguments);
}
function d4(i) {
  var l = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return l[r] === void 0 && (l[r] = i(r)), l[r];
  };
}
var uu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fu = /* @__PURE__ */ d4(
  function(i) {
    return uu.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function hu(i) {
  if (i.sheet)
    return i.sheet;
  for (var l = 0; l < document.styleSheets.length; l++)
    if (document.styleSheets[l].ownerNode === i)
      return document.styleSheets[l];
}
function mu(i) {
  var l = document.createElement("style");
  return l.setAttribute("data-emotion", i.key), i.nonce !== void 0 && l.setAttribute("nonce", i.nonce), l.appendChild(document.createTextNode("")), l.setAttribute("data-s", ""), l;
}
var du = /* @__PURE__ */ function() {
  function i(r) {
    var a = this;
    this._insertTag = function(u) {
      var m;
      a.tags.length === 0 ? a.insertionPoint ? m = a.insertionPoint.nextSibling : a.prepend ? m = a.container.firstChild : m = a.before : m = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(u, m), a.tags.push(u);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var l = i.prototype;
  return l.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, l.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(mu(this));
    var u = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var m = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      m && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !m;
    }
    if (this.isSpeedy) {
      var d = hu(u);
      try {
        d.insertRule(a, d.cssRules.length);
      } catch (x) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(a) && console.error('There was a problem inserting the following rule: "' + a + '"', x);
      }
    } else
      u.appendChild(document.createTextNode(a));
    this.ctr++;
  }, l.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, i;
}(), Ht = "-ms-", H2 = "-moz-", De = "-webkit-", A3 = "comm", S3 = "rule", C3 = "decl", vu = "@import", v4 = "@keyframes", pu = "@layer", Eu = Math.abs, D2 = String.fromCharCode, gu = Object.assign;
function wu(i, l) {
  return xt(i, 0) ^ 45 ? (((l << 2 ^ xt(i, 0)) << 2 ^ xt(i, 1)) << 2 ^ xt(i, 2)) << 2 ^ xt(i, 3) : 0;
}
function p4(i) {
  return i.trim();
}
function zu(i, l) {
  return (i = l.exec(i)) ? i[0] : i;
}
function Te(i, l, r) {
  return i.replace(l, r);
}
function z3(i, l) {
  return i.indexOf(l);
}
function xt(i, l) {
  return i.charCodeAt(l) | 0;
}
function fn(i, l, r) {
  return i.slice(l, r);
}
function p1(i) {
  return i.length;
}
function D3(i) {
  return i.length;
}
function m2(i, l) {
  return l.push(i), i;
}
function xu(i, l) {
  return i.map(l).join("");
}
var T2 = 1, Ar = 1, E4 = 0, Vt = 0, ot = 0, Cr = "";
function B2(i, l, r, a, u, m, d) {
  return { value: i, root: l, parent: r, type: a, props: u, children: m, line: T2, column: Ar, length: d, return: "" };
}
function cn(i, l) {
  return gu(B2("", null, null, "", null, null, 0), i, { length: -i.length }, l);
}
function Mu() {
  return ot;
}
function Fu() {
  return ot = Vt > 0 ? xt(Cr, --Vt) : 0, Ar--, ot === 10 && (Ar = 1, T2--), ot;
}
function jt() {
  return ot = Vt < E4 ? xt(Cr, Vt++) : 0, Ar++, ot === 10 && (Ar = 1, T2++), ot;
}
function g1() {
  return xt(Cr, Vt);
}
function p2() {
  return Vt;
}
function vn(i, l) {
  return fn(Cr, i, l);
}
function hn(i) {
  switch (i) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function g4(i) {
  return T2 = Ar = 1, E4 = p1(Cr = i), Vt = 0, [];
}
function w4(i) {
  return Cr = "", i;
}
function E2(i) {
  return p4(vn(Vt - 1, x3(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function yu(i) {
  for (; (ot = g1()) && ot < 33; )
    jt();
  return hn(i) > 2 || hn(ot) > 3 ? "" : " ";
}
function Hu(i, l) {
  for (; --l && jt() && !(ot < 48 || ot > 102 || ot > 57 && ot < 65 || ot > 70 && ot < 97); )
    ;
  return vn(i, p2() + (l < 6 && g1() == 32 && jt() == 32));
}
function x3(i) {
  for (; jt(); )
    switch (ot) {
      case i:
        return Vt;
      case 34:
      case 39:
        i !== 34 && i !== 39 && x3(ot);
        break;
      case 40:
        i === 41 && x3(i);
        break;
      case 92:
        jt();
        break;
    }
  return Vt;
}
function _u(i, l) {
  for (; jt() && i + ot !== 57; )
    if (i + ot === 84 && g1() === 47)
      break;
  return "/*" + vn(l, Vt - 1) + "*" + D2(i === 47 ? i : jt());
}
function bu(i) {
  for (; !hn(g1()); )
    jt();
  return vn(i, Vt);
}
function Au(i) {
  return w4(g2("", null, null, null, [""], i = g4(i), 0, [0], i));
}
function g2(i, l, r, a, u, m, d, x, F) {
  for (var b = 0, _ = 0, C = d, S = 0, V = 0, R = 0, E = 1, M = 1, B = 1, k = 0, $ = "", G = u, A = m, J = a, j = $; M; )
    switch (R = k, k = jt()) {
      case 40:
        if (R != 108 && xt(j, C - 1) == 58) {
          z3(j += Te(E2(k), "&", "&\f"), "&\f") != -1 && (B = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        j += E2(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        j += yu(R);
        break;
      case 92:
        j += Hu(p2() - 1, 7);
        continue;
      case 47:
        switch (g1()) {
          case 42:
          case 47:
            m2(Su(_u(jt(), p2()), l, r), F);
            break;
          default:
            j += "/";
        }
        break;
      case 123 * E:
        x[b++] = p1(j) * B;
      case 125 * E:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            M = 0;
          case 59 + _:
            B == -1 && (j = Te(j, /\f/g, "")), V > 0 && p1(j) - C && m2(V > 32 ? wa(j + ";", a, r, C - 1) : wa(Te(j, " ", "") + ";", a, r, C - 2), F);
            break;
          case 59:
            j += ";";
          default:
            if (m2(J = ga(j, l, r, b, _, u, x, $, G = [], A = [], C), m), k === 123)
              if (_ === 0)
                g2(j, l, J, J, G, m, C, x, A);
              else
                switch (S === 99 && xt(j, 3) === 110 ? 100 : S) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    g2(i, J, J, a && m2(ga(i, J, J, 0, 0, u, x, $, u, G = [], C), A), u, A, C, x, a ? G : A);
                    break;
                  default:
                    g2(j, J, J, J, [""], A, 0, x, A);
                }
        }
        b = _ = V = 0, E = B = 1, $ = j = "", C = d;
        break;
      case 58:
        C = 1 + p1(j), V = R;
      default:
        if (E < 1) {
          if (k == 123)
            --E;
          else if (k == 125 && E++ == 0 && Fu() == 125)
            continue;
        }
        switch (j += D2(k), k * E) {
          case 38:
            B = _ > 0 ? 1 : (j += "\f", -1);
            break;
          case 44:
            x[b++] = (p1(j) - 1) * B, B = 1;
            break;
          case 64:
            g1() === 45 && (j += E2(jt())), S = g1(), _ = C = p1($ = j += bu(p2())), k++;
            break;
          case 45:
            R === 45 && p1(j) == 2 && (E = 0);
        }
    }
  return m;
}
function ga(i, l, r, a, u, m, d, x, F, b, _) {
  for (var C = u - 1, S = u === 0 ? m : [""], V = D3(S), R = 0, E = 0, M = 0; R < a; ++R)
    for (var B = 0, k = fn(i, C + 1, C = Eu(E = d[R])), $ = i; B < V; ++B)
      ($ = p4(E > 0 ? S[B] + " " + k : Te(k, /&\f/g, S[B]))) && (F[M++] = $);
  return B2(i, l, r, u === 0 ? S3 : x, F, b, _);
}
function Su(i, l, r) {
  return B2(i, l, r, A3, D2(Mu()), fn(i, 2, -2), 0);
}
function wa(i, l, r, a) {
  return B2(i, l, r, C3, fn(i, 0, a), fn(i, a + 1, -1), a);
}
function yr(i, l) {
  for (var r = "", a = D3(i), u = 0; u < a; u++)
    r += l(i[u], u, i, l) || "";
  return r;
}
function Cu(i, l, r, a) {
  switch (i.type) {
    case pu:
      if (i.children.length)
        break;
    case vu:
    case C3:
      return i.return = i.return || i.value;
    case A3:
      return "";
    case v4:
      return i.return = i.value + "{" + yr(i.children, a) + "}";
    case S3:
      i.value = i.props.join(",");
  }
  return p1(r = yr(i.children, a)) ? i.return = i.value + "{" + r + "}" : "";
}
function Du(i) {
  var l = D3(i);
  return function(r, a, u, m) {
    for (var d = "", x = 0; x < l; x++)
      d += i[x](r, a, u, m) || "";
    return d;
  };
}
function Tu(i) {
  return function(l) {
    l.root || (l = l.return) && i(l);
  };
}
var Bu = function(l, r, a) {
  for (var u = 0, m = 0; u = m, m = g1(), u === 38 && m === 12 && (r[a] = 1), !hn(m); )
    jt();
  return vn(l, Vt);
}, Lu = function(l, r) {
  var a = -1, u = 44;
  do
    switch (hn(u)) {
      case 0:
        u === 38 && g1() === 12 && (r[a] = 1), l[a] += Bu(Vt - 1, r, a);
        break;
      case 2:
        l[a] += E2(u);
        break;
      case 4:
        if (u === 44) {
          l[++a] = g1() === 58 ? "&\f" : "", r[a] = l[a].length;
          break;
        }
      default:
        l[a] += D2(u);
    }
  while (u = jt());
  return l;
}, Ou = function(l, r) {
  return w4(Lu(g4(l), r));
}, za = /* @__PURE__ */ new WeakMap(), Ru = function(l) {
  if (!(l.type !== "rule" || !l.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  l.length < 1)) {
    for (var r = l.value, a = l.parent, u = l.column === a.column && l.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(l.props.length === 1 && r.charCodeAt(0) !== 58 && !za.get(a)) && !u) {
      za.set(l, !0);
      for (var m = [], d = Ou(r, m), x = a.props, F = 0, b = 0; F < d.length; F++)
        for (var _ = 0; _ < x.length; _++, b++)
          l.props[b] = m[F] ? d[F].replace(/&\f/g, x[_]) : x[_] + " " + d[F];
    }
  }
}, Iu = function(l) {
  if (l.type === "decl") {
    var r = l.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (l.return = "", l.value = "");
  }
}, Pu = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Vu = function(l) {
  return l.type === "comm" && l.children.indexOf(Pu) > -1;
}, Nu = function(l) {
  return function(r, a, u) {
    if (!(r.type !== "rule" || l.compat)) {
      var m = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (m) {
        for (var d = !!r.parent, x = d ? r.parent.children : (
          // global rule at the root level
          u
        ), F = x.length - 1; F >= 0; F--) {
          var b = x[F];
          if (b.line < r.line)
            break;
          if (b.column < r.column) {
            if (Vu(b))
              return;
            break;
          }
        }
        m.forEach(function(_) {
          console.error('The pseudo class "' + _ + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + _.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, z4 = function(l) {
  return l.type.charCodeAt(1) === 105 && l.type.charCodeAt(0) === 64;
}, ku = function(l, r) {
  for (var a = l - 1; a >= 0; a--)
    if (!z4(r[a]))
      return !0;
  return !1;
}, xa = function(l) {
  l.type = "", l.value = "", l.return = "", l.children = "", l.props = "";
}, $u = function(l, r, a) {
  z4(l) && (l.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), xa(l)) : ku(r, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), xa(l)));
};
function x4(i, l) {
  switch (wu(i, l)) {
    case 5103:
      return De + "print-" + i + i;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return De + i + i;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return De + i + H2 + i + Ht + i + i;
    case 6828:
    case 4268:
      return De + i + Ht + i + i;
    case 6165:
      return De + i + Ht + "flex-" + i + i;
    case 5187:
      return De + i + Te(i, /(\w+).+(:[^]+)/, De + "box-$1$2" + Ht + "flex-$1$2") + i;
    case 5443:
      return De + i + Ht + "flex-item-" + Te(i, /flex-|-self/, "") + i;
    case 4675:
      return De + i + Ht + "flex-line-pack" + Te(i, /align-content|flex-|-self/, "") + i;
    case 5548:
      return De + i + Ht + Te(i, "shrink", "negative") + i;
    case 5292:
      return De + i + Ht + Te(i, "basis", "preferred-size") + i;
    case 6060:
      return De + "box-" + Te(i, "-grow", "") + De + i + Ht + Te(i, "grow", "positive") + i;
    case 4554:
      return De + Te(i, /([^-])(transform)/g, "$1" + De + "$2") + i;
    case 6187:
      return Te(Te(Te(i, /(zoom-|grab)/, De + "$1"), /(image-set)/, De + "$1"), i, "") + i;
    case 5495:
    case 3959:
      return Te(i, /(image-set\([^]*)/, De + "$1$`$1");
    case 4968:
      return Te(Te(i, /(.+:)(flex-)?(.*)/, De + "box-pack:$3" + Ht + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + De + i + i;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Te(i, /(.+)-inline(.+)/, De + "$1$2") + i;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (p1(i) - 1 - l > 6)
        switch (xt(i, l + 1)) {
          case 109:
            if (xt(i, l + 4) !== 45)
              break;
          case 102:
            return Te(i, /(.+:)(.+)-([^]+)/, "$1" + De + "$2-$3$1" + H2 + (xt(i, l + 3) == 108 ? "$3" : "$2-$3")) + i;
          case 115:
            return ~z3(i, "stretch") ? x4(Te(i, "stretch", "fill-available"), l) + i : i;
        }
      break;
    case 4949:
      if (xt(i, l + 1) !== 115)
        break;
    case 6444:
      switch (xt(i, p1(i) - 3 - (~z3(i, "!important") && 10))) {
        case 107:
          return Te(i, ":", ":" + De) + i;
        case 101:
          return Te(i, /(.+:)([^;!]+)(;|!.+)?/, "$1" + De + (xt(i, 14) === 45 ? "inline-" : "") + "box$3$1" + De + "$2$3$1" + Ht + "$2box$3") + i;
      }
      break;
    case 5936:
      switch (xt(i, l + 11)) {
        case 114:
          return De + i + Ht + Te(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return De + i + Ht + Te(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return De + i + Ht + Te(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
      return De + i + Ht + i + i;
  }
  return i;
}
var Wu = function(l, r, a, u) {
  if (l.length > -1 && !l.return)
    switch (l.type) {
      case C3:
        l.return = x4(l.value, l.length);
        break;
      case v4:
        return yr([cn(l, {
          value: Te(l.value, "@", "@" + De)
        })], u);
      case S3:
        if (l.length)
          return xu(l.props, function(m) {
            switch (zu(m, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return yr([cn(l, {
                  props: [Te(m, /:(read-\w+)/, ":" + H2 + "$1")]
                })], u);
              case "::placeholder":
                return yr([cn(l, {
                  props: [Te(m, /:(plac\w+)/, ":" + De + "input-$1")]
                }), cn(l, {
                  props: [Te(m, /:(plac\w+)/, ":" + H2 + "$1")]
                }), cn(l, {
                  props: [Te(m, /:(plac\w+)/, Ht + "input-$1")]
                })], u);
            }
            return "";
          });
    }
}, Uu = [Wu], Gu = function(l) {
  var r = l.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(E) {
      var M = E.getAttribute("data-emotion");
      M.indexOf(" ") !== -1 && (document.head.appendChild(E), E.setAttribute("data-s", ""));
    });
  }
  var u = l.stylisPlugins || Uu;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var m = {}, d, x = [];
  d = l.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(E) {
      for (var M = E.getAttribute("data-emotion").split(" "), B = 1; B < M.length; B++)
        m[M[B]] = !0;
      x.push(E);
    }
  );
  var F, b = [Ru, Iu];
  process.env.NODE_ENV !== "production" && b.push(Nu({
    get compat() {
      return R.compat;
    }
  }), $u);
  {
    var _, C = [Cu, process.env.NODE_ENV !== "production" ? function(E) {
      E.root || (E.return ? _.insert(E.return) : E.value && E.type !== A3 && _.insert(E.value + "{}"));
    } : Tu(function(E) {
      _.insert(E);
    })], S = Du(b.concat(u, C)), V = function(M) {
      return yr(Au(M), S);
    };
    F = function(M, B, k, $) {
      _ = k, process.env.NODE_ENV !== "production" && B.map !== void 0 && (_ = {
        insert: function(A) {
          k.insert(A + B.map);
        }
      }), V(M ? M + "{" + B.styles + "}" : B.styles), $ && (R.inserted[B.name] = !0);
    };
  }
  var R = {
    key: r,
    sheet: new du({
      key: r,
      container: d,
      nonce: l.nonce,
      speedy: l.speedy,
      prepend: l.prepend,
      insertionPoint: l.insertionPoint
    }),
    nonce: l.nonce,
    inserted: m,
    registered: {},
    insert: F
  };
  return R.sheet.hydrate(x), R;
}, d2 = { exports: {} }, Re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function Ku() {
  if (Ma)
    return Re;
  Ma = 1;
  var i = typeof Symbol == "function" && Symbol.for, l = i ? Symbol.for("react.element") : 60103, r = i ? Symbol.for("react.portal") : 60106, a = i ? Symbol.for("react.fragment") : 60107, u = i ? Symbol.for("react.strict_mode") : 60108, m = i ? Symbol.for("react.profiler") : 60114, d = i ? Symbol.for("react.provider") : 60109, x = i ? Symbol.for("react.context") : 60110, F = i ? Symbol.for("react.async_mode") : 60111, b = i ? Symbol.for("react.concurrent_mode") : 60111, _ = i ? Symbol.for("react.forward_ref") : 60112, C = i ? Symbol.for("react.suspense") : 60113, S = i ? Symbol.for("react.suspense_list") : 60120, V = i ? Symbol.for("react.memo") : 60115, R = i ? Symbol.for("react.lazy") : 60116, E = i ? Symbol.for("react.block") : 60121, M = i ? Symbol.for("react.fundamental") : 60117, B = i ? Symbol.for("react.responder") : 60118, k = i ? Symbol.for("react.scope") : 60119;
  function $(A) {
    if (typeof A == "object" && A !== null) {
      var J = A.$$typeof;
      switch (J) {
        case l:
          switch (A = A.type, A) {
            case F:
            case b:
            case a:
            case m:
            case u:
            case C:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case x:
                case _:
                case R:
                case V:
                case d:
                  return A;
                default:
                  return J;
              }
          }
        case r:
          return J;
      }
    }
  }
  function G(A) {
    return $(A) === b;
  }
  return Re.AsyncMode = F, Re.ConcurrentMode = b, Re.ContextConsumer = x, Re.ContextProvider = d, Re.Element = l, Re.ForwardRef = _, Re.Fragment = a, Re.Lazy = R, Re.Memo = V, Re.Portal = r, Re.Profiler = m, Re.StrictMode = u, Re.Suspense = C, Re.isAsyncMode = function(A) {
    return G(A) || $(A) === F;
  }, Re.isConcurrentMode = G, Re.isContextConsumer = function(A) {
    return $(A) === x;
  }, Re.isContextProvider = function(A) {
    return $(A) === d;
  }, Re.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === l;
  }, Re.isForwardRef = function(A) {
    return $(A) === _;
  }, Re.isFragment = function(A) {
    return $(A) === a;
  }, Re.isLazy = function(A) {
    return $(A) === R;
  }, Re.isMemo = function(A) {
    return $(A) === V;
  }, Re.isPortal = function(A) {
    return $(A) === r;
  }, Re.isProfiler = function(A) {
    return $(A) === m;
  }, Re.isStrictMode = function(A) {
    return $(A) === u;
  }, Re.isSuspense = function(A) {
    return $(A) === C;
  }, Re.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === a || A === b || A === m || A === u || A === C || A === S || typeof A == "object" && A !== null && (A.$$typeof === R || A.$$typeof === V || A.$$typeof === d || A.$$typeof === x || A.$$typeof === _ || A.$$typeof === M || A.$$typeof === B || A.$$typeof === k || A.$$typeof === E);
  }, Re.typeOf = $, Re;
}
var Ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Yu() {
  return Fa || (Fa = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, l = i ? Symbol.for("react.element") : 60103, r = i ? Symbol.for("react.portal") : 60106, a = i ? Symbol.for("react.fragment") : 60107, u = i ? Symbol.for("react.strict_mode") : 60108, m = i ? Symbol.for("react.profiler") : 60114, d = i ? Symbol.for("react.provider") : 60109, x = i ? Symbol.for("react.context") : 60110, F = i ? Symbol.for("react.async_mode") : 60111, b = i ? Symbol.for("react.concurrent_mode") : 60111, _ = i ? Symbol.for("react.forward_ref") : 60112, C = i ? Symbol.for("react.suspense") : 60113, S = i ? Symbol.for("react.suspense_list") : 60120, V = i ? Symbol.for("react.memo") : 60115, R = i ? Symbol.for("react.lazy") : 60116, E = i ? Symbol.for("react.block") : 60121, M = i ? Symbol.for("react.fundamental") : 60117, B = i ? Symbol.for("react.responder") : 60118, k = i ? Symbol.for("react.scope") : 60119;
    function $(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === a || U === b || U === m || U === u || U === C || U === S || typeof U == "object" && U !== null && (U.$$typeof === R || U.$$typeof === V || U.$$typeof === d || U.$$typeof === x || U.$$typeof === _ || U.$$typeof === M || U.$$typeof === B || U.$$typeof === k || U.$$typeof === E);
    }
    function G(U) {
      if (typeof U == "object" && U !== null) {
        var st = U.$$typeof;
        switch (st) {
          case l:
            var q = U.type;
            switch (q) {
              case F:
              case b:
              case a:
              case m:
              case u:
              case C:
                return q;
              default:
                var ut = q && q.$$typeof;
                switch (ut) {
                  case x:
                  case _:
                  case R:
                  case V:
                  case d:
                    return ut;
                  default:
                    return st;
                }
            }
          case r:
            return st;
        }
      }
    }
    var A = F, J = b, j = x, Be = d, ge = l, Q = _, he = a, ke = R, Ae = V, Se = r, et = m, Je = u, Ue = C, Ge = !1;
    function At(U) {
      return Ge || (Ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(U) || G(U) === F;
    }
    function P(U) {
      return G(U) === b;
    }
    function W(U) {
      return G(U) === x;
    }
    function oe(U) {
      return G(U) === d;
    }
    function ae(U) {
      return typeof U == "object" && U !== null && U.$$typeof === l;
    }
    function ee(U) {
      return G(U) === _;
    }
    function re(U) {
      return G(U) === a;
    }
    function te(U) {
      return G(U) === R;
    }
    function fe(U) {
      return G(U) === V;
    }
    function se(U) {
      return G(U) === r;
    }
    function de(U) {
      return G(U) === m;
    }
    function ve(U) {
      return G(U) === u;
    }
    function Ke(U) {
      return G(U) === C;
    }
    Ie.AsyncMode = A, Ie.ConcurrentMode = J, Ie.ContextConsumer = j, Ie.ContextProvider = Be, Ie.Element = ge, Ie.ForwardRef = Q, Ie.Fragment = he, Ie.Lazy = ke, Ie.Memo = Ae, Ie.Portal = Se, Ie.Profiler = et, Ie.StrictMode = Je, Ie.Suspense = Ue, Ie.isAsyncMode = At, Ie.isConcurrentMode = P, Ie.isContextConsumer = W, Ie.isContextProvider = oe, Ie.isElement = ae, Ie.isForwardRef = ee, Ie.isFragment = re, Ie.isLazy = te, Ie.isMemo = fe, Ie.isPortal = se, Ie.isProfiler = de, Ie.isStrictMode = ve, Ie.isSuspense = Ke, Ie.isValidElementType = $, Ie.typeOf = G;
  }()), Ie;
}
var ya;
function M4() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? d2.exports = Ku() : d2.exports = Yu()), d2.exports;
}
var ju = !0;
function F4(i, l, r) {
  var a = "";
  return r.split(" ").forEach(function(u) {
    i[u] !== void 0 ? l.push(i[u] + ";") : a += u + " ";
  }), a;
}
var T3 = function(l, r, a) {
  var u = l.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ju === !1) && l.registered[u] === void 0 && (l.registered[u] = r.styles);
}, y4 = function(l, r, a) {
  T3(l, r, a);
  var u = l.key + "-" + r.name;
  if (l.inserted[r.name] === void 0) {
    var m = r;
    do
      l.insert(r === m ? "." + u : "", m, l.sheet, !0), m = m.next;
    while (m !== void 0);
  }
};
function qu(i) {
  for (var l = 0, r, a = 0, u = i.length; u >= 4; ++a, u -= 4)
    r = i.charCodeAt(a) & 255 | (i.charCodeAt(++a) & 255) << 8 | (i.charCodeAt(++a) & 255) << 16 | (i.charCodeAt(++a) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, l = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16);
  switch (u) {
    case 3:
      l ^= (i.charCodeAt(a + 2) & 255) << 16;
    case 2:
      l ^= (i.charCodeAt(a + 1) & 255) << 8;
    case 1:
      l ^= i.charCodeAt(a) & 255, l = /* Math.imul(h, m): */
      (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16);
  }
  return l ^= l >>> 13, l = /* Math.imul(h, m): */
  (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16), ((l ^ l >>> 15) >>> 0).toString(36);
}
var Zu = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ha = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ju = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Xu = /[A-Z]|^ms/g, H4 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, B3 = function(l) {
  return l.charCodeAt(1) === 45;
}, _a = function(l) {
  return l != null && typeof l != "boolean";
}, s3 = /* @__PURE__ */ d4(function(i) {
  return B3(i) ? i : i.replace(Xu, "-$&").toLowerCase();
}), _2 = function(l, r) {
  switch (l) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(H4, function(a, u, m) {
          return f1 = {
            name: u,
            styles: m,
            next: f1
          }, u;
        });
  }
  return Zu[l] !== 1 && !B3(l) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Qu = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ef = ["normal", "none", "initial", "inherit", "unset"], tf = _2, rf = /^-ms-/, nf = /-(.)/g, ba = {};
  _2 = function(l, r) {
    if (l === "content" && (typeof r != "string" || ef.indexOf(r) === -1 && !Qu.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var a = tf(l, r);
    return a !== "" && !B3(l) && l.indexOf("-") !== -1 && ba[l] === void 0 && (ba[l] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + l.replace(rf, "ms-").replace(nf, function(u, m) {
      return m.toUpperCase();
    }) + "?")), a;
  };
}
var _4 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function mn(i, l, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(_4);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return f1 = {
          name: r.name,
          styles: r.styles,
          next: f1
        }, r.name;
      if (r.styles !== void 0) {
        var a = r.next;
        if (a !== void 0)
          for (; a !== void 0; )
            f1 = {
              name: a.name,
              styles: a.styles,
              next: f1
            }, a = a.next;
        var u = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (u += r.map), u;
      }
      return lf(i, l, r);
    }
    case "function": {
      if (i !== void 0) {
        var m = f1, d = r(i);
        return f1 = m, mn(i, l, d);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var x = [], F = r.replace(H4, function(_, C, S) {
          var V = "animation" + x.length;
          return x.push("const " + V + " = keyframes`" + S.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + V + "}";
        });
        x.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(x, ["`" + F + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + F + "`"));
      }
      break;
  }
  if (l == null)
    return r;
  var b = l[r];
  return b !== void 0 ? b : r;
}
function lf(i, l, r) {
  var a = "";
  if (Array.isArray(r))
    for (var u = 0; u < r.length; u++)
      a += mn(i, l, r[u]) + ";";
  else
    for (var m in r) {
      var d = r[m];
      if (typeof d != "object")
        l != null && l[d] !== void 0 ? a += m + "{" + l[d] + "}" : _a(d) && (a += s3(m) + ":" + _2(m, d) + ";");
      else {
        if (m === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(_4);
        if (Array.isArray(d) && typeof d[0] == "string" && (l == null || l[d[0]] === void 0))
          for (var x = 0; x < d.length; x++)
            _a(d[x]) && (a += s3(m) + ":" + _2(m, d[x]) + ";");
        else {
          var F = mn(i, l, d);
          switch (m) {
            case "animation":
            case "animationName": {
              a += s3(m) + ":" + F + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && m === "undefined" && console.error(Ju), a += m + "{" + F + "}";
          }
        }
      }
    }
  return a;
}
var Aa = /label:\s*([^\s;\n{]+)\s*(;|$)/g, b4;
process.env.NODE_ENV !== "production" && (b4 = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var f1, M3 = function(l, r, a) {
  if (l.length === 1 && typeof l[0] == "object" && l[0] !== null && l[0].styles !== void 0)
    return l[0];
  var u = !0, m = "";
  f1 = void 0;
  var d = l[0];
  d == null || d.raw === void 0 ? (u = !1, m += mn(a, r, d)) : (process.env.NODE_ENV !== "production" && d[0] === void 0 && console.error(Ha), m += d[0]);
  for (var x = 1; x < l.length; x++)
    m += mn(a, r, l[x]), u && (process.env.NODE_ENV !== "production" && d[x] === void 0 && console.error(Ha), m += d[x]);
  var F;
  process.env.NODE_ENV !== "production" && (m = m.replace(b4, function(S) {
    return F = S, "";
  })), Aa.lastIndex = 0;
  for (var b = "", _; (_ = Aa.exec(m)) !== null; )
    b += "-" + // $FlowFixMe we know it's not null
    _[1];
  var C = qu(m) + b;
  return process.env.NODE_ENV !== "production" ? {
    name: C,
    styles: m,
    map: F,
    next: f1,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: C,
    styles: m,
    next: f1
  };
}, af = function(l) {
  return l();
}, cf = bt.useInsertionEffect ? bt.useInsertionEffect : !1, A4 = cf || af, of = {}.hasOwnProperty, L3 = /* @__PURE__ */ bt.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Gu({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (L3.displayName = "EmotionCacheContext");
L3.Provider;
var S4 = function(l) {
  return /* @__PURE__ */ Z8(function(r, a) {
    var u = J8(L3);
    return l(r, u, a);
  });
}, L2 = /* @__PURE__ */ bt.createContext({});
process.env.NODE_ENV !== "production" && (L2.displayName = "EmotionThemeContext");
var Sa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ca = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", sf = function(l) {
  var r = l.cache, a = l.serialized, u = l.isStringTag;
  return T3(r, a, u), A4(function() {
    return y4(r, a, u);
  }), null;
}, uf = /* @__PURE__ */ S4(function(i, l, r) {
  var a = i.css;
  typeof a == "string" && l.registered[a] !== void 0 && (a = l.registered[a]);
  var u = i[Sa], m = [a], d = "";
  typeof i.className == "string" ? d = F4(l.registered, m, i.className) : i.className != null && (d = i.className + " ");
  var x = M3(m, void 0, bt.useContext(L2));
  if (process.env.NODE_ENV !== "production" && x.name.indexOf("-") === -1) {
    var F = i[Ca];
    F && (x = M3([x, "label:" + F + ";"]));
  }
  d += l.key + "-" + x.name;
  var b = {};
  for (var _ in i)
    of.call(i, _) && _ !== "css" && _ !== Sa && (process.env.NODE_ENV === "production" || _ !== Ca) && (b[_] = i[_]);
  return b.ref = r, b.className = d, /* @__PURE__ */ bt.createElement(bt.Fragment, null, /* @__PURE__ */ bt.createElement(sf, {
    cache: l,
    serialized: x,
    isStringTag: typeof u == "string"
  }), /* @__PURE__ */ bt.createElement(u, b));
});
process.env.NODE_ENV !== "production" && (uf.displayName = "EmotionCssPropInternal");
var ff = fu, hf = function(l) {
  return l !== "theme";
}, Da = function(l) {
  return typeof l == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  l.charCodeAt(0) > 96 ? ff : hf;
}, Ta = function(l, r, a) {
  var u;
  if (r) {
    var m = r.shouldForwardProp;
    u = l.__emotion_forwardProp && m ? function(d) {
      return l.__emotion_forwardProp(d) && m(d);
    } : m;
  }
  return typeof u != "function" && a && (u = l.__emotion_forwardProp), u;
}, Ba = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, mf = function(l) {
  var r = l.cache, a = l.serialized, u = l.isStringTag;
  return T3(r, a, u), A4(function() {
    return y4(r, a, u);
  }), null;
}, df = function i(l, r) {
  if (process.env.NODE_ENV !== "production" && l === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var a = l.__emotion_real === l, u = a && l.__emotion_base || l, m, d;
  r !== void 0 && (m = r.label, d = r.target);
  var x = Ta(l, r, a), F = x || Da(u), b = !F("as");
  return function() {
    var _ = arguments, C = a && l.__emotion_styles !== void 0 ? l.__emotion_styles.slice(0) : [];
    if (m !== void 0 && C.push("label:" + m + ";"), _[0] == null || _[0].raw === void 0)
      C.push.apply(C, _);
    else {
      process.env.NODE_ENV !== "production" && _[0][0] === void 0 && console.error(Ba), C.push(_[0][0]);
      for (var S = _.length, V = 1; V < S; V++)
        process.env.NODE_ENV !== "production" && _[0][V] === void 0 && console.error(Ba), C.push(_[V], _[0][V]);
    }
    var R = S4(function(E, M, B) {
      var k = b && E.as || u, $ = "", G = [], A = E;
      if (E.theme == null) {
        A = {};
        for (var J in E)
          A[J] = E[J];
        A.theme = bt.useContext(L2);
      }
      typeof E.className == "string" ? $ = F4(M.registered, G, E.className) : E.className != null && ($ = E.className + " ");
      var j = M3(C.concat(G), M.registered, A);
      $ += M.key + "-" + j.name, d !== void 0 && ($ += " " + d);
      var Be = b && x === void 0 ? Da(k) : F, ge = {};
      for (var Q in E)
        b && Q === "as" || // $FlowFixMe
        Be(Q) && (ge[Q] = E[Q]);
      return ge.className = $, ge.ref = B, /* @__PURE__ */ bt.createElement(bt.Fragment, null, /* @__PURE__ */ bt.createElement(mf, {
        cache: M,
        serialized: j,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ bt.createElement(k, ge));
    });
    return R.displayName = m !== void 0 ? m : "Styled(" + (typeof u == "string" ? u : u.displayName || u.name || "Component") + ")", R.defaultProps = l.defaultProps, R.__emotion_real = R, R.__emotion_base = u, R.__emotion_styles = C, R.__emotion_forwardProp = x, Object.defineProperty(R, "toString", {
      value: function() {
        return d === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + d;
      }
    }), R.withComponent = function(E, M) {
      return i(E, y2({}, r, M, {
        shouldForwardProp: Ta(R, M, !0)
      })).apply(void 0, C);
    }, R;
  };
}, vf = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], F3 = df.bind();
vf.forEach(function(i) {
  F3[i] = F3(i);
});
var y3 = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var u3, La;
function pf() {
  if (La)
    return u3;
  La = 1;
  var i = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function a(m) {
    if (m == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(m);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var m = new String("abc");
      if (m[5] = "de", Object.getOwnPropertyNames(m)[0] === "5")
        return !1;
      for (var d = {}, x = 0; x < 10; x++)
        d["_" + String.fromCharCode(x)] = x;
      var F = Object.getOwnPropertyNames(d).map(function(_) {
        return d[_];
      });
      if (F.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        b[_] = _;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return u3 = u() ? Object.assign : function(m, d) {
    for (var x, F = a(m), b, _ = 1; _ < arguments.length; _++) {
      x = Object(arguments[_]);
      for (var C in x)
        l.call(x, C) && (F[C] = x[C]);
      if (i) {
        b = i(x);
        for (var S = 0; S < b.length; S++)
          r.call(x, b[S]) && (F[b[S]] = x[b[S]]);
      }
    }
    return F;
  }, u3;
}
var f3, Oa;
function O3() {
  if (Oa)
    return f3;
  Oa = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return f3 = i, f3;
}
var h3, Ra;
function C4() {
  return Ra || (Ra = 1, h3 = Function.call.bind(Object.prototype.hasOwnProperty)), h3;
}
var m3, Ia;
function Ef() {
  if (Ia)
    return m3;
  Ia = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var l = O3(), r = {}, a = C4();
    i = function(m) {
      var d = "Warning: " + m;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function u(m, d, x, F, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var _ in m)
        if (a(m, _)) {
          var C;
          try {
            if (typeof m[_] != "function") {
              var S = Error(
                (F || "React class") + ": " + x + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            C = m[_](d, _, F, x, null, l);
          } catch (R) {
            C = R;
          }
          if (C && !(C instanceof Error) && i(
            (F || "React class") + ": type specification of " + x + " `" + _ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof C + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), C instanceof Error && !(C.message in r)) {
            r[C.message] = !0;
            var V = b ? b() : "";
            i(
              "Failed " + x + " type: " + C.message + (V ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, m3 = u, m3;
}
var d3, Pa;
function gf() {
  if (Pa)
    return d3;
  Pa = 1;
  var i = M4(), l = pf(), r = O3(), a = C4(), u = Ef(), m = function() {
  };
  process.env.NODE_ENV !== "production" && (m = function(x) {
    var F = "Warning: " + x;
    typeof console < "u" && console.error(F);
    try {
      throw new Error(F);
    } catch {
    }
  });
  function d() {
    return null;
  }
  return d3 = function(x, F) {
    var b = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
    function C(P) {
      var W = P && (b && P[b] || P[_]);
      if (typeof W == "function")
        return W;
    }
    var S = "<<anonymous>>", V = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: k(),
      arrayOf: $,
      element: G(),
      elementType: A(),
      instanceOf: J,
      node: Q(),
      objectOf: Be,
      oneOf: j,
      oneOfType: ge,
      shape: ke,
      exact: Ae
    };
    function R(P, W) {
      return P === W ? P !== 0 || 1 / P === 1 / W : P !== P && W !== W;
    }
    function E(P, W) {
      this.message = P, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function M(P) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, oe = 0;
      function ae(re, te, fe, se, de, ve, Ke) {
        if (se = se || S, ve = ve || fe, Ke !== r) {
          if (F) {
            var U = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw U.name = "Invariant Violation", U;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var st = se + ":" + fe;
            !W[st] && // Avoid spamming the console because they are often not actionable except for lib authors
            oe < 3 && (m(
              "You are manually calling a React.PropTypes validation function for the `" + ve + "` prop on `" + se + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[st] = !0, oe++);
          }
        }
        return te[fe] == null ? re ? te[fe] === null ? new E("The " + de + " `" + ve + "` is marked as required " + ("in `" + se + "`, but its value is `null`.")) : new E("The " + de + " `" + ve + "` is marked as required in " + ("`" + se + "`, but its value is `undefined`.")) : null : P(te, fe, se, de, ve);
      }
      var ee = ae.bind(null, !1);
      return ee.isRequired = ae.bind(null, !0), ee;
    }
    function B(P) {
      function W(oe, ae, ee, re, te, fe) {
        var se = oe[ae], de = Je(se);
        if (de !== P) {
          var ve = Ue(se);
          return new E(
            "Invalid " + re + " `" + te + "` of type " + ("`" + ve + "` supplied to `" + ee + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return M(W);
    }
    function k() {
      return M(d);
    }
    function $(P) {
      function W(oe, ae, ee, re, te) {
        if (typeof P != "function")
          return new E("Property `" + te + "` of component `" + ee + "` has invalid PropType notation inside arrayOf.");
        var fe = oe[ae];
        if (!Array.isArray(fe)) {
          var se = Je(fe);
          return new E("Invalid " + re + " `" + te + "` of type " + ("`" + se + "` supplied to `" + ee + "`, expected an array."));
        }
        for (var de = 0; de < fe.length; de++) {
          var ve = P(fe, de, ee, re, te + "[" + de + "]", r);
          if (ve instanceof Error)
            return ve;
        }
        return null;
      }
      return M(W);
    }
    function G() {
      function P(W, oe, ae, ee, re) {
        var te = W[oe];
        if (!x(te)) {
          var fe = Je(te);
          return new E("Invalid " + ee + " `" + re + "` of type " + ("`" + fe + "` supplied to `" + ae + "`, expected a single ReactElement."));
        }
        return null;
      }
      return M(P);
    }
    function A() {
      function P(W, oe, ae, ee, re) {
        var te = W[oe];
        if (!i.isValidElementType(te)) {
          var fe = Je(te);
          return new E("Invalid " + ee + " `" + re + "` of type " + ("`" + fe + "` supplied to `" + ae + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return M(P);
    }
    function J(P) {
      function W(oe, ae, ee, re, te) {
        if (!(oe[ae] instanceof P)) {
          var fe = P.name || S, se = At(oe[ae]);
          return new E("Invalid " + re + " `" + te + "` of type " + ("`" + se + "` supplied to `" + ee + "`, expected ") + ("instance of `" + fe + "`."));
        }
        return null;
      }
      return M(W);
    }
    function j(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? m(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : m("Invalid argument supplied to oneOf, expected an array.")), d;
      function W(oe, ae, ee, re, te) {
        for (var fe = oe[ae], se = 0; se < P.length; se++)
          if (R(fe, P[se]))
            return null;
        var de = JSON.stringify(P, function(Ke, U) {
          var st = Ue(U);
          return st === "symbol" ? String(U) : U;
        });
        return new E("Invalid " + re + " `" + te + "` of value `" + String(fe) + "` " + ("supplied to `" + ee + "`, expected one of " + de + "."));
      }
      return M(W);
    }
    function Be(P) {
      function W(oe, ae, ee, re, te) {
        if (typeof P != "function")
          return new E("Property `" + te + "` of component `" + ee + "` has invalid PropType notation inside objectOf.");
        var fe = oe[ae], se = Je(fe);
        if (se !== "object")
          return new E("Invalid " + re + " `" + te + "` of type " + ("`" + se + "` supplied to `" + ee + "`, expected an object."));
        for (var de in fe)
          if (a(fe, de)) {
            var ve = P(fe, de, ee, re, te + "." + de, r);
            if (ve instanceof Error)
              return ve;
          }
        return null;
      }
      return M(W);
    }
    function ge(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && m("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var W = 0; W < P.length; W++) {
        var oe = P[W];
        if (typeof oe != "function")
          return m(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ge(oe) + " at index " + W + "."
          ), d;
      }
      function ae(ee, re, te, fe, se) {
        for (var de = [], ve = 0; ve < P.length; ve++) {
          var Ke = P[ve], U = Ke(ee, re, te, fe, se, r);
          if (U == null)
            return null;
          U.data && a(U.data, "expectedType") && de.push(U.data.expectedType);
        }
        var st = de.length > 0 ? ", expected one of type [" + de.join(", ") + "]" : "";
        return new E("Invalid " + fe + " `" + se + "` supplied to " + ("`" + te + "`" + st + "."));
      }
      return M(ae);
    }
    function Q() {
      function P(W, oe, ae, ee, re) {
        return Se(W[oe]) ? null : new E("Invalid " + ee + " `" + re + "` supplied to " + ("`" + ae + "`, expected a ReactNode."));
      }
      return M(P);
    }
    function he(P, W, oe, ae, ee) {
      return new E(
        (P || "React class") + ": " + W + " type `" + oe + "." + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ee + "`."
      );
    }
    function ke(P) {
      function W(oe, ae, ee, re, te) {
        var fe = oe[ae], se = Je(fe);
        if (se !== "object")
          return new E("Invalid " + re + " `" + te + "` of type `" + se + "` " + ("supplied to `" + ee + "`, expected `object`."));
        for (var de in P) {
          var ve = P[de];
          if (typeof ve != "function")
            return he(ee, re, te, de, Ue(ve));
          var Ke = ve(fe, de, ee, re, te + "." + de, r);
          if (Ke)
            return Ke;
        }
        return null;
      }
      return M(W);
    }
    function Ae(P) {
      function W(oe, ae, ee, re, te) {
        var fe = oe[ae], se = Je(fe);
        if (se !== "object")
          return new E("Invalid " + re + " `" + te + "` of type `" + se + "` " + ("supplied to `" + ee + "`, expected `object`."));
        var de = l({}, oe[ae], P);
        for (var ve in de) {
          var Ke = P[ve];
          if (a(P, ve) && typeof Ke != "function")
            return he(ee, re, te, ve, Ue(Ke));
          if (!Ke)
            return new E(
              "Invalid " + re + " `" + te + "` key `" + ve + "` supplied to `" + ee + "`.\nBad object: " + JSON.stringify(oe[ae], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var U = Ke(fe, ve, ee, re, te + "." + ve, r);
          if (U)
            return U;
        }
        return null;
      }
      return M(W);
    }
    function Se(P) {
      switch (typeof P) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !P;
        case "object":
          if (Array.isArray(P))
            return P.every(Se);
          if (P === null || x(P))
            return !0;
          var W = C(P);
          if (W) {
            var oe = W.call(P), ae;
            if (W !== P.entries) {
              for (; !(ae = oe.next()).done; )
                if (!Se(ae.value))
                  return !1;
            } else
              for (; !(ae = oe.next()).done; ) {
                var ee = ae.value;
                if (ee && !Se(ee[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function et(P, W) {
      return P === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function Je(P) {
      var W = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : et(W, P) ? "symbol" : W;
    }
    function Ue(P) {
      if (typeof P > "u" || P === null)
        return "" + P;
      var W = Je(P);
      if (W === "object") {
        if (P instanceof Date)
          return "date";
        if (P instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function Ge(P) {
      var W = Ue(P);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function At(P) {
      return !P.constructor || !P.constructor.name ? S : P.constructor.name;
    }
    return V.checkPropTypes = u, V.resetWarningCache = u.resetWarningCache, V.PropTypes = V, V;
  }, d3;
}
var v3, Va;
function wf() {
  if (Va)
    return v3;
  Va = 1;
  var i = O3();
  function l() {
  }
  function r() {
  }
  return r.resetWarningCache = l, v3 = function() {
    function a(d, x, F, b, _, C) {
      if (C !== i) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
      }
    }
    a.isRequired = a;
    function u() {
      return a;
    }
    var m = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: u,
      element: a,
      elementType: a,
      instanceOf: u,
      node: a,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: r,
      resetWarningCache: l
    };
    return m.PropTypes = m, m;
  }, v3;
}
if (process.env.NODE_ENV !== "production") {
  var zf = M4(), xf = !0;
  y3.exports = gf()(zf.isElement, xf);
} else
  y3.exports = wf()();
var Mf = y3.exports;
const on = /* @__PURE__ */ iu(Mf);
/**
 * @mui/styled-engine v5.15.7
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ff(i, l) {
  const r = F3(i, l);
  return process.env.NODE_ENV !== "production" ? (...a) => {
    const u = typeof i == "string" ? `"${i}"` : "component";
    return a.length === 0 ? console.error([`MUI: Seems like you called \`styled(${u})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : a.some((m) => m === void 0) && console.error(`MUI: the styled(${u})(...args) API requires all its args to be defined.`), r(...a);
  } : r;
}
const yf = (i, l) => {
  Array.isArray(i.__emotion_styles) && (i.__emotion_styles = l(i.__emotion_styles));
};
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(i) {
    for (var l = 1; l < arguments.length; l++) {
      var r = arguments[l];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, _t.apply(this, arguments);
}
function O2(i, l) {
  if (i == null)
    return {};
  var r = {}, a = Object.keys(i), u, m;
  for (m = 0; m < a.length; m++)
    u = a[m], !(l.indexOf(u) >= 0) && (r[u] = i[u]);
  return r;
}
function H3() {
  return H3 = Object.assign ? Object.assign.bind() : function(i) {
    for (var l = 1; l < arguments.length; l++) {
      var r = arguments[l];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, H3.apply(this, arguments);
}
function $1(i) {
  if (typeof i != "object" || i === null)
    return !1;
  const l = Object.getPrototypeOf(i);
  return (l === null || l === Object.prototype || Object.getPrototypeOf(l) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}
function D4(i) {
  if (!$1(i))
    return i;
  const l = {};
  return Object.keys(i).forEach((r) => {
    l[r] = D4(i[r]);
  }), l;
}
function h1(i, l, r = {
  clone: !0
}) {
  const a = r.clone ? H3({}, i) : i;
  return $1(i) && $1(l) && Object.keys(l).forEach((u) => {
    u !== "__proto__" && ($1(l[u]) && u in i && $1(i[u]) ? a[u] = h1(i[u], l[u], r) : r.clone ? a[u] = $1(l[u]) ? D4(l[u]) : l[u] : a[u] = l[u]);
  }), a;
}
var _3 = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function Hf() {
  if (Na)
    return Pe;
  Na = 1;
  var i = Symbol.for("react.element"), l = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), d = Symbol.for("react.context"), x = Symbol.for("react.server_context"), F = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), R;
  R = Symbol.for("react.module.reference");
  function E(M) {
    if (typeof M == "object" && M !== null) {
      var B = M.$$typeof;
      switch (B) {
        case i:
          switch (M = M.type, M) {
            case r:
            case u:
            case a:
            case b:
            case _:
              return M;
            default:
              switch (M = M && M.$$typeof, M) {
                case x:
                case d:
                case F:
                case S:
                case C:
                case m:
                  return M;
                default:
                  return B;
              }
          }
        case l:
          return B;
      }
    }
  }
  return Pe.ContextConsumer = d, Pe.ContextProvider = m, Pe.Element = i, Pe.ForwardRef = F, Pe.Fragment = r, Pe.Lazy = S, Pe.Memo = C, Pe.Portal = l, Pe.Profiler = u, Pe.StrictMode = a, Pe.Suspense = b, Pe.SuspenseList = _, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(M) {
    return E(M) === d;
  }, Pe.isContextProvider = function(M) {
    return E(M) === m;
  }, Pe.isElement = function(M) {
    return typeof M == "object" && M !== null && M.$$typeof === i;
  }, Pe.isForwardRef = function(M) {
    return E(M) === F;
  }, Pe.isFragment = function(M) {
    return E(M) === r;
  }, Pe.isLazy = function(M) {
    return E(M) === S;
  }, Pe.isMemo = function(M) {
    return E(M) === C;
  }, Pe.isPortal = function(M) {
    return E(M) === l;
  }, Pe.isProfiler = function(M) {
    return E(M) === u;
  }, Pe.isStrictMode = function(M) {
    return E(M) === a;
  }, Pe.isSuspense = function(M) {
    return E(M) === b;
  }, Pe.isSuspenseList = function(M) {
    return E(M) === _;
  }, Pe.isValidElementType = function(M) {
    return typeof M == "string" || typeof M == "function" || M === r || M === u || M === a || M === b || M === _ || M === V || typeof M == "object" && M !== null && (M.$$typeof === S || M.$$typeof === C || M.$$typeof === m || M.$$typeof === d || M.$$typeof === F || M.$$typeof === R || M.getModuleId !== void 0);
  }, Pe.typeOf = E, Pe;
}
var Ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function _f() {
  return ka || (ka = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Symbol.for("react.element"), l = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), d = Symbol.for("react.context"), x = Symbol.for("react.server_context"), F = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), R = !1, E = !1, M = !1, B = !1, k = !1, $;
    $ = Symbol.for("react.module.reference");
    function G(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === r || q === u || k || q === a || q === b || q === _ || B || q === V || R || E || M || typeof q == "object" && q !== null && (q.$$typeof === S || q.$$typeof === C || q.$$typeof === m || q.$$typeof === d || q.$$typeof === F || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === $ || q.getModuleId !== void 0));
    }
    function A(q) {
      if (typeof q == "object" && q !== null) {
        var ut = q.$$typeof;
        switch (ut) {
          case i:
            var ue = q.type;
            switch (ue) {
              case r:
              case u:
              case a:
              case b:
              case _:
                return ue;
              default:
                var He = ue && ue.$$typeof;
                switch (He) {
                  case x:
                  case d:
                  case F:
                  case S:
                  case C:
                  case m:
                    return He;
                  default:
                    return ut;
                }
            }
          case l:
            return ut;
        }
      }
    }
    var J = d, j = m, Be = i, ge = F, Q = r, he = S, ke = C, Ae = l, Se = u, et = a, Je = b, Ue = _, Ge = !1, At = !1;
    function P(q) {
      return Ge || (Ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(q) {
      return At || (At = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(q) {
      return A(q) === d;
    }
    function ae(q) {
      return A(q) === m;
    }
    function ee(q) {
      return typeof q == "object" && q !== null && q.$$typeof === i;
    }
    function re(q) {
      return A(q) === F;
    }
    function te(q) {
      return A(q) === r;
    }
    function fe(q) {
      return A(q) === S;
    }
    function se(q) {
      return A(q) === C;
    }
    function de(q) {
      return A(q) === l;
    }
    function ve(q) {
      return A(q) === u;
    }
    function Ke(q) {
      return A(q) === a;
    }
    function U(q) {
      return A(q) === b;
    }
    function st(q) {
      return A(q) === _;
    }
    Ve.ContextConsumer = J, Ve.ContextProvider = j, Ve.Element = Be, Ve.ForwardRef = ge, Ve.Fragment = Q, Ve.Lazy = he, Ve.Memo = ke, Ve.Portal = Ae, Ve.Profiler = Se, Ve.StrictMode = et, Ve.Suspense = Je, Ve.SuspenseList = Ue, Ve.isAsyncMode = P, Ve.isConcurrentMode = W, Ve.isContextConsumer = oe, Ve.isContextProvider = ae, Ve.isElement = ee, Ve.isForwardRef = re, Ve.isFragment = te, Ve.isLazy = fe, Ve.isMemo = se, Ve.isPortal = de, Ve.isProfiler = ve, Ve.isStrictMode = Ke, Ve.isSuspense = U, Ve.isSuspenseList = st, Ve.isValidElementType = G, Ve.typeOf = A;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? _3.exports = Hf() : _3.exports = _f();
var $a = _3.exports;
const bf = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Af(i) {
  const l = `${i}`.match(bf);
  return l && l[1] || "";
}
function T4(i, l = "") {
  return i.displayName || i.name || Af(i) || l;
}
function Wa(i, l, r) {
  const a = T4(l);
  return i.displayName || (a !== "" ? `${r}(${a})` : r);
}
function Sf(i) {
  if (i != null) {
    if (typeof i == "string")
      return i;
    if (typeof i == "function")
      return T4(i, "Component");
    if (typeof i == "object")
      switch (i.$$typeof) {
        case $a.ForwardRef:
          return Wa(i, i.render, "ForwardRef");
        case $a.Memo:
          return Wa(i, i.type, "memo");
        default:
          return;
      }
  }
}
function Hr(i) {
  if (typeof i != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : br(7));
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Ua = (i) => i, Cf = () => {
  let i = Ua;
  return {
    configure(l) {
      i = l;
    },
    generate(l) {
      return i(l);
    },
    reset() {
      i = Ua;
    }
  };
}, Df = Cf(), Tf = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Bf(i, l, r = "Mui") {
  const a = Tf[l];
  return a ? `${r}-${a}` : `${Df.generate(i)}-${l}`;
}
function Lf(i, l = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(l, Math.min(i, r));
}
const Of = ["values", "unit", "step"], Rf = (i) => {
  const l = Object.keys(i).map((r) => ({
    key: r,
    val: i[r]
  })) || [];
  return l.sort((r, a) => r.val - a.val), l.reduce((r, a) => _t({}, r, {
    [a.key]: a.val
  }), {});
};
function If(i) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: l = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: a = 5
  } = i, u = O2(i, Of), m = Rf(l), d = Object.keys(m);
  function x(S) {
    return `@media (min-width:${typeof l[S] == "number" ? l[S] : S}${r})`;
  }
  function F(S) {
    return `@media (max-width:${(typeof l[S] == "number" ? l[S] : S) - a / 100}${r})`;
  }
  function b(S, V) {
    const R = d.indexOf(V);
    return `@media (min-width:${typeof l[S] == "number" ? l[S] : S}${r}) and (max-width:${(R !== -1 && typeof l[d[R]] == "number" ? l[d[R]] : V) - a / 100}${r})`;
  }
  function _(S) {
    return d.indexOf(S) + 1 < d.length ? b(S, d[d.indexOf(S) + 1]) : x(S);
  }
  function C(S) {
    const V = d.indexOf(S);
    return V === 0 ? x(d[1]) : V === d.length - 1 ? F(d[V]) : b(S, d[d.indexOf(S) + 1]).replace("@media", "@media not all and");
  }
  return _t({
    keys: d,
    values: m,
    up: x,
    down: F,
    between: b,
    only: _,
    not: C,
    unit: r
  }, u);
}
const Pf = {
  borderRadius: 4
}, Vf = Pf, Nf = process.env.NODE_ENV !== "production" ? on.oneOfType([on.number, on.string, on.object, on.array]) : {}, W1 = Nf;
function un(i, l) {
  return l ? h1(i, l, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : i;
}
const R3 = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ga = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (i) => `@media (min-width:${R3[i]}px)`
};
function S1(i, l, r) {
  const a = i.theme || {};
  if (Array.isArray(l)) {
    const m = a.breakpoints || Ga;
    return l.reduce((d, x, F) => (d[m.up(m.keys[F])] = r(l[F]), d), {});
  }
  if (typeof l == "object") {
    const m = a.breakpoints || Ga;
    return Object.keys(l).reduce((d, x) => {
      if (Object.keys(m.values || R3).indexOf(x) !== -1) {
        const F = m.up(x);
        d[F] = r(l[x], x);
      } else {
        const F = x;
        d[F] = l[F];
      }
      return d;
    }, {});
  }
  return r(l);
}
function kf(i = {}) {
  var l;
  return ((l = i.keys) == null ? void 0 : l.reduce((a, u) => {
    const m = i.up(u);
    return a[m] = {}, a;
  }, {})) || {};
}
function $f(i, l) {
  return i.reduce((r, a) => {
    const u = r[a];
    return (!u || Object.keys(u).length === 0) && delete r[a], r;
  }, l);
}
function R2(i, l, r = !0) {
  if (!l || typeof l != "string")
    return null;
  if (i && i.vars && r) {
    const a = `vars.${l}`.split(".").reduce((u, m) => u && u[m] ? u[m] : null, i);
    if (a != null)
      return a;
  }
  return l.split(".").reduce((a, u) => a && a[u] != null ? a[u] : null, i);
}
function b2(i, l, r, a = r) {
  let u;
  return typeof i == "function" ? u = i(r) : Array.isArray(i) ? u = i[r] || a : u = R2(i, r) || a, l && (u = l(u, a, i)), u;
}
function ct(i) {
  const {
    prop: l,
    cssProperty: r = i.prop,
    themeKey: a,
    transform: u
  } = i, m = (d) => {
    if (d[l] == null)
      return null;
    const x = d[l], F = d.theme, b = R2(F, a) || {};
    return S1(d, x, (C) => {
      let S = b2(b, u, C);
      return C === S && typeof C == "string" && (S = b2(b, u, `${l}${C === "default" ? "" : Hr(C)}`, C)), r === !1 ? S : {
        [r]: S
      };
    });
  };
  return m.propTypes = process.env.NODE_ENV !== "production" ? {
    [l]: W1
  } : {}, m.filterProps = [l], m;
}
function Wf(i) {
  const l = {};
  return (r) => (l[r] === void 0 && (l[r] = i(r)), l[r]);
}
const Uf = {
  m: "margin",
  p: "padding"
}, Gf = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ka = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Kf = Wf((i) => {
  if (i.length > 2)
    if (Ka[i])
      i = Ka[i];
    else
      return [i];
  const [l, r] = i.split(""), a = Uf[l], u = Gf[r] || "";
  return Array.isArray(u) ? u.map((m) => a + m) : [a + u];
}), I2 = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], P2 = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Yf = [...I2, ...P2];
function pn(i, l, r, a) {
  var u;
  const m = (u = R2(i, l, !1)) != null ? u : r;
  return typeof m == "number" ? (d) => typeof d == "string" ? d : (process.env.NODE_ENV !== "production" && typeof d != "number" && console.error(`MUI: Expected ${a} argument to be a number or a string, got ${d}.`), m * d) : Array.isArray(m) ? (d) => typeof d == "string" ? d : (process.env.NODE_ENV !== "production" && (Number.isInteger(d) ? d > m.length - 1 && console.error([`MUI: The value provided (${d}) overflows.`, `The supported values are: ${JSON.stringify(m)}.`, `${d} > ${m.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${l}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${l}\` as a number.`].join(`
`))), m[d]) : typeof m == "function" ? m : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${l}\` value (${m}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function B4(i) {
  return pn(i, "spacing", 8, "spacing");
}
function En(i, l) {
  if (typeof l == "string" || l == null)
    return l;
  const r = Math.abs(l), a = i(r);
  return l >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
}
function jf(i, l) {
  return (r) => i.reduce((a, u) => (a[u] = En(l, r), a), {});
}
function qf(i, l, r, a) {
  if (l.indexOf(r) === -1)
    return null;
  const u = Kf(r), m = jf(u, a), d = i[r];
  return S1(i, d, m);
}
function L4(i, l) {
  const r = B4(i.theme);
  return Object.keys(i).map((a) => qf(i, l, a, r)).reduce(un, {});
}
function nt(i) {
  return L4(i, I2);
}
nt.propTypes = process.env.NODE_ENV !== "production" ? I2.reduce((i, l) => (i[l] = W1, i), {}) : {};
nt.filterProps = I2;
function lt(i) {
  return L4(i, P2);
}
lt.propTypes = process.env.NODE_ENV !== "production" ? P2.reduce((i, l) => (i[l] = W1, i), {}) : {};
lt.filterProps = P2;
process.env.NODE_ENV !== "production" && Yf.reduce((i, l) => (i[l] = W1, i), {});
function Zf(i = 8) {
  if (i.mui)
    return i;
  const l = B4({
    spacing: i
  }), r = (...a) => (process.env.NODE_ENV !== "production" && (a.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${a.length}`)), (a.length === 0 ? [1] : a).map((m) => {
    const d = l(m);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" "));
  return r.mui = !0, r;
}
function V2(...i) {
  const l = i.reduce((a, u) => (u.filterProps.forEach((m) => {
    a[m] = u;
  }), a), {}), r = (a) => Object.keys(a).reduce((u, m) => l[m] ? un(u, l[m](a)) : u, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? i.reduce((a, u) => Object.assign(a, u.propTypes), {}) : {}, r.filterProps = i.reduce((a, u) => a.concat(u.filterProps), []), r;
}
function n1(i) {
  return typeof i != "number" ? i : `${i}px solid`;
}
function l1(i, l) {
  return ct({
    prop: i,
    themeKey: "borders",
    transform: l
  });
}
const Jf = l1("border", n1), Xf = l1("borderTop", n1), Qf = l1("borderRight", n1), e9 = l1("borderBottom", n1), t9 = l1("borderLeft", n1), r9 = l1("borderColor"), n9 = l1("borderTopColor"), l9 = l1("borderRightColor"), i9 = l1("borderBottomColor"), a9 = l1("borderLeftColor"), c9 = l1("outline", n1), o9 = l1("outlineColor"), N2 = (i) => {
  if (i.borderRadius !== void 0 && i.borderRadius !== null) {
    const l = pn(i.theme, "shape.borderRadius", 4, "borderRadius"), r = (a) => ({
      borderRadius: En(l, a)
    });
    return S1(i, i.borderRadius, r);
  }
  return null;
};
N2.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: W1
} : {};
N2.filterProps = ["borderRadius"];
V2(Jf, Xf, Qf, e9, t9, r9, n9, l9, i9, a9, N2, c9, o9);
const k2 = (i) => {
  if (i.gap !== void 0 && i.gap !== null) {
    const l = pn(i.theme, "spacing", 8, "gap"), r = (a) => ({
      gap: En(l, a)
    });
    return S1(i, i.gap, r);
  }
  return null;
};
k2.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: W1
} : {};
k2.filterProps = ["gap"];
const $2 = (i) => {
  if (i.columnGap !== void 0 && i.columnGap !== null) {
    const l = pn(i.theme, "spacing", 8, "columnGap"), r = (a) => ({
      columnGap: En(l, a)
    });
    return S1(i, i.columnGap, r);
  }
  return null;
};
$2.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: W1
} : {};
$2.filterProps = ["columnGap"];
const W2 = (i) => {
  if (i.rowGap !== void 0 && i.rowGap !== null) {
    const l = pn(i.theme, "spacing", 8, "rowGap"), r = (a) => ({
      rowGap: En(l, a)
    });
    return S1(i, i.rowGap, r);
  }
  return null;
};
W2.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: W1
} : {};
W2.filterProps = ["rowGap"];
const s9 = ct({
  prop: "gridColumn"
}), u9 = ct({
  prop: "gridRow"
}), f9 = ct({
  prop: "gridAutoFlow"
}), h9 = ct({
  prop: "gridAutoColumns"
}), m9 = ct({
  prop: "gridAutoRows"
}), d9 = ct({
  prop: "gridTemplateColumns"
}), v9 = ct({
  prop: "gridTemplateRows"
}), p9 = ct({
  prop: "gridTemplateAreas"
}), E9 = ct({
  prop: "gridArea"
});
V2(k2, $2, W2, s9, u9, f9, h9, m9, d9, v9, p9, E9);
function _r(i, l) {
  return l === "grey" ? l : i;
}
const g9 = ct({
  prop: "color",
  themeKey: "palette",
  transform: _r
}), w9 = ct({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: _r
}), z9 = ct({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: _r
});
V2(g9, w9, z9);
function Kt(i) {
  return i <= 1 && i !== 0 ? `${i * 100}%` : i;
}
const x9 = ct({
  prop: "width",
  transform: Kt
}), I3 = (i) => {
  if (i.maxWidth !== void 0 && i.maxWidth !== null) {
    const l = (r) => {
      var a, u;
      const m = ((a = i.theme) == null || (a = a.breakpoints) == null || (a = a.values) == null ? void 0 : a[r]) || R3[r];
      return m ? ((u = i.theme) == null || (u = u.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${m}${i.theme.breakpoints.unit}`
      } : {
        maxWidth: m
      } : {
        maxWidth: Kt(r)
      };
    };
    return S1(i, i.maxWidth, l);
  }
  return null;
};
I3.filterProps = ["maxWidth"];
const M9 = ct({
  prop: "minWidth",
  transform: Kt
}), F9 = ct({
  prop: "height",
  transform: Kt
}), y9 = ct({
  prop: "maxHeight",
  transform: Kt
}), H9 = ct({
  prop: "minHeight",
  transform: Kt
});
ct({
  prop: "size",
  cssProperty: "width",
  transform: Kt
});
ct({
  prop: "size",
  cssProperty: "height",
  transform: Kt
});
const _9 = ct({
  prop: "boxSizing"
});
V2(x9, I3, M9, F9, y9, H9, _9);
const b9 = {
  // borders
  border: {
    themeKey: "borders",
    transform: n1
  },
  borderTop: {
    themeKey: "borders",
    transform: n1
  },
  borderRight: {
    themeKey: "borders",
    transform: n1
  },
  borderBottom: {
    themeKey: "borders",
    transform: n1
  },
  borderLeft: {
    themeKey: "borders",
    transform: n1
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: n1
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: N2
  },
  // palette
  color: {
    themeKey: "palette",
    transform: _r
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: _r
  },
  backgroundColor: {
    themeKey: "palette",
    transform: _r
  },
  // spacing
  p: {
    style: lt
  },
  pt: {
    style: lt
  },
  pr: {
    style: lt
  },
  pb: {
    style: lt
  },
  pl: {
    style: lt
  },
  px: {
    style: lt
  },
  py: {
    style: lt
  },
  padding: {
    style: lt
  },
  paddingTop: {
    style: lt
  },
  paddingRight: {
    style: lt
  },
  paddingBottom: {
    style: lt
  },
  paddingLeft: {
    style: lt
  },
  paddingX: {
    style: lt
  },
  paddingY: {
    style: lt
  },
  paddingInline: {
    style: lt
  },
  paddingInlineStart: {
    style: lt
  },
  paddingInlineEnd: {
    style: lt
  },
  paddingBlock: {
    style: lt
  },
  paddingBlockStart: {
    style: lt
  },
  paddingBlockEnd: {
    style: lt
  },
  m: {
    style: nt
  },
  mt: {
    style: nt
  },
  mr: {
    style: nt
  },
  mb: {
    style: nt
  },
  ml: {
    style: nt
  },
  mx: {
    style: nt
  },
  my: {
    style: nt
  },
  margin: {
    style: nt
  },
  marginTop: {
    style: nt
  },
  marginRight: {
    style: nt
  },
  marginBottom: {
    style: nt
  },
  marginLeft: {
    style: nt
  },
  marginX: {
    style: nt
  },
  marginY: {
    style: nt
  },
  marginInline: {
    style: nt
  },
  marginInlineStart: {
    style: nt
  },
  marginInlineEnd: {
    style: nt
  },
  marginBlock: {
    style: nt
  },
  marginBlockStart: {
    style: nt
  },
  marginBlockEnd: {
    style: nt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (i) => ({
      "@media print": {
        display: i
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: k2
  },
  rowGap: {
    style: W2
  },
  columnGap: {
    style: $2
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Kt
  },
  maxWidth: {
    style: I3
  },
  minWidth: {
    transform: Kt
  },
  height: {
    transform: Kt
  },
  maxHeight: {
    transform: Kt
  },
  minHeight: {
    transform: Kt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, P3 = b9;
function A9(...i) {
  const l = i.reduce((a, u) => a.concat(Object.keys(u)), []), r = new Set(l);
  return i.every((a) => r.size === Object.keys(a).length);
}
function S9(i, l) {
  return typeof i == "function" ? i(l) : i;
}
function C9() {
  function i(r, a, u, m) {
    const d = {
      [r]: a,
      theme: u
    }, x = m[r];
    if (!x)
      return {
        [r]: a
      };
    const {
      cssProperty: F = r,
      themeKey: b,
      transform: _,
      style: C
    } = x;
    if (a == null)
      return null;
    if (b === "typography" && a === "inherit")
      return {
        [r]: a
      };
    const S = R2(u, b) || {};
    return C ? C(d) : S1(d, a, (R) => {
      let E = b2(S, _, R);
      return R === E && typeof R == "string" && (E = b2(S, _, `${r}${R === "default" ? "" : Hr(R)}`, R)), F === !1 ? E : {
        [F]: E
      };
    });
  }
  function l(r) {
    var a;
    const {
      sx: u,
      theme: m = {}
    } = r || {};
    if (!u)
      return null;
    const d = (a = m.unstable_sxConfig) != null ? a : P3;
    function x(F) {
      let b = F;
      if (typeof F == "function")
        b = F(m);
      else if (typeof F != "object")
        return F;
      if (!b)
        return null;
      const _ = kf(m.breakpoints), C = Object.keys(_);
      let S = _;
      return Object.keys(b).forEach((V) => {
        const R = S9(b[V], m);
        if (R != null)
          if (typeof R == "object")
            if (d[V])
              S = un(S, i(V, R, m, d));
            else {
              const E = S1({
                theme: m
              }, R, (M) => ({
                [V]: M
              }));
              A9(E, R) ? S[V] = l({
                sx: R,
                theme: m
              }) : S = un(S, E);
            }
          else
            S = un(S, i(V, R, m, d));
      }), $f(C, S);
    }
    return Array.isArray(u) ? u.map(x) : x(u);
  }
  return l;
}
const U2 = C9();
U2.filterProps = ["sx"];
function D9(i, l) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(i).replace(/(\[[^\]]+\])/, "*:where($1)")]: l
  } : r.palette.mode === i ? l : {};
}
const T9 = ["breakpoints", "palette", "spacing", "shape"];
function V3(i = {}, ...l) {
  const {
    breakpoints: r = {},
    palette: a = {},
    spacing: u,
    shape: m = {}
  } = i, d = O2(i, T9), x = If(r), F = Zf(u);
  let b = h1({
    breakpoints: x,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: _t({
      mode: "light"
    }, a),
    spacing: F,
    shape: _t({}, Vf, m)
  }, d);
  return b.applyStyles = D9, b = l.reduce((_, C) => h1(_, C), b), b.unstable_sxConfig = _t({}, P3, d == null ? void 0 : d.unstable_sxConfig), b.unstable_sx = function(C) {
    return U2({
      sx: C,
      theme: this
    });
  }, b;
}
function B9(i) {
  return Object.keys(i).length === 0;
}
function L9(i = null) {
  const l = bt.useContext(L2);
  return !l || B9(l) ? i : l;
}
const O9 = V3();
function R9(i = O9) {
  return L9(i);
}
const I9 = ["variant"];
function Ya(i) {
  return i.length === 0;
}
function O4(i) {
  const {
    variant: l
  } = i, r = O2(i, I9);
  let a = l || "";
  return Object.keys(r).sort().forEach((u) => {
    u === "color" ? a += Ya(a) ? i[u] : Hr(i[u]) : a += `${Ya(a) ? u : Hr(u)}${Hr(i[u].toString())}`;
  }), a;
}
const P9 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function V9(i) {
  return Object.keys(i).length === 0;
}
function N9(i) {
  return typeof i == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  i.charCodeAt(0) > 96;
}
const k9 = (i, l) => l.components && l.components[i] && l.components[i].styleOverrides ? l.components[i].styleOverrides : null, A2 = (i) => {
  let l = 0;
  const r = {};
  return i && i.forEach((a) => {
    let u = "";
    typeof a.props == "function" ? (u = `callback${l}`, l += 1) : u = O4(a.props), r[u] = a.style;
  }), r;
}, $9 = (i, l) => {
  let r = [];
  return l && l.components && l.components[i] && l.components[i].variants && (r = l.components[i].variants), A2(r);
}, S2 = (i, l, r) => {
  const {
    ownerState: a = {}
  } = i, u = [];
  let m = 0;
  return r && r.forEach((d) => {
    let x = !0;
    if (typeof d.props == "function") {
      const F = _t({}, i, a);
      x = d.props(F);
    } else
      Object.keys(d.props).forEach((F) => {
        a[F] !== d.props[F] && i[F] !== d.props[F] && (x = !1);
      });
    x && (typeof d.props == "function" ? u.push(l[`callback${m}`]) : u.push(l[O4(d.props)])), typeof d.props == "function" && (m += 1);
  }), u;
}, W9 = (i, l, r, a) => {
  var u;
  const m = r == null || (u = r.components) == null || (u = u[a]) == null ? void 0 : u.variants;
  return S2(i, l, m);
};
function w2(i) {
  return i !== "ownerState" && i !== "theme" && i !== "sx" && i !== "as";
}
const U9 = V3(), ja = (i) => i && i.charAt(0).toLowerCase() + i.slice(1);
function z2({
  defaultTheme: i,
  theme: l,
  themeId: r
}) {
  return V9(l) ? i : l[r] || l;
}
function G9(i) {
  return i ? (l, r) => r[i] : null;
}
const qa = ({
  styledArg: i,
  props: l,
  defaultTheme: r,
  themeId: a
}) => {
  const u = i(_t({}, l, {
    theme: z2(_t({}, l, {
      defaultTheme: r,
      themeId: a
    }))
  }));
  let m;
  if (u && u.variants && (m = u.variants, delete u.variants), m) {
    const d = S2(l, A2(m), m);
    return [u, ...d];
  }
  return u;
};
function K9(i = {}) {
  const {
    themeId: l,
    defaultTheme: r = U9,
    rootShouldForwardProp: a = w2,
    slotShouldForwardProp: u = w2
  } = i, m = (d) => U2(_t({}, d, {
    theme: z2(_t({}, d, {
      defaultTheme: r,
      themeId: l
    }))
  }));
  return m.__mui_systemSx = !0, (d, x = {}) => {
    yf(d, (G) => G.filter((A) => !(A != null && A.__mui_systemSx)));
    const {
      name: F,
      slot: b,
      skipVariantsResolver: _,
      skipSx: C,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = G9(ja(b))
    } = x, V = O2(x, P9), R = _ !== void 0 ? _ : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      b && b !== "Root" && b !== "root" || !1
    ), E = C || !1;
    let M;
    process.env.NODE_ENV !== "production" && F && (M = `${F}-${ja(b || "Root")}`);
    let B = w2;
    b === "Root" || b === "root" ? B = a : b ? B = u : N9(d) && (B = void 0);
    const k = Ff(d, _t({
      shouldForwardProp: B,
      label: M
    }, V)), $ = (G, ...A) => {
      const J = A ? A.map((Q) => {
        if (typeof Q == "function" && Q.__emotion_real !== Q)
          return (he) => qa({
            styledArg: Q,
            props: he,
            defaultTheme: r,
            themeId: l
          });
        if ($1(Q)) {
          let he = Q, ke;
          return Q && Q.variants && (ke = Q.variants, delete he.variants, he = (Ae) => {
            let Se = Q;
            return S2(Ae, A2(ke), ke).forEach((Je) => {
              Se = h1(Se, Je);
            }), Se;
          }), he;
        }
        return Q;
      }) : [];
      let j = G;
      if ($1(G)) {
        let Q;
        G && G.variants && (Q = G.variants, delete j.variants, j = (he) => {
          let ke = G;
          return S2(he, A2(Q), Q).forEach((Se) => {
            ke = h1(ke, Se);
          }), ke;
        });
      } else
        typeof G == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        G.__emotion_real !== G && (j = (Q) => qa({
          styledArg: G,
          props: Q,
          defaultTheme: r,
          themeId: l
        }));
      F && S && J.push((Q) => {
        const he = z2(_t({}, Q, {
          defaultTheme: r,
          themeId: l
        })), ke = k9(F, he);
        if (ke) {
          const Ae = {};
          return Object.entries(ke).forEach(([Se, et]) => {
            Ae[Se] = typeof et == "function" ? et(_t({}, Q, {
              theme: he
            })) : et;
          }), S(Q, Ae);
        }
        return null;
      }), F && !R && J.push((Q) => {
        const he = z2(_t({}, Q, {
          defaultTheme: r,
          themeId: l
        }));
        return W9(Q, $9(F, he), he, F);
      }), E || J.push(m);
      const Be = J.length - A.length;
      if (Array.isArray(G) && Be > 0) {
        const Q = new Array(Be).fill("");
        j = [...G, ...Q], j.raw = [...G.raw, ...Q];
      }
      const ge = k(j, ...J);
      if (process.env.NODE_ENV !== "production") {
        let Q;
        F && (Q = `${F}${Hr(b || "")}`), Q === void 0 && (Q = `Styled(${Sf(d)})`), ge.displayName = Q;
      }
      return d.muiName && (ge.muiName = d.muiName), ge;
    };
    return k.withConfig && ($.withConfig = k.withConfig), $;
  };
}
function R4(i, l = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (i < l || i > r) && console.error(`MUI: The value provided ${i} is out of range [${l}, ${r}].`), Lf(i, l, r);
}
function Y9(i) {
  i = i.slice(1);
  const l = new RegExp(`.{1,${i.length >= 6 ? 2 : 1}}`, "g");
  let r = i.match(l);
  return r && r[0].length === 1 && (r = r.map((a) => a + a)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((a, u) => u < 3 ? parseInt(a, 16) : Math.round(parseInt(a, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Sr(i) {
  if (i.type)
    return i;
  if (i.charAt(0) === "#")
    return Sr(Y9(i));
  const l = i.indexOf("("), r = i.substring(0, l);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${i}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : br(9, i));
  let a = i.substring(l + 1, i.length - 1), u;
  if (r === "color") {
    if (a = a.split(" "), u = a.shift(), a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(u) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${u}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : br(10, u));
  } else
    a = a.split(",");
  return a = a.map((m) => parseFloat(m)), {
    type: r,
    values: a,
    colorSpace: u
  };
}
function N3(i) {
  const {
    type: l,
    colorSpace: r
  } = i;
  let {
    values: a
  } = i;
  return l.indexOf("rgb") !== -1 ? a = a.map((u, m) => m < 3 ? parseInt(u, 10) : u) : l.indexOf("hsl") !== -1 && (a[1] = `${a[1]}%`, a[2] = `${a[2]}%`), l.indexOf("color") !== -1 ? a = `${r} ${a.join(" ")}` : a = `${a.join(", ")}`, `${l}(${a})`;
}
function j9(i) {
  i = Sr(i);
  const {
    values: l
  } = i, r = l[0], a = l[1] / 100, u = l[2] / 100, m = a * Math.min(u, 1 - u), d = (b, _ = (b + r / 30) % 12) => u - m * Math.max(Math.min(_ - 3, 9 - _, 1), -1);
  let x = "rgb";
  const F = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return i.type === "hsla" && (x += "a", F.push(l[3])), N3({
    type: x,
    values: F
  });
}
function Za(i) {
  i = Sr(i);
  let l = i.type === "hsl" || i.type === "hsla" ? Sr(j9(i)).values : i.values;
  return l = l.map((r) => (i.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]).toFixed(3));
}
function Ja(i, l) {
  const r = Za(i), a = Za(l);
  return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
}
function q9(i, l) {
  if (i = Sr(i), l = R4(l), i.type.indexOf("hsl") !== -1)
    i.values[2] *= 1 - l;
  else if (i.type.indexOf("rgb") !== -1 || i.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      i.values[r] *= 1 - l;
  return N3(i);
}
function Z9(i, l) {
  if (i = Sr(i), l = R4(l), i.type.indexOf("hsl") !== -1)
    i.values[2] += (100 - i.values[2]) * l;
  else if (i.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      i.values[r] += (255 - i.values[r]) * l;
  else if (i.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      i.values[r] += (1 - i.values[r]) * l;
  return N3(i);
}
function J9(i, l) {
  return Yt({
    toolbar: {
      minHeight: 56,
      [i.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [i.up("sm")]: {
        minHeight: 64
      }
    }
  }, l);
}
const X9 = {
  black: "#000",
  white: "#fff"
}, dn = X9, Q9 = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, eh = Q9, th = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Er = th, rh = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, gr = rh, nh = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, sn = nh, lh = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, wr = lh, ih = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, zr = ih, ah = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, xr = ah, ch = ["mode", "contrastThreshold", "tonalOffset"], Xa = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: dn.white,
    default: dn.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, p3 = {
  text: {
    primary: dn.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: dn.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Qa(i, l, r, a) {
  const u = a.light || a, m = a.dark || a * 1.5;
  i[l] || (i.hasOwnProperty(r) ? i[l] = i[r] : l === "light" ? i.light = Z9(i.main, u) : l === "dark" && (i.dark = q9(i.main, m)));
}
function oh(i = "light") {
  return i === "dark" ? {
    main: wr[200],
    light: wr[50],
    dark: wr[400]
  } : {
    main: wr[700],
    light: wr[400],
    dark: wr[800]
  };
}
function sh(i = "light") {
  return i === "dark" ? {
    main: Er[200],
    light: Er[50],
    dark: Er[400]
  } : {
    main: Er[500],
    light: Er[300],
    dark: Er[700]
  };
}
function uh(i = "light") {
  return i === "dark" ? {
    main: gr[500],
    light: gr[300],
    dark: gr[700]
  } : {
    main: gr[700],
    light: gr[400],
    dark: gr[800]
  };
}
function fh(i = "light") {
  return i === "dark" ? {
    main: zr[400],
    light: zr[300],
    dark: zr[700]
  } : {
    main: zr[700],
    light: zr[500],
    dark: zr[900]
  };
}
function hh(i = "light") {
  return i === "dark" ? {
    main: xr[400],
    light: xr[300],
    dark: xr[700]
  } : {
    main: xr[800],
    light: xr[500],
    dark: xr[900]
  };
}
function mh(i = "light") {
  return i === "dark" ? {
    main: sn[400],
    light: sn[300],
    dark: sn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: sn[500],
    dark: sn[900]
  };
}
function dh(i) {
  const {
    mode: l = "light",
    contrastThreshold: r = 3,
    tonalOffset: a = 0.2
  } = i, u = C2(i, ch), m = i.primary || oh(l), d = i.secondary || sh(l), x = i.error || uh(l), F = i.info || fh(l), b = i.success || hh(l), _ = i.warning || mh(l);
  function C(E) {
    const M = Ja(E, p3.text.primary) >= r ? p3.text.primary : Xa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const B = Ja(E, M);
      B < 3 && console.error([`MUI: The contrast ratio of ${B}:1 for ${M} on ${E}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return M;
  }
  const S = ({
    color: E,
    name: M,
    mainShade: B = 500,
    lightShade: k = 300,
    darkShade: $ = 700
  }) => {
    if (E = Yt({}, E), !E.main && E[B] && (E.main = E[B]), !E.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${M ? ` (${M})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${B}\` property.` : br(11, M ? ` (${M})` : "", B));
    if (typeof E.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${M ? ` (${M})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(E.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : br(12, M ? ` (${M})` : "", JSON.stringify(E.main)));
    return Qa(E, "light", k, a), Qa(E, "dark", $, a), E.contrastText || (E.contrastText = C(E.main)), E;
  }, V = {
    dark: p3,
    light: Xa
  };
  return process.env.NODE_ENV !== "production" && (V[l] || console.error(`MUI: The palette mode \`${l}\` is not supported.`)), h1(Yt({
    // A collection of common colors.
    common: Yt({}, dn),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: l,
    // The colors used to represent primary interface elements for a user.
    primary: S({
      color: m,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: S({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: S({
      color: x,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: S({
      color: _,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: S({
      color: F,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: S({
      color: b,
      name: "success"
    }),
    // The grey colors.
    grey: eh,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: C,
    // Generate a rich color object.
    augmentColor: S,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: a
  }, V[l]), u);
}
const vh = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function ph(i) {
  return Math.round(i * 1e5) / 1e5;
}
const e4 = {
  textTransform: "uppercase"
}, t4 = '"Roboto", "Helvetica", "Arial", sans-serif';
function Eh(i, l) {
  const r = typeof l == "function" ? l(i) : l, {
    fontFamily: a = t4,
    // The default font size of the Material Specification.
    fontSize: u = 14,
    // px
    fontWeightLight: m = 300,
    fontWeightRegular: d = 400,
    fontWeightMedium: x = 500,
    fontWeightBold: F = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: b = 16,
    // Apply the CSS properties to all the variants.
    allVariants: _,
    pxToRem: C
  } = r, S = C2(r, vh);
  process.env.NODE_ENV !== "production" && (typeof u != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof b != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const V = u / 14, R = C || ((B) => `${B / b * V}rem`), E = (B, k, $, G, A) => Yt({
    fontFamily: a,
    fontWeight: B,
    fontSize: R(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $
  }, a === t4 ? {
    letterSpacing: `${ph(G / k)}em`
  } : {}, A, _), M = {
    h1: E(m, 96, 1.167, -1.5),
    h2: E(m, 60, 1.2, -0.5),
    h3: E(d, 48, 1.167, 0),
    h4: E(d, 34, 1.235, 0.25),
    h5: E(d, 24, 1.334, 0),
    h6: E(x, 20, 1.6, 0.15),
    subtitle1: E(d, 16, 1.75, 0.15),
    subtitle2: E(x, 14, 1.57, 0.1),
    body1: E(d, 16, 1.5, 0.15),
    body2: E(d, 14, 1.43, 0.15),
    button: E(x, 14, 1.75, 0.4, e4),
    caption: E(d, 12, 1.66, 0.4),
    overline: E(d, 12, 2.66, 1, e4),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return h1(Yt({
    htmlFontSize: b,
    pxToRem: R,
    fontFamily: a,
    fontSize: u,
    fontWeightLight: m,
    fontWeightRegular: d,
    fontWeightMedium: x,
    fontWeightBold: F
  }, M), S, {
    clone: !1
    // No need to clone deep
  });
}
const gh = 0.2, wh = 0.14, zh = 0.12;
function qe(...i) {
  return [`${i[0]}px ${i[1]}px ${i[2]}px ${i[3]}px rgba(0,0,0,${gh})`, `${i[4]}px ${i[5]}px ${i[6]}px ${i[7]}px rgba(0,0,0,${wh})`, `${i[8]}px ${i[9]}px ${i[10]}px ${i[11]}px rgba(0,0,0,${zh})`].join(",");
}
const xh = ["none", qe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), qe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), qe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), qe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), qe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), qe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), qe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), qe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), qe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), qe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), qe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), qe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), qe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), qe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), qe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), qe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), qe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), qe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), qe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), qe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), qe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), qe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), qe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), qe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Mh = ["duration", "easing", "delay"], Fh = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, yh = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function r4(i) {
  return `${Math.round(i)}ms`;
}
function Hh(i) {
  if (!i)
    return 0;
  const l = i / 36;
  return Math.round((4 + 15 * l ** 0.25 + l / 5) * 10);
}
function _h(i) {
  const l = Yt({}, Fh, i.easing), r = Yt({}, yh, i.duration);
  return Yt({
    getAutoHeightDuration: Hh,
    create: (u = ["all"], m = {}) => {
      const {
        duration: d = r.standard,
        easing: x = l.easeInOut,
        delay: F = 0
      } = m, b = C2(m, Mh);
      if (process.env.NODE_ENV !== "production") {
        const _ = (S) => typeof S == "string", C = (S) => !isNaN(parseFloat(S));
        !_(u) && !Array.isArray(u) && console.error('MUI: Argument "props" must be a string or Array.'), !C(d) && !_(d) && console.error(`MUI: Argument "duration" must be a number or a string but found ${d}.`), _(x) || console.error('MUI: Argument "easing" must be a string.'), !C(F) && !_(F) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof m != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(b).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(b).join(",")}].`);
      }
      return (Array.isArray(u) ? u : [u]).map((_) => `${_} ${typeof d == "string" ? d : r4(d)} ${x} ${typeof F == "string" ? F : r4(F)}`).join(",");
    }
  }, i, {
    easing: l,
    duration: r
  });
}
const bh = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ah = bh, Sh = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ch(i = {}, ...l) {
  const {
    mixins: r = {},
    palette: a = {},
    transitions: u = {},
    typography: m = {}
  } = i, d = C2(i, Sh);
  if (i.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : br(18));
  const x = dh(a), F = V3(i);
  let b = h1(F, {
    mixins: J9(F.breakpoints, r),
    palette: x,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xh.slice(),
    typography: Eh(x, m),
    transitions: _h(u),
    zIndex: Yt({}, Ah)
  });
  if (b = h1(b, d), b = l.reduce((_, C) => h1(_, C), b), process.env.NODE_ENV !== "production") {
    const _ = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (S, V) => {
      let R;
      for (R in S) {
        const E = S[R];
        if (_.indexOf(R) !== -1 && Object.keys(E).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const M = Bf("", R);
            console.error([`MUI: The \`${V}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(S, null, 2), "", `Instead, you need to use the '&.${M}' syntax:`, JSON.stringify({
              root: {
                [`&.${M}`]: E
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          S[R] = {};
        }
      }
    };
    Object.keys(b.components).forEach((S) => {
      const V = b.components[S].styleOverrides;
      V && S.indexOf("Mui") === 0 && C(V, S);
    });
  }
  return b.unstable_sxConfig = Yt({}, P3, d == null ? void 0 : d.unstable_sxConfig), b.unstable_sx = function(C) {
    return U2({
      sx: C,
      theme: this
    });
  }, b;
}
const Dh = Ch(), I4 = Dh;
function Th() {
  const i = R9(I4);
  return process.env.NODE_ENV !== "production" && bt.useDebugValue(i), i[m4] || i;
}
const Bh = (i) => w2(i) && i !== "classes", k3 = K9({
  themeId: m4,
  defaultTheme: I4,
  rootShouldForwardProp: Bh
});
function n4(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function b3(i, l) {
  return b3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, u) {
    return a.__proto__ = u, a;
  }, b3(i, l);
}
function Lh(i, l) {
  i.prototype = Object.create(l.prototype), i.prototype.constructor = i, b3(i, l);
}
var l4 = Number.isNaN || function(l) {
  return typeof l == "number" && l !== l;
};
function Oh(i, l) {
  return !!(i === l || l4(i) && l4(l));
}
function Rh(i, l) {
  if (i.length !== l.length)
    return !1;
  for (var r = 0; r < i.length; r++)
    if (!Oh(i[r], l[r]))
      return !1;
  return !0;
}
function E3(i, l) {
  l === void 0 && (l = Rh);
  var r, a = [], u, m = !1;
  function d() {
    for (var x = [], F = 0; F < arguments.length; F++)
      x[F] = arguments[F];
    return m && r === this && l(x, a) || (u = i.apply(this, x), m = !0, r = this, a = x), u;
  }
  return d;
}
var Ih = typeof performance == "object" && typeof performance.now == "function", i4 = Ih ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function a4(i) {
  cancelAnimationFrame(i.id);
}
function Ph(i, l) {
  var r = i4();
  function a() {
    i4() - r >= l ? i.call(null) : u.id = requestAnimationFrame(a);
  }
  var u = {
    id: requestAnimationFrame(a)
  };
  return u;
}
var g3 = -1;
function c4(i) {
  if (i === void 0 && (i = !1), g3 === -1 || i) {
    var l = document.createElement("div"), r = l.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", document.body.appendChild(l), g3 = l.offsetWidth - l.clientWidth, document.body.removeChild(l);
  }
  return g3;
}
var Mr = null;
function o4(i) {
  if (i === void 0 && (i = !1), Mr === null || i) {
    var l = document.createElement("div"), r = l.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", r.direction = "rtl";
    var a = document.createElement("div"), u = a.style;
    return u.width = "100px", u.height = "100px", l.appendChild(a), document.body.appendChild(l), l.scrollLeft > 0 ? Mr = "positive-descending" : (l.scrollLeft = 1, l.scrollLeft === 0 ? Mr = "negative" : Mr = "positive-ascending"), document.body.removeChild(l), Mr;
  }
  return Mr;
}
process.env.NODE_ENV;
var Vh = 150, Nh = function(l, r) {
  return l;
}, x2 = null, M2 = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (x2 = /* @__PURE__ */ new WeakSet(), M2 = /* @__PURE__ */ new WeakSet());
function kh(i) {
  var l, r = i.getItemOffset, a = i.getEstimatedTotalSize, u = i.getItemSize, m = i.getOffsetForIndexAndAlignment, d = i.getStartIndexForOffset, x = i.getStopIndexForStartIndex, F = i.initInstanceProps, b = i.shouldResetStyleCacheOnItemSizeChange, _ = i.validateProps;
  return l = /* @__PURE__ */ function(C) {
    Lh(S, C);
    function S(R) {
      var E;
      return E = C.call(this, R) || this, E._instanceProps = F(E.props, n4(E)), E._outerRef = void 0, E._resetIsScrollingTimeoutId = null, E.state = {
        instance: n4(E),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof E.props.initialScrollOffset == "number" ? E.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, E._callOnItemsRendered = void 0, E._callOnItemsRendered = E3(function(M, B, k, $) {
        return E.props.onItemsRendered({
          overscanStartIndex: M,
          overscanStopIndex: B,
          visibleStartIndex: k,
          visibleStopIndex: $
        });
      }), E._callOnScroll = void 0, E._callOnScroll = E3(function(M, B, k) {
        return E.props.onScroll({
          scrollDirection: M,
          scrollOffset: B,
          scrollUpdateWasRequested: k
        });
      }), E._getItemStyle = void 0, E._getItemStyle = function(M) {
        var B = E.props, k = B.direction, $ = B.itemSize, G = B.layout, A = E._getItemStyleCache(b && $, b && G, b && k), J;
        if (A.hasOwnProperty(M))
          J = A[M];
        else {
          var j = r(E.props, M, E._instanceProps), Be = u(E.props, M, E._instanceProps), ge = k === "horizontal" || G === "horizontal", Q = k === "rtl", he = ge ? j : 0;
          A[M] = J = {
            position: "absolute",
            left: Q ? void 0 : he,
            right: Q ? he : void 0,
            top: ge ? 0 : j,
            height: ge ? "100%" : Be,
            width: ge ? Be : "100%"
          };
        }
        return J;
      }, E._getItemStyleCache = void 0, E._getItemStyleCache = E3(function(M, B, k) {
        return {};
      }), E._onScrollHorizontal = function(M) {
        var B = M.currentTarget, k = B.clientWidth, $ = B.scrollLeft, G = B.scrollWidth;
        E.setState(function(A) {
          if (A.scrollOffset === $)
            return null;
          var J = E.props.direction, j = $;
          if (J === "rtl")
            switch (o4()) {
              case "negative":
                j = -$;
                break;
              case "positive-descending":
                j = G - k - $;
                break;
            }
          return j = Math.max(0, Math.min(j, G - k)), {
            isScrolling: !0,
            scrollDirection: A.scrollOffset < j ? "forward" : "backward",
            scrollOffset: j,
            scrollUpdateWasRequested: !1
          };
        }, E._resetIsScrollingDebounced);
      }, E._onScrollVertical = function(M) {
        var B = M.currentTarget, k = B.clientHeight, $ = B.scrollHeight, G = B.scrollTop;
        E.setState(function(A) {
          if (A.scrollOffset === G)
            return null;
          var J = Math.max(0, Math.min(G, $ - k));
          return {
            isScrolling: !0,
            scrollDirection: A.scrollOffset < J ? "forward" : "backward",
            scrollOffset: J,
            scrollUpdateWasRequested: !1
          };
        }, E._resetIsScrollingDebounced);
      }, E._outerRefSetter = function(M) {
        var B = E.props.outerRef;
        E._outerRef = M, typeof B == "function" ? B(M) : B != null && typeof B == "object" && B.hasOwnProperty("current") && (B.current = M);
      }, E._resetIsScrollingDebounced = function() {
        E._resetIsScrollingTimeoutId !== null && a4(E._resetIsScrollingTimeoutId), E._resetIsScrollingTimeoutId = Ph(E._resetIsScrolling, Vh);
      }, E._resetIsScrolling = function() {
        E._resetIsScrollingTimeoutId = null, E.setState({
          isScrolling: !1
        }, function() {
          E._getItemStyleCache(-1, null);
        });
      }, E;
    }
    S.getDerivedStateFromProps = function(E, M) {
      return $h(E, M), _(E), null;
    };
    var V = S.prototype;
    return V.scrollTo = function(E) {
      E = Math.max(0, E), this.setState(function(M) {
        return M.scrollOffset === E ? null : {
          scrollDirection: M.scrollOffset < E ? "forward" : "backward",
          scrollOffset: E,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, V.scrollToItem = function(E, M) {
      M === void 0 && (M = "auto");
      var B = this.props, k = B.itemCount, $ = B.layout, G = this.state.scrollOffset;
      E = Math.max(0, Math.min(E, k - 1));
      var A = 0;
      if (this._outerRef) {
        var J = this._outerRef;
        $ === "vertical" ? A = J.scrollWidth > J.clientWidth ? c4() : 0 : A = J.scrollHeight > J.clientHeight ? c4() : 0;
      }
      this.scrollTo(m(this.props, E, M, G, this._instanceProps, A));
    }, V.componentDidMount = function() {
      var E = this.props, M = E.direction, B = E.initialScrollOffset, k = E.layout;
      if (typeof B == "number" && this._outerRef != null) {
        var $ = this._outerRef;
        M === "horizontal" || k === "horizontal" ? $.scrollLeft = B : $.scrollTop = B;
      }
      this._callPropsCallbacks();
    }, V.componentDidUpdate = function() {
      var E = this.props, M = E.direction, B = E.layout, k = this.state, $ = k.scrollOffset, G = k.scrollUpdateWasRequested;
      if (G && this._outerRef != null) {
        var A = this._outerRef;
        if (M === "horizontal" || B === "horizontal")
          if (M === "rtl")
            switch (o4()) {
              case "negative":
                A.scrollLeft = -$;
                break;
              case "positive-ascending":
                A.scrollLeft = $;
                break;
              default:
                var J = A.clientWidth, j = A.scrollWidth;
                A.scrollLeft = j - J - $;
                break;
            }
          else
            A.scrollLeft = $;
        else
          A.scrollTop = $;
      }
      this._callPropsCallbacks();
    }, V.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && a4(this._resetIsScrollingTimeoutId);
    }, V.render = function() {
      var E = this.props, M = E.children, B = E.className, k = E.direction, $ = E.height, G = E.innerRef, A = E.innerElementType, J = E.innerTagName, j = E.itemCount, Be = E.itemData, ge = E.itemKey, Q = ge === void 0 ? Nh : ge, he = E.layout, ke = E.outerElementType, Ae = E.outerTagName, Se = E.style, et = E.useIsScrolling, Je = E.width, Ue = this.state.isScrolling, Ge = k === "horizontal" || he === "horizontal", At = Ge ? this._onScrollHorizontal : this._onScrollVertical, P = this._getRangeToRender(), W = P[0], oe = P[1], ae = [];
      if (j > 0)
        for (var ee = W; ee <= oe; ee++)
          ae.push(c3(M, {
            data: Be,
            key: Q(ee, Be),
            index: ee,
            isScrolling: et ? Ue : void 0,
            style: this._getItemStyle(ee)
          }));
      var re = a(this.props, this._instanceProps);
      return c3(ke || Ae || "div", {
        className: B,
        onScroll: At,
        ref: this._outerRefSetter,
        style: y2({
          position: "relative",
          height: $,
          width: Je,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: k
        }, Se)
      }, c3(A || J || "div", {
        children: ae,
        ref: G,
        style: {
          height: Ge ? "100%" : re,
          pointerEvents: Ue ? "none" : void 0,
          width: Ge ? re : "100%"
        }
      }));
    }, V._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var E = this.props.itemCount;
        if (E > 0) {
          var M = this._getRangeToRender(), B = M[0], k = M[1], $ = M[2], G = M[3];
          this._callOnItemsRendered(B, k, $, G);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var A = this.state, J = A.scrollDirection, j = A.scrollOffset, Be = A.scrollUpdateWasRequested;
        this._callOnScroll(J, j, Be);
      }
    }, V._getRangeToRender = function() {
      var E = this.props, M = E.itemCount, B = E.overscanCount, k = this.state, $ = k.isScrolling, G = k.scrollDirection, A = k.scrollOffset;
      if (M === 0)
        return [0, 0, 0, 0];
      var J = d(this.props, A, this._instanceProps), j = x(this.props, J, A, this._instanceProps), Be = !$ || G === "backward" ? Math.max(1, B) : 1, ge = !$ || G === "forward" ? Math.max(1, B) : 1;
      return [Math.max(0, J - Be), Math.max(0, Math.min(M - 1, j + ge)), J, j];
    }, S;
  }(X8), l.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, l;
}
var $h = function(l, r) {
  var a = l.children, u = l.direction, m = l.height, d = l.layout, x = l.innerTagName, F = l.outerTagName, b = l.width, _ = r.instance;
  if (process.env.NODE_ENV !== "production") {
    (x != null || F != null) && M2 && !M2.has(_) && (M2.add(_), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var C = u === "horizontal" || d === "horizontal";
    switch (u) {
      case "horizontal":
      case "vertical":
        x2 && !x2.has(_) && (x2.add(_), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + u + '" was specified.'));
    }
    switch (d) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + d + '" was specified.'));
    }
    if (a == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (a === null ? "null" : typeof a) + '" was specified.'));
    if (C && typeof b != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (b === null ? "null" : typeof b) + '" was specified.'));
    if (!C && typeof m != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (m === null ? "null" : typeof m) + '" was specified.'));
  }
}, Wh = 50, Fr = function(l, r, a) {
  var u = l, m = u.itemSize, d = a.itemMetadataMap, x = a.lastMeasuredIndex;
  if (r > x) {
    var F = 0;
    if (x >= 0) {
      var b = d[x];
      F = b.offset + b.size;
    }
    for (var _ = x + 1; _ <= r; _++) {
      var C = m(_);
      d[_] = {
        offset: F,
        size: C
      }, F += C;
    }
    a.lastMeasuredIndex = r;
  }
  return d[r];
}, Uh = function(l, r, a) {
  var u = r.itemMetadataMap, m = r.lastMeasuredIndex, d = m > 0 ? u[m].offset : 0;
  return d >= a ? P4(l, r, m, 0, a) : Gh(l, r, Math.max(0, m), a);
}, P4 = function(l, r, a, u, m) {
  for (; u <= a; ) {
    var d = u + Math.floor((a - u) / 2), x = Fr(l, d, r).offset;
    if (x === m)
      return d;
    x < m ? u = d + 1 : x > m && (a = d - 1);
  }
  return u > 0 ? u - 1 : 0;
}, Gh = function(l, r, a, u) {
  for (var m = l.itemCount, d = 1; a < m && Fr(l, a, r).offset < u; )
    a += d, d *= 2;
  return P4(l, r, Math.min(a, m - 1), Math.floor(a / 2), u);
}, s4 = function(l, r) {
  var a = l.itemCount, u = r.itemMetadataMap, m = r.estimatedItemSize, d = r.lastMeasuredIndex, x = 0;
  if (d >= a && (d = a - 1), d >= 0) {
    var F = u[d];
    x = F.offset + F.size;
  }
  var b = a - d - 1, _ = b * m;
  return x + _;
}, Kh = /* @__PURE__ */ kh({
  getItemOffset: function(l, r, a) {
    return Fr(l, r, a).offset;
  },
  getItemSize: function(l, r, a) {
    return a.itemMetadataMap[r].size;
  },
  getEstimatedTotalSize: s4,
  getOffsetForIndexAndAlignment: function(l, r, a, u, m, d) {
    var x = l.direction, F = l.height, b = l.layout, _ = l.width, C = x === "horizontal" || b === "horizontal", S = C ? _ : F, V = Fr(l, r, m), R = s4(l, m), E = Math.max(0, Math.min(R - S, V.offset)), M = Math.max(0, V.offset - S + V.size + d);
    switch (a === "smart" && (u >= M - S && u <= E + S ? a = "auto" : a = "center"), a) {
      case "start":
        return E;
      case "end":
        return M;
      case "center":
        return Math.round(M + (E - M) / 2);
      case "auto":
      default:
        return u >= M && u <= E ? u : u < M ? M : E;
    }
  },
  getStartIndexForOffset: function(l, r, a) {
    return Uh(l, a, r);
  },
  getStopIndexForStartIndex: function(l, r, a, u) {
    for (var m = l.direction, d = l.height, x = l.itemCount, F = l.layout, b = l.width, _ = m === "horizontal" || F === "horizontal", C = _ ? b : d, S = Fr(l, r, u), V = a + C, R = S.offset + S.size, E = r; E < x - 1 && R < V; )
      E++, R += Fr(l, E, u).size;
    return E;
  },
  initInstanceProps: function(l, r) {
    var a = l, u = a.estimatedItemSize, m = {
      itemMetadataMap: {},
      estimatedItemSize: u || Wh,
      lastMeasuredIndex: -1
    };
    return r.resetAfterIndex = function(d, x) {
      x === void 0 && (x = !0), m.lastMeasuredIndex = Math.min(m.lastMeasuredIndex, d - 1), r._getItemStyleCache(-1), x && r.forceUpdate();
    }, m;
  },
  shouldResetStyleCacheOnItemSizeChange: !1,
  validateProps: function(l) {
    var r = l.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof r != "function")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a function. ' + ('"' + (r === null ? "null" : typeof r) + '" was specified.'));
  }
}), Yh = ["title"], jh = ["title"], qh = ["title"], Zh = ["title"], Jh = ["title"], Xh = ["title"], Qh = ["title"], em = ["title"], tm = ["title"], rm = ["title"], nm = ["title"], lm = ["title"], im = ["title"], am = ["title"], cm = ["title"], om = ["title"], sm = ["title"], um = ["title"], fm = ["title"], hm = ["title"], mm = ["title"], dm = ["title"], vm = ["title"], pm = ["title"], Em = ["title"], gm = ["title"], wm = ["title"], zm = ["title"], xm = ["title"], Mm = ["title"], Fm = ["title"], ym = ["title"], Hm = ["title"], _m = ["title"], bm = ["title"], Am = ["title"], Sm = ["title"], Cm = ["title"], Dm = ["title"], Tm = ["title"], Bm = ["title"], Lm = ["title"], Om = ["title"], Rm = ["title"], Im = ["title"], Pm = ["title"], Vm = ["title"], Nm = ["title"], km = ["title"], $m = ["title"], Wm = ["title"], Um = ["title"], Gm = ["title"], Km = ["title"], Ym = ["title"], jm = ["title"], qm = ["title"], Zm = ["title"], Jm = ["title"], Xm = ["title"], Qm = ["title"], ed = ["title"], td = ["title"], rd = ["title"], nd = ["title"], ld = ["title"], id = ["title"], ad = ["title"], cd = ["title"], od = ["title"], sd = ["title"], ud = ["title"], fd = ["title"], hd = ["title"], md = ["title"], dd = ["title"], vd = ["title"], pd = ["title"], Ed = ["title"], gd = ["title"], wd = ["title"], zd = ["title"], xd = ["title"], Md = ["title"], Fd = ["title"], yd = ["title"], Hd = ["title"], _d = ["title"], bd = ["title"], Ad = ["title"], Sd = ["title"], Cd = ["title"], Dd = ["title"], Td = ["title"], Bd = ["title"], Ld = ["title"], Od = ["title"], Rd = ["title"], Id = ["title"], Pd = ["title"], Vd = ["title"], Nd = ["title"], kd = ["title"], $d = ["title"], Wd = ["title"], Ud = ["title"], Gd = ["title"], Kd = ["title"], Yd = ["title"], jd = ["title"], qd = ["title"], Zd = ["title"], Jd = ["title"], Xd = ["title"], Qd = ["title"], ev = ["title"], tv = ["title"], rv = ["title"], nv = ["title"], lv = ["title"], iv = ["title"], av = ["title"], cv = ["title"], ov = ["title"], sv = ["title"], uv = ["title"], fv = ["title"], hv = ["title"], mv = ["title"], dv = ["title"], vv = ["title"], pv = ["title"], Ev = ["title"], gv = ["title"], wv = ["title"], zv = ["title"], xv = ["title"], Mv = ["title"], Fv = ["title"], yv = ["title"], Hv = ["title"], _v = ["title"], bv = ["title"], Av = ["title"], Sv = ["title"], Cv = ["title"], Dv = ["title"], Tv = ["title"], Bv = ["title"], Lv = ["title"], Ov = ["title"], Rv = ["title"], Iv = ["title"], Pv = ["title"], Vv = ["title"], Nv = ["title"], kv = ["title"], $v = ["title"], Wv = ["title"], Uv = ["title"], Gv = ["title"], Kv = ["title"], Yv = ["title"], jv = ["title"], qv = ["title"], Zv = ["title"], Jv = ["title"], Xv = ["title"], Qv = ["title"], ep = ["title"], tp = ["title"], rp = ["title"], np = ["title"], lp = ["title"], ip = ["title"], ap = ["title"], cp = ["title"], op = ["title"], sp = ["title"], up = ["title"], fp = ["title"], hp = ["title"], mp = ["title"], dp = ["title"], vp = ["title"], pp = ["title"], Ep = ["title"], gp = ["title"], wp = ["title"], zp = ["title"], xp = ["title"], Mp = ["title"], Fp = ["title"], yp = ["title"], Hp = ["title"], _p = ["title"], bp = ["title"], Ap = ["title"], Sp = ["title"], Cp = ["title"], Dp = ["title"], Tp = ["title"], Bp = ["title"], Lp = ["title"], Op = ["title"], Rp = ["title"], Ip = ["title"], Pp = ["title"], Vp = ["title"], Np = ["title"], kp = ["title"], $p = ["title"], Wp = ["title"], Up = ["title"], Gp = ["title"], Kp = ["title"], Yp = ["title"], jp = ["title"], qp = ["title"], Zp = ["title"], Jp = ["title"], Xp = ["title"], Qp = ["title"], eE = ["title"], tE = ["title"], rE = ["title"], nE = ["title"], lE = ["title"], iE = ["title"], aE = ["title"], cE = ["title"], oE = ["title"], sE = ["title"], uE = ["title"], fE = ["title"], hE = ["title"], mE = ["title"], dE = ["title"], vE = ["title"], pE = ["title"], EE = ["title"], gE = ["title"], wE = ["title"], zE = ["title"], xE = ["title"], ME = ["title"], FE = ["title"], yE = ["title"], HE = ["title"], _E = ["title"], bE = ["title"], AE = ["title"], SE = ["title"], CE = ["title"];
function v() {
  return v = Object.assign || function(i) {
    for (var l = 1; l < arguments.length; l++) {
      var r = arguments[l];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, v.apply(this, arguments);
}
function p(i, l) {
  if (i == null)
    return {};
  var r = DE(i, l), a, u;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(i);
    for (u = 0; u < m.length; u++)
      a = m[u], !(l.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(i, a) && (r[a] = i[a]);
  }
  return r;
}
function DE(i, l) {
  if (i == null)
    return {};
  var r = {}, a = Object.keys(i), u, m;
  for (m = 0; m < a.length; m++)
    u = a[m], !(l.indexOf(u) >= 0) && (r[u] = i[u]);
  return r;
}
var TE = function(l) {
  var r = l.title, a = p(l, Yh);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M440.1 181.1c-.1 39.2-6.4 81.4-57.4 101.5-51.1-20.1-57.3-62.3-57.4-101.5h114.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#29DBFF",
    d: "M439.6 197.7c-2.8 34.9-12.4 67.4-57 85-44.4-17.6-54.5-51.2-56.9-84.9"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M437.8 214.1c-3.2 24.3-16.7 53.5-55.1 68.6-38.4-15.1-50.5-42.5-55.1-68.4"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#29DBFF",
    d: "M434.2 230.3c-5.7 17.7-19.3 39.4-51.3 52.8-32-12.6-45.2-33.8-51.4-53"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M426.7 246.9c-6.5 11.3-17.7 25.4-44 35.9-27.5-11.5-37.4-25.3-44-36.1"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#29DBFF",
    d: "M412.4 265.1c-8.1 7.2-12 11.2-29.6 17.9-20.1-7.9-22.6-11.6-29.2-17.5"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#5CC85C",
    d: "M383.3 231.6c-.2-.2-27.9 35.7-27.9 35.7-1.8-1.3-10-9.5-13.3-15l41.3-50.1 40.2 49.7c-3.9 6.5-11.4 13.6-13.2 15M382.6 85.3l-26.5 45h53z"
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-82.3 291.431 225.686)",
    fill: "#F7A226",
    cx: 291.4,
    cy: 225.7,
    rx: 48.7,
    ry: 15.7
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-68.099 303.087 164.67)",
    fill: "#DDC7AB",
    cx: 303.1,
    cy: 164.7,
    rx: 11.7,
    ry: 7.2
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-81.738 291.697 271.697)",
    fill: "#DDC7AB",
    cx: 291.7,
    cy: 271.7,
    rx: 11.4,
    ry: 3.3
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "matrix(.9986 -.05353 .05353 .9986 -13.992 16.424)",
    fill: "#DDC7AB",
    cx: 299.6,
    cy: 269.4,
    rx: 3.3,
    ry: 11
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-21.518 314.54 201.06)",
    fill: "#DDC7AB",
    cx: 314.5,
    cy: 201.1,
    rx: 4.1,
    ry: 13.7
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-21.518 317.511 178.077)",
    fill: "#DDC7AB",
    cx: 317.5,
    cy: 178.1,
    rx: 13.7,
    ry: 4.1
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-7.7 473.781 225.857)",
    fill: "#F7A226",
    cx: 473.6,
    cy: 225.9,
    rx: 15.7,
    ry: 48.7
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-21.901 462.057 164.866)",
    fill: "#DDC7AB",
    cx: 462,
    cy: 164.9,
    rx: 7.2,
    ry: 11.7
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-8.27 473.27 271.908)",
    fill: "#DDC7AB",
    cx: 473.4,
    cy: 271.9,
    rx: 3.3,
    ry: 11.4
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "matrix(.05353 -.9986 .9986 .05353 171.34 719.998)",
    fill: "#DDC7AB",
    cx: 465.5,
    cy: 269.6,
    rx: 11,
    ry: 3.3
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-68.482 450.552 201.247)",
    fill: "#DDC7AB",
    cx: 450.6,
    cy: 201.2,
    rx: 13.7,
    ry: 4.1
  }), /* @__PURE__ */ t.createElement("ellipse", {
    transform: "rotate(-68.482 447.58 178.265)",
    fill: "#DDC7AB",
    cx: 447.6,
    cy: 178.3,
    rx: 4.1,
    ry: 13.7
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#B0C6CC",
    d: "M373.3 130.3 356.1 155l17.8 26.1H396l4.7-25.4-5.4-25.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }));
}, BE = function(l) {
  var r = l.title, a = p(l, jh);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342zM198.9 113.6H256v64.8h-57.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M267.6 113.6v64.7m16.6-64.7v64.7m16.6-64.7v64.7",
    stroke: "#D80027",
    strokeWidth: 7
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M247.4 178.4v64.7m-13.3-64.7v64.7m-13.3-64.6v53.9m-13.7-53.9v47.1",
    stroke: "#D80027",
    strokeWidth: 5
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m199.9 146 27.6-32.4 28.5 32.3-28.1 32.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#BC8B00",
    d: "M182.2 95.9v92.2c0 34.3 27.3 54.2 48.6 64.5-.8 1.4 25.1 8.3 25.1 8.3s25.9-6.9 25.1-8.3c21.4-10.3 48.6-30.1 48.6-64.5V95.9H182.2zm129.9 92.2c0 16.9-10 29.4-32.8 43.9-8.6 5.5-17.5 9-23.3 11-5.8-2-14.7-5.5-23.3-11-22.8-14.5-32.8-28-32.8-43.9v-74.5h112.2v74.5z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M264.4 188.9h29.5v8.6h-29.5zm0 17.6h29.5v8.6h-29.5z"
  }));
}, LE = function(l) {
  var r = l.title, a = p(l, qh);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#009e49",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h171v342H0z"
  }));
}, OE = function(l) {
  var r = l.title, a = p(l, Zh);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#DB3E00",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#479900",
    d: "M331 0h182v342H331z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h181.8v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 126.7c-19.4 0-35.2 15.8-35.2 35.2v52.8h70.4v-52.8c0-19.5-15.8-35.2-35.2-35.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 84.3c-47.7 0-86.4 38.7-86.4 86.4S208.3 257 256 257s86.4-38.7 86.4-86.4-38.7-86.3-86.4-86.3zm0 157.7c-39.4 0-71.4-32-71.4-71.4 0-39.4 32-71.4 71.4-71.4 39.4 0 71.4 32 71.4 71.4 0 39.5-32 71.4-71.4 71.4z"
  }));
}, RE = function(l) {
  var r = l.title, a = p(l, Jh);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0072c6",
    d: "M88.8 136.5c-2.2 12.9-3.4 26.2-3.4 39.8 0 13.6 1.2 27 3.4 39.8L256 228.3l167.2-12.1c2.2-12.9 3.4-26.2 3.4-39.8s-1.2-27-3.4-39.8"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M423.2 219H88.8c15.8 69.8 84.7 122.3 167.2 122.3S407.4 288.8 423.2 219z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M365.9 136.5H146.1l44.9-21.1-23.9-43.5 48.8 9.4L222 32l34 36.2L290 32l6.1 49.3 48.8-9.4-23.9 43.5z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#ce1126"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M256.5 342 0 0v342z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M513 342V0L256 342z"
  })));
}, IE = function(l) {
  var r = l.title, a = p(l, Xh);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#00318b",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M454.8 265.38c7.94-10.93 13.24-24.27 13.24-40.42V104.89a59.754 59.754 0 0 1-36.02 12.01c-19.64 0-37.07-9.43-48.03-24.01-10.95 14.58-28.39 24.01-48.03 24.01-13.52 0-25.99-4.47-36.02-12v120.06c0 16.16 5.3 29.5 13.24 40.42H454.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#8DCCFF",
    d: "M310.23 260.98C332.65 296.96 384 309 384 309s51.35-12.04 73.77-48.02H310.23z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D87B00",
    d: "M396.66 172.21c.32 1.42 8.72 10.17 17.56 20.15 1.39 1.57-8.74 12.63-6.91 12.59 4.75-.12 19.27-17.26 19.34 6.65.05 15.94-30 27.51-30 27.51h17.47l.65 14.96s4.97-13.34 7.59-16.57c8.1-9.97 20.18-30.07 34.59-27.1 14.41 2.97-13.66-13.92-13.66-13.92s-5.2-15.19-16.63-16.97c-10.06-1.57-14.29-2.51-26.64-7.3-1.68-.65-3.88-2.32-3.36 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D87B00",
    d: "M359.69 198.69c1.07-.99 4.46-12.63 8.69-25.28.67-1.99 15.31 1.27 14.35-.3-2.47-4.06-24.58-8.08-3.9-20.08 13.79-8 38.82 12.27 38.82 12.27l-8.72-15.14 12.64-8.03s-14.05 2.35-18.14 1.69c-12.68-2.04-36.13-2.48-40.75-16.45-4.62-13.97-5.25 18.79-5.25 18.79s-10.56 12.08-6.4 22.88c3.66 9.5 4.96 13.64 6.97 26.73.29 1.79-.06 4.53 1.69 2.92z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D87B00",
    d: "M395.67 219.87c-1.39-.43-13.16 2.49-26.22 5.18-2.06.42-6.59-13.88-7.47-12.26-2.27 4.17 5.36 25.31-15.41 13.45-13.84-7.91-8.89-39.73-8.89-39.73l-8.71 15.14-13.29-6.9s9.09 10.96 10.57 14.84c4.6 11.99 16 32.49 6.24 43.49-9.76 11.01 18.88-4.9 18.88-4.9s15.76 3.07 23-5.96c6.38-7.94 9.3-11.14 19.61-19.45 1.43-1.12 3.97-2.19 1.69-2.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256.5 0h-23.1L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1V171h22.6L96 121.8V171h64v-49.2l73.4 49.2h23.1v-22.9l-46.6-30.7h46.6v-64h-46.6l46.6-30.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112V171h32v-69.6h112.5v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 171v-11.3l62.5-42.3h22.6L7.3 171zM7.3.1l77.8 53.2H62.5L0 11.1V.1zm249.2 0v11l-63 42.3h-22.6L248.7.1zM248.7 171l-77.8-53.6h22.6l63 42.3V171z"
  }));
}, PE = function(l) {
  var r = l.title, a = p(l, Qh);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#ED2024",
    d: "M0 0h90v60H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#212121",
    d: "M32.5 12.2v16l7.1 2.5-5 4.9 2.4 3 5.3-5.5 1.2 2.3-3 4.9 3.6 5.6-1.8 2.6 2.8 3.6 2.7-3.7-1.5-2.6 3-5.8-2.7-4.6 1.2-2.3 5.2 5.5 2.5-2.9-5.2-5.1 7.2-2.6V12.2l-5.2 1.9-.1 3.8-3.3.3v-2.6l1.7-2.3 5.6-2.2-2.3-.4 1.4-1.2.9.4-.8-1.4L54 9l-1-1.1L47.5 9l1.4 1.1-3.8 4.9-3.8-4.8 1.3-1.1-5-1.2L36.2 9l-1.5-.4-.8 1.4.9-.6 1.6 1.1-2.3.5 5.5 2 1.6 2.3v2.9l-3.3-.3v-3.6z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M26.2 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM57.4 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM53.4 36.1h6.4V38h-6.4zm-23.2 0h6.4V38h-6.4z",
    fill: "#212121"
  }));
}, VE = function(l) {
  var r = l.title, a = p(l, em);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FF9811",
    d: "M0 228h513v114H0z"
  }));
}, NE = function(l) {
  var r = l.title, a = p(l, tm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    d: "M0 171h513v171H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "m332.7 135.6 17.5-8.6-7.4-19-18.7 6.2zm-45.6-56 5.5-18.8-19.1-7.2-8 18zm29.4 23.2 12.2-15.3-14.9-13.9-14.2 13.6zm19.4 68.9 19.5-.8v-21.3l-22.9.2zm-12.6 38.1 18.8 5.5 7.3-19-18-8zm-29 32.4 14.9 12.7 14.4-14.4-13.1-14.7zm-47-147.7 9.8 19.9 21.9 3.3-15.9 15.5 3.6 21.9-19.6-10.4-19.7 10.2 3.8-21.9-15.8-15.5 22-3.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m250.8 61.3-2.7 18.3c43.1 3.2 77 39.2 77 83.1 0 46-37.3 82.9-83.4 83.4-29.2.3-51.3-14.8-67-33.7l-13.9 12.3c15 19 40.8 39.9 80.9 39.9 56.3 0 101.9-45.6 101.9-101.9.1-53.2-40.7-96.9-92.8-101.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#000",
    d: "m291.9 223.4-11.8 14s51.9 38.9 53.6 40.4c1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-2-1.5-51.8-42-51.8-42z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M206.1 157.2c-7.7 10.3-7.5 23.1 2.8 30.9 0 0 135.2 101.5 136.9 103 1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-1.9-1.5-149.7-121.5-149.7-121.5zm47.7 99.1 7.3 18.2 19.5-6-4.8-19.1zm-40.4-3.7-2 19.5 20.1 3.6 4.5-19.1zm-35.7-21.2L167.4 248l16.4 12.1 12.5-15.2z"
  })));
}, kE = function(l) {
  var r = l.title, a = p(l, rm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 744 496"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#3A7DCE",
    d: "M0 0h744v496H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#fff",
    d: "m120 125 90 63 54-14 23-81 61-36 92 14 105 55 6 90 34 12v92l-65 115-78 24-72-17 18-30-8-32-10 9-162-25-49-85 20-46-49-62z"
  }));
}, $E = function(l) {
  var r = l.title, a = p(l, nm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h512v114H0zm0 228h512v114H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFDA44",
    stroke: "#d6ab00",
    strokeWidth: 5,
    cx: 256.5,
    cy: 171,
    r: 40
  }));
}, WE = function(l) {
  var r = l.title, a = p(l, lm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#10338c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M513 33 95.3 171 513 310.76V342L0 171 513 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M513 287.18v24.58L81.72 171 513 30v24.16"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "m476.98 140.21-21.89 10.68-3.18-15.32 31.19-29.77s-9.42-40.65-13.75-44.98l-112.32 55.82-6.84 36.76-31.9 28.59-.4 34.2 34.29-22.76 67.23-2.66-1.51 38.11h22.23l11.9-44.64 31.55-24.61-6.6-19.42z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#EFC100",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    d: "m317.89 238.41-22.24-11.11 22.24-11.11h144.46v22.22z"
  }));
}, UE = function(l) {
  var r = l.title, a = p(l, im);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0zm0 228h513v114H0z"
  }));
}, GE = function(l) {
  var r = l.title, a = p(l, am);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#10338c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M222.2 170.7c.3-.3.5-.6.8-.9-.2.3-.5.6-.8.9zM188 212.6l11 22.9 24.7-5.7-11 22.8 19.9 15.8-24.8 5.6.1 25.4-19.9-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zm197.9 28.5 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zm-48.6-116 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9L332 136zm48.6-66.2 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zm42.5 49.7 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.4-7.6-9.5 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zM398 166.5l4.1 12.7h13.3l-10.8 7.8 4.2 12.7-10.8-7.9-10.8 7.9 4.1-12.7-10.7-7.8h13.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M254.8 0v30.6l-45.1 25.1h45.1V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9H99v-48.6l-87.4 48.6H-1.2v-30.6L44 115H-1.2V55.7h59.1L-1.2 22.8V0h26.7L99 40.8V0h55.6v48.6L242.1 0z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M142.8 0h-32v69.3h-112v32h112v69.4h32v-69.4h112v-32h-112z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "m154.6 115 100.2 55.7v-15.8L183 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m154.6 115 100.2 55.7v-15.8L183 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m154.6 115 100.2 55.7v-15.8L183 115zm-83.9 0-71.9 39.9v15.8L99 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M99 55.7-1.2 0v15.7l71.9 40z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M99 55.7-1.2 0v15.7l71.9 40z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M99 55.7-1.2 0v15.7l71.9 40zm84 0 71.8-40V0L154.6 55.7z",
    fill: "#D80027"
  }));
}, KE = function(l) {
  var r = l.title, a = p(l, cm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 363 242"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h363v242H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M57 96.9 14.7 78.2 57 59.6l18.6-42.2 18.6 42.2 42.3 18.6-42.3 18.7-18.6 42.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f30028",
    d: "m75.6 40.6 11.5 26.1 26.1 11.5-26.1 11.5-11.5 26.1-11.5-26.1L38 78.2l26.1-11.5z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 152.2h363v15.7H0zm0 31.4h363v15.7H0z",
    fill: "#FFDA44"
  }));
}, YE = function(l) {
  var r = l.title, a = p(l, om);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M513 210.9H202.2V342h-79.8V210.9H0v-79.8h122.4V0h79.8v131.1H513v61.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M513 149.7v42.6H183.7V342H141V192.3H0v-42.6h141V0h42.7v149.7z"
  }));
}, jE = function(l) {
  var r = l.title, a = p(l, sm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#ef3340",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#00b5e2",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#509e2f",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M265.6 212.6c-23 0-41.6-18.6-41.6-41.6s18.6-41.6 41.6-41.6c7.2 0 13.9 1.8 19.8 5-9.2-9-21.9-14.6-35.8-14.6-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2c13.9 0 26.6-5.6 35.8-14.6-5.9 3.2-12.6 5-19.8 5z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m297.6 142.2 5.5 15.5 14.9-7.1-7.1 14.9 15.5 5.5-15.5 5.5 7.1 14.9-14.9-7.1-5.5 15.5-5.5-15.5-14.9 7.1 7.1-14.9-15.5-5.5 15.5-5.5-7.1-14.9 14.9 7.1z"
  })));
}, qE = function(l) {
  var r = l.title, a = p(l, um);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#10338C",
    d: "M0 0h513.1v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#F6C500",
    d: "M99.9 0h342v342"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M19.9 21.1 40.3 6.2 60.9 21 54 0H26.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M92.3 25.5 84.4 1.3l-7.8 24.2H51.3l20.5 14.8-7.8 24 20.4-14.8L105 64.3l-7.9-24 20.5-14.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m136.3 69.2-7.8-24-7.8 24H95.5l20.4 14.9-7.8 24 20.4-14.8 20.6 14.8-7.8-24 20.4-14.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m179.4 112.3-7.8-24.1-7.8 24.1h-25.3l20.5 14.9-7.8 24 20.4-14.8 20.6 14.8-7.9-24 20.5-15z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m222.5 155.3-7.8-24-7.8 24h-25.4l20.6 15-7.8 24 20.4-14.9 20.4 14.9-7.8-24 20.6-15z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m265.6 198.4-7.8-24-7.8 24h-25.4l20.6 14.9-7.8 24.1 20.4-14.9 20.4 14.9-7.8-24.2 20.5-14.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m308.7 241.5-7.9-24-7.8 24h-25.3l20.5 14.8-7.9 24.2 20.6-14.9 20.4 14.8-7.8-24.1 20.5-14.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m351.7 284.6-7.8-24.2-7.8 24.2h-25.3l20.4 14.8-7.8 24.1 20.5-14.9 20.5 14.9-7.8-24.1 20.4-14.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m387 303.5-7.9 24.1-25.3.1 19.8 14.3h26.6l19.9-14.4h-25.3z"
  })));
}, ZE = function(l) {
  var r = l.title, a = p(l, fm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#ffc726",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h171v342H0zm342 0h171v342H342z",
    fill: "#00267f"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m325.74 101.02-31.97 12.4c-.68 1.35-5.79 7.54-8.18 53.06h-17.05v-60.42L256 78.68l-12.54 27v60.8H226.4c-2.39-45.53-7.8-52.48-8.47-53.84l-31.68-11.63c.15.31 15.4 31.34 15.4 78.01v12.54h41.81v71.07h25.08v-71.07h41.81v-12.54c0-24.13 4.17-44.02 7.68-56.46 3.82-13.57 7.7-21.49 7.74-21.57l-.03.03z"
  }));
}, JE = function(l) {
  var r = l.title, a = p(l, hm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#2d6e41",
    d: "M0 85.331h513v342H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#F40B32",
    cx: 218.902,
    cy: 256.5,
    r: 115
  }));
}, XE = function(l) {
  var r = l.title, a = p(l, mm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#fdda25",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ef3340",
    d: "M342 0h171v342H342z"
  }));
}, QE = function(l) {
  var r = l.title, a = p(l, dm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#3d944f",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ef2b2d",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m256 102.6 16.9 52h54.7l-44.2 32.2 16.8 52-44.2-32.1-44.2 32.1 16.8-52-44.2-32.2h54.7z"
  }));
}, eg = function(l) {
  var r = l.title, a = p(l, vm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#00966e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#d62612",
    d: "M0 228h513v114H0z"
  }));
}, tg = function(l) {
  var r = l.title, a = p(l, pm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m222.8 34.3-85.2 34.2 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.8H0V0h137.6z"
  }));
}, rg = function(l) {
  var r = l.title, a = p(l, Em);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M215.9 170.7 0 314.6V26.8zM513 26.8v287.8L297.1 170.7z",
    fill: "#47a644"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M513 26.8 296.1 170.7 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M513 26.8 297.1 170.7 513 314.6V342h-40L256 197.4 39 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 251.6,
    cy: 170.7,
    r: 100.2
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m251.4 103.6 7.4 12.9h14.8l-7.4 12.8 7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8H244zm38.8 66.7 7.4 12.9h14.8L305 196l7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.9l7.4-12.8-7.4-12.8h14.9zm-77.2 0 7.4 12.9h14.9l-7.4 12.8 7.4 12.8h-14.9l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8h14.8z",
    fill: "#D80027",
    stroke: "#47a644",
    strokeWidth: 3
  }));
}, ng = function(l) {
  var r = l.title, a = p(l, gm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#008751",
    d: "M0 85.333h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#fcd116",
    d: "M196.666 85.333H513v171H196.666z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#e8112d",
    d: "M196.666 256H513v171H196.666z"
  }));
}, lg = function(l) {
  var r = l.title, a = p(l, wm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#E6BC00",
    d: "M157.31 199.76s-9.04 43.93-19.31 40.39c-10.62-3.54-17.53-18.76-17.53-18.76l-14.52 21.24s38.18 8.48 41.01 5.47c1.22-1.14 8.21-15.1 10.34-26.05v-22.29zm-56.13 60.57s-2.48 20.18-1.06 22.66c1.24 2.3 39.48 11.33 39.48 11.33s-24.96 16.46-29.74 20.54L91.8 284.94l-.71-24.61h10.09zm11.33-165.69s39.65 41.6 40.36 45.5c.71 3.72-4.25 3.19-4.25 3.19s-44.79-37.53-49.92-41.07c-5.31-3.55 13.81-7.62 13.81-7.62z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ADADAD",
    d: "M99.41 104.73s16.99-.71 16.64-11.51c-.35-10.62-11.15-14.87-19.12-12.39-7.97 2.3-23.01 13.45-13.63 35.05 9.38 21.42 23.37 29.39 26.2 47.8 0 0-5.46 9.86-19.12.35-16.9-11.77-6.2-38.24-10.44-44.96-4.25-7.08-40.95-38.92-40.95-38.92s-30.24 39.37-18 74.92c16.95 49.21 51.74 31.98 64.61 36.76 0 0-42.13 61.96-49.57 67.09 0 0 24.08 8.32 47.8-18.76 0 0 5.84 9.74 7.08 20.18h10.27c4.78-26.2 51.51-64.26 49.92-82.32-1.77-21.25-49.21-49.39-51.69-73.29z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#E6BC00",
    d: "M359.17 201.27s8.96 42.43 19.23 38.89c10.62-3.54 17.53-18.76 17.53-18.76l14.52 21.24s-37 8.48-39.83 5.47c-1.21-1.14-9.32-13.79-11.52-24.66l.07-22.18zm56.05 59.06s2.48 20.18 1.06 22.66c-1.24 2.3-39.48 11.33-39.48 11.33s24.96 16.46 29.74 20.54l18.06-29.92.71-24.61h-10.09zM403.89 94.64s-39.65 41.6-40.36 45.5c-.71 3.72 4.25 3.19 4.25 3.19s44.79-37.53 49.92-41.07c5.14-3.55-13.81-7.62-13.81-7.62z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#125ECC",
    d: "M157.31 87.06H359.1v145.46c0 16.06-9.69 21.39-21.91 31.85l-45.92 39.41c-18.25 15.62-47.91 15.57-66.07 0l-46.01-39.43c-12.08-10.35-21.88-15.71-21.88-31.82V87.06z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFE600",
    d: "M200.55 147.71c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65-3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zM214.96 274.43c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c.01 7.96-6.45 14.41-14.41 14.41zm43.24 14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c0 7.95-6.45 14.41-14.41 14.41zm43.24-14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D60537",
    d: "M157.31 175.36H359.1v57.65H157.31v-57.65z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#EACE00",
    d: "M142.9 43.82s57.65-14.41 115.31-14.41 115.31 14.41 115.31 14.41l-14.41 57.65s-50.45-14.41-100.89-14.41-100.89 14.41-100.89 14.41L142.9 43.82z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#7A6920",
    d: "M258.2 72.65c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 5c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm-115.3 0c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ADADAD",
    d: "M365.08 178.02c-1.59 18.06 45.14 56.12 49.92 82.32h10.27c1.24-10.44 7.08-20.18 7.08-20.18 23.72 27.09 47.8 18.76 47.8 18.76-7.44-5.13-49.57-67.09-49.57-67.09 12.88-4.78 47.67 12.45 64.61-36.76 12.24-35.55-18-74.92-18-74.92s-36.7 31.84-40.95 38.92c-4.25 6.73 6.46 33.2-10.44 44.96-13.66 9.51-19.12-.35-19.12-.35 2.83-18.41 16.82-26.38 26.2-47.8 9.38-21.6-5.66-32.75-13.63-35.05-7.97-2.48-18.76 1.77-19.12 12.39-.35 10.8 16.64 11.51 16.64 11.51-2.48 23.9-49.92 52.04-51.69 73.29z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 258.2,
    cy: 204.19,
    r: 16.93
  }));
}, ig = function(l) {
  var r = l.title, a = p(l, zm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#c8102e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#012169",
    d: "M0 .1h256.5v171H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0h-22.6L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1v22.6h22.6L96 121.8v48.9h64v-48.9l73.4 48.9H256v-22.6l-46.1-30.7H256v-64h-46.1L256 22.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#c8102e",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#c8102e",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }), /* @__PURE__ */ t.createElement("g", {
    transform: "translate(13 5)"
  }, /* @__PURE__ */ t.createElement("path", {
    fill: "#fff",
    d: "M303.9 94.94v99.69c0 59.81 79.75 99.69 79.75 99.69s79.75-39.88 79.75-99.69V94.94H303.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2F8F22",
    d: "M436.37 254.44H330.93c23.13 25.08 52.72 39.88 52.72 39.88s29.59-14.8 52.72-39.88z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#65B5D2",
    cx: 383.65,
    cy: 214.56,
    r: 39.88
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#c8102e",
    cx: 343.77,
    cy: 194.63,
    r: 19.94
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#c8102e",
    cx: 423.52,
    cy: 194.63,
    r: 19.94
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#c8102e",
    cx: 383.65,
    cy: 154.75,
    r: 19.94
  })));
}, ag = function(l) {
  var r = l.title, a = p(l, xm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m0 193.74 513 127.19V214.26L0 97.08z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M513 234.26v-86.67L0 20.41v86.67"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027",
    stroke: "#231F20",
    strokeWidth: 3,
    strokeMiterlimit: 10
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M306.4 134.01a50.28 50.28 0 0 1 6.07 24.02c0 21.55-13.51 39.94-32.52 47.19v-59.51c5.7-1.19 10-6.37 10-12.59 6.9 0 12.5-5.75 12.5-12.85h-.42c6.9 0 12.91-5.75 12.91-12.85h-34.99V76.58l-14.99-27.71-15 27.71v30.84h-34.99c0 7.1 6.01 12.85 12.91 12.85h-.42c0 7.1 5.6 12.85 12.5 12.85 0 6.22 4.29 11.4 9.99 12.59v61.37c-22.09-5.39-38.48-25.3-38.48-49.05 0-8.7 2.2-16.88 6.07-24.02-10.96 11.21-17.72 26.53-17.72 43.44 0 34.32 27.82 62.15 62.15 62.15s62.15-27.83 62.15-62.15c0-16.91-6.77-32.24-17.72-43.44z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M198.46 226.81s20.69 27.71 66.5 27.71 66.5-27.71 66.5-27.71l13.47 28.37s-21.03 27.71-79.97 27.71-79.97-27.71-79.97-27.71l13.47-28.37zm-69.22-93.63h20.88l24.93 27.26v73.45h-26.28v-68.37zm270.76 0h-20.88l-24.93 27.26v73.45h26.27v-68.37z"
  })));
}, cg = function(l) {
  var r = l.title, a = p(l, Mm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#d52b1e",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f9e300",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#007934",
    d: "M0 228h513v114H0z"
  }));
}, og = function(l) {
  var r = l.title, a = p(l, Fm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#012a87",
    d: "M0 342h513V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f9d90f",
    d: "M250.4 0H0v166.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#dc171d",
    d: "m140.4 118.3 12.2 21.2h24.5l-12.3 21.1 12.3 21.2h-24.5L140.4 203l-12.2-21.2h-24.5l12.3-21.2-12.3-21.1h24.5z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "none",
    stroke: "#000",
    strokeWidth: 9,
    strokeMiterlimit: 10,
    cx: 140.4,
    cy: 160.6,
    r: 57.7
  }));
}, sg = function(l) {
  var r = l.title, a = p(l, ym);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#009b3a",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#fedf00",
    d: "m256.5 19.3 204.9 151.4L256.5 322 50.6 170.7z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 256.5,
    cy: 171,
    r: 80.4
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#002776",
    d: "M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51zm119 20.3c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6z"
  }));
}, ug = function(l) {
  var r = l.title, a = p(l, Hm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#ffc72c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0z",
    fill: "#00778b"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M256 171 0 342V0z"
  }));
}, fg = function(l) {
  var r = l.title, a = p(l, _m);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FF7415",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M513 0H0v342"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 42,
    strokeMiterlimit: 10,
    d: "M128.7 255.5s35 54 67.3 32.4c56.9-37.9-68.9-108.6-2.9-152.6 58.3-38.8 76.6 103.5 137.6 62.8 59-39.3-64.7-111.4-9.2-148.4 33.4-22.2 67.1 32.6 67.1 32.6"
  }));
}, hg = function(l) {
  var r = l.title, a = p(l, bm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 33.333 1100 733.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#ef2b2d",
    d: "M0 0h1100v800H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#fff",
    d: "M300 0h200v800H300z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#fff",
    d: "M0 300h1100v200H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#002868",
    d: "M350 0h100v800H350z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#002868",
    d: "M0 350h1100v100H0z"
  }));
}, mg = function(l) {
  var r = l.title, a = p(l, Am);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 238h513v104H0zM0 0h513v104H0z",
    fill: "#6da9d2"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 125.5h513v89.656H0z"
  }));
}, dg = function(l) {
  var r = l.title, a = p(l, Sm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#007C30",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#CE1720",
    d: "M0 230h513V0H0"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M100 230V0H0v342h513-413z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M28 159.6 8.6 128.2 28 97.4l19.3 30.8zm44.6 0-19.3-31.4 19.3-30.8L92 128.2zM28 241.2 8.6 209.8 28 179l19.3 30.8zm44.6 0-19.3-31.4L72.6 179 92 209.8z",
    fill: "#CE1720"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m28 73.8-16.1-26L28 22.2l16 25.6zm44.6 0-16-26 16-25.6 16.1 25.6zM28 318l-16.1-26.1L28 266.3l16 25.6zm44.6 0-16-26.1 16-25.6 16.1 25.6z",
    fill: "none",
    stroke: "#CE1720",
    strokeWidth: 7
  }));
}, vg = function(l) {
  var r = l.title, a = p(l, Cm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#003e87",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 260.9,
    cy: 170.9,
    r: 118.9
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "none",
    stroke: "#6DA544",
    strokeWidth: 18,
    strokeMiterlimit: 10,
    cx: 261.9,
    cy: 173.1,
    r: 94.5
  }), /* @__PURE__ */ t.createElement("g", {
    stroke: "#000"
  }, /* @__PURE__ */ t.createElement("path", {
    fill: "#003e87",
    d: "m261.9 151.5-50.6 23.4v20c0 11.8 6.1 22.8 16.2 28.9L262 239l34.5-15.2c10-6.2 16.2-17.1 16.2-28.9v-20l-50.8-23.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M211.3 128.1h101.3v46.7H211.3z"
  })), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v35H0zm0 306h513v35H0z",
    fill: "#ce1127"
  }));
}, pg = function(l) {
  var r = l.title, a = p(l, Dm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h142v342H0zm371 0h142v342H371zm-64.5 206 50.4-25.2-25.2-12.6V143l-50.4 25.2 25.2-50.4h-25.2L256.1 80l-25.2 37.8h-25.2l25.2 50.4-50.4-25.2v25.2l-25.2 12.6 50.4 25.2-12.6 25.2h50.4V269h25.2v-37.8h50.4z",
    fill: "red"
  }));
}, Eg = function(l) {
  var r = l.title, a = p(l, Tm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "green",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m422.7 252.4 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.2V301l-11.1-8.9-11.1 8.9v-14.2l-13.8-3.2 11.1-8.8-6.2-12.8 13.9 3.2zm-46.6-136.3 6.2 12.9 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.1v14.3l-11.1-8.9-11.1 8.9.1-14.3-13.9-3.1 11.1-8.8-6.2-12.8L370 129zm37-77.8 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.9-13.9 3.1v14.2L413.1 78 402 86.9l.1-14.2-13.9-3.1 11.1-8.9-6.2-12.8 13.9 3.2zm51.8 58.4 6.2 12.8 13.9-3.2-6.3 12.8 11.2 8.9-13.9 3.1.1 14.2-11.2-8.9-11.1 8.9.1-14.2L440 128l11.2-8.9-6.3-12.8 13.9 3.2zm-28 68.1 4.9 14.8h15.6l-12.6 9.2 4.8 14.9-12.7-9.2-12.6 9.2 4.8-14.9-12.6-9.2h15.6zM306.8 254.7c-49.2 0-89.1-39.9-89.1-89.1s39.9-89.1 89.1-89.1c15.3 0 29.8 3.9 42.4 10.7C329.4 67.9 302.3 56 272.5 56c-60.5 0-109.6 49.1-109.6 109.6S212 275.3 272.5 275.3c29.8 0 56.9-11.9 76.6-31.3-12.6 6.8-27 10.7-42.3 10.7zM140.4 59.5C129.7 41 109.7 28.6 86.8 28.6S44 41 33.3 59.5h107.1zm.2.4-53.8 53.8-53.7-53.8C28 68.9 25 79.3 25 90.5c0 34.2 27.7 61.9 61.9 61.9s61.9-27.7 61.9-61.9c-.1-11.2-3.1-21.6-8.2-30.6z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M71.4 98.2v52.2c4.9 1.3 10.1 1.9 15.5 1.9s10.5-.7 15.5-1.9V98.2h-31z"
  }));
}, gg = function(l) {
  var r = l.title, a = p(l, Bm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M513 66.9V0H411.7L0 274.4V342h100.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M513 0v40.1L60.2 342H0v-40.8L451.8 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m93.6 31.2 16.3 50.4H163l-42.9 31.2 16.4 50.5-42.9-31.2-43 31.2L67 112.8 24.1 81.6h53.1z"
  }));
}, wg = function(l) {
  var r = l.title, a = p(l, Lm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#d21034",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 171h211.5v85.3H0zm300.5 0H512v85.3H300.5z",
    fill: "#3a9927"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#003082",
    d: "M0 0v85.3h211.5V0h89v85.3H513V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M300.5 85.3H512v85.3H300.5zM0 85.3h211.5v85.3H0z",
    fill: "#FFF"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M300.5 342h-89v-86H0v86h513v-86H300.5zM105.7 8.6l8.6 26.2h27.5L119.5 51l8.6 26.2L105.7 61 83.4 77.2 91.9 51 69.6 34.8h27.6z",
    fill: "#ffce00"
  }));
}, zg = function(l) {
  var r = l.title, a = p(l, Om);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#da1a35",
    d: "M0 85.331h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#009543",
    d: "M443.726 85.331 102.4 426.657H0V85.331z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#fbde4a",
    d: "M500.124 85.331 158.798 426.657H11.876L353.202 85.331z"
  }));
}, xg = function(l) {
  var r = l.title, a = p(l, Rm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "red",
    d: "M0 85.337h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M356.174 222.609h-66.783v-66.783h-66.782v66.783h-66.783v66.782h66.783v66.783h66.782v-66.783h66.783z"
  }));
}, Mg = function(l) {
  var r = l.title, a = p(l, Im);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#009e60",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f77f00",
    d: "M0 0h171v342H0z"
  }));
}, Fg = function(l) {
  var r = l.title, a = p(l, Pm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#01237a",
    d: "M0 85.332h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m384 156.705 5.283 16.254h17.089l-13.826 10.045 5.281 16.254L384 189.211l-13.825 10.047 5.28-16.254-13.825-10.045h17.089zm-70.209 29.081 15.228 7.758 12.084-12.083-2.673 16.879 15.227 7.759-16.879 2.673-2.674 16.88-7.76-15.227-16.878 2.673 12.086-12.084zm-29.081 70.209 16.254-5.281.001-17.089 10.044 13.825 16.254-5.282-10.046 13.827 10.046 13.826-16.254-5.28-10.044 13.825v-17.09zm29.081 70.209 7.759-15.229-12.084-12.084 16.881 2.674 7.757-15.227 2.674 16.879 16.879 2.672-15.227 7.759 2.673 16.882-12.084-12.087zM384 355.284l-5.281-16.253h-17.091l13.827-10.045-5.28-16.254L384 322.776l13.827-10.044-5.281 16.254 13.826 10.045h-17.089zm70.209-29.08-15.229-7.758-12.083 12.084 2.673-16.882-15.227-7.756 16.879-2.675 2.675-16.879 7.756 15.227 16.881-2.674-12.086 12.085zm29.081-70.209-16.254 5.281v17.09l-10.045-13.826-16.254 5.281 10.046-13.826-10.046-13.827 16.254 5.282 10.045-13.825v17.089zm-29.081-70.207-7.757 15.226 12.082 12.084-16.881-2.673-7.756 15.227-2.675-16.88-16.879-2.675 15.227-7.757-2.673-16.878 12.084 12.082zM0 186.665v16h46.069L0 233.377v7.539l57.377-38.252H80L0 255.998h112v-69.334H0zm96 69.331H22.628L96 207.083v48.913zm80-117.331 80-53.334H144v69.334h112v-16h-46.069L256 107.951v-7.539l-57.377 38.251H176v.002zm-16-53.332h73.372L160 134.246V85.333zm-16 170.665h112l-80-53.334h22.623L256 240.917v-7.539l-46.069-30.713H256v-16H144v69.333zm16-48.915 73.372 48.913H160v-48.913zM112 85.331H0l80 53.334H57.377L0 100.413v7.539l46.069 30.712H0v16h112V85.331zm-16 48.915L22.628 85.333H96v48.913z",
    fill: "#FFF"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M144 85.331h-32v69.334H0v32h112v69.333h32v-69.333h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M80 138.665 0 85.331v15.082l57.377 38.252zm96 0h22.623L256 100.413V85.331zm-118.623 64L0 240.917v15.081l80-53.333zm118.623 0 80 53.333v-15.081l-57.377-38.252z"
  })));
}, yg = function(l) {
  var r = l.title, a = p(l, Vm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M196 0h317v171H196z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0037A1",
    d: "M0 0h196v171H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M98 24.5 113.1 71H162l-39.6 28.7 15.2 46.5L98 117.5l-39.6 28.7 15.2-46.5L34 71h48.9z"
  }));
}, Hg = function(l) {
  var r = l.title, a = p(l, Nm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#007a5e",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M342 0h171v342H342zm-86 102.2 17.2 53H329L283.9 188l17.2 53-45.1-32.7-45.1 32.7 17.2-53-45.1-32.8h55.8z",
    fill: "#fcd116"
  }));
}, _g = function(l) {
  var r = l.title, a = p(l, km);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m226.8 239.2-9.7-15.6-17.9 4.4 11.9-14.1-9.7-15.6 17.1 6.9 11.8-14.1-1.3 18.4 17.1 6.9-17.9 4.4zM290.6 82l-10.1 15.4 11.6 14.3-17.7-4.8-10.1 15.5-1-18.4-17.7-4.8 17.2-6.6-1-18.4 11.6 14.3zm-54.4-56.6-2 18.3 16.8 7.6-18 3.8-2 18.3-9.2-16-17.9 3.8 12.3-13.7-9.2-15.9 16.8 7.5zm56.6 136.4-14.9 10.9 5.8 17.5-14.9-10.8-14.9 11 5.6-17.6-14.9-10.7 18.4-.1 5.6-17.6 5.8 17.5zM115 46.3l17.3 53.5h56.2l-45.4 32.9 17.3 53.5-45.4-33-45.5 33 17.4-53.5-45.5-32.9h56.3z",
    fill: "#FFDA44"
  }));
}, bg = function(l) {
  var r = l.title, a = p(l, $m);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 256.5h513V342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 171h513v85.5H0z"
  }));
}, Ag = function(l) {
  var r = l.title, a = p(l, Wm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 285h513v57H0zM0 0h513v57H0z"
  }));
}, Sg = function(l) {
  var r = l.title, a = p(l, Um);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FF9811",
    d: "M0-40.8v422.9-211.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v68.3H0zm0 136.5h513v68.3H0zm0 136.6h513v68.3H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M256 170.7 0 342V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m86.5 111.4 12.7 39.2h41.3l-33.4 24.2 12.8 39.3-33.4-24.2-33.4 24.2 12.8-39.3-33.4-24.2h41.2z"
  }));
}, Cg = function(l) {
  var r = l.title, a = p(l, Gm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#003893",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#cf2027",
    d: "M0 182.2h513v41.4H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 140.8h513v41.4H0zm0 82.8h513V265H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m150.4 70 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13.1-17.9 13.1 6.8-21.1-17.9-13.1h22.2zm0 209.7 6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13h22.2zm-97.6-70.9 6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13H46zM90.1 91l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-18-13h22.3zm-66.3 71H46l6.8-21.1 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13-17.9 13 6.8-21.1zm48.4 148.9 6.8-21.1-18-13h22.3l6.8-21.2 6.9 21.2h22.2l-18 13 6.9 21.1-18-13zM248 208.8l-6.9 21.1h-22.2l18 13-6.9 21.2 18-13.1 18 13.1-6.9-21.2 18-13h-22.2zM210.7 91l-6.8 21.1h-22.2l17.9 13-6.8 21.2 17.9-13.1 18 13.1-6.9-21.2 18-13h-22.2zm66.4 71h-22.2l-6.9-21.1-6.9 21.1h-22.2l18 13.1-6.9 21.1 18-13 18 13-6.9-21.1zm-48.4 148.9-6.9-21.1 18-13h-22.2l-6.9-21.2-6.8 21.2h-22.2l17.9 13-6.8 21.1 17.9-13z",
    fill: "#f7d116",
    stroke: "#000"
  }));
}, Dg = function(l) {
  var r = l.title, a = p(l, Km);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#002b7f",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f9e814",
    d: "M0 233.5h513v51H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m168.7 86.5 12.9 39.8h41.8l-33.8 24.5 12.9 39.7-33.8-24.5-33.8 24.5 12.9-39.7-33.8-24.5h41.8zm-83.3-54 7.8 23.9h25L97.9 71.1l7.8 23.8-20.3-14.7-20.3 14.7 7.8-23.8-20.3-14.7h25.1z",
    fill: "#FFF"
  }));
}, Tg = function(l) {
  var r = l.title, a = p(l, Ym);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0021ad",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1c8a42",
    d: "M0 0h513v342"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m77.6 272 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9V317l-10.3-8.3-10.2 8.3v-13.2l-12.8-2.9 10.3-8.1-5.8-11.9 12.9 3zm-37.1-98.9 5.7 11.9 12.8-3-5.7 11.8 10.3 8.2-12.9 2.9.1 13.2-10.3-8.3-10.3 8.3.1-13.2-12.9-2.9 10.4-8.2L22 182l12.8 3zm37.1-80.9 5.7 11.8 12.8-2.9-5.7 11.8 10.3 8.2-12.8 2.9v13.1l-10.3-8.2-10.2 8.2V124l-12.8-2.9 10.3-8.2-5.8-11.8L72 104zm46.1 62.9 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9v13.2l-10.3-8.2-10.2 8.2v-13.2l-12.8-2.9 10.3-8.1-5.7-11.9 12.8 3zm-32.9 54 4.4 13.7h14.5L98 231.3l4.5 13.7-11.7-8.4-11.7 8.4 4.5-13.7-11.7-8.5h14.4z",
    fill: "#FFF"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#ffc639",
    cx: 267.1,
    cy: 170.7,
    r: 74.5
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1c8a42",
    d: "M267.1 220.3h24.8s10.8-19 0-37.2l24.8-24.8-12.4-24.8h-12.4s-6.2 18.6-31 18.6-31-18.6-31-18.6h-12.4l12.4 24.8-12.4 24.8 12.4 12.4s12.4-24.8 37.2-12.4c0 0 10.5 15.5 0 37.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ffc639",
    d: "M464.4 92.2c.6-2.9-.2-17.6-.2-20.7 0-21.3-13.9-39.4-33.2-45.7 5.9 12 9.2 25.4 9.2 39.7 0 4.8-.4 9.5-1.1 14.1-2.9-4.7-6.6-8.9-11.2-12.6-17.1-13.6-40.6-14-57.9-2.5 13.4 2.9 26.3 8.9 37.7 18 9 7.1 16.2 16.8 21.7 26.1 0 0-17.8 10.9-31 15.1s-42.3 7.9-42.3 7.9c72 12 132-36 132-36-6.5-13.4-15.8-4-23.7-3.4z"
  }));
}, Bg = function(l) {
  var r = l.title, a = p(l, jm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#DB7D00",
    d: "M141.7 154.7s.2 67.1 74.7 65.3l4.5 13.9h8.9s-7.4-41.1 60.1-41.5c0 0 0-27.6 27.6-27.6H359s-66-51.8 58.9-118l1.8-13.1s-129.9 71-198.9 57.2c0 0 10.7 42.5-10.8 42.5-10.8 0-9.7-8.1-32.3-8.1-18.7 0-17.3 19.7-26.3 19.5-8.9-.2-18.8-12.3-19.6-10.2-.7 2.1 9.9 20.1 9.9 20.1z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#006651"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M237.2 308.1c6.9-5 13-6.6 22.4-8.3s19.4-4.4 24.6-5.8-17.7 6.6-23.5 8.3c-5.8 1.6-23.5 5.8-23.5 5.8zm37.9-14.7c-1.9-11.9 2.8-24.3 13.5-29.3 2.5 8.6-5.2 23.2-13.5 29.3zm18.2-6.2c-5.8-9.8 4-22.6 11.1-28.8 3.3 6-2.5 23.7-11.1 28.8zm16.9-7.6c-6.2-8.4 1.1-23.2 8.8-29 3.1 8.2.1 23.2-8.8 29zm16.9-10.6c-5.6-8-1.7-20.4 6.3-28.4 5.8 6.6.9 21-6.3 28.4zm13.5-10.7c-4.7-7.5 1.1-25.4 8.6-30.4 3.3 6.6.8 25.4-8.6 30.4zm10.8-2.8c-1.4-10.8 17.4-22.7 25.2-22.4-.9 8.9-8.9 18.6-25.2 22.4zm-10.5 12.2c8.8-9.1 26-9.1 32.1-7.2-1.7 5.3-21.9 16.9-32.1 7.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M328.7 276.8c12.4-3.3 20.5-6.1 27.9 1.7-5.2 6.6-25.4 4.7-27.9-1.7zm-17.7 8c11.9-6.4 26.3 3 28.5 8.6-13.3 5.5-28.7-7.2-28.5-8.6zm-16.3 9.2c10.8-4.1 23.2 1.4 28.2 7.5-5.8 2.7-21 5.7-28.2-7.5zm-14.9 4.7c12.4-1.4 24.4 8 27 13.4-15.9 1.5-22-3.2-27-13.4zm-4 9.4c-6.9-5-13-6.6-22.4-8.3-9.4-1.7-19.4-4.4-24.6-5.8-5.3-1.4 17.7 6.6 23.5 8.3 5.8 1.6 23.5 5.8 23.5 5.8zm-37.9-14.7c1.9-11.9-2.8-24.3-13.5-29.3-2.5 8.6 5.2 23.2 13.5 29.3zm-18.2-6.2c5.8-9.8-4-22.6-11.1-28.8-3.3 6 2.5 23.7 11.1 28.8zm-16.9-7.6c6.2-8.4-1.1-23.2-8.8-29-3.1 8.2-.1 23.2 8.8 29zM185.9 269c5.6-8 1.7-20.4-6.3-28.4-5.8 6.6-.9 21 6.3 28.4zm-13.5-10.7c4.7-7.5-1.1-25.4-8.6-30.4-3.3 6.6-.8 25.4 8.6 30.4zm-10.8-2.8c1.4-10.8-17.4-22.7-25.2-22.4.9 8.9 8.9 18.6 25.2 22.4zm10.5 12.2c-8.8-9.1-26-9.1-32.1-7.2 1.7 5.3 21.9 16.9 32.1 7.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M184.3 276.8c-12.4-3.3-20.5-6.1-27.9 1.7 5.2 6.6 25.4 4.7 27.9-1.7zm17.7 8c-11.9-6.4-26.3 3-28.5 8.6 13.3 5.5 28.7-7.2 28.5-8.6zm16.3 9.2c-10.8-4.1-23.2 1.4-28.2 7.5 5.8 2.7 21 5.7 28.2-7.5zm14.9 4.7c-12.4-1.4-24.4 8-27 13.4 15.9 1.5 22-3.2 27-13.4z"
  })));
}, Lg = function(l) {
  var r = l.title, a = p(l, qm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#11457e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#d7141a",
    d: "M513 171v171H0l215-171z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M513 0v171H215.185L0 0z"
  }));
}, Og = function(l) {
  var r = l.title, a = p(l, Zm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 228h513v114H0z"
  }));
}, Rg = function(l) {
  var r = l.title, a = p(l, Jm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#12ad2b",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6ab2e7",
    d: "M513 0v166.7L0 170.8V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 170.7 0 342V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#d7141a",
    d: "m89.8 92.5 17 52.4H162l-44.6 32.5 17 52.4-44.6-32.4-44.6 32.4 17-52.4-44.6-32.5h55.2z"
  }));
}, Ig = function(l) {
  var r = l.title, a = p(l, Xm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#c60c30",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M190 0h-60v140H0v60h130v142h60V200h323v-60H190z"
  }));
}, Pg = function(l) {
  var r = l.title, a = p(l, Qm);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 110.7v120h513v-120z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 110.7h513v40H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 190.7h513v40H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M196 0h120v342H196z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M196 0h40v342h-40z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M274.7 0h40v342h-40z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#D80027",
    cx: 256,
    cy: 170.7,
    r: 123.1
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m256 58.6 4.6 14.2h15l-12.1 8.9 4.6 14.2-12.1-8.8-12.1 8.8 4.6-14.2-12.1-8.9h15zM190.1 80l12.2 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15l-4.6 14.2-4.7-14.2h-15l12.1-8.8zm-40.7 56h15l4.6-14.2 4.7 14.2h15l-12.2 8.8 4.7 14.3-12.2-8.8-12.1 8.8 4.6-14.3zm0 69.3 12.1-8.8-4.6-14.3L169 191l12.2-8.8-4.7 14.3 12.2 8.8h-15l-4.7 14.3-4.6-14.3zm40.7 56.1 4.6-14.3-12.1-8.8h15l4.7-14.3 4.6 14.3h15l-12.1 8.8 4.6 14.3-12.1-8.9zm65.9 21.4-4.6-14.3h-15l12.1-8.8-4.6-14.3 12.1 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15zm65.9-21.4-12.2-8.9-12.1 8.9 4.6-14.3-12.1-8.8h15l4.6-14.3 4.7 14.3h15l-12.1 8.8zm40.7-56.1h-15l-4.6 14.3-4.7-14.3h-15l12.2-8.8-4.7-14.3L343 191l12.1-8.8-4.6 14.3zm0-69.3-12.1 8.8 4.6 14.3-12.1-8.8-12.2 8.8 4.7-14.3-12.2-8.8h15l4.7-14.2 4.6 14.2zm-40.7-56-4.6 14.3 12.1 8.8h-15l-4.7 14.2-4.6-14.2h-15l12.1-8.8-4.6-14.3 12.1 8.8zM279.3 168.7c-11-21.1-14.5-25.1-14.5-25.1s.4-9.7.4-15.6c0-8.8-7.4-15.8-16.5-15.8-8.6 0-15.7 2.9-16.5 11-4.2.9-8.6 4.1-8.6 10.7 0 4.8 1 7.3 5.2 9.3 2.1-4.6 4.3-4.8 9.3-6.4.8.6 1.7 3 2.6 3.4l.3 1s-13.3 6.6-13.3 30.9c0 29.5 22 45.4 22 45.4l-1.8.3-1.9 7.1h22v-7.2l11 17.5c.3-.3 10.2-47.6.3-66.5z",
    fill: "#496E2D"
  }));
}, Vg = function(l) {
  var r = l.title, a = p(l, ed);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 215.2h211.5v126.1H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h211.5v126.2H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M300.5 0H512v126.2H300.5z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M300.5 215.2H512v126.1H300.5z"
  }), /* @__PURE__ */ t.createElement("g", {
    stroke: "#FFF",
    strokeWidth: 5,
    strokeMiterlimit: 10
  }, /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M256 130h-49.9v49.4s19.5 6 49.9 6V130z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M206.1 179.4v6c0 27.5 22.3 49.9 49.9 49.9v-49.9c-30.4 0-49.9-6-49.9-6z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M256 235.3c27.5 0 49.9-22.3 49.9-49.9v-6s-19.5 6-49.9 6v49.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M256 130v55.4c30.4 0 49.9-6 49.9-6V130H256z"
  })));
}, Ng = function(l) {
  var r = l.title, a = p(l, td);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#41662E",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256.5 0H513v342H256.5z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "m341.5 105.3-29.4 40.4-47.5-15.4 29.4 40.4-29.4 40.4 47.5-15.4 29.4 40.4v-50l47.5-15.5-47.5-15.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M309.9 276.7c-58.5 0-106-47.5-106-106s47.5-106 106-106c18.3 0 35.4 4.6 50.4 12.7-23.5-23-55.7-37.2-91.2-37.2-72 0-130.4 58.4-130.4 130.4S197.1 301 269.1 301c35.5 0 67.7-14.2 91.2-37.2-14.9 8.2-32.1 12.9-50.4 12.9z"
  })));
}, kg = function(l) {
  var r = l.title, a = p(l, rd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 170.7h513V256H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 256h513v85.3H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFDA44",
    cx: 256,
    cy: 171,
    r: 60
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#4C1F00",
    d: "M369.2 79.9s-27.2-13.8-33.9-16c-6.7-2.2-49.1-13.2-49.1-7 0 10.3-13.5 12-15.5 12s-2-5.3-14.8-5.3-13.7 4.8-15.8 4.8c-2.2 0-14.5-1-14.5-11.5 0-5.2-42.9 4-49.1 7-6.1 3.1-33.9 16-33.9 16s45.8 2.7 53.9 6.2 43.8 16.5 43.8 16.5l-2.8 13.3h37.8l-3.8-13.3s35.1-12.7 43.8-16.5 53.9-6.2 53.9-6.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#57BA17",
    d: "M217.7 171.7c0 21.1 17.2 38.3 38.3 38.3 21.1 0 38.3-17.2 38.3-38.3v-11.5h-76.5v11.5z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M256 110.5c-21.1 0-38.3 17.2-38.3 38.3v11.5h76.5v-11.5c.1-21.1-17.1-38.3-38.2-38.3z"
  }));
}, $g = function(l) {
  var r = l.title, a = p(l, nd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#111",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#368FD8",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 228h513v114H0z"
  }));
}, Wg = function(l) {
  var r = l.title, a = p(l, ld);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#C09300",
    d: "M220.3 204.4s0-58.4 4.5-64.7c3.1-4.3 16.8 5.2 22.7 4.5 0 0 4.2-7.5 4.5-12 .3-4.6-1.1-7.6-4.9-6.2 0 0-1.2-2.1.5-3.3 1.6-1.2 5.6.1 5.6.1s-.5-1 1.6-.9c2.9.2 7.2 1.4 7.4 5.6.2 3.1.3 7.7.4 8.7.7 6.8 2.7 8.7 2.7 8.7s18.4-9.2 22-5.2c3.3 3.8 4.5 64.7 4.5 64.7l-18.1-16.8 12.1 29.5s-14.4 2.4-28.9 2.4c-14.5 0-31.1-4.2-31.1-4.2l13.8-28.2-19.3 17.3z"
  }));
}, Ug = function(l) {
  var r = l.title, a = p(l, id);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#428823",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M256 171 0 342V0zm53.1 0c0-22.9 13.1-42.1 34.6-46.8-3.3-.7-6.7-1.1-10.3-1.1-26.4 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9c3.5 0 7-.4 10.3-1.1-21.5-5.1-34.6-24.2-34.6-46.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m365 129.2 10.3 31.7h33.3l-27 19.6 10.3 31.7-26.9-19.6-27 19.6 10.3-31.7-27-19.6h33.4z"
  })));
}, Gg = function(l) {
  var r = l.title, a = p(l, ad);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#56AF35",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "m0 342 513-171L0 0v342z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#ffc945"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M134.7 231.5c33.6 0 60.8-27.2 60.8-60.8s-27.2-60.8-60.8-60.8-60.8 27.2-60.8 60.8 27.2 60.8 60.8 60.8zm0 24.3c-47 0-85.2-38.1-85.2-85.2s38.1-85.2 85.2-85.2 85.2 38.1 85.2 85.2-38.2 85.2-85.2 85.2z"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 119.5,
    cy: 148.3,
    r: 17.5
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 148.9,
    cy: 158.5,
    r: 17.5
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 134.7,
    cy: 135.2,
    r: 17.5
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 119.5,
    cy: 172.7,
    r: 17.5
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 149.9,
    cy: 182.8,
    r: 17.5
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 122.5,
    cy: 198,
    r: 17.5
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 145.9,
    cy: 205.2,
    r: 17.5
  })));
}, Kg = function(l) {
  var r = l.title, a = p(l, cd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h22.5v15H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D03433",
    d: "M0 0h22.5v4H0V0zm0 11h22.5v4H0v-4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FBCA46",
    d: "M0 4h22.5v7H0V4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M7.8 7h1v.5h-1V7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A41517",
    d: "M7.2 8.5c0 .3.3.5.6.5s.6-.2.6-.5L8.5 7H7.1l.1 1.5zM6.6 7c0-.3.2-.5.4-.5h1.5c.3 0 .5.2.5.4V7l-.1 1.5c-.1.6-.5 1-1.1 1-.6 0-1-.4-1.1-1L6.6 7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A41517",
    d: "M6.8 7.5h2V8h-.5l-.5 1-.5-1h-.5v-.5zM5.3 6h1v3.5h-1V6zm4 0h1v3.5h-1V6zm-2.5-.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v.2c0 .2-.1.3-.3.3H7c-.1 0-.2-.1-.2-.2v-.3z"
  }));
}, Yg = function(l) {
  var r = l.title, a = p(l, od);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#20AA46",
    d: "M0 0h22.5v5H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#E92F3B",
    d: "M0 10h22.5v5H0v-5z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FADF50",
    d: "M0 5h22.5v5H0V5z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#205CCA",
    cx: 11.3,
    cy: 7.5,
    r: 5.2
  }), /* @__PURE__ */ t.createElement("g", {
    stroke: "#FFDB3D",
    fill: "none"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "m11.3 8.8-2.1 1.5.8-2.4-2-1.5h2.5l.8-2.3.8 2.3h2.6l-2.1 1.5.8 2.4-2.1-1.5zm-1-2.4h1.9M9.9 7.8l1.3 1m.8-2.6.7 1.8M10 7.9l.6-1.8M11 9l1.6-1.1",
    strokeWidth: 0.5
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m8.7 3.9 1.1 1.6m4-1.7-1 1.6m-1.5 4.7V12M8.9 8.3 7.1 9m8.4 0-1.8-.7",
    strokeWidth: 0.25
  })));
}, jg = function(l) {
  var r = l.title, a = p(l, sd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 810 540"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#039",
    d: "M0 0h810v540H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FC0",
    d: "m404.951 59.865 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-90 24 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-66 66 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-24 89.999 6.735 20.719h21.894l-17.633 12.813 6.638 20.74-17.634-12.813-17.634 12.813 6.736-20.731-17.633-12.811h21.796zm24 90.001 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm66 66 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm180-312 6.735 20.718h21.894l-17.633 12.812 6.637 20.74-17.633-12.812-17.635 12.812 6.737-20.729-17.633-12.812h21.795zm66 66 6.735 20.718h21.894l-17.633 12.812 6.637 20.74-17.633-12.812-17.635 12.812 6.737-20.729-17.633-12.812h21.795zm24 90 6.735 20.718h21.894l-17.633 12.813 6.638 20.74-17.634-12.813-17.634 12.813 6.736-20.731-17.633-12.811h21.796zm-24 90 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm-156 90 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm90-24.001 6.735 20.719h21.894l-17.633 12.812 6.639 20.74-17.635-12.812-17.633 12.812 6.735-20.73-17.633-12.811h21.797z"
  }));
}, qg = function(l) {
  var r = l.title, a = p(l, ud);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M513 129.3V212H203.7v130H121V212H0v-82.7h121V0h82.7v129.3z"
  }));
}, Zg = function(l) {
  var r = l.title, a = p(l, fd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0v22.6l-46.1 30.7H256v64h-46.1L256 148v22.7h-22.6l-73.4-49v49H96v-49l-73.4 49H0V148l46.1-30.7H0v-64h46.1L0 22.6V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176zM0 170.7v-15.1l57.4-38.3H80zm256 0v-15.1l-57.4-38.3H176z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#F3F3F3",
    d: "M307.1 127.1v92c0 61.6 80.5 80.5 80.5 80.5s80.4-19 80.4-80.6v-92l-80.5-23-80.4 23.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M468 132.8V98.3H307.1v34.5h69v69h-69v23h69V296c6.9 2.5 11.5 3.5 11.5 3.5s4.6-1.1 11.5-3.5v-71.2h69v-23h-69v-69H468z"
  }));
}, Jg = function(l) {
  var r = l.title, a = p(l, hd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1F8BDE",
    d: "M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3zm79.6 86.3c7.9-4.5 15.9-10 23.2-16.7 20.5-18.5 32.6-41.4 32.6-69.7v-90c0-.3-120.4-.3-120.4-.3v90.3c0 28.3 12.1 51.2 32.6 69.7 8.3 7.5 17.6 13.9 27.6 19 1.4-.6 2.8-1.4 4.4-2.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#187536",
    d: "M347.1 193.4c-2.6-7.9 1.7-14.3 10.1-14.3h60.5c8.2 0 12.8 6.3 10.1 14.3l-5.5 16.5c-2.6 7.9-8.9 9.2-15.8 4 0 0 2.6-4.8-19.1-4.8-21.7 0-19.1 4.8-19.1 4.8-6.1 5.7-13.1 4-15.8-4 .1.1-5.4-16.5-5.4-16.5z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M357.4 179.1c8.1 1.6 17.8-15 30.1-15 13.1 0 21.8 17.1 30.1 15 7.4-1.8 15-22.2 15-30.1 0-16.6-20.2-30.1-45.1-30.1-24.9 0-45.1 13.5-45.1 30.1-.1 8.5 6.6 28.5 15 30.1zm-1.4 91.6c6.2.4 12.5-1.8 17.2-6.5l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c4.7 4.7 11 6.9 17.1 6.5 5.3-.3 32.5-33.5 25.7-32.6-4.6.6-9.1 2.8-12.7 6.3l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-3.5-3.5-7.8-5.6-12.3-6.3-6.7-1.1 20.1 32.2 25.3 32.5zM322.1 210c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0 0 0 5.5-14.8 2.5-15.9-7.9-2.9-17.2-1.2-23.5 5.2l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-6.2-6.2-15.1-8-22.8-5.5-3.1 1.1 1.9 16.1 1.9 16.1z"
  }));
}, Xg = function(l) {
  var r = l.title, a = p(l, md);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m256 37.9 10.1 31.2H299l-26.6 19.3 10.2 31.2-26.6-19.3-26.6 19.3 10.2-31.2L213 69.1h32.9zM123.2 170.7l31.2-10.2v-32.8l19.3 26.6 31.2-10.2-19.3 26.6 19.3 26.5-31.2-10.1-19.3 26.5v-32.8zM256 303.5l-10.1-31.2H213l26.6-19.3-10.2-31.3L256 241l26.6-19.3-10.2 31.3 26.6 19.3h-32.9zm132.8-132.8-31.2 10.1v32.8l-19.3-26.5-31.2 10.1 19.3-26.5-19.3-26.6 31.2 10.2 19.3-26.6v32.8z",
    fill: "#FFF"
  }));
}, Qg = function(l) {
  var r = l.title, a = p(l, dd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0F61A5",
    d: "M513 214.5H206.2V342h-87.8V214.5H0v-87.7h118.4V0h87.8v126.8H513V192z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#E50E3D",
    d: "M513 149.3V192H183.7v150H141V192H0v-42.7h141V0h42.7v149.3z"
  }));
}, ew = function(l) {
  var r = l.title, a = p(l, vd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, tw = function(l) {
  var r = l.title, a = p(l, pd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 228h513v114H0z"
  }));
}, rw = function(l) {
  var r = l.title, a = p(l, Ed);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v341.3H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6z"
  })), /* @__PURE__ */ t.createElement("path", {
    d: "M393.8 230 513 295.7V230H393.8zm-82.1 0L513 341.3v-31.5L369.3 230h-57.6zm146.9 111.3-147-81.7v81.7h147zM90.3 230 0 280.2V230h90.3zm110 14.2v97.2H25.5l174.8-97.2zm-82.1-132.9L0 45.6v65.7h118.2zm82.1 0L0 0v31.5l143.7 79.8h56.6zM53.4 0l147 81.7V0h-147zm368.3 111.3L513 61.1v50.2h-91.3zm-110-14.2V0h174.9L311.7 97.1z",
    fill: "#0052B4"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M311.7 230 513 341.3v-31.5L369.3 230h-57.6zm-168 0L0 309.9v31.5L200.3 230h-56.6zm56.6-118.7L0 0v31.5l143.7 79.8h56.6zm168 0L513 31.5V0L311.7 111.3h56.6z"
  })));
}, nw = function(l) {
  var r = l.title, a = p(l, gd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#c60a0a",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#3E8446",
    d: "m256.5 170.7-212 126.1V44.5z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m256.5 170.7 211 126.1h-423zm211-126.2-211 126.2-212-126.2z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#3E8446",
    d: "M467.5 44.5v252.3l-211-126.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m256.5 10.4 2.8 10.2H270l-8.6 6.3 3.3 10.2-8.2-6.3-9.2 6.3 3.3-10.2-8.6-6.3h10.7zm-86.4 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0 3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm-85.4 293.8 2.8 10.2H270l-8.6 6.3 3.3 10.2-8.2-6.3-9.2 6.3 3.3-10.2-8.6-6.3h10.7zm-86.4 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0 3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#c60a0a",
    cx: 244.5,
    cy: 170.7,
    r: 76.2
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m244.5 110.1 13.6 41.8h44l-35.6 25.8 13.6 41.8-35.6-25.8-35.5 25.8 13.6-41.8-35.6-25.8h44zm-136.8 57.7c4.4 6.9 2.3 16.1-4.6 20.5s-16.1 2.3-20.5-4.6c-7.9-12.5-3.3-33-3.3-33s20.4 4.6 28.4 17.1z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#A2001D",
    cx: 99.1,
    cy: 182.1,
    r: 7.4
  }));
}, lw = function(l) {
  var r = l.title, a = p(l, wd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M.8 0h21v15H.8V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#eb000e",
    d: "M9.8 6H0v3h9.8v6h3V9h9.8V6h-9.8V0h-3v6z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#eb000e",
    d: "m17.3 2.7-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm-12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm0 9-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z"
  }));
}, iw = function(l) {
  var r = l.title, a = p(l, zd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FDEB01",
    d: "m0 0 90 60H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#58A846",
    d: "M90 0v60L0 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ED3D24",
    d: "m50.7 33.3 9.3-6.7H48.5L45 15.7l-3.5 10.9H30l9.3 6.7-3.6 11 9.3-6.7 9.3 6.7z"
  }));
}, aw = function(l) {
  var r = l.title, a = p(l, xd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M308 0H204v118.7H0v104h204V342h104V222.7h205v-104H308z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m368.6 188 26 17.3V136l-26 17.3h-95.3V58.1l17.3-26h-69.2l17.3 26v95.2h-95.3l-26-17.3v69.3l26-17.3h95.3v95.2l-17.3 26h69.2l-17.3-26V188z"
  }));
}, cw = function(l) {
  var r = l.title, a = p(l, Md);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m255.9 113.8 14.1 43.4 40.4 3.2-37 26.9 19.5 40.3-37-26.9-37 26.9 14.1-43.5-36.9-26.9h45.7z"
  }));
}, ow = function(l) {
  var r = l.title, a = p(l, Fd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 230h513v112H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "M363.1 131.8V99.1H374V77.3h-21.9v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7h-21.8V55.5h10.9V33.7h-21.8v10.9h-10.9V33.7H254v10.9h-10.9V33.7h-21.8v21.8h10.9v76.3h-21.8V99.1h10.9V77.3h-21.8v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7H145V219h239.9v-87.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "m264.9 235.5-24.2 18.2 19.1 14.3v31.3h-23.2v9h23v7.9h-23v9.3H270V268l19.1-14.3-24.2-18.2zm0 25.3-10.1-7.1 10.1-7.1 10.1 7.1-10.1 7.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M239.6 209.7v-27.9s.1-22.3 25-22.3c24.8 0 25.7 22 25.7 22v28.2h-50.7zm-69.1 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M169.1 209.7v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm151.8 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm8.4-77.7v-15.7s.1-12.1 11.3-12.1c11.3 0 11.7 11.9 11.7 11.9V132h-23zm-78.8 0v-23.7s.1-18.3 14.3-18.3c14.2 0 14.7 18 14.7 18v24h-29zm-73 0v-15.7s.1-12.1 11.3-12.1 11.7 11.9 11.7 11.9V132h-23z"
  }));
}, sw = function(l) {
  var r = l.title, a = p(l, yd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M513 0v171H0V0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 185.8,
    cy: 171.2,
    r: 117.8
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M68 171c0-65.1 52.8-117.8 117.8-117.8 65.1 0 117.8 52.8 117.8 117.8"
  }));
}, uw = function(l) {
  var r = l.title, a = p(l, Hd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#cf0d19",
    d: "M0 0h513v100H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 121h513v100H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1a7e25",
    d: "M0 242h513v100H0z"
  }));
}, fw = function(l) {
  var r = l.title, a = p(l, _d);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h171v342H0z"
  }));
}, hw = function(l) {
  var r = l.title, a = p(l, bd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, mw = function(l) {
  var r = l.title, a = p(l, Ad);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v113.8H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 227.6h513V342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0070C8",
    d: "M126 171 0 342V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "M233.8 139.4v40.4c0 35.6 35.6 35.6 35.6 35.6s35.6 0 35.6-35.6v-40.4h-71.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#786145",
    d: "M264.5 179.8h9.8l4 25.8h-17.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M287.2 162c0-9.8-8-14.8-17.8-14.8s-17.8 5-17.8 14.8c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h35.6c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m230.7 120 1.9 3.3h3.8l-1.9 3.3 1.9 3.2h-3.8l-1.9 3.3-1.9-3.3H225l1.9-3.2-1.9-3.3h3.8zm15.3 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.3 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.8 0 1.9 3.3h3.8l-1.9 3.3 1.9 3.2H279l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm16 0 1.9 3.3h3.8l-1.9 3.3 1.9 3.2H295l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm15 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2H310l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8z",
    fill: "#FFDA00",
    stroke: "#000",
    strokeMiterlimit: 10
  }));
}, dw = function(l) {
  var r = l.title, a = p(l, Sd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#0d5eaf"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h190v190H0z"
  })), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M0 76h190v38H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M76 0h38v190H76z"
  })));
}, vw = function(l) {
  var r = l.title, a = p(l, Cd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }), /* @__PURE__ */ t.createElement("ellipse", {
    fill: "#FFF",
    cx: 443.4,
    cy: 233.6,
    rx: 29,
    ry: 43.5
  }), /* @__PURE__ */ t.createElement("ellipse", {
    fill: "#FFCE00",
    cx: 406.9,
    cy: 317.7,
    rx: 22,
    ry: 9.3
  }), /* @__PURE__ */ t.createElement("ellipse", {
    fill: "#FFCE00",
    cx: 364,
    cy: 317.7,
    rx: 22,
    ry: 9.3
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#39B200",
    d: "m342 190.1 43.4 86.9 43.5-86.9z"
  }), /* @__PURE__ */ t.createElement("ellipse", {
    fill: "#9B9B9B",
    cx: 327.5,
    cy: 233.6,
    rx: 29,
    ry: 43.5
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#757575",
    d: "m371 175.6-14.5 14.5h57.9l-14.5-14.5 14.5-43.5s-13-29-29-29-29 29-29 29l14.6 43.5z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#C6B56F",
    cx: 385.4,
    cy: 67,
    r: 29
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#A54A00",
    cx: 386,
    cy: 88.7,
    r: 29
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 443.4,
    cy: 117.7,
    r: 29
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#0049FF",
    cx: 342.2,
    cy: 146.7,
    r: 29
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#0041F9",
    cx: 429.8,
    cy: 146.7,
    r: 29
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#F7D71E",
    cx: 386,
    cy: 233.6,
    r: 29
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#CEC851",
    cx: 457.9,
    cy: 190.1,
    r: 29
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 385.4,
    cy: 289.5,
    r: 29
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#7C0B29",
    d: "m371 135.7 14.5-3.5 14.5 3.5c0 7.5-14.5 11-14.5 11s-14.5-3.5-14.5-11z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 327.5,
    cy: 117.4,
    r: 29
  }));
}, pw = function(l) {
  var r = l.title, a = p(l, Dd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h171v342H0zm342 0h171v342H342z",
    fill: "#338AF3"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#DCC26D",
    cx: 256,
    cy: 155.8,
    r: 25.5
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#628A40",
    d: "M194.2 155.9c0 22.1 11.8 42.5 30.8 53.5 5.9 3.4 13.5 1.4 16.9-4.5 3.4-5.9 1.4-13.5-4.5-16.9-11.5-6.6-18.5-18.9-18.5-32.1 0-6.8-5.5-12.4-12.4-12.4s-12.3 5.5-12.3 12.4zm95.1 52.1c17.8-11.4 28.6-31 28.5-52.1 0-6.8-5.5-12.4-12.4-12.4-6.8 0-12.4 5.5-12.4 12.4 0 12.7-6.5 24.5-17.1 31.3-5.8 3.6-7.7 11.2-4.1 17 3.6 5.8 11.2 7.7 17 4.1.2-.1.3-.2.5-.3z"
  }));
}, Ew = function(l) {
  var r = l.title, a = p(l, Td);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M11.1 11.1h489.7v319.1H11.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#7DBEF1",
    d: "M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1C8AE6",
    d: "M179.8 180.7h152.6l-29.3 64.9h-95.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF042",
    d: "M192.3 205.9s40.5 38.2 51 38.2c12.4 0 12.6-18.4 25.5-25.5 20.2-11.1 51-12.7 51-12.7L297 248.7l-41 36.6-46.8-39.7-16.9-39.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#259C7B",
    d: "m256 157.5-22.5 15.6 7.9-26.2-21.8-16.5 27.4-.5 9-25.9 9 25.9 27.4.5-21.8 16.6 7.9 26.2-22.5-15.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#8E5715",
    d: "M249.7 144.6c-.9 9.2-1.5 18.4-1.7 27.6-.3 11.9.3 20.7 2 26 2.2 6.6 7.2 12.9 14.2 18.9 5.3 4.6 10.6 8.1 14.2 10.1 3.1 1.7 7 .6 8.7-2.4 1.7-3.1.6-7-2.4-8.7-4.3-2.5-8.4-5.4-12.2-8.7-5.4-4.6-9.1-9.2-10.4-13.3-1.1-3.4-1.6-11.3-1.4-21.7.2-8.9.8-17.8 1.7-26.6.4-3.5-2.2-6.6-5.7-7-3.6-.3-6.7 2.3-7 5.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m217.8 170.7 25.5 38.2h-25.5v-38.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "none",
    stroke: "#D80027",
    strokeWidth: 12,
    strokeMiterlimit: 10,
    d: "M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"
  }));
}, gw = function(l) {
  var r = l.title, a = p(l, Bd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h512v171H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h182v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m98.3 109.8 15.1 46.5h48.9L122.8 185l15.1 46.5-39.6-28.7-39.5 28.7L73.9 185l-39.6-28.7h48.9z"
  }));
}, ww = function(l) {
  var r = l.title, a = p(l, Ld);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#009E49",
    d: "M0 0h900v600H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m0 0 947 300L0 600V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFD00D",
    d: "M0 26.1 870 300 0 573.9V26.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2D2D2D",
    d: "m0 0 450 300L0 600V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D3132F",
    d: "m0 35 397.5 265L0 565V35z"
  }));
}, zw = function(l) {
  var r = l.title, a = p(l, Od);
  return /* @__PURE__ */ t.createElement("svg", v({
    viewBox: "0 0.5 21 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h21v15H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ee1c25",
    d: "M0 0h21v15H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M12 7.19c-.798-.5-1 .409-1 0 0-.828.895-1.5 2-1.5s2 .672 2 1.5c-.949 0-1.044.5-1.5.5-.56 0-.702 0-1.5-.5zM13.25 7a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5zm-1.81 1.962c.228-.913-.698-.824-.31-.95.788-.257 1.703.387 2.045 1.438.341 1.05-.021 2.11-.809 2.366-.293-.903-.798-.838-.939-1.272-.173-.533-.217-.668.012-1.582zm.566 1.13a.25.25 0 1 0 .476-.154.25.25 0 0 0-.476.154zM9.58 8.977c.94-.065.57-.919.81-.588.486.67.157 1.74-.737 2.389-.894.65-2.013.632-2.5-.038.768-.558.55-1.018.92-1.286.453-.33.568-.413 1.507-.477zm-.899.888a.25.25 0 1 0 .294.405.25.25 0 0 0-.294-.405zm.312-2.652c.351.874 1.049.258.809.588-.487.67-1.606.687-2.5.038-.894-.65-1.223-1.719-.736-2.39.767.559 1.138.21 1.507.478.453.33.568.413.92 1.286zm-1.124-.58a.25.25 0 1 0-.293.404.25.25 0 0 0 .293-.404zm2.619-.524c-.722.605.08 1.078-.309.951-.788-.256-1.15-1.315-.809-2.365.342-1.05 1.257-1.695 2.045-1.439-.293.903.153 1.147.012 1.581-.173.533-.217.668-.939 1.272zm.205-1.247a.25.25 0 1 0-.475-.155.25.25 0 0 0 .475.155z",
    fill: "#FFF"
  })));
}, xw = function(l) {
  var r = l.title, a = p(l, Rd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M223.4 170.7c.3-.3.5-.6.8-.9-.3.3-.5.6-.8.9zm-34.2 41.9 11 22.9 24.7-5.7-11.1 22.8 19.9 15.8L209 274v25.4l-19.8-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zm197.9 28.5 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.9-2.6 9.5-7.5-5.3-10.9 11.9 2.7zm-48.6-116 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6v-12.1l-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zm48.6-66.2 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9 11.9 2.7zm42.4 49.7 5.3 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.5-7.6-9.4 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zm-30.3 57.9 4.1 12.7h13.3l-10.8 7.8 4.1 12.6-10.7-7.8-10.8 7.8 4.1-12.6-10.7-7.8h13.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z",
    fill: "#D80027"
  }));
}, Mw = function(l) {
  var r = l.title, a = p(l, Id);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0zm203.5-110.1 6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm105 0 6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zM256 147.6l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm-52.5 29.7 6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1zm105 0 6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1z",
    fill: "#338AF3"
  }));
}, Fw = function(l) {
  var r = l.title, a = p(l, Pd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M309.3 113.2v-44l17.5-14.4 17.7 14.4v44zm-105.6 0v-44l-17.3-14.4-17.9 14.4v44zm35.2 0v-44l17.6-14.4 17.6 14.4v44z",
    fill: "#338AF3"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M309.3 113.2h-35.2v-44l17.5-14.4 17.7 14.4zm-70.4 0h-35.2v-44l17.5-14.4 17.7 14.4z",
    fill: "#0052B4"
  }), /* @__PURE__ */ t.createElement("path", {
    stroke: "#D80027",
    fill: "#FFF",
    d: "M168.5 113.2v101.9c0 24.3 14.4 46.2 35.4 59.4 21.3 13.4 42.1 14.7 52.6 14.7s31.4-1.7 52.6-14.8c21-13 35.4-35.1 35.4-59.3V113.2h-176z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M168.5 113.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm35.2 35.2h35.2V254h-35.2zm35.2-35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-35.2 35.2h35.2V254h-35.2zm35.2 55.5c8.6-5.4 16.2-12.3 22-20.3h-22v20.3zM181.7 254c5.8 8 13.3 14.9 22 20.4V254h-22zm57.2 0v33.7c7.2 1.2 13.3 1.5 17.6 1.5 4.3 0 10.4-.3 17.6-1.6V254h-35.2z",
    fill: "#D80027"
  }));
}, yw = function(l) {
  var r = l.title, a = p(l, Vd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M0 0h513v172H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 172h513v172H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m381.4 251.5-110.7-13.8-110.8 13.8V85.4h221.5z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#0052B4",
    cx: 270.7,
    cy: 182.3,
    r: 55.4
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#A2001D",
    cx: 270.7,
    cy: 182.3,
    r: 27.7
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M229.1 113.1h83.1l-41.5 41.5z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M256.8 140.8h27.7v83h-27.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M314.9 215.5h-88.5l-66.5 36h221.5z"
  }));
}, Hw = function(l) {
  var r = l.title, a = p(l, Nd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 228h513v114H0z"
  }));
}, _w = function(l) {
  var r = l.title, a = p(l, kd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 300 200"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#fc0",
    d: "M0 0h300v200H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0768a9",
    d: "M0 0h200v200H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#fff",
    d: "M0 0h100v200H0z"
  }));
}, bw = function(l) {
  var r = l.title, a = p(l, $d);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#E00",
    d: "M0 0h513v171H0z"
  }));
}, Aw = function(l) {
  var r = l.title, a = p(l, Wd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FF9811",
    d: "M342 0h171v342H342z"
  }));
}, Sw = function(l) {
  var r = l.title, a = p(l, Ud);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M340.6 122.4h-56.1l-28-48.6-28 48.6h-56.1l28 48.6-28 48.6h56.1l28 48.6 28-48.6h56.1l-28-48.6 28-48.6zM293.2 171 276 204.2h-38.9L219.8 171l17.2-33.2h38.9l17.3 33.2zm-36.7-71.8 11.9 23.3h-23.9l12-23.3zm-58.3 38.6h23.9l-10.8 21-13.1-21zm0 66.4 13-22.1 11.9 22.1h-24.9zm58.3 37.5-11.9-22.1h23.9l-12 22.1zm59.4-37.5h-25l11.9-22.1 13.1 22.1zm-26.1-66.4h26.1l-13 22.1-13.1-22.1zM0 21.3h512V64H0zm0 256h512V320H0z",
    fill: "#2E52B2"
  }));
}, Cw = function(l) {
  var r = l.title, a = p(l, Gd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#E52D42",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M393.3 68.2h-45.8l-33.8 80.2-34.4-22.9s-24.7-59.1-34.4-68.2c-9.7-9.7-18.7-.6-48.9 7.8-29.6 8.4-30.8 18.7-42.2 18.7-4.8 0-19.9-17.5-27.7-22.3-12.1-7.8-16.9-4.2-13.9 7.2 1.2 4.8 10.9 10.9 16.9 19.9 7.8 11.5 12.7 25.9 12.7 25.9s10.9-10.3 16.9-12.1c9-2.4 19.3 1.8 31.4 0 15.1-2.4 31.4-10.9 31.4-10.9l4.2 43.4s-54.3 50.7-49.5 70.6 56.1 44.6 68.2 62.7c12.1 17.5-7.2 24.1-7.2 32.6s-1.8 19.9 7.2 16.3c9-3.6 10.3-18.1 18.7-31.4 6-9 10.3-13.9 11.5-17.5 1.8-9-23.5-32-37.4-48.9-6.6-7.8-19.9-18.7-19.9-18.7l39.2-29.6s67.6 27.7 82.6 18.7c15.1-9 19.3-98.3 19.3-98.3l47-11.5-12.1-11.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#F8DD4E",
    d: "M279.3 262.4c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.8-182.8c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm0 91.1c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6 0 11.5 4.8 11.5 11.5-.6 6.7-5.5 11.5-11.5 11.5zm-136.9 45.8c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.2-136.9c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-4.8 11.5-11.5 11.5zm22.9 91.1c-6 0-11.5-10.3-11.5-22.9s4.8-22.9 11.5-22.9c6 0 11.5 10.3 11.5 22.9s-4.8 22.9-11.5 22.9zm-114-45.2c-6 0-11.5-4.8-11.5-11.5 0-6.6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5 0 6.6-4.8 11.5-11.5 11.5z"
  }));
}, Dw = function(l) {
  var r = l.title, a = p(l, Kd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#181A93",
    d: "M17.3 0h478.4v342H17.3V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFA44A",
    d: "M0 0h513v114H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1A9F0B",
    d: "M0 228h513v114H0V228z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 114h513v114H0V114z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 256.5,
    cy: 171,
    r: 34.2
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#181A93",
    d: "M256.5 216.6c-25.1 0-45.6-20.5-45.6-45.6s20.5-45.6 45.6-45.6 45.6 20.5 45.6 45.6-20.5 45.6-45.6 45.6zm0-11.4c18.2 0 34.2-16 34.2-34.2s-15.9-34.2-34.2-34.2-34.2 16-34.2 34.2 16 34.2 34.2 34.2z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#181A93",
    cx: 256.5,
    cy: 171,
    r: 22.8
  }));
}, Tw = function(l) {
  var r = l.title, a = p(l, Yd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0-.3h513V342H0V-.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M462.9 198.1c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zM0 31.7l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 1-20 6-30.1 12-7 4-16 9-20 9s-14-5-21-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-11-30.1-12v22zm462.9 55.2c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 3.9-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 1 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-8 19-9v-23zm-50.1 133.3c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 0 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-9 19-9v-23z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0-.3h256v171H0V-.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M389.8 119.9H408v78.8h-18.3l.1-78.8zm0 117.8H408v75.1h-18.3l.1-75.1z",
    fill: "#A2001D"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M144-.3h-32v70H0v32h112v69h32v-69h112v-32H144v-70z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54zM0 170.7v-15l57-38h23l-80 53zm256 0v-15l-57-38h-23l80 53z"
  })), /* @__PURE__ */ t.createElement("g", {
    fill: "#2E52B2"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73zM0 147.7v-30h46l-46 30zm96 23v-49l-73 49h73zm160-23v-30h-46l46 30zm-96 23v-49l73 49h-73z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#5DA51E",
    stroke: "#45602C",
    strokeWidth: 4,
    strokeMiterlimit: 10,
    d: "M462.8 91.5h-29.1l25.7-25.7c4.5-4.4 4.5-11.4 0-15.8l-3.4-3.4c-4.4-4.4-11.4-4.4-15.8 0l-25.9 25.9V37.4c0-6.2-5.1-11.3-11.3-11.3h-4.7c-6.2 0-11.3 5.1-11.3 11.3v31.7l-23.5-23.8c-4.7-4.7-12.2-4.7-16.9 0l-3.6 3.6c-4.7 4.7-4.7 12.4 0 17.2l25 25.4h-30.6c-6 0-10.9 4.9-10.9 10.9v4.6c0 6 4.9 10.9 10.9 10.9H369l-20.7 20.7c-4.4 4.4-4.4 11.4 0 15.8l3.4 3.4c4.4 4.4 11.4 4.4 15.8 0l19.6-19.6V167c0 6.1 5.1 11.1 11.3 11.3h4.7c6.2 0 11.3-5.1 11.3-11.3v-28.3l22.2 22.6c4.7 4.7 12.4 4.7 17.1 0l3.6-3.6c4.7-4.7 4.7-12.4 0-17.2L435.2 118h27.6c5.9 0 10.7-4.9 10.9-10.9v-4.6c0-6.1-4.9-11-10.9-11z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#E2DD24",
    stroke: "#525625",
    strokeWidth: 4,
    strokeMiterlimit: 10,
    d: "M439.2 249.1h-79.8s-.9-13.4-6-21.8c-6.2-10.4-13.9-28.1-1.4-36.7 15.9-10.9 33.7.8 48.2.8 11.8.1 26.9-14 45-.8 12.2 8.9 3.9 28.2-1.3 36.7-7 11.5-4.7 21.8-4.7 21.8z"
  }));
}, Bw = function(l) {
  var r = l.title, a = p(l, jd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#CE1126",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M219.2 160.7h-29.3c1.5-5.7 6.6-9.9 12.8-9.9v-19.9c-18.3 0-33.1 14.9-33.1 33.1v16.5h49.6c1.8 0 3.3 1.5 3.3 3.3v6.6h-66.2v19.9h86.1v-26.5c0-12.7-10.4-23.1-23.2-23.1zm49.6 29.8v-59.6H249v79.5h33.1v-19.9zm66.2 0v-59.6h-19.8v59.6h-6.6v-19.8h-19.9v39.7h59.6v-19.9z",
    fill: "#547C31"
  }));
}, Lw = function(l) {
  var r = l.title, a = p(l, qd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 227.9h513v114H0zm278.8-93.1c.1 2 8.7 26.2 4.4 39.4-6.6 20.3-15.8 21.8-19.8 24.5V134l-6.9-4.2-6.9 4.2v64.7c-4-2.7-12.4-2.4-19.8-24.5-4.3-12.7 5.7-37.3 5.8-39.2 0 0-9.5 8.1-15.8 24-5.9 14.8 1.9 49.6 29.5 54.8 2.3.4 4.7 5.6 7.2 5.6 2.1 0 4.1-5.2 6-5.5 28.4-4.6 35-41.7 29.9-55.6-5.4-14.6-13.6-23.5-13.6-23.5z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M44.6 98.9h22.3v24.4H44.6zM0 98.9h22.3v24.4H0zm89.2 0h22.3v24.4H89.2zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4H223zm44.7 0H290v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0H513v24.4h-22.3zm-446.1 118h22.3v25.5H44.6zm-44.6 0h22.3v25.5H0zm89.2 0h22.3v25.5H89.2zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5H223zm44.7 0H290v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0H513v25.5h-22.3z",
    fill: "#FFF",
    opacity: 0.5
  }));
}, Ow = function(l) {
  var r = l.title, a = p(l, Zd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M513 210.6H202.2v130.7h-79.8V210.6H0v-79.8h122.4V0h79.8v130.8H513v18.5l-1 42.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M513 149.3V192H183.7v149.3H141V192H0v-42.7h141V0h42.7v149.3z"
  }));
}, Rw = function(l) {
  var r = l.title, a = p(l, Jd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M342 0H0v341.3h512V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, Iw = function(l) {
  var r = l.title, a = p(l, Xd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M301.8 171 513 30.2V0h-45.3L256.5 140.8 45.3 0H0v30.2L211.2 171 0 311.8V342h45.3l211.2-140.8L467.7 342H513v-30.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m233.7 44.6 22.3 5.6 22.3-5.6 4-20.9-14.9 6.5L256 14.8l-11.4 15.4-14.9-6.5z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M233.7 44.6s-4 12.9-4 29.9c0 27.9 26.3 41.3 26.3 41.3s26.3-15.5 26.3-41.3c0-15.4-4-29.9-4-29.9s-8.1-5-22.3-5-22.3 5-22.3 5z"
  }));
}, Pw = function(l) {
  var r = l.title, a = p(l, Qd);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M215.9 171 0 314.6V26.8zM513 26.8v287.8L296.1 171z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M513 26.8 296.1 171 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4L215.9 171 0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M513 26.8 296.1 171 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4L215.9 171 0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }));
}, Vw = function(l) {
  var r = l.title, a = p(l, ev);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M256.5 170.7 0 341.3V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m77.9 139.5 7.9 16.4 17.8-4.1-8 16.5 14.3 11.3-17.8 4 .1 18.3-14.3-11.5-14.2 11.5v-18.3l-17.8-4 14.3-11.3-7.9-16.5 17.7 4.1z"
  }));
}, Nw = function(l) {
  var r = l.title, a = p(l, tv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#D80027",
    cx: 256.5,
    cy: 171,
    r: 96
  }));
}, kw = function(l) {
  var r = l.title, a = p(l, rv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h512v90.579H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 251h513v91H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "m323.3 54.5-25.6-11.8L256 137l-41.7-94.3-25.6 11.8 51.8 116.2-51.8 116.2 25.6 11.8 41.7-94.4 41.7 94.4 25.6-11.8-51.8-116.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M273.4 65.6c-9.9-10.8-17.4-17-17.4-17s-7.5 6.2-17.4 17v210.1c9.9 10.8 17.4 17 17.4 17s7.5-6.2 17.4-17V65.6z"
  })), /* @__PURE__ */ t.createElement("path", {
    d: "M209 105.9v129.5c10.5 18.5 23.3 33.7 32.9 43.8V62.1c-9.6 10.1-22.4 25.3-32.9 43.8zm94 0c-10.5-18.5-23.3-33.7-32.9-43.8v217.2c9.6-10.1 22.4-25.3 32.9-43.8V105.9z",
    fill: "#A2001D"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M303 105.9v129.5c10.6-18.8 18.8-41 18.8-64.8s-8.2-45.9-18.8-64.7zm-94 0v129.5c-10.6-18.8-18.8-41-18.8-64.8s8.2-45.9 18.8-64.7z"
  }));
}, $w = function(l) {
  var r = l.title, a = p(l, nv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 256,
    cy: 170.7,
    r: 170.7
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M382.4 170.7 330.8 195l27.5 50-56.1-10.7-7.1 56.6-39.1-41.7-39.1 41.7-7.1-56.6-56.1 10.7 27.5-50-51.6-24.3 51.6-24.3-27.5-50.1 56.1 10.8 7.1-56.7L256 92.1l39.1-41.7 7.1 56.7 56.1-10.8-27.5 50.1z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#D80027",
    cx: 257.4,
    cy: 170.7,
    r: 71.6
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M214.2 170.7c-2.1 0-4.1.1-6.2.3.1 12 4.4 22.9 11.6 31.5 3.8-10.3 9.5-19.6 16.7-27.7-6.9-2.7-14.3-4.1-22.1-4.1zm26.6 46.5c5.2 1.9 10.8 2.9 16.6 2.9 5.8 0 11.4-1 16.6-2.9-2.8-11.1-8.7-21-16.6-28.8-7.9 7.8-13.8 17.7-16.6 28.8zm59.4-71.2c-8.5-14.8-24.5-24.7-42.8-24.7-18.3 0-34.2 9.9-42.8 24.7 15.6.1 30.2 4.3 42.8 11.6 12.6-7.3 27.2-11.6 42.8-11.6zm-21.7 28.8c7.2 8 12.9 17.4 16.7 27.7 7.2-8.5 11.5-19.5 11.6-31.5-2-.2-4.1-.3-6.2-.3-7.7 0-15.2 1.4-22.1 4.1z",
    fill: "#FFDA44"
  }));
}, Ww = function(l) {
  var r = l.title, a = p(l, lv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M303.5 196.6v-17.8h-11.9v-23.7l-11.9-11.9-11.8 11.9v-23.8L256 119.5l-11.9 11.8v23.8l-11.8-11.9-11.9 11.9v23.7h-11.9v17.8h-11.9v17.8h118.8v-17.8z"
  }));
}, Uw = function(l) {
  var r = l.title, a = p(l, iv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 450 300"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#CE1126",
    d: "M0 0h450v300H0V0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FCD116"
  }, /* @__PURE__ */ t.createElement("circle", {
    cx: 227.6,
    cy: 161.2,
    r: 56.2
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m254.1 73.4-23.7 26 28.6 6.5zm-51.5.2-4.8 33.1 28.5-8zm94.3 26.7-34.7 8.5 20.1 23.7zm-138.3-1.8 15.5 32.7 20.2-22.7zm159 45.3-34.4-9.9 5.6 29.5zm-182-2.6 31.9 19.8 5.2-27.7z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#003F87",
    d: "M0 175h450v125H0V175z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 267c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21z"
  }), /* @__PURE__ */ t.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FCD116",
    d: "m183.2 48.3-1.1-5.3 22.4-3.7s-30.1-7.1-40-10.7c-14.3-5.1-16.3-12.1-16.3-12.1s44.7 11 64.8 11c4.3 0 12.8 10.7 12.8 10.7s14.8-14.9 21.9-15.4c32.1-2.3 66.6-6.4 66.6-6.4s-10 6.7-16 8.5c-16.2 4.9-50.6 11.7-50.6 11.7l-4.8 7.5H277l-14.4 4.3 7.4 6.9s-7.8-4.1-18.1-2.1c-7.1 1.3-15.4 6-22.9 8-18.7 4.8-29.9-12.8-29.9-12.8l-15.9-.1z"
  }));
}, Gw = function(l) {
  var r = l.title, a = p(l, av);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v85.5H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513V171H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 171h513v85.5H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M256.5 171 0 342V0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M68.6 170.7c0-24.9 17.5-45.6 40.8-50.7-3.6-.8-7.3-1.2-11.1-1.2-28.7 0-51.9 23.3-51.9 51.9s23.3 51.9 51.9 51.9c3.8 0 7.5-.4 11.1-1.2-23.3-5.1-40.8-25.9-40.8-50.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m108.9 126.1 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.2-7.3 5.2 2.8-8.5-7.2-5.3h8.9zm0 22.3 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.3-7.3 5.3 2.8-8.5-7.2-5.3h8.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m108.9 170.7 2.7 8.5h9l-7.3 5.2 2.8 8.5-7.2-5.2-7.3 5.2 2.8-8.5-7.2-5.2h8.9zm0 22.2 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.3-7.3 5.3 2.8-8.5-7.2-5.3h8.9z"
  })));
}, Kw = function(l) {
  var r = l.title, a = p(l, cv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M512 0H0v342"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M307.7 0 0 194.5V342h206.9L513 148.5V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M513 0H385.2L0 249.4V341l126.2 1L513 91.6z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m141.1 187 31.2 24 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.3-22.2zM310.6 70.8l31.2 23.9 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.4-22.2z",
    fill: "#FFF"
  }));
}, Yw = function(l) {
  var r = l.title, a = p(l, ov);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#91DC5A",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v57.188H0zm0 284.1h513v57.177H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 79.9h513v181.582H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 190.33,
    cy: 171,
    r: 65.668
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "m190.3 105 14.8 45.3h47.7l-38.6 28.1 14.8 45.5-38.7-28.2-38.6 28.1 14.8-45.4-38.6-28.1h47.7z"
  }));
}, jw = function(l) {
  var r = l.title, a = p(l, sv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h900v600H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    transform: "rotate(-56.31)"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M-75 228.3H75m-150 37.5H75m-150 37.5H75m-150 475H75m-150 37.5H75m-150 37.5H75",
    stroke: "#000",
    strokeWidth: 25
  }), /* @__PURE__ */ t.createElement("path", {
    stroke: "#FFF",
    strokeWidth: 12.5,
    d: "M0 753.3v125"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#ca163a",
    cy: 540.8,
    r: 150
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0e4896",
    d: "M0 390.8c-41.4 0-75 33.6-75 75s33.6 75 75 75 75 33.6 75 75-33.6 75-75 75c-82.8 0-150-67.2-150-150s67.2-150 150-150z"
  })), /* @__PURE__ */ t.createElement("path", {
    d: "m231.56 535.73-83.205-124.808M262.76 514.928l-83.205-124.807m114.407 104.006-83.205-124.808m478.43-138.675-83.205-124.807M720.39 209.843 637.184 85.036m114.407 104.006L668.386 64.234",
    stroke: "#000",
    strokeWidth: 25
  }), /* @__PURE__ */ t.createElement("path", {
    stroke: "#FFF",
    strokeWidth: 12.5,
    d: "m205.6 462.897 31.202-20.8m389.981-259.989 36.444-24.296m31.202-20.801 31.202-20.801"
  }));
}, qw = function(l) {
  var r = l.title, a = p(l, uv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M167 227.6 0 341.3V0l167 113.8z"
  }));
}, Zw = function(l) {
  var r = l.title, a = p(l, fv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#6DA544",
    cx: 384,
    cy: 96.5,
    r: 29.7
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M332.1 89H436v44.5H332.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M435.9 170.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M332.1 200.3V230h15.6c9.4 9.2 22.2 14.8 36.3 14.8 14.1 0 27-5.7 36.3-14.8h15.6v-29.7H332.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M332.1 126.1v44.5c0 39.8 51.9 51.9 51.9 51.9s51.9-12.2 51.9-51.9v-44.5H332.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M384 149.9c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9v20.8c13 0 13 11.9 26 11.9s13-11.9 26-11.9 13 11.9 26 11.9 13-11.9 26-11.9v-20.8c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9zm0-41.6c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9v20.8c13 0 13 11.9 26 11.9s13-11.9 26-11.9 13 11.9 26 11.9 13-11.9 26-11.9v-20.8c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9z",
    fill: "#F3F3F3"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0v22.6l-46.1 30.7H256v64h-46.1L256 148v22.7h-22.6l-73.4-49v49H96v-49l-73.4 49H0V148l46.1-30.7H0v-64h46.1L0 22.6V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176zM0 170.7v-15.1l57.4-38.3H80zm256 0v-15.1l-57.4-38.3H176z"
  })));
}, Jw = function(l) {
  var r = l.title, a = p(l, hv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#36B6CC",
    d: "M0 0h513v342H0V0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFD400",
    cx: 256.5,
    cy: 170.9,
    r: 68.4
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFD400",
    d: "m256.5 251.5-27.9 41.7-7.1-49.7-43.2 25.5 15.2-47.8-50 4.2 34.4-36.5-46.9-18 46.8-18-34.4-36.5 50 4.2-15.2-47.8 43.2 25.4 7.1-49.7 27.9 41.7 27.9-41.7 7.1 49.7 43.2-25.4-15.2 47.8 50-4.2-34.3 36.6 46.8 17.9-46.8 18 34.4 36.5-50-4.2 15.2 47.8-43.2-25.4-7.1 49.7c0-.1-27.9-41.8-27.9-41.8zm0-.8c44.1 0 79.9-35.8 79.9-79.9S300.6 91 256.5 91s-79.9 35.8-79.9 79.9 35.8 79.8 79.9 79.8zM22.8 28.3c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V28.3zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V74zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm22.8-22.8c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7V245c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V188zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V96.8zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V51.2z"
  }));
}, Xw = function(l) {
  var r = l.title, a = p(l, mv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 .1h513v90.7H0zm0 251.2h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 256.5,
    cy: 171,
    r: 65.9
  }));
}, Qw = function(l) {
  var r = l.title, a = p(l, dv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 .2h513v90.7H0zm.5 251.1H513V342H.5z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M290.3 193.5 256 130.7l-34.3 62.8h25.7v17.2h17.2v-17.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#14AF5A",
    d: "M241.3 213.1c4.4-4.4 4.4-11.6-.1-16l4.7 4.7c-5.2-4.7-12.2-6.6-19.1-5.3l-23.5 5.9c-6.1 1.5-6.8-.4-1.8-4.2l27.1-20.3c5.1-3.8 4.2-6.9-2.3-6.9h-11c-6.4 0-7-2.3-1.5-5.1l25.3-12.7c5.6-2.8 5.1-5.1-1.5-5.1h-11c-6.4 0-7.4-3.1-2.3-6.9l27.1-20.3c5.6-3.8 12.9-3.8 18.5 0l27.1 20.3c5.1 3.8 4.2 6.9-2.3 6.9h-11c-6.4 0-7 2.3-1.5 5.1l25.3 12.7c5.6 2.8 5.1 5.1-1.5 5.1h-11c-6.4 0-7.4 3.1-2.3 6.9l27.1 20.3c5.1 3.8 4.4 5.7-1.8 4.2l-23.5-5.9c-6.8-1.3-13.9.6-19.1 5.3l4.7-4.7c-4.4 4.4-4.5 11.5-.1 16l6.8 6.8c4.4 4.4 3.1 8-3.3 8h-45.8c-6.2 0-7.7-3.6-3.3-8 .1.1 6.9-6.8 6.9-6.8z"
  }));
}, ez = function(l) {
  var r = l.title, a = p(l, vv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#55B2FF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#F3F3F3",
    d: "M148.5 298.1h216l-108-254.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#333",
    d: "m186 272.7 70.5-160.3L327 272.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M148.5 298.1h216l-108-101.7z"
  }));
}, tz = function(l) {
  var r = l.title, a = p(l, pv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M149.3 98.1c0-14-11.3-25.3-25.3-25.3-6.5 0-12.4 2.4-16.9 6.4V64.4h8.4V47.5h-8.4v-8.4H90.3v8.4h-8.4v16.9h8.4v14.9c-4.5-4-10.4-6.4-16.9-6.4-14 0-25.3 11.3-25.3 25.3 0 7.5 3.3 14.2 8.4 18.8v14.9h84.3V117c5.3-4.7 8.5-11.5 8.5-18.9z"
  }));
}, rz = function(l) {
  var r = l.title, a = p(l, Ev);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M222.6 22.3h267.1v296.8H222.6z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M22.3 22.3h200.3v296.8H22.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M200.3 0h22.3v342h-22.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M22.3 22.3h89v296.8h-89z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FF9811",
    d: "M111.3 22.3h89v296.8h-89z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M368.2 156.8c-1.4-2 0-37.9 0-37.9.9-7.4.1-8.4 1-11.4.9-2.9 5.4-11.6 5.4-11.6s-6-2.3-10.3-.6c-4.3 1.7-24.7-7.5-31.2 3.4-4.4 7-23.6 16.2-24.6 14-1-2.2-5.9-5-6.9-2.9s-.7 13.9 0 16c.8 2.6 9.8 2 12.3 3.1 3.7 1.8 12.2 8.2 11.9 10.7-.3 2.5-22.5-6-24.2-4.5-1.4 1.2-1.9 13.2-.4 15 1.8 2.1 23.4 5.6 25 7.5 1.6 1.9-13.1 7.4-12.3 25 .7 14.7 8 17.4 8 17.4s-2.4 3.6-7.8 3.1c-6.2-.6-27.4-17.7-27.4-17.7s-3.5-109 3.6-121.4c4.9-8.5-22.7 10.1-22.7 50.8V151c0 6.6-1.4 22.4 2.6 34 0 0-.4 46.9 1.5 49.6s12.7 2.2 14.8 0 0-30 0-30c7.7.2 18.3 17.5 32.5 16.4 20.6-1.6 28.7-9.9 34.3-5 8.1 7.1 5.5 23.2.4 31.5-2.2 3.5-14.3 4.7-15.7 7.6-1.4 2.9.5 5.4.5 5.4h29.7s1.4-20.5 2.7-26.1c1.3-5.7-.6-10.7 5.9-10.4 23.5 1.1 39.8-15.3 45.5-8 3.2 4.1 5.6 29.9 3.3 33.3-2.2 3.4-13.8 2.8-15.2 6.7-1.4 4 .8 4.4.8 4.4h29.7s-.4-21.2 2.5-27.7 4.9-10.4 9.3-17.2c4.4-6.8 11.3-15.7 11.3-36.2 0-14.2-8.1-22.8-8.1-22.8H417c-14.1.2-47.4 2.3-48.8.3zm-136-124.5c10.7-10.6 20.2-2.7 22.2 2.1 1.9 4.8 2.1 8.2 2.8 13.6.9 6.9 4.9 14 4.9 14s-7.1-3.8-14.7-4.2c-4.7-.3-9-.6-13.6-2.5-5.7-2.3-11.7-12.9-1.6-23zm248.4-.1c10.7 10.6 2.8 20.2-2 22.2s-8.2 2.1-13.6 2.8c-6.9.9-14 5-14 5s3.7-7.1 4.2-14.7c.3-4.7.6-9.1 2.4-13.6 2.2-5.7 12.8-11.8 23-1.7zm.1 276.9c-10.7 10.6-20.2 2.6-22.2-2.2-1.9-4.8-2.1-8.2-2.7-13.6-.8-6.9-4.9-14.1-4.9-14.1s7 3.8 14.7 4.3c4.7.3 9 .6 13.6 2.5 5.7 2.4 11.7 13.1 1.5 23.1zm-248.2-.1c-10.6-10.7-2.7-20.2 2.1-22.2 4.8-1.9 8.2-2.1 13.6-2.8 6.9-.9 14-4.9 14-4.9s-3.8 7.1-4.2 14.7c-.3 4.7-.6 9-2.5 13.6-2.3 5.7-12.9 11.8-23 1.6z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "none",
    stroke: "#FFDA44",
    strokeWidth: 6,
    strokeMiterlimit: 10,
    d: "M446.9 162.4s7.5-2.6 8.4-16.1c.6-8.6-19.8-16-39-11.5-19.7 4.6-34-3.1-34-14.6 0-22.9 29.7-16.2 38.9-11.3 9.1 4.9 29.7 23.5 35.1 9.4"
  }));
}, nz = function(l) {
  var r = l.title, a = p(l, gv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v31.1H0zm0 62.2h513v31.1H0zm0 62.3h513v31.1H0zm0 62.3h513v31.1H0zm0 62.5h513v31.1H0zm0 61.6h513V342H0z",
    fill: "#bf0a30"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#002868",
    d: "M0 0h155.6v155.6H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m77.8 30.2 10.7 32.9h34.6l-28 20.4 10.7 32.9-28-20.3-28 20.3 10.7-32.9-28-20.4h34.6z"
  }));
}, lz = function(l) {
  var r = l.title, a = p(l, wv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 227.6h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m245.2 171 7.7-23.1c2-5.9 5.1-6 7.1 0l7.7 23.1 19.4 29.1c1.7 2.6 1.3 6.3-1.2 8 0 0-6.9 8-29.5 8s-29.5-8-29.5-8c-2.4-2-2.9-5.4-1.2-8l19.5-29.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M256.5 171c-12.5 0-22.6-10.1-22.6-22.6 0-12.5 10.1-22.6 22.6-22.6s22.6 10.1 22.6 22.6c0 12.5-10.2 22.6-22.6 22.6zm0 0c6.2 0 11.3-16.3 11.3-22.6 0-6.2-5.1-11.3-11.3-11.3-6.2 0-11.3 5.1-11.3 11.3 0 6.3 5 22.6 11.3 22.6z"
  }));
}, iz = function(l) {
  var r = l.title, a = p(l, zv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 228h513v114H0z"
  }));
}, az = function(l) {
  var r = l.title, a = p(l, xv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 228h513v114H0z"
  }));
}, cz = function(l) {
  var r = l.title, a = p(l, Mv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    className: "prefix__st1",
    d: "M0 0h513v127.6H0zm0 214.4h513V342H0z",
    fill: "#A2001D"
  }));
}, oz = function(l) {
  var r = l.title, a = p(l, Fv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "m281.4 150.7 9 12.3 14.5-4.7-9 12.4 9 12.3-14.5-4.7-9 12.3v-15.2l-14.5-4.7 14.5-4.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M257 201.5c-17 0-30.9-13.8-30.9-30.9s13.8-30.9 30.9-30.9c5.3 0 10.3 1.3 14.7 3.7-6.9-6.7-16.2-10.8-26.6-10.8-21 0-38 17-38 38s17 38 38 38c10.3 0 19.7-4.1 26.6-10.8-4.4 2.4-9.4 3.7-14.7 3.7z"
  })));
}, sz = function(l) {
  var r = l.title, a = p(l, yv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 .3V342h513V.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#20661B",
    d: "M359.8 148.9h-73.3l-22.7-69.7-22.7 69.7h-73.3l59.3 43.1-22.7 69.7 59.3-43.1 59.3 43.1-22.5-69.7 59.3-43.1zm-116.1 37.7 7.7-23.6h24.8l7.7 23.6-20.1 14.6-20.1-14.6zm27.9-37.7H256l7.8-24 7.8 24zm24.3 29-4.8-14.9h25.3l-20.5 14.9zM236.6 163l-4.8 14.9-20.5-14.9h25.3zm-5.3 61.8 7.8-24 12.6 9.2-20.4 14.8zm44.5-14.9 12.6-9.2 7.8 24-20.4-14.8z"
  }));
}, uz = function(l) {
  var r = l.title, a = p(l, Hv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.333h512v341.333H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#c70000",
    d: "M0 85.333h512V256H0z"
  }));
}, fz = function(l) {
  var r = l.title, a = p(l, _v);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#AF7F59",
    d: "M206.2 129.1h33.2L256 79.3l16.6 49.8h33.2v99.6L256 262l-49.8-33.2v-99.7zm33.2 33.3v49.8h33.2v-49.8h-33.2z"
  }));
}, hz = function(l) {
  var r = l.title, a = p(l, bv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#E6BE53",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#E01D24",
    d: "M20 20h473v302H20z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#E6BE53",
    d: "M248.5 112.9c4.4 4.4 11.6 4.4 16 0l-4.7 4.7 22.7-22.7c4.9-4.5 12.1-5.6 18.2-2.8l2.1 1c5.7 2.9 6.7 8.7 2.3 13.1l4.7-4.7-22.8 22.8c-4.5 4.9-5.6 12.1-2.8 18.2l1 2.1c2.9 5.7 5.1 15.4 5.1 21.6v-11.3c0 6.2 4.4 9.1 10.2 6.2l2.1-1c5.7-2.9 6.7-8.7 2.3-13.1l4.7 4.7c-4.4-4.4-4.4-11.6 0-16l-4.7 4.7c5.2-5.5 9.6-11.6 13.1-18.2l1-2.1c2.9-5.7 6.3-15.1 7.9-21.2l5.8-23.3c1.5-6 5.9-6.8 9.6-1.8l20.2 26.9c3.8 5.1 6.9 14 6.9 20.6v22.4c0 6.3-2.2 15.8-5.1 21.7l-1 2.1c-3.5 6.6-7.9 12.7-13.1 18.2l-6.8 6.8c-5.4 5.2-11.5 9.6-18.2 13.1l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.2 0-6.9 2.2-1.1 5.1l2.1 1c5.7 2.9 13.8 8.7 18.2 13.1l-4.7-4.7c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L339 226c4.6 4.9 5.7 12.1 2.9 18.2l-1 2.1c-2.9 5.7-10.4 10.2-16.4 10.2-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.5-3.6-11.8-8.9-15.4-15.4l-1-2.1c-2.9-5.7-8.7-6.7-13.1-2.3l4.7-4.7c-4.4 4.7-5.2 11.8-1.8 17.3l10.3 15.4c3.4 5.1 2 12.1-3.1 15.5L266 284.4c-5.7 3.4-12.8 3.4-18.6 0L232 274.1c-5.1-3.4-6.5-10.3-3.1-15.5l10.3-15.4c3.4-5.5 2.6-12.6-1.8-17.3l4.7 4.7c-4.4-4.4-10.2-3.6-13.1 2.3l-1 2.1c-2.9 5.7-9.5 12.4-15.4 15.4l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.9-.3-13.1-4.2-16.4-10.2l-1-2.1c-2.8-6.1-1.6-13.3 2.9-18.2l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L181 226c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c5.5-5.2 11.6-9.6 18.2-13.1l2.1-1c5.7-2.9 5-5.1-1.1-5.1-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.6-3.5-12.7-7.9-18.2-13.1l-6.8-6.8c-5.2-5.4-9.6-11.5-13.1-18.2l-1-2.1c-3.1-6.8-4.9-14.2-5.1-21.7V121c0-6.3 3.1-15.6 6.9-20.6l20.2-26.9c3.8-5.1 8.1-4.3 9.6 1.8l5.8 23.3c2 7.3 4.6 14.4 7.9 21.2l1 2.1c2.9 5.7 8.7 13.8 13.1 18.2l-4.7-4.7c4.4 4.4 4.4 11.6 0 16l4.7-4.7c-4.4 4.4-3.6 10.2 2.3 13.1l2.1 1c5.7 2.9 10.2 0 10.2-6.2v11.3c0-6.2 2.2-15.7 5.1-21.6l1-2.1c2.8-6.1 1.7-13.2-2.8-18.2l-22.7-22.7 4.7 4.7c-4.4-4.4-3.6-10.2 2.3-13.1l2.1-1c6.1-2.8 13.2-1.7 18.2 2.8l22.7 22.7-4.8-4.5zm-18-40.7c-4.4-4.4-3.2-9.5 2.8-11.5l12.4-4.2c6-2 15.5-2 21.5 0l12.4 4.2c6 2 7.2 7.1 2.8 11.5l-6.8 6.8c-5.3 4.7-12.1 7.5-19.2 7.9-6.2 0-14.8-3.5-19.2-7.9.1 0-6.7-6.8-6.7-6.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#215F90",
    d: "M233.9 200.2c0 6.2 1.7 6.4 4.2.5 0 0 7.1-23.2 18.4-23.2 11.3 0 18.6 23.6 18.6 23.6 2.2 5.7 4 5.3 4-1.1v-11.2c0-18.7-10.1-33.9-22.6-33.9-12.5 0-22.6 15.2-22.6 33.9v11.4z"
  }));
}, mz = function(l) {
  var r = l.title, a = p(l, Av);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 108 72"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h108v72H0z",
    fill: "#003787"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h108L60 48v24H48V48z",
    fill: "#fff"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 54,
    cy: 30,
    r: 8,
    fill: "#f9d90f"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M44 30h20L54 48z",
    fill: "#fff"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M54 48 38 33h32z",
    fill: "#cf142b"
  }));
}, dz = function(l) {
  var r = l.title, a = p(l, Sv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M512 426.666V85.329H0v341.337h512z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M512 85.331H0v170.666h512V85.331z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.334h181.793v341.337H0z"
  }));
}, vz = function(l) {
  var r = l.title, a = p(l, Cv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#1E509C",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M513 176.1V81.3L0 342l513-165.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#F18D36",
    d: "M513 0v81.3L0 342 513 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m126.7 99.3-7.8-54.1-7.7 54.1-20.8-23.7 10.7 31.6-31.5-10.7 23.6 20.8-54.1 7.7 54.1 7.7-23.6 20.8 31.5-10.7-10.7 31.6 20.8-23.7 7.7 54.1 7.8-54.1 20.7 23.7-10.6-31.6 31.5 10.7-23.6-20.8 54-7.7-54-7.7 23.6-20.8-31.5 10.7 10.6-31.6z"
  }));
}, pz = function(l) {
  var r = l.title, a = p(l, Dv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M383.875 426.662 256 252.286l26.827 174.376zM133.565 85.33 256 252.286 230.314 85.33zm95.606 341.332L256 252.286 128.124 426.662zM0 85.33V212.9l256 39.386L28.333 85.33zm0 341.332h18.212L256 252.286 0 291.67zm256-174.376L512 212.9V85.33h-28.331zM281.686 85.33 256 252.286 378.434 85.33zM512 426.662V291.671l-256-39.385 237.787 174.376z"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 256,
    cy: 252.29,
    r: 59.359
  })), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFDA44",
    cx: 256,
    cy: 252.29,
    r: 44.522
  }));
}, Ez = function(l) {
  var r = l.title, a = p(l, Tv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M341.337 85.331H512v341.337H341.337z"
  }));
}, gz = function(l) {
  var r = l.title, a = p(l, Bv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M384 227.261h-97.783L256 134.265l-30.217 92.997H128l79.108 57.475-30.217 92.998L256 320.925l79.108 56.81-30.217-92.998L384 227.261z"
  }));
}, wz = function(l) {
  var r = l.title, a = p(l, Lv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#095FAD",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M342 0h171v342H342zM0 0h171v342H0z",
    fill: "#BE1229"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M108.3 166.3h14.8v74.2h-14.8zm-59.4 0h14.8v74.2H48.9z"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 86,
    cy: 203.4,
    r: 14.8
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M71.2 225.7h29.7v14.8H71.2zm0-59.4h29.7v14.8H71.2z"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 86,
    cy: 144,
    r: 14.8
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M76.3 123.9h19.5L86 108.3z"
  })));
}, zz = function(l) {
  var r = l.title, a = p(l, Ov);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#00745a",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M285.682 248.878c-4.19 0-8.166.836-11.861 2.164 2.023-4.509 3.379-9.527 3.379-14.885 0-21.201-21.201-37.101-21.201-37.101s-21.201 15.901-21.201 37.101c0 5.357 1.356 10.375 3.379 14.885-3.693-1.328-7.671-2.164-11.861-2.164-21.201 0-37.101 21.201-37.101 21.201s15.901 21.201 37.101 21.201c12.429 0 23.031-7.286 29.682-13.315 6.65 6.03 17.251 13.315 29.682 13.315 21.201 0 37.101-21.201 37.101-21.201s-15.899-21.201-37.099-21.201z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m256 152.111 4.38 13.476h14.171l-11.464 8.332 4.376 13.476-11.463-8.33-11.463 8.33 4.376-13.476-11.464-8.332h14.171zm-53.888 23.572 8.425 7.585 9.818-5.667-4.61 10.355 8.423 7.588-11.274-1.185-4.611 10.355-2.358-11.088-11.275-1.185 9.818-5.669zm-39.45 39.449 11.09 2.358 5.668-9.818 1.186 11.274 11.089 2.358-10.357 4.61 1.186 11.274-7.587-8.423-10.357 4.61 5.669-9.818zm147.227-39.449-8.425 7.585-9.818-5.667 4.611 10.355-8.425 7.588 11.275-1.185 4.61 10.355 2.359-11.088 11.275-1.185-9.818-5.669zm39.449 39.449-11.089 2.358-5.669-9.818-1.186 11.274-11.088 2.358 10.357 4.61-1.185 11.274 7.586-8.423 10.357 4.61-5.669-9.818z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M256 350.642c16.84 0 32.363-5.619 44.816-15.073h-89.63c12.451 9.454 27.974 15.073 44.814 15.073zm-68.023-44.522a74.138 74.138 0 0 0 8.85 15.073h118.345a74.13 74.13 0 0 0 8.85-15.073H187.977z",
    fill: "#FFF"
  }));
}, xz = function(l) {
  var r = l.title, a = p(l, Rv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 750 500"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0071BC",
    d: "M0 0h750v500H0V0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF",
    stroke: "#000",
    strokeWidth: 1.9
  }, /* @__PURE__ */ t.createElement("circle", {
    cx: 375,
    cy: 245,
    r: 225,
    fill: "#fff"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 375,
    cy: 245,
    r: 165,
    fill: "#0071BC"
  })), /* @__PURE__ */ t.createElement("g", {
    stroke: "#000"
  }, /* @__PURE__ */ t.createElement("path", {
    fill: "#8C8A8C",
    strokeWidth: 1.9,
    d: "M444.7 450c.7 11-7.8 20-18.8 20H323.6c-11 0-19.5-9-19-20l16.7-325c.6-11 10-20 21-20h61.4c11 0 20.5 9 21.2 20l19.8 325z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    strokeWidth: 2,
    strokeLinejoin: "round",
    d: "m373 114 30 93h97l-78 56 29 92-78-56-78 57 30-93-79-57h97l30-92z"
  })));
}, Mz = function(l) {
  var r = l.title, a = p(l, Iv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#fff"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M512 148.4v44.5H278.3v148.4h-44.6V192.9H0v-44.5h233.7V0h44.6v148.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M101 36.1c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zm284 0c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zm-5.4 199c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7s3.4 6.5 7 6.3l1.7-.1zm-278.6 0c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8s4.2 5.9 7.8 5.2c.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1z"
  })));
}, Fz = function(l) {
  var r = l.title, a = p(l, Pv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 100 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#006233",
    d: "M0 100h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#cd2a3e",
    d: "M0 100h513v46H0zm0 296h513v46H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ffc400",
    d: "M256 298.851c-45.956 0-84.348-32.298-93.767-75.429A96.288 96.288 0 0 0 160 243.994c0 53.02 42.979 96 96 96s96-42.98 96-96c0-7.066-.785-13.942-2.233-20.572-9.419 43.131-47.811 75.429-93.767 75.429z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ffc400",
    d: "m255.999 171.994 8.935 27.502h28.918l-23.394 16.996 8.936 27.503-23.395-16.998-23.394 16.998 8.937-27.503-23.394-16.996h28.915z"
  }));
}, yz = function(l) {
  var r = l.title, a = p(l, Vv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#1B4991",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#00A2B8",
    stroke: "#FFF",
    strokeWidth: 3,
    d: "M318.2 106.7v106.5c0 51.9 67.8 67.8 67.8 67.8s67.8-15.9 67.8-67.8V106.7H318.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A35023",
    d: "M319.7 212.7c0 50.8 66.3 66.3 66.3 66.3s66.3-15.6 66.3-66.3H319.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M415.1 155.1h-19.4v-19.4h-19.4v19.4H357v19.4h19.3v58.1h19.4v-58.1h19.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z"
  }));
}, Hz = function(l) {
  var r = l.title, a = p(l, Nv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#C31B28",
    d: "M256 0h256.5v342H256z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ACABB1",
    stroke: "#C31B28",
    strokeWidth: 2,
    d: "M101.2 68.2V33H66v35.2H30.8v35.2H66v35.2h35.2v-35.2h35.2V68.2z"
  }));
}, _z = function(l) {
  var r = l.title, a = p(l, kv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#f7ce00",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#e32737",
    d: "M0 85.331h512v85.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#191f6a",
    d: "M0 170.657h512v85.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#00a04e",
    d: "M0 341.331h512v85.337H0z"
  }));
}, bz = function(l) {
  var r = l.title, a = p(l, $v);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#d01920",
    d: "M0 85.331h512v341.333H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#017c3b",
    d: "M144.696 174.375h222.609v163.25H144.696z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M283.484 304.226c-26.637 0-48.232-21.594-48.232-48.232s21.594-48.232 48.232-48.232c8.306 0 16.12 2.1 22.943 5.797-10.703-10.467-25.341-16.927-41.494-16.927-32.784 0-59.362 26.577-59.362 59.362s26.578 59.362 59.362 59.362c16.154 0 30.791-6.461 41.494-16.927-6.822 3.698-14.636 5.797-22.943 5.797z"
  }));
}, Az = function(l) {
  var r = l.title, a = p(l, Wv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#272727",
    d: "M0 0h512v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#e40112",
    d: "M0 114h512v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#07893f",
    d: "M0 228h512v114H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#e40112",
    cx: 256,
    cy: 125,
    r: 95
  }));
}, Sz = function(l) {
  var r = l.title, a = p(l, Uv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#dc2339",
    d: "M342 0H0v341.3h513V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#11865d",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M171 0h171v342H171z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#8C9157",
    d: "M195.8 171.2c0 21.6 11.5 41.7 30.3 52.5 5.8 3.4 13.2 1.4 16.6-4.4 3.4-5.8 1.4-13.2-4.4-16.6-11.3-6.5-18.2-18.5-18.2-31.5 0-6.7-5.4-12.1-12.1-12.1-6.7 0-12.2 5.4-12.2 12.1zm93.4 51.1c17.5-11.1 28-30.4 28-51.1 0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1c0 12.4-6.3 24-16.8 30.7-5.7 3.5-7.5 10.9-4.1 16.7s10.9 7.5 16.7 4.1c0-.2.2-.3.4-.4z"
  }), /* @__PURE__ */ t.createElement("ellipse", {
    fill: "#C59262",
    cx: 256.5,
    cy: 159.1,
    rx: 24.3,
    ry: 36.4
  }));
}, Cz = function(l) {
  var r = l.title, a = p(l, Gv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0zm0 48.9h513V171H0zm0 48.8h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0z",
    fill: "#c00"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#006",
    d: "M0 0h256.5v195.4H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M153.3 42.1C122.6 30.7 88.5 46.3 77.1 77s4.2 64.8 34.9 76.2c13.3 5 28 5 41.4 0-30.7 24.5-75.4 19.6-100-11.1s-19.6-75.4 11.1-100c26-20.7 62.9-20.7 88.8 0zm26.7 75-20.6 23.3 5.4-30.6-31-1.6 27.3-14.9L143 68l28.6 12 8.4-29.9 8.4 29.9L217 68l-18 25.4 27.3 14.9-31 1.6 5.4 30.6-20.7-23.4z",
    fill: "#fc0"
  }));
}, Dz = function(l) {
  var r = l.title, a = p(l, Kv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.333h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f4d900",
    d: "M0 323.333h513v104H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#006d66",
    d: "M0 85.333h513v104H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 204.333h513v104H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#cb0f31",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f4d900",
    d: "m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"
  }));
}, Tz = function(l) {
  var r = l.title, a = p(l, Yv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.337h512"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m187.737 189.212-22.741 10.696 12.11 22.024-24.693-4.724-3.129 24.945-17.199-18.347-17.2 18.347-3.129-24.945-24.693 4.723 12.109-22.023-22.739-10.696 22.74-10.697-12.11-22.022 24.693 4.722 3.13-24.944 17.199 18.347 17.2-18.347 3.128 24.944 24.693-4.722-12.108 22.024z"
  }));
}, Bz = function(l) {
  var r = l.title, a = p(l, jv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 426.7"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#009543",
    d: "M0 293h640v133.7H0V293z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ED4135",
    d: "M0 132h640v161.3H0V132z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0035AD",
    d: "M0 0h640v133.3H0V0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FAE600",
    stroke: "#000",
    strokeWidth: 5.3,
    cx: 240,
    cy: 213.3,
    r: 157.3
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m307.9 354.5-31.8 12-36.1 4.2-37.8-2.4-35.9-15.5s28.6-29.3 40.7-33.5c8.6-3 22.4-3.7 22.4-3.7V122l-.3-66H246l-.5 67.5v191.7s15.3 1.2 22.1 4.1c11.3 4.9 40.3 35.2 40.3 35.2z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m212.727 102.375 42.955-21.418 5.577 11.187-42.955 21.417z"
  }), /* @__PURE__ */ t.createElement("ellipse", {
    cx: 237.8,
    cy: 280.5,
    rx: 16.8,
    ry: 26.5
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 237.4,
    cy: 143.4,
    r: 20.9
  }), /* @__PURE__ */ t.createElement("ellipse", {
    cx: 238.4,
    cy: 211.1,
    rx: 19.9,
    ry: 12.1
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M213.8 177h47v10h-47zm0 57h47v10h-47z"
  }));
}, Lz = function(l) {
  var r = l.title, a = p(l, qv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#e05206",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0db02b",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#e05206",
    cx: 256,
    cy: 256,
    r: 32
  }));
}, Oz = function(l) {
  var r = l.title, a = p(l, Zv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.5h171v342H0zm342 0h171v342H342zm-38 226.495-48-152.001-48 152.001h36v39.999h24v-39.999z",
    fill: "#007b23"
  }));
}, Rz = function(l) {
  var r = l.title, a = p(l, Jv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.5h171v342H0zm342 0h171v342H342z",
    fill: "#007b23"
  }));
}, Iz = function(l) {
  var r = l.title, a = p(l, Xv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#338AF3"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M256 214.447c-22.949 0-41.553 18.603-41.553 41.553S233.05 297.553 256 297.553c22.949 0 41.553-18.603 41.553-41.553S278.949 214.447 256 214.447zm0 65.298c-13.114 0-23.745-10.631-23.745-23.745s10.631-23.745 23.745-23.745 23.745 10.631 23.745 23.745-10.631 23.745-23.745 23.745z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M276.563 261.936 256 256l-20.563 5.936-6.855 11.873h54.836z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "m256 226.32-13.709 23.744L256 256l13.709-5.936z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M235.437 261.936h41.126l-6.854-11.872h-27.418z"
  }));
}, Pz = function(l) {
  var r = l.title, a = p(l, Qv);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#cd1f2a",
    d: "M0 85.5h513v114H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1d4185",
    d: "M0 312h513v114H0z"
  }));
}, Vz = function(l) {
  var r = l.title, a = p(l, ep);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
  }));
}, Nz = function(l) {
  var r = l.title, a = p(l, tp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.337l280.419 174.75H87.61l183.576 166.576z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M244.769 249.888 10.199 103.71v312.754h234.57L61.193 249.888z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "m98.003 324.433-14.589-6.863 7.77-14.13-15.844 3.03-2.008-16.005-11.035 11.772-11.036-11.772-2.008 16.005-15.843-3.031 7.77 14.131-14.591 6.863 14.591 6.862-7.77 14.13 15.844-3.029 2.007 16.004 11.036-11.772L73.332 358.4l2.008-16.004 15.843 3.03-7.769-14.13zm-9.735-132.771-10.612-4.991 5.651-10.278-11.523 2.205-1.461-11.641-8.026 8.561-8.026-8.561-1.46 11.641-11.525-2.205 5.652 10.278-10.613 4.991 25.972 5.194z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M93.462 191.662c0 17.212-13.953 31.165-31.165 31.165s-31.165-13.953-31.165-31.165"
  })));
}, kz = function(l) {
  var r = l.title, a = p(l, rp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 239.994h512v32H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m174.802 341.329-19.124 8.996 10.184 18.521-20.767-3.973-2.631 20.978L128 370.422l-14.465 15.429-2.63-20.978-20.767 3.973 10.183-18.521-19.123-8.996 19.124-8.995-10.184-18.52 20.766 3.971 2.632-20.978L128 312.236l14.465-15.429 2.63 20.978 20.767-3.971-10.183 18.521z"
  }));
}, $z = function(l) {
  var r = l.title, a = p(l, np);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.334h256v170.663H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80z"
  })), /* @__PURE__ */ t.createElement("path", {
    d: "M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M256 85.329v15.083l-57.377 38.251H176z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.329v15.083l57.377 38.251H80z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M256 85.329v15.083l-57.377 38.251H176z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 255.997v-15.082l57.377-38.252H80z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 233.376v-30.713h46.069zm96 22.618v-48.912l-73.372 48.912z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M256 255.997v-15.082l-57.377-38.252H176z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#2E52B2"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M256 233.376v-30.713h-46.069zm-96 22.618v-48.912l73.372 48.912z"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 128,
    cy: 170.66,
    r: 22.627
  })), /* @__PURE__ */ t.createElement("path", {
    d: "m128 154.663 3.97 12.222h12.854l-10.398 7.556 3.971 12.222L128 179.109l-10.398 7.554 3.972-12.222-10.398-7.556h12.853zm0 65.14 2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm0-117.334 2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm69.931 58.667 2.365 7.277h7.653l-6.192 4.499 2.365 7.279-6.191-4.498-6.191 4.498 2.365-7.279-6.191-4.499h7.652zm-139.862 0 2.364 7.277h7.653l-6.191 4.499 2.364 7.279-6.19-4.498-6.191 4.498 2.365-7.279-6.192-4.499h7.653z",
    fill: "#FFDA44"
  }));
}, Wz = function(l) {
  var r = l.title, a = p(l, lp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m425.301 233.745 3.388 10.428h10.963l-8.87 6.444 3.388 10.427-8.869-6.444-8.871 6.444 3.388-10.427-8.87-6.444h10.963zm-39.194 75.072 5.083 15.642h16.445l-13.305 9.667 5.082 15.64-13.305-9.667-13.305 9.667 5.083-15.64-13.305-9.667h16.445zm1.481-122.846 4.236 13.036h13.704l-11.088 8.054 4.235 13.034-11.087-8.056-11.088 8.056 4.235-13.034-11.087-8.054h13.704zm-37.712 47.32 5.082 15.641h16.446l-13.306 9.666 5.084 15.641-13.306-9.666-13.305 9.666 5.082-15.641-13.305-9.666h16.445z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256.003 85.329v30.564l-45.178 25.088h45.178v59.359H196.89l59.113 32.846v22.806h-26.69l-73.484-40.826v40.826h-55.652v-48.573l-87.429 48.573H.003v-30.553l45.168-25.099H.003v-59.359h59.103L.003 108.147V85.329h26.68l73.494 40.838V85.329h55.652v48.573l87.43-48.573z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915zm-83.98 0L0 240.259v15.739l100.174-55.654z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915zm83.98 0L256 101.068V85.33l-100.174 55.653z",
    fill: "#D80027"
  }));
}, Uz = function(l) {
  var r = l.title, a = p(l, ip);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M138 0h377v114H138z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#4A7C3A",
    d: "M138 230h377v114H138z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 10,
    strokeMiterlimit: 2
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M40.3 35.2s37.1 48 50.8 54.5c13.7 6.5 17.1 5.7 17.1 5.7"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M100 35.2S62.9 80.6 53.3 87.6c-9.6 7-18.7 7.8-18.7 7.8m17.1-30.1h37.9M70.7 35.2v30.1"
  })));
}, Gz = function(l) {
  var r = l.title, a = p(l, ap);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M256 256v170.663H0V256h256z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337V256H256V85.337h256z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "m128 123.034 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L128 195.813l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "m384 293.697 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L384 366.476l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
  }));
}, Kz = function(l) {
  var r = l.title, a = p(l, cp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.331h170.663v341.337H0zm341.337 0H512v341.337H341.337z",
    fill: "#D80027"
  }));
}, Yz = function(l) {
  var r = l.title, a = p(l, op);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M293.991 256c0 20.982-17.01 33.243-37.992 33.243S218.008 276.982 218.008 256s17.01-37.992 37.992-37.992 37.991 17.01 37.991 37.992z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M293.991 256c0 20.982-17.01 37.992-37.992 37.992s-37.992-17.01-37.992-37.992"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M232.259 246.506h9.498v19h-9.498zm37.988 0h9.498v19h-9.498zm-19-14.247h9.498v33.243h-9.498z",
    fill: "#D80027"
  }));
}, jz = function(l) {
  var r = l.title, a = p(l, sp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M0 85.33h512v341.332"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m204.631 326.488 2.762 8.504h8.941l-7.233 5.255 2.763 8.502-7.233-5.254-7.233 5.254 2.762-8.502-7.233-5.255h8.94zm-22.834-81.622 4.605 14.172h14.901l-12.056 8.757 4.605 14.172-12.055-8.759-12.055 8.759 4.606-14.172-12.056-8.757h14.901zm0 103.883 4.604 14.173h14.902l-12.057 8.757 4.606 14.173-12.055-8.759-12.055 8.759 4.604-14.173-12.054-8.757h14.899zm43.566-66.782 4.606 14.172h14.901l-12.056 8.758 4.605 14.172-12.056-8.759-12.054 8.759 4.606-14.172-12.056-8.758h14.901zm-87.133 0 4.606 14.172h14.899l-12.054 8.758 4.603 14.172-12.054-8.759-12.055 8.759 4.605-14.172-12.055-8.758h14.9z",
    fill: "#FFF"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M376.526 204.163c-7.628-7.628-17.538-12.133-28.189-12.908l31.88-24.795c-12.698-12.698-29.714-18.431-46.319-17.218a44.31 44.31 0 0 0-11.396-19.511l-12.593 25.186a18.47 18.47 0 0 0-3.148-4.197c-7.245-7.245-18.991-7.244-26.234 0s-7.245 18.99 0 26.234a18.536 18.536 0 0 0 4.197 3.148l-25.186 12.593a44.303 44.303 0 0 0 19.519 11.399c-1.217 16.606 4.511 33.619 17.209 46.317L324.12 214.6a11.053 11.053 0 0 1 7.807-3.202c2.973 0 5.768 1.158 7.87 3.26a11.055 11.055 0 0 1 3.26 7.87c0 2.974-1.158 5.768-3.26 7.87l10.494 10.494c4.905-4.905 7.607-11.428 7.607-18.364 0-5.675-1.81-11.071-5.153-15.534a29.492 29.492 0 0 1 13.288 7.662c11.573 11.572 11.573 30.403 0 41.975l10.494 10.494c8.409-8.409 13.039-19.59 13.039-31.481-.001-11.892-4.632-23.072-13.04-31.481z"
  }));
}, qz = function(l) {
  var r = l.title, a = p(l, up);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M512 85.337V256H256L0 85.337z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M512 256v170.663H0L256 256z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m161.908 256-27.288-12.835 14.532-26.428-29.632 5.668-3.755-29.933-20.64 22.015-20.639-22.015-3.755 29.933-29.631-5.669 14.531 26.428L28.343 256l27.288 12.835L41.1 295.263l29.633-5.668 3.753 29.933 20.639-22.015 20.64 22.015 3.755-29.933 29.631 5.669-14.532-26.427zM21.789 117.607l9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.694-14.809-4.932-9.268 12.559.117-15.608-14.809-4.934 14.88-4.712zm0 235.923 9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.695-14.809-4.933-9.268 12.558.117-15.607-14.809-4.934 14.88-4.712zm188.606-117.961-9.081 12.695-14.879-4.713 9.268 12.559-9.081 12.696 14.809-4.933 9.268 12.558-.117-15.607 14.809-4.934-14.88-4.713z",
    fill: "#FFDA44"
  }));
}, Zz = function(l) {
  var r = l.title, a = p(l, fp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "m393.508 170.516 17.512 18.875 23.363-10.821-12.541 22.487 17.513 18.876-25.263-4.978-12.539 22.488-3.073-25.564-25.263-4.978 23.363-10.82z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.343h512v341.326H0z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#01411c",
    d: "M128 85.331h384v341.337H128z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M361.909 298.793c-31.037 22.426-74.378 15.446-96.804-15.592-22.427-31.038-15.446-74.379 15.593-96.804 9.677-6.992 20.55-11.125 31.613-12.563-21.283-3.183-43.777 1.613-62.598 15.211-38.2 27.602-46.792 80.944-19.191 119.145 27.601 38.199 80.944 46.792 119.145 19.189 18.82-13.598 30.436-33.448 34.096-54.655-4.839 10.05-12.176 19.076-21.854 26.069zm-1.329-125.904 17.484 18.842 23.322-10.802-12.519 22.447 17.483 18.844-25.219-4.968-12.519 22.45-3.067-25.521-25.22-4.969 23.323-10.802z",
    fill: "#FFF"
  }));
}, Jz = function(l) {
  var r = l.title, a = p(l, hp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512V256H0z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 256h512v170.663H0z"
  }));
}, Xz = function(l) {
  var r = l.title, a = p(l, mp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 26.666 640 426.666"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt"
  }, /* @__PURE__ */ t.createElement("path", {
    fill: "#fff",
    d: "M0 0h640v480H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#00267f",
    d: "M0 0h213.3v480H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f31830",
    d: "M426.7 0H640v480H426.7z"
  })));
}, Qz = function(l) {
  var r = l.title, a = p(l, dp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ACABB1",
    d: "M400.696 219.822 384 225.387l-16.696-5.565-5.565-13.913 5.565-13.913h33.392l-5.566 13.913z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M345.043 219.822v61.217c0 29.821 38.957 38.957 38.957 38.957s38.957-9.137 38.957-38.957v-61.217h-77.914z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M348.555 295.541C358.131 313.927 384 319.996 384 319.996s25.869-6.069 35.445-24.455L384 236.518l-35.445 59.023z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M422.957 280.421 384 219.822l-38.957 60.599v.618c0 5.518 1.337 10.328 3.512 14.503L384 240.405l35.445 55.137c2.175-4.175 3.512-8.983 3.512-14.503v-.618z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
    fill: "#D80027"
  }));
}, ex = function(l) {
  var r = l.title, a = p(l, vp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512V153.6H0zm0 136.526h512v68.263H0zM0 358.4h512v68.263H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"
  }));
}, tx = function(l) {
  var r = l.title, a = p(l, pp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#268024",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#e4312b",
    d: "M256 256.006 0 426.668V85.331z"
  }));
}, rx = function(l) {
  var r = l.title, a = p(l, Ep);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M196.641 85.337v341.326H0V85.337z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFDA44",
    cx: 196.641,
    cy: 256,
    r: 64
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z"
  }));
}, nx = function(l) {
  var r = l.title, a = p(l, gp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFDA44",
    cx: 218.902,
    cy: 255.994,
    r: 74.207
  }));
}, lx = function(l) {
  var r = l.title, a = p(l, wp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "m289.579 216.738-12.592 12.592c5.37 5.372 8.693 12.792 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.112-5.316-24.985-13.91-33.579z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m256 232.51 4.421 13.605h14.304l-11.573 8.408 4.421 13.604L256 259.719l-11.573 8.408 4.421-13.604-11.573-8.408h14.304z"
  }));
}, ix = function(l) {
  var r = l.title, a = p(l, zp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#751A46",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0v342h150.3l37.7-19.6-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19 37.7-18.9-37.7-19 37.7-19-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19L188 57l-37.7-19L188 19.1 150.3 0z"
  }));
}, ax = function(l) {
  var r = l.title, a = p(l, xp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 26.666 640 426.666"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt"
  }, /* @__PURE__ */ t.createElement("path", {
    fill: "#fff",
    d: "M0 0h640v480H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#00267f",
    d: "M0 0h213.3v480H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#f31830",
    d: "M426.7 0H640v480H426.7z"
  })));
}, cx = function(l) {
  var r = l.title, a = p(l, Mp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M341.337 85.331H512v341.337H341.337z"
  }));
}, ox = function(l) {
  var r = l.title, a = p(l, Fp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 312.882h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M129.468 181.793v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.356 256 266.929v-85.136H129.468z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M155.634 196.634h74.201v-29.681l-14.841 7.42-22.261-22.26-22.259 22.26-14.84-7.42zm85.526 82.148-48.231-48.231-48.231 48.231 15.741 15.74 32.49-32.49 32.49 32.49z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M241.16 233.734h-22.504a14.74 14.74 0 0 0 2.001-7.418c0-8.196-6.645-14.84-14.84-14.84-5.663 0-10.581 3.172-13.083 7.836-2.502-4.663-7.421-7.836-13.083-7.836-8.195 0-14.84 6.644-14.84 14.84 0 2.706.736 5.235 2.001 7.418h-22.114c0 8.196 7.139 14.84 15.334 14.84h-.494c0 8.196 6.644 14.84 14.84 14.84 0 7.257 5.211 13.286 12.094 14.576l-11.694 26.401a48.075 48.075 0 0 0 18.149 3.544 48.079 48.079 0 0 0 18.149-3.544l-11.694-26.401c6.883-1.29 12.094-7.319 12.094-14.576 8.196 0 14.84-6.644 14.84-14.84h-.494c8.199 0 15.338-6.644 15.338-14.84z"
  }));
}, sx = function(l) {
  var r = l.title, a = p(l, yp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.33v341.332h512V85.33z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.333h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 312.884h512v113.775H0z"
  }));
}, ux = function(l) {
  var r = l.title, a = p(l, Hp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 255.994h512v81.619H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 337.614h512v89.043H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m278.261 185.209 20.844 9.804-11.099 20.186 22.632-4.33 2.868 22.865 15.765-16.816 15.766 16.816 2.867-22.865 22.633 4.33-11.099-20.186 20.843-9.804-20.844-9.805 11.1-20.185-22.633 4.329-2.868-22.864-15.765 16.816-15.766-16.816-2.867 22.864-22.634-4.329 11.1 20.187z"
  }));
}, fx = function(l) {
  var r = l.title, a = p(l, _p);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#055e1c",
    d: "M0 85.333h512v341.333H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M183.548 289.386c0 12.295 9.731 22.261 21.736 22.261h65.208c0 10.244 8.11 18.551 18.114 18.551h21.736c10.004 0 18.114-8.306 18.114-18.551v-22.261H183.548zm146.716-107.595v51.942c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942h-21.735zm-155.773 51.943c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942H174.49v51.942z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M297.661 181.788h21.736v51.942h-21.736zm-32.604 29.685c0 2.046-1.625 3.71-3.623 3.71-1.998 0-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 2.046-1.625 3.71-3.623 3.71s-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 14.32 11.376 25.971 25.358 25.971 5.385 0 10.38-1.733 14.491-4.677 4.11 2.944 9.106 4.677 14.491 4.677 1.084 0 2.15-.078 3.2-.215-1.54 6.499-7.255 11.345-14.068 11.345v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.943h-21.736l.002 29.682z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M207.093 248.57h32.601v22.261h-32.601z"
  })));
}, hx = function(l) {
  var r = l.title, a = p(l, bp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.329h512"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 396.494v30.169h45.255L512 115.499v-30.17h-45.255z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m85.688 108.787 5.12 15.756h16.566l-13.403 9.737 5.12 15.757-13.403-9.738-13.405 9.738 5.12-15.757L64 124.543h16.567zm84.624 0 5.121 15.756H192l-13.403 9.737 5.12 15.757-13.405-9.738-13.403 9.738 5.12-15.757-13.403-9.737h16.566zm-84.624 82.502 5.12 15.756h16.566l-13.403 9.738 5.12 15.757-13.403-9.739-13.405 9.739 5.12-15.757L64 207.045h16.567zm84.624 0 5.121 15.756H192l-13.403 9.738 5.12 15.757-13.405-9.739-13.403 9.739 5.12-15.757-13.403-9.738h16.566zM128 150.037l5.12 15.756h16.568l-13.405 9.738 5.12 15.758L128 181.55l-13.403 9.739 5.12-15.758-13.405-9.738h16.568z",
    fill: "#FFF"
  }));
}, mx = function(l) {
  var r = l.title, a = p(l, Ap);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M235.454 85.337 0 426.663 427.345 85.337z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M512 329.393 0 426.663h512z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337h-84.655L0 426.663l512-204.512z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337v341.326L235.454 85.337z"
  }));
}, dx = function(l) {
  var r = l.title, a = p(l, Sp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 426.668V85.331l256 170.675z"
  }));
}, vx = function(l) {
  var r = l.title, a = p(l, Cp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z"
  }));
}, px = function(l) {
  var r = l.title, a = p(l, Dp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512V256H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M83.478 170.666c0-24.865 17.476-45.637 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.254-51.942 51.941s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.336-5.095-40.812-25.867-40.812-50.733zm66.783-48.231 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m121.344 144.696 3.683 11.337h11.921l-9.645 7.007 3.684 11.337-9.643-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921zm57.834 0 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.685-11.337-9.645-7.007h11.921zm-11.131 33.391 3.684 11.337h11.921l-9.644 7.007 3.684 11.337-9.645-7.006-9.643 7.006 3.684-11.337-9.644-7.007h11.92zm-35.573 0 3.683 11.337h11.921l-9.644 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.684-11.337-9.644-7.007h11.92z"
  })));
}, Ex = function(l) {
  var r = l.title, a = p(l, Tp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#29DBFF",
    d: "M449 139.7c-.1 44.4-7.2 92.1-65 114.9-57.8-22.8-64.9-70.5-65-114.9h130z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ffda44",
    d: "M449 139.7c0-16.7-.9-32.9-.5-47.1C426.9 83 398.4 81 383.9 81s-42.9 2-64.6 11.6c.4 14.2-.5 30.4-.5 47.1H449z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#BF521B",
    d: "m369.5 204.5.3 10.3-12.8.2 4.9 13.2h-17.3c-18-20.2-23.4-42.4-24.9-68.1l9.1-9.7 8.3 14.3 10.8-12.8 7 7.8.8 15.7 13.8 29.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#474747",
    d: "m436.6 192.5-8.6 18.3h-47l-29.2-19.5 25.7 10.5h25.1l3.7-6.5 7.2.2 2-3z"
  }));
}, gx = function(l) {
  var r = l.title, a = p(l, Bp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 199.112h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l14.848 14.837 29.674-22.261 29.685 22.261 14.837-14.837z"
  }));
}, wx = function(l) {
  var r = l.title, a = p(l, Lp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
  }));
}, zx = function(l) {
  var r = l.title, a = p(l, Op);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 196.641h512v118.717H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 315.359h512v111.304H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M129.468 181.799v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.362 256 266.935v-85.136H129.468z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M146.126 184.294v81.941c0 5.472 1.215 10.64 3.623 15.485h85.97c2.408-4.844 3.623-10.012 3.623-15.485v-81.941h-93.216z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M221.301 241.427h-21.425v-14.283h14.284v-14.283h-14.284v-14.284h-14.283v14.284h-14.282v14.283h14.282v14.283h-21.426v14.284h21.426v14.283h14.283v-14.283h21.425z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M169.232 301.658c9.204 5.783 18.66 9.143 23.502 10.636 4.842-1.494 14.298-4.852 23.502-10.636 9.282-5.833 15.79-12.506 19.484-19.939a24.878 24.878 0 0 0-14.418-4.583c-1.956 0-3.856.232-5.682.657-3.871-8.796-12.658-14.94-22.884-14.94-10.227 0-19.013 6.144-22.884 14.94a25.048 25.048 0 0 0-5.682-.657 24.88 24.88 0 0 0-14.418 4.583c3.691 7.433 10.198 14.106 19.48 19.939z"
  }));
}, xx = function(l) {
  var r = l.title, a = p(l, Rp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 312.888h512v113.775H0z"
  }));
}, Mx = function(l) {
  var r = l.title, a = p(l, Ip);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.34h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M512 85.334v166.69L0 256.175V85.334z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M323.744 203.099 256 270.843l-67.744-67.744a81.156 81.156 0 0 0-13.879 45.483v22.261c0 35.744 23.097 66.193 55.148 77.213-4.277 8.385-3.556 18.848 2.712 26.671l24.258-19.439 24.258 19.439c6.342-7.915 7.011-18.534 2.564-26.968 31.614-11.261 54.308-41.485 54.308-76.916v-22.261a81.174 81.174 0 0 0-13.881-45.483z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M256 330.206c-32.732 0-59.362-26.63-59.362-59.362v-22.261c0-32.733 26.63-59.363 59.362-59.363s59.362 26.63 59.362 59.362v22.261c0 32.733-26.63 59.363-59.362 59.363z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M293.101 270.843v-22.261c0-20.458-16.643-37.101-37.101-37.101s-37.101 16.643-37.101 37.101v22.261L256 278.264l37.101-7.421z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M218.899 270.843c0 20.458 16.643 37.101 37.101 37.101s37.101-16.643 37.101-37.101h-74.202z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M300.522 189.22c0-12.295-9.966-22.261-22.261-22.261a22.173 22.173 0 0 0-14.84 5.672v-13.093h7.421v-14.84h-7.421v-7.421h-14.84v7.421h-7.421v14.84h7.421v13.093a22.177 22.177 0 0 0-14.841-5.672c-12.295 0-22.261 9.966-22.261 22.261 0 6.591 2.867 12.512 7.421 16.589v13.093h74.203v-13.093c4.552-4.077 7.419-9.997 7.419-16.589z"
  }));
}, Fx = function(l) {
  var r = l.title, a = p(l, Pp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M330.207 85.331H512v341.337H330.207z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.331h181.793v341.337H0zm255.999 111.301 14.733 45.347h47.685l-38.576 28.029 14.734 45.348-38.576-28.026-38.577 28.026 14.737-45.348-38.576-28.029h47.681z",
    fill: "#496E2D"
  }));
}, yx = function(l) {
  var r = l.title, a = p(l, Vp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m256 157.273 22.663 69.748H352l-59.332 43.106 22.664 69.749L256 296.769l-59.332 43.107 22.664-69.749L160 227.021h73.337z"
  }));
}, Hx = function(l) {
  var r = l.title, a = p(l, Np);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M0 196.636h512v118.728H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z",
    fill: "#6DA544"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m256.742 218.003 9.43 29.021h30.518L272 264.963l9.431 29.023-24.689-17.937-24.689 17.937 9.431-29.023-24.69-17.939h30.518z"
  }));
}, _x = function(l) {
  var r = l.title, a = p(l, kp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 322.783h512v103.88H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M0 210.877h512v89.656H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m73.178 209.188 20.831 29.067 34.084-10.83-21.207 28.795 20.83 29.069-33.939-11.271-21.208 28.794.234-35.762-33.94-11.273 34.083-10.83z"
  }));
}, bx = function(l) {
  var r = l.title, a = p(l, $p);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#6DA544"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m302.049 226.318 7.368 22.674h23.842l-19.288 14.016 7.366 22.674-19.288-14.015-19.287 14.015 7.366-22.674-19.288-14.016h23.842zm74.203 0 7.367 22.674h23.842l-19.288 14.016 7.367 22.674-19.288-14.015-19.288 14.015 7.367-22.674-19.288-14.016h23.842z"
  }));
}, Ax = function(l) {
  var r = l.title, a = p(l, Wp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M228.582 261.936 256 214.447l27.418 47.489z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M291.616 277.616 256 295.425l-35.616-17.809v-23.744h71.232z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m289.579 216.485-12.592 12.592c5.37 5.372 8.693 12.791 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.114-5.316-24.987-13.91-33.579z"
  }));
}, Sx = function(l) {
  var r = l.title, a = p(l, Up);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M512 85.331v166.69L0 256.173V85.331z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M59.621 256a59.546 59.546 0 0 0-.193 4.57c0 32.821 26.607 59.429 59.429 59.429s59.429-26.607 59.429-59.429c0-1.539-.078-3.061-.193-4.57H59.621z"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 118.862,
    cy: 210.287,
    r: 18.286
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M77.715 205.714v59.429c0 31.494 41.144 41.143 41.144 41.143s41.144-9.649 41.144-41.143v-59.429H77.715z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M118.877 287.148c-7.632-2.746-22.876-9.767-22.876-22.006v-41.144h45.715v41.144c-.001 12.28-15.244 19.283-22.839 22.006z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#F3F3F3",
    d: "M128.001 246.856v-9.142l-9.144-4.571-9.142 4.571v9.142l-4.571 4.573v18.285h27.428v-18.285z"
  }));
}, Cx = function(l) {
  var r = l.title, a = p(l, Gp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 312.882h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m187.31 215.184 9.208 28.341h29.802l-24.11 17.518 9.209 28.342-24.109-17.516-24.11 17.516 9.209-28.342-24.109-17.518h29.801zm137.38 0 9.209 28.341H363.7l-24.109 17.518 9.209 28.342-24.11-17.516-24.109 17.516 9.209-28.342-24.11-17.518h29.802z",
    fill: "#6DA544"
  }));
}, Dx = function(l) {
  var r = l.title, a = p(l, Kp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#2B5DEA",
    d: "M0 0h900v600H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDF29",
    d: "M0 100h900v400H0V100z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D70000",
    d: "M0 150h900v300H0V150z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M450 171.4v257.2c114.3 0 171.4-85.7 214.3-128.6-42.9-42.9-100-128.6-214.3-128.6z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M450 171.4c-100 0-171.4 85.7-214.3 128.6C278.6 342.9 350 428.6 450 428.6V171.4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M346.3 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M477.8 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z"
  }));
}, Tx = function(l) {
  var r = l.title, a = p(l, Yp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#29DBFF",
    d: "M448.9 169.5c0 9.6-.3 29.6-1.4 39.2-4.1 34.9-23.5 68.8-62.1 85.9-45.3-17.9-60.8-51-64.9-85.9-1.1-9.6-1.5-19.4-1.5-29l.3-47.1h129.2l.4 36.9z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M447.5 208.7c-.2 1.6-.4 3.3-.6 4.9-4.8 33.1-22.9 65.4-61.5 81-43.2-17-59.4-47.9-64.2-81-.2-1.6-.4-3.2-.6-4.9"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#29DBFF",
    d: "m385.4 251.7-22.9-43h45.8z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m385.4 165.8-22.9 42.9h45.8z"
  }), /* @__PURE__ */ t.createElement("ellipse", {
    fill: "#FFBE57",
    cx: 474.8,
    cy: 236.8,
    rx: 16.8,
    ry: 43.3
  }), /* @__PURE__ */ t.createElement("ellipse", {
    fill: "#FFBE57",
    cx: 295.3,
    cy: 236.8,
    rx: 16.8,
    ry: 43.3
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m385.4 31.5-33.4 44h68.5zM315.5 280s33.8 29.5 69.9 29.5 67.1-29.5 67.1-29.5l8.5 14.6S439.2 326 385.4 326 307 294.6 307 294.6l8.5-14.6z"
  }), /* @__PURE__ */ t.createElement("ellipse", {
    fill: "#A5A5A5",
    cx: 386.3,
    cy: 104.3,
    rx: 34.3,
    ry: 23.3
  }));
}, Bx = function(l) {
  var r = l.title, a = p(l, jp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M332.058 191.996v78.221c0 38.103 51.942 49.779 51.942 49.779s51.942-11.675 51.942-49.779v-78.221H332.058z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FF9811",
    d: "M376.579 220.44c0 7.855-6.644 28.445-14.84 28.445s-14.84-20.589-14.84-28.445c0-7.856 14.84-14.222 14.84-14.222s14.84 6.367 14.84 14.222z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#A2001D",
    d: "M415.961 235.93c2.394-5.6 4.257-13.785 4.257-17.86 0-6.546-8.904-11.852-8.904-11.852s-8.904 5.306-8.904 11.852c0 4.075 1.862 12.26 4.257 17.86l-5.141 11.123a26.898 26.898 0 0 0 9.788 1.831c3.463 0 6.766-.654 9.788-1.831l-5.141-11.123z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M372.87 270.217s-7.421 14.222-7.421 28.445h37.101c0-14.222-7.421-28.445-7.421-28.445l-11.13-7.111-11.129 7.111z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M395.13 270.217v-3.555c0-5.891-4.983-10.666-11.13-10.666-6.147 0-11.13 4.776-11.13 10.666v3.555h22.26z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
    fill: "#D80027"
  }));
}, Lx = function(l) {
  var r = l.title, a = p(l, qp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M341.337 85.331H512v341.337H341.337z"
  }));
}, Ox = function(l) {
  var r = l.title, a = p(l, Zp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h21v15H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#073AB6",
    d: "M0 0h22.5v15H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h11.3v7.5H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#F44653",
    d: "M7.1 0h3.6v7H7.1V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1035BB",
    d: "M0 0h3.6v7H0V0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M3.6 0h3.6v7H3.6V0zm10.9 6h5L19 7h-1.5v.5h1l-.5 1h-.5V10h-1V7H15l-.5-1zm4 2.5 1 1.5h-2l1-1.5zm-3 0 1 1.5h-2l1-1.5zm1.5 3L16 10h2l-1 1.5zM20 8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-6 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm1 4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm4 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-2 1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
  }));
}, Rx = function(l) {
  var r = l.title, a = p(l, Jp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512V153.6H0zM0 358.4h512v68.263H0zm0-136.537h512v68.263H0z",
    fill: "#496E2D"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h204.054v204.054H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m102.026 133.938 13.26 40.812h42.916l-34.718 25.226 13.26 40.814-34.718-25.224-34.719 25.224 13.263-40.814-34.718-25.226h42.913z"
  }));
}, Ix = function(l) {
  var r = l.title, a = p(l, Xp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.334h512V426.66H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 194.056h512v123.882H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.334h512v54.522H0zm0 286.809h512v54.522H0z",
    fill: "#D80027"
  }));
}, Px = function(l) {
  var r = l.title, a = p(l, Qp);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M226.318 300.522h59.364v-25.23l-11.873 5.937L256 263.421l-17.809 17.808-11.873-5.937zm-33.963-29.682 2.763 8.504h8.94l-7.233 5.255 2.763 8.502-7.233-5.255-7.234 5.255 2.763-8.502-7.233-5.255h8.94zm8.566-29.68 2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm24.488-22.261 2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm94.236 51.941-2.763 8.504h-8.94l7.233 5.255-2.763 8.502 7.233-5.255 7.234 5.255-2.763-8.502 7.233-5.255h-8.94zm-8.566-29.68-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zm-24.488-22.261-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zM256 207.767l2.763 8.503h8.941l-7.234 5.256 2.763 8.502-7.233-5.254-7.233 5.254 2.763-8.502-7.234-5.256h8.941z",
    fill: "#FFDA44"
  }));
}, Vx = function(l) {
  var r = l.title, a = p(l, eE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m210.715 174.377 3.684 11.338h11.919l-9.643 7.006 3.684 11.337-9.644-7.007-9.644 7.007 3.684-11.337-9.645-7.006h11.921zm-93.899 107.594 4.605 14.172h14.9l-12.055 8.757 4.606 14.173-12.056-8.76-12.055 8.76 4.604-14.173-12.054-8.757h14.899zm27.88-162.292 4.604 14.172h14.901l-12.056 8.758 4.606 14.171-12.055-8.759-12.056 8.759 4.606-14.171-12.055-8.758h14.9zm-75.157 55.652 4.604 14.172h14.9l-12.055 8.758 4.606 14.171-12.055-8.758-12.056 8.758 4.606-14.171-12.055-8.758h14.9z",
    fill: "#FFF"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M483.386 354.503H117.801s109.234-88.562 310.593-220.938c.001 0-88.443 128.935 54.992 220.938zm-365.585 11.586c-11.177 0-11.195 17.37 0 17.37h365.585c11.177 0 11.195-17.37 0-17.37H117.801z",
    fill: "#FFDA44"
  }));
}, Nx = function(l) {
  var r = l.title, a = p(l, tE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M256 256 0 90.691v44.242L155.826 256 0 377.067v44.242z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 90.691v330.618L189.217 256z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m44.184 213.36 24.912 23.577 30.121-16.41-14.723 30.98 24.911 23.575-34.012-4.43L60.67 301.63l-6.296-33.716-34.012-4.43 30.119-16.408z"
  }));
}, kx = function(l) {
  var r = l.title, a = p(l, rE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M357.208 183.679c8.397-23.404-1.036-48.858-21.281-61.536a52.131 52.131 0 0 1 10.884 2.621c27.002 9.688 41.038 39.428 31.35 66.431s-39.428 41.038-66.431 31.35a52.182 52.182 0 0 1-10.069-4.895c23.686 3.084 47.15-10.566 55.547-33.971zm-46.571-67.95-7.297 9.427-11.22-4.026 6.712 9.852-7.296 9.427 11.443-3.338 6.712 9.852.361-11.914 11.444-3.339-11.221-4.025z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m330.338 146.448-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.443-3.339 6.712 9.853.36-11.915 11.445-3.34-11.221-4.024zM275.9 126.916l-7.296 9.427-11.219-4.024 6.711 9.851-7.296 9.426 11.443-3.338 6.712 9.852.361-11.915 11.444-3.337-11.221-4.027zm-.799 35.189-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.444-3.338 6.711 9.852.362-11.915 11.443-3.338-11.22-4.026zm33.484 12.013-7.296 9.427-11.22-4.026 6.712 9.853-7.297 9.426 11.444-3.338 6.712 9.852.36-11.915 11.443-3.338-11.219-4.025z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M83.478 85.337h89.043v341.326H83.478z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m117.458 175.191-14.908-11.105v-15.705l14.908-11.105h21.084l14.908 11.105v15.705l-14.908 11.105z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M128 137.276h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.105v-8.012H128z",
    fill: "#FF9811"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m117.458 374.725-14.908-11.106v-15.704l14.908-11.105h21.084l14.908 11.105v15.704l-14.908 11.106z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M128 336.81h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.106v-8.011H128z",
    fill: "#FF9811"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m117.458 274.957-14.908-11.105v-15.703l14.908-11.106h21.084l14.908 11.106v15.703l-14.908 11.105zm36.513 24.434h-6.493v-6.493h-11.411l-8.068-8.068-8.067 8.068h-11.41v6.493h-6.493v12.986h6.493v6.492h11.41l8.068 8.069 8.068-8.069h11.41v-6.492h6.493zm0-99.768h-6.493v-6.492h-11.411l-8.068-8.069-8.067 8.069h-11.41v6.492h-6.493v12.986h6.493v6.492h11.41l8.068 8.07 8.068-8.07h11.41v-6.492h6.493z",
    fill: "#496E2D"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M120.576 248.576h14.84v14.84h-14.84z"
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 128,
    cy: 206.113,
    r: 7.421
  }), /* @__PURE__ */ t.createElement("circle", {
    cx: 128,
    cy: 305.887,
    r: 7.421
  })));
}, $x = function(l) {
  var r = l.title, a = p(l, nE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 256,
    cy: 255.994,
    r: 96
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "m267.826 219.291 16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z"
  })));
}, Wx = function(l) {
  var r = l.title, a = p(l, lE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h256v170.663H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M141.357 157.303V130.59h-26.714v26.713H87.93v26.713h26.713v26.713h26.714v-26.713h26.713v-26.713z"
  }));
}, Ux = function(l) {
  var r = l.title, a = p(l, iE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#E30A17",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M259.7 118.6c-13.1-9.5-29-14.6-45.3-14.5-40.8 0-73.8 30.8-73.8 68.9s33.1 68.9 73.8 68.9c17.1 0 32.9-5.4 45.3-14.5-30 38.6-85.7 45.6-124.3 15.5s-45.6-85.7-15.5-124.3 85.7-45.6 124.3-15.5c5.8 4.5 11 9.8 15.5 15.5zm39.9 65.8-18.1 21.9 1.2-28.4-26.4-10.4 27.3-7.6 1.8-28.3 15.6 23.7 27.5-7.1-17.5 22 15.3 23.9-26.7-9.7z"
  }));
}, Gx = function(l) {
  var r = l.title, a = p(l, aE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m6.066 85.337 207.961 212.636 131.584 128.69h160.323L297.973 214.027 166.389 85.337z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M43.364 85.337 384.69 426.663h83.946L127.31 85.337z"
  }));
}, Kx = function(l) {
  var r = l.title, a = p(l, cE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h900v600H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#00B2EE",
    d: "M0 300h450V0h450v600H0V300z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m345.3 480.9 29.4 90.6-77.1-56H393l-77.1 56 29.4-90.6zM706.4 340l29.4 90.6-77.1-56H754l-77.1 56 29.5-90.6zm106.4-78.5 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm0-224.1 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M449.9 0v206.3h-81l81 54V300h-39.7l-129-85.9V300H168.7v-85.9L39.7 300H0v-39.7l81-54H0V93.8h81L0 39.9V0h39.7l129 85.9V0h112.5v85.9L410.2 0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M253.1 0h-56.3v122H0v56.2h196.8V300h56.3V178.2h196.8V122H253.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M449.9 39.9v53.9h-81z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 300v-19.3l109.9-74.4h39.7L12.8 300zM12.8.1l136.8 93.7h-39.7L0 19.4V.1zm437.1.1v19.3L340 93.8h-39.7L437.1.2zM437.1 300l-136.8-93.7H340l109.9 74.4V300z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m719.9 131.6 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM584 187.7l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm30 242.9 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM488 332l29.4 90.6-77.1-56h95.3l-77.1 56L488 332zm0 132 29.4 90.6-77.1-56h95.3l-77.1 56L488 464z"
  }));
}, Yx = function(l) {
  var r = l.title, a = p(l, oE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h256V256H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M186.435 170.669 162.558 181.9l12.714 23.125-25.927-4.961-3.286 26.192L128 206.993l-18.06 19.263-3.285-26.192-25.927 4.96 12.714-23.125-23.877-11.23 23.877-11.231-12.714-23.125 25.927 4.96 3.286-26.192L128 134.344l18.06-19.263 3.285 26.192 25.928-4.96-12.715 23.125z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#0052B4",
    cx: 128,
    cy: 170.674,
    r: 29.006
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M128 190.06c-10.692 0-19.391-8.7-19.391-19.391 0-10.692 8.7-19.391 19.391-19.391 10.692 0 19.391 8.7 19.391 19.391 0 10.691-8.699 19.391-19.391 19.391z"
  }));
}, jx = function(l) {
  var r = l.title, a = p(l, sE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 426.663V85.337h512"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
  }));
}, qx = function(l) {
  var r = l.title, a = p(l, uE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512V256H0z"
  }));
}, Zx = function(l) {
  var r = l.title, a = p(l, fE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#232323",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 56.9h512v56.9H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D32300",
    d: "M0 113.8h512v56.9H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 227.6h512v56.9H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D32300",
    d: "M0 284.4h512v56.9H0z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FFF",
    cx: 256,
    cy: 170.7,
    r: 80.7
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M234.5 127.5c.9-1.4-19.6-2-19.6-2 1.7-2.5 18.4-10.5 18.4-10.5s-.9-6 2.7-9.8l-4.5-9.8s7-3.4 18.4-3.4 19.9 7 21 13.1l-6.4 3.4c-.1 4.7 1.7 11.6-4.3 17.3-5.9 5.7-8.3 6.9-8.5 18.8 0 3.9 2.3 8.2 8.8 11.7 17.4 9.3 38.6 28.2 44.6 33.9 6.1 5.7 5.1 19.2 2.6 25.2s-12.1 14.3-14.3 13.6c-2.2-.6 1.2-9.2-3.5-11.6 0 0-8.9-7.6-16.8.6s-.2 25.2 3.9 28c4.1 2.8 1.7 5-1.9 5H247c-3.8 0-5.4-2.3-1.9-5 7.6-3.8 12.4-15.3 7.4-20.3-4.9-4.9-18.3 1.5-21.5 6.3-2.8 2.8-8.8 3.6-12.9-1.4s-4.1-10.4-1.1-12.5c7-4.8 0 0 .1-.1 0 0 11.9-8.6 29.9-9 3.9 0 4.8-2.2 2.2-4.8 0 0-30.9-27.4-28.1-44.2 3-18.3 20-26.3 13.4-32.5-1.3-1.8 0 0 0 0z"
  }));
}, Jx = function(l) {
  var r = l.title, a = p(l, hE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M0 0h256.5v184.1H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z",
    fill: "#FFF"
  }));
}, Xx = function(l) {
  var r = l.title, a = p(l, mE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M0 0h256.5v184.1H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z",
    fill: "#FFF"
  }));
}, Qx = function(l) {
  var r = l.title, a = p(l, dE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 38h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z",
    fill: "#0038a8"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h256.5v190H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FED443",
    d: "m128.3 138.7-15.1 22.6-3.8-26.9L86 148.2l8.2-25.9-27.2 2.2 18.6-19.8L60.3 95l25.4-9.7L67 65.5l27.1 2.3-8.2-25.9 23.4 13.8 3.9-26.9 15.1 22.6 15.1-22.6 3.8 26.9 23.4-13.8-8.2 25.9 27.1-2.2-18.6 19.8 25.4 9.7-25.4 9.7 18.6 19.8-27.1-2.2 8.2 25.9-23.4-13.8-3.9 26.9-15-22.7zm0-.5c23.9.9 44-17.6 44.9-41.5.9-23.9-17.6-44-41.5-44.9h-3.4c-23.9.8-42.6 20.8-41.8 44.6.6 22.8 19 41.1 41.8 41.8zm0-10.6c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.3 34-34 34z"
  }));
}, eM = function(l) {
  var r = l.title, a = p(l, vE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M0 322.783h512v103.88H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 210.877h512v89.656H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M188.688 137.589c0-15.984 11.234-29.339 26.236-32.614a33.531 33.531 0 0 0-7.155-.777c-18.442 0-33.391 14.949-33.391 33.391s14.949 33.391 33.391 33.391c2.458 0 4.85-.273 7.155-.777-15.002-3.275-26.236-16.63-26.236-32.614zm45.97 15.177 2.261 6.957h7.315l-5.918 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.261-6.956-5.918-4.301h7.315zm23.348 0 2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm23.347 0 2.26 6.957h7.315l-5.917 4.301 2.26 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.918-4.301h7.315zm23.347 0 2.262 6.957h7.315l-5.919 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.262-6.956-5.919-4.301h7.314zm23.348 0 2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm-70.042-24.284 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm23.347 0 2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.918-4.3h7.315zm23.347 0 2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.299-5.918 4.299 2.262-6.957-5.919-4.3h7.314zm23.348 0 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm-46.695-24.284 2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.918-4.3h7.315zm23.347 0 2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.3-5.918 4.3 2.262-6.957-5.919-4.3h7.314zm23.348 0 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.917-4.3h7.314z",
    fill: "#FFF"
  }));
}, tM = function(l) {
  var r = l.title, a = p(l, pE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 85.331h256v341.337H256z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ACABB1",
    d: "m321.353 233.837 32.073 42.43c-5.053 7.651-5.026 17.961.817 25.692 7.414 9.807 21.374 11.748 31.182 4.335 9.807-7.414 11.748-21.374 4.334-31.182-5.843-7.731-15.756-10.568-24.495-7.795l-49.988-66.129-11.838 8.949-17.759 13.424 17.899 23.677 17.775-13.401zm46.175 48.78a7.421 7.421 0 1 1 8.95 11.84 7.421 7.421 0 0 1-8.95-11.84z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m376.367 247.24 17.899-23.677-17.759-13.424-11.838-8.949-49.988 66.129c-8.74-2.775-18.651.063-24.495 7.795-7.414 9.808-5.473 23.768 4.334 31.182 9.808 7.414 23.768 5.473 31.182-4.335 5.845-7.731 5.871-18.041.817-25.692l32.073-42.43 17.775 13.401zm-62.504 45.771a7.42 7.42 0 1 1-11.84-8.95 7.42 7.42 0 0 1 11.84 8.95z"
  }));
}, rM = function(l) {
  var r = l.title, a = p(l, EE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M341.337 85.331H512v341.337H341.337zM214.261 283.82l-33.393-50.086 33.392-50.087 33.392 50.087zm83.478 0-33.391-50.086 33.391-50.087 33.393 50.087zM256 350.603l-33.391-50.087L256 250.429l33.391 50.087z",
    fill: "#6DA544"
  }));
}, nM = function(l) {
  var r = l.title, a = p(l, gE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFCE00",
    d: "M0 0h22.5v5H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#203899",
    d: "M0 5h22.5v5H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D82B2B",
    d: "M0 10h22.5v5H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "m12.13 5.38.14.46.45.14-.39.27.01.48-.38-.29-.45.15.15-.44-.28-.38h.47zm-1.77 0 .27.39h.47l-.28.38.15.45-.45-.16-.38.28.01-.47-.39-.28.45-.13zm3.44.56-.01.48.39.27-.46.14-.14.45-.27-.38h-.48l.29-.38-.15-.45.45.16zm-5.11.02.4.27.44-.18-.13.46.3.36-.47.02-.26.4-.16-.44-.46-.12.37-.3zm6.55 1.17-.2.44.25.4-.47-.05-.31.36-.1-.46-.43-.18.41-.24.03-.47.35.31zm.19 1.12.21.43.47.07-.34.33.08.46-.42-.22-.42.22.08-.46-.34-.33.47-.07zM7 8.2l.21.43.47.06-.34.33.08.47L7 9.27l-.42.22.08-.47-.34-.33.47-.06zm.31-1.15.45.14.38-.29v.48l.39.26-.45.15-.13.46-.28-.38-.47.01.27-.38z"
  }));
}, lM = function(l) {
  var r = l.title, a = p(l, wE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M256 85.334V202.66h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M256 107.951v30.712h-46.069z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#2E52B2",
    d: "M256 107.951v30.712h-46.069z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 255.997v-15.082l57.377-38.252H80zm256 0v-15.082l-57.377-38.252H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m384 259.706-46.129 46.129c8.645 16.675 26.051 28.074 46.129 28.074s37.484-11.4 46.129-28.074L384 259.706z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M332.058 178.084v81.624c.001 39.759 51.942 51.941 51.942 51.941s51.941-12.182 51.942-51.942v-81.623H332.058z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M372.87 215.181h22.261v59.359H372.87z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#A2001D",
    cx: 384,
    cy: 215.181,
    r: 11.13
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M346.902 192.92h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84zm59.359-66.783h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84z",
    fill: "#FFDA44"
  }));
}, iM = function(l) {
  var r = l.title, a = p(l, zE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1583C4",
    d: "m397.7 166.3-51 97.7c-1.1 2-.3 4.5 1.8 5.6 2 1.1 4.5.3 5.6-1.8l51-97.7c1-2.1.1-4.6-2-5.5-2-.9-4.3-.2-5.4 1.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1583C4",
    d: "m404.9 188-57.8 75.4c-1.3 1.9-.8 4.5 1.1 5.8 1.7 1.2 4.1.9 5.5-.7l57.8-75.4c1.4-1.8 1.1-4.4-.8-5.8-1.8-1.5-4.4-1.1-5.8.7z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1583C4",
    d: "m379 181.3-32.5 83.1c-.8 2.1.2 4.6 2.4 5.4 2.1.8 4.6-.2 5.4-2.4l32.5-83.1c.7-2.2-.4-4.5-2.6-5.3-2.1-.6-4.3.4-5.2 2.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#409347",
    d: "M122.1 171.9c.4 1.7 1.2 4.7 2.2 8.5 1.7 6.4 3.6 12.8 5.6 18.7 2.3 6.9 14.7 31.4 20.2 39.1 6.9 9.7 14.1 19.3 21.5 28.6 1.6 1.9 4.5 2.1 6.4.5 1.8-1.6 2.1-4.3.7-6.2-7.3-9.2-14.4-18.6-21.2-28.2-4.2-5.8-17.2-31.1-19-36.7-2.9-8.7-5.4-17.6-7.6-26.5-.5-2.4-2.9-4-5.3-3.5s-4 2.9-3.5 5.3c-.1.2 0 .3 0 .4z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFD836",
    stroke: "#231F20",
    strokeMiterlimit: 10
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M297.1 114.9S279.5 42.8 261 42.8c-6.9 0-11.9-.6-15.4 6.4-.9 1.7-20.7-1.6-19.1 20.8.5 6.9 1.1-9.8 14.9-3.4 6.3 3-16.4 48.2-16.4 48.2h72.1z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m466.1 48.4-90.9 22c-75.3 18.3-42.1 44.4-42.1 44.4l-72.1 12-72.1-12s33.2-26.1-42.1-44.4l-90.9-22C43.1 45.3 38.1 51.8 45.3 63c0 0 106.6 104 126.8 112 20.2 8.1 40.8 0 40.8 0s-14.9 8.7-24 24c-9.2 15.3-4.6 34.7-38.9 40.2-5.5 6.6-5 14 2.9 19.9 7.9 5.8 72.1-48.1 72.1-48.1s-24 24.4-24 36.1c0 5.1 44.1 53.8 60.1 53.8s60.1-48.7 60.1-53.8c0-11.7-24-36.1-24-36.1s64.2 53.9 72.1 48.1 11.4-19.3 2.8-19.9c-28-1.8-29.7-24.9-38.9-40.2-9.2-15.3-24-24-24-24s20.6 8.1 40.8 0S476.7 63 476.7 63c7.2-11.2 2.3-17.7-10.6-14.6z"
  })), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    d: "M201.3 111.8v80.3c0 45.7 59.7 59.7 59.7 59.7s59.7-14 59.7-59.7v-80.3H201.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M225.2 137.7V235c8.2 6 17 10.2 23.9 12.9V137.7h-23.9zm71.6 0V235c-8.2 6-17 10.2-23.9 12.9V137.7h23.9z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M201.3 111.8h119.4v37.9H201.3z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#1583C4",
    d: "m60.1 210.5-21.9-58.1H15.7l31.8 80.8h25.2l31.5-80.8H81.7zm391.4-58.6h18.9v81.7h-18.9z"
  }));
}, aM = function(l) {
  var r = l.title, a = p(l, xE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M196.641 85.337H0v341.326h512V85.337z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m256 157.279 22.663 69.747H352l-59.332 43.106 22.664 69.749L256 296.774l-59.332 43.107 22.664-69.749L160 227.026h73.337z"
  }));
}, cM = function(l) {
  var r = l.title, a = p(l, ME);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#6DA544",
    d: "M512 256v170.663H0L215.185 256z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337V256H215.185L0 85.337z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M221.001 239.304 26.868 85.337H8.956l208.168 165.098H512v-11.131zM8.956 426.663h17.912l194.133-153.967H512v-11.131H217.124zM0 92.44v14.206L188.317 256 0 405.354v14.205L206.229 256z"
  }), /* @__PURE__ */ t.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ t.createElement("path", {
    d: "M8.956 85.337H0v7.103L206.229 256 0 419.559v7.104h8.956l208.168-165.098H512v-11.13H217.124z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M63.718 292.382v-14.295c14.265 0 25.87-11.606 25.87-25.869 0-10.092-8.211-18.303-18.304-18.303-6.875 0-12.469 5.593-12.469 12.469 0 4.397 3.577 7.974 7.974 7.974a4.514 4.514 0 0 0 4.508-4.508h14.295c0 10.368-8.435 18.804-18.802 18.804-12.279-.002-22.269-9.993-22.269-22.271 0-14.758 12.006-26.764 26.764-26.764 17.975 0 32.599 14.623 32.599 32.599 0 22.145-18.018 40.164-40.166 40.164z"
  })));
}, oM = function(l) {
  var r = l.title, a = p(l, FE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 150 100"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#ED2939",
    d: "M0 0h150v100H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#002395",
    d: "M0 0h20v44.33H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M20 0h20v44.33H20z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 3,
    d: "M0 44.33h62.75V0"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M108.08 43.29 87.96 23.17h40.25l-20.13 20.12zm-6.7 6.71L81.25 29.88v40.25L101.38 50zm6.7 6.71L87.96 76.83h40.25l-20.13-20.12zm6.71-6.71 20.13-20.13v40.25L114.79 50z"
  }));
}, sM = function(l) {
  var r = l.title, a = p(l, yE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h256v170.663H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m165.483 181.79 2.764 8.504h8.939l-7.232 5.254 2.763 8.503-7.234-5.255-7.233 5.255 2.763-8.503-7.233-5.254h8.94zm-44.904-66.783 4.606 14.173h14.9l-12.055 8.757 4.605 14.171-12.056-8.758-12.054 8.758 4.605-14.171-12.056-8.757h14.901zm44.522 14.841 4.606 14.172h14.9l-12.055 8.757 4.604 14.173-12.055-8.76-12.054 8.76 4.604-14.173-12.055-8.757h14.9zm-35.192 59.363 4.606 14.172h14.9l-12.055 8.758 4.604 14.171-12.055-8.759-12.054 8.759 4.604-14.171-12.055-8.758h14.9zm-39.01-37.103 4.605 14.173h14.9l-12.055 8.757 4.604 14.173-12.054-8.76-12.055 8.76 4.604-14.173-12.055-8.757h14.9z",
    fill: "#FFF"
  }));
}, uM = function(l) {
  var r = l.title, a = p(l, HE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.33"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.34H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "m220.72 42.63 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.36-15.9 8.36 3.03-17.7-12.86-12.54 17.78-2.58zm70.56-.06 7.95 16.1 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59zm62.08 11.36 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.87-12.54 17.78-2.58zm63.01 18.3 7.95 16.11 17.77 2.59-12.86 12.53 3.04 17.71-15.9-8.36-15.9 8.36 3.03-17.71-12.86-12.53 17.78-2.59zm-257.73-18.3 7.95 16.11 17.78 2.58-12.87 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.86-12.54 17.77-2.58zm-63.01 18.3 7.95 16.11 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59z",
    fill: "#FFF"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m217.53 259.33-27.22-13.61-27.22-54.43h27.22l27.22-27.22 13.61-27.22 27.22-13.61 13.61 13.61 27.22 13.61v13.61l13.61 13.61 40.83 27.22L340 245.73l-40.83 40.83-13.61-27.22-40.83 27.22v27.22l-13.61-13.61-13.59-40.84z"
  }));
}, fM = function(l) {
  var r = l.title, a = p(l, _E);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 312.888h512v113.775H0z"
  }));
}, hM = function(l) {
  var r = l.title, a = p(l, bE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 0h90v60H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    stroke: "#7f7f7f",
    strokeWidth: 0.25,
    fill: "#ABABAB",
    d: "M75.6 39.6c-1.1.7 0 1.8-.6 1.9-.6.1-1.5-1.4-.2-2.5 1.6-1.5 5.8 0 5.9 4.3 0 2.2-.9 6.8-7.2 6.8-7.6 0-11.4-5.7-11.4-11.4 0-4.8 3.7-13.5 6.5-14.6 3.1-1.2 6.7-3.5 6.8-5 0-.5-1.4-.1-3.3.9-3.1 1.7-6.6 2.5-6.6 1.4s2.9-3.1 4-4.6c1.2-1.6.9-5.5 3-5.5 7.6 0 9.9 7.7 7 11.7-1.9 2.6 4.3 1 4.3 1s0 5.3-3.2 7.3c-3 1.8-4.8 3.9-4.8 3.9s.2-4.6-.5-3.9c-.6.7-11.1 4.5-10.3 12 .3 3 4.5 5.4 8.5 5.2s5.7-2.4 5.8-4.9c.1-3.9-3-4.4-3.7-4zm-64.9 4c.1 2.5 1.8 4.7 5.8 4.9s8.2-2.2 8.5-5.2c.8-7.5-9.7-11.3-10.3-12-.7-.7-.5 3.9-.5 3.9s-1.8-2.1-4.8-3.9c-3.2-2-3.2-7.3-3.2-7.3s6.2 1.6 4.3-1c-2.9-4-.6-11.7 7-11.7 2.1 0 1.8 3.9 3 5.5 1.1 1.5 4 3.5 4 4.6s-3.5.3-6.6-1.4c-1.9-1-3.3-1.4-3.3-.9.1 1.5 3.7 3.8 6.8 5 2.8 1.1 6.5 9.8 6.5 14.6 0 5.7-3.8 11.4-11.4 11.4-6.3 0-7.2-4.6-7.2-6.8.1-4.3 4.3-5.8 5.9-4.3 1.2 1.1.4 2.7-.2 2.5-.6-.1.6-1.2-.6-1.9-.6-.4-3.7.1-3.7 4z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#DE393A",
    d: "M31 28.8v14c0 1.9 2.1 1.6 2.1 1.6h9.3c1.2 0 2.6 2.3 2.6 2.3s1.4-2.3 2.5-2.3h9.6s2 .2 2-1.8V28.7H31z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#3951A3",
    d: "M31 13.1h28v15.7H31z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M50.1 16.5c-.4 2.4-2.5 4.2-5.1 4.2-2.5 0-4.6-1.8-5.1-4.2-.5.9-.8 1.9-.8 3 0 3.3 2.6 5.9 5.9 5.9 3.3 0 5.9-2.6 5.9-5.9 0-1.1-.3-2.1-.8-3z"
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FEE05F",
    cx: 39.1,
    cy: 36.5,
    r: 3
  }), /* @__PURE__ */ t.createElement("circle", {
    fill: "#FEE05F",
    cx: 50.9,
    cy: 36.5,
    r: 3
  }));
}, mM = function(l) {
  var r = l.title, a = p(l, AE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M114.024 256.001 0 141.926v228.17z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#ffb915",
    d: "M161.192 256 0 94.7v47.226l114.024 114.075L0 370.096v47.138z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#007847",
    d: "M509.833 289.391c.058-.44.804-.878 2.167-1.318v-65.464H222.602L85.33 85.337H0V94.7L161.192 256 0 417.234v9.429h85.33l137.272-137.272h287.231z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#000c8a",
    d: "M503.181 322.783H236.433l-103.881 103.88H512v-103.88z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#e1392d",
    d: "M503.181 189.217H512V85.337H132.552l103.881 103.88z"
  }));
}, dM = function(l) {
  var r = l.title, a = p(l, SE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FF9811",
    d: "M490.668 195.476h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16h-.533c0 8.836 7.162 16 16 16 0 8.836 7.162 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.837 0 16.533-7.164 16.533-16z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "M341.337 255.994h56.888v170.663h-56.888z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FF9811",
    d: "M455.112 255.994H512v170.663h-56.888z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M398.225 255.994h56.888v170.663h-56.888z"
  }));
}, vM = function(l) {
  var r = l.title, a = p(l, CE);
  return /* @__PURE__ */ t.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, a), r && /* @__PURE__ */ t.createElement("title", null, r), /* @__PURE__ */ t.createElement("path", {
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 134.196h512v48.868H0zm0 195.472h512v48.868H0z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#057f44",
    d: "M0 85.333h512v48.868H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M0 183.069h512v48.868H0zm0 97.737h512v48.868H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#057f44",
    d: "M0 378.542h512v48.128H0z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFF",
    d: "M276.992 255.996 106.329 426.659H0V85.333h106.329z"
  }), /* @__PURE__ */ t.createElement("path", {
    d: "M256 255.996 85.334 426.662h20.987l170.667-170.666L106.321 85.33H85.334z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#D80027",
    d: "m102.465 202.57 13.259 40.812h42.917l-34.718 25.226 13.26 40.814-34.718-25.224-34.72 25.224 13.262-40.814-34.718-25.226h42.915z"
  }), /* @__PURE__ */ t.createElement("path", {
    fill: "#FFDA44",
    d: "m138.94 259.335-34.559-12.243s-2.553-23.955-2.708-24.766c-1.173-6.18-6.603-10.851-13.123-10.851-7.376 0-13.357 5.98-13.357 13.357 0 1.223.178 2.402.486 3.528l-9.689 9.755h17.229c0 17.882-13.344 17.882-13.344 35.691l7.402 17.809h44.522l7.422-17.809h-.004a17.782 17.782 0 0 0 1.381-5.231c6.397-2.589 8.342-9.24 8.342-9.24z"
  }));
};
const V4 = {
  AC: TE,
  AD: BE,
  AE: LE,
  AF: OE,
  AG: RE,
  AI: IE,
  AL: PE,
  AM: VE,
  AO: NE,
  AQ: kE,
  AR: $E,
  AS: WE,
  AT: UE,
  AU: GE,
  AW: KE,
  AX: YE,
  AZ: jE,
  BA: qE,
  BB: ZE,
  BD: JE,
  BE: XE,
  BF: QE,
  BG: eg,
  BH: tg,
  BI: rg,
  BJ: ng,
  BL: lg,
  BM: ig,
  BN: ag,
  BO: cg,
  BQ: og,
  BR: sg,
  BS: ug,
  BT: fg,
  BV: hg,
  BW: mg,
  BY: dg,
  BZ: vg,
  CA: pg,
  CC: Eg,
  CD: gg,
  CF: wg,
  CG: zg,
  CH: xg,
  CI: Mg,
  CK: Fg,
  CL: yg,
  CM: Hg,
  CN: _g,
  CO: bg,
  CR: Ag,
  CU: Sg,
  CV: Cg,
  CW: Dg,
  CX: Tg,
  CY: Bg,
  CZ: Lg,
  DE: Og,
  DJ: Rg,
  DK: Ig,
  DM: Pg,
  DO: Vg,
  DZ: Ng,
  EC: kg,
  EE: $g,
  EG: Wg,
  EH: Ug,
  ER: Gg,
  ES: Kg,
  ET: Yg,
  EU: jg,
  FI: qg,
  FJ: Zg,
  FK: Jg,
  FM: Xg,
  FO: Qg,
  FR: ew,
  GA: tw,
  GB: rw,
  GD: nw,
  GE: lw,
  GF: iw,
  GG: aw,
  GH: cw,
  GI: ow,
  GL: sw,
  GM: uw,
  GN: fw,
  GP: hw,
  GQ: mw,
  GR: dw,
  GS: vw,
  GT: pw,
  GU: Ew,
  GW: gw,
  GY: ww,
  HK: zw,
  HM: xw,
  HN: Mw,
  HR: Fw,
  HT: yw,
  HU: Hw,
  IC: _w,
  ID: bw,
  IE: Aw,
  IL: Sw,
  IM: Cw,
  IN: Dw,
  IO: Tw,
  IQ: Bw,
  IR: Lw,
  IS: Ow,
  IT: Rw,
  JE: Iw,
  JM: Pw,
  JO: Vw,
  JP: Nw,
  KE: kw,
  KG: $w,
  KH: Ww,
  KI: Uw,
  KM: Gw,
  KN: Kw,
  KP: Yw,
  KR: jw,
  KW: qw,
  KY: Zw,
  KZ: Jw,
  LA: Xw,
  LB: Qw,
  LC: ez,
  LI: tz,
  LK: rz,
  LR: nz,
  LS: lz,
  LT: iz,
  LU: az,
  LV: cz,
  LY: oz,
  MA: sz,
  MC: uz,
  MD: fz,
  ME: hz,
  MF: mz,
  MG: dz,
  MH: vz,
  MK: pz,
  ML: Ez,
  MM: gz,
  MN: wz,
  MO: zz,
  MP: xz,
  MQ: Mz,
  MR: Fz,
  MS: yz,
  MT: Hz,
  MU: _z,
  MV: bz,
  MW: Az,
  MX: Sz,
  MY: Cz,
  MZ: Dz,
  NA: Tz,
  NC: Bz,
  NE: Lz,
  NF: Oz,
  NG: Rz,
  NI: Iz,
  NL: Pz,
  NO: Vz,
  NP: Nz,
  NR: kz,
  NU: $z,
  NZ: Wz,
  OM: Uz,
  PA: Gz,
  PE: Kz,
  PF: Yz,
  PG: jz,
  PH: qz,
  PK: Zz,
  PL: Jz,
  PM: Xz,
  PN: Qz,
  PR: ex,
  PS: tx,
  PT: rx,
  PW: nx,
  PY: lx,
  QA: ix,
  RE: ax,
  RO: cx,
  RS: ox,
  RU: sx,
  RW: ux,
  SA: fx,
  SB: hx,
  SC: mx,
  SD: dx,
  SE: vx,
  SG: px,
  SH: Ex,
  SI: gx,
  SJ: wx,
  SK: zx,
  SL: xx,
  SM: Mx,
  SN: Fx,
  SO: yx,
  SR: Hx,
  SS: _x,
  ST: bx,
  SV: Ax,
  SX: Sx,
  SY: Cx,
  SZ: Dx,
  TA: Tx,
  TC: Bx,
  TD: Lx,
  TF: Ox,
  TG: Rx,
  TH: Ix,
  TJ: Px,
  TK: Vx,
  TL: Nx,
  TM: kx,
  TN: $x,
  TO: Wx,
  TR: Ux,
  TT: Gx,
  TV: Kx,
  TW: Yx,
  TZ: jx,
  UA: qx,
  UG: Zx,
  UM: Jx,
  US: Xx,
  UY: Qx,
  UZ: eM,
  VA: tM,
  VC: rM,
  VE: nM,
  VG: lM,
  VI: iM,
  VN: aM,
  VU: cM,
  WF: oM,
  WS: sM,
  XK: uM,
  YE: fM,
  YT: hM,
  ZA: mM,
  ZM: dM,
  ZW: vM
}, N4 = 8, pM = k3("div")(() => ({
  fontSize: "1rem",
  lineHeight: "1rem",
  paddingLeft: 8,
  paddingTop: 2
})), EM = () => /* @__PURE__ */ Ze.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    children: [
      /* @__PURE__ */ Ze.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ Ze.jsx("path", { d: "M7 10l5 5 5-5z" })
    ]
  }
), gM = k3(Q8)(() => ({
  width: "min-content",
  minWidth: 30,
  padding: 0,
  height: 30,
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  "& svg": {
    width: "auto",
    height: "1em"
  }
})), wM = (i) => {
  const { data: l, index: r, style: a } = i, u = l[r], [m, d, x] = u, { localization: F, countryClicked: b } = x, _ = {
    ...a,
    top: a.top + N4
  }, C = V4[d.iso2.toUpperCase()];
  return /* @__PURE__ */ Ze.jsxs(
    f4,
    {
      ...m,
      direction: "row",
      alignItems: "center",
      gap: 1,
      sx: { padding: "0.25rem 0.75rem", cursor: "pointer" },
      onClick: () => b(d),
      component: "li",
      style: _,
      children: [
        !!C && /* @__PURE__ */ Ze.jsx(C, { style: { height: "1em" } }),
        !C && /* @__PURE__ */ Ze.jsx("div", { style: { width: "1.5rem" } }),
        /* @__PURE__ */ Ze.jsxs("span", { children: [
          F && F[d.name] || d.name,
          " +",
          d.dialCode
        ] })
      ]
    },
    d.dialCode
  );
}, k4 = t.createContext({}), zM = t.forwardRef((i, l) => {
  const r = t.useContext(k4);
  return /* @__PURE__ */ Ze.jsx("div", { ref: l, ...i, ...r });
}), xM = (i) => {
  const l = t.useRef(null);
  return t.useEffect(() => {
    l.current != null && l.current.resetAfterIndex(0, !0);
  }, [i]), l;
}, MM = t.forwardRef((i, l) => {
  const { children: r, ...a } = i, u = [];
  r.forEach((S) => {
    u.push(S);
  });
  const m = Th(), d = eu(m.breakpoints.up("sm"), {
    noSsr: !0
  }), x = u.length, F = d ? 36 : 48, b = (S) => S != null && S.hasOwnProperty("group") ? 48 : F, _ = () => x > 8 ? 8 * F : u.map(b).reduce((S, V) => S + V, 0), C = xM(x);
  return /* @__PURE__ */ Ze.jsx("div", { ref: l, children: /* @__PURE__ */ Ze.jsx(k4.Provider, { value: a, children: /* @__PURE__ */ Ze.jsx(
    Kh,
    {
      itemData: u,
      height: _() + 2 * N4,
      width: "100%",
      ref: C,
      outerElementType: zM,
      innerElementType: "ul",
      itemSize: (S) => b(u[S]),
      overscanCount: 5,
      itemCount: x,
      children: wM
    }
  ) }) });
}), FM = k3(tu)({
  width: "36ch !important",
  transform: "translate3d(-13px, 29px, 0px) !important",
  "& .MuiAutocomplete-listbox": {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0
    }
  }
}), yM = ({
  selectedCountry: i,
  countries: l,
  localization: r,
  onCountrySelected: a
}) => {
  const [u, m] = k1(!1), d = (F) => {
    m(!1), a(F);
  }, x = V4[i.iso2.toUpperCase()];
  return /* @__PURE__ */ Ze.jsx(
    ru,
    {
      id: "virtualize-countries",
      disableListWrap: !0,
      disableClearable: !0,
      disablePortal: !0,
      PopperComponent: FM,
      ListboxComponent: MM,
      options: l,
      open: u,
      onClose: () => m(!1),
      value: i,
      isOptionEqualToValue: (F, b) => F.dialCode === b.dialCode,
      renderInput: (F) => /* @__PURE__ */ Ze.jsxs(
        f4,
        {
          sx: {
            position: "relative",
            display: "grid",
            gridTemplate: "1fr / 1fr",
            placeItems: "center",
            "& > *": {
              gridColumn: "1 / 1",
              gridRow: "1 / 1"
            },
            ".MuiAutocomplete-popper": {
              position: "absolute",
              top: "0",
              left: "0"
            }
          },
          children: [
            /* @__PURE__ */ Ze.jsxs(gM, { onClick: () => m(!u), children: [
              !!x && /* @__PURE__ */ Ze.jsx(x, {}),
              /* @__PURE__ */ Ze.jsxs(pM, { children: [
                "+",
                i.dialCode
              ] }),
              /* @__PURE__ */ Ze.jsx(EM, {})
            ] }),
            /* @__PURE__ */ Ze.jsx(h4, { ...F, sx: { opacity: 0, zIndex: -1 } })
          ]
        }
      ),
      renderOption: (F, b) => [F, b, { localization: r, countryClicked: d }],
      getOptionLabel: (F) => r && r[F.name] || F.name
    }
  );
}, HM = E1.memoize(
  (i, l, r) => {
    const a = l.find((m) => m.iso2 === r) ?? null;
    if (E1.trim(i) === "")
      return a;
    const u = E1.reduce(
      l,
      (m, d) => i.startsWith(d.dialCode) && (d.dialCode.length > m.dialCode.length || d.dialCode.length === m.dialCode.length && d.priority < m.priority) ? d : m,
      {
        name: "",
        regions: [],
        iso2: "",
        dialCode: "",
        priority: 10001,
        hasAreaCodes: !1,
        isAreaCode: !1
      }
    );
    return u.name ? u : a;
  }
), _M = (i, l) => {
  const r = new RegExp(`^\\+?${i}`);
  return l.match(r) ? l.replace(r, "") : l;
}, bM = (i, l) => {
  if (typeof i == "string") {
    const r = i;
    return l.filter(
      (a) => a.regions.some((u) => u === r)
    );
  }
  return l.filter(
    (r) => r.regions.some((a) => i.includes(a))
  );
}, AM = (i, l) => i.length === 0 ? l : l.filter(
  (r) => i.some((a) => a === r.iso2)
), u4 = (i, l, r, a) => {
  let u;
  if (l ? (u = l.split(" "), u.shift(), u = u.join(" ")) : u = l, !i || i.length === 0)
    return "";
  if (i && i.length < 2 || !u || !a)
    return i;
  const m = E1.reduce(
    u,
    (x, F) => x.remainingText.length === 0 ? x : F !== "." ? {
      formattedText: x.formattedText + F,
      remainingText: x.remainingText
    } : {
      formattedText: x.formattedText + E1.head(x.remainingText),
      remainingText: E1.tail(x.remainingText)
    },
    {
      formattedText: "",
      remainingText: i.split("")
    }
  );
  let d;
  return r ? d = m.formattedText + m.remainingText.join("") : d = m.formattedText, d.includes("(") && !d.includes(")") && (d += ")"), d;
}, v2 = (i, l) => {
  const r = l.replace(/\D/g, "").replace(/^0+/, "");
  return r.trim().length === 0 ? "" : i ? `+${i.dialCode}${r}` : l;
}, SM = nu(h4)(() => ({
  "& input": {
    borderLeft: "1px solid #c4c4c4",
    paddingLeft: 8
  }
})), CM = ({
  value: i,
  onlyCountries: l = [],
  preferredCountries: r = [],
  excludeCountries: a = [],
  defaultCountry: u = "",
  masks: m = {},
  placeholder: d = "(702) 123-4567",
  disabled: x = !1,
  error: F = !1,
  inputClass: b = "",
  autoFormat: _ = !0,
  isValid: C = (ge) => Ea.some(
    (Q) => ge.replace(/\D/g, "").startsWith(Q.dialCode) || Q.dialCode.startsWith(ge)
  ),
  disableDropdown: S = !1,
  enableLongNumbers: V = !1,
  regions: R = "",
  localization: E = {},
  onChange: M = () => {
  },
  keys: B = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    ESC: 27,
    PLUS: 43,
    A: 65,
    Z: 90,
    SPACE: 32
  },
  InputProps: k,
  onFocus: $,
  onClick: G,
  onBlur: A,
  name: J,
  innerRef: j,
  ...Be
}) => {
  const [ge, Q] = k1(""), [he, ke] = k1(null), [Ae, Se] = k1([]), [et, Je] = k1([]), [Ue, Ge] = k1(!0), [At, P] = k1(d), [W, oe] = k1(
    null
  ), ae = (ue) => {
    const He = m[ue.iso2];
    return He || ue.format;
  }, ee = (ue) => {
    !ue || W === ue || te(ue, !0);
  }, re = () => he ? {
    name: he.name || "",
    dialCode: he.dialCode || "",
    countryCode: he.iso2 || ""
  } : {}, te = (ue, He = !1, pt = he) => {
    if (!he)
      return;
    const Et = ge, ft = ue;
    if (ft === Et)
      return;
    let ht = ft;
    const St = ft.replace(/\D/g, "");
    if (St.length > 15)
      return;
    let Mt = pt;
    if (He && St.length > 1 && (Mt = HM(
      St.substring(0, 6),
      Ae,
      u
    ) || pt), !Mt)
      return;
    const Dr = _M(
      Mt.dialCode,
      St
    );
    St.length > 0 && Mt && (ht = u4(
      Dr,
      Mt ? ae(Mt) : void 0,
      V,
      _
    )), Q(ht), oe(i), Mt !== he && ke(Mt), M && M(v2(Mt, ht), re());
  }, fe = (ue) => {
    te(ue.currentTarget.value, !1);
  }, se = (ue) => {
    var pt;
    const He = (pt = ue.clipboardData) == null ? void 0 : pt.getData("text");
    He && te(He, !0);
  };
  ma(() => {
    let ue = Ea;
    R && (ue = bM(R, ue)), a && (ue = ue.filter(
      (ft) => !a.includes(ft.iso2)
    ));
    const He = AM(
      l,
      ue
    );
    Se(He);
    const pt = E1.filter(
      ue,
      (ft) => r.some(
        (ht) => ht === ft.iso2
      )
    );
    Je(pt);
    const Et = He.find((ft) => ft.iso2 === u) ?? He[0];
    if (!Et) {
      console.error("[MuiPhoneNumber] No countries found, aborting.");
      return;
    }
    ke(Et), te(i || "", !0, Et), Ge(!1);
  }, []), ma(() => {
    i && ee(i);
  }, [ee, i, he]);
  const de = (ue) => {
    G && G(ue, re());
  }, ve = (ue) => {
    const He = E1.isString(ue) ? E1.find(Ae, (ft) => ft.iso2 === ue) : E1.find(Ae, ue);
    if (!He)
      return;
    const pt = ge.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), Et = u4(
      pt.replace(/\D/g, ""),
      ae(He),
      V,
      _
    );
    ke(He), Q(Et), oe(i), M && M(
      v2(He, Et),
      re()
    );
  }, Ke = (ue) => {
    P(""), $ && $(ue, re());
  }, U = (ue) => {
    ue.currentTarget.value || P(d), A && A(ue, re());
  }, st = () => he && C(v2(he, ge)), q = () => he ? (Ae.sort((ue, He) => {
    const pt = E[ue.name] || ue.name, Et = E[He.name] || He.name;
    return pt.localeCompare(Et);
  }), {
    startAdornment: /* @__PURE__ */ Ze.jsx(lu, { sx: { position: "relative" }, position: "start", children: /* @__PURE__ */ Ze.jsx(
      yM,
      {
        selectedCountry: he,
        countries: et.concat(Ae),
        localization: E,
        onCountrySelected: (ue) => ve(ue)
      }
    ) })
  }) : null;
  if (Ue || !he)
    return null;
  const ut = S ? {} : q();
  return /* @__PURE__ */ Ze.jsxs(Ze.Fragment, { children: [
    /* @__PURE__ */ Ze.jsx(
      "input",
      {
        type: "hidden",
        value: v2(
          he,
          ge
        ),
        name: J,
        ref: j
      }
    ),
    /* @__PURE__ */ Ze.jsx(
      SM,
      {
        placeholder: At,
        value: ge,
        className: b,
        error: F || !st(),
        onChange: fe,
        onPaste: se,
        onClick: de,
        onFocus: Ke,
        onBlur: U,
        type: "tel",
        variant: "outlined",
        InputProps: {
          ...ut,
          ...k
        },
        name: `${J}-without-country`,
        ...Be
      }
    )
  ] });
};
CM.displayName = "MuiPhoneNumber";
export {
  CM as default
};
