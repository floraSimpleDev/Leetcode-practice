// Last updated: 15/08/2026, 16:41:40
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums2.length < nums1.length) {
        return intersect(nums2, nums1);
    }

    let map = new Map();
    let result = [];

    for (let value of nums1) {
        map.set(value, (map.get(value) || 0) + 1);
    }

    for (let value of nums2) {
        if (map.get(value) > 0) {
            result.push(value);
            map.set(value, map.get(value) - 1);
        }
    }

    return result;
};