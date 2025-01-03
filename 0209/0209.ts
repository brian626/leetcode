function minSubArrayLen(target: number, nums: number[]): number {
    if (nums.reduce((a, b) => a + b, 0) < target) { return 0; }
    if (nums.find(x => x >= target)) { return 1; }
    if (nums.length === 1) { return 0; }

    const sortedNums = Array.from(nums).sort((a, b) => b - a);
    let maxSum = sortedNums[0] + sortedNums[1];
    let length = 2;
    while (maxSum < target) {
        maxSum += sortedNums[length];
        length++;
    }

    if (length === nums.length) { return length; }

    let low = length;
    let high = nums.length;

    while (high > (low + 1)) {
        console.log(`low, high, length, nums.length: `, low, high, length, nums.length);
        let tooHigh = false;
        let exactMatch = false;

        let windowSum = nums.slice(0, length).reduce((a, b) => a + b);
        let i = 0;

        while (i < nums.length) {
            // console.log(`do [${nums.slice(i, i + length)}] sum (${windowSum}) to at least ${target}?`);
            if (windowSum > target) {
                console.log(`too high`);
                tooHigh = true;
                break;
            } else if (windowSum === target) {
                console.log(`exact match`);
                exactMatch = true;
                break;
            // } else {
            //     console.log(`too low`);
            }
            windowSum -= nums[i];
            windowSum += nums[i + length];
            i += 1;
        }

        if (exactMatch) {
            high = length;
            break;
        }

        if (tooHigh) {
            high = length;
        } else {
            low = length;
        }

        length = Math.floor((low + high) / 2);
    }

    console.log(`low, high, length, nums.length: `, low, high, length, nums.length);
    return high;
};

const target = 7;
const nums = [2,3,1,2,4,3];

console.log(minSubArrayLen(target, nums));
