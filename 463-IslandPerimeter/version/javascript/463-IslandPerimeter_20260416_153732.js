// Last updated: 16/04/2026, 15:37:32
1/**
2 * @param {number[][]} grid
3 * @return {number}
4 */
5var islandPerimeter = function(grid) {
6    let perimeter = 0;
7    let rowLength = grid.length, columnLength = grid[0].length;
8
9    for (let row = 0; row < rowLength; row++) {
10        for (let column = 0; column < columnLength; column++) {
11            if (grid[row][column] === 1) {
12                if (row === 0 || grid[row - 1][column] === 0) perimeter++;
13                if (row === rowLength - 1 || grid[row + 1][column] === 0) perimeter++;
14                if (column === 0 || grid[row][column - 1] === 0) perimeter++;
15                if (column === columnLength - 1 || grid[row][column + 1] === 0) perimeter++;
16            }
17        }
18    }
19
20    return perimeter;
21};