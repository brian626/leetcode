// 1089. Duplicate Zeros

// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array
// in place and do not return anything.


// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]


// Constraints:

// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 9

/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr.join('')}: ${arr[i]}`);
        if (arr[i] === 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j-1];
            }

            if (i < arr.length - 1) { arr[i+1] = 0; }
            i += 1;
        }
    }
};

let arr = [1,0,2,3,0,4,5,0]
duplicateZeros(arr);
console.log(arr);

arr = [0,4,1,0,0,8,0,0,3];
duplicateZeros(arr);
console.log(arr);
