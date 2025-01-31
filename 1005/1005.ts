function largestSumAfterKNegations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let numNegative = nums.filter(x => x < 0).length;

    if (numNegative === k) {
        nums = nums.map(x => x < 0 ? x * -1 : x);
    } else if (numNegative < k) {
        nums = nums.map(x => x < 0 ? x * -1 : x);
        k -= numNegative;
        k %= 2;
        if (k === 1) {
            nums.sort((a, b) => a - b);
            nums[0] *= -1;
        }
    } else {
        for (let i = 0; i < k; i++) {
            nums[i] *= -1;
        }
    }

    return nums.reduce((a, b) => a + b, 0);
};
