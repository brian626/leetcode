function countBadPairs(nums: number[]): number {
    const deltaMap: Map<number, number> = new Map<number, number>();
    for (let x = 0; x < nums.length; x++) {
        const deltaX = nums[x] - x;
        deltaMap.set(deltaX, (deltaMap.get(deltaX) || 0) + 1);
    }

    const totalPairs = nums.length * (nums.length - 1) / 2;
    let goodPairs = 0;
    for (const [k, v] of deltaMap) {
        if (v > 1) {
            goodPairs += (v * (v - 1) / 2);
        }
    }

    return totalPairs - goodPairs;
};

const nums = [1, 2, 3, 4, 5]

console.log(countBadPairs(nums));
