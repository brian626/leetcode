// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.


// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:

// Input: nums = [1]
// Output: [[1]]


// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

function addNums46(permutations: number[][], nums: number[]): void {
    let newPermutations: number[][] = []

    while (permutations.length > 0) {
        let permutation: number[] = permutations.pop()
        nums.forEach(n => { if (permutation.indexOf(n) == -1) { newPermutations.push(permutation.concat([n])) } })
    }

    newPermutations.forEach(p => { permutations.push(p) })
}

function permute46(nums: number[]): number[][] {
    let permutations: number[][] = []

    nums.forEach(n => { permutations.push([n]) })

    while (permutations[0].length < nums.length) {
        addNums46(permutations, nums)
    }

    // return permutations
    return permutations.sort((a,b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) { return a[i] - b[i] }
        }
        return 0
    })
};

// let permutations = [[1], [2], [3]]
// addNums(permutations, [1,2,3])
// console.log(permutations)

console.log(permute46([1,2,3,4]))

// console.log(permute([1,2,3]))
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// console.log(permute([0,1]))
// Output: [[0,1],[1,0]]

// console.log(permute([1]))
// Output: [[1]]
