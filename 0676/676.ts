// 676. Implement Magic Dictionary

// Design a data structure that is initialized with a list of different words.
// Provided a string, you should determine if you can change exactly one character
// in this string to match any word in the data structure.

// Implement the MagicDictionary class:

// MagicDictionary() Initializes the object.
// void buildDict(String[] dictionary) Sets the data structure with an array of
//   distinct strings dictionary.
// bool search(String searchWord) Returns true if you can change exactly one character
//   in searchWord to match any string in the data structure, otherwise returns false.


// Example 1:

// Input
// ["MagicDictionary", "buildDict", "search", "search", "search", "search"]
// [[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
// Output
// [null, null, false, true, false, false]

// Explanation
// MagicDictionary magicDictionary = new MagicDictionary();
// magicDictionary.buildDict(["hello", "leetcode"]);
// magicDictionary.search("hello"); // return False
// magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return True
// magicDictionary.search("hell"); // return False
// magicDictionary.search("leetcoded"); // return False


// Constraints:

// 1 <= dictionary.length <= 100
// 1 <= dictionary[i].length <= 100
// dictionary[i] consists of only lower-case English letters.
// All the strings in dictionary are distinct.
// 1 <= searchWord.length <= 100
// searchWord consists of only lower-case English letters.
// buildDict will be called only once before search.
// At most 100 calls will be made to search.

class MagicDictionary {
    constructor() {
        this.dictionary = []
    }

    buildDict(dictionary: string[]): void {
        this.dictionary = dictionary.sort((a,b) => { return b.length - a.length })
    }

    search(searchWord: string): boolean {
        const searchList: string[] = this.dictionary.filter(x => (x.length === searchWord.length))
        let ret = false

        searchList.forEach(word => {
            if (this.differentByOneLetter(word, searchWord)) {
                ret = true
            }
        })

        return ret
    }

    differentByOneLetter(word1: string, word2: string): boolean {
        let numDifferentLetters = 0

        console.log(`considering ${word1} and ${word2}`)
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                numDifferentLetters += 1
            }

            if (numDifferentLetters > 1) {
                console.log(`  more than 1 difference, returning false`)
                return false
            }
        }

        console.log(`  ${numDifferentLetters} differences, returning ${numDifferentLetters === 1}`)
        return numDifferentLetters === 1
    }

    dictionary: string[]
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

let magicDictionary: MagicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
console.log(magicDictionary.search("hello")) // return False
console.log(magicDictionary.search("hhllo")) // We can change the second 'h' to 'e' to match "hello" so we return True
console.log(magicDictionary.search("hell")) // return False
console.log(magicDictionary.search("leetcoded")) // return False
