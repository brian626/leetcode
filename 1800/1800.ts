function maxAscendingSum(nums: number[]): number {
    if (nums.length == 1) {
        return nums[0]
    }

    let maxSum = 0
    let curSum = nums[0]
    let lastNum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        console.log(`comparing ${lastNum} and ${nums[i]}`)
        if (nums[i] <= lastNum) {
            maxSum = Math.max(maxSum, curSum)
            console.log(`  updated maxSum to ${maxSum}`)
            curSum = nums[i]
        }
        else {
            curSum += nums[i]
            console.log(`  added ${nums[i]} to curSum, now == ${curSum}`)
        }

        lastNum = nums[i]
    }

    return Math.max(maxSum, curSum)
};

// console.log(maxAscendingSum([10,20,30,5,10,50])) // Output: 65
// console.log(maxAscendingSum([10,20,30,40,50])) // Output: 150
// console.log(maxAscendingSum([12,17,15,13,10,11,12])) // Output: 33
// console.log(maxAscendingSum([100,10,1])) // Output: 100
// console.log(maxAscendingSum([3,6,10,1,8,9,9,8,9])) // Output: 19
