/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1, pivot;
    
    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2);

        if (nums[pivot] === target) return pivot;

        if (nums[pivot] < target) left = pivot + 1;

        else right = pivot - 1;
    }

    return left;
};
