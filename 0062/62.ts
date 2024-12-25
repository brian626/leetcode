// 62. Unique Paths

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach
// the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


// Example 1:

// Input: m = 3, n = 7
// Output: 28

// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Example 3:

// Input: m = 7, n = 3
// Output: 28

// Example 4:

// Input: m = 3, n = 3
// Output: 6


// Constraints:

// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 10^9.

// 3: 1 3 6 10 15 21
// 3,1: 1
// 3,2: 3
// 3,3: n => 4, 4*3/2 = 12/2 = 6
// 3,4: n => 5, 5*4/2 = 20/2 = 10
// 3,5: n => 6, 6*5/2 = 30/2 = 15
// 3,6: n => 7, 7*6/2 = 42/2 = 21

// 4: 1 4 10 20 35 56
// 4,1: n => 3, 3*2*1/6 = 6/6 = 1
// 4,2: n => 4, 4*3*2/6 = 24/6 = 4
// 4,3: n => 5, 5*4*3/6 = 60/6 = 10
// 4,4: 4*5*6/6 = 120/6 = 20
// 4,5: 5*6*7/6 = 210/6 = 35

// 5: 1 5 15 35 70 126
// 5,1: n => 4, 4*3*2*1/24 = 24/24  = 1
// 5,2: n => 5, 5*4*3*2/24 = 120/24 = 5
// 5,3: n => 6, 6*5*4*3/24 = 360/24 = 15

// m = 1:                      1
// m = 2:                      n/1
// m = 3: triangular numbers   n*(n+1)/2
// m = 4: tetrahedral numbers  n*(n+1)*(n+2)/6
// m = 5:                      n*(n-1)*(n-2)*(n-3)/24
// m = 6:                      n*(n-1)*(n-2)*(n-3)*(n-4)/120

function factorial(n: number): number {
    if (n == 1) { return 1 }
    else { return n * factorial(n-1) }
}

function uniquePaths(m: number, n: number): number {
    [m, n] = [Math.min(m, n), Math.max(m, n)]

    if (m == 1) { return m }
    if (m == 2) { return n }

    const amountToAddToN = m - 2
    n += amountToAddToN
    const amountToDivideBy = factorial(amountToAddToN + 1)

    let paths: number = 1
    for (let i = 0; i <= amountToAddToN; i++) {
        paths *= n
        n -= 1
    }

    paths /= amountToDivideBy

    return paths
};

console.log(uniquePaths(3,7))
// Output: 28

console.log(uniquePaths(3,2))
// Output: 3

console.log(uniquePaths(7,3))
// Output: 28

console.log(uniquePaths(3,3))
// Output: 6
