function pivotIndex(nums: number[]): number {
    let index = -1;
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b, 0);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0) {
            leftSum += nums[i-1];
        }
        rightSum -= nums[i];
        console.log(leftSum,rightSum);
        if (leftSum === rightSum) {
            index = i;
            break;
        }
    }

    return index;
};

const nums = [2,1,-1]

console.log(pivotIndex(nums));
