function countKConstraintSubstrings(s: string, k: number): number {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.slice(i, j + 1).split('');
            if ((substring.filter(x => x === '0').length <= k) ||
                (substring.filter(x => x === '1').length <= k)) {
                    count++;
            }
        }
    }

    return count;
};

const s = "10101"
const k = 1

console.log(countKConstraintSubstrings(s, k));
