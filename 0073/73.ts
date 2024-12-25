// 73. Set Matrix Zeroes

// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -2^31 <= matrix[i][j] <= 2^31 - 1

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let rows: number[] = []
    let columns: number[] = []

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] == 0) {
                rows.push(r)
                columns.push(c)
            }
        }
    }

    rows.forEach(r => {
        for (let c = 0; c < matrix[0].length; c++) {
            matrix[r][c] = 0
        }
    })

    columns.forEach(c => {
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][c] = 0
        }
    })
};

let matrix_73: number[][] = []

// matrix_73 = [[1,1,1],[1,0,1],[1,1,1]]
// setZeroes(matrix_73)
// console.log(matrix_73)
// Output: [[1,0,1],[0,0,0],[1,0,1]]

matrix_73 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix_73)
console.log(matrix_73)
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
