// Last updated: 15/08/2026, 16:41:31
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0, j = 0, count = 0;

    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            i++, j++, count++;
        }
        else {
            j++;
        }
    }

    return count;
};