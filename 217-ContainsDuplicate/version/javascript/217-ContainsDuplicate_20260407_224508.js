// Last updated: 07/04/2026, 22:45:08
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let numbers = new Set();
7
8    for (let number of nums) {
9        if (numbers.has(number)) return true;
10        numbers.add(number);
11    }
12    return false;
13};