// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 1) {
        return strs[0]
    }

    let prefix = ""
    let i = 0
    const shortestString = strs.reduce((a, b) => a.length <= b.length ? a : b)
    const shortestLen = shortestString.length

    while (true) {
        let common = true

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != shortestString[i]) {
                common = false
                break
            }
        }

        if (common) {
            if (i < shortestLen) {
                prefix += shortestString[i++]
            }
            else {
                break
            }
        }
        else {
            break
        }
    }

    return prefix
};

const DEBUG_14: boolean = true
function log(s: string): void {
    if (DEBUG_14) {
        console.log(s)
    }
}

// console.log(`${longestCommonPrefix(["flower", "flow", "flight"])} should return "fl"`)
// console.log(`${longestCommonPrefix(["dog","racecar","car"])} should return ""`)
// console.log(`${longestCommonPrefix([""])} should return ""`)
// console.log(`${longestCommonPrefix(["", ""])} should return ""`)
// console.log(`${longestCommonPrefix(["apple", "appler", "applest"])} should return "apple"`)
// console.log(`${longestCommonPrefix(["map", "max", "man"])} should return "ma"`)
// console.log(`${longestCommonPrefix(["maps", "map", "mapping"])} should return "map"`)
// console.log(`${longestCommonPrefix(["reflower","flow","flight"])} should return ""`)
