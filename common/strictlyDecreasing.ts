export function isStrictlyDecreasing(nums: number[]): boolean {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) {
            return false;
        }
    }

    return true;
}
