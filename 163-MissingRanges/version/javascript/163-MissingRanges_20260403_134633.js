// Last updated: 03/04/2026, 13:46:33
1/**
2 * @param {number[]} nums
3 * @param {number} lower
4 * @param {number} upper
5 * @return {number[][]}
6 */
7var findMissingRanges = function(nums, lower, upper) {
8    let n = nums.length;
9    let missingRanges = [];
10
11    if (n === 0) {
12        missingRanges.push([lower, upper]);
13        return missingRanges;
14    }
15    
16    if (lower < nums[0]) {
17        missingRanges.push([lower, nums[0] - 1]);
18    }
19
20    for (let i = 0; i < n - 1; i++) {
21        if (nums[i + 1] - nums[i] <= 1) {
22            continue;
23        }
24
25        missingRanges.push([nums[i] + 1, nums[i + 1] - 1]);
26    }
27
28    if (upper > nums[n - 1]) {
29        missingRanges.push([nums[n - 1] + 1, upper]);
30    }
31
32    return missingRanges;
33};