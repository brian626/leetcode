// 342. Power of Four

// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4^x.


// Example 1:

// Input: n = 16
// Output: true

// Example 2:

// Input: n = 5
// Output: false

// Example 3:

// Input: n = 1
// Output: true


// Constraints:

// -2^31 <= n <= 2^31 - 1


// Follow up: Could you solve it without loops/recursion?

function bitCount(n: number): number {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}

function isPowerOfFour(n: number): boolean {
    const POWERS_OF_FOUR = 0b1010101010101010101010101010101

    let ret = true
    if (n < 1) {
        ret = false
    }
    else if (bitCount(n) != 1) {
        ret = false
    }
    else {
        ret = (POWERS_OF_FOUR & n) === n
    }

    return ret
};
