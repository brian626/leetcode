// 64. Minimum Path Sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to
// bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.


// Example 1:


// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 100

function minPathSum(grid: number[][]): number {
    let minSumGrid: number[][] = [];
    for (let r = 0; r < grid.length; r++) {
        minSumGrid[r] = [];
        for (let c = 0; c < grid[0].length; c++) {
            minSumGrid[r][c] = 999;
        }
    }

    minSumGrid[0][0] = grid[0][0];

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (r === 0 && c === 0) { continue; }

            if (r === 0) {
                minSumGrid[r][c] = Math.min(minSumGrid[r][c], minSumGrid[r][c-1] + grid[r][c]);
            }
            else if (c === 0) {
                minSumGrid[r][c] = Math.min(minSumGrid[r][c], minSumGrid[r-1][c] + grid[r][c]);
            }
            else {
                minSumGrid[r][c] = Math.min(minSumGrid[r][c], minSumGrid[r][c-1] + grid[r][c]);
                minSumGrid[r][c] = Math.min(minSumGrid[r][c], minSumGrid[r-1][c] + grid[r][c]);
            }
        }
    }

    return minSumGrid[grid.length - 1][grid[0].length - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7

console.log(minPathSum([[1,2,3],[4,5,6]])); // 12

console.log(minPathSum([[1]])); // 1

console.log(minPathSum([[1,1],[2,3]])); // 5
