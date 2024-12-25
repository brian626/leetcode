// 1758. Minimum Changes To Make Alternating Binary String

// You are given a string s consisting only of the characters '0' and '1'.
// In one operation, you can change any '0' to '1' or vice versa.

// The string is called alternating if no two adjacent characters are equal.
// For example, the string "010" is alternating, while the string "0100" is not.

// Return the minimum number of operations needed to make s alternating.


// Example 1:

// Input: s = "0100"
// Output: 1
// Explanation: If you change the last character to '1', s will be "0101", which is alternating.

// Example 2:

// Input: s = "10"
// Output: 0
// Explanation: s is already alternating.

// Example 3:

// Input: s = "1111"
// Output: 2
// Explanation: You need two operations to reach "0101" or "1010".


// Constraints:

// 1 <= s.length <= 10^4
// s[i] is either '0' or '1'.

function minOperations(s: string): number {
    let lastChar = s[0]
    let numOperations = 0

    for (let i = 1; i < s.length; i++) {
        console.log(`a: consider char #${i} == ${s[i]}`)
        if (s[i] == lastChar) {
            console.log(`  flipping it because the last char ${lastChar} was the same`)
            numOperations++
            lastChar = (lastChar == "1") ? "0" : "1"
        }
        else {
            lastChar = s[i]
        }
    }

    let flippedFirst = ((s[0] == "1") ? "0" : "1") + s.slice(1)
    console.log(`s: ${s}`)
    console.log(`flippedFirst: ${flippedFirst}`)
    lastChar = flippedFirst[0]
    let flippedFirstOperations = 1

    for (let i = 1; i < flippedFirst.length; i++) {
        console.log(`b: consider char #${i} == ${flippedFirst[i]}`)
        if (flippedFirst[i] == lastChar) {
            console.log(`  flipping it because the last char ${lastChar} was the same`)
            flippedFirstOperations++
            lastChar = (lastChar == "1") ? "0" : "1"
        }
        else {
            lastChar = s[i]
        }
    }

    return Math.min(numOperations, flippedFirstOperations)
};

// console.log(minOperations("0100")) // Output: 1
// console.log(minOperations("10")) // Output: 0
// console.log(minOperations("1111")) // Output: 2
console.log(minOperations("10010100")) // Output: 3
