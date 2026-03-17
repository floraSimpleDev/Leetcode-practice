/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
var promisePool = async function(functions, n) {
    async function executeNext() {
        if (functions.length === 0) return;

        const fn = functions.shift();
        await fn();
        await executeNext();
    }

    await Promise.all(Array(n).fill().map(executeNext));
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
