// Last updated: 25/03/2026, 21:42:30
function reverseOnlyLetters(s: string): string {
    let reversed = ""
    let stack = []

    for (let char of s) {
        if (/^[a-zA-Z]/.test(char)) {
            stack.push(char)
        }
    }

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