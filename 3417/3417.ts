function zigzagTraversal(grid: number[][]): number[] {
    const result: number[] = [];
    let skip = false;

    for (let row = 0; row < grid.length; row++) {
        const colStart = (row % 2 === 0) ? 0 : grid[0].length - 1;
        const colEnd = (row % 2 === 0) ? grid[0].length : -1;
        const colDir = (row % 2 === 0) ? 1 : -1;

        console.log(row, colStart, colEnd, colDir);

        for (let col = colStart; col !== colEnd; col += colDir) {
            if (!skip) {
                result.push(grid[row][col]);
            }
            skip = !skip;
        }
    }

    return result;
};

const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(zigzagTraversal(grid));
