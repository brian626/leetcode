// 1800. Maximum Ascending Subarray Sum

// Given an array of positive integers nums, return the maximum possible sum of an
// ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i
// where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.


// Example 1:

// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

// Example 2:

// Input: nums = [10,20,30,40,50]
// Output: 150
// Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.

// Example 3:

// Input: nums = [12,17,15,13,10,11,12]
// Output: 33
// Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.

// Example 4:

// Input: nums = [100,10,1]
// Output: 100


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

function maxAscendingSum(nums: number[]): number {
    if (nums.length == 1) {
        return nums[0]
    }

    let maxSum = 0
    let curSum = nums[0]
    let lastNum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        console.log(`comparing ${lastNum} and ${nums[i]}`)
        if (nums[i] <= lastNum) {
            maxSum = Math.max(maxSum, curSum)
            console.log(`  updated maxSum to ${maxSum}`)
            curSum = nums[i]
        }
        else {
            curSum += nums[i]
            console.log(`  added ${nums[i]} to curSum, now == ${curSum}`)
        }

        lastNum = nums[i]
    }

    return Math.max(maxSum, curSum)
};

// console.log(maxAscendingSum([10,20,30,5,10,50])) // Output: 65
// console.log(maxAscendingSum([10,20,30,40,50])) // Output: 150
// console.log(maxAscendingSum([12,17,15,13,10,11,12])) // Output: 33
// console.log(maxAscendingSum([100,10,1])) // Output: 100
// console.log(maxAscendingSum([3,6,10,1,8,9,9,8,9])) // Output: 19
