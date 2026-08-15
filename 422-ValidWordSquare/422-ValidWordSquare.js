// Last updated: 15/08/2026, 16:41:35
/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    for (let word = 0; word < words.length; word++) {
        for (let letter = 0; letter < words[word].length; letter++) {
            if (letter >= words.length || 
                word >= words[letter].length || 
                words[word][letter] !== words[letter][word]) {
                    return false;
                }
        }
    }

    return true;
};