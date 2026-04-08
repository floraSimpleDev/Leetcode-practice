// Last updated: 08/04/2026, 20:48:57
1/**
2 * @param {string[]} wordsDict
3 * @param {string} word1
4 * @param {string} word2
5 * @return {number}
6 */
7var shortestDistance = function(wordsDict, word1, word2) {
8    let dictLength = wordsDict.length;
9    let minDistance = dictLength;
10    let index1 = -1, index2 = -1;
11
12    for (let i = 0; i < dictLength; i++) {
13        if (word1 === wordsDict[i]) {
14            index1 = i;
15        }
16        if (word2 === wordsDict[i]) {
17            index2 = i;
18        }
19        if (index1 !== -1 && index2 !== -1) {
20            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
21        }
22    }
23
24    return minDistance;
25};