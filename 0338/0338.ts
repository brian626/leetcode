function countBits(n: number): number[] {
    const ans: number[] = [];

    for (let i = 0; i <= n; i++) {
        ans[i] = i.toString(2).split('').filter(x => x === '1').length;
    }

    return ans;
};

const n = 2;

console.log(countBits(n));
