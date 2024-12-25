function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for (let i = 0; i < k; i++) {
        const minValue = Math.min(...nums);
        const minValueIndex = nums.indexOf(minValue);
        nums[minValueIndex] *= multiplier;
    }

    return nums;
};

const nums = [1,2]
const k = 3;
const multiplier = 4;

console.log(getFinalState(nums, k, multiplier));
