function mergeAlternately(word1: string, word2: string): string {
    let mergedWord = '';

    for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
        mergedWord += word1[i] + word2[i];
    }

    if (word1.length > word2.length) {
        mergedWord += word1.slice(word2.length);
    }
    else if (word2.length > word1.length ) {
        mergedWord += word2.slice(word1.length);
    }

    return mergedWord;
};

console.log(mergeAlternately("abc", "pqr")) // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")) // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq")) // Output: "apbqcd"
