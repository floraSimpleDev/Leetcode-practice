/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try {
        const [resolve1, resolve2] = await Promise.all([promise1, promise2]);
        return resolve1 + resolve2;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
