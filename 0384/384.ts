// 384. Shuffle an Array

// Given an integer array nums, design an algorithm to randomly shuffle the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.


// Example 1:

// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to be returned. Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]


// Constraints:

// 1 <= nums.length <= 200
// -10^6 <= nums[i] <= 10^6
// All the elements of nums are unique.
// At most 5 * 10^4 calls will be made to reset and shuffle.

class Solution_384 {
    constructor(nums: number[]) {
        this.ordered = Array.from(nums)
        this.shuffled = []
        this.reset()
    }

    reset(): number[] {
        for (let i = 0; i < this.ordered.length; i++) {
            this.shuffled[i] = this.ordered[i]
        }

        return this.ordered
    }

    shuffle(): number[] {
        this.shuffled = []

        let i = 0
        while (i < this.ordered.length) {
            let randOrder = Math.floor(Math.random() * this.ordered.length);
            if (this.shuffled[randOrder] === undefined) {
                this.shuffled[randOrder] = this.ordered[i]
                i++
            }
        }

        return this.shuffled
    }

    ordered: number[]
    shuffled: number[]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

let s = new Solution_384([1, 2, 3])

console.log(`shuffled`)
console.log(s.shuffle())

console.log(`ordered`)
console.log(s.reset())

console.log(`shuffled`)
console.log(s.shuffle())
