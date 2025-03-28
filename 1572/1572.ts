// 1572. Matrix Diagonal Sum

// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the
// elements on the secondary diagonal that are not part of the primary diagonal.


// Example 1:

// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8

// Example 3:

// Input: mat = [[5]]
// Output: 5


// Constraints:

// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100

function diagonalSum(mat: number[][]): number {
    const n = mat.length
    let sum = 0

    for (let i = 0; i < n; i++) {
        sum += mat[i][i] // NW -> SE
        sum += mat[i][n - i - 1] // NE -> SW
    }

    if (n % 2 != 0) {
        // odd, so only count center element once
        const center = Math.floor(n/2)
        sum -= mat[center][center]
    }

    return sum
};

// console.log(diagonalSum([[1,2,3],
//                          [4,5,6],
//                          [7,8,9]])) // Output: 25

// console.log(diagonalSum([[1,1,1,1],
//                          [1,1,1,1],
//                          [1,1,1,1],
//                          [1,1,1,1]])) // Output: 8

// console.log(diagonalSum([[5]])) // Output: 5
