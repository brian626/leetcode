// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in
// the array such that nums[i] == nums[j] and abs(i - j) <= k.


// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


// Constraints:

// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// 0 <= k <= 10^5

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const uniqueNums: number[] = Array.from(new Set(nums))

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true
            }
        }
    }

    return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3)) // Output: true
console.log(containsNearbyDuplicate([1,0,1,1], 1)) // Output: true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)) // Output: false
