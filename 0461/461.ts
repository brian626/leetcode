// 461. Hamming Distance

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.


// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// Example 2:

// Input: x = 3, y = 1
// Output: 1


// Constraints:

// 0 <= x, y <= 2^31 - 1

function bitCount(n: number): number {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}

function hammingDistance(x: number, y: number): number {
    return bitCount(x ^ y)
};

// console.log(hammingDistance(0b0001, 0b0100))
// console.log(hammingDistance(1, 4))
// console.log(hammingDistance(3, 1))
