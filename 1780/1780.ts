// 1780. Check if Number is a Sum of Powers of Three

// Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

// An integer y is a power of three if there exists an integer x such that y == 3^x.


// Example 1:

// Input: n = 12
// Output: true
// Explanation: 12 = 3^1 + 3^2

// Example 2:

// Input: n = 91
// Output: true
// Explanation: 91 = 3^0 + 3^2 + 3^4

// Example 3:

// Input: n = 21
// Output: false


// Constraints:

// 1 <= n <= 10^7

// 3^14 (4,782,969) is the biggest power of three that is less than 10^7
const POWERS_OF_THREE_1780 = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969].reverse()

function checkPowersOfThree(n: number): boolean {
    let biggestPowerOfThree = 0

    while (biggestPowerOfThree <= 14 && n >= 0) {
        if (n >= POWERS_OF_THREE[biggestPowerOfThree]) {
            n -= POWERS_OF_THREE[biggestPowerOfThree]
        }

        biggestPowerOfThree++
    }

    return n == 0
};

// for (let i = 0; i < 20; i++) {
//     console.log(`3^${i} = ${Math.pow(3,i)}`)
// }

console.log(checkPowersOfThree(12)) // Output: true
console.log(checkPowersOfThree(91)) // Output: true
console.log(checkPowersOfThree(21)) // Output: false
console.log(checkPowersOfThree(33)) // Output: true
