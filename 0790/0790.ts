const cache: number[] = [];

function calc(n: number): number {
    if (cache[n]) { return cache[n]; }

    const result = (2 * calc(n-1) + calc(n-3)) % (Math.pow(10,9) + 7)
    cache[n] = result;

    return result;
}

function numTilings(n: number): number {
    cache[0] = 1;
    cache[1] = 1;
    cache[2] = 2;

    return calc(n);
};

const n = 50;

console.log(numTilings(n));
