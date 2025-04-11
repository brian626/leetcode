function countSymmetricIntegers(low: number, high: number): number {
    let count = 0;

    for (let i = low; i <= high; i++) {
        const s = i.toString();
        if (s.length % 2 === 0) {
            const left = s.slice(0, s.length / 2).split('').map(x => parseInt(x)).reduce((a, b) => a + b, 0);
            const right = s.slice(s.length / 2).split('').map(x => parseInt(x)).reduce((a, b) => a + b, 0);
            if (left === right) {
                count++;
            }
        }
    }

    return count;
};
