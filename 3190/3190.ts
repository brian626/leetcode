function minimumOperations(nums: number[]): number {
    let operations = 0;

    for (let i = 0; i < nums.length; i++) {
        switch (nums[i] % 3) {
            case 0:
                break;

            case 1:
            case 2:
                operations += 1;
                break;
        }
    }

    return operations;
};

const nums = [3,6,9]
console.log(minimumOperations(nums));
