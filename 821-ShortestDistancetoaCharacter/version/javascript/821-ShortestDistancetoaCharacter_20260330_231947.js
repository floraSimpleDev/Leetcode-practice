// Last updated: 30/03/2026, 23:19:47
1/**
2 * @param {string} s
3 * @param {character} c
4 * @return {number[]}
5 */
6var shortestToChar = function(s, c) {
7    let prev = s.indexOf(c);
8    let next = prev;
9    const distance = [];
10
11    for (let i = 0; i < s.length; i++) {
12        if (s[i] === c) {
13            prev = i;
14            next = s.indexOf(c, prev + 1);
15        }
16
17        distance.push(Math.min(Math.abs(prev - i), Math.abs(next - i)));
18    }
19
20    return distance;
21};