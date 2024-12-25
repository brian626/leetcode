// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.


// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Example 3:

// Input: matrix = [[1]]
// Output: [[1]]

// Example 4:

// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]


// Constraints:

// matrix.length == n
// matrix[i].length == n
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

/**
 Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix: number[][]): void {
    // Unroll the matrix
    let unrolled: number[] = []
    let N: number = matrix.length
    const unrolledLength: number = N * N
    let r: number = 0
    let c: number = 0
    let direction: number = 0 // 0 = right, 1 = down, 2 = left, 3 = up
    while (unrolled.length < unrolledLength) {
        console.log(`pushing matrix([${r}][${c}])`)
        unrolled.push(matrix[r][c])

        if (direction == 0) {
            if (c < N - 1) { c += 1 }
            else { direction = 1 }
        }
        if (direction == 1) {
            if (r < N - 1) { r += 1 }
            else { direction = 2 }
        }
        if (direction == 2) {
            if (c > 0) { c -= 1 }
            else { direction = 3 }
        }
        if (direction == 3) {
            if (r > 1) { r -= 1 }
            else { N -= 1; c += 1; direction = 0 }
        }
    }

    console.log(unrolled)

    // Shift the unrolled matrix
    N = matrix.length
    if (N % 2 == 0) {
        for (let i = 0; i < N - 1; i++) {
            let temp: number = unrolled.pop()
            unrolled.unshift(temp)
        }
    }
    else {
        // In an odd-sized matrix, the center square does not move
        let center: number = unrolled.pop()
        for (let i = 0; i < N - 1; i++) {
            let temp: number = unrolled.pop()
            unrolled.unshift(temp)
        }
        unrolled.push(center)
    }

    // Re-roll the matrix
    // matrix.length = 0
    r = 0
    c = 0
    direction = 0
    unrolled.forEach(n => {
        matrix[r][c] = n

        if (direction == 0) {
            if (c < N - 1) { c += 1 }
            else { direction = 1 }
        }
        if (direction == 1) {
            if (r < N - 1) { r += 1 }
            else { direction = 2 }
        }
        if (direction == 2) {
            if (c > 0) { c -= 1 }
            else { direction = 3 }
        }
        if (direction == 3) {
            if (r > 1) { r -= 1 }
            else { N -= 1; c += 1; direction = 0 }
        }
    })
};

let matrix: number[][]

// matrix = [[1,2,3],[4,5,6],[7,8,9]]
// rotate(matrix)
// console.log(matrix)
// Output: [[7,4,1],[8,5,2],[9,6,3]]

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix)
console.log(matrix)
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
