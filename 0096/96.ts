// 96. Unique Binary Search Trees

// Given an integer n, return the number of structurally unique BST's (binary search trees)
//  which has exactly n nodes of unique values from 1 to n.


// Example 1:

// Input: n = 3
// Output: 5

// Example 2:

// Input: n = 1
// Output: 1


// Constraints:

// 1 <= n <= 19

function factorial(n: number): number {
    return (n == 1) ? 1 : factorial(n - 1) * n
}

function numTrees(n: number): number {
    return Math.round(factorial(2 * n) / (factorial(n) * factorial(n+1)))
};

for (let i = 1; i < 20; i++) {
    console.log(`${i}:   ${numTrees(i)}`)
}
