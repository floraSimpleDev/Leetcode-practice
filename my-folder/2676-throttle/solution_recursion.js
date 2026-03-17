/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let timer = null;
    let event = null;

    const timeoutFn = () => {
        if (!event) {
            timer = null;
        } else {
            fn(...event);
            event = null;
            timer = setTimeout(timeoutFn, t);
        }
    }

    return function(...args) {
        if (timer) {
            event = args;
        } else {
            fn(...args);
            timer = setTimeout(timeoutFn, t);
        }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
