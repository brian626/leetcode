function findScore(nums: number[]): number {
    let score = 0;
    const BIGNUM = Math.pow(10, 7);
    let numMarked = 0;

    let sortedNums = Array.from(nums).sort((a, b) => a - b);

    while (sortedNums.length > 0) {
        const smallestValue = sortedNums.shift();
        const smallestValueIndex = nums.indexOf(smallestValue);
        if (smallestValueIndex === -1) { continue; }

        score += nums[smallestValueIndex];

        if (nums[smallestValueIndex] !== BIGNUM) {
            console.log(`marking nums[${smallestValueIndex}]`);
            nums[smallestValueIndex] = BIGNUM;
            numMarked++;
        }

        if (smallestValueIndex > 0) {
            if (nums[smallestValueIndex - 1] !== BIGNUM) {
                console.log(`marking nums[${smallestValueIndex - 1}]`);
                numMarked++;
                nums[smallestValueIndex - 1] = BIGNUM;
            }
        }
        if (smallestValueIndex < nums.length - 1) {
            if (nums[smallestValueIndex + 1] !== BIGNUM) {
                console.log(`marking nums[${smallestValueIndex + 1}]`);
                nums[smallestValueIndex + 1] = BIGNUM;
                numMarked++;
            }
        }

        console.log(nums);
        console.log();
    }

    console.log(numMarked, nums.length);
    return score;
};


const nums = [10, 44, 10, 8, 48, 30, 17, 38, 41, 27, 16, 33, 45, 45, 34, 30, 22, 3, 42, 42];

console.log(findScore(nums));
