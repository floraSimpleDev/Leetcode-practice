// Last updated: 25/03/2026, 21:41:51
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accumulator = init;

    nums.forEach(value => 
        accumulator = fn(accumulator, value)
    );

    return accumulator;
};