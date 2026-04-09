// Last updated: 09/04/2026, 22:08:37
1/**
2 * @param {number[]} nums
3 */
4var NumArray = function(nums) {
5    let numsLength = nums.length;
6    this.prefixSum = new Array(numsLength).fill(0);
7
8    for (let i = 0; i < numsLength; i++) {
9        this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
10    }
11};
12
13/** 
14 * @param {number} left 
15 * @param {number} right
16 * @return {number}
17 */
18NumArray.prototype.sumRange = function(left, right) {
19    return this.prefixSum[right + 1] - this.prefixSum[left];
20};
21
22/** 
23 * Your NumArray object will be instantiated and called as such:
24 * var obj = new NumArray(nums)
25 * var param_1 = obj.sumRange(left,right)
26 */