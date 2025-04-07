function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) { return false; }

    const target = sum / 2;

    const dp: boolean[] = [];

    dp[0] = true;

    for (const num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] ||= dp[i - num];
        }
    }

    return dp[target] === undefined ? false : dp[target];
};
