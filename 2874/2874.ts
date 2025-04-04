function maximumTripletValue(nums: number[]): number {
    const prefix_max: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        prefix_max[i] = Math.max(...nums.slice(0, i + 1));
    }

    const suffix_max: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        suffix_max[i] = Math.max(...nums.slice(i));
    }

    let maxVal = 0;

    for (let j = 1; j < nums.length - 1; j++) {
        maxVal = Math.max(maxVal, (prefix_max[j - 1] - nums[j]) * suffix_max[j + 1]);
    }

    return maxVal;
};
