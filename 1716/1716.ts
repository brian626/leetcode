// 1716. Calculate Money in Leetcode Bank

// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday,
// he will put in $1 more than the day before. On every subsequent Monday, he will put in $1
// more than the previous Monday.

// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.


// Example 1:

// Input: n = 4
// Output: 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

// Example 2:

// Input: n = 10
// Output: 37
// Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.

// Example 3:

// Input: n = 20
// Output: 96
// Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.

// Constraints:

// 1 <= n <= 1000

function totalMoney(n: number): number {
    const numWeeks = Math.floor(n / 7)
    const numDays = n % 7
    const dayTotals = [0, 1, 3, 6, 10, 15, 21]

    // 28 dollars per week
    let total = (numWeeks * 28)
    console.log(total)

    // Plus an extra 7 per week, cumulative
    for (let i = 1; i < numWeeks; i++) {
        total += (i * 7)
    }
    console.log(total)

    // Plus the partial week, if any
    total += dayTotals[numDays]
    console.log(total)

    // Plus an extra 1 per day, cumulative
    if (numWeeks > 0) {
        total += (numDays * numWeeks)
    }
    console.log(total)

    return total
};

// console.log(totalMoney(4)) // Output: 10
// console.log(totalMoney(10)) // Output: 37
// console.log(totalMoney(20)) // Output: 96
// console.log(totalMoney(26)) // Output: 135

// Explanation: After the 26th day, the total is
    //   (1 + 2 + 3 + 4 + 5 + 6 + 7)           = 28
    // + (2 + 3 + 4 + 5 + 6 + 7 + 8) = 28 + 7  = 35
    // + (3 + 4 + 5 + 6 + 7 + 8 + 9) = 28 + 14 = 42
    // + (4 + 5 + 6 + 7 + 8)                   = 30
    //                                         = 135
