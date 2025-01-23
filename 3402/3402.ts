function minimumOperations(grid: number[][]): number {
    let count = 0;

    for (let col = 0; col < grid[0].length; col++) {
        for (let row = 1; row < grid.length; row++) {
            const newValue = Math.max(grid[row][col], grid[row - 1][col] + 1);
            count += (newValue - grid[row][col]);
            grid[row][col] = newValue;
        }
    }

    return count;
};

const grid = [[3, 2], [1, 3], [3, 4], [0, 1]];

console.log(minimumOperations(grid));
