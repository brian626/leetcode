function numIslands(grid: string[][]): number {
    let islands = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '1') {
                islands++;
                markIsland(grid, r, c);
            }
        }
    }

    return islands;
};


function markIsland(grid: string[][], row: number, col: number) {
    grid[row][col] = 'X';
    if (row > 0 && grid[row - 1][col] === '1') { markIsland(grid, row - 1, col); }
    if (row < grid.length - 1 && grid[row + 1][col] === '1') { markIsland(grid, row + 1, col); }
    if (col > 0 && grid[row][col - 1] === '1') { markIsland(grid, row, col - 1); }
    if (col < grid[0].length - 1 && grid[row][col + 1] === '1') { markIsland(grid, row, col + 1); }
}

const grid =[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]

console.log(numIslands(grid));
