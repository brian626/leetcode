// 279. Perfect Squares

// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it
// is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect
// squares while 3 and 11 are not.


// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.


// Constraints:

// 1 <= n <= 10^4

function numSquares(n: number): number {
    const perfectSquares: number[] = []
    for (let i = 100; i >= 1; i--) { perfectSquares.push(i*i) }

    // If n is a multiple of a perfect square, then return the multiplier.
    for (let i = 0; i < perfectSquares.length - 1; i++) {
        if (n % perfectSquares[i] === 0) {
            return n / perfectSquares[i]
        }
    }

    // Otherwise, use a greedy algorithm.
    let numSquares: number = 0
    let minI: number = 0;
    while (n > 0) {
        console.log(n)
        for (let i = minI; i < perfectSquares.length; i++) {
            if (perfectSquares[i] * 2 > n) {
                console.log(`  skipping ${perfectSquares[i]}`)
                continue
            }

            if (perfectSquares[i] <= n) {
                console.log(`  subtracting ${perfectSquares[i]}`)
                numSquares++
                n -= perfectSquares[i]
                minI = i
                break
            }
        }
    }

    return numSquares
};

console.log(numSquares(19))
