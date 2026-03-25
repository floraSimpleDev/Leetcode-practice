// Last updated: 25/03/2026, 21:41:42
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
            clearInterval(timer);
            timer = null;
        } else {
            fn(...event);
            event = null;
        }
    }

    return function(...args) {
        if (timer) {
            event = args;
        } else {
            fn(...args);
            timer = setInterval(timeoutFn, t);
        }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */