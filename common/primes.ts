export function sieve(max: number): number[] {
    const bitArray = new Array(max + 1);
    bitArray.fill(true);
    bitArray[0] = false;
    bitArray[1] = false;
    for (let i = 2; i <= Math.sqrt(max); i++) {
        for (let j = 2; i * j <= max; j++) {
            bitArray[i * j] = false;
        }
    }

    let primes: number[] = [];
    for (let i = 0; i < bitArray.length; i++) {
        if (bitArray[i]) {
            primes.push(i);
        }
    }

    return primes;
}
