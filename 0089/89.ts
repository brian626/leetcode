// 89. Gray Code

// The gray code is a binary numeral system where two successive values differ in only one bit.

// Given an integer n representing the total number of bits in the code, return any sequence of gray code.

// A gray code sequence must begin with 0.


// Example 1:

// Input: n = 2
// Output: [0,1,3,2]
// Explanation:
// 00 - 0
// 01 - 1
// 11 - 3
// 10 - 2
// [0,2,3,1] is also a valid gray code sequence.
// 00 - 0
// 10 - 2
// 11 - 3
// 01 - 1

// Example 2:

// Input: n = 1
// Output: [0,1]


// Constraints:

// 1 <= n <= 16

function grayCode(n: number): number[] {
    // The LSB follows a 2-on, 2-off pattern.
    // The next digit follows a 4-on, 4-off pattern.
    // The nth digit follows a pattern of 2^n on, 2^n off.
    let output: number[] = []
    let index: number = 0

    let flipBit0: boolean = false

    do {
        let bits: number[] = []
        for (let i = 0; i < n; i++) {
            bits[i] = 0
        }

        for (let i = 1; i <= n; i++) {
            if (index % (Math.pow(2, i + 1)) >= Math.pow(2, i - 1) &&
                index % (Math.pow(2, i + 1)) <  Math.pow(2, i - 1) + Math.pow(2, i)) {
                    bits[n-i] = 1
                }
        }

        output.push(parseInt(bits.join(""), 2))

    } while (++index < Math.pow(2,n))

    return output
};

console.log(grayCode(1))
// Output: [0,1]

console.log(grayCode(2))
// Output: [0,1,3,2]

console.log(grayCode(3))
// Output: [0,1,3,2,6,7,5,4]

console.log(grayCode(4))
// Output: [0,1,3,2,6,7,5,4,12,13,15,14,10,11,9,8]

console.log(grayCode(16))
