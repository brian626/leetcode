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
