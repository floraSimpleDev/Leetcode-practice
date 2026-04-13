// Last updated: 13/04/2026, 23:43:39
1/**
2 * @param {string[]} words
3 * @return {boolean}
4 */
5var validWordSquare = function(words) {
6    for (let word = 0; word < words.length; ++word) {
7        for (let letter = 0; letter < words[word].length; ++letter) {
8            if (letter >= words.length || 
9                word >= words[letter].length || 
10                words[word][letter] !== words[letter][word]) {
11                    return false;
12                }
13        }
14    }
15
16    return true;
17};