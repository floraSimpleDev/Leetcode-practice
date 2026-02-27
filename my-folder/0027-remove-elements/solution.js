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
