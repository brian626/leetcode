function minimumSumSubarray(nums: number[], l: number, r: number): number {
    let minSum = Infinity;

    for (let i = 0; i < nums.length; i++) {
        for (let j = l; j <= r; j++) {
            const numsSlice = nums.slice(i, i + j);
            if (numsSlice.length >= l) {
                let sum = numsSlice.reduce((a, b) => a + b, 0);
                if (sum > 0) {
                    console.log(`nums[${i}] to nums[${i + j}]: [${numsSlice}] with a sum of ${sum}`);
                    minSum = Math.min(minSum, sum);
                }
            }
        }
    }

    return minSum === Infinity ? -1 : minSum;
};

const nums = [1, 2, 3, 4]
const l = 2;
const r = 4;

console.log(minimumSumSubarray(nums, l, r));
