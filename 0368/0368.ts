function largestDivisibleSubset(nums: number[]): number[] {
    // nums.sort((a, b) => a - a);
    let largestAnswer: number[] = [];

    for (const num of nums) {
        if (num === 1) { continue; }
        const answer = nums.filter(x => ((x % num === 0) || (num % x === 0)));
        if (answer.length > largestAnswer.length) {
            largestAnswer = answer;
        }
    }

    return largestAnswer;
};

const nums = [3, 6, 9];
console.log(largestDivisibleSubset(nums));
