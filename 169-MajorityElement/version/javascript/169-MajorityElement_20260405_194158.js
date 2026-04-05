// Last updated: 05/04/2026, 19:41:58
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function(nums) {
6    nums.sort((a, b) => a - b);
7    return nums[Math.floor(nums.length / 2)];
8};