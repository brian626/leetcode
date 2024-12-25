// 152. Maximum Product Subarray

// Given an integer array nums, find a contiguous non-empty subarray within the
// array that has the largest product, and return the product.

// It is guaranteed that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.


// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


// Constraints:

// 1 <= nums.length <= 2 * 10^4
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

function reduceArray(nums: number[]): number[] {
    // Go through the array and reduce wherever possible.
    let newNums: number[] = []
    let i: number = 0
    while (i < nums.length) {
        if (nums[i] != 0) {
            // Find the sequence of non-zero numbers.
            let consecutiveNonZeroNumbers: number[] = []
            let j = i
            let numNegatives = 0
            while (nums[j] != 0) {
                if (nums[j] < 0) { numNegatives++ }
                consecutiveNonZeroNumbers.push(nums[j++])
            }

            // If there is an even number of negative numbers in the sequence, then the entire
            // sequence can be reduced to the product of all its terms.
            if (numNegatives % 2 == 0) {
                newNums.push( consecutiveNonZeroNumbers.reduce((a,b) => (a*b)) )
            }
            // Otherwise,
            else {

            }
        }
        if (nums[i] > 0) {
            // If there is a sequence of consecutive positive numbers, we can reduce them to their product.
            let consecutivePositives: number[] = [nums[i]]
            let j = i + 1
            while (nums[j] > 0) {
                consecutivePositives.push(nums[j])
                j++
            }

            newNums.push( consecutivePositives.reduce((a,b) => (a*b)) )
            i += consecutivePositives.length
        }
        else if (nums[i] < 0) {
            // If there is a sequence of consecutive negative numbers, we can reduce any even number of them
            // to their product.
            let consecutiveNegatives: number[] = [nums[i]]
            let j = i + 1
            while (nums[j] < 0) {
                consecutiveNegatives.push(nums[j])
                j++
            }

            // If there is an even number of consecutive numbers, we reduce them to their product.
            if (consecutiveNegatives.length % 2 == 0) {
                newNums.push( consecutiveNegatives.reduce((a,b) => (a*b)) )
                i += consecutiveNegatives.length
            }
            // If there is an odd number of consecutive numbers, we can reduce all but one by multiplying pairs.
            else {
                let originalLength = consecutiveNegatives.length
                let numNegatives: number
                do {
                    // Find the biggest consecutive negative numbers and multiply them.
                    let firstIndex = -1
                    let biggestProduct = 0
                    for (let k = 0; k < consecutiveNegatives.length - 1; k++) {
                        if (consecutiveNegatives[k] * consecutiveNegatives[k+1] > biggestProduct) {
                            firstIndex = k
                            biggestProduct = consecutiveNegatives[k] * consecutiveNegatives[k+1]
                        }
                    }

                    let reducedNegatives = []
                    for (let k = 0; k < consecutiveNegatives.length; k++) {
                        if (k == firstIndex) {
                            reducedNegatives.push(biggestProduct)
                            k = k + 1
                        }
                        else {
                            reducedNegatives.push(consecutiveNegatives[k])
                        }
                    }

                    consecutiveNegatives = reducedNegatives
                    numNegatives = consecutiveNegatives.filter(x => x < 0).length
                } while (numNegatives > 1)

                newNums.push( ...consecutiveNegatives )
                i += originalLength
            }
        }
        else {
            // If there's a zero, just copy it over.
            newNums.push(nums[i])
            i++
        }
    }

    return newNums
}

function maxProduct(nums: number[]): number {
    let originalLength = nums.length
    while (true) {
        nums = reduceArray(nums)
        // console.log(`reduced array: ${nums}`)
        // console.log(`  original length: ${originalLength}, new length: ${nums.length}`)
        if (originalLength == nums.length) {
            break
        }
        else {
            originalLength = nums.length
        }
    }

    // nums now consists of number segments separated by zeros.
    let maxProduct = 0 // Math.pow(2,31) * -1
    let segmentStart = -1
    let i = 0
    while (i < nums.length) {
        if (nums[i] == 0) {
            if (segmentStart != -1) {
                maxProduct = Math.max(0, Math.max(...nums.slice(segmentStart, i)))
                segmentStart = i
            }
            i++
        }
        else {
            if (segmentStart == -1) {
                segmentStart = i
            }

            i++
        }
    }

    maxProduct = Math.max(...nums.slice(segmentStart, i))

    return maxProduct
};

// console.log(maxProduct([2,3,-2,4])) // Output: 6
// console.log(maxProduct([-2,0,-1])) // Output: 0
// console.log(maxProduct([2,3,-2,-4])) // Output: 48
// console.log(maxProduct([-2,0,-1,5])) // Output: 5

// console.log(maxProduct([2,3,4,5])) // Output: 120
// console.log(maxProduct([-2,-3,4,5])) // Output: 120
// console.log(maxProduct([-2,-3,-4,5])) // Output: 60
// console.log(maxProduct([-2,-3,-4,-5])) // Output: 120

// console.log(maxProduct([2,3,0,4,5])) // Output: 20
// console.log(maxProduct([-2,-3,0,4,5])) // Output: 20
// console.log(maxProduct([-2,-3,0,-4,5])) // Output: 5
// console.log(maxProduct([-2,-3,0,-4,-5])) // Output: 20

// console.log(maxProduct([-2,-3,0,0,1,0,0,-4,-5])) // Output: 20

console.log(maxProduct([-2,3,-4])) // Output: 24
