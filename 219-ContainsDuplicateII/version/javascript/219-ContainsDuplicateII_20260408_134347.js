// Last updated: 08/04/2026, 13:43:47
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {boolean}
5 */
6var containsNearbyDuplicate = function(nums, k) {
7    let map = new Map();
8
9    for (let i = 0; i < nums.length; i++) {
10        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
11            return true;
12        }
13
14        map.set(nums[i], i);
15    }
16
17    return false;
18};