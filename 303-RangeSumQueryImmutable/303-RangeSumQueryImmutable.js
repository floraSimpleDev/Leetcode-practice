// Last updated: 15/08/2026, 16:41:49
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let numsLength = nums.length;
    this.prefixSum = new Array(numsLength).fill(0);

    for (let i = 0; i < numsLength; i++) {
        this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */