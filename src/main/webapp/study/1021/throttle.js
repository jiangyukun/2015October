// my
delayProxy = function (callback, internal) {
    var flag = true, lock = false;
    if (!internal) {
        internal = 1000;
    }
    if (internal == 0) {
        return function (event, source) {
            callback(event, source);
        }
    }
    return function (event, source) {
        if (flag) {
            callback(event, source);
            flag = false;
            return;
        }
        if (!lock) {
            lock = true;
            setTimeout(function () {
                flag = true;
                callback(event, source);
                lock = false;
            }, internal);
        }
    };
};

// underscore
_.throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : _.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = _.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};


// kinetic
_throttle = function (func, wait, opts) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    var options = opts || {};
    var later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        context = args = null;
    };
    return function () {
        var now = new Date().getTime();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};
