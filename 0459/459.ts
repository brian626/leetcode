// 459. Repeated Substring Pattern

// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.


// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Example 2:

// Input: s = "aba"
// Output: false

// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.


// Constraints:

// 1 <= s.length <= 10^4
// s consists of lowercase English letters.

function repeatedSubstringPattern(s: string): boolean {
    let factorSet: Set<number> = new Set
    for (let i = 1; i <= Math.ceil(Math.sqrt(s.length)); i++) {
        if (s.length % i == 0) {
            if (s.length != i) {
                factorSet.add(i)
            }

            factorSet.add(s.length / i)
        }
    }

    console.log(Array.from(factorSet.values()))
    const factors: number[] = Array.from(factorSet.values()).sort((a,b) => { return b - a })

    let ret = false
    factors.forEach(f => {
        let internalRet = false
        console.log(`  testing substrings of length ${f}`)
        if (!ret) {
            for (let i = 0; i <= s.length - f - f; i += f) {
                console.log(`  (i = ${i}, s.len = ${s.length}) does ${s.slice(i, i + f)} == ${s.slice(i + f, i + f + f)}?`)
                if (s.slice(i, i + f) !== s.slice(i + f, i + f + f)) {
                    console.log(`    nope`)
                    internalRet = false
                    break
                }
                else {
                    console.log(`    heck yea`)
                    internalRet = true
                }
            }
        }

        if (internalRet) { ret = true }
    })

    return ret
};

// console.log(repeatedSubstringPattern("abab"))
// console.log(repeatedSubstringPattern("aba"))
// console.log(repeatedSubstringPattern("abcabcabcabc"))
// console.log(repeatedSubstringPattern("ab"))
// console.log(repeatedSubstringPattern("zzz"))
console.log(repeatedSubstringPattern("ababba"))
