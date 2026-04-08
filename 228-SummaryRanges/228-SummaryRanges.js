// Last updated: 08/04/2026, 20:21:33
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];

    let ranges = [], numsLength = nums.length;

    for (let i = 0; i < numsLength; i++) {
        let start = nums[i];

        while (i + 1 < numsLength && nums[i + 1] - nums[i] === 1) {
            i++;
        }

        if (start === nums[i]) {
            ranges.push(`${nums[i]}`);
        }
        else {
            ranges.push(`${start}->${nums[i]}`);
        }
    }

    return ranges;
};