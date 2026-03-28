// Last updated: 28/03/2026, 14:36:31
1/**
2 * @param {number} numRows
3 * @return {number[][]}
4 */
5var generate = function(numRows) {
6     let triangle = [];
7
8     for (let line = 0; line < numRows; line++) {
9        let row = [];
10
11        for (let i = 0; i <= line; i++) {
12            if (i === 0 || i === line) {
13                row.push(1);
14            }
15            else {
16                row.push(triangle[line - 1][i - 1] + triangle[line - 1][i]);
17            }
18        }
19
20        triangle.push(row);
21     }
22
23     return triangle;
24};