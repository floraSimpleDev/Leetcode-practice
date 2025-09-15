/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s) return true;
    let left = 0;
    let right = s.length - 1;

    const isAlphanumeric = (letter) => {
        return (
            (letter >= 'a' && letter <= 'z') ||
            (letter >= '0' && letter <= '9') ||
            (letter >= 'A' && letter <= 'Z')
            )
    }

    while (left < right) {
        if (!isAlphanumeric(s[left])) {
            left++;
            continue;
        }
        if (!isAlphanumeric(s[right])) {
            right--;
            continue
        }

        const a = s[left].toLowerCase();
        const b = s[right].toLowerCase();
        
        if (a != b) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
