function countCompleteDayPairs(hours: number[]): number {
    let count = 0;

    for (let i = 0; i < hours.length; i++) {
        for (let j = i + 1; j < hours.length; j++) {
            if ((hours[i] + hours[j]) % 24 === 0) {
                count++;
            }
        }
    }

    return count;
};

const hours = [12,12,30,24,24]

console.log(countCompleteDayPairs(hours));
