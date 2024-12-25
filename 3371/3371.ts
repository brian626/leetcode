function getLargestOutlier(nums: number[]): number {
    let maxOutlier = -1 * Math.pow(2,32);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) { continue; }

            const sumNum = nums[i];
            const outlier = nums[j];
            let sum = 0;
            for (let k = 0; k < nums.length; k++) {
                if (k === i || k === j) { continue; }
                sum += nums[k];
            }

            if (sum === sumNum) {
                maxOutlier = Math.max(maxOutlier, outlier);
            }
        }
    }

    return maxOutlier;
};

const nums = [1,1,1,1,1,5,5]

console.log(getLargestOutlier(nums));
