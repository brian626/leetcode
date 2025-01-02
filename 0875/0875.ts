function minEatingSpeed(piles: number[], h: number): number {
    let lowSpeed = 1; // Math.min(...piles);
    let highSpeed = Math.max(...piles);
    let speed = Math.floor((lowSpeed + highSpeed) / 2);

    if (h === piles.length) {
        return highSpeed;
    }

    if (piles.length === 1) {
        if (piles[0] <= h) { return 1; }
        else { return 2; }
    }

    let result = 0;
    while (true) {
        result = eatBananas(piles, h, speed);
        console.log(`At ${speed} bananas per hour, the result was ${result} (lowSpeed: ${lowSpeed}, highSpeed: ${highSpeed})`);

        if (lowSpeed === highSpeed) {
            console.log(`converged at ${lowSpeed}, last result was ${result}`);
            speed = lowSpeed;
            if (result === -1) { speed += 1; }
            break;
        }

        if (result === 0) {
            // Ate bananas exactly
            break;
        } else if (result < 0) {
            // Didn't eat fast enough
            lowSpeed = speed + 1;
            speed = Math.floor((lowSpeed + highSpeed) / 2);
        } else {
            // Ate too fast
            highSpeed = speed - 1;
            speed = Math.floor((lowSpeed + highSpeed) / 2);
        }
    }

    return speed;
};


function eatBananas(piles: number[], hours: number, speed: number): number {
    const eatingPiles = Array.from(piles);
    let currentPile = 0;
    let finishedEarly = false;

    for (let i = 0; i < hours; i++) {
        eatingPiles[currentPile] = Math.max(0, eatingPiles[currentPile] - speed);
        if (eatingPiles[currentPile] === 0) {
            currentPile++;
        }

        if (currentPile === piles.length) {
            finishedEarly = true;
            break;
        }
    }

    let result: number;

    if (finishedEarly) {
        result = 1;
    } else if (eatingPiles.reduce((a, b) => a + b, 0) === 0) {
        result = 0;
    } else {
        result = -1;
    }

    return result;
}



const piles = [332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184]
const h = 823855818;

console.log(minEatingSpeed(piles, h));
