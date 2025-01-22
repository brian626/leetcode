function subarraySum(nums: number[]): number {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const start = Math.max(0, i - nums[i]);
        sum += nums.slice(start, i+1).reduce((a,b) => a + b, 0);
    }

    return sum;
};

const nums = [2,3,1];

console.log(subarraySum(nums));
