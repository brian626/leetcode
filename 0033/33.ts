// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is rotated at an unknown pivot index k
// (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ...,
// nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7]
// might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the rotation and an integer target, return the index of
// target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:

// Input: nums = [1], target = 0
// Output: -1


// Constraints:

// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is guaranteed to be rotated at some pivot.
// -10^4 <= target <= 10^4

function search(nums: number[], target: number): number {
    let lowIndex: number = 0
    let highIndex: number = nums.length - 1
    let curIndex = Math.floor((highIndex - lowIndex) / 2)

    while (true) {
        log(`start of loop - low: ${lowIndex}, high: ${highIndex}, cur: ${curIndex}`)

        if (target == nums[curIndex])       { return curIndex }
        else if (target == nums[lowIndex])  { return lowIndex }
        else if (target == nums[highIndex]) { return highIndex }
        else if (target < nums[curIndex] && target < nums[lowIndex])   { log(`case a`); lowIndex = curIndex }
        else if (target > nums[curIndex] && target > nums[highIndex])  { log(`case b`); highIndex = curIndex }
        else if (target < nums[curIndex])   { log(`case c`); highIndex = curIndex }
        else if (target > nums[curIndex])   { log(`case d`); lowIndex = curIndex }

        if (lowIndex >= highIndex) { break }

        curIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2)
        log(`end of loop - low: ${lowIndex}, high: ${highIndex}, cur: ${curIndex}`)
    }

    return -1
};

const DEBUG_33: boolean = true
function log(s: string): void {
    if (DEBUG_33) {
        console.log(s)
    }
}

// console.log(search([4,5,6,7,0,1,2], 0)) // Output: 4
// console.log(search([4,5,6,7,0,1,2], 3)) // Output: -1
// console.log(search([1], 0)) // Output: -1
// console.log(search([1], 1)) // Output: 0
// console.log(search([1,3], 1)) // 0
// console.log(search([1,3], 3)) // 1
// console.log(search([1,3], 0)) // -1
// console.log(search([1,3], 2)) // -1
// console.log(search([1,3], 4)) // -1
// console.log(search([1,3,5], 1)) // 0
// console.log(search([4,5,6,7,0,1,2], 5)) // 1
// console.log(search([4,5,6,7,0,1,2], 1)) // 5
console.log(search([4,5,6,7,8,1,2,3], 8)) // 4
