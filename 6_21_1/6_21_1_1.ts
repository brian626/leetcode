// You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
// connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid
// are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.


// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//                [0,0,0,0,0,0,0,1,1,1,0,0,0],
//                [0,1,1,0,1,0,0,0,0,0,0,0,0],
//                [0,1,0,0,1,1,0,0,1,0,1,0,0],
//                [0,1,0,0,1,1,0,0,1,1,1,0,0],
//                [0,0,0,0,0,0,0,0,0,0,1,0,0],
//                [0,0,0,0,0,0,0,1,1,1,0,0,0],
//                [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

function countNeighbors(grid: number[][], r: number, c: number): number {
    let neighbors: number = 0

    const upRow: number = r - 1
    if (upRow >= 0) {
        if (grid[upRow][c] == 1) {
            grid[upRow][c] = -1
            neighbors = neighbors + 1 + countNeighbors(grid, upRow, c)
        }
    }

    const downRow: number = r + 1
    if (downRow < grid.length) {
        if (grid[downRow][c] == 1) {
            grid[downRow][c] = -1
            neighbors = neighbors + 1 + countNeighbors(grid, downRow, c)
        }
    }

    const leftColumn: number = c - 1
    if (leftColumn >= 0) {
        if (grid[r][leftColumn] == 1) {
            grid[r][leftColumn] = -1
            neighbors = neighbors + 1 + countNeighbors(grid, r, leftColumn)
        }
    }

    const rightColumn: number = c + 1
    if (rightColumn < grid[0].length) {
        if (grid[r][rightColumn] == 1) {
            grid[r][rightColumn] = -1
            neighbors = neighbors + 1 + countNeighbors(grid, r, rightColumn)
        }
    }

    return neighbors
}

function maxAreaOfIsland(grid: number[][]): number {
    let maxArea: number = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let islandArea: number = 0
            if (grid[r][c] == 1) {
                grid[r][c] = -1
                islandArea = 1 + countNeighbors(grid, r, c)

                maxArea = Math.max(maxArea, islandArea)
            }
        }
    }
    return maxArea
};

console.log(maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]))
// Output: 6

// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
