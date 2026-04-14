// Last updated: 14/04/2026, 21:58:21
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var findDisappearedNumbers = function(nums) {
6    let numsMap = new Map();
7    let result = [];
8
9    for (let value of nums) {
10        numsMap.set(value, true);
11    }
12
13    for (let i = 1; i <= nums.length; i++) {
14        if (!numsMap.get(i)) {
15            result.push(i);
16        }
17    }
18
19    return result;
20};