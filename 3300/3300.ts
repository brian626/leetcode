function minElement(nums: number[]): number {
    return Math.min(...nums.map(x => x.toString().split('').map(x => parseInt(x)).reduce((a, b) => a + b, 0)));
};


const nums = [999,19,199];
console.log(minElement(nums));
