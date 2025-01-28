import { isStrictlyIncreasing } from '../common/strictlyIncreasing';

function canBeIncreasing(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        const trimmed = nums.slice(0, i).concat(nums.slice(i + 1));

        if (isStrictlyIncreasing(trimmed)) {
            return true;
        }
    }

    return false;
};

const nums = [1, 1, 1];

console.log(canBeIncreasing(nums));
