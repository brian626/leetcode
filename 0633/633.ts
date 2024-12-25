// 633. Sum of Square Numbers

// Given a non-negative integer c, decide whether there're two integers a and b such that a^2 + b^2 = c.


// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:

// Input: c = 3
// Output: false

// Example 3:

// Input: c = 4
// Output: true

// Example 4:

// Input: c = 2
// Output: true

// Example 5:

// Input: c = 1
// Output: true


// Constraints:

// 0 <= c <= 2^31 - 1

function judgeSquareSum(c: number): boolean {
    if (c < 3) { return true }

    let squares: number[] = []
    for (let i = 0; i <= Math.sqrt(c); i++) {
        squares.push(i*i)
    }

    while (squares.length > 0) {
        const maxSquare = squares[squares.length - 1]
        const delta = c - maxSquare
        if (delta < 0) {
            squares.pop()
            continue
        }

        for (let i = 0; i < squares.length; i++) {
            if (delta === squares[i]) {
                return true
            }
        }

        squares.pop()
    }

    return false
};

// console.log(judgeSquareSum(5)) // 1 + 4
// console.log(judgeSquareSum(4)) // 0 + 4
// console.log(judgeSquareSum(3)) // false
// console.log(judgeSquareSum(2)) // 1 + 1
// console.log(judgeSquareSum(1)) // 0 + 1
// console.log(judgeSquareSum(0)) // 0 + 0
// console.log(judgeSquareSum(1759309629))
console.log(judgeSquareSum(8)) // 4 + 4
