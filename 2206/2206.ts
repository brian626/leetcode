function divideArray(nums: number[]): boolean {
    const numCount: Map<number, number> = new Map<number, number>();

    for (const num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }

    for (const [k, v] of numCount) {
        if (v % 2 !== 0) {
            return false;
        }
    }

    return true;
};
