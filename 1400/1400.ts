function canConstruct(s: string, k: number): boolean {
    if (s.length < k) { return false; }

    const frequencies: Map<string, number> = new Map<string, number>();
    for (const c of s) {
        frequencies.set(c, (frequencies.get(c) || 0) + 1);
    }

    let oddCounts = 0;
    for (const [char, count] of frequencies) {
        if (count % 2 !== 0) {
            oddCounts++;
        }
    }

    if (oddCounts > k) { return false; }

    return true;
};
