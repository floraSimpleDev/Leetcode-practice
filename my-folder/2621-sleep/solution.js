/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    try {
        return await new Promise((resolve, reject) => {
            setTimeout(resolve, millis);
        })
    }
    catch (error) {
        reject(error);
    }
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
