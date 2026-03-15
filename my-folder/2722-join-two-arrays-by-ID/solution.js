/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const combination = arr1.concat(arr2);
    const result = {};

    combination.forEach(value => {
        const id = value.id;

        if (!result[id]) {
            result[id] = { ...value };
        } else {
            result[id] = { ...result[id], ...value };
        }
    });

    return Object.values(result);
};
