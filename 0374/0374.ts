/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */


function guess(num: number): number {
    const pick = 6;

    if (num === pick) { return 0; }
    else if (num < pick) { return 1; }
    else { return -1; }
}

function guessNumber(n: number): number {
    let low = 1;
    let high = Math.pow(2, 31) - 1; // 2147483647

    while (true) {
        if (low === high) { n = low; }

        const result = guess(n);
        console.log(`high = ${high}, low = ${low}, guess(${n}) returned ${result}`);

        if (result === 0) {
            return n;
        } else if (result === -1) {
            high = n - 1;
            n = Math.ceil((n + low) / 2);
        } else {
            low = n + 1;
            n = Math.ceil((high + n) / 2);
        }
    }
};

console.log(guessNumber(10));
