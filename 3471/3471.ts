function largestInteger(nums: number[], k: number): number {
    if (k === 1) {
        nums.sort((a, b) => b - a);
        for (const num of nums) {
            if (nums.filter(x => x === num).length === 1) {
                return num;
            }
        }
    }

    if (k === nums.length) {
        return Math.max(...nums);
    }

    const firstNum = nums[0];
    const lastNum = nums[nums.length - 1];
    const firstNumAppearances = nums.filter(x => x === firstNum).length;
    const lastNumAppearances = nums.filter(x => x === lastNum).length;
    if (firstNumAppearances > 1 && lastNumAppearances > 1) {
        return -1;
    } else if (firstNumAppearances > 1) {
        return lastNum;
    } else if (lastNumAppearances > 1) {
        return firstNum;
    } else if (firstNumAppearances === 1 && lastNumAppearances === 1) {
        return Math.max(firstNum, lastNum);
    }
};
