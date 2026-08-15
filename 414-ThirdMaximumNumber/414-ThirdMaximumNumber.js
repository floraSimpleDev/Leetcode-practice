// Last updated: 15/08/2026, 16:41:38
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let firstMax = null, secondMax = null, thirdMax = null;

    for (let value of nums) {
        if (value === firstMax || value === secondMax || value === thirdMax) {
            continue;
        }

        if (firstMax === null || firstMax <= value) {
            [thirdMax, secondMax, firstMax] = [secondMax, firstMax, value];
        }
        else if (secondMax === null || secondMax <= value) {
            [thirdMax, secondMax] = [secondMax, value];
        }
        else if (thirdMax === null || thirdMax <= value) {
            thirdMax = value;
        }
    }

    return thirdMax ?? firstMax;
};