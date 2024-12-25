// 166. Fraction to Recurring Decimal

// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

// If the fractional part is repeating, enclose the repeating part in parentheses.

// If multiple answers are possible, return any of them.

// It is guaranteed that the length of the answer string is less than 10^4 for all the given inputs.


// Example 1:

// Input: numerator = 1, denominator = 2
// Output: "0.5"

// Example 2:

// Input: numerator = 2, denominator = 1
// Output: "2"

// Example 3:

// Input: numerator = 2, denominator = 3
// Output: "0.(6)"

// Example 4:

// Input: numerator = 4, denominator = 333
// Output: "0.(012)"

// Example 5:

// Input: numerator = 1, denominator = 5
// Output: "0.2"


// Constraints:

// -2^31 <= numerator, denominator <= 2^31 - 1
// denominator != 0

function fractionToDecimal(numerator: number, denominator: number): string {
    let integerPart: string = ""
    let decimalPart: string = ""
    if (numerator < denominator)    { integerPart = "0"; numerator *= 10 }
    while (numerator < denominator) { decimalPart += "0"; numerator *= 10 }

    while (true) {
        console.log(`${numerator}/${denominator} = ${numerator/denominator}`)
        let digit: number = Math.trunc(numerator / denominator)
        decimalPart += digit.toString()

        let remainder = numerator % denominator
        numerator = remainder
        if (digit == 0) {
            numerator *= 10
        }

        if (remainder == 0) {
            break
        }
        if (decimalPart.length > Math.pow(10,1)) {
            break
        }
    }

    if (decimalPart.length > 0) {
        // Look for a repeating decimal
        console.log(decimalPart)
        // Case 1: 0.xxxxxxxx
        let singleDigitRepeats: boolean = true
        for (let i = 0; i < decimalPart.length; i++) {
            if (decimalPart[i] != decimalPart[0]) {
                singleDigitRepeats = false
                break
            }
        }
        if (singleDigitRepeats) {
            decimalPart = `(${decimalPart[0]})`
        }

        // Case 2: 0.xyzxyzxyzxyz
        let multipleDigitsRepeat: boolean = false
        let repeatingEnd: number = 0
        for (let i = 1; i < decimalPart.length; i++) {
            if (decimalPart[i] == decimalPart[0]) {
                multipleDigitsRepeat = true
                repeatingEnd = i
                break
            }
        }
        if (multipleDigitsRepeat) {
            decimalPart = `(${decimalPart.slice(0, repeatingEnd)})`
        }

        return `${integerPart}.${decimalPart}`
    }
    else {
        return integerPart
    }
};

// console.log(fractionToDecimal(1,2))
// // Output: "0.5"

// console.log(fractionToDecimal(2,1))
// // Output: "2"

// console.log(fractionToDecimal(2,3))
// Output: "0.(6)"

console.log(fractionToDecimal(4,333))
// Output: "0.(012)"

// console.log(fractionToDecimal(1,5))
// Output: "0.2"
