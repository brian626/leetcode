// 263. Ugly Number

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.


// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3

// Example 2:

// Input: n = 8
// Output: true
// Explanation: 8 = 2 × 2 × 2

// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

// Example 4:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.


// Constraints:

// -2^31 <= n <= 2^31 - 1

function isUgly(n: number): boolean {
    if (n < 1) { return false }

    while (n % 2 === 0) { n = n / 2 }
    while (n % 3 === 0) { n = n / 3 }
    while (n % 5 === 0) { n = n / 5 }

    return n === 1
};

console.log(isUgly(6)) // Output: true
console.log(isUgly(8)) // Output: true
console.log(isUgly(14)) // Output: false
console.log(isUgly(1)) // Output: true

// console.log(isUgly(-6)) // Output: true
// console.log(isUgly(-8)) // Output: true
// console.log(isUgly(-14)) // Output: false
// console.log(isUgly(-1)) // Output: true

console.log(isUgly(97)) // Output: false
console.log(isUgly(98)) // Output: false
console.log(isUgly(99)) // Output: false
console.log(isUgly(214797179)) // Output: false
