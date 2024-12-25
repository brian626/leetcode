// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average
// value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000


// Constraints:

// n == nums.length
// 1 <= k <= n <= 10^5
// -10^4 <= nums[i] <= 10^4

function findMaxAverage(nums: number[], k: number): number {
    let movingSum = 0

    for (let i = 0; i < k; i++) { movingSum += nums[i] }

    let maxAverage = movingSum / k

    for (let i = 0; i < nums.length - k; i++) {
        console.log(`subtracting ${nums[i]} and adding ${nums[i+k]}`)
        movingSum -= nums[i]
        movingSum += nums[i + k]

        if ((movingSum/k) > maxAverage) {
            maxAverage = movingSum/k
            console.log(`updated maxaverage to ${maxAverage}`)
        }
        else {
            console.log(`didn't update maxaverage`)
        }
    }

    return maxAverage
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) // Output: 12.75000
