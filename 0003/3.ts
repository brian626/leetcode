// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const DEBUG = false
function debug(s: string): void {
    if (DEBUG) {
        console.log(s)
    }
}

function lengthOfLongestSubstring(s: string): number {
    debug(s)

    let maxSubstring = ""
    let currentSubstring = ""

    for (let n = 0; n < s.length; n++) {
        const c = s[n];
        const indexOfC = currentSubstring.indexOf(c)

        debug(`does ${currentSubstring} include ${c}?`)
        if (indexOfC != -1) {
            if (currentSubstring.length > maxSubstring.length) {
                maxSubstring = currentSubstring
                debug(`  yes, new maxSubstring is ${maxSubstring}`)
            } else {
                debug(`  yes, but newMaxSubstring is shorter`)
            }
            currentSubstring = currentSubstring.substring(indexOfC + 1)
        }

        currentSubstring += c
    }

    return Math.max(currentSubstring.length, maxSubstring.length)
};

console.log(lengthOfLongestSubstring("abcabcbb")) // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")) // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")) // Output: 3
console.log(lengthOfLongestSubstring("")) // Output: 0
console.log(lengthOfLongestSubstring(" ")) // Output: 1
console.log(lengthOfLongestSubstring("abcde")) // Output: 5
console.log(lengthOfLongestSubstring("aab")) // Output: 2
console.log(lengthOfLongestSubstring("dvdf")) // Output: 3
console.log(lengthOfLongestSubstring("ohomm")) // Output: 3
