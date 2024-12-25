// 58. Length of Last Word

// Given a string s consists of some words separated by spaces, return the length
// of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.


// Example 1:

// Input: s = "Hello World"
// Output: 5

// Example 2:

// Input: s = " "
// Output: 0


// Constraints:

// 1 <= s.length <= 10^4
// s consists of only English letters and spaces ' '.

function lengthOfLastWord(s: string): number {
    s = s.trim()
    if (s.length == 0) { return 0 }

    let words = s.replace(/ +/g, " ").split(" ")

    return words[words.length - 1].length
};

console.log(lengthOfLastWord("Hello World")) // Output: 5
console.log(lengthOfLastWord(" ")) // Output: 0
console.log(lengthOfLastWord("  Hello   World  ")) // Output: 5
console.log(lengthOfLastWord("    ")) // Output: 0
