// 77. Combinations

// Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

// You may return the answer in any order.


// Example 1:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]


// Constraints:

// 1 <= n <= 20
// 1 <= k <= n

function combine(n: number, k: number): number[][] {
    let nums: number[] = []
    for (let i = 1; i <= n; i++) {
        nums.push(i)
    }

    if (n == k) { return [nums] }
    if (k == 1) { return nums.map(x => [x]) }

    let combos: number[][] = []

    return combos
};

console.log(combine(4,2))
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

console.log(combine(1,1))
// Output: [[1]]

console.log(combine(13,1))
