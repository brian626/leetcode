// 55. Jump Game

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.


// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0,
// which makes it impossible to reach the last index.


// Constraints:

// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 10^5

function canJump(nums: number[]): boolean {
    if (nums.length == 1) { return true }
    if (nums.length == 2) { return nums[0] > 0 }

    let position: number = 0
    const target: number = nums.length - 1

    while (true) {
        const maxJumps: number = nums[position]
        if (maxJumps == 0) { break }

        log(`top of while loop: position = ${position}, maxJumps = ${maxJumps}`)

        // See if we can get to the last index from here via any intermediate jump.
        // While scanning, also make note of the biggest non-completing jump opportunity.
        let biggestGainIndex: number = -1
        let biggestGain: number = -1
        for (let i = nums.length - 2; i > position; i--) {
            log(`  top of for loop, i = ${i}, nums[i] = ${nums[i]}, position = ${position}`)

            // Case 1: We can get there in one jump.
            if (position + maxJumps >= target) {
                log(`    returning since ${position} + ${maxJumps} >= ${target}`)
                return true
            }

            // Case 2: We need more than one jump.
            else if (position + maxJumps >= i) {
                // Case 2a: We can get there in two jumps.
                if (i + nums[i] >= target) {
                    log(`    returning since ${position} + ${maxJumps} >= ${i} and ${i} + ${nums[i]} >= ${target}`)
                    return true
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

        log(`  after for loop: position = ${position}, maxJumps = ${maxJumps}`)

        if (biggestGain > 0) {
            log(`  jumping to ${biggestGainIndex}`)
            position = biggestGainIndex
        }
    }

    return false
};

const DEBUG_55: boolean = false
function log(s: string): void {
    if (DEBUG_55) {
        console.log(s)
    }
}


console.log(canJump([2,3,1,1,4]))
// Output: true

console.log(canJump([3,2,1,0,4]))
// Output: false
