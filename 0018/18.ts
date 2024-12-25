// 18. 4Sum

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.


// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]


// Constraints:

// 1 <= nums.length <= 200
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9

function fourSum(nums: number[], target: number): number[][] {
    if (nums.length == 4) { return (nums.reduce((a,b) => a + b) == target) ? [nums] : [] }

    let quads: Set<string> = new Set<string>()

    nums.sort((a,b) => a - b)

    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            for (let c = b + 1; c < nums.length; c++) {
                const numD = target - nums[a] - nums[b] - nums[c]
                if (nums[c] > 0 && numD < 0) { break }

                if (nums.lastIndexOf(numD) > c) {
                    quads.add([nums[a],nums[b],nums[c],numD].toString())
                }
            }
        }
    }

    return Array.from(quads).map(x => x.split(",")).map(x => x.map(x => parseInt(x, 10)))
};

console.log(fourSum([1,0,-1,0,-2,2], 0))
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

console.log(fourSum([2,2,2,2,2], 8))
// Output: [[2,2,2,2]]

console.log(fourSum([-2,-2,-2,-2,-2], -8))
// Output: [[-2,-2,-2,-2]]

console.log(fourSum([0,0,0,0], 0))
// Output: [[0,0,0,0]]

console.log(fourSum([-3,-1,0,2,4,5], 0))
// Output: [[-3,-1,0,4]]

console.log(fourSum([-2,-1,-1,1,1,2,2], 0))
// Output: [[-2,-1,1,2],[-1,-1,1,1]]

console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0))
// Output: [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
