// 1017. Convert to Base -2

// Given a number N, return a string consisting of "0"s and "1"s that represents its value in base -2 (negative two).

// The returned string must have no leading zeroes, unless the string is "0".


// Example 1:

// Input: 2
// Output: "110"
// Explantion: (-2) ^ 2 + (-2) ^ 1 = 2

// Example 2:

// Input: 3
// Output: "111"
// Explantion: (-2) ^ 2 + (-2) ^ 1 + (-2) ^ 0 = 3

// Example 3:

// Input: 4
// Output: "100"
// Explantion: (-2) ^ 2 = 4


// Note:

// 0 <= N <= 10^9

function baseNeg2(N: number): string {
    if (N == 0) { return "0" }

    let numDigits = 1
    let upperLimit = 1
    while (((Math.pow(4, upperLimit) - 1) / 3) < N) {
        numDigits += 2
        upperLimit += 1
    }

    let output: string = ""
    const originalN: number = N
    let runningTotal: number = 0

    for (let d = numDigits; d > 0; d--) {
        const place: number = Math.pow(-2, (d-1))
        console.log(`runningTotal: ${runningTotal}, place: ${place}`)

        // If the place is positive and the running total is less than N, then we need a 1 here.
        if (place > 0 && runningTotal < N) {
            output += "1"
            runningTotal += place
        }

        // If the place is negative and adding it to the running total takes us below N, then we need a 1 here.
        else if (place < 0 && (runningTotal + place) < N) {
            output += "1"
            runningTotal += place
        }

        else {
            output += "0"
        }
    }

    return `${originalN}: ${output}`
};

// 10:  5 digits
//      1xxxx = 16, N => -6
//      11xxx = 8, N => 2
//      111xx = 12, N => -2
//      1111x = 10, N => 0
//      11110 = 10

// for (let i = 1; i < 22; i++) {
//     console.log(baseNeg2(i))
// }
// console.log(baseNeg2(1)) // Output: "1"
// console.log(baseNeg2(2)) // Output: "110"
// console.log(baseNeg2(3)) // Output: "111"
// console.log(baseNeg2(4)) // Output: "100"
// console.log(baseNeg2(5)) // Output: "101"
// console.log(baseNeg2(6)) // Output: "11010"
// console.log(baseNeg2(7)) // Output: "11011"
// console.log(baseNeg2(8)) // Output: "11000"
console.log(baseNeg2(9)) // Output: "11001"
// console.log(baseNeg2(10)) // Output: "11110"
// console.log(baseNeg2(11)) // Output: "11111"
// console.log(baseNeg2(12)) // Output: "11100"


        //     0           0
        //     1           1

        //   100           4
        //   101           5
        //   110           2
        //   111           3

        // 10000           16
        // 10001           17
        // 10010           14
        // 10011           15
        // 10100           20
        // 10101           21
        // 10110           18
        // 10111           19
        // 11000           8
        // 11001           9
        // 11010           6
        // 11011           7
        // 11100           12
        // 11101           13
        // 11110           10
        // 11111           11
