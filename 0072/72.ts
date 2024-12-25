// 72. Edit Distance

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character


// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')


// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

let distMap: Map<[string, string], number> = new Map<[string, string], number>()

function minDistance(word1: string, word2: string): number {
    if (word1.length == 0)      { return word2.length }
    else if (word2.length == 0) { return word1.length }

    if (distMap.has([word1, word2])) { return distMap.get([word1, word2])}

    if (word1[0] == word2[0]) {
        const dist = minDistance(word1.slice(1), word2.slice(1))
        distMap.set([word1.slice(1), word2.slice(1)], dist)
        return dist
    }
    else {
        const insertDistance = minDistance(word1, word2.slice(1))
        distMap.set([word1, word2.slice(1)], insertDistance)

        const deleteDistance = minDistance(word1.slice(1), word2)
        distMap.set([word1.slice(1), word2], deleteDistance)

        const replaceDistance = minDistance(word1.slice(1), word2.slice(1))
        distMap.set([word1.slice(1), word2.slice(1)], replaceDistance)

        return 1 + Math.min(insertDistance, deleteDistance, replaceDistance)
    }
};

// console.log(minDistance("horse", "ros"))
// Output: 3

// console.log(minDistance("intention", "execution"))
// Output: 5

console.log(minDistance("dinitrophenylhydrazine", "acetylphenylhydrazine"))
