// 229. Majority Element II

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Follow-up: Could you solve the problem in linear time and in O(1) space?


// Example 1:

// Input: nums = [3,2,3]
// Output: [3]

// Example 2:

// Input: nums = [1]
// Output: [1]

// Example 3:

// Input: nums = [1,2]
// Output: [1,2]


// Constraints:

// 1 <= nums.length <= 5 * 10^4
// -10^9 <= nums[i] <= 10^9

function majorityElement(nums: number[]): number[] {
    let elementCount: Map<number, number> = new Map<number, number>()

    nums.forEach(n => {
        const existingCount: number = elementCount.get(n)
        if (existingCount) { elementCount.set(n, existingCount + 1) }
        else               { elementCount.set(n, 1) }
    })

    return Array.from(elementCount.entries()).filter(x => x[1] > Math.floor(nums.length / 3)).map(x => x[0])
};

console.log(majorityElement([3,2,3]))
// Output: [3]

console.log(majorityElement([1]))
// Output: [1]

console.log(majorityElement([1,2]))
// Output: [1,2]
