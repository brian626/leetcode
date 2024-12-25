function findMinimumTime(strength: number[], k: number): number {
    let time = 0;
    let energy = 0;
    let x = 1;

    // strength.sort((a, b) => b - a);

    console.log(`Time\tEnergy\tx\tAction\t\tUpdated x`);
    console.log(`----\t------\t-\t------\t\t---------`);

    while (strength.filter(x => x > 0).length > 0) {
        let brokeLock = false;
        let breakableLockIndexes: number[] = [];

        for (let i = 0; i < strength.length; i++) {
            if (strength[i] !== 0 && strength[i] <= energy) {
                breakableLockIndexes.push(i);
            }
        }

        if (breakableLockIndexes.length > 0) {
            breakableLockIndexes.sort((a, b) => strength[a] - strength[b]);
            console.log(`breakable locks are [${breakableLockIndexes}]`);

            const breakableLockIndex = breakableLockIndexes[0];
            strength[breakableLockIndex] = 0;

            const originalX = x;
            x += k;
            console.log(`${time}\t${energy}\t${originalX}\tBreak lock #${breakableLockIndex + 1}\t${x}`);

            brokeLock = true;
            energy = 0;
        }

        if (!brokeLock) {
            console.log(`${time}\t${energy}\t${x}\tNothing\t\t${x}`);
        }

        energy += x;
        time += 1;
    }

    return time - 1;
};

const strength = [7,3,6,18,22,50];
const k = 4;

console.log(findMinimumTime(strength, k));
