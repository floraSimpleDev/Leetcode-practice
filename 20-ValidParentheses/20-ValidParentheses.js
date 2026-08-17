// Last updated: 17/08/2026, 17:19:29
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isValid = function(s) {
6    if (!s) {
7        return false;
8    }
9
10    const brackets = {
11        ")": "(",
12        "}": "{",
13        "]": "[",
14    };
15
16    const stack = [];
17
18    for (let char of s) {
19        if (brackets[char]) {
20            const popChar = stack.length && stack.pop();
21            
22            if (popChar !== brackets[char]) {
23                return false;
24            }
25        }
26        else {
27            stack.push(char);
28        }
29    }
30
31    return stack.length === 0;
32};