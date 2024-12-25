// 322. Coin Change

// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that
// amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.


// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Example 4:

// Input: coins = [1], amount = 1
// Output: 1

// Example 5:

// Input: coins = [1], amount = 2
// Output: 2


// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 10^4

function makeChange(coins: number[], amount: number): number {
    let count = 0
    let startCoin = 0
    while (amount > 0) {
        let i = startCoin
        while (i < coins.length) {
            if (amount >= coins[i]) {
                console.log(`using a coin with value ${coins[i]}`)
                amount -= coins[i]
                count++
            }
            else {
                i += 1
                startCoin += 1
            }
        }

        if (i >= coins.length) {
            break
        }
    }

    return (amount == 0) ? count : -1
}


function coinChange(coins: number[], amount: number): number {
    if (amount == 0) { return 0 }

    coins.sort((a,b) => { return b - a })

    for (let i = 0; i < coins.length; i++) {
        const count = makeChange(coins.slice(i), amount)
        if (count != -1) {
            return count
        }
    }

    return -1
};

// console.log(coinChange([1,2,5], 11)) // Output : 3
// console.log(coinChange([2], 3)) // Output: -1
console.log(coinChange([186,419,83,408], 6249)) // Output: 20
