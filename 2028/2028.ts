function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const m = rolls.length;
    const sumRolls = rolls.reduce((a, b) => a + b, 0);
    let sumMissingRolls = ((n + m) * mean) - sumRolls;

    // console.log(`The mean of all n + m rolls is (${rolls.join(' + ')} + ${sumMissingRolls}) / ${m + n} = ${mean}`);

    let missingRolls: number[] = [];
    const averageMissingRoll = Math.floor(sumMissingRolls / n);
    let remainder = sumMissingRolls % n;

    if (averageMissingRoll >= 1 && averageMissingRoll <= 6) {
        while (missingRolls.length < n) {
            let missingRoll = averageMissingRoll;

            if (remainder > 0 && missingRoll < 6) {
                remainder--;
                missingRoll++;
            }

            missingRolls.push(missingRoll);
        }
    }

    if ((sumRolls + missingRolls.reduce((a, b) => a + b, 0)) / (n + m) !== mean) {
        return [];
    }

    return missingRolls;
};

const rolls = [3,5,3]
const mean = 5;
const n = 3;

console.log(missingRolls(rolls, mean, n));
