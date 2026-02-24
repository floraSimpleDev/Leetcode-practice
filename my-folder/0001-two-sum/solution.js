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
