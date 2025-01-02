function maxVowels(s: string, k: number): number {
    let startOfSlice = 0;
    let endOfSlice = k;
    let vowelCountInSlice = countVowels(s.slice(startOfSlice, endOfSlice));
    let maxVowels = vowelCountInSlice;

    while (startOfSlice < s.length - k + 1) {
        console.log(`slice is now ${s.slice(startOfSlice, endOfSlice)}`);

        if (isVowel(s[startOfSlice])) {
            console.log(`  dropping a vowel from the start: ${s[startOfSlice]}`);
            vowelCountInSlice--;
        }

        startOfSlice++;

        if (isVowel(s[endOfSlice])) {
            console.log(`  adding a vowel to the end: ${s[endOfSlice]}`);
            vowelCountInSlice++;
        }

        endOfSlice++;

        maxVowels = Math.max(maxVowels, vowelCountInSlice);

        if (maxVowels === k) { break; }
    }


    return maxVowels;
};


function countVowels(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            count++;
        }
    }

    // console.log(`countVowels(${s}) = ${count}`);
    return count;
}


function isVowel(c: string): boolean {
    // console.log(`isVowel(${c})`);
    return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
}


const s = "abciiidef";
const k = 3;

console.log(maxVowels(s, k));
