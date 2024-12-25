// 30. Substring with Concatenation of All Words

// You are given a string s and an array of strings words of the same length.
// Return all starting indices of substring(s) in s that is a concatenation of each
// word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.


// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []

// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]


// Constraints:

// 1 <= s.length <= 10^4
// s consists of lower-case English letters.
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// words[i] consists of lower-case English letters.

function matches(s: string, words: string[]): boolean {
    console.log(`matches called, s = "${s}", words = [${words}]`)
    let index = 0
    let wordLength = words[0].length
    let wordsCopy: string[] = Array.from(words)

    while (wordsCopy.length > 0 && index < s.length) {
        console.log(`loop starting, wordsCopy.length == ${wordsCopy.length}, index = ${index}, considering ${s.slice(index, index + wordLength)}`)
        let wordIndex = wordsCopy.indexOf(s.slice(index, index + wordLength))

        if (wordIndex == -1) {
            console.log(`  word not found, breaking`)
            break
            // return false
        }

        wordsCopy.splice(wordIndex, 1)
        index += wordLength
    }

    if (wordsCopy.length == 0) {
        console.log(`all words found, returning true`)
        return true
    }
    else {
        console.log(`${wordsCopy.length} not found, returning false`)
        return false
    }
}


function findSubstring(s: string, words: string[]): number[] {
    let indices: number[] = []
    const totalWordsLength: number = words.join("").length

    for (let i = 0; i <= s.length - totalWordsLength; i++) {
        if (matches(s.slice(i, i + totalWordsLength), words)) {
            indices.push(i)
        }
    }

    return indices
};

// console.log(findSubstring("barfoothefoobarman", ["foo","bar"]))
// Output: [0,9]

// console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]))
// Output: []

// console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]))
// Output: [6,9,12]
