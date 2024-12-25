const powerset = (arr) =>
    arr.reduce((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]]);

function subsetsWithDup(nums: number[]): number[][] {
    const ps: number[][] = powerset(nums);

    const hashedSet = new Set<string>();
    for (const p of ps) {
        console.log(p);
        p.sort((a, b) => a - b);
        hashedSet.add(p.join(','));
    }

    const ret: number[][] = [];
    for (const hs of hashedSet) {
        console.log(hs);
        if (hs.length > 0) {
            ret.push(hs.split(',').map(x => parseInt(x)))
        } else {
            ret.push([]);
        }
    }

    return ret;
};


const nums = [1,2,2];
console.log(subsetsWithDup(nums));
