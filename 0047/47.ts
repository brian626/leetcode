// 47. Permutations II

// Given a collection of numbers, nums, that might contain duplicates, return all
// possible unique permutations in any order.


// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

function addNums(permutations: number[][], nums: number[]): void {
    let newPermutations: number[][] = []

    while (permutations.length > 0) {
        let permutation: number[] = permutations.pop()
        nums.forEach(n => { if (permutation.indexOf(n) == -1) { newPermutations.push(permutation.concat([n])) } })
    }

    newPermutations.forEach(p => { permutations.push(p) })
}

function permuteUnique(nums: number[]): number[][] {
    // First map each (potentially non-unique) member of nums to a unique value
    let numsMap: number[] = []
    for (let i = 0; i < nums.length; i++) {
        numsMap.push(i+1)
    }

    // Then do the regular permutation stuff
    let permutations: number[][] = []

    numsMap.forEach(n => { permutations.push([n]) })

    while (permutations[0].length < numsMap.length) {
        addNums(permutations, numsMap)
    }

    // Finally, map back
    let newPermutations: Set<string> = new Set<string>()
    permutations.forEach(p => {
        let newPermutation: string = p.map(x => nums[x - 1]).toString()
        newPermutations.add(newPermutation)
    })

    return Array.from(newPermutations).map(x => x.split(",").map(x => parseInt(x, 10)))
};

console.log(permuteUnique([1,1,2]))
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

console.log(permuteUnique([1,2,3]))
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
