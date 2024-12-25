// 941. Valid Mountain Array

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]


// Example 1:

// Input: arr = [2,1]
// Output: false

// Example 2:

// Input: arr = [3,5,5]
// Output: false

// Example 3:

// Input: arr = [0,3,2,1]
// Output: true


// Constraints:

// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 10^4

function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) { return false; }

    let direction = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i+1]) {
            if (direction === 1) { continue; }
            else { return false; }
        }
        else if (arr[i] > arr[i+1]) {
            if (direction === 1) { direction = -1; }
        }
        else {
            return false;
        }
    }

    return true;
};

console.log(validMountainArray([2,1])); // Output: false
console.log(validMountainArray([3,5,5])); // Output: false
console.log(validMountainArray([0,3,2,1])); // true
