function getSmallestString(s: string): string {
    const c = s.split('');

    for (let i = 0; i < c.length - 1; i++) {
        const d1 = parseInt(c[i]);
        const d2 = parseInt(c[i + 1]);

        if (areSameParity(d1, d2) && d1 > d2) {
            [c[i], c[i + 1]] = [c[i + 1], c[i]];
            break;
        }
    }

    return c.join('');
};

function areSameParity(d1: number, d2: number): boolean {
    return (d1 % 2) === (d2 % 2);
}
