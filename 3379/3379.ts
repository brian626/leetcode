function constructTransformedArray(nums: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let newIndex = nums[i] !== 0 ? i + nums[i] : i;

        while (newIndex >= nums.length) { newIndex -= nums.length; }
        while (newIndex < 0) { newIndex += nums.length; }

        result[i] = nums[newIndex];
    }
    return result;
};

const nums = [-1,4,-1]
console.log(constructTransformedArray(nums));
