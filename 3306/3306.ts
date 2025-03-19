function countOfSubstrings(word: string, k: number): number {
    let substringCount = 0, l = 0, r = 4;
    const x = word.slice(l, r + 1).split('');
    let aCount = x.filter(x => x === 'a').length;
    let eCount = x.filter(x => x === 'e').length;
    let iCount = x.filter(x => x === 'i').length;
    let oCount = x.filter(x => x === 'o').length;
    let uCount = x.filter(x => x === 'u').length;
    let consonantCount = word.length - aCount - eCount - iCount - oCount - uCount;

    while (r < word.length) {
        console.log(aCount, eCount, iCount, oCount, uCount, consonantCount);

        if (aCount > 0 && eCount > 0 && iCount > 0 && oCount > 0 && uCount > 0 && consonantCount === k) {
            substringCount++;
        }

        const prevLetter = word[l];
        switch (prevLetter) {
            case 'a': aCount--; break;
            case 'e': eCount--; break;
            case 'i': iCount--; break;
            case 'o': oCount--; break;
            case 'u': uCount--; break;
            default: consonantCount--; break;
        }

        const nextLetter = word[r + 1];
        switch (nextLetter) {
            case 'a': aCount++; break;
            case 'e': eCount++; break;
            case 'i': iCount++; break;
            case 'o': oCount++; break;
            case 'u': uCount++; break;
            default: consonantCount++; break;
        }

        l++;
        r++;
    }

    return substringCount;
};


const word = "aeiou";
const k = 0;

console.log(countOfSubstrings(word, k));
