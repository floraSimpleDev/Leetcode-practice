## Throttle

Given a function `fn` and a time in milliseconds `t`, return a **throttled** version of that function.

A throttled function is first called **without delay** and then, for a time interval of `t` milliseconds, can't be executed but should store the **latest function arguments** provided, in order to call `fn` with them after the end of the delay.

For instance, let `t = 50ms`, and suppose the function is called at `30ms`, `40ms`, and `60ms`.

- At `30ms`, without delay, the throttled function `fn` should be called with the arguments, and calling the throttled function should be blocked for the following `t` milliseconds.
- At `40ms`, the function should only save the arguments.
- At `60ms`, the arguments should overwrite the currently stored arguments from the second call, because both the second and third calls are made before `80ms`.

Once the delay has passed, the throttled function `fn` should be called with the **latest arguments** provided during the delay period, and it should also create another delay period of `80ms + t`.

**Throttle Diagram**  
The diagram in the original problem statement shows how throttle transforms events. Each rectangle represents `100ms`, and the throttle time is `400ms`. Each color represents a different set of inputs.

---

### Example 1

**Input**

```js
t = 100

calls = [
  { "t": 20, "inputs": [1] }
]

Output

[{ "t": 20, "inputs": [1] }]

Explanation

The 1st call is always called without delay.

Example 2

Input

t = 50

calls = [
  { "t": 50, "inputs": [1] },
  { "t": 75, "inputs": [2] }
]

Output

[{ "t": 50, "inputs": [1] }, { "t": 100, "inputs": [2] }]

Explanation

The 1st call invokes the function with arguments (1) without delay.

The 2nd call happens at 75ms, which is within the delay period because 50ms + 50ms = 100ms.

Therefore, the arguments from the 2nd call are saved and used when the delayed callback runs at 100ms.

Example 3

Input

t = 70

calls = [
  { "t": 50, "inputs": [1] },
  { "t": 75, "inputs": [2] },
  { "t": 90, "inputs": [8] },
  { "t": 140, "inputs": [5, 7] },
  { "t": 300, "inputs": [9, 4] }
]

Output

[
  { "t": 50, "inputs": [1] },
  { "t": 120, "inputs": [8] },
  { "t": 190, "inputs": [5, 7] },
  { "t": 300, "inputs": [9, 4] }
]

Explanation

The 1st call invokes the function with arguments (1) without delay.

The 2nd call happens at 75ms, within the delay period because 50ms + 70ms = 120ms, so it only saves the arguments.

The 3rd call also happens within the delay period, and because only the latest arguments should be used, it overwrites the previous saved arguments.

After the delay period ends, the callback runs at 120ms with the saved arguments [8].

That callback starts another delay period from 120ms to 190ms.

The 4th call happens at 140ms during this delay period, so it is saved and then called at 190ms.

That creates another delay period from 190ms to 260ms.

The 5th call happens at 300ms, which is after 260ms, so it is called immediately and starts another delay period until 370ms.

Constraints

0 <= t <= 1000

1 <= calls.length <= 10

0 <= calls[i].t <= 1000

0 <= calls[i].inputs[j], calls[i].inputs.length <= 10
