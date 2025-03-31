function minimumIndex(nums: number[]): number {
    const freq: Map<number, number> = new Map<number, number>();
    let dom = 0;
    let domCount = 0;
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        if (freq.get(num) > domCount) {
            domCount = freq.get(num);
            dom = num;
        }
    }

    console.log(`dominant element is ${dom}`);

    for (let i = 0; i < nums.length - 1; i++) {
        const freq1: Map<number, number> = new Map<number, number>();
        for (let j = 0; j <= i; j++) {
            freq1.set(nums[j], (freq1.get(nums[j]) || 0) + 1);
        }

        const freq2: Map<number, number> = new Map<number, number>();
        for (const [k, v] of freq1) {
            if (freq.get(k) - v > 0) { freq2.set(k, freq.get(k) - v); }
        }

        console.log(i);
        console.log(freq1);
        console.log(freq2);

        const f1 = freq1.get(dom);
        const f2 = freq2.get(dom);
        console.log(`f1: ${f1}, freq1.size: ${i + 1}`);
        console.log(`f2: ${f2}, freq2.size: ${nums.length - i - 1}`);
        if (f1 * 2 > (i + 1) && f2 * 2 > (nums.length - i - 1)) {
            return i;
        }

        console.log();
    }

    return -1;
};

const nums = [2, 1, 3, 1, 1, 1, 7, 1, 2, 1]
console.log(minimumIndex(nums));
