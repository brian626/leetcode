// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.


// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Example 3:

// Input: s = "a"
// Output: "a"

// Example 4:

// Input: s = "ac"
// Output: "a"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

// Length 1 - always a palindrome
// Length 2 - s[0] === s[1]
// Length n - s[0] === s[n-1], s[1] === s[n-2], etc
function isPalindrome(s: string): boolean {
    let ret: boolean = true

    const len = s.length
    if (len == 1) {
        ;
    }
    else if (len == 2) {
        ret = (s[0] === s[1])
    }
    else {
        for (let n = 0; n < len; n++) {
            ret = (s[n] === s[len - n - 1])
            if (!ret) {
                break
            }
        }
    }

    return ret
}


function generateSubstrings(s: string, n: number): string[] {
    let substrings = []

    let start = 0
    let end = n
    while (end <= s.length) {
        // console.log(`start ${start}, end ${end}`)
        substrings.push(s.substring(start, end))
        start += 1
        end += 1
    }

    return substrings
}

// Check input string (length n)
// If it's not a palindrome, check the two strings of length n-1
// Then check the three strings of length n-2
// Etc
// Repeat until a palindrome is found - since we're searching in order of
//   decreasing length, any palindrome will be the longest
function longestPalindrome(s: string): string {
    let ret: string

    if (isPalindrome(s)) {
        // console.log(`1`)
        ret = s
    }
    else {
        let len = s.length - 1
        while (len >= 1) {
            // console.log(`2 len = ${len}`)
            const substrings = generateSubstrings(s, len)
            substrings.forEach(s => {
                if (!ret && isPalindrome(s)) {
                    ret = s
                }
            });

            if (ret) {
                break
            }

            len -= 1
        }
    }

    return ret
};


// console.log(isPalindrome("a"))     // true
// console.log(isPalindrome("aa"))    // true
// console.log(isPalindrome("ab"))    // false
// console.log(isPalindrome("aaa"))   // true
// console.log(isPalindrome("aba"))   // true
// console.log(isPalindrome("abc"))   // false
// console.log(isPalindrome("aaaa"))  // true
// console.log(isPalindrome("abba"))  // true
// console.log(isPalindrome("abca"))  // false
// console.log(isPalindrome("abab"))  // false
// console.log(isPalindrome("abcd"))  // false
// console.log(isPalindrome("aaaaa")) // true
// console.log(isPalindrome("aabaa")) // true
// console.log(isPalindrome("ababa")) // true
// console.log(isPalindrome("abbba")) // true
// console.log(isPalindrome("ababb")) // false
// console.log(isPalindrome("aabba")) // false
// console.log(isPalindrome("abcde")) // false


// console.log(generateSubstrings("ab", 1))  // ['a', 'b']
// console.log(generateSubstrings("abc", 1)) // ['a', 'b', 'c']
// console.log(generateSubstrings("abc", 2)) // ['ab', 'bc']
// console.log(generateSubstrings("abcd", 1)) // ['a', 'b', 'c', 'd']
// console.log(generateSubstrings("abcd", 2)) // ['ab', 'bc', 'cd']
// console.log(generateSubstrings("abcd", 3)) // ['abc', 'bcd']

// console.log(longestPalindrome("babad")) // Output: "bab"
// console.log(longestPalindrome("cbbd")) // Output: "bb"
// console.log(longestPalindrome("ac")) // Output: "a"
// console.log(longestPalindrome("a")) // Output: "a"
// console.log(longestPalindrome("aa")) // Output: "aa"
// console.log(longestPalindrome("ab")) // Output: "a"
// console.log(longestPalindrome("aaa")) // Output: "aaa"
// console.log(longestPalindrome("aba")) // Output: "aba"
// console.log(longestPalindrome("abc")) // Output: "a"
// console.log(longestPalindrome("aaaa")) // Output: "aaaa"
// console.log(longestPalindrome("abba")) // Output: "abba"
// console.log(longestPalindrome("abca")) // Output: "a"
// console.log(longestPalindrome("abab")) // Output: "aba"
// console.log(longestPalindrome("abcd")) // Output: "a"
// console.log(longestPalindrome("aaaaa")) // Output: "aaaaa"
// console.log(longestPalindrome("aabaa")) // Output: "aabaa"
// console.log(longestPalindrome("ababa")) // Output: "ababa"
// console.log(longestPalindrome("abbba")) // Output: "abbba"
// console.log(longestPalindrome("ababb")) // Output: "aba"
// console.log(longestPalindrome("aabba")) // Output: "abba"
// console.log(longestPalindrome("abcde")) // Output: "a"
