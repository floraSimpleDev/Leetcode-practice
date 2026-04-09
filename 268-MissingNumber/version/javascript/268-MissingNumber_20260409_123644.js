// Last updated: 09/04/2026, 12:36:44
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingNumber = function(nums) {
6    const numbers = new Set(nums);
7
8    for (let i = 0; i < nums.length + 1; i++) {
9        if (!numbers.has(i)) {
10            return i;
11        }
12    }
13};