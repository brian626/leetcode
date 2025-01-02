function longestOnes(nums: number[], k: number): number {
    const totalZeroes = nums.filter(x => x === 0).length;
    if (totalZeroes <= k) { return nums.length; }

    let start = 0;
    let end = 1;
    let numZeroesInWindow = 0;
    let numOnesInWindow = 0;
    if (nums[start] === 0) { numZeroesInWindow++; }
    if (nums[end] === 0) { numZeroesInWindow++; }
    if (k === 0) {
        if (nums[start] === 1) { numOnesInWindow++; }
        if (nums[end] === 1) { numOnesInWindow++; }
    }
    else if (k === 1) {
        if (nums[start] === 1) { numOnesInWindow++; }
        numOnesInWindow++;
    } else if (k > 1) {
        numOnesInWindow = 2;
    }

    let maxOnesInWindow = numOnesInWindow;

    let iterations = 0;
    let nextNumber = (end < nums.length - 1) ? nums[end + 1] : undefined;
    while (nextNumber !== undefined) {
        iterations++; if (iterations > 200) { break; }
        console.log(`window is [${nums.slice(start, end + 1)}], next number is ${nextNumber}`);

        if (nextNumber !== undefined) {
            if (nextNumber === 0) {
                if (numZeroesInWindow < k) {
                    // Case 1: Flip a zero at the start, extend the window
                    console.log(`Case 1: Flip a zero at the start, extend the window to ${numOnesInWindow + 1} ones`);
                    end++;
                    numZeroesInWindow++;
                    numOnesInWindow++;
                    maxOnesInWindow = Math.max(maxOnesInWindow, numOnesInWindow);
                } else {
                    if (nums[start] === 0) {
                        // Case 2: Unflip zero at the start, flip a zero at the end, shift window
                        console.log(`Case 2: Unflip zero at the start, flip a zero at the end, shift window`);
                        start++;
                        end++;
                    } else {
                        // Case 3: Shrink window
                        console.log(`Case 3: Shrink window to ${numOnesInWindow - 1} ones`);
                        start++;
                        if (numOnesInWindow > 0) {
                            numOnesInWindow--;
                        }
                    }
                }
            } else {
                if (numZeroesInWindow <= k) {
                    // Case 4: Extend the window
                    console.log(`Case 4: Extend the window to ${numOnesInWindow + 1} ones`);
                    end++;
                    numOnesInWindow++;
                    maxOnesInWindow = Math.max(maxOnesInWindow, numOnesInWindow);
                } else {
                    // Case 5: Shift window
                    console.log(`Case 5: Shrink window`);
                    if (nums[start] === 0) {
                        numZeroesInWindow--;
                    } else {
                        numOnesInWindow--;
                    }
                    start++;
                }
            }
        } else {
            console.log(`wtf`);
        }

        nextNumber = (end < nums.length - 1) ? nums[end + 1] : undefined;
        console.log();
    }

    return maxOnesInWindow;
};

const nums = [1,0,1,0]
const k = 0

console.log(longestOnes(nums, k));
