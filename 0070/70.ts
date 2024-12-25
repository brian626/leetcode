// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:

// 1 <= n <= 45

function climbStairs(n: number): number {
    let fibMap: Map<number, number> = new Map<number, number>()
    fibMap.set(0, 1)
    fibMap.set(1, 1)

    for (let i = 2; i <= n; i++) {
        const fibMinus2: number = fibMap.get(i - 2)
        const fibMinus1: number = fibMap.get(i - 1)
        fibMap.set(i, fibMinus1 + fibMinus2)
    }

    return fibMap.get(n)
};

console.log(climbStairs(5))
console.log(climbStairs(6))
console.log(climbStairs(45))

// n    ways
// --   ----
// 1    1 => 1
// 2    1+1, 2 => 2
// 3    1+1+1, 1+2, 2+1 => 3
// 4    1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 => 5
// 5    1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+2+2, 2+1+2, 2+2+1 => 8
