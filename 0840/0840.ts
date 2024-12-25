function numMagicSquaresInside(grid: number[][]): number {
    let count = 0;

    for (let r = 0; r < grid.length - 2; r++) {
        for (let c = 0; c < grid[0].length - 2; c++) {
            if (isMagicSquare(grid, r, c)) {
                count++;
            }
        }
    }

    return count;
};


function isMagicSquare(grid: number[][], r: number, c: number): boolean {
    const allNumbers: Set<number> = new Set<number>();
    allNumbers.add(grid[r][c]);
    allNumbers.add(grid[r][c+1]);
    allNumbers.add(grid[r][c+2]);
    allNumbers.add(grid[r+1][c]);
    allNumbers.add(grid[r+1][c+1]);
    allNumbers.add(grid[r+1][c+2]);
    allNumbers.add(grid[r+2][c]);
    allNumbers.add(grid[r+2][c+1]);
    allNumbers.add(grid[r+2][c+2]);
    if (allNumbers.size !== 9) { return false; }

    for (const n of allNumbers) {
        if (n < 1 || n > 9) { return false; }
    }

    const magicNumber = (grid[r][c] + grid[r][c+1] + grid[r][c+2]);
    console.log(`isMagicSquare(${r}, ${c}) === ${magicNumber}`);

    return (grid[r+1][c] + grid[r+1][c+1] + grid[r+1][c+2]) === magicNumber &&
           (grid[r+2][c] + grid[r+2][c+1] + grid[r+2][c+2]) === magicNumber &&
           (grid[r][c] + grid[r+1][c] + grid[r+2][c]) === magicNumber &&
           (grid[r][c+1] + grid[r+1][c+1] + grid[r+2][c+1]) === magicNumber &&
           (grid[r][c+2] + grid[r+1][c+2] + grid[r+2][c+2]) === magicNumber &&
           (grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2]) === magicNumber &&
           (grid[r+2][c] + grid[r+1][c+1] + grid[r][c+2]) === magicNumber;

}

const grid = [[5,5,5],[5,5,5],[5,5,5]];
console.log(numMagicSquaresInside(grid));
