function totalNumbers(digits: number[]): number {
    const nums: number[] = [];
    for (let i = 100; i < 999; i += 2) {
        nums.push(i);
    }

    const digitCount: Map<number, number> = new Map<number, number>();
    for (const d of digits) {
        digitCount.set(d, (digitCount.get(d) || 0) + 1);
    }

    console.log(`digits: ${digits}`);
    console.log(`digitCount: `);
    console.log(digitCount);

    function hasSameDigits(n: number): boolean {
        const nDigits: number[] = n.toString().split('').map(x => parseInt(x));
        const nDigitCount: Map<number, number> = new Map<number, number>();
        for (const nd of nDigits) {
            nDigitCount.set(nd, (nDigitCount.get(nd) || 0) + 1);
        }

        console.log(`nDigits: ${nDigits}`);
        console.log(`nDigitCount: `);
        console.log(nDigitCount);

        for (const [k, v] of nDigitCount) {
            if (!digitCount.has(k) || digitCount.get(k) < v) {
                console.log(`hasSameDigits(${n}) returning false because digitCount(${k}) is ${digitCount.get(k)} and not ${v}`);
                return false;
            }
        }

        console.log(`hasSameDigits(${n}) returning true`);
        return true;
    }


    return nums.filter(x => hasSameDigits(x)).length;
};

const digits = [4, 7, 7, 3];
console.log(totalNumbers(digits));
