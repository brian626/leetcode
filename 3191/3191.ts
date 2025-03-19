function minOperations(nums: number[]): number {
    let pos = 0;
    let numSteps = 0;

    while (pos < nums.length - 2) {
        if (nums[pos] === 0) {
            nums[pos] = 1;
            nums[pos + 1] = nums[pos + 1] === 0 ? 1 : 0;
            nums[pos + 2] = nums[pos + 2] === 0 ? 1 : 0;
            numSteps++;
        }

        pos++;
    }

    if (nums.filter(x => x !== 1).length === 0) {
        return numSteps;
    } else {
        return -1;
    }
};
