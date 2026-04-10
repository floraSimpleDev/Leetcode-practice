// Last updated: 10/04/2026, 17:39:06
1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var intersect = function(nums1, nums2) {
7    if (nums2.length < nums1.length) {
8        return intersect(nums2, nums1);
9    }
10
11    let map = new Map();
12    let result = [];
13
14    for (let value of nums1) {
15        map.set(value, (map.get(value) || 0) + 1);
16    }
17
18    for (let value of nums2) {
19        if (map.get(value) > 0) {
20            result.push(value);
21            map.set(value, map.get(value) - 1);
22        }
23    }
24
25    return result;
26};