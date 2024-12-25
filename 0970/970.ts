// 970. Powerful Integers

// Given three integers x, y, and bound, return a list of all the powerful integers that have a value less than or equal to bound.

// An integer is powerful if it can be represented as x^i + y^j for some integers i >= 0 and j >= 0.

// You may return the answer in any order. In your answer, each value should occur at most once.


// Example 1:

// Input: x = 2, y = 3, bound = 10
// Output: [2,3,4,5,7,9,10]
// Explanation:
// 2 = 2^0 + 3^0
// 3 = 2^1 + 3^0
// 4 = 2^0 + 3^1
// 5 = 2^1 + 3^1
// 7 = 2^2 + 3^1
// 9 = 2^3 + 3^0
// 10 = 2^0 + 3^2

// Example 2:

// Input: x = 3, y = 5, bound = 15
// Output: [2,4,6,8,10,14]


// Constraints:

// 1 <= x, y <= 100
// 0 <= bound <= 10^6

function powerfulIntegers(x: number, y: number, bound: number): number[] {
    let powersOfX: number[] = [1];
    if (x > 1) {
        let i: number = 1;
        while (true) {
            const xI: number = Math.pow(x, i);
            if (xI < bound) {
                powersOfX.push(xI);
                i++;
            } else {
                break;
            }
        }
    }

    let powersOfY: number[] = [1];
    if (y > 1) {
        let j: number = 1;
        while (true) {
            const yJ: number = Math.pow(y, j);
            if (yJ < bound) {
                powersOfY.push(yJ);
                j++;
            } else {
                break;
            }
        }
    }

    let powerfulIntegers: Set<number> = new Set<number>();
    for (let i = 0; i < powersOfX.length; i++) {
        for (let j = 0; j < powersOfY.length; j++) {
            const sum: number = powersOfX[i] + powersOfY[j];
            if (sum <= bound) {
                powerfulIntegers.add(sum);
            } else {
                continue;
            }
        }
    }

    return Array.from(powerfulIntegers).sort((a,b) => a - b);
};

console.log(powerfulIntegers(2, 3, 10)); // Output: [2,3,4,5,7,9,10]
console.log(powerfulIntegers(3, 5, 15)); // Output: [2,4,6,8,10,14]
console.log(powerfulIntegers(2, 1, 10));
