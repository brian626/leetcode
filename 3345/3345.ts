function smallestNumber(n: number, t: number): number {
    while (digitProduct(n) % t !== 0) {
        n++;
    }

    return n;
};

function digitProduct(n: number): number {
    return n.toString().split('').map(x => parseInt(x)).reduce((a, b) => a * b, 1);
}


const n = 15;
const t = 3;

console.log(smallestNumber(n, t));
