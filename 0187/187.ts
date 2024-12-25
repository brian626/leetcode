// 187. Repeated DNA Sequences

// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences
// (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.


// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]


// Constraints:

// 1 <= s.length <= 10^5
// s[i] is either 'A', 'C', 'G', or 'T'.

function findRepeatedDnaSequences(s: string): string[] {
    let repeats: Set<string> = new Set<string>()

    for (let i = 0; i < s.length - 10; i++) {
        if (s.slice(i + 1).indexOf(s.slice(i, i + 10)) != -1) {
            repeats.add(s.slice(i, i + 10))
        }
    }

    return Array.from(repeats)
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"))
// Output: ["AAAAAAAAAA"]
