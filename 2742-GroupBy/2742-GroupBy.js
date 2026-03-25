// Last updated: 25/03/2026, 21:42:07
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, value) => {
        const key = fn(value);
        (acc[key] = acc[key] || []).push(value);

        return acc;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */