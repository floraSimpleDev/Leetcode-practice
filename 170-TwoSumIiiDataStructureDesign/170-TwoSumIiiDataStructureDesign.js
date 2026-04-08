// Last updated: 08/04/2026, 20:21:38

var TwoSum = function() {
    this.numbers = {};
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.numbers[number] = (this.numbers[number] || 0) + 1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let number in this.numbers) {
        number = Number(number);
        let target = value - number;

        if (target !== number) {
            if (target in this.numbers) return true;
        } else {
            if (this.numbers[number] > 1) return true;
        }
    }

    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */