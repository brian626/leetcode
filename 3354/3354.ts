function countValidSelections(nums: number[]): number {
    let count = 0;

    let resultOfLastZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) { resultOfLastZero = 0; continue; }
        else if (resultOfLastZero !== 0) { count += resultOfLastZero; continue; }

        if (isValid(nums, i, 'left')) { resultOfLastZero++; count++; }
        if (isValid(nums, i, 'right')) { resultOfLastZero++; count++; }
    }

    return count;
};

function isValid(nums: number[], curr: number, direction: string): boolean {
    // console.log(`isValid: curr = ${curr}, direction = ${direction}`);
    let ret = false;

    const numsCopy = Array.from(nums);

    while (true) {
        // console.log(numsCopy);
        if (curr < 0 || curr >= numsCopy.length) { break; }

        if (numsCopy[curr] === 0) {
            if (direction === 'left') { curr--; }
            else { curr++; }
        } else {
            numsCopy[curr] -= 1;
            direction = direction === 'left' ? 'right' : 'left';
            if (direction === 'left') { curr--; }
            else { curr++; }
        }

        if (numsCopy.filter(x => x !== 0).length === 0) {
            ret = true;
            break;
        }
    }

    // console.log();
    return ret;
}


const nums = [91,80,83,81,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,35,31,34,33,36,36,32,36,33]

console.log(countValidSelections(nums));
