// 500. Keyboard Row

// Given an array of strings words, return the words that can be typed using letters
// of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".


// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

// Example 2:

// Input: words = ["omk"]
// Output: []

// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]


// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase).

function canBeMadeFromRow(row: string[], word: string): boolean {
    let ret = true

    for (let i = 0; i < word.length; i++) {
        if (row.indexOf(word[i].toLowerCase()) === -1) {
            ret = false
            break
        }
    }

    return ret
}

function findWords(words: string[]): string[] {
    const firstRow: string[] = "qwertyuiop".split("")
    const secondRow: string[] = "asdfghjkl".split("")
    const thirdRow: string[] = "zxcvbnm".split("")

    let output: string[] = []

    words.forEach(w => {
        if (canBeMadeFromRow(firstRow, w) || canBeMadeFromRow(secondRow, w) || canBeMadeFromRow(thirdRow, w)) {
            output.push(w)
        }
    })

    return output
};

console.log(findWords(["Hello","Alaska","Dad","Peace"])) // Output: ["Alaska","Dad"]
