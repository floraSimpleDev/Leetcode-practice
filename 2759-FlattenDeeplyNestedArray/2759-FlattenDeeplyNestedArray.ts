// Last updated: 25/03/2026, 21:41:49
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    let isNested = true;
    let depth = 0;
    let queue;

    while (isNested && depth < n) {
        isNested = false;
        queue = [];

        for (const value of arr) {
            if (Array.isArray(value)) {
                queue.push(...value);
                isNested = true;
            }
            else {
                queue.push(value);
            }
        }
        depth++;
        arr = [...queue];
    }

    return arr;
};