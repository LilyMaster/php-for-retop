!function (t, e, n) {
    "use strict";
    function r(t) {
        return function () {
            var e, n = arguments[0], n = "[" + (t ? t + ":" : "") + n + "] http://errors.angularjs.org/1.2.27/" + (t ? t + "/" : "") + n;
            for (e = 1; e < arguments.length; e++)n = n + (1 == e ? "?" : "&") + "p" + (e - 1) + "=" + encodeURIComponent("function" == typeof arguments[e] ? arguments[e].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[e] ? "undefined" : "string" != typeof arguments[e] ? JSON.stringify(arguments[e]) : arguments[e]);
            return Error(n)
        }
    }

    function i(t) {
        if (null == t || k(t))return !1;
        var e = t.length;
        return 1 === t.nodeType && e ? !0 : w(t) || sr(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function o(t, e, n) {
        var r;
        if (t)if (S(t))for (r in t)"prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r); else if (sr(t) || i(t))for (r = 0; r < t.length; r++)e.call(n, t[r], r); else if (t.forEach && t.forEach !== o)t.forEach(e, n); else for (r in t)t.hasOwnProperty(r) && e.call(n, t[r], r);
        return t
    }

    function s(t) {
        var e, n = [];
        for (e in t)t.hasOwnProperty(e) && n.push(e);
        return n.sort()
    }

    function a(t, e, n) {
        for (var r = s(t), i = 0; i < r.length; i++)e.call(n, t[r[i]], r[i]);
        return r
    }

    function u(t) {
        return function (e, n) {
            t(n, e)
        }
    }

    function c() {
        for (var t, e = or.length; e;) {
            if (e--, t = or[e].charCodeAt(0), 57 == t)return or[e] = "A", or.join("");
            if (90 != t)return or[e] = String.fromCharCode(t + 1), or.join("");
            or[e] = "0"
        }
        return or.unshift("0"), or.join("")
    }

    function l(t, e) {
        e ? t.$$hashKey = e : delete t.$$hashKey
    }

    function f(t) {
        var e = t.$$hashKey;
        return o(arguments, function (e) {
            e !== t && o(e, function (e, n) {
                t[n] = e
            })
        }), l(t, e), t
    }

    function h(t) {
        return parseInt(t, 10)
    }

    function p(t, e) {
        return f(new (f(function () {
        }, {prototype: t})), e)
    }

    function $() {
    }

    function d(t) {
        return t
    }

    function v(t) {
        return function () {
            return t
        }
    }

    function g(t) {
        return "undefined" == typeof t
    }

    function m(t) {
        return "undefined" != typeof t
    }

    function y(t) {
        return null != t && "object" == typeof t
    }

    function w(t) {
        return "string" == typeof t
    }

    function b(t) {
        return "number" == typeof t
    }

    function x(t) {
        return "[object Date]" === nr.call(t)
    }

    function S(t) {
        return "function" == typeof t
    }

    function C(t) {
        return "[object RegExp]" === nr.call(t)
    }

    function k(t) {
        return t && t.document && t.location && t.alert && t.setInterval
    }

    function A(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function E(t, e, n) {
        var r = [];
        return o(t, function (t, i, o) {
            r.push(e.call(n, t, i, o))
        }), r
    }

    function O(t, e) {
        if (t.indexOf)return t.indexOf(e);
        for (var n = 0; n < t.length; n++)if (e === t[n])return n;
        return -1
    }

    function T(t, e) {
        var n = O(t, e);
        return n >= 0 && t.splice(n, 1), e
    }

    function M(t, e, n, r) {
        if (k(t) || t && t.$evalAsync && t.$watch)throw rr("cpws");
        if (e) {
            if (t === e)throw rr("cpi");
            if (n = n || [], r = r || [], y(t)) {
                var i = O(n, t);
                if (-1 !== i)return r[i];
                n.push(t), r.push(e)
            }
            if (sr(t))for (var s = e.length = 0; s < t.length; s++)i = M(t[s], null, n, r), y(t[s]) && (n.push(t[s]), r.push(i)), e.push(i); else {
                var a = e.$$hashKey;
                sr(e) ? e.length = 0 : o(e, function (t, n) {
                    delete e[n]
                });
                for (s in t)i = M(t[s], null, n, r), y(t[s]) && (n.push(t[s]), r.push(i)), e[s] = i;
                l(e, a)
            }
        } else(e = t) && (sr(t) ? e = M(t, [], n, r) : x(t) ? e = new Date(t.getTime()) : C(t) ? (e = RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex) : y(t) && (e = M(t, {}, n, r)));
        return e
    }

    function N(t, e) {
        if (sr(t)) {
            e = e || [];
            for (var n = 0; n < t.length; n++)e[n] = t[n]
        } else if (y(t))for (n in e = e || {}, t)!Zn.call(t, n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
        return e || t
    }

    function P(t, e) {
        if (t === e)return !0;
        if (null === t || null === e)return !1;
        if (t !== t && e !== e)return !0;
        var r, i = typeof t;
        if (i == typeof e && "object" == i) {
            if (!sr(t)) {
                if (x(t))return x(e) ? isNaN(t.getTime()) && isNaN(e.getTime()) || t.getTime() === e.getTime() : !1;
                if (C(t) && C(e))return t.toString() == e.toString();
                if (t && t.$evalAsync && t.$watch || e && e.$evalAsync && e.$watch || k(t) || k(e) || sr(e))return !1;
                i = {};
                for (r in t)if ("$" !== r.charAt(0) && !S(t[r])) {
                    if (!P(t[r], e[r]))return !1;
                    i[r] = !0
                }
                for (r in e)if (!i.hasOwnProperty(r) && "$" !== r.charAt(0) && e[r] !== n && !S(e[r]))return !1;
                return !0
            }
            if (!sr(e))return !1;
            if ((i = t.length) == e.length) {
                for (r = 0; i > r; r++)if (!P(t[r], e[r]))return !1;
                return !0
            }
        }
        return !1
    }

    function j(t, e) {
        var n = 2 < arguments.length ? tr.call(arguments, 2) : [];
        return !S(e) || e instanceof RegExp ? e : n.length ? function () {
            return arguments.length ? e.apply(t, n.concat(tr.call(arguments, 0))) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function D(t, r) {
        var i = r;
        return "string" == typeof t && "$" === t.charAt(0) ? i = n : k(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : r && r.$evalAsync && r.$watch && (i = "$SCOPE"), i
    }

    function R(t, e) {
        return "undefined" == typeof t ? n : JSON.stringify(t, D, e ? "  " : null)
    }

    function V(t) {
        return w(t) ? JSON.parse(t) : t
    }

    function U(t) {
        return "function" == typeof t ? t = !0 : t && 0 !== t.length ? (t = Kn("" + t), t = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)) : t = !1, t
    }

    function q(t) {
        t = Wn(t).clone();
        try {
            t.empty()
        } catch (e) {
        }
        var n = Wn("<div>").append(t).html();
        try {
            return 3 === t[0].nodeType ? Kn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
                return "<" + Kn(e)
            })
        } catch (r) {
            return Kn(n)
        }
    }

    function F(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
        }
    }

    function _(t) {
        var e, n, r = {};
        return o((t || "").split("&"), function (t) {
            t && (e = t.replace(/\+/g, "%20").split("="), n = F(e[0]), m(n) && (t = m(e[1]) ? F(e[1]) : !0, Zn.call(r, n) ? sr(r[n]) ? r[n].push(t) : r[n] = [r[n], t] : r[n] = t))
        }), r
    }

    function I(t) {
        var e = [];
        return o(t, function (t, n) {
            sr(t) ? o(t, function (t) {
                e.push(L(n, !0) + (!0 === t ? "" : "=" + L(t, !0)))
            }) : e.push(L(n, !0) + (!0 === t ? "" : "=" + L(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function H(t) {
        return L(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function L(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
    }

    function z(t, n) {
        function r(t) {
            t && a.push(t)
        }

        var i, s, a = [t], u = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        o(u, function (n) {
            u[n] = !0, r(e.getElementById(n)), n = n.replace(":", "\\:"), t.querySelectorAll && (o(t.querySelectorAll("." + n), r), o(t.querySelectorAll("." + n + "\\:"), r), o(t.querySelectorAll("[" + n + "]"), r))
        }), o(a, function (t) {
            if (!i) {
                var e = c.exec(" " + t.className + " ");
                e ? (i = t, s = (e[2] || "").replace(/\s+/g, ",")) : o(t.attributes, function (e) {
                    !i && u[e.name] && (i = t, s = e.value)
                })
            }
        }), i && n(i, s ? [s] : [])
    }

    function B(n, r) {
        var i = function () {
            if (n = Wn(n), n.injector()) {
                var t = n[0] === e ? "document" : q(n);
                throw rr("btstrpd", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            return r = r || [], r.unshift(["$provide", function (t) {
                t.value("$rootElement", n)
            }]), r.unshift("ng"), t = be(r), t.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (t, e, n, r) {
                t.$apply(function () {
                    e.data("$injector", r), n(e)(t)
                })
            }]), t
        }, s = /^NG_DEFER_BOOTSTRAP!/;
        return t && !s.test(t.name) ? i() : (t.name = t.name.replace(s, ""), void(ir.resumeBootstrap = function (t) {
            o(t, function (t) {
                r.push(t)
            }), i()
        }))
    }

    function W(t, e) {
        return e = e || "_", t.replace(cr, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function Q(t, e, n) {
        if (!t)throw rr("areq", e || "?", n || "required");
        return t
    }

    function G(t, e, n) {
        return n && sr(t) && (t = t[t.length - 1]), Q(S(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function J(t, e) {
        if ("hasOwnProperty" === t)throw rr("badname", e)
    }

    function X(t, e, n) {
        if (!e)return t;
        e = e.split(".");
        for (var r, i = t, o = e.length, s = 0; o > s; s++)r = e[s], t && (t = (i = t)[r]);
        return !n && S(t) ? j(i, t) : t
    }

    function K(t) {
        var e = t[0];
        if (t = t[t.length - 1], e === t)return Wn(e);
        var n = [e];
        do {
            if (e = e.nextSibling, !e)break;
            n.push(e)
        } while (e !== t);
        return Wn(n)
    }

    function Z(t) {
        var e = r("$injector"), n = r("ng");
        return t = t.angular || (t.angular = {}), t.$$minErr = t.$$minErr || r, t.module || (t.module = function () {
            var t = {};
            return function (r, i, o) {
                if ("hasOwnProperty" === r)throw n("badname", "module");
                return i && t.hasOwnProperty(r) && (t[r] = null), t[r] || (t[r] = function () {
                    function t(t, e, r) {
                        return function () {
                            return n[r || "push"]([t, e, arguments]), u
                        }
                    }

                    if (!i)throw e("nomod", r);
                    var n = [], s = [], a = t("$injector", "invoke"), u = {
                        _invokeQueue: n,
                        _runBlocks: s,
                        requires: i,
                        name: r,
                        provider: t("$provide", "provider"),
                        factory: t("$provide", "factory"),
                        service: t("$provide", "service"),
                        value: t("$provide", "value"),
                        constant: t("$provide", "constant", "unshift"),
                        animation: t("$animateProvider", "register"),
                        filter: t("$filterProvider", "register"),
                        controller: t("$controllerProvider", "register"),
                        directive: t("$compileProvider", "directive"),
                        config: a,
                        run: function (t) {
                            return s.push(t), this
                        }
                    };
                    return o && a(o), u
                }())
            }
        }())
    }

    function Y(e) {
        f(e, {
            bootstrap: B,
            copy: M,
            extend: f,
            equals: P,
            element: Wn,
            forEach: o,
            injector: be,
            noop: $,
            bind: j,
            toJson: R,
            fromJson: V,
            identity: d,
            isUndefined: g,
            isDefined: m,
            isString: w,
            isFunction: S,
            isObject: y,
            isNumber: b,
            isElement: A,
            isArray: sr,
            version: lr,
            isDate: x,
            lowercase: Kn,
            uppercase: Yn,
            callbacks: {counter: 0},
            $$minErr: r,
            $$csp: ur
        }), Gn = Z(t);
        try {
            Gn("ngLocale")
        } catch (n) {
            Gn("ngLocale", []).provider("$locale", Le)
        }
        Gn("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({$$sanitizeUri: vn}), t.provider("$compile", Oe).directive({
                a: ai,
                input: mi,
                textarea: mi,
                form: fi,
                script: to,
                select: ro,
                style: oo,
                option: io,
                ngBind: Mi,
                ngBindHtml: Pi,
                ngBindTemplate: Ni,
                ngClass: ji,
                ngClassEven: Ri,
                ngClassOdd: Di,
                ngCloak: Vi,
                ngController: Ui,
                ngForm: hi,
                ngHide: Gi,
                ngIf: _i,
                ngInclude: Ii,
                ngInit: Li,
                ngNonBindable: zi,
                ngPluralize: Bi,
                ngRepeat: Wi,
                ngShow: Qi,
                ngStyle: Ji,
                ngSwitch: Xi,
                ngSwitchWhen: Ki,
                ngSwitchDefault: Zi,
                ngOptions: no,
                ngTransclude: Yi,
                ngModel: Ci,
                ngList: Ei,
                ngChange: ki,
                required: Ai,
                ngRequired: Ai,
                ngValue: Ti
            }).directive({ngInclude: Hi}).directive(ui).directive(qi), t.provider({
                $anchorScroll: xe,
                $animate: Pr,
                $browser: ke,
                $cacheFactory: Ae,
                $controller: Ne,
                $document: Pe,
                $exceptionHandler: je,
                $filter: An,
                $interpolate: Ie,
                $interval: He,
                $http: Ue,
                $httpBackend: Fe,
                $location: en,
                $log: nn,
                $parse: fn,
                $rootScope: dn,
                $q: hn,
                $sce: wn,
                $sceDelegate: yn,
                $sniffer: bn,
                $templateCache: Ee,
                $timeout: xn,
                $window: kn,
                $$rAF: $n,
                $$asyncCallback: Se
            })
        }])
    }

    function te(t) {
        return t.replace(dr, function (t, e, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(vr, "Moz$1")
    }

    function ee(t, e, n, r) {
        function i(t) {
            var i, s, a, u, c, l, f = n && t ? [this.filter(t)] : [this], h = e;
            if (!r || null != t)for (; f.length;)for (i = f.shift(), s = 0, a = i.length; a > s; s++)for (u = Wn(i[s]), h ? u.triggerHandler("$destroy") : h = !h, c = 0, u = (l = u.children()).length; u > c; c++)f.push(Qn(l[c]));
            return o.apply(this, arguments)
        }

        var o = Qn.fn[t], o = o.$original || o;
        i.$original = o, Qn.fn[t] = i
    }

    function ne(t) {
        if (t instanceof ne)return t;
        if (w(t) && (t = ar(t)), !(this instanceof ne)) {
            if (w(t) && "<" != t.charAt(0))throw gr("nosel");
            return new ne(t)
        }
        if (w(t)) {
            var n = t;
            t = e;
            var r;
            if (r = mr.exec(n))t = [t.createElement(r[1])]; else {
                var i, o = t;
                if (t = o.createDocumentFragment(), r = [], yr.test(n)) {
                    for (o = t.appendChild(o.createElement("div")), i = (wr.exec(n) || ["", ""])[1].toLowerCase(), i = xr[i] || xr._default, o.innerHTML = "<div>&#160;</div>" + i[1] + n.replace(br, "<$1></$2>") + i[2], o.removeChild(o.firstChild), n = i[0]; n--;)o = o.lastChild;
                    for (n = 0, i = o.childNodes.length; i > n; ++n)r.push(o.childNodes[n]);
                    o = t.firstChild, o.textContent = ""
                } else r.push(o.createTextNode(n));
                t.textContent = "", t.innerHTML = "", t = r
            }
            he(this, t), Wn(e.createDocumentFragment()).append(this)
        } else he(this, t)
    }

    function re(t) {
        return t.cloneNode(!0)
    }

    function ie(t) {
        se(t);
        var e = 0;
        for (t = t.childNodes || []; e < t.length; e++)ie(t[e])
    }

    function oe(t, e, n, r) {
        if (m(r))throw gr("offargs");
        var i = ae(t, "events");
        ae(t, "handle") && (g(e) ? o(i, function (e, n) {
            $r(t, n, e), delete i[n]
        }) : o(e.split(" "), function (e) {
            g(n) ? ($r(t, e, i[e]), delete i[e]) : T(i[e] || [], n)
        }))
    }

    function se(t, e) {
        var r = t.ng339, i = fr[r];
        i && (e ? delete fr[r].data[e] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), oe(t)), delete fr[r], t.ng339 = n))
    }

    function ae(t, e, n) {
        var r = t.ng339, r = fr[r || -1];
        return m(n) ? (r || (t.ng339 = r = ++hr, r = fr[r] = {}), void(r[e] = n)) : r && r[e]
    }

    function ue(t, e, n) {
        var r = ae(t, "data"), i = m(n), o = !i && m(e), s = o && !y(e);
        if (r || s || ae(t, "data", r = {}), i)r[e] = n; else {
            if (!o)return r;
            if (s)return r && r[e];
            f(r, e)
        }
    }

    function ce(t, e) {
        return t.getAttribute ? -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") : !1
    }

    function le(t, e) {
        e && t.setAttribute && o(e.split(" "), function (e) {
            t.setAttribute("class", ar((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ar(e) + " ", " ")))
        })
    }

    function fe(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "), function (t) {
                t = ar(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }), t.setAttribute("class", ar(n))
        }
    }

    function he(t, e) {
        if (e) {
            e = e.nodeName || !m(e.length) || k(e) ? [e] : e;
            for (var n = 0; n < e.length; n++)t.push(e[n])
        }
    }

    function pe(t, e) {
        return $e(t, "$" + (e || "ngController") + "Controller")
    }

    function $e(t, e, r) {
        for (9 == t.nodeType && (t = t.documentElement), e = sr(e) ? e : [e]; t;) {
            for (var i = 0, o = e.length; o > i; i++)if ((r = Wn.data(t, e[i])) !== n)return r;
            t = t.parentNode || 11 === t.nodeType && t.host
        }
    }

    function de(t) {
        for (var e = 0, n = t.childNodes; e < n.length; e++)ie(n[e]);
        for (; t.firstChild;)t.removeChild(t.firstChild)
    }

    function ve(t, e) {
        var n = Cr[e.toLowerCase()];
        return n && kr[t.nodeName] && n
    }

    function ge(t, n) {
        var r = function (r, i) {
            if (r.preventDefault || (r.preventDefault = function () {
                    r.returnValue = !1
                }), r.stopPropagation || (r.stopPropagation = function () {
                    r.cancelBubble = !0
                }), r.target || (r.target = r.srcElement || e), g(r.defaultPrevented)) {
                var s = r.preventDefault;
                r.preventDefault = function () {
                    r.defaultPrevented = !0, s.call(r)
                }, r.defaultPrevented = !1
            }
            r.isDefaultPrevented = function () {
                return r.defaultPrevented || !1 === r.returnValue
            };
            var a = N(n[i || r.type] || []);
            o(a, function (e) {
                e.call(t, r)
            }), 8 >= Bn ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
        };
        return r.elem = t, r
    }

    function me(t, e) {
        var r, i = typeof t;
        return "function" == i || "object" == i && null !== t ? "function" == typeof(r = t.$$hashKey) ? r = t.$$hashKey() : r === n && (r = t.$$hashKey = (e || c)()) : r = t, i + ":" + r
    }

    function ye(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        o(t, this.put, this)
    }

    function we(t) {
        var e, n;
        return "function" == typeof t ? (e = t.$inject) || (e = [], t.length && (n = t.toString().replace(Tr, ""), n = n.match(Ar), o(n[1].split(Er), function (t) {
            t.replace(Or, function (t, n, r) {
                e.push(r)
            })
        })), t.$inject = e) : sr(t) ? (n = t.length - 1, G(t[n], "fn"), e = t.slice(0, n)) : G(t, "fn", !0), e
    }

    function be(t) {
        function e(t) {
            return function (e, n) {
                return y(e) ? void o(e, u(t)) : t(e, n)
            }
        }

        function n(t, e) {
            if (J(t, "service"), (S(e) || sr(e)) && (e = p.instantiate(e)), !e.$get)throw Mr("pget", t);
            return h[t + c] = e
        }

        function r(t, e) {
            return n(t, {$get: e})
        }

        function i(t) {
            var e, n, r, s, a = [];
            return o(t, function (t) {
                if (!f.get(t)) {
                    f.put(t, !0);
                    try {
                        if (w(t))for (e = Gn(t), a = a.concat(i(e.requires)).concat(e._runBlocks), n = e._invokeQueue, r = 0, s = n.length; s > r; r++) {
                            var o = n[r], u = p.get(o[0]);
                            u[o[1]].apply(u, o[2])
                        } else S(t) ? a.push(p.invoke(t)) : sr(t) ? a.push(p.invoke(t)) : G(t, "module")
                    } catch (c) {
                        throw sr(t) && (t = t[t.length - 1]), c.message && c.stack && -1 == c.stack.indexOf(c.message) && (c = c.message + "\n" + c.stack), Mr("modulerr", t, c.stack || c.message || c)
                    }
                }
            }), a
        }

        function s(t, e) {
            function n(n) {
                if (t.hasOwnProperty(n)) {
                    if (t[n] === a)throw Mr("cdep", n + " <- " + l.join(" <- "));
                    return t[n]
                }
                try {
                    return l.unshift(n), t[n] = a, t[n] = e(n)
                } catch (r) {
                    throw t[n] === a && delete t[n], r
                } finally {
                    l.shift()
                }
            }

            function r(t, e, r) {
                var i, o, s, a = [], u = we(t);
                for (o = 0, i = u.length; i > o; o++) {
                    if (s = u[o], "string" != typeof s)throw Mr("itkn", s);
                    a.push(r && r.hasOwnProperty(s) ? r[s] : n(s))
                }
                return sr(t) && (t = t[i]), t.apply(e, a)
            }

            return {
                invoke: r, instantiate: function (t, e) {
                    var n, i = function () {
                    };
                    return i.prototype = (sr(t) ? t[t.length - 1] : t).prototype, i = new i, n = r(t, i, e), y(n) || S(n) ? n : i
                }, get: n, annotate: we, has: function (e) {
                    return h.hasOwnProperty(e + c) || t.hasOwnProperty(e)
                }
            }
        }

        var a = {}, c = "Provider", l = [], f = new ye([], !0), h = {
            $provide: {
                provider: e(n),
                factory: e(r),
                service: e(function (t, e) {
                    return r(t, ["$injector", function (t) {
                        return t.instantiate(e)
                    }])
                }),
                value: e(function (t, e) {
                    return r(t, v(e))
                }),
                constant: e(function (t, e) {
                    J(t, "constant"), h[t] = e, d[t] = e
                }),
                decorator: function (t, e) {
                    var n = p.get(t + c), r = n.$get;
                    n.$get = function () {
                        var t = g.invoke(r, n);
                        return g.invoke(e, null, {$delegate: t})
                    }
                }
            }
        }, p = h.$injector = s(h, function () {
            throw Mr("unpr", l.join(" <- "))
        }), d = {}, g = d.$injector = s(d, function (t) {
            return t = p.get(t + c), g.invoke(t.$get, t)
        });
        return o(i(t), function (t) {
            g.invoke(t || $)
        }), g
    }

    function xe() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
            function i(t) {
                var e = null;
                return o(t, function (t) {
                    e || "a" !== Kn(t.nodeName) || (e = t)
                }), e
            }

            function s() {
                var t, r = n.hash();
                r ? (t = a.getElementById(r)) ? t.scrollIntoView() : (t = i(a.getElementsByName(r))) ? t.scrollIntoView() : "top" === r && e.scrollTo(0, 0) : e.scrollTo(0, 0)
            }

            var a = e.document;
            return t && r.$watch(function () {
                return n.hash()
            }, function () {
                r.$evalAsync(s)
            }), s
        }]
    }

    function Se() {
        this.$get = ["$$rAF", "$timeout", function (t, e) {
            return t.supported ? function (e) {
                return t(e)
            } : function (t) {
                return e(t, 0, !1)
            }
        }]
    }

    function Ce(t, e, r, i) {
        function s(t) {
            try {
                t.apply(null, tr.call(arguments, 1))
            } finally {
                if (m--, 0 === m)for (; y.length;)try {
                    y.pop()()
                } catch (e) {
                    r.error(e)
                }
            }
        }

        function a(t, e) {
            !function n() {
                o(x, function (t) {
                    t()
                }), b = e(n, t)
            }()
        }

        function u() {
            S != c.url() && (S = c.url(), o(A, function (t) {
                t(c.url())
            }))
        }

        var c = this, l = e[0], f = t.location, h = t.history, p = t.setTimeout, d = t.clearTimeout, v = {};
        c.isMock = !1;
        var m = 0, y = [];
        c.$$completeOutstandingRequest = s, c.$$incOutstandingRequestCount = function () {
            m++
        }, c.notifyWhenNoOutstandingRequests = function (t) {
            o(x, function (t) {
                t()
            }), 0 === m ? t() : y.push(t)
        };
        var b, x = [];
        c.addPollFn = function (t) {
            return g(b) && a(100, p), x.push(t), t
        };
        var S = f.href, C = e.find("base"), k = null;
        c.url = function (e, n) {
            if (f !== t.location && (f = t.location), h !== t.history && (h = t.history), !e)return k || f.href.replace(/%27/g, "'");
            if (S != e) {
                var r = S && Ge(S) === Ge(e);
                return S = e, !r && i.history ? n ? h.replaceState(null, "", e) : (h.pushState(null, "", e), C.attr("href", C.attr("href"))) : (r || (k = e), n ? f.replace(e) : f.href = e), c
            }
        };
        var A = [], E = !1;
        c.onUrlChange = function (e) {
            return E || (i.history && Wn(t).on("popstate", u), i.hashchange ? Wn(t).on("hashchange", u) : c.addPollFn(u), E = !0), A.push(e), e
        }, c.$$checkUrlChange = u, c.baseHref = function () {
            var t = C.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var O = {}, T = "", M = c.baseHref();
        c.cookies = function (t, e) {
            var i, o, s, a;
            if (!t) {
                if (l.cookie !== T)for (T = l.cookie, i = T.split("; "), O = {}, s = 0; s < i.length; s++)o = i[s], a = o.indexOf("="), a > 0 && (t = unescape(o.substring(0, a)), O[t] === n && (O[t] = unescape(o.substring(a + 1))));
                return O
            }
            e === n ? l.cookie = escape(t) + "=;path=" + M + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : w(e) && (i = (l.cookie = escape(t) + "=" + escape(e) + ";path=" + M).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
        }, c.defer = function (t, e) {
            var n;
            return m++, n = p(function () {
                delete v[n], s(t)
            }, e || 0), v[n] = !0, n
        }, c.defer.cancel = function (t) {
            return v[t] ? (delete v[t], d(t), s($), !0) : !1
        }
    }

    function ke() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, r) {
            return new Ce(t, r, e, n)
        }]
    }

    function Ae() {
        this.$get = function () {
            function t(t, n) {
                function i(t) {
                    t != h && (p ? p == t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }

                if (t in e)throw r("$cacheFactory")("iid", t);
                var s = 0, a = f({}, n, {id: t}), u = {}, c = n && n.capacity || Number.MAX_VALUE, l = {}, h = null, p = null;
                return e[t] = {
                    put: function (t, e) {
                        if (c < Number.MAX_VALUE) {
                            var n = l[t] || (l[t] = {key: t});
                            i(n)
                        }
                        return g(e) ? void 0 : (t in u || s++, u[t] = e, s > c && this.remove(p.key), e)
                    }, get: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e)return;
                            i(e)
                        }
                        return u[t]
                    }, remove: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e)return;
                            e == h && (h = e.p), e == p && (p = e.n), o(e.n, e.p), delete l[t]
                        }
                        delete u[t], s--
                    }, removeAll: function () {
                        u = {}, s = 0, l = {}, h = p = null
                    }, destroy: function () {
                        l = a = u = null, delete e[t]
                    }, info: function () {
                        return f({}, a, {size: s})
                    }
                }
            }

            var e = {};
            return t.info = function () {
                var t = {};
                return o(e, function (e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function (t) {
                return e[t]
            }, t
        }
    }

    function Ee() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }

    function Oe(t, r) {
        var i = {}, s = "Directive", a = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function h(e, n) {
            return J(e, "directive"), w(e) ? (Q(n, "directiveFactory"), i.hasOwnProperty(e) || (i[e] = [], t.factory(e + s, ["$injector", "$exceptionHandler", function (t, n) {
                var r = [];
                return o(i[e], function (i, o) {
                    try {
                        var s = t.invoke(i);
                        S(s) ? s = {compile: v(s)} : !s.compile && s.link && (s.compile = v(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "A", r.push(s)
                    } catch (a) {
                        n(a)
                    }
                }), r
            }])), i[e].push(n)) : o(e, u(h)), this
        }, this.aHrefSanitizationWhitelist = function (t) {
            return m(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return m(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (t, r, u, h, $, v, g, m, b, x, C, k) {
            function A(t, e, n, r, i) {
                t instanceof Wn || (t = Wn(t)), o(t, function (e, n) {
                    3 == e.nodeType && e.nodeValue.match(/\S+/) && (t[n] = Wn(e).wrap("<span></span>").parent()[0])
                });
                var s = O(t, e, t, n, r, i);
                return E(t, "ng-scope"), function (e, n, r, i) {
                    Q(e, "scope");
                    var a = n ? Sr.clone.call(t) : t;
                    o(r, function (t, e) {
                        a.data("$" + e + "Controller", t)
                    }), r = 0;
                    for (var u = a.length; u > r; r++) {
                        var c = a[r].nodeType;
                        1 !== c && 9 !== c || a.eq(r).data("$scope", e)
                    }
                    return n && n(a, e), s && s(e, a, a, i), a
                }
            }

            function E(t, e) {
                try {
                    t.addClass(e)
                } catch (n) {
                }
            }

            function O(t, e, r, i, o, s) {
                function a(t, r, i, o) {
                    var s, a, u, c, l, f, p;
                    s = r.length;
                    var $ = Array(s);
                    for (c = 0; s > c; c++)$[c] = r[c];
                    for (f = c = 0, l = h.length; l > c; f++)a = $[f], r = h[c++], s = h[c++], r ? (r.scope ? (u = t.$new(), Wn.data(a, "$scope", u)) : u = t, p = r.transcludeOnThisElement ? T(t, r.transclude, o) : !r.templateOnThisElement && o ? o : !o && e ? T(t, e) : null, r(s, u, a, i, p)) : s && s(t, a.childNodes, n, o)
                }

                for (var u, c, l, f, h = [], p = 0; p < t.length; p++)u = new X, c = M(t[p], [], u, 0 === p ? i : n, o), (s = c.length ? R(c, t[p], u, e, r, null, [], [], s) : null) && s.scope && E(u.$$element, "ng-scope"), u = s && s.terminal || !(l = t[p].childNodes) || !l.length ? null : O(l, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude : e), h.push(s, u), f = f || s || u, s = null;
                return f ? a : null
            }

            function T(t, e, n) {
                return function (r, i, o) {
                    var s = !1;
                    return r || (r = t.$new(), s = r.$$transcluded = !0), i = e(r, i, o, n), s && i.on("$destroy", function () {
                        r.$destroy()
                    }), i
                }
            }

            function M(t, e, n, r, i) {
                var o, s = n.$attr;
                switch (t.nodeType) {
                    case 1:
                        U(e, Te(Jn(t).toLowerCase()), "E", r, i);
                        for (var u, l, f, h = t.attributes, p = 0, $ = h && h.length; $ > p; p++) {
                            var d = !1, v = !1;
                            if (u = h[p], !Bn || Bn >= 8 || u.specified) {
                                o = u.name, l = ar(u.value), u = Te(o), (f = te.test(u)) && (o = W(u.substr(6), "-"));
                                var g = u.replace(/(Start|End)$/, "");
                                u === g + "Start" && (d = o, v = o.substr(0, o.length - 5) + "end", o = o.substr(0, o.length - 6)), u = Te(o.toLowerCase()), s[u] = o, (f || !n.hasOwnProperty(u)) && (n[u] = l, ve(t, u) && (n[u] = !0)), B(t, e, l, u), U(e, u, "A", r, i, d, v)
                            }
                        }
                        if (t = t.className, w(t) && "" !== t)for (; o = c.exec(t);)u = Te(o[2]), U(e, u, "C", r, i) && (n[u] = ar(o[3])), t = t.substr(o.index + o[0].length);
                        break;
                    case 3:
                        L(e, t.nodeValue);
                        break;
                    case 8:
                        try {
                            (o = a.exec(t.nodeValue)) && (u = Te(o[1]), U(e, u, "M", r, i) && (n[u] = ar(o[2])))
                        } catch (m) {
                        }
                }
                return e.sort(I), e
            }

            function j(t, e, n) {
                var r = [], i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t)throw jr("uterdir", e, n);
                        1 == t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                    } while (i > 0)
                } else r.push(t);
                return Wn(r)
            }

            function D(t, e, n) {
                return function (r, i, o, s, a) {
                    return i = j(i[0], e, n), t(r, i, o, s, a)
                }
            }

            function R(t, i, s, a, c, l, f, h, p) {
                function $(t, e, n, r) {
                    t && (n && (t = D(t, n, r)), t.require = x.require, t.directiveName = C, (U === x || x.$$isolateScope) && (t = J(t, {isolateScope: !0})), f.push(t)), e && (n && (e = D(e, n, r)), e.require = x.require, e.directiveName = C, (U === x || x.$$isolateScope) && (e = J(e, {isolateScope: !0})), h.push(e))
                }

                function d(t, e, n, r) {
                    var i, s = "data", a = !1;
                    if (w(e)) {
                        for (; "^" == (i = e.charAt(0)) || "?" == i;)e = e.substr(1), "^" == i && (s = "inheritedData"), a = a || "?" == i;
                        if (i = null, r && "data" === s && (i = r[e]), i = i || n[s]("$" + e + "Controller"), !i && !a)throw jr("ctreq", e, t)
                    } else sr(e) && (i = [], o(e, function (e) {
                        i.push(d(t, e, n, r))
                    }));
                    return i
                }

                function m(t, e, a, c, l) {
                    function p(t, e) {
                        var r;
                        return 2 > arguments.length && (e = t, t = n), W && (r = C), l(t, e, r)
                    }

                    var $, m, y, w, b, x, S, C = {};
                    if ($ = i === a ? s : N(s, new X(Wn(a), s.$attr)), m = $.$$element, U) {
                        var k = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        x = e.$new(!0), !I || I !== U && I !== U.$$originalDirective ? m.data("$isolateScopeNoTemplate", x) : m.data("$isolateScope", x), E(m, "ng-isolate-scope"), o(U.scope, function (t, n) {
                            var i, o, s, a, u = t.match(k) || [], c = u[3] || n, l = "?" == u[2], u = u[1];
                            switch (x.$$isolateBindings[n] = u + c, u) {
                                case"@":
                                    $.$observe(c, function (t) {
                                        x[n] = t
                                    }), $.$$observers[c].$$scope = e, $[c] && (x[n] = r($[c])(e));
                                    break;
                                case"=":
                                    if (l && !$[c])break;
                                    o = v($[c]), a = o.literal ? P : function (t, e) {
                                        return t === e || t !== t && e !== e
                                    }, s = o.assign || function () {
                                        throw i = x[n] = o(e), jr("nonassign", $[c], U.name)
                                    }, i = x[n] = o(e), x.$watch(function () {
                                        var t = o(e);
                                        return a(t, x[n]) || (a(t, i) ? s(e, t = x[n]) : x[n] = t), i = t
                                    }, null, o.literal);
                                    break;
                                case"&":
                                    o = v($[c]), x[n] = function (t) {
                                        return o(e, t)
                                    };
                                    break;
                                default:
                                    throw jr("iscp", U.name, n, t)
                            }
                        })
                    }
                    for (S = l && p, R && o(R, function (t) {
                        var n, r = {
                            $scope: t === U || t.$$isolateScope ? x : e,
                            $element: m,
                            $attrs: $,
                            $transclude: S
                        };
                        b = t.controller, "@" == b && (b = $[t.name]), n = g(b, r), C[t.name] = n, W || m.data("$" + t.name + "Controller", n), t.controllerAs && (r.$scope[t.controllerAs] = n)
                    }), c = 0, y = f.length; y > c; c++)try {
                        (w = f[c])(w.isolateScope ? x : e, m, $, w.require && d(w.directiveName, w.require, m, C), S)
                    } catch (A) {
                        u(A, q(m))
                    }
                    for (c = e, U && (U.template || null === U.templateUrl) && (c = x), t && t(c, a.childNodes, n, l), c = h.length - 1; c >= 0; c--)try {
                        (w = h[c])(w.isolateScope ? x : e, m, $, w.require && d(w.directiveName, w.require, m, C), S)
                    } catch (O) {
                        u(O, q(m))
                    }
                }

                p = p || {};
                for (var b, x, C, k, O, T = -Number.MAX_VALUE, R = p.controllerDirectives, U = p.newIsolateScopeDirective, I = p.templateDirective, L = p.nonTlbTranscludeDirective, z = !1, B = !1, W = p.hasElementTranscludeDirective, Q = s.$$element = Wn(i), K = a, Z = 0, te = t.length; te > Z; Z++) {
                    x = t[Z];
                    var ee = x.$$start, ne = x.$$end;
                    if (ee && (Q = j(i, ee, ne)), k = n, T > x.priority)break;
                    if ((k = x.scope) && (b = b || x, x.templateUrl || (H("new/isolated scope", U, x, Q), y(k) && (U = x))), C = x.name, !x.templateUrl && x.controller && (k = x.controller, R = R || {}, H("'" + C + "' controller", R[C], x, Q), R[C] = x), (k = x.transclude) && (z = !0, x.$$tlb || (H("transclusion", L, x, Q), L = x), "element" == k ? (W = !0, T = x.priority, k = Q, Q = s.$$element = Wn(e.createComment(" " + C + ": " + s[C] + " ")), i = Q[0], G(c, tr.call(k, 0), i), K = A(k, a, T, l && l.name, {nonTlbTranscludeDirective: L})) : (k = Wn(re(i)).contents(), Q.empty(), K = A(k, a))), x.template)if (B = !0, H("template", I, x, Q), I = x, k = S(x.template) ? x.template(Q, s) : x.template, k = Y(k), x.replace) {
                        if (l = x, k = yr.test(k) ? Wn(ar(k)) : [], i = k[0], 1 != k.length || 1 !== i.nodeType)throw jr("tplrt", C, "");
                        G(c, Q, i), te = {$attr: {}}, k = M(i, [], te);
                        var ie = t.splice(Z + 1, t.length - (Z + 1));
                        U && V(k), t = t.concat(k).concat(ie), F(s, te), te = t.length
                    } else Q.html(k);
                    if (x.templateUrl)B = !0, H("template", I, x, Q), I = x, x.replace && (l = x), m = _(t.splice(Z, t.length - Z), Q, s, c, z && K, f, h, {
                        controllerDirectives: R,
                        newIsolateScopeDirective: U,
                        templateDirective: I,
                        nonTlbTranscludeDirective: L
                    }), te = t.length; else if (x.compile)try {
                        O = x.compile(Q, s, K), S(O) ? $(null, O, ee, ne) : O && $(O.pre, O.post, ee, ne)
                    } catch (oe) {
                        u(oe, q(Q))
                    }
                    x.terminal && (m.terminal = !0, T = Math.max(T, x.priority))
                }
                return m.scope = b && !0 === b.scope, m.transcludeOnThisElement = z, m.templateOnThisElement = B, m.transclude = K, p.hasElementTranscludeDirective = W, m
            }

            function V(t) {
                for (var e = 0, n = t.length; n > e; e++)t[e] = p(t[e], {$$isolateScope: !0})
            }

            function U(e, r, o, a, c, l, f) {
                if (r === c)return null;
                if (c = null, i.hasOwnProperty(r)) {
                    var h;
                    r = t.get(r + s);
                    for (var $ = 0, d = r.length; d > $; $++)try {
                        h = r[$], (a === n || a > h.priority) && -1 != h.restrict.indexOf(o) && (l && (h = p(h, {
                            $$start: l,
                            $$end: f
                        })), e.push(h), c = h)
                    } catch (v) {
                        u(v)
                    }
                }
                return c
            }

            function F(t, e) {
                var n = e.$attr, r = t.$attr, i = t.$$element;
                o(t, function (r, i) {
                    "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                }), o(e, function (e, o) {
                    "class" == o ? (E(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
                })
            }

            function _(t, e, n, r, i, s, a, u) {
                var c, l, p = [], d = e[0], v = t.shift(), g = f({}, v, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: v
                }), m = S(v.templateUrl) ? v.templateUrl(e, n) : v.templateUrl;
                return e.empty(), h.get(x.getTrustedResourceUrl(m), {cache: $}).success(function (f) {
                    var h, $;
                    if (f = Y(f), v.replace) {
                        if (f = yr.test(f) ? Wn(ar(f)) : [], h = f[0], 1 != f.length || 1 !== h.nodeType)throw jr("tplrt", v.name, m);
                        f = {$attr: {}}, G(r, e, h);
                        var w = M(h, [], f);
                        y(v.scope) && V(w), t = w.concat(t), F(n, f)
                    } else h = d, e.html(f);
                    for (t.unshift(g), c = R(t, h, n, i, e, v, s, a, u), o(r, function (t, n) {
                        t == h && (r[n] = e[0])
                    }), l = O(e[0].childNodes, i); p.length;) {
                        f = p.shift(), $ = p.shift();
                        var b = p.shift(), x = p.shift(), w = e[0];
                        if ($ !== d) {
                            var S = $.className;
                            u.hasElementTranscludeDirective && v.replace || (w = re(h)), G(b, Wn($), w), E(Wn(w), S)
                        }
                        $ = c.transcludeOnThisElement ? T(f, c.transclude, x) : x, c(l, f, w, r, $)
                    }
                    p = null
                }).error(function (t, e, n, r) {
                    throw jr("tpload", r.url)
                }), function (t, e, n, r, i) {
                    t = i, p ? (p.push(e), p.push(n), p.push(r), p.push(t)) : (c.transcludeOnThisElement && (t = T(e, c.transclude, i)), c(l, e, n, r, t))
                }
            }

            function I(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function H(t, e, n, r) {
                if (e)throw jr("multidir", e.name, n.name, t, q(r))
            }

            function L(t, e) {
                var n = r(e, !0);
                n && t.push({
                    priority: 0, compile: function (t) {
                        var e = t.parent().length;
                        return e && E(t.parent(), "ng-binding"), function (t, r) {
                            var i = r.parent(), o = i.data("$binding") || [];
                            o.push(n), i.data("$binding", o), e || E(i, "ng-binding"), t.$watch(n, function (t) {
                                r[0].nodeValue = t
                            })
                        }
                    }
                })
            }

            function z(t, e) {
                if ("srcdoc" == e)return x.HTML;
                var n = Jn(t);
                return "xlinkHref" == e || "FORM" == n && "action" == e || "IMG" != n && ("src" == e || "ngSrc" == e) ? x.RESOURCE_URL : void 0
            }

            function B(t, e, n, i) {
                var o = r(n, !0);
                if (o) {
                    if ("multiple" === i && "SELECT" === Jn(t))throw jr("selmulti", q(t));
                    e.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (e, n, s) {
                                    if (n = s.$$observers || (s.$$observers = {}), l.test(i))throw jr("nodomevents");
                                    (o = r(s[i], !0, z(t, i))) && (s[i] = o(e), (n[i] || (n[i] = [])).$$inter = !0, (s.$$observers && s.$$observers[i].$$scope || e).$watch(o, function (t, e) {
                                        "class" === i && t != e ? s.$updateClass(t, e) : s.$set(i, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function G(t, n, r) {
                var i, o, s = n[0], a = n.length, u = s.parentNode;
                if (t)for (i = 0, o = t.length; o > i; i++)if (t[i] == s) {
                    t[i++] = r, o = i + a - 1;
                    for (var c = t.length; c > i; i++, o++)c > o ? t[i] = t[o] : delete t[i];
                    t.length -= a - 1;
                    break
                }
                for (u && u.replaceChild(r, s), t = e.createDocumentFragment(), t.appendChild(s), r[Wn.expando] = s[Wn.expando], s = 1, a = n.length; a > s; s++)u = n[s], Wn(u).remove(), t.appendChild(u), delete n[s];
                n[0] = r, n.length = 1
            }

            function J(t, e) {
                return f(function () {
                    return t.apply(null, arguments)
                }, t, e)
            }

            var X = function (t, e) {
                this.$$element = t, this.$attr = e || {}
            };
            X.prototype = {
                $normalize: Te, $addClass: function (t) {
                    t && 0 < t.length && C.addClass(this.$$element, t)
                }, $removeClass: function (t) {
                    t && 0 < t.length && C.removeClass(this.$$element, t)
                }, $updateClass: function (t, e) {
                    var n = Me(t, e), r = Me(e, t);
                    0 === n.length ? C.removeClass(this.$$element, r) : 0 === r.length ? C.addClass(this.$$element, n) : C.setClass(this.$$element, n, r)
                }, $set: function (t, e, r, i) {
                    var s = ve(this.$$element[0], t);
                    s && (this.$$element.prop(t, e), i = s), this[t] = e, i ? this.$attr[t] = i : (i = this.$attr[t]) || (this.$attr[t] = i = W(t, "-")), s = Jn(this.$$element), ("A" === s && "href" === t || "IMG" === s && "src" === t) && (this[t] = e = k(e, "src" === t)), !1 !== r && (null === e || e === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, e)), (r = this.$$observers) && o(r[t], function (t) {
                        try {
                            t(e)
                        } catch (n) {
                            u(n)
                        }
                    })
                }, $observe: function (t, e) {
                    var n = this, r = n.$$observers || (n.$$observers = {}), i = r[t] || (r[t] = []);
                    return i.push(e), m.$evalAsync(function () {
                        i.$$inter || e(n[t])
                    }), e
                }
            };
            var K = r.startSymbol(), Z = r.endSymbol(), Y = "{{" == K || "}}" == Z ? d : function (t) {
                return t.replace(/\{\{/g, K).replace(/}}/g, Z)
            }, te = /^ngAttr[A-Z]/;
            return A
        }]
    }

    function Te(t) {
        return te(t.replace(Dr, ""))
    }

    function Me(t, e) {
        var n = "", r = t.split(/\s+/), i = e.split(/\s+/), o = 0;
        t:for (; o < r.length; o++) {
            for (var s = r[o], a = 0; a < i.length; a++)if (s == i[a])continue t;
            n += (0 < n.length ? " " : "") + s
        }
        return n
    }

    function Ne() {
        var t = {}, e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (e, n) {
            J(e, "controller"), y(e) ? f(t, e) : t[e] = n
        }, this.$get = ["$injector", "$window", function (n, i) {
            return function (o, s) {
                var a, u, c;
                if (w(o) && (a = o.match(e), u = a[1], c = a[3], o = t.hasOwnProperty(u) ? t[u] : X(s.$scope, u, !0) || X(i, u, !0), G(o, u, !0)), a = n.instantiate(o, s), c) {
                    if (!s || "object" != typeof s.$scope)throw r("$controller")("noscp", u || o.name, c);
                    s.$scope[c] = a
                }
                return a
            }
        }]
    }

    function Pe() {
        this.$get = ["$window", function (t) {
            return Wn(t.document)
        }]
    }

    function je() {
        this.$get = ["$log", function (t) {
            return function () {
                t.error.apply(t, arguments)
            }
        }]
    }

    function De(t) {
        var e, n, r, i = {};
        return t ? (o(t.split("\n"), function (t) {
            r = t.indexOf(":"), e = Kn(ar(t.substr(0, r))), n = ar(t.substr(r + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
        }), i) : i
    }

    function Re(t) {
        var e = y(t) ? t : n;
        return function (n) {
            return e || (e = De(t)), n ? e[Kn(n)] || null : e
        }
    }

    function Ve(t, e, n) {
        return S(n) ? n(t, e) : (o(n, function (n) {
            t = n(t, e)
        }), t)
    }

    function Ue() {
        var t = /^\s*(\[|\{[^\{])/, e = /[\}\]]\s*$/, r = /^\)\]\}',?\n/, i = {"Content-Type": "application/json;charset=utf-8"}, s = this.defaults = {
            transformResponse: [function (n) {
                return w(n) && (n = n.replace(r, ""), t.test(n) && e.test(n) && (n = V(n))), n
            }],
            transformRequest: [function (t) {
                return y(t) && "[object File]" !== nr.call(t) && "[object Blob]" !== nr.call(t) ? R(t) : t
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: N(i), put: N(i), patch: N(i)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, u = this.interceptors = [], c = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (t, e, r, i, l, h) {
            function p(t) {
                function e(t) {
                    var e = f({}, t, {data: Ve(t.data, t.headers, r.transformResponse)});
                    return 200 <= t.status && 300 > t.status ? e : l.reject(e)
                }

                var r = {
                    method: "get",
                    transformRequest: s.transformRequest,
                    transformResponse: s.transformResponse
                }, i = function (t) {
                    var e, n, r = s.headers, i = f({}, t.headers), r = f({}, r.common, r[Kn(t.method)]);
                    t:for (e in r) {
                        t = Kn(e);
                        for (n in i)if (Kn(n) === t)continue t;
                        i[e] = r[e]
                    }
                    return function (t) {
                        var e;
                        o(t, function (n, r) {
                            S(n) && (e = n(), null != e ? t[r] = e : delete t[r])
                        })
                    }(i), i
                }(t);
                f(r, t), r.headers = i, r.method = Yn(r.method);
                var a = [function (t) {
                    i = t.headers;
                    var n = Ve(t.data, Re(i), t.transformRequest);
                    return g(n) && o(i, function (t, e) {
                        "content-type" === Kn(e) && delete i[e]
                    }), g(t.withCredentials) && !g(s.withCredentials) && (t.withCredentials = s.withCredentials), $(t, n, i).then(e, e)
                }, n], u = l.when(r);
                for (o(b, function (t) {
                    (t.request || t.requestError) && a.unshift(t.request, t.requestError), (t.response || t.responseError) && a.push(t.response, t.responseError)
                }); a.length;) {
                    t = a.shift();
                    var c = a.shift(), u = u.then(t, c)
                }
                return u.success = function (t) {
                    return u.then(function (e) {
                        t(e.data, e.status, e.headers, r)
                    }), u
                }, u.error = function (t) {
                    return u.then(null, function (e) {
                        t(e.data, e.status, e.headers, r)
                    }), u
                }, u
            }

            function $(r, o, a) {
                function u(t, e, n, r) {
                    h && (t >= 200 && 300 > t ? h.put(x, [t, e, De(n), r]) : h.remove(x)), c(e, t, n, r), i.$$phase || i.$apply()
                }

                function c(t, e, n, i) {
                    e = Math.max(e, 0), (e >= 200 && 300 > e ? w.resolve : w.reject)({
                        data: t,
                        status: e,
                        headers: Re(n),
                        config: r,
                        statusText: i
                    })
                }

                function f() {
                    var t = O(p.pendingRequests, r);
                    -1 !== t && p.pendingRequests.splice(t, 1)
                }

                var h, $, w = l.defer(), b = w.promise, x = d(r.url, r.params);
                if (p.pendingRequests.push(r), b.then(f, f), !r.cache && !s.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (h = y(r.cache) ? r.cache : y(s.cache) ? s.cache : v), h)if ($ = h.get(x), m($)) {
                    if ($ && S($.then))return $.then(f, f), $;
                    sr($) ? c($[1], $[0], N($[2]), $[3]) : c($, 200, {}, "OK")
                } else h.put(x, b);
                return g($) && (($ = Cn(r.url) ? e.cookies()[r.xsrfCookieName || s.xsrfCookieName] : n) && (a[r.xsrfHeaderName || s.xsrfHeaderName] = $), t(r.method, x, o, u, a, r.timeout, r.withCredentials, r.responseType)), b
            }

            function d(t, e) {
                if (!e)return t;
                var n = [];
                return a(e, function (t, e) {
                    null === t || g(t) || (sr(t) || (t = [t]), o(t, function (t) {
                        y(t) && (t = x(t) ? t.toISOString() : R(t)), n.push(L(e) + "=" + L(t))
                    }))
                }), 0 < n.length && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
            }

            var v = r("$http"), b = [];
            return o(u, function (t) {
                b.unshift(w(t) ? h.get(t) : h.invoke(t))
            }), o(c, function (t, e) {
                var n = w(t) ? h.get(t) : h.invoke(t);
                b.splice(e, 0, {
                    response: function (t) {
                        return n(l.when(t))
                    }, responseError: function (t) {
                        return n(l.reject(t))
                    }
                })
            }), p.pendingRequests = [], function () {
                o(arguments, function (t) {
                    p[t] = function (e, n) {
                        return p(f(n || {}, {method: t, url: e}))
                    }
                })
            }("get", "delete", "head", "jsonp"), function () {
                o(arguments, function (t) {
                    p[t] = function (e, n, r) {
                        return p(f(r || {}, {method: t, url: e, data: n}))
                    }
                })
            }("post", "put", "patch"), p.defaults = s, p
        }]
    }

    function qe(e) {
        if (8 >= Bn && (!e.match(/^(get|post|head|put|delete|options)$/i) || !t.XMLHttpRequest))return new t.ActiveXObject("Microsoft.XMLHTTP");
        if (t.XMLHttpRequest)return new t.XMLHttpRequest;
        throw r("$httpBackend")("noxhr")
    }

    function Fe() {
        this.$get = ["$browser", "$window", "$document", function (t, e, n) {
            return _e(t, qe, t.defer, e.angular.callbacks, n[0])
        }]
    }

    function _e(t, e, n, r, i) {
        function s(t, e, n) {
            var o = i.createElement("script"), s = null;
            return o.type = "text/javascript", o.src = t, o.async = !0, s = function (t) {
                $r(o, "load", s), $r(o, "error", s), i.body.removeChild(o), o = null;
                var a = -1, u = "unknown";
                t && ("load" !== t.type || r[e].called || (t = {type: "error"}), u = t.type, a = "error" === t.type ? 404 : 200), n && n(a, u)
            }, pr(o, "load", s), pr(o, "error", s), 8 >= Bn && (o.onreadystatechange = function () {
                w(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, s({type: "load"}))
            }), i.body.appendChild(o), s
        }

        var a = -1;
        return function (i, u, c, l, f, h, p, d) {
            function v() {
                y = a, b && b(), x && x.abort()
            }

            function g(e, r, i, o, s) {
                k && n.cancel(k), b = x = null, 0 === r && (r = i ? 200 : "file" == Sn(u).protocol ? 404 : 0), e(1223 === r ? 204 : r, i, o, s || ""), t.$$completeOutstandingRequest($)
            }

            var y;
            if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Kn(i)) {
                var w = "_" + (r.counter++).toString(36);
                r[w] = function (t) {
                    r[w].data = t, r[w].called = !0
                };
                var b = s(u.replace("JSON_CALLBACK", "angular.callbacks." + w), w, function (t, e) {
                    g(l, t, r[w].data, "", e), r[w] = $
                })
            } else {
                var x = e(i);
                if (x.open(i, u, !0), o(f, function (t, e) {
                        m(t) && x.setRequestHeader(e, t)
                    }), x.onreadystatechange = function () {
                        if (x && 4 == x.readyState) {
                            var t = null, e = null, n = "";
                            y !== a && (t = x.getAllResponseHeaders(), e = "response"in x ? x.response : x.responseText), y === a && 10 > Bn || (n = x.statusText), g(l, y || x.status, e, t, n)
                        }
                    }, p && (x.withCredentials = !0), d)try {
                    x.responseType = d
                } catch (C) {
                    if ("json" !== d)throw C
                }
                x.send(c || null)
            }
            if (h > 0)var k = n(v, h); else h && S(h.then) && h.then(v)
        }
    }

    function Ie() {
        var t = "{{", e = "}}";
        this.startSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
            function o(o, u, c) {
                for (var l, f, h = 0, p = [], $ = o.length, d = !1, v = []; $ > h;)-1 != (l = o.indexOf(t, h)) && -1 != (f = o.indexOf(e, l + s)) ? (h != l && p.push(o.substring(h, l)), p.push(h = n(d = o.substring(l + s, f))), h.exp = d, h = f + a, d = !0) : (h != $ && p.push(o.substring(h)), h = $);
                if (($ = p.length) || (p.push(""), $ = 1), c && 1 < p.length)throw Rr("noconcat", o);
                return !u || d ? (v.length = $, h = function (t) {
                    try {
                        for (var e, n = 0, s = $; s > n; n++) {
                            if ("function" == typeof(e = p[n]))if (e = e(t), e = c ? i.getTrusted(c, e) : i.valueOf(e), null == e)e = ""; else switch (typeof e) {
                                case"string":
                                    break;
                                case"number":
                                    e = "" + e;
                                    break;
                                default:
                                    e = R(e)
                            }
                            v[n] = e
                        }
                        return v.join("")
                    } catch (a) {
                        t = Rr("interr", o, a.toString()), r(t)
                    }
                }, h.exp = o, h.parts = p, h) : void 0
            }

            var s = t.length, a = e.length;
            return o.startSymbol = function () {
                return t
            }, o.endSymbol = function () {
                return e
            }, o
        }]
    }

    function He() {
        this.$get = ["$rootScope", "$window", "$q", function (t, e, n) {
            function r(r, o, s, a) {
                var u = e.setInterval, c = e.clearInterval, l = n.defer(), f = l.promise, h = 0, p = m(a) && !a;
                return s = m(s) ? s : 0, f.then(null, null, r), f.$$intervalId = u(function () {
                    l.notify(h++), s > 0 && h >= s && (l.resolve(h), c(f.$$intervalId), delete i[f.$$intervalId]), p || t.$apply()
                }, o), i[f.$$intervalId] = l, f
            }

            var i = {};
            return r.cancel = function (t) {
                return t && t.$$intervalId in i ? (i[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete i[t.$$intervalId], !0) : !1
            }, r
        }]
    }

    function Le() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "Â¤",
                        posSuf: "",
                        negPre: "(Â¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (t) {
                    return 1 === t ? "one" : "other"
                }
            }
        }
    }

    function ze(t) {
        t = t.split("/");
        for (var e = t.length; e--;)t[e] = H(t[e]);
        return t.join("/")
    }

    function Be(t, e, n) {
        t = Sn(t, n), e.$$protocol = t.protocol, e.$$host = t.hostname, e.$$port = h(t.port) || Ur[t.protocol] || null
    }

    function We(t, e, n) {
        var r = "/" !== t.charAt(0);
        r && (t = "/" + t), t = Sn(t, n), e.$$path = decodeURIComponent(r && "/" === t.pathname.charAt(0) ? t.pathname.substring(1) : t.pathname), e.$$search = _(t.search), e.$$hash = decodeURIComponent(t.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function Qe(t, e) {
        return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
    }

    function Ge(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e)
    }

    function Je(t) {
        return t.substr(0, Ge(t).lastIndexOf("/") + 1)
    }

    function Xe(t, e) {
        this.$$html5 = !0, e = e || "";
        var r = Je(t);
        Be(t, this, t), this.$$parse = function (e) {
            var n = Qe(r, e);
            if (!w(n))throw qr("ipthprfx", e, r);
            We(n, this, t), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var t = I(this.$$search), e = this.$$hash ? "#" + H(this.$$hash) : "";
            this.$$url = ze(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = r + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (i) {
            var o, s;
            return (o = Qe(t, i)) !== n ? (s = o, s = (o = Qe(e, o)) !== n ? r + (Qe("/", o) || o) : t + s) : (o = Qe(r, i)) !== n ? s = r + o : r == i + "/" && (s = r), s && this.$$parse(s), !!s
        }
    }

    function Ke(t, e) {
        var n = Je(t);
        Be(t, this, t), this.$$parse = function (r) {
            var i = Qe(t, r) || Qe(n, r), i = "#" == i.charAt(0) ? Qe(e, i) : this.$$html5 ? i : "";
            if (!w(i))throw qr("ihshprfx", r, e);
            We(i, this, t), r = this.$$path;
            var o = /^\/[A-Z]:(\/.*)/;
            0 === i.indexOf(t) && (i = i.replace(t, "")), o.exec(i) || (r = (i = o.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose()
        }, this.$$compose = function () {
            var n = I(this.$$search), r = this.$$hash ? "#" + H(this.$$hash) : "";
            this.$$url = ze(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
        }, this.$$parseLinkUrl = function (e) {
            return Ge(t) == Ge(e) ? (this.$$parse(e), !0) : !1
        }
    }

    function Ze(t, e) {
        this.$$html5 = !0, Ke.apply(this, arguments);
        var n = Je(t);
        this.$$parseLinkUrl = function (r) {
            var i, o;
            return t == Ge(r) ? i = r : (o = Qe(n, r)) ? i = t + e + o : n === r + "/" && (i = n), i && this.$$parse(i), !!i
        }, this.$$compose = function () {
            var n = I(this.$$search), r = this.$$hash ? "#" + H(this.$$hash) : "";
            this.$$url = ze(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + e + this.$$url
        }
    }

    function Ye(t) {
        return function () {
            return this[t]
        }
    }

    function tn(t, e) {
        return function (n) {
            return g(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function en() {
        var e = "", n = !1;
        this.hashPrefix = function (t) {
            return m(t) ? (e = t, this) : e
        }, this.html5Mode = function (t) {
            return m(t) ? (n = t, this) : n
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (r, i, o, s) {
            function a(t) {
                r.$broadcast("$locationChangeSuccess", u.absUrl(), t)
            }

            var u, c = i.baseHref(), l = i.url();
            n ? (c = l.substring(0, l.indexOf("/", l.indexOf("//") + 2)) + (c || "/"), o = o.history ? Xe : Ze) : (c = Ge(l), o = Ke), u = new o(c, "#" + e), u.$$parseLinkUrl(l, l);
            var f = /^\s*(javascript|mailto):/i;
            s.on("click", function (e) {
                if (!e.ctrlKey && !e.metaKey && 2 != e.which) {
                    for (var n = Wn(e.target); "a" !== Kn(n[0].nodeName);)if (n[0] === s[0] || !(n = n.parent())[0])return;
                    var o = n.prop("href"), a = n.attr("href") || n.attr("xlink:href");
                    y(o) && "[object SVGAnimatedString]" === o.toString() && (o = Sn(o.animVal).href), f.test(o) || !o || n.attr("target") || e.isDefaultPrevented() || !u.$$parseLinkUrl(o, a) || (e.preventDefault(), u.absUrl() != i.url() && (r.$apply(), t.angular["ff-684208-preventDefault"] = !0))
                }
            }), u.absUrl() != l && i.url(u.absUrl(), !0), i.onUrlChange(function (t) {
                u.absUrl() != t && (r.$evalAsync(function () {
                    var e = u.absUrl();
                    u.$$parse(t), r.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (u.$$parse(e), i.url(e)) : a(e)
                }), r.$$phase || r.$digest())
            });
            var h = 0;
            return r.$watch(function () {
                var t = i.url(), e = u.$$replace;
                return h && t == u.absUrl() || (h++, r.$evalAsync(function () {
                    r.$broadcast("$locationChangeStart", u.absUrl(), t).defaultPrevented ? u.$$parse(t) : (i.url(u.absUrl(), e), a(t))
                })), u.$$replace = !1, h
            }), u
        }]
    }

    function nn() {
        var t = !0, e = this;
        this.debugEnabled = function (e) {
            return m(e) ? (t = e, this) : t
        }, this.$get = ["$window", function (n) {
            function r(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function i(t) {
                var e = n.console || {}, i = e[t] || e.log || $;
                t = !1;
                try {
                    t = !!i.apply
                } catch (s) {
                }
                return t ? function () {
                    var t = [];
                    return o(arguments, function (e) {
                        t.push(r(e))
                    }), i.apply(e, t)
                } : function (t, e) {
                    i(t, null == e ? "" : e)
                }
            }

            return {
                log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
                    var n = i("debug");
                    return function () {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function rn(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t)throw _r("isecfld", e);
        return t
    }

    function on(t, e) {
        if (t) {
            if (t.constructor === t)throw _r("isecfn", e);
            if (t.document && t.location && t.alert && t.setInterval)throw _r("isecwindow", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find))throw _r("isecdom", e);
            if (t === Object)throw _r("isecobj", e)
        }
        return t
    }

    function sn(t, e, r, i, o) {
        on(t, i), o = o || {}, e = e.split(".");
        for (var s, a = 0; 1 < e.length; a++) {
            s = rn(e.shift(), i);
            var u = on(t[s], i);
            u || (u = {}, t[s] = u), t = u, t.then && o.unwrapPromises && (Fr(i), "$$v"in t || function (t) {
                t.then(function (e) {
                    t.$$v = e
                })
            }(t), t.$$v === n && (t.$$v = {}), t = t.$$v)
        }
        return s = rn(e.shift(), i), on(t[s], i), t[s] = r
    }

    function an(t) {
        return "constructor" == t
    }

    function un(t, e, r, i, o, s, a) {
        rn(t, s), rn(e, s), rn(r, s), rn(i, s), rn(o, s);
        var u = function (t) {
            return on(t, s)
        }, c = a.expensiveChecks, l = c || an(t) ? u : d, f = c || an(e) ? u : d, h = c || an(r) ? u : d, p = c || an(i) ? u : d, $ = c || an(o) ? u : d;
        return a.unwrapPromises ? function (a, u) {
            var c, d = u && u.hasOwnProperty(t) ? u : a;
            return null == d ? d : ((d = l(d[t])) && d.then && (Fr(s), "$$v"in d || (c = d, c.$$v = n, c.then(function (t) {
                c.$$v = l(t)
            })), d = l(d.$$v)), e ? null == d ? n : ((d = f(d[e])) && d.then && (Fr(s), "$$v"in d || (c = d, c.$$v = n, c.then(function (t) {
                c.$$v = f(t)
            })), d = f(d.$$v)), r ? null == d ? n : ((d = h(d[r])) && d.then && (Fr(s), "$$v"in d || (c = d, c.$$v = n, c.then(function (t) {
                c.$$v = h(t)
            })), d = h(d.$$v)), i ? null == d ? n : ((d = p(d[i])) && d.then && (Fr(s), "$$v"in d || (c = d, c.$$v = n, c.then(function (t) {
                c.$$v = p(t)
            })), d = p(d.$$v)), o ? null == d ? n : ((d = $(d[o])) && d.then && (Fr(s), "$$v"in d || (c = d, c.$$v = n, c.then(function (t) {
                c.$$v = $(t)
            })), d = $(d.$$v)), d) : d) : d) : d) : d)
        } : function (s, a) {
            var u = a && a.hasOwnProperty(t) ? a : s;
            return null == u ? u : (u = l(u[t]), e ? null == u ? n : (u = f(u[e]), r ? null == u ? n : (u = h(u[r]), i ? null == u ? n : (u = p(u[i]), o ? null == u ? n : u = $(u[o]) : u) : u) : u) : u)
        }
    }

    function cn(t, e) {
        return function (n, r) {
            return t(n, r, Fr, on, e)
        }
    }

    function ln(t, e, r) {
        var i = e.expensiveChecks, s = i ? Xr : Jr;
        if (s.hasOwnProperty(t))return s[t];
        var a, u = t.split("."), c = u.length;
        if (e.csp)a = 6 > c ? un(u[0], u[1], u[2], u[3], u[4], r, e) : function (t, i) {
            var o, s = 0;
            do o = un(u[s++], u[s++], u[s++], u[s++], u[s++], r, e)(t, i), i = n, t = o; while (c > s);
            return o
        }; else {
            var l = "var p;\n";
            i && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var f = i;
            o(u, function (t, n) {
                rn(t, r);
                var o = (n ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + '["' + t + '"]', s = i || an(t);
                s && (o = "eso(" + o + ", fe)", f = !0), l += "if(s == null) return undefined;\ns=" + o + ";\n", e.unwrapPromises && (l += 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (s ? "eso(v)" : "v") + ";});\n}\n s=" + (s ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
            }), l += "return s;", a = new Function("s", "l", "pw", "eso", "fe", l), a.toString = v(l), (f || e.unwrapPromises) && (a = cn(a, r))
        }
        return "hasOwnProperty" !== t && (s[t] = a), a
    }

    function fn() {
        var t = {}, e = {}, n = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0, expensiveChecks: !1};
        this.unwrapPromises = function (t) {
            return m(t) ? (n.unwrapPromises = !!t, this) : n.unwrapPromises
        }, this.logPromiseWarnings = function (t) {
            return m(t) ? (n.logPromiseWarnings = t, this) : n.logPromiseWarnings
        }, this.$get = ["$filter", "$sniffer", "$log", function (r, i, o) {
            n.csp = i.csp;
            var s = {
                csp: n.csp,
                unwrapPromises: n.unwrapPromises,
                logPromiseWarnings: n.logPromiseWarnings,
                expensiveChecks: !0
            };
            return Fr = function (t) {
                n.logPromiseWarnings && !Ir.hasOwnProperty(t) && (Ir[t] = !0, o.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            }, function (i, o) {
                var a;
                switch (typeof i) {
                    case"string":
                        var u = o ? e : t;
                        if (u.hasOwnProperty(i))return u[i];
                        a = o ? s : n;
                        var c = new Qr(a);
                        return a = new Gr(c, r, a).parse(i), "hasOwnProperty" !== i && (u[i] = a), a;
                    case"function":
                        return i;
                    default:
                        return $
                }
            }
        }]
    }

    function hn() {
        this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
            return pn(function (e) {
                t.$evalAsync(e)
            }, e)
        }]
    }

    function pn(t, e) {
        function r(t) {
            return t
        }

        function i(t) {
            return u(t)
        }

        var s = function () {
            var o, u, l = [];
            return u = {
                resolve: function (e) {
                    if (l) {
                        var r = l;
                        l = n, o = a(e), r.length && t(function () {
                            for (var t, e = 0, n = r.length; n > e; e++)t = r[e], o.then(t[0], t[1], t[2])
                        })
                    }
                }, reject: function (t) {
                    u.resolve(c(t))
                }, notify: function (e) {
                    if (l) {
                        var n = l;
                        l.length && t(function () {
                            for (var t, r = 0, i = n.length; i > r; r++)t = n[r], t[2](e)
                        })
                    }
                }, promise: {
                    then: function (t, n, a) {
                        var u = s(), c = function (n) {
                            try {
                                u.resolve((S(t) ? t : r)(n))
                            } catch (i) {
                                u.reject(i), e(i)
                            }
                        }, f = function (t) {
                            try {
                                u.resolve((S(n) ? n : i)(t))
                            } catch (r) {
                                u.reject(r), e(r)
                            }
                        }, h = function (t) {
                            try {
                                u.notify((S(a) ? a : r)(t))
                            } catch (n) {
                                e(n)
                            }
                        };
                        return l ? l.push([c, f, h]) : o.then(c, f, h), u.promise
                    }, "catch": function (t) {
                        return this.then(null, t)
                    }, "finally": function (t) {
                        function e(t, e) {
                            var n = s();
                            return e ? n.resolve(t) : n.reject(t), n.promise
                        }

                        function n(n, i) {
                            var o = null;
                            try {
                                o = (t || r)()
                            } catch (s) {
                                return e(s, !1)
                            }
                            return o && S(o.then) ? o.then(function () {
                                return e(n, i)
                            }, function (t) {
                                return e(t, !1)
                            }) : e(n, i)
                        }

                        return this.then(function (t) {
                            return n(t, !0)
                        }, function (t) {
                            return n(t, !1)
                        })
                    }
                }
            }
        }, a = function (e) {
            return e && S(e.then) ? e : {
                then: function (n) {
                    var r = s();
                    return t(function () {
                        r.resolve(n(e))
                    }), r.promise
                }
            }
        }, u = function (t) {
            var e = s();
            return e.reject(t), e.promise
        }, c = function (n) {
            return {
                then: function (r, o) {
                    var a = s();
                    return t(function () {
                        try {
                            a.resolve((S(o) ? o : i)(n))
                        } catch (t) {
                            a.reject(t), e(t)
                        }
                    }), a.promise
                }
            }
        };
        return {
            defer: s, reject: u, when: function (n, o, c, l) {
                var f, h = s(), p = function (t) {
                    try {
                        return (S(o) ? o : r)(t)
                    } catch (n) {
                        return e(n), u(n)
                    }
                }, $ = function (t) {
                    try {
                        return (S(c) ? c : i)(t)
                    } catch (n) {
                        return e(n), u(n)
                    }
                }, d = function (t) {
                    try {
                        return (S(l) ? l : r)(t)
                    } catch (n) {
                        e(n)
                    }
                };
                return t(function () {
                    a(n).then(function (t) {
                        f || (f = !0, h.resolve(a(t).then(p, $, d)))
                    }, function (t) {
                        f || (f = !0, h.resolve($(t)))
                    }, function (t) {
                        f || h.notify(d(t))
                    })
                }), h.promise
            }, all: function (t) {
                var e = s(), n = 0, r = sr(t) ? [] : {};
                return o(t, function (t, i) {
                    n++, a(t).then(function (t) {
                        r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                    }, function (t) {
                        r.hasOwnProperty(i) || e.reject(t)
                    })
                }), 0 === n && e.resolve(r), e.promise
            }
        }
    }

    function $n() {
        this.$get = ["$window", "$timeout", function (t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame, r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function (t) {
                var e = n(t);
                return function () {
                    r(e)
                }
            } : function (t) {
                var n = e(t, 16.66, !1);
                return function () {
                    e.cancel(n)
                }
            };
            return o.supported = i, o
        }]
    }

    function dn() {
        var t = 10, e = r("$rootScope"), n = null;
        this.digestTtl = function (e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, s, a, u) {
            function l() {
                this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
            }

            function f(t) {
                if (v.$$phase)throw e("inprog", v.$$phase);
                v.$$phase = t
            }

            function h(t, e) {
                var n = a(t);
                return G(n, e), n
            }

            function p(t, e, n) {
                do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
            }

            function d() {
            }

            l.prototype = {
                constructor: l, $new: function (t) {
                    return t ? (t = new l, t.$root = this.$root, t.$$asyncQueue = this.$$asyncQueue, t.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = c(), this.$$childScopeClass = null
                    }, this.$$childScopeClass.prototype = this), t = new this.$$childScopeClass), t["this"] = t, t.$parent = this, t.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = t : this.$$childHead = this.$$childTail = t, t
                }, $watch: function (t, e, r) {
                    var i = h(t, "watch"), o = this.$$watchers, s = {fn: e, last: d, get: i, exp: t, eq: !!r};
                    if (n = null, !S(e)) {
                        var a = h(e || $, "listener");
                        s.fn = function (t, e, n) {
                            a(n)
                        }
                    }
                    if ("string" == typeof t && i.constant) {
                        var u = s.fn;
                        s.fn = function (t, e, n) {
                            u.call(this, t, e, n), T(o, s)
                        }
                    }
                    return o || (o = this.$$watchers = []), o.unshift(s), function () {
                        T(o, s), n = null
                    }
                }, $watchCollection: function (t, e) {
                    var n, r, o, s = this, u = 1 < e.length, c = 0, l = a(t), f = [], h = {}, p = !0, $ = 0;
                    return this.$watch(function () {
                        n = l(s);
                        var t, e, o;
                        if (y(n))if (i(n))for (r !== f && (r = f, $ = r.length = 0, c++), t = n.length, $ !== t && (c++, r.length = $ = t), e = 0; t > e; e++)o = r[e] !== r[e] && n[e] !== n[e], o || r[e] === n[e] || (c++, r[e] = n[e]); else {
                            r !== h && (r = h = {}, $ = 0, c++), t = 0;
                            for (e in n)n.hasOwnProperty(e) && (t++, r.hasOwnProperty(e) ? (o = r[e] !== r[e] && n[e] !== n[e], o || r[e] === n[e] || (c++, r[e] = n[e])) : ($++, r[e] = n[e], c++));
                            if ($ > t)for (e in c++, r)r.hasOwnProperty(e) && !n.hasOwnProperty(e) && ($--, delete r[e])
                        } else r !== n && (r = n, c++);
                        return c
                    }, function () {
                        if (p ? (p = !1, e(n, n, s)) : e(n, o, s), u)if (y(n))if (i(n)) {
                            o = Array(n.length);
                            for (var t = 0; t < n.length; t++)o[t] = n[t]
                        } else for (t in o = {}, n)Zn.call(n, t) && (o[t] = n[t]); else o = n
                    })
                }, $digest: function () {
                    var r, i, o, a, c, l, h, p, $, g, m = this.$$asyncQueue, y = this.$$postDigestQueue, w = t, b = [];
                    f("$digest"), u.$$checkUrlChange(), n = null;
                    do {
                        for (l = !1, h = this; m.length;) {
                            try {
                                g = m.shift(), g.scope.$eval(g.expression)
                            } catch (x) {
                                v.$$phase = null, s(x)
                            }
                            n = null
                        }
                        t:do {
                            if (a = h.$$watchers)for (c = a.length; c--;)try {
                                if (r = a[c])if ((i = r.get(h)) === (o = r.last) || (r.eq ? P(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
                                    if (r === n) {
                                        l = !1;
                                        break t
                                    }
                                } else l = !0, n = r, r.last = r.eq ? M(i, null) : i, r.fn(i, o === d ? i : o, h), 5 > w && (p = 4 - w, b[p] || (b[p] = []), $ = S(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, $ += "; newVal: " + R(i) + "; oldVal: " + R(o), b[p].push($))
                            } catch (C) {
                                v.$$phase = null, s(C)
                            }
                            if (!(a = h.$$childHead || h !== this && h.$$nextSibling))for (; h !== this && !(a = h.$$nextSibling);)h = h.$parent
                        } while (h = a);
                        if ((l || m.length) && !w--)throw v.$$phase = null, e("infdig", t, R(b))
                    } while (l || m.length);
                    for (v.$$phase = null; y.length;)try {
                        y.shift()()
                    } catch (k) {
                        s(k)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== v && (o(this.$$listenerCount, j(null, p, this)), t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = $, this.$on = this.$watch = function () {
                            return $
                        })
                    }
                }, $eval: function (t, e) {
                    return a(t)(this, e)
                }, $evalAsync: function (t) {
                    v.$$phase || v.$$asyncQueue.length || u.defer(function () {
                        v.$$asyncQueue.length && v.$digest()
                    }), this.$$asyncQueue.push({scope: this, expression: t})
                }, $$postDigest: function (t) {
                    this.$$postDigestQueue.push(t)
                }, $apply: function (t) {
                    try {
                        return f("$apply"), this.$eval(t)
                    } catch (e) {
                        s(e)
                    } finally {
                        v.$$phase = null;
                        try {
                            v.$digest()
                        } catch (n) {
                            throw s(n), n
                        }
                    }
                }, $on: function (t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var r = this;
                    do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
                    var i = this;
                    return function () {
                        var r = O(n, e);
                        -1 !== r && (n[r] = null, p(i, 1, t))
                    }
                }, $emit: function (t) {
                    var e, n, r, i = [], o = this, a = !1, u = {
                        name: t, targetScope: o, stopPropagation: function () {
                            a = !0
                        }, preventDefault: function () {
                            u.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, c = [u].concat(tr.call(arguments, 1));
                    do {
                        for (e = o.$$listeners[t] || i, u.currentScope = o, n = 0, r = e.length; r > n; n++)if (e[n])try {
                            e[n].apply(null, c)
                        } catch (l) {
                            s(l)
                        } else e.splice(n, 1), n--, r--;
                        if (a)break;
                        o = o.$parent
                    } while (o);
                    return u
                }, $broadcast: function (t) {
                    for (var e, n, r = this, i = this, o = {
                        name: t, targetScope: this, preventDefault: function () {
                            o.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, a = [o].concat(tr.call(arguments, 1)); r = i;) {
                        for (o.currentScope = r, i = r.$$listeners[t] || [], e = 0, n = i.length; n > e; e++)if (i[e])try {
                            i[e].apply(null, a)
                        } catch (u) {
                            s(u)
                        } else i.splice(e, 1), e--, n--;
                        if (!(i = r.$$listenerCount[t] && r.$$childHead || r !== this && r.$$nextSibling))for (; r !== this && !(i = r.$$nextSibling);)r = r.$parent
                    }
                    return o
                }
            };
            var v = new l;
            return v
        }]
    }

    function vn() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (e) {
            return m(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return m(t) ? (e = t, this) : e
        }, this.$get = function () {
            return function (n, r) {
                var i, o = r ? e : t;
                return Bn && !(Bn >= 8) || (i = Sn(n).href, "" === i || i.match(o)) ? n : "unsafe:" + i
            }
        }
    }

    function gn(t) {
        if ("self" === t)return t;
        if (w(t)) {
            if (-1 < t.indexOf("***"))throw Kr("iwcard", t);
            return t = t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + t + "$")
        }
        if (C(t))return RegExp("^" + t.source + "$");
        throw Kr("imatcher")
    }

    function mn(t) {
        var e = [];
        return m(t) && o(t, function (t) {
            e.push(gn(t))
        }), e
    }

    function yn() {
        this.SCE_CONTEXTS = Zr;
        var t = ["self"], e = [];
        this.resourceUrlWhitelist = function (e) {
            return arguments.length && (t = mn(e)), t
        }, this.resourceUrlBlacklist = function (t) {
            return arguments.length && (e = mn(t)), e
        }, this.$get = ["$injector", function (r) {
            function i(t) {
                var e = function (t) {
                    this.$$unwrapTrustedValue = function () {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }

            var o = function () {
                throw Kr("unsafe")
            };
            r.has("$sanitize") && (o = r.get("$sanitize"));
            var s = i(), a = {};
            return a[Zr.HTML] = i(s), a[Zr.CSS] = i(s), a[Zr.URL] = i(s), a[Zr.JS] = i(s), a[Zr.RESOURCE_URL] = i(a[Zr.URL]), {
                trustAs: function (t, e) {
                    var r = a.hasOwnProperty(t) ? a[t] : null;
                    if (!r)throw Kr("icontext", t, e);
                    if (null === e || e === n || "" === e)return e;
                    if ("string" != typeof e)throw Kr("itype", t);
                    return new r(e)
                }, getTrusted: function (r, i) {
                    if (null === i || i === n || "" === i)return i;
                    var s = a.hasOwnProperty(r) ? a[r] : null;
                    if (s && i instanceof s)return i.$$unwrapTrustedValue();
                    if (r === Zr.RESOURCE_URL) {
                        var u, c, s = Sn(i.toString()), l = !1;
                        for (u = 0, c = t.length; c > u; u++)if ("self" === t[u] ? Cn(s) : t[u].exec(s.href)) {
                            l = !0;
                            break
                        }
                        if (l)for (u = 0, c = e.length; c > u; u++)if ("self" === e[u] ? Cn(s) : e[u].exec(s.href)) {
                            l = !1;
                            break
                        }
                        if (l)return i;
                        throw Kr("insecurl", i.toString())
                    }
                    if (r === Zr.HTML)return o(i);
                    throw Kr("unsafe")
                }, valueOf: function (t) {
                    return t instanceof s ? t.$$unwrapTrustedValue() : t
                }
            }
        }]
    }

    function wn() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function (e, n, r) {
            if (t && n.msie && 8 > n.msieDocumentMode)throw Kr("iequirks");
            var i = N(Zr);
            i.isEnabled = function () {
                return t
            }, i.trustAs = r.trustAs, i.getTrusted = r.getTrusted, i.valueOf = r.valueOf, t || (i.trustAs = i.getTrusted = function (t, e) {
                return e
            }, i.valueOf = d), i.parseAs = function (t, n) {
                var r = e(n);
                return r.literal && r.constant ? r : function (e, n) {
                    return i.getTrusted(t, r(e, n))
                }
            };
            var s = i.parseAs, a = i.getTrusted, u = i.trustAs;
            return o(Zr, function (t, e) {
                var n = Kn(e);
                i[te("parse_as_" + n)] = function (e) {
                    return s(t, e)
                }, i[te("get_trusted_" + n)] = function (e) {
                    return a(t, e)
                }, i[te("trust_as_" + n)] = function (e) {
                    return u(t, e)
                }
            }), i
        }]
    }

    function bn() {
        this.$get = ["$window", "$document", function (t, e) {
            var n, r = {}, i = h((/android (\d+)/.exec(Kn((t.navigator || {}).userAgent)) || [])[1]), o = /Boxee/i.test((t.navigator || {}).userAgent), s = e[0] || {}, a = s.documentMode, u = /^(Moz|webkit|O|ms)(?=[A-Z])/, c = s.body && s.body.style, l = !1, f = !1;
            if (c) {
                for (var p in c)if (l = u.exec(p)) {
                    n = l[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                    break
                }
                n || (n = "WebkitOpacity"in c && "webkit"), l = !!("transition"in c || n + "Transition"in c), f = !!("animation"in c || n + "Animation"in c), !i || l && f || (l = w(s.body.style.webkitTransition), f = w(s.body.style.webkitAnimation))
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > i || o),
                hashchange: "onhashchange"in t && (!a || a > 7),
                hasEvent: function (t) {
                    if ("input" == t && 9 == Bn)return !1;
                    if (g(r[t])) {
                        var e = s.createElement("div");
                        r[t] = "on" + t in e
                    }
                    return r[t]
                },
                csp: ur(),
                vendorPrefix: n,
                transitions: l,
                animations: f,
                android: i,
                msie: Bn,
                msieDocumentMode: a
            }
        }]
    }

    function xn() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (t, e, n, r) {
            function i(i, s, a) {
                var u = n.defer(), c = u.promise, l = m(a) && !a;
                return s = e.defer(function () {
                    try {
                        u.resolve(i())
                    } catch (e) {
                        u.reject(e), r(e)
                    } finally {
                        delete o[c.$$timeoutId]
                    }
                    l || t.$apply()
                }, s), c.$$timeoutId = s, o[s] = u, c
            }

            var o = {};
            return i.cancel = function (t) {
                return t && t.$$timeoutId in o ? (o[t.$$timeoutId].reject("canceled"), delete o[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
            }, i
        }]
    }

    function Sn(t) {
        var e = t;
        return Bn && (Yr.setAttribute("href", e), e = Yr.href), Yr.setAttribute("href", e), {
            href: Yr.href,
            protocol: Yr.protocol ? Yr.protocol.replace(/:$/, "") : "",
            host: Yr.host,
            search: Yr.search ? Yr.search.replace(/^\?/, "") : "",
            hash: Yr.hash ? Yr.hash.replace(/^#/, "") : "",
            hostname: Yr.hostname,
            port: Yr.port,
            pathname: "/" === Yr.pathname.charAt(0) ? Yr.pathname : "/" + Yr.pathname
        }
    }

    function Cn(t) {
        return t = w(t) ? Sn(t) : t, t.protocol === ti.protocol && t.host === ti.host
    }

    function kn() {
        this.$get = v(t)
    }

    function An(t) {
        function e(r, i) {
            if (y(r)) {
                var s = {};
                return o(r, function (t, n) {
                    s[n] = e(n, t)
                }), s
            }
            return t.factory(r + n, i)
        }

        var n = "Filter";
        this.register = e, this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + n)
            }
        }], e("currency", On), e("date", Dn), e("filter", En), e("json", Rn), e("limitTo", Vn), e("lowercase", oi), e("number", Tn), e("orderBy", Un), e("uppercase", si)
    }

    function En() {
        return function (t, e, n) {
            if (!sr(t))return t;
            var r = typeof n, i = [];
            i.check = function (t) {
                for (var e = 0; e < i.length; e++)if (!i[e](t))return !1;
                return !0
            }, "function" !== r && (n = "boolean" === r && n ? function (t, e) {
                return ir.equals(t, e)
            } : function (t, e) {
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    for (var r in t)if ("$" !== r.charAt(0) && Zn.call(t, r) && n(t[r], e[r]))return !0;
                    return !1
                }
                return e = ("" + e).toLowerCase(), -1 < ("" + t).toLowerCase().indexOf(e)
            });
            var o = function (t, e) {
                if ("string" == typeof e && "!" === e.charAt(0))return !o(t, e.substr(1));
                switch (typeof t) {
                    case"boolean":
                    case"number":
                    case"string":
                        return n(t, e);
                    case"object":
                        switch (typeof e) {
                            case"object":
                                return n(t, e);
                            default:
                                for (var r in t)if ("$" !== r.charAt(0) && o(t[r], e))return !0
                        }
                        return !1;
                    case"array":
                        for (r = 0; r < t.length; r++)if (o(t[r], e))return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof e) {
                case"boolean":
                case"number":
                case"string":
                    e = {$: e};
                case"object":
                    for (var s in e)(function (t) {
                        "undefined" != typeof e[t] && i.push(function (n) {
                            return o("$" == t ? n : n && n[t], e[t])
                        })
                    })(s);
                    break;
                case"function":
                    i.push(e);
                    break;
                default:
                    return t
            }
            for (r = [], s = 0; s < t.length; s++) {
                var a = t[s];
                i.check(a) && r.push(a)
            }
            return r
        }
    }

    function On(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return g(n) && (n = e.CURRENCY_SYM), Mn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
        }
    }

    function Tn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return Mn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function Mn(t, e, n, r, i) {
        if (null == t || !isFinite(t) || y(t))return "";
        var o = 0 > t;
        t = Math.abs(t);
        var s = t + "", a = "", u = [], c = !1;
        if (-1 !== s.indexOf("e")) {
            var l = s.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > i + 1 ? (s = "0", t = 0) : (a = s, c = !0)
        }
        if (c)i > 0 && t > -1 && 1 > t && (a = t.toFixed(i)); else {
            s = (s.split(ei)[1] || "").length, g(i) && (i = Math.min(Math.max(e.minFrac, s), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i), 0 === t && (o = !1), t = ("" + t).split(ei), s = t[0], t = t[1] || "";
            var l = 0, f = e.lgSize, h = e.gSize;
            if (s.length >= f + h)for (l = s.length - f, c = 0; l > c; c++)0 === (l - c) % h && 0 !== c && (a += n), a += s.charAt(c);
            for (c = l; c < s.length; c++)0 === (s.length - c) % f && 0 !== c && (a += n), a += s.charAt(c);
            for (; t.length < i;)t += "0";
            i && "0" !== i && (a += r + t.substr(0, i))
        }
        return u.push(o ? e.negPre : e.posPre), u.push(a), u.push(o ? e.negSuf : e.posSuf), u.join("")
    }

    function Nn(t, e, n) {
        var r = "";
        for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;)t = "0" + t;
        return n && (t = t.substr(t.length - e)), r + t
    }

    function Pn(t, e, n, r) {
        return n = n || 0, function (i) {
            return i = i["get" + t](), (n > 0 || i > -n) && (i += n), 0 === i && -12 == n && (i = 12), Nn(i, e, r)
        }
    }

    function jn(t, e) {
        return function (n, r) {
            var i = n["get" + t](), o = Yn(e ? "SHORT" + t : t);
            return r[o][i]
        }
    }

    function Dn(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                t = new Date(0);
                var r = 0, i = 0, o = e[8] ? t.setUTCFullYear : t.setFullYear, s = e[8] ? t.setUTCHours : t.setHours;
                e[9] && (r = h(e[9] + e[10]), i = h(e[9] + e[11])), o.call(t, h(e[1]), h(e[2]) - 1, h(e[3])), r = h(e[4] || 0) - r, i = h(e[5] || 0) - i, o = h(e[6] || 0), e = Math.round(1e3 * parseFloat("0." + (e[7] || 0))), s.call(t, r, i, o, e)
            }
            return t
        }

        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r) {
            var i, s, a = "", u = [];
            if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, w(n) && (n = ii.test(n) ? h(n) : e(n)), b(n) && (n = new Date(n)), !x(n))return n;
            for (; r;)(s = ri.exec(r)) ? (u = u.concat(tr.call(s, 1)), r = u.pop()) : (u.push(r), r = null);
            return o(u, function (e) {
                i = ni[e], a += i ? i(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), a
        }
    }

    function Rn() {
        return function (t) {
            return R(t, !0)
        }
    }

    function Vn() {
        return function (t, e) {
            if (!sr(t) && !w(t))return t;
            if (e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : h(e), w(t))return e ? e >= 0 ? t.slice(0, e) : t.slice(e, t.length) : "";
            var n, r, i = [];
            for (e > t.length ? e = t.length : e < -t.length && (e = -t.length), e > 0 ? (n = 0, r = e) : (n = t.length + e, r = t.length); r > n; n++)i.push(t[n]);
            return i
        }
    }

    function Un(t) {
        return function (e, n, r) {
            function o(t, e) {
                return U(e) ? function (e, n) {
                    return t(n, e)
                } : t
            }

            function s(t, e) {
                var n = typeof t, r = typeof e;
                return n == r ? (x(t) && x(e) && (t = t.valueOf(), e = e.valueOf()), "string" == n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
            }

            return i(e) ? (n = sr(n) ? n : [n], 0 === n.length && (n = ["+"]), n = E(n, function (e) {
                var n = !1, r = e || d;
                if (w(e)) {
                    if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e)return o(function (t, e) {
                        return s(t, e)
                    }, n);
                    if (r = t(e), r.constant) {
                        var i = r();
                        return o(function (t, e) {
                            return s(t[i], e[i])
                        }, n)
                    }
                }
                return o(function (t, e) {
                    return s(r(t), r(e))
                }, n)
            }), tr.call(e).sort(o(function (t, e) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](t, e);
                    if (0 !== i)return i
                }
                return 0
            }, r))) : e
        }
    }

    function qn(t) {
        return S(t) && (t = {link: t}), t.restrict = t.restrict || "AC", v(t)
    }

    function Fn(t, e, n, r) {
        function i(e, n) {
            n = n ? "-" + W(n, "-") : "", r.setClass(t, (e ? yi : wi) + n, (e ? wi : yi) + n)
        }

        var s = this, a = t.parent().controller("form") || ci, u = 0, c = s.$error = {}, l = [];
        s.$name = e.name || e.ngForm, s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, a.$addControl(s), t.addClass(bi), i(!0), s.$addControl = function (t) {
            J(t.$name, "input"), l.push(t), t.$name && (s[t.$name] = t)
        }, s.$removeControl = function (t) {
            t.$name && s[t.$name] === t && delete s[t.$name], o(c, function (e, n) {
                s.$setValidity(n, !0, t)
            }), T(l, t)
        }, s.$setValidity = function (t, e, n) {
            var r = c[t];
            if (e)r && (T(r, n), r.length || (u--, u || (i(e), s.$valid = !0, s.$invalid = !1), c[t] = !1, i(!0, t), a.$setValidity(t, !0, s))); else {
                if (u || i(e), r) {
                    if (-1 != O(r, n))return
                } else c[t] = r = [], u++, i(!1, t), a.$setValidity(t, !1, s);
                r.push(n), s.$valid = !1, s.$invalid = !0
            }
        }, s.$setDirty = function () {
            r.removeClass(t, bi), r.addClass(t, xi), s.$dirty = !0, s.$pristine = !1, a.$setDirty()
        }, s.$setPristine = function () {
            r.removeClass(t, xi), r.addClass(t, bi), s.$dirty = !1, s.$pristine = !0, o(l, function (t) {
                t.$setPristine()
            })
        }
    }

    function _n(t, e, r, i) {
        return t.$setValidity(e, r), r ? i : n
    }

    function In(t, e) {
        var n, r;
        if (e)for (n = 0; n < e.length; ++n)if (r = e[n], t[r])return !0;
        return !1
    }

    function Hn(t, e, n, r, i) {
        y(i) && (t.$$hasNativeValidators = !0, t.$parsers.push(function (o) {
            return t.$error[e] || In(i, r) || !In(i, n) ? o : void t.$setValidity(e, !1)
        }))
    }

    function Ln(t, e, n, i, o, s) {
        var a = e.prop(Xn), u = e[0].placeholder, c = {}, l = Kn(e[0].type);
        if (i.$$validityState = a, !o.android) {
            var f = !1;
            e.on("compositionstart", function () {
                f = !0
            }), e.on("compositionend", function () {
                f = !1, p()
            })
        }
        var p = function (r) {
            if (!f) {
                var o = e.val();
                Bn && "input" === (r || c).type && e[0].placeholder !== u ? u = e[0].placeholder : ("password" !== l && U(n.ngTrim || "T") && (o = ar(o)), r = a && i.$$hasNativeValidators, (i.$viewValue !== o || "" === o && r) && (t.$root.$$phase ? i.$setViewValue(o) : t.$apply(function () {
                    i.$setViewValue(o)
                })))
            }
        };
        if (o.hasEvent("input"))e.on("input", p); else {
            var $, d = function () {
                $ || ($ = s.defer(function () {
                    p(), $ = null
                }))
            };
            e.on("keydown", function (t) {
                t = t.keyCode, 91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || d()
            }), o.hasEvent("paste") && e.on("paste cut", d)
        }
        e.on("change", p), i.$render = function () {
            e.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
        };
        var v = n.ngPattern;
        if (v && ((o = v.match(/^\/(.*)\/([gim]*)$/)) ? (v = RegExp(o[1], o[2]), o = function (t) {
                return _n(i, "pattern", i.$isEmpty(t) || v.test(t), t)
            }) : o = function (n) {
                var o = t.$eval(v);
                if (!o || !o.test)throw r("ngPattern")("noregexp", v, o, q(e));
                return _n(i, "pattern", i.$isEmpty(n) || o.test(n), n)
            }, i.$formatters.push(o), i.$parsers.push(o)), n.ngMinlength) {
            var g = h(n.ngMinlength);
            o = function (t) {
                return _n(i, "minlength", i.$isEmpty(t) || t.length >= g, t)
            }, i.$parsers.push(o), i.$formatters.push(o)
        }
        if (n.ngMaxlength) {
            var m = h(n.ngMaxlength);
            o = function (t) {
                return _n(i, "maxlength", i.$isEmpty(t) || t.length <= m, t)
            }, i.$parsers.push(o), i.$formatters.push(o)
        }
    }

    function zn(t, e) {
        return t = "ngClass" + t, ["$animate", function (n) {
            function r(t, e) {
                var n = [], r = 0;
                t:for (; r < t.length; r++) {
                    for (var i = t[r], o = 0; o < e.length; o++)if (i == e[o])continue t;
                    n.push(i)
                }
                return n
            }

            function i(t) {
                if (!sr(t)) {
                    if (w(t))return t.split(" ");
                    if (y(t)) {
                        var e = [];
                        return o(t, function (t, n) {
                            t && (e = e.concat(n.split(" ")))
                        }), e
                    }
                }
                return t
            }

            return {
                restrict: "AC", link: function (s, a, u) {
                    function c(t, e) {
                        var n = a.data("$classCounts") || {}, r = [];
                        return o(t, function (t) {
                            (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                        }), a.data("$classCounts", n), r.join(" ")
                    }

                    function l(t) {
                        if (!0 === e || s.$index % 2 === e) {
                            var o = i(t || []);
                            if (f) {
                                if (!P(t, f)) {
                                    var l = i(f), h = r(o, l), o = r(l, o), o = c(o, -1), h = c(h, 1);
                                    0 === h.length ? n.removeClass(a, o) : 0 === o.length ? n.addClass(a, h) : n.setClass(a, h, o)
                                }
                            } else {
                                var h = c(o, 1);
                                u.$addClass(h)
                            }
                        }
                        f = N(t)
                    }

                    var f;
                    s.$watch(u[t], l, !0), u.$observe("class", function () {
                        l(s.$eval(u[t]))
                    }), "ngClass" !== t && s.$watch("$index", function (n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var a = i(s.$eval(u[t]));
                            o === e ? (o = c(a, 1), u.$addClass(o)) : (o = c(a, -1), u.$removeClass(o))
                        }
                    })
                }
            }
        }]
    }

    var Bn, Wn, Qn, Gn, Jn, Xn = "validity", Kn = function (t) {
        return w(t) ? t.toLowerCase() : t
    }, Zn = Object.prototype.hasOwnProperty, Yn = function (t) {
        return w(t) ? t.toUpperCase() : t
    }, tr = [].slice, er = [].push, nr = Object.prototype.toString, rr = r("ng"), ir = t.angular || (t.angular = {}), or = ["0", "0", "0"];
    Bn = h((/msie (\d+)/.exec(Kn(navigator.userAgent)) || [])[1]), isNaN(Bn) && (Bn = h((/trident\/.*; rv:(\d+)/.exec(Kn(navigator.userAgent)) || [])[1])), $.$inject = [], d.$inject = [];
    var sr = function () {
        return S(Array.isArray) ? Array.isArray : function (t) {
            return "[object Array]" === nr.call(t)
        }
    }(), ar = function () {
        return String.prototype.trim ? function (t) {
            return w(t) ? t.trim() : t
        } : function (t) {
            return w(t) ? t.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : t
        }
    }();
    Jn = 9 > Bn ? function (t) {
        return t = t.nodeName ? t : t[0], t.scopeName && "HTML" != t.scopeName ? Yn(t.scopeName + ":" + t.nodeName) : t.nodeName
    } : function (t) {
        return t.nodeName ? t.nodeName : t[0].nodeName
    };
    var ur = function () {
        if (m(ur.isActive_))return ur.isActive_;
        var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
        if (!t)try {
            new Function("")
        } catch (n) {
            t = !0
        }
        return ur.isActive_ = t
    }, cr = /[A-Z]/g, lr = {full: "1.2.27", major: 1, minor: 2, dot: 27, codeName: "prime-factorization"};
    ne.expando = "ng339";
    var fr = ne.cache = {}, hr = 1, pr = t.document.addEventListener ? function (t, e, n) {
        t.addEventListener(e, n, !1)
    } : function (t, e, n) {
        t.attachEvent("on" + e, n)
    }, $r = t.document.removeEventListener ? function (t, e, n) {
        t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        t.detachEvent("on" + e, n)
    };
    ne._data = function (t) {
        return this.cache[t[this.expando]] || {}
    };
    var dr = /([\:\-\_]+(.))/g, vr = /^moz([A-Z])/, gr = r("jqLite"), mr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, yr = /<|&#?\w+;/, wr = /<([\w:]+)/, br = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, xr = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    xr.optgroup = xr.option, xr.tbody = xr.tfoot = xr.colgroup = xr.caption = xr.thead, xr.th = xr.td;
    var Sr = ne.prototype = {
        ready: function (n) {
            function r() {
                i || (i = !0, n())
            }

            var i = !1;
            "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), ne(t).on("load", r))
        }, toString: function () {
            var t = [];
            return o(this, function (e) {
                t.push("" + e)
            }), "[" + t.join(", ") + "]"
        }, eq: function (t) {
            return Wn(t >= 0 ? this[t] : this[this.length + t])
        }, length: 0, push: er, sort: [].sort, splice: [].splice
    }, Cr = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function (t) {
        Cr[Kn(t)] = t
    });
    var kr = {};
    o("input select option textarea button form details".split(" "), function (t) {
        kr[Yn(t)] = !0
    }), o({data: ue, removeData: se}, function (t, e) {
        ne[e] = t
    }), o({
        data: ue, inheritedData: $e, scope: function (t) {
            return Wn.data(t, "$scope") || $e(t.parentNode || t, ["$isolateScope", "$scope"])
        }, isolateScope: function (t) {
            return Wn.data(t, "$isolateScope") || Wn.data(t, "$isolateScopeNoTemplate")
        }, controller: pe, injector: function (t) {
            return $e(t, "$injector")
        }, removeAttr: function (t, e) {
            t.removeAttribute(e)
        }, hasClass: ce, css: function (t, e, r) {
            if (e = te(e), !m(r)) {
                var i;
                return 8 >= Bn && (i = t.currentStyle && t.currentStyle[e], "" === i && (i = "auto")), i = i || t.style[e], 8 >= Bn && (i = "" === i ? n : i), i
            }
            t.style[e] = r
        }, attr: function (t, e, r) {
            var i = Kn(e);
            if (Cr[i]) {
                if (!m(r))return t[e] || (t.attributes.getNamedItem(e) || $).specified ? i : n;
                r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
            } else if (m(r))t.setAttribute(e, r); else if (t.getAttribute)return t = t.getAttribute(e, 2), null === t ? n : t
        }, prop: function (t, e, n) {
            return m(n) ? void(t[e] = n) : t[e]
        }, text: function () {
            function t(t, n) {
                var r = e[t.nodeType];
                return g(n) ? r ? t[r] : "" : void(t[r] = n)
            }

            var e = [];
            return 9 > Bn ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent", t.$dv = "", t
        }(), val: function (t, e) {
            if (g(e)) {
                if ("SELECT" === Jn(t) && t.multiple) {
                    var n = [];
                    return o(t.options, function (t) {
                        t.selected && n.push(t.value || t.text)
                    }), 0 === n.length ? null : n
                }
                return t.value
            }
            t.value = e
        }, html: function (t, e) {
            if (g(e))return t.innerHTML;
            for (var n = 0, r = t.childNodes; n < r.length; n++)ie(r[n]);
            t.innerHTML = e
        }, empty: de
    }, function (t, e) {
        ne.prototype[e] = function (e, r) {
            var i, o, s = this.length;
            if (t !== de && (2 == t.length && t !== ce && t !== pe ? e : r) === n) {
                if (y(e)) {
                    for (i = 0; s > i; i++)if (t === ue)t(this[i], e); else for (o in e)t(this[i], o, e[o]);
                    return this
                }
                for (i = t.$dv, s = i === n ? Math.min(s, 1) : s, o = 0; s > o; o++) {
                    var a = t(this[o], e, r);
                    i = i ? i + a : a
                }
                return i
            }
            for (i = 0; s > i; i++)t(this[i], e, r);
            return this
        }
    }), o({
        removeData: se, dealoc: ie, on: function so(t, n, r, i) {
            if (m(i))throw gr("onargs");
            var s = ae(t, "events"), a = ae(t, "handle");
            s || ae(t, "events", s = {}), a || ae(t, "handle", a = ge(t, s)), o(n.split(" "), function (n) {
                var i = s[n];
                if (!i) {
                    if ("mouseenter" == n || "mouseleave" == n) {
                        var o = e.body.contains || e.body.compareDocumentPosition ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                            return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                        } : function (t, e) {
                            if (e)for (; e = e.parentNode;)if (e === t)return !0;
                            return !1
                        };
                        s[n] = [], so(t, {mouseleave: "mouseout", mouseenter: "mouseover"}[n], function (t) {
                            var e = t.relatedTarget;
                            e && (e === this || o(this, e)) || a(t, n)
                        })
                    } else pr(t, n, a), s[n] = [];
                    i = s[n]
                }
                i.push(r)
            })
        }, off: oe, one: function (t, e, n) {
            t = Wn(t), t.on(e, function r() {
                t.off(e, n), t.off(e, r)
            }), t.on(e, n)
        }, replaceWith: function (t, e) {
            var n, r = t.parentNode;
            ie(t), o(new ne(e), function (e) {
                n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
            })
        }, children: function (t) {
            var e = [];
            return o(t.childNodes, function (t) {
                1 === t.nodeType && e.push(t)
            }), e
        }, contents: function (t) {
            return t.contentDocument || t.childNodes || []
        }, append: function (t, e) {
            o(new ne(e), function (e) {
                1 !== t.nodeType && 11 !== t.nodeType || t.appendChild(e)
            })
        }, prepend: function (t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                o(new ne(e), function (e) {
                    t.insertBefore(e, n)
                })
            }
        }, wrap: function (t, e) {
            e = Wn(e)[0];
            var n = t.parentNode;
            n && n.replaceChild(e, t), e.appendChild(t)
        }, remove: function (t) {
            ie(t);
            var e = t.parentNode;
            e && e.removeChild(t)
        }, after: function (t, e) {
            var n = t, r = t.parentNode;
            o(new ne(e), function (t) {
                r.insertBefore(t, n.nextSibling), n = t
            })
        }, addClass: fe, removeClass: le, toggleClass: function (t, e, n) {
            e && o(e.split(" "), function (e) {
                var r = n;
                g(r) && (r = !ce(t, e)), (r ? fe : le)(t, e)
            })
        }, parent: function (t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null
        }, next: function (t) {
            if (t.nextElementSibling)return t.nextElementSibling;
            for (t = t.nextSibling; null != t && 1 !== t.nodeType;)t = t.nextSibling;
            return t
        }, find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        }, clone: re, triggerHandler: function (t, e, n) {
            var r, i;
            r = e.type || e;
            var s = (ae(t, "events") || {})[r];
            s && (r = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopPropagation: $, type: r, target: t
            }, e.type && (r = f(r, e)), e = N(s), i = n ? [r].concat(n) : [r], o(e, function (e) {
                e.apply(t, i)
            }))
        }
    }, function (t, e) {
        ne.prototype[e] = function (e, n, r) {
            for (var i, o = 0; o < this.length; o++)g(i) ? (i = t(this[o], e, n, r), m(i) && (i = Wn(i))) : he(i, t(this[o], e, n, r));
            return m(i) ? i : this
        }, ne.prototype.bind = ne.prototype.on, ne.prototype.unbind = ne.prototype.off
    }), ye.prototype = {
        put: function (t, e) {
            this[me(t, this.nextUid)] = e
        }, get: function (t) {
            return this[me(t, this.nextUid)]
        }, remove: function (t) {
            var e = this[t = me(t, this.nextUid)];
            return delete this[t], e
        }
    };
    var Ar = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Er = /,/, Or = /^\s*(_?)(\S+?)\1\s*$/, Tr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Mr = r("$injector"), Nr = r("$animate"), Pr = ["$provide", function (t) {
        this.$$selectors = {}, this.register = function (e, n) {
            var r = e + "-animation";
            if (e && "." != e.charAt(0))throw Nr("notcsel", e);
            this.$$selectors[e.substr(1)] = r, t.factory(r, n)
        }, this.classNameFilter = function (t) {
            return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
        }, this.$get = ["$timeout", "$$asyncCallback", function (t, e) {
            return {
                enter: function (t, n, r, i) {
                    r ? r.after(t) : (n && n[0] || (n = r.parent()), n.append(t)), i && e(i)
                }, leave: function (t, n) {
                    t.remove(), n && e(n)
                }, move: function (t, e, n, r) {
                    this.enter(t, e, n, r)
                }, addClass: function (t, n, r) {
                    n = w(n) ? n : sr(n) ? n.join(" ") : "", o(t, function (t) {
                        fe(t, n)
                    }), r && e(r)
                }, removeClass: function (t, n, r) {
                    n = w(n) ? n : sr(n) ? n.join(" ") : "", o(t, function (t) {
                        le(t, n)
                    }), r && e(r)
                }, setClass: function (t, n, r, i) {
                    o(t, function (t) {
                        fe(t, n), le(t, r)
                    }), i && e(i)
                }, enabled: $
            }
        }]
    }], jr = r("$compile");
    Oe.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Dr = /^(x[\:\-_]|data[\:\-_])/i, Rr = r("$interpolate"), Vr = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Ur = {
        http: 80,
        https: 443,
        ftp: 21
    }, qr = r("$location");
    Ze.prototype = Ke.prototype = Xe.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Ye("$$absUrl"),
        url: function (t) {
            return g(t) ? this.$$url : (t = Vr.exec(t), t[1] && this.path(decodeURIComponent(t[1])), (t[2] || t[1]) && this.search(t[3] || ""), this.hash(t[5] || ""), this)
        },
        protocol: Ye("$$protocol"),
        host: Ye("$$host"),
        port: Ye("$$port"),
        path: tn("$$path", function (t) {
            return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
        }),
        search: function (t, e) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (w(t) || b(t))t = t.toString(), this.$$search = _(t); else {
                        if (!y(t))throw qr("isrcharg");
                        o(t, function (e, n) {
                            null == e && delete t[n]
                        }), this.$$search = t
                    }
                    break;
                default:
                    g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
            }
            return this.$$compose(), this
        },
        hash: tn("$$hash", function (t) {
            return null !== t ? t.toString() : ""
        }),
        replace: function () {
            return this.$$replace = !0, this
        }
    };
    var Fr, _r = r("$parse"), Ir = {}, Hr = Function.prototype.call, Lr = Function.prototype.apply, zr = Function.prototype.bind, Br = {
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: $, "+": function (t, e, r, i) {
            return r = r(t, e), i = i(t, e), m(r) ? m(i) ? r + i : r : m(i) ? i : n
        }, "-": function (t, e, n, r) {
            return n = n(t, e), r = r(t, e), (m(n) ? n : 0) - (m(r) ? r : 0)
        }, "*": function (t, e, n, r) {
            return n(t, e) * r(t, e)
        }, "/": function (t, e, n, r) {
            return n(t, e) / r(t, e)
        }, "%": function (t, e, n, r) {
            return n(t, e) % r(t, e)
        }, "^": function (t, e, n, r) {
            return n(t, e) ^ r(t, e)
        }, "=": $, "===": function (t, e, n, r) {
            return n(t, e) === r(t, e)
        }, "!==": function (t, e, n, r) {
            return n(t, e) !== r(t, e)
        }, "==": function (t, e, n, r) {
            return n(t, e) == r(t, e)
        }, "!=": function (t, e, n, r) {
            return n(t, e) != r(t, e)
        }, "<": function (t, e, n, r) {
            return n(t, e) < r(t, e)
        }, ">": function (t, e, n, r) {
            return n(t, e) > r(t, e)
        }, "<=": function (t, e, n, r) {
            return n(t, e) <= r(t, e)
        }, ">=": function (t, e, n, r) {
            return n(t, e) >= r(t, e)
        }, "&&": function (t, e, n, r) {
            return n(t, e) && r(t, e)
        }, "||": function (t, e, n, r) {
            return n(t, e) || r(t, e)
        }, "&": function (t, e, n, r) {
            return n(t, e) & r(t, e)
        }, "|": function (t, e, n, r) {
            return r(t, e)(t, e, n(t, e))
        }, "!": function (t, e, n) {
            return !n(t, e)
        }
    }, Wr = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, Qr = function (t) {
        this.options = t
    };
    Qr.prototype = {
        constructor: Qr, lex: function (t) {
            for (this.text = t, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'"))this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(this.ch))this.readIdent(); else if (this.is("(){}[].,;:?"))this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++; else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    t = this.ch + this.peek();
                    var e = t + this.peek(2), r = Br[this.ch], i = Br[t], o = Br[e];
                    o ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: o
                    }), this.index += 3) : i ? (this.tokens.push({
                        index: this.index,
                        text: t,
                        fn: i
                    }), this.index += 2) : r ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: r
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        }, is: function (t) {
            return -1 !== t.indexOf(this.ch)
        }, was: function (t) {
            return -1 !== t.indexOf(this.lastCh)
        }, peek: function (t) {
            return t = t || 1, this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
        }, isNumber: function (t) {
            return t >= "0" && "9" >= t
        }, isWhitespace: function (t) {
            return " " === t || "\r" === t || "	" === t || "\n" === t || "" === t || "Â " === t
        }, isIdent: function (t) {
            return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
        }, isExpOperator: function (t) {
            return "-" === t || "+" === t || this.isNumber(t)
        }, throwError: function (t, e, n) {
            throw n = n || this.index, e = m(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n, _r("lexerr", t, e, this.text)
        }, readNumber: function () {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Kn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n))t += n; else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r))t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1))t += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1))break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            t *= 1, this.tokens.push({
                index: e, text: t, literal: !0, constant: !0, fn: function () {
                    return t
                }
            })
        }, readIdent: function () {
            for (var t, e, n, r, i = this, o = "", s = this.index; this.index < this.text.length && (r = this.text.charAt(this.index), "." === r || this.isIdent(r) || this.isNumber(r));)"." === r && (t = this.index), o += r, this.index++;
            if (t)for (e = this.index; e < this.text.length;) {
                if (r = this.text.charAt(e), "(" === r) {
                    n = o.substr(t - s + 1), o = o.substr(0, t - s), this.index = e;
                    break
                }
                if (!this.isWhitespace(r))break;
                e++
            }
            if (s = {index: s, text: o}, Br.hasOwnProperty(o))s.fn = Br[o], s.literal = !0, s.constant = !0; else {
                var a = ln(o, this.options, this.text);
                s.fn = f(function (t, e) {
                    return a(t, e)
                }, {
                    assign: function (t, e) {
                        return sn(t, o, e, i.text, i.options)
                    }
                })
            }
            this.tokens.push(s), n && (this.tokens.push({index: t, text: "."}), this.tokens.push({
                index: t + 1,
                text: n
            }))
        }, readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index), r = r + o;
                if (i)"u" === o ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += Wr[o] || o, i = !1; else if ("\\" === o)i = !0; else {
                    if (o === t)return this.index++, void this.tokens.push({
                        index: e,
                        text: r,
                        string: n,
                        literal: !0,
                        constant: !0,
                        fn: function () {
                            return n
                        }
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var Gr = function (t, e, n) {
        this.lexer = t, this.$filter = e, this.options = n
    };
    Gr.ZERO = f(function () {
        return 0
    }, {constant: !0}), Gr.prototype = {
        constructor: Gr, parse: function (t) {
            return this.text = t, this.tokens = this.lexer.lex(t), t = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t.literal = !!t.literal, t.constant = !!t.constant, t
        }, primary: function () {
            var t;
            if (this.expect("("))t = this.filterChain(), this.consume(")"); else if (this.expect("["))t = this.arrayDeclaration(); else if (this.expect("{"))t = this.object(); else {
                var e = this.expect();
                (t = e.fn) || this.throwError("not a primary expression", e), t.literal = !!e.literal, t.constant = !!e.constant
            }
            for (var n; e = this.expect("(", "[", ".");)"(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
            return t
        }, throwError: function (t, e) {
            throw _r("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        }, peekToken: function () {
            if (0 === this.tokens.length)throw _r("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (t, e, n, r) {
            if (0 < this.tokens.length) {
                var i = this.tokens[0], o = i.text;
                if (o === t || o === e || o === n || o === r || !(t || e || n || r))return i
            }
            return !1
        }, expect: function (t, e, n, r) {
            return (t = this.peek(t, e, n, r)) ? (this.tokens.shift(), t) : !1
        }, consume: function (t) {
            this.expect(t) || this.throwError("is unexpected, expecting [" + t + "]", this.peek())
        }, unaryFn: function (t, e) {
            return f(function (n, r) {
                return t(n, r, e)
            }, {constant: e.constant})
        }, ternaryFn: function (t, e, n) {
            return f(function (r, i) {
                return t(r, i) ? e(r, i) : n(r, i)
            }, {constant: t.constant && e.constant && n.constant})
        }, binaryFn: function (t, e, n) {
            return f(function (r, i) {
                return e(r, i, t, n)
            }, {constant: t.constant && n.constant})
        }, statements: function () {
            for (var t = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";"))return 1 === t.length ? t[0] : function (e, n) {
                for (var r, i = 0; i < t.length; i++) {
                    var o = t[i];
                    o && (r = o(e, n))
                }
                return r
            }
        }, filterChain: function () {
            for (var t, e = this.expression(); ;) {
                if (!(t = this.expect("|")))return e;
                e = this.binaryFn(e, t.fn, this.filter())
            }
        }, filter: function () {
            for (var t = this.expect(), e = this.$filter(t.text), n = []; ;) {
                if (!(t = this.expect(":"))) {
                    var r = function (t, r, i) {
                        i = [i];
                        for (var o = 0; o < n.length; o++)i.push(n[o](t, r));
                        return e.apply(t, i)
                    };
                    return function () {
                        return r
                    }
                }
                n.push(this.expression())
            }
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var t, e, n = this.ternary();
            return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), function (e, r) {
                return n.assign(e, t(e, r), r)
            }) : n
        }, ternary: function () {
            var t, e, n = this.logicalOR();
            return this.expect("?") ? (t = this.assignment(), (e = this.expect(":")) ? this.ternaryFn(n, t, this.assignment()) : void this.throwError("expected :", e)) : n
        }, logicalOR: function () {
            for (var t, e = this.logicalAND(); ;) {
                if (!(t = this.expect("||")))return e;
                e = this.binaryFn(e, t.fn, this.logicalAND())
            }
        }, logicalAND: function () {
            var t, e = this.equality();
            return (t = this.expect("&&")) && (e = this.binaryFn(e, t.fn, this.logicalAND())), e
        }, equality: function () {
            var t, e = this.relational();
            return (t = this.expect("==", "!=", "===", "!==")) && (e = this.binaryFn(e, t.fn, this.equality())), e
        }, relational: function () {
            var t, e = this.additive();
            return (t = this.expect("<", ">", "<=", ">=")) && (e = this.binaryFn(e, t.fn, this.relational())), e
        }, additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");)e = this.binaryFn(e, t.fn, this.multiplicative());
            return e
        }, multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");)e = this.binaryFn(e, t.fn, this.unary());
            return e
        }, unary: function () {
            var t;
            return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(Gr.ZERO, t.fn, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.fn, this.unary()) : this.primary()
        }, fieldAccess: function (t) {
            var e = this, n = this.expect().text, r = ln(n, this.options, this.text);
            return f(function (e, n, i) {
                return r(i || t(e, n))
            }, {
                assign: function (r, i, o) {
                    return (o = t(r, o)) || t.assign(r, o = {}), sn(o, n, i, e.text, e.options)
                }
            })
        }, objectIndex: function (t) {
            var e = this, r = this.expression();
            return this.consume("]"), f(function (i, o) {
                var s, a = t(i, o), u = r(i, o);
                return rn(u, e.text), a ? ((a = on(a[u], e.text)) && a.then && e.options.unwrapPromises && (s = a, "$$v"in a || (s.$$v = n, s.then(function (t) {
                    s.$$v = t
                })), a = a.$$v), a) : n
            }, {
                assign: function (n, i, o) {
                    var s = rn(r(n, o), e.text);
                    return (o = on(t(n, o), e.text)) || t.assign(n, o = {}), o[s] = i
                }
            })
        }, functionCall: function (t, e) {
            var n = [];
            if (")" !== this.peekToken().text)do n.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var r = this;
            return function (i, o) {
                for (var s = [], a = e ? e(i, o) : i, u = 0; u < n.length; u++)s.push(on(n[u](i, o), r.text));
                u = t(i, o, a) || $, on(a, r.text);
                var c = r.text;
                if (u) {
                    if (u.constructor === u)throw _r("isecfn", c);
                    if (u === Hr || u === Lr || zr && u === zr)throw _r("isecff", c)
                }
                return s = u.apply ? u.apply(a, s) : u(s[0], s[1], s[2], s[3], s[4]), on(s, r.text)
            }
        }, arrayDeclaration: function () {
            var t = [], e = !0;
            if ("]" !== this.peekToken().text)do {
                if (this.peek("]"))break;
                var n = this.expression();
                t.push(n), n.constant || (e = !1)
            } while (this.expect(","));
            return this.consume("]"), f(function (e, n) {
                for (var r = [], i = 0; i < t.length; i++)r.push(t[i](e, n));
                return r
            }, {literal: !0, constant: e})
        }, object: function () {
            var t = [], e = !0;
            if ("}" !== this.peekToken().text)do {
                if (this.peek("}"))break;
                var n = this.expect(), n = n.string || n.text;
                this.consume(":");
                var r = this.expression();
                t.push({key: n, value: r}), r.constant || (e = !1)
            } while (this.expect(","));
            return this.consume("}"), f(function (e, n) {
                for (var r = {}, i = 0; i < t.length; i++) {
                    var o = t[i];
                    r[o.key] = o.value(e, n)
                }
                return r
            }, {literal: !0, constant: e})
        }
    };
    var Jr = {}, Xr = {}, Kr = r("$sce"), Zr = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Yr = e.createElement("a"), ti = Sn(t.location.href, !0);
    An.$inject = ["$provide"], On.$inject = ["$locale"], Tn.$inject = ["$locale"];
    var ei = ".", ni = {
        yyyy: Pn("FullYear", 4),
        yy: Pn("FullYear", 2, 0, !0),
        y: Pn("FullYear", 1),
        MMMM: jn("Month"),
        MMM: jn("Month", !0),
        MM: Pn("Month", 2, 1),
        M: Pn("Month", 1, 1),
        dd: Pn("Date", 2),
        d: Pn("Date", 1),
        HH: Pn("Hours", 2),
        H: Pn("Hours", 1),
        hh: Pn("Hours", 2, -12),
        h: Pn("Hours", 1, -12),
        mm: Pn("Minutes", 2),
        m: Pn("Minutes", 1),
        ss: Pn("Seconds", 2),
        s: Pn("Seconds", 1),
        sss: Pn("Milliseconds", 3),
        EEEE: jn("Day"),
        EEE: jn("Day", !0),
        a: function (t, e) {
            return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1]
        },
        Z: function (t) {
            return t = -1 * t.getTimezoneOffset(), t = (t >= 0 ? "+" : "") + (Nn(Math[t > 0 ? "floor" : "ceil"](t / 60), 2) + Nn(Math.abs(t % 60), 2))
        }
    }, ri = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, ii = /^\-?\d+$/;
    Dn.$inject = ["$locale"];
    var oi = v(Kn), si = v(Yn);
    Un.$inject = ["$parse"];
    var ai = v({
        restrict: "E", compile: function (t, n) {
            return 8 >= Bn && (n.href || n.name || n.$set("href", ""), t.append(e.createComment("IE fix"))), n.href || n.xlinkHref || n.name ? void 0 : function (t, e) {
                var n = "[object SVGAnimatedString]" === nr.call(e.prop("href")) ? "xlink:href" : "href";
                e.on("click", function (t) {
                    e.attr(n) || t.preventDefault()
                })
            }
        }
    }), ui = {};
    o(Cr, function (t, e) {
        if ("multiple" != t) {
            var n = Te("ng-" + e);
            ui[n] = function () {
                return {
                    priority: 100, link: function (t, r, i) {
                        t.$watch(i[n], function (t) {
                            i.$set(e, !!t)
                        })
                    }
                }
            }
        }
    }), o(["src", "srcset", "href"], function (t) {
        var e = Te("ng-" + t);
        ui[e] = function () {
            return {
                priority: 99, link: function (n, r, i) {
                    var o = t, s = t;
                    "href" === t && "[object SVGAnimatedString]" === nr.call(r.prop("href")) && (s = "xlinkHref", i.$attr[s] = "xlink:href", o = null), i.$observe(e, function (e) {
                        e ? (i.$set(s, e), Bn && o && r.prop(o, i[s])) : "href" === t && i.$set(s, null)
                    })
                }
            }
        }
    });
    var ci = {$addControl: $, $removeControl: $, $setValidity: $, $setDirty: $, $setPristine: $};
    Fn.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var li = function (t) {
        return ["$timeout", function (e) {
            return {
                name: "form", restrict: t ? "EAC" : "E", controller: Fn, compile: function () {
                    return {
                        pre: function (t, r, i, o) {
                            if (!i.action) {
                                var s = function (t) {
                                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                                };
                                pr(r[0], "submit", s), r.on("$destroy", function () {
                                    e(function () {
                                        $r(r[0], "submit", s)
                                    }, 0, !1)
                                })
                            }
                            var a = r.parent().controller("form"), u = i.name || i.ngForm;
                            u && sn(t, u, o, u), a && r.on("$destroy", function () {
                                a.$removeControl(o), u && sn(t, u, n, u), f(o, ci)
                            })
                        }
                    }
                }
            }
        }]
    }, fi = li(), hi = li(!0), pi = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, $i = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, di = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, vi = {
        text: Ln,
        number: function (t, e, r, i, o, s) {
            Ln(t, e, r, i, o, s), i.$parsers.push(function (t) {
                var e = i.$isEmpty(t);
                return e || di.test(t) ? (i.$setValidity("number", !0), "" === t ? null : e ? t : parseFloat(t)) : (i.$setValidity("number", !1), n)
            }), Hn(i, "number", gi, null, i.$$validityState), i.$formatters.push(function (t) {
                return i.$isEmpty(t) ? "" : "" + t
            }), r.min && (t = function (t) {
                var e = parseFloat(r.min);
                return _n(i, "min", i.$isEmpty(t) || t >= e, t)
            }, i.$parsers.push(t), i.$formatters.push(t)), r.max && (t = function (t) {
                var e = parseFloat(r.max);
                return _n(i, "max", i.$isEmpty(t) || e >= t, t)
            }, i.$parsers.push(t), i.$formatters.push(t)), i.$formatters.push(function (t) {
                return _n(i, "number", i.$isEmpty(t) || b(t), t)
            })
        },
        url: function (t, e, n, r, i, o) {
            Ln(t, e, n, r, i, o), t = function (t) {
                return _n(r, "url", r.$isEmpty(t) || pi.test(t), t)
            }, r.$formatters.push(t), r.$parsers.push(t)
        },
        email: function (t, e, n, r, i, o) {
            Ln(t, e, n, r, i, o), t = function (t) {
                return _n(r, "email", r.$isEmpty(t) || $i.test(t), t)
            }, r.$formatters.push(t), r.$parsers.push(t)
        },
        radio: function (t, e, n, r) {
            g(n.name) && e.attr("name", c()), e.on("click", function () {
                e[0].checked && t.$apply(function () {
                    r.$setViewValue(n.value)
                })
            }), r.$render = function () {
                e[0].checked = n.value == r.$viewValue
            }, n.$observe("value", r.$render)
        },
        checkbox: function (t, e, n, r) {
            var i = n.ngTrueValue, o = n.ngFalseValue;
            w(i) || (i = !0), w(o) || (o = !1), e.on("click", function () {
                t.$apply(function () {
                    r.$setViewValue(e[0].checked)
                })
            }), r.$render = function () {
                e[0].checked = r.$viewValue
            }, r.$isEmpty = function (t) {
                return t !== i
            }, r.$formatters.push(function (t) {
                return t === i
            }), r.$parsers.push(function (t) {
                return t ? i : o
            })
        },
        hidden: $,
        button: $,
        submit: $,
        reset: $,
        file: $
    }, gi = ["badInput"], mi = ["$browser", "$sniffer", function (t, e) {
        return {
            restrict: "E", require: "?ngModel", link: function (n, r, i, o) {
                o && (vi[Kn(i.type)] || vi.text)(n, r, i, o, e, t)
            }
        }
    }], yi = "ng-valid", wi = "ng-invalid", bi = "ng-pristine", xi = "ng-dirty", Si = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (t, e, n, i, s, a) {
        function u(t, e) {
            e = e ? "-" + W(e, "-") : "", a.removeClass(i, (t ? wi : yi) + e), a.addClass(i, (t ? yi : wi) + e)
        }

        this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
        var c = s(n.ngModel), l = c.assign;
        if (!l)throw r("ngModel")("nonassign", n.ngModel, q(i));
        this.$render = $, this.$isEmpty = function (t) {
            return g(t) || "" === t || null === t || t !== t
        };
        var f = i.inheritedData("$formController") || ci, h = 0, p = this.$error = {};
        i.addClass(bi), u(!0), this.$setValidity = function (t, e) {
            p[t] !== !e && (e ? (p[t] && h--, h || (u(!0), this.$valid = !0, this.$invalid = !1)) : (u(!1), this.$invalid = !0, this.$valid = !1, h++), p[t] = !e, u(e, t), f.$setValidity(t, e, this))
        }, this.$setPristine = function () {
            this.$dirty = !1, this.$pristine = !0, a.removeClass(i, xi), a.addClass(i, bi)
        }, this.$setViewValue = function (n) {
            this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, a.removeClass(i, bi), a.addClass(i, xi), f.$setDirty()), o(this.$parsers, function (t) {
                n = t(n)
            }), this.$modelValue !== n && (this.$modelValue = n, l(t, n), o(this.$viewChangeListeners, function (t) {
                try {
                    t()
                } catch (n) {
                    e(n)
                }
            }))
        };
        var d = this;
        t.$watch(function () {
            var e = c(t);
            if (d.$modelValue !== e) {
                var n = d.$formatters, r = n.length;
                for (d.$modelValue = e; r--;)e = n[r](e);
                d.$viewValue !== e && (d.$viewValue = e, d.$render())
            }
            return e
        })
    }], Ci = function () {
        return {
            require: ["ngModel", "^?form"], controller: Si, link: function (t, e, n, r) {
                var i = r[0], o = r[1] || ci;
                o.$addControl(i), t.$on("$destroy", function () {
                    o.$removeControl(i)
                })
            }
        }
    }, ki = v({
        require: "ngModel", link: function (t, e, n, r) {
            r.$viewChangeListeners.push(function () {
                t.$eval(n.ngChange)
            })
        }
    }), Ai = function () {
        return {
            require: "?ngModel", link: function (t, e, n, r) {
                if (r) {
                    n.required = !0;
                    var i = function (t) {
                        return n.required && r.$isEmpty(t) ? void r.$setValidity("required", !1) : (r.$setValidity("required", !0), t)
                    };
                    r.$formatters.push(i), r.$parsers.unshift(i), n.$observe("required", function () {
                        i(r.$viewValue)
                    })
                }
            }
        }
    }, Ei = function () {
        return {
            require: "ngModel", link: function (t, e, r, i) {
                var s = (t = /\/(.*)\//.exec(r.ngList)) && RegExp(t[1]) || r.ngList || ",";
                i.$parsers.push(function (t) {
                    if (!g(t)) {
                        var e = [];
                        return t && o(t.split(s), function (t) {
                            t && e.push(ar(t))
                        }), e
                    }
                }), i.$formatters.push(function (t) {
                    return sr(t) ? t.join(", ") : n
                }), i.$isEmpty = function (t) {
                    return !t || !t.length
                }
            }
        }
    }, Oi = /^(true|false|\d+)$/, Ti = function () {
        return {
            priority: 100, compile: function (t, e) {
                return Oi.test(e.ngValue) ? function (t, e, n) {
                    n.$set("value", t.$eval(n.ngValue))
                } : function (t, e, n) {
                    t.$watch(n.ngValue, function (t) {
                        n.$set("value", t)
                    })
                }
            }
        }
    }, Mi = qn({
        compile: function (t) {
            return t.addClass("ng-binding"), function (t, e, r) {
                e.data("$binding", r.ngBind), t.$watch(r.ngBind, function (t) {
                    e.text(t == n ? "" : t)
                })
            }
        }
    }), Ni = ["$interpolate", function (t) {
        return function (e, n, r) {
            e = t(n.attr(r.$attr.ngBindTemplate)), n.addClass("ng-binding").data("$binding", e), r.$observe("ngBindTemplate", function (t) {
                n.text(t)
            })
        }
    }], Pi = ["$sce", "$parse", function (t, e) {
        return {
            compile: function (n) {
                return n.addClass("ng-binding"), function (n, r, i) {
                    r.data("$binding", i.ngBindHtml);
                    var o = e(i.ngBindHtml);
                    n.$watch(function () {
                        return (o(n) || "").toString()
                    }, function () {
                        r.html(t.getTrustedHtml(o(n)) || "")
                    })
                }
            }
        }
    }], ji = zn("", !0), Di = zn("Odd", 0), Ri = zn("Even", 1), Vi = qn({
        compile: function (t, e) {
            e.$set("ngCloak", n), t.removeClass("ng-cloak")
        }
    }), Ui = [function () {
        return {scope: !0, controller: "@", priority: 500}
    }], qi = {}, Fi = {blur: !0, focus: !0};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
        var e = Te("ng-" + t);
        qi[e] = ["$parse", "$rootScope", function (n, r) {
            return {
                compile: function (i, o) {
                    var s = n(o[e], !0);
                    return function (e, n) {
                        n.on(t, function (n) {
                            var i = function () {
                                s(e, {$event: n})
                            };
                            Fi[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var _i = ["$animate", function (t) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, r, i, o, s) {
                var a, u, c;
                n.$watch(i.ngIf, function (o) {
                    U(o) ? u || (u = n.$new(), s(u, function (n) {
                        n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), a = {clone: n}, t.enter(n, r.parent(), r)
                    })) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), a && (c = K(a.clone), t.leave(c, function () {
                        c = null
                    }), a = null))
                })
            }
        }
    }], Ii = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (t, e, n, r, i) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: ir.noop,
            compile: function (o, s) {
                var a = s.ngInclude || s.src, u = s.onload || "", c = s.autoscroll;
                return function (o, s, l, f, h) {
                    var p, $, d, v = 0, g = function () {
                        $ && ($.remove(), $ = null), p && (p.$destroy(), p = null), d && (r.leave(d, function () {
                            $ = null
                        }), $ = d, d = null)
                    };
                    o.$watch(i.parseAsResourceUrl(a), function (i) {
                        var a = function () {
                            !m(c) || c && !o.$eval(c) || n()
                        }, l = ++v;
                        i ? (t.get(i, {cache: e}).success(function (t) {
                            if (l === v) {
                                var e = o.$new();
                                f.template = t, t = h(e, function (t) {
                                    g(), r.enter(t, null, s, a)
                                }), p = e, d = t, p.$emit("$includeContentLoaded"), o.$eval(u)
                            }
                        }).error(function () {
                            l === v && g()
                        }), o.$emit("$includeContentRequested")) : (g(), f.template = null)
                    })
                }
            }
        }
    }], Hi = ["$compile", function (t) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (e, n, r, i) {
                n.html(i.template), t(n.contents())(e)
            }
        }
    }], Li = qn({
        priority: 450, compile: function () {
            return {
                pre: function (t, e, n) {
                    t.$eval(n.ngInit)
                }
            }
        }
    }), zi = qn({terminal: !0, priority: 1e3}), Bi = ["$locale", "$interpolate", function (t, e) {
        var n = /{}/g;
        return {
            restrict: "EA", link: function (r, i, s) {
                var a = s.count, u = s.$attr.when && i.attr(s.$attr.when), c = s.offset || 0, l = r.$eval(u) || {}, f = {}, h = e.startSymbol(), p = e.endSymbol(), $ = /^when(Minus)?(.+)$/;
                o(s, function (t, e) {
                    $.test(e) && (l[Kn(e.replace("when", "").replace("Minus", "-"))] = i.attr(s.$attr[e]))
                }), o(l, function (t, r) {
                    f[r] = e(t.replace(n, h + a + "-" + c + p))
                }), r.$watch(function () {
                    var e = parseFloat(r.$eval(a));
                    return isNaN(e) ? "" : (e in l || (e = t.pluralCat(e - c)), f[e](r, i, !0))
                }, function (t) {
                    i.text(t)
                })
            }
        }
    }], Wi = ["$parse", "$animate", function (t, n) {
        var s = r("ngRepeat");
        return {
            transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, link: function (r, a, u, c, l) {
                var f, h, p, $, d, v, g = u.ngRepeat, m = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), y = {$id: me};
                if (!m)throw s("iexp", g);
                if (u = m[1], c = m[2], (m = m[3]) ? (f = t(m), h = function (t, e, n) {
                        return v && (y[v] = t), y[d] = e, y.$index = n, f(r, y)
                    }) : (p = function (t, e) {
                        return me(e)
                    }, $ = function (t) {
                        return t
                    }), m = u.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !m)throw s("iidexp", u);
                d = m[3] || m[1], v = m[2];
                var w = {};
                r.$watchCollection(c, function (t) {
                    var u, c, f, m, y, b, x, S, C, k, A = a[0], E = {}, O = [];
                    if (i(t))C = t, S = h || p; else {
                        S = h || $, C = [];
                        for (b in t)t.hasOwnProperty(b) && "$" != b.charAt(0) && C.push(b);
                        C.sort()
                    }
                    for (m = C.length, c = O.length = C.length, u = 0; c > u; u++)if (b = t === C ? u : C[u], x = t[b], f = S(b, x, u), J(f, "`track by` id"), w.hasOwnProperty(f))k = w[f], delete w[f], E[f] = k, O[u] = k; else {
                        if (E.hasOwnProperty(f))throw o(O, function (t) {
                            t && t.scope && (w[t.id] = t)
                        }), s("dupes", g, f, R(x));
                        O[u] = {id: f}, E[f] = !1
                    }
                    for (b in w)w.hasOwnProperty(b) && (k = w[b], u = K(k.clone), n.leave(u), o(u, function (t) {
                        t.$$NG_REMOVED = !0
                    }), k.scope.$destroy());
                    for (u = 0, c = C.length; c > u; u++) {
                        if (b = t === C ? u : C[u], x = t[b], k = O[u], O[u - 1] && (A = O[u - 1].clone[O[u - 1].clone.length - 1]), k.scope) {
                            y = k.scope, f = A;
                            do f = f.nextSibling; while (f && f.$$NG_REMOVED);
                            k.clone[0] != f && n.move(K(k.clone), null, Wn(A)), A = k.clone[k.clone.length - 1]
                        } else y = r.$new();
                        y[d] = x, v && (y[v] = b), y.$index = u, y.$first = 0 === u, y.$last = u === m - 1, y.$middle = !(y.$first || y.$last), y.$odd = !(y.$even = 0 === (1 & u)), k.scope || l(y, function (t) {
                            t[t.length++] = e.createComment(" end ngRepeat: " + g + " "), n.enter(t, null, Wn(A)), A = t, k.scope = y, k.clone = t, E[k.id] = k
                        })
                    }
                    w = E
                })
            }
        }
    }], Qi = ["$animate", function (t) {
        return function (e, n, r) {
            e.$watch(r.ngShow, function (e) {
                t[U(e) ? "removeClass" : "addClass"](n, "ng-hide")
            })
        }
    }], Gi = ["$animate", function (t) {
        return function (e, n, r) {
            e.$watch(r.ngHide, function (e) {
                t[U(e) ? "addClass" : "removeClass"](n, "ng-hide")
            })
        }
    }], Ji = qn(function (t, e, n) {
        t.$watch(n.ngStyle, function (t, n) {
            n && t !== n && o(n, function (t, n) {
                e.css(n, "")
            }), t && e.css(t)
        }, !0)
    }), Xi = ["$animate", function (t) {
        return {
            restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (e, n, r, i) {
                var s = [], a = [], u = [], c = [];
                e.$watch(r.ngSwitch || r.on, function (n) {
                    var l, f;
                    for (l = 0, f = u.length; f > l; ++l)u[l].remove();
                    for (l = u.length = 0, f = c.length; f > l; ++l) {
                        var h = a[l];
                        c[l].$destroy(), u[l] = h, t.leave(h, function () {
                            u.splice(l, 1)
                        })
                    }
                    a.length = 0, c.length = 0, (s = i.cases["!" + n] || i.cases["?"]) && (e.$eval(r.change), o(s, function (n) {
                        var r = e.$new();
                        c.push(r), n.transclude(r, function (e) {
                            var r = n.element;
                            a.push(e), t.enter(e, r.parent(), r)
                        })
                    }))
                })
            }
        }
    }], Ki = qn({
        transclude: "element", priority: 800, require: "^ngSwitch", link: function (t, e, n, r, i) {
            r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                transclude: i,
                element: e
            })
        }
    }), Zi = qn({
        transclude: "element", priority: 800, require: "^ngSwitch", link: function (t, e, n, r, i) {
            r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: e})
        }
    }), Yi = qn({
        link: function (t, e, n, i, o) {
            if (!o)throw r("ngTransclude")("orphan", q(e));
            o(function (t) {
                e.empty(), e.append(t)
            })
        }
    }), to = ["$templateCache", function (t) {
        return {
            restrict: "E", terminal: !0, compile: function (e, n) {
                "text/ng-template" == n.type && t.put(n.id, e[0].text)
            }
        }
    }], eo = r("ngOptions"), no = v({terminal: !0}), ro = ["$compile", "$parse", function (t, r) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, a = {$setViewValue: $};
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function (t, e, n) {
                var r, i = this, o = {}, s = a;
                i.databound = n.ngModel, i.init = function (t, e, n) {
                    s = t, r = n
                }, i.addOption = function (e) {
                    J(e, '"option value"'), o[e] = !0, s.$viewValue == e && (t.val(e), r.parent() && r.remove())
                }, i.removeOption = function (t) {
                    this.hasOption(t) && (delete o[t], s.$viewValue == t && this.renderUnknownOption(t))
                }, i.renderUnknownOption = function (e) {
                    e = "? " + me(e) + " ?", r.val(e), t.prepend(r), t.val(e), r.prop("selected", !0)
                }, i.hasOption = function (t) {
                    return o.hasOwnProperty(t)
                }, e.$on("$destroy", function () {
                    i.renderUnknownOption = $
                })
            }],
            link: function (a, u, c, l) {
                function f(t, e, n, r) {
                    n.$render = function () {
                        var t = n.$viewValue;
                        r.hasOption(t) ? (S.parent() && S.remove(), e.val(t), "" === t && d.prop("selected", !0)) : g(t) && d ? e.val("") : r.renderUnknownOption(t)
                    }, e.on("change", function () {
                        t.$apply(function () {
                            S.parent() && S.remove(), n.$setViewValue(e.val())
                        })
                    })
                }

                function h(t, e, n) {
                    var r;
                    n.$render = function () {
                        var t = new ye(n.$viewValue);
                        o(e.find("option"), function (e) {
                            e.selected = m(t.get(e.value))
                        })
                    }, t.$watch(function () {
                        P(r, n.$viewValue) || (r = N(n.$viewValue), n.$render())
                    }), e.on("change", function () {
                        t.$apply(function () {
                            var t = [];
                            o(e.find("option"), function (e) {
                                e.selected && t.push(e.value)
                            }), n.$setViewValue(t)
                        })
                    })
                }

                function p(e, o, a) {
                    function u() {
                        var t, n, r, i, u, c = {"": []}, y = [""];
                        r = a.$modelValue, i = g(e) || [];
                        var k, A, E, O = h ? s(i) : i;
                        if (A = {}, E = !1, v)if (n = a.$modelValue, S && sr(n))for (E = new ye([]), t = {}, u = 0; u < n.length; u++)t[f] = n[u], E.put(S(e, t), n[u]); else E = new ye(n);
                        u = E;
                        var T, M;
                        for (E = 0; k = O.length, k > E; E++) {
                            if (n = E, h) {
                                if (n = O[E], "$" === n.charAt(0))continue;
                                A[h] = n
                            }
                            A[f] = i[n], t = p(e, A) || "", (n = c[t]) || (n = c[t] = [], y.push(t)), v ? t = m(u.remove(S ? S(e, A) : d(e, A))) : (S ? (t = {}, t[f] = r, t = S(e, t) === S(e, A)) : t = r === d(e, A), u = u || t), T = l(e, A), T = m(T) ? T : "", n.push({
                                id: S ? S(e, A) : h ? O[E] : E,
                                label: T,
                                selected: t
                            })
                        }
                        for (v || (w || null === r ? c[""].unshift({
                            id: "",
                            label: "",
                            selected: !u
                        }) : u || c[""].unshift({id: "?", label: "", selected: !0})), A = 0, O = y.length; O > A; A++) {
                            for (t = y[A], n = c[t], C.length <= A ? (r = {
                                element: x.clone().attr("label", t),
                                label: n.label
                            }, i = [r], C.push(i), o.append(r.element)) : (i = C[A], r = i[0], r.label != t && r.element.attr("label", r.label = t)), T = null, E = 0, k = n.length; k > E; E++)t = n[E], (u = i[E + 1]) ? (T = u.element, u.label !== t.label && (T.text(u.label = t.label), T.prop("label", u.label)), u.id !== t.id && T.val(u.id = t.id), T[0].selected !== t.selected && (T.prop("selected", u.selected = t.selected), Bn && T.prop("selected", u.selected))) : ("" === t.id && w ? M = w : (M = b.clone()).val(t.id).prop("selected", t.selected).attr("selected", t.selected).prop("label", t.label).text(t.label), i.push({
                                element: M,
                                label: t.label,
                                id: t.id,
                                selected: t.selected
                            }), $.addOption(t.label, M), T ? T.after(M) : r.element.append(M), T = M);
                            for (E++; i.length > E;)t = i.pop(), $.removeOption(t.label), t.element.remove()
                        }
                        for (; C.length > A;)C.pop()[0].element.remove()
                    }

                    var c;
                    if (!(c = y.match(i)))throw eo("iexp", y, q(o));
                    var l = r(c[2] || c[1]), f = c[4] || c[6], h = c[5], p = r(c[3] || ""), d = r(c[2] ? c[1] : f), g = r(c[7]), S = c[8] ? r(c[8]) : null, C = [[{
                        element: o,
                        label: ""
                    }]];
                    w && (t(w)(e), w.removeClass("ng-scope"), w.remove()), o.empty(), o.on("change", function () {
                        e.$apply(function () {
                            var t, r, i, s, c, l, p, $, m = g(e) || [], y = {};
                            if (v) {
                                for (i = [], c = 0, p = C.length; p > c; c++)for (t = C[c], s = 1, l = t.length; l > s; s++)if ((r = t[s].element)[0].selected) {
                                    if (r = r.val(), h && (y[h] = r), S)for ($ = 0; $ < m.length && (y[f] = m[$], S(e, y) != r); $++); else y[f] = m[r];
                                    i.push(d(e, y))
                                }
                            } else if (r = o.val(), "?" == r)i = n; else if ("" === r)i = null; else if (S) {
                                for ($ = 0; $ < m.length; $++)if (y[f] = m[$], S(e, y) == r) {
                                    i = d(e, y);
                                    break
                                }
                            } else y[f] = m[r], h && (y[h] = r), i = d(e, y);
                            a.$setViewValue(i), u()
                        })
                    }), a.$render = u, e.$watchCollection(g, u), e.$watchCollection(function () {
                        var t = {}, n = g(e);
                        if (n) {
                            for (var r = Array(n.length), i = 0, o = n.length; o > i; i++)t[f] = n[i], r[i] = l(e, t);
                            return r
                        }
                    }, u), v && e.$watchCollection(function () {
                        return a.$modelValue
                    }, u)
                }

                if (l[1]) {
                    var $ = l[0];
                    l = l[1];
                    var d, v = c.multiple, y = c.ngOptions, w = !1, b = Wn(e.createElement("option")), x = Wn(e.createElement("optgroup")), S = b.clone();
                    c = 0;
                    for (var C = u.children(), k = C.length; k > c; c++)if ("" === C[c].value) {
                        d = w = C.eq(c);
                        break
                    }
                    $.init(l, w, S), v && (l.$isEmpty = function (t) {
                        return !t || 0 === t.length
                    }), y ? p(a, u, l) : v ? h(a, u, l) : f(a, u, l, $)
                }
            }
        }
    }], io = ["$interpolate", function (t) {
        var e = {addOption: $, removeOption: $};
        return {
            restrict: "E", priority: 100, compile: function (n, r) {
                if (g(r.value)) {
                    var i = t(n.text(), !0);
                    i || r.$set("value", n.text())
                }
                return function (t, n, r) {
                    var o = n.parent(), s = o.data("$selectController") || o.parent().data("$selectController");
                    s && s.databound ? n.prop("selected", !1) : s = e, i ? t.$watch(i, function (t, e) {
                        r.$set("value", t), t !== e && s.removeOption(e), s.addOption(t)
                    }) : s.addOption(r.value), n.on("$destroy", function () {
                        s.removeOption(r.value)
                    })
                }
            }
        }
    }], oo = v({restrict: "E", terminal: !0});
    t.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Qn = t.jQuery) && Qn.fn.on ? (Wn = Qn, f(Qn.fn, {
        scope: Sr.scope,
        isolateScope: Sr.isolateScope,
        controller: Sr.controller,
        injector: Sr.injector,
        inheritedData: Sr.inheritedData
    }), ee("remove", !0, !0, !1), ee("empty", !1, !1, !1), ee("html", !1, !1, !0)) : Wn = ne, ir.element = Wn, Y(ir), Wn(e).ready(function () {
        z(e, B)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function (e, t, n) {
    function a(e) {
        for (var t in e)if (void 0 !== r.style[t])return e[t]
    }

    var i = function (a, r, o) {
        o = o || {};
        var l = e.defer(), s = i[o.animation ? "animationEndEventName" : "transitionEndEventName"], c = function () {
            n.$apply(function () {
                a.unbind(s, c), l.resolve(a)
            })
        };
        return s && a.bind(s, c), t(function () {
            angular.isString(r) ? a.addClass(r) : angular.isFunction(r) ? r(a) : angular.isObject(r) && a.css(r), s || l.resolve(a)
        }), l.promise.cancel = function () {
            s && a.unbind(s, c), l.reject("Transition cancelled")
        }, l.promise
    }, r = document.createElement("trans"), o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
    }, l = {
        WebkitTransition: "webkitAnimationEnd",
        MozTransition: "animationend",
        OTransition: "oAnimationEnd",
        transition: "animationend"
    };
    return i.transitionEndEventName = a(o), i.animationEndEventName = a(l), i
}]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function (e) {
    return {
        link: function (t, n, a) {
            function i(t) {
                function a() {
                    c === i && (c = void 0)
                }

                var i = e(n, t);
                return c && c.cancel(), c = i, i.then(a, a), i
            }

            function r() {
                u ? (u = !1, o()) : (n.removeClass("collapse").addClass("collapsing"), i({height: n[0].scrollHeight + "px"}).then(o))
            }

            function o() {
                n.removeClass("collapsing"), n.addClass("collapse in"), n.css({height: "auto"})
            }

            function l() {
                u ? (u = !1, s(), n.css({height: 0})) : (n.css({height: n[0].scrollHeight + "px"}), n[0].offsetWidth, n.removeClass("collapse in").addClass("collapsing"), i({height: 0}).then(s))
            }

            function s() {
                n.removeClass("collapsing"), n.addClass("collapse")
            }

            var c, u = !0;
            t.$watch(a.collapse, function (e) {
                e ? l() : r()
            })
        }
    }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function (e, t, n) {
    this.groups = [], this.closeOthers = function (a) {
        var i = angular.isDefined(t.closeOthers) ? e.$eval(t.closeOthers) : n.closeOthers;
        i && angular.forEach(this.groups, function (e) {
            e !== a && (e.isOpen = !1)
        })
    }, this.addGroup = function (e) {
        var t = this;
        this.groups.push(e), e.$on("$destroy", function () {
            t.removeGroup(e)
        })
    }, this.removeGroup = function (e) {
        var t = this.groups.indexOf(e);
        -1 !== t && this.groups.splice(t, 1)
    }
}]).directive("accordion", function () {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function () {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {heading: "@", isOpen: "=?", isDisabled: "=?"},
        controller: function () {
            this.setHeading = function (e) {
                this.heading = e
            }
        },
        link: function (e, t, n, a) {
            a.addGroup(e), e.$watch("isOpen", function (t) {
                t && a.closeOthers(e)
            }), e.toggleOpen = function () {
                e.isDisabled || (e.isOpen = !e.isOpen)
            }
        }
    }
}).directive("accordionHeading", function () {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function (e, t, n, a, i) {
            a.setHeading(i(e, function () {
            }))
        }
    }
}).directive("accordionTransclude", function () {
    return {
        require: "^accordionGroup", link: function (e, t, n, a) {
            e.$watch(function () {
                return a[n.accordionTransclude]
            }, function (e) {
                e && (t.html(""), t.append(e))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function (e, t) {
    e.closeable = "close"in t
}]).directive("alert", function () {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {type: "@", close: "&"}
    }
}), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
    return function (e, t, n) {
        t.addClass("ng-binding").data("$binding", n.bindHtmlUnsafe), e.$watch(n.bindHtmlUnsafe, function (e) {
            t.html(e || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig", function (e) {
    this.activeClass = e.activeClass || "active", this.toggleEvent = e.toggleEvent || "click"
}]).directive("btnRadio", function () {
    return {
        require: ["btnRadio", "ngModel"], controller: "ButtonsController", link: function (e, t, n, a) {
            var i = a[0], r = a[1];
            r.$render = function () {
                t.toggleClass(i.activeClass, angular.equals(r.$modelValue, e.$eval(n.btnRadio)))
            }, t.bind(i.toggleEvent, function () {
                var a = t.hasClass(i.activeClass);
                (!a || angular.isDefined(n.uncheckable)) && e.$apply(function () {
                    r.$setViewValue(a ? null : e.$eval(n.btnRadio)), r.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function () {
    return {
        require: ["btnCheckbox", "ngModel"], controller: "ButtonsController", link: function (e, t, n, a) {
            function i() {
                return o(n.btnCheckboxTrue, !0)
            }

            function r() {
                return o(n.btnCheckboxFalse, !1)
            }

            function o(t, n) {
                var a = e.$eval(t);
                return angular.isDefined(a) ? a : n
            }

            var l = a[0], s = a[1];
            s.$render = function () {
                t.toggleClass(l.activeClass, angular.equals(s.$modelValue, i()))
            }, t.bind(l.toggleEvent, function () {
                e.$apply(function () {
                    s.$setViewValue(t.hasClass(l.activeClass) ? r() : i()), s.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", function (e, t, n) {
    function a() {
        i();
        var n = +e.interval;
        !isNaN(n) && n >= 0 && (o = t(r, n))
    }

    function i() {
        o && (t.cancel(o), o = null)
    }

    function r() {
        l ? (e.next(), a()) : e.pause()
    }

    var o, l, s = this, c = s.slides = e.slides = [], u = -1;
    s.currentSlide = null;
    var p = !1;
    s.select = e.select = function (i, r) {
        function o() {
            p || (s.currentSlide && angular.isString(r) && !e.noTransition && i.$element ? (i.$element.addClass(r), i.$element[0].offsetWidth, angular.forEach(c, function (e) {
                angular.extend(e, {direction: "", entering: !1, leaving: !1, active: !1})
            }), angular.extend(i, {
                direction: r,
                active: !0,
                entering: !0
            }), angular.extend(s.currentSlide || {}, {
                direction: r,
                leaving: !0
            }), e.$currentTransition = n(i.$element, {}), function (t, n) {
                e.$currentTransition.then(function () {
                    l(t, n)
                }, function () {
                    l(t, n)
                })
            }(i, s.currentSlide)) : l(i, s.currentSlide), s.currentSlide = i, u = d, a())
        }

        function l(t, n) {
            angular.extend(t, {
                direction: "",
                active: !0,
                leaving: !1,
                entering: !1
            }), angular.extend(n || {}, {
                direction: "",
                active: !1,
                leaving: !1,
                entering: !1
            }), e.$currentTransition = null
        }

        var d = c.indexOf(i);
        void 0 === r && (r = d > u ? "next" : "prev"), i && i !== s.currentSlide && (e.$currentTransition ? (e.$currentTransition.cancel(), t(o)) : o())
    }, e.$on("$destroy", function () {
        p = !0
    }), s.indexOfSlide = function (e) {
        return c.indexOf(e)
    }, e.next = function () {
        var t = (u + 1) % c.length;
        return e.$currentTransition ? void 0 : s.select(c[t], "next")
    }, e.prev = function () {
        var t = 0 > u - 1 ? c.length - 1 : u - 1;
        return e.$currentTransition ? void 0 : s.select(c[t], "prev")
    }, e.isActive = function (e) {
        return s.currentSlide === e
    }, e.$watch("interval", a), e.$on("$destroy", i), e.play = function () {
        l || (l = !0, a())
    }, e.pause = function () {
        e.noPause || (l = !1, i())
    }, s.addSlide = function (t, n) {
        t.$element = n, c.push(t), 1 === c.length || t.active ? (s.select(c[c.length - 1]), 1 == c.length && e.play()) : t.active = !1
    }, s.removeSlide = function (e) {
        var t = c.indexOf(e);
        c.splice(t, 1), c.length > 0 && e.active ? s.select(t >= c.length ? c[t - 1] : c[t]) : u > t && u--
    }
}]).directive("carousel", [function () {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        controller: "CarouselController",
        require: "carousel",
        templateUrl: "template/carousel/carousel.html",
        scope: {interval: "=", noTransition: "=", noPause: "="}
    }
}]).directive("slide", function () {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {active: "=?"},
        link: function (e, t, n, a) {
            a.addSlide(e, t), e.$on("$destroy", function () {
                a.removeSlide(e)
            }), e.$watch("active", function (t) {
                t && a.select(e)
            })
        }
    }
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function (e, t) {
    function n(e) {
        var n = [], a = e.split("");
        return angular.forEach(i, function (t, i) {
            var r = e.indexOf(i);
            if (r > -1) {
                e = e.split(""), a[r] = "(" + t.regex + ")", e[r] = "$";
                for (var o = r + 1, l = r + i.length; l > o; o++)a[o] = "", e[o] = "$";
                e = e.join(""), n.push({index: r, apply: t.apply})
            }
        }), {regex: new RegExp("^" + a.join("") + "$"), map: t(n, "index")}
    }

    function a(e, t, n) {
        return 1 === t && n > 28 ? 29 === n && (e % 4 === 0 && e % 100 !== 0 || e % 400 === 0) : 3 === t || 5 === t || 8 === t || 10 === t ? 31 > n : !0
    }

    this.parsers = {};
    var i = {
        yyyy: {
            regex: "\\d{4}", apply: function (e) {
                this.year = +e
            }
        }, yy: {
            regex: "\\d{2}", apply: function (e) {
                this.year = +e + 2e3
            }
        }, y: {
            regex: "\\d{1,4}", apply: function (e) {
                this.year = +e
            }
        }, MMMM: {
            regex: e.DATETIME_FORMATS.MONTH.join("|"), apply: function (t) {
                this.month = e.DATETIME_FORMATS.MONTH.indexOf(t)
            }
        }, MMM: {
            regex: e.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (t) {
                this.month = e.DATETIME_FORMATS.SHORTMONTH.indexOf(t)
            }
        }, MM: {
            regex: "0[1-9]|1[0-2]", apply: function (e) {
                this.month = e - 1
            }
        }, M: {
            regex: "[1-9]|1[0-2]", apply: function (e) {
                this.month = e - 1
            }
        }, dd: {
            regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (e) {
                this.date = +e
            }
        }, d: {
            regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (e) {
                this.date = +e
            }
        }, EEEE: {regex: e.DATETIME_FORMATS.DAY.join("|")}, EEE: {regex: e.DATETIME_FORMATS.SHORTDAY.join("|")}
    };
    this.parse = function (t, i) {
        if (!angular.isString(t) || !i)return t;
        i = e.DATETIME_FORMATS[i] || i, this.parsers[i] || (this.parsers[i] = n(i));
        var r = this.parsers[i], o = r.regex, l = r.map, s = t.match(o);
        if (s && s.length) {
            for (var c, u = {year: 1900, month: 0, date: 1, hours: 0}, p = 1, d = s.length; d > p; p++) {
                var g = l[p - 1];
                g.apply && g.apply.call(u, s[p])
            }
            return a(u.year, u.month, u.date) && (c = new Date(u.year, u.month, u.date, u.hours)), c
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (e, t) {
    function n(e, n) {
        return e.currentStyle ? e.currentStyle[n] : t.getComputedStyle ? t.getComputedStyle(e)[n] : e.style[n]
    }

    function a(e) {
        return "static" === (n(e, "position") || "static")
    }

    var i = function (t) {
        for (var n = e[0], i = t.offsetParent || n; i && i !== n && a(i);)i = i.offsetParent;
        return i || n
    };
    return {
        position: function (t) {
            var n = this.offset(t), a = {top: 0, left: 0}, r = i(t[0]);
            r != e[0] && (a = this.offset(angular.element(r)), a.top += r.clientTop - r.scrollTop, a.left += r.clientLeft - r.scrollLeft);
            var o = t[0].getBoundingClientRect();
            return {
                width: o.width || t.prop("offsetWidth"),
                height: o.height || t.prop("offsetHeight"),
                top: n.top - a.top,
                left: n.left - a.left
            }
        }, offset: function (n) {
            var a = n[0].getBoundingClientRect();
            return {
                width: a.width || n.prop("offsetWidth"),
                height: a.height || n.prop("offsetHeight"),
                top: a.top + (t.pageYOffset || e[0].documentElement.scrollTop),
                left: a.left + (t.pageXOffset || e[0].documentElement.scrollLeft)
            }
        }, positionElements: function (e, t, n, a) {
            var i, r, o, l, s = n.split("-"), c = s[0], u = s[1] || "center";
            i = a ? this.offset(e) : this.position(e), r = t.prop("offsetWidth"), o = t.prop("offsetHeight");
            var p = {
                center: function () {
                    return i.left + i.width / 2 - r / 2
                }, left: function () {
                    return i.left
                }, right: function () {
                    return i.left + i.width
                }
            }, d = {
                center: function () {
                    return i.top + i.height / 2 - o / 2
                }, top: function () {
                    return i.top
                }, bottom: function () {
                    return i.top + i.height
                }
            };
            switch (c) {
                case"right":
                    l = {top: d[u](), left: p[c]()};
                    break;
                case"left":
                    l = {top: d[u](), left: i.left - r};
                    break;
                case"bottom":
                    l = {top: d[c](), left: p[u]()};
                    break;
                default:
                    l = {top: i.top - o, left: p[u]()}
            }
            return l
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function (e, t, n, a, i, r, o, l) {
    var s = this, c = {$setViewValue: angular.noop};
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function (n, i) {
        s[n] = angular.isDefined(t[n]) ? 8 > i ? a(t[n])(e.$parent) : e.$parent.$eval(t[n]) : l[n]
    }), angular.forEach(["minDate", "maxDate"], function (a) {
        t[a] ? e.$parent.$watch(n(t[a]), function (e) {
            s[a] = e ? new Date(e) : null, s.refreshView()
        }) : s[a] = l[a] ? new Date(l[a]) : null
    }), e.datepickerMode = e.datepickerMode || l.datepickerMode, e.uniqueId = "datepicker-" + e.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(t.initDate) ? e.$parent.$eval(t.initDate) : new Date, e.isActive = function (t) {
        return 0 === s.compare(t.date, s.activeDate) ? (e.activeDateId = t.uid, !0) : !1
    }, this.init = function (e) {
        c = e, c.$render = function () {
            s.render()
        }
    }, this.render = function () {
        if (c.$modelValue) {
            var e = new Date(c.$modelValue), t = !isNaN(e);
            t ? this.activeDate = e : r.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), c.$setValidity("date", t)
        }
        this.refreshView()
    }, this.refreshView = function () {
        if (this.element) {
            this._refreshView();
            var e = c.$modelValue ? new Date(c.$modelValue) : null;
            c.$setValidity("date-disabled", !e || this.element && !this.isDisabled(e))
        }
    }, this.createDateObject = function (e, t) {
        var n = c.$modelValue ? new Date(c.$modelValue) : null;
        return {
            date: e,
            label: o(e, t),
            selected: n && 0 === this.compare(e, n),
            disabled: this.isDisabled(e),
            current: 0 === this.compare(e, new Date)
        }
    }, this.isDisabled = function (n) {
        return this.minDate && this.compare(n, this.minDate) < 0 || this.maxDate && this.compare(n, this.maxDate) > 0 || t.dateDisabled && e.dateDisabled({
            date: n,
            mode: e.datepickerMode
        })
    }, this.split = function (e, t) {
        for (var n = []; e.length > 0;)n.push(e.splice(0, t));
        return n
    }, e.select = function (t) {
        if (e.datepickerMode === s.minMode) {
            var n = c.$modelValue ? new Date(c.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), c.$setViewValue(n), c.$render()
        } else s.activeDate = t, e.datepickerMode = s.modes[s.modes.indexOf(e.datepickerMode) - 1]
    }, e.move = function (e) {
        var t = s.activeDate.getFullYear() + e * (s.step.years || 0), n = s.activeDate.getMonth() + e * (s.step.months || 0);
        s.activeDate.setFullYear(t, n, 1), s.refreshView()
    }, e.toggleMode = function (t) {
        t = t || 1, e.datepickerMode === s.maxMode && 1 === t || e.datepickerMode === s.minMode && -1 === t || (e.datepickerMode = s.modes[s.modes.indexOf(e.datepickerMode) + t])
    }, e.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var u = function () {
        i(function () {
            s.element[0].focus()
        }, 0, !1)
    };
    e.$on("datepicker.focus", u), e.keydown = function (t) {
        var n = e.keys[t.which];
        if (n && !t.shiftKey && !t.altKey)if (t.preventDefault(), t.stopPropagation(), "enter" === n || "space" === n) {
            if (s.isDisabled(s.activeDate))return;
            e.select(s.activeDate), u()
        } else!t.ctrlKey || "up" !== n && "down" !== n ? (s.handleKeyDown(n, t), s.refreshView()) : (e.toggleMode("up" === n ? 1 : -1), u())
    }
}]).directive("datepicker", function () {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {datepickerMode: "=?", dateDisabled: "&"},
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function (e, t, n, a) {
            var i = a[0], r = a[1];
            r && i.init(r)
        }
    }
}).directive("daypicker", ["dateFilter", function (e) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/day.html",
        require: "^datepicker",
        link: function (t, n, a, i) {
            function r(e, t) {
                return 1 !== t || e % 4 !== 0 || e % 100 === 0 && e % 400 !== 0 ? s[t] : 29
            }

            function o(e, t) {
                var n = new Array(t), a = new Date(e), i = 0;
                for (a.setHours(12); t > i;)n[i++] = new Date(a), a.setDate(a.getDate() + 1);
                return n
            }

            function l(e) {
                var t = new Date(e);
                t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var n = t.getTime();
                return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
            }

            t.showWeeks = i.showWeeks, i.step = {months: 1}, i.element = n;
            var s = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            i._refreshView = function () {
                var n = i.activeDate.getFullYear(), a = i.activeDate.getMonth(), r = new Date(n, a, 1), s = i.startingDay - r.getDay(), c = s > 0 ? 7 - s : -s, u = new Date(r);
                c > 0 && u.setDate(-c + 1);
                for (var p = o(u, 42), d = 0; 42 > d; d++)p[d] = angular.extend(i.createDateObject(p[d], i.formatDay), {
                    secondary: p[d].getMonth() !== a,
                    uid: t.uniqueId + "-" + d
                });
                t.labels = new Array(7);
                for (var g = 0; 7 > g; g++)t.labels[g] = {
                    abbr: e(p[g].date, i.formatDayHeader),
                    full: e(p[g].date, "EEEE")
                };
                if (t.title = e(i.activeDate, i.formatDayTitle), t.rows = i.split(p, 7), t.showWeeks) {
                    t.weekNumbers = [];
                    for (var m = l(t.rows[0][0].date), f = t.rows.length; t.weekNumbers.push(m++) < f;);
                }
            }, i.compare = function (e, t) {
                return new Date(e.getFullYear(), e.getMonth(), e.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate())
            }, i.handleKeyDown = function (e) {
                var t = i.activeDate.getDate();
                if ("left" === e)t -= 1; else if ("up" === e)t -= 7; else if ("right" === e)t += 1; else if ("down" === e)t += 7; else if ("pageup" === e || "pagedown" === e) {
                    var n = i.activeDate.getMonth() + ("pageup" === e ? -1 : 1);
                    i.activeDate.setMonth(n, 1), t = Math.min(r(i.activeDate.getFullYear(), i.activeDate.getMonth()), t)
                } else"home" === e ? t = 1 : "end" === e && (t = r(i.activeDate.getFullYear(), i.activeDate.getMonth()));
                i.activeDate.setDate(t)
            }, i.refreshView()
        }
    }
}]).directive("monthpicker", ["dateFilter", function (e) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/month.html",
        require: "^datepicker",
        link: function (t, n, a, i) {
            i.step = {years: 1}, i.element = n, i._refreshView = function () {
                for (var n = new Array(12), a = i.activeDate.getFullYear(), r = 0; 12 > r; r++)n[r] = angular.extend(i.createDateObject(new Date(a, r, 1), i.formatMonth), {uid: t.uniqueId + "-" + r});
                t.title = e(i.activeDate, i.formatMonthTitle), t.rows = i.split(n, 3)
            }, i.compare = function (e, t) {
                return new Date(e.getFullYear(), e.getMonth()) - new Date(t.getFullYear(), t.getMonth())
            }, i.handleKeyDown = function (e) {
                var t = i.activeDate.getMonth();
                if ("left" === e)t -= 1; else if ("up" === e)t -= 3; else if ("right" === e)t += 1; else if ("down" === e)t += 3; else if ("pageup" === e || "pagedown" === e) {
                    var n = i.activeDate.getFullYear() + ("pageup" === e ? -1 : 1);
                    i.activeDate.setFullYear(n)
                } else"home" === e ? t = 0 : "end" === e && (t = 11);
                i.activeDate.setMonth(t)
            }, i.refreshView()
        }
    }
}]).directive("yearpicker", ["dateFilter", function () {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/year.html",
        require: "^datepicker",
        link: function (e, t, n, a) {
            function i(e) {
                return parseInt((e - 1) / r, 10) * r + 1
            }

            var r = a.yearRange;
            a.step = {years: r}, a.element = t, a._refreshView = function () {
                for (var t = new Array(r), n = 0, o = i(a.activeDate.getFullYear()); r > n; n++)t[n] = angular.extend(a.createDateObject(new Date(o + n, 0, 1), a.formatYear), {uid: e.uniqueId + "-" + n});
                e.title = [t[0].label, t[r - 1].label].join(" - "), e.rows = a.split(t, 5)
            }, a.compare = function (e, t) {
                return e.getFullYear() - t.getFullYear()
            }, a.handleKeyDown = function (e) {
                var t = a.activeDate.getFullYear();
                "left" === e ? t -= 1 : "up" === e ? t -= 5 : "right" === e ? t += 1 : "down" === e ? t += 5 : "pageup" === e || "pagedown" === e ? t += ("pageup" === e ? -1 : 1) * a.step.years : "home" === e ? t = i(a.activeDate.getFullYear()) : "end" === e && (t = i(a.activeDate.getFullYear()) + r - 1), a.activeDate.setFullYear(t)
            }, a.refreshView()
        }
    }
}]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function (e, t, n, a, i, r, o) {
    return {
        restrict: "EA",
        require: "ngModel",
        scope: {isOpen: "=?", currentText: "@", clearText: "@", closeText: "@", dateDisabled: "&"},
        link: function (l, s, c, u) {
            function p(e) {
                return e.replace(/([A-Z])/g, function (e) {
                    return "-" + e.toLowerCase()
                })
            }

            function d(e) {
                if (e) {
                    if (angular.isDate(e) && !isNaN(e))return u.$setValidity("date", !0), e;
                    if (angular.isString(e)) {
                        var t = r.parse(e, g) || new Date(e);
                        return isNaN(t) ? void u.$setValidity("date", !1) : (u.$setValidity("date", !0), t)
                    }
                    return void u.$setValidity("date", !1)
                }
                return u.$setValidity("date", !0), null
            }

            var g, m = angular.isDefined(c.closeOnDateSelection) ? l.$parent.$eval(c.closeOnDateSelection) : o.closeOnDateSelection, f = angular.isDefined(c.datepickerAppendToBody) ? l.$parent.$eval(c.datepickerAppendToBody) : o.appendToBody;
            l.showButtonBar = angular.isDefined(c.showButtonBar) ? l.$parent.$eval(c.showButtonBar) : o.showButtonBar, l.getText = function (e) {
                return l[e + "Text"] || o[e + "Text"]
            }, c.$observe("datepickerPopup", function (e) {
                g = e || o.datepickerPopup, u.$render()
            });
            var h = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
            h.attr({"ng-model": "date", "ng-change": "dateSelection()"});
            var v = angular.element(h.children()[0]);
            c.datepickerOptions && angular.forEach(l.$parent.$eval(c.datepickerOptions), function (e, t) {
                v.attr(p(t), e)
            }), l.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function (e) {
                if (c[e]) {
                    var n = t(c[e]);
                    if (l.$parent.$watch(n, function (t) {
                            l.watchData[e] = t
                        }), v.attr(p(e), "watchData." + e), "datepickerMode" === e) {
                        var a = n.assign;
                        l.$watch("watchData." + e, function (e, t) {
                            e !== t && a(l.$parent, e)
                        })
                    }
                }
            }), c.dateDisabled && v.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), u.$parsers.unshift(d), l.dateSelection = function (e) {
                angular.isDefined(e) && (l.date = e), u.$setViewValue(l.date), u.$render(), m && (l.isOpen = !1, s[0].focus())
            }, s.bind("input change keyup", function () {
                l.$apply(function () {
                    l.date = u.$modelValue
                })
            }), u.$render = function () {
                var e = u.$viewValue ? i(u.$viewValue, g) : "";
                s.val(e), l.date = d(u.$modelValue)
            };
            var b = function (e) {
                l.isOpen && e.target !== s[0] && l.$apply(function () {
                    l.isOpen = !1
                })
            }, $ = function (e) {
                l.keydown(e)
            };
            s.bind("keydown", $), l.keydown = function (e) {
                27 === e.which ? (e.preventDefault(), e.stopPropagation(), l.close()) : 40 !== e.which || l.isOpen || (l.isOpen = !0)
            }, l.$watch("isOpen", function (e) {
                e ? (l.$broadcast("datepicker.focus"), l.position = f ? a.offset(s) : a.position(s), l.position.top = l.position.top + s.prop("offsetHeight"), n.bind("click", b)) : n.unbind("click", b)
            }), l.select = function (e) {
                if ("today" === e) {
                    var t = new Date;
                    angular.isDate(u.$modelValue) ? (e = new Date(u.$modelValue), e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate())) : e = new Date(t.setHours(0, 0, 0, 0))
                }
                l.dateSelection(e)
            }, l.close = function () {
                l.isOpen = !1, s[0].focus()
            };
            var y = e(h)(l);
            h.remove(), f ? n.find("body").append(y) : s.after(y), l.$on("$destroy", function () {
                y.remove(), s.unbind("keydown", $), n.unbind("click", b)
            })
        }
    }
}]).directive("datepickerPopupWrap", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function (e, t) {
            t.bind("click", function (e) {
                e.preventDefault(), e.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {openClass: "open"}).service("dropdownService", ["$document", function (e) {
    var t = null;
    this.open = function (i) {
        t || (e.bind("click", n), e.bind("keydown", a)), t && t !== i && (t.isOpen = !1), t = i
    }, this.close = function (i) {
        t === i && (t = null, e.unbind("click", n), e.unbind("keydown", a))
    };
    var n = function (e) {
        var n = t.getToggleElement();
        e && n && n[0].contains(e.target) || t.$apply(function () {
            t.isOpen = !1
        })
    }, a = function (e) {
        27 === e.which && (t.focusToggleElement(), n())
    }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function (e, t, n, a, i, r) {
    var o, l = this, s = e.$new(), c = a.openClass, u = angular.noop, p = t.onToggle ? n(t.onToggle) : angular.noop;
    this.init = function (a) {
        l.$element = a, t.isOpen && (o = n(t.isOpen), u = o.assign, e.$watch(o, function (e) {
            s.isOpen = !!e
        }))
    }, this.toggle = function (e) {
        return s.isOpen = arguments.length ? !!e : !s.isOpen
    }, this.isOpen = function () {
        return s.isOpen
    }, s.getToggleElement = function () {
        return l.toggleElement
    }, s.focusToggleElement = function () {
        l.toggleElement && l.toggleElement[0].focus()
    }, s.$watch("isOpen", function (t, n) {
        r[t ? "addClass" : "removeClass"](l.$element, c), t ? (s.focusToggleElement(), i.open(s)) : i.close(s), u(e, t), angular.isDefined(t) && t !== n && p(e, {open: !!t})
    }), e.$on("$locationChangeSuccess", function () {
        s.isOpen = !1
    }), e.$on("$destroy", function () {
        s.$destroy()
    })
}]).directive("dropdown", function () {
    return {
        restrict: "CA", controller: "DropdownController", link: function (e, t, n, a) {
            a.init(t)
        }
    }
}).directive("dropdownToggle", function () {
    return {
        restrict: "CA", require: "?^dropdown", link: function (e, t, n, a) {
            if (a) {
                a.toggleElement = t;
                var i = function (i) {
                    i.preventDefault(), t.hasClass("disabled") || n.disabled || e.$apply(function () {
                        a.toggle()
                    })
                };
                t.bind("click", i), t.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), e.$watch(a.isOpen, function (e) {
                    t.attr("aria-expanded", !!e)
                }), e.$on("$destroy", function () {
                    t.unbind("click", i)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function () {
    return {
        createNew: function () {
            var e = [];
            return {
                add: function (t, n) {
                    e.push({key: t, value: n})
                }, get: function (t) {
                    for (var n = 0; n < e.length; n++)if (t == e[n].key)return e[n]
                }, keys: function () {
                    for (var t = [], n = 0; n < e.length; n++)t.push(e[n].key);
                    return t
                }, top: function () {
                    return e[e.length - 1]
                }, remove: function (t) {
                    for (var n = -1, a = 0; a < e.length; a++)if (t == e[a].key) {
                        n = a;
                        break
                    }
                    return e.splice(n, 1)[0]
                }, removeTop: function () {
                    return e.splice(e.length - 1, 1)[0]
                }, length: function () {
                    return e.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout", function (e) {
    return {
        restrict: "EA", replace: !0, templateUrl: "template/modal/backdrop.html", link: function (t, n, a) {
            t.backdropClass = a.backdropClass || "", t.animate = !1, e(function () {
                t.animate = !0
            })
        }
    }
}]).directive("modalWindow", ["$modalStack", "$timeout", function (e, t) {
    return {
        restrict: "EA",
        scope: {index: "@", animate: "="},
        replace: !0,
        transclude: !0,
        templateUrl: function (e, t) {
            return t.templateUrl || "template/modal/window.html"
        },
        link: function (n, a, i) {
            a.addClass(i.windowClass || ""), n.size = i.size, t(function () {
                n.animate = !0, a[0].querySelectorAll("[autofocus]").length || a[0].focus()
            }), n.close = function (t) {
                var n = e.getTop();
                n && n.value.backdrop && "static" != n.value.backdrop && t.target === t.currentTarget && (t.preventDefault(), t.stopPropagation(), e.dismiss(n.key, "backdrop click"))
            }
        }
    }
}]).directive("modalTransclude", function () {
    return {
        link: function (e, t, n, a, i) {
            i(e.$parent, function (e) {
                t.empty(), t.append(e)
            })
        }
    }
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function (e, t, n, a, i, r) {
    function o() {
        for (var e = -1, t = g.keys(), n = 0; n < t.length; n++)g.get(t[n]).value.backdrop && (e = n);
        return e
    }

    function l(e) {
        var t = n.find("body").eq(0), a = g.get(e).value;
        g.remove(e), c(a.modalDomEl, a.modalScope, 300, function () {
            a.modalScope.$destroy(), t.toggleClass(d, g.length() > 0), s()
        })
    }

    function s() {
        if (u && -1 == o()) {
            var e = p;
            c(u, p, 150, function () {
                e.$destroy(), e = null
            }), u = void 0, p = void 0
        }
    }

    function c(n, a, i, r) {
        function o() {
            o.done || (o.done = !0, n.remove(), r && r())
        }

        a.animate = !1;
        var l = e.transitionEndEventName;
        if (l) {
            var s = t(o, i);
            n.bind(l, function () {
                t.cancel(s), o(), a.$apply()
            })
        } else t(o)
    }

    var u, p, d = "modal-open", g = r.createNew(), m = {};
    return i.$watch(o, function (e) {
        p && (p.index = e)
    }), n.bind("keydown", function (e) {
        var t;
        27 === e.which && (t = g.top(), t && t.value.keyboard && (e.preventDefault(), i.$apply(function () {
            m.dismiss(t.key, "escape key press")
        })))
    }), m.open = function (e, t) {
        g.add(e, {deferred: t.deferred, modalScope: t.scope, backdrop: t.backdrop, keyboard: t.keyboard});
        var r = n.find("body").eq(0), l = o();
        if (l >= 0 && !u) {
            p = i.$new(!0), p.index = l;
            var s = angular.element("<div modal-backdrop></div>");
            s.attr("backdrop-class", t.backdropClass), u = a(s)(p), r.append(u)
        }
        var c = angular.element("<div modal-window></div>");
        c.attr({
            "template-url": t.windowTemplateUrl,
            "window-class": t.windowClass,
            size: t.size,
            index: g.length() - 1,
            animate: "animate"
        }).html(t.content);
        var m = a(c)(t.scope);
        g.top().value.modalDomEl = m, r.append(m), r.addClass(d)
    }, m.close = function (e, t) {
        var n = g.get(e);
        n && (n.value.deferred.resolve(t), l(e))
    }, m.dismiss = function (e, t) {
        var n = g.get(e);
        n && (n.value.deferred.reject(t), l(e))
    }, m.dismissAll = function (e) {
        for (var t = this.getTop(); t;)this.dismiss(t.key, e), t = this.getTop()
    }, m.getTop = function () {
        return g.top()
    }, m
}]).provider("$modal", function () {
    var e = {
        options: {backdrop: !0, keyboard: !0},
        $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function (t, n, a, i, r, o, l) {
            function s(e) {
                return e.template ? a.when(e.template) : i.get(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl, {cache: r}).then(function (e) {
                    return e.data
                })
            }

            function c(e) {
                var n = [];
                return angular.forEach(e, function (e) {
                    (angular.isFunction(e) || angular.isArray(e)) && n.push(a.when(t.invoke(e)))
                }), n
            }

            var u = {};
            return u.open = function (t) {
                var i = a.defer(), r = a.defer(), u = {
                    result: i.promise, opened: r.promise, close: function (e) {
                        l.close(u, e)
                    }, dismiss: function (e) {
                        l.dismiss(u, e)
                    }
                };
                if (t = angular.extend({}, e.options, t), t.resolve = t.resolve || {}, !t.template && !t.templateUrl)throw new Error("One of template or templateUrl options is required.");
                var p = a.all([s(t)].concat(c(t.resolve)));
                return p.then(function (e) {
                    var a = (t.scope || n).$new();
                    a.$close = u.close, a.$dismiss = u.dismiss;
                    var r, s = {}, c = 1;
                    t.controller && (s.$scope = a, s.$modalInstance = u, angular.forEach(t.resolve, function (t, n) {
                        s[n] = e[c++]
                    }), r = o(t.controller, s), t.controllerAs && (a[t.controllerAs] = r)), l.open(u, {
                        scope: a,
                        deferred: i,
                        content: e[0],
                        backdrop: t.backdrop,
                        keyboard: t.keyboard,
                        backdropClass: t.backdropClass,
                        windowClass: t.windowClass,
                        windowTemplateUrl: t.windowTemplateUrl,
                        size: t.size
                    })
                }, function (e) {
                    i.reject(e)
                }), p.then(function () {
                    r.resolve(!0)
                }, function () {
                    r.reject(!1)
                }), u
            }, u
        }]
    };
    return e
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function (e, t, n) {
    var a = this, i = {$setViewValue: angular.noop}, r = t.numPages ? n(t.numPages).assign : angular.noop;
    this.init = function (r, o) {
        i = r, this.config = o, i.$render = function () {
            a.render()
        }, t.itemsPerPage ? e.$parent.$watch(n(t.itemsPerPage), function (t) {
            a.itemsPerPage = parseInt(t, 10), e.totalPages = a.calculateTotalPages()
        }) : this.itemsPerPage = o.itemsPerPage
    }, this.calculateTotalPages = function () {
        var t = this.itemsPerPage < 1 ? 1 : Math.ceil(e.totalItems / this.itemsPerPage);
        return Math.max(t || 0, 1)
    }, this.render = function () {
        e.page = parseInt(i.$viewValue, 10) || 1
    }, e.selectPage = function (t) {
        e.page !== t && t > 0 && t <= e.totalPages && (i.$setViewValue(t), i.$render())
    }, e.getText = function (t) {
        return e[t + "Text"] || a.config[t + "Text"]
    }, e.noPrevious = function () {
        return 1 === e.page
    }, e.noNext = function () {
        return e.page === e.totalPages
    }, e.$watch("totalItems", function () {
        e.totalPages = a.calculateTotalPages()
    }), e.$watch("totalPages", function (t) {
        r(e.$parent, t), e.page > t ? e.selectPage(t) : i.$render()
    })
}]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig", function (e, t) {
    return {
        restrict: "EA",
        scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@"},
        require: ["pagination", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function (n, a, i, r) {
            function o(e, t, n) {
                return {number: e, text: t, active: n}
            }

            function l(e, t) {
                var n = [], a = 1, i = t, r = angular.isDefined(u) && t > u;
                r && (p ? (a = Math.max(e - Math.floor(u / 2), 1), i = a + u - 1, i > t && (i = t, a = i - u + 1)) : (a = (Math.ceil(e / u) - 1) * u + 1, i = Math.min(a + u - 1, t)));
                for (var l = a; i >= l; l++) {
                    var s = o(l, l, l === e);
                    n.push(s)
                }
                if (r && !p) {
                    if (a > 1) {
                        var c = o(a - 1, "...", !1);
                        n.unshift(c)
                    }
                    if (t > i) {
                        var d = o(i + 1, "...", !1);
                        n.push(d)
                    }
                }
                return n
            }

            var s = r[0], c = r[1];
            if (c) {
                var u = angular.isDefined(i.maxSize) ? n.$parent.$eval(i.maxSize) : t.maxSize, p = angular.isDefined(i.rotate) ? n.$parent.$eval(i.rotate) : t.rotate;
                n.boundaryLinks = angular.isDefined(i.boundaryLinks) ? n.$parent.$eval(i.boundaryLinks) : t.boundaryLinks, n.directionLinks = angular.isDefined(i.directionLinks) ? n.$parent.$eval(i.directionLinks) : t.directionLinks, s.init(c, t), i.maxSize && n.$parent.$watch(e(i.maxSize), function (e) {
                    u = parseInt(e, 10), s.render()
                });
                var d = s.render;
                s.render = function () {
                    d(), n.page > 0 && n.page <= n.totalPages && (n.pages = l(n.page, n.totalPages))
                }
            }
        }
    }
}]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "Â« Previous",
    nextText: "Next Â»",
    align: !0
}).directive("pager", ["pagerConfig", function (e) {
    return {
        restrict: "EA",
        scope: {totalItems: "=", previousText: "@", nextText: "@"},
        require: ["pager", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function (t, n, a, i) {
            var r = i[0], o = i[1];
            o && (t.align = angular.isDefined(a.align) ? t.$parent.$eval(a.align) : e.align, r.init(o, e))
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
    function e(e) {
        var t = /[A-Z]/g, n = "-";
        return e.replace(t, function (e, t) {
            return (t ? n : "") + e.toLowerCase()
        })
    }

    var t = {placement: "top", animation: !0, popupDelay: 0}, n = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur"
    }, a = {};
    this.options = function (e) {
        angular.extend(a, e)
    }, this.setTriggers = function (e) {
        angular.extend(n, e)
    }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function (i, r, o, l, s, c, u) {
        return function (i, p, d) {
            function g(e) {
                var t = e || m.trigger || d, a = n[t] || t;
                return {show: t, hide: a}
            }

            var m = angular.extend({}, t, a), f = e(i), h = u.startSymbol(), v = u.endSymbol(), b = "<div " + f + '-popup title="' + h + "tt_title" + v + '" content="' + h + "tt_content" + v + '" placement="' + h + "tt_placement" + v + '" animation="tt_animation" is-open="tt_isOpen"></div>';
            return {
                restrict: "EA", scope: !0, compile: function () {
                    var e = r(b);
                    return function (t, n, a) {
                        function r() {
                            t.tt_isOpen ? d() : u()
                        }

                        function u() {
                            (!D || t.$eval(a[p + "Enable"])) && (t.tt_popupDelay ? w || (w = o(f, t.tt_popupDelay, !1), w.then(function (e) {
                                e()
                            })) : f()())
                        }

                        function d() {
                            t.$apply(function () {
                                h()
                            })
                        }

                        function f() {
                            return w = null, y && (o.cancel(y), y = null), t.tt_content ? (v(), $.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), k ? s.find("body").append($) : n.after($), M(), t.tt_isOpen = !0, t.$digest(), M) : angular.noop
                        }

                        function h() {
                            t.tt_isOpen = !1, o.cancel(w), w = null, t.tt_animation ? y || (y = o(b, 500)) : b()
                        }

                        function v() {
                            $ && b(), $ = e(t, function () {
                            }), t.$digest()
                        }

                        function b() {
                            y = null, $ && ($.remove(), $ = null)
                        }

                        var $, y, w, k = angular.isDefined(m.appendToBody) ? m.appendToBody : !1, x = g(void 0), D = angular.isDefined(a[p + "Enable"]), M = function () {
                            var e = c.positionElements(n, $, t.tt_placement, k);
                            e.top += "px", e.left += "px", $.css(e)
                        };
                        t.tt_isOpen = !1, a.$observe(i, function (e) {
                            t.tt_content = e, !e && t.tt_isOpen && h()
                        }), a.$observe(p + "Title", function (e) {
                            t.tt_title = e
                        }), a.$observe(p + "Placement", function (e) {
                            t.tt_placement = angular.isDefined(e) ? e : m.placement
                        }), a.$observe(p + "PopupDelay", function (e) {
                            var n = parseInt(e, 10);
                            t.tt_popupDelay = isNaN(n) ? m.popupDelay : n
                        });
                        var T = function () {
                            n.unbind(x.show, u), n.unbind(x.hide, d)
                        };
                        a.$observe(p + "Trigger", function (e) {
                            T(), x = g(e), x.show === x.hide ? n.bind(x.show, r) : (n.bind(x.show, u), n.bind(x.hide, d))
                        });
                        var C = t.$eval(a[p + "Animation"]);
                        t.tt_animation = angular.isDefined(C) ? !!C : m.animation, a.$observe(p + "AppendToBody", function (e) {
                            k = angular.isDefined(e) ? l(e)(t) : k
                        }), k && t.$on("$locationChangeSuccess", function () {
                            t.tt_isOpen && h()
                        }), t.$on("$destroy", function () {
                            o.cancel(y), o.cancel(w), T(), b()
                        })
                    }
                }
            }
        }
    }]
}).directive("tooltipPopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {content: "@", placement: "@", animation: "&", isOpen: "&"},
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip", function (e) {
    return e("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {content: "@", placement: "@", animation: "&", isOpen: "&"},
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip", function (e) {
    return e("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {title: "@", content: "@", placement: "@", animation: "&", isOpen: "&"},
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip", function (e) {
    return e("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function (e, t, n) {
    var a = this, i = angular.isDefined(t.animate) ? e.$parent.$eval(t.animate) : n.animate;
    this.bars = [], e.max = angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max, this.addBar = function (t, n) {
        i || n.css({transition: "none"}), this.bars.push(t), t.$watch("value", function (n) {
            t.percent = +(100 * n / e.max).toFixed(2)
        }), t.$on("$destroy", function () {
            n = null, a.removeBar(t)
        })
    }, this.removeBar = function (e) {
        this.bars.splice(this.bars.indexOf(e), 1)
    }
}]).directive("progress", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {value: "=", type: "@"},
        templateUrl: "template/progressbar/bar.html",
        link: function (e, t, n, a) {
            a.addBar(e, t)
        }
    }
}).directive("progressbar", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {value: "=", type: "@"},
        templateUrl: "template/progressbar/progressbar.html",
        link: function (e, t, n, a) {
            a.addBar(e, angular.element(t.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function (e, t, n) {
    var a = {$setViewValue: angular.noop};
    this.init = function (i) {
        a = i, a.$render = this.render, this.stateOn = angular.isDefined(t.stateOn) ? e.$parent.$eval(t.stateOn) : n.stateOn, this.stateOff = angular.isDefined(t.stateOff) ? e.$parent.$eval(t.stateOff) : n.stateOff;
        var r = angular.isDefined(t.ratingStates) ? e.$parent.$eval(t.ratingStates) : new Array(angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max);
        e.range = this.buildTemplateObjects(r)
    }, this.buildTemplateObjects = function (e) {
        for (var t = 0, n = e.length; n > t; t++)e[t] = angular.extend({index: t}, {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, e[t]);
        return e
    }, e.rate = function (t) {
        !e.readonly && t >= 0 && t <= e.range.length && (a.$setViewValue(t), a.$render())
    }, e.enter = function (t) {
        e.readonly || (e.value = t), e.onHover({value: t})
    }, e.reset = function () {
        e.value = a.$viewValue, e.onLeave()
    }, e.onKeydown = function (t) {
        /(37|38|39|40)/.test(t.which) && (t.preventDefault(), t.stopPropagation(), e.rate(e.value + (38 === t.which || 39 === t.which ? 1 : -1)))
    }, this.render = function () {
        e.value = a.$viewValue
    }
}]).directive("rating", function () {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {readonly: "=?", onHover: "&", onLeave: "&"},
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function (e, t, n, a) {
            var i = a[0], r = a[1];
            r && i.init(r)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (e) {
    var t = this, n = t.tabs = e.tabs = [];
    t.select = function (e) {
        angular.forEach(n, function (t) {
            t.active && t !== e && (t.active = !1, t.onDeselect())
        }), e.active = !0, e.onSelect()
    }, t.addTab = function (e) {
        n.push(e), 1 === n.length ? e.active = !0 : e.active && t.select(e)
    }, t.removeTab = function (e) {
        var a = n.indexOf(e);
        if (e.active && n.length > 1) {
            var i = a == n.length - 1 ? a - 1 : a + 1;
            t.select(n[i])
        }
        n.splice(a, 1)
    }
}]).directive("tabset", function () {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {type: "@"},
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function (e, t, n) {
            e.vertical = angular.isDefined(n.vertical) ? e.$parent.$eval(n.vertical) : !1, e.justified = angular.isDefined(n.justified) ? e.$parent.$eval(n.justified) : !1
        }
    }
}).directive("tab", ["$parse", function (e) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect"},
        controller: function () {
        },
        compile: function (t, n, a) {
            return function (t, n, i, r) {
                t.$watch("active", function (e) {
                    e && r.select(t)
                }), t.disabled = !1, i.disabled && t.$parent.$watch(e(i.disabled), function (e) {
                    t.disabled = !!e
                }), t.select = function () {
                    t.disabled || (t.active = !0)
                }, r.addTab(t), t.$on("$destroy", function () {
                    r.removeTab(t)
                }), t.$transcludeFn = a
            }
        }
    }
}]).directive("tabHeadingTransclude", [function () {
    return {
        restrict: "A", require: "^tab", link: function (e, t) {
            e.$watch("headingElement", function (e) {
                e && (t.html(""), t.append(e))
            })
        }
    }
}]).directive("tabContentTransclude", function () {
    function e(e) {
        return e.tagName && (e.hasAttribute("tab-heading") || e.hasAttribute("data-tab-heading") || "tab-heading" === e.tagName.toLowerCase() || "data-tab-heading" === e.tagName.toLowerCase())
    }

    return {
        restrict: "A", require: "^tabset", link: function (t, n, a) {
            var i = t.$eval(a.tabContentTransclude);
            i.$transcludeFn(i.$parent, function (t) {
                angular.forEach(t, function (t) {
                    e(t) ? i.headingElement = t : n.append(t)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function (e, t, n, a, i, r) {
    function o() {
        var t = parseInt(e.hours, 10), n = e.showMeridian ? t > 0 && 13 > t : t >= 0 && 24 > t;
        return n ? (e.showMeridian && (12 === t && (t = 0), e.meridian === f[1] && (t += 12)), t) : void 0
    }

    function l() {
        var t = parseInt(e.minutes, 10);
        return t >= 0 && 60 > t ? t : void 0
    }

    function s(e) {
        return angular.isDefined(e) && e.toString().length < 2 ? "0" + e : e
    }

    function c(e) {
        u(), m.$setViewValue(new Date(g)), p(e)
    }

    function u() {
        m.$setValidity("time", !0), e.invalidHours = !1, e.invalidMinutes = !1
    }

    function p(t) {
        var n = g.getHours(), a = g.getMinutes();
        e.showMeridian && (n = 0 === n || 12 === n ? 12 : n % 12), e.hours = "h" === t ? n : s(n), e.minutes = "m" === t ? a : s(a), e.meridian = g.getHours() < 12 ? f[0] : f[1]
    }

    function d(e) {
        var t = new Date(g.getTime() + 6e4 * e);
        g.setHours(t.getHours(), t.getMinutes()), c()
    }

    var g = new Date, m = {$setViewValue: angular.noop}, f = angular.isDefined(t.meridians) ? e.$parent.$eval(t.meridians) : r.meridians || i.DATETIME_FORMATS.AMPMS;
    this.init = function (n, a) {
        m = n, m.$render = this.render;
        var i = a.eq(0), o = a.eq(1), l = angular.isDefined(t.mousewheel) ? e.$parent.$eval(t.mousewheel) : r.mousewheel;
        l && this.setupMousewheelEvents(i, o), e.readonlyInput = angular.isDefined(t.readonlyInput) ? e.$parent.$eval(t.readonlyInput) : r.readonlyInput, this.setupInputEvents(i, o)
    };
    var h = r.hourStep;
    t.hourStep && e.$parent.$watch(n(t.hourStep), function (e) {
        h = parseInt(e, 10)
    });
    var v = r.minuteStep;
    t.minuteStep && e.$parent.$watch(n(t.minuteStep), function (e) {
        v = parseInt(e, 10)
    }), e.showMeridian = r.showMeridian, t.showMeridian && e.$parent.$watch(n(t.showMeridian), function (t) {
        if (e.showMeridian = !!t, m.$error.time) {
            var n = o(), a = l();
            angular.isDefined(n) && angular.isDefined(a) && (g.setHours(n), c())
        } else p()
    }), this.setupMousewheelEvents = function (t, n) {
        var a = function (e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
            return e.detail || t > 0
        };
        t.bind("mousewheel wheel", function (t) {
            e.$apply(a(t) ? e.incrementHours() : e.decrementHours()), t.preventDefault()
        }), n.bind("mousewheel wheel", function (t) {
            e.$apply(a(t) ? e.incrementMinutes() : e.decrementMinutes()), t.preventDefault()
        })
    }, this.setupInputEvents = function (t, n) {
        if (e.readonlyInput)return e.updateHours = angular.noop, void(e.updateMinutes = angular.noop);
        var a = function (t, n) {
            m.$setViewValue(null), m.$setValidity("time", !1), angular.isDefined(t) && (e.invalidHours = t), angular.isDefined(n) && (e.invalidMinutes = n)
        };
        e.updateHours = function () {
            var e = o();
            angular.isDefined(e) ? (g.setHours(e), c("h")) : a(!0)
        }, t.bind("blur", function () {
            !e.invalidHours && e.hours < 10 && e.$apply(function () {
                e.hours = s(e.hours)
            })
        }), e.updateMinutes = function () {
            var e = l();
            angular.isDefined(e) ? (g.setMinutes(e), c("m")) : a(void 0, !0)
        }, n.bind("blur", function () {
            !e.invalidMinutes && e.minutes < 10 && e.$apply(function () {
                e.minutes = s(e.minutes)
            })
        })
    }, this.render = function () {
        var e = m.$modelValue ? new Date(m.$modelValue) : null;
        isNaN(e) ? (m.$setValidity("time", !1), a.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (e && (g = e), u(), p())
    }, e.incrementHours = function () {
        d(60 * h)
    }, e.decrementHours = function () {
        d(60 * -h)
    }, e.incrementMinutes = function () {
        d(v)
    }, e.decrementMinutes = function () {
        d(-v)
    }, e.toggleMeridian = function () {
        d(720 * (g.getHours() < 12 ? 1 : -1))
    }
}]).directive("timepicker", function () {
    return {
        restrict: "EA",
        require: ["timepicker", "?^ngModel"],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function (e, t, n, a) {
            var i = a[0], r = a[1];
            r && i.init(r, t.find("input"))
        }
    }
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function (e) {
    var t = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
        parse: function (n) {
            var a = n.match(t);
            if (!a)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + n + '".');
            return {itemName: a[3], source: e(a[4]), viewMapper: e(a[2] || a[1]), modelMapper: e(a[1])}
        }
    }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function (e, t, n, a, i, r, o) {
    var l = [9, 13, 27, 38, 40];
    return {
        require: "ngModel", link: function (s, c, u, p) {
            var d, g = s.$eval(u.typeaheadMinLength) || 1, m = s.$eval(u.typeaheadWaitMs) || 0, f = s.$eval(u.typeaheadEditable) !== !1, h = t(u.typeaheadLoading).assign || angular.noop, v = t(u.typeaheadOnSelect), b = u.typeaheadInputFormatter ? t(u.typeaheadInputFormatter) : void 0, $ = u.typeaheadAppendToBody ? s.$eval(u.typeaheadAppendToBody) : !1, y = t(u.ngModel).assign, w = o.parse(u.typeahead), k = s.$new();
            s.$on("$destroy", function () {
                k.$destroy()
            });
            var x = "typeahead-" + k.$id + "-" + Math.floor(1e4 * Math.random());
            c.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": x});
            var D = angular.element("<div typeahead-popup></div>");
            D.attr({
                id: x,
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(u.typeaheadTemplateUrl) && D.attr("template-url", u.typeaheadTemplateUrl);
            var M = function () {
                k.matches = [], k.activeIdx = -1, c.attr("aria-expanded", !1)
            }, T = function (e) {
                return x + "-option-" + e
            };
            k.$watch("activeIdx", function (e) {
                0 > e ? c.removeAttr("aria-activedescendant") : c.attr("aria-activedescendant", T(e))
            });
            var C = function (e) {
                var t = {$viewValue: e};
                h(s, !0), n.when(w.source(s, t)).then(function (n) {
                    var a = e === p.$viewValue;
                    if (a && d)if (n.length > 0) {
                        k.activeIdx = 0, k.matches.length = 0;
                        for (var i = 0; i < n.length; i++)t[w.itemName] = n[i], k.matches.push({
                            id: T(i),
                            label: w.viewMapper(k, t),
                            model: n[i]
                        });
                        k.query = e, k.position = $ ? r.offset(c) : r.position(c), k.position.top = k.position.top + c.prop("offsetHeight"), c.attr("aria-expanded", !0)
                    } else M();
                    a && h(s, !1)
                }, function () {
                    M(), h(s, !1)
                })
            };
            M(), k.query = void 0;
            var E, O = function (e) {
                E = a(function () {
                    C(e)
                }, m)
            }, A = function () {
                E && a.cancel(E)
            };
            p.$parsers.unshift(function (e) {
                return d = !0, e && e.length >= g ? m > 0 ? (A(), O(e)) : C(e) : (h(s, !1), A(), M()), f ? e : e ? void p.$setValidity("editable", !1) : (p.$setValidity("editable", !0), e)
            }), p.$formatters.push(function (e) {
                var t, n, a = {};
                return b ? (a.$model = e, b(s, a)) : (a[w.itemName] = e, t = w.viewMapper(s, a), a[w.itemName] = void 0, n = w.viewMapper(s, a), t !== n ? t : e)
            }), k.select = function (e) {
                var t, n, i = {};
                i[w.itemName] = n = k.matches[e].model, t = w.modelMapper(s, i), y(s, t), p.$setValidity("editable", !0), v(s, {
                    $item: n,
                    $model: t,
                    $label: w.viewMapper(s, i)
                }), M(), a(function () {
                    c[0].focus()
                }, 0, !1)
            }, c.bind("keydown", function (e) {
                0 !== k.matches.length && -1 !== l.indexOf(e.which) && (e.preventDefault(), 40 === e.which ? (k.activeIdx = (k.activeIdx + 1) % k.matches.length, k.$digest()) : 38 === e.which ? (k.activeIdx = (k.activeIdx ? k.activeIdx : k.matches.length) - 1, k.$digest()) : 13 === e.which || 9 === e.which ? k.$apply(function () {
                    k.select(k.activeIdx)
                }) : 27 === e.which && (e.stopPropagation(), M(), k.$digest()))
            }), c.bind("blur", function () {
                d = !1
            });
            var P = function (e) {
                c[0] !== e.target && (M(), k.$digest())
            };
            i.bind("click", P), s.$on("$destroy", function () {
                i.unbind("click", P)
            });
            var S = e(D)(k);
            $ ? i.find("body").append(S) : c.after(S)
        }
    }
}]).directive("typeaheadPopup", function () {
    return {
        restrict: "EA",
        scope: {matches: "=", query: "=", active: "=", position: "=", select: "&"},
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function (e, t, n) {
            e.templateUrl = n.templateUrl, e.isOpen = function () {
                return e.matches.length > 0
            }, e.isActive = function (t) {
                return e.active == t
            }, e.selectActive = function (t) {
                e.active = t
            }, e.selectMatch = function (t) {
                e.select({activeIdx: t})
            }
        }
    }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function (e, t, n, a) {
    return {
        restrict: "EA", scope: {index: "=", match: "=", query: "="}, link: function (i, r, o) {
            var l = a(o.templateUrl)(i.$parent) || "template/typeahead/typeahead-match.html";
            e.get(l, {cache: t}).success(function (e) {
                r.replaceWith(n(e.trim())(i))
            })
        }
    }
}]).filter("typeaheadHighlight", function () {
    function e(e) {
        return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    return function (t, n) {
        return n ? ("" + t).replace(new RegExp(e(n), "gi"), "<strong>$&</strong>") : t
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function (e) {
    e.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function (e) {
    e.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function (e) {
    e.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function (e) {
    e.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function (e) {
    e.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (e) {
    e.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function (e) {
    e.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (e) {
    e.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (e) {
    e.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (e) {
    e.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (e) {
    e.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function (e) {
    e.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function (e) {
    e.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function (e) {
    e.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function (e) {
    e.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function (e) {
    e.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function (e) {
    e.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function (e) {
    e.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function (e) {
    e.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (e) {
    e.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (e) {
    e.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]);
!function (o, n, e) {
    "use strict";
    n.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (o, i) {
        var t, r = {}, c = {}, f = !1, u = n.copy, s = n.isUndefined;
        return i.addPollFn(function () {
            var n = i.cookies();
            t != n && (t = n, u(n, c), u(n, r), f && o.$apply())
        })(), f = !0, o.$watch(function () {
            var o, t, f;
            for (o in c)s(r[o]) && i.cookies(o, e);
            for (o in r)t = r[o], n.isString(t) || (t = "" + t, r[o] = t), t !== c[o] && (i.cookies(o, t), f = !0);
            if (f)for (o in t = i.cookies(), r)r[o] !== t[o] && (s(t[o]) ? delete r[o] : r[o] = t[o])
        }), r
    }]).factory("$cookieStore", ["$cookies", function (o) {
        return {
            get: function (e) {
                return (e = o[e]) ? n.fromJson(e) : e
            }, put: function (e, i) {
                o[e] = n.toJson(i)
            }, remove: function (n) {
                delete o[n]
            }
        }
    }])
}(window, window.angular);
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (e, t, r) {
    "use strict";
    function n(e, t) {
        return D(new (D(function () {
        }, {prototype: e})), t)
    }

    function i(e) {
        return R(arguments, function (t) {
            t !== e && R(t, function (t, r) {
                e.hasOwnProperty(r) || (e[r] = t)
            })
        }), e
    }

    function a(e, t) {
        var r = [];
        for (var n in e.path) {
            if (e.path[n] !== t.path[n])break;
            r.push(e.path[n])
        }
        return r
    }

    function o(e) {
        if (Object.keys)return Object.keys(e);
        var r = [];
        return t.forEach(e, function (e, t) {
            r.push(t)
        }), r
    }

    function u(e, t) {
        if (Array.prototype.indexOf)return e.indexOf(t, Number(arguments[2]) || 0);
        var r = e.length >>> 0, n = Number(arguments[2]) || 0;
        for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += r); r > n; n++)if (n in e && e[n] === t)return n;
        return -1
    }

    function s(e, t, r, n) {
        var i, s = a(r, n), l = {}, c = [];
        for (var f in s)if (s[f].params && (i = o(s[f].params), i.length))for (var p in i)u(c, i[p]) >= 0 || (c.push(i[p]), l[i[p]] = e[i[p]]);
        return D({}, l, t)
    }

    function l(e, t, r) {
        if (!r) {
            r = [];
            for (var n in e)r.push(n)
        }
        for (var i = 0; i < r.length; i++) {
            var a = r[i];
            if (e[a] != t[a])return !1
        }
        return !0
    }

    function c(e, t) {
        var r = {};
        return R(e, function (e) {
            r[e] = t[e]
        }), r
    }

    function f(e) {
        var t = {}, r = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var n in e)-1 == u(r, n) && (t[n] = e[n]);
        return t
    }

    function p(e, t) {
        var r = N(e), n = r ? [] : {};
        return R(e, function (e, i) {
            t(e, i) && (n[r ? n.length : i] = e)
        }), n
    }

    function h(e, t) {
        var r = N(e) ? [] : {};
        return R(e, function (e, n) {
            r[n] = t(e, n)
        }), r
    }

    function v(e, t) {
        var n = 1, a = 2, s = {}, l = [], c = s, p = D(e.when(s), {$$promises: s, $$values: s});
        this.study = function (s) {
            function h(e, r) {
                if (g[r] !== a) {
                    if (m.push(r), g[r] === n)throw m.splice(0, u(m, r)), new Error("Cyclic dependency: " + m.join(" -> "));
                    if (g[r] = n, M(e))d.push(r, [function () {
                        return t.get(e)
                    }], l); else {
                        var i = t.annotate(e);
                        R(i, function (e) {
                            e !== r && s.hasOwnProperty(e) && h(s[e], e)
                        }), d.push(r, e, i)
                    }
                    m.pop(), g[r] = a
                }
            }

            function v(e) {
                return F(e) && e.then && e.$$promises
            }

            if (!F(s))throw new Error("'invocables' must be an object");
            var $ = o(s || {}), d = [], m = [], g = {};
            return R(s, h), s = m = g = null, function (n, a, o) {
                function u() {
                    --y || (b || i(w, a.$$values), m.$$values = w, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, h.resolve(w))
                }

                function s(e) {
                    m.$$failure = e, h.reject(e)
                }

                function l(r, i, a) {
                    function l(e) {
                        f.reject(e), s(e)
                    }

                    function c() {
                        if (!I(m.$$failure))try {
                            f.resolve(t.invoke(i, o, w)), f.promise.then(function (e) {
                                w[r] = e, u()
                            }, l)
                        } catch (e) {
                            l(e)
                        }
                    }

                    var f = e.defer(), p = 0;
                    R(a, function (e) {
                        g.hasOwnProperty(e) && !n.hasOwnProperty(e) && (p++, g[e].then(function (t) {
                            w[e] = t, --p || c()
                        }, l))
                    }), p || c(), g[r] = f.promise
                }

                if (v(n) && o === r && (o = a, a = n, n = null), n) {
                    if (!F(n))throw new Error("'locals' must be an object")
                } else n = c;
                if (a) {
                    if (!v(a))throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else a = p;
                var h = e.defer(), m = h.promise, g = m.$$promises = {}, w = D({}, n), y = 1 + d.length / 3, b = !1;
                if (I(a.$$failure))return s(a.$$failure), m;
                a.$$inheritedValues && i(w, f(a.$$inheritedValues, $)), D(g, a.$$promises), a.$$values ? (b = i(w, f(a.$$values, $)), m.$$inheritedValues = f(a.$$values, $), u()) : (a.$$inheritedValues && (m.$$inheritedValues = f(a.$$inheritedValues, $)), a.then(u, s));
                for (var E = 0, S = d.length; S > E; E += 3)n.hasOwnProperty(d[E]) ? u() : l(d[E], d[E + 1], d[E + 2]);
                return m
            }
        }, this.resolve = function (e, t, r, n) {
            return this.study(e)(t, r, n)
        }
    }

    function $(e, t, r) {
        this.fromConfig = function (e, t, r) {
            return I(e.template) ? this.fromString(e.template, t) : I(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : I(e.templateProvider) ? this.fromProvider(e.templateProvider, t, r) : null
        }, this.fromString = function (e, t) {
            return V(e) ? e(t) : e
        }, this.fromUrl = function (r, n) {
            return V(r) && (r = r(n)), null == r ? null : e.get(r, {
                cache: t,
                headers: {Accept: "text/html"}
            }).then(function (e) {
                return e.data
            })
        }, this.fromProvider = function (e, t, n) {
            return r.invoke(e, null, n || {params: t})
        }
    }

    function d(e, t, i) {
        function a(t, r, n, i) {
            if (d.push(t), v[t])return v[t];
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
            if ($[t])throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
            return $[t] = new T.Param(t, r, n, i), $[t]
        }

        function o(e, t, r) {
            var n = ["", ""], i = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!t)return i;
            switch (r) {
                case!1:
                    n = ["(", ")"];
                    break;
                case!0:
                    n = ["?(", ")?"];
                    break;
                default:
                    n = ["(" + r + "|", ")?"]
            }
            return i + n[0] + t + n[1]
        }

        function u(r, i) {
            var a, o, u, s, l;
            return a = r[2] || r[3], l = t.params[a], u = e.substring(p, r.index), o = i ? r[4] : r[4] || ("*" == r[1] ? ".*" : null), s = T.type(o || "string") || n(T.type("string"), {pattern: new RegExp(o)}), {
                id: a,
                regexp: o,
                segment: u,
                type: s,
                cfg: l
            }
        }

        t = D({params: {}}, F(t) ? t : {});
        var s, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = "^", p = 0, h = this.segments = [], v = i ? i.params : {}, $ = this.params = i ? i.params.$$new() : new T.ParamSet, d = [];
        this.source = e;
        for (var m, g, w; (s = l.exec(e)) && (m = u(s, !1), !(m.segment.indexOf("?") >= 0));)g = a(m.id, m.type, m.cfg, "path"), f += o(m.segment, g.type.pattern.source, g.squash), h.push(m.segment), p = l.lastIndex;
        w = e.substring(p);
        var y = w.indexOf("?");
        if (y >= 0) {
            var b = this.sourceSearch = w.substring(y);
            if (w = w.substring(0, y), this.sourcePath = e.substring(0, p + y), b.length > 0)for (p = 0; s = c.exec(b);)m = u(s, !0), g = a(m.id, m.type, m.cfg, "search"), p = l.lastIndex
        } else this.sourcePath = e, this.sourceSearch = "";
        f += o(w) + (t.strict === !1 ? "/?" : "") + "$", h.push(w), this.regexp = new RegExp(f, t.caseInsensitive ? "i" : r), this.prefix = h[0], this.$$paramNames = d
    }

    function m(e) {
        D(this, e)
    }

    function g() {
        function e(e) {
            return null != e ? e.toString().replace(/\//g, "%2F") : e
        }

        function i(e) {
            return null != e ? e.toString().replace(/%2F/g, "/") : e
        }

        function a(e) {
            return this.pattern.test(e)
        }

        function s() {
            return {strict: w, caseInsensitive: $}
        }

        function l(e) {
            return V(e) || N(e) && V(e[e.length - 1])
        }

        function c() {
            for (; S.length;) {
                var e = S.shift();
                if (e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");
                t.extend(b[e.name], v.invoke(e.def))
            }
        }

        function f(e) {
            D(this, e || {})
        }

        T = this;
        var v, $ = !1, w = !0, y = !1, b = {}, E = !0, S = [], x = {
            string: {
                encode: e,
                decode: i,
                is: a,
                pattern: /[^/]*/
            },
            "int": {
                encode: e, decode: function (e) {
                    return parseInt(e, 10)
                }, is: function (e) {
                    return I(e) && this.decode(e.toString()) === e
                }, pattern: /\d+/
            },
            bool: {
                encode: function (e) {
                    return e ? 1 : 0
                }, decode: function (e) {
                    return 0 !== parseInt(e, 10)
                }, is: function (e) {
                    return e === !0 || e === !1
                }, pattern: /0|1/
            },
            date: {
                encode: function (e) {
                    return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : r
                },
                decode: function (e) {
                    if (this.is(e))return e;
                    var t = this.capture.exec(e);
                    return t ? new Date(t[1], t[2] - 1, t[3]) : r
                },
                is: function (e) {
                    return e instanceof Date && !isNaN(e.valueOf())
                },
                equals: function (e, t) {
                    return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {encode: t.toJson, decode: t.fromJson, is: t.isObject, equals: t.equals, pattern: /[^/]*/},
            any: {encode: t.identity, decode: t.identity, is: t.identity, equals: t.equals, pattern: /.*/}
        };
        g.$$getDefaultValue = function (e) {
            if (!l(e.value))return e.value;
            if (!v)throw new Error("Injectable functions cannot be called at configuration time");
            return v.invoke(e.value)
        }, this.caseInsensitive = function (e) {
            return I(e) && ($ = e), $
        }, this.strictMode = function (e) {
            return I(e) && (w = e), w
        }, this.defaultSquashPolicy = function (e) {
            if (!I(e))return y;
            if (e !== !0 && e !== !1 && !M(e))throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
            return y = e, e
        }, this.compile = function (e, t) {
            return new d(e, D(s(), t))
        }, this.isMatcher = function (e) {
            if (!F(e))return !1;
            var t = !0;
            return R(d.prototype, function (r, n) {
                V(r) && (t = t && I(e[n]) && V(e[n]))
            }), t
        }, this.type = function (e, t, r) {
            if (!I(t))return b[e];
            if (b.hasOwnProperty(e))throw new Error("A type named '" + e + "' has already been defined.");
            return b[e] = new m(D({name: e}, t)), r && (S.push({name: e, def: r}), E || c()), this
        }, R(x, function (e, t) {
            b[t] = new m(D({name: t}, e))
        }), b = n(b, {}), this.$get = ["$injector", function (e) {
            return v = e, E = !1, c(), R(x, function (e, t) {
                b[t] || (b[t] = new m(e))
            }), this
        }], this.Param = function (e, t, n, i) {
            function a(e) {
                var t = F(e) ? o(e) : [], r = -1 === u(t, "value") && -1 === u(t, "type") && -1 === u(t, "squash") && -1 === u(t, "array");
                return r && (e = {value: e}), e.$$fn = l(e.value) ? e.value : function () {
                    return e.value
                }, e
            }

            function s(t, r, n) {
                if (t.type && r)throw new Error("Param '" + e + "' has two type configurations.");
                return r ? r : t.type ? t.type instanceof m ? t.type : new m(t.type) : "config" === n ? b.any : b.string
            }

            function c() {
                var t = {array: "search" === i ? "auto" : !1}, r = e.match(/\[\]$/) ? {array: !0} : {};
                return D(t, r, n).array
            }

            function f(e, t) {
                var r = e.squash;
                if (!t || r === !1)return !1;
                if (!I(r) || null == r)return y;
                if (r === !0 || M(r))return r;
                throw new Error("Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string")
            }

            function $(e, t, n, i) {
                var a, o, s = [{from: "", to: n || t ? r : ""}, {from: null, to: n || t ? r : ""}];
                return a = N(e.replace) ? e.replace : [], M(i) && a.push({from: i, to: r}), o = h(a, function (e) {
                    return e.from
                }), p(s, function (e) {
                    return -1 === u(o, e.from)
                }).concat(a)
            }

            function d() {
                if (!v)throw new Error("Injectable functions cannot be called at configuration time");
                return v.invoke(n.$$fn)
            }

            function g(e) {
                function t(e) {
                    return function (t) {
                        return t.from === e
                    }
                }

                function r(e) {
                    var r = h(p(E.replace, t(e)), function (e) {
                        return e.to
                    });
                    return r.length ? r[0] : e
                }

                return e = r(e), I(e) ? E.type.decode(e) : d()
            }

            function w() {
                return "{Param:" + e + " " + t + " squash: '" + P + "' optional: " + x + "}"
            }

            var E = this;
            n = a(n), t = s(n, t, i);
            var S = c();
            t = S ? t.$asArray(S, "search" === i) : t, "string" !== t.name || S || "path" !== i || n.value !== r || (n.value = "");
            var x = n.value !== r, P = f(n, x), j = $(n, S, x, P);
            D(this, {
                id: e,
                type: t,
                location: i,
                array: S,
                squash: P,
                replace: j,
                isOptional: x,
                value: g,
                dynamic: r,
                config: n,
                toString: w
            })
        }, f.prototype = {
            $$new: function () {
                return n(this, D(new f, {$$parent: this}))
            }, $$keys: function () {
                for (var e = [], t = [], r = this, n = o(f.prototype); r;)t.push(r), r = r.$$parent;
                return t.reverse(), R(t, function (t) {
                    R(o(t), function (t) {
                        -1 === u(e, t) && -1 === u(n, t) && e.push(t)
                    })
                }), e
            }, $$values: function (e) {
                var t = {}, r = this;
                return R(r.$$keys(), function (n) {
                    t[n] = r[n].value(e && e[n])
                }), t
            }, $$equals: function (e, t) {
                var r = !0, n = this;
                return R(n.$$keys(), function (i) {
                    var a = e && e[i], o = t && t[i];
                    n[i].type.equals(a, o) || (r = !1)
                }), r
            }, $$validates: function (e) {
                var t, r, n, i = !0, a = this;
                return R(this.$$keys(), function (o) {
                    n = a[o], r = e[o], t = !r && n.isOptional, i = i && (t || !!n.type.is(r))
                }), i
            }, $$parent: r
        }, this.ParamSet = f
    }

    function w(e, n) {
        function i(e) {
            var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
            return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
        }

        function a(e, t) {
            return e.replace(/\$(\$|\d{1,2})/, function (e, r) {
                return t["$" === r ? 0 : Number(r)]
            })
        }

        function o(e, t, r) {
            if (!r)return !1;
            var n = e.invoke(t, t, {$match: r});
            return I(n) ? n : !0
        }

        function u(n, i, a, o) {
            function u(e, t, r) {
                return "/" === $ ? e : t ? $.slice(0, -1) + e : r ? $.slice(1) + e : e
            }

            function p(e) {
                function t(e) {
                    var t = e(a, n);
                    return t ? (M(t) && n.replace().url(t), !0) : !1
                }

                if (!e || !e.defaultPrevented) {
                    var i = v && n.url() === v;
                    if (v = r, i)return !0;
                    var o, u = l.length;
                    for (o = 0; u > o; o++)if (t(l[o]))return;
                    c && t(c)
                }
            }

            function h() {
                return s = s || i.$on("$locationChangeSuccess", p)
            }

            var v, $ = o.baseHref(), d = n.url();
            return f || h(), {
                sync: function () {
                    p()
                }, listen: function () {
                    return h()
                }, update: function (e) {
                    return e ? void(d = n.url()) : void(n.url() !== d && (n.url(d), n.replace()))
                }, push: function (e, t, i) {
                    n.url(e.format(t || {})), v = i && i.$$avoidResync ? n.url() : r, i && i.replace && n.replace()
                }, href: function (r, i, a) {
                    if (!r.validates(i))return null;
                    var o = e.html5Mode();
                    t.isObject(o) && (o = o.enabled);
                    var s = r.format(i);
                    if (a = a || {}, o || null === s || (s = "#" + e.hashPrefix() + s), s = u(s, o, a.absolute), !a.absolute || !s)return s;
                    var l = !o && s ? "/" : "", c = n.port();
                    return c = 80 === c || 443 === c ? "" : ":" + c, [n.protocol(), "://", n.host(), c, l, s].join("")
                }
            }
        }

        var s, l = [], c = null, f = !1;
        this.rule = function (e) {
            if (!V(e))throw new Error("'rule' must be a function");
            return l.push(e), this
        }, this.otherwise = function (e) {
            if (M(e)) {
                var t = e;
                e = function () {
                    return t
                }
            } else if (!V(e))throw new Error("'rule' must be a function");
            return c = e, this
        }, this.when = function (e, t) {
            var r, u = M(t);
            if (M(e) && (e = n.compile(e)), !u && !V(t) && !N(t))throw new Error("invalid 'handler' in when()");
            var s = {
                matcher: function (e, t) {
                    return u && (r = n.compile(t), t = ["$match", function (e) {
                        return r.format(e)
                    }]), D(function (r, n) {
                        return o(r, t, e.exec(n.path(), n.search()))
                    }, {prefix: M(e.prefix) ? e.prefix : ""})
                }, regex: function (e, t) {
                    if (e.global || e.sticky)throw new Error("when() RegExp must not be global or sticky");
                    return u && (r = t, t = ["$match", function (e) {
                        return a(r, e)
                    }]), D(function (r, n) {
                        return o(r, t, e.exec(n.path()))
                    }, {prefix: i(e)})
                }
            }, l = {matcher: n.isMatcher(e), regex: e instanceof RegExp};
            for (var c in l)if (l[c])return this.rule(s[c](e, t));
            throw new Error("invalid 'what' in when()")
        }, this.deferIntercept = function (e) {
            e === r && (e = !0), f = e
        }, this.$get = u, u.$inject = ["$location", "$rootScope", "$injector", "$browser"]
    }

    function y(e, i) {
        function a(e) {
            return 0 === e.indexOf(".") || 0 === e.indexOf("^")
        }

        function f(e, t) {
            if (!e)return r;
            var n = M(e), i = n ? e : e.name, o = a(i);
            if (o) {
                if (!t)throw new Error("No reference point given for path '" + i + "'");
                t = f(t);
                for (var u = i.split("."), s = 0, l = u.length, c = t; l > s; s++)if ("" !== u[s] || 0 !== s) {
                    if ("^" !== u[s])break;
                    if (!c.parent)throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                    c = c.parent
                } else c = t;
                u = u.slice(s).join("."), i = c.name + (c.name && u ? "." : "") + u
            }
            var p = x[i];
            return !p || !n && (n || p !== e && p.self !== e) ? r : p
        }

        function p(e, t) {
            P[e] || (P[e] = []), P[e].push(t)
        }

        function v(e) {
            for (var t = P[e] || []; t.length;)$(t.shift())
        }

        function $(t) {
            t = n(t, {
                self: t, resolve: t.resolve || {}, toString: function () {
                    return this.name
                }
            });
            var r = t.name;
            if (!M(r) || r.indexOf("@") >= 0)throw new Error("State must have a valid name");
            if (x.hasOwnProperty(r))throw new Error("State '" + r + "'' is already defined");
            var i = -1 !== r.indexOf(".") ? r.substring(0, r.lastIndexOf(".")) : M(t.parent) ? t.parent : F(t.parent) && M(t.parent.name) ? t.parent.name : "";
            if (i && !x[i])return p(i, t.self);
            for (var a in O)V(O[a]) && (t[a] = O[a](t, O.$delegates[a]));
            return x[r] = t, !t[j] && t.url && e.when(t.url, ["$match", "$stateParams", function (e, r) {
                S.$current.navigable == t && l(e, r) || S.transitionTo(t, e, {inherit: !0, location: !1})
            }]), v(r), t
        }

        function d(e) {
            return e.indexOf("*") > -1
        }

        function m(e) {
            var t = e.split("."), r = S.$current.name.split(".");
            if ("**" === t[0] && (r = r.slice(u(r, t[1])), r.unshift("**")), "**" === t[t.length - 1] && (r.splice(u(r, t[t.length - 2]) + 1, Number.MAX_VALUE), r.push("**")), t.length != r.length)return !1;
            for (var n = 0, i = t.length; i > n; n++)"*" === t[n] && (r[n] = "*");
            return r.join("") === t.join("")
        }

        function g(e, t) {
            return M(e) && !I(t) ? O[e] : V(t) && M(e) ? (O[e] && !O.$delegates[e] && (O.$delegates[e] = O[e]), O[e] = t, this) : this
        }

        function w(e, t) {
            return F(e) ? t = e : t.name = e, $(t), this
        }

        function y(e, i, a, u, p, v, $) {
            function g(t, r, n, a) {
                var o = e.$broadcast("$stateNotFound", t, r, n);
                if (o.defaultPrevented)return $.update(), O;
                if (!o.retry)return null;
                if (a.$retry)return $.update(), A;
                var u = S.transition = i.when(o.retry);
                return u.then(function () {
                    return u !== S.transition ? y : (t.options.$retry = !0, S.transitionTo(t.to, t.toParams, t.options))
                }, function () {
                    return O
                }), $.update(), u
            }

            function w(e, r, n, o, s, l) {
                var f = n ? r : c(e.params.$$keys(), r), h = {$stateParams: f};
                s.resolve = p.resolve(e.resolve, h, s.resolve, e);
                var v = [s.resolve.then(function (e) {
                    s.globals = e
                })];
                return o && v.push(o), R(e.views, function (r, n) {
                    var i = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
                    i.$template = [function () {
                        return a.load(n, {view: r, locals: h, params: f, notify: l.notify}) || ""
                    }], v.push(p.resolve(i, h, s.resolve, e).then(function (a) {
                        if (V(r.controllerProvider) || N(r.controllerProvider)) {
                            var o = t.extend({}, i, h);
                            a.$$controller = u.invoke(r.controllerProvider, null, o)
                        } else a.$$controller = r.controller;
                        a.$$state = e, a.$$controllerAs = r.controllerAs, s[n] = a
                    }))
                }), i.all(v).then(function () {
                    return s
                })
            }

            var y = i.reject(new Error("transition superseded")), P = i.reject(new Error("transition prevented")), O = i.reject(new Error("transition aborted")), A = i.reject(new Error("transition failed"));
            return E.locals = {resolve: null, globals: {$stateParams: {}}}, S = {
                params: {},
                current: E.self,
                $current: E,
                transition: null
            }, S.reload = function () {
                return S.transitionTo(S.current, v, {reload: !0, inherit: !1, notify: !0})
            }, S.go = function (e, t, r) {
                return S.transitionTo(e, t, D({inherit: !0, relative: S.$current}, r))
            }, S.transitionTo = function (t, r, a) {
                r = r || {}, a = D({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, a || {});
                var o, l = S.$current, p = S.params, h = l.path, d = f(t, a.relative);
                if (!I(d)) {
                    var m = {to: t, toParams: r, options: a}, x = g(m, l.self, p, a);
                    if (x)return x;
                    if (t = m.to, r = m.toParams, a = m.options, d = f(t, a.relative), !I(d)) {
                        if (!a.relative)throw new Error("No such state '" + t + "'");
                        throw new Error("Could not resolve '" + t + "' from state '" + a.relative + "'")
                    }
                }
                if (d[j])throw new Error("Cannot transition to abstract state '" + t + "'");
                if (a.inherit && (r = s(v, r || {}, S.$current, d)), !d.params.$$validates(r))return A;
                r = d.params.$$values(r), t = d;
                var O = t.path, q = 0, C = O[q], k = E.locals, V = [];
                if (!a.reload)for (; C && C === h[q] && C.ownParams.$$equals(r, p);)k = V[q] = C.locals, q++, C = O[q];
                if (b(t, l, k, a))return t.self.reloadOnSearch !== !1 && $.update(), S.transition = null, i.when(S.current);
                if (r = c(t.params.$$keys(), r || {}), a.notify && e.$broadcast("$stateChangeStart", t.self, r, l.self, p).defaultPrevented)return $.update(), P;
                for (var M = i.when(k), F = q; F < O.length; F++, C = O[F])k = V[F] = n(k), M = w(C, r, C === t, M, k, a);
                var N = S.transition = M.then(function () {
                    var n, i, o;
                    if (S.transition !== N)return y;
                    for (n = h.length - 1; n >= q; n--)o = h[n], o.self.onExit && u.invoke(o.self.onExit, o.self, o.locals.globals), o.locals = null;
                    for (n = q; n < O.length; n++)i = O[n], i.locals = V[n], i.self.onEnter && u.invoke(i.self.onEnter, i.self, i.locals.globals);
                    return S.transition !== N ? y : (S.$current = t, S.current = t.self, S.params = r, U(S.params, v), S.transition = null, a.location && t.navigable && $.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === a.location
                    }), a.notify && e.$broadcast("$stateChangeSuccess", t.self, r, l.self, p), $.update(!0), S.current)
                }, function (n) {
                    return S.transition !== N ? y : (S.transition = null, o = e.$broadcast("$stateChangeError", t.self, r, l.self, p, n), o.defaultPrevented || $.update(), i.reject(n))
                });
                return N
            }, S.is = function (e, t, n) {
                n = D({relative: S.$current}, n || {});
                var i = f(e, n.relative);
                return I(i) ? S.$current !== i ? !1 : t ? l(i.params.$$values(t), v) : !0 : r
            }, S.includes = function (e, t, n) {
                if (n = D({relative: S.$current}, n || {}), M(e) && d(e)) {
                    if (!m(e))return !1;
                    e = S.$current.name
                }
                var i = f(e, n.relative);
                return I(i) ? I(S.$current.includes[i.name]) ? t ? l(i.params.$$values(t), v, o(t)) : !0 : !1 : r
            }, S.href = function (e, t, n) {
                n = D({lossy: !0, inherit: !0, absolute: !1, relative: S.$current}, n || {});
                var i = f(e, n.relative);
                if (!I(i))return null;
                n.inherit && (t = s(v, t || {}, S.$current, i));
                var a = i && n.lossy ? i.navigable : i;
                return a && a.url !== r && null !== a.url ? $.href(a.url, c(i.params.$$keys(), t || {}), {absolute: n.absolute}) : null
            }, S.get = function (e, t) {
                if (0 === arguments.length)return h(o(x), function (e) {
                    return x[e].self
                });
                var r = f(e, t || S.$current);
                return r && r.self ? r.self : null
            }, S
        }

        function b(e, t, r, n) {
            return e !== t || (r !== t.locals || n.reload) && e.self.reloadOnSearch !== !1 ? void 0 : !0
        }

        var E, S, x = {}, P = {}, j = "abstract", O = {
            parent: function (e) {
                if (I(e.parent) && e.parent)return f(e.parent);
                var t = /^(.+)\.[^.]+$/.exec(e.name);
                return t ? f(t[1]) : E
            }, data: function (e) {
                return e.parent && e.parent.data && (e.data = e.self.data = D({}, e.parent.data, e.data)), e.data
            }, url: function (e) {
                var t = e.url, r = {params: e.params || {}};
                if (M(t))return "^" == t.charAt(0) ? i.compile(t.substring(1), r) : (e.parent.navigable || E).url.concat(t, r);
                if (!t || i.isMatcher(t))return t;
                throw new Error("Invalid url '" + t + "' in state '" + e + "'")
            }, navigable: function (e) {
                return e.url ? e : e.parent ? e.parent.navigable : null
            }, ownParams: function (e) {
                var t = e.url && e.url.params || new T.ParamSet;
                return R(e.params || {}, function (e, r) {
                    t[r] || (t[r] = new T.Param(r, null, e, "config"))
                }), t
            }, params: function (e) {
                return e.parent && e.parent.params ? D(e.parent.params.$$new(), e.ownParams) : new T.ParamSet
            }, views: function (e) {
                var t = {};
                return R(I(e.views) ? e.views : {"": e}, function (r, n) {
                    n.indexOf("@") < 0 && (n += "@" + e.parent.name), t[n] = r
                }), t
            }, path: function (e) {
                return e.parent ? e.parent.path.concat(e) : []
            }, includes: function (e) {
                var t = e.parent ? D({}, e.parent.includes) : {};
                return t[e.name] = !0, t
            }, $delegates: {}
        };
        E = $({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), E.navigable = null, this.decorator = g, this.state = w, this.$get = y, y.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }

    function b() {
        function e(e, t) {
            return {
                load: function (r, n) {
                    var i, a = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return n = D(a, n), n.view && (i = t.fromConfig(n.view, n.params, n.locals)), i && n.notify && e.$broadcast("$viewContentLoading", n), i
                }
            }
        }

        this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
    }

    function E() {
        var e = !1;
        this.useAnchorScroll = function () {
            e = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (t, r) {
            return e ? t : function (e) {
                r(function () {
                    e[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }

    function S(e, r, n, i) {
        function a() {
            return r.has ? function (e) {
                return r.has(e) ? r.get(e) : null
            } : function (e) {
                try {
                    return r.get(e)
                } catch (t) {
                    return null
                }
            }
        }

        function o(e, t) {
            var r = function () {
                return {
                    enter: function (e, t, r) {
                        t.after(e), r()
                    }, leave: function (e, t) {
                        e.remove(), t()
                    }
                }
            };
            if (l)return {
                enter: function (e, t, r) {
                    var n = l.enter(e, null, t, r);
                    n && n.then && n.then(r)
                }, leave: function (e, t) {
                    var r = l.leave(e, t);
                    r && r.then && r.then(t)
                }
            };
            if (s) {
                var n = s && s(t, e);
                return {
                    enter: function (e, t, r) {
                        n.enter(e, null, t), r()
                    }, leave: function (e, t) {
                        n.leave(e), t()
                    }
                }
            }
            return r()
        }

        var u = a(), s = u("$animator"), l = u("$animate"), c = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function (r, a, u) {
                return function (r, a, s) {
                    function l() {
                        f && (f.remove(), f = null), h && (h.$destroy(), h = null), p && (m.leave(p, function () {
                            f = null
                        }), f = p, p = null)
                    }

                    function c(o) {
                        var c, f = P(r, s, a, i), g = f && e.$current && e.$current.locals[f];
                        if (o || g !== v) {
                            c = r.$new(), v = e.$current.locals[f];
                            var w = u(c, function (e) {
                                m.enter(e, a, function () {
                                    h && h.$emit("$viewContentAnimationEnded"), (t.isDefined(d) && !d || r.$eval(d)) && n(e)
                                }), l()
                            });
                            p = w, h = c, h.$emit("$viewContentLoaded"), h.$eval($)
                        }
                    }

                    var f, p, h, v, $ = s.onload || "", d = s.autoscroll, m = o(s, r);
                    r.$on("$stateChangeSuccess", function () {
                        c(!1)
                    }), r.$on("$viewContentLoading", function () {
                        c(!1)
                    }), c(!0)
                }
            }
        };
        return c
    }

    function x(e, t, r, n) {
        return {
            restrict: "ECA", priority: -400, compile: function (i) {
                var a = i.html();
                return function (i, o, u) {
                    var s = r.$current, l = P(i, u, o, n), c = s && s.locals[l];
                    if (c) {
                        o.data("$uiView", {name: l, state: c.$$state}), o.html(c.$template ? c.$template : a);
                        var f = e(o.contents());
                        if (c.$$controller) {
                            c.$scope = i;
                            var p = t(c.$$controller, c);
                            c.$$controllerAs && (i[c.$$controllerAs] = p), o.data("$ngControllerController", p), o.children().data("$ngControllerController", p)
                        }
                        f(i)
                    }
                }
            }
        }
    }

    function P(e, t, r, n) {
        var i = n(t.uiView || t.name || "")(e), a = r.inheritedData("$uiView");
        return i.indexOf("@") >= 0 ? i : i + "@" + (a ? a.state.name : "")
    }

    function j(e, t) {
        var r, n = e.match(/^\s*({[^}]*})\s*$/);
        if (n && (e = t + "(" + n[1] + ")"), r = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !r || 4 !== r.length)throw new Error("Invalid state ref '" + e + "'");
        return {state: r[1], paramExpr: r[3] || null}
    }

    function O(e) {
        var t = e.parent().inheritedData("$uiView");
        return t && t.state && t.state.name ? t.state : void 0
    }

    function A(e, r) {
        var n = ["location", "inherit", "reload"];
        return {
            restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (i, a, o, u) {
                var s = j(o.uiSref, e.current.name), l = null, c = O(a) || e.$current, f = null, p = "A" === a.prop("tagName"), h = "FORM" === a[0].nodeName, v = h ? "action" : "href", $ = !0, d = {
                    relative: c,
                    inherit: !0
                }, m = i.$eval(o.uiSrefOpts) || {};
                t.forEach(n, function (e) {
                    e in m && (d[e] = m[e])
                });
                var g = function (r) {
                    if (r && (l = t.copy(r)), $) {
                        f = e.href(s.state, l, d);
                        var n = u[1] || u[0];
                        return n && n.$$setStateInfo(s.state, l), null === f ? ($ = !1, !1) : void o.$set(v, f)
                    }
                };
                s.paramExpr && (i.$watch(s.paramExpr, function (e) {
                    e !== l && g(e)
                }, !0), l = t.copy(i.$eval(s.paramExpr))), g(), h || a.bind("click", function (t) {
                    var n = t.which || t.button;
                    if (!(n > 1 || t.ctrlKey || t.metaKey || t.shiftKey || a.attr("target"))) {
                        var i = r(function () {
                            e.go(s.state, l, d)
                        });
                        t.preventDefault();
                        var o = p && !f ? 1 : 0;
                        t.preventDefault = function () {
                            o-- <= 0 && r.cancel(i)
                        }
                    }
                })
            }
        }
    }

    function q(e, t, r) {
        return {
            restrict: "A", controller: ["$scope", "$element", "$attrs", function (t, n, i) {
                function a() {
                    o() ? n.addClass(l) : n.removeClass(l)
                }

                function o() {
                    return "undefined" != typeof i.uiSrefActiveEq ? u && e.is(u.name, s) : u && e.includes(u.name, s)
                }

                var u, s, l;
                l = r(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$setStateInfo = function (t, r) {
                    u = e.get(t, O(n)), s = r, a()
                }, t.$on("$stateChangeSuccess", a)
            }]
        }
    }

    function C(e) {
        var t = function (t) {
            return e.is(t)
        };
        return t.$stateful = !0, t
    }

    function k(e) {
        var t = function (t) {
            return e.includes(t)
        };
        return t.$stateful = !0, t
    }

    var I = t.isDefined, V = t.isFunction, M = t.isString, F = t.isObject, N = t.isArray, R = t.forEach, D = t.extend, U = t.copy;
    t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), v.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", v), $.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", $);
    var T;
    d.prototype.concat = function (e, t) {
        var r = {caseInsensitive: T.caseInsensitive(), strict: T.strictMode(), squash: T.defaultSquashPolicy()};
        return new d(this.sourcePath + e + this.sourceSearch, D(r, t), this)
    }, d.prototype.toString = function () {
        return this.source
    }, d.prototype.exec = function (e, t) {
        function r(e) {
            function t(e) {
                return e.split("").reverse().join("")
            }

            function r(e) {
                return e.replace(/\\-/, "-")
            }

            var n = t(e).split(/-(?!\\)/), i = h(n, t);
            return h(i, r).reverse()
        }

        var n = this.regexp.exec(e);
        if (!n)return null;
        t = t || {};
        var i, a, o, u = this.parameters(), s = u.length, l = this.segments.length - 1, c = {};
        if (l !== n.length - 1)throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (i = 0; l > i; i++) {
            o = u[i];
            var f = this.params[o], p = n[i + 1];
            for (a = 0; a < f.replace; a++)f.replace[a].from === p && (p = f.replace[a].to);
            p && f.array === !0 && (p = r(p)), c[o] = f.value(p)
        }
        for (; s > i; i++)o = u[i], c[o] = this.params[o].value(t[o]);
        return c
    }, d.prototype.parameters = function (e) {
        return I(e) ? this.params[e] || null : this.$$paramNames
    }, d.prototype.validates = function (e) {
        return this.params.$$validates(e)
    }, d.prototype.format = function (e) {
        function t(e) {
            return encodeURIComponent(e).replace(/-/g, function (e) {
                return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        e = e || {};
        var r = this.segments, n = this.parameters(), i = this.params;
        if (!this.validates(e))return null;
        var a, o = !1, u = r.length - 1, s = n.length, l = r[0];
        for (a = 0; s > a; a++) {
            var c = u > a, f = n[a], p = i[f], v = p.value(e[f]), $ = p.isOptional && p.type.equals(p.value(), v), d = $ ? p.squash : !1, m = p.type.encode(v);
            if (c) {
                var g = r[a + 1];
                if (d === !1)null != m && (l += N(m) ? h(m, t).join("-") : encodeURIComponent(m)), l += g; else if (d === !0) {
                    var w = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    l += g.match(w)[1]
                } else M(d) && (l += d + g)
            } else {
                if (null == m || $ && d !== !1)continue;
                N(m) || (m = [m]), m = h(m, encodeURIComponent).join("&" + f + "="), l += (o ? "&" : "?") + (f + "=" + m), o = !0
            }
        }
        return l
    }, m.prototype.is = function () {
        return !0
    }, m.prototype.encode = function (e) {
        return e
    }, m.prototype.decode = function (e) {
        return e
    }, m.prototype.equals = function (e, t) {
        return e == t
    }, m.prototype.$subPattern = function () {
        var e = this.pattern.toString();
        return e.substr(1, e.length - 2)
    }, m.prototype.pattern = /.*/, m.prototype.toString = function () {
        return "{Type:" + this.name + "}"
    }, m.prototype.$asArray = function (e, t) {
        function n(e, t) {
            function n(e, t) {
                return function () {
                    return e[t].apply(e, arguments)
                }
            }

            function i(e) {
                return N(e) ? e : I(e) ? [e] : []
            }

            function a(e) {
                switch (e.length) {
                    case 0:
                        return r;
                    case 1:
                        return "auto" === t ? e[0] : e;
                    default:
                        return e
                }
            }

            function o(e) {
                return !e
            }

            function u(e, t) {
                return function (r) {
                    r = i(r);
                    var n = h(r, e);
                    return t === !0 ? 0 === p(n, o).length : a(n)
                }
            }

            function s(e) {
                return function (t, r) {
                    var n = i(t), a = i(r);
                    if (n.length !== a.length)return !1;
                    for (var o = 0; o < n.length; o++)if (!e(n[o], a[o]))return !1;
                    return !0
                }
            }

            this.encode = u(n(e, "encode")), this.decode = u(n(e, "decode")), this.is = u(n(e, "is"), !0), this.equals = s(n(e, "equals")), this.pattern = e.pattern, this.$arrayMode = t
        }

        if (!e)return this;
        if ("auto" === e && !t)throw new Error("'auto' array mode is for query parameters only");
        return new n(this, e)
    }, t.module("ui.router.util").provider("$urlMatcherFactory", g), t.module("ui.router.util").run(["$urlMatcherFactory", function () {
    }]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", w), y.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", y), b.$inject = [], t.module("ui.router.state").provider("$view", b), t.module("ui.router.state").provider("$uiViewScroll", E), S.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], x.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", S), t.module("ui.router.state").directive("uiView", x), A.$inject = ["$state", "$timeout"], q.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", A).directive("uiSrefActive", q).directive("uiSrefActiveEq", q), C.$inject = ["$state"], k.$inject = ["$state"], t.module("ui.router.state").filter("isState", C).filter("includedByState", k)
}(window, window.angular);