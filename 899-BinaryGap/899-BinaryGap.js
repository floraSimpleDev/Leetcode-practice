// Last updated: 25/03/2026, 21:42:32
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    const binaryN = n.toString(2);
    let maxDistance = 0;
    let lastIndex = -1;

    for (let i = 0; i < binaryN.length; i++) {
        if (binaryN[i] === '1') {
            if (lastIndex !== -1) {
                maxDistance = Math.max(maxDistance, i - lastIndex);
            }

            lastIndex = i;
        }
    }

    return maxDistance;
};