// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).


// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25


// Constraints:

// -100.0 < x < 100.0
// -2^31 <= n <= 2^31-1
// -10^4 <= x^n <= 10^4

function myPow(x: number, n: number): number {
    if (x === 0)          { return 0 }
    if (Math.abs(x) == 1) { return (n % 2 == 0) ? 1 : -1 }

    let powerIsNegative = (n < 0)
    if (powerIsNegative) { n *= -1 }

    let rv = 1
    for (let i = 0; i < n; i++) {
        rv *= x
    }

    if (powerIsNegative) {
        rv = 1 / rv
    }

    return rv
};

console.log(myPow(2.00000, 10)) // Output: 1024.00000

console.log(myPow(2.10000, 3)) // Output: 9.26100

console.log(myPow(2.00000, -2)) // Output: 0.25000

console.log(myPow(-1.00000, 2147483647)) // Output: -1.00000
