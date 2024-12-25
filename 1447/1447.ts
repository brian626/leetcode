// 1447. Simplified Fractions

// Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive)
// such that the denominator is less-than-or-equal-to n. The fractions can be in any order.


// Example 1:

// Input: n = 2
// Output: ["1/2"]
// Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.

// Example 2:

// Input: n = 3
// Output: ["1/2","1/3","2/3"]

// Example 3:

// Input: n = 4
// Output: ["1/2","1/3","1/4","2/3","3/4"]
// Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".

// Example 4:

// Input: n = 1
// Output: []


// Constraints:

// 1 <= n <= 100

function gcd_two_numbers(x: number, y: number): number {
    while (y > 0) {
      let t = y;
      y = x % y;
      x = t;
    }

    return x;
}

function simplifiedFractions(n: number): string[] {
    if (n == 1) { return [] }

    let output: string[] = []
    for (let i = 1; i < n; i++) {
        for (let j = 2; j <= n; j++) {
            if (i >= j) { continue }
            if (gcd_two_numbers(i, j) != 1) { continue }
            output.push(`${i}/${j}`)
        }
    }

    return output
};

// console.log(simplifiedFractions(2))
// Output: ["1/2"]

// console.log(simplifiedFractions(3))
// Output: ["1/2","1/3","2/3"]

// console.log(simplifiedFractions(4))
// Output: ["1/2","1/3","1/4","2/3","3/4"]

// console.log(simplifiedFractions(5))
// ["1/2","1/3","1/4","1/5","2/3","2/5","3/4","3/5","4/5"]

console.log(simplifiedFractions(6))
// ["1/2","1/3","1/4","1/5","1/6","2/3","2/5","3/4","3/5","4/5","5/6"]
