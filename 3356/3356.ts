function minZeroArray(nums: number[], queries: number[][]): number {
    if (nums.reduce((a, b) => a + b, 0) === 0) {
        return 0;
    }

    let isZeroArray = false;

    let queriesProcessed = 0;

    while (queries.length > 0) {
        const [l, r, val] = queries.shift();
        queriesProcessed++;

        for (let i = l; i <= r; i++) {
            nums[i] = Math.max(nums[i] - val, 0);
        }

        if (nums.reduce((a, b) => a + b, 0) === 0) {
            isZeroArray = true;
            break;
        }
    }

    if (isZeroArray) {
        return queriesProcessed;
    } else {
        return -1;
    }
};
