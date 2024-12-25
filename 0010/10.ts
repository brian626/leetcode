// 10. Regular Expression Matching

// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).


// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

// Example 4:

// Input: s = "aab", p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

// Example 5:

// Input: s = "mississippi", p = "mis*is*p*."
// Output: false


// Constraints:

// 0 <= s.length <= 20
// 0 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

function isMatch(s: string, p: string): boolean {
    const re = new RegExp(p)
    let match = s.match(re)

    return (match === null) ? false : match[0] === s
};

// console.log(isMatch("aa", "a"))
// // Output: false

// console.log(isMatch("aa", "a*"))
// // Output: true

// console.log(isMatch("ab", ".*"))
// // Output: true

// console.log(isMatch("aab", "c*a*b"))
// // Output: true

// console.log(isMatch("mississippi", "mis*is*p*."))
// // Output: false

console.log("should be true")
console.log(isMatch("aa", "a*"))                  // Output: true
console.log(isMatch("ab", ".*"))                  // Output: true
console.log(isMatch("aab", "c*a*b"))              // Output: true
console.log(isMatch("aaa", "a*a"))                // Output: true
console.log(isMatch("aaa", "a.a"))                // Output: true
console.log(isMatch("aaa", "ab*a*c*a"))           // Output: true
console.log(isMatch("", ".*"))                    // Output: true
console.log(isMatch("aasdfasdfasdfasdfas", "aasdf.*asdf.*asdf.*asdf.*s")) // Output: true
console.log(isMatch("abcdede", "ab.*de"))         // Output: true
console.log("should be false")
console.log(isMatch("a", ".*..a*"))               // Output: false
console.log(isMatch("aa", "a"))                   // Output: false
console.log(isMatch("mississippi", "mis*is*p*.")) // Output: false
console.log(isMatch("aaa", "aaaa"))               // Output: false
console.log(isMatch("a", "ab*a"))                 // Output: false
console.log(isMatch("abb", "bbb*"))               // Output: false
