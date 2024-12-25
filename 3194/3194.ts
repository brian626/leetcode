function minimumAverage(nums: number[]): number {
    let averages: number[] = [];

    nums.sort((a, b) => a - b);

    while (nums.length > 0) {
        const minElement = nums.shift();
        const maxElement = nums.pop();
        averages.push((minElement + maxElement) / 2);
    }

    return Math.min(...averages);
};

const nums = [7,8,3,4,15,13,4,1];

console.log(minimumAverage(nums));
