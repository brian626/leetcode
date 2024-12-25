// 231. Power of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2^x.


// Example 1:

// Input: n = 1
// Output: true
// Explanation: 2^0 = 1

// Example 2:

// Input: n = 16
// Output: true
// Explanation: 2^4 = 16

// Example 3:

// Input: n = 3
// Output: false

// Example 4:

// Input: n = 4
// Output: true

// Example 5:

// Input: n = 5
// Output: false


// Constraints:

// -2^31 <= n <= 2^31 - 1


// Follow up: Could you solve it without loops/recursion?
function bitCount(n: number): number {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}

function isPowerOfTwo(n: number): boolean {
    const POWERS_OF_TWO = 0b1111111111111111111111111111111
    let ret = true
    if (n < 0) {
        ret = false
    }
    else if (bitCount(n) != 1) {
        ret = false
    }
    else {
        ret = ((POWERS_OF_TWO & n) === n)
    }

    return ret
};


for (let i = 0; i < Math.pow(2,31); i++) {
    if (isPowerOfTwo(i)) {
        console.log(i)
    }
}
