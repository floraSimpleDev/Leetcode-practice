// Last updated: 13/04/2026, 10:16:43
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var thirdMax = function(nums) {
6    const numbers = [...new Set(nums)].sort((a, b) => b - a);
7
8    if (numbers.length >= 3) {
9        return numbers[2];
10    } else {
11        return numbers[0];
12    }
13};