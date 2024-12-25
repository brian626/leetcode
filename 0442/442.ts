// 442. Find All Duplicates in an Array

// Given an integer array nums of length n where all the integers of nums are in the
// range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.


// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Example 2:

// Input: nums = [1,1,2]
// Output: [1]

// Example 3:

// Input: nums = [1]
// Output: []


// Constraints:

// n == nums.length
// 1 <= n <= 10^5
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.


// Follow up: Could you do it without extra space and in O(n) runtime?

function findDuplicates(nums: number[]): number[] {
    nums = nums.sort((a,b) => { return a - b })
    let ret: number[] = []
    let i: number = 0
    while (i < nums.length - 1) {
        if (nums[i] === nums[i+1]) {
            ret.push(nums[i])
            i++
        }
        i++
    }

    return ret
};
