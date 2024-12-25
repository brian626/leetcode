// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]


// Constraints:

// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1


// Follow up: Could you minimize the total number of operations done?

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if (nums.length < 2) { return }

    let i: number = 0
    let numShifts: number = 0
    while (i < (nums.length - numShifts)) {
        if (nums[i] == 0) {
            nums.splice(i,1)
            nums.push(0)
            numShifts++
        }
        else {
            i++
        }
    }
};

let nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums) // Output: [1,3,12,0,0]

nums = [0]
moveZeroes(nums)
console.log(nums) // Output: [0]

nums = [0,0]
moveZeroes(nums)
console.log(nums) // Output: [0,0]

nums = [0,0,0]
moveZeroes(nums)
console.log(nums) // Output: [0,0,0]

nums = [1,0,0,0]
moveZeroes(nums)
console.log(nums) // Output: [1,0,0,0]

nums = [0,1,0,0]
moveZeroes(nums)
console.log(nums) // Output: [1,0,0,0]

nums = [0,0,1,0]
moveZeroes(nums)
console.log(nums) // Output: [1,0,0,0]

nums = [0,0,0,1]
moveZeroes(nums)
console.log(nums) // Output: [1,0,0,0]
