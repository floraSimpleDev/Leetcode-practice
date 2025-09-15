/**
 * @param {string} s
 * @return {number}
 */
function isPalindrome(str) {
    let left = 0, right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++, right--;
    }
    return true;
}

var removePalindromeSub = function(s) {
    if (!s) return 0;

    if (isPalindrome(s)) return 1;

    return 2;
};
