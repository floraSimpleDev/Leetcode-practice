// Last updated: 16/04/2026, 13:48:06
1/**
2 * @param {number[]} g
3 * @param {number[]} s
4 * @return {number}
5 */
6var findContentChildren = function(g, s) {
7    g.sort((a, b) => a - b);
8    s.sort((a, b) => a - b);
9
10    let i = 0, j = 0, count = 0;
11
12    while (i < g.length && j < s.length) {
13        if (g[i] <= s[j]) {
14            i++, j++, count++;
15        }
16        else {
17            j++;
18        }
19    }
20
21    return count;
22};