// Last updated: 10/04/2026, 16:39:24
1/**
2 * @param {number} size
3 */
4var MovingAverage = function(size) {
5    this.size = size;
6    this.queue = [];
7    this.sum = 0
8};
9
10/** 
11 * @param {number} val
12 * @return {number}
13 */
14MovingAverage.prototype.next = function(val) {
15    this.queue.push(val);
16    this.sum += val;
17
18    if (this.queue.length > this.size) {
19        this.sum -= this.queue.shift();
20    }
21
22    return this.sum / this.queue.length;
23};
24
25/** 
26 * Your MovingAverage object will be instantiated and called as such:
27 * var obj = new MovingAverage(size)
28 * var param_1 = obj.next(val)
29 */