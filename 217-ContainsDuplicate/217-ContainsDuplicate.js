// Last updated: 08/04/2026, 20:21:36
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numbers = new Set();

    for (let number of nums) {
        if (numbers.has(number)) return true;
        numbers.add(number);
    }
    return false;
};