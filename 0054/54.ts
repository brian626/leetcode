// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.


// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

function spiralOrder(matrix: number[][]): number[] {
    let unrolled: number[] = []
    let maxR: number = matrix.length
    let maxC: number = matrix[0].length
    let minR: number = 0
    let minC: number = 0
    const unrolledLength: number = maxR * maxC
    let r: number = 0
    let c: number = 0
    let direction: number = 0 // 0 = right, 1 = down, 2 = left, 3 = up
    while (unrolled.length < unrolledLength) {
        unrolled.push(matrix[r][c])

        if (direction == 0) {
            if (c < maxC - 1) { c += 1 }
            else { minR += 1; direction = 1 }
        }
        if (direction == 1) {
            if (r < maxR - 1) { r += 1 }
            else { maxC -= 1; direction = 2 }
        }
        if (direction == 2) {
            if (c > minC) { c -= 1 }
            else { maxR -= 1; direction = 3 }
        }
        if (direction == 3) {
            if (r > minR) { r -= 1 }
            else { minC += 1; c += 1; direction = 0 }
        }
    }

    return unrolled
};

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
// Output: [1,2,3,6,9,8,7,4,5]

// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]))
// [ 1,  2,  3,  4,  5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11,  6, 7,  8,  9, 14, 19, 18, 17, 12, 13 ]
