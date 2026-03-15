## Join Two Arrays by ID

Given two arrays `arr1` and `arr2`, return a new array `joinedArray`.

All objects in both input arrays contain an `id` field with an integer value.

`joinedArray` is formed by merging `arr1` and `arr2` based on their `id` key.

- The length of `joinedArray` should be equal to the number of unique `id` values.
- The returned array should be sorted in ascending order by the `id` key.

If a given `id` exists in one array but not the other, the single object with that `id` should be included in the result array without modification.

If two objects share the same `id`, their properties should be merged into a single object:

- If a key only exists in one object, that key-value pair should be included in the merged object.
- If a key exists in both objects, the value from the object in `arr2` should override the value from `arr1`.

---

### Example 1

**Input**

```js
arr1 = [
  { "id": 1, "x": 1 },
  { "id": 2, "x": 9 }
]

arr2 = [
  { "id": 3, "x": 5 }
]

Output

[
  { "id": 1, "x": 1 },
  { "id": 2, "x": 9 },
  { "id": 3, "x": 5 }
]

Explanation

There are no duplicate id values, so arr1 is simply combined with arr2, then sorted by id.

Example 2

Input

arr1 = [
  { "id": 1, "x": 2, "y": 3 },
  { "id": 2, "x": 3, "y": 6 }
]

arr2 = [
  { "id": 2, "x": 10, "y": 20 },
  { "id": 3, "x": 0, "y": 0 }
]

Output

[
  { "id": 1, "x": 2, "y": 3 },
  { "id": 2, "x": 10, "y": 20 },
  { "id": 3, "x": 0, "y": 0 }
]

Explanation

The objects with id = 1 and id = 3 appear in only one array, so they are included without modification.

The two objects with id = 2 are merged together.
For shared keys, the values from arr2 override the values from arr1.

Example 3

Input

arr1 = [
  { "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }
]

arr2 = [
  { "id": 1, "b": { "c": 84 }, "v": [1, 3] }
]

Output

[
  { "id": 1, "b": { "c": 84 }, "v": [1, 3], "y": 48 }
]

Explanation

The two objects with id = 1 are merged together.

For the keys "b" and "v", the values from arr2 are used.
Since the key "y" only exists in arr1, that value is preserved.

Constraints

arr1 and arr2 are valid JSON arrays

Each object in arr1 and arr2 has a unique integer id key

2 <= JSON.stringify(arr1).length <= 10^6

2 <= JSON.stringify(arr2).length <= 10^6
