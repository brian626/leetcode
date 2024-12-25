// 69. Sqrt(x)

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.


// Example 1:

// Input: x = 4
// Output: 2

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


// Constraints:

// 0 <= x <= 2^31 - 1

function mySqrt(x: number): number {
    if (x == 0) { return 0 }
    if (x == 1) { return 1 }

    let root: number = 1

    while (root*root <= x) { root++ }

    return root - 1
};

// console.log(mySqrt(0)) // 0
// console.log(mySqrt(1)) // 1
// console.log(mySqrt(4)) // 2
// console.log(mySqrt(8)) // 2
// console.log(mySqrt(9)) // 3
// console.log(mySqrt(10)) // 3
// console.log(mySqrt(99)) // 9
// console.log(mySqrt(100)) // 10

for (let i = 0; i < Math.pow(2,31); i++) {
    const root = Math.floor(Math.sqrt(i))
    const myRoot = mySqrt(i)

    if (root != myRoot) { console.log(`uh oh: ${i}`) }
}
