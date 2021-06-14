﻿var _statcounter = function (_1) {
    var _2 = false;

    function is_admin_project(_3) {
        return [12225189, 11548023, 11878871, 12214659, 981359, 9560334, 6709687, 9879613, 4124138, 204609, 10776808, 11601825].indexOf(_3) !== -1
    }
    try {
        var _4;
        var _5 = 1;
        if (typeof _1 !== "undefined" && _1.record_pageview) {
            _4 = _1;
            _5 = _4._get_script_num() + 1
        } else {
            if (typeof _1 === "undefined") {
                _4 = function () { };
                _4._pending_tags = {}
            } else {
                if (_1.start_recording) {
                    _4 = _1;
                    if (_1._pageview_tags_in) {
                        _1 = _1._pageview_tags_in
                    }
                } else {
                    _4 = function () { }
                }
                if (Object.prototype.toString.call(_1) === "[object Array]") {
                    _4._pending_tags = _1
                } else {
                    _4._pending_tags = {}
                }
            }
            _4._session_increment_calculated = {};
            _4._returning_values = {};
            _4._security_codes = {}
        }
        _4.push = function (_6) {
            _4._pending_tags = [_6]
        };
        var _7 = true;
        var _8 = false;
        if (typeof performance !== "undefined") {
            try {
                _8 = Math.round(performance.now())
            } catch (ex) {
                _8 = false
            }
        }
        var _9 = false;
        if (document.currentScript && document.currentScript.src && document.currentScript.src.indexOf("statcounter.com") !== -1) {
            _9 = document.currentScript.src
        }
        var _a = -1;
        var _b = "";
        var _c = "statcounter.com";
        var _d = "";
        var _e = "cookie";
        if (window.sc_client_storage) {
            _e = window.sc_client_storage
        }
        if (typeof window.sc_first_party_cookie != "undefined" && sc_first_party_cookie == "0") {
            _e = "disabled"
        }
        if (window.sc_click_stat) {
            _a = window.sc_click_stat
        }
        if (window.sc_local) {
            _b = sc_local
        } else {
            if (_a == -1) {
                _a = 1
            }
            _b = "https://c." + _c + "/"
        }
        if (window.sc_project) {
            _2 = parseInt(window.sc_project, 10);
            if (window.sc_security) {
                _4._security_codes[_2] = sc_security
            } else {
                if (_4._security_codes[_2] === undefined) {
                    _4._security_codes[_2] = ""
                }
            }
        }

        function apply_new_methodology_fixes(_f) {
            var _10 = 9000000;
            return ([4344864, 4124138, 204609].indexOf(_f) !== -1 || _f > _10)
        }

        function use_performance_tags(_11) {
            return [204609, 4124138].indexOf(_11) !== -1
        }

        function need_project_config(_12) {
            var ret = true;
            try {
                if (!(typeof JSON == "object" && JSON && typeof JSON.stringify == "function" && typeof JSON.parse == "function" && "sessionStorage" in window && "withCredentials" in new XMLHttpRequest())) {
                    ret = false
                }
                if (_sessionStorageGetConfig("sc_project_config_" + _12) === 1 && _sessionStorageGetConfig("sc_project_time_difference_" + _12) !== null) {
                    ret = false
                }
                if (_sessionStorageGetConfig("sc_block_project_config_" + _12) !== null) {
                    ret = false
                }
                if (ret) {
                    _sessionStorageSetConfig("sc_project_config_" + _12, -1);
                    ret = _sessionStorageGetConfig("sc_project_config_" + _12) === -1
                }
            } catch (ignore) {
                ret = false
            }
            return ret
        }
        var _14 = [30, 60, 120, 180, 360, 720, 1440, 2880, 10080];

        function get_referrer() {
            var _15 = "" + document.referrer;
            try {
                _15 = "" + parent.document.referrer
            } catch (ex) {
                _15 = "" + document.referrer
            }
            if (typeof sc_referer_scr08 !== "undefined") {
                _15 = sc_referer_scr08
            }
            return _15
        }
        _4.get_referrer = get_referrer;
        var _16 = 0;
        _4.inject_script = function (url, _18) {
            if (url === undefined || !url.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/)) {
                return
            }
            var scr = document.createElement("script");
            scr.type = "text/javascript";
            scr.async = true;
            if (_18) {
                scr.onload = _18
            }
            scr.src = url;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(scr, s)
        };

        function get_page_title() {
            var _1b = "" + document.title;
            _1b = _1b.substring(0, 300);
            if (encodeURIComponent) {
                _1b = encodeURIComponent(_1b)
            } else {
                _1b = escape(_1b)
            }
            return _1b
        }

        function get_page_url() {
            var _1c = "" + document.location;
            if (_1c == "about:srcdoc") {
                _1c = "" + document.baseURI
            }
            _1c = _1c.substring(0, 300);
            _1c = escape(_1c);
            return _1c
        }

        function get_screen_width() {
            return screen.width
        }

        function get_screen_height() {
            return screen.height
        }

        function get_performance_url_params(_1d) {
            if (_16 == 0) {
                var _1e = "";
                var _1f = "";
                var _20 = "";
                try {
                    if (typeof performance !== "undefined") {
                        var _21 = Math.round(performance.now());
                        _1e = "&sc_rum_e_s=" + _8 + "&sc_rum_e_e=" + _21;
                        var _22 = _21 - _8;
                        _1f = get_performance_tags(_1d, _22)
                    }
                } catch (ex) {
                    _1e = "";
                    _1f = ""
                }
                try {
                    if (typeof performance !== "undefined") {
                        var _23 = performance.getEntriesByType("resource");
                        for (var i = 0; i < _23.length; i++) {
                            var _25 = _23[i];
                            if (_25.name.includes("statcounter.com/counter/counter.js") || _25.name.includes("statcounter.com/counter/counter_test.js")) {
                                _20 = "&sc_rum_f_s=" + Math.round(_25.requestStart) + "&sc_rum_f_e=" + Math.round(_25.responseEnd);
                                break
                            }
                        }
                    }
                } catch (ex) {
                    _20 = ""
                }
                return _1e + _1f + _20
            }
            return ""
        }

        function get_performance_tags(_26, _27) {
            var _28 = "";
            if (use_performance_tags(_26) && typeof performance !== "undefined") {
                var _29 = document.getElementById("sc-ttfb-bd");
                var _2a = "-1";
                if (_29) {
                    _2a = _29.textContent
                }
                var _2b = performance.timing.responseStart - performance.timing.connectStart;
                var _2c = document.getElementById("sc-perf-wh");
                var _2d = 0;
                if (_2c) {
                    _2d = _2c.textContent
                }
                var _2e = document.getElementById("sc-perf-pn");
                var _2f = 0;
                if (_2e) {
                    _2f = _2e.textContent
                }
                var _30 = document.getElementById("sc-perf-db");
                var _31 = 0;
                if (_30) {
                    _31 = _30.textContent
                }
                _28 = "&sc_ev_scperf_js_exec=" + _27 + "&sc_ev_scperf_ttfb_frontend=" + _2b + "&sc_ev_scperf_ttfb_backend=" + _2a + "&sc_ev_scperf_ws=" + _2d + "&sc_ev_scperf_pn=" + _2f + "&sc_ev_scperf_db=" + _31
            }
            return _28
        }

        function strip_tags(_32, _33) {
            _33 = (((_33 || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
            var _34 = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                _35 = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return _32.replace(_35, "").replace(_34, function ($0, $1) {
                return _33.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
            })
        }

        function sanitise_tags(_38) {
            for (var i = 0; i < _38.length; i++) {
                _38[i] = ("" + _38[i]).trim()
            }
            return _38
        }

        function validate_tags(_3a) {
            var _3b = 10;
            var _3c = 1;
            var _3d = 300;
            var _3e = [];
            if (!(_3a.length % 2 == 0)) {
                _3e.push("Every tag must have a name and value.")
            } else {
                if (_3a.length / 2 > _3b) {
                    _3e.push("No more than " + _3b + " tags can be passed - " + _3a.length / 2 + " passed.")
                }
                for (var i = 0; i < _3a.length; i++) {
                    var _40 = ("" + _3a[i]).length;
                    if (_40 < _3c || _40 > _3d) {
                        _3e.push("Tag names and values must be between " + _3c + " and " + _3d + " characters in length ('" + _3a[i] + "' is " + _3a[i].length + " characters long).")
                    }
                }
                for (var i = 0; i < _3a.length; i++) {
                    if (strip_tags("" + _3a[i]) != "" + _3a[i]) {
                        _3e.push("Tag names and values may not contain HTML tags.")
                    }
                }
            }
            if (_3e.length != 0) {
                for (var i = 0; i < _3e.length; i++) { }
                return false
            }
            return true
        }

        function get_tag_qs(_41) {
            function _42(obj, _44) {
                var _45 = obj.__proto__ || obj.constructor.prototype;
                return (_44 in obj) && (!(_44 in _45) || _45[_44] !== obj[_44])
            }
            if (Object.prototype.hasOwnProperty) {
                var _42 = function (obj, _47) {
                    return obj.hasOwnProperty(_47)
                }
            }
            var _48 = {};
            if (_42(_41, "tags") && typeof _41.tags === "object") {
                var _49 = [];
                for (var tag in _41.tags) {
                    _49[_49.length] = tag;
                    _49[_49.length] = _41.tags[tag]
                }
                if (validate_tags(_49)) {
                    _49 = sanitise_tags(_49);
                    for (var i = 0; i < _49.length; i = i + 2) {
                        _48["sc_ev_" + encodeURIComponent(_49[i])] = encodeURIComponent(_49[i + 1])
                    }
                }
            }
            return _48
        }
        var _4c = [];
        var _4d = 256;
        var _4e = 6;
        var _4f = 52;
        var _50 = Math.pow(_4d, _4e),
            _51 = Math.pow(2, _4f),
            _52 = _51 * 2,
            _53 = _4d - 1;
        var _54;
        var _55 = function (_56, _57) {
            var key = [];
            var _59 = mixkey(flatten(_57 ? [_56, tostring(_4c)] : 0 in arguments ? _56 : autoseed(), 3), key);
            var _5a = new ARC4(key);
            mixkey(tostring(_5a.S), _4c);
            _54 = function () {
                var n = _5a.g(_4e),
                    d = _50,
                    x = 0;
                while (n < _51) {
                    n = (n + x) * _4d;
                    d *= _4d;
                    x = _5a.g(1)
                }
                while (n >= _52) {
                    n /= 2;
                    d /= 2;
                    x >>>= 1
                }
                return (n + x) / d
            };
            return _59
        };

        function ARC4(key) {
            var t, _60 = key.length,
                me = this,
                i = 0,
                j = me.i = me.j = 0,
                s = me.S = [];
            if (!_60) {
                key = [_60++]
            }
            while (i < _4d) {
                s[i] = i++
            }
            for (i = 0; i < _4d; i++) {
                s[i] = s[j = _53 & (j + key[i % _60] + (t = s[i]))];
                s[j] = t
            } (me.g = function (_65) {
                var t, r = 0,
                    i = me.i,
                    j = me.j,
                    s = me.S;
                while (_65--) {
                    t = s[i = _53 & (i + 1)];
                    r = r * _4d + s[_53 & ((s[i] = s[j = _53 & (j + t)]) + (s[j] = t))]
                }
                me.i = i;
                me.j = j;
                return r
            })(_4d)
        }

        function flatten(obj, _69) {
            var _6a = [],
                typ = (typeof obj)[0],
                _6c;
            if (_69 && typ == "o") {
                for (_6c in obj) {
                    try {
                        _6a.push(flatten(obj[_6c], _69 - 1))
                    } catch (e) { }
                }
            }
            return (_6a.length ? _6a : typ == "s" ? obj : obj + "\x00")
        }

        function mixkey(_6d, key) {
            var _6f = _6d + "",
                _70, j = 0;
            while (j < _6f.length) {
                key[_53 & j] = _53 & ((_70 ^= key[_53 & j] * 19) + _6f.charCodeAt(j++))
            }
            return tostring(key)
        }

        function autoseed(_72) {
            try {
                window.crypto.getRandomValues(_72 = new Uint8Array(_4d));
                return tostring(_72)
            } catch (e) {
                return [+new Date, window, window.navigator.plugins, window.screen, tostring(_4c)]
            }
        }

        function tostring(a) {
            return String.fromCharCode.apply(0, a)
        }
        mixkey(Math.random(), _4c);

        function detectBrowserFeatures() {
            var _74 = [];
            var i;
            var _76;
            var _77 = {
                pdf: "application/pdf",
                qt: "video/quicktime",
                realp: "audio/x-pn-realaudio-plugin",
                wma: "application/x-mplayer2",
                dir: "application/x-director",
                fla: "application/x-shockwave-flash",
                java: "application/x-java-vm",
                gears: "application/x-googlegears",
                ag: "application/x-silverlight"
            };
            var _78 = (new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent) ? window.devicePixelRatio || 1 : 1;
            if (!((new RegExp("MSIE")).test(navigator.userAgent))) {
                if (navigator.mimeTypes && navigator.mimeTypes.length) {
                    for (var i in _77) {
                        if (Object.prototype.hasOwnProperty.call(_77, i)) {
                            _76 = navigator.mimeTypes[_77[i]];
                            _74.push((_76 && _76.enabledPlugin) ? "1" : "0")
                        }
                    }
                }
                if (typeof navigator.javaEnabled !== "unknown" && typeof navigator.javaEnabled !== "undefined" && navigator.javaEnabled()) {
                    _74.push("java")
                }
                if (typeof window.GearsFactory === "function") {
                    _74.push("gears")
                }
            }
            _74.push(screen.width * _78 + "x" + screen.height * _78);
            return _74.join("")
        }

        function generate_uuid(_79) {
            var now = new Date();
            var _7b = false;
            if (_79 === undefined) {
                _79 = 32;
                if (_7b) {
                    _79 = 36
                }
            }
            var _7c = Math.round(now.getTime() / 1000) + now.getMilliseconds();
            var _7d = (navigator.userAgent || "") + (navigator.platform || "") + detectBrowserFeatures() + now.getTimezoneOffset() + window.innerWidth + window.innerHeight + window.screen.colorDepth + document.URL + _7c;
            _55(_7d);
            var _7e = "0123456789ABCDEF".split(""),
                _7f = new Array(_79),
                rnd = 0,
                r;
            for (var i = 0; i < _79; i++) {
                if (_7b && (i == 8 || i == 13 || i == 18 || i == 23)) {
                    _7f[i] = "-"
                } else {
                    if ((i == 12 && !_7b) || (i == 14 && _7b)) {
                        _7f[i] = "4"
                    } else {
                        if ((i == 13 && !_7b) || (i == 15 && _7b)) {
                            _7f[i] = "F"
                        } else {
                            if (rnd <= 2) {
                                rnd = 33554432 + (_54() * 16777216) | 0
                            }
                            r = rnd & 15;
                            rnd = rnd >> 4;
                            _7f[i] = _7e[(i == 19) ? (r & 3) | 8 : r]
                        }
                    }
                }
            }
            return _7f.join("")
        }
        var _83;
        if (typeof window.sc_cookie_domain == "undefined") {
            _83 = document.location.host.replace(/^www\./, "")
        } else {
            _83 = window.sc_cookie_domain
        }
        if (_83.substring(0, 1) != ".") {
            _83 = "." + _83
        }

        function _localStorageAvailable() {
            var _84 = false;
            if ("localStorage" in window) {
                try {
                    _84 = window["localStorage"] !== null
                } catch (e) {
                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                        if (!e.number || parseInt(e.number, 10) !== -2147024891) {
                            throw e
                        }
                    }
                }
            }
            return _84
        }

        function _setLocalStorage(_85, _86, _87) {
            if (_localStorageAvailable()) {
                try {
                    if (_85 === "is_visitor_unique") {
                        localStorage.setItem("statcounter.com/localstorage/", _86)
                    } else {
                        localStorage.setItem("statcounter_" + _85, _86)
                    }
                } catch (e) {
                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                        if (!e.number || parseInt(e.number, 10) !== -2147024891) {
                            throw e
                        }
                    }
                    return false
                }
                return true
            }
            return false
        }

        function setLocal(_88, _89, _8a, _8b, _8c, _8d) {
            if (typeof _89 === "string") {
                _89 = [_89]
            }
            if (_8b === undefined) {
                _8b = ""
            }
            if (_8c === undefined) {
                _8c = 30
            }
            var _8e = false;
            if (_e == "localStorage") {
                _8e = _setLocalStorage(_88, _8b + _89.join("-"), _8a);
                if (!_8e) {
                    _8e = _writeCookie(_88, _8b + _89.join("-"), _8a, undefined, _8d)
                } else {
                    if (_readCookie(_88) !== null) {
                        _removeCookie(_88, _8a)
                    }
                }
            } else {
                var _8f = _89.slice(0, _8c).join("-");
                _8e = _writeCookie(_88, _8b + _8f, _8a, undefined, _8d);
                if (!_8e) {
                    _8e = _setLocalStorage(_88, _8b + _89.join("-"), _8a)
                } else {
                    if (_89.length > _8c) {
                        _setLocalStorage(_88, "mx" + _89.slice(_8c).join("-"), _8a)
                    } else {
                        _removeLocalStorage(_88)
                    }
                }
            }
            return _8e
        }

        function getLocal(_90, _91) {
            var val = null;
            if (_localStorageAvailable()) {
                if (_90 === "is_visitor_unique") {
                    val = localStorage.getItem("statcounter.com/localstorage/")
                } else {
                    val = localStorage.getItem("statcounter_" + _90)
                }
            }
            if (_e == "localStorage" && val !== null && val.substring(0, 2) == "rx") {
                return val
            }
            var _93 = _readCookie(_90, _91);
            if (val !== null) {
                if (_93 === null && val.substring(0, 2) == "rx") {
                    return val
                } else {
                    if (_93 !== null && val.substring(0, 2) == "mx") {
                        _93 += "-" + val.substring(2)
                    }
                }
            }
            return _93
        }

        function _removeLocalStorage(_94) {
            if (_localStorageAvailable()) {
                if (_94 === "is_visitor_unique") {
                    localStorage.removeItem("statcounter.com/localstorage/")
                }
                localStorage.removeItem("statcounter_" + _94)
            }
        }

        function removeLocal(_95, _96) {
            _removeLocalStorage(_95);
            if (_readCookie(_95)) {
                _removeCookie(_95, _96)
            }
        }

        function _readCookie(_97, _98) {
            var _99 = "sc_" + _97 + "=";
            var ret = null;
            if (document.cookie) {
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") {
                        c = c.substring(1, c.length)
                    }
                    if (c.indexOf(_99) == 0) {
                        var _9e = c.substring(_99.length, c.length);
                        if (ret && _98 !== undefined && ret.indexOf("" + _98 + ".") !== -1 && _9e.indexOf("" + _98 + ".") === -1) { } else {
                            ret = _9e
                        }
                    }
                }
            }
            return ret
        }

        function _writeCookie(_9f, _a0, _a1, _a2, _a3) {
            var _a4 = false;
            if (_a2 === undefined) {
                _a4 = 1000 * 60 * 60 * 24 * 365 * 2
            } else {
                if (_a2 !== "session") {
                    _a4 = 1000 * _a2
                }
            }
            var _a5 = "";
            if (_a4 !== false) {
                var _a6 = new Date();
                _a6.setTime(_a6.getTime() + _a4);
                _a5 = "; expires=" + _a6.toGMTString()
            }
            var _a7 = 3050;
            if (_a0.length > _a7 - 50 && _a0.substring(0, _a7).indexOf("-") !== -1) {
                _a0 = _a0.substring(0, _a0.substring(0, _a7).lastIndexOf("-"))
            }
            var _a8 = "; SameSite=Lax";
            document.cookie = "sc_" + _9f + "=" + _a0 + _a5 + "; domain=" + _a1 + "; path=/" + _a8;
            var rc = _readCookie(_9f, _a3);
            if (rc !== null && rc === _a0) {
                return true
            } else {
                return false
            }
        }

        function _removeCookie(_aa, _ab) {
            if (document.location.host == "www" + _ab) {
                document.cookie = "sc_" + _aa + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.www" + _ab + "; path=/; SameSite=Lax"
            }
            document.cookie = "sc_" + _aa + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + _ab + "; path=/; SameSite=Lax"
        }

        function _getConfigDataStructureFromSession() {
            var _ac = {};
            try {
                if (sessionStorage.getItem("statcounter_config") !== null) {
                    _ac = JSON.parse(sessionStorage.getItem("statcounter_config"))
                }
            } catch (ignore) {
                _ac = {}
            }
            return _ac
        }

        function _sessionStorageGetConfig(key) {
            if (!("sessionStorage" in window)) {
                return null
            }
            var _ae = _getConfigDataStructureFromSession();
            if (_ae[key] !== undefined) {
                return _ae[key]
            }
            var _af = null;
            try {
                _af = sessionStorage.getItem(key)
            } catch (ignore) {
                return null
            }
            if (_af !== null) {
                _sessionStorageSetConfig(key, _af);
                sessionStorage.removeItem(key);
                return _af
            }
            return null
        }

        function _sessionStorageSetConfig(key, _b1) {
            if (!("sessionStorage" in window)) {
                console.log("returning false");
                return false
            }
            var _b2 = _getConfigDataStructureFromSession();
            try {
                _b2[key] = _b1;
                return sessionStorage.setItem("statcounter_config", JSON.stringify(_b2))
            } catch (ignore) {
                return false
            }
        }
        var _b3 = (function () {
            var _b4 = false;
            return function (_b5) {
                if (_b4) {
                    return
                }
                var _b6 = _sessionStorageGetConfig("record_" + _b5);
                if (!_b6 || !_b6.match(/(^on$|test$|wsdev$|^dev[0-9]*)/)) {
                    return
                }
                if (isLegacyIE()) {
                    return
                }
                if (!_4._session_increment_calculated[_b5]) {
                    return
                }
                if (!_sessionStorageGetConfig("sc_project_time_difference_" + _b5)) {
                    return
                }
                if (_4.start_recording) {
                    _4.start_recording(_b5, _b6)
                } else {
                    var _b7 = "https://www.statcounter.com/counter/recorder.js";
                    if (_9) {
                        _b7 = _9.replace(/\/counter([^\/])/, "/recorder$1").replace("_xhtml", "");
                        _b7 = _b7.replace(/^http:\/\//, "https://")
                    }
                    if (_b6.indexOf("test") != -1) {
                        _b7 = _b7.replace(/\/recorder(.[^t])/, "/recorder_test$1")
                    }
                    if (_b6.indexOf("_") != -1) {
                        _b7 = _b7.replace(/\.js/, "_" + _b6.split("_")[1] + ".js")
                    }
                    if (_b6.substring(0, 3) == "dev" && _b6 !== "dev") {
                        _b7 = _b7.replace(/\/\/(www\.|secure\.)?/, "//" + _b6.split("_")[0].replace(/\//g, "").replace("test", "").replace("wsdev", "") + ".")
                    } else {
                        _b7 = _b7.replace(/\/\/(secure\.)?statcounter\./, "//www.statcounter.")
                    }
                    _4.inject_script(_b7, function () {
                        _statcounter.start_recording(_b5, _b6)
                    })
                }
                _b4 = true
            }
        }());
        _4.get_config = function (_b8, _b9) {
            var _ba = false;
            if (_b8.match(/sc_project=[0-9]+/)) {
                _ba = parseInt(_b8.match(/sc_project=([0-9]+)/)[1], 10)
            }
            if (_b8.substring(0, 1) == "?") {
                var url = _b + "t.php" + _b8
            } else {
                var url = _b8
            }
            url = url + "&get_config=true";
            var _bc = new XMLHttpRequest();
            _bc.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var _bd = JSON.parse(this.responseText);
                    _b9(_bd)
                }
            };
            _bc.withCredentials = true;
            if (_ba !== false) {
                _bc.addEventListener("error", function (_be) {
                    _sessionStorageSetConfig("sc_block_project_config_" + _ba, 1)
                })
            }
            _bc.open("GET", url, true);
            _bc.send()
        };

        function config_ping(_bf, _c0, _c1) {
            _4.get_config(_c0, function (_c2) {
                _sessionStorageSetConfig("sc_project_config_" + _bf, 1);
                _sessionStorageSetConfig("sc_project_time_difference_" + _bf, parseInt(_c2["time_difference"]));
                if (_c2["visitor_recording"] === 1) {
                    _4.record(_bf)
                } else {
                    if (_c2["visitor_recording"] === 2) {
                        _4.record(_bf, "test")
                    } else {
                        var _c3 = _sessionStorageGetConfig("record_" + _bf);
                        if (_c3 && _c3.indexOf("dev") !== -1) {
                            _b3(_bf)
                        }
                    }
                }
                if (typeof _c1 !== "undefined") {
                    _c1(_c2)
                }
            })
        }
        var _c4 = {
            "google": null,
            "bing": ["q"],
            "search.yahoo": null,
            "m.yahoo": null,
            "m2.yahoo": null,
            "baidu": ["wd", "word"],
            "yandex": ["text"],
            "ya.ru": ["text"],
            "haosou": ["q"],
            "so.com": ["q"],
            "360.cn": ["q"],
            "360sou": ["q"],
            "aol": ["query", "q"],
            "duckduckgo": null,
            "ask.com": ["q", "QUERYT"],
            "mail.ru": ["words"],
            "sogou": ["q", "query"]
        };
        var _c5 = {
            "fb": ["facebook.com", "fb.me"],
            "pi": ["pinterest.com"],
            "tw": ["twitter.com", "t.co"],
            "ln": ["linkedin.com"],
            "in": ["instagram.com"],
            "rd": ["reddit.com"],
            "tb": ["tumblr.com"],
            "st": ["stumbleupon.com"],
            "yt": ["youtube.com"],
            "gp": ["plus.google.com", "plus.url.google.com"]
        };

        function check_root_domains_match(a, b) {
            var _c8 = a.split(".");
            var _c9 = b.split(".");
            var _ca = Math.min(_c8.length, _c9.length);
            var _cb = 2;
            if (_c8.length > 1 && ((_c8[_c8.length - 2].length <= 3 && _c8[_c8.length - 1] in {
                "at": 1,
                "au": 1,
                "br": 1,
                "es": 1,
                "hu": 1,
                "il": 1,
                "nz": 1,
                "tr": 1,
                "uk": 1,
                "us": 1,
                "za": 1
            }) || _c8[_c8.length - 1] == "kr" || _c8[_c8.length - 1] == "ru" || (_c8[_c8.length - 1] == "au" && _c8[_c8.length - 2] in {
                "csiro": 1
            }) || (_c8[_c8.length - 1] == "at" && _c8[_c8.length - 2] in {
                "priv": 1
            }) || (_c8[_c8.length - 1] == "fr" && _c8[_c8.length - 2] in {
                "avocat": 1,
                "aeroport": 1,
                "veterinaire": 1
            }) || (_c8[_c8.length - 1] == "hu" && _c8[_c8.length - 2] in {
                "film": 1,
                "lakas": 1,
                "ingatlan": 1,
                "sport": 1,
                "hotel": 1
            }) || (_c8[_c8.length - 1] == "nz" && _c8[_c8.length - 2] in {
                "geek": 1,
                "kiwi": 1,
                "maori": 1,
                "school": 1,
                "govt": 1,
                "health": 1,
                "parliament": 1
            }) || (_c8[_c8.length - 1] == "il" && _c8[_c8.length - 2] in {
                "muni": 1
            }) || (_c8[_c8.length - 1] == "za" && _c8[_c8.length - 2] in {
                "school": 1
            }) || (_c8[_c8.length - 1] == "tr" && _c8[_c8.length - 2] in {
                "name": 1
            }) || (_c8[_c8.length - 1] == "uk" && _c8[_c8.length - 2] in {
                "police": 1
            }))) {
                _cb = 3
            }
            for (var i = 1; i <= _ca; i++) {
                if (_c8[_c8.length - i] != _c9[_c9.length - i]) {
                    return false
                }
                if (i >= _cb) {
                    return true
                }
            }
            return _c8.length == _c9.length
        }

        function classify_referrer(_cd, r) {
            if (r == "") {
                return "d"
            }
            var _cf = r.split("/")[2].replace(/^www\./, "");
            var _d0 = document.location.host.replace(/^www\./, "");
            if (apply_new_methodology_fixes(_cd)) {
                if (_d0 == _cf) {
                    return "internal"
                }
                if (check_root_domains_match(_cf, _d0)) {
                    return "internal"
                }
            }
            if (r.search(/\bgoogle\..*\?.*adurl=http/) !== -1) {
                return "p"
            }
            var _d1 = ["utm_source=bing", "?gclid=", "&gclid=", "utm_medium=cpc", "utm_medium=paid-media", "utm_medium=ppc"];
            for (var i = 0; i < _d1.length; i++) {
                if (document.location.search.indexOf(_d1[i]) !== -1) {
                    return "p"
                }
            }
            var _d3 = ["utm_medium=email"];
            for (var i = 0; i < _d3.length; i++) {
                if (document.location.search.indexOf(_d3[i]) !== -1) {
                    return "e"
                }
            }
            if (!apply_new_methodology_fixes(_cd)) {
                if (_d0 == _cf) {
                    return "internal"
                }
            }
            for (var _d4 in _c4) {
                if (_cf.replace(_d4, "#").split(".").indexOf("#") !== -1) {
                    if (_c4[_d4] === null) {
                        return _d4
                    }
                    for (var i = 0; i < _c4[_d4].length; i++) {
                        var _d5 = _c4[_d4][i];
                        if (r.indexOf("?" + _d5 + "=") !== -1 || r.indexOf("&" + _d5 + "=") !== -1) {
                            return _d4
                        }
                    }
                }
            }
            for (var _d6 in _c5) {
                for (var i = 0; i < _c5[_d6].length; i++) {
                    var _d4 = _c5[_d6][i];
                    if (_cf.replace(_d4, "#").split(".").indexOf("#") !== -1) {
                        return _d6
                    }
                }
            }
            return _cf
        }

        function categorize_class(cls) {
            if (cls == "d" || cls == "p" || cls == "e" || cls == "internal") {
                return cls
            }
            if (cls in _c4) {
                return "o"
            }
            if (cls in _c5) {
                return "s"
            }
            return "r"
        }
        var _d8 = escape(get_referrer());
        _4.record_pageview = function (_d9, _da) {
            var _db = "invisible";
            if (typeof _d9 === "undefined") {
                if (_2 === false) {
                    if (window.usr) {
                        _d9 = 999
                    } else {
                        console.error("Need to define a global `var sc_project` and `var security code`, or else call record_pageview with these arguments");
                        document.writeln("Statcounter code invalid. Insert a fresh copy.");
                        return
                    }
                } else {
                    _d9 = _2
                }
                if (window.sc_invisible && window.sc_invisible == 1) {
                    _db = "invisible"
                } else {
                    if (window.sc_text) {
                        _db = "text"
                    } else {
                        _db = "image"
                    }
                }
            } else {
                _d9 = parseInt(_d9, 10);
                if (isNaN(_d9)) {
                    console.error("Please call record_pageview with your statcounter project id");
                    return
                } else {
                    if (typeof _da === "string") {
                        _4._security_codes[_d9] = _da
                    } else {
                        if (_4._security_codes[_d9] === "undefined") {
                            console.error("Please include the security code for project " + _d9 + " as the second argument to record_pageview");
                            return
                        }
                    }
                }
            }
            if (_4._security_codes[_d9] === undefined) {
                _4._security_codes[_d9] = ""
            }
            var _dc = 0;
            if (_d9 == 4135125 || _d9 == 6169619 || _d9 == 6222332 || _d9 == 5106510 || _d9 == 6311399 || _d9 == 6320092 || _d9 == 5291656 || _d9 == 7324465 || _d9 == 6640020 || _d9 == 4629288 || _d9 == 1480088 || _d9 == 2447031) {
                if (Math.floor(Math.random() * 6) != 1) {
                    _dc = 1
                }
            }
            if (_dc == 1) { } else {
                if (document.webkitVisibilityState == "prerender") {
                    if (_5 == 1) {
                        function delayed_send_pageview() {
                            if (document.webkitVisibilityState != "prerender") {
                                for (var _dd in _4._security_codes) {
                                    send_pageview(parseInt(_dd, 10), "invisible", {
                                        "p": 2
                                    })
                                }
                                document.removeEventListener("webkitvisibilitychange", delayed_send_pageview, false)
                            }
                        }
                        document.addEventListener("webkitvisibilitychange", delayed_send_pageview, false)
                    }
                    gen_counter(_d9, _db, false, {}, {
                        "p": 1
                    })
                } else {
                    send_pageview(_d9, _db, {
                        "p": 0
                    })
                }
            }
        };
        var _de = {};

        function send_pageview(_df, _e0, _e1) {
            var _e2 = {};
            _e2["u1"] = "za";
            var _e3 = need_project_config(_df);
            _de[_df] = (new Date()).getTime();
            var _e4 = {};
            if (!apply_new_methodology_fixes(_df)) {
                var _e5 = classify_referrer(_df, _d8);
                var _e6 = categorize_class(_e5);
                if (_e5 != "internal") {
                    _e4["rcat"] = _e6;
                    _e4["rdom"] = _e5
                }
            }
            var _e7 = Math.round((new Date()).getTime() / 1000);
            if (_e != "disabled") {
                if (apply_new_methodology_fixes(_df)) {
                    var _e5 = classify_referrer(_df, _d8);
                    var _e6 = categorize_class(_e5);
                    if (_e5 != "internal") {
                        _e4["rcat"] = _e6;
                        _e4["rdom"] = _e5
                    }
                }
                try {
                    var _e8 = JSON.parse(localStorage.getItem("sc_medium_source"));
                    if (_e8 == null) {
                        _e8 = {}
                    }
                    var _e9 = null;
                    var _ea = null;
                    var _eb = null;
                    var msl = 0;
                    for (var k in _e8) {
                        if (_e9 === null || _e8[k] > _e8[_e9]) {
                            _e9 = k
                        }
                        var _ee = categorize_class(k);
                        if (_e6 == _ee && (_ea === null || _e8[k] > _e8[_ea])) {
                            _ea = k
                        }
                        if (_ee == "r" && (_eb === null || _e8[k] < _e8[_eb])) {
                            _eb = k
                        }
                        msl += 1
                    }
                    if (msl > 30 && _eb !== null) {
                        delete _e8[_eb]
                    }
                    if (sessionStorage.getItem("statcounter_bounce")) {
                        sessionStorage.removeItem("statcounter_bounce");
                        _e4["bb"] = 0
                    }
                    var _ef = 30;
                    if (!apply_new_methodology_fixes(_df)) {
                        _ef = 15
                    }
                    if (_e5 == "d" && _e9 !== null && _e9 != "d" && (_e7 - _e8[_e9]) < 60 * _ef) {
                        _e5 = "internal"
                    }
                    if (apply_new_methodology_fixes(_df)) {
                        if (sessionStorage.getItem("statcounter_session") && (_e7 - parseInt(sessionStorage.getItem("statcounter_session"), 10)) < 60 * 30) {
                            _e5 = "internal"
                        }
                        sessionStorage.setItem("statcounter_session", _e7)
                    }
                    if (!apply_new_methodology_fixes(_df)) {
                        if (_e6 == "r" && sessionStorage.getItem("statcounter_exit_domain") == _e5) {
                            _e5 = "internal"
                        }
                    }
                    if (_e5 == "internal") {
                        if (_e9 !== null) {
                            _e4["rcat"] = categorize_class(_e9);
                            if (_e4["rdom"] !== undefined) {
                                delete _e4["rdom"]
                            }
                            _e4["rdomo"] = _e9;
                            _e4["rdomg"] = _e7 - _e8[_e9];
                            _e8[_e9] = _e7
                        }
                    } else {
                        var _f0 = false;
                        if (_e5 in _e8) {
                            if (_e5 == _e9) {
                                if (_e4["rdom"] !== undefined) {
                                    _e4["rdomo"] = _e4["rdom"];
                                    delete _e4["rdom"]
                                }
                            }
                            _e4["rdomg"] = _e7 - _e8[_e5];
                            if (_e7 - _e8[_e5] < 60 * 30) {
                                _f0 = true
                            }
                        } else {
                            _e4["rdomg"] = "new"
                        }
                        if (_e4["bb"] === undefined && !_f0) {
                            sessionStorage.setItem("statcounter_bounce", "1");
                            _e4["bb"] = 1
                        }
                        if (_ea !== null && (!(_e5 in _e8) || _e5 != _ea)) {
                            _e4["rcatg"] = _e7 - _e8[_ea]
                        }
                        _e8[_e5] = _e7
                    }
                    try {
                        localStorage.setItem("sc_medium_source", JSON.stringify(_e8))
                    } catch (maybe_not_enough_space) {
                        if (apply_new_methodology_fixes(_df)) {
                            _e4 = {}
                        }
                    }
                } catch (e) {
                    if (apply_new_methodology_fixes(_df)) {
                        _e4 = {}
                    }
                }
                for (var arg in _e4) {
                    _e1[arg] = _e4[arg]
                }
                if (_e4["rdom"] !== undefined) {
                    var _f2 = true
                } else {
                    var _f2 = false
                }
                var _f3 = _4.update_cookie(_df, _e7, _f2);
                if (_f3["session_incremented"]) {
                    var _f4 = _sessionStorageGetConfig("record_" + _df);
                    if (_f4 && !_f4.match(/(^test$|wsdev$|^dev[0-9]*)/)) {
                        _e3 = true;
                        _sessionStorageSetConfig("sc_project_time_difference_" + _df, false)
                    }
                }
                _4._session_increment_calculated[_df] = true;
                _e1["jg"] = _f3["jg"];
                _e1["rr"] = _f3["rr"];
                if (_f3["u1"] !== undefined) {
                    _e2["u1"] = _f3["u1"]
                }
            } else { }
            if (Object.prototype.toString.call(_4._pending_tags) === "[object Array]") {
                var _f5 = _4._pending_tags.length;
                if (_f5 >= 1) {
                    var _f6 = get_tag_qs(_4._pending_tags[0]);
                    for (var arg in _f6) {
                        _e1[arg] = _f6[arg]
                    }
                }
            }
            _4._pending_tags = {};
            gen_counter(_df, _e0, _e3, _e2, _e1);
            _d8 = get_page_url();
            _b3(_df)
        }

        function gen_counter(_f7, _f8, _f9, _fa, _fb) {
            if (_f7 !== 999) {
                _fa["sc_project"] = _f7
            } else {
                if (window.usr) {
                    _fa["usr"] = window.usr
                }
            }
            _fa["java"] = 1;
            _fa["security"] = _4._security_codes[_f7];
            _fa["sc_snum"] = _5;
            _fa["sess"] = _4.version();
            var _fc = _b;
            if (_f8 == "text") {
                _fc += "text.php?"
            } else {
                _fc += "t.php?"
            }
            for (var arg in _fa) {
                _fc += "&" + arg + "=" + _fa[arg]
            }
            _fc = _fc.replace("?&", "?");
            _fb["resolution"] = get_screen_width();
            _fb["h"] = get_screen_height();
            _fb["camefrom"] = _d8.substring(0, 600);
            _fb["u"] = get_page_url();
            _fb["t"] = get_page_title();
            if (_f8 == "invisible") {
                _fb["invisible"] = "1"
            } else {
                if (_f8 == "text") {
                    _fb["text"] = window.sc_text
                }
            }
            var _fe = "";
            for (var arg in _fb) {
                _fe += "&" + arg + "=" + _fb[arg]
            }
            if (_f8 == "invisible") {
                var _ff = false;
                if (_d != "" && typeof JSON == "object" && JSON && typeof JSON.stringify == "function" && "sessionStorage" in window) {
                    _ff = true
                }
                var _100 = false;
                if (_ff) {
                    try {
                        var _101 = sessionStorage.getItem("statcounter_pending");
                        if (!_101) {
                            var _102 = {}
                        } else {
                            try {
                                var _102 = JSON.parse(_101)
                            } catch (ignore) {
                                var _102 = {}
                            }
                        }
                        if (_102[_f7] === undefined) {
                            _102[_f7] = {}
                        }
                        var now = new Date().getTime();
                        _102[_f7][now] = _fe;
                        while (true) {
                            _101 = JSON.stringify(_102);
                            if (_101 == "{}") {
                                sessionStorage.removeItem("statcounter_pending");
                                break
                            }
                            var _104 = _101.split(/:.{20}/).length - 1;
                            if (_104 < 20) {
                                var _105 = true;
                                try {
                                    sessionStorage.setItem("statcounter_pending", _101)
                                } catch (e) {
                                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                                        throw e
                                    }
                                    _105 = false
                                }
                                if (_105) {
                                    break
                                }
                            }
                            var _106 = false;
                            var _107 = false;
                            var _108 = false;
                            for (var _109 in _102) {
                                for (var _10a in _102[_109]) {
                                    var _10b = /jg=(\d+)/.exec(_102[_109][_10a]);
                                    if (_10b !== null) {
                                        var _10c = parseInt(_10b[1])
                                    } else {
                                        var _10c = false
                                    }
                                    if (_106 === false || (_10c !== false && _10c < _106)) {
                                        if (_10c !== false) {
                                            _106 = _10c
                                        }
                                        _107 = _109;
                                        _108 = _10a
                                    }
                                }
                            }
                            if (_108 === false) {
                                break
                            }
                            delete _102[_107][_108];
                            if (JSON.stringify(_102[_107]) == "{}") {
                                delete _102[_107]
                            }
                        }
                        for (var ts in _102[_f7]) {
                            (function (_10e, _10f) {
                                var _110 = _102[_10f][_10e];

                                function post_hit_pending_cleanup() {
                                    if (_102[_10f] !== undefined) {
                                        delete _102[_10f][_10e];
                                        if (JSON.stringify(_102[_10f]) == "{}") {
                                            delete _102[_10f]
                                        }
                                    }
                                    var _111 = JSON.stringify(_102);
                                    if (_111 == "{}") {
                                        sessionStorage.removeItem("statcounter_pending")
                                    } else {
                                        sessionStorage.setItem("statcounter_pending", _111)
                                    }
                                }
                                var _112 = _fc + _110;
                                if (_10e != now) {
                                    _112 += "&pg=" + Math.round((now - _10e) / 1000)
                                } else {
                                    _100 = true;
                                    _112 += get_performance_url_params(_f7)
                                }
                                if (_f9) {
                                    config_ping(_f7, _112, function (_113) {
                                        post_hit_pending_cleanup()
                                    })
                                } else {
                                    if (!navigator.sendBeacon) {
                                        var _114 = new Image();
                                        _114.onload = function () {
                                            post_hit_pending_cleanup()
                                        };
                                        _114.src = _112 + "&sc_random=" + Math.random()
                                    } else {
                                        navigator.sendBeacon(_112, "");
                                        post_hit_pending_cleanup()
                                    }
                                }
                            })(parseInt(ts, 10), _f7)
                        }
                    } catch (e) { }
                }
                if (!_ff || !_100) {
                    var _115 = _fc + get_performance_url_params(_f7) + _fe;
                    if (_f9) {
                        config_ping(_f7, _115)
                    } else {
                        if (!navigator.sendBeacon) {
                            var _116 = new Image();
                            _116.src = _115 + "&sc_random=" + Math.random()
                        } else {
                            navigator.sendBeacon(_115, "")
                        }
                    }
                }
            } else {
                var _115 = _fc + get_performance_url_params(_f7) + _fe;
                var _117 = "sc_counter_" + _f7;
                if (_5 != 1) {
                    _117 += "_" + _5
                }
                if (_f8 == "text") {
                    if (_f9) {
                        document.writeln("<span class=\"statcounter\" id=\"" + _117 + "\"></span>");
                        config_ping(_f7, _115, function (_118) {
                            document.getElementById(_117).innerHTML = _118["text"]
                        })
                    } else {
                        document.writeln("<scr" + "ipt" + " src=\"" + _115.replace(/&/g, "&amp;") + "\"></scr" + "ipt>")
                    }
                } else {
                    if (window.sc_counter_width && window.sc_counter_height) {
                        var _119 = " width=\"" + sc_counter_width + "\" height=\"" + sc_counter_height + "\""
                    }
                    var _11a = "StatCounter - Free Web Tracker and Counter";
                    if (window.sc_remove_alt) {
                        _11a = ""
                    }
                    if (window.sc_remove_link) {
                        var _11b = "";
                        var _11c = ""
                    } else {
                        var _11b = "<a id=\"" + _117 + "\" class=\"statcounter\" href=\"https://www." + _c + "/\" target=\"_blank\">";
                        var _11c = "</a>"
                    }
                    if (_f9) {
                        document.writeln("<span class=\"statcounter\">" + _11b + "Statcounter" + _11c + "</span>");
                        config_ping(_f7, _115, function (_11d) {
                            var _11e = "<img src=\"" + _11d["counter_image"] + "\" alt=\"" + _11a + "\" border=\"0\"" + _119 + ">";
                            document.getElementById(_117).innerHTML = _11e
                        })
                    } else {
                        _115 += "&sc_random=" + Math.random();
                        document.writeln("<span class=\"statcounter\">" + _11b + "<img src=\"" + _115.replace(/&/g, "&amp;") + "\" alt=\"" + _11a + "\" border=\"0\"" + _119 + ">" + _11c + "</span>")
                    }
                }
            }
            _16++
        }

        function sc_process_anchor(_11f) {
            var _120 = function () {
                for (var _121 in _4._security_codes) {
                    sc_clickstat_call(parseInt(_121, 10), this)
                }
                return true
            };
            if (_11f.addEventListener) {
                _11f.addEventListener("mousedown", _120)
            } else {
                if (_11f.attachEvent) {
                    _11f.attachEvent("onmousedown", _120)
                }
            }
        }

        function sc_none() {
            return
        }

        function sc_delay() {
            if (window.sc_click_stat) {
                var d = window.sc_click_stat
            } else {
                var d = 0
            }
            var n = new Date();
            var t = n.getTime() + d;
            while (n.getTime() < t) {
                var n = new Date()
            }
        }

        function sc_clickstat_call(_125, _126) {
            var _127 = "7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";
            if (typeof (window.sc_download_type) == "string") {
                _127 = window.sc_download_type
            }
            var _128 = "https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";
            var _129 = "ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";
            var dl = new RegExp("\\.(" + _127 + ")$", "i");
            var lnk = new RegExp("^(" + _128 + "):", "i");
            var _12c = new RegExp("^(" + _129 + ")$", "i");
            var _12d = location.host.replace(/^www\./i, "");
            var _12e = _12d.split(".");
            var _12f = _12e.pop();
            var _130 = _12e.pop();
            if (_12c.test(_130)) {
                _12f = _130 + "." + _12f;
                _130 = _12e.pop()
            }
            _12f = _130 + "." + _12f;
            var _131 = "^https?://(.*)(" + _12f + "|webcache.googleusercontent.com)";
            var _132 = new RegExp(_131, "i");
            if (_126) {
                var _133 = 0;
                if (lnk.test(_126)) {
                    if ((_132.test(_126))) {
                        if (dl.test(_126)) {
                            _133 = 1
                        } else {
                            if (window.sc_exit_link_detect && new RegExp(sc_exit_link_detect, "i").test(_126)) {
                                _133 = 2
                            } else {
                                if (_a == 2) {
                                    _133 = 2
                                }
                            }
                        }
                    } else {
                        _133 = 2
                    }
                }
                if (_133 != 0) {
                    var _134 = escape(_126);
                    if (_134.length > 0) {
                        if (!apply_new_methodology_fixes(_125)) {
                            if (_133 == 2 && _e != "disabled") {
                                try {
                                    sessionStorage.setItem("statcounter_exit_domain", _134.split("/")[2].replace(/^www\./, ""))
                                } catch (ignore) { }
                            }
                        }
                        var _135 = _b + "click.gif?sc_project=" + _125 + "&security=" + _4._security_codes[_125] + "&c=" + _134 + "&m=" + _133 + "&u=" + get_page_url() + "&t=" + get_page_title() + "&sess=" + _4.version() + "&rand=" + Math.random();
                        var _136 = Math.round((new Date()).getTime() / 1000);
                        var _137 = _4.update_cookie(_125, _136);
                        if (_137["u1"] !== undefined) {
                            _135 += "&u1=" + _137["u1"]
                        }
                        _135 += "&jg=" + _137["jg"];
                        _135 += "&rr=" + _137["rr"];
                        var _138 = new Image();
                        _138.onload = sc_none;
                        _138.src = _135;
                        if (_4._add_recording_event) {
                            _4._add_recording_event(_133 == 1 ? "download" : _133 == 2 ? "exit" : "unknown", {
                                "link": unescape(_134)
                            })
                        }
                        sc_delay()
                    }
                }
            }
        }
        var _139 = "googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";
        var _13a = "^aswift_[0-9]+$";
        var _13b;
        var _13c;
        var _13d;
        var _13e;

        function sc_adsense_click(_13f, _140) {
            if (_140.src.match(_139)) {
                var _141 = escape(_140.src)
            } else {
                var _141 = escape("Google Adsense " + _140.width + "x" + _140.height)
            }
            var _142 = _b + "click.gif?sc_project=" + _13f + "&security=" + _4._security_codes[_13f] + "&c=" + _141 + "&m=2&u=" + get_page_url() + "&t=" + get_page_title() + "&sess=" + _4.version() + "&rand=" + Math.random();
            var _143 = Math.round((new Date()).getTime() / 1000);
            var _144 = _4.update_cookie(_13f, _143);
            if (_144["u1"] !== undefined) {
                _142 += "&u1=" + _144["u1"]
            }
            _142 += "&jg=" + _144["jg"];
            _142 += "&rr=" + _144["rr"];
            if (!navigator.sendBeacon) {
                var i = new Image();
                i.src = _142;
                sc_delay()
            } else {
                navigator.sendBeacon(_142, "")
            }
            if (_4._add_recording_event) {
                _4._add_recording_event("adsense", {
                    "link": unescape(_141)
                })
            }
        }

        function sc_adsense_init() {
            var _146 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            var _147 = /Firefox/.test(navigator.userAgent) && /Android/.test(navigator.userAgent);
            if (_7 && (_146 || _147)) {
                var el = document.getElementsByTagName("iframe");
                for (var i = 0; i < el.length; i++) {
                    if (el[i].id.substring(0, 6) == "aswift") {
                        el[i].addEventListener("mouseenter", function (e) {
                            for (var _14b in _4._security_codes) {
                                sc_adsense_click(parseInt(_14b, 10), this)
                            }
                        })
                    }
                }
            } else {
                if (document.all && typeof window.opera == "undefined") {
                    var el = document.getElementsByTagName("iframe");
                    for (var i = 0; i < el.length; i++) {
                        if (el[i].src.match(_139) || el[i].id.match(_13a)) {
                            el[i].onfocus = function () {
                                for (var _14c in _4._security_codes) {
                                    sc_adsense_click(parseInt(_14c, 10), this)
                                }
                            }
                        }
                    }
                } else {
                    if (typeof window.addEventListener !== "undefined") {
                        var _14d = "unload";
                        if (_7) {
                            _14d = "beforeunload";
                            focus();
                            window.addEventListener("blur", function () {
                                var _14e = document.activeElement;
                                _13d = _14e;
                                _13e = new Date().getTime()
                            })
                        }
                        window.addEventListener(_14d, sc_exitpage, false);
                        window.addEventListener("mousemove", sc_getmouse, true)
                    }
                }
            }
        }

        function isLegacyIE() {
            var ua = navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            if (msie > 0) {
                return 10 >= parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10)
            }
            var _151 = ua.indexOf("Trident/");
            if (_151 > 0) {
                var rv = ua.indexOf("rv:");
                return 11 >= parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10)
            }
            return false
        }

        function sc_getmouse(e) {
            if (typeof e.pageX == "number") {
                _13b = e.pageX;
                _13c = e.pageY
            } else {
                if (typeof e.clientX == "number") {
                    _13b = e.clientX;
                    _13c = e.clientY;
                    if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                        _13b += document.body.scrollLeft;
                        _13c += document.body.scrollTop
                    } else {
                        if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                            _13b += document.documentElement.scrollLeft;
                            _13c += document.documentElement.scrollTop
                        }
                    }
                }
            }
        }

        function sc_findy(obj) {
            var y = 0;
            while (obj) {
                y += obj.offsetTop;
                obj = obj.offsetParent
            }
            return (y)
        }

        function sc_findx(obj) {
            var x = 0;
            while (obj) {
                x += obj.offsetLeft;
                obj = obj.offsetParent
            }
            return (x)
        }

        function sc_exitpage(e) {
            var ad = document.getElementsByTagName("iframe");
            if (typeof _13b != "undefined") {
                for (var i = 0; i < ad.length; i++) {
                    var _15b = sc_findx(ad[i]);
                    var _15c = sc_findy(ad[i]);
                    var adW = parseInt(_15b, 10) + parseInt(ad[i].width, 10) + 15;
                    var adH = parseInt(_15c, 10) + parseInt(ad[i].height, 10) + 10;
                    var _15f = (_13b > (_15b - 10) && _13b < adW);
                    var _160 = (_13c > (_15c - 10) && _13c < adH);
                    if (_160 && _15f) {
                        if (ad[i].src.match(_139) || ad[i].id.match(_13a)) {
                            for (var _161 in _4._security_codes) {
                                sc_adsense_click(parseInt(_161, 10), ad[i])
                            }
                        }
                    }
                }
            }
            if (_7) {
                if (typeof _13d != "undefined" && _13d.id.substring(0, 6) == "aswift") {
                    var _162 = new Date().getTime() - _13e;
                    if (_162 < 300) {
                        for (var _161 in _4._security_codes) {
                            sc_adsense_click(parseInt(_161, 10), _13d)
                        }
                    }
                }
            }
        }

        function initiate_click_detection() {
            var _163 = document.getElementsByTagName("a");
            var _164 = document.getElementsByTagName("area");
            for (var i = 0; i < _163.length; i++) {
                var _166 = _163[i];
                sc_process_anchor(_166)
            }
            for (var i = 0; i < _164.length; i++) {
                var _166 = _164[i];
                if (typeof _166.hasAttribute === "function" && _166.hasAttribute("href")) {
                    sc_process_anchor(_166)
                }
            }
            if (typeof window.addEventListener != "undefined") {
                window.addEventListener("load", sc_adsense_init, false)
            } else {
                if (typeof document.addEventListener != "undefined") {
                    document.addEventListener("load", sc_adsense_init, false)
                } else {
                    if (typeof window.attachEvent != "undefined") {
                        window.attachEvent("onload", sc_adsense_init)
                    } else {
                        if (typeof window.onload == "function") {
                            var _167 = onload;
                            window.onload = function () {
                                _167();
                                sc_adsense_init()
                            }
                        } else {
                            window.onload = sc_adsense_init
                        }
                    }
                }
            }
        }
        _4.update_cookie = function (_168, _169, _16a) {
            if (_169 === undefined) {
                _169 = Math.round((new Date()).getTime() / 1000)
            }
            var _16b = _sessionStorageGetConfig("sc_project_time_difference_" + _168);
            var ret = {};
            var _16d = "1.1.1.1.1.1.1.1.1";
            var _16e = "is_visitor_unique";
            try {
                var _16f = getLocal(_16e, _168)
            } catch (e) {
                var _16f = false;
                _d = ".ex"
            }
            var _170 = [];
            var _171 = [];
            if (_16f && _16f.substring(0, 2) == "rx") {
                removeLocal(_16e, _83);
                var _172 = _16f.substring(2);
                _170 = _172.split("-");
                var _173 = false;
                var _174 = false;
                for (var i = 0; i < _170.length; i++) {
                    var _176 = _170[i].split(".");
                    if (parseInt(_176[0], 10) == _168) {
                        _173 = true;
                        var _177 = parseInt(_176[1], 10);
                        _4._returning_values[_168] = [];
                        var _178 = 2;
                        if (_176[2].length == 32) {
                            _d = "." + _176[2];
                            _178 = 3
                        } else {
                            _d = _174
                        }
                        for (var ir = 0; ir < _14.length; ir++) {
                            var rval = parseInt(_176[ir + _178], 10);
                            if (isNaN(rval)) {
                                rval = 1
                            }
                            _4._returning_values[_168].push(rval)
                        }
                        ret["jg"] = _169 - _177;
                        for (var ir = 0; ir < _14.length; ir++) {
                            if (_16a) {
                                _4._returning_values[_168][ir]++
                            } else {
                                if (_169 > (_177 + 60 * _14[ir])) {
                                    if (_14[ir] * 60 === _16b) {
                                        ret["session_incremented"] = true
                                    }
                                    _4._returning_values[_168][ir]++
                                }
                            }
                        }
                        ret["rr"] = _4._returning_values[_168].join(".");
                        _171.push("" + _168 + "." + _169 + _d + "." + _4._returning_values[_168].join("."))
                    } else {
                        _171.push(_170[i]);
                        if (i == 0 && _176[2].length == 32 && _d == "") {
                            _d = "." + _176[2]
                        }
                    }
                    if (i == 0) {
                        _174 = _d
                    }
                }
                if (!_173) {
                    if (_171.length == 0 && _d == "") {
                        _d = "." + generate_uuid()
                    }
                    _171.push("" + _168 + "." + _169 + _d + "." + _16d);
                    _4._returning_values[_168] = _16d.split(".");
                    ret["jg"] = "new";
                    ret["rr"] = _16d
                }
                _171.sort(function (a, b) {
                    return parseInt(b.split(".")[1], 10) - parseInt(a.split(".")[1], 10)
                });
                for (var iv = 1; iv < _171.length; iv++) {
                    _171[iv] = _171[iv].replace("." + _171[0].split(".")[2] + ".", ".")
                }
                var _17e = setLocal(_16e, _171, _83, "rx", 3, _168);
                if (!_17e) { }
            } else {
                if (_d != ".ex") {
                    _d = "." + generate_uuid();
                    _171 = ["" + _168 + "." + _169 + _d + "." + _16d];
                    var _17f = setLocal(_16e, _171, _83, "rx", 3, _168);
                    if (_17f) {
                        _4._returning_values[_168] = _16d.split(".");
                        ret["jg"] = "new";
                        ret["rr"] = _16d
                    } else {
                        _d = ".na"
                    }
                }
            }
            if (_d != "") {
                ret["u1"] = _d.substring(1)
            }
            return ret
        };
        _4.get_visitor_id = function () {
            if (_d.length > 1) {
                return _d.substring(1)
            }
            return "x-no-visitor"
        };
        _4.get_session_num = function (_180) {
            var _181 = _sessionStorageGetConfig("sc_project_time_difference_" + _180);
            if (_181 != false && _4._session_increment_calculated[_180] && _4._returning_values[_180].length == _14.length) {
                for (var i = 0; i < _14.length; i++) {
                    if (_14[i] * 60 == parseInt(_181)) {
                        return _4._returning_values[_180][i]
                    }
                }
            }
            if (_181 === null) {
                return "x-no-session-num-99" + Math.round(1000 * Math.random())
            } else {
                if (!_4._session_increment_calculated[_180]) {
                    return "x-no-session-num-98" + Math.round(1000 * Math.random())
                } else {
                    if (_4._returning_values[_180].length !== _14.length) {
                        return "x-no-session-num-97" + Math.round(1000 * Math.random())
                    } else {
                        if (_181 == false) {
                            return "x-no-session-num-96" + Math.round(1000 * Math.random())
                        }
                    }
                }
            }
            return "x-no-session-num-95" + _181
        };
        _4.version = function () {
            return "830817"
        };
        _4.get_tab_session = function () {
            var _183 = false;
            try {
                _183 = sessionStorage.getItem("statcounter_tab_session");
                if (!_183) {
                    _183 = generate_uuid(8);
                    try {
                        sessionStorage.setItem("statcounter_tab_session", _183)
                    } catch (e) {
                        _183 = false
                    }
                }
            } catch (e) {
                _183 = false
            }
            if (_183 === false) {
                session_tab_id = "x-no-session-storage-" + Math.round(100000 * Math.random())
            } else {
                return _183
            }
        };
        _4.record = function (_184, _185) {
            if (_185 === undefined) {
                _185 = "on"
            } else { }
            if (_184 === undefined || _184 === "on" || _184 === "dev") {
                if (_2 !== false) {
                    console.log("Turning on session recording for p" + _2);
                    _184 = _2
                } else {
                    return
                }
            } else {
                if (parseInt(_184, 10) + "" == _184) {
                    _184 = parseInt(_184, 10)
                } else {
                    return
                }
            }
            _sessionStorageSetConfig("record_" + _184, _185);
            _b3(_184)
        };
        _4._get_script_num = function () {
            return _5
        };
        if (_5 == 1) {
            if (_a > 0) {
                initiate_click_detection()
            }
            try {
                var _186 = document.getElementsByTagName("title");
                if (_186.length) {
                    var _187 = document.title;
                    var _188 = document.location.href.split("#")[0];
                    var _189 = new MutationObserver(function () {
                        var _18a = document.location.href.split("#")[0];
                        if (document.title != _187 && _18a != _188) {
                            for (var _18b in _4._security_codes) {
                                var _18c = parseInt(_18b, 10);
                                if (_de[_18c] === undefined || (new Date().getTime() - _de[_18c] > 1000)) {
                                    setTimeout(function (_18d) {
                                        if (_de[_18d] === undefined || (new Date().getTime() - _de[_18d] > 1000)) {
                                            _4.record_pageview(_18d)
                                        }
                                    }, 200, _18c)
                                }
                            }
                            if (_4._add_recording_event) {
                                _4._add_recording_event("history-pageload", {
                                    "referrer": _188,
                                    "href": _18a
                                })
                            }
                            _187 = document.title;
                            _188 = _18a
                        }
                    });
                    _189.observe(_186[0], {
                        childList: true,
                        attributes: false,
                        subtree: false
                    })
                }
            } catch (ei) { }
        }
        return _4
    } catch (e) {
        if (_2 != false && is_admin_project(_2)) {
            if (typeof encodeURIComponent != "function") {
                encodeURIComponent = function (s) {
                    return escape(s)
                }
            }
            var _18f = "";
            for (var prop in e) {
                _18f += "property: " + prop + " value: [" + e[prop] + "]\n"
            }
            _18f += "toString(): " + " value: [" + e.toString() + "]\n";
            var _191 = new Image();
            _191.src = "https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + _2 + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(_18f)
        }
    }
}(_statcounter);
_statcounter.record_pageview();