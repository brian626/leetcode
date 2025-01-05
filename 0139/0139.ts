function wordBreak(s: string, wordDict: string[]): boolean {
    const words: string[] = [s];

    let iterations = 0;
    while (words.length > 0) {
        iterations++;
        // if (iterations > 1000) { break; }
        console.log(words);

        const word = words.shift();
        for (const d of wordDict) {
            if (word === d) {
                return true;
            }

            if (word.startsWith(d)) {
                let tempWord = word.slice(d.length);
                if (!words.includes(tempWord)) { words.push(tempWord); }

                while (tempWord.startsWith(d)) {
                    tempWord = tempWord.slice(d.length);
                    if (!words.includes(tempWord)) { words.push(tempWord); }
                }

                if (tempWord.length === 0) {
                    return true;
                }

                if (!words.includes(tempWord)) { words.push(tempWord); }
            }
        }
    }

    return false;
};

const s = "catskicatcats"

const wordDict = ["cats", "cat", "dog", "ski"]


console.log(wordBreak(s, wordDict));
