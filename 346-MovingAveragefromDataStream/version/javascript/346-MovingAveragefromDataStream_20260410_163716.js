// Last updated: 10/04/2026, 16:37:16
1/**
2 * @param {number} size
3 */
4var MovingAverage = function(size) {
5    this.size = size;
6    this.queue = [];
7};
8
9/** 
10 * @param {number} val
11 * @return {number}
12 */
13MovingAverage.prototype.next = function(val) {
14    this.queue.push(val);
15
16    if (this.queue.length > this.size) {
17        this.queue.shift();
18    }
19
20    let sum = 0;
21    for (let value of this.queue) {
22        sum += value;
23    }
24
25    return sum / this.queue.length;
26};
27
28/** 
29 * Your MovingAverage object will be instantiated and called as such:
30 * var obj = new MovingAverage(size)
31 * var param_1 = obj.next(val)
32 */