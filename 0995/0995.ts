function minKBitFlips(nums: number[], k: number): number {
    let pos = 0;
    let numSteps = 0;

    console.log(pos, nums);
    while (pos < nums.length - (k - 1)) {
        if (nums[pos] === 0) {
            nums[pos] = 1;
            for (let i = 1; i < k; i++) {
                nums[pos + i] = nums[pos + i] === 0 ? 1 : 0;
            }
            numSteps++;
        }

        pos++;
        console.log(pos, nums);
    }

    if (nums.filter(x => x !== 1).length === 0) {
        return numSteps;
    } else {
        return -1;
    }

};

const nums = [0, 1, 0];
const k = 1;

console.log(minKBitFlips(nums, k));
