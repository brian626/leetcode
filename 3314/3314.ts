function minBitwiseArray(nums: number[]): number[] {
    const ans: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = -1;
        for (let n = 0; n < 1000; n++) {
            if ((n | (n+1)) === nums[i]) {
                ans[i] = n;
                break;
            }
        }
    }

    return ans;
};

const nums = [11,13,31];
console.log(minBitwiseArray(nums));
