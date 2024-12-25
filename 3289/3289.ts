function getSneakyNumbers(nums: number[]): number[] {
    const numberSet: Set<number> = new Set<number>();

    const sneakyNumbers: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (numberSet.has(nums[i])) {
            sneakyNumbers.push(nums[i]);
        } else {
            numberSet.add(nums[i]);
        }
    }

    return sneakyNumbers;
};

const nums = [7,1,5,4,3,4,6,0,9,5,8,2];

console.log(getSneakyNumbers(nums));
