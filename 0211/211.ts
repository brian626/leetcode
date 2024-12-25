// 211. Design Add and Search Words Data Structure

// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false
//   otherwise. word may contain dots '.' where dots can be matched with any letter.


// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True


// Constraints:

// 1 <= word.length <= 500
// word in addWord consists lower-case English letters.
// word in search consist of  '.' or lower-case English letters.
// At most 50000 calls will be made to addWord and search.

import { Trie, TrieNode } from './trie';

class WordDictionary {
    constructor() {
        this.trie = new Trie();
    }

    addWord(word: string): void {
        this.trie.insert(word);
    }

    search(word: string): boolean {
        let words: string[] = [word]
        while (words.length > 0) {
            // console.log(`words: [${words}]`)
            let searchWord: string = words.shift();

            // If there are no wildcards, search the trie directly.
            if (searchWord.indexOf('.') === -1) {
                if (this.trie.search(searchWord)) { return true; }
            }
            else {
                const dotPosition: number = searchWord.indexOf('.');
                const prefix: TrieNode = this.trie.searchPrefix(searchWord.slice(0, dotPosition));
                if (prefix) {
                    for (let i = 0; i < TrieNode.R; i++) {
                        const searchChar: string = String.fromCharCode('a'.charCodeAt(0) + i);
                        if (prefix.get(searchChar)) {
                            // console.log(`found ${searchChar}, pushing ${searchWord.slice(0, dotPosition) + searchChar + searchWord.slice(dotPosition + 1)}`)
                            words.push(searchWord.slice(0, dotPosition) + searchChar + searchWord.slice(dotPosition + 1));
                        }
                    }
                }
            }
        }

        return false;
    }

    trie: Trie;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let wordDictionary: WordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// console.log(wordDictionary.search("pad")); // return False
// console.log(wordDictionary.search("bad")); // return True
// console.log(wordDictionary.search(".ad")); // return True
// console.log(wordDictionary.search("b..")); // return True
// console.log(wordDictionary.search("f..")); // return False
// console.log(wordDictionary.search(".f.")); // return False
// console.log(wordDictionary.search("..f")); // return False
// console.log(wordDictionary.search("ff.")); // return False
// console.log(wordDictionary.search("f.f")); // return False
// console.log(wordDictionary.search("ff.")); // return False

// wordDictionary.addWord("at");
// wordDictionary.addWord("and");
// wordDictionary.addWord("an");
// wordDictionary.addWord("add");
// console.log(wordDictionary.search("a")) // false
// console.log(wordDictionary.search(".at")) // false
// wordDictionary.addWord("bat")
// console.log(wordDictionary.search(".at")); // true
// console.log(wordDictionary.search("an.")); // true
// console.log(wordDictionary.search("a.d.")); // false
// console.log(wordDictionary.search("b.")); // false
// console.log(wordDictionary.search("a.d")); // true
// console.log(wordDictionary.search(".")); // false

// wordDictionary.addWord('aa');
// wordDictionary.addWord('ab');
// wordDictionary.addWord('ac');
// wordDictionary.addWord('ad');
// wordDictionary.addWord('ae');
// wordDictionary.addWord('af');
// wordDictionary.addWord('ag');
// wordDictionary.addWord('ah');
// wordDictionary.addWord('ai');
// wordDictionary.addWord('aj');
// wordDictionary.addWord('ak');
// wordDictionary.addWord('al');
// wordDictionary.addWord('am');
// wordDictionary.addWord('an');
// wordDictionary.addWord('ao');
// wordDictionary.addWord('ap');
// wordDictionary.addWord('aq');
// wordDictionary.addWord('ar');
// wordDictionary.addWord('as');
// wordDictionary.addWord('at');
// wordDictionary.addWord('au');
// wordDictionary.addWord('av');
// wordDictionary.addWord('aw');
// wordDictionary.addWord('ay');
// wordDictionary.addWord('ax');
// console.log(wordDictionary.search(".")); // false
