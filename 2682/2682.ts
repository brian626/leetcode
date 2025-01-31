function circularGameLosers(n: number, k: number): number[] {
    const counts: number[] = Array(n).fill(0);
    let holder = 0;
    let multiplier = 1;

    while (true) {
        console.log(`player ${holder + 1} gets the ball`);
        counts[holder]++;
        if (counts[holder] > 1) {
            break;
        }

        holder += (multiplier * k);
        if (holder >= n) {
            holder %= n;
        }

        multiplier++;
    }

    console.log(counts);

    const losers: number[] = [];
    for (let i = 0; i < n; i++) {
        if (counts[i] === 0) {
            losers.push(i + 1);
        }
    }

    return losers;
};

console.log(circularGameLosers(6, 1));
