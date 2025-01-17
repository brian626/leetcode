function minimumLength(s: string): number {
    const frequencies: Map<string, number> = new Map<string, number>();
    const chars = s.split('');

    for (const c of chars) {
        frequencies.set(c, (frequencies.get(c) || 0) + 1);
    }

    console.log(frequencies);

    let len = 0;
    for (let [_char, freq] of frequencies) {
        while (freq > 2) {
            freq -= 2;
        }

        len += freq;
    }

    return len;
};

const s = "abaacbcbb";

console.log(minimumLength(s));
