// 40. Combination Sum II

// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.


// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]


// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

function combinationSum2(candidates: number[], target: number): number[][] {
    if (candidates.reduce((a,b) => a + b) < target) { return [] }

    let output: number[][] = []

    if (candidates.indexOf(target) != -1) {
        candidates.splice(candidates.indexOf(target), 1)
        output.push([target])
    }

    candidates.sort((a,b) => a - b)

    // Initialize a set of combos
    const uniqueCandidates: number[] = Array.from(new Set<number>(candidates))
    let tuples: number[][] = []
    for (let i = 0; i < uniqueCandidates.length; i++) {
        tuples.push([uniqueCandidates[i]])
    }

    while (tuples.length > 0) {
        console.log(`tuples at start of loop`)
        console.log(tuples)

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

        console.log(`tuples after weeding`)
        console.log(tuples)

        // Generate more tuples by adding each candidate to each tuple
        let newTuples: number[][] = []
        while (tuples.length > 0) {
            let tuple: number[] = tuples.pop()
            for (let i = 0; i < candidates.length; i++) {
                // Make sure we haven't already used up the candidate
                let numCandidatesInTuple: number = tuple.filter(x => x == candidates[i]).length
                let numCandidatesInCandidates: number = candidates.filter(x => x == candidates[i]).length

                if (numCandidatesInTuple < numCandidatesInCandidates) {
                    newTuples.push(tuple.concat([candidates[i]]))
                }
            }
        }

        // tuples = newTuples
        let tempSet: Set<string> = new Set(newTuples.map(x => x.sort((a,b) => a - b).toString()))
        let dedupedOutput = Array.from(tempSet).map(x => x.split(",").map(x => parseInt(x, 10)))
        tuples = dedupedOutput

        console.log(`tuples at end of loop`)
        console.log(tuples)
    }

    // Finally, de-dupe the output
    let tempSet: Set<string> = new Set(output.map(x => x.sort((a,b) => a - b).toString()))
    let dedupedOutput = Array.from(tempSet).map(x => x.split(",").map(x => parseInt(x, 10)))

    return dedupedOutput
};

// console.log(combinationSum2([10,1,2,7,6,1,5], 8))
// Output:
// [
//     [1,1,6],
//     [1,2,5],
//     [1,7],
//     [2,6]
// ]

// console.log(combinationSum2([2,5,2,1,2], 5))
// Output:
// [
//     [1,2,2],
//     [5]
// ]

// console.log(combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 27))
// []

// console.log(combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 27))
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

console.log(combinationSum2([3,1,3,5,1,1], 8))
