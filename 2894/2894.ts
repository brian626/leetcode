function differenceOfSums(n: number, m: number): number {
    let num1 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            num1 += i;
        }
    }

    let num2 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            num2 += i;
        }
    }

    return num1 - num2;
};

const n = 10
const m = 3

console.log(differenceOfSums(n, m));
