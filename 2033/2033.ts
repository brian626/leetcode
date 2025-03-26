function minOperations(grid: number[][], x: number): number {
    const nums = grid.flat();
    if (nums.length === 1) { return 0; }
    nums.sort((a, b) => a - b);

    const target = nums.length % 2 === 0 ? nums[(nums.length / 2) - 1] : nums[(nums.length - 1) / 2];

    let operations = 0;

    for (const num of nums) {
        const difference = Math.abs(num - target);
        if (difference % x !== 0) { return -1; }
        operations += (difference / x);
    }

    return operations;
};

const grid = [[529, 529, 989], [989, 529, 345], [989, 805, 69]];
const x = 92;
console.log(minOperations(grid, x));
