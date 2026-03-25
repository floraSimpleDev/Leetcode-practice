// Last updated: 25/03/2026, 21:41:14
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return JSON.stringify(obj).length <= 2;
};