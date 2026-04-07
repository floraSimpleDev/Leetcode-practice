// Last updated: 07/04/2026, 16:30:28
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function(nums) {
6    let counts = {};
7    let result = 0;
8
9    for (let value of nums) {
10        counts[value] = (counts[value] || 0) + 1;
11    }
12
13    for (let value in counts) {
14        if (counts[value] > nums.length / 2) {
15            result = Number(value);
16        }
17    }
18
19    return result;
20};