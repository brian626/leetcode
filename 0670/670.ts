// 670. Maximum Swap

// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.


// Example 1:

// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.

// Example 2:

// Input: num = 9973
// Output: 9973
// Explanation: No swap.


// Constraints:

// 0 <= num <= 10^8

function maximumSwap(num: number): number {
    let max = num
    let digits: number[] = num.toString().split("").map(x => parseInt(x, 10))

    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[j] <= digits[i]) { continue }

            [digits[i], digits[j]] = [digits[j], digits[i]]

            console.log(`considering ${digits.join("")}`)
            let swappedNum = parseInt(digits.join(""), 10)
            if (swappedNum > max) { max = swappedNum }

            [digits[i], digits[j]] = [digits[j], digits[i]]
        }
    }

    return max
};

console.log(maximumSwap(2736)) // Output: 7236
console.log(maximumSwap(9973)) // Output: 9973
