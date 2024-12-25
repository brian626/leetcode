function validStrings(n: number): string[] {
    let strings: string[] = [];

    for (let i = 0; i < Math.pow(2, n); i++) {
        const b = i.toString(2).padStart(n, '0');
        if (!b.includes('00')) {
            strings.push(b);
        }
    }

    return strings;
};

const n = 18;

console.log(validStrings(n));
