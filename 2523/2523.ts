function sieve(max: number): number[] {
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

function closestPrimes(left: number, right: number): number[] {
    const PRIMES = sieve(Math.pow(10, 6));
    const primesInRange = PRIMES.filter(x => x >= left && x <= right);

    if (primesInRange.length < 2) {
        return [-1, -1];
    }

    const ans: number[] = [];
    let minDiff = Infinity;

    for (let i = 0; i < primesInRange.length - 1; i++) {
        if (primesInRange[i + 1] - primesInRange[i] < minDiff) {
            minDiff = primesInRange[i + 1] - primesInRange[i];
            ans[0] = primesInRange[i];
            ans[1] = primesInRange[i + 1];
        }
    }

    return ans;
};
