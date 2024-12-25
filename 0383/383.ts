// 383. Ransom Note

// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.


// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 10^5
// ransomNote and magazine consist of lowercase English letters.

function canConstruct(ransomNote: string, magazine: string): boolean {
    let result: boolean = true

    for (let i = 0; i < ransomNote.length; i++) {
        const ind = magazine.indexOf(ransomNote[i])
        if (ind == -1) {
            result = false
            break
        }
        else  {
            magazine = (ind < magazine.length) ? magazine.slice(0,ind) + magazine.slice(ind + 1) : magazine.slice(0,ind)
        }
    }

    return result
};


console.log(canConstruct("a", "b")) // Output: false
console.log(canConstruct("aa", "ab")) // Output: false
console.log(canConstruct("aa", "aab")) // Output: true
