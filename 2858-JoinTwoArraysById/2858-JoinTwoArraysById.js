// Last updated: 25/03/2026, 21:41:19
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const storage = new Map();

    for (const item of arr1) storage.set(item.id, item);

    for (const item of arr2) {
        if (!storage.has(item.id)) storage.set(item.id, item);
        else {
            const last = storage.get(item.id);

            for (const key of Object.keys(item)) last[key] = item[key];
        }
    }

    const result = new Array();
    for (let key of storage.keys()) result.push(storage.get(key));
    
    return result.sort((a, b) => a.id - b.id);
};