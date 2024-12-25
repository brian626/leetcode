// 53. Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23


// Constraints:

// 1 <= nums.length <= 3 * 10^4
// -10^5 <= nums[i] <= 10^5

function maxSubArray(nums: number[]): number {
    if (nums.length === 1) { return nums[0]; }

    let maxSum = Math.pow(10, 5) * -1 - 1;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (currentSum + nums[i] <= 0) {
            if (nums[i] > currentSum) {
                currentSum = nums[i];
                maxSum = Math.max(currentSum, maxSum);
            } else if (currentSum >= 0) {
                currentSum = 0;
                maxSum = Math.max(nums[i], maxSum);
            }
        } else {
            currentSum += nums[i];
            maxSum = Math.max(currentSum, maxSum);
        }
    }

    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // Output: 6
console.log(maxSubArray([1])) // Output: 1
console.log(maxSubArray([5,4,-1,7,8])) // Output: 23
console.log(maxSubArray([-1])) // Output: -1
console.log(maxSubArray([-2,-1])) // Output: -1
console.log(maxSubArray([-1,-2])) // Output: -1
console.log(maxSubArray([31,-41,59,26,-53,58,97,-93,-23,84])); // Output: 187
console.log(maxSubArray([-1,1,2,1])); // Output: 4
console.log(maxSubArray([1,1,-2])); // Output: 2
console.log(maxSubArray([-2,3,1,3])); // Output: 7
