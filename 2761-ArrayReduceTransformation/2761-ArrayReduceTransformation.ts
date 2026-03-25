// Last updated: 25/03/2026, 21:41:47
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accumulator = init;

    nums.forEach(value => accumulator = fn(accumulator, value));

    return accumulator;
};