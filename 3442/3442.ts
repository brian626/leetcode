function maxDifference(s: string): number {
    const frequencyMap: Map<string, number> = new Map<string, number>();

    for (const c of s.split('')) {
        frequencyMap.set(c, (frequencyMap.get(c) || 0) + 1);
    }

    const frequencies = Array.from(frequencyMap.values());
    const evenFrequencies = frequencies.filter(x => x % 2 === 0);
    const oddFrequencies = frequencies.filter(x => x % 2 === 1);

    return Math.max(...oddFrequencies) - Math.min(...evenFrequencies);
};
