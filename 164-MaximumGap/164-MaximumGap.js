// Last updated: 25/03/2026, 21:42:45
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums === null || nums.length < 2) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let maxGap = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxGap = Math.max(maxGap, nums[i + 1] - nums[i]);
    }

    return maxGap;
};