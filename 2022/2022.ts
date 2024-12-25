function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (original.length !== (m * n)) { return []; }

    const mnArray: number[][] = [];

    for (let i = 0; i < m; i++) {
        mnArray[i] = [];

        for (let j = 0; j < n; j++) {
            mnArray[i][j] = original.shift();
        }
    }

    return mnArray;
};

const original = [1,1,1,1]
const m = 4;
const n = 1;

console.log(construct2DArray(original, m, n));
