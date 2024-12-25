// 213. House Robber II

// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed. All houses at this place
// are arranged in a circle. That means the first house is the neighbor of the
// last one. Meanwhile, adjacent houses have a security system connected, and
// it will automatically contact the police if two adjacent houses were broken
// into on the same night.

// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.


// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 3:

// Input: nums = [1,2,3]
// Output: 3


// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

// If you rob house n, you can't rob house 0 or house n-1
// If you rob house n-1, you can't rob house n or house n -2

function robRecurse(nums: number[], low: number, high: number): number {
    let include = 0, exclude = 0;
    for (let j = low; j <= high; j++) {
        let i = include, e = exclude;
        include = e + nums[j];
        exclude = Math.max(e, i);
    }
    return Math.max(include, exclude);
}

function rob(nums: number[]): number {
    if (nums.length == 1) return nums[0];

    return Math.max(robRecurse(nums, 0, nums.length - 2), robRecurse(nums, 1, nums.length - 1));
};

console.log(rob([2,3,2])); // Output: 3
console.log(rob([1,2,3,1])); // Output: 4
console.log(rob([1,2,3])); // Output: 3
console.log(rob([1])); // 1
console.log(rob([200,3,140,20,10])); // 340
console.log(rob([2,1,1,2])); // 3
console.log(rob([1,3,1,3,100])); // 103
console.log(rob([8,9,9,4,10,5,6,9,7,9])); // 40
