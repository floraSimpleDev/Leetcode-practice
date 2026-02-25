/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 0; i < strs[0].length; i++) {
        const letter = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (letter !== strs[j][i]) {
                prefix = prefix.slice(0, i);
            }
        }
    }

    return prefix;
};
