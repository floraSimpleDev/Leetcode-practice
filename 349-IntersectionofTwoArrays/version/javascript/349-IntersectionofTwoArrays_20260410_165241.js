// Last updated: 10/04/2026, 16:52:41
1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var intersection = function(nums1, nums2) {
7    const set1 = new Set(nums1);
8    const set2 = new Set(nums2);
9
10    return [...set1.intersection(set2)];
11};