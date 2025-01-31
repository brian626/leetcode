function checkValid(matrix: number[][]): boolean {
    const n = matrix.length;

    for (let row = 0; row < n; row++) {
        const rowSet = new Set<number>(matrix[row]);
        if (rowSet.size !== n) {
            return false;
        }
    }

    for (let col = 0; col < n; col++) {
        const colSet = new Set<number>();
        for (let row = 0; row < n; row++) {
            colSet.add(matrix[row][col]);
        }

        if (colSet.size !== n) {
            return false;
        }
    }

    return true;
};
