// Last updated: 15/08/2026, 16:41:50
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    let numsLength = nums.length;

    for (let i = 0; i < numsLength; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }

    for (let j = nonZeroIndex; j < numsLength; j++) {
        nums[j] = 0;
    }
};