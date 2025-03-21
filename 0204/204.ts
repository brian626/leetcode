// 204. Count Primes

// Count the number of prime numbers less than a non-negative number, n.


// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:

// Input: n = 0
// Output: 0

// Example 3:

// Input: n = 1
// Output: 0


// Constraints:

// 0 <= n <= 5 * 10^6

function countPrimes(n: number): number {
    let primes = sieve(n)
    return primes.filter(x => x < n).length
};

console.log(countPrimes(10)) // 4
console.log(countPrimes(100)) // 25
