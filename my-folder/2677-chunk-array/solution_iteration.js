/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let index = 0;
    let result = [];

    while (index < arr.length) {
        let count = 0;
        let chunk = [];

        while (count++ < size && index < arr.length) {
            chunk.push(arr[index++]);
        }

        result.push(chunk);
    }

    return result;
};
