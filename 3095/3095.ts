function minimumSubarrayLength(nums: number[], k: number): number {
    let start = 0;
    let end = 1;
    let minLength = Infinity;

    let iterations = 0;
    while (start < nums.length && end <= nums.length && start < end) {
        iterations++;
        if (iterations > 100) { break; }

        console.log(start, end, nums.slice(start, end));

        // Does the current window meet the requirement?
        if (nums.slice(start, end).reduce((a, b) => a | b, 0) >= k) {
            minLength = Math.min(minLength, end - start);
            start++;
        } else {
            end++;
        }
    }

    return minLength !== Infinity ? minLength : -1;
};

const nums = [1, 2]
const k = 0

console.log(minimumSubarrayLength(nums, k));
