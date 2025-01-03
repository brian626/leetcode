function minFlips(a: number, b: number, c: number): number {
    if ((a | b) === c) { return 0; }

    const aStr = a.toString(2);
    const bStr = b.toString(2);
    const cStr = c.toString(2);
    const maxLen = Math.max(aStr.length, bStr.length, cStr.length);

    const aBits = a.toString(2).padStart(maxLen, '0').split('').map(x => parseInt(x));
    const bBits = b.toString(2).padStart(maxLen, '0').split('').map(x => parseInt(x));
    const cBits = c.toString(2).padStart(maxLen, '0').split('').map(x => parseInt(x));

    console.log(aBits);
    console.log(bBits);
    console.log(cBits);

    let count = 0;
    for (let i = 0; i < cBits.length; i++) {
        console.log(`19`);
        if (cBits[i] === 0) {
            if (aBits[i] === 1 && bBits[i] === 1) {
                console.log(`22`);
                count += 2;
            } else if (aBits[i] === 1 || bBits[i] === 1) {
                console.log(`25`);
                count += 1;
            }
        } else {
            console.log(`29`);
            if (aBits[i] === 0 && bBits[i] === 0) {
                count += 1;
            }
        }

        console.log();
    }

    return count;
};

const a = 8;
const b = 3;
const c = 5;

console.log(minFlips(a, b, c));
