// Last updated: 07/04/2026, 22:26:13
1
2var TwoSum = function() {
3    this.numbers = {};
4};
5
6/** 
7 * @param {number} number
8 * @return {void}
9 */
10TwoSum.prototype.add = function(number) {
11    this.numbers[number] = (this.numbers[number] || 0) + 1;
12};
13
14/** 
15 * @param {number} value
16 * @return {boolean}
17 */
18TwoSum.prototype.find = function(value) {
19    for (let number in this.numbers) {
20        number = Number(number);
21        let target = value - number;
22
23        if (target !== number) {
24            if (target in this.numbers) return true;
25        } else {
26            if (this.numbers[number] > 1) return true;
27        }
28    }
29
30    return false;
31};
32
33/** 
34 * Your TwoSum object will be instantiated and called as such:
35 * var obj = new TwoSum()
36 * obj.add(number)
37 * var param_2 = obj.find(value)
38 */