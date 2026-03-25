// Last updated: 25/03/2026, 21:41:15
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    function swap (a: JSONValue, b: JSONValue) {
        return (fn(a) < fn(b)) ? -1: 1;
    }

    return arr.sort(swap);
};