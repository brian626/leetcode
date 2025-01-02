function reverseVowels(s: string): string {
    const rev = s.split('');
    const vowels = rev.filter(x => isVowel(x));

    for (let i = 0; i < s.length; i++) {
        if (isVowel(rev[i])) {
            rev[i] = vowels.pop();
        }
    }

    return rev.join('');
};


function isVowel(c: string): boolean {
    return c.toLowerCase() === 'a' ||
        c.toLowerCase() === 'e' ||
        c.toLowerCase() === 'i' ||
        c.toLowerCase() === 'o' ||
        c.toLowerCase() === 'u';
}

const s = "IceCreAm";

console.log(reverseVowels(s));
