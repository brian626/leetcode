function gcdOfStrings(str1: string, str2: string): string {
    const divisors1 = [str1];
    for (let i = 1; i < str1.length; i++) {
        if (divides(str1, str1.slice(0, i))) {
            divisors1.push(str1.slice(0, i));
        }
    }

    const divisors2 = [str2];
    for (let i = 1; i < str2.length; i++) {
        if (divides(str2, str2.slice(0, i))) {
            divisors2.push(str2.slice(0, i));
        }
    }

    const commonDivisors: string[] = divisors1.filter(x => divisors2.includes(x));

    commonDivisors.sort((a, b) => b.length - a.length);

    return commonDivisors.length > 0 ? commonDivisors[0] : '';
};

function divides(s: string, t: string): boolean {
    if ((s.length % t.length) !== 0) { return false; }

    let compare = t;
    for (let i = 1; i < s.length / t.length; i++) {
        compare += t;
    }

    return compare === s;
}

const str1 = "ABCABC"
const str2 = "ABC"

console.log(gcdOfStrings(str1, str2));
