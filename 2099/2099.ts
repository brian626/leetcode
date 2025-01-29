function maxSubsequence(nums: number[], k: number): number[] {
    while (nums.length > k) {
        const minNum = Math.min(...nums);
        const minIndex = nums.indexOf(minNum);
        nums.splice(minIndex, 1);
    }

    return nums;
};
