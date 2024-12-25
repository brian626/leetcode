// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in order.


// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:

// Input: nums = [1], target = 0
// Output: 0


// Constraints:

// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums contains distinct values sorted in ascending order.
// -10^4 <= target <= 10^4

function searchInsert(nums: number[], target: number): number {
    let ret = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            ret = i
            break
        }
    }

    return (ret == -1) ? nums.length : ret
};

console.log(searchInsert([1,3,5,6], 5)) // Output: 2
console.log(searchInsert([1,3,5,6], 2)) // Output: 1
console.log(searchInsert([1,3,5,6], 7)) // Output: 4
console.log(searchInsert([1,3,5,6], 0)) // Output: 0
console.log(searchInsert([1], 0)) // Output: 0
