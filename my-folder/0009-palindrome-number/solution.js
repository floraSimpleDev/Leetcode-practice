/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    let reverse = 0;
    let origin = x;

    while (origin) {
        reverse = origin % 10 + reverse * 10;
        origin = Math.floor(origin / 10);
    }

    return reverse === x;
};
