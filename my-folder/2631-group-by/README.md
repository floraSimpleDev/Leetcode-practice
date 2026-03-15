## Group By

Write code that enhances all arrays such that you can call the `array.groupBy(fn)` method on any array and it will return a **grouped version** of the array.

A grouped array is an object where:

- each key is the output of `fn(arr[i])`
- each value is an array containing all items in the original array which generate that key

The provided callback `fn` will accept an item in the array and return a **string key**.

The order of each value list should be the same order the items appear in the array. Any order of keys is acceptable.

Please solve it **without using lodash's `_.groupBy` function**.

---

### Example 1

**Input**

```js
array = [
  { "id": "1" },
  { "id": "1" },
  { "id": "2" }
]

fn = function (item) {
  return item.id;
}

Output

{
  "1": [{ "id": "1" }, { "id": "1" }],
  "2": [{ "id": "2" }]
}

Explanation

Output is from array.groupBy(fn).

The selector function gets the "id" from each item in the array.

There are two objects with an "id" of "1", so both are placed in the first array.

There is one object with an "id" of "2", so it is placed in the second array.

Example 2

Input

array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]

fn = function (list) {
  return String(list[0]);
}

Output

{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}

Explanation

The array can contain elements of any type.

In this case, the selector function defines the key as the first element in each subarray.

All subarrays have 1 as their first element, so they are grouped together.

Example 3

Input

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

fn = function (n) {
  return String(n > 5);
}

Output

{
  "true": [6, 7, 8, 9, 10],
  "false": [1, 2, 3, 4, 5]
}

Explanation

The selector function groups numbers by whether each number is greater than 5.

Constraints

0 <= array.length <= 10^5

fn returns a string
