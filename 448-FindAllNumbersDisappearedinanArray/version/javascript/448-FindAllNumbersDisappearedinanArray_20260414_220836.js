// Last updated: 14/04/2026, 22:08:36
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var findDisappearedNumbers = function(nums) {
6    let numsSet = new Set(nums);
7    let result = [];
8    
9    for (let i = 1; i <= nums.length; i++) {
10        if (!numsSet.has(i)) {
11            result.push(i);
12        }
13    }
14
15    return result;
16};