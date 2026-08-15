// Last updated: 15/08/2026, 16:41:53
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numbers = new Set(nums);

    for (let i = 0; i < nums.length + 1; i++) {
        if (!numbers.has(i)) {
            return i;
        }
    }
};