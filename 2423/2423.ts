function equalFrequency(word: string): boolean {
    const letterCount: Map<string, number> = new Map<string, number>();

    for (const c of word.split('')) {
        letterCount.set(c, (letterCount.get(c) || 0) + 1);
    }

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        if (!letterCount.has(String.fromCharCode(i))) {
            continue;
        }

        letterCount.set(String.fromCharCode(i), letterCount.get(String.fromCharCode(i)) - 1);

        if (areFrequenciesEqual(letterCount)) {
            return true;
        }

        letterCount.set(String.fromCharCode(i), letterCount.get(String.fromCharCode(i)) + 1);
    }

    return false;
};


function areFrequenciesEqual(letterCount: Map<string, number>): boolean {
    console.log(letterCount);
    let expectedCount;

    for (const [letter, count] of letterCount) {
        if (count > 0 && expectedCount === undefined) {
            expectedCount = count;
        }

        if (count > 0 && count !== expectedCount) {
            console.log(`unequal to due letter ${letter}`);
            return false;
        }
    }

    return true;
}
