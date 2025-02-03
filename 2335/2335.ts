function fillCups(amount: number[]): number {
    let count = 0;
    let unfilledCups = amount.reduce((a, b) => a + b, 0);

    while (unfilledCups > 0) {
        console.log(amount);
        const [unfilledCold, unfilledWarm, unfilledHot] = amount;

        if ((unfilledCold === 0 && unfilledWarm === 0) ||
            (unfilledCold === 0 && unfilledHot === 0) ||
            (unfilledWarm === 0 && unfilledHot === 0)) {
            if (unfilledCold > 0) {
                amount[0]--;
            } else if (unfilledWarm > 0) {
                amount[1]--;
            } else if (unfilledHot > 0) {
                amount[2]--;
            }

            unfilledCups--;
            count++;
            continue;
        }

        if (unfilledCold >= unfilledHot && unfilledWarm >= unfilledHot) {
            amount[0]--;
            amount[1]--;
        } else if (unfilledWarm >= unfilledCold && unfilledHot >= unfilledCold) {
            amount[1]--;
            amount[2]--;
        } else if (unfilledCold >= unfilledWarm && unfilledHot >= unfilledWarm) {
            amount[0]--;
            amount[2]--;
        }

        unfilledCups--;
        unfilledCups--;
        count++;
    }

    return count;
};


const amount = [1, 4, 2];

console.log(fillCups(amount));
