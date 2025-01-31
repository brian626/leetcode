function isStrictlyIncreasing(nums: number[]): boolean {
    console.log(nums);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            return false;
        }
    }

    return true;
}

function incremovableSubarrayCount(nums: number[]): number {
    let count = 1;

    for (let subarrayLength = 1; subarrayLength < nums.length; subarrayLength++) {
        for (let i = 0; i <= nums.length - subarrayLength; i++) {
            const trimmedArray = nums.slice(0, i).concat(nums.slice(i + subarrayLength));
            if (isStrictlyIncreasing(trimmedArray)) {
                count++;
            }
        }
    }

    return count;
};

const nums = [6, 5, 7, 8];

console.log(incremovableSubarrayCount(nums));
