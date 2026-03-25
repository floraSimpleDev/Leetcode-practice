// Last updated: 25/03/2026, 21:43:13
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const note = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (note.has(complement)) {
            return [i, note.get(complement)];
        }

        note.set(nums[i], i);
    }
};