// Last updated: 28/03/2026, 16:49:55
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNumber = function(nums) {
6    let bit = 0;
7
8    for (let value of nums) {
9        bit ^= value;
10    }
11
12    return bit;
13};