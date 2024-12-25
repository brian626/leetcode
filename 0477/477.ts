// 477. Total Hamming Distance

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.


// Example 1:

// Input: nums = [4,14,2]
// Output: 6
// Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
// showing the four bits relevant in this case).
// The answer will be:
// HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

// Example 2:

// Input: nums = [4,14,4]
// Output: 4


// Constraints:

// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^9

function bitCount(n: number): number {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}

function hammingDistance(x: number, y: number): number {
    return bitCount(x ^ y)
};

function totalHammingDistance(nums: number[]): number {
    let total: number = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            total += hammingDistance(nums[i], nums[j])
        }
    }

    return total
};


console.log(totalHammingDistance([4,14,2])) // Output: 6
console.log(totalHammingDistance([4,14,4])) // Output: 4
