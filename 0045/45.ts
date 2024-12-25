// 45. Jump Game II

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.


// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2


// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 10^5

function jump(nums: number[]): number {
    if (nums.length == 1) { return 0 }
    if (nums.length == 2) { return 1 }

    log(`[${nums}]`)

    let numJumps: number = 0
    let position: number = 0
    const target: number = nums.length - 1

    while (true) {
        const maxJumps: number = nums[position]
        log(`top of while loop: position = ${position}, maxJumps = ${maxJumps}, numJumps = ${numJumps}`)

        // See if we can get to the last index from here via any intermediate jump.
        // While scanning, also make note of the biggest non-completing jump opportunity.
        let biggestGainIndex: number = -1
        let biggestGain: number = -1
        for (let i = nums.length - 2; i > position; i--) {
            log(`  top of for loop, i = ${i}, nums[i] = ${nums[i]}, position = ${position}`)

            // Case 1: We can get there in one jump.
            if (position + maxJumps >= target) {
                log(`    returning since ${position} + ${maxJumps} >= ${target}`)
                return numJumps + 1
            }

            // Case 2: We need more than one jump.
            else if (position + maxJumps >= i) {
                // Case 2a: We can get there in two jumps.
                if (i + nums[i] >= target) {
                    log(`    returning since ${position} + ${maxJumps} >= ${i} and ${i} + ${nums[i]} >= ${target}`)
                    return numJumps + 2
                }

                // Case 2b: We need an intermediate jump.
                else if (i + nums[i] > biggestGain) {
                    log(`    i = ${i}, nums[i] = ${nums[i]}, position = ${position}, maxJumps = ${maxJumps}`)
                    biggestGain = i + nums[i]
                    biggestGainIndex = i
                }
            }

            // Case 3: We can't reach i, so forget about it.
        }

        log(`  after for loop: position = ${position}, maxJumps = ${maxJumps}, numJumps = ${numJumps}`)

        if (biggestGain > 0) {
            log(`  jumping to ${biggestGainIndex}`)
            numJumps++
            position = biggestGainIndex
        }
    }
};

const DEBUG_45: boolean = false
function log(s: string): void {
    if (DEBUG_45) {
        console.log(s)
    }
}

console.log(jump([2,3,1,1,4])) // Output: 2
console.log(jump([2,3,0,1,4])) // Output: 2
console.log(jump([1,2,3,4,5])) // Output: 3
console.log(jump([3,2,1])) // Output: 1
console.log(jump([1,2,1,1,1])) // 3
console.log(jump([10,9,8,7,6,5,4,3,2,1,1,0])) // 2
console.log(jump([1,2])) // 1
console.log(jump([3,4,3,2,5,4,3])) // 3
console.log(jump([9,8,2,2,0,2,2,0,4,1,5,7,9,6,6,0,6,5,0,5])) // 3
