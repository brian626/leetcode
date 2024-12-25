// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes
// the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21

// Example 4:

// Input: x = 0
// Output: 0


// Constraints:

// -2^31 <= x <= 2^31 - 1
// -2147483648 <= x <= 2147483647

function reverse(x: number): number {
    let mult = (x < 0) ? -1 : 1
    x *= mult

    const xStr = x.toString()
    let xRev = xStr.split('').reverse().join('')
    if (xRev.length >= 10) {
        const maxValStr = (mult == -1) ? "2147483648" : "2147483647"
        if (xRev > maxValStr) {
            xRev = "0"
        }
    }

    let ret = parseInt(xRev, 10)
    if (ret != 0) {
        ret *= mult
    }

    return ret
};

// console.log(reverse(123)) // Output: 321
// console.log(reverse(-123)) // Output: -321
// console.log(reverse(120)) // Output: 21
// console.log(reverse(0)) // Output: 0
// console.log(reverse(1234)) // Output: 4321
// console.log(reverse(12345)) // Output: 54321
// console.log(reverse(-2147483648)) // Output: 0
