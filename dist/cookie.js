;(function defineCookie(global, factory) {
    var cookie = factory(global);
    if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
        global.cookie = cookie;
        module.exports = cookie
    } else {
        global.cookie = cookie
    }
})(window, function (global, undefined) {
    'use strict';
    var trim = String.prototype.trim;
    String.prototype.trim = trim ? trim : function () {
        return this.replace(/(^\s*)|(\s*$)/g, '')
    };
    return function (key, value, options) {
        var i, date, currentCookie, arrCookie = [], oldCookie = null;
        if (!key || document.cookie === undefined) {
            return
        }
        if (typeof value != 'undefined') {
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1
            }
            arrCookie.push(key + '=' + encodeURIComponent(value));
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
                } else {
                    date = options.expires
                }
                arrCookie.push('expires=' + date.toUTCString())
            }
            options.path && arrCookie.push('path=' + options.path);
            options.domain && arrCookie.push('domain=' + options.domain);
            options.secure && arrCookie.push('secure');
            document.cookie = arrCookie.join('; ')
        } else {
            if (document.cookie != '') {
                oldCookie = document.cookie.split(';');
                for (i = 0; i < oldCookie.length; i++) {
                    currentCookie = oldCookie[i].trim();
                    if (currentCookie.substring(0, key.length + 1) === (key + '=')) {
                        return unescape(decodeURIComponent(currentCookie.substring(key.length + 1)));
                        break
                    }
                }
                return null
            }
        }
    }
});