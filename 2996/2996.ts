function missingInteger(nums: number[]): number {
    let i = 0;
    while (i < nums.length - 1) {
        if (nums[i] !== nums[i + 1] - 1) {
            break;
        }

        i++;
    }

    console.log(nums.slice(0, i + 1));
    let sum = nums.slice(0, i + 1).reduce((a, b) => a + b, 0);
    while (nums.includes(sum)) {
        sum++;
    }

    return sum;
};

const nums = [3, 4, 5, 1, 12, 14, 13]

console.log(missingInteger(nums));
