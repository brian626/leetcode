function canCommunicate(grid: number[][], r: number, c: number): boolean {
    // Are there any other servers in this server's row?
    const rowCount = grid[r].reduce((x, y) => x + y)
    if (rowCount > 1) {
        return true
    }

    // If not, are there any other servers in this server's column?
    let columnCount: number = 0
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][c] == 1) {
            columnCount++
        }
    }
    if (columnCount > 1) {
        return true
    }

    return false
}

function countServers(grid: number[][]): number {
    let count: number = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) {
                if (canCommunicate(grid, r, c)) {
                    count += 1
                }
            }
        }
    }

    return count
};

// console.log(countServers([[1,0],[0,1]])) // Output: 0
// console.log(countServers([[1,0],[1,1]])) // Output: 3
// console.log(countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]])) // Output: 4
