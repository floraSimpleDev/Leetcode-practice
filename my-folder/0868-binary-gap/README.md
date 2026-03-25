## Binary Gap

Given a positive integer `n`, find and return the **longest distance between any two adjacent `1`s** in the binary representation of `n`.

If there are no two adjacent `1`s, return `0`.

Two `1`s are considered adjacent if there are only `0`s between them (possibly no `0`s).

The distance between two `1`s is the absolute difference between their bit positions.

For example, the two `1`s in `"1001"` have a distance of `3`.

---

### Example 1

**Input**

```js
n = 22

Output

2

Explanation

22 in binary is "10110".

The first adjacent pair of 1s has a distance of 2

The second adjacent pair of 1s has a distance of 1

The answer is the larger of the two distances, which is 2.

Note that "10110" is not considered one valid pair across the first and last 1, because there is another 1 in between.

Example 2

Input

n = 8

Output

0

Explanation

8 in binary is "1000".

There are no two adjacent 1s in the binary representation, so the answer is 0.

Example 3

Input

n = 5

Output

2

Explanation

5 in binary is "101".

The two adjacent 1s have a distance of 2.

Constraints

1 <= n <= 10^9
