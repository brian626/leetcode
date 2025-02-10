function isDigit(c: string): boolean {
    return /[0-9]/.test(c);
}

function clearDigits(s: string): string {
    const c = s.split('');

    for (let i = 1; i < c.length; i++) {
        if (isDigit(c[i])) {
            c[i] = '-';
            for (let j = i - 1; j >= 0; j--) {
                if (c[j] !== '-') {
                    c[j] = '-';
                    break;
                }
            }
        }
    }

    return c.filter(x => x !== '-').join('');
};
