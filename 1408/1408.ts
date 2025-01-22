function stringMatching(words: string[]): string[] {
    const substrings: string[] = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) { continue; }

            if (isSubstring(words[i], words[j])) {
                substrings.push(words[i]);
            }
        }
    }

    return Array.from(new Set<string>(substrings));
};

function isSubstring(word1: string, word2: string): boolean {
    for (let i = 0; i <= word2.length - word1.length; i++) {
        // console.log(word1, word2.slice(i, i + word1.length));
        if (word1 === word2.slice(i, i + word1.length)) {
            return true;
        }
    }

    return false;
}


const words = ["leetcoder","leetcode","od","hamlet","am"];

console.log(stringMatching(words));
