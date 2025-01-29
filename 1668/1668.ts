function maxRepeating(sequence: string, word: string): number {
    let count = 0;
    let repeat = word;

    while (sequence.includes(repeat)) {
        repeat += word;
        count++;
    }

    return count;
};

console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));
