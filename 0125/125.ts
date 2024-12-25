// 125. Valid Palindrome

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 10^5
// s consists only of printable ASCII characters.

function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "")

    for (let i = 0; i <= s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false
        }
    }

    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
// Output: true

console.log(isPalindrome("race a car"))
// Output: false

console.log(isPalindrome("r")) // true
console.log(isPalindrome("rr")) // true
console.log(isPalindrome("rs")) // false
console.log(isPalindrome("rar")) // true
console.log(isPalindrome("rrs")) // false
console.log(isPalindrome("srr")) // false
console.log(isPalindrome("raar")) // true
console.log(isPalindrome("rsar")) // false
console.log(isPalindrome("rasr")) // false
console.log(isPalindrome("aabaa")) // false
