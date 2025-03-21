function maxSum(nums: number[]): number {
    const max = Math.max(...nums);
    if (max < 0) {
        return max;
    }

    return Array.from(new Set(nums.filter(x => x >= 0))).reduce((a, b) => a + b, 0);
};
