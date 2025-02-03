import { isStrictlyIncreasing } from "../common/strictlyIncreasing";
import { isStrictlyDecreasing } from "../common/strictlyDecreasing";

function longestMonotonicSubarray(nums: number[]): number {
    let len = nums.length;

    while (len > 0) {
        for (let i = 0; i <= nums.length - len; i++) {
            const subarray = nums.slice(i, i + len);
            console.log(subarray);

            if (isStrictlyDecreasing(subarray) || isStrictlyIncreasing(subarray)) {
                return len;
            }
        }

        len--;
    }

    return len;
};

const nums = [3, 3, 3, 3];

console.log(longestMonotonicSubarray(nums));
