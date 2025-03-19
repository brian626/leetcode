function numberOfSubstrings(s: string): number {
    const aIndexes: number[] = [];
    const bIndexes: number[] = [];
    const cIndexes: number[] = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'a': aIndexes.push(i); break;
            case 'b': bIndexes.push(i); break;
            case 'c': cIndexes.push(i); break;
        }
    }

    let count = 0;
    for (let i = 3; i <= s.length; i++) {
        let knownGood = false;

        for (let j = 0; j <= s.length - i; j++) {
            let hasA = false, hasB = false, hasC = false;
            console.log(`substring = ${s.slice(j, i + j)}`);
            if (!knownGood) {
                if (!hasA) {
                    for (let k = j; k < j + i; k++) {
                        if (aIndexes.includes(k)) { hasA = true; break; }
                    }
                }
                if (!hasB) {
                    for (let k = j; k < j + i; k++) {
                        if (bIndexes.includes(k)) { hasB = true; break; }
                    }
                }
                if (!hasC) {
                    for (let k = j; k < j + i; k++) {
                        if (cIndexes.includes(k)) { hasC = true; break; }
                    }
                }
            }

            if (knownGood || (hasA && hasB && hasC)) {
                knownGood = true;
                console.log(`  has all three`);
                count++;
            } else {
                if (!hasA) { console.log(`  missing A`); }
                if (!hasB) { console.log(`  missing B`); }
                if (!hasC) { console.log(`  missing C`); }
            }
        }
    }

    return count;
};


const s = "ababbbc";
console.log(numberOfSubstrings(s));
