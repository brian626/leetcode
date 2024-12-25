// 59. Spiral Matrix II

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.

// Example 1:

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// Example 2:

// Input: n = 1
// Output: [[1]]


// Constraints:

// 1 <= n <= 20

function generateMatrix(n: number): number[][] {
    if (n == 1) { return [[1]] }

    let matrix: number[][] = []
    for (let r = 0; r < n; r++) {
        matrix[r] = []
        for (let c = 0; c < n; c++) {
            matrix[r][c] = 0
        }
    }

    const maxVal: number = n * n

    let maxR: number = n
    let maxC: number = n
    let minR: number = 0
    let minC: number = 0
    let r: number = 0
    let c: number = 0
    let direction: number = 0 // 0 = right, 1 = down, 2 = left, 3 = up

    let val: number = 1
    while (val <= maxVal) {
        matrix[r][c] = val++

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

    return matrix
};

console.log(generateMatrix(1))
// Output: [[1]]

console.log(generateMatrix(2))
// Output: [[1,2],[4,3]]

console.log(generateMatrix(3))
// Output: [[1,2,3],[8,9,4],[7,6,5]]

console.log(generateMatrix(4))
// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9  8  7
