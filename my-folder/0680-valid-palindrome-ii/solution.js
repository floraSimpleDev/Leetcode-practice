/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++, right--;
    }
    return true;
}

var validPalindrome = function(s) {
    let low = 0, high = s.length - 1;

    while (low < high) {
        if (s[low] !== s[high]) {
            return isPalindrome(s, low + 1, high) || isPalindrome(s, low, high - 1);
        }

        low++, high--;
    }
    return true;
};
