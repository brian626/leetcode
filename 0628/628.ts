// 628. Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.


// Example 1:

// Input: nums = [1,2,3]
// Output: 6

// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6


// Constraints:

// 3 <= nums.length <= 10^4
// -1000 <= nums[i] <= 1000

function maximumProduct(nums: number[]): number {
    // Don't bother looking if we're only starting with three numbers
    if (nums.length == 3) { return nums.reduce((a,b) => (a*b)) }

    const negatives: number[] = nums.filter(x => x < 0).sort((a,b) => { return a - b })
    const positives: number[] = nums.filter(x => x > 0).sort((a,b) => { return b - a })

    let factors: number[] = []

    if (positives.length > 2) {
        if (negatives.length < 2) {
            factors.push(...positives.slice(0,3))
        }
        else {
            const twoBiggestNegatives = negatives.slice(0,2).map(x => x * -1)
            factors.push(...positives.slice(0,3))
            factors.push(...twoBiggestNegatives)
            factors = factors.sort((a,b) => { return b - a }).slice(0,3)
        }
    }
    else if (positives.length == 2) {
        factors.push
    }

    return factors.reduce((a,b) => (a*b))

    // // Otherwise, the maximum product will either be the three biggest positive numbers, or the two biggest
    // // negatives and the biggest positive (since the negatives will cancel out.)
    // const threeBiggestPositives = nums.filter(x => x > 0).sort((a,b) => { return b - a }).slice(0,3)
    // const twoBiggestNegatives = nums.filter(x => x < 0).sort((a,b) => { return a - b }).slice(0,2)
    // const threeSmallestNegatives = nums.filter(x => x < 0).sort((a,b) => { return b - a }).slice(0,3)

    // let factors: number[] = []

    // for (let i = 0; i < twoBiggestNegatives.length; i++) {
    //     if (Math.abs(twoBiggestNegatives[i]) > Math.min(...threeBiggestPositives)) {
    //         factors.push(twoBiggestNegatives[i])
    //     }
    // }
    // console.log(`a: factors = ${factors}`)

    // // If only one negative number made it in, discard it.
    // if (factors.length != 2) { factors = [] }
    // console.log(`b: factors = ${factors}`)

    // const positivesNeeded = threeBiggestPositives.length - factors.length
    // for (let i = 0; i < positivesNeeded; i++) {
    //     factors.push(threeBiggestPositives[i])
    // }
    // console.log(`c: factors = ${factors}`)

    // if (factors.length != 3) {
    //     factors = [...threeSmallestNegatives]

    //     const negativesNeeded = 3 - factors.length
    //     for (let i = 0; i < negativesNeeded; i++) {
    //         factors.push(threeSmallestNegatives[i])
    //     }
    // }

    // console.log(factors)
    // return factors.reduce((a,b) => (a*b))
};

// console.log(maximumProduct([1,2,3])) // 6
// console.log(maximumProduct([1,2,3,4])) // 24
// console.log(maximumProduct([-1,-2,-3])) // -6
// console.log(maximumProduct([-100,-98,-1,2,3,4])) // 39200
// console.log(maximumProduct([-1,-2,1,2,3])) // 6
console.log(maximumProduct([-1,-2,3,4])) // -12
// console.log(maximumProduct([-1,-2,-3,-4])) // -6
