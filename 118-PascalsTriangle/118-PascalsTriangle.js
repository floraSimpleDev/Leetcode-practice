// Last updated: 28/03/2026, 14:37:23
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
     let triangle = [];

     for (let line = 0; line < numRows; line++) {
        let row = [];

        for (let i = 0; i <= line; i++) {
            if (i === 0 || i === line) {
                row.push(1);
            }
            else {
                row.push(triangle[line - 1][i - 1] + triangle[line - 1][i]);
            }
        }

        triangle.push(row);
     }

     return triangle;
};