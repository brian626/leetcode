// 540. Single Element in a Sorted Array

// You are given a sorted array consisting of only integers where every element
// appears exactly twice, except for one element which appears exactly once.
// Find this single element that appears only once.

// Follow up: Your solution should run in O(log n) time and O(1) space.


// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10


// Constraints:

// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^5

function singleNonDuplicate(nums: number[]): number {
    if (nums.length === 1) { return nums[0] }

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i+1]) {
            return nums[i]
        }
    }

    return nums[nums.length - 1]
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])) // Output: 2
console.log(singleNonDuplicate([3,3,7,7,10,11,11])) // Output: 10
console.log(singleNonDuplicate([3,3,7,7,10,10,11])) // Output: 11
console.log(singleNonDuplicate([1,3,3,7,7,10,10])) // Output: 1
