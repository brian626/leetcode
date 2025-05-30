// 915. Partition Array into Disjoint Intervals

// Given an array A, partition it into two (contiguous) subarrays left and right so that:

// Every element in left is less than or equal to every element in right.
// left and right are non-empty.
// left has the smallest possible size.

// Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.


// Example 1:

// Input: [5,0,3,8,6]
// Output: 3
// Explanation: left = [5,0,3], right = [8,6]

// Example 2:

// Input: [1,1,1,0,6,12]
// Output: 4
// Explanation: left = [1,1,1,0], right = [6,12]


// Note:

// 2 <= A.length <= 30000
// 0 <= A[i] <= 10^6
// It is guaranteed there is at least one way to partition A as described.

function partitionDisjoint(A: number[]): number {
    let leftLength = 1
    let leftMax = A[0]

    console.log(`input: [${A}]`)
    for (let i = 1; i < A.length; i++) {
        console.log(`  comparing A[i] (${A[i]}) to leftMax (${leftMax})`)
        if (A[i] < leftMax) {
            console.log(`    updating left to [${A.slice(0,i + 1)}]`)
            leftLength = i + 1
            leftMax = Math.max(...A.slice(0, i + 1))
        }
    }

    return leftLength
};

console.log(partitionDisjoint([5,0,3,8,6])) // Output: 3
console.log(partitionDisjoint([1,1,1,0,6,12])) // Output: 4
console.log(partitionDisjoint([1,1])) // Output: 1
console.log(partitionDisjoint([32,57,24,19,0,24,49,67,87,87])) // Output: 7
