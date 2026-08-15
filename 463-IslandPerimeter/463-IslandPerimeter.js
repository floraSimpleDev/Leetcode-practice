// Last updated: 15/08/2026, 16:41:28
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    let rowLength = grid.length, columnLength = grid[0].length;

    for (let row = 0; row < rowLength; row++) {
        for (let column = 0; column < columnLength; column++) {
            if (grid[row][column] === 1) {
                if (row === 0 || grid[row - 1][column] === 0) perimeter++;
                if (row === rowLength - 1 || grid[row + 1][column] === 0) perimeter++;
                if (column === 0 || grid[row][column - 1] === 0) perimeter++;
                if (column === columnLength - 1 || grid[row][column + 1] === 0) perimeter++;
            }
        }
    }

    return perimeter;
};