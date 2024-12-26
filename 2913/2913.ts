function sumCounts(nums: number[]): number {
    const distinctCounts: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            distinctCounts.push(new Set(nums.slice(i, j + 1)).size);
        }
    }

    return distinctCounts.map(x => Math.pow(x, 2)).reduce((a, b) => a + b, 0);
};

const nums = [1,2,1]

console.log(sumCounts(nums));
