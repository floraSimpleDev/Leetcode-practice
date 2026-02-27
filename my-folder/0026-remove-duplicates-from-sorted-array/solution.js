/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums?.length) return 0;
    
    const n = nums.length;
    if (n === 1) return 1;

    let index = 0;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[index++] = nums[i];
        }
    }

    nums[index++] = nums[n - 1];

    return index;
};
