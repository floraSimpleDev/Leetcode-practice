// Last updated: 25/03/2026, 21:41:43
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let firstFn = false;

    return function(...args){
        if (firstFn) {
            return undefined;
        } else {
            firstFn = true;
            return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
