class NeighborSum {
    grid: number[][];

    constructor(grid: number[][]) {
        this.grid = grid;
    }

    adjacentSum(value: number): number {
        for (let r = 0; r < this.grid.length; r++) {
            for (let c = 0; c < this.grid[0].length; c++) {
                if (this.grid[r][c] === value) {
                    let sum = 0;
                    if (r > 0) { sum += this.grid[r-1][c]; }
                    if (r < this.grid.length - 1) { sum += this.grid[r+1][c]; }
                    if (c > 0) { sum += this.grid[r][c-1]; }
                    if (c < this.grid[0].length - 1) { sum += this.grid[r][c+1]; }
                    return sum;
                }
            }
        }
    }

    diagonalSum(value: number): number {
        for (let r = 0; r < this.grid.length; r++) {
            for (let c = 0; c < this.grid[0].length; c++) {
                if (this.grid[r][c] === value) {
                    let sum = 0;
                    if (r > 0 && c > 0) { sum += this.grid[r-1][c-1]; }
                    if (r > 0 && c < this.grid[0].length - 1) { sum += this.grid[r-1][c+1]; }
                    if (r < this.grid.length - 1 && c > 0) { sum += this.grid[r+1][c-1]; }
                    if (r < this.grid.length - 1 && c < this.grid[0].length - 1) { sum += this.grid[r+1][c+1]; }
                    return sum;
                }
            }
        }
    }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
