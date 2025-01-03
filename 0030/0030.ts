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
