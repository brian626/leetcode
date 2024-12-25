// 1704. Determine if String Halves Are Alike

// You are given a string s of even length. Split this string into two halves
// of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o',
// 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.


// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

// Example 3:

// Input: s = "MerryChristmas"
// Output: false

// Example 4:

// Input: s = "AbCdEfGh"
// Output: true


// Constraints:

// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

function halvesAreAlike(s: string): boolean {
    const left = s.slice(0, s.length / 2).toLowerCase()
    const right = s.slice(s.length / 2).toLowerCase()

    let leftCount = 0
    let rightCount = 0

    for (let i = 0; i < left.length; i++) {
        leftCount +=  (left[i] == "a" || left[i] == "e" || left[i] == "i" || left[i] == "o" || left[i] == "u") ? 1 : 0
        rightCount += (right[i] == "a" || right[i] == "e" || right[i] == "i" || right[i] == "o" || right[i] == "u") ? 1 : 0
    }

    return leftCount == rightCount
};

console.log(halvesAreAlike("book")) // Output: true

console.log(halvesAreAlike("textbook")) // Output: false

console.log(halvesAreAlike("MerryChristmas")) // Output: false

console.log(halvesAreAlike("AbCdEfGh")) // Output: true
