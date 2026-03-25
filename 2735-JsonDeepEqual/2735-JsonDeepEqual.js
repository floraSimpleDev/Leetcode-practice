// Last updated: 25/03/2026, 21:42:08
/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */

function util(key, value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
        return Object.fromEntries(Object.entries(value).sort());
    } else {
        return value;
    }
}

var areDeeplyEqual = function(o1, o2) {
    const stringified01 = JSON.stringify(o1, util);
    const stringified02 = JSON.stringify(o2, util);

    return stringified01 === stringified02;
};