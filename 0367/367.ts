// 367. Valid Perfect Square

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.


// Example 1:

// Input: num = 16
// Output: true

// Example 2:

// Input: num = 14
// Output: false


// Constraints:

// 1 <= num <= 2^31 - 1

function isPerfectSquare(num: number): boolean {
    const squares: number[] = []
    for (let i = 1; i < 46341; i++) {
        const square = i*i
        if (square > num) {
            break
        }
        squares.push(square)
    }

    return squares.indexOf(num) != -1
};
