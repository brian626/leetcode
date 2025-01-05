function coinChange(coins: number[], amount: number): number {
    if (amount === 0) { return 0; }

    coins.sort((a, b) => a - b);

    const minCoins: number[] = [];
    for (const coin of coins) {
        minCoins[coin] = 1;
    }

    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (const coin of coins) {
            min = Math.min(min, calculateMinCoins(i, coin, minCoins));
        }
        console.log(`min coins needed to make up ${i} is ${min}`);
        minCoins[i] = min;
        // minCoins[i] = calculateMinCoins(i, coins, minCoins);
    }

    return minCoins[amount] === Infinity ? -1 : minCoins[amount];
};


function calculateMinCoins(amount: number, coin: number, minCoins: number[]): number {
    // console.log(`calculateMinCoins(${amount}, ${coin})`);

    if (minCoins[amount] !== undefined) {
        // console.log(`calculateMinCoins(${amount}, ${coin}) returning ${minCoins[amount]} from cache`);
        return minCoins[amount];
    } else if (amount - coin >= 0) {
        const mc = 1 + calculateMinCoins(amount - coin, coin, minCoins);
        minCoins[amount - coin] = Math.min(minCoins[amount - coin], mc);
        // console.log(`calculateMinCoins(${amount}, ${coin}) returning 1 + ${mc - 1} from recursion`);
        return mc;
    } else {
        return Infinity;
    }
}

// const coins = [411,412,413,414,415,416,417,418,419,420,421,422]
// const amount = 9864
const coins = [1, 2, 5];
const amount = 11;

console.log(coinChange(coins, amount));
