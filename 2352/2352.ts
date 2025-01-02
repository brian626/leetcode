function equalPairs(grid: number[][]): number {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (areEqual(grid, i, j)) {
                count++;
            }
        }
    }

    return count;
};

// row r = grid[r][0...n]
// col c = grid[0..n][c]
function areEqual(grid: number[][], r: number, c: number): boolean {
    for (let i = 0; i < grid.length; i++) {
        if (grid[r][i] !== grid[i][c]) {
            return false;
        }
    }

    return true;
}

const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]


console.log(equalPairs(grid));
