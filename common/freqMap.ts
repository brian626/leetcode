
    const freqMap: Map<string, number> = new Map<string, number>();

    for (const c of word) {
        let count = 1;
        if (freqMap.has(c)) { count = freqMap.get(c) + 1; }
        freqMap.set(c, count);
    }
