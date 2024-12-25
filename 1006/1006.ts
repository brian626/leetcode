// 1006. Clumsy Factorial

// Normally, the factorial of a positive integer n is the product of all positive integers
// less than or equal to n.  For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

// We instead make a clumsy factorial: using the integers in decreasing order, we swap out
// the multiply operations for a fixed rotation of operations: multiply (*), divide (/),
// add (+) and subtract (-) in this order.

// For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.  However, these operations
// are still applied using the usual order of operations of arithmetic: we do all multiplication
// and division steps before any addition or subtraction steps, and multiplication and division
// steps are processed left to right.

// Additionally, the division that we use is floor division such that 10 * 9 / 8 equals 11.
// This guarantees the result is an integer.

// Implement the clumsy function as defined above: given an integer N, it returns the clumsy factorial of N.


// Example 1:

// Input: 4
// Output: 7
// Explanation: 7 = 4 * 3 / 2 + 1

// Example 2:

// Input: 10
// Output: 12
// Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
//                 = (90 / 8) + 7   - (30 / 4) + 3  - 2
//                 = 11       + 7   - 7        + 3  - 2
//                 = 12

// Note:

// 1 <= N <= 10000
// -2^31 <= answer <= 2^31 - 1  (The answer is guaranteed to fit within a 32-bit integer.)

function calculate(N: number, flipSign: boolean): number {
    if (N == 1) { return flipSign ? 1 : -1 }
    if (N == 2) { return flipSign ? 2 : 2 }
    if (N == 3) { return flipSign ? 6 : 6 }
    if (N == 4) { return flipSign ? 7 : -5 }

// clumsy(8) =  ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6) + x-7
//           =  ((8 * 7  ) / 6)   + 5   - ((4   * 3  ) / 2  ) + 1
//           =    9               + 5   -   6                 + 1
//           =    9
// clumsy(9)   = ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6) + x-7 - x-8
//             = ((9 * 8  ) / 7  ) + 6   - ((5 *   4  ) / 3  ) + 2   - 1
//             = 10                + 6   - 6                   + 2   - 1
//             = 11

    if (flipSign) {
        let firstPart = Math.floor((N * (N-1)) / (N-2)) + (N-3)
        // let secondPart = calculate(N-4, !flipSign)
        console.log(`flipSign is true, returning ${firstPart} + calculate(${N-4}, ${!flipSign})`)
        return firstPart + calculate(N-4, !flipSign)
    }
    else {
        let firstPart = Math.floor((N * (N-1)) / (N-2)) + (N-3)
        // let secondPart = calculate(N-4, !flipSign)
        console.log(`flipSign is false, returning ${firstPart} - calculate(${N-4}, ${!flipSign})`)
        return firstPart - calculate(N-4, !flipSign)
    }
}

function clumsy(N: number): number {
    if (N == 1) { return 1 }
    if (N == 2) { return 2 }
    if (N == 3) { return 6 }
    if (N == 4) { return 7 }
    // if (N == 5) { return 7 }
    // if (N == 6) { return 8 }
    // if (N == 7) { return 6 }
    // if (N == 8) { return 9 }

    // console.log(`clumsy(${N}) returning ${Math.floor((N * (N-1)) / (N-2)) + (N-3)} - clumsy(${N-4})`)
    // let operation = 0 // 0 = *, 1 = /, 2 = +, 3 = -
    // let result = 0

    // can combine with clumsy(N-4) but have to flip the signs

    return calculate(N, true)
};

// clumsy(1)   =   x
// clumsy(5)   = ((x * x-1) / x-2) + x-3 - x-4
//
//             = 7
// clumsy(9)   = ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6) + x-7 - x-8
//             = ((9 * 8  ) / 7  ) + 6   - ((5 *   4  ) / 3  ) + 2   - 1
//             = 10                + 6   - 6                   + 2   - 1
//             = 11
// clumsy(13)  = ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6) + x-7 - ((x-8 * x-9) / x-10) + x-11 - x-12

// clumsy(2) =    x * x-1
// clumsy(6) =  ((x * x-1) / x-2) + x-3 -  (x-4 * x-5)
//           =  ((6 * 5)   / 4  ) + 3   -  (2 * 1)
//           =    7               + 3   -  2
//           =    8
// clumsy(10) = ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6) + x-7 - (x-8 * x-9)
//            = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
//            = 11 + 7 - (7 - 3 + 2)

// clumsy(3) =  ((x * x-1) / x-2)
// clumsy(7) =  ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6)
//           =  ((7 * 6 )) / 5  ) + 4   - ((3   * 2 )  / 1)
//           =    8               + 4   - 6
//           =    6
// clumsy(11) = ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6) + x-7 - ((x-8 * x-9) / x-10)

// clumsy(4) =  ((x * x-1) / x-2) + x-3
// clumsy(8) =  ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6) + x-7
//           =  ((8 * 7  ) / 6)   + 5   - ((4   * 3  ) / 2  ) + 1
//           =    9               + 5   -   6                 + 1
//           =    9
// clumsy(12) = ((x * x-1) / x-2) + x-3 - ((x-4 * x-5) / x-6) + x-7 - ((x-8 * x-9) / x-10) + x-11

// console.log(clumsy(1)) // Output: 1
// console.log(clumsy(2)) // Output: 2
// console.log(clumsy(3)) // Output: 6
// console.log(clumsy(4)) // Output: 7
// console.log(clumsy(5)) // Output: 7
// console.log(clumsy(6)) // Output: 8
// console.log(clumsy(7)) // Output: 6
// console.log(clumsy(8)) // Output: 9
console.log(clumsy(9)) // Output: 11
// console.log(clumsy(10)) // Output: 12
