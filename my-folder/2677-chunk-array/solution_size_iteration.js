/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        let chunk = [];

        for (let j = 0; j < size; j++) {
            if (i + j === arr.length) {
                break;
            }
            chunk[j] = arr[j + i];
        }

        result = [...result, [...chunk]];
    }

    return result;
};
