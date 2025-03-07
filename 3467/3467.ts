function transformArray(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] % 2 === 0 ? 0 : 1;
    }

    nums.sort((a, b) => a - b);

    return nums;
};
