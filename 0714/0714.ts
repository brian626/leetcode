function maxProfit(prices: number[], fee: number): number {
    if (prices.length === 1) { return 0; }

    let K = prices.length;
    let maxProfit = 0;

    while (K > 1) {
        maxProfit = Math.max(maxProfit, profit(prices, fee, K));
        K--;
    }

    return maxProfit;
};

function profit(prices: number[], fee: number, K: number): number {
    let p = 0;
    if (prices.length === K) {
        p = prices[prices.length - 1] - prices[0] - fee;
    } else {
        console.log(`profit([${prices}], ${K}) returning ${prices[K-1] - prices[0] - fee} + profit([${prices.slice(K)}])`);

        p = (prices[K-1] - prices[0] - fee) + profit(prices.slice(K), fee, prices.length - K);
    }

    p = Math.max(p, 0);
    console.log(`profit([${prices}], ${K}) returning ${p}`);
    console.log();
    return p;
}

const prices = [1,4,6,2,8,3,10,14]
const fee = 3

console.log(maxProfit(prices, fee));
