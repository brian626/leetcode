// Find K Closest Elements

// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b


// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]


// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 10^4
// arr is sorted in ascending order.
// -10^4 <= arr[i], x <= 10^4

function findClosestElements(arr: number[], k: number, x: number): number[] {
    arr.sort((a,b) => {
        const diff1: number = Math.abs(a - x);
        const diff2: number = Math.abs(b - x);
        if (diff1 == diff2) {
            return a - b;
        }
        else {
            return diff1 - diff2;
        }
    })

    arr.length = k;

    return arr.sort((a,b) => a - b);
};

console.log(findClosestElements([1,2,3,4,5], 4, 3)); // Output: [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5], 4, -1)); // Output: [1,2,3,4]
