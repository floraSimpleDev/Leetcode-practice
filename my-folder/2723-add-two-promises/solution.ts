type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return new Promise<number>((resolve, reject) => {
        let count = 2, result = 0;

        [promise1, promise2].forEach(async promise => {
            try {
                const subResolve = await promise;
                result += subResolve;
                count--;

                if (count === 0) resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
