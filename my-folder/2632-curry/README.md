## Curry

Given a function `fn`, return a **curried** version of that function.

A curried function is a function that accepts fewer than or an equal number of parameters as the original function and returns either:

- another curried function, or
- the same value the original function would have returned

In practical terms, if you call the original function like:

```js
sum(1, 2, 3)

then you should be able to call the curried version in any of these ways:

csum(1)(2)(3)
csum(1)(2, 3)
csum(1, 2)(3)
csum(1, 2, 3)

All of these should return the same value as the original function.

Example 1

Input

fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1], [2], [3]]

Output

6

Explanation

The code being executed is:

const curriedSum = curry(fn);
curriedSum(1)(2)(3) === 6;

curriedSum(1)(2)(3) should return the same value as sum(1, 2, 3).

Example 2

Input

fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1, 2], [3]]

Output

6

Explanation

const curriedSum = curry(fn);
curriedSum(1, 2)(3) === 6;

This should return the same value as sum(1, 2, 3).

Example 3

Input

fn = function sum(a, b, c) { return a + b + c; }
inputs = [[], [], [1, 2, 3]]

Output

6

Explanation

You should be able to pass the parameters in any valid grouping, including all at once or none at all.

const curriedSum = curry(fn);
curriedSum()()(1, 2, 3) === 6;

This should return the same value as sum(1, 2, 3).

Example 4

Input

fn = function life() { return 42; }
inputs = [[]]

Output

42

Explanation

Currying a function that accepts zero parameters should effectively do nothing.

const curriedLife = curry(fn);
curriedLife() === 42;
Constraints

1 <= inputs.length <= 1000

0 <= inputs[i][j] <= 10^5

0 <= fn.length <= 1000

inputs.flat().length == fn.length

Function parameters are explicitly defined

If fn.length > 0, then the last array in inputs is not empty
