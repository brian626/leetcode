function longestNiceSubarray(nums: number[]): number {
    const longest = Math.min(nums.length, 30);

    for (let i = longest; i >= 1; i--) {
        for (let j = 0; j <= nums.length - longest + 1; j++) {
            console.log(i, j);
            if (bitwiseAndPairsEqualZero(nums.slice(j, j + i))) {
                return i;
            }
        }
    }

    return 1;
};


function bitwiseAndPairsEqualZero(nums: number[]): boolean {
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] & nums[j]) !== 0) {
                return false;
            }
        }
    }

    return true;
}

const nums = [536870399, 890391654]

console.log(longestNiceSubarray(nums));
