// Last updated: 25/03/2026, 21:42:39
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    if (!s) return true;

    const stringSet = new Set();
    for (const letter of s) {
        if (stringSet.has(letter)) stringSet.delete(letter);
        else stringSet.add(letter);
    }

    return stringSet.size <= 1;
};