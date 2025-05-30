// 1446. Consecutive Characters

// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.


// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

// Example 3:

// Input: s = "triplepillooooow"
// Output: 5

// Example 4:

// Input: s = "hooraaaaaaaaaaay"
// Output: 11

// Example 5:

// Input: s = "tourist"
// Output: 1


// Constraints:

// 1 <= s.length <= 500
// s contains only lowercase English letters.

function maxPower(s: string): number {
    let letterCount = new Map()
    let currentLetter: string = ""
    let currentLetterCount: number = 0

    currentLetter = s[0]
    currentLetterCount = 1
    letterCount[currentLetterCount] = 1

    for (let i = 1; i < s.length; i++)
    {
        const letter = s[i]
        if (letter == currentLetter) {
            currentLetterCount += 1

            if (i == s.length - 1) {
                if (letterCount[currentLetter] === undefined || currentLetterCount > letterCount[currentLetter]) {
                    letterCount[currentLetter] = currentLetterCount
                }
            }
        }
        else {
            if (letterCount[currentLetter] === undefined || currentLetterCount > letterCount[currentLetter]) {
                letterCount[currentLetter] = currentLetterCount
            }

            currentLetter = letter
            currentLetterCount = 1
        }
    }

    let max = 0
    for (let key in letterCount) {
        if (letterCount[key] > max) {
            max = letterCount[key]
        }
    }

    return max
};

console.log(maxPower("leetcode")) // Output: 2
console.log(maxPower("abbcccddddeeeeedcba")) // Output: 5
console.log(maxPower("triplepillooooow")) // Output: 5
console.log(maxPower("hooraaaaaaaaaaay")) // Output: 11
console.log(maxPower("tourist")) // Output: 1
console.log(maxPower("leetcodeeee")) // Output: 4
console.log(maxPower("touristzz")) // Output: 2
console.log(maxPower("j")) // Output: 1
