// 28. Implement strStr()

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:

// Input: haystack = "", needle = ""
// Output: 0


// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 10^4
// haystack and needle consist of only lower-case English characters.

function strStr(haystack: string, needle: string): number {
    if (needle.length == 0) {
        return 0
    }
    if (needle.length > haystack.length) {
        return -1
    }

    let index = -1
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        console.log(`comparing ${haystack.slice(i, i + needle.length)} with ${needle}`)
        if (haystack.slice(i, i + needle.length) === needle) {
            index = i
            break
        }
    }

    return index
};

// console.log(strStr("hello", "ll")) // Output: 2
// console.log(strStr("aaaaa", "bba")) // Output: -1
// console.log(strStr("", "")) // Output: 0
// console.log(strStr("a", "bb")) // Output: -1
// console.log(strStr("hello", "hello")) // Output: 0
// console.log(strStr("hello", "lo")) // Output: 3
// console.log(strStr("hello", "lp")) // Output: -1
// console.log(strStr("hello", "oo")) // Output: -1
// console.log(strStr("hello", "o")) // Output: 4
// console.log(strStr("hello", "h")) // Output: 0
console.log(strStr("hello", "he")) // Output: 0
