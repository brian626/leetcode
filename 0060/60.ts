// 60. Permutation Sequence

// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"

// Given n and k, return the kth permutation sequence.


// Example 1:

// Input: n = 3, k = 3
// Output: "213"

// Example 2:

// Input: n = 4, k = 9
// Output: "2314"

// Example 3:

// Input: n = 3, k = 1
// Output: "123"


// Constraints:

// 1 <= n <= 9
// 1 <= k <= n!

function factorial(n: number): number {
    if (n == 1) { return 1 }
    else return n * factorial(n-1)
}

function getPermutation(n: number, k: number): string {
    // We can predict what each digit will be...
    //
    // The first 1/nth of them will start with 1, the next 1/nth will start with 2, etc.
    //
    // With the first 1/nth, 1/(2*n) of them will start with [1, 2], the next 1/(2*n) of them will start with [1, 3], etc

    let totalPermutations: number = factorial(n)
    let result: string[] = []
    let digits: number[] = []
    for (let i = 0; i < n; i++) { digits.push(i+1) }

    let startOfSegment: number = 0
    let endOfSegment: number = totalPermutations / n
    let segmentLength: number = (endOfSegment - startOfSegment)
    while (result.length < n) {
        console.log(`is ${k} > ${endOfSegment}?`)
        while (k >= endOfSegment) {
            console.log(`${k} is > ${endOfSegment}`)
            startOfSegment += segmentLength
            endOfSegment += segmentLength
        }

        result.push(digits[k - startOfSegment - 2].toString())
        console.log(result)

        digits.splice(k - startOfSegment, 1)
        k -= segmentLength
        startOfSegment = 0
        endOfSegment /= n
        segmentLength = (endOfSegment - startOfSegment)
        n -= 1
    }

    return result.join("")
};

// console.log(getPermutation(3, 3))
// 123, 132, 213, 231, 312, 321
// Output: "213"

console.log(getPermutation(4, 9))
// 1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, ...
//             9 is in the 2nd 1/4th => 2134, 2143, 2314, 2341, 2413, 2431
//   (9 - 6) = 3 is in the 2nd 1/12th => 2314, 2341
//   (3 - 2) = 1 is in the 1st 1/24th => 2314
// // Output: "2314"

// console.log(getPermutation(3, 1))
// // Output: "123"

// console.log(getPermutation(9, 219601))
// // "647123589"
