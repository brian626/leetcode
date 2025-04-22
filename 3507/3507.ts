function minimumPairRemoval(nums: number[]): number {
    let count = 0;

    while (!isNonDecreasing(nums)) {
        let pos = -1, minSum = Infinity;
        for (let i = 0; i < nums.length - 1; i++) {
            if ((nums[i] + nums[i + 1]) < minSum) {
                minSum = nums[i] + nums[i + 1];
                pos = i;
            }
        }

        nums.splice(pos, 2, nums[pos] + nums[pos + 1]);
        count++;
    }

    return count;
};


function isNonDecreasing(nums: number[]): boolean {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }

    return true;
}
