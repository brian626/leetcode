// 16. 3Sum Closest

// Given an array nums of n integers and an integer target, find three integers in nums such
// that the sum is closest to target. Return the sum of the three integers. You may assume
// that each input would have exactly one solution.


// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

function threeSumClosest(nums: number[], target: number): number {
    let delta: number = 999999
    let closestSum: number = -1
    nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k]
                const difference = Math.abs(sum - target)
                if (difference < delta) {
                    delta = difference
                    closestSum = sum
                }
                // else {
                //     break
                // }
            }
        }
    }

    return closestSum
};

console.log(threeSumClosest([-1,2,1,-4], 1))
// Output: 2
