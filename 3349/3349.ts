function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    let ret = false;
    for (let a = 0; a < nums.length - k; a++) {
        const b = a + k;
        if (b <= nums.length - k) {
            if (isStrictlyIncreasing(nums.slice(a, a + k)) && isStrictlyIncreasing(nums.slice(b, b + k))) {
                console.log(`[${nums.slice(a, a + k)}], [${nums.slice(b, b + k)}]`);
                ret = true;
                break;
            }
        }
    }

    return ret;
};

function isStrictlyIncreasing(nums: number[]): boolean {
    let ret = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i+1]) {
            ret = false;
            break;
        }
    }

    return ret;
}


const nums = [-15,19];
const k = 1;

console.log(hasIncreasingSubarrays(nums, k));
