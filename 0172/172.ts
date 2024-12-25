// 172. Factorial Trailing Zeroes

// Given an integer n, return the number of trailing zeroes in n!.

// Follow up: Could you write a solution that works in logarithmic time complexity?


// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Example 3:

// Input: n = 0
// Output: 0


// Constraints:

// 0 <= n <= 10^4 = 10,000



// The first zero comes at 5!, when 4! (24) is multiplied by 5 to get 120.
// Multiplying by 10 adds a zero, obviously. Up to 24!, this pattern holds -
// every five numbers, an extra zero is added.
//
// However, an extra zero is added at 25!, as well as at 50!. This suggests that
// the additional factor of 5 or 10 modifies the pattern.
//
// Unfortunately the pattern is not that consistent - at 200!, there's another extra zero
// added beyond the one for being a factor of 5 or 10.
//
// Factoring non-prime numbers up to 25...
//
// 4: 2 * 2
// 6: 2 * 3
// 8: 2 * 2 * 2
// 9: 3 * 3
// 10: 2 * 5
// 12: 2 * 2 * 3
// 14: 2 * 7
// 15: 3 * 5
// 16: 2 * 2 * 2 * 2
// 18: 2 * 3 * 3
// 20: 2 * 2 * 5
// 21: 3 * 7
// 22: 2 * 11
// 24: 2 * 2 * 2 * 3
// 25: 5 * 5
// 26: 2 * 13
// 27: 3 * 3 * 3
// 28: 2 * 2 * 7
// 30: 2 * 3 * 5
// 32: 2 * 2 * 2 * 2 * 2
// 34: 2 * 17
// 35: 5 * 7
// 36: 2 * 2 * 3 * 3
// 38: 2 * 19
// 39: 3 * 13
// 40: 2 * 2 * 2 * 5
// 42: 2 * 3 * 7
// 44: 2 * 2 * 11
// 45: 3 * 3 * 5
// 46: 2 * 23
// 48: 2 * 2 * 2 * 2 * 3
// 49: 7 * 7
// 50: 2 * 5 * 5
// ...
// 200: 2 * 2 * 2 * 5 * 5

function trailingZeroes(n: number): number {
    let totalZeroes = 0

    for (let i = 0; i <= n; i++) {
        let factorable = i
        let fives = 0

        while ((factorable > 1) && ((factorable % 5) == 0)) {
            fives += 1
            factorable /= 5
        }

        totalZeroes += fives
    }

    return totalZeroes
};

console.log(trailingZeroes(0)) // 0
console.log(trailingZeroes(3)) // 0
console.log(trailingZeroes(5)) // 1
console.log(trailingZeroes(20)) // 4
console.log(trailingZeroes(27)) // 6
console.log(trailingZeroes(31)) // 7
console.log(trailingZeroes(48)) // 10
console.log(trailingZeroes(53)) // 12
console.log(trailingZeroes(55)) // 13
console.log(trailingZeroes(200)) // 49
