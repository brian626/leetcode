function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const valueCount: Map<number, number> = new Map<number, number>();
    for (let i = 1; i <= grid.length * grid.length; i++) {
        valueCount.set(i, 0);
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            valueCount.set(grid[row][col], valueCount.get(grid[row][col]) + 1);
        }
    }

    const ans: number[] = [];

    for (const [k, v] of valueCount) {
        if (v === 0) {
            ans[1] = k;
        } else if (v === 2) {
            ans[0] = k;
        }
    }

    return ans;
};
