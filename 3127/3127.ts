function canMakeSquare(grid: string[][]): boolean {
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            if (countBlack(grid, row, col) !== 2) {
                return true;
            }
        }
    }

    return false;
};


function countBlack(grid: string[][], row: number, col: number): number {
    let count = 0;

    if (grid[row][col] === 'B') { count++; }
    if (grid[row + 1][col] === 'B') { count++; }
    if (grid[row][col + 1] === 'B') { count++; }
    if (grid[row + 1][col + 1] === 'B') { count++; }

    return count;
}
