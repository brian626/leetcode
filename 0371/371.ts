// 371. Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.


// Example 1:

// Input: a = 1, b = 2
// Output: 3

// Example 2:

// Input: a = 2, b = 3
// Output: 5


// Constraints:

// -1000 <= a, b <= 1000

function getSum(a: number, b: number): number {
    let posSum: number[] = []
    let negSum: number[] = []

    if (a >= 0 && b >= 0) {
        for (let i = 0; i < a; i++) { posSum.push(1) }
        for (let i = 0; i < b; i++) { posSum.push(1) }
    }
    else if (a >= 0 && b <= 0) {
        for (let i = 0; i < a; i++)        { posSum.push(1) }
        for (let i = 0; i < (b * -1); i++) { negSum.push(1) }
    }
    else if (a <= 0 && b >= 0) {
        for (let i = 0; i < (a * -1); i++) { negSum.push(1) }
        for (let i = 0; i < b; i++)        { posSum.push(1) }
    }
    else {
        for (let i = 0; i < (a * -1); i++) { negSum.push(1) }
        for (let i = 0; i < (b * -1); i++) { negSum.push(1) }
    }

    if (posSum.length == 0)      { return negSum.length * -1 }
    else if (negSum.length == 0) { return posSum.length }
    else if (posSum.length > negSum.length) {
        for (let i = 0; i < negSum.length; i++) { posSum.pop() }
        return posSum.length
    }
    else {
        for (let i = 0; i < posSum.length; i++) { negSum.pop() }
        return negSum.length * -1
    }
};

// console.log(getSum(-10,20)) // 10
// console.log(getSum(-10,-20)) // -30
// console.log(getSum(10,-20)) // -10
// console.log(getSum(0,20)) // 20
// console.log(getSum(0,-20)) // -20
// console.log(getSum(20,0)) // 20
// console.log(getSum(-20,0)) // -20
console.log(getSum(0,0)) // 0
