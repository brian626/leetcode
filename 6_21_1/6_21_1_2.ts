//   Interleaving String
// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1

// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

// Note: a + b is the concatenation of strings a and b.

// Example 1:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true

// Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false

// Example 3:

// Input: s1 = "", s2 = "", s3 = ""
// Output: true


// Constraints:

// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1, s2, and s3 consist of lowercase English letters.


// Follow up: Could you solve it using only O(s2.length) additional memory space?

function process(tuples: string[][]): string[][] {
    let newTuples: string[][] = []
    while (tuples.length > 0) {
        const tuple: string[] = tuples.shift()
        const s1: string = tuple[0]
        const s2: string = tuple[1]
        const s3: string = tuple[2]

        if (s1[0] !== undefined && s1[0] === s3[0]) {
            newTuples.push([s1.slice(1), s2, s3.slice(1)])
        }
        if (s2[0] !== undefined && s2[0] === s3[0]) {
            newTuples.push([s1, s2.slice(1), s3.slice(1)])
        }
    }

    let filteredTuples: string[][] = []
    for (let i = 0; i < newTuples.length; i++) {
        let present: boolean = false
        for (let j = 0; j < filteredTuples.length; j++) {
            const t1: string[] = newTuples[i]
            const t2: string[] = filteredTuples[j]

            if (t1[0] === t2[0] && t1[1] === t2[1] && t1[2] === t2[2]) { present = true; break }
        }

        if (!present) { filteredTuples.push(newTuples[i])}
    }

    return filteredTuples
}

function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1.length === 0 && s2.length === 0 && s3.length === 0) { return true }

    let tuples: string[][] = [[s1, s2, s3]]
    while (true) {
        console.log(tuples)
        tuples = process(tuples)

        let done: boolean = false
        tuples.forEach(t => {
            if (t[0] === '' && t[1] === '' && t[2] === '') { done = true }
        })

        if (tuples.length == 0 || done) { break }
    }

    console.log(tuples)
    return tuples.length !== 0
};

// console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))
// Output: true

// console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"))
// Output: false

// console.log(isInterleave("", "", ""))
// Output: true

// console.log(isInterleave("aa", "ab", "aaba"))
// Output: true
