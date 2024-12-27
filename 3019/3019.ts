function countKeyChanges(s: string): number {
    s = s.toLowerCase();
    let lastKey = s[0];
    let count = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] !== lastKey) {
            count++;
            lastKey = s[i];
        }
    }

    return count;
};
