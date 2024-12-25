// 75. Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that
// objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.


// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Example 3:

// Input: nums = [0]
// Output: [0]

// Example 4:

// Input: nums = [1]
// Output: [1]


// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is 0, 1, or 2.

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    if (nums.length == 1) { return }

    let done: boolean = false
    while (!done) {
        done = true
        let i: number = 0

        while (i < nums.length) {
            let j: number = i + 1
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                done = false
            }
            else {
                i++
            }
        }
    }
};

let nums_75: number[] = []

// nums_75 = [2,0,2,1,1,0]
// sortColors(nums_75)
// console.log(nums_75)
// Output: [0,0,1,1,2,2]

// nums_75 = [2,0,1]
// sortColors(nums_75)
// console.log(nums_75)
// Output: [0,1,2]

// nums_75 = [0]
// sortColors(nums_75)
// console.log(nums_75)
// Output: [0]

// nums_75 = [1]
// sortColors(nums_75)
// console.log(nums_75)
// Output: [1]

nums_75 = [
    2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,
    2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,
    2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,
    2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,
    2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1,2,0,2,1,1,0,2,0,2,1
]
sortColors(nums_75)
console.log(nums_75)
