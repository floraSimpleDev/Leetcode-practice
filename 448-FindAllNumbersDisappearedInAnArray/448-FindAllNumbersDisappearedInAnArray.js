// Last updated: 15/08/2026, 16:41:34
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numsSet = new Set(nums);
    let result = [];
    
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) {
            result.push(i);
        }
    }

    return result;
};