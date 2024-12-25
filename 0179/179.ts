// 179. Largest Number

// Given a list of non-negative integers nums, arrange them such that they form the largest number.

// Note: The result may be very large, so you need to return a string instead of an integer.


// Example 1:

// Input: nums = [10,2]
// Output: "210"

// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// Example 3:

// Input: nums = [1]
// Output: "1"

// Example 4:

// Input: nums = [10]
// Output: "10"


// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 10^9

function areDigitsAscending(digits: number[]): boolean {
    if (digits.length < 2) { return true }

    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] > digits[i+1]) {
            return false
        }
    }

    return true
}

function largestNumber(nums: number[]): string {
    if (nums.length == 1) { return nums.join('') }

    nums.sort((a,b) => {
        console.log(`comparing ${a} and ${b}`)
        if (a == b) { console.log(`  returning 0`); return 0 }

        const aDigits: number[] = a.toString().split('').map(x => parseInt(x, 10))
        const bDigits: number[] = b.toString().split('').map(x => parseInt(x, 10))

        if (aDigits[0] < bDigits[0]) { console.log(`  returning 1 a`); return 1 }
        else if (aDigits[0] > bDigits[0]) { console.log(`  returning -1 b`); return -1 }

        const aAscending: boolean = areDigitsAscending(aDigits)
        const bAscending: boolean = areDigitsAscending(bDigits)

        if (aAscending && !bAscending) { console.log(`  returning -1 c`); return -1 }
        else if (!aAscending && bAscending) { console.log(`  returning 1 d`); return 1 }

        console.log(`  returning ${b - a} e`);
        return b - a
    })

    return nums.join('')
};

// console.log(largestNumber([10]))
// // "10"

// console.log(largestNumber([10,2]))
// // Output: "210"

// console.log(largestNumber([3,30,34,5,9]))
// // Output: "9534330"

console.log(largestNumber([34323,3432]))
// "343234323"
