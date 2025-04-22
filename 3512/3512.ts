function minOperations(nums: number[], k: number): number {
    const sum = nums.reduce((a, b) => a + b, 0);
    const target = Math.floor(sum / k) * k;
    return sum - target;
};
