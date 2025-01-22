function maxAdjacentDistance(nums: number[]): number {
    let maxDifference = Math.abs(nums[0] - nums[nums.length - 1]);

    for (let i = 0; i < nums.length - 1; i++) {
        maxDifference = Math.max(maxDifference, Math.abs(nums[i] - nums[i + 1]))
    }

    return maxDifference;
};

const nums = [1, 2, 4];

console.log(maxAdjacentDistance(nums));
