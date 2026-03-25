// Last updated: 25/03/2026, 21:43:01
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;

    nums.forEach(value => {
        if (value != val) {
            nums[index++] = value;
        }
    });

    return index;
};