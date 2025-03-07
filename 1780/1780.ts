const POWERS_OF_THREE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969].reverse();

function checkPowersOfThree(n: number): boolean {
    let biggestPowerOfThree = 0;

    while (biggestPowerOfThree <= 14 && n >= 0) {
        if (n >= POWERS_OF_THREE[biggestPowerOfThree]) {
            n -= POWERS_OF_THREE[biggestPowerOfThree];
        }

        biggestPowerOfThree++;
    }

    return n === 0;
};
