// Last updated: 25/03/2026, 21:41:53
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];

    const flatArray = (array, depth) => {
        for (const value of array) {
            if (Array.isArray(value) && depth > 0) {
                flatArray(value, depth - 1);
            }
            else {
                result.push(value);
            }
        }
        return result;
    }

    return flatArray(arr, n);
};