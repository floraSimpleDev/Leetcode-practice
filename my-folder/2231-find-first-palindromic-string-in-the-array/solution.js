/**
 * @param {string[]} words
 * @return {string}
 */
function isPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++, right--;
    }
    return true;
}

var firstPalindrome = function(words) {
    const first = words.findIndex(word => isPalindrome(word));
    if (first === -1) return '';
    else return words[first];
};
