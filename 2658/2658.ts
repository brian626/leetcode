function findMaxFish(grid: number[][]): number {
    let maxFish = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] !== 0) {
                maxFish = Math.max(maxFish, dfs(grid, row, col));
            }
        }
    }

    return maxFish;
};

function dfs(grid: number[][], row: number, col: number): number {
    let fish = 0;

    const cellsToVisit: string[] = [`${row},${col}`];

    while (cellsToVisit.length > 0) {
        const [r, c] = cellsToVisit.shift().split(',').map(x => parseInt(x));
        fish += grid[r][c];
        grid[r][c] = 0;

        if (r > 0 &&
            grid[r - 1][c] !== 0 &&
            !cellsToVisit.includes(`${r - 1},${c}`)) {
            cellsToVisit.push(`${r - 1},${c}`);
        }
        if (r < grid.length - 1 &&
            grid[r + 1][c] !== 0 &&
            !cellsToVisit.includes(`${r + 1},${c}`)) {
            cellsToVisit.push(`${r + 1},${c}`);
        }
        if (c > 0 &&
            grid[r][c - 1] !== 0 &&
            !cellsToVisit.includes(`${r},${c - 1}`)) {
            cellsToVisit.push(`${r},${c - 1}`);
        }
        if (c < grid[0].length - 1 &&
            grid[r][c + 1] !== 0 &&
            !cellsToVisit.includes(`${r},${c + 1}`)) {
            cellsToVisit.push(`${r},${c + 1}`);
        }
    }

    return fish;
}


const grid = [[7, 2, 1, 8, 10, 10, 4, 6, 6, 4], [7, 1, 4, 5, 1, 2, 9, 2, 6, 8], [5, 3, 5, 5, 10, 4, 2, 2, 10, 4], [6, 4, 10, 3, 2, 9, 2, 6, 4, 3], [3, 6, 4, 6, 7, 4, 4, 9, 7, 4], [2, 10, 3, 4, 8, 9, 4, 1, 9, 10], [3, 7, 5, 10, 2, 6, 1, 1, 2, 8], [3, 6, 9, 8, 1, 1, 10, 10, 3, 6], [4, 2, 5, 8, 5, 3, 1, 2, 9, 9], [6, 10, 5, 8, 1, 3, 8, 10, 2, 9]]

console.log(findMaxFish(grid));
