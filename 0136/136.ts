// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:

// Input: nums = [1]
// Output: 1


// Constraints:

// 1 <= nums.length <= 3 * 10^4
// -3 * 10^4 <= nums[i] <= 3 * 10^4
// Each element in the array appears twice except for one element which appears only once.

function singleNumber(nums: number[]): number {
    if (nums.length == 1) { return nums[0] }

    nums.sort((a,b) => a - b)
    let i: number = 0
    while (i < nums.length) {
        if (nums[i] != nums[i+1]) { return nums[i] }
        i += 2
    }
};

console.log(singleNumber([2,2,1]))
// Output: 1

console.log(singleNumber([4,1,2,1,2]))
// Output: 4

console.log(singleNumber([1]))
// Output: 1

console.log(singleNumber([1,2,2,4,4]))
console.log(singleNumber([1,1,2,4,4]))
console.log(singleNumber([1,1,2,2,4]))
