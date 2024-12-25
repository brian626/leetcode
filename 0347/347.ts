function topKFrequent(nums: number[], k: number): number[] {
    const m: Map<number, number> = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (m.has(i)) {
            m.set(i, m.get(i) + 1);
        } else {
            m.set(i, 1);
        }
    }

    const sortedMap = new Map([...m].sort((a, b) => {
        return b[1] - a[1];
    }));

    return Array.from(sortedMap.keys()).slice(0, k)
};
