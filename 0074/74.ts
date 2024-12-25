// 74. Search a 2D Matrix

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.


// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10^4 <= matrix[i][j], target <= 10^4

function searchMatrix(matrix: number[][], target: number): boolean {
    let searchRow: number = matrix.length - 1
    for (let r = 1; r < matrix.length; r++) {
        if (target < matrix[r][0]) {
            searchRow = r - 1
            break
        }
    }

    for (let c = 0; c < matrix[0].length; c++) {
        if (matrix[searchRow][c] == target) {
            return true
        }
        else if (matrix[searchRow][c] > target) {
            break
        }
    }

    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
// Output: true

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))
// Output: false

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 1))
// Output: true

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 23))
// Output: true
