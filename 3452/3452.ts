function sumOfGoodNumbers(nums: number[], k: number): number {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const n1 = (i - k >= 0) ? nums[i - k] : 0;
        const n2 = (i + k < nums.length) ? nums[i + k] : 0;

        if (nums[i] > n1 && nums[i] > n2) {
            sum += nums[i];
        }
    }

    return sum;
};
