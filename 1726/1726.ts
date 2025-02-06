function tupleSameProduct(nums: number[]): number {
    const productFrequency: Map<number, number> = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const product = nums[i] * nums[j];
            productFrequency.set(product, (productFrequency.get(product) || 0) + 1);
        }
    }

    console.log(productFrequency);

    let count = 0;
    for (const [k, v] of productFrequency) {
        if (v > 1) {
            count += (2 * v) * (2 * (v - 1));
        }
    }

    return count;
};

const nums = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]
// const nums = [2, 3, 4, 6]

console.log(tupleSameProduct(nums));
