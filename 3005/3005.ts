function maxFrequencyElements(nums: number[]): number {
    const frequencies: number[] = [];

    for (const num of nums) {
        frequencies[num] = (frequencies[num] || 0) + 1;
    }

    const maxFrequency = Math.max(...frequencies.filter(x => x !== undefined));

    let count = 0;
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] === maxFrequency) {
            count += maxFrequency;
        }
    }

    return(count);
};

const nums = [1,2,2,3,1,4]

console.log(maxFrequencyElements(nums));
