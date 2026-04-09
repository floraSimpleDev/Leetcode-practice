// Last updated: 09/04/2026, 18:34:08
1/**
2 * @param {number[]} nums
3 * @return {void} Do not return anything, modify nums in-place instead.
4 */
5var moveZeroes = function(nums) {
6    let nonZeroIndex = 0;
7    let numsLength = nums.length;
8
9    for (let i = 0; i < numsLength; i++) {
10        if (nums[i] !== 0) {
11            nums[nonZeroIndex++] = nums[i];
12        }
13    }
14
15    for (let j = nonZeroIndex; j < numsLength; j++) {
16        nums[j] = 0;
17    }
18};