function getMaximumXor(nums: number[], maximumBit: number): number[] {
    let answer: number[] = [];

    let numsXor = nums.reduce((a, b) => a ^ b);
    while (nums.length > 0) {
        let maxK = numsXor ^ (Math.pow(2, maximumBit) - 1);

        answer.push(maxK);

        const lastVal = nums.pop();
        numsXor ^= lastVal;
    }

    return answer;
};

const nums =[0,1,2,2,5,7]
const maximumBit = 3

console.log(getMaximumXor(nums, maximumBit));
