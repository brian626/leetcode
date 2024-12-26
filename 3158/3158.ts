function duplicateNumbersXOR(nums: number[]): number {
    const numberCount: Map<number, number> = new Map<number, number>();

    for (const num of nums) {
        numberCount.set(num, (numberCount.get(num) || 0) + 1);
    }

    const twiceNums: number[] = [];
    for (const [n, c] of numberCount) {
        if (c === 2) {
            twiceNums.push(n);
        }
    }

    return twiceNums.reduce((a, b) => a ^ b, 0);
};

const nums = [1,2,2, 1];

console.log(duplicateNumbersXOR(nums));
