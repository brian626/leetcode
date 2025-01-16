function countPrefixSuffixPairs(words: string[]): number {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }

    return count;
};


function isPrefixAndSuffix(str1: string, str2: string): boolean {
    return str2.startsWith(str1) && str2.endsWith(str1);
}

const words = ["a","aba","ababa","aa"];

console.log(countPrefixSuffixPairs(words));
