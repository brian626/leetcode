function stringHash(s: string, k: number): string {
    let result = '';

    for (let i = 0; i <= s.length - k; i += k) {
        const substring = s.slice(i, i + k);
        const sum = substring.split('').map(x => x.charCodeAt(0) - 'a'.charCodeAt(0)).reduce((a, b) => a + b, 0);
        const hashedChar = sum % 26;
        result += String.fromCharCode(hashedChar + 'a'.charCodeAt(0));

        console.log(substring, sum, hashedChar);
    }


    return result;
};

const s = "mxz"
const k = 3

console.log(stringHash(s, k));
