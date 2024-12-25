// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a
// certain amount of money stashed, the only constraint stopping you from robbing each of
// them is that adjacent houses have security systems connected and it will automatically
// contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the
// maximum amount of money you can rob tonight without alerting the police.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.


// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

const profits2: number[] = [];

function robRecurse(nums: number[], houseNum: number) {
    if (houseNum < 0) {
        return 0;
    }

    if (profits2[houseNum] > -1) {
        return profits2[houseNum];
    }

    const profit = Math.max(robRecurse(nums, houseNum - 2) + nums[houseNum], robRecurse(nums, houseNum - 1));
    profits2[houseNum] = profit;
    return profit;
}

function rob2(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        profits2[i] = -1;
    }

    return robRecurse(nums, nums.length - 1);
};

function rob3(nums: number[]): number {
    if (nums.length === 0) { return 0; }

    const profits: number[] = [];
    profits[0] = 0;
    profits[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const profit = nums[i];
        profits[i+1] = Math.max(profits[i], profits[i-1] + profit);
    }

    return profits[nums.length];
}

function rob(nums: number[]): number {
    if (nums.length === 0) { return 0; }

    let prev2 = 0;
    let prev1 = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = prev1;
        prev1 = Math.max(prev2 + nums[i], prev1);
        prev2 = temp;
    }

    return prev1;
}

console.log(rob([1,2,3,1])); // 4
console.log(rob([2,7,9,3,1])); // 12
console.log(rob([2,1,1,2])); // 4
console.log(rob([0])); // 0
console.log(rob([1,3,1])); // 3
