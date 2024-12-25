// 1047. Remove All Adjacent Duplicates In String

// You are given a string s. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed the answer is unique.


// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

// Example 2:

// Input: s = "azxxzy"
// Output: "ay"


// Constraints:

// 1 <= s.length <= 10^5
// s consists of lowercase English letters.

function removeDuplicates(s: string): string {
    if (s.length == 1) { return s }

    let i = 0
    while (i < s.length - 1) {
        if (s[i] === s[i+1]) {
            s = s.slice(0, i) + s.slice(i+2)
            i = (i > 0) ? i - 1 : 0
        }
        else {
            i++
        }
    }

    return s
};

// console.log(removeDuplicates("abbaca")) // Output: "ca"
// console.log(removeDuplicates("azxxzy")) // Output: "ay"
console.log(removeDuplicates("x")) // Output: "x"
console.log(removeDuplicates("xx")) // Output: ""
console.log(removeDuplicates("axx")) // Output: "a"
console.log(removeDuplicates("xxa")) // Output: "a"
console.log(removeDuplicates("axxa")) // Output: ""
