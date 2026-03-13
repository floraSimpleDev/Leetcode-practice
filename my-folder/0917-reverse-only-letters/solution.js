/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let stack = []

    for (let char of s) {
        if (/^[a-zA-Z]/.test(char)) {
            stack.push(char)
        }
    }

    let reversed = ""

    for (let char of s) {
        if (/^[a-zA-Z]/.test(char)) {
            reversed += stack.pop()
        }
        else {
            reversed += char
        }
    }

    return reversed
};
