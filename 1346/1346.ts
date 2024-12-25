// 1346. Check If N and Its Double Exist

// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]


// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Example 2:

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

// Example 3:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.


// Constraints:

// 2 <= arr.length <= 500
// -10^3 <= arr[i] <= 10^3

function checkIfExist(arr: number[]): boolean {
    let arr1 = arr.filter(x => x < 0);
    arr1.sort((a,b) => b - a);
    for (let i = 0; i < arr1.length; i++) {
        console.log(`does ${arr1.slice(i+1)} include ${arr1[i] * 2}?`)
        if (arr1.slice(i+1).includes(arr1[i] * 2)) {
            return true;
        }
    }

    let arr2 = arr.filter(x => x >= 0);
    arr2.sort((a,b) => a - b);
    for (let i = 0; i < arr2.length; i++) {
        console.log(`does ${arr2.slice(i+1)} include ${arr2[i] * 2}?`)
        if (arr2.slice(i+1).includes(arr2[i] * 2)) {
            return true;
        }
    }

    return false;
};

console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([-2,0,10,-19,4,6,-8]));
console.log(checkIfExist([-10,12,-20,-8,15]));
