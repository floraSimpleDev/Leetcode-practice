// Last updated: 30/03/2026, 21:14:24
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let bit = 0;

    for (let value of nums) {
        bit ^= value;
    }

    return bit;
};