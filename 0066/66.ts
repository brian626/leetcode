// 66. Plus One

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.


// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:

// Input: digits = [0]
// Output: [1]


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

function plusOne(digits: number[]): number[] {
    let index: number = digits.length - 1
    let carry: number = 0
    while (true) {
        if (index < 0) {
            digits.unshift(carry)
            break
        }
        else {
            let lastDigit: number = digits[index]
            lastDigit = lastDigit + 1
            if (lastDigit <= 9) {
                digits[index] = lastDigit
                break
            }
            else {
                carry = 1
                digits[index--] = (lastDigit % 10)
            }
        }
    }

    return digits
};

console.log(plusOne([1,2,3]))
// Output: [1,2,4]

console.log(plusOne([4,3,2,1]))
// Output: [4,3,2,2]

console.log(plusOne([0]))
// Output: [1]

console.log(plusOne([9]))
// Output: [1,0]

console.log(plusOne([9,9]))
// Output: [1,0,0]

console.log(plusOne([1,9]))
// Output: [2,0]

console.log(plusOne([1,9,9]))
// Output: [2,0,0]

console.log(plusOne([1,4,9]))
// Output: [1,5,0]

console.log(plusOne([1,2,4,9]))
// Output: [1,2,5,0]

console.log(plusOne([8,9,9,9]))
// Output: [9,0,0,0]
