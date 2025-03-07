function applyOperations(nums: number[]): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    const nonZeroes = nums.filter(x => x !== 0);
    const zeroes = nums.filter(x => x === 0);

    return nonZeroes.concat(zeroes);
};
