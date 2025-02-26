function findDifferentBinaryString(nums: string[]): string {
    const ints: number[] = nums.map(x => parseInt(x, 2));
    ints.sort((a, b) => a - b);

    for (let i = 0; i < Math.pow(2, 16); i++) {
        if (!ints.includes(i)) {
            return i.toString(2).padStart(nums.length, '0');
        }
    }
};
