// 476. Number Complement

// Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.


// Example 1:

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:

// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.


// Constraints:

// The given integer num is guaranteed to fit within the range of a 32-bit signed integer.
// num >= 1
// You could assume no leading zero bit in the integer’s binary representation.
// This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

function findComplement(num: number): number {
    const numBits = Math.floor(Math.log2(num))
    let xorValue = 1
    for (let i = 0; i < numBits; i++) {
        xorValue = xorValue << 1
        xorValue += 1
    }

    // console.log(`num: ${num.toString(2)} ^ xorValue: ${xorValue.toString(2)} = ${(num ^ xorValue).toString(2)}`)
    return num ^ xorValue
};


console.log(findComplement(5))
console.log(findComplement(1))
console.log(findComplement(2))
