function containsPattern(arr: number[], m: number, k: number): boolean {
    for (let a = 0; a < arr.length - m; a++) {
        const pattern = arr.slice(a, a + m);

        let result = true;

        for (let b = 1; b < k; b++) {
            const test = arr.slice(a + (m * b), a + (m * b) + m);
            console.log(`testing pattern ${pattern} against ${test}`);

            if (test.join(',') != pattern.join(',')) {
                result = false;
                break;
            }
        }

        if (result) {
            return true;
        }
    }

    return false;
};
