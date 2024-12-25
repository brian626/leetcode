function search(nums: number[], target: number): boolean {
    let lowIndex: number = 0
    let highIndex: number = nums.length - 1
    let curIndex = Math.floor((highIndex - lowIndex) / 2)

    while (true) {
        log(`start of loop - low: ${lowIndex}, high: ${highIndex}, cur: ${curIndex}`)

        if (target == nums[curIndex])       { return true; }
        else if (target == nums[lowIndex])  { return true; }
        else if (target == nums[highIndex]) { return true; }
        else if (target < nums[curIndex] && target < nums[lowIndex])   { log(`case a`); lowIndex = curIndex }
        else if (target > nums[curIndex] && target > nums[highIndex])  { log(`case b`); highIndex = curIndex }
        else if (target < nums[curIndex])   { log(`case c`); highIndex = curIndex }
        else if (target > nums[curIndex])   { log(`case d`); lowIndex = curIndex }

        if (lowIndex >= highIndex) { break }

        curIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2)
        log(`end of loop - low: ${lowIndex}, high: ${highIndex}, cur: ${curIndex}`)
    }

    return false;
};

const DEBUG: boolean = true;
function log(s: string): void {
    if (DEBUG) {
        console.log(s)
    }
}

const nums = [2,5,6,0,1];
const target = 3;

console.log(search(nums, target));
