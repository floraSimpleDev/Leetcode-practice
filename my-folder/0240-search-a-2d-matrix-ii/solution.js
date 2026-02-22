/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix.length[0] === 0) {
        return false;
    }

    const rows = matrix.length;
    const columns = matrix[0].length;

    function recursion(left, up, right, down) {
        if (left > right || up > down) return false;

        if (target < matrix[up][left] || target > matrix[down][right]) return false;

        const mid = left + Math.floor((right - left) / 2);
        let row = up;

        while (row <= down && matrix[row][mid] <= target) {
            if (matrix[row][mid] === target) return true;
            row++;
        }

        return (recursion(left, row, mid - 1, down) ||
                recursion(mid + 1, up, right, row - 1));
    }

    return recursion(0, 0, columns - 1, rows - 1);
};
