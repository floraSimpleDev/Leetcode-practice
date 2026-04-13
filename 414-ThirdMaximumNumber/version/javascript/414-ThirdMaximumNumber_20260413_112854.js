// Last updated: 13/04/2026, 11:28:54
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var thirdMax = function(nums) {
6    let firstMax = null, secondMax = null, thirdMax = null;
7
8    for (let value of nums) {
9        if (value === firstMax || value === secondMax || value === thirdMax) {
10            continue;
11        }
12
13        if (firstMax === null || firstMax <= value) {
14            [thirdMax, secondMax, firstMax] = [secondMax, firstMax, value];
15        }
16        else if (secondMax === null || secondMax <= value) {
17            [thirdMax, secondMax] = [secondMax, value];
18        }
19        else if (thirdMax === null || thirdMax <= value) {
20            thirdMax = value;
21        }
22    }
23
24    return thirdMax ?? firstMax;
25};