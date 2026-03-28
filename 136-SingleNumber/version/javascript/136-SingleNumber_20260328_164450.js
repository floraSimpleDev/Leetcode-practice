// Last updated: 28/03/2026, 16:44:50
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNumber = function(nums) {
6    const deduplicated = new Set();
7    let single = 0, totle = 0;
8
9    for (const value of nums) {
10        if (!deduplicated.has(value)) {
11            deduplicated.add(value);
12            single += value;
13        }
14
15        totle += value;
16    }
17
18    return 2 * single - totle;
19};