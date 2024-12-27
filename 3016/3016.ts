function minimumPushes(word: string): number {
    const letterFrequency: Map<string, number> = new Map<string, number>();
    for (const c of word.split('')) {
        letterFrequency.set(c, (letterFrequency.get(c) || 0) + 1);
    }

    console.log(letterFrequency);

    const letterFrequencies = Array.from(letterFrequency.entries()).sort((a, b) => b[1] - a[1]);
    const lettersSortedByFrequency = Array.from(letterFrequencies.map(x => x[0]));

    console.log(lettersSortedByFrequency);

    const keypad: Map<number, string> = new Map<number, string>();

    let key = 2;
    while (lettersSortedByFrequency.length > 0) {
        const letter = lettersSortedByFrequency.shift();
        keypad.set(key, (keypad.get(key) || '') + letter);
        key++;
        if (key > 9) {
            key = 2;
        }
    }

    console.log(keypad);

    let pushes = 0;
    for (const c of word.split('')) {
        for (const [_key, letters] of keypad) {
            if (letters.includes(c)) {
                pushes += (letters.indexOf(c) + 1);
            }
        }
    }

    return pushes;
};

const word = "aabbccddeeffgghhiiiiii"

console.log(minimumPushes(word));
