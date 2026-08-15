// Last updated: 15/08/2026, 16:42:00
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let dictLength = wordsDict.length;
    let minDistance = dictLength;
    let index1 = -1, index2 = -1;

    for (let i = 0; i < dictLength; i++) {
        if (word1 === wordsDict[i]) {
            index1 = i;
        }
        if (word2 === wordsDict[i]) {
            index2 = i;
        }
        if (index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
    }

    return minDistance;
};