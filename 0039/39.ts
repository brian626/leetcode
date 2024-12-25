// 39. Combination Sum

// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers
// sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two
// combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less
// than 150 combinations for the given input.


// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:

// Input: candidates = [2], target = 1
// Output: []

// Example 4:

// Input: candidates = [1], target = 1
// Output: [[1]]

// Example 5:

// Input: candidates = [1], target = 2
// Output: [[1,1]]


// Constraints:

// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// All elements of candidates are distinct.
// 1 <= target <= 500

function combinationSum(candidates: number[], target: number): number[][] {
    let output: number[][] = []

    if (candidates.indexOf(target) != -1) {
        candidates.splice(candidates.indexOf(target), 1)
        output.push([target])
    }

    candidates.sort((a,b) => a - b)

    // Initialize a set of combos
    let tuples: number[][] = []
    for (let i = 0; i < candidates.length; i++) {
        tuples.push([candidates[i]])
    }
    console.log(tuples)

    while (tuples.length > 0) {
        // Weed out any solutions or invalid tuples
        let tupleIndex: number = tuples.length - 1
        while (tupleIndex >= 0) {
            let tuple: number[] = tuples[tupleIndex]
            let tupleSum: number = tuple.reduce((a,b) => a + b)

            if (tupleSum >= target) {
                if (tupleSum == target) { output.push(tuple) }

                tuples.splice(tupleIndex, 1)
            }

            tupleIndex--
        }

        // Generate more tuples by adding each candidate to each tuple
        let newTuples: number[][] = []
        while (tuples.length > 0) {
            let tuple: number[] = tuples.pop()
            for (let i = 0; i < candidates.length; i++) {
                newTuples.push(tuple.concat([candidates[i]]))
            }
        }

        tuples = newTuples
    }

    // Finally, de-dupe the output
    let tempSet: Set<string> = new Set(output.map(x => x.sort((a,b) => a - b).toString()))
    let dedupedOutput = Array.from(tempSet).map(x => x.split(",").map(x => parseInt(x, 10)))

    return dedupedOutput
};

// console.log(combinationSum([2,3,6,7], 7))
// Output: [[2,2,3],[7]]

// console.log(combinationSum([2,3,5], 8))
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// console.log(combinationSum([2], 1))
// Output: []

// console.log(combinationSum([1], 1))
// Output: [[1]]

// console.log(combinationSum([1], 2))
// Output: [[1,1]]

console.log(combinationSum([11,6,5,8,3,12,7,4], 12))
// [[3,3,3,3],[3,3,6],[3,4,5],[4,4,4],[4,8],[5,7],[6,6],[12]]
