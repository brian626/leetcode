function findErrorNums(nums: number[]): number[] {
    const numCount: Map<number, number> = new Map<number, number>();
    for (let i = 1; i <= nums.length; i++) {
        numCount.set(i, 0);
    }

    for (const num of nums) {
        numCount.set(num, numCount.get(num) + 1);
    }


    const output: number[] = [];

    for (const [num, count] of numCount) {
        if (count === 2) {
            output[0] = num;
        } else if (count === 0) {
            output[1] = num;
        }
    }

    return output;
};
