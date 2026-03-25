// Last updated: 25/03/2026, 21:41:35
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
            return;
        };

        const results = new Array(functions.length).fill(null);
        let count = 0;

        functions.forEach(async (value, index) => {
            try {
                const result = await value();
                results[index] = result;
                count++;

                if (count === functions.length) {
                    resolve(results);
                }
            }
            catch(error) {
                reject(error);
            }
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */