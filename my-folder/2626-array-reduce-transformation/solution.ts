type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accumulator = init;

    nums.forEach(value => accumulator = fn(accumulator, value));

    return accumulator;
};
