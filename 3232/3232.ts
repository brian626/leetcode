function canAliceWin(nums: number[]): boolean {
    const sumOfSingleDigits = nums.filter(x => x < 10).reduce((a, b) => a + b, 0);
    const sumOfDoubleDigits = nums.filter(x => x >= 10).reduce((a, b) => a + b, 0);

    return sumOfSingleDigits !== sumOfDoubleDigits;
};

const nums = [1,2,3,4,10]
console.log(canAliceWin(nums));
