function findValidPair(s: string): string {
    const c = s.split('');

    for (let i = 0; i < c.length - 1; i++) {
        const d1 = c[i];
        const d2 = c[i + 1];

        if (d1 !== d2 && c.filter(x => x === d1).length === parseInt(d1) && c.filter(x => x === d2).length === parseInt(d2)) {
            return d1 + d2;
        }
    }

    return "";
};
