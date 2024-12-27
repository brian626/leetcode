function minimumChairs(s: string): number {
    let chairsNeeded = 0;
    let minimumChairsNeeded = 0;
    for (const c of s.split('')) {
        if (c === 'E') {
            chairsNeeded++;
            minimumChairsNeeded = Math.max(chairsNeeded, minimumChairsNeeded);
        } else if (c === 'L') {
            chairsNeeded--;
        }
    }

    return minimumChairsNeeded;
};
