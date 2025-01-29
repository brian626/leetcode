function satisfiesConditions(grid: number[][]): boolean {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (row < grid.length - 1) {
                if (grid[row][col] !== grid[row + 1][col]) {
                    return false;
                }
            }

            if (col < grid[0].length - 1) {
                if (grid[row][col] === grid[row][col + 1]) {
                    return false;
                }
            }
        }
    }

    return true;
};
