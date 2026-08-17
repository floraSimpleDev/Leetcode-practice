// Last updated: 17/08/2026, 17:34:42
1public class Solution {
2    private Dictionary<char, char> brackets;
3
4    public Solution() {
5        brackets = new Dictionary<char, char> {
6            {')', '('},
7            {']', '['},
8            {'}', '{'},
9        };
10    }
11
12    public bool IsValid(string s) {
13        var stack = new Stack<char>();
14
15        foreach (var character in s) {
16            if (brackets.ContainsKey(character)) {
17                if (stack.Count == 0 || stack.Pop() != brackets[character]) {
18                    return false;
19                }
20            }
21            else {
22                stack.Push(character);
23            }
24        }
25
26        return stack.Count == 0;
27    }
28}