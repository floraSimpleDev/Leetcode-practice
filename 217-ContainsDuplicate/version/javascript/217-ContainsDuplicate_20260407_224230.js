// Last updated: 07/04/2026, 22:42:30
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let numbers = {};
7
8    for (let number of nums) {
9        if (numbers[number] >= 1) return true;
10        numbers[number] = 1;
11    }
12    return false;
13};