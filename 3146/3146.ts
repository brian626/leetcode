function findPermutationDifference(s: string, t: string): number {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        sum += Math.abs(i - t.indexOf(s[i]));
    }

    return sum;
};

const s = "abc"
const t = "bac"

console.log(findPermutationDifference(s, t));
