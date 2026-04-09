// Last updated: 09/04/2026, 22:44:29
1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6var strStr = function(haystack, needle) {
7    if (needle === "") return 0;
8
9    return haystack.indexOf(needle);
10};