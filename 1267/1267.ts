// 1267. Count Servers that Communicate

// You are given a map of a server center, represented as a m * n integer matrix grid,
// where 1 means that on that cell there is a server and 0 means that it is no server.
// Two servers are said to communicate if they are on the same row or on the same column.

// Return the number of servers that communicate with any other server.


// Example 1:

// Input: grid = [[1,0],[0,1]]
// Output: 0
// Explanation: No servers can communicate with others.

// Example 2:

// Input: grid = [[1,0],[1,1]]
// Output: 3
// Explanation: All three servers can communicate with at least one other server.

// Example 3:

// Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
// Output: 4
// Explanation: The two servers in the first row can communicate with each other.
//              The two servers in the third column can communicate with each other.
//              The server at right bottom corner can't communicate with any other server.


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m <= 250
// 1 <= n <= 250
// grid[i][j] == 0 or 1

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
