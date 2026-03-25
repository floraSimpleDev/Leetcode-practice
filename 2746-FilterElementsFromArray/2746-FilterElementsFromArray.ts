// Last updated: 25/03/2026, 21:41:57
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const result = [];

    for (const i in arr) {
        const index = Number(i);

        if (fn(arr[index], index)) {
            result.push(arr[index]);
        }
    }

    return result;
};