function countTestedDevices(batteryPercentages: number[]): number {
    let testedDevices = 0;

    for (let i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] > 0) {
            testedDevices++;

            for (let j = i+1; j < batteryPercentages.length; j++) {
                batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
            }
        }
    }

    return testedDevices;
};
