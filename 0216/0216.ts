function combinationSum3(k: number, n: number): number[][] {
    if (smallestSum(k) > n) { return []; }

    const validCombinations: number[][] = [];

    let combination: number[] = [];
    for (let i = 0; i < k; i++) {
        combination.push(i + 1);
    }

    while (true) {
        const result = testValidity(combination, n);

        if (result === 0) {
            validCombinations.push(Array.from(combination));
        }

        combination = incrementCombination(combination);

        if (parseInt(combination.join('')) === 0) {
            break;
        }
    }

    return validCombinations;
};


function incrementCombination(combination: number[]): number[] {
    let nextCombination = Array.from(combination);

    nextCombination[nextCombination.length - 1] += 1;
    // console.log(`  increment: [${nextCombination}]`);

    let overflow = false;

    while (nextCombination.filter(x => x > 9).length > 0) {
        const carryIndex = nextCombination.indexOf(10);
        nextCombination[carryIndex] = 0;
        if (carryIndex > 0) {
            nextCombination[carryIndex - 1] += 1;
        } else {
            overflow = true;
            break;
        }

        // console.log(`  carry: [${nextCombination}]`);

        while (nextCombination.filter(x => x === 0).length > 0) {
            let zeroIndex = nextCombination.indexOf(0);
            while (zeroIndex < nextCombination.length) {
                nextCombination[zeroIndex] = nextCombination[zeroIndex - 1] + 1;
                zeroIndex++
            }
        }

        // console.log(`  skip 0's: [${nextCombination}]`);
    }

    if (overflow) {
        for (let i = 0; i < nextCombination.length; i++) {
            nextCombination[i] = 0;
        }
    }

    return nextCombination;
}

function increasing(digits: number[]): boolean {
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] >= digits[i + 1]) {
            return false;
        }
    }

    return true;
}


function testValidity(combination: number[], n: number): number {
    if (new Set(combination).size !== combination.length) {
        console.log(`testValidity([${combination}], ${n}) returning -1 because of duplicate`);
        return -1;
    }

    const sum = combination.reduce((a, b) => a + b, 0);
    let result = 0;

    if (sum === n) { result = 0; }
    else if (sum < n) { result = -1; }
    else { result = 1; }

    // console.log(`testValidity([${combination}], ${n}) returning ${result}`);

    return result;
}


function smallestSum(k: number): number {
    let sum = 0;
    let num = 1;

    for (let i = 0; i < k; i++) {
        sum += num;
        num += 1;
    }

    return sum;
}

const k = 5
const n = 30

console.log(combinationSum3(k, n));
