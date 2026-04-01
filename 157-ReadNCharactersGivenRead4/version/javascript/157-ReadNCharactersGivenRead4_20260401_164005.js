// Last updated: 01/04/2026, 16:40:05
1/**
2 * Definition for read4()
3 * 
4 * @param {character[]} buf4 Destination buffer
5 * @return {number} The number of actual characters read
6 * read4 = function(buf4) {
7 *     ...
8 * };
9 */
10
11/**
12 * @param {function} read4()
13 * @return {function}
14 */
15var solution = function(read4) {
16    /**
17     * @param {character[]} buf Destination buffer
18     * @param {number} n Number of characters to read
19     * @return {number} The number of actual characters read
20     */
21    return function(buf, n) {
22        let buff4 = new Array(4);
23        let total = 0;
24
25        while (total < n) {
26            let number = read4(buff4);
27
28            if (number === 0) break;
29
30            for (let i = 0; i < number; i++) {
31                if (total === n) {
32                    break;
33                }
34                buf[total++] = buff4[i];
35            }
36        }
37
38        return total;
39    };
40};