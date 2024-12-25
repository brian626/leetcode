// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving
// the order of characters. No two characters may map to the same character, but a character may map to itself.


// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Constraints:

// 1 <= s.length <= 5 * 10^4
// t.length == s.length
// s and t consist of any valid ascii character.

function isIsomorphic(s: string, t: string): boolean {
    for (let i = 0; i < s.length; i++) {
        const c1 = s[i]
        const c2 = t[i]

        if (c1 != c2 && s.slice(0, i).indexOf(c2) == -1 && s.slice(i).indexOf(c2) == -1) {
            s = s.replace(new RegExp(c1, 'g'), c2)
        }
    }

    console.log(s)
    return s === t
};

console.log(isIsomorphic("egg", "add"))
// Output: true

console.log(isIsomorphic("foo", "bar"))
// Output: false

console.log(isIsomorphic("paper", "title"))
// Output: true

console.log(isIsomorphic("bbbaaaba", "aaabbbba"))
// Output: false

console.log(isIsomorphic("badc", "baba"))
// Output: false

console.log(isIsomorphic("egcd", "adfd"))
// Output: false

// console.log(isIsomorphic("p", "p"))
// console.log(isIsomorphic("p", "q"))
// console.log(isIsomorphic("pp", "pp"))
// console.log(isIsomorphic("pp", "pq"))
// console.log(isIsomorphic("pp", "qp"))
// console.log(isIsomorphic("pq", "qq"))
// console.log(isIsomorphic("qp", "qq"))

// console.log(isIsomorphic("pap", "qbq"))
// console.log(isIsomorphic("pap", "apa"))
