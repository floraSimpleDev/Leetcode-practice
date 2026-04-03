// Last updated: 03/04/2026, 13:43:46
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
13    }
14    
15    if (lower < nums[0]) {
16        missingRanges.push([lower, nums[0] - 1]);
17    }
18
19    for (let i = 0; i < n - 1; i++) {
20        if (nums[i + 1] - nums[i] <= 1) {
21            continue;
22        }
23
24        missingRanges.push([nums[i] + 1, nums[i + 1] - 1]);
25    }
26
27    if (upper > nums[n - 1]) {
28        missingRanges.push([nums[n - 1] + 1, upper]);
29    }
30
31    return missingRanges;
32};