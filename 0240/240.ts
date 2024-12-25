// 240. Search a 2D Matrix II

// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.


// Example 1:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

// Example 2:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -10^9 <= matix[i][j] <= 10^9
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -10^9 <= target <= 10^9

function searchMatrix(matrix: number[][], target: number): boolean {
    // Search the appropriate row
    let searchRows: number[] = []
    let searchColumns: number[] = []
    const numRows: number = matrix.length
    const numColumns: number = matrix[0].length

    for (let i = 0; i < matrix.length; i++) {
        if (target >= matrix[i][0] && target <= matrix[i][numColumns - 1]) { searchRows.push(i) }
    }

    for (let i = 0; i < searchRows.length; i++) {
        const r = searchRows[i]
        console.log(`searching row #${r} = [${matrix[r]}], index = ${matrix[r].indexOf(target)}`)
        if (matrix[r].indexOf(target) != -1) { return true }
    }

    // Search the appropriate column
    for (let i = 0; i < matrix[0].length; i++) {
        if (target >= matrix[0][i] && target <= matrix[numRows - 1][i]) { searchColumns.push(i) }
    }

    for (let i = 0; i < searchColumns.length; i++) {
        const c = searchColumns[i]
        const column: number[] = matrix.map(x => x[c])
        console.log(`searching column #${c} [${column}]`)
        if (column.indexOf(target) != -1) { return true }
    }

    return false
};

// console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5))
// Output: true

// console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20))
// Output: false

// console.log(searchMatrix([[1,4,7,11,15],[3,5,8,12,19],[4,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 2))
// Output: false

console.log(searchMatrix([[-5]], -10))
console.log(searchMatrix([[-5]], -5))

console.log(searchMatrix([[1, 3, 5, 7, 9],
                          [2, 4, 6, 8, 10],
                          [11,13,15,17,19],
                          [12,14,16,18,20],
                          [21,22,23,24,25]], 13))
