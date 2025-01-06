function lengthOfLIS(nums: number[]): number {
    const dp: number[] = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        let maxLength = 1;

        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                maxLength = Math.max(maxLength, dp[j] + 1);
            }
        }

        dp[i] = maxLength;
    }

    console.log(dp.join(', '));
    return Math.max(...dp);
};

const nums = [0,1,0,3,2,3]

console.log(lengthOfLIS(nums));
