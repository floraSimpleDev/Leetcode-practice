// Last updated: 26/03/2026, 21:59:59
1/**
2 * @param {Function} fn
3 * @return {Function}
4 */
5var once = function(fn) {
6    let notFirstFn = false;
7
8    return function(...args){
9        if (notFirstFn) {
10            return undefined;
11        } else {
12            notFirstFn = true;
13            return fn(...args);
14        }
15    }
16};
17
18/**
19 * let fn = (a,b,c) => (a + b + c)
20 * let onceFn = once(fn)
21 *
22 * onceFn(1,2,3); // 6
23 * onceFn(2,3,6); // returns undefined without calling fn
24 */
25