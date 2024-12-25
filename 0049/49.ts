// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.


// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


// Constraints:

// 1 <= strs.length <= 10^4
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.

function groupAnagrams(strs: string[]): string[][] {
    let anagrams: Map<string, string[]> = new Map<string, string[]>()

    strs.forEach(s => {
        const sorted: string = s.split("").sort().join("")
        if (anagrams.has(sorted)) {
            let list: string[] = anagrams.get(sorted)
            list.push(s)
            anagrams.set(sorted, list)
        }
        else {
            anagrams.set(sorted, [s])
        }
    })

    return Array.from(anagrams.values())
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams([""]))
// Output: [[""]]

console.log(groupAnagrams(["a"]))
// Output: [["a"]]
