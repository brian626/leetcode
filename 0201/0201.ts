function rangeBitwiseAnd(left: number, right: number): number {
    const delta = right - left;
    if (delta === 0) { return left; }
    if (delta === 1) { return left & right; }

    const log1 = Math.floor(Math.log2(left));
    const log2 = Math.floor(Math.log2(right));

    if (log1 < log2) { return 0; }

    const mask = (left >> log1) * Math.pow(2, log1);

    return left & mask;
};

const left = 12;
const right = 14;

console.log(rangeBitwiseAnd(left, right));
