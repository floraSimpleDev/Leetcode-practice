// Last updated: 07/04/2026, 13:30:17
/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let buff4 = new Array(4);
        let total = 0;

        while (total < n) {
            let number = read4(buff4);

            if (number === 0) break;

            for (let i = 0; i < number; i++) {
                if (total === n) {
                    break;
                }
                buf[total++] = buff4[i];
            }
        }

        return total;
    };
};