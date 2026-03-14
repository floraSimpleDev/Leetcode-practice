/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    return arr.reduce((result, value) => {
        const chunk = result[result.length - 1];

        if (!chunk || chunk.length === size) {
            result.push([value]);
        }
        else {
            chunk.push(value);
        }

        return result;
    }, []);
};
