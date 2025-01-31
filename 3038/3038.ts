function maxOperations(nums: number[]): number {
    const element1 = nums.shift();
    const element2 = nums.shift();
    const sum = element1 + element2;
    let operations = 1;

    while (nums.length >= 2) {
        if (nums[0] + nums[1] === sum) {
            nums.shift();
            nums.shift();
            operations++;
        } else {
            break;
        }
    }

    return operations;
};
