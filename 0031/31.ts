// 31. Next Permutation

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.


// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:
// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:
// Input: nums = [1,1,5]
// Output: [1,5,1]

// Example 4:
// Input: nums = [1]
// Output: [1]


// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

// 1) An sequence sorted in descending order does not have next permutation. For example edcba” does not have next permutation.
// 2) For a sequence which is not sorted in descending order for example “abedc”, we can follow below steps.
// ……….a) Traverse from right and find the first item that is not following the descending order. For example in “abedc”, the character ‘b’ does not follow the descending order.
// ……….b) Swap the found character with closest greater (or smallest greater) element on right side of it. In case of “abedc”, we have ‘c’ as the closest greater element. After swapping ‘b’ and ‘c’, string becomes “acedb”.
// ……….c) After swapping, sort the string after the position of character found in step a. After sorting the substring “edb” of “acedb”, we get “acbde” which is the required next permutation.

// Optimizations in step b) and c)
// a) Since the sequence is sorted in decreasing order, we can use binary search to find the closest greater element.
// c) Since the sequence is already sorted in decreasing order (even after swapping as we swapped with the closest greater), we can get the sequence sorted (in increasing order) after reversing it.

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const sortedInDescendingOrder: number[] = Array.from(nums).sort((a,b) => b - a);
    // console.log(`does [${nums.join('')}] === [${sortedInDescendingOrder.join('')}]?`);
    if (nums.join('') === sortedInDescendingOrder.join('')) { nums.sort((a,b) => a - b); return; }

    // Traverse from right and find the first item that is not following the descending order.
    let swapIndex: number = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i-1]) {
            swapIndex = i - 1;
            break;
        }
    }
    console.log(nums);
    console.log(swapIndex);

    // Swap the found item with closest greater (or smallest greater) element on right side of it.
    let smallestGreaterNumIndex: number = -1;
    let smallestGreaterNum: number = 101;
    for (let i = swapIndex + 1; i < nums.length; i++) {
        if (nums[i] > nums[swapIndex] && nums[i] < smallestGreaterNum) {
            smallestGreaterNum = nums[i];
            smallestGreaterNumIndex = i;
        }
    }
    let temp: number = nums[swapIndex]
    nums[swapIndex] = nums[smallestGreaterNumIndex]
    nums[smallestGreaterNumIndex] = temp;

    console.log(nums);

    // After swapping, sort the string after the position of character found in step a.
    const toSort: number[] = nums.slice(swapIndex + 1).sort((a,b) => a - b);
    nums.length = swapIndex + 1;
    nums.push.apply(nums, toSort);
};

let nums_31: number[]

// nums_31 = [1,2,3];
// nextPermutation(nums_31);
// console.log(nums_31); // Output: [1,3,2]

// nums_31 = [1,2,5,4,3];
// nextPermutation(nums_31);
// console.log(nums_31); // Output: [1,3,2]

// nums_31 = [3,2,1];
// nextPermutation(nums_31);
// console.log(nums_31); // Output: [3,2,1]

nums_31 = [5,4,7,5,3,2];
nextPermutation(nums_31);
console.log(nums_31); // Output: [5,5,2,3,4,7]
