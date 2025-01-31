function minOperations(nums: number[], k: number): number {
    if (nums.length === 1) {
        if (nums[0] === k) {
            return 0;
        } else if (nums[0] < k) {
            return -1;
        } else {
            return 1;
        }
    }

    if (nums.filter(x => x === k).length === nums.length) {
        return 0;
    }

    const numOperations = new Set<number>(nums.filter(x => x > k)).size;
    return numOperations > 0 ? numOperations : -1;
};
