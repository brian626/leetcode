function orangesRotting(grid: number[][]): number {
    if (countFresh(grid) === 0) { return 0; }

    let time = 0;

    while (true) {
        const newGrid: number[][] = [];
        let orangesRotted = 0;

        for (let r = 0; r < grid.length; r++) {
            newGrid[r] = [];

            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1 && hasRottenNeighbor(grid, r, c)) {
                    newGrid[r][c] = 2;
                    orangesRotted++;
                } else {
                    newGrid[r][c] = grid[r][c];
                }
            }
        }

        if (orangesRotted === 0) {
            break;
        }

        grid = newGrid;

        time++;
    }

    return countFresh(grid) > 0 ? -1 : time;
};

function hasRottenNeighbor(grid: number[][], row: number, col: number): boolean {
    if (row > 0 && grid[row - 1][col] === 2) { return true; }
    if (row < grid.length - 1 && grid[row + 1][col] === 2) { return true; }
    if (col > 0 && grid[row][col - 1] === 2) { return true; }
    if (col < grid[0].length - 1 && grid[row][col + 1] === 2) { return true; }

    return false;
}

function countRotten(grid: number[][]): number {
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 2) {
                count++;
            }
        }
    }

    return count;
}

function countFresh(grid: number[][]): number {
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) {
                count++;
            }
        }
    }

    return count;
}


const grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]

console.log(orangesRotting(grid));
