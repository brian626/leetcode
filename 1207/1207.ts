function uniqueOccurrences(arr: number[]): boolean {
    const frequencies: Map<number, number> = new Map<number, number>();

    for (const n of arr) {
        frequencies.set(n, (frequencies.get(n) || 0) + 1);
    }

    const frequencySet: Set<number> = new Set<number>();
    for (const [_k, v] of frequencies) {
        frequencySet.add(v);
    }

    return frequencySet.size === frequencies.size;
};

const arr = [-3,0,1,-3,1,1,1,-3,10,0]

console.log(uniqueOccurrences(arr));
