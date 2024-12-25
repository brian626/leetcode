// 41. First Missing Positive

// Given an unsorted integer array nums, find the smallest missing positive integer.


// Example 1:

// Input: nums = [1,2,0]
// Output: 3

// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2

// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1


// Constraints:

// 1 <= nums.length <= 300
// -2^31 <= nums[i] <= 2^31 - 1


// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space?

function createOrExtendRange(ranges: number[][], n: number): number[][] {
    log(`createOrExtendRange called with ranges = ${ranges} and n = ${n}`)

    if (ranges.length == 0) {
        log(`  creating first range: [${n}, ${n}]`)
        return [[n, n]]
    }

    let newRanges: number[][] = []

    let done = false
    ranges.forEach(range => {
        if (done) {
            console.log(`  preserving existing range: ${range}`)
            newRanges.push(range)
        }
        else {
            let low = range[0]
            let high = range[1]

            if (n == low - 1) {
                // Extend current range one lower
                log(`  extend current range one lower: [${n}, ${high}]`)
                newRanges.push([n, high])
                done = true
            }
            else if (n >= low && n <= high) {
                // Keep current range
                log(`  1 keeping current range: ${range}`)
                newRanges.push(range)
                done = true
            }
            else if (n == high + 1) {
                // Extend current range one higher
                log(`  extend current range one higher: [${low}, ${n}]`)
                newRanges.push([low, n])
                done = true
            }
            else {
                log(`  2 keeping current range: ${range}`)
                newRanges.push(range)
            }
        }
    })

    if (!done) {
        // Create a new range
        log(`  creating new range: [${n}, ${n}]`)
        newRanges.push([n, n])
    }

    log(`  returning ranges: ${newRanges}`)
    return newRanges.sort((a,b) => { return a[0] - b[0]})
}

function firstMissingPositive(nums: number[]): number {
    let rangesSeen: number[][] = []
    let i = 0

    while (true) {
        if (i == nums.length) { log(`break`); break }
        if (nums[i] < 0)      { log(`continue`); i++; continue }

        rangesSeen = createOrExtendRange(rangesSeen, nums[i])

        i++
    }

    log(`ranges seen: ${rangesSeen}`)

    let firstMissingInt = 1
    rangesSeen.forEach(range => {
        if (firstMissingInt >= range[0] && firstMissingInt <= range[1]) {
            firstMissingInt = range[1] + 1
        }
    })

    return firstMissingInt
};

let DEBUG_41: boolean = false
function log(s: string): void {
    if (DEBUG_41) {
        console.log(s)
    }
}

// console.log(firstMissingPositive([1,2,0])) // Output: 3
// console.log(firstMissingPositive([3,4,-1,1])) // Output: 2
// console.log(firstMissingPositive([7,8,9,11,12])) // Output: 1
// console.log(firstMissingPositive([0,2,2,1,1])) // Output: 3
