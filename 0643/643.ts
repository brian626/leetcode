function findMaxAverage(nums: number[], k: number): number {
    let movingSum = 0

    for (let i = 0; i < k; i++) { movingSum += nums[i] }

    let maxAverage = movingSum / k

    for (let i = 0; i < nums.length - k; i++) {
        console.log(`subtracting ${nums[i]} and adding ${nums[i + k]}`)
        movingSum -= nums[i]
        movingSum += nums[i + k]

        if ((movingSum / k) > maxAverage) {
            maxAverage = movingSum / k
            console.log(`updated maxaverage to ${maxAverage}`)
        }
        else {
            console.log(`didn't update maxaverage`)
        }
    }

    return maxAverage
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)) // Output: 12.75000
