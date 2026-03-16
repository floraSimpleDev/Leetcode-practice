/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    function dfs(obj) {
        if (!obj) return false;
        if (typeof obj !== "object") return obj;

        if (Array.isArray(obj)) {
            const subArray = [];

            for (const value of obj) {
                const subResult = dfs(value);

                if (subResult) {
                    subArray.push(subResult);
                }
            }
            return subArray;
        }

        const subObj = {};
        for (const key in obj) {
            const subResult = dfs(obj[key]);
            
            if (subResult) {
                subObj[key] = subResult;
            }
        }

        return subObj;
    }
    return dfs(obj);
};
