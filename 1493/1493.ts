function longestSubarray(nums: number[]): number {
    const numZeroes = nums.filter(x => x === 0).length;
    if (numZeroes < 2) { return nums.length - 1; }

    if (nums.length === 2) { return 0; }

    let start = 0;
    let end = 0;
    let numZeroesInWindow = (nums[start] === 0) ? 1 : 0;
    while (numZeroesInWindow < 2) {
        end++;
        if (nums[end] === 0) {
            numZeroesInWindow++;
        }
    }
    end--;
    numZeroesInWindow--;
    console.log(`first window is ${start}-${end}: [${nums.slice(start, end + 1)}]`);

    let maxSubArray = nums.slice(start, end + 1).filter(x => x === 1).length;

    while (start < nums.length) {
        if (nums[start] === 0) {
            start++;
            let numZeroesInWindow = 0;
            while (numZeroesInWindow < 2) {
                end++;
                if (end === nums.length) {
                    break;
                } else if (nums[end] === 0) {
                    numZeroesInWindow++;
                }
            }
            end--;
            numZeroesInWindow--;
            console.log(`next window is ${start}-${end}: [${nums.slice(start, end + 1)}]`);
        } else {
            while (nums[start] === 1) {
                start++;
            }
            let numZeroesInWindow = 1;
            while (numZeroesInWindow < 2) {
                end++;
                if (end === nums.length) {
                    break;
                } else if (nums[end] === 0) {
                    numZeroesInWindow++;
                }
            }
            end--;
            numZeroesInWindow--;
            console.log(`next window is ${start}-${end}: [${nums.slice(start, end + 1)}]`);
        }

        maxSubArray = Math.max(maxSubArray, end - start);
    }

    return maxSubArray;
};


const nums = [1,1,1];

console.log(longestSubarray(nums));
