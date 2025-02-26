function maxAbsoluteSum(nums: number[]): number {
    return Math.max(maxSubarray(nums), Math.abs(minSubarray(nums)));
};


function maxSubarray(nums: number[]): number {
    let bestSum = Infinity * -1;
    let currentSum = 0
    for (const x of nums) {
        currentSum = Math.max(x, currentSum + x);
        bestSum = Math.max(bestSum, currentSum);
    }

    return bestSum;
}

function minSubarray(nums: number[]): number {
    let bestSum = Infinity;
    let currentSum = 0
    for (const x of nums) {
        currentSum = Math.min(x, currentSum + x);
        bestSum = Math.min(bestSum, currentSum);
    }

    return bestSum;
}


const nums = [2, -5, 1, -4, 3, -2];

console.log(maxAbsoluteSum(nums));
