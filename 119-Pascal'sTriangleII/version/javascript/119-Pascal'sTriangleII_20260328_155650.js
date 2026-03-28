// Last updated: 28/03/2026, 15:56:50
1/**
2 * @param {number} rowIndex
3 * @return {number[]}
4 */
5var getRow = function(rowIndex) {
6    let row = new Array(rowIndex + 1).fill(0);
7    row[0] = 1;
8
9    for (let i = 1; i <= rowIndex; i++) {
10        for (let j = i; j > 0; j--) {
11            row[j] = row[j] + row[j - 1];
12        }
13    }
14
15    return row;
16};