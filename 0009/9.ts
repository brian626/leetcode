// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.


// Example 1:

// Input: x = 121
// Output: true

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:

// Input: x = -101
// Output: false


// Constraints:

// -2^31 <= x <= 2^31 - 1


// Follow up: Could you solve it without converting the integer to a string?

function isPalindrome(x: number): boolean {
    let ret = true

    if (x < 0) {
        ret = false
    }

    let digit = 0
    let len = Math.floor(Math.log10(x)) + 1
    for (let i = 0; i < len / 2; i++) {
        const firstDigit = (Math.floor(x / Math.pow(10, len - i - 1))) % 10
        const secondDigit = Math.floor(x / Math.pow(10, i)) % 10
        // console.log(`x = ${x}, len = ${len}, i = ${i}`)
        // console.log(`first digit  = (Math.floor(${x} / Math.pow(10, ${len - 1 - 1}))) % 10 = Math.floor(${x / Math.pow(10, len - i - 1)}) % 10 = ${firstDigit}`)
        // console.log(`second digit = Math.floor(${x} / (Math.pow(10, ${i})) % 10 = Math.floor(${x} % ${Math.pow(10, i)}) % 10 = ${secondDigit}`)
        if (firstDigit != secondDigit) {
            ret = false
            break
        }
    }

    return ret
};

// console.log(Math.floor(Math.log10(1)) + 1)    // 1
// console.log(Math.floor(Math.log10(10)) + 1)   // 2
// console.log(Math.floor(Math.log10(11)) + 1)   // 2
// console.log(Math.floor(Math.log10(99)) + 1)   // 2
// console.log(Math.floor(Math.log10(100)) + 1)  // 3
// console.log(Math.floor(Math.log10(101)) + 1)  // 3
// console.log(Math.floor(Math.log10(999)) + 1)  // 3
// console.log(Math.floor(Math.log10(1000)) + 1) // 4
// console.log(isPalindrome(121))   // Output: true
// console.log(isPalindrome(-121))  // Output: false
// console.log(isPalindrome(10))    // Output: false
// console.log(isPalindrome(-101))  // Output: false
// console.log(isPalindrome(1234))  // Output: false
// console.log(isPalindrome(1221))  // Output: true
// console.log(isPalindrome(12345)) // Output: false
// console.log(isPalindrome(12321)) // Output: true
